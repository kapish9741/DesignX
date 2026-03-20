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
  title: "DesignX Fest",
  description: "A dynamic neubrutalism design fest experience.",
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
