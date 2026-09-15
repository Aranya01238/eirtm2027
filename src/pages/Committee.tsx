import { Clock, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const Committee = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950 to-sky-900" />
      <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        <div className="rounded-3xl border border-white/20 bg-white/[0.08] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-12">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 shadow-[0_0_45px_rgba(56,189,248,0.45)]">
            <Users className="h-10 w-10 text-white" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/20 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              EIRTM 2027
            </span>
          </div>

          <h1 className="mb-3 bg-gradient-to-r from-cyan-300 via-sky-100 to-white bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
            Coming Soon
          </h1>
          <div className="mx-auto mb-5 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <h2 className="mb-4 text-xl font-semibold text-white/90">
            Conference Committees
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-white/60">
            The organizing, advisory, technical, and publication committees
            for EIRTM 2027 are being finalized. Their profiles will be
            announced shortly.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/45">
            <Clock className="h-4 w-4" />
            <span>Committee announcements opening soon</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Committee;
