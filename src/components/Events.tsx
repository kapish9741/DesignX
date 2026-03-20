import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DUMMY_EVENTS = [
    { id: 1, title: "UI/UX Hackathon", date: "Oct 15", category: "Competition", color: "#F7DD37" },
    { id: 2, title: "Poster Design Clash", date: "Oct 16", category: "Competition", color: "#C4178A" },
    { id: 3, title: "CSS Art Battle", date: "Oct 17", category: "Competition", color: "#FFFFFF" }
];

export default function Events() {
    return (
        <section className="w-full bg-[#FFEBCD] py-24 px-8 border-b-[3px] border-black flex flex-col items-center">
            <div className="w-full max-w-6xl">
                <div className="flex justify-between items-end mb-12 border-b-[3px] border-black pb-4">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#182F58]" style={{ fontFamily: 'var(--font-display)' }}>
                        Core Events
                    </h2>
                    <Link href="/events" className="hidden md:flex items-center gap-2 font-bold text-xl hover:underline decoration-4 underline-offset-4">
                        View All <ArrowRight size={24} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {DUMMY_EVENTS.map((evt) => (
                        <div key={evt.id} className="brutal-card group hover:-translate-y-2 transition-transform cursor-pointer" style={{ backgroundColor: evt.color }}>
                            <div className="bg-black text-white inline-block px-3 py-1 font-bold mb-4 uppercase text-sm font-sans tracking-wider border-[3px] border-black">
                                {evt.category}
                            </div>
                            <h3 className="text-4xl font-black mb-4 uppercase leading-none" style={{ fontFamily: 'var(--font-display)' }}>{evt.title}</h3>
                            <p className="font-bold text-lg mb-8">{evt.date}</p>

                            <Link href={`/events/${evt.id}`} className="brutal-btn w-full text-center bg-white border-[3px] hover:bg-black hover:text-white transition-colors">
                                Register Now
                            </Link>
                        </div>
                    ))}
                </div>
                <Link href="/events" className="md:hidden mt-8 flex w-full justify-center items-center gap-2 font-bold text-xl brutal-btn bg-white border-[3px]">
                    View All <ArrowRight size={24} />
                </Link>
            </div>
        </section>
    )
}
