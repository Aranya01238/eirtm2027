import React from 'react';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

// Importing images directly from the path you provided
// The '@' alias usually stands for the 'src' folder in React projects
import atlantisLogo from "@/assets/atlantis.png";
import springerLogo from "@/assets/springer.png";

const ConferenceProceedingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-slate-900 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">
            Conference Proceedings
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Access information regarding the publication of accepted research papers.
          </p>
        </motion.div>

        {/* Publication Info Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-10 md:p-14 shadow-lg border-t-4 border-t-blue-500 bg-white text-center">
            
            <BookOpen className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              Publication Partners
            </h2>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              The conference proceedings will be published in <span className="font-semibold text-blue-700">Atlantis Press</span>, part of <span className="font-semibold text-blue-700">Springer Nature</span>.
            </p>

            {/* Logos Row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 grayscale hover:grayscale-0 transition-all duration-500">
              
              {/* Logo 1: Atlantis Press */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="h-32 w-64 flex items-center justify-center p-4 bg-slate-50 rounded-lg border hover:shadow-md transition-shadow">
                  {/* Using the imported image variable */}
                  <img 
                    src={atlantisLogo}
                    alt="Atlantis Press" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">Atlantis Press</span>
              </div>

              {/* Divider (Hidden on mobile) */}
              <div className="hidden md:block h-16 w-px bg-slate-200"></div>

              {/* Logo 2: Springer Nature */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="h-32 w-64 flex items-center justify-center p-4 bg-slate-50 rounded-lg border hover:shadow-md transition-shadow">
                  {/* Using the imported image variable */}
                  <img 
                    src={springerLogo}
                    alt="Springer Nature" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">Springer Nature</span>
              </div>

            </div>
          </Card>
        </motion.div>

        {/* Additional Info / Footer note */}
        <p className="text-center text-slate-500 mt-12 italic">
          * All accepted papers must be presented at the conference to be included in the proceedings.
        </p>

      </div>
    </div>
  );
};

export default ConferenceProceedingsPage;
