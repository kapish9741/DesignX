export default function Gallery() {
    return (
        <section className="w-full bg-white py-24 px-8 flex flex-col items-center border-b-[3px] border-black">
            <div className="w-full max-w-6xl">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 text-[#182F58] text-center border-b-[3px] border-black pb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Past Chaos (Gallery)
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
                    <div className="bg-[#FFEBCD] border-[3px] border-black shadow-[6px_6px_0px_#000] col-span-2 row-span-2 flex items-center justify-center p-4 hover:rotate-1 transition-transform">
                        <span className="font-bold opacity-50 text-2xl">Image 1</span>
                    </div>
                    <div className="bg-[#C4178A] border-[3px] border-black shadow-[6px_6px_0px_#000] flex items-center justify-center p-4 hover:-rotate-1 transition-transform">
                        <span className="font-bold text-white opacity-50 text-xl">Image 2</span>
                    </div>
                    <div className="bg-[#F7DD37] border-[3px] border-black shadow-[6px_6px_0px_#000] flex items-center justify-center p-4 hover:rotate-2 transition-transform">
                        <span className="font-bold opacity-50 text-xl">Image 3</span>
                    </div>
                    <div className="bg-[#182F58] border-[3px] border-black shadow-[6px_6px_0px_#000] col-span-2 flex items-center justify-center p-4 hover:-rotate-2 transition-transform">
                        <span className="font-bold text-white opacity-50 text-2xl">Image 4</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
