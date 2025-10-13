import React from 'react'
import DataAnalytics from './DataAnalytics'

export const metadata = {
  
  // Updated title to reflect data and analytics services
  title: "Data-Driven Solutions & Analytics Services | Beyond Solutions (YBS)",
  
  // New description highlighting the value of data services
  description: "Beyond Solutions (YBS) offers comprehensive data and analytics services, including business intelligence, data science, and visualization. Turn your data into strategic insights.",

  // Replaced all graphic design keywords with data and analytics terms
  keywords: [
    "data analytics services",
    "business intelligence solutions",
    "data science",
    "big data consulting",
    "data visualization",
    "predictive analytics",
    "data engineering",
    "machine learning services",
    "strategic insights",
    "BI dashboards",
    "Beyond Solutions (YBS) data",
    "data analytics India",
    "data solutions USA",
    "analytics Europe",
  ],
  

  robots: "index, follow",
 
   
  openGraph: {
     
    // Updated Open Graph title for data services
    title: "Unlock Insights with Data & Analytics | Beyond Solutions (YBS)",
     
    // New Open Graph description
    description: "Harness the power of your data with Beyond Solutions (YBS)'s expert services. We provide the tools and analysis to help you make informed business decisions.",
     
    // Kept the correct URL for data analytics services
    url: "https://www.yourbeyondsolutions.com/services/data-analytics-services",  
     
    type: "website", 
    images: [
      {
        // Replaced graphic design image with one related to data visualization
        url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
        width: 1200,
        height: 630,
        alt: "A person analyzing a dashboard with charts and graphs, representing data analysis and business intelligence services.",
      },
    ],
  },
 
  alternates: {
    // Corrected the canonical URL to match the service
    canonical: "https://www.yourbeyondsolutions.com/services/data-analytics-services", 
  },
 
  twitter: { 
    card: "summary_large_image", 
    // Updated Twitter card title
    title: "Transform Data into Actionable Insights | Beyond Solutions (YBS)", 
    // Updated Twitter card description
    description: "From raw data to interactive dashboards, Beyond Solutions (YBS) delivers data and analytics services that empower your business with a clear, data-driven strategy.", 
    // New image URL for the Twitter card
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D", 
  },
};

export default function page() {
  return (
    <>

    <DataAnalytics/>

    </>
  )
}
