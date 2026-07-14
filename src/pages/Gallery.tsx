import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import {
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const gallery2026Images = [
  "/Gallery_2026/photo_2026-07-14_23-02-55.jpg",
  "/Gallery_2026/photo_2026-07-14_23-02-59.jpg",
  "/Gallery_2026/photo_2026-07-14_23-03-04.jpg",
  "/Gallery_2026/photo_2026-07-14_23-03-08.jpg",
  "/Gallery_2026/photo_2026-07-14_23-03-11.jpg",
  "/Gallery_2026/photo_2026-07-14_23-03-14.jpg",
  "/Gallery_2026/photo_2026-07-14_23-03-17.jpg",
  "/Gallery_2026/photo_2026-07-14_23-03-20.jpg",
  "/Gallery_2026/photo_2026-07-14_23-03-24.jpg",
  "/Gallery_2026/photo_2026-07-14_23-03-27.jpg",
];

const TOTAL = gallery2026Images.length;
const ANGLE_STEP = 360 / TOTAL;
const RADIUS = 440;
const CARD_W = 320;
const CARD_H = 220;

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(() => setActiveIndex((i) => (i + 1) % TOTAL), []);
  const goPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + TOTAL) % TOTAL),
    [],
  );

  // Auto-rotate every 3 s
  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, 3000);
    return () => clearInterval(id);
  }, [paused, goNext]);

  const closeLightbox = () => setLightboxIndex(null);
  const lbPrev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + TOTAL) % TOTAL : null));
  const lbNext = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % TOTAL : null));

  return (
    <div className="min-h-screen pb-16 bg-gradient-to-b from-white to-slate-50">
      <div className="section-container pt-10">
        {/* -- Header -- */}
        <div className="text-center mb-14">
          <h1 className="text-primary mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore moments from previous EIRTM conferences and related events.
            Witness the collaboration, innovation, and networking that make
            EIRTM a premier academic gathering.
          </p>
        </div>

        {/* -- EIRTM 2026 3D Carousel -- */}
        <section className="mb-20">
          {/* Dark stage */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 px-4 pt-12 pb-10 shadow-2xl">
            {/* Ambient orbs */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-sky-400/10 blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-800/10 blur-3xl" />
            </div>

            {/* Heading */}
            <div className="relative z-10 text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-1.5 mb-4">
                <Camera className="h-4 w-4 text-cyan-300" />
                <span className="text-cyan-200 text-xs font-semibold tracking-[0.18em] uppercase">
                  Past Edition
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-white mb-2">
                EIRTM 2026
              </h2>
              <p className="text-white/50 text-sm">
                Conference Highlights &mdash; click the front card to view full
                size
              </p>
            </div>

            {/* 3D stage */}
            <div
              className="relative w-full flex items-center justify-center"
              style={{ height: 440 }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                style={{ perspective: "1300px", perspectiveOrigin: "50% 45%" }}
              >
                <div
                  style={{
                    width: CARD_W,
                    height: CARD_H,
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${-activeIndex * ANGLE_STEP}deg)`,
                    transition:
                      "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  {gallery2026Images.map((src, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <div
                        key={i}
                        onClick={() =>
                          isActive ? setLightboxIndex(i) : setActiveIndex(i)
                        }
                        style={{
                          position: "absolute",
                          width: CARD_W,
                          height: CARD_H,
                          left: 0,
                          top: 0,
                          transform: `rotateY(${i * ANGLE_STEP}deg) translateZ(${RADIUS}px)`,
                          cursor: "pointer",
                          borderRadius: 18,
                          overflow: "hidden",
                          boxShadow: isActive
                            ? "0 0 0 3px rgba(56,189,248,0.9), 0 28px 80px rgba(0,0,0,0.8), 0 0 50px rgba(56,189,248,0.3)"
                            : "0 8px 30px rgba(0,0,0,0.6)",
                          opacity: isActive ? 1 : 0.42,
                          transition: "opacity 0.5s, box-shadow 0.5s",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <img
                          src={src}
                          alt={`EIRTM 2026 Photo ${i + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            filter: isActive
                              ? "brightness(1) saturate(1.1)"
                              : "brightness(0.45) saturate(0.6)",
                            transition: "filter 0.5s",
                          }}
                        />
                        {isActive && (
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)",
                            }}
                          />
                        )}
                        {isActive && (
                          <div className="absolute bottom-3 right-3 bg-black/55 backdrop-blur-sm rounded-full p-1.5 text-white border border-white/25">
                            <Maximize2 className="h-4 w-4" />
                          </div>
                        )}
                        <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {i + 1} / {TOTAL}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Ground fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(2,32,52,0.7) 0%, transparent 100%)",
                }}
              />

              {/* Arrows */}
              <button
                onClick={() => {
                  setPaused(true);
                  goPrev();
                }}
                className="absolute left-3 sm:left-8 z-10 bg-white/10 hover:bg-cyan-400/20 border border-white/20 hover:border-cyan-400/50 text-white rounded-full p-3 shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-md"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => {
                  setPaused(true);
                  goNext();
                }}
                className="absolute right-3 sm:right-8 z-10 bg-white/10 hover:bg-cyan-400/20 border border-white/20 hover:border-cyan-400/50 text-white rounded-full p-3 shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-md"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="relative z-10 flex justify-center gap-2 mt-6">
              {gallery2026Images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setPaused(true);
                    setActiveIndex(i);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: 8,
                    width: i === activeIndex ? 32 : 8,
                    background:
                      i === activeIndex
                        ? "rgba(56,189,248,0.95)"
                        : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── EIRTM 2027 Coming Soon ── */}
        <Card className="p-8 mb-14 bg-secondary/10 border-l-4 border-l-secondary text-center">
          <ImageIcon className="h-14 w-14 text-secondary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">
            EIRTM 2027 Gallery – Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground">
            Photos from EIRTM 2027 will be uploaded here during and after the
            conference. Check back soon to see highlights from keynote sessions,
            paper presentations, networking events, and more.
          </p>
        </Card>

        {/* ── Stats ── */}
        <div className="mt-4 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            What to Expect at EIRTM 2027
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: "300+",
                label: "Expected Participants",
                sub: "Researchers and professionals from around the world",
                color: "primary",
              },
              {
                value: "50+",
                label: "Paper Presentations",
                sub: "Cutting-edge research across multiple domains",
                color: "secondary",
              },
              {
                value: "15+",
                label: "Keynote Sessions",
                sub: "Insights from industry leaders and academics",
                color: "primary",
              },
            ].map(({ value, label, sub, color }) => (
              <Card key={label} className="p-6 text-center">
                <div className={`bg-${color}/10 rounded-lg p-6 mb-4`}>
                  <h3 className={`text-4xl font-bold text-${color} mb-2`}>
                    {value}
                  </h3>
                  <p className="text-muted-foreground">{label}</p>
                </div>
                <p className="text-sm">{sub}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* ── Share moments ── */}
        <Card className="p-8 bg-muted border-t-4 border-t-primary">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Share Your EIRTM Moments
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Attended a previous EIRTM conference? We'd love to feature your
            photos in our gallery! Send your high-resolution images to us.
          </p>
          <p className="text-muted-foreground">
            Email:{" "}
            <a
              href="mailto:gallery@eirtm2027.org"
              className="text-primary hover:underline font-semibold"
            >
              gallery@eirtm2027.org
            </a>
          </p>
        </Card>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm px-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>
            <button
              className="absolute left-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                lbPrev();
              }}
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              src={gallery2026Images[lightboxIndex]}
              alt={`EIRTM 2026 Photo ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                lbNext();
              }}
            >
              <ChevronRight className="h-7 w-7" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
              {lightboxIndex + 1} / {TOTAL}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
