export default function Sponsors() {
    return (
        <section className="w-full bg-white py-24 px-8 border-b-4 border-black flex flex-col items-center relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 w-full max-w-5xl">
                <div className="bg-[#C4178A] border-[3px] border-black shadow-[12px_12px_0px_#182F58] p-8 md:p-12 transform -rotate-1 relative">
                    {/* Decorative shapes */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#F7DD37] border-4 border-black rounded-full shadow-[4px_4px_0px_#000]" />
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white border-4 border-black shadow-[4px_4px_0px_#000]" />

                    <h2 className="text-white text-5xl md:text-7xl font-black uppercase mb-12 text-center tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                        Powered By:
                    </h2>

                    <div className="bg-white border-4 border-black p-8 md:p-16 flex items-center justify-center transform rotate-2 hover:rotate-0 transition-transform cursor-pointer shadow-[8px_8px_0px_#000]">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-black text-black uppercase opacity-20 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                [ Logo Here ]
                            </div>
                            <p className="text-xl font-bold max-w-md mx-auto mb-8 text-[#182F58]">
                                We are actively seeking our main sponsor. Join the chaos of DesignX Fest and power the next generation of creators.
                            </p>
                            <button className="brutal-btn bg-[#F7DD37] text-black hover:bg-[#182F58] border-[3px] hover:-translate-y-1 hover:-translate-x-1 border-black transition-all">
                                Become a Sponsor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
