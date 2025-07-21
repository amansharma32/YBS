import React from 'react'
import ServicePage from './ServicePage'



export const metadata = {
  // Main SEO Information
  title: "Digital Services & Solutions | FLUX Digital",
  description: "Explore FLUX Digital's comprehensive range of digital services, including web development, digital marketing, and IT solutions. Empower your business with our expert offerings.",
  keywords: [
    "digital services",
    "web development services",
    "digital marketing services",
    "IT solutions",
    "custom web solutions",
    "SEO services",
    "social media marketing",
    "PPC management",
    "content marketing",
    "website design",
    "e-commerce development",
    "mobile app development",
    "cloud services",
    "cybersecurity solutions",
    "IT consulting",
    "business digital transformation",
    "digital agency India",
    "digital agency USA",
    "FLUX Digital services",
    "FLUX Digital solutions",
    "expert digital services",
    "full-service digital agency",
    "website services Delhi",
    "digital agency Gurugram",
    "IT solutions Noida",
  ],
  robots: "index, follow",

  // Open Graph (for social sharing on platforms like Facebook, LinkedIn)
  openGraph: {
    title: "Comprehensive Digital Services | FLUX Digital",
    description: "Discover FLUX Digital's expert web development, digital marketing, and IT solutions tailored to accelerate your business growth.",
    url: "https://www.fluxdigital.online/services-overview", // Replace with your actual URL for the services page
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60", // Replace with a relevant image for services overview
        width: 1200,
        height: 630,
        alt: "An overview of FLUX Digital's comprehensive digital services.",
      },
    ],
  },

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://www.fluxdigital.online/services-overview", // Replace with your actual URL for the services page
  },

  // Twitter Card (for sharing on Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Digital Services for Business Growth | FLUX Digital",
    description: "From web development to digital marketing and IT, FLUX Digital offers a complete suite of services to transform your online presence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60", // Replace with a relevant image for services overview
  },
};

export default function page() {
  return (
    <>

    <ServicePage/>

    </>
  )
}
