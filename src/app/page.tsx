"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Glasses, Trophy, Palette, Mic } from "lucide-react";

// Animation Variants
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.5 }
    }
} as any;

const cardVariant = {
    hidden: { opacity: 0, x: 50, rotate: 5 },
    show: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: { type: "spring", damping: 12, stiffness: 100 }
    }
} as any;

const navVariant = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
} as any;

const scaleSnappy = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", damping: 14, stiffness: 150, delay: 0.2 }
    }
} as any;

const popIn = {
    hidden: { opacity: 0, scale: 0.5, rotate: -20 },
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { type: "spring", damping: 10, stiffness: 120, delay: 0.6 }
    }
} as any;

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-[#F7DD37] text-black" style={{ fontFamily: 'var(--font-montserrat)' }}>

            {/* Top Marquee */}
            <div className="absolute top-0 left-0 w-full overflow-hidden border-b-[3px] border-black bg-[#C4178A] text-white py-2 z-50">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="whitespace-nowrap font-black text-xl tracking-widest uppercase flex gap-8 items-center"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center">
                            <span>EXCITING COMPETITIONS</span>
                            <Star className="text-[#F7DD37] w-6 h-6 fill-current" />
                            <span>WORKSHOPS</span>
                            <Star className="text-[#F7DD37] w-6 h-6 fill-current" />
                            <span>SPEAKERS</span>
                            <Star className="text-[#F7DD37] w-6 h-6 fill-current" />
                            <span>DESIGNX FEST 2026</span>
                            <Star className="text-[#F7DD37] w-6 h-6 fill-current" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Background Grid Lines (Thick white lines mapping out sections) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 pointer-events-none mt-12"
            >
                <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-white"></div>
                <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white"></div>
                <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-white"></div>
                <div className="absolute top-[65%] left-0 right-0 h-[1px] bg-white"></div>
            </motion.div>

            {/* Navbar */}
            <motion.nav
                variants={navVariant}
                initial="hidden"
                animate="show"
                className="absolute top-12 w-full p-6 flex justify-between items-start z-40"
            >
                <div className="text-3xl font-black tracking-tighter mix-blend-difference">
                    <span className="text-[#C4178A]">Design</span><span className="text-black">X</span>
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm font-bold mt-2">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 border-2 border-black rounded-full shadow-[4px_4px_0px_#000] bg-white transform -rotate-2 cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                        Home
                    </motion.div>
                    <span className="cursor-pointer hover:underline decoration-2">Events</span>
                    <span className="cursor-pointer hover:underline decoration-2">Workshops</span>
                    <span className="cursor-pointer hover:underline decoration-2">Gallery</span>
                    <span className="cursor-pointer hover:underline decoration-2">Contact us</span>
                </div>

                <div className="flex flex-col gap-[6px] mt-3 cursor-pointer group hover:opacity-80 transition-opacity">
                    <div className="w-8 h-[3px] bg-black transition-all group-hover:w-6"></div>
                    <div className="w-8 h-[3px] bg-black"></div>
                    <div className="w-5 h-[3px] bg-black translate-x-3 transition-all group-hover:w-8 group-hover:translate-x-0"></div>
                </div>
            </motion.nav>

            <main className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-12">

                {/* Left Side Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-8 md:left-12 xl:left-16 top-[28%] max-w-[200px] z-20 hidden lg:block"
                >
                    <motion.div
                        whileHover={{ rotate: 0, scale: 1.02 }}
                        className="border-[3px] border-black bg-white p-3 shadow-[4px_4px_0px_#000] rotate-2 mb-8 transition-transform"
                    >
                        <p className="text-sm font-bold leading-relaxed text-black">
                            Join the ultimate gathering of creative minds! Experience hands-on workshops, portfolio reviews, and groundbreaking design talks that will elevate your craft.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ rotate: -15, x: -80, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: -5, x: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", damping: 15, stiffness: 100 }}
                    whileHover={{ scale: 1.02, rotate: -3 }}
                    className="absolute left-8 md:left-24 bottom-[12%] w-64 bg-slate-100 border-[3px] border-black p-4 z-30 shadow-[-10px_10px_0px_rgba(0,0,0,1)] cursor-crosshair"
                    style={{ borderRadius: "8px 8px 8px 32px" }}
                >
                    <div className="absolute -top-5 -left-5 bg-white border-2 border-black rounded-full p-2 shadow-[2px_2px_0px_#000]">
                        <Glasses className="w-6 h-6" />
                    </div>
                    <div className="text-4xl font-black leading-none mb-2 tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                        Coming<br />Soon
                    </div>
                    <div className="inline-block bg-[#F7DD37] border-2 border-black text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-[2px_2px_0px_#000]">
                        Join Our Campaign
                    </div>
                    <div className="bg-white border-2 border-black font-medium text-xs p-3 rounded-md mb-2 shadow-[2px_2px_0px_#000]">
                        Get ready for the biggest design festival of the year! Exclusive workshops and competitions waiting for you.
                    </div>
                    <div className="text-[10px] text-center font-bold uppercase border-t-2 border-black border-b-2 pt-1 pb-1 mt-2">
                        Term and condition apply
                    </div>
                </motion.div>

                {/* Right Side Event Cards (Staggered Entry) */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="absolute right-4 md:right-12 xl:right-24 top-[22%] w-[280px] z-20 hidden lg:flex flex-col gap-5"
                >
                    <motion.div
                        variants={cardVariant}
                        whileHover={{ scale: 1.03, x: -6, y: -6, boxShadow: '12px 12px 0px #000', rotate: 2 }}
                        className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] cursor-pointer rotate-1"
                    >
                        <div className="flex items-center justify-between mb-2 border-b-[3px] border-black pb-2">
                            <h3 className="font-black text-2xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>COMPETITIONS</h3>
                            <Trophy className="w-6 h-6 text-black" strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold text-black border-l-4 border-[#C4178A] pl-2">Showcase your skills in intense, fast-paced UI/UX challenges.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariant}
                        whileHover={{ scale: 1.03, x: -6, y: -6, boxShadow: '12px 12px 0px #000', rotate: 0 }}
                        className="bg-[#C4178A] text-black border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] cursor-pointer -rotate-2"
                    >
                        <div className="flex items-center justify-between mb-2 border-b-[3px] border-black pb-2">
                            <h3 className="font-black text-2xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>WORKSHOPS</h3>
                            <Palette className="w-6 h-6 text-black" strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold text-white border-l-4 border-black pl-2">Learn hands-on from industry design experts and elevate your craft.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariant}
                        whileHover={{ scale: 1.03, x: -6, y: -6, boxShadow: '12px 12px 0px #000', rotate: -2 }}
                        className="bg-[#182F58] text-white border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] cursor-pointer rotate-1"
                    >
                        <div className="flex items-center justify-between mb-2 border-b-[3px] border-white pb-2 text-[#C4178A]">
                            <h3 className="font-black text-2xl tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}>GUEST LECTURES</h3>
                            <Mic className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold text-[#C4178A] border-l-4 border-[#C4178A] pl-2">Inspiring talks from renowned creators in the metaverse.</p>
                    </motion.div>
                </motion.div>

                {/* Date Sunburst Badge */}
                <motion.div
                    variants={popIn}
                    initial="hidden"
                    animate="show"
                    className="absolute right-[10%] bottom-[8%] z-20 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="w-40 h-40 bg-black shadow-[6px_6px_0px_#000]"
                        style={{ clipPath: 'polygon(50% 0%, 58% 11%, 69% 4%, 72% 17%, 85% 15%, 83% 28%, 96% 31%, 89% 42%, 100% 50%, 89% 58%, 96% 69%, 83% 72%, 85% 85%, 72% 83%, 69% 96%, 58% 89%, 50% 100%, 42% 89%, 31% 96%, 28% 83%, 15% 85%, 17% 72%, 4% 69%, 11% 58%, 0% 50%, 11% 42%, 4% 31%, 17% 28%, 15% 15%, 28% 17%, 31% 4%, 42% 11%)' }}
                    />
                    <div className="absolute text-center rotate-[-10deg] pointer-events-none">
                        <span className="block font-black text-lg text-[#F7DD37] leading-tight drop-shadow-md" style={{ fontFamily: 'var(--font-display)' }}>TO BE<br />ANNOUNCED</span>
                    </div>
                </motion.div>

                {/* Center Composition */}
                <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto h-[600px]">

                    {/* Background Text layered behind */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute text-[12rem] md:text-[16rem] font-black tracking-tighter text-black leading-none whitespace-nowrap z-0 select-none opacity-90"
                        style={{ fontFamily: 'var(--font-montserrat)', top: '10%', left: '50%', transform: 'translateX(-50%)' }}
                    >
                        DES<span className="opacity-0">IG</span>NX
                    </motion.div>

                    {/* Left rotated text (Fest) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="absolute left-[10%] md:left-[18%] top-[15%] font-black text-transparent opacity-80 z-10" style={{
                            WebkitTextStroke: '3px black',
                            fontSize: '9rem',
                            fontFamily: 'var(--font-montserrat)',
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            lineHeight: '0.8'
                        }}>
                        FEST
                    </motion.div>

                    {/* Mascot Image */}
                    <motion.div
                        variants={scaleSnappy}
                        initial="hidden"
                        animate="show"
                        whileHover={{ scale: 1.05, translateY: -10 }}
                        transition={{ type: "spring", damping: 10, stiffness: 100 }}
                        className="relative z-20 h-[500px] md:h-[600px] w-full flex justify-center items-end"
                    >
                        <div className="relative w-[300px] md:w-[420px] h-[100%]">
                            <Image
                                src="/mascot.png"
                                alt="Mascot"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Foreground Text layered in front */}
                    <motion.div
                        initial={{ scale: 1.5, opacity: 0, rotate: -15 }}
                        animate={{ scale: 1, opacity: 1, rotate: -4 }}
                        transition={{ type: "spring", damping: 12, stiffness: 130, delay: 0.5 }}
                        className="absolute top-[50%] mix-blend-normal z-30 pointer-events-none"
                    >
                        <h1 className="text-[7rem] md:text-[11rem] font-black tracking-tighter text-shadow-brutal leading-none"
                            style={{
                                color: '#C4178A',
                                fontFamily: 'var(--font-montserrat)',
                                textShadow: '5px 5px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 10px 10px 0 #000'
                            }}>
                            VIBE
                        </h1>
                    </motion.div>

                    {/* Bottom Pill Card */}
                    <div className="absolute bottom-0 z-40">
                        <motion.div
                            initial={{ y: 50, opacity: 0, rotate: 0 }}
                            animate={{ y: 0, opacity: 1, rotate: 2 }}
                            transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.7 }}
                            whileHover={{ y: -5, x: -5, boxShadow: '12px 12px 0px #000', rotate: 0 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#C4178A] text-black border-[4px] border-black px-12 py-4 rounded-xl shadow-[8px_8px_0px_#000] cursor-pointer transition-all"
                        >
                            <h2 className="text-4xl font-black tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)' }}>Stay Tuned!!!</h2>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0, rotate: 0 }}
                            animate={{ y: 0, opacity: 1, rotate: 1 }}
                            transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.7 }}
                            className="absolute -inset-1 bg-[#182F58] border-[4px] border-black rounded-xl z-[-1] translate-y-3 -translate-x-2 shadow-[8px_8px_0px_#000]"
                        ></motion.div>
                    </div>
                </div>

                {/* Decorative Elements (With float/fade animations) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, type: "spring" }}
                    className="absolute top-[20%] left-[22%] z-10 text-3xl rotate-12 drop-shadow-[2px_2px_0px_#000]"
                >
                    <Star className="text-[#F7DD37] w-12 h-12 fill-current stroke-black stroke-2" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 1, type: "spring" }}
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    className="absolute top-[40%] left-[8%] z-10 w-12 h-12 bg-white border-2 border-black p-1 shadow-[3px_3px_0px_#000] cursor-pointer"
                >
                    <Image src="/window.svg" alt="Window Icon" width={40} height={40} className="opacity-80" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, type: "spring" }}
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    className="absolute bottom-[20%] right-[32%] z-10 w-16 h-16 bg-[#F7DD37] border-4 border-black p-2 shadow-[4px_4px_0px_#000] rotate-12 rounded-full cursor-pointer"
                >
                    <Image src="/globe.svg" alt="Globe Icon" width={60} height={60} className="w-full h-full object-contain" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, type: "spring" }}
                    className="absolute top-[32%] right-[22%] z-10 w-10 h-10 text-3xl text-red-500 transform -rotate-12 flex items-center justify-center p-2"
                    style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', backgroundColor: '#C4178A', border: '2px solid black', boxShadow: '2px 2px 0 #000' }}
                />

                {/* Black jagged wave mask at bottom */}
                <motion.div
                    initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-0 right-0 h-24 bg-black z-10"
                    style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 30%, 95% 45%, 85% 20%, 75% 50%, 65% 15%, 55% 40%, 45% 10%, 35% 55%, 25% 20%, 15% 45%, 5% 25%, 0% 50%)' }}
                />
            </main>
        </div>
    );
}

