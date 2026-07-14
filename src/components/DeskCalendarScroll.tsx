// src/components/DeskCalendarScroll.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Update these imports if your asset paths differ
import decImg from "@/assets/dec-2025.png";
import janImg from "@/assets/jan-2026.png";
import marImg from "@/assets/mar-2026.png";
import aprImg from "@/assets/apr-2026.png";

type CalendarPage = {
  month: number;
  year: number;
  imageSrc: string;
  imageAlt?: string;
};

const PAGES: CalendarPage[] = [
  { month: 11, year: 2025, imageSrc: decImg, imageAlt: "December 2025" },
  { month: 0, year: 2027, imageSrc: janImg, imageAlt: "January 2027" },
  { month: 2, year: 2027, imageSrc: marImg, imageAlt: "March 2027" },
  { month: 3, year: 2027, imageSrc: aprImg, imageAlt: "April 2027" },
];

export default function DeskCalendarScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const pagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    // keep refs length consistent
    pagesRef.current = pagesRef.current.slice(0, PAGES.length);

    // remove old triggers (HMR safety)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // timeline pinned to the calendar; duration depends on number of pages
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * (PAGES.length + 1)}`,
        scrub: 0.6,
        pin: calendarRef.current,
        anticipatePin: 1,
      },
    });

    // For each page animate rotationY from 0 to -180 sequentially
    PAGES.forEach((_, i) => {
      const page = pagesRef.current[i];
      if (!page) return;

      gsap.set(page, {
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        perspective: 1200,
        backfaceVisibility: "hidden",
      });

      tl.to(
        page,
        {
          rotationY: -180,
          duration: 1,
          ease: "power2.inOut",
          onStart: () => {
            // adjust z-index so the turning page sits above the others
            pagesRef.current.forEach((p, idx) => {
              if (!p) return;
              p.style.zIndex = idx === i ? `${200 + i}` : `${100 - idx}`;
            });
          },
        },
        i * 1 // stagger by 1 timeline unit per page
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const setPageRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) pagesRef.current[idx] = el;
  };

  return (
    <div ref={containerRef} className="w-full bg-[#f6f4f2]">
      {/* top spacer so pin feels natural */}
      <div className="h-screen" />

      <div className="w-full flex justify-center items-center">
        <div ref={calendarRef} className="w-[420px] h-[600px] relative" style={{ perspective: 1200 }}>
          {/* backboard / cardboard */}
          <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-[#e7d5c2] to-[#d4bca3] border-[8px] border-[#bfa184] shadow-xl" />

          {/* pages (stacked). index 0 is top-most page initially */}
          {PAGES.map((p, i) => (
            <div
              key={`${p.month}-${p.year}`}
              ref={(el) => setPageRef(el, i)}
              className="absolute inset-4 rounded-2xl shadow-2xl bg-white border-[6px] border-[#d7c7b7] overflow-hidden flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                zIndex: `${100 - i}`,
              }}
            >
              {/* front face */}
              <div
                aria-hidden={false}
                className="w-full h-full flex items-center justify-center"
                style={{
                  position: "absolute",
                  inset: 0,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <img src={p.imageSrc} alt={p.imageAlt ?? `Calendar ${i}`} className="w-full h-full object-cover" />
              </div>

              {/* back face (mirrored) */}
              <div
                aria-hidden={true}
                className="w-full h-full flex items-center justify-center"
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <img src={p.imageSrc} alt={p.imageAlt ?? `Calendar back ${i}`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}

          {/* bottom stand */}
          <div className="absolute left-0 right-0 bottom-[-10px] h-16 bg-[#c8b7a6] rounded-b-2xl shadow-xl" />
        </div>
      </div>

      {/* bottom spacer to provide scroll length for the pin scrub */}
      <div className="h-[200vh]" />
    </div>
  );
}
