"use client";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Apple, ChevronDown, ChevronRight, Code, FileText, Globe, Layers, Smartphone, Sparkles } from "lucide-react";
import React, { useRef, useState } from "react";
import { Store, Cpu, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Monitor,   ArrowUpCircle, RefreshCcw, Camera, Wrench } from 'lucide-react';

import { Layout } from "lucide-react";

import { Users, Grid, Zap, ClipboardList, Puzzle } from "lucide-react";

import { Laptop, ShoppingBag, ShieldCheck,  RefreshCw } from 'lucide-react';

export default function MobileDevelopment() {

  const faqs = [

    {
      question:
        "How do I choose a mobile app development service ?",
      answer:
        "Choosing the right mobile app development company requires careful consideration. Start by defining your project's specific requirements, including the app's core function, target audience, and must-have features. Research companies that specialize in the type of app you need, whether it's an e-commerce platform, a game, or a business tool.Next, dive into their portfolio and client references to evaluate their track record and quality of work. Look for their experience in your industry or with similar projects. Pay close attention to their communication style and project management process; a transparent and responsive team is key to a successful partnership. Finally, ensure they offer post-launch support and maintenance to guarantee the long-term success of your app.",
    },

    {
      question: "How much would it cost to build a mobile app for my business ?",
      answer:
        "The cost to build a mobile app can vary significantly, ranging from a few thousand to hundreds of thousands of dollars. The price is influenced by several factors, including the app's complexity, the number of features, the platform (iOS, Android, or both), and the geographic location of the development team. Simple apps with basic features (e.g., calculators, weather apps) might cost between $10,000 and $50,000.Moderately complex apps with features like user authentication or payment gateways can range from $50,000 to $120,000.Highly complex apps that integrate advanced functionalities such as AI, real-time data, or large-scale e-commerce can exceed $120,000.The best way to get an accurate estimate is to request a detailed project proposal from a mobile app development company. A good firm will provide a transparent breakdown of costs based on your specific needs.",
    },

    {
      question: "How do I choose the right platform to develop the mobile application for my business ?",
      answer:
        "The right platform for your business depends on your target audience, budget, and desired performance. There are two main options: Native Apps: These are built specifically for a single platform (e.g., Swift/Kotlin for iOS or Java/Kotlin for Android). They offer the best performance, user experience, and access to device-specific features, but development costs and time are typically higher as you need separate codebases for each platform. Cross-Platform Apps: These are built using frameworks like React Native or Flutter, which allow developers to use a single codebase for both iOS and Android. This approach is often more cost-effective and faster to develop, making it a popular choice for businesses that need to reach a wide audience on a limited budget. To make an informed decision, it's crucial to understand your audience's device preferences, your budget constraints, and the level of performance and functionality your app requires.",
    },

    {
      question:
        "What are the key benefits of mobile app development services ?",
      answer:
        " Developing a custom mobile app provides numerous benefits that can help your business thrive in the digital landscape: Enhanced Customer Engagement: Mobile apps provide a direct communication channel with your customers through features like push notifications and in-app messaging, fostering brand loyalty and keeping them informed. Improved Brand Visibility: An app on a user's home screen serves as a constant, subtle reminder of your brand, increasing visibility and recognition. Competitive Advantage: A well-designed, functional app sets you apart from competitors who haven't embraced mobile technology, showcasing your commitment to innovation and customer experience. Valuable Data Insights: Apps can collect valuable data on user behavior and preferences, providing insights that can inform your business strategy, marketing efforts, and product offerings. Streamlined Business Processes: Mobile apps can automate tasks and improve operational efficiency for both your employees and customers, from order processing to appointment scheduling. Investing in a mobile app is an effective strategy to deepen customer relationships, increase brand presence, and gain a significant advantage in the market.",
    },


  {
    question: "What is UI/UX design and why is it important for a mobile app?",
    answer:
      "UI stands for User Interface, which is the visual design of the app—the buttons, icons, colors, typography, and overall layout. UX stands for User Experience, which is the overall feeling a user has while interacting with the app—is it easy to use? Is it intuitive? A great app has both a beautiful UI and a seamless UX. Investing in professional UI/UX design is crucial because it leads to higher user retention, better engagement, and a more positive brand perception. A confusing or unattractive app will quickly be uninstalled, regardless of its functionality.",
  },

  {
    question: "What is an MVP (Minimum Viable Product) and why should I consider it?",
    answer:
      "An MVP, or Minimum Viable Product, is a version of a new app with just enough features to satisfy early adopters and provide a functional base for future development. It's a strategic approach to app development that prioritizes core functionality and gets the app to market faster. This approach is highly valuable because it allows you to test your app idea with real users and gather feedback without the large initial investment of building a full-featured product. An MVP helps you validate your business concept, reduce risk, and inform which features to build next based on actual user data.",
  },

  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "The timeline for mobile app development varies significantly based on complexity, platform, and team size. A simple app with basic features might take 2-4 months from concept to launch. A moderately complex app with features like a login system, social media integration, or a payment gateway could take 4-8 months. Highly complex apps with advanced features like real-time data, AI integration, or intricate back-end systems can take 9-12 months or longer. The process is typically broken down into discovery and planning, UI/UX design, development, quality assurance (QA) testing, and final deployment. A detailed project plan from your development partner will provide a more precise timeline.",
  },

  {
    question: "What happens after the app is launched?",
    answer:
      "App launch is just the beginning. Post-launch support and maintenance are crucial for the long-term success of your application. This includes fixing bugs, updating the app for new operating system versions (like iOS and Android updates), adding new features based on user feedback, and monitoring performance. A good development partner will offer a comprehensive maintenance package that includes regular updates and ongoing support to ensure your app remains secure, functional, and competitive in the market.",
  },

  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const WebDevServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const webDevServicesData = [

       
      {
        icon: Users,
        title: "DevOps Consulting",
        description:
          "We help you streamline your development workflow and boost software delivery reliability with our expert DevOps strategies.",
      },

      {
        icon: Grid,
        title: "Data & Analytics",
        description:
          "Turn your data into a powerful asset. Our analytics services give you the insights you need to make smarter business decisions.",
      },

      {
        icon: Grid,
        title: "AI & Machine Learning",
        description:
          "Unlock new possibilities with AI. We build intelligent solutions that deliver actionable insights and transform your business.",
      },

      {
        icon: Zap,
        title: "On-Demand App Development",
        description:
          "Get a custom on-demand app that streamlines your operations and keeps your users engaged and coming back for more.",
      },
     
      {
        icon: Zap,
        title: "Food Delivery App Development",
        description:
          "From seamless ordering to real-time tracking, our custom apps elevate your food delivery service for both you and your customers.",
      },

      {
        icon: Zap,
        title: "Enterprise Application Development",
        description:
          "We create custom enterprise applications that are innovative, scalable, and built to solve your unique business challenges.",
      },
     
      {
        icon: Zap,
        title: "Mobile Experience (UX)",
        description:
          "Make every tap count. We craft intuitive and effortless mobile user experiences that delight your customers.",
      },

      {
        icon: Zap,
        title: "Mobile App Testing",
        description:
          "Ensure your app works perfectly every time. We perform comprehensive testing to guarantee flawless functionality and compatibility across all devices.",
      },
     
    ];

    return (

      <section ref={ref} className="py-12  bg-transparent  relative overflow-hidden" >
        
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
      title: "Our Mobile App Development Process",
      content:
        "The process of creating a mobile app is a collaborative journey, broken down into distinct stages to ensure a successful outcome. It begins with User Research, where we define the project's scope, budget, and timeline by identifying the target audience and their specific needs. Following this, a comprehensive Market Study is conducted to analyze competitors and market trends, which helps us pinpoint the unique selling points (USPs) that will make your app stand out.",

      image:
        "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "discovery",
      title: "Design and Prototyping",
      content:
        "In this phase, we bring the app to life visually. Our team creates wireframes and mockups to visualize the application's layout, focusing on a flawless user interface and experience (UI/UX design). We also choose essential branding elements like fonts and color schemes to establish a consistent visual identity.",

      image:
        "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "conceptualization",
      title: "Development",
      content:
        "This stage is the core of the app-building process. Once a clear design is in place, we select the appropriate technology stack—whether native, cross-platform, or a hybrid approach—to ensure optimal performance. Our developers then write the code and implement server-side components. Throughout this process, we maintain an agile workflow, allowing for continuous integration of feedback and efficient problem-solving.",

      image:
        "https://images.unsplash.com/photo-1542289539-059dea254938?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "design",
      title: "Testing",
      content:
        "Before the app is ready for the public, it undergoes rigorous Testing. Our team conducts a variety of tests, including usability and performance testing, on multiple devices and simulators. This meticulous process helps us detect and resolve any bugs or issues, guaranteeing the app's stability, functionality, and a seamless user experience across different screen resolutions and sizes.",

      image:
        "https://images.unsplash.com/photo-1634838128617-efdf64411694?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },

    {
      id: "refinement",
      title: "Deployment",
      content:
        "The final stage of active development is Deployment. This involves preparing the app for release by packaging it for the relevant app stores, creating compelling descriptions and visuals, and submitting it for final review and approval. We handle this entire process to ensure a smooth and successful launch.",
      image:
        "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "refinement1",
      title: "Maintenance and Updates",
      content:
        "Our commitment doesn't end at launch. After the app goes live, we provide continuous Maintenance and Updates. Our experts monitor the app’s performance, analyze user feedback, and provide regular updates to ensure it remains compatible with the latest operating systems and devices, guaranteeing its long-term viability and success.",

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
              Our Meticulous E-commerce Design Process  
 {" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
               Concept to Conversion
              </span>
            </p>
            <p className="text-sm   text-gray-500 max-w-3xl mx-auto">
        Our meticulous process is the engine behind every e-commerce project, from initial concept to a fully launched storefront. We've designed a structured, transparent workflow to ensure a seamless journey defined by exceptional quality and efficiency. Every step is a true collaboration, dedicated to transforming your vision into a powerful, effective online store that captures attention and drives results.

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
      title: "iOS Development",
      description: "We build premium, intuitive iOS applications that provide a seamless and high-quality user experience. We leverage the latest Apple technologies to create visually stunning apps that stand out in the App Store.",
      icon: <Apple className="w-12 h-12 text-cyan-500" />,
    },
    {
      title: "Android Development",
      description: "Our team crafts feature-rich Android apps with a focus on powerful functionality and a user-friendly design. We create flexible and customizable solutions that perform beautifully across the diverse Android ecosystem.",
      icon: <Smartphone className="w-12 h-12 text-cyan-500" />,
    },
    {
      title: "Flutter Development",
      description: "With Flutter, we can build stunning, robust, and cost-effective cross-platform applications from a single codebase. This approach saves you time and resources while delivering a consistent, native-like experience on both iOS and Android.",
      icon: <Layers className="w-12 h-12 text-cyan-400" />,
    },
    {
      title: "React Native Development",
      description: "Unlock the flexibility of a shared codebase with React Native. We use this powerful framework to develop high-performing apps for multiple platforms, ensuring efficient development and easy scalability.",
      icon: <Code className="w-12 h-12 text-cyan-500" />,
    },
    {
      title: "Ionic",
      description: "Leverage the Ionic framework to build powerful and cost-effective mobile applications. Ideal for projects that require a quick turnaround without sacrificing quality or functionality.",
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
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
            Mobile App Development

 Services
              <br />
              <span className="text-center   text-[10px] md:text-[15px] pt-5 w-full md:text-start uppercase">
                Home / Mobile App Development

 Services
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
                        <Link href="https://www.fluxdigital.online/">
                          Unleash Your Mobile App Development Power
                        </Link>
                      </span>
                      <br />
                      <span className="font-light text-gray-700">
                        {" "}
                        <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                          <span className="  ">
                           Our End-to-End  Services
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <p className="  text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

             At FLUX Digital, we believe a great app is more than just code; it's a direct connection to your audience. We specialize in end-to-end mobile app development, creating robust and intuitive applications for both iOS and Android. Our approach is to build mobile experiences that not only perform flawlessly but also enhance your brand and engage your users from the very first tap. We transform your ideas into powerful, native-feeling applications that deliver real value and a competitive edge.


                  </p>

                  <p className=" pb-4  text-sm md:text-md text-gray-600 text-justify md:text-left pt-3 ">

                Our process is built on a foundation of strategic planning and user-centric design. We don't just start coding; we begin with a deep dive into your project goals, target audience, and market landscape. This discovery phase includes a thorough analysis of user needs and a competitive review to ensure your app stands out. We then craft a detailed roadmap, including wireframes and prototypes, to bring your vision to life before a single line of code is written. This meticulous approach guarantees that the final product is not only technically sound but also perfectly aligned with your business objectives and user expectations.

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
