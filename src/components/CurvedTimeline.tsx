// Vertical Path Timeline — Cleaned & Fixed (no stray returns, marker removed)

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Users, BookOpen, Award } from "lucide-react";

const timelineData = [
  { id: 1, title: "Full Paper Submission", date: "10th December, 2025", description: "Submit your research papers for peer review and selection.", icon: Calendar },
  { id: 2, title: "Acceptance Notification", date: "10th January, 2026", description: "Receive official notification of accepted papers and next steps.", icon: Award },
  { id: 3, title: "Registration Deadline", date: "20th March, 2026", description: "Final deadline to complete conference registration and payment.", icon: Users },
  { id: 4, title: "Presentation Submission", date: "20th March, 2026", description: "Upload your final presentation slides or poster content.", icon: BookOpen },
  { id: 5, title: "Conference Begins", date: "21st – 23rd April, 2026", description: "The main event begins: keynote speeches and paper presentations.", icon: MapPin },
  { id: 6, title: "Post-Conference Proceedings", date: "30th May, 2026", description: "Online access to all recorded sessions and final proceedings.", icon: BookOpen },
];

type TimelineItemProps = {
  item: { id: number; title: string; date: string; description: string; icon: React.ComponentType<{ className?: string }> };
  isLeft: boolean;
  topPosition: number;
  horizontalClass: string;
  refCallback?: (el: HTMLDivElement | null) => void;
};

const TimelineItem = ({ item, isLeft, topPosition, horizontalClass, refCallback }: TimelineItemProps) => {
  return (
    <motion.div
      className={`absolute w-full md:w-1/2 transition-transform duration-500 ${horizontalClass}`}
      style={{ top: `${topPosition}px`, transform: `translateY(-50%)` }}
      ref={refCallback}
    >
      <div className={`flex w-full h-full justify-center ${isLeft ? 'md:justify-end md:pr-10' : 'md:justify-start md:pl-10'}`}>
        <div className="w-full max-w-sm lg:max-w-md p-6 bg-white border border-gray-100 shadow-xl rounded-xl transition duration-300 hover:shadow-2xl hover:border-indigo-400 z-10">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 leading-tight">{item.title}</h3>
          </div>
          <p className="text-sm text-indigo-700 font-semibold mb-2">{item.date}</p>
          <p className="text-gray-600 text-base">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function VerticalPathTimeline() {
  const timelineRef = useRef(null);
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContentRef = useRef<HTMLDivElement | null>(null);

  const itemVerticalSpacing = 320;
  const totalItems = timelineData.length;
  const initialBuffer = 100;
  const finalBuffer = 100;
  const pathYEnd = initialBuffer + (totalItems - 1) * itemVerticalSpacing;
  const svgHeight = pathYEnd + finalBuffer;

  const curvePoints = useRef([]);
  const generateCurvePath = () => {
    const leftX = 0; // start at left edge
    const rightX = 100; // go to right edge
    const cLeft = 25; // left control x
    const cRight = 75; // right control x

    let p = `M ${leftX} ${initialBuffer}`;
    curvePoints.current = [{ x: leftX, y: initialBuffer }];

    for (let i = 1; i < totalItems; i++) {
      const y = initialBuffer + i * itemVerticalSpacing;
      const prevY = initialBuffer + (i - 1) * itemVerticalSpacing;

      if (i % 2 !== 0) {
        // curve to right side
        p += ` C ${cLeft} ${prevY + itemVerticalSpacing * 0.5}, ${cRight} ${y - itemVerticalSpacing * 0.5}, ${rightX} ${y}`;
        curvePoints.current.push({ x: rightX, y });
      } else {
        // curve back to left side
        p += ` C ${cRight} ${prevY + itemVerticalSpacing * 0.5}, ${cLeft} ${y - itemVerticalSpacing * 0.5}, ${leftX} ${y}`;
        curvePoints.current.push({ x: leftX, y });
      }
    }

    return p;
  };

  const curveD = generateCurvePath();
  const minScrollHeight = `${Math.ceil(svgHeight / 16) + 10}rem`;

  useEffect(() => {
    if (!pathRef.current || !timelineRef.current) return;

    // Register plugin if needed
    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;

    const setLength = () => {
      try {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      } catch (e) {
        return;
      }
    };

    setLength();
    window.addEventListener('resize', setLength);

    const scrollDistance = Math.max(0, svgHeight - window.innerHeight);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(path, { strokeDashoffset: 0, ease: "none" });
    if (scrollContentRef.current) {
      tl.to(scrollContentRef.current, { y: -scrollDistance, ease: "none" }, 0);
    }

    const len = path.getTotalLength();
    const revealLengths: number[] = [];
    curvePoints.current.forEach((pt) => {
      let bestDist = Infinity;
      let bestLen = 0;
      for (let L = 0; L <= len; L += 5) {
        const p = path.getPointAtLength(L);
        const dx = p.x - pt.x;
        const dy = p.y - pt.y;
        const d = dx * dx + dy * dy;
        if (d < bestDist) {
          bestDist = d;
          bestLen = L;
        }
      }
      revealLengths.push(bestLen);
    });

    gsap.set(cardRefs.current, { opacity: 0, y: 20 });
    gsap.set(circleRefs.current, { opacity: 0, scale: 0.6 });

    tl.eventCallback("onUpdate", () => {
      const st = tl.scrollTrigger;
      if (!st) return;
      const drawn = st.progress * len;
      revealLengths.forEach((L, i) => {
        const show = drawn >= L - 2; // small tolerance
        const card = cardRefs.current[i];
        const circle = circleRefs.current[i];
        if (!card || !circle) return;
        gsap.to(card, { opacity: show ? 1 : 0, y: show ? 0 : 20, duration: 0.25, ease: "power1.out" });
        gsap.to(circle, { opacity: show ? 1 : 0, scale: show ? 1 : 0.6, duration: 0.2, ease: "power1.out" });
      });
    });

    return () => {
      window.removeEventListener('resize', setLength);
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, [svgHeight]);

  return (
    <div className="bg-gray-50 py-20 font-sans" style={{ minHeight: minScrollHeight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Conference Milestones</h1>
        <p className="text-center text-xl text-cyan-600 mb-20 max-w-3xl mx-auto">Scroll down to follow the path of our upcoming global conference.</p>

        <div ref={timelineRef} className="relative mx-auto w-full h-screen overflow-hidden">
          <div ref={scrollContentRef} className="absolute inset-0">
            <svg
              ref={svgRef}
              className="absolute left-0 h-full w-full z-0 hidden md:block"
              viewBox={`0 0 100 ${svgHeight}`}
              preserveAspectRatio="none"
              style={{ top: 0, height: `${svgHeight}px` }}
            >
              <path d={curveD} stroke="#e5e7eb" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path id="timelineAnimatedPath" ref={pathRef} d={curveD} stroke="#00d9ffff" strokeWidth="6" fill="none" strokeLinecap="round" />

              {curvePoints.current.map((pt, i) => (
                <circle
                  key={`s-${i}`}
                  ref={(el) => (circleRefs.current[i] = el)}
                  cx={pt.x}
                  cy={pt.y}
                  r="8"
                  fill="#4f46e5"
                  stroke="#fff"
                  strokeWidth="4"
                  opacity="0"
                />
              ))}

            </svg>

            <div className="w-full h-full relative" style={{ height: `${svgHeight}px` }}>
              {timelineData.map((item, index) => {
              const top = initialBuffer + index * itemVerticalSpacing;
              const isLeft = index % 2 === 0;
              const hc = isLeft ? "left-0" : "right-0";
              return (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLeft={isLeft}
                  topPosition={top}
                  horizontalClass={hc}
                  refCallback={(el: HTMLDivElement | null) => (cardRefs.current[index] = el)}
                />
              );
            })}
              {timelineData.map((_, index) => {
                const top = initialBuffer + index * itemVerticalSpacing;
                return (
                  <div
                    key={`m-${index}`}
                    ref={(el) => (markerRefs.current[index] = el)}
                    className="absolute left-0 w-px h-px"
                    style={{ top: `${top}px` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
