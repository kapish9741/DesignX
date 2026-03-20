import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const DUMMY_WORKSHOPS = [
    { id: 101, title: "Figma Masterclass", speaker: "Jane Doe", time: "10:00 AM" },
    { id: 102, title: "Brutalist Web Dev", speaker: "John Smith", time: "02:00 PM" }
];

export default function Workshops() {
    return (
        <section className="w-full bg-[#182F58] py-24 px-8 border-b-[3px] border-black flex flex-col items-center overflow-hidden relative">
            <Star className="absolute top-10 right-10 text-[#F7DD37] fill-[#F7DD37]" size={80} />
            <Star className="absolute bottom-10 left-10 text-[#C4178A] fill-[#C4178A]" size={120} />

            <div className="w-full max-w-6xl relative z-10">
                <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12" style={{ fontFamily: 'var(--font-display)' }}>
                    Workshops
                </h2>

                <div className="flex flex-col gap-6">
                    {DUMMY_WORKSHOPS.map((ws) => (
                        <div key={ws.id} className="bg-white border-[3px] border-black p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center shadow-[8px_8px_0px_#C4178A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#F7DD37] transition-all">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-black uppercase mb-2" style={{ fontFamily: 'var(--font-display)' }}>{ws.title}</h3>
                                <p className="font-bold text-lg text-gray-700">By {ws.speaker} • {ws.time}</p>
                            </div>
                            <Link href={`/events/${ws.id}`} className="mt-6 md:mt-0 brutal-btn bg-[#C4178A] text-white py-3 px-6 flex items-center gap-2 text-sm border-[3px]">
                                Details <ArrowRight size={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
