"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Glasses, Trophy, Palette, Mic } from "lucide-react";

// Animation Variants
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
} as any;

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
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
        transition: { type: "spring", damping: 10, stiffness: 120, delay: 0.4 }
    }
} as any;

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
} as any;

export default function ComingSoonPage() {
    return (
        <div
            className="min-h-screen w-full relative overflow-hidden bg-[#F7DD37] text-black bg-[url('/bg-texture.png')] bg-cover bg-center bg-blend-overlay"
            style={{ fontFamily: 'var(--font-montserrat)' }}
        >
            {/* Top Marquee */}
            <div className="absolute top-0 left-0 w-full overflow-hidden border-b-[3px] border-black bg-[#C4178A] text-white py-1.5 z-50">
                <motion.div
                    animate={{ x: [0, -1200] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="whitespace-nowrap font-black text-sm md:text-xl tracking-widest uppercase flex gap-8 items-center"
                    style={{ fontFamily: 'var(--font-jersey)' }}
                >
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center">
                            <span>EXCITING COMPETITIONS</span>
                            <Star className="text-[#F7DD37] w-4 h-4 md:w-6 md:h-6 fill-current shrink-0" />
                            <span>WORKSHOPS</span>
                            <Star className="text-[#F7DD37] w-4 h-4 md:w-6 md:h-6 fill-current shrink-0" />
                            <span>SPEAKERS</span>
                            <Star className="text-[#F7DD37] w-4 h-4 md:w-6 md:h-6 fill-current shrink-0" />
                            <span>DESIGNX FEST 2026</span>
                            <Star className="text-[#F7DD37] w-4 h-4 md:w-6 md:h-6 fill-current shrink-0" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Background Grid Lines */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 pointer-events-none mt-10"
            >
                <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white hidden md:block" />
                <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-white hidden md:block" />
                <div className="absolute top-[65%] left-0 right-0 h-[1px] bg-white hidden md:block" />
            </motion.div>

            {/* Navbar */}
            <motion.nav
                variants={navVariant}
                initial="hidden"
                animate="show"
                className="absolute top-10 w-full px-4 md:px-6 py-4 flex justify-between items-center z-40"
            >
                <div className="text-2xl md:text-3xl font-black tracking-tighter">
                    <span className="text-[#C4178A]">Design</span><span className="text-black">X</span>
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm font-bold">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 border-2 border-black rounded-full shadow-[4px_4px_0px_#000] bg-white transform -rotate-2 cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                        Home
                    </motion.div>
                    <span className="cursor-pointer hover:underline decoration-2">Events</span>
                    <span className="cursor-pointer hover:underline decoration-2">Workshops</span>
                    <span className="cursor-pointer hover:underline decoration-2">Gallery</span>
                    <span className="cursor-pointer hover:underline decoration-2">Contact</span>
                </div>

                {/* Hamburger */}
                <div className="flex flex-col gap-[5px] mt-1 cursor-pointer group hover:opacity-80 transition-opacity">
                    <div className="w-7 h-[3px] bg-black transition-all group-hover:w-5" />
                    <div className="w-7 h-[3px] bg-black" />
                    <div className="w-4 h-[3px] bg-black translate-x-3 transition-all group-hover:w-7 group-hover:translate-x-0" />
                </div>
            </motion.nav>

            {/* ── DESKTOP LAYOUT ── */}
            <main className="hidden lg:flex relative w-full min-h-screen items-center justify-center pt-28 pb-12">

                {/* Left text panel */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-8 xl:left-14 top-[28%] max-w-[200px] z-20"
                >
                    <motion.div
                        whileHover={{ rotate: 0, scale: 1.02 }}
                        className="border-[3px] border-black bg-white p-3 shadow-[4px_4px_0px_#000] rotate-2 mb-8 transition-transform"
                    >
                        <p className="text-sm font-bold leading-relaxed text-black">
                            Join the ultimate gathering of creative minds! Experience hands-on workshops, portfolio reviews, and groundbreaking design talks.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Coming Soon card */}
                <motion.div
                    initial={{ rotate: -15, x: -80, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: -5, x: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", damping: 15, stiffness: 100 }}
                    whileHover={{ scale: 1.02, rotate: -3 }}
                    className="absolute left-8 md:left-20 bottom-[14%] w-60 bg-slate-100 border-[3px] border-black p-4 z-30 shadow-[-10px_10px_0px_rgba(0,0,0,1)] cursor-crosshair"
                    style={{ borderRadius: "8px 8px 8px 32px" }}
                >
                    <div className="absolute -top-5 -left-5 bg-white border-2 border-black rounded-full p-2 shadow-[2px_2px_0px_#000]">
                        <Glasses className="w-5 h-5" />
                    </div>
                    <div className="text-4xl font-black leading-none mb-2 tracking-tighter" style={{ fontFamily: 'var(--font-jersey)' }}>
                        Coming<br />Soon
                    </div>
                    <div className="inline-block bg-[#F7DD37] border-2 border-black text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-[2px_2px_0px_#000]">
                        Join Our Campaign
                    </div>
                    <div className="bg-white border-2 border-black font-medium text-xs p-3 rounded-md mb-2 shadow-[2px_2px_0px_#000]">
                        Get ready for the biggest design festival of the year! Exclusive workshops and competitions waiting for you.
                    </div>
                    <div className="text-[10px] text-center font-bold uppercase border-t-2 border-black border-b-2 pt-1 pb-1 mt-2">
                        Terms and conditions apply
                    </div>
                </motion.div>

                {/* Right Event Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="absolute right-4 md:right-10 xl:right-20 top-[18%] w-[270px] z-20 flex flex-col gap-4"
                >
                    <motion.div
                        variants={cardVariant}
                        whileHover={{ scale: 1.03, x: -5, y: -5, boxShadow: '12px 12px 0px #000', rotate: 2 }}
                        className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] cursor-pointer rotate-1"
                    >
                        <div className="flex items-center justify-between mb-2 border-b-[3px] border-black pb-2">
                            <h3 className="font-black text-xl tracking-tight" style={{ fontFamily: 'var(--font-jersey)' }}>COMPETITIONS</h3>
                            <Trophy className="w-5 h-5 text-black shrink-0" strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold text-black border-l-4 border-[#C4178A] pl-2">Showcase your skills in intense, fast-paced UI/UX challenges.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariant}
                        whileHover={{ scale: 1.03, x: -5, y: -5, boxShadow: '12px 12px 0px #000', rotate: 0 }}
                        className="bg-[#C4178A] text-black border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] cursor-pointer -rotate-2"
                    >
                        <div className="flex items-center justify-between mb-2 border-b-[3px] border-black pb-2">
                            <h3 className="font-black text-xl tracking-tight" style={{ fontFamily: 'var(--font-jersey)' }}>WORKSHOPS</h3>
                            <Palette className="w-5 h-5 text-black shrink-0" strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold text-white border-l-4 border-black pl-2">Learn hands-on from industry design experts and elevate your craft.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariant}
                        whileHover={{ scale: 1.03, x: -5, y: -5, boxShadow: '12px 12px 0px #000', rotate: -2 }}
                        className="bg-[#182F58] text-white border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] cursor-pointer rotate-1"
                    >
                        <div className="flex items-center justify-between mb-2 border-b-[3px] border-white pb-2">
                            <h3 className="font-black text-xl tracking-tight" style={{ fontFamily: 'var(--font-jersey)', color: '#FFFFFF' }}>GUEST LECTURES</h3>
                            <Mic className="w-5 h-5 text-white shrink-0" strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold text-[#C4178A] border-l-4 border-[#C4178A] pl-2">Inspiring talks from renowned creators and design leaders.</p>
                    </motion.div>
                </motion.div>

                {/* Date badge */}
                <motion.div
                    variants={popIn}
                    initial="hidden"
                    animate="show"
                    className="absolute right-[8%] bottom-[10%] z-20 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="w-36 h-36 bg-black"
                        style={{ clipPath: 'polygon(50% 0%, 58% 11%, 69% 4%, 72% 17%, 85% 15%, 83% 28%, 96% 31%, 89% 42%, 100% 50%, 89% 58%, 96% 69%, 83% 72%, 85% 85%, 72% 83%, 69% 96%, 58% 89%, 50% 100%, 42% 89%, 31% 96%, 28% 83%, 15% 85%, 17% 72%, 4% 69%, 11% 58%, 0% 50%, 11% 42%, 4% 31%, 17% 28%, 15% 15%, 28% 17%, 31% 4%, 42% 11%)' }}
                    />
                    <div className="absolute text-center rotate-[-10deg] pointer-events-none">
                        <span className="block font-black text-base text-[#F7DD37] leading-tight" style={{ fontFamily: 'var(--font-jersey)' }}>TO BE<br />ANNOUNCED</span>
                    </div>
                </motion.div>

                {/* Center Composition */}
                <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto h-[600px]">
                    {/* Background "DESIGNX" text */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute text-[12rem] xl:text-[16rem] font-black tracking-tighter text-black leading-none whitespace-nowrap z-0 select-none opacity-90"
                        style={{ fontFamily: 'var(--font-montserrat)', top: '10%', left: '50%', transform: 'translateX(-50%)' }}
                    >
                        DES<span className="opacity-0">IG</span>NX
                    </motion.div>

                    {/* Vertical "FEST" text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="absolute left-[8%] xl:left-[16%] top-[15%] font-black text-transparent opacity-80 z-10"
                        style={{
                            WebkitTextStroke: '3px black',
                            fontSize: '8rem',
                            fontFamily: 'var(--font-montserrat)',
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            lineHeight: '0.8'
                        }}
                    >
                        FEST
                    </motion.div>

                    {/* Mascot */}
                    <motion.div
                        variants={scaleSnappy}
                        initial="hidden"
                        animate="show"
                        whileHover={{ scale: 1.05, translateY: -10 }}
                        className="relative z-20 h-[500px] xl:h-[600px] w-full flex justify-center items-end"
                    >
                        <div className="relative w-[300px] xl:w-[400px] h-full">
                            <Image src="/mascot.png" alt="DesignX Fest Mascot" fill style={{ objectFit: 'contain', objectPosition: 'bottom center' }} priority />
                        </div>
                    </motion.div>

                    {/* "VIBE" foreground text */}
                    <motion.div
                        initial={{ scale: 1.5, opacity: 0, rotate: -15 }}
                        animate={{ scale: 1, opacity: 1, rotate: -4 }}
                        transition={{ type: "spring", damping: 12, stiffness: 130, delay: 0.5 }}
                        className="absolute top-[50%] z-30 pointer-events-none"
                    >
                        <h1
                            className="text-[7rem] xl:text-[10rem] font-black tracking-tighter leading-none"
                            style={{
                                color: '#C4178A',
                                fontFamily: 'var(--font-montserrat)',
                                textShadow: '5px 5px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 10px 10px 0 #000'
                            }}
                        >
                            VIBE
                        </h1>
                    </motion.div>

                    {/* Stay Tuned button */}
                    <div className="absolute bottom-0 z-40">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, rotate: 2 }}
                            transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.7 }}
                            whileHover={{ y: -5, x: -5, boxShadow: '12px 12px 0px #000', rotate: 0 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#C4178A] text-black border-[4px] border-black px-10 py-4 rounded-xl shadow-[8px_8px_0px_#000] cursor-pointer"
                        >
                            <h2 className="text-3xl xl:text-4xl font-black tracking-widest uppercase" style={{ fontFamily: 'var(--font-jersey)' }}>Stay Tuned!!!</h2>
                        </motion.div>
                        <div className="absolute -inset-1 bg-[#182F58] border-[4px] border-black rounded-xl z-[-1] translate-y-3 -translate-x-2" />
                    </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, type: "spring" }}
                    className="absolute top-[22%] left-[22%] z-10 rotate-12"
                >
                    <Star className="text-[#F7DD37] w-10 h-10 fill-current stroke-black stroke-2" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 1, type: "spring" }}
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    className="absolute top-[42%] left-[6%] z-10 w-12 h-12 bg-white border-2 border-black p-1 shadow-[3px_3px_0px_#000] cursor-pointer"
                >
                    <Image src="/window.svg" alt="Retro Window" width={40} height={40} className="opacity-80" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, type: "spring" }}
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    className="absolute bottom-[22%] right-[31%] z-10 w-14 h-14 bg-[#F7DD37] border-4 border-black p-2 shadow-[4px_4px_0px_#000] rotate-12 rounded-full cursor-pointer"
                >
                    <Image src="/globe.svg" alt="Globe" width={60} height={60} className="w-full h-full object-contain" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, type: "spring" }}
                    className="absolute top-[32%] right-[22%] z-10 w-10 h-10 -rotate-12"
                    style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', backgroundColor: '#C4178A', border: '2px solid black', boxShadow: '2px 2px 0 #000' }}
                />

                {/* Jagged bottom wave */}
                <motion.div
                    initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-0 right-0 h-24 bg-black z-10"
                    style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 30%, 95% 45%, 85% 20%, 75% 50%, 65% 15%, 55% 40%, 45% 10%, 35% 55%, 25% 20%, 15% 45%, 5% 25%, 0% 50%)' }}
                />
            </main>

            {/* ── MOBILE LAYOUT ── */}
            <main className="lg:hidden relative w-full min-h-screen flex flex-col items-center pt-24 pb-16 px-4 gap-6">

                {/* Mascot + VIBE section */}
                <div className="relative w-full flex justify-center items-end h-[320px] sm:h-[380px]">
                    {/* Big BG text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
                    >
                        <span
                            className="text-[6rem] sm:text-[8rem] font-black text-black opacity-80 tracking-tighter leading-none whitespace-nowrap"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            DESIGNX
                        </span>
                    </motion.div>

                    {/* Mascot */}
                    <motion.div
                        variants={scaleSnappy}
                        initial="hidden"
                        animate="show"
                        className="relative z-10 w-[220px] sm:w-[280px] h-full"
                    >
                        <Image src="/mascot.png" alt="DesignX Fest Mascot" fill style={{ objectFit: 'contain', objectPosition: 'bottom center' }} priority />
                    </motion.div>

                    {/* VIBE text */}
                    <motion.div
                        initial={{ scale: 1.5, opacity: 0, rotate: -15 }}
                        animate={{ scale: 1, opacity: 1, rotate: -4 }}
                        transition={{ type: "spring", damping: 12, stiffness: 130, delay: 0.5 }}
                        className="absolute bottom-4 left-0 z-20 pointer-events-none"
                    >
                        <h1
                            className="text-[5rem] sm:text-[6.5rem] font-black tracking-tighter leading-none"
                            style={{
                                color: '#C4178A',
                                fontFamily: 'var(--font-montserrat)',
                                textShadow: '4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 8px 8px 0 #000'
                            }}
                        >
                            VIBE
                        </h1>
                    </motion.div>
                </div>

                {/* Stay Tuned button */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, rotate: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative bg-[#C4178A] text-black border-[4px] border-black px-8 py-3 rounded-xl shadow-[6px_6px_0px_#000] cursor-pointer w-full max-w-xs text-center"
                >
                    <h2 className="text-2xl font-black tracking-widest uppercase" style={{ fontFamily: 'var(--font-jersey)' }}>Stay Tuned!!!</h2>
                    <div className="absolute -inset-1 bg-[#182F58] border-[4px] border-black rounded-xl z-[-1] translate-y-2 -translate-x-1" />
                </motion.div>

                {/* Coming Soon Card */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-sm bg-slate-100 border-[3px] border-black p-4 shadow-[-8px_8px_0px_rgba(0,0,0,1)] relative"
                    style={{ borderRadius: "8px 8px 8px 24px" }}
                >
                    <div className="absolute -top-4 -left-4 bg-white border-2 border-black rounded-full p-2 shadow-[2px_2px_0px_#000]">
                        <Glasses className="w-5 h-5" />
                    </div>
                    <div className="text-3xl font-black leading-none mb-2 tracking-tighter" style={{ fontFamily: 'var(--font-jersey)' }}>
                        Coming<br />Soon
                    </div>
                    <div className="inline-block bg-[#F7DD37] border-2 border-black text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-[2px_2px_0px_#000]">
                        Join Our Campaign
                    </div>
                    <div className="bg-white border-2 border-black font-medium text-xs p-3 rounded-md shadow-[2px_2px_0px_#000]">
                        Get ready for the biggest design festival of the year! Exclusive workshops and competitions.
                    </div>
                </motion.div>

                {/* Event Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-sm flex flex-col gap-4"
                >
                    <motion.div
                        variants={cardVariant}
                        className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] rotate-[0.5deg]"
                    >
                        <div className="flex items-center justify-between mb-2 border-b-[3px] border-black pb-2">
                            <h3 className="font-black text-xl tracking-tight" style={{ fontFamily: 'var(--font-jersey)' }}>COMPETITIONS</h3>
                            <Trophy className="w-5 h-5 text-black shrink-0" strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold text-black border-l-4 border-[#C4178A] pl-2">Showcase your skills in intense, fast-paced UI/UX challenges.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariant}
                        className="bg-[#C4178A] text-white border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] -rotate-[0.5deg]"
                    >
                        <div className="flex items-center justify-between mb-2 border-b-[3px] border-black pb-2">
                            <h3 className="font-black text-xl tracking-tight" style={{ fontFamily: 'var(--font-jersey)' }}>WORKSHOPS</h3>
                            <Palette className="w-5 h-5 text-black shrink-0" strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold text-white border-l-4 border-black pl-2">Learn hands-on from industry design experts and elevate your craft.</p>
                    </motion.div>

                    <motion.div
                        variants={cardVariant}
                        className="bg-[#182F58] border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] rotate-[0.5deg]"
                    >
                        <div className="flex items-center justify-between mb-2 border-b-[3px] border-white pb-2">
                            <h3 className="font-black text-xl tracking-tight" style={{ fontFamily: 'var(--font-jersey)', color: '#FFFFFF' }}>GUEST LECTURES</h3>
                            <Mic className="w-5 h-5 text-white shrink-0" strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold text-[#C4178A] border-l-4 border-[#C4178A] pl-2">Inspiring talks from renowned creators and design leaders.</p>
                    </motion.div>
                </motion.div>

                {/* Date Badge (mobile) */}
                <motion.div
                    variants={popIn}
                    initial="hidden"
                    animate="show"
                    className="flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="w-28 h-28 bg-black"
                        style={{ clipPath: 'polygon(50% 0%, 58% 11%, 69% 4%, 72% 17%, 85% 15%, 83% 28%, 96% 31%, 89% 42%, 100% 50%, 89% 58%, 96% 69%, 83% 72%, 85% 85%, 72% 83%, 69% 96%, 58% 89%, 50% 100%, 42% 89%, 31% 96%, 28% 83%, 15% 85%, 17% 72%, 4% 69%, 11% 58%, 0% 50%, 11% 42%, 4% 31%, 17% 28%, 15% 15%, 28% 17%, 31% 4%, 42% 11%)' }}
                    />
                    <div className="absolute text-center rotate-[-10deg] pointer-events-none">
                        <span className="block font-black text-sm text-[#F7DD37] leading-tight" style={{ fontFamily: 'var(--font-jersey)' }}>TO BE<br />ANNOUNCED</span>
                    </div>
                </motion.div>

                {/* Bottom black bar */}
                <div className="w-full h-16 bg-black -mb-16 mt-auto"
                    style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 20%, 95% 45%, 85% 10%, 75% 50%, 65% 5%, 55% 40%, 45% 5%, 35% 50%, 25% 15%, 15% 45%, 5% 20%, 0% 50%)' }}
                />
            </main>
        </div>
    );
}
