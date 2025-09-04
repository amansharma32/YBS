import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import WatsapButton from "@/components/watsap";
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
    default: "Top Web Development & Digital Marketing Company | Beyond Solutions",
    template: "%s"  
  },

  
  description: "Beyond Solutions is a leading web development and digital marketing company, delivering responsive e-commerce websites, SEO services, B2B/B2C portals, and IT solutions globally. Transform your business with us.",
 
  keywords: [

    "Beyond Solutions",
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
  appleMobileWebAppTitle: "Beyond Solutions",  
  appleMobileWebAppStatusBarStyle: "default",
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/",
  },


  twitter: {
    site: "@fluxdigital",
    title: "Top Web Dev & Digital Marketing Agency | India & Global | Beyond Solutions", 
    description: "Transform your business with expert web development, digital marketing, and IT solutions. Serving B2B, B2C, D2C clients worldwide from India.",
    
    card: "summary_large_image", 
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",  
    imageAlt: "Expert Website Designing and Development, Digital Marketing Services | Beyond Solutions ",  
  },

 
  openGraph: { 
    title: 'Global Web Development & Digital Marketing Partner | Beyond Solutions', 
    description: 'Beyond Solutions is a premier web development and digital marketing company in India, offering responsive e-commerce, SEO, and IT solutions to B2B/B2C clients worldwide.',
    url: 'https://www.fluxdigital.info',
    siteName: 'Beyond Solutions',
    type: "website",  
     
    images: [
      {
        url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Website Designing and Development Services for Global Businesses | Beyond Solutions',  
      },
      {
        url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
        width: 800,
        height: 600,
        alt: 'Responsive E-commerce Website Design and SEO Services | Beyond Solutions',  
      },
    ],
    locale: 'en_IN',
    creator: "Beyond Solutions",
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

<meta name="google-site-verification" content="6TIad8xQLrwu0z0uKJ9oL7Y-Y8PpIZLFHmryi2tJjws" />

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

        <WatsapButton phoneNumber="+917017915594" />

      <Analytics />
        <Navbar />
        <SpeedInsights />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
 
