"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MarqueeProps {
  text: string;
  speed?: number;
  reverse?: boolean;
}

const Marquee = ({ text, speed = 20, reverse = false }: MarqueeProps) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-3 bg-black border-y-2 border-black rotate-[-1deg] w-[110%] -ml-[5%]">
      <motion.div
        animate={{ x: reverse ? [-1000, 0] : [0, -1000] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        className="flex gap-10 items-center justify-around min-w-full uppercase font-black text-2xl tracking-tighter text-white"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex gap-10 items-center">
            {text} <span className="text-[#F7DD37]">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
