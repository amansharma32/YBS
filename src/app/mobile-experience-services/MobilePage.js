"use client";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Apple, ChevronDown, ChevronRight, FileText, Globe, Smartphone, Sparkles } from "lucide-react";
import React, { useRef, useState } from "react";
import { Store, Cpu, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Layout } from "lucide-react";

import { Users, Grid, Zap, ClipboardList, Puzzle } from "lucide-react";

import { Laptop, ShoppingBag, ShieldCheck,  RefreshCw } from 'lucide-react';

export default function MobilePage() {

  const faqs = [

    {
      question:
        "What is the major difference between Mobile UI/UX and Web design ?",
      answer:
        "The primary difference lies in the user's interaction method and screen size. Mobile UI/UX design prioritizes touch-based gestures, smaller screens, and platform-specific guidelines (iOS vs. Android). In contrast, web design typically caters to larger screens and mouse/keyboard interactions. A successful mobile app focuses on simplicity and direct usability to create a superior mobile user experience.",
    },

    {
      question: "Can good mobile UI/UX design reduce the app's uninstall rate ?",
      answer:
        "Yes, absolutely. A well-designed mobile UI/UX is crucial for reducing the uninstall rate (also known as the churn rate). A seamless and intuitive user experience leads to higher user satisfaction and engagement, which in turn encourages users to keep the app and even recommend it to others. This positive feedback loop can also help increase the install rate over time.",
    },

    {
      question: "What is UX design specifically for mobile apps ?",
      answer:
        "Mobile UX design is the practice of creating positive and efficient user experiences for applications on mobile devices and wearables. It focuses on the application's flow, functionality, and ease of use to ensure that users can achieve their goals quickly and without frustration. The main goal is to solve a user's problem and make the product as intuitive as possible.",
    },

    {
      question:
        "How is ReactJS used for mobile-first web apps ?",
      answer:
        "ReactJS is an ideal framework for building mobile-first web apps because of its modular, component-based architecture. Developers can use CSS media queries to ensure a responsive design that adapts beautifully to any screen size. React's modern features, such as useState, useEffect, and other hooks, make it easy to manage state and build dynamic, highly interactive user interfaces. For native mobile apps, React Native allows for code reuse between web and mobile platforms.",
    },

    {
      question:
        "What is the difference between UI and UX design ?",
      answer:
        "UI (User Interface) design and UX (User Experience) design are often confused, but they serve different purposes. Think of it this way: UI design is about how an app looks—the visual elements like buttons, colors, fonts, and layouts. UX design is about how an app works and feels to use—the overall journey and logic, including ease of navigation and efficiency. A great mobile app needs both: a beautiful UI and a seamless UX.",
    },


    {
      question:
        "How long does a typical mobile app design project take ?",
      answer:
        "The timeline for a mobile app design project can vary significantly depending on the app's complexity, the number of features, and the scope of work. A small-scale app with a few core features might take a few weeks, while a large, complex app with multiple screens and advanced functionality could take several months. A key factor is the feedback and revision process; clear communication helps keep the project on track.",
    },

    {
      question:
        "What is usability testing and why is it important for mobile apps ?",

      answer:
        "Usability testing is a method used to evaluate an app's user experience by observing real users as they interact with it. During a test, users are asked to complete specific tasks, and their actions and feedback are recorded. For mobile apps, this is especially important due to the unique constraints of small screens and touch interfaces. Usability testing helps identify pain points, confusing navigation, and other issues that can frustrate users, allowing designers to make informed changes that improve the final product.",
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
              We deliver rapid and reliable UI/UX design solutions to help
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
      title: "User Research & Strategy",
      content:
        "We begin by diving deep into your target audience. Our user research uncovers vital insights into user behaviors, needs, and pain points. This crucial first step allows us to build a strategic foundation for a mobile UI/UX design that is not only beautiful but also truly effective.",

      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "discovery",
      title: "Wireframing & Information Architecture",
      content:
        "Before a single pixel is styled, we create low-fidelity wireframes. These blueprints map out the app's structure, layout, and functionality, ensuring a logical and effortless user journey. This stage helps us identify and resolve potential usability issues early on, saving time and resources.",

      image:
        "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "conceptualization",
      title: "High-Fidelity Prototyping",
      content:
        "The wireframes come to life in the form of a high-fidelity prototype. This interactive and clickable model of your app simulates the full user experience, allowing you to test and validate the design before a line of code is written. It's the best way to get a realistic feel for the final product.",

      image:
        "https://images.unsplash.com/photo-1542289539-059dea254938?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "design",
      title: "User Flows & Journeys",
      content:
        "We meticulously map out user flows to visualize and refine every possible path a user can take within the app. By designing for seamless transitions and minimal friction, we create an intuitive experience that guides users to achieve their goals efficiently and effectively.",

      image:
        "https://images.unsplash.com/photo-1634838128617-efdf64411694?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },

    {
      id: "refinement",
      title: "Visual Design & Branding",
      content:
        "This is where the app's identity is forged. Our visual design team crafts a stunning and consistent design language, including color palettes, typography, and imagery, that captures your brand's essence. The result is a memorable and aesthetically pleasing interface that stands out from the competition.",
      image:
        "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "refinement1",
      title: "Development Handover",
      content:
        "Once the design is finalized, we provide a smooth development handover. We deliver all necessary assets, specifications, and documentation to your development team, ensuring a clear and efficient transition from design mockups to the engineering and coding phase.",

      image:
        "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "refinement2",
      title: "Quality Assurance & Validation",
      content:
        "In the final stage, we perform a thorough review to ensure the website meets all project goals, user experience standards, and accessibility requirements. This validation guarantees that the new release is polished and ready to go live.",
      image:
        "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              Our Meticulous Website Design Process {" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Concept to Deployment
              </span>
            </p>
            <p className="text-sm   text-gray-500 max-w-3xl mx-auto">
             Our meticulous process is the engine behind every project, from the initial concept to final deployment. We've designed a structured, transparent workflow to ensure a smooth journey marked by exceptional quality and efficiency. Every step is a true collaboration, dedicated to transforming your vision into a powerful, effective digital product that captures attention and drives results in the digital world.
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



  const Ourservice = () => {


  const services = [

    {
      title: "Custom iOS App Design",
      description: "Our iOS app design services are meticulously crafted to align with Apple's ecosystem and design principles. We create a polished, intuitive user interface (UI) and a seamless user experience (UX) that captivates your audience on iPhone and iPad devices. Our focus is on delivering a high-quality, native feel that maximizes performance and user satisfaction.",
      icon: <Apple className="text-4xl text-cyan-500" />
    },


    {
      title: "Professional Android App Development",
      description: "We build responsive and robust Android applications optimized for the vast and diverse Android ecosystem. Our design process prioritizes compatibility across various screen sizes and operating system versions, ensuring your app delivers a smooth and consistent experience for all users, regardless of their device.",
      icon: <Smartphone className="text-4xl text-cyan-500" />
    },


    {
      title: "Efficient Hybrid App Development",
      description: "For a wider reach and increased efficiency, our hybrid app development services provide a cost-effective solution without compromising on quality. We build powerful, single-source applications that function flawlessly on both iOS and Android, offering the speed and performance of a native app with the flexibility of a cross-platform solution.",
      icon: <Globe className="text-4xl text-cyan-500" />
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
              Website Design
            </span>{" "}
            Services We Offer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm text-gray-600 max-w-2xl mx-auto font-light"
          >
            We've honed a strategic, results-driven approach to website design, empowering businesses to achieve their goals. Ready to see what our expertise can do for you?
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
              Mobile Experience Services
              <br />
              <span className="text-center   text-[10px] md:text-[15px] pt-5 w-full md:text-start uppercase">
                Home / Mobile Experience Services
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
                        <Link href="https://www.fluxdigital.info/">
                          Unleash Your Website Design Power
                        </Link>
                      </span>
                      <br />
                      <span className="font-light text-gray-700">
                        {" "}
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                          <span className="  ">
                            Our End-to-End Design Services
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <p className="  text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

                At FLUX Digital, we craft intuitive and engaging mobile experiences that put the user first. Our mobile experience services are at the heart of our digital offerings, helping brands build online platforms that are not only visually stunning but also seamless to navigate on any device. We believe that a great user experience is the key to driving higher conversions, building brand loyalty, and simplifying complex user journeys. Our expert designers meticulously craft every element of the mobile interface, ensuring it’s not just beautiful, but also functional, accessible, and perfectly aligned with your brand's identity.

                  </p>

                  <p className=" pb-4  text-sm md:text-md text-gray-600 text-justify md:text-left pt-3 ">

                  What truly sets our website design agency apart is our strategic, data-driven approach. We begin every project with a deep dive into mobile user behavior, market trends, and your business objectives. Our team conducts extensive research, including user interviews and competitor analysis, to develop a clear understanding of the problems we need to solve. This phase is crucial for defining the website's architecture, creating user personas, and mapping out user flows specifically for a mobile environment. By focusing on a strong foundation, we ensure the final design is not just aesthetically pleasing, but a powerful solution that solves real-world mobile user problems and delivers tangible business results.

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
