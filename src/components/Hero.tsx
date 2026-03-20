"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center p-8 overflow-hidden bg-[#FFEBCD]">
            {/* Decorative abstract elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute top-12 left-12 w-24 h-24 bg-[#C4178A] border-4 border-black"
                style={{ borderRadius: "50%" }}
            />
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-24 right-20 w-32 h-32 bg-[#F7DD37] border-4 border-black flex items-center justify-center text-6xl font-black"
            >
                ✦
            </motion.div>
            <div className="absolute top-1/4 right-32 text-8xl font-black text-[#182F58] opacity-20">X</div>

            <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                    className="bg-white border-4 border-black shadow-[12px_12px_0px_#000] p-8 mb-8"
                >
                    <h1 className="text-7xl md:text-9xl font-black uppercase text-[#182F58] leading-none tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                        DesignX <br />
                        <span className="text-[#C4178A] bg-[#F7DD37] px-4 md:px-8 mt-4 inline-block border-4 border-black transform rotate-2 shadow-[4px_4px_0px_#000]">
                            Fest
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-bold mb-12 max-w-2xl bg-white border-4 border-black p-4 shadow-[6px_6px_0px_#000]"
                >
                    A chaotic, vibrant, and unapologetic celebration of Neubrutalism UI design.
                </motion.p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                    className="flex gap-6"
                >
                    <Link href="/events" className="brutal-btn bg-[#C4178A] text-white text-xl py-4 px-8 border-4 border-black hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1 transition-transform">
                        Explore Events
                    </Link>
                    <Link href="/contact" className="brutal-btn bg-white text-black text-xl py-4 px-8 border-4 border-black hover:-translate-y-1 hover:-translate-x-1 active:translate-y-1 active:translate-x-1 transition-transform">
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
