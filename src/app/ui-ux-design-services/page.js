import React from 'react'
import UIUXDesign from './UIUXDesign'


export const metadata = {
  
  title: "UI/UX Design & User Research Services | Beyond Solutions",
  
  description: "Beyond Solutions creates exceptional user experiences with our UI/UX design services. We focus on usability, accessibility, and intuitive interfaces for web and mobile.",

  keywords: [
    "UI/UX design services",
    "user experience design",
    "user interface design",
    "usability testing",
    "user research",
    "wireframing",
    "prototyping",
    "interaction design",
    "web design",
    "mobile app design",
    "Beyond Solutions UI/UX",
    "user-centric design",
    "design thinking",
    "accessibility design",
    "digital product design",
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "Intuitive UI/UX Design Solutions | Beyond Solutions",
     
    description: "Our UI/UX design services transform digital products into user-friendly and engaging experiences that drive customer satisfaction and loyalty.",
     
    url: "https://www.yourbeyondsolutions.com/services/ui-ux-design-services",  
     
    type: "website", 
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's UI/UX design, user experience, and user interface services.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/ui-ux-design-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Seamless UI/UX Design & Development | Beyond Solutions", 
    description: "Beyond Solutions specializes in crafting seamless and intuitive user interfaces and experiences, ensuring your digital product is both beautiful and functional.", 
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D", 
  },
};

export default function page() {
  return (
    <>

    <UIUXDesign/>
    
    </>
  )
}
