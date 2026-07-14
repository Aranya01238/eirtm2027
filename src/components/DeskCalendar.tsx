import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CalendarPage = {
  month: number; // 0-11
  year: number;
  imageSrc: string;
  imageAlt?: string;
};

// Import images from src/assets so they resolve correctly in Vite
import decImg from "@/assets/dec-2025.png";
import janImg from "@/assets/jan-2026.png";
import marImg from "@/assets/mar-2026.png";
import aprImg from "@/assets/apr-2026.png";

// Configure only the months you want to show and attach an image per page.
// Using imported asset URLs avoids the need to place files in public.
const PAGES: CalendarPage[] = [
  { month: 11, year: 2025, imageSrc: decImg, imageAlt: "December 2025" },
  { month: 0, year: 2027, imageSrc: janImg, imageAlt: "January 2027" },
  { month: 2, year: 2027, imageSrc: marImg, imageAlt: "March 2027" },
  { month: 3, year: 2027, imageSrc: aprImg, imageAlt: "April 2027" },
];

export default function DeskCalendar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTurning, setIsTurning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const currentPage = PAGES[currentIndex];
  const holes = Array.from({ length: 10 });

  // Image-only calendar: no weekday labels or date grid

  return (
    <div className="w-full flex justify-center py-10 bg-[#f6f4f2]">
      <div className="w-[420px] h-[600px] perspective-1000">
        <div className="relative w-full h-full transform-style-preserve-3d">
          {/* Fixed binding row with arrows and spiral bar */}
          <div className="relative flex items-center gap-3 py-1 z-20">
            <button
              onClick={() => {
                if (isTurning) return;
                setDirection("prev");
                setIsTurning(true);
              }}
              className="text-2xl z-10"
              aria-label="Previous page"
            >
              ◀
            </button>
            {/* Spiral binding bar with holes aligned on the same row */}
            <div className="relative flex-1 h-6 mx-1">
              {/* Binding bar */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-[#cdb79f] to-[#9e856c] shadow-md" />
              {/* Holes */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
                {holes.map((_, i) => (
                  <div key={i} className="relative flex items-center justify-center">
                    {/* Hole */}
                    <span className="w-4 h-4 rounded-full bg-[#3b2d23] ring-2 ring-[#b9a391] shadow" />
                    {/* Wire rod protruding from hole */}
                    <span className="absolute -top-10 w-[3px] h-12 bg-[#3b2d23] rounded-full shadow-sm" />
                  </div>
                ))}
              </div>
              <span className="sr-only">{currentPage.imageAlt ?? "Calendar page"}</span>
            </div>
            <button
              onClick={() => {
                if (isTurning) return;
                setDirection("next");
                setIsTurning(true);
              }}
              className="text-2xl z-10"
              aria-label="Next page"
            >
              ▶
            </button>
          </div>

          {/* Pages area: single turning page with cardboard backboard */}
          <div className="relative w-full h-[520px] mt-2">
            {/* Cardboard backboard behind the page, with punched holes */}
            <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-[#e7d5c2] to-[#d4bca3] border-[8px] border-[#bfa184] shadow-xl">
              {/* Punched holes on cardboard to align with binding */}
              <div className="pointer-events-none absolute top-1 left-0 right-0 flex items-center justify-between px-4">
                {holes.map((_, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full bg-[#3b2d23] ring-2 ring-[#a6886b] shadow-inner"
                  />
                ))}
              </div>
            </div>
            {/* Turning page, hinged at the top center */}
            <motion.div
              className="absolute inset-2 z-10 bg-white border-[6px] border-[#d7c7b7] rounded-2xl shadow-2xl p-4 font-serif tracking-wide"
              style={{ backfaceVisibility: "hidden", transformOrigin: "top center" }}
              initial={false}
              animate={{
                rotateX: isTurning ? (direction === "next" ? 160 : -160) : 0,
                opacity: 1,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onAnimationComplete={() => {
                if (isTurning) {
                  setCurrentIndex((i) =>
                    direction === "next"
                      ? (i + 1) % PAGES.length
                      : (i - 1 + PAGES.length) % PAGES.length,
                  );
                  setIsTurning(false);
                }
              }}
            >
              <div className="mt-2 border-[3px] border-[#cbb8a8] p-3 rounded-xl bg-[#e9dfd6]">
                <div className="w-full h-[420px] flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src={currentPage.imageSrc}
                    alt={currentPage.imageAlt ?? "Calendar Art"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full h-24 bg-[#c8b7a6] rounded-b-2xl shadow-xl mt-[-10px]"></div>
      </div>
    </div>
  );
}

// CSS utilities should exist globally:
// .perspective-1000 { perspective: 1000px; }
// .transform-style-preserve-3d { transform-style: preserve-3d; }