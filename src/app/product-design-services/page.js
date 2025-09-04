import React from 'react'
import ProductDesign from './ProductDesign'




export const metadata = {
  
  title: "Industrial Product Design & Engineering Services | Beyond Solutions",
   
  description: "Transform your concepts into market-ready products with Beyond Solutions's industrial design services. We specialize in engineering, prototyping, and design for global businesses.",
 
  keywords: [
    "industrial product design",
    "product design services",
    "industrial design company",
    "product engineering",
    "prototyping services",
    "3D modeling and CAD",
    "design for manufacturing",
    "consumer product design",
    "mechanical engineering design",
    "innovation and design",
    "industrial design agency India",
    "product design USA",
    "product engineering Europe",
    "industrial design Australia",
    "product design Dubai",
    "Beyond Solutions product design",
    "custom product development",
  ],
   
  robots: "index, follow",
  
  openGraph: { 

    title: "Innovative Industrial Product Design & Prototyping | Beyond Solutions",
    description: "Partner with Beyond Solutions to bring your product ideas to life. Our industrial design and engineering services help you innovate and stand out in the global marketplace.",

    url: "https://www.yourbeyondsolutions.com/services/product-design-services",  
    type: "website",
  
    images: [
      {
        url: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1754560366/product_service_cfdzjn.webp",  
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's industrial product design and engineering services.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/product-design-services", 
  },

  twitter: {
    card: "summary_large_image",
    
    title: "Industrial Product Design for Global Markets | Beyond Solutions",
    
    description: "Beyond Solutions's expert team provides comprehensive industrial design and product development to help your business innovate and succeed, worldwide.",
    
    image: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1754560366/product_service_cfdzjn.webp",
    
  },
};

export default function page() {
  return (
    <>
    
    <ProductDesign/>
    
    </>
  )
}
