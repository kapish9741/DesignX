import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ALL_EVENTS = [
    { id: 1, title: "UI/UX Hackathon", date: "Oct 15", category: "Competition", color: "#F7DD37" },
    { id: 2, title: "Poster Design Clash", date: "Oct 16", category: "Competition", color: "#C4178A" },
    { id: 3, title: "CSS Art Battle", date: "Oct 17", category: "Competition", color: "#FFFFFF" },
    { id: 101, title: "Figma Masterclass", date: "Oct 15", speaker: "Jane Doe", category: "Workshop", color: "#FF9800" },
    { id: 102, title: "Brutalist Web Dev", date: "Oct 16", speaker: "John Smith", category: "Workshop", color: "#4CAF50" }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="p-8 md:p-16 w-full max-w-7xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-black uppercase mb-12 border-b-[3px] border-black pb-4 text-[#182F58] tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                    All Events
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ALL_EVENTS.map(evt => (
                        <div key={evt.id} className="brutal-card flex flex-col justify-between hover:-translate-y-2 hover:-translate-x-2 transition-transform cursor-pointer shadow-[8px_8px_0px_#000] border-[4px]" style={{ backgroundColor: evt.color }}>
                            <div>
                                <div className="bg-black text-white inline-block px-3 py-1 font-bold mb-4 uppercase text-sm font-sans tracking-wider border-[3px] border-black">
                                    {evt.category}
                                </div>
                                <h3 className="text-4xl lg:text-5xl font-black mb-4 uppercase leading-none" style={{ fontFamily: 'var(--font-display)' }}>{evt.title}</h3>
                                <p className="font-bold text-lg mb-2">{evt.date}</p>
                                {evt.speaker && <p className="font-bold text-md mb-8">By {evt.speaker}</p>}
                            </div>

                            <Link href={`/events/${evt.id}`} className="brutal-btn w-full text-center bg-white border-[3px] hover:bg-black hover:text-white transition-colors mt-8">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
