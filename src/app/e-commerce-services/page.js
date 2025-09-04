import React from 'react'
import Ecomm from './Ecomm'


export const metadata = {

  title: "E-commerce Development Company | Custom Online Store Solutions",
  description: "Drive sales and enhance customer experience with Beyond Solutions's expert e-commerce development services. We create custom online stores for B2B, B2C, and D2C businesses globally. Contact us today!",

  keywords: [
    "e-commerce development company",
    "ecommerce web development",
    "online store development",
    "custom e-commerce solutions",
    "Shopify development",
    "Magento development",
    "WooCommerce development",
    "B2B e-commerce",
    "B2C e-commerce",
    "D2C e-commerce",
    "e-commerce platform migration",
    "e-commerce consulting",
    "digital commerce services",
    "e-commerce agency",
    "e-commerce website design",
    "secure payment integration",
    "global e-commerce solutions",
    "e-commerce strategy",
  ],
   
  robots: "index, follow",
 
  openGraph: {
    title: "Expert E-commerce Development Services | Beyond Solutions",
    description: "Partner with Beyond Solutions, a leading e-commerce development agency, to create scalable and secure online stores that boost conversions and grow your business.",
    url: "https://www.yourbeyondsolutions.com/services/e-commerce-services",
    type: "website",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_ml8fg5SD0UYM1XD1lIaFZkvmeUrC386ozeEIAKTvkzgehcN-ABA9fSZtbC-uovLCFI&usqp=CAU",
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's expert web development services for global businesses.",
      },
    ],
  },
 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/e-commerce-services",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Solutions for Global Businesses | Beyond Solutions",
    description: "From custom platforms to advanced integrations, Beyond Solutions delivers innovative e-commerce solutions worldwide. Elevate your online presence with our expert agency.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_ml8fg5SD0UYM1XD1lIaFZkvmeUrC386ozeEIAKTvkzgehcN-ABA9fSZtbC-uovLCFI&usqp=CAU",
  },
};


export default function page() {
  return (
    <>
    <Ecomm/>
    </>
  )
}
