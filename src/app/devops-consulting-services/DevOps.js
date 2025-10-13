"use client";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Users } from "lucide-react";
import React, { useRef, useState } from "react";
import { Store, Cpu, Palette, ArrowRight } from "lucide-react";
import WhyUsInnovativeSection from "@/components/sections/WhyUsInnovativeSection";
import { Shield, Scaling, Clock, Lock } from "lucide-react";
import { TrendingUp, Gem, Trophy } from "lucide-react";

import { Rocket, Settings, FlaskConical, Cloud, Monitor } from "lucide-react";
import { GitBranch, PlayCircle, Activity, Database, Ban } from "lucide-react";

import { BarChart4, Globe2, GraduationCap, ShieldCheck } from "lucide-react";
import Link from "next/link";

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

export default function DevOps() {

  const WebDevServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const webDevServicesData = [
      {
        title: "DevOps Strategy & Roadmap",
        description:
          "We begin by identifying bottlenecks in your existing processes to build a custom DevOps roadmap that perfectly aligns with your organizational goals. This ensures we promote scalable workflows for an optimized process across your entire team.",
        icon: <Rocket className="h-6 w-6 mr-3 text-teal-400" />,
      },
      {
        title: "Technology & Tooling Consulting",
        description:
          "We provide expert guidance to help you select the right tools and technologies for your DevOps environment. We assess your unique requirements, analyze available options, and recommend solutions that are precisely tailored to your specific goals and use cases.",
        icon: <Settings className="h-6 w-6 mr-3 text-teal-400" />,
      },
      {
        title: "Automation & CI/CD",
        description:
          "Our experts implement efficient DevOps automation to reduce manual errors and standardize processes, often using languages like Python. We also create automated CI/CD pipelines that seamlessly handle integration, testing, and deployment. This leads to quicker, more reliable updates and a faster time-to-market.",
        icon: <FlaskConical className="h-6 w-6 mr-3 text-teal-400" />,
      },
      {
        title: "Containerization & Infrastructure Management",
        description:
          "As leading DevOps specialists, we manage everything from microservices architecture to the implementation of tools like Docker and Kubernetes. We automate the scaling and deployment of your microservices, helping you build and manage a truly agile and resilient infrastructure.",
        icon: <Cloud className="h-6 w-6 mr-3 text-teal-400" />,
      },
      {
        title: "Real-time Monitoring & Alerting",
        description:
          "Through continuous, real-time monitoring, we track the performance and health of your infrastructure components. This allows us to quickly troubleshoot issues, optimize resources for maximum efficiency, and ensure consistency in all your deployments.",
        icon: <Monitor className="h-6 w-6 mr-3 text-teal-400" />,
      },
      {
        title: "Integrated Security (DevSecOps)",
        description:
          "Our security practices are built into every stage of the DevOps pipeline. By proactively addressing vulnerabilities and adhering to regulatory standards, our DevSecOps approach ensures your software delivery process is secure and reliable from start to finish.",
        icon: <ShieldCheck className="h-6 w-6 mr-3 text-teal-400" />,
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
              Our Comprehensive DevOps Services
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              We offer fast, dependable DevOps consulting to help organizations
              achieve their business goals. Want to know how we can help your
              business thrive? Let's take a look at our services.
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
      id: "req-gathering",
      title: "Assessment and Planning",
      content:
        "We begin by thoroughly assessing your existing development and operations processes. By identifying opportunities for improvement and visualizing your desired state, we create a tailored DevOps roadmap. This plan includes clear KPIs and milestones to ensure every step contributes measurable value to your business.",
      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "wireframe-prototyping",
      title: "Continuous Integration (CI)",

      content:
        "Continuous Integration is essential for optimizing code quality and accelerating development cycles. We set up automated processes that integrate every code change into a shared repository. This includes automated testing to quickly detect issues, minimize bottlenecks, and identify bugs before they can impact later stages.",

      image:
        "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "ui-ux-design",
      title: "Continuous Testing",
      content:
        "As part of our services, we implement continuous testing to validate code changes against the highest standards. Automated testing is integrated throughout the DevOps lifecycle to detect issues across all environments. We configure frameworks to ensure adherence to performance, compliance, and security standards, creating a proactive defense against potential vulnerabilities.",
      image:
        "https://images.unsplash.com/photo-1542289539-059dea254938?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "development",
      title: "Continuous Delivery (CD)",
      content:
        "Continuous Delivery automates the preparation of every code build for production. This phase ensures that all deployment-ready changes are evaluated with automated testing. While the process is automated, a final manual verification is required before deployment, giving you control and flexibility while significantly minimizing time to market.",
      image:
        "https://images.unsplash.com/photo-1634838128617-efdf64411694?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: "quality-assurance",
      title: "Continuous Deployment",

      content:
        "Continuous Deployment automates the entire release process, facilitating consistent and rapid code delivery to the production environment. With a CD pipeline that includes automated approvals and rollbacks, we ensure every release is secure and smooth. This minimizes manual intervention, making deployments more reliable and allowing your team to focus on innovation.",

      image:
        "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "deployment",
      title: "Monitoring and Feedback",

      content:
        "We place great emphasis on maintaining system health and operational visibility. Our solutions include real-time monitoring and alerting systems that provide instant performance insights. This allows for proactive incident management, ensuring your infrastructure remains highly resilient.",

      image:
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "maintenance-support",
      title: "Ongoing Support and Optimization",

      content:
        "DevOps is a continuous journey, and we provide the ongoing support to ensure your infrastructure remains agile. Our dedicated team conducts regular audits, system evaluations, and performance monitoring to keep your environment responsive to new changes and positioned for long-term success.",

      image:
        "https://images.unsplash.com/photo-1635875060146-80ec95d47043?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      title: "Increased Application Resilience",
      description:
        "DevOps makes your applications more robust and reliable. By managing potential issues proactively, it minimizes downtime and ensures a better user experience by addressing problems before they impact your customers.",
      icon: <Shield size={26} className="text-cyan-600" />,
    },
    {
      title: "Scalable Infrastructure and Flexibility",
      description:
        "With DevOps, you can build a scalable infrastructure that grows with your business needs. This creates a responsive system that adapts to diverse requirements, allowing your applications to scale effortlessly while maintaining peak performance.",
      icon: <Scaling size={26} className="text-cyan-600" />,
    },
    {
      title: "Reliable and Faster Development",
      description:
        "By streamlining processes and embracing continuous feedback, DevOps creates a resilient development lifecycle. This results in quicker release cycles and a faster time-to-market, which helps your business stay responsive and competitive.",
      icon: <Clock size={26} className="text-cyan-600" />,
    },
    {
      title: "Enhanced Data Security",
      description:
        "Data security is integrated directly into the entire DevOps process, ensuring your infrastructure is protected from threats from the start. This proactive approach helps your business maintain compliance, protect sensitive data, and build user trust.",
      icon: <Lock size={26} className="text-cyan-600" />,
    },
  ];

  const industryServices4 = [
    {
      title: "Proven Expertise",
      description:
        "As a pioneer in DevOps, our team possesses deep expertise in building and optimizing solutions across various industries. We leverage our extensive experience to ensure your project not only meets but exceeds its goals.",
      icon: <Trophy size={26} className="text-cyan-600" />,
    },
    {
      title: "Scalability",
      description:
        "Our solutions are engineered for growth. We design flexible and scalable infrastructures that effortlessly adapt to massive workloads and new features, ensuring your team can grow seamlessly without sacrificing performance.",
      icon: <TrendingUp size={26} className="text-cyan-600" />,
    },
    {
      title: "Robust Security",
      description:
        "Security is at the core of our approach. By integrating security into every phase of the development lifecycle, we provide robust protection through automated vulnerability assessments and continuous compliance checks.",
      icon: <Shield size={26} className="text-cyan-600" />,
    },
    {
      title: "Continuous Improvement",
      description:
        "Our commitment to your success extends beyond launch. We continuously refine processes using advanced tools and strategies, ensuring your DevOps environment remains secure and aligned with industry best practices.",
      icon: <Gem size={26} className="text-cyan-600" />,
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
              Featured DevOps Case Studies
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
              DevOps Services
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
              How DevOps Transforms
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
                  <h3 className="  text-lg md:text-2xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className=" text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

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
              The DevOps Advantage
            </h2>
            <p className="  md:mt-4  text-sm md:text-lg   text-gray-600">
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

  const Techstack = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div className="p-4 md:p-8">
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
                  {tab.icon}
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
                <div key={subIndex} className="flex flex-col">
                  {/* Card container with a fixed aspect ratio */}
                  <div className="card h-56 flex justify-center items-center  w-56 aspect-square">
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

  const tabData = [
    {
      title: "Core Services",
      // Use the imported Cpu component instead of a raw SVG.
      icon: <Cpu className="mr-2 h-5 w-5" />,
      subTopics: [
        {
          heading: "Python",
          text: "Revolutionise your business with top-notch web applications, dynamic websites, and desktop apps to rewrite your brand’s success story with the promise of Python.",
          // Added a placeholder image URL for the subtopic.
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
        },

        {
          heading: "BASH/Shell",
          text: "We utilise the capabilities of BASH/Shell for automating system tasks and scripting in Unix-based environments, enhancing operational efficiency.",
          image: "https://cdn-icons-png.flaticon.com/512/919/919837.png",
        },

        {
          heading: "GO",
          text: "Used for its efficiency, concurrency support, simplicity, scalability, and strong standard library, making it ideal for high-performance, concurrent applications and cloud-native development.",
          image: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
        },
        {
          heading: "Ruby",
          text: "Ruby is a dynamic, open-source, object-oriented programming language known for its readability and focus on simplicity and productivity.",
          image: "https://cdn-icons-png.flaticon.com/512/6132/6132219.png",
        },
      ],
    },

    {
      title: "Version Control",
      // Use the imported GitBranch component.
      icon: <GitBranch className="mr-2 h-5 w-5" />,
      subTopics: [
        {
          heading: "GitHub",
          text: "We use GitHub to host, review, and manage code, thereby enabling effortless collaboration and version control.",
          image: "https://cdn-icons-png.flaticon.com/512/3291/3291695.png",
        },
        {
          heading: "Bitbucket",
          text: "Our team uses this powerful repository for Git and Mercurial, ensuring efficient code control and integration with different development tools.",
          image: "https://cdn-icons-png.flaticon.com/512/6125/6125001.png",
        },
        {
          heading: "Gitlab",
          text: "With Gitlab, we execute DevOps lifecycle management, right from source code control to CI/CD, which scales project collaboration and transparency.",
          image: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
        },
        {
          heading: "Azure DevOps",
          text: "Azure DevOps has been helping us provide CI/CD, version control, and project management to ease collaboration and scale delivery cycles.",
          image:
            "https://logos-world.net/wp-content/uploads/2024/10/Azure-DevOps-Logo-500x281.png",
        },
        // Added the new "Source Code Control" subtopic here.
      ],
    },

    {
      title: "CI/CD & DevOps",
      // Use the imported PlayCircle component.
      icon: <PlayCircle className="mr-2 h-5 w-5" />,
      subTopics: [
        {
          heading: "Jenkins",
          text: "Our experts use Jenkins, an open-source automation tool, that streamlines CI/CD, testing and deployment.",
          image: "https://icon.icepanel.io/Technology/svg/Jenkins.svg",
        },
        {
          heading: "GitLab CI",
          text: "By using this built-in CI/CD tool, we automate testing and deployment, while improving code quality and resulting in quicker release cycles.",
          image: "https://miro.medium.com/1*XON7HtEQCgYqJ5FChk8WBQ.png",
        },
        {
          heading: "Circle CI",
          text: "We use CircleCI to provide flexible CI/CD solutions that expedite software delivery while keeping exceptional reliability.",
          image:
            "https://images.seeklogo.com/logo-png/48/2/circleci-logo-png_seeklogo-482238.png",
        },
        {
          heading: "Travis CI",
          text: "With Travis CI, we incorporate an automated CI/CD service for the GitHub projects, thereby enabling rapid code deployment.",
          image: "https://cdn.worldvectorlogo.com/logos/travis-ci.svg",
        },
        {
          heading: "GitHub Actions",
          text: "We leverage GitHub actions to automate workflows directly in GitHub, focusing on improved efficiency throughout code and production.",
          image:
            "https://cdn.prod.website-files.com/65264f6bf54e751c3a776db1/66d86964333d11e0a1f1da9e_github_actions.png",
        },
        {
          heading: "Argo CD",
          text: "Our team uses Argo CD, the declarative GitOps tool to facilitate the automation of deployment to Kubernetes, scaling application management.",
          image:
            "https://www-mkt-uploads.s3.fr-par.scw.cloud/Argo_1_e1630327305635_1_2e54cbf464.png",
        },
        {
          heading: "TeamCity",
          text: "With this powerful CI/CD server, we enable building automation and prompt feedback crucial in executing quality-centric and scalable deployments.",
          image:
            "https://www.qbssoftware.com/dach/wp-content/uploads/sites/4/2024/07/TEAMCITY-2.png",
        },
      ],
    },

    {
      title: "Container & Cloud",
      // Use the imported Cloud component.
      icon: <Cloud className="mr-2 h-5 w-5" />,
      subTopics: [
        {
          heading: "Kubernetes",
          text: "With Kubernetes, we automate scaling, deployment, and management of containerised applications, to improve scalability and resilience.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/500px-Kubernetes_logo_without_workmark.svg.png",
        },
        {
          heading: "Docker",
          text: "We utilise the applications of Docker, the containerisation platform to ensure consistent app deployment that scales flexibility and speed.",
          image:
            "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
        },
        {
          heading: "Docker Swarm",
          text: "Our team orchestrates Docker containers, to facilitate high-end scaling and application management in clusters.",
          image:
            "https://cycle.io/images/blog/2024/03/docker-swarm-alternative-cycle/resources/images/hero.svg",
        },
        {
          heading: "OpenShift",
          text: "We use OpenShift, the Kubernetes platform to automate app deployment and scaling which ensures consistency in diverse environments.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/OpenShift-LogoType.svg/1917px-OpenShift-LogoType.svg.png",
        },
        {
          heading: "Google Cloud Platform",
          text: "Secure, reliable, scalable cloud services that enable fast deployment, enable smart decisions and save costs.",
          image:
            "https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png",
        },
        {
          heading: "Amazon Web Services",
          text: "Provides reliable, affordable, and on-demand cloud services that enhance access, mobility and collaboration.",
          image:
            "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
        },
        {
          heading: "Microsoft Azure",
          text: "Build future-ready cloud solutions, optimise workloads, simplify IT management, and get maximum ROI.",
          image:
            "https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png",
        },
      ],
    },

    {
      title: "Infrastructure & Monitoring",
      // Use the imported Activity component.
      icon: <Activity className="mr-2 h-5 w-5" />,
      subTopics: [
        {
          heading: "Grafana OSS",
          text: "Grafana OSS helps us visualise metrics, thus helping teams track application health and real-time performance.",
          image:
            "https://flecs.tech/wp-content/uploads/2021/08/grafana.png.webp",
        },
        {
          heading: "Prometheus",
          text: "The use of Prometheus has been beneficial to us for analysing metrics, managing alerts and enhancing system health.",
          image:
            "https://cdn.iconscout.com/icon/free/png-128/free-prometheus-icon-svg-png-download-282488.png?f=webp",
        },
        {
          heading: "Nagios",
          text: "We use Nagios to monitor networks and infrastructure, which assures system uptime and issue detection.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/80/Nagios_logo.png",
        },
        {
          heading: "Splunk",
          text: "Using Splunk, we transform logs into actionable insights, enabling teams to manage system health proactively and scale troubleshooting.",
          image: "https://img.icons8.com/?size=512&id=49188&format=png",
        },
        {
          heading: "Zabbix",
          text: "With Zabbix, we enable proactive troubleshooting and maintenance that offer enterprise-specific tracking of networks and applications.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/5d/Zabbix_logo_square.svg",
        },
        {
          heading: "Datadog",
          text: "As an Application Performance Monitoring (APM) tool, Datadog is a tool used for cloud-scale applications and track tools, servers, databases, and services. It offers a secure platform to facilitate operations, cloud migrations, and tracking core business metrics.",
          image:
            "https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_vertical_white.png?auto=format&fit=max&w=847&dpr=2",
        },

        {
          heading: "Terraform",
          text: "With Terraform, we adopt smooth provisioning of cloud infrastructure, enabling reusable and versioned infrastructure for quick scaling.",
          image:
            "https://ms-devlabs.gallerycdn.vsassets.io/extensions/ms-devlabs/custom-terraform-tasks/0.1.36/1748364894361/Microsoft.VisualStudio.Services.Icons.Default",
        },

        {
          heading: "Ansible",
          text: "We use Ansible, the configuration management tool that automates complex tasks, thereby improving deployment speed and minimising errors.",
          image:
            "https://images.icon-icons.com/2389/PNG/512/ansible_logo_icon_145495.png",
        },

        {
          heading: "Chef",
          text: "Our experts use Chef, which facilitates automation and configuration management, thus enabling consistent environment management.",
          image:
            "https://www.chef.io/images/cheflibraries/brand/symbol-2x-min.png?sfvrsn=dc337982_0",
        },
        {
          heading: "Puppet",
          text: "We leverage Puppet, which offers a declarative model that automates configuration, thus minimising manual bugs and making system management efficient.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Puppet_boxes_logo.svg/1200px-Puppet_boxes_logo.svg.png",
        },
      ],
    },

    {
      title: "Databases",
      // Use the imported Database component.
      icon: <Database className="mr-2 h-5 w-5" />,
      subTopics: [
        {
          heading: "MySQL",
          text: "Well-suited for database management, MySQL is easy to install. Get the most robust database system to build mission-critical applications.",
          image: "https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg",
        },
        {
          heading: "PostgreSQL",
          text: "Leverage the cost-effective benefits of PostgreSQL, the object-relational database management system for high data integrity and flexibility.",
          image: "https://cdn.iconscout.com/icon/free/png-256/free-postgresql-icon-svg-png-download-1175120.png",
        },
        {
          heading: "MongoDB",
          text: "Incorporate the flexible schema of MongoDB to scale up and make queries much faster, while following all key features of modern databases.",
          image: "https://images.icon-icons.com/2699/PNG/512/mongodb_logo_icon_170944.png",
        },
        {
          heading: "Redis",
          text: "We work with Redis to scale the app performance and ensure fast data retrieval, minimising the load on conventional databases.",
          image: "https://download.logo.wine/logo/Redis/Redis-Logo.wine.png",
        },
        {
          heading: "Elasticsearch",
          text: "Make it easy to deploy data aggregation operations and simplify the unstructured query processing with the business intelligence of Elasticsearch.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Elasticsearch_logo.svg/2560px-Elasticsearch_logo.svg.png",
        },
        {
          heading: "Firebase",
          text: "Make it easier to get collaborative and immersive experiences with Firebase using data synchronisation, and without thinking about networking code.",
          image: "https://1000logos.net/wp-content/uploads/2024/05/Firebase-Logo.png",
        },
        {
          heading: "Supabase",
          text: "We use this open-source backend to enable real-time database management and include API generation, thus improving rapid development.",
          image: "https://supabase.com/_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F29ee6a2992c3%2F_next%2Fstatic%2Fmedia%2Flogo-preview.50e72501.jpg&w=3840&q=75",
        },
        {
          heading: "Cassandra",
          text: "Using the distributed NoSQL database known as Cassandra, we make it ideal for handling large data volumes for all systems.",
          image: "https://www.logo.wine/a/logo/Apache_Cassandra/Apache_Cassandra-Logo.wine.svg",
        },
      ],
    },
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
                DevOps Consulting Company
              </p>

              <p className=" text-sm md:w-6/12 py-6">
                To stay ahead of the curve, we provide expert DevOps consulting
                and development services. We focus on automating your
                organization's processes while adhering to continuous delivery
                and continuous integration. At Beyond Solutions (YBS), our comprehensive
                DevOps approach is designed to streamline your application
                delivery and significantly enhance your operational efficiency.
              </p>

              <div className="flex flex-col items-center justify-center ">
                {/* Container for the images. Uses flexbox for layout. */}
                {/* It's responsive, switching from a single column on small screens to a row on larger ones. */}
                <div className="flex py-4 flex-col sm:flex-row md:space-y-8 sm:space-y-0 md:space-x-8 md:max-w-6xl mx-auto">
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold   group"
                  >
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out text-sm group-hover:text-gray-900">
                      Let's Connect
                    </span>
                    <span className="absolute inset-0 border-2 border-white  "></span>
                  </a>
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
                        <Link href="https://www.yourbeyondsolutions.com/">
                          DevOps Services to Make
                        </Link>
                      </span>
                      <br />
                      <span className="font-light text-gray-700">
                        {" "}
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                          <span className="  ">
                            Your Project a Digital Stand-Out
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <p className=" font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">
                    DevOps services at Beyond Solutions (YBS) empower businesses
                    to build cutting-edge web-based software, ensuring an
                    exceptional digital user experience. As a leading web
                    development partner, we combine a team of seasoned experts,
                    advanced technologies, and innovative tools, adhering to the
                    latest industry trends to form the cornerstone of your
                    business’s online growth.
                  </p>

                  <p className=" pb-4 font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">
                    To maximize your brand’s reach, our Digital Marketing team
                    delivers data-driven strategies that drive engagement,
                    conversions, and growth. Our Social Media Management service
                    ensures consistent and meaningful interactions with your
                    audience through curated content calendars and
                    platform-specific campaigns. Finally, our Branding solutions
                    guarantee a unified identity across every customer
                    touchpoint—establishing trust, recognition, and a lasting
                    impression. Partner with Beyond Solutions (YBS) to build a brand that
                    not only stands out but also connects deeply with your
                    audience, driving long-term success in the digital world.
                  </p>

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

        <Techstack />

        <WebDevelopmentProcessSection />

        <IndustriesSection />

        <WhyUsInnovativeSection />

        <PremiumCaseStudies />
      </div>
    </>
  );
}
