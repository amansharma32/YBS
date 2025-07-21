 
import Solutions from './Solutions';

export const metadata = {
  // Main SEO Information
  title: "Digital Service Package Pricing Guide | FLUX Digital",
  description: "Explore FLUX Digital's approximate pricing for web development, digital marketing & IT solutions. Get a transparent pricing guide for domestic (India) & international clients.",
  keywords: [
    "digital service pricing",
    "website development cost",
    "digital marketing packages",
    "IT solutions pricing",
    "approximate service pricing",
    "pricing guide digital agency",
    "web design packages India",
    "SEO service packages",
    "performance marketing pricing",
    "IT support packages",
    "custom project quotes",
    "transparent pricing guide",
    "FLUX Digital pricing",
    "FLUX Digital packages",
    "FLUX Digital solutions",
    "web development cost India",
    "digital marketing USA",
    "IT solutions international",
    "value-driven services",
    "ongoing support and maintenance",
    "website services Delhi",
    "digital agency Gurugram",
    "IT solutions Noida",
  ],
  robots: "index, follow",

  // Open Graph (for social sharing on platforms like Facebook, LinkedIn)
  openGraph: {
    title: "Digital Service Package Pricing Guide | FLUX Digital",
    description: "Explore FLUX Digital's approximate pricing for web development, digital marketing & IT solutions. A guide for both domestic & international clients.",
    url: "https://www.fluxdigital.online/solutions", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "A guide to FLUX Digital's pricing packages for web and marketing services.",
      },
    ],
  },

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://www.fluxdigital.online/solutions", // Replace with your actual URL
  },

  // Twitter Card (for sharing on Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing for Digital Services | FLUX Digital",
    description: "Get a clear idea of costs for web, marketing, and IT projects. Our pricing guide considers scope, market, and value delivered.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60", // Replace with your actual image URL
  },
};

export default function page() {
  return (
    <>
    <Solutions/>
    </>
  )
}
