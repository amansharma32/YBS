import React from 'react'
import BrandingConsultingService from './BrandingConsultingService'


export const metadata = {
  
  title: "Top Branding Consulting & Brand Strategy Agency | Global | FLUX Digital",
  
  description: "Elevate your brand with FLUX Digital's expert branding consulting services. We offer comprehensive brand strategy, identity, and design solutions for businesses globally.",

  keywords: [
    "branding consulting",
    "brand strategy",
    "brand identity design",
    "rebranding services",
    "logo design agency",
    "brand positioning",
    "brand guidelines",
    "corporate branding",
    "personal branding",
    "brand development company",
    "strategic branding",
    "brand management",
    "FLUX Digital branding",
    "branding agency India",
    "branding consultant USA",
    "brand strategy Europe",
    "branding services Australia",
    "brand identity Switzerland",
    "branding agency Dubai",
    "global branding solutions",
    "premium brand consulting",
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "Global Branding & Brand Identity Solutions | FLUX Digital Consulting",
     
    description: "Partner with FLUX Digital for innovative branding consulting, from strategic brand development to impactful identity design, for businesses worldwide.",
     
    url: "https://www.fluxdigital.info/services/brand-consulting-services",  
     
    type: "website", 
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //  
        width: 1200,
        height: 630,
        alt: "FLUX Digital's expert branding consulting and brand strategy services.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.fluxdigital.info/services/brand-consulting-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Strategic Brand Consulting for Global Growth | FLUX Digital", 
    description: "Build a powerful brand identity with FLUX Digital. Our branding consulting services drive recognition and growth for businesses worldwide.", 
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
};


export default function page() {
  return (
    <>
<BrandingConsultingService/>


    </>
  )
}
