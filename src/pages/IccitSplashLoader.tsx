import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

// Define the component's props interface
interface SplashLoaderProps {
  children: React.ReactNode;
}

// Constants for timing
const LOAD_DURATION_MS = 5000; // Total loading time
const PROGRESS_INTERVAL_MS = 50; // Update frequency

// Use the defined interface for the component's props
export default function IccitSplashLoader({ children }: SplashLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [pulse, cyclePulse] = useCycle(1, 1.1);
  const [ringRotation, cycleRotation] = useCycle(0, 360);

  useEffect(() => {
    let startTime = Date.now();
    // Using any for NodeJS.Timeout/number to ensure maximum compatibility in generic React/Vite environments
    let interval: any; 
    
    // --- Progress Update Logic ---
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      // Calculate progress percentage, capped at 100
      const currentProgress = Math.min(100, Math.round((elapsed / LOAD_DURATION_MS) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Ensure progress is exactly 100 before setting loading to false
        setProgress(100);
        // Delay slighty after hitting 100% to show completion before fading out
        setTimeout(() => setLoading(false), 300);
      }
    };

    interval = setInterval(updateProgress, PROGRESS_INTERVAL_MS);

    // --- Animation Control (Subtle Pulsing) ---
    // Start pulse and rotation cycles
    const pulseTimer = setInterval(() => cyclePulse(), 1500);
    const rotationTimer = setInterval(() => cycleRotation(), 2000);

    // --- Cleanup and Fallback ---
    const finalTimer = setTimeout(() => {
      clearInterval(interval);
      clearInterval(pulseTimer);
      clearInterval(rotationTimer);
      setLoading(false); // Failsafe
    }, LOAD_DURATION_MS + 1000); // 1s buffer

    return () => {
      clearInterval(interval);
      clearInterval(pulseTimer);
      clearInterval(rotationTimer);
      clearTimeout(finalTimer);
    };
  }, [cyclePulse, cycleRotation]);

  // Main container transition for fade-out effect
  if (loading) {
    return (
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center bg-[#0A1A2F] text-white z-50 p-4 font-inter"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center justify-center relative">
          
          {/* Outer Rotating Cyber Ring */}
          <motion.div
            className="w-52 h-52 border-4 rounded-full absolute border-transparent"
            style={{
                borderTopColor: '#FF6F00', // Changed accent color for EIRTM (Orange/Red)
                borderRightColor: '#FF6F00',
                borderBottomColor: '#1A4D6B',
                borderLeftColor: '#1A4D6B',
            }}
            animate={{ rotate: ringRotation }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />

          {/* Inner Pulsing Container for Logo */}
          <motion.div
            className="w-32 h-32 rounded-full flex items-center justify-center bg-[#132A45] shadow-[0_0_50px_rgba(143,0,255,0.8)]" // Shadow color changed
            animate={{ 
                scale: pulse, 
                boxShadow: [
                    "0_0_50px_rgba(143,0,255,0.8)",
                    "0_0_50px_rgba(143,0,255,1.0)",
                    "0_0_50px_rgba(143,0,255,0.8)",
                ] 
            }}
            transition={{ 
                scale: { duration: 1.5, type: "spring", stiffness: 100, repeat: Infinity },
                boxShadow: { duration: 1.5, ease: "easeInOut", repeat: Infinity }
            }}
          >
            {/* Logo Placeholder (Adjusted text for EIRTM) */}
            <motion.img
              src="https://placehold.co/120x120/0A1A2F/FF6F00?text=EIRTM" // Placeholder updated
              alt="EIRTM Logo"
              className="w-24 h-24 object-contain rounded-full border-2 border-[#00FFFF]" // Border color changed
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/120x120/0A1A2F/FF6F00?text=EIRTM"}} // Fallback updated
            />
          </motion.div>
        </div>

        {/* Loading Text and Progress Bar Container */}
        <div className="w-full max-w-sm mt-12 flex flex-col items-center">
          <motion.p
            className="text-xl text-[#00FFFF] tracking-widest uppercase mb-4" // Text color changed
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Initializing EIRTM 2027 Portal
          </motion.p>



          {/* Progress Bar and Counter */}
          <div className="w-full h-2 bg-[#00FFFF] rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-[#FF6F00] rounded-full transition-all duration-300" // Bar color changed
              style={{ width: `${progress}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
          
          <motion.p 
            className="text-sm text-gray-400 mt-2 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {progress}% Loaded
          </motion.p>
        </div>
      </motion.div>
    );
  }

  // Fade-in transition for the main content
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
