import React from "react";
import { BookOpen, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const VolumeEditorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] mb-4">
          Volume Editors
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-8 rounded"></div>
        <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed mb-20">
          The <span className="font-semibold text-sky-600">Volume Editors</span>{" "}
          for <span className="font-semibold text-sky-600">ICEBM 2026</span>{" "}
          will be announced soon. Our editorial board will consist of
          distinguished scholars and researchers ensuring high-quality
          publications in reputed journals and proceedings.
        </p>

        {/* Placeholder Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white border border-cyan-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-[0_0_25px_#38bdf8] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-cyan-400 blur-2xl opacity-20"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center mb-6 shadow-[0_0_20px_#06b6d4]">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-sky-700 mb-2">
                  To Be Announced
                </h3>
                <p className="text-cyan-600 font-medium">
                  Volume Editor – ICEBM 2026
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-cyan-500 to-sky-500 text-white py-16 px-6 rounded-3xl shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Coming Soon
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            Stay tuned as we announce the esteemed{" "}
            <span className="font-semibold">Volume Editors</span> for ICEBM
            2026. The announcement will be made in{" "}
            <span className="font-semibold text-yellow-200">March 2026</span>.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-white/90">
            <Calendar className="h-5 w-5" />
            <p className="text-lg font-medium">
              Announcement Timeline: March 2026
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VolumeEditorsPage;
