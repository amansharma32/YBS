import React from 'react'
import DevOps from './DevOps'

export const metadata = {
   
  title: "Leading DevOps Services & Solutions | FLUX Digital",
  
  
  description: "Optimize your software delivery pipeline with FLUX Digital's expert DevOps services. We specialize in CI/CD, automation, cloud infrastructure, and security for global businesses.",

 
  keywords: [
    "DevOps services",
    "DevOps company",
    "CI/CD pipeline",
    "automation services",
    "cloud infrastructure",
    "Infrastructure as Code",
    "IaC",
    "Docker",
    "Kubernetes",
    "AWS DevOps",
    "Azure DevOps",
    "GCP DevOps",
    "monitoring and logging",
    "DevSecOps",
    "SaaS DevOps",
    "agile development",
    "software delivery automation",
    "FLUX Digital DevOps",
    "global DevOps solutions",
  ],
   
  robots: "index, follow",
 
  openGraph: {
    title: "DevOps Automation & Cloud Solutions for Global Businesses | FLUX Digital",

    description: "Accelerate your development cycle with FLUX Digital, a leading DevOps agency. We deliver end-to-end solutions for CI/CD, cloud migration, and infrastructure management.",

    url: "https://www.fluxdigital.info/services/devops-consulting-services",  

    type: "website",

    images: [
      {
        url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
        width: 1200,
        height: 630,
        alt: "FLUX Digital's expert DevOps and cloud automation services for global businesses.",
      },
    ],
  },

 
  alternates: {
    canonical: "https://www.fluxdigital.info/services/devops-consulting-services", 
  },

  
  twitter: {
   
    card: "summary_large_image",
    
    title: "Expert DevOps Solutions for Global Businesses | FLUX Digital",
    
    description: "From CI/CD to cloud migration, FLUX Digital delivers comprehensive DevOps solutions worldwide. Streamline your operations with our expert agency.",
    
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D", 
  },
};

export default function page() {
  return (

    <>

<DevOps/>

    </>

  )
}
