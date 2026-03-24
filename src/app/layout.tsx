import type { Metadata } from "next";
import { Montserrat, Jersey_20 } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jersey20 = Jersey_20({
  variable: "--font-jersey",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "DesignX Fest '26 — April 17-18 @ Rishihood University",
  description:
    "DesignX Fest is an annual design festival dedicated to fostering creativity, innovation, and interdisciplinary collaboration. Join us on April 17-18, 2026.",
  keywords: [
    "DesignX",
    "design fest",
    "UI UX competition",
    "design workshop",
    "neubrutalism",
    "design festival 2026",
    "tech fest",
  ],
  authors: [{ name: "DesignX Team" }],
  metadataBase: new URL("https://designxfest.com"),
  openGraph: {
    title: "DesignX Fest 2026 — The Ultimate Design Experience",
    description:
      "Compete, learn and get inspired at DesignX Fest — the most exciting design and tech festival of 2026. Coming Soon.",
    url: "https://designxfest.com",
    siteName: "DesignX Fest",
    images: [
      {
        url: "/mascot.png",
        width: 1200,
        height: 630,
        alt: "DesignX Fest 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignX Fest 2026 — Coming Soon",
    description:
      "The boldest design festival is almost here. Competitions, workshops, and speakers — stay tuned!",
    images: ["/mascot.png"],
  },
  themeColor: "#F7DD37",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${jersey20.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
