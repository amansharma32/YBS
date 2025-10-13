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
    default: "Top Rated Web Design, Development, and SEO Agency in Gurgaon, India | Beyond Solutions (YBS) ",
    template: "%s"  
  },

  
  description: "Gurgaon Best Web Development & SEO Agency. Beyond Solutions (YBS) delivers top-rated web design, development, and reliable web hosting across Delhi NCR",
 
 keywords: [
  "Beyond Solutions (YBS)",
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
  "B2B Portal Development",
  "B2C Portal Development",
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
  "Web Designing Gurgaon",
  "Web Design in Gurgaon",
  "Web Designing Company in Gurgaon",
  "Website Designing Company in India",
  "Website Designing in India",
  "Website Designing Company in Delhi NCR",
  "Website Designing in Delhi NCR",
  "Website Designing Company in Noida",
  "Website Designing in Noida",
  "Website Development Company in India",
  "Website Development in India",
  "Website Development Company in Delhi NCR",
  "Website Development in Delhi NCR",
  "Web Application Development",
  "Web Application Development in Gurgaon",
  "E-commerce Solutions",
  "E-commerce Solutions in Gurgaon",
  "Software Development",
  "Software Development in Gurgaon",
  "Web Development",
  "SEO",
  "SEO Services in Gurgaon",
  "SMO",
  "SEO Company in Gurgaon",
  "SMO Services in Gurgaon",
  "App Development",
  "Email Marketing Services in Gurgaon",
  "E-commerce in Gurgaon",
  "Branding Agency in India",
  "Branding Agency in Gurgaon",
  "Differences Between Software Developers and Software Engineers"
],


  
  robots: "index, follow",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "Beyond Solutions (YBS)",  
  appleMobileWebAppStatusBarStyle: "default",
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com",
  },


  twitter: {
    site: "@BeyondSolutions(YBS)",
    title: "Top Rated Web Design, Development, and SEO Agency in Gurgaon, India | Beyond Solutions (YBS)", 
    description: "Gurgaon Best Web Development & SEO Agency. Beyond Solutions (YBS) delivers top-rated web design, development, and reliable web hosting across Delhi NCR.",
    
    card: "summary_large_image", 
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",  
    imageAlt: "Top Rated Web Design, Development, and SEO Agency in Gurgaon, India | Beyond Solutions (YBS) ",
    
  },

 
  openGraph: { 
    title: 'Top Rated Web Design, Development, and SEO Agency in Gurgaon, India | Beyond Solutions (YBS)', 
    description: 'Gurgaon Best Web Development & SEO Agency. Beyond Solutions (YBS) delivers top-rated web design, development, and reliable web hosting across Delhi NCR',
    url: 'https://www.yourbeyondsolutions.com/',
    siteName: 'Beyond Solutions (YBS)',
    type: "website",  
     
    images: [
      {
        url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Top Rated Web Design, Development, and SEO Agency in Gurgaon, India | Beyond Solutions (YBS)',  
      },
      {
        url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
        width: 800,
        height: 600,
        alt: 'Top Rated Web Design, Development, and SEO Agency in Gurgaon, India | Beyond Solutions (YBS)',  
      },
    ],
    locale: 'en_IN',
    creator: "Beyond Solutions (YBS)",
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

<meta name="google-site-verification" content="3c-1lT1k3BJMvtFYw2Q5bGH-g3i7A80CbHwFnMeUnuA" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PK9VZTVG2F "></Script>

        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PK9VZTVG2F');
          `
        }} />


</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <WatsapButton phoneNumber="+919205104767" />

      <Analytics />
        <Navbar />
        <SpeedInsights />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
 
