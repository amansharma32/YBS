import React from 'react'
import WebsiteDesignService from './WebsiteDesignService'

export const metadata = {
  
  title: "Website Design, Development & SEO Services | Beyond Solutions (YBS)",
  
  description: "Craft a stunning, responsive, and high-performing website with Beyond Solutions (YBS)'s expert services. We provide custom web design, development, and SEO to help your business grow.",

  keywords: [
    "website design services",
    "web development",
    "responsive web design",
    "custom website design",
    "professional web design",
    "SEO services",
    "ecommerce website development",
    "WordPress development",
    "website redesign",
    "Beyond Solutions (YBS) web design",
    "business website",
    "digital marketing",
    "search engine optimization",
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    title: "Custom Website Design & Development Solutions | Beyond Solutions (YBS)",
     
    description: "Beyond Solutions (YBS) builds visually appealing and functional websites optimized for user experience, search engines, and business goals.",
     
    url: "https://www.yourbeyondsolutions.com/services/website-design-services",  
     
    type: "website", 
    images: [
      {
        url: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Beyond Solutions (YBS)'s web design, development, and SEO services.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/website-design-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    title: "Expert Website Design for Your Business | Beyond Solutions (YBS)", 
    description: "From concept to a live site, Beyond Solutions (YBS) delivers comprehensive website design and development services tailored to your brand and audience.", 
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
};


export default function page() {
  return (
    <>
    
<WebsiteDesignService/>

    </>
  )
}
