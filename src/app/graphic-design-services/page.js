import React from 'react'
import GraphicDesign from './GraphicDesign'


export const metadata = {
  
  title: "Creative Graphic Design Services & Branding | Beyond Solutions",
  
  description: "Beyond Solutions offers professional graphic design services, including logo design, branding, print materials, and digital assets. Stand out with creative visuals.",

  keywords: [
    "graphic design services",
    "logo design",
    "branding design",
    "corporate identity",
    "print design",
    "web graphics",
    "digital illustration",
    "packaging design",
    "UI/UX design",
    "creative design agency",
    "visual branding",
    "Beyond Solutions design",
    "graphic design India",
    "design services USA",
    "branding Europe",
    "creative agency Dubai",
    "visual communication",
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "Global Graphic Design & Branding Solutions | Beyond Solutions",
     
    description: "Partner with Beyond Solutions for impactful graphic design and visual branding that captures attention and communicates your brand's unique story.",
     
    url: "https://www.yourbeyondsolutions.com/services/graphic-design-services",  
     
    type: "website", 
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's creative graphic design, branding, and visual communication services.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/graphic-design-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Impactful Graphic Design & Visual Branding | Beyond Solutions", 
    description: "From logos to complete brand systems, Beyond Solutions provides graphic design services that build a strong, memorable visual identity for your business.", 
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D", 
  },
};

export default function page() {
  return (
    <>
    <GraphicDesign/>
    </>
  )
}
