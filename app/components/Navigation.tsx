'use client';

import { motion } from 'framer-motion';

export type Section = 
  | 'our-story'
  | 'wedding-details'
  | 'schedule'
  | 'rsvp'
  | 'registry'
  | 'travel'
  | 'photos'
  | 'contact';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const sections: { id: Section; label: string }[] = [
  { id: 'our-story', label: 'Our Story' },
  { id: 'wedding-details', label: 'Details' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'registry', label: 'Registry' },
  { id: 'travel', label: 'Travel' },
  { id: 'photos', label: 'Photos' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4"
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`px-4 py-2 rounded-full font-serif text-sm md:text-base transition-all ${
            activeSection === section.id
              ? 'bg-rose-400 text-white shadow-lg scale-105'
              : 'bg-white/80 text-amber-800 hover:bg-rose-100 hover:scale-105'
          }`}
        >
          {section.label}
        </button>
      ))}
    </motion.nav>
  );
}

