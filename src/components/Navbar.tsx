import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between p-6 bg-[#FFFFFF] border-b-4 border-black sticky top-0 z-50">
            <div className="text-4xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                <Link href="/">
                    <span className="bg-[#F7DD37] px-3 py-1 border-[3px] border-black inline-block transform -rotate-2 hover:rotate-0 transition-transform shadow-[4px_4px_0px_#000]">
                        DesignX
                    </span>
                </Link>
            </div>
            <div className="flex gap-8 items-center">
                <Link href="/" className="font-bold text-xl hover:underline underline-offset-8 decoration-4">Home</Link>
                <Link href="/events" className="font-bold text-xl hover:underline underline-offset-8 decoration-4 text-[#C4178A]">Events</Link>
                <Link href="/contact" className="font-bold text-xl hover:underline underline-offset-8 decoration-4 text-[#182F58]">Contact</Link>
                <Link href="/events" className="brutal-btn bg-[#C4178A] text-white">
                    Register
                </Link>
            </div>
        </nav>
    )
}
