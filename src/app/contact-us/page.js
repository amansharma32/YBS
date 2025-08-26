import React from 'react'
import ContactUs from './ContactUs'

export const metadata = {
  
  title: "Contact FLUX Digital | Get in Touch for Web, Marketing & IT Solutions Globally",
  
  description: "Ready to transform your business? Contact FLUX Digital for expert web development, digital marketing, and IT solutions. We serve B2B, B2C, D2C clients worldwide. Get a free consultation!",

  keywords: [
    "contact FLUX Digital",
    "get in touch",
    "digital agency contact",
    "web development consultation",
    "digital marketing inquiry",
    "IT solutions support",
    "request a quote",
    "business inquiry",
    "contact web development company",
    "contact digital marketing agency",
    "contact IT solutions provider",
    "FLUX Digital phone number",
    "FLUX Digital email",
    "contact us India",
    "contact us USA",
    "contact us Europe",
    "contact us Australia",
    "contact us Switzerland",
    "contact us Dubai",
    "global digital services contact",
  ],
  
  robots: "index, follow",
 
  openGraph: {
    title: "Connect with FLUX Digital | Your Global Digital Transformation Partner",
    description: "Reach out to FLUX Digital for bespoke web, marketing, and IT solutions. Let's discuss how we can elevate your business globally.",
    url: "https://www.fluxdigital.info/contact-us",  
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596526131083-a8c560771417?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&h=630&q=75",
        width: 1200,
        height: 630,
        alt: "Contact FLUX Digital for digital services and solutions.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.fluxdigital.info/contact-us", 
  },

  twitter: {
    card: "summary_large_image",
    title: "Need Digital Solutions? Contact FLUX Digital Today!", 
    description: "Have a project in mind? Reach out to FLUX Digital for expert web, marketing, and IT services. We're here to help your business succeed.", 
    image: "https://images.unsplash.com/photo-1596526131083-a8c560771417?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&h=630&q=75", 
  },
};


export default function page() {
  return (
    <>
    <ContactUs/>
    </>
  )
}
