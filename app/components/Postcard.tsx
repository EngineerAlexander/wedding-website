'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PostcardProps {
  children: ReactNode;
  isVisible: boolean;
}

export default function Postcard({ children, isVisible }: PostcardProps) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ rotateY: -90, opacity: 0, scale: 0.8 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          exit={{ rotateY: 90, opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
          className="w-full max-w-4xl mx-auto bg-gradient-to-br from-white to-amber-50 rounded-lg shadow-2xl border-4 border-amber-100 p-8 md:p-12"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="relative">
            {/* Vintage stamp decoration */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-rose-400 border-2 border-rose-500 rotate-12 flex items-center justify-center text-white text-xs font-bold opacity-70">
              LOVE
            </div>
            
            {/* Content */}
            <div className="prose prose-amber max-w-none">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

