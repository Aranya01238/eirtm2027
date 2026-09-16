import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import springerLogo from "@/assets/springer.png";

const ConferenceProceedingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 px-4 pb-16 pt-24 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            EIRTM 2027
          </span>
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Conference Proceedings
          </h1>
          <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="overflow-hidden border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]">
            <div className="flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-slate-50 to-blue-50 p-8 text-center md:p-12">
              <div className="flex h-24 w-full max-w-[320px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:h-28">
                <img
                  src={springerLogo}
                  alt="Springer"
                  className="max-h-16 w-full object-contain md:max-h-20"
                />
              </div>

              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Official publication partner
                </p>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
                  Springer Nature
                </h2>
                <p className="text-base leading-7 text-slate-600 md:text-lg">
                  Accepted and selected papers will be published through the Springer platform, supporting international visibility, rigorous peer review, and strong academic recognition.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ConferenceProceedingsPage;
