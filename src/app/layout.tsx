import type { Metadata } from "next";
import {
  Shippori_Mincho_B1,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const shipporiMinchoB1 = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-shippori-mincho-b1",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-shippori-mincho",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-zen-kaku-gothic-new",
});

export const metadata: Metadata = {
  title: "Thrive by Design — 30 Tiny Practices for Everyday Wellbeing",
  description:
    "30 Tiny Practices for Everyday Wellbeing. A book project by the Centre for Positive Health Sciences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${shipporiMinchoB1.variable} ${shipporiMincho.variable} ${zenKakuGothicNew.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
