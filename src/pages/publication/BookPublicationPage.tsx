import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const BookPublicationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-slate-900 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">
            Book/Book Publication
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Publication opportunities and partner information for books and
            edited volumes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Card className="p-10 md:p-14 shadow-lg border-t-4 border-t-cyan-500 bg-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              Book/Book Publication
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="flex flex-col items-center gap-4 group">
                <div className="h-32 w-full flex items-center justify-center p-4 bg-amber-800 rounded-lg border border-amber-900 hover:shadow-md transition-shadow overflow-hidden">
                  <img
                    src="/CFP OF ICETPS (1).png"
                    alt="Book Publication Logo 1"
                    className="max-h-full max-w-full object-contain scale-[1.75]"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 group">
                <div className="h-32 w-full flex items-center justify-center p-4 bg-amber-800 rounded-lg border border-amber-900 hover:shadow-md transition-shadow overflow-hidden">
                  <img
                    src="/CFP OF ICETPS (2).png"
                    alt="Book Publication Logo 2"
                    className="max-h-full max-w-full object-contain scale-[1.75]"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 group">
                <div className="h-32 w-full flex items-center justify-center p-4 bg-amber-800 rounded-lg border border-amber-900 hover:shadow-md transition-shadow overflow-hidden">
                  <img
                    src="/CFP OF ICETPS (3).png"
                    alt="Book Publication Logo 3"
                    className="max-h-full max-w-full object-contain scale-[1.75]"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BookPublicationPage;
