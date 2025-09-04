import React from 'react'
import MobilePage from './MobilePage'


export const metadata = {
  
  title: "Mobile App Design & Development Services | Beyond Solutions",
  
  description: "Create seamless and intuitive mobile experiences with Beyond Solutions's expert services. We specialize in mobile app design, UI/UX, and cross-platform development.",

  keywords: [
    "mobile app design",
    "mobile UI/UX",
    "mobile app development",
    "iOS app development",
    "Android app development",
    "cross-platform development",
    "responsive web design",
    "mobile experience services",
    "mobile strategy",
    "app prototyping",
    "user experience design",
    "Beyond Solutions mobile",
    "mobile design agency India",
    "app development USA",
    "mobile solutions Europe",
    "UI/UX agency Dubai",
    "mobile user interface",
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "Expert Mobile Experience & UI/UX Design | Beyond Solutions",
     
    description: "Beyond Solutions crafts compelling mobile experiences with a focus on user-centric design and flawless functionality for apps and responsive websites.",
     
    url: "https://www.yourbeyondsolutions.com/services/mobile-experience-services",  
     
    type: "website", 
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's mobile experience, app design, and UI/UX services.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/mobile-experience-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Mobile App Development & UI/UX Design | Beyond Solutions", 
    description: "From concept to launch, Beyond Solutions delivers powerful mobile experiences with intuitive design and robust development for all platforms.", 
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D", 
  },
};


export default function page() {
  return (
    <>
    <MobilePage/>
    </>
  )
}
