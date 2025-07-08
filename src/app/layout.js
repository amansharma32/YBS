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
  title: {

    default: "Website Designing Company in Delhi, Web Development Company India |  Flux Digital",
    template: "%s"

  },
  description: "Web Development Company in India. Flux Digital is Best Website Designing Company in Delhi, India. Get Responsive Ecommerce Website Design, SEO Services, B2B and B2C portal, Web Services , Digital Marketing, Web Designing in India, Delhi",

  
  keywords: [
   " Website Designing",
    "Web Designing Company",
     "Website Designing In Delhi"
     , "Best Website Designing Company In Delhi",
      SEO Services In Delhi, 
      Web Development Company In Delhi 
      ,Website Designing Company India ,
       Web Development India, Best SEO Services India ,
        E-commerce Website Development India ,
         Web Design Agency India ,
          Digital Marketing Company India ,
           Responsive Website Design ,
            Custom Website Development ,
            SEO Company in India ,
             Web Development Services ,
  ],

  robots: "index,follow",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "Adhunik Powertech",
  appleMobileWebAppStatusBarStyle: "default",
  robots: "index, follow",

  alternates: {
    canonical: "https://www.adhunikpowertech.com/",
  },

  twitter: {
    site: "@adhunikpowertech",
    title: "Adhunik Powertech | Top HVAC & Air Cooling Systems Gurugram",
    description: "Discover Adhunik Powertech Private Limited, a leader in HVAC solutions and air cooling systems. Based in Gurugram, India, we specialize in innovative, turnkey projects for industrial and commercial cooling needs.",
    card: "summary",
    image: "https://adhunikpowertech.com/apple-touch-icon.png",
    imageAlt: "Adhunik Powertech - HVAC & Air Cooling Solutions"
  },
  openGraph: {
    title: "Adhunik Powertech",
    type: "website",
    url: "https://www.adhunikpowertech.com/",
    siteName: "Adhunik Powertech - HVAC Experts",
    image: "https://adhunikpowertech.com/apple-touch-icon.png",
    locale: "en_IN",
    creator: "Adhunik Powertech",


    images: [
      {
        url: "https://adhunikpowertech.com/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Adhunik Powertech HVAC Solutions"
      }
    ]
  },

  additionalMeta: [
    { httpEquiv: "X-UA-Compatible", content: "IE=EmulateIE7" },
    { httpEquiv: "Accept-CH", content: "DPR, Viewport-Width, Width, Save-Data" }
  ],

  link: [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" },
  ]
};



export const metadata = {
  title: '',
  description: " ",

  keywords: 'Website Designing, Web Designing Company, Website Designing In Delhi, Best Website Designing Company In Delhi, SEO Services In Delhi, Web Development Company In Delhi ,Website Designing Company India, Web Development India, Best SEO Services India, E-commerce Website Development India, Web Design Agency India, Digital Marketing Company India, Responsive Website Design, Custom Website Development, SEO Company in India, Web Development Services',

  openGraph: {
    title: 'Website Designing Company in Delhi, Web Development Company India |   Flux Digital',
    description: 'Web Development Company in India. Flux Digital is Best Website Designing Company in Delhi, India. Get Responsive Ecommerce Website Design, SEO Services, B2B and B2C portal, Web Services , Digital Marketing, Web Designing in India, Delhi ',
    url: 'https://www.fluxdigital.online', 
    siteName: ' Flux Digital ',
     alternates: {
    canonical: 'https://www.fluxdigital.online',
  },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',  
        width: 1200,
        height: 630,
        alt: 'Website Designing and Development Services in Delhi',
      },
      {
        url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',  
        width: 800,
        height: 600,
        alt: 'Responsive Ecommerce Website Design',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Website Designing Company in Delhi, India | Webclick® Digital',
    description: 'Top-rated website designing and development company in Delhi. We offer responsive web design, e-commerce solutions, and expert SEO services.',
    images: ['https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],  
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
 
