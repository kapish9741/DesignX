import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface EventData {
    title: string;
    date: string;
    time: string;
    location: string;
    type: string;
    description: string;
    speaker?: string;
}

const EVENT_DETAILS: Record<string, EventData> = {
    "1": { title: "UI/UX Hackathon", date: "Oct 15", time: "10:00 AM", location: "Main Hall", type: "competition", description: "A 24-hour sprint to build the most jarring, brutalist user interface possible. No rounded corners allowed." },
    "2": { title: "Poster Design Clash", date: "Oct 16", time: "01:00 PM", location: "Design Lab", type: "competition", description: "Create a festival poster using only three colors and maximum contrast." },
    "3": { title: "CSS Art Battle", date: "Oct 17", time: "04:00 PM", location: "Computer Lab", type: "competition", description: "Code pure CSS art without any images or SVG assets." },
    "101": { title: "Figma Masterclass", speaker: "Jane Doe", date: "Oct 15", time: "10:00 AM", location: "Room 304", type: "workshop", description: "Learn how to deliberately break design rules in Figma to achieve the perfect neo-brutalist aesthetic." },
    "102": { title: "Brutalist Web Dev", speaker: "John Smith", date: "Oct 16", time: "02:00 PM", location: "Room 305", type: "workshop", description: "A practical guide to implementing thick borders, hard shadows, and high-performance jank in React." }
};

export default function EventDetail({ params }: { params: { id: string } }) {
    const event = EVENT_DETAILS[params.id];

    if (!event) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#FFEBCD]">
            <Navbar />

            <main className="p-8 md:p-16 w-full max-w-5xl mx-auto">
                <Link href="/events" className="inline-flex items-center gap-2 font-bold text-xl mb-8 hover:bg-[#F7DD37] hover:underline decoration-4 p-2 border-2 border-transparent hover:border-black transition-all">
                    <ArrowLeft size={24} /> Back to Events
                </Link>

                <div className="bg-white border-[4px] border-black shadow-[12px_12px_0px_#C4178A] p-8 md:p-16 relative">
                    <div className="absolute -top-4 -right-4 bg-[#F7DD37] border-4 border-black px-6 py-2 font-black text-2xl uppercase shadow-[6px_6px_0px_#000] transform rotate-3" style={{ fontFamily: 'var(--font-display)' }}>
                        {event.type}
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black uppercase text-[#182F58] leading-none mb-8 lg:mb-12 tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                        {event.title}
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="border-[4px] border-black p-6 bg-[#E0E0E0] shadow-[8px_8px_0px_#000]">
                            <h3 className="font-black text-2xl uppercase border-b-4 border-black pb-2 mb-4" style={{ fontFamily: 'var(--font-display)' }}>When & Where</h3>
                            <p className="font-bold text-lg mb-1">{event.date} @ {event.time}</p>
                            <p className="font-bold text-lg mb-1">Located in: <span className="bg-black text-white px-2">{event.location}</span></p>
                            {event.speaker && <p className="font-bold text-lg mt-4 border-t-2 border-black pt-2">Speaker: {event.speaker}</p>}
                        </div>

                        <div className="border-[4px] border-black p-6 bg-white shadow-[8px_8px_0px_#000]">
                            <h3 className="font-black text-2xl uppercase border-b-4 border-black pb-2 mb-4" style={{ fontFamily: 'var(--font-display)' }}>The Details</h3>
                            <p className="font-bold text-lg leading-relaxed">{event.description}</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-16 pt-8 border-t-[4px] border-black">
                        <button className="brutal-btn bg-[#C4178A] text-white text-3xl py-6 px-12 border-[4px] border-black shadow-[8px_8px_0px_#000] hover:-translate-y-2 hover:-translate-x-2 active:translate-y-0 active:translate-x-0 transition-transform w-full md:w-auto">
                            REGISTER NOW
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
