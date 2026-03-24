"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  role: string;
  image: string;
  color?: string;
}

const SpeakerCard = ({ name, role, image, color = "#F7DD37" }: SpeakerCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, rotate: 1 }}
      className="relative w-full max-w-[320px] bg-white border-4 border-black p-0 shadow-[8px_8px_0px_#000] group overflow-hidden"
    >
      {/* Top Checkered Bar */}
      <div className="h-6 w-full checkered-bg-black border-b-2 border-black"></div>
      
      {/* Identity Tag Header */}
      <div className="bg-[#182F58] px-4 py-2 border-b-4 border-black flex justify-between items-center">
        <span className="text-white font-black text-xs uppercase tracking-widest">Speaker ID 2026</span>
        <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black animate-pulse"></div>
      </div>

      {/* Main Image Area */}
      <div className="relative h-[300px] w-full bg-gray-100 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        {/* "Hello my name is" tag overlay */}
        <div className="absolute top-4 right-4 bg-white border-2 border-black px-3 py-1 -rotate-6 shadow-[3px_3px_0px_#000]">
           <span className="text-[10px] font-black uppercase text-black">HELO MY NAME IS</span>
        </div>
      </div>

      {/* Footer / Badge Info */}
      <div className="p-4 bg-white border-t-4 border-black">
        <h3 className="text-2xl font-black text-[#182F58] uppercase leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          {name}
        </h3>
        <p className="text-xs font-bold text-[#C4178A] uppercase mt-1">
          {role}
        </p>
      </div>

      {/* Bottom Checkered Bar */}
      <div 
        className="h-4 w-full border-t-2 border-black" 
        style={{ backgroundColor: color }}
      >
        <div className="flex h-full w-full checkered-bg-black opacity-20"></div>
      </div>
    </motion.div>
  );
};

export default SpeakerCard;
