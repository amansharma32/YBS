import React from 'react'
import ContactUs from './ContactUs'

export const metadata = {
  
  title: "Contact Beyond Solutions (YBS) | Get in Touch for Web, Marketing & IT Solutions Globally",
  
  description: "Ready to transform your business? Contact Beyond Solutions (YBS) for expert web development, digital marketing, and IT solutions. We serve B2B, B2C, D2C clients worldwide. Get a free consultation!",

  keywords: [
    "contact Beyond Solutions (YBS)",
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
    "Beyond Solutions (YBS) phone number",
    "Beyond Solutions (YBS) email",
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
    title: "Connect with Beyond Solutions (YBS) | Your Global Digital Transformation Partner",
    description: "Reach out to Beyond Solutions (YBS) for bespoke web, marketing, and IT solutions. Let's discuss how we can elevate your business globally.",
    url: "https://www.yourbeyondsolutions.com/contact-us",  
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596526131083-a8c560771417?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&h=630&q=75",
        width: 1200,
        height: 630,
        alt: "Contact Beyond Solutions (YBS) for digital services and solutions.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/contact-us", 
  },

  twitter: {
    card: "summary_large_image",
    title: "Need Digital Solutions? Contact Beyond Solutions (YBS) Today!", 
    description: "Have a project in mind? Reach out to Beyond Solutions (YBS) for expert web, marketing, and IT services. We're here to help your business succeed.", 
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
