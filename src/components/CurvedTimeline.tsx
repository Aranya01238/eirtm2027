import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Users, BookOpen, Award } from "lucide-react";

const timelineData = [
  { id: 1, title: "Full Paper Submission", date: "30 Jan, 2026", description: "Submit research papers.", icon: Calendar },
  { id: 2, title: "Acceptance Notification", date: "10 Feb, 2026", description: "Notification of accepted papers.", icon: Award },
  { id: 3, title: "Registration Deadline", date: "20 Mar, 2026", description: "Deadline for registration.", icon: Users },
  { id: 4, title: "Presentation Submission", date: "20 Mar, 2026", description: "Upload slides or posters.", icon: BookOpen },
  { id: 5, title: "Conference Begins", date: "21-23 Apr, 2026", description: "Keynote speeches start.", icon: MapPin },
  { id: 6, title: "Post-Conference", date: "30 May, 2026", description: "Recorded sessions available.", icon: BookOpen },
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
      className={`absolute w-full md:w-1/2 flex items-center ${horizontalClass}`}
      style={{ top: `${topPosition}px`, transform: `translateY(-50%)` }}
      ref={refCallback}
    >
      {/* Connector Line */}
      <div 
        className={`hidden md:block absolute top-1/2 h-[2px] bg-cyan-900/50 w-6 
        ${isLeft ? 'right-0 mr-[6px]' : 'left-0 ml-[6px]'}`} 
      />

      <div className={`flex w-full justify-center ${isLeft ? 'md:justify-end md:pr-10' : 'md:justify-start md:pl-10'}`}>
        {/* Compact Card */}
        <div className="relative group w-full max-w-[280px] bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-[0_4px_20px_rgb(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-cyan-500/10 z-10">
          
          {/* Header Section */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="w-6 h-6 rounded bg-slate-700 text-cyan-400 flex items-center justify-center shadow-sm">
              <item.icon className="w-3.5 h-3.5" />
            </div>
            <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-cyan-300 bg-cyan-900/30 border border-cyan-900/50 rounded-full uppercase">
              {item.date}
            </span>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-sm font-bold text-white leading-tight mb-0.5 group-hover:text-cyan-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-[10px] text-slate-400 leading-snug">
              {item.description}
            </p>
          </div>
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContentRef = useRef<HTMLDivElement | null>(null);

  // --- EXTREMELY COMPACT SETTINGS ---
  const itemVerticalSpacing = 110; // Tight spacing to fit 6 items closely
  const initialBuffer = 60;        // Start closer to the top
  const finalBuffer = 120;         // End closer to the bottom
  const viewHeight = 400;          // Fixed height of the window (px)
  // ---------------------------------

  const totalItems = timelineData.length;
  const pathYEnd = initialBuffer + (totalItems - 1) * itemVerticalSpacing;
  const svgHeight = pathYEnd + finalBuffer;

  // PATH GENERATION
  const curvePoints = useRef<{x:number, y:number}[]>([]);
  
  const generateCurvePath = () => {
    const centerLine = 50;
    const deviation = 6; // Slightly wider curve for better visual separation
    const leftX = centerLine - deviation; 
    const rightX = centerLine + deviation;
    const cLeft = centerLine - deviation; 
    const cRight = centerLine + deviation; 

    let p = `M ${leftX} ${initialBuffer}`;
    curvePoints.current = [{ x: leftX, y: initialBuffer }];

    for (let i = 1; i < totalItems; i++) {
      const y = initialBuffer + i * itemVerticalSpacing;
      const prevY = initialBuffer + (i - 1) * itemVerticalSpacing;

      if (i % 2 !== 0) {
        p += ` C ${cLeft} ${prevY + itemVerticalSpacing * 0.5}, ${cRight} ${y - itemVerticalSpacing * 0.5}, ${rightX} ${y}`;
        curvePoints.current.push({ x: rightX, y });
      } else {
        p += ` C ${cRight} ${prevY + itemVerticalSpacing * 0.5}, ${cLeft} ${y - itemVerticalSpacing * 0.5}, ${leftX} ${y}`;
        curvePoints.current.push({ x: leftX, y });
      }
    }
    return p;
  };

  const curveD = generateCurvePath();
  
  // Adjust outer container height based on content
  const minScrollHeight = `${Math.ceil(svgHeight / 14) + 5}rem`;

  useEffect(() => {
    if (!pathRef.current || !timelineRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const path = pathRef.current as SVGPathElement;

    const setLength = () => {
      try {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        return len;
      } catch (e) { return 0; }
    };
    
    let len = setLength();
    window.addEventListener('resize', () => { len = setLength(); });

    // Calculate exactly how much to scroll to see the bottom of the SVG
    const scrollDistance = Math.max(0, svgHeight - viewHeight); 
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "center center", // Triggers when the timeline box is in the center of the screen
        end: `+=${scrollDistance + 100}`, // Add a little extra buffer for feel
        scrub: 0.5,
        pin: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, ease: "none" });
    if (scrollContentRef.current) {
      tl.to(scrollContentRef.current, { y: -scrollDistance, ease: "none" }, 0);
    }

    const revealLengths: number[] = [];
    curvePoints.current.forEach((pt) => {
      let bestDist = Infinity;
      let bestLen = 0;
      for (let L = 0; L <= len; L += 2) {
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

    gsap.set(cardRefs.current, { opacity: 0, scale: 0.95, y: 20 });
    gsap.set(circleRefs.current, { opacity: 0, scale: 0 });

    tl.eventCallback("onUpdate", () => {
      const st = tl.scrollTrigger;
      if (!st) return;
      const drawn = st.progress * len;
      
      revealLengths.forEach((L, i) => {
        const isReached = drawn >= L - 20; // Reveal slightly earlier
        const card = cardRefs.current[i];
        const circle = circleRefs.current[i];
        
        if (card && circle) {
          if (isReached) {
             gsap.to(card, { opacity: 1, scale: 1, y: 0, duration: 0.3, overwrite: 'auto' });
             gsap.to(circle, { opacity: 1, scale: 1, duration: 0.2, overwrite: 'auto' });
          } else {
             gsap.to(card, { opacity: 0, scale: 0.95, y: 20, duration: 0.2, overwrite: 'auto' });
             gsap.to(circle, { opacity: 0, scale: 0, duration: 0.2, overwrite: 'auto' });
          }
        }
      });
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, [svgHeight]);

  return (
    <div className="bg-[#020617] py-8 font-sans" style={{ minHeight: minScrollHeight }}>
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">
            Conference <span className="text-cyan-400">Roadmap</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto">
            Key milestones and deadlines.
          </p>
        </div>

        {/* Timeline Window: Reduced height to 400px */}
        <div 
          ref={timelineRef} 
          className="relative mx-auto w-full overflow-hidden border-t border-b border-slate-800 bg-slate-900/50 rounded-2xl shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"
          style={{ height: `${viewHeight}px` }}
        >
          <div ref={scrollContentRef} className="absolute inset-0 w-full">
            
            <svg
              ref={svgRef}
              className="absolute left-0 h-full w-full z-0 hidden md:block"
              viewBox={`0 0 100 ${svgHeight}`}
              preserveAspectRatio="none"
              style={{ top: 0, height: `${svgHeight}px` }}
            >
              <path d={curveD} stroke="#1e293b" strokeWidth="2" fill="none" />
              
              <path 
                ref={pathRef} 
                d={curveD} 
                stroke="#06b6d4" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round"
                filter="drop-shadow(0 0 4px rgba(34, 211, 238, 0.5))"
              />

              {curvePoints.current.map((pt, i) => (
                <circle
                  key={`s-${i}`}
                  ref={(el) => (circleRefs.current[i] = el)}
                  cx={pt.x}
                  cy={pt.y}
                  r="5"
                  fill="#0f172a"
                  stroke="#22d3ee"
                  strokeWidth="3"
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
                    refCallback={(el) => (cardRefs.current[index] = el)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-2 text-slate-600 text-[10px] animate-pulse">
          Scroll to view
        </div>
      </div>
    </div>
  );
}
