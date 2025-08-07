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
    default: "Top Web Development & Digital Marketing Company | India & Global | FLUX Digital",
    template: "%s"  
  },

  
  description: "FLUX Digital is a leading web development and digital marketing company, delivering responsive e-commerce websites, SEO services, B2B/B2C portals, and IT solutions globally. Transform your business with us.",
 
  keywords: [

    "FLUX Digital",
    "Website Designing Company",
    "Web Development Company",
    "Digital Marketing Company",
    "SEO Services",
    "E-commerce Website Development",
    "Responsive Website Design",
    "Custom Website Development",
    "Web Design Agency",
    "Web Services",
    "IT Solutions",
    "B2B portal development",
    "B2C portal development",
    "Website Designing in Delhi",
    "Web Development Company in Delhi",
    "Best Website Designing Company in Delhi",
    "SEO Services in Delhi",
    "Web Development India",
    "Best SEO Services India",
    "E-commerce Website Development India",
    "Web Design Agency India",
    "Digital Marketing Company India",
    "Web Development USA",
    "Digital Marketing USA",
    "Web Design Europe",
    "SEO Services Australia",
    "Web Development Switzerland",
    "Digital Solutions Dubai",
    "Global Digital Agency",
    "Premium Web Services",
  ],

  robots: "index, follow",
 
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "FLUX Digital",  
  appleMobileWebAppStatusBarStyle: "default",
 
  alternates: {
    canonical: "https://www.fluxdigital.online/",
  },


  twitter: {
    site: "@fluxdigital",
    title: "Top Web Dev & Digital Marketing Agency | India & Global | FLUX Digital", 
    description: "Transform your business with expert web development, digital marketing, and IT solutions. Serving B2B, B2C, D2C clients worldwide from India.",
    
    card: "summary_large_image", 
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",  
    imageAlt: "Expert Website Designing and Development, Digital Marketing Services | FLUX Digital ",  
  },

 
  openGraph: { 
    title: 'Global Web Development & Digital Marketing Partner | FLUX Digital', 
    description: 'FLUX Digital is a premier web development and digital marketing company in India, offering responsive e-commerce, SEO, and IT solutions to B2B/B2C clients worldwide.',
    url: 'https://www.fluxdigital.online',
    siteName: 'FLUX Digital',
    type: "website",  
     
    images: [
      {
        url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Website Designing and Development Services for Global Businesses | FLUX Digital',  
      },
      {
        url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
        width: 800,
        height: 600,
        alt: 'Responsive E-commerce Website Design and SEO Services | FLUX Digital',  
      },
    ],
    locale: 'en_IN',
    creator: "FLUX Digital",
  },

  
  additionalMeta: [
    { httpEquiv: "X-UA-Compatible", content: "IE=EmulateIE7" },
    { httpEquiv: "Accept-CH", content: "DPR, Viewport-Width, Width, Save-Data" }
  ],
};
 

export default function RootLayout({ children }) {

  return (
    <html lang="en">


  
<head>
<meta name="google-site-verification" content="Ftz7mm5nTrwASoP0ex_oUdViQV9o6beKbbYaMI8RTBM" />

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
 
