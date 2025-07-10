import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { 
  TbBrandApple, 
  TbDeviceDesktop, 
  TbSearch, 
  TbBrandInstagram 
} from 'react-icons/tb';

import {   FiTrendingUp, FiDollarSign, FiShoppingCart } from 'react-icons/fi';


const ProjectPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Brand Builder Package",
      icon: <TbBrandApple className="w-5 h-5" />,
      color: "bg-gradient-to-br from-cyan-600 to-teal-500",
      idealFor: "Entrepreneurs, startups, and businesses ready to establish or refresh their brand identity with a cohesive, professional, and standout image.",
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
        "2D / 3D Visualisation (Basic): Simple visual assets for branding"
      ],
      deliverable: "A complete brand identity kit ready for immediate use."
    },
    {
      id: 2,
      title: "Website Refresh & Optimization Package",
      icon: <TbDeviceDesktop className="w-5 h-5" />,
      color: "bg-gradient-to-br from-cyan-600 to-teal-500",
      idealFor: "Businesses with an outdated or underperforming website that needs a modern look and better functionality without a full rebuild.",
      focus: "Enhancing existing web assets for better user experience and conversion.",
      inclusions: [
        "UI/UX Audit: Comprehensive review of existing website for usability and design flaws",
        "Responsive Design Update: Ensuring seamless experience across all devices",
        "Content Restructuring & Copywriting Refinement (up to 5 pages): Improving messaging and calls-to-action",
        "Speed Optimization: Enhancing website loading times",
        "Basic Security Enhancements: Implementing essential security measures",
        "Google Analytics & Search Console Setup/Review",
        "Technology Focus: Applicable to sites built on HTML, WordPress, or basic React structures"
      ],
      deliverable: "A revitalized, faster, and more user-friendly website."
    },
    {
      id: 3,
      title: "SEO Jumpstart Package",
      icon: <TbSearch className="w-5 h-5" />,
      color: "bg-gradient-to-br from-teal-500 to-cyan-500",
      idealFor: "Businesses new to SEO or those needing a strong foundation to build their organic presence.",
      focus: "Setting up the essential elements for long-term search engine visibility.",
      inclusions: [
        "Comprehensive Keyword Research: Identifying high-impact keywords for your niche",
        "On-Page SEO Optimization (for up to 10 key pages): Meta titles, descriptions, heading tags, image alt text",
        "Technical SEO Audit: Identifying and fixing critical crawlability and indexing issues",
        "Competitor SEO Analysis: Understanding competitor strengths and weaknesses",
        "Google My Business Optimization: For local businesses",
        "Initial SEO Strategy Roadmap: A plan for ongoing SEO efforts"
      ],
      deliverable: "A technically sound and optimized website foundation ready for organic growth."
    },
    {
      id: 4,
      title: "Social Media Kickoff Package",
      icon: <TbBrandInstagram className="w-5 h-5" />,
      color: "bg-gradient-to-br from-cyan-500 to-teal-500",
      idealFor: "Businesses looking to establish a professional and engaging presence on key social media platforms.",
      focus: "Setting up optimized profiles and an initial content strategy.",
      inclusions: [
        "Social Media Audit: Review of existing profiles (if any) and competitor analysis",
        "Profile Optimization (up to 3 platforms): Professional setup/revamp of chosen platforms (e.g., Facebook, Instagram, LinkedIn, X)",
        "Brand-Aligned Content Calendar (1 Month): A plan for initial posts, themes, and engagement strategies",
        "Basic Content Creation (6-8 initial posts/graphics)",
        "Follower Growth Strategy (organic focus)"
      ],
      deliverable: "Polished social media profiles and a content roadmap to kickstart engagement."
    }
  ];


    const retainers = [
    {
      id: 1,
      title: "Dedicated SEO & Content Growth",
      icon: <FiTrendingUp className="w-5 h-5" />,
      color: "from-teal-500 to-cyan-500",
      idealFor: "Businesses prioritizing organic traffic and aiming to become thought leaders in their industry.",
      focus: "Consistent content creation, technical SEO, and link building for sustained organic growth.",
      features: [
        "Monthly Comprehensive Keyword Research & Trend Analysis",
        "Technical SEO Monitoring & Maintenance",
        "High-Quality Blog Content Creation (4-6 posts/month) & Optimization",
        "Link Building & Digital PR Outreach",
        "Monthly Performance Reporting: Detailed analytics on organic traffic, rankings, and conversions",
        "Competitor Monitoring"
      ],
      cta: "Boost Organic Growth"
    },
    {
      id: 2,
      title: "Performance Marketing Power-Up",
      icon: <FiDollarSign className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      idealFor: "Businesses focused on immediate lead generation, sales, and maximizing ad spend efficiency.",
      focus: "Strategic planning, execution, and optimization of paid advertising campaigns.",
      features: [
        "Multi-Platform Ad Strategy & Setup (Google Ads, Facebook/Instagram Ads, LinkedIn Ads - chosen 2-3 platforms)",
        "Ongoing Campaign Management & Optimization: Daily bid adjustments, ad copy testing, audience refinement",
        "Conversion Tracking & Analytics Setup",
        "Monthly Budget Management & Recommendations",
        "A/B Testing & Creative Optimization",
        "Detailed Monthly Performance Reports: Focus on ROI, cost-per-lead/sale, and ROAS"
      ],
      cta: "Maximize Ad Performance"
    },
    {
      id: 3,
      title: "E-commerce Accelerator",
      icon: <FiShoppingCart className="w-5 h-5" />,
      color: "from-fuchsia-500 to-orange-500",
      idealFor: "E-commerce businesses needing specialized support to boost online sales and user experience.",
      focus: "Optimizing the online store for conversions and customer lifetime value.",
      features: [
        "E-commerce Platform Optimization (Shopify, WooCommerce): Product page optimization, checkout flow improvements",
        "Product Listing Optimization (SEO for products)",
        "Conversion Rate Optimization (CRO) Implementation: A/B testing, user behavior analysis",
        "Email Marketing Automation: Abandoned cart recovery, post-purchase sequences",
        "Retargeting & Dynamic Product Ads Management",
        "Inventory & Product Feed Management Support",
        "Monthly E-commerce Sales & Conversion Reporting"
      ],
      cta: "Accelerate Online Sales"
    }
  ];

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Focused implementations with clear deliverables designed for immediate business impact.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-8 mb-16 text-center border border-cyan-100">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Achieve market dominance and maximize your digital ROI
          </h3>
          <p className="  max-w-4xl mx-auto">
            Through a fully customized, continuously optimized, and data-driven digital ecosystem.
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
                  <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Ideal for:</h4>
                  <p className="text-gray-700">{pkg.idealFor}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Focus:</h4>
                  <p className="text-gray-700">{pkg.focus}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Inclusions:</h4>
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
                    <div className=' w-8/12'>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Deliverable:</h4>
                      <p className="text-gray-900 font-medium">{pkg.deliverable}</p>
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
            <h3 className="text-2xl font-bold text-white mb-3">Specialized & Project-Based Packages</h3>
            <p className="text-cyan-50 mb-6 max-w-2xl mx-auto">
              These packages are designed for clients with specific, immediate needs or a focused area of investment.
            </p>
            <button className="bg-white text-cyan-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all inline-flex items-center">
              Request Custom Solution
              <FiArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

         <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full mb-4 tracking-wider">
            ONGOING STRATEGIC SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Highly Specialized <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Retainer Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous optimization and execution for businesses with specific, ongoing needs in core digital areas.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {retainers.map((retainer) => (
            <div key={retainer.id} className="group relative h-full">
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${retainer.color} rounded-xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${retainer.color} p-6`}>
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm mr-4">
                      {retainer.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{retainer.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Ideal For</h4>
                    <p className="text-gray-700">{retainer.idealFor}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Primary Focus</h4>
                    <p className="text-gray-700">{retainer.focus}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Core Inclusions</h4>
                    <ul className="space-y-3">
                      {retainer.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <FiCheck className="flex-shrink-0 mt-1 mr-3 text-cyan-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <button className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r ${retainer.color} hover:shadow-lg transition-all`}>
                    {retainer.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
     
      </div>
    </div>


      </div>
    </div>
  );
};

export default ProjectPackages;