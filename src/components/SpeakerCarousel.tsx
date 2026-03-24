"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Speaker {
  name: string;
  role: string;
  image: string;
  color: string;
  objectPosition?: string;
}

interface SpeakerCarouselProps {
  speakers: Speaker[];
}

const SpeakerCarousel = ({ speakers }: SpeakerCarouselProps) => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % speakers.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[700px] flex items-center justify-center overflow-hidden">
      {/* Cards Container */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {speakers.map((speaker, index) => {
            const relativePos = index - active;
            
            // Handle wrapping logic for circular feel if needed, 
            // but for now simple linear stagger
            const isVisible = Math.abs(relativePos) <= 2;

            return (
              <motion.div
                key={`${speaker.name}-${index}`}
                initial={false}
                animate={{
                  x: relativePos * 340, // Horizontal spacing
                  rotate: relativePos * 8, // Fan-like tilt
                  scale: relativePos === 0 ? 1.05 : 0.9,
                  zIndex: 50 - Math.abs(relativePos),
                  opacity: isVisible ? 1 : 0,
                  filter: relativePos === 0 ? "grayscale(0%)" : "grayscale(50%)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
                className="absolute cursor-pointer"
                onClick={() => setActive(index)}
              >
                <SpeakerCard {...speaker} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center items-center gap-12 z-[100]">
        <button
          onClick={prev}
          className="p-4 bg-white border-4 border-black shadow-[6px_6px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1 hover:bg-[#F7DD37] transition-all"
        >
          <ChevronLeft size={32} strokeWidth={3} />
        </button>
        <div className="flex gap-2">
          {speakers.map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 border-2 border-black transition-all ${i === active ? 'bg-[#C4178A] scale-125' : 'bg-white'}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-4 bg-white border-4 border-black shadow-[6px_6px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1 hover:bg-[#F7DD37] transition-all"
        >
          <ChevronRight size={32} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default SpeakerCarousel;
