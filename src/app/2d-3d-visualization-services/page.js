import React from 'react'
import VisualizationPage from './VisualizationPage'


export const metadata = {
  
  title: "Professional 2D & 3D Visualisation Services | Beyond Solutions",
  
  description: "Bring your ideas to life with Beyond Solutions's 2D & 3D visualisation services. We create photorealistic renders, architectural walkthroughs, and product models.",

  keywords: [
    "2D visualisation services",
    "3D visualisation services",
    "architectural rendering",
    "product visualisation",
    "3D modeling services",
    "3D animation",
    "virtual reality (VR) development",
    "augmented reality (AR) experiences",
    "CGI services",
    "3D walkthroughs",
    "interactive 3D",
    "3D product configurators",
    "industrial visualisation",
    "Beyond Solutions visualisation",
    "visualisation agency India",
    "3D rendering USA",
    "visualisation services Europe",
    "3D design Australia",
    "CGI studio Dubai",
    "premium visualisation solutions",
    "photorealistic rendering",
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "2D & 3D Visualisation for Architecture & Products | Beyond Solutions",
     
    description: "Beyond Solutions specializes in advanced 2D & 3D visualisation, from detailed product renders to immersive architectural experiences for global clients.",
     
    url: "https://www.yourbeyondsolutions.com/services/2d-3d-visualization-services",  
     
    type: "website", 
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's 2D and 3D visualisation services for architectural and product design.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/2d-3d-visualization-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Expert 2D/3D Visualisation & Rendering | Beyond Solutions", 
    description: "Transform your concepts into stunning visuals with Beyond Solutions. Our 2D/3D visualisation services deliver photorealistic quality and creative impact.", 
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D", 
  },
};

export default function page() {
  return (
    <>
    
    <VisualizationPage/>
    
    </>
  )
}
