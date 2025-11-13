// Vertical Path Timeline — Cleaned & Fixed (no stray returns, marker removed)

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, BookOpen, Award } from "lucide-react";

const timelineData = [
  { id: 1, title: "Full Paper Submission", date: "10th December, 2025", description: "Submit your research papers for peer review and selection.", icon: Calendar },
  { id: 2, title: "Acceptance Notification", date: "10th January, 2026", description: "Receive official notification of accepted papers and next steps.", icon: Award },
  { id: 3, title: "Registration Deadline", date: "20th March, 2026", description: "Final deadline to complete conference registration and payment.", icon: Users },
  { id: 4, title: "Presentation Submission", date: "20th March, 2026", description: "Upload your final presentation slides or poster content.", icon: BookOpen },
  { id: 5, title: "Conference Begins", date: "21st – 23rd April, 2026", description: "The main event begins: keynote speeches and paper presentations.", icon: MapPin },
  { id: 6, title: "Post-Conference Proceedings", date: "30th May, 2026", description: "Online access to all recorded sessions and final proceedings.", icon: BookOpen },
];

const TimelineItem = ({ item, isLeft, topPosition, horizontalClass }) => {
  const variants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  return (
    <motion.div
      className={`absolute w-full md:w-1/2 transition-transform duration-500 ${horizontalClass}`}
      style={{ top: `${topPosition}px`, transform: `translateY(-50%)` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
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

  const itemVerticalSpacing = 320;
  const totalItems = timelineData.length;
  const initialBuffer = 100;
  const finalBuffer = 100;
  const pathYEnd = initialBuffer + (totalItems - 1) * itemVerticalSpacing;
  const svgHeight = pathYEnd + finalBuffer;

  const curvePoints = useRef([]);
  const generateCurvePath = () => {
    let p = `M 100 ${initialBuffer}`;
    curvePoints.current = [{ x: 100, y: initialBuffer }];

    for (let i = 1; i < totalItems; i++) {
      const y = initialBuffer + i * itemVerticalSpacing;
      const prevY = initialBuffer + (i - 1) * itemVerticalSpacing;

      if (i % 2 !== 0) {
        p += ` C 100 ${prevY + itemVerticalSpacing * 0.5}, 150 ${y - itemVerticalSpacing * 0.5}, 150 ${y}`;
        curvePoints.current.push({ x: 150, y });
      } else {
        p += ` C 150 ${prevY + itemVerticalSpacing * 0.5}, 50 ${y - itemVerticalSpacing * 0.5}, 50 ${y}`;
        curvePoints.current.push({ x: 50, y });
      }
    }

    return p;
  };

  const curveD = generateCurvePath();
  const minScrollHeight = `${Math.ceil(svgHeight / 16) + 10}rem`;

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger || !pathRef.current) return;

    // Register plugin if needed
    if (gsap && ScrollTrigger && typeof gsap.registerPlugin === 'function') {
      try { gsap.registerPlugin(ScrollTrigger); } catch (e) {}
    }

    const path = pathRef.current;

    const setLength = () => {
      try {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      } catch (e) {
        // path not ready yet
      }
    };

    setLength();
    window.addEventListener('resize', setLength);

    const anim = ScrollTrigger.create({
      trigger: timelineRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      animation: gsap.to(path, { strokeDashoffset: 0, ease: "none" })
    });

    return () => {
      window.removeEventListener('resize', setLength);
      if (anim) anim.kill();
    };
  }, []);

  return (
    <div className="bg-gray-50 py-20 font-sans" style={{ minHeight: minScrollHeight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Conference Milestones</h1>
        <p className="text-center text-xl text-cyan-600 mb-20 max-w-3xl mx-auto">Scroll down to follow the path of our upcoming global conference.</p>

        <div ref={timelineRef} className="relative mx-auto max-w-xl md:max-w-4xl" style={{ height: `${svgHeight}px` }}>
          <svg ref={svgRef} className="absolute left-1/2 transform -translate-x-1/2 h-full w-[200px] z-0 hidden md:block" viewBox={`0 0 200 ${svgHeight}`} style={{ top: 0, height: `${svgHeight}px` }}>
            <path d={curveD} stroke="#e5e7eb" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path id="timelineAnimatedPath" ref={pathRef} d={curveD} stroke="#00d9ffff" strokeWidth="6" fill="none" strokeLinecap="round" />

            {curvePoints.current.map((pt, i) => (
              <circle key={`s-${i}`} cx={pt.x} cy={pt.y} r="8" fill="#4f46e5" stroke="#fff" strokeWidth="4" />
            ))}

          </svg>

          <div className="w-full h-full relative">
            {timelineData.map((item, index) => {
              const top = initialBuffer + index * itemVerticalSpacing;
              const isLeft = index % 2 === 0;
              const hc = isLeft ? "left-0" : "right-0";
              return <TimelineItem key={item.id} item={item} isLeft={isLeft} topPosition={top} horizontalClass={hc} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
