import React from 'react'
import LogoDesignService from './LogoDesignService'

export const metadata = {
 
  title: "Custom Logo Design Services | Top Logo Creation Agency | Beyond Solutions",
   
  description: "Craft a memorable brand identity with Beyond Solutions's custom logo design services. We create unique and impactful logos for businesses globally. Partner with our expert team today!",
 
  keywords: [
    "logo design services",
    "logo creation agency",
    "custom logo design",
    "brand logo design",
    "corporate logo",
    "rebranding services",
    "graphic design agency",
    "professional logo designer",
    "logo design India",
    "logo design USA",
    "logo design Europe",
    "logo design Australia",
    "logo design Dubai",
    "logo design Switzerland",
    "small business logo design",
    "startup logo design",
    "modern logo design",
    "visual identity design",
  ],
   
  robots: "index, follow",
  
  openGraph: { 

    title: "Global Logo Design & Brand Identity Services | Beyond Solutions",
    description: "Beyond Solutions creates powerful brand identities through custom logo design. Let us help you build a visual identity that resonates with your audience.",
    url: "https://www.yourbeyondsolutions.com/services/logo-design-services",  
    type: "website",

    images: [

      {
        url: "https://www.pexels.com/photo/marketing-slogan-on-paper-7661139/", 
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's custom logo and brand identity design services.",
      },

    ],

  },

  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/logo-design-services",  
  },
 
  twitter: { 

    card: "summary_large_image", 

    title: "Create a Memorable Logo for Your Brand | Beyond Solutions",

    description: "From concept to final design, Beyond Solutions delivers creative and professional logos that make your brand stand out. Serving clients worldwide.",

    image: "https://www.pexels.com/photo/marketing-slogan-on-paper-7661139/",
  },
};



export default function page() {
  return (

    <>

    <LogoDesignService/>

    </>

  )
}
