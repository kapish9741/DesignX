"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  value: number;
}

const NumberTrail: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newParticle: Particle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      value: Math.floor(Math.random() * 10),
    };

    setParticles((prev) => [...prev.slice(-20), newParticle]);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0.8, scale: 0.5, y: -10 }}
            animate={{ opacity: 0, scale: 1.5, y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-yellow-400 font-mono font-bold text-xl select-none"
            style={{ left: p.x - 10, top: p.y - 10 }}
          >
            {p.value}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NumberTrail;
