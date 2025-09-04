import MobileDevelopment from './MobileDevelopment'

export const metadata = {
   

  title: "Professional Mobile App Development Services | Beyond Solutions",
  description: "Beyond Solutions offers comprehensive mobile app development for iOS and Android. We build custom, user-centric apps that drive engagement and business growth.",

   
  keywords: [
    "Beyond Solutions mobile app",
    "mobile app development services",
    "iOS app development",
    "Android app development",
    "custom mobile apps",
    "app development company",
    "cross-platform app development",
    "mobile UI/UX design",
    "app maintenance and support",
    "mobile app strategy",
    "enterprise mobile solutions",
    "mobile application development",
  ],

   
  robots: "index, follow",

 
  openGraph: {
    title: "Mobile App Development Services | Beyond Solutions",
    description: "Beyond Solutions specializes in creating innovative and high-performance mobile applications for businesses globally. Partner with us to build your next great app.",
    url: "https://www.yourbeyondsolutions.com/services/mobile-app-development-services",  
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic1_mcjwxl.webp",  
        width: 1200,
        height: 630,
        alt: "Beyond Solutions's mobile app development services.",
      },
    ],
  },

 
  alternates: {
    canonical: "https://www.yourbeyondsolutions.com/services/mobile-app-development-services", 
  },

   
  twitter: {
    card: "summary_large_image",
    title: "Build Your Next App with Beyond Solutions",
    description: "From concept to launch, we provide end-to-end mobile app development services. Get a free consultation for your iOS or Android project today.",
    image: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic1_mcjwxl.webp",  
  },
};


export default function page() {


  return (
    
    <>

<MobileDevelopment/>    

    </>

  )
}
