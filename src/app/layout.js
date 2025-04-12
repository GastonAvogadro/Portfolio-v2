import { Cabin } from "next/font/google";
import CursorGlowEffect from "@/components/ui/CursorGlowEffect";
import "./globals.css";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Gastón Avogadro - Frontend Developer",
  description:
    "Frontend developer specialized in React, Next.js, Shopify and A/B testing. Focused on performance, UI/UX and building scalable interfaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cabin.className} bg-black`}>
        <CursorGlowEffect />
        {children}
      </body>
    </html>
  );
}
