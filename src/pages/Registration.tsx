import { motion } from "framer-motion";
import { Clock, ArrowLeft, Sparkles, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-950 to-sky-900" />

      {/* Floating orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/6 w-96 h-96 rounded-full bg-cyan-500/25 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/6 w-80 h-80 rounded-full bg-sky-400/25 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-teal-600/10 blur-3xl pointer-events-none"
      />

      {/* Stars / particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 1, 0], y: [0, -20, 0] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.35 }}
          className="absolute w-1 h-1 rounded-full bg-cyan-300/60 pointer-events-none"
          style={{
            left: `${8 + (i * 5.2) % 88}%`,
            top: `${10 + (i * 7.3) % 80}%`,
          }}
        />
      ))}

      {/* Glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-xl w-full mx-4 text-center"
      >
        <div className="backdrop-blur-2xl bg-white/[0.07] border border-white/20 rounded-3xl p-12 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">

          {/* Glowing icon */}
          <motion.div
            animate={{ boxShadow: ["0 0 30px rgba(56,189,248,0.4)", "0 0 60px rgba(56,189,248,0.7)", "0 0 30px rgba(56,189,248,0.4)"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 mb-8 mx-auto"
          >
            <ClipboardList className="w-10 h-10 text-white" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/40 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span className="text-cyan-200 text-xs font-semibold tracking-[0.2em] uppercase">EIRTM 2027</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-white mb-3"
          >
            Coming Soon
          </motion.h1>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-5" />

          {/* Sub heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-semibold text-white/90 mb-3"
          >
            Registration Portal
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/55 leading-relaxed mb-10 text-sm"
          >
            Registration for the{" "}
            <span className="text-cyan-300 font-medium">
              European Congress on Interdisciplinary Research in Technology and Management
            </span>{" "}
            will open shortly. Please check back soon.
          </motion.p>

          {/* Clock row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-2 text-white/40 text-xs mb-8"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Opening April 2027</span>
          </motion.div>

          {/* Back button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-semibold px-8 py-3 rounded-xl shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-all duration-300 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Registration;
