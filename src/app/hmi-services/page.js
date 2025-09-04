import React from 'react'
import Hmi from './Hmi'


export const metadata = {
  
  title: "Human Machine Interface (HMI) Services & Solutions | Beyond Solutions",
  
  description: "Beyond Solutions provides expert Human Machine Interface (HMI) services to create intuitive, efficient, and safe control systems. Enhance user experience and operational productivity.",

  keywords: [
    "hmi services",
    "human machine interface",
    "industrial HMI design",
    "HMI development",
    "SCADA HMI",
    "UI/UX for industrial systems",
    "control panel design",
    "operator interface",
    "industrial automation",
    "Beyond Solutions HMI",
    "hmi solutions",
    "HMI design services"
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "Intuitive HMI Design & Development | Beyond Solutions",
     
    description: "Partner with Beyond Solutions for next-gen Human Machine Interface solutions that boost operational efficiency, improve safety, and provide a superior user experience.",
     
    url: "https://www.yourbeyondsolutions.com/services/hmi-services",  
     
    type: "website", 
    images: [
      {
        url: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic2_kxlkw9.webp",
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's human-machine interface (HMI) services for industrial control systems.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/hmi-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Boost Productivity with Advanced HMI Services | Beyond Solutions", 
    description: "Design and develop intelligent HMI systems with Beyond Solutions. Our solutions focus on user-centric design to optimize control, enhance safety, and drive productivity.", 
    image: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic2_kxlkw9.webp", 
  },
};

export default function page() {
  return (
    <>

    <Hmi/>
    
    </>
  )
}
