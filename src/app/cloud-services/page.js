import React from 'react'
import CloudService from './CloudService'


export const metadata = {
  
  title: "Expert Cloud Consulting & Managed Services | Global | Beyond Solutions",
  
  description: "Accelerate your digital transformation with Beyond Solutions's comprehensive cloud services. We offer strategic consulting, migration, and managed solutions to drive innovation, agility, and resilience for your business.",

  keywords: [
    "cloud consulting",
    "cloud services",
    "cloud migration",
    "managed cloud services",
    "cloud hosting",
    "cloud security",
    "DevOps consulting",
    "cloud architecture",
    "AWS consulting",
    "Azure solutions",
    "Google Cloud services",
    "cloud innovation",
    "IT infrastructure",
    "digital transformation",
    "cloud strategy",
    "Beyond Solutions cloud",
    "cloud consulting India",
    "cloud services global",
    "hybrid cloud",
    "cloud monitoring",
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "Comprehensive Cloud Solutions & Consulting | Beyond Solutions",
     
    description: "Unlock business growth with our end-to-end cloud services, including migration, hosting, and security. Partner with Beyond Solutions for innovative cloud strategies.",
     
    url: "https://www.yourbeyondsolutions.com/services/cloud-services",  
     
    type: "website", 
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D", 
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's expert cloud services and consulting.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/cloud-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Strategic Cloud Solutions for Business Growth | Beyond Solutions", 
    description: "Drive efficiency and innovation with Beyond Solutions's cloud services. We specialize in secure migration, hosting, and management for businesses worldwide.", 
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D", 
  },
};

export default function page() {
  return (
    <>
    <CloudService/>
    </>
  )
}
