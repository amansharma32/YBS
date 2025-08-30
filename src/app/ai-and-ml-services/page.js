import React from 'react'
import Aiml from './Aiml'

export const metadata = {
  
  title: "AI & Machine Learning Services | FLUX Digital",
  
  description: "FLUX Digital offers comprehensive AI and Machine Learning services, from predictive analytics and deep learning to natural language processing. Leverage our expertise to innovate and grow.",

  keywords: [
    "ai services",
    "machine learning solutions",
    "predictive analytics",
    "deep learning",
    "natural language processing",
    "computer vision",
    "generative AI",
    "data science services",
    "ai consulting",
    "ml development",
    "FLUX Digital AI"
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "Transform Your Business with AI & ML | FLUX Digital",
     
    description: "Partner with FLUX Digital to harness the power of artificial intelligence and machine learning for data-driven decisions, process automation, and intelligent solutions.",
     
    url: "https://www.fluxdigital.online/services/ai-and-ml-services",  
     
    type: "website", 
    images: [
      {
        url: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic2_kxlkw9.webp",
        width: 1200,
        height: 630,
        alt: "FLUX Digital's AI and machine learning services for business transformation.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.fluxdigital.online/services/ai-and-ml-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Custom AI & Machine Learning Solutions | FLUX Digital", 
    description: "From custom models to scalable platforms, FLUX Digital delivers intelligent AI and ML solutions that drive innovation and competitive advantage for your business.", 
    image: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic2_kxlkw9.webp", 
  },
};

export default function page() {
  return (
    <>
    <Aiml/>
    </>
  )
}
