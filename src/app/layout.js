import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";

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

  keywords : [
  "Website Designing",
  "Web Designing Company",
  "Website Designing In Delhi",
  "Best Website Designing Company In Delhi",
  "SEO Services In Delhi",
  "Web Development Company In Delhi",
  "Website Designing Company India",
  "Web Development India",
  "Best SEO Services India",
  "E-commerce Website Development India",
  "Web Design Agency India",
  "Digital Marketing Company India",
  "Responsive Website Design",
  "Custom Website Development",
  "SEO Company in India",
  "Web Development Services"
],

  robots: "index,follow",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "Adhunik Powertech",
  appleMobileWebAppStatusBarStyle: "default",
  robots: "index, follow",

  alternates: {
    canonical: "https://www.fluxdigital.online/",
  },

  twitter: {
    site: "@fluxdigital",
    title: "Website Designing Company in Delhi, Web Development Company India |  Flux Digital",
    description: "Web Development Company in India. Flux Digital is Best Website Designing Company in Delhi, India. Get Responsive Ecommerce Website Design, SEO Services, B2B and B2C portal, Web Services , Digital Marketing, Web Designing in India, Delhi",
    card: "summary",
    image: "https://fluxdigital.online/favicon.ico",
    imageAlt: "Website Designing Company in Delhi, Web Development Company India |  Flux Digital"
  },

   openGraph: {
    title: 'Website Designing Company in Delhi, Web Development Company India |   Flux Digital',
    description: 'Web Development Company in India. Flux Digital is Best Website Designing Company in Delhi, India. Get Responsive Ecommerce Website Design, SEO Services, B2B and B2C portal, Web Services , Digital Marketing, Web Designing in India, Delhi ',
    url: 'https://www.fluxdigital.online', 
    siteName: 'Flux Digital Services',
     type: "website",
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
      creator: "Flux Digital Services",

  },

    additionalMeta: [
    { httpEquiv: "X-UA-Compatible", content: "IE=EmulateIE7" },
    { httpEquiv: "Accept-CH", content: "DPR, Viewport-Width, Width, Save-Data" }
  ],
 
 
}



 

export default function RootLayout({ children }) {

  return (
    <html lang="en">


  

<head>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2VTHRMSF8W"></Script>

        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2VTHRMSF8W');
          `
        }} />

       
       


</head>

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
 
