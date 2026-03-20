import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#F7DD37]">
            <Navbar />

            <main className="p-8 md:p-16 w-full max-w-4xl mx-auto flex flex-col items-center">
                <h1 className="text-6xl md:text-8xl font-black uppercase text-center mb-12 border-b-4 border-black pb-4 text-black tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                    Contact Us
                </h1>

                <div className="bg-[#182F58] border-[4px] border-black shadow-[12px_12px_0px_#C4178A] w-full p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative background tape */}
                    <div className="absolute top-0 left-0 w-full h-8 bg-[#C4178A] border-b-4 border-black transform -skew-y-1 origin-top-left -mx-4" />

                    <h2 className="text-white text-4xl font-black uppercase mt-4 mb-8" style={{ fontFamily: 'var(--font-display)' }}>Drop a Line</h2>

                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-white font-bold uppercase tracking-widest text-sm">Your Name</label>
                            <input type="text" className="w-full bg-white border-4 border-black p-4 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-[#C4178A] shadow-[4px_4px_0px_#000]" placeholder="JANE DOE" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white font-bold uppercase tracking-widest text-sm">Your Email</label>
                            <input type="email" className="w-full bg-white border-4 border-black p-4 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-[#C4178A] shadow-[4px_4px_0px_#000]" placeholder="JANE@EXAMPLE.COM" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white font-bold uppercase tracking-widest text-sm">What's on your mind?</label>
                            <textarea rows={5} className="w-full bg-white border-4 border-black p-4 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-[#C4178A] shadow-[4px_4px_0px_#000]" placeholder="HELLO..." />
                        </div>

                        <button type="submit" className="brutal-btn bg-[#C4178A] text-white text-2xl py-4 mt-6 border-4 border-black shadow-[8px_8px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 hover:bg-[#F7DD37] hover:text-black active:translate-y-0 active:translate-x-0 transition-all font-black uppercase text-center w-full">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full">
                    <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_#000] text-center transform rotate-1">
                        <h3 className="font-black text-2xl uppercase mb-2" style={{ fontFamily: 'var(--font-display)' }}>Location</h3>
                        <p className="font-bold">DesignX Campus HQ<br />123 Brutal Street, NY</p>
                    </div>
                    <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_#000] text-center transform -rotate-1">
                        <h3 className="font-black text-2xl uppercase mb-2" style={{ fontFamily: 'var(--font-display)' }}>General Inquiries</h3>
                        <p className="font-bold">hello@designxfest.com<br />+1 (555) 123-4567</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
