"use client";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Apple, ChevronDown, ChevronRight, FileText, Globe, Smartphone, Sparkles } from "lucide-react";
import React, { useRef, useState } from "react";
import { Store, Cpu, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Monitor,   ArrowUpCircle, RefreshCcw, Camera, Wrench } from 'lucide-react';
import { LayoutGrid, LifeBuoy, ClipboardList } from 'lucide-react';
 
import { Bot, Aperture, BarChart2, MessageSquareText, ThumbsUp } from 'lucide-react';

import { Layout } from "lucide-react";

import { Users, Grid, Zap , Puzzle } from "lucide-react";

import { Laptop, ShoppingBag, ShieldCheck,  RefreshCw } from 'lucide-react';

export default function Aiml() {

  const faqs = [

    {
      question:
        "Can you help us turn our AI/ML solution idea into a reality?",
      answer:
        "Yes, absolutely! We love working on innovative AI/ML concepts. Our team of experienced developers is ready to guide you from the initial idea all the way through to a successful, real-world application. We're here to help you make your vision a reality.",
    },

    {
      question: "Is it possible to integrate new AI solutions with our existing systems ?",
      answer:
        "Yes, we specialize in seamless integration. Our experts are skilled at implementing AI solutions into your company's current infrastructure. We also use DevOps practices to ensure a smooth, continuous workflow without interrupting your daily operations.",
    },

    {
      question: "Do you develop chatbots as part of your AI/ML services ?",
      answer:
        "Yes. We build custom, AI-powered chatbots designed to improve customer service and engagement. We tailor each solution to your specific needs, using robust technologies like Python to create intelligent and reliable conversational tools.",
    },

    {
      question:
        "How much does an AI/ML solution cost ?",
      answer:
        "The cost varies depending on the project's complexity, scope, and specific requirements. We provide a detailed cost estimate after we've had a chance to discuss your goals and needs. Our priority is to deliver a high-quality AI solution that fits within your budget.",
    },

 
   

  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const WebDevServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const webDevServicesData = [

       
      {
        icon: Users,
        title: "Amazon Web Services (AWS)",
        description:
          "Power your operations with Amazon Web Services (AWS). We leverage AWS cloud computing to deliver fast, scalable, and secure solutions, giving you access to a wealth of on-demand services to support your business's growth.",
      },

      {
        icon: Grid,
        title: "E-commerce",
        description:
          "Our strategic e-commerce solutions are designed to bridge the gap between your storefront and your customers. We focus on building seamless and engaging digital experiences that drive sales and foster lasting customer relationships.",
      },

      {
        icon: Grid,
        title: "SAP Hybris",
        description:
          "Enhance enterprise-level customer engagement with SAP Hybris. We provide robust e-commerce and product content management solutions tailored to large-scale operations, helping you deliver a consistent and personalized experience across all channels.",
      },

      {
        icon: Zap,
        title: "WooCommerce",
        description:
          "Build and manage a powerful online store with our WooCommerce development services. We create unique e-commerce solutions on this flexible platform, giving you the tools to easily launch and grow your business.",
      },
     
    ];

    return (
      <section
        ref={ref}
        className="py-12    bg-transparent  relative overflow-hidden"
      >
        
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
              Related {" "}
              <span className=" ">Services We Offer</span>
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              We deliver rapid and reliable Commerce Experience Services
 solutions to help
              organizations achieve their business goals by creating intuitive
              and engaging digital experiences.
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
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 p-8 flex flex-col flex-grow">
                  <div className=" flex  justify-start items-center pb-6 ">
                    <div className="flex items-center justify-center  w-12 h-12 bg-cyan-600 text-white rounded-full  ">
                      <service.icon strokeWidth={2.5} />
                    </div>

                    <h3 className=" w-9/12 ps-4 text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm   leading-relaxed mb-6 flex-grow">
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
      id: "overview",
      title: "User Research",
      content:
        "We begin by understanding what your users truly need from an e-commerce platform. By analyzing their browsing and purchasing behaviors, we define clear, user-specific goals for your website or app.",

      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "discovery",
      title: "Wireframing",
      content:
        " Next, we plan the structure and layout of your online store. This includes strategically placing essential elements like the search bar, navigation menus, and product categories to create a logical flow.",

      image:
        "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "conceptualization",
      title: "User Flows",
      content:
        " We map out the exact path a user will take to complete a task, such as making a purchase. This ensures a seamless and intuitive journey from the first click to the final action.",

      image:
        "https://images.unsplash.com/photo-1542289539-059dea254938?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "design",
      title: "High-Fidelity Prototyping",
      content:
        " This stage brings your e-commerce store to life. We create a detailed, interactive model that closely resembles the final product, incorporating your brand's visual language, colors, and typography.",

      image:
        "https://images.unsplash.com/photo-1634838128617-efdf64411694?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },

    {
      id: "refinement",
      title: "Visual Design",
      content:
        " As the core of the design process, visual design focuses on the aesthetic elements. We enhance the overall look and feel of the store by carefully working on every detail to create a stunning digital product.",
      image:
        "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "refinement1",
      title: "Development Handover",
      content:
        " Once the design is finalized, we provide the development team with all the necessary prototypes, mockups, and documentation. This marks the start of the engineering phase to build your store.",

      image:
        "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "refinement2",
      title: "QA & Validation",
      content:
        " In the final step, we conduct quality assurance and validation to review all new releases. This ensures the finished product aligns with your business goals, meets accessibility standards, and delivers an excellent user experience.",
      image:
        "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    
  ];

  

  // Data for the industry service cards
  const industryServices = [
    {
      icon: <Cpu size={28} className="text-green-600" />,
      title: "Retail",
      description:
        "Discover transformative IT services and digital solutions for the retail industry that drive seamless omnichannel experiences. We specialize in building robust e-commerce platforms, optimizing supply chain logistics, and implementing data-driven digital marketing strategies. Our goal is to help you connect with customers in a meaningful way, increase sales, and thrive in the fast-paced digital era.",
    },

    {
      icon: <Cpu size={28} className="text-green-600" />,
      title: "Information Technology",
      description:
        "Drive efficiency, innovation, and sustainable growth within the dynamic information technology industry. We provide specialized IT consulting and digital solutions, including cloud migration, automation, and cybersecurity enhancements. Our services are designed to help your business optimize operations, solve complex challenges, and stay ahead of the curve.",
    },

    {
      icon: <Palette size={28} className="text-purple-600" />,
      title: "Food & Beverage",
      description:
        "Whisk your food business to new heights with our specialized digital marketing and branding services. We design captivating websites with integrated online ordering systems and craft strategic social media campaigns that engage food enthusiasts. Our expertise helps you build a strong online presence, foster long-term customer loyalty, and stand out in the competitive culinary landscape.",
    },
  ];

  // Component for the "Services for Various Industries" section
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
              Industry Applications
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





const servicesData = [
  {
    title: "Generative AI",
    description: "Modernize your interactions with data, brands, and customers. Our smart algorithms use learned patterns to create new content like images, text, and videos. Leverage Generative AI to automate tasks, generate code, curate content, and power digital assistants, significantly boosting efficiency and saving time.",
    icon: <Bot className="text-blue-500 w-10 h-10 " />,
    videoUrl: "https://videos.pexels.com/video-files/28561591/12421525_2560_1440_30fps.mp4",
    isReversed: false,
  },
  {
    title: "Computer Vision",
    description: "Empower your systems to retrieve, process, and understand visual data. Our experts deploy computer vision for intelligent image and video analysis, enabling real-time object detection, automated data collection, equipment monitoring, and enhanced security applications. Turn visual data into actionable insights for your business.",
    icon: <Aperture className="text-green-500 w-10 h-10 " />,
    videoUrl: "https://videos.pexels.com/video-files/32399542/13820720_2560_1440_30fps.mp4",
    isReversed: true,
  },
  {
    title: "Predictive Models",
    description: "Make proactive business decisions and stay agile in a dynamic market. Our automated models forecast market trends and predict outcomes, enhancing decision-making and customer experience. We enable proactive fraud detection, customer churn prediction, and supply chain optimization for scalable, data-driven results.",
    icon: <BarChart2 className="text-purple-500 w-10 h-10 " />,
    videoUrl: "https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4",
    isReversed: false,
  },
  {
    title: "Natural Language Processing",
    description: "Revolutionize communication by enabling computers to understand and process human language. We build auto-content moderation, customer response systems, data extraction tools, and advanced chatbots. Use NLP to perform sentiment analysis, semantic searches, and text classification, leading to improved customer satisfaction.",
    icon: <MessageSquareText className="text-orange-500 w-10 h-10 " />,
    videoUrl: "https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4",
    isReversed: true,
  },
  {
    title: "Recommendation Engines",
    description: "Fulfill customer needs with advanced, personalized recommendations. Our machine learning algorithms predict user preferences to suggest relevant content and products. This intelligent filtering system forecasts user behavior, creating a more engaging and satisfying experience that boosts sales and loyalty.",
    icon: <ThumbsUp className="text-yellow-500 w-10 h-10 " />,
    videoUrl: "https://videos.pexels.com/video-files/8387491/8387491-uhd_2560_1440_30fps.mp4",
    isReversed: false,
  },
];

  return (
    <>
      <section>
        <div className="relative flex  h-[86vh] md:h-[67vh] w-full">
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

          <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
            <p className="text-center  md:text-left font-thin text-white   text-2xl md:text-4xl flex flex-col justify-center items-center h-full my-auto">
              AI & Machine Learning  
              <br /> 
              <span className="text-center   text-[10px] md:text-[15px] pt-5 w-full md:text-start uppercase">
                Home / AI & Machine Learning   
              </span>
            </p>
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
                      
                      
                      <span className="font-light text-gray-700">
                        {" "}
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                          <span className="  ">
                            Our End-to-End   AI & Machine Learning   Services
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <p className="  text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

          At Beyond Solutions (YBS), we transform raw data into a strategic asset. Our AI and Machine Learning services are at the forefront of our technology offerings, helping businesses build intelligent systems that not only automate processes but also generate deep, predictive insights. We believe that a data-centric approach is the key to unlocking new efficiencies, driving competitive advantage, and fueling sustainable growth. Our expert data scientists and engineers meticulously architect every solution, ensuring it's not just technologically advanced but also secure, scalable, and perfectly aligned with your specific business objectives.

                  </p>

                  <p className=" pb-4  text-sm md:text-md text-gray-600 text-justify md:text-left pt-3 ">

What truly sets our AI and ML consultancy apart is our strategic, data-first approach. We begin every project with a deep dive into your business challenges, data landscape, and core strategic goals. Our team conducts extensive research, including stakeholder interviews and data readiness assessments, to develop a clear understanding of the opportunities we need to solve. This phase is crucial for defining the problem, identifying key performance indicators, and outlining a clear roadmap for model development. By focusing on this strong foundation, we ensure the final solution is not just a proof of concept, but a powerful engine that delivers measurable improvements in decision-making and operational efficiency.

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
      
         <div className="  text-black  font-inter min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-3xl   font-extrabold tracking-tight   mb-4">
            Delve into the Realm Enriched by AI Expertise
          </h1>
          <p className="text-sm   max-w-3xl mx-auto">
            Discover our comprehensive suite of AI & Machine Learning services, designed to unlock
            your business's full potential.
          </p>
        </header>

        {servicesData.map((service, index) => (
         <div
            key={service.title}
            className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 py-16 md:py-20 ${
              service.isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-6  rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="row flex flex-row justify-center items-center gap-4 py-3">

              <div className=" ">{service.icon}</div>
              <h2 className="text-xl  font-bold  ">
                {service.title}
              </h2>
            </div>
              <p className="text-md    leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Video Section */}
            <div className="w-full md:w-1/2     rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="relative"> {/* 16:9 Aspect Ratio */}
           <video
                  src={service.videoUrl}
                  poster={service.posterUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=" inset-0 h-full w-full object-cover"
                />  </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    
    
      
        <IndustriesSection />
        
  <WebDevServicesSection />



        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className=" text-lg md:text-3xl font-bold text-gray-900 mb-4">
                FAQ
              </h2>
              <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                  >
                    <h3 className="text-sm font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeFaq === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {activeFaq === index && (
                    <div className=" text-sm p-6 pt-0 text-gray-600">
                      <div className=" text-sm text-gray-500">{faq.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
