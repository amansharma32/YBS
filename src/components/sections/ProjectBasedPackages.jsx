import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { 
  TbBrandApple, 
  TbDeviceDesktop, 
  TbSearch, 
  TbBrandInstagram 
} from 'react-icons/tb';

import {   FiTrendingUp, FiDollarSign, FiShoppingCart } from 'react-icons/fi';
 

 
import { motion, useInView } from 'framer-motion';
import { Target, BarChart2, ShoppingCart, CheckCircle } from 'lucide-react';

// --- DATA ---
// const retainerPackages = [
//     {
//         icon: <Target className="w-8 h-8" />,
//         title: "Dedicated SEO & Content Growth",
//         idealFor: "Businesses prioritizing organic traffic and aiming to become thought leaders in their industry.",
//         focus: "Consistent content creation, technical SEO, and link building for sustained organic growth.",
//         inclusions: [
//             "Monthly Comprehensive Keyword Research & Trend Analysis",
//             "Technical SEO Monitoring & Maintenance",
//             "High-Quality Blog Content Creation (4-6 posts/month) & Optimization",
//             "Link Building & Digital PR Outreach",
//             "Monthly Performance Reporting: Detailed analytics on organic traffic, rankings, and conversions",
//             "Competitor Monitoring"
//         ],
//         cta: "Boost Organic Growth",
//         color: "cyan"
//     },
//     {
//         icon: <BarChart2 className="w-8 h-8" />,
//         title: "Performance Marketing Power-Up",
//         subtitle: "(PPC & Paid Social)",
//         idealFor: "Businesses focused on immediate lead generation, sales, and maximizing ad spend efficiency.",
//         focus: "Strategic planning, execution, and optimization of paid advertising campaigns.",
//         inclusions: [
//             "Multi-Platform Ad Strategy & Setup (Google Ads, Facebook/Instagram Ads, LinkedIn Ads)",
//             "Ongoing Campaign Management & Optimization",
//             "Conversion Tracking & Analytics Setup",
//             "Monthly Budget Management & Recommendations",
//             "A/B Testing & Creative Optimization",
//             "Detailed Monthly Performance Reports: Focus on ROI, cost-per-lead/sale, and ROAS"
//         ],
//         cta: "Maximize Ad Performance",
//         color: "cyan"
//     },
//     {
//         icon: <ShoppingCart className="w-8 h-8" />,
//         title: "E-commerce Accelerator",
//         subtitle: "(Specific for Online Stores)",
//         idealFor: "E-commerce businesses needing specialized support to boost online sales and user experience.",
//         focus: "Optimizing the online store for conversions and customer lifetime value.",
//         inclusions: [
//             "E-commerce Platform Optimization (e.g., Shopify, WooCommerce)",
//             "Product Listing Optimization (SEO for products)",
//             "Conversion Rate Optimization (CRO) Implementation",
//             "Email Marketing Automation for E-commerce",
//             "Retargeting & Dynamic Product Ads Management",
//             "Inventory & Product Feed Management Support",
//             "Monthly E-commerce Sales & Conversion Reporting"
//         ],
//         cta: "Accelerate Online Sales",
//         color: "cyan"
//     }
// ];



import { useState, useEffect, useRef } from 'react';
import {   AnimatePresence,   } from 'framer-motion';
import {   ArrowRight, Zap, PenTool, Camera, Smartphone, Shield, Handshake, Search, BookOpen, BarChart, Code, Layers, Bot, Orbit, Menu, TestTube, Cloud, BrainCircuit, X } from 'lucide-react';

// --- DATA ---
const retainerPackages = [
    {
        id: 'seo',
        icon: <Target className="w-10 h-10" />,
        title: "Dedicated SEO & Content Growth",
        idealFor: "Businesses prioritizing organic traffic and aiming to become thought leaders in their industry.",
        focus: "Consistent content creation, technical SEO, and link building for sustained organic growth.",
        inclusions: [
            "Monthly Comprehensive Keyword Research & Trend Analysis",
            "Technical SEO Monitoring & Maintenance",
            "High-Quality Blog Content Creation (4-6 posts/month) & Optimization",
            "Link Building & Digital PR Outreach",
            "Monthly Performance Reporting: Detailed analytics on organic traffic, rankings, and conversions",
            "Competitor Monitoring"
        ],
        cta: "Boost Organic Growth",
        color: "cyan"
    },
    {
        id: 'ppc',
        icon: <BarChart2 className="w-10 h-10" />,
        title: "Performance Marketing Power-Up",
        subtitle: "(PPC & Paid Social)",
        idealFor: "Businesses focused on immediate lead generation, sales, and maximizing ad spend efficiency.",
        focus: "Strategic planning, execution, and optimization of paid advertising campaigns.",
        inclusions: [
            "Multi-Platform Ad Strategy & Setup (Google Ads, Facebook/Instagram Ads, LinkedIn Ads)",
            "Ongoing Campaign Management & Optimization",
            "Conversion Tracking & Analytics Setup",
            "Monthly Budget Management & Recommendations",
            "A/B Testing & Creative Optimization",
            "Detailed Monthly Performance Reports: Focus on ROI, cost-per-lead/sale, and ROAS"
        ],
        cta: "Maximize Ad Performance",
        color: "violet"
    },
    {
        id: 'ecommerce',
        icon: <ShoppingCart className="w-10 h-10" />,
        title: "E-commerce Accelerator",
        subtitle: "(Specific for Online Stores)",
        idealFor: "E-commerce businesses needing specialized support to boost online sales and user experience.",
        focus: "Optimizing the online store for conversions and customer lifetime value.",
        inclusions: [
            "E-commerce Platform Optimization (e.g., Shopify, WooCommerce)",
            "Product Listing Optimization (SEO for products)",
            "Conversion Rate Optimization (CRO) Implementation",
            "Email Marketing Automation for E-commerce",
            "Retargeting & Dynamic Product Ads Management",
            "Inventory & Product Feed Management Support",
            "Monthly E-commerce Sales & Conversion Reporting"
        ],
        cta: "Accelerate Online Sales",
        color: "fuchsia"
    }
];

const fluxCustomProcess = [
    { title: "In-depth Discovery & Requirements Gathering", description: "Detailed workshops to understand goals, challenges, and technical specifications." },
    { title: "Custom Proposal & Scope Definition", description: "Tailored solution outlining services, deliverables, timelines, and pricing." },
    { title: "Dedicated Team Allocation", description: "Assigning a specialized team with relevant expertise and project management oversight." },
    { title: "Agile Methodology", description: "Flexible and iterative approach to development and marketing initiatives." },
    { title: "Continuous Optimization & Strategy", description: "Regular reviews, data analysis, and proactive strategic recommendations." },
    { title: "AI Automation Consultation & Implementation", description: "Tailored AI solutions for specific business processes." },
    { title: "On-Demand 3D Website Creation", description: "Custom development of immersive 3D web experiences." },
    { title: "AR Menu Development", description: "Custom development of augmented reality menus." },
    { title: "Mobile App Development", description: "Custom iOS/Android app development." },
    { title: "Quality Assurance & Testing", description: "Comprehensive testing for all custom solutions." },
    { title: "Cloud Services & Cyber Security Consulting", description: "Strategic guidance for robust cloud infrastructure and security." },
    { title: "Human Machine Interface (HMI) Design", description: "Designing intuitive interactions for complex systems." }
];

const addonServices = [
    { icon: <PenTool />, title: "Graphic Design" },
    { icon: <Zap />, title: "Branding & Logo" },
    { icon: <Camera />, title: "Photography & Videography" },
    { icon: <Smartphone />, title: "App Development" },
    { icon: <Shield />, title: "Reputation Management" },
    { icon: <Handshake />, title: "CRM Implementation" },
    { icon: <Search />, title: "Lead Generation" },
    { icon: <BookOpen />, title: "Training & Workshops" },
    { icon: <BarChart />, title: "Advanced Analytics" },
    { icon: <Code />, title: "Technical SEO Audits" },
    { icon: <Layers />, title: "Interactive Development" },
    { icon: <Code />, title: "Frontend Development" },
    { icon: <Code />, title: "Backend Development" },
    { icon: <ShoppingCart />, title: "Custom Shopify Dev" },
    { icon: <Code />, title: "WordPress Customization" },
    { icon: <Orbit />, title: "3D Website Creation" },
    { icon: <Menu />, title: "AR Menu Development" },
    { icon: <Bot />, title: "AI Automation Strategy" },
    { icon: <Layers />, title: "DevOps Consulting" },
    { icon: <PenTool />, title: "Industrial / Product Design" },
    { icon: <Orbit />, title: "2D / 3D Visualisation" },
    { icon: <TestTube />, title: "QA & Testing" },
    { icon: <Cloud />, title: "Cloud & Cyber Security" },
    { icon: <BrainCircuit />, title: "HMI Design" },
];

// --- UI COMPONENTS ---

const ParticlesBackground = () => {
    useEffect(() => {
        const scriptId = 'tsparticles-script';
        if (document.getElementById(scriptId)) {
            if (window.tsParticles) {
                 window.tsParticles.load("tsparticles", {
                    background: { color: { value: '#f9fafb' } }, // gray-50
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: 'grab' } },
                        modes: { grab: { distance: 150, links: { opacity: 0.5 } } }
                    },
                    particles: {
                        color: { value: '#6b7280' }, // gray-500
                        links: { color: '#60a5fa', distance: 150, enable: true, opacity: 0.3, width: 1 },
                        move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: true, speed: 0.5, straight: false },
                        number: { density: { enable: true }, value: 50 },
                        opacity: { value: 0.4 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 3 } }
                    },
                    detectRetina: true,
                });
            }
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://cdn.jsdelivr.net/npm/tsparticles-slim@2.12.0/tsparticles.slim.bundle.min.js";
        script.async = true;

        script.onload = () => {
            if (window.tsParticles) {
                
                window.tsParticles.load("tsparticles", {
                    background: { color: { value: '#f9fafb' } },
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: 'grab' } },
                        modes: { grab: { distance: 150, links: { opacity: 0.5 } } }
                    },
                    particles: {
                        color: { value: '#6b7280' },
                        links: { color: '#60a5fa', distance: 150, enable: true, opacity: 0.3, width: 1 },
                        move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: true, speed: 0.5, straight: false },
                        number: { density: { enable: true }, value: 50 },
                        opacity: { value: 0.4 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 3 } }
                    },
                    detectRetina: true,
                });
            }
        };

        document.body.appendChild(script);
    }, []);

    return <div id="tsparticles" style={{ position: 'relative', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
};

const PackageNode = ({ pack, onSelect, isSelected, isAnySelected }) => {
    const colorClasses = {
        cyan: { text: 'text-cyan-600', border: 'border-cyan-400/50', bg: 'bg-cyan-400/10' },
        violet: { text: 'text-violet-600', border: 'border-violet-400/50', bg: 'bg-violet-400/10' },
        fuchsia: { text: 'text-fuchsia-600', border: 'border-fuchsia-400/50', bg: 'bg-fuchsia-400/10' }
    };
    const theme = colorClasses[pack.color];

    return (
        <motion.div
            layoutId={`package-node-${pack.id}`}
            onClick={() => onSelect(pack)}
            className={`relative cursor-pointer transition-all duration-500 ${isAnySelected && !isSelected ? 'opacity-40 scale-90' : 'opacity-100 scale-100'}`}
            whileHover={{ scale: 1.05 }}
        >
            <div className={`w-48 h-48 rounded-full border ${theme.border} flex flex-col justify-center items-center text-center p-4 bg-white/50 backdrop-blur-sm`}>
                <motion.div layoutId={`package-icon-${pack.id}`} className={theme.text}>{pack.icon}</motion.div>
                <motion.h3 layoutId={`package-title-${pack.id}`} className="mt-2 text-gray-800 font-bold">{pack.title}</motion.h3>
            </div>
            <motion.div className={`absolute inset-0 rounded-full ${theme.bg} blur-2xl opacity-80`}></motion.div>
        </motion.div>
    );
};

const PackageDetailView = ({ pack, onDeselect }) => {
    const colorClasses = {
        cyan: { text: 'text-cyan-600', border: 'border-cyan-400/50', button: 'bg-cyan-500 hover:bg-cyan-600' },
        violet: { text: 'text-violet-600', border: 'border-violet-400/50', button: 'bg-violet-500 hover:bg-violet-600' },
        fuchsia: { text: 'text-fuchsia-600', border: 'border-fuchsia-400/50', button: 'bg-fuchsia-500 hover:bg-fuchsia-600' }
    };
    const theme = colorClasses[pack.color];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`absolute inset-0 z-20 bg-white/70 backdrop-blur-2xl p-8 rounded-2xl border ${theme.border} overflow-y-auto shadow-2xl`}
        >
            <div className="relative">
                <motion.button onClick={onDeselect} className="absolute top-0 right-0 text-gray-500 hover:text-gray-800" whileHover={{ scale: 1.2, rotate: 90 }}>
                    <X />
                </motion.button>
                <div className="flex items-center mb-6">
                    <motion.div layoutId={`package-icon-${pack.id}`} className={`${theme.text} mr-4`}>{pack.icon}</motion.div>
                    <div>
                        <motion.h3 layoutId={`package-title-${pack.id}`} className="text-3xl font-bold text-gray-900">{pack.title}</motion.h3>
                        {pack.subtitle && <p className="text-md text-gray-500">{pack.subtitle}</p>}
                    </div>
                </div>
                <div className="my-6 border-t border-gray-200"></div>
                <div className="space-y-3 mb-6 text-gray-600">
                    <p><strong className="text-gray-800">Ideal For:</strong> {pack.idealFor}</p>
                    <p><strong className="text-gray-800">Focus:</strong> {pack.focus}</p>
                </div>
                <h4 className="font-semibold text-gray-800 mb-4">Core Inclusions:</h4>
                <ul className="space-y-3 mb-8">
                    {pack.inclusions.map((item, i) => (
                        <motion.li key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                        </motion.li>
                    ))}
                </ul>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className={`w-full py-3 px-6 text-white font-bold rounded-lg transition-all duration-300 shadow-lg ${theme.button}`}>
                    {pack.cta}
                </motion.button>
            </div>
        </motion.div>
    );
};

const FluxCustomSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-20  container-fluid ">
            <div className=" mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">The "FLUX Custom" Solution</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">A bespoke engagement where FLUX Digital acts as an extension of your team for complex projects and unique digital needs.</p>
                </motion.div>
                 <div className="grid lg:grid-cols-1 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-200/80 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ideal For</h3>
                        <p className="text-gray-600 mb-6">Large enterprises, complex projects, or businesses with highly unique and evolving digital needs that do not fit neatly into a pre-defined package.</p>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Approach</h3>
                        <p className="text-gray-600">A bespoke engagement where FLUX Digital acts as an extension of the client's team.</p>
                    </motion.div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">Our Process</h3>
                        <div className="space-y-4">
                            {fluxCustomProcess.map((item, index) => (
                                <motion.div key={item.title} initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }} className="flex items-start">
                                    <div className="flex-shrink-0 bg-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">{index + 1}</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AddonSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section ref={ref} className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Add-on Services</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Available for any package, or for custom quotes.</p>
                </motion.div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {addonServices.map((service, index) => (
                        <motion.div key={service.title} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.03 }} className="text-center bg-white/60 backdrop-blur-xl p-4 rounded-xl border border-gray-200/80 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-center items-center mb-3 text-cyan-600">{service.icon}</div>
                            <h4 className="font-semibold text-sm text-gray-700">{service.title}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



// --- UI COMPONENTS ---

const AuroraBackground = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
            initial={{ opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-300/30 rounded-full filter blur-3xl animate-pulse"
        />
        <motion.div
            initial={{ opacity: 0, x: '50%', y: '50%' }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-300/30 rounded-full filter blur-3xl animate-pulse animation-delay-2000"
        />
         <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-violet-300/30 rounded-full filter blur-3xl animate-pulse animation-delay-4000"
        />
    </div>
);

const PackageCard = ({ pack, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const colorClasses = {
        cyan: {
            icon: 'text-cyan-600',
            button: 'bg-cyan-600 hover:bg-cyan-700',
            shadow: 'hover:shadow-cyan-500/20'
        },
        violet: {
            icon: 'text-violet-600',
            button: 'bg-violet-500 hover:bg-violet-600',
            shadow: 'hover:shadow-violet-500/20'
        },
        fuchsia: {
            icon: 'text-fuchsia-600',
            button: 'bg-fuchsia-500 hover:bg-fuchsia-600',
            shadow: 'hover:shadow-fuchsia-500/20'
        }
    };
    
    const currentTheme = colorClasses[pack.color] || colorClasses.cyan;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            className={`bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-200/80 transition-all duration-300 flex flex-col h-full shadow-lg ${currentTheme.shadow}`}
        >
            <div className={`mb-6 ${currentTheme.icon}`}>
                {pack.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{pack.title}</h3>
            {pack.subtitle && <p className="text-sm text-gray-500 mb-4">{pack.subtitle}</p>}
            
            <div className="my-6 border-t border-gray-200"></div>

            <div className="space-y-2 mb-6">
                <p className="text-gray-600"><strong className="text-gray-800">Ideal For:</strong> {pack.idealFor}</p>
                <p className="text-gray-600"><strong className="text-gray-800">Focus:</strong> {pack.focus}</p>
            </div>
            
            <div className="mb-8 flex-grow">
                <h4 className="font-semibold text-gray-800 mb-4">Core Inclusions:</h4>
                <ul className="space-y-3">
                    {pack.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-auto py-3 px-6 text-white font-bold rounded-lg transition-all duration-300 shadow-lg ${currentTheme.button}`}
            >
                {pack.cta}
            </motion.button>
        </motion.div>
    );
};


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

  const [selectedPackage, setSelectedPackage] = useState(null);

   


  return (
    <>

    <div className="    py-24 px-4 ">
      <div className=" mx-auto flex flex-col  justify-center items-center">
        {/* Section Header */}

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



     </div>
         


<div className="relative min-h-screen bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
            <AuroraBackground />
            <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="text-sm font-bold uppercase tracking-widest text-cyan-600 mb-4">
                        HIGHLY SPECIALIZED RETAINER PACKAGES
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Ongoing Services for Core Digital Areas
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        For clients with very specific and ongoing needs in one core area, requiring continuous strategic input and execution.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {retainerPackages.map((pack, index) => (
                        <PackageCard key={pack.title} pack={pack} index={index} />
                    ))}
                </div>
            </div>
        </div>



  <div className="relative  bg-gray-50 font-sans text-gray-800 overflow-x-hidden py-9">
            <ParticlesBackground />
            <div className="relative z-10">
           
                <main>
                    <div className="container-fluid mx-auto px-4">
                        <div className="relative  h-[78vh] flex justify-center items-center">
                            <AnimatePresence>
                                {selectedPackage ? (
                                    <PackageDetailView pack={selectedPackage} onDeselect={() => setSelectedPackage(null)} />
                                ) : (
                                    <motion.div className="flex justify-center items-center gap-8  ">
                                        {retainerPackages.map((pack) => (
                                            <PackageNode key={pack.id} pack={pack} onSelect={setSelectedPackage} isSelected={false} isAnySelected={false} />
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    
                    <div className={`transition-all duration-500 ${selectedPackage ? ' ' : ' '}`}>
                        <FluxCustomSection />
                        <AddonSection />
                    </div>
                </main>

          
            </div>
        </div>


      </div>
    </div>

    

    
    </>



  );
};

export default ProjectPackages;