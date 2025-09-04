import React from 'react'
import Aiml from './Aiml'

export const metadata = {
  
  title: "AI & Machine Learning Services | Beyond Solutions",
  
  description: "Beyond Solutions offers comprehensive AI and Machine Learning services, from predictive analytics and deep learning to natural language processing. Leverage our expertise to innovate and grow.",

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
    "Beyond Solutions AI"
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "Transform Your Business with AI & ML | Beyond Solutions",
     
    description: "Partner with Beyond Solutions to harness the power of artificial intelligence and machine learning for data-driven decisions, process automation, and intelligent solutions.",
     
    url: "https://www.yourbeyondsolutions.com/services/ai-and-ml-services",  
     
    type: "website", 
    images: [
      {
        url: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic2_kxlkw9.webp",
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's AI and machine learning services for business transformation.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/ai-and-ml-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Custom AI & Machine Learning Solutions | Beyond Solutions", 
    description: "From custom models to scalable platforms, Beyond Solutions delivers intelligent AI and ML solutions that drive innovation and competitive advantage for your business.", 
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
