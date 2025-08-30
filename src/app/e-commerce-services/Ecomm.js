"use client";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Handshake, LinkIcon, Sparkles, TabletSmartphone, Users } from "lucide-react";
import React, { useRef, useState } from "react";
import { Store, Cpu, Palette, ArrowRight } from "lucide-react";
import WhyUsInnovativeSection from "@/components/sections/WhyUsInnovativeSection";
import { Shield, Scaling, Clock, Lock } from "lucide-react";
import { TrendingUp, Gem, Trophy } from "lucide-react";

import { Rocket, Settings, FlaskConical, Cloud, Monitor } from "lucide-react";
import { GitBranch, PlayCircle, Activity, Database, Ban } from "lucide-react";

import { BarChart4, Globe2, GraduationCap, ShieldCheck } from "lucide-react";
import Link from "next/link";

import {
  Briefcase,
  Layers,
  Search,  
   LayoutDashboard,
  HardDrive,
  CodeSquare,
} from 'lucide-react';

import {
  GitFork,
  ShoppingCart,
  
  Smartphone,
  Split,
  User,
  CreditCard,
    
} from 'lucide-react';


const caseStudies = [
  {
    title: "Translating Interior Aesthetics into Intuitive Web Experiences",
    imgsrc:
      "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/decodive_11zon_o02wag.webp",
    logoimg:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811688/Adhunik_DecoDive_Logo_povt7l.webp",

    description: (
      <>
        <ul className=" list-disc ps-4 ">
          <li>Modern Website for a Premium Interior Brand</li>
          <li>Elegant UI That Reflects Aesthetic Expertise</li>
          <li>High-Performance, Mobile-First Experience</li>
          <li>Built with SEO & Speed in Mind</li>
        </ul>
      </>
    ),
    icon: <BarChart4 className="w-8 h-8" />,
    cta: "View Case Study",
    color: "bg-gradient-to-br from-teal-500 to-emerald-600",
    results: ["+300% insights", "92% adoption rate"],
  },

  {
    title: "  Intuitive Interface for Complex Engineering Products",
    logoimg: "https://www.adhunikpowertech.com/we.svg",
    imgsrc:
      "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/adhunik_11zon_shrb78.webp",
    description: (
      <>
        <ul className=" list-disc ps-4 ">
          <li>Fast, Secure, and Mobile-Optimized</li>
          <li>Built for Search. Designed for Impact.</li>
          <li>High-Performance Website, Minimal Load Times</li>
          <li>Optimized Digital Experience for Technical Audiences</li>
        </ul>
      </>
    ),
    icon: <Users className="w-8 h-8" />,
    cta: "Explore Project",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    results: ["42% conversion lift", "28% retention boost"],
  },

  {
    title: "Fueling Growth for a Fast-Moving FMCG Brand Online",
    imgsrc:
      "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/blackbites_11zon_gxi5nn.webp",
    logoimg:
      "https://blackbites.in/cdn/shop/files/BB-BHgi6px2-modified.png?v=1723010888&width=300",

    description: (
      <>
        <ul className=" list-disc ps-4 ">
          <li> Integrated Cart & Smooth Checkout Flow</li>
          <li>Performance-Optimized E-commerce Platform</li>
          <li>Custom CMS for Easy Inventory & Offers Management</li>
          <li>Built for FMCG Scale and Digital Reach</li>
        </ul>
      </>
    ),
    icon: <Globe2 className="w-8 h-8" />,
    cta: "See Results",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    results: ["5x performance", "Global deployment"],
  },

  {
    title: "Building a Reliable Digital Presence for Fire Safety Experts",
    imgsrc:
      "https://res.cloudinary.com/dkbusg4bq/image/upload/v1754127636/zedex_fire_krrzfc.webp",
    logoimg:
      "https://www.zedexfire.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgx5cntyb%2Fimage%2Fupload%2Fv1747476068%2FZedex_Fire_Logo_2025_PNG_New_1_1_ec1hlx.webp&w=384&q=75",

    description: (
      <>
        <ul className=" list-disc ps-4 ">
          <li>Smooth Navigation Through Products & Solutions</li>
          <li>B2B-Focused Webflow with Enquiry Conversion in Mind</li>
          <li>Mobile-Optimized & SEO-Ready</li>
          <li>Clean Architecture for Complex Service Offerings</li>
        </ul>
      </>
    ),
    icon: <GraduationCap className="w-8 h-8" />,
    cta: "Learn More",
    color: "bg-gradient-to-br from-indigo-500 to-violet-600",
    results: ["60% faster onboarding", "94% satisfaction"],
  },
];

export default function Ecomm() {

  const WebDevServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const webDevServicesData = [
      {
    title: "Partnerships with Industry Leaders",
    description:
      "Leveraging strategic alliances with technology leaders, we build your storefront on a foundation of enhanced security, seamless integration, and cutting-edge technology.",
    icon: <Handshake className="h-6 w-6 mr-3 text-teal-400" />,
  },
  {
    title: "Unified Omnichannel Experience",
    description:
      "We specialize in creating a consistent brand presence across all channels—online, mobile, and in-store—for a unified and seamless customer experience.",
    icon: <TabletSmartphone className="h-6 w-6 mr-3 text-teal-400" />,
  },
  {
    title: "Proven Track Record",
    description:
      "With a portfolio of successful projects and years of expertise, we have a demonstrated ability to boost conversions, improve user experience, and drive tangible business growth.",
    icon: <Trophy className="h-6 w-6 mr-3 text-teal-400" />,
  },
  {
    title: "Dedicated and Certified Experts",
    description:
      "Our team of qualified and extensively trained professionals is equipped to handle even the most complex development challenges, providing top-tier solutions that help your business thrive.",
    icon: <GraduationCap className="h-6 w-6 mr-3 text-teal-400" />,
  },
    ];

    return (
      <section
        ref={ref}
        className="py-20 md:py-32   bg-transparent  relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6  ">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <span className="inline-block py-2.5 px-5 mb-6 text-xs font-semibold tracking-widest text-cyan-600 uppercase bg-cyan-100/50 rounded-full border border-cyan-200 backdrop-blur-sm">
              Our Expertise
            </span>
            <h2 className=" text-lg md:text-4xl  font-bold text-gray-900  mb-3 md:mb-6 leading-tight">
             Why Choose Us for E-commerce Development Services ?

            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Are you ready to choose a reliable digital partner to help with your e-commerce development ? We stand out as a top e-commerce development company for many reasons.

 </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {webDevServicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-100 hover:border-cyan-200 transition-all duration-500 flex flex-col h-full"
              >
                <div className=" absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>

                <div className="relative z-10 p-8 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className=" flex text-cyan-600 items-center justify-center h-14 w-14 rounded-full    ">
                      {service.icon}
                    </div>

                    <h3 className=" text-lg   font-semibold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className=" text-gray-600 text-sm   leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <a
                    href={service.link}
                    className="inline-flex items-center text-cyan-600 font-semibold group-hover:text-cyan-800 transition-colors duration-300 mt-auto"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

 
 const webDevelopmentProcessSteps = [
  {
    id: "user-research",
    title: "Discovery and User Research",
    content: "Our process begins with an in-depth discovery phase. We work with your team to understand your business model, goals, and pain points. By analyzing your target audience and market, we gain the insights needed to craft a solution that is perfectly aligned with your business objectives.",
    image: "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "platform-assessment",
    title: "Platform Assessment and Strategy",
    content: "Based on our research, we assess various e-commerce platforms to find the one that best fits your specific business processes and goals. We analyze each platform's features, scalability, and functionality to recommend the most suitable and effective solution for you.",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "design-copywriting",
    title: "Design and Content Creation",
    content: "We create a clear information architecture to ensure your site is easy to navigate and highly functional. Our design and copywriting teams work together to produce a visually appealing interface and compelling content that not only captures user attention but also drives engagement and conversions.",
    image: "https://images.unsplash.com/photo-1542289539-059dea254938?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    content: "We develop a detailed technical roadmap, selecting the optimal technologies and tools for both frontend and backend development. Our focus is on building a robust, high-performing application with an exceptional user experience that maximizes your return on investment and accelerates business growth.",
    image: "https://images.unsplash.com/photo-1634838128617-efdf64411694?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance and Testing",
    content: "Every product we develop undergoes rigorous quality assurance to ensure it is bug-free and performs flawlessly. Our expert QA testers use a combination of automated and manual testing to identify and resolve any issues, guaranteeing a smooth and reliable user experience.",
    image: "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "cms-training-deployment",
    title: "Deployment and CMS Training",
    content: "After development is complete, we handle the deployment of your solution to your systems. We then provide comprehensive training to your team, ensuring they are fully prepared to manage the platform and maintain smooth, uninterrupted operations.",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "support-maintenance",
    title: "Ongoing Support and Optimization",
    content: "Our partnership continues long after launch. We offer ongoing technical support and proactive maintenance, including regular updates and bug fixes, to ensure your platform remains high-performing, secure, and always ready to capture sales opportunities.",
    image: "https://images.unsplash.com/photo-1635875060146-80ec95d47043?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


 
  // WebDevelopmentProcessSection Component Definition
  const WebDevelopmentProcessSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [openItemId, setOpenItemId] = useState(
      webDevelopmentProcessSteps[0].id
    );
    const activeItem = webDevelopmentProcessSteps.find(
      (item) => item.id === openItemId
    );

    return (
      <section ref={ref} className="py-24 md:py-32    ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="inline-block py-2 px-5 mb-6 text-xs font-semibold tracking-widest text-cyan-300 uppercase bg-cyan-900/50 rounded-full border border-cyan-800">
              Our Methodology
            </span>
            <p className=" text-lg md:text-4xl text-gray-700  font-bold   mb-6 leading-tight">
              A Refined Development{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Workflow
              </span>
            </p>
            <p className="text-sm   text-gray-500 max-w-3xl mx-auto">
              From initial concept to final deployment, we follow a structured
              process to ensure quality, efficiency, and exceptional results.
            </p>
          </motion.div>

          <div className="lg:grid flex  flex-col-reverse lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Accordion */}
            <div className="lg:col-span-6 space-y-2 ">
              {webDevelopmentProcessSteps.map((item, id) => (
                <div
                  key={item.id}
                  className="rounded-lg   border-[1px] border-gray-200 transition-colors duration-300"
                >
                  <button
                    type="button"
                    className="flex justify-between items-center w-full p-5 md:p-6 text-left"
                    onClick={() => setOpenItemId(item.id)}
                  >
                    <span
                      className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                        openItemId === item.id
                          ? "text-cyan-500"
                          : "text-gray-600 hover:text-cyan-400"
                      }`}
                    >
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: openItemId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`transition-colors duration-300 ${
                        openItemId === item.id
                          ? "text-cyan-400"
                          : "text-gray-500"
                      }`}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItemId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          transition: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          transition: {
                            duration: 0.3,
                            ease: [0.36, 0, 0.66, -0.56],
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-gray-500  text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Image */}
            <div className=" pb-4 lg:col-span-6 mt-12 flex justify-center items-center lg:mt-0 lg:sticky lg:top-24">
              <div className="relative w-full  h-full md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-cyan-900/20">
                <AnimatePresence mode="wait">
                  {activeItem && (
                    <motion.img
                      key={activeItem.id}
                      src={activeItem.image}
                      alt={activeItem.title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5, ease: "easeOut" },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                        transition: { duration: 0.3, ease: "easeIn" },
                      }}
                      className="w-full h-full object-cover"
                    />
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {activeItem?.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Data for the industry service cards
  const industryServices = [
    {
      icon: <Store size={28} className="text-blue-600" />,
      title: "Retail",
      description:
        "Discover transformative IT services in the digital era that drive seamless omnichannel experiences.",
    },
    {
      icon: <Cpu size={28} className="text-green-600" />,
      title: "Information Technology",
      description:
        "Drive efficiency, innovation, and growth in the dynamic landscape of the information technology industry.",
    },
    {
      icon: <Palette size={28} className="text-purple-600" />,
      title: "Fashion",
      description:
        "Craft captivating narratives through visually stunning websites & immersive brand experiences.",
    },
  ];

  

  const industryServices2 = [
  {
    title: 'E-commerce Consulting',
    description: 'Get our consulting services that guide your business for result-oriented and highly functional ecommerce sites with delightful customer experiences.',
    icon: <Briefcase size={26} className="text-cyan-600" />,
  },
  {
    title: 'Hosting and Infrastructure Management',
    description: 'Secure and optimise your server with the best ecommerce hosting services and ensure peak performance with infrastructure management.',
    icon: <Cloud size={26} className="text-cyan-600" />,
  },
  {
    title: 'Manage and Maintain Applications',
    description: 'We manage and maintain applications across multiple channels to maximise opportunities with professional ecommerce development services.',
    icon: <Layers size={26} className="text-cyan-600" />,
  },
  {
    title: 'E-Commerce Audit',
    description: 'Scale your ecommerce site’s visibility through an ecommerce audit to identify the key areas of improvement, performance, conversions, and ROI.',
    icon: <Search size={26} className="text-cyan-600" />,
  },
  {
    title: 'Migration and Upgrades',
    description: 'Get the services of the top ecommerce development company in India and migrate to ecommerce platforms or upgrade for the advanced features.',
    icon: <ArrowRight size={26} className="text-cyan-600" />,
  },
  {
    title: 'Integration',
    description: 'Integrate your ecommerce site with a huge array of third-party platforms and solutions to gain additional business capabilities and expand to new markets.',
    icon: <LinkIcon size={26} className="text-cyan-600" />,
  },
  {
    title: 'Security',
    description: 'Protect your store and customer data with our comprehensive security services, including vulnerability assessments and continuous monitoring.',
    icon: <Shield size={26} className="text-cyan-600" />,
  },
  {
    title: 'Custom Development',
    description: 'Build unique functionalities and tailor your platform to your exact business needs with our expert custom e-commerce development.',
    icon: <CodeSquare size={26} className="text-cyan-600" />,
  },
  {
    title: 'Dashboard Reporting',
    description: 'Gain valuable insights with intuitive dashboards and detailed reports on your store\'s performance, sales trends, and customer behavior.',
    icon: <LayoutDashboard size={26} className="text-cyan-600" />,
  },
  {
    title: 'Data Management',
    description: 'Effortlessly manage your products, inventory, and customer data with robust and scalable database solutions.',
    icon: <HardDrive size={26} className="text-cyan-600" />,
  },
];

 

const industryServices4 = [
  {
    title: 'Micro-services-based Ecommerce',
    description: 'Build agile, scalable e-commerce solutions by breaking down monolithic systems into independent, connected microservices. This modern architecture enhances flexibility and accelerates development.',
    icon: <GitFork size={26} className="text-cyan-600" />,
  },
  {
    title: 'Ecommerce portals',
    description: 'Launch powerful e-commerce portals to simplify buyer-seller interactions. We create seamless online channels that encourage bulk ordering and manage complex, volume-based pricing with ease.',
    icon: <ShoppingCart size={26} className="text-cyan-600" />,
  },
  {
    title: 'Marketplaces',
    description: 'Create and operate your own thriving digital marketplace. We provide a secure platform with integrated features for inventory management, secure payment processing, and comprehensive CRM.',
    icon: <Store size={26} className="text-cyan-600" />,
  },
  {
    title: 'Mobile ecommerce apps',
    description: 'Empower your customers to shop from anywhere with a custom mobile app. Our solutions make browsing, cart management, and secure checkout simple, while ensuring efficient order and shipping processes.',
    icon: <Smartphone size={26} className="text-cyan-600" />,
  },
  {
    title: 'Headless commerce',
    description: 'Separate your front-end user experience from the back-end logic with headless commerce. This architecture gives you the freedom to use best-in-class tools and expand your store\'s capabilities without limitations.',
    icon: <Split size={26} className="text-cyan-600" />,
  },
  {
    title: 'B2C ecommerce',
    description: 'Connect directly with consumers by building a powerful B2C platform. We focus on creating personalized shopping journeys and frictionless experiences that drive sales and foster customer loyalty.',
    icon: <User size={26} className="text-cyan-600" />,
  },
  {
    title: 'POS',
    description: 'Streamline in-person and online sales with a powerful POS system. Our solutions sync data in real-time, allowing you to accept payments, track sales, and manage transactions seamlessly across all channels.',
    icon: <CreditCard size={26} className="text-cyan-600" />,
  },
  {
    title: 'Ecommerce CRM',
    description: 'Build stronger customer relationships with a centralized e-commerce CRM. We help you store and manage customer data, accounts, and leads in a unified system to improve engagement and boost future sales.',
    icon: <Users size={26} className="text-cyan-600" />,
  },
  {
    title: 'Ecommerce ERP',
    description: 'Unify your e-commerce operations with an integrated ERP system. We help you combine back-office tasks into a single platform, streamlining workflows and enhancing efficiency for better customer service.',
    icon: <Database size={26} className="text-cyan-600" />,
  },
];


  const PremiumCaseStudies = () => {
    return (
      <section className="relative   overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-r from-teal-500/10 to-purple-500/10 blur-[100px]"></div>
        </div>

        <div className="  max-w-8xlmx-auto relative z-10">
          <motion.div
            className="text-center text-gray-600 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest   mb-4">
              Success Stories
            </p>
            <h2 className=" text-xl md:text-4xl  font-bold    mb-4">
              Featured E-commerce Case Studies
            </h2>
            <p className=" text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
              Where innovation meets measurable business impact
            </p>
          </motion.div>

          {/* Enhanced card carousel */}
          <div className="relative  border-r-2  border-gray-50">
            <div className="flex space-x-8  border-r-gray-400  border-[1px]   overflow-x-auto p-5 pb-8 scrollbar-hide">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className={` flex-shrink-0 rounded-3xl overflow-hidden     p-0.5`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-full bg-gray-50  rounded-[calc(1.5rem-1px)] md:p-8 flex flex-col">
                    {/* Icon with gradient background */}

                    <div className="row  justify-start items-start   md:justify-evenly md:items-center flex flex-col-reverse md:flex-row">
                      <div className="col w-full md:w-4/12 p-4">
                        <div
                          className={`  w-28 h-fit pb-5 rounded-xl  text-gray-600   flex items-center justify-center backdrop-blur-sm`}
                        >
                          <img src={study.logoimg} alt="" />
                        </div>

                        <div className="mt-auto ">
                          <h3 className=" w-[50%] md:w-full text-lg md:text-2xl font-bold    text-gray-600 mb-2">
                            {study.title}
                          </h3>
                          <p className="  text-sm  text-gray-600 mb-4">
                            {study.subtitle}
                          </p>
                          <div className="  text-sm  text-gray-600 mb-6">
                            {study.description}
                          </div>

                          {/* Results chips */}
                          <div className="flex  flex-wrap gap-2 mb-8">
                            {study.results.map((result, i) => (
                              <span
                                key={i}
                                className="inline-flex border-gray-200 border-[1px] items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10  text-gray-600  "
                              >
                                {result}
                              </span>
                            ))}
                          </div>

                          {/* CTA button */}
                          <button
                            className={`w-full py-3 px-6 rounded-xl  font-medium  text-gray-600  r} hover:opacity-90 transition-all flex items-center justify-between`}
                          >
                            {study.cta}
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="col  w-full md:w-5/12">
                        <div className=" flex  md:justify-center md:items-center card w-full h-96   md:h-[40vh]  ">
                          <img
                            className=" h-full object-center  object-contain w-full"
                            src={study.imgsrc}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll hint */}
          </div>
        </div>
      </section>
    );
  };

  const IndustriesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };

    return (
      <section ref={ref} className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className=" text-lg md:text-4xl   font-bold text-gray-800 tracking-tight">
             E-commerce Services
            </h2>

            <p className="  md:mt-4  text-sm md:text-lg   text-gray-600">
              For Various Industries
            </p>
          </motion.div>

          {/* Grid of Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industryServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col"
              >
                {/* Icon */}
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 mb-6">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="  text-lg md:text-2xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className=" text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center mt-6 font-semibold text-blue-600 hover:text-blue-800 group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  const IndustriesSection2 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };

    return (
      <section ref={ref} className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className=" text-lg md:text-4xl   font-bold text-gray-800 tracking-tight">
              How E-commerce Transforms
            </h2>
            <p className="  md:mt-4  text-sm md:text-lg   text-gray-600">
              Your Business
            </p>
          </motion.div>

          {/* Grid of Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industryServices2.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-4 md:p-8  rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col"
              >
                <div className="flex  items-center justify-center h-14 w-14 rounded-full   mb-2">
                  {service.icon}
                </div>

                <div className="flex-grow">
                  <h3 className="  text-lg md:text-2xl font-semibold text-gray-700 mb-3">
                    {service.title}
                  </h3>
                  <p className=" text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
 
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  const IndustriesSection4 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };

    return (
      <section ref={ref} className=" pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className=" text-lg md:text-4xl   font-bold text-gray-800 tracking-tight">
              The E-commerce Advantage
            </h2>
            <p className="md:mt-4  text-sm md:text-lg   text-gray-600">
              We Provide
            </p>
          </motion.div>

          {/* Grid of Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industryServices4.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-4 md:p-8  rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col"
              >
                <div className="flex  items-center justify-center h-14 w-14 rounded-full   mb-2">
                  {service.icon}
                </div>

                <div className="flex-grow">
                  <h3 className="  text-lg md:text-2xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className=" text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  const Techstack = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div className="p-4 md:p-12   ">
        <div className="border-b border-gray-200  ">
          <ul className="-mb-px flex flex-wrap text-center text-sm font-medium text-gray-500  ">
            {tabData.map((tab, index) => (

              <li key={index} className="me-2" role="presentation">
                <button
                  type="button"
                  role="tab"
                  className={`inline-block py-3 px-4 rounded-t-lg transition-colors duration-200 ease-in-out ${
                    activeTab === index
                      ? "text-blue-600 border-b-2 border-blue-600  "
                      : "hover:text-gray-600 hover:border-gray-300  "
                  } ${
                    tab.disabled
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  } flex items-center`}
                  onClick={() => !tab.disabled && setActiveTab(index)}
                  disabled={tab.disabled}
                  aria-selected={activeTab === index}
                >
                <img src={tab.icon} className=" w-full h-12 md:h-16" alt={tab.stacks} />
                  {tab.title}
                </button>
              </li>

            ))}
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded-b-lg">
        {tabData.map((tab, index) => (
          <div
            key={index}
            role="tabpanel"
            className={activeTab === index ? "" : "hidden"}
          >
            {/* The main grid container for the cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tab.subTopics.map((subTopic, subIndex) => (
                <div key={subIndex} className="flex flex-col ">
                  {/* Card container with a fixed aspect ratio */}
                  <div className="card h-24 flex justify-center  items-center  w-full aspect-square">
                    <img
                      src={subTopic.image}
                      alt={subTopic.heading}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                  <h3 className="font-bold text-gray-900 my-4">
                    {subTopic.heading}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {subTopic.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      </div>
    );
  };

  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755676007/2_ennovh.svg",
      alt: "A person typing on a laptop with a modern, clean setup.",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755676007/1_rgzqz6.svg",
      alt: "A team collaborating around a table, looking at a laptop.",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1755676007/3_yrdwyg.svg",
      alt: "A diverse team in a brainstorming session at a glass table.",
    },
  ];

 
  const technologyStacks = {

    frontend: [
      {
        title: "React",
        img: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441834/react_4cfc715018_mr4li8.svg",
        description: "Build fast-loading and optimized web applications with rapid page rendering features from the constructive and interactive technology of React.",
        link: "#"
      },
      {
        title: "Next.js",
        img: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/next_js_7413084cb7_jy987e.svg",
        description: "Build web applications of bespoke quality and quick loading times with the exceptional performance of the Next.js technology framework.",
        link: "#"
      },
      {
        title: "Vue.js",
        img: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/Vuejs_9db22dd83c_eijjga.svg",
        description: "Elevate customer engagement with visually stunning, scalable and reliable interfaces for web applications through the boundless possibilities of Vue.js.",
        link: "#"
      },
      {
        title: "Angular",
        img: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/Angular_56306ec9d8_gocdng.svg",
        description: "Transform your industry with the combination of agile concepts and the broad expertise of our Angular developers to give life to thoughtful web applications.",
        link: "#"
      }
    ],

    backend: [
      {
        title: "Python",
        img: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441834/Python_54b43ad500_q2jriq.svg",
        description: "Revolutionize your business with top-notch web applications, dynamic websites, and desktop apps to rewrite your brand’s success story with the promise of Python.",
        link: "#"
      },
      {
        title: "Node.js",
        img: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/Node_js_bdf692ea23_itlxxm.svg",
        description: "Develop quick and scalable web pages with real-time Node.js technology to highlight your business’s digital strength with solution-focused applications.",
        link: "#"
      },
      {
        title: "PHP",
        img: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441833/php_a3a7eccfb0_phmctj.svg",
        description: "Get assistance from a robust codebase to get dynamic, swift and flexible PHP web development solutions for highly interactive web pages.",
        link: "#"
      }
    ],

    database: [
      {
        title: "MySQL",
        img: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441833/Mysql_8dd00fedbf_fckj9c.svg",
        description: "Well-suited for database management, MySQL is easy to install. Get the most robust database system to build mission-critical applications.",
        link: "#"
      },
      {
        title: "MongoDB",
        img: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/Mongo_1af6329c73_las3o5.svg",
        description: "Incorporate the flexible schema of MongoDB to scale up and make queries much faster, while following all key features of modern databases.",
        link: "#"
      }
    ],

    integrations: [
      {
        title: "PayPal",
        img: "https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg",
        description: "Manage payment complexities for your ecommerce storefronts with PayPal to allow custom payment flows, pre-authorized payments, and reconciliation of funds from various sources.",
        link: "#"
      },
      {
        title: "Stripe",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
        description: "Integrate Stripe with your ecommerce websites and mobile applications to support a wide range of payment options and ensure high-end security to protect businesses and customers.",
        link: "#"
      },
      {
        title: "ERP",
        img: "https://img.freepik.com/premium-vector/erp-software-solutions-line-icon-with-cloud_116137-13824.jpg",
        description: "Integrate your ecommerce platform with ERP to automate manual processes. Integrate payment information, order details, shipping, and customer details to reduce human errors.",
        link: "#"
      },
      {
        title: "CRM",
        img: "https://www.arenasolutions.com/wp-content/uploads/What-is-Customer-Relationship-Management.png",
        description: "Get seamless integrations to your e-commerce systems, where CRM improves customer relationship management through expanded software functionality and automated actions.",
        link: "#"
      },
      {
        title: "PIM",
        img: "https://img.freepik.com/premium-vector/pim-letter-logo-design-technology-company-pim-logo-design-black-white-color-combination-pim-logo-pim-vector-pim-design-pim-icon-pim-alphabet-pim-typography-logo-design_229120-162046.jpg",
        description: "Improve customer experience, minimise errors, and boost product search functions with Product Information Management (PIM) integrations to scale your marketing and sales efforts.",
        link: "#"
      }
    ],

    cloud: [
      {
        title: "Google Cloud Platform",
        img: "https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png",
        description: "Secure, reliable, scalable cloud services that enable fast deployment, enable smart decisions and save costs.",
        link: "#"
      },
      {
        title: "Amazon Web Services",
        img: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
        description: "Provides reliable, affordable, and on-demand cloud services that enhance access, mobility and collaboration.",
        link: "#"
      },
      {
        title: "Microsoft Azure",
        img: "https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png",
        description: "Build future-ready cloud solutions, optimise workloads, simplify IT management, and get maximum ROI.",
        link: "#"
      }
    ]
  };

  const tabData = [
    {
      title: "Frontend",
      stacks: "Frontend stack",
      icon: "https://mobile.fhstp.ac.at/wp-content/uploads/2022/02/800px-Nextjs-logo.svg_.png",
      disabled: false,
      subTopics: technologyStacks.frontend.map(item => ({
        image: item.img,
        heading: item.title,
        text: item.description,
      })),
    },
    {
      title: "Backend",
      stacks: "Backend stack",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
      disabled: false,
      subTopics: technologyStacks.backend.map(item => ({
        image: item.img,
        heading: item.title,
        text: item.description,
      })),
    },
    {
      title: "Database",
      icon: "https://cdn-icons-png.freepik.com/512/8686/8686102.png",
      stacks: "Database stack",
      disabled: false,
      subTopics: technologyStacks.database.map(item => ({
        image: item.img,
        heading: item.title,
        text: item.description,
      })),
    },
    {
      title: "Integrations",
      icon: "https://cdn.vectorstock.com/i/500p/33/57/integration-icon-data-systems-vector-53143357.jpg",
      stacks: "Integrations",
      disabled: false,
      subTopics: technologyStacks.integrations.map(item => ({
        image: item.img,
        heading: item.title,
        text: item.description,
      })),
    },
    {
      title: "Cloud",
      icon: "https://marketplace.canva.com/EAFJCFl0HDw/1/0/1600w/canva-blue-modern-cloud-service-logo--o0mh2MdOPM.jpg",
      stacks: "Cloud stack",
      disabled: false,
      subTopics: technologyStacks.cloud.map(item => ({
        image: item.img,
        heading: item.title,
        text: item.description,
      })),
    },
  ];


    const ecommercePlatforms = [
    {
      title: "Adobe Commerce",
      img: "https://www.solveda.com/wp-content/uploads/2024/03/Adobe-Commerce-logo.webp",
      description: "Deliver a modern, personalized shopping experience with this flexible, composable e-commerce platform.",
      link: "#"
    },
    {
      title: "Commercetools",
      img: "https://constructor.com/hs-fs/hubfs/commercetools-logo.png?width=2000&height=720&name=commercetools-logo.png",
      description: "Build and manage high-speed, scalable, and exceptional storefronts with this API-first headless commerce solution.",
      link: "#"
    },
    {
      title: "SAP Hybris",
      img: "https://cdn.prod.website-files.com/616ef101d9f2a359845dab27/6436ee77669e1e211608c975_Sap-Hybris-logo.webp",
      description: "Enhance customer experiences and manage data effectively with a robust CRM tool built for personalized commerce.",
      link: "#"
    },
    {
      title: "Shopify",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png",
      description: "Easily build and grow your online store with a user-friendly platform that simplifies online selling for businesses of all sizes.",
      link: "#"
    },
    {
      title: "Salesforce",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1024px-Salesforce.com_logo.svg.png",
      description: "Create and manage online stores, inventory, and payment processing from a single, unified commerce platform.",
      link: "#"
    },
    {
      title: "BigCommerce",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bc-logo-dark.svg/2560px-Bc-logo-dark.svg.png",
      description: "Scale your business with a customizable, user-friendly, and enterprise-grade e-commerce platform.",
      link: "#"
    },
    {
      title: "WooCommerce",
      img: "https://www.businessbloomer.com/wp-content/uploads/2017/01/woocommerce-logo-color-black@2x.png",
      description: "Turn any WordPress site into a fully functional online store with advanced and highly customizable e-commerce features.",
      link: "#"
    },
    {
      title: "Medusa Commerce",
      img: "https://images.0xw.app/images/Medusa.png",
      description: "Build reliable and high-performing e-commerce applications for modern, custom shopping experiences.",
      link: "#"
    },
    {
      title: "Magento",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtJOPnrvzxA25T_fbXrdlc-TzJj95GAOSfQ&s",
      description: "Elevate the online shopping journey with a powerful platform known for extensive scalability and customization.",
      link: "#"
    }

  ];


  return (
    <>
      <section>
        <div className="relative flex  h-screen w-full">
          <div className="box w-full h-full">
            <img
              src="https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic1_mcjwxl.webp"
              className=" hidden md:block  h-full w-full  object-center object-cover"
              alt="  Addressable Fire Alarm System"
            />

            <img
              src="https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic1_mcjwxl.webp"
              className=" md:hidden  h-full w-full object-center object-cover"
              alt="  Addressable Fire Alarm System"
            />
          </div>

          <div className="absolute  w-full h-full md:p-9 md:bottom-0 flex flex-col  justify-center md:justify-between items-center   mx-auto">
            <div className="   font-sans  font-thin text-white text-2xl   flex flex-col justify-center items-start px-4 md:px-24 h-full my-auto">
              <p className=" text-2xl md:text-5xl pt-22 md:pt-0">
                {" "}
              E-commerce

              </p>

              <p className=" text-sm md:w-6/12 py-6">
             Our comprehensive approach ensures every aspect of your e-commerce platform is meticulously planned and executed for success. We believe that success begins with a deep understanding of your business. Our approach is not one-size-fits-all; instead, we partner with you to analyze your specific goals, target audience, and competitive landscape. By focusing on metrics that matter—such as boosting conversions, improving user experience, and accelerating business growth—we craft a customized strategy that ensures your e-commerce platform is a powerful asset, not just an online storefront.
  </p>

              <div className="flex flex-col items-center justify-center ">
                {/* Container for the images. Uses flexbox for layout. */}
                {/* It's responsive, switching from a single column on small screens to a row on larger ones. */}
                <div className="flex py-4 flex-col sm:flex-row md:space-y-8 sm:space-y-0 md:space-x-8 md:max-w-6xl mx-auto">
                  <Link
                    href="/contact-us"
                    className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold   group"
                  >
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out text-sm group-hover:text-gray-900">
                      Let's Connect
                    </span>
                    <span className="absolute inset-0 border-2 border-white  "></span>
                  </Link>
                  {images.map((image) => (
                    // Card container for each image with a shadow and rounded corners.
                    <div
                      key={image.id}
                      className=" flex-1 w-full  rounded-xl   p-4"
                    >
                      <div className="relative  overflow-hidden rounded-lg">
                        {/* The image element itself. */}
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain "
                        />
                        {/* Optional overlay for interactive elements. */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" md:mt-0 px-4 relative h-auto  flex items-center justify-center bg-gradient-to-br from-red-50/20 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-400/5 rounded-full filter blur-[100px] "></div>
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-red-400/5 rounded-full filter blur-[80px] "></div>
        </div>

        <div className="relative pt-12 z-10  max-w-7xl mx-auto text-center ">
          <section className="  md:p-5 pb-0 mb-0 flex flex-col md:flex-row  ">
            <div className=" blog-img mb-6 text-center">
              <div className="flex gap-4 md:gap-9  justify-evenly items-center  flex-col md:flex-row">
                <div className="w-full h-[70vh] md:w-5/12 flex  ">
                  <img
                    className=" w-full h-full object-center rounded-3xl object-contain"
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
                    alt="Adhunik Powertech air washer"
                    loading="lazy"
                  />
                </div>

                <div className=" w-full md:w-6/12   text-left text-gray-800 mb-6 flex flex-col mt-2">
                  <div className=" text-left ">
                    <span className="text-sm font-medium  flex justify-center md:justify-start mb-3 pt-6 items-center md:items-center  text-cyan-800">
                      <Sparkles className="w-4 h-4 text-cyan-600 mr-4" />{" "}
                      Technology
                    </span>

                    <p className="  text-lg md:text-2xl text-center md:text-left font-bold text-gray-900  mb-2 leading-tight">
                      <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                        <Link href="https://www.fluxdigital.online/">
                  E-commerce Development Services to 

                        </Link>
                      </span>
                      <br />
                      <span className="font-light text-gray-700">
                        {" "}
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                          <span className="  ">
                           Improve Brand Outreach and Enhance Sales
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <p className=" font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">
                   As a leading e-commerce website design and development company, we are dedicated to crafting beautifully designed, conversion-focused storefronts. Our services go beyond aesthetics, giving meticulous attention to a seamless UI/UX, a strong technical backend, and best-in-class app development with seamless integrations. We deliver compelling and unified buying experiences that drive conversions and foster brand loyalty.

                  </p>

                  <p className=" pb-4 font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">
              
We offer a full suite of e-commerce development services, including strategic planning, seamless integrations, efficient migrations, and ongoing support. This comprehensive approach allows us to build results-driven online stores that not only stand out but also perform. As a top e-commerce development company, we empower you to engage customers across multiple touchpoints and improve their lifetime value. Partner with us to create a digital store that truly resonates with your audience and generates long-term success. </p>

                  <Link
                    href="/contact-us"
                    className=" p-4 border-2 w-fit   border-cyan-600"
                  >
                    Let's talk →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="min-h-screen  bg-transparent font-inter antialiased overflow-hidden">
        <IndustriesSection2 />

        <IndustriesSection4 />

        <WebDevServicesSection />


<p className=" text-gray-600 text-xl px-4 md:text-4xl font-semibold text-center my-10 md:my-16 font-sans">
  Technologies We Use For <br /> E-commerce
</p>

        <Techstack />


<p className=" text-gray-600 text-xl px-4 md:text-4xl font-semibold text-center my-10 md:my-16 font-sans">
Ecommerce Development  <br /> Platforms
</p>

         <div className="bg-white w-full min-h-screen p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecommercePlatforms.map((platform, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start p-4 rounded-xl   transition-all duration-300 ease-in-out border-[1px] border-transparent hover:border-cyan-600 hover:scale-105 cursor-pointer"
          >
            <div className="w-full h-24 aspect-square flex items-center justify-center">
              <img
                src={platform.img}
                alt={platform.title}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <h3 className="font-bold text-gray-900 my-4 text-center">
              {platform.title}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {platform.description}
            </p>
          </div>
        ))}
      </div>
    </div>
        

        <WebDevelopmentProcessSection />


        <IndustriesSection />

        <WhyUsInnovativeSection />

        <PremiumCaseStudies />
      </div>
    </>
  );
}
