"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Countdown from "@/components/Countdown";
import Marquee from "@/components/Marquee";
import SpeakerCard from "@/components/SpeakerCard";
import SpeakerCarousel from "@/components/SpeakerCarousel";
import NumberTrail from "@/components/NumberTrail";
import { Star, Trophy, Palette, Mic, ArrowRight, Zap, Target, Image as ImageIcon, Clock, Calendar, Github, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: [
      { time: "09:00 AM", title: "Registrations & Welcome Kit", speaker: "RU Gate - 2", type: "Arrival" },
      { time: "10:00 AM", title: "Expert Talk: Future of Design", speaker: "Anil Reddy", type: "Mini Audi" },
      { time: "11:00 AM", title: "Expert Talk: Scalable Design Systems", speaker: "Ankit Goswami", type: "Mini Audi" },
      { time: "12:30 PM", title: "Networking Lunch", speaker: "TBD", type: "Break" },
      { time: "02:00 PM", title: "Competition A: UI/UX Challenge", speaker: "Atrium", type: "Focus" },
      { time: "02:00 PM", title: "Face Painting Workshop", speaker: "Atrium", type: "Workshop" },
      { time: "02:00 PM", title: "Color Painting Workshop", speaker: "Atrium", type: "Workshop" },
      { time: "03:00 PM", title: "Designathon Kickoff", speaker: "Various", type: "Competition" },
      { time: "05:00 PM", title: "Fun Activities & Socials", speaker: "PFA", type: "Event" }
    ],
    2: [
      { time: "09:00 AM", title: "Day 2 Registrations", speaker: "RU Gate - 2", type: "Arrival" },
      { time: "10:00 AM", title: "Expert Talk: Design for Millions", speaker: "Joy Banerjee", type: "TBD" },
      { time: "11:30 AM", title: "Visionary Talk: The Meta-Vibe", speaker: "Visionary Speaker", type: "TBD" },
      { time: "01:00 PM", title: "Lunch Break", speaker: "TBD", type: "Break" },
      { time: "02:00 PM", title: "Competition B: Branding Battle", speaker: "PFA", type: "Focus" },
      { time: "02:00 PM", title: "The Earth & Art Workshop", speaker: "Atrium", type: "Workshop" },
      { time: "03:30 PM", title: "Cinematograph Workshop", speaker: "Atrium", type: "Workshop" },
      { time: "04:30 PM", title: "Fashion Show: Design on Ramp", speaker: "Atrium", type: "Event" },
      { time: "05:30 PM", title: "Winners Announcement", speaker: "Main Hall", type: "Closing" }
    ]
  };

  return (
    <div className="min-h-screen w-full bg-designx-gradient relative overflow-hidden flex flex-col pt-12">
      <NumberTrail />
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[url('/bg-texture.png')] bg-repeat bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grain"></div>

      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#182F58] border-b-4 border-black px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-black tracking-tighter text-[#F7DD37]" style={{ fontFamily: 'var(--font-display)' }}>
          DesignX
        </div>
        <div className="hidden md:flex gap-8 text-sm font-black uppercase text-white">
          <a href="#" className="hover:text-[#F7DD37] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#F7DD37] transition-colors">About</a>
          <a href="#speakers" className="hover:text-[#F7DD37] transition-colors">Speakers</a>
          <a href="#schedule" className="hover:text-[#F7DD37] transition-colors">Schedule</a>
        </div>
        <button className="bg-[#F7DD37] border-2 border-black px-4 py-1.5 font-black text-sm uppercase shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
          Register
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20 z-10 overflow-hidden">
        {/* Floating Stars */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-1/4 left-10 text-[#F7DD37] opacity-40 md:opacity-80"
        >
          <Star size={80} fill="currentColor" stroke="black" strokeWidth={3} />
        </motion.div>

        {/* Authentic Mascot - Positioned Right & Tilted - BEHIND CONTENT */}
        <motion.div
          initial={{ x: 700, opacity: 0, rotate: 0 }}
          animate={{ x: 500, opacity: 0.9, rotate: -10 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
          className="absolute -right-20 md:-right-40 bottom-0 w-[450px] md:w-[850px] xl:w-[1100px] z-0 pointer-events-none drop-shadow-2xl"
        >
          <Image
            src="/mascot.png"
            alt="DesignX Mascot"
            width={700}
            height={900}
            className="object-contain"
            priority
          />
        </motion.div>

        <div className="flex flex-col items-center max-w-7xl w-full z-10 relative">
          {/* Main Title with Pixel Font */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="text-center relative"
          >
            <h1
              className="text-[15vw] md:text-[12rem] xl:text-[18rem] leading-[0.85] font-black uppercase tracking-tighter drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)]"
              style={{ fontFamily: 'var(--font-display)', color: '#F7DD37', WebkitTextStroke: '2px black' }}
            >
              DesignX
            </h1>
            <div className="absolute -top-10 -right-4 md:-top-16 md:-right-10 bg-white border-4 border-black p-2 md:p-3 rotate-12 shadow-[6px_6px_0px_#000] animate-bounce">
              <span className="text-xl md:text-3xl font-black text-[#C4178A]" style={{ fontFamily: 'var(--font-display)' }}>Fest 2026</span>
            </div>
          </motion.div>

          {/* Subtitle & Info Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8 md:mt-2 w-full"
          >
            <div className="bg-[#C4178A] text-white border-2 border-black px-4 py-2 font-black uppercase text-sm -rotate-2 shadow-[4px_4px_0px_#000]">
              17 & 18 April
            </div>
            <div className="bg-white text-black border-2 border-black px-4 py-2 font-black uppercase text-sm rotate-1 shadow-[4px_4px_0px_#000]">
              Rishihood University
            </div>
            <div className="bg-[#182F58] text-[#F7DD37] border-2 border-black px-4 py-2 font-black uppercase text-sm -rotate-1 shadow-[4px_4px_0px_#000]">
              Sonipat, Haryana
            </div>
          </motion.div>

          {/* Countdown timer */}
          <Countdown />
        </div>
      </section>

      {/* Scrolling Text Marquee */}
      <div className="z-50 -mt-10 md:-mt-20">
        <Marquee text="DesignX Fest 2026 ★ Register Now ★ Designing the Future ★ Innovation & Creativity" />
      </div>

      {/* About Section - Bento Grid */}
      <section id="about" className="relative w-full bg-white py-20 px-6 border-b-4 border-black z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-black text-[#182F58] uppercase tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
              The Design <br /> <span className="text-[#C4178A]">Breakthrough</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
            {/* Feature 1: Main Event */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 md:row-span-2 bg-[#F7DD37] border-4 border-black p-8 shadow-[8px_8px_0px_#000] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 rotate-12">
                <Zap size={140} fill="black" />
              </div>
              <div>
                <span className="bg-black text-white px-3 py-1 font-black text-xs uppercase mb-4 inline-block">Flagship Event</span>
                <h3 className="text-5xl font-black text-[#182F58] leading-none mb-6" style={{ fontFamily: 'var(--font-display)' }}>The Grand <br /> Design Arena</h3>
                <p className="font-bold text-lg max-w-sm">Witness the most intense creative showdown of 2026. From branding to digital experiences, we rethink everything.</p>
              </div>
              <button className="flex items-center gap-2 font-black uppercase group">
                Learn More <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            {/* Feature 2: Workshops */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-[#C4178A] border-4 border-black p-8 shadow-[8px_8px_0px_#000] flex justify-between items-center relative"
            >
              <div className="z-10">
                <h3 className="text-4xl font-black text-white leading-none mb-4" style={{ fontFamily: 'var(--font-display)' }}>Hands-On <br /> Workshops</h3>
                <p className="text-white font-bold opacity-90 max-w-xs">Master industry tools with world-class mentors.</p>
              </div>
              <div className="bg-white p-4 border-4 border-black rotate-6 shadow-[4px_4px_0px_#000]">
                <Palette size={48} className="text-[#C4178A]" />
              </div>
            </motion.div>

            {/* Feature 3: Pattern Box */}
            <div className="bg-blue-600 border-4 border-black shadow-[8px_8px_0px_#000] relative overflow-hidden hidden md:block">
              <div className="absolute inset-0 bg-[url('/dancing_pattern.png')] bg-cover opacity-60 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-6xl opacity-40 rotate-12 whitespace-nowrap">DESIGNX VIBE</span>
              </div>
            </div>

            {/* Feature 4: Speaker Invite */}
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000] flex flex-col justify-center gap-4">
              <div className="flex items-center gap-2">
                <Star fill="#F7DD37" className="text-black" />
                <span className="font-black text-sm uppercase">Global Expertise</span>
              </div>
              <h3 className="text-3xl font-black leading-tight" style={{ fontFamily: 'var(--font-display)' }}>Hear from the Visionaries</h3>
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="relative w-full bg-[#182F58] py-24 px-6 border-b-4 border-black z-20 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-[15px] checkered-bg-yellow opacity-40"></div>
        <div className="absolute left-[10%] top-[40%] text-white opacity-5 select-none font-black text-[15vw] pointer-events-none rotate-12" style={{ fontFamily: 'var(--font-display)' }}>
          EXPERTS
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="bg-white border-4 border-black p-6 inline-block shadow-[8px_8px_0px_#F7DD37] rotate-[-2deg]">
              <h2 className="text-5xl md:text-7xl font-black text-[#182F58] uppercase leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                Upcoming <br /> <span className="text-[#C4178A]">Speakers</span>
              </h2>
            </div>
            <p className="text-white font-bold max-w-sm text-lg border-l-4 border-[#F7DD37] pl-4">
              Our lineup of speakers includes industry pioneers, creative rebels, and visionaries shaping the next generation of design.
            </p>
          </div>

          <SpeakerCarousel 
            speakers={[
              { name: "Joy Banerjee", role: "Principal Designer, Blinkit", image: "/speaker1.png", color: "#F7DD37" },
              { name: "Ankit Goswami", role: "Staff Designer, Expedia", image: "/speaker2.png", color: "#C4178A" },
              { name: "Anil Reddy", role: "Keynote Speaker", image: "/speaker3.png", color: "#FC3BF0" },
              { name: "Tusharkant Cangia", role: "Creative Dir., Tata Elxsi", image: "/speaker4.png", color: "#182F58" },
              { name: "Shweta Hingane", role: "Founder, The.archart", image: "/speakers_extra.png", color: "#F7DD37", objectPosition: "0% center" },
              { name: "Parth & Akshat", role: "Founders, Hiredesigners", image: "/speakers_extra.png", color: "#C4178A", objectPosition: "33.33% center" },
              { name: "Nitin Nagdavane", role: "Design Head, Honda", image: "/speakers_extra.png", color: "#FC3BF0", objectPosition: "66.66% center" },
              { name: "Gavin Remedios", role: "Design Head, IBM", image: "/speakers_extra.png", color: "#182F58", objectPosition: "100% center" },
            ]} 
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[15px] checkered-bg-yellow opacity-40"></div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative w-full bg-[#C4178A] py-24 px-6 border-b-4 border-black z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Event <span className="text-[#182F58]">Schedule</span>
            </h2>

            {/* Day Tabs */}
            <div className="flex justify-center gap-4">
              {[1, 2].map(day => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-8 py-3 font-black uppercase text-xl border-4 border-black transition-all shadow-[6px_6px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1 ${activeDay === day ? 'bg-[#F7DD37] text-black' : 'bg-white text-black'}`}
                >
                  Day {day}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            {scheduleData[activeDay as keyof typeof scheduleData].map((item, idx) => (
              <div key={idx} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_#000] flex flex-col md:flex-row md:items-center justify-between group hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-6">
                  <div className="bg-[#182F58] text-[#F7DD37] p-4 border-2 border-black rotate-[-3deg] shadow-[4px_4px_0px_#000] min-w-[120px] text-center">
                    <span className="font-black text-xl">{item.time}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-[#182F58] uppercase" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h4>
                    <span className="text-sm font-bold text-[#C4178A] uppercase">{item.speaker}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-1.5 border-2 border-black font-black text-xs uppercase bg-gray-100 italic">
                  {item.type}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative w-full bg-white py-20 px-6 z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h2 className="text-5xl font-black text-[#182F58] uppercase tracking-tighter mb-6" style={{ fontFamily: 'var(--font-display)' }}>DesignX</h2>
            <p className="font-bold text-lg mb-8">Pushing the boundaries of creativity and technology. Join us for the most unapologetic design festival of the decade.</p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 border-2 border-black hover:bg-[#F7DD37] transition-all shadow-[4px_4px_0px_#000] active:shadow-none hover:-translate-y-1">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
            <div className="flex flex-col gap-4">
              <span className="font-black uppercase text-[#C4178A] text-sm">Navigation</span>
              <a href="#" className="font-bold hover:underline">Events</a>
              <a href="#" className="font-bold hover:underline">Workshops</a>
              <a href="#" className="font-bold hover:underline">Speakers</a>
              <a href="#" className="font-bold hover:underline">Gallery</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-black uppercase text-[#C4178A] text-sm">Connect</span>
              <a href="#" className="font-bold hover:underline">Register</a>
              <a href="#" className="font-bold hover:underline">Sponsor Us</a>
              <a href="#" className="font-bold hover:underline">Contact</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t-4 border-black mt-20 pt-10 flex flex-col md:flex-row justify-between gap-6 font-black uppercase text-xs">
          <span>© 2026 DesignX festival — All Rights Reserved</span>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


