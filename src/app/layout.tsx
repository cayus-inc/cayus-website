import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cayus — We book the interview. You decide who you hire.",
  description:
    "We source, contact, and qualify candidates who already said yes to a conversation with you, against a scorecard you approve before we start.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
