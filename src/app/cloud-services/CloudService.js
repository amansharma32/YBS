"use client";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Apple, ChevronDown, ChevronRight, FileText, Gauge, Globe, Hand, Monitor, MousePointer, Repeat, Search, Server, Shield, Smartphone, Sparkles } from "lucide-react";
import React, { useRef, useState } from "react";
import { Store, Cpu, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Cloud,      Activity, Database, HardDrive, ShieldCheck,   } from 'lucide-react';

import { Layout } from "lucide-react";

import { Users, Grid, Zap, ClipboardList, Puzzle } from "lucide-react";

 
export default function CloudService() {

const faqs = [
  {
    question: "What is cloud computing?",
    answer: "Cloud computing is the delivery of on-demand computing services—including servers, storage, databases, networking, software, and analytics—over the internet ('the cloud'). Instead of owning and maintaining your own computing infrastructure, you can access these services from a cloud provider on a pay-as-you-go basis.",
  },
  {
    question: "What are the main types of cloud services?",
    answer: "There are three main types of cloud services, often referred to as **Infrastructure as a Service (IaaS)**, **Platform as a Service (PaaS)**, and **Software as a Service (SaaS)**. IaaS provides basic building blocks like virtual machines, PaaS offers a development environment, and SaaS provides a ready-to-use software application.",
  },
  {
    question: "What are the different cloud deployment models?",
    answer: "The four primary deployment models are **Public Cloud**, **Private Cloud**, **Hybrid Cloud**, and **Multi-cloud**. A public cloud is for general use, a private cloud is for a single organization, a hybrid cloud combines both, and a multi-cloud uses services from multiple providers.",
  },
  {
    question: "What are the key benefits of using the cloud?",
    answer: "The main benefits include **cost savings** (you only pay for what you use), **scalability** (easily adjust resources to meet demand), **high performance**, and a **global reach** that allows you to deploy applications worldwide.",
  },
  {
    question: "Is the cloud secure?",
    answer: "Yes, cloud providers invest heavily in security, often surpassing the capabilities of a single company's private data center. However, security is a **shared responsibility**. The provider secures the infrastructure, while you are responsible for securing your data and applications within it.",
  },
  {
    question: "How does pricing work in the cloud?",
    answer: "Cloud pricing is based on a **pay-as-you-go model**. Costs are calculated based on your consumption of resources like compute time, storage, and data transfer.",
  },
  {
    question: "What are some common use cases for cloud computing?",
    answer: "Cloud computing is used for a wide range of tasks, including website hosting, data backup and disaster recovery, delivering streaming video and audio, building and deploying applications, and data analytics.",
  },
  {
    question: "What is a serverless architecture?",
    answer: "Serverless computing is a cloud execution model where the cloud provider manages the infrastructure, automatically allocating and scaling resources for an application. You only pay for the execution time of your code, without having to provision or manage any servers. This is a very common approach in modern cloud development.",
  },
];


  const [activeFaq, setActiveFaq] = useState(null);

  const WebDevServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const webDevServicesData = [
      {
        icon: Users,
        title: "iOS Development",
        description:
          "We offer advanced mobile development solutions to create bespoke iOS applications, ensuring an intuitive and highly engaging user experience.",
      },

      {
        icon: Grid,
        title: "Android Development",
        description:
          "We design and build powerful, feature-rich applications for the Android platform, delivering a seamless user journey and effortless customisation.",
      },

      {
        icon: Zap,
        title: "Human-Machine Interface (HMI)",
        description:
          "Our designs focus on superior ergonomics to reduce operator workload and help prevent operational errors.",
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
              We deliver rapid and reliable   solutions to help
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
      id: "initial-assessment",
      title: "Initial Assessment and Consultation",
      content:
        "Our experts begin by thoroughly analyzing your business requirements. We identify your objectives, data storage needs, and budget constraints to create a testing strategy that aligns with your specific goals.",
      image: "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "service-selection",
      title: "Cloud Service Selection",
      content:
        "In this critical stage, we help you choose the right cloud service provider. We consider factors like performance, scalability, security, and cost to ensure you select the best platform for your needs.",
      image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "design-architecture",
      title: "Design and Architecture",
      content:
        "We meticulously design the cloud architecture that aligns with your business goals. This phase includes planning for network design, storage, infrastructure, and setting up redundancy and disaster recovery plans.",
      image: "https://images.unsplash.com/photo-1542289539-059dea254938?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "data-migration",
      title: "Data Migration",
      content:
        "Our team performs the transfer of your existing data and workloads to the new cloud environment. We ensure seamless integration with on-premise systems and prioritize data integrity and security during the entire migration process.",
      image: "https://images.unsplash.com/photo-1634838128617-efdf64411694?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      content:
        "We analyze the cloud environment to fine-tune it for optimal performance. We monitor resource utilization and implement auto-scaling to effectively manage traffic spikes and ensure a smooth user experience.",
      image: "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "ongoing-support",
      title: "Ongoing Support and Maintenance",
      content:
        "We offer end-to-end technical support for all concerns, and conduct a periodical review to enable the optimization of your cloud infrastructure. Our team keeps you up to date with new features and services.",
      image: "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
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
      <section ref={ref} className="py-12     ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="inline-block py-2 px-5 mb-6 text-xs font-semibold tracking-widest text-cyan-700 uppercase  rounded-full border border-cyan-800">
              Our Methodology
            </span>
            <p className=" text-lg md:text-4xl text-gray-500  font-bold  mb-6 leading-tight">
              Our Meticulous Cloud Solution Process {" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
               Strategy to Scalable Operation
              </span>
            </p>
            <p className="text-sm   text-gray-500 max-w-3xl mx-auto">
        Our meticulous process is the blueprint for every successful cloud project, from the initial strategy to full-scale operation. We've designed a structured, transparent workflow to ensure a seamless migration and a journey marked by exceptional performance and cost-efficiency. Every step is a true collaboration, dedicated to transforming your business goals into a powerful, effective cloud-native solution that enables innovation and drives growth in the digital world.


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



  const Ourservice = () => {


  

const services = [
    {
      title: "Cloud Consulting",
      description: "We provide strategic advice and hands-on support to unlock the full potential of cloud computing. Our guidance helps you evaluate needs, plan migrations, and optimize resources to maximize cost and performance benefits.",
      icon: <Cloud className="text-4xl text-blue-500" />
    },
    {
      title: "Cloud Hosting",
      description: "Host your websites, applications, and services on our robust cloud infrastructure. We provide scalable storage, virtual servers, and computing resources, ensuring high availability and exceptional performance without the hassle of managing hardware.",
      icon: <Server className="text-4xl text-blue-500" />
    },
    {
      title: "Cloud Migration",
      description: "Move your applications, data, and critical business elements to a new cloud platform with a seamless and secure migration process. We handle the complexity so you can transition from on-premises systems or other cloud environments effortlessly.",
      icon: <ArrowRight className="text-4xl text-blue-500" />
    },
    {
      title: "Cloud Monitoring and Reporting",
      description: "Gain real-time visibility into the health and performance of your cloud resources. Our proactive monitoring and detailed reports help us identify issues, ensuring your applications run efficiently and meet all performance and availability targets.",
      icon: <Activity className="text-4xl text-blue-500" />
    },
    {
      title: "Database Service",
      description: "Simplify data management with our managed database solutions. We handle the underlying infrastructure, allowing you to store, retrieve, and manage your data with ease, all while supporting both relational and NoSQL databases like MySQL, PostgreSQL, and MongoDB.",
      icon: <Database className="text-4xl text-blue-500" />
    },
    {
      title: "Backup Configuration",
      description: "Protect your critical information from data loss or corruption. We configure automated, reliable backup processes for your cloud data and configurations, ensuring your business-specific information is always secure and recoverable.",
      icon: <HardDrive className="text-4xl text-blue-500" />
    },
    {
      title: "Security Audit",
      description: "Strengthen your cloud security posture with a comprehensive audit. We assess your current security measures, identify vulnerabilities and compliance gaps, and provide clear recommendations to enhance data protection and ensure regulatory adherence.",
      icon: <ShieldCheck className="text-4xl text-blue-500" />
    },
    {
      title: "Continuous Integration and Deployment",
      description: "Accelerate your software development with our CI/CD automation. By seamlessly integrating code changes, testing, and deploying to production, we ensure your development cycles are efficient, consistent, and reliable.",
      icon: <Repeat className="text-4xl text-blue-500" />
    },
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };


  return (
    <div className="bg-gray-50  antialiased p-8 lg:p-16 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight"
          >
            <span className=" ">
              Cloud
            </span>{" "}
            Services We Offer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm text-gray-600 max-w-2xl mx-auto font-light"
          >
            We've honed a strategic, results-driven approach to Cloud, empowering businesses to achieve their goals. Ready to see what our expertise can do for you?
          </motion.p>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-3 bg-cyan-50 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


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
            <p className="text-center  md:text-left font-thin text-white text-2xl md:text-4xl flex flex-col justify-center items-center h-full my-auto">
              Cloud  Services
              <br />
              <span className="text-center   text-[10px] md:text-[15px] pt-5 w-full md:text-start uppercase">
                Technology / Cloud  Services
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
                      Experience Design
                    </span>

                    <p className="  text-lg md:text-2xl text-center md:text-left font-bold text-gray-900  mb-2 leading-tight">
                      <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                        <Link href="https://www.yourbeyondsolutions.com/">
                        Why Our Cloud Services Stand Out
                        </Link>
                      </span>
                      <br />
                      <span className="font-light text-gray-700">
                        {" "}
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                          <span className="  ">
                            Our End-to-End Cloud  Services
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <p className="  text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

              Our End-to-End Cloud Services are designed to ensure your business operations are seamless, secure, and highly available. This forward-thinking strategy not only protects your brand but also saves you time and resources by optimizing your infrastructure for peak performance, preventing costly downtime later.
     </p>

                  <p className=" pb-4  text-sm md:text-md text-gray-600 text-justify md:text-left pt-3 ">

         Unlock Unlimited Potential with Expert Cloud Consulting Services
As data complexity grows, traditional on-premise systems are no longer enough. We guide you on your cloud journey, helping you modernize operations and connect your people, processes, and technology. Moving to the cloud is a key enabler of digital transformation, boosting business innovation, agility, and resilience. With our comprehensive offerings, we help you leverage the full potential of the cloud to drive growth and foster innovation.
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
      
      <Ourservice/>

      
        <WebDevelopmentProcessSection />

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
