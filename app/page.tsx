'use client';

import { useState } from 'react';
import Envelope from './components/Envelope';
import Postcard from './components/Postcard';
import Navigation, { Section } from './components/Navigation';
import OurStory from './components/sections/OurStory';
import WeddingDetails from './components/sections/WeddingDetails';
import Schedule from './components/sections/Schedule';
import RSVP from './components/sections/RSVP';
import Registry from './components/sections/Registry';
import Travel from './components/sections/Travel';
import Photos from './components/sections/Photos';
import Contact from './components/sections/Contact';

export default function Home() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('our-story');

  const renderSection = () => {
    switch (activeSection) {
      case 'our-story':
        return <OurStory />;
      case 'wedding-details':
        return <WeddingDetails />;
      case 'schedule':
        return <Schedule />;
      case 'rsvp':
        return <RSVP />;
      case 'registry':
        return <Registry />;
      case 'travel':
        return <Travel />;
      case 'photos':
        return <Photos />;
      case 'contact':
        return <Contact />;
      default:
        return <OurStory />;
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 245, 235, 0.7), rgba(254, 243, 199, 0.7)), url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80)',
        }}
      />

      {/* Envelope Hero */}
      {!envelopeOpen && (
        <Envelope onOpen={() => setEnvelopeOpen(true)} isOpen={envelopeOpen} />
      )}

      {/* Main Content */}
      {envelopeOpen && (
        <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-serif text-amber-900 mb-2">
              Jane & John
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 font-serif italic">
              June 14, 2025
            </p>
          </div>

          {/* Navigation */}
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />

          {/* Postcard Content */}
          <div className="flex-1 flex items-center justify-center pb-8">
            <Postcard isVisible={true} key={activeSection}>
              {renderSection()}
            </Postcard>
          </div>
        </div>
      )}
    </main>
  );
}
