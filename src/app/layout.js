import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Custom Website Design Company in India | Digital Flux",
  description: "Digital Flux is a leading website designing company in India, creating custom, responsive, and SEO-friendly websites. We enhance user experience (UX) to boost your conversions and grow your business online. Get your free quote today!",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
        {children}
<Footer/>
      </body>
    </html>
  );
}




