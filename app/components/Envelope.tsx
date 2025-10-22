'use client';

import { motion } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function Envelope({ onOpen, isOpen }: EnvelopeProps) {
  if (isOpen) return null;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="relative cursor-pointer"
        onClick={onOpen}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Envelope body */}
        <div className="relative w-80 h-56 bg-gradient-to-br from-amber-50 to-amber-100 shadow-2xl border-2 border-amber-200">
          {/* Envelope flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-amber-100 to-amber-200 origin-top border-2 border-amber-200"
            style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
            }}
            animate={{
              rotateX: isOpen ? 180 : 0,
            }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Decorative seal */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-rose-400 border-4 border-rose-500 flex items-center justify-center z-10 shadow-lg">
            <span className="text-white text-2xl">💕</span>
          </div>
          
          {/* Text on envelope */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-amber-800 font-serif text-xl mb-2">You're Invited</p>
            <p className="text-amber-600 text-sm">Click to open</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

