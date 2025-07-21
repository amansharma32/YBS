'use client'
import Firespark from "@/components/sections/Firespark";
import FluxPremiumPage from "@/components/sections/NewService";
 
import { FiCheck, FiArrowRight } from "react-icons/fi";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Rocket, TrendingUp, Award, Search, ShoppingCart, ArrowRight, Globe, Briefcase, Wrench, Layers, Palette, Code, ShieldCheck, Cpu, TestTube, BarChartHorizontal } from 'lucide-react';

import {
  TbBrandApple,
  TbDeviceDesktop,
  TbSearch,
  TbBrandInstagram,
} from "react-icons/tb";

import { useInView } from "framer-motion";

 

export default function Solutions() {


  const [market, setMarket] = useState('domestic');

 
// Section Component
function PackageSection({ section, market, sectionIndex }) {
  const gridCols = section.items.domestic.length === 4 
    ? "md:grid-cols-2 xl:grid-cols-4" 
    : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: sectionIndex * 0.2 + 0.4 }}
        className="text-center md:text-left mb-10"
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">{section.title}</h2>
        <p className="text-md text-gray-500 mt-2">{section.subtitle} - <span className="font-semibold text-teal-600"> ( {section.type} )</span></p>

        
        <p className="text-xl font-sans w-full md:w-[60vw] text-gray-600 mt-2">{section.content1}</p>

      </motion.div>
      <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
        <AnimatePresence  >
          {section.items[market].map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex"
            >
              <PricingCard {...pkg} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Pricing Card Component
function PricingCard({ icon, title, price, idealFor, popular = false }) {
  const borderColor = popular ? 'border-teal-400' : 'border-gray-200';
  const bgColor = popular ? 'bg-white' : 'bg-white/60';

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative w-full flex flex-col p-6 rounded-2xl border ${borderColor} ${bgColor} backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-teal-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}
      
      <div className="flex-grow   ">
        <div className="mb-5 text-cyan-600">
          {React.cloneElement(icon, { className: 'w-8 h-8' })}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm h-10 mb-4">{idealFor}</p>
        
        <div className="mb-6 flex self-end">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-700">{price}</span>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full ${popular ? 'bg-gradient-to-r from-cyan-500 text-sm to-teal-500' : 'bg-gray-800'} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-sm group`}
      >
        Enquire Now
        
         <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />

      </motion.button>
    </motion.div>
  );
}

// Custom & Addon Section Component
function CustomAndAddonSection({ market }) {
    return (
        <section className="mb-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className=" text-center md:text-left mb-12"
            >
                <h2 className="text-2xl  font-bold text-gray-800">IV. The "FLUX Custom" Solution & Add-ons</h2>
                <p className="text-md text-gray-500 mt-2">For highly unique or complex needs, and standalone specialized services that require a tailored approach.
</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="max-w-7xl flex flex-col  md:flex-row justify-between items-between gap-8 mx-auto bg-white/60 border border-gray-200 rounded-2xl p-8 text-center backdrop-blur-sm mb-12"
            >

            <div className="box flex flex-col text-left   ">
                  <h3 className="text-2xl font-bold text-gray-900">The "FLUX Custom" Solution</h3>
                <p className="text-gray-600 mt-2 mb-4">
                The "FLUX Custom" Solution: Pricing for custom projects and enterprise-level engagements will be determined after an in-depth discovery and requirements gathering phase. These can range from ₹3,00,000+ (INR/project or monthly retainer) to $15,000+ (USD/project or monthly retainer), depending on the scale and complexity of the project.

                </p>
             
            </div>
             
                <div className=" flex  flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 p-1 rounded-lg">
                    <div className="bg-gray-50 h-[17vh] w-full flex  flex-col items-center justify-center  rounded-md px-6 py-3">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-700">
                            {market === 'domestic' ? '₹3,00,000+' : '$15,000+'}
                        </span>
                        <span className="text-gray-500 text-sm"> / project or retainer</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
            className=" md:text-left "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
            >
                <h3 className="text-2xl font-bold  text-gray-900 mb-2">Add-on Services</h3>
                <p className="text-gray-600 w-[70vw]  mt-2 mb-8">These services are typically quoted on a project-by-project basis, at an hourly rate, or as a small monthly retainer, depending on the specific service and its scope. Examples include:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {addOnServices.map((service, index) => (
                        <div key={index} className="bg-white/60 border border-gray-200 rounded-lg p-4 flex items-center space-x-4 backdrop-blur-sm">
                            <div className="text-cyan-600">{React.cloneElement(service.icon, { className: 'w-6 h-6' })}</div>
                            <div>
                                <p className="font-semibold text-gray-800">{service.title}</p>
                                <p className="text-sm text-teal-700 font-medium">
                                    {market === 'domestic' ? service.inr : service.usd}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}


  // --- MOCK DATA STRUCTURE ---
const packagesData = {
  integrated: {
    title: "I. Integrated Growth Packages",
    subtitle: "Ongoing partnerships for holistic digital growth.",
    type: "Monthly Retainer",

    content1:"These packages represent ongoing partnerships for holistic digital growth, offering a blend of web services, digital marketing, and strategic oversight.",


    items: {
      domestic: [
        { id: 1, title: "The 'Launchpad'", idealFor: "Startups, new ventures", price: "₹30,000 - ₹70,000", icon: <Rocket/> },
        { id: 2, title: "The 'Accelerator'", idealFor: "Growing businesses seeking scale", price: "₹70,000 - ₹2,50,000", icon: <TrendingUp/>, popular: true },
        { id: 3, title: "The 'Enterprise Impact'", idealFor: "Established businesses, market leaders", price: "₹2,50,000 - ₹10,00,000+", icon: <Award/> },
      ],
      international: [
        { id: 1, title: "The 'Launchpad'", idealFor: "Startups, new ventures", price: "$1,500 - $3,500", icon: <Rocket/> },
        { id: 2, title: "The 'Accelerator'", idealFor: "Growing businesses seeking scale", price: "$3,500 - $10,000", icon: <TrendingUp/>, popular: true },
        { id: 3, title: "The 'Enterprise Impact'", idealFor: "Established businesses, market leaders", price: "$10,000 - $50,000+", icon: <Award/> },
      ]
    }
  },
  project: {
    title: "II. Project-Based 'Quick Win' Packages",
    subtitle: "Defined deliverables with a clear start and end for immediate needs.",
    type: "One-Time Fee",
       content1:"These packages are for specific, defined deliverables with a clear start and end, addressing immediate needs or establishing new foundations.",
    
    items: {
      domestic: [
         { id: 5, title: "Social Media Kickoff Package", idealFor: "Establishing social presence", price: "₹25,000 - ₹75,000", icon: <Globe/> },
    
        { id: 6, title: "Website Refresh & Optimization", idealFor: "Updating existing websites", price: "₹40,000 - ₹1,50,000", icon: <Zap/> },
        { id: 7, title: "SEO Jumpstart Package", idealFor: "Foundational SEO setup", price: "₹30,000 - ₹80,000", icon: <Search/> },
          { id: 4, title: "Brand Builder Package", idealFor: "Establishing/refreshing brand identity", price: "₹50,000 - ₹2,00,000", icon: <Briefcase/> },
       
      ],
      international: [
        { id: 4, title: "Brand Builder Package", idealFor: "Establishing/refreshing brand identity", price: "$2,500 - $10,000", icon: <Briefcase/> },
        { id: 5, title: "Website Refresh & Optimization", idealFor: "Updating existing websites", price: "$2,000 - $7,500", icon: <Zap/> },
        { id: 6, title: "SEO Jumpstart Package", idealFor: "Foundational SEO setup", price: "$1,500 - $4,000", icon: <Search/> },
        { id: 7, title: "Social Media Kickoff Package", idealFor: "Establishing social presence", price: "$1,000 - $3,500", icon: <Globe/> },
      ]
    }
  },
  specialized: {
    title: "III. Highly Specialized Retainer Packages",
    subtitle: "Ongoing, focused support in specific digital areas.",
    type: "Monthly Retainer",
       content1:"These packages offer ongoing, focused support in specific digital areas, providing continuous strategic input and execution.",

    items: {
      domestic: [
        { id: 8, title: "Dedicated SEO & Content Growth", idealFor: "Businesses prioritizing organic traffic", price: "₹40,000 - ₹1,50,000", icon: <Search/> },
        { id: 9, title: "Performance Marketing Power-Up", idealFor: "Maximizing ad spend efficiency", price: "₹50,000 - ₹2,00,000*", icon: <TrendingUp/> },
        { id: 10, title: "E-commerce Accelerator", idealFor: "Boosting online sales & UX", price: "₹60,000 - ₹2,50,000", icon: <ShoppingCart/> },
      ],
      international: [
        { id: 8, title: "Dedicated SEO & Content Growth", idealFor: "Businesses prioritizing organic traffic", price: "$2,000 - $7,500", icon: <Search/> },
        { id: 9, title: "Performance Marketing Power-Up", idealFor: "Maximizing ad spend efficiency", price: "$2,500 - $10,000*", icon: <TrendingUp/> },
        { id: 10, title: "E-commerce Accelerator", idealFor: "Boosting online sales & UX", price: "$3,000 - $12,000", icon: <ShoppingCart/> },
      ]
    }
  }
};

const addOnServices = [
    { title: "Graphic Design Projects", inr: "₹10k - ₹50k+", usd: "$500 - $2.5k+", icon: <Palette/> },
    { title: "AR Menu Development", inr: "₹1L - ₹5L+", usd: "$5k - $25k+", icon: <Code/> },
    { title: "DevOps Consulting", inr: "Hourly/Project", usd: "Hourly/Project", icon: <Wrench/> },
   { title: "Industrial / Product Design", inr: "Project-based", usd: "Project-based", icon: <Cpu/> },
    { title: "2D / 3D Visualisation", inr: "Project-based", usd: "Project-based", icon: <Layers/> },
    { title: "QA & Testing (Standalone)", inr: "Hourly/Project", usd: "Hourly/Project", icon: <TestTube/> },
    { title: "Cloud & Cyber Security", inr: "Hourly/Project", usd: "Hourly/Project", icon: <ShieldCheck/> },
      { title: "CRM Implementation", inr: "Highly variable, depends on chosen CRM platform, level of customization, and integrations", usd: "Highly variable, depends on chosen CRM platform, level of customization, and integrations", icon: <BarChartHorizontal/> },
   
];



  const packages = [
    {
      id: 1,
      title: "Brand Builder Package",
      icon: <TbBrandApple className="w-5 h-5" />,
      color: "bg-gradient-to-br from-cyan-600 to-teal-500",
      idealFor:
        "Entrepreneurs, startups, and businesses ready to establish or refresh their brand identity with a cohesive, professional, and standout image.",
      focus: "Creating a strong visual and foundational brand identity.",
      inclusions: [
        "Brand Consulting: Strategic guidance for brand positioning",
        "Logo Design (3 concepts): Professional logo concepts tailored to your brand vision",
        "Brand Style Guide: Comprehensive guidelines covering typography, color palettes, and imagery usage",
        "Business Card Design: Print-ready design for professional networking",
        "Social Media Profile Branding: Optimized graphics for key social media platforms",
        "Email Signature Design: Professional email signature for consistent branding",
        "Presentation Template (PowerPoint/Google Slides): Branded template for business presentations",
        "Print-Ready Files for Marketing Collateral: Core design files for brochures, flyers, etc.",
        "Packaging Design (Optional Add-on): Custom design for product packaging",
        "Graphic Design Services: General graphic design for initial marketing collateral",
        "2D / 3D Visualisation (Basic): Simple visual assets for branding",
      ],
      deliverable: "A complete brand identity kit ready for immediate use.",
    },
    {
      id: 2,
      title: "Website Refresh & Optimization Package",
      icon: <TbDeviceDesktop className="w-5 h-5" />,
      color: "bg-gradient-to-br from-cyan-600 to-teal-500",
      idealFor:
        "Businesses with an outdated or underperforming website that needs a modern look and better functionality without a full rebuild.",
      focus:
        "Enhancing existing web assets for better user experience and conversion.",
      inclusions: [
        "UI/UX Audit: Comprehensive review of existing website for usability and design flaws",
        "Responsive Design Update: Ensuring seamless experience across all devices",
        "Content Restructuring & Copywriting Refinement (up to 5 pages): Improving messaging and calls-to-action",
        "Speed Optimization: Enhancing website loading times",
        "Basic Security Enhancements: Implementing essential security measures",
        "Google Analytics & Search Console Setup/Review",
        "Technology Focus: Applicable to sites built on HTML, WordPress, or basic React structures",
      ],
      deliverable: "A revitalized, faster, and more user-friendly website.",
    },
    {
      id: 3,
      title: "SEO Jumpstart Package",
      icon: <TbSearch className="w-5 h-5" />,
      color: "bg-gradient-to-br from-teal-500 to-cyan-500",
      idealFor:
        "Businesses new to SEO or those needing a strong foundation to build their organic presence.",
      focus:
        "Setting up the essential elements for long-term search engine visibility.",
      inclusions: [
        "Comprehensive Keyword Research: Identifying high-impact keywords for your niche",
        "On-Page SEO Optimization (for up to 10 key pages): Meta titles, descriptions, heading tags, image alt text",
        "Technical SEO Audit: Identifying and fixing critical crawlability and indexing issues",
        "Competitor SEO Analysis: Understanding competitor strengths and weaknesses",
        "Google My Business Optimization: For local businesses",
        "Initial SEO Strategy Roadmap: A plan for ongoing SEO efforts",
      ],
      deliverable:
        "A technically sound and optimized website foundation ready for organic growth.",
    },
    {
      id: 4,
      title: "Social Media Kickoff Package",
      icon: <TbBrandInstagram className="w-5 h-5" />,
      color: "bg-gradient-to-br from-cyan-500 to-teal-500",
      idealFor:
        "Businesses looking to establish a professional and engaging presence on key social media platforms.",
      focus: "Setting up optimized profiles and an initial content strategy.",
      inclusions: [
        "Social Media Audit: Review of existing profiles (if any) and competitor analysis",
        "Profile Optimization (up to 3 platforms): Professional setup/revamp of chosen platforms (e.g., Facebook, Instagram, LinkedIn, X)",
        "Brand-Aligned Content Calendar (1 Month): A plan for initial posts, themes, and engagement strategies",
        "Basic Content Creation (6-8 initial posts/graphics)",
        "Follower Growth Strategy (organic focus)",
      ],
      deliverable:
        "Polished social media profiles and a content roadmap to kickstart engagement.",
    },
  ];
  return (
    <>


  <section>


                <div className="relative flex  h-[86vh] md:h-[67vh] w-full">
                 


                       <div className="box w-full h-full">
                               <img src="https://images.unsplash.com/photo-1681680603996-eb85ec3ceee9?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className=' hidden md:block  h-full w-full  object-center object-cover'
                  alt="  Addressable Fire Alarm System"
                  
                />

                <img
                src="https://images.unsplash.com/photo-1681680603996-eb85ec3ceee9?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className=' md:hidden  h-full w-full object-center object-cover'
                       alt="  Addressable Fire Alarm System"
                 
                />
                       </div>


                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center font-sans md:text-left font-thin text-white text-3xl md:text-6xl flex flex-col justify-center items-center h-full my-auto">
                         Our Solutions
                            <br />
                            <span className="text-center font-sans  text-[10px] md:text-[15px] pt-5 w-full md:text-start uppercase">Home /  Our Solutions
                            </span>
                        </p>
                    </div>
                </div>
                
            </section>
       

         <div className="min-h-screen w-full bg-gray-50 text-gray-800 font-sans overflow-x-hidden">
      {/* Animated Gradient Background */}
      

      <div className="container mx-auto px-4">
        {/* Header */}
   

        <div className="row flex justify-center items-center gap-8 pb-12">
        <div className="col  flex flex-col">
   <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-6"
        >
        
          <p className="text-lg  md:text-4xl text-gray-600 mt-2">Approximate Package Pricing <br /> Guide</p>
        </motion.header>
        
      <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto md:text-left text-center text-gray-500 mb-16">
            The approximate pricing for FLUX Digital's comprehensive service packages considers both the domestic (Indian) and international markets.
        </motion.p>
        </div>
  

    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-20 max-w-4xl mx-auto p-6 bg-white/60 border border-gray-200 rounded-lg backdrop-blur-sm"
        >
          <h3 className="font-bold  md:text-2xl text-lg text-teal-600 mb-3">Important Disclaimer</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            These are approximate ranges and serve as a general guide. Actual pricing for FLUX Digital's services will depend on numerous factors, including:
          </p>
          <ul className="text-gray-600 text-sm list-disc list-inside mt-2 space-y-1">
            <li>Specific Scope & Complexity</li>
            <li>Project Duration</li>
            <li>Team Allocation</li>
            <li>Market Dynamics</li>
            <li>Value Delivered</li>
            <li>Ongoing Support & Maintenance</li>
          </ul>
           <p className="text-gray-600 text-sm mt-3">*Performance Marketing budgets are exclusive of ad spend.</p>

           
        </motion.div>


        </div>
  
  
        {/* Market Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-start md:items-start items-center mb-16"
        >
          <div className="bg-white/60 border border-gray-200 rounded-full p-1 flex space-x-1 backdrop-blur-sm">
            <button 
              onClick={() => setMarket('domestic')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors relative ${market === 'domestic' ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {market === 'domestic' && <motion.div layoutId="pill" className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full" />}
              <span className="relative z-10">Domestic (INR)</span>
            </button>
            <button 
              onClick={() => setMarket('international')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors relative ${market === 'international' ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {market === 'international' && <motion.div layoutId="pill" className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full" />}
              <span className="relative z-10">International (USD)</span>
            </button>
          </div>
        </motion.div>

        {/* --- RENDER SECTIONS --- */}
        {Object.values(packagesData).map((section, sectionIndex) => (
          <PackageSection key={section.title} section={section} market={market} sectionIndex={sectionIndex} />
        ))}
        
        {/* --- CUSTOM & ADD-ON SECTION --- */}
        <CustomAndAddonSection market={market} />

        {/* Disclaimer */}
  

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="max-w-7xl mx-auto text-center  md:text-left text-gray-500 py-12">
            This pricing structure aims to provide flexibility and transparency, allowing FLUX Digital to cater to a broad spectrum of clients while ensuring profitability and high-quality service delivery across both domestic and international markets.
        </motion.p>
      </div>
    </div>


      <FluxPremiumPage />
      <Firespark />

      <div className="container-fluid  flex  justify-center items-center py-8">
        <div className=" max-w-7xl  relative z-1 bg-transparent">
          <div className="text-center mb-16">
            <span className="inline-block bg-teal-50 text-cyan-700 text-xs font-medium px-3 py-1 rounded-full mb-4 tracking-wider">
              SPECIALIZED PACKAGES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Project-Based Digital Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Focused implementations with clear deliverables designed for
              immediate business impact.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-8 mb-16 text-center border border-cyan-100">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Achieve market dominance and maximize your digital ROI
            </h3>
            <p className="  max-w-4xl mx-auto">
              Through a fully customized, continuously optimized, and
              data-driven digital ecosystem.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Header with Gradient */}
                <div className={`${pkg.color} p-6`}>
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm mr-4">
                      {pkg.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Ideal for:
                    </h4>
                    <p className="text-gray-700">{pkg.idealFor}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Focus:
                    </h4>
                    <p className="text-gray-700">{pkg.focus}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Inclusions:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FiCheck className="flex-shrink-0 mt-1 mr-3 text-cyan-500" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div className=" w-8/12">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Deliverable:
                        </h4>
                        <p className="text-gray-900 font-medium">
                          {pkg.deliverable}
                        </p>
                      </div>
                      <button className="flex text-sm items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                        Get Started
                        <FiArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comprehensive CTA */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Specialized & Project-Based Packages
              </h3>
              <p className="text-cyan-50 mb-6 max-w-2xl mx-auto">
                These packages are designed for clients with specific, immediate
                needs or a focused area of investment.
              </p>
              <button className="bg-white text-cyan-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all inline-flex items-center">
                Request Custom Solution
                <FiArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



 