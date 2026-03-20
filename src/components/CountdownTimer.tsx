"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
    const [mounted, setMounted] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        setMounted(true);
        // Arbitrary future date for the design fest
        const targetDate = new Date("2026-10-15T09:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <section className="w-full bg-[#182F58] py-16 px-8 border-b-4 border-black flex flex-col items-center">
            <h2 className="text-white text-4xl md:text-6xl font-black mb-12 uppercase text-center tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                Time until chaos:
            </h2>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds }
                ].map((unit, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="bg-white border-[3px] border-black p-4 md:p-8 shadow-[8px_8px_0px_#C4178A] min-w-[100px] md:min-w-[140px] flex justify-center transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_#C4178A] transition-all">
                            <span className="text-5xl md:text-7xl font-black text-black" style={{ fontFamily: 'var(--font-display)' }}>
                                {unit.value.toString().padStart(2, '0')}
                            </span>
                        </div>
                        <span className="text-[#F7DD37] font-bold text-xl md:text-2xl mt-6 uppercase border-b-4 border-[#C4178A] pb-1">
                            {unit.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
