import React from 'react'
import ServicePage from './ServicePage'



export const metadata = {
   
  // Max ~60-70 characters.
  title: "Premium Web Dev, Digital Marketing & IT Solutions Worldwide | FLUX Digital",
  
   
  description: "Elevate your enterprise with FLUX Digital's bespoke web development, advanced digital marketing, and robust IT solutions. Serving discerning clients in the USA, Europe, Australia, Switzerland, Dubai, and beyond.",

  
  keywords: [
    "FLUX Digital",
    "digital services",
    "web development company",
    "digital marketing agency",
    "IT solutions provider",
    "custom web solutions",
    "SEO services",
    "e-commerce development",
    "mobile app development",
    "cloud services",
    "cybersecurity consulting",
    "business digital transformation", 
    "web development USA", "digital marketing USA", "IT solutions USA", "tech agency USA",
    "web development Europe", "digital marketing Europe", "IT solutions Europe", "tech agency Europe",
    "web development Australia", "digital marketing Australia", "IT solutions Australia", "tech agency Australia",
    "web development Switzerland", "digital marketing Switzerland", "IT solutions Switzerland", "tech agency Switzerland",
    "web development Dubai", "digital marketing Dubai", "IT solutions Dubai", "tech agency Dubai",
    "global digital agency", "premium digital services", "enterprise IT solutions", "luxury web design",
  ],
   
  robots: "index, follow",
  
  openGraph: {
    title: "Global Digital Excellence: Web Dev, Marketing & IT by FLUX Digital",
    description: "Partner with FLUX Digital for cutting-edge web development, strategic digital campaigns, and secure IT infrastructure across the USA, Europe, Australia, Switzerland, and Dubai.",
    url: "https://www.fluxdigital.info/services-overview",  
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&h=630&q=75",  
        width: 1200,
        height: 630,
        alt: "FLUX Digital's comprehensive digital services for global businesses.",
      },
    ],
  },

 
  alternates: {
    canonical: "https://www.fluxdigital.info/services-overview",  
  },

   
  twitter: {
    card: "summary_large_image",
    title: "Transform Your Business Globally | FLUX Digital Services",
    description: "FLUX Digital offers innovative web solutions, strategic digital campaigns, and robust IT services for businesses in key markets worldwide, including USA, Europe, and UAE.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&h=630&q=75",  
  },
};


export default function page() {
  return (
    <>

    <ServicePage/>

    </>
  )
}
