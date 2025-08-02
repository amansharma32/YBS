"use client"
import { useInView,motion ,AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Store, Cpu, Palette, ArrowRight } from 'lucide-react';
import WhyUsInnovativeSection from '@/components/sections/WhyUsInnovativeSection';


import {
  BarChart4,
  Users,
  Globe2,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';

const caseStudies = [
  {
    title: "Enterprise Analytics Dashboard",
    subtitle: "Real-time business intelligence",
    description: "Transformed decision-making with predictive analytics and custom visualization",
    icon: <BarChart4 className="w-8 h-8" />,
    cta: "View Case Study",
    color: "bg-gradient-to-br from-teal-500 to-emerald-600",
    results: ["+300% insights", "92% adoption rate"]
  },
  {
    title: "Customer Intelligence Platform",
    subtitle: "360° customer profiling",
    description: "Integrated 12 data sources into unified customer profiles with AI-driven recommendations",
    icon: <Users className="w-8 h-8" />,
    cta: "Explore Project",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    results: ["42% conversion lift", "28% retention boost"]
  },
  {
    title: "Global SaaS Platform",
    subtitle: "Enterprise-grade web application",
    description: "Built scalable architecture supporting 50k+ concurrent users with 99.99% uptime",
    icon: <Globe2 className="w-8 h-8" />,
    cta: "See Results",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    results: ["5x performance", "Global deployment"]
  },
  {
    title: "EdTech Learning System",
    subtitle: "Next-gen education platform",
    description: "Created immersive learning experience with real-time collaboration and progress tracking",
    icon: <GraduationCap className="w-8 h-8" />,
    cta: "Learn More",
    color: "bg-gradient-to-br from-indigo-500 to-violet-600",
    results: ["60% faster onboarding", "94% satisfaction"]
  },
  {
    title: "Secure Matchmaking Platform",
    subtitle: "Privacy-first architecture",
    description: "Engineered military-grade security with blockchain verification and biometric auth",
    icon: <ShieldCheck className="w-8 h-8" />,
    cta: "View Security",
    color: "bg-gradient-to-br from-red-500 to-amber-600",
    results: ["Zero breaches", "ISO 27001 certified"]
  },
];


// Main App component as required for the immersive
export default function WebDev() {
  // Define the content data for Flux Digital's web development services

   const WebDevServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });


     const webDevServicesData = [
    {
      title: "Web App Development",
      description: "Dive into the realm of intuitive web applications exclusively tailored to gift an immersive digital experience.",
      link: "#" // Placeholder link
    },
    {
      title: "E-commerce",
      description: "Bridge the gap between your storefront and customer with our strategic eCommerce solutions.",
      link: "#"
    },
    {
      title: "Corporate Website",
      description: "Avail sales opportunities and high user engagement with corporate website development services.",
      link: "#"
    },
    {
      title: "Customer Relationship Management",
      description: "Deploy fully featured and time-efficient data analytics to manage customer relationships.",
      link: "#"
    },
    {
      title: "Content Management System (CMS)",
      description: "Leverage enterprise CMS to manage dynamic and unorganised content for business efficiency.",
      link: "#"
    },
    {
      title: "SaaS",
      description: "Make stunning business software models using SaaS with an emphasis on company growth and profitability.",
      link: "#"
    }
  ];

    return (
      <section ref={ref} className="py-20 md:py-32   bg-transparent  relative overflow-hidden">
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
            <h2 className="text-4xl  font-bold text-gray-900 mb-6 leading-tight">
              Web Development <span className=" ">Services We Offer</span>
            </h2>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Transforming your vision into powerful, engaging, and high-performing web solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {webDevServicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-100 hover:border-cyan-200 transition-all duration-500 flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 p-8 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl font-bold mr-4">
                      {/* Placeholder for icon, could be dynamic based on service */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-cyan-600 font-semibold group-hover:text-cyan-800 transition-colors duration-300 mt-auto"
                  >
                    Learn more 
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
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

  const webDevelopmentContent = [
    {
      id: 1,
      title: "Web Development Services to Make Your Project a Digital Stand-Out",
      paragraphs: [
        "Web development services at Flux Digital empower businesses to build cutting-edge web-based software, ensuring an exceptional digital user experience. As a leading web development partner, we combine a team of seasoned experts, advanced technologies, and innovative tools, adhering to the latest industry trends to form the cornerstone of your business’s online growth.",
        "At Flux Digital, we meticulously focus on every facet of web development, guaranteeing a seamless and efficient process for your business. From crafting responsive designs and ensuring improved performance to building robust functionality, we specialize in delivering custom web development solutions for stunning, user-friendly, and highly engaging websites, eCommerce storefronts, web applications, CMS, SaaS platforms, and enterprise applications. Our goal is to ensure your online presence not only stands out but truly shines in the digital landscape."
      ]
    }
  ];


    const technologyStacks = {
    frontend: [
      {
        title: "React",
        img:"https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441834/react_4cfc715018_mr4li8.svg",
        description: "Build fast-loading and optimized web applications with rapid page rendering features from the constructive and interactive technology of React.",
        link: "#"
      },
      {
        title: "Next.js",
          img:"https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/next_js_7413084cb7_jy987e.svg",
        description: "Build web applications of bespoke quality and quick loading times with the exceptional performance of the Next.js technology framework.",
        link: "#"
      },

      {
        title: "Vue.js",
            img:"https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/Vuejs_9db22dd83c_eijjga.svg",
        description: "Elevate customer engagement with visually stunning, scalable and reliable interfaces for web applications through the boundless possibilities of Vue.js.",
        link: "#"
      },
      {
        title: "Angular",
            img:"https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/Angular_56306ec9d8_gocdng.svg",
        description: "Transform your industry with the combination of agile concepts and the broad expertise of our Angular developers to give life to thoughtful web applications.",
        link: "#"
      }
    ],
    backend: [
      {
        title: "Python",
              img:"https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441834/Python_54b43ad500_q2jriq.svg",
      
            
        description: "Revolutionize your business with top-notch web applications, dynamic websites, and desktop apps to rewrite your brand’s success story with the promise of Python.",
        link: "#"
      },
      {
        title: "Node.js",
          img:"https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/Node_js_bdf692ea23_itlxxm.svg",
      
        description: "Develop quick and scalable web pages with real-time Node.js technology to highlight your business’s digital strength with solution-focused applications.",
        link: "#"
      },
      {
        title: "PHP",
            img:"https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441833/php_a3a7eccfb0_phmctj.svg",
      
        description: "Get assistance from a robust codebase to get dynamic, swift and flexible PHP web development solutions for highly interactive web pages.",
        link: "#"
      }
    ],
    database: [
      {
        title: "MySQL",

            img:"https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441833/Mysql_8dd00fedbf_fckj9c.svg",

        description: "Well-suited for database management, MySQL is easy to install. Get the most robust database system to build mission-critical applications.",
        link: "#"
      },
      {
        title: "MongoDB",

            img:"https://res.cloudinary.com/dkbusg4bq/image/upload/v1753441832/Mongo_1af6329c73_las3o5.svg",
        description: "Incorporate the flexible schema of MongoDB to scale up and make queries much faster, while following all key features of modern databases.",
        link: "#"
      }
    ]
  };

  // TechnologyStackSection Component Definition with Category Selection and Grid Display
  const TechnologyStackSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [activeCategory, setActiveCategory] = useState('frontend'); // Default to frontend

    const currentTechnologies = technologyStacks[activeCategory];

    // Animation variants for the grid items - simplified
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08, // Slightly faster stagger
          delayChildren: 0.1
        },
      },
    };

    const itemVariants = {
      hidden: { y: 40, opacity: 0, scale: 0.95 }, // Less extreme initial position
      visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 80, // Softer spring
          damping: 12,
        },
      },
    };

    return (
      <section ref={ref} className="py-24 md:py-40 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-10 pointer-events-none">  
        
          <div className="absolute top-1/4 left-[5%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-[5%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-teal-300/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

         
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23a0aec0\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'17\' cy=\'17\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')] opacity-5"></div>
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-24"
          >
            <span className="inline-block py-3 px-6 mb-8 text-sm font-bold tracking-widest text-cyan-700 uppercase bg-cyan-100 rounded-full border border-cyan-300 shadow-md backdrop-blur-sm">
              Our Stack
            </span>
            <h2 className="text-4xl  font-extrabold text-gray-900 mb-8 leading-tight drop-shadow-lg">
              Web Development <span  >Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Leveraging cutting-edge technologies to build robust, scalable, and future-proof digital solutions.
            </p>
          </motion.div>

          {/* Category Selection Tabs/Buttons - Clean and elegant */}
    <div className=" mx-auto flex justify-center items-center">
              <div className="flex justify-center mb-20 space-x-4 md:space-x-8 flex-wrap p-2 w-fit px-12 rounded-full bg-white/70 backdrop-blur-lg shadow-xl border border-gray-100">
            <AnimatePresence>
              {Object.keys(technologyStacks).map((categoryKey) => (
                <button
                  key={categoryKey}
                  onClick={() => setActiveCategory(categoryKey)}
                  className={`relative py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out z-10
                              ${activeCategory === categoryKey
                                  ? '   text-black' // Removed scale on active
                                  : 'text-gray-700    cursor-pointer '
                              }`}
                >
                  {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                  {activeCategory === categoryKey && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  )}
                </button>
              ))}
            </AnimatePresence>
          </div>
    </div>

          {/* Technology Cards Grid - Professional and refined layout */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid  px-4 md:px-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6  "
          >
            {currentTechnologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={itemVariants}
                whileHover={{
                  y: -10, // Subtle lift
                  boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.2), 0 10px 20px -5px rgba(6, 182, 212, 0.08)", // Softer, less intense shadow
                  scale: 1.02, // Subtle scale
                  rotateX: 0, // Removed 3D rotation
                  rotateY: 0, // Removed 3D rotation
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl border border-gray-100 hover:border-cyan-300 transition-all duration-300 flex flex-col h-full
                           transform-gpu" // Removed perspective
              >
                {/* Subtle inner gradient on hover - less vibrant */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                {/* Decorative overlay for a premium look - static and subtle */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-200/20 rounded-full mix-blend-overlay blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> {/* Removed scale and rotate */}

                <div className="relative z-10 p-10 flex flex-col flex-grow">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full   text-white flex items-center justify-center text-3xl font-bold mr-6   transform group-hover:rotate-[10deg] transition-transform duration-300"> {/* Reduced rotation */}
                      {/* Icon placeholder - could be dynamic based on tech.title */}
                    <img src={tech.img} alt={tech.title} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 leading-tight mb-4">
                      {tech.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-md leading-relaxed mb-8 flex-grow">
                    {tech.description}
                  </p>
                  <a
                    href={tech.link}
                    className="inline-flex items-center text-cyan-700 font-bold group-hover:text-cyan-900 transition-colors duration-300 mt-auto
                               relative overflow-hidden group-hover:after:w-full group-hover:after:left-0 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-1 after:bg-gradient-to-r from-cyan-500 to-blue-500 after:transition-all after:duration-300" // Slightly thinner, gradient underline
                  >
                    Learn more
                    <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
                {/* Bottom accent line with gradient on hover - less prominent */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };


    const webDevelopmentProcessSteps = [
    {
      id: 'req-gathering',
      title: "Requirement Gathering",
      content: "As the initial focus of the web development process is to gather relevant information, our business analysts discuss the scope of web development with the clients to understand their business needs. We closely analyse your requirements and define the purpose and goals for the project.",
      image: "https://plus.unsplash.com/premium_photo-1661376664649-821d586ef9f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'wireframe-prototyping',
      title: "Wireframe & Prototyping",
      content: "The collected information is used to create a sitemap and visual wireframe. This tangible blueprint clarifies the website's structure and functionality, ensuring everyone is aligned before design begins.",
      image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'ui-ux-design',
      title: "UI/UX Design",
      content: "With a solid blueprint, our UI/UX experts craft a visually appealing and user-centric design. We focus on creating an intuitive experience that aligns with your brand and engages your target audience.",
      image: "https://images.unsplash.com/photo-1542289539-059dea254938?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'development',
      title: "Development",
      content: "Our experienced developers bring the design to life, defining the functionality, technologies, and integrations. We perform front-end and back-end development with adherence to all technical specifications and coding standards.",
      image: "https://images.unsplash.com/photo-1634838128617-efdf64411694?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
    },
    {
      id: 'quality-assurance',
      title: "Quality Assurance",
      content: "To ensure an exceptional end-user experience, we conduct rigorous testing across various browsers and devices. Our QA process checks for bugs, performance issues, and user acceptance to guarantee a flawless launch.",
      image: "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'deployment',
      title: "Deployment",
      content: "After successful testing, the website is deployed to a live server. We manage the entire launch process to ensure a smooth transition from development to a publicly accessible, high-performing website.",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 'maintenance-support',
      title: "Maintenance & Support",
      content: "Our partnership extends beyond launch. We offer ongoing support and maintenance for bug fixes, software updates, and backups to ensure your website remains secure, active, and performs flawlessly.",
      image: "https://images.unsplash.com/photo-1635875060146-80ec95d47043?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  // WebDevelopmentProcessSection Component Definition
  const WebDevelopmentProcessSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [openItemId, setOpenItemId] = useState(webDevelopmentProcessSteps[0].id);

    const activeItem = webDevelopmentProcessSteps.find(item => item.id === openItemId);

    return (
      <section ref={ref} className="py-24 md:py-32 bg-gray-900 text-gray-200">
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
            <h2 className="text-4xl md:text-6xl font-bold text-gray-50 mb-6 leading-tight">
              A Refined Development <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Workflow</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              From initial concept to final deployment, we follow a structured process to ensure quality, efficiency, and exceptional results.
            </p>
          </motion.div>

          <div className="lg:grid flex  flex-col-reverse lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Accordion */}
            <div className="lg:col-span-6 space-y-2">
              {webDevelopmentProcessSteps.map((item, index) => (
                <div
                  key={item.id}
                  className="rounded-lg bg-gray-800/50 border border-white/10 transition-colors duration-300"
                >
                  <button
                    type="button"
                    className="flex justify-between items-center w-full p-5 md:p-6 text-left"
                    onClick={() => setOpenItemId(item.id)}
                  >
                    <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openItemId === item.id ? 'text-cyan-400' : 'text-gray-100 hover:text-cyan-400'}`}>
                      <span className="text-cyan-500 mr-3">0{index + 1}</span>
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: openItemId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`transition-colors duration-300 ${openItemId === item.id ? 'text-cyan-400' : 'text-gray-500'}`}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openItemId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                        exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: [0.36, 0, 0.66, -0.56] } }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pt-2 text-gray-400 text-base md:text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Image */}
            <div className=" lg:col-span-6 mt-12 flex justify-center items-center lg:mt-0 lg:sticky lg:top-24">
              <div className="relative w-full  h-full md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-cyan-900/20">
                <AnimatePresence mode='wait'>
                  {activeItem && (
                    <motion.img
                      key={activeItem.id}
                      src={activeItem.image}
                      alt={activeItem.title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } }}
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
    description: "Discover transformative IT services in the digital era that drive seamless omnichannel experiences."
  },
  {
    icon: <Cpu size={28} className="text-green-600" />,
    title: "Information Technology",
    description: "Drive efficiency, innovation, and growth in the dynamic landscape of the information technology industry."
  },
  {
    icon: <Palette size={28} className="text-purple-600" />,
    title: "Fashion",
    description: "Craft captivating narratives through visually stunning websites & immersive brand experiences."
  }
];



const PremiumCaseStudies = () => {
  return (
    <section className="relative   overflow-hidden py-28 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-r from-teal-500/10 to-purple-500/10 blur-[100px]"></div>
      </div>
      
      <div className="max-w-8xl mx-auto relative z-10">
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
          <h2 className=" text-2xl md:text-4xl  font-bold    mb-4">
          Featured Web Development Case Studies

          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Where innovation meets measurable business impact
          </p>
        </motion.div>

        {/* Enhanced card carousel */}
        <div className="relative  border-r-2  border-gray-50">
          <div className="flex space-x-8  overflow-x-auto p-5 pb-8 scrollbar-hide">
            {caseStudies.map((study, index) => (

              <motion.div
                key={index}
                className={` flex-shrink-0 rounded-3xl overflow-hidden border-[1px] border-gray-600   p-0.5`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-full   rounded-[calc(1.5rem-1px)] p-8 flex flex-col">
                  {/* Icon with gradient background */}
            
                  
                  {/* Content */}

                  <div className="row gap-3  justify-around items-center flex flex-row">
                    <div className="col w-4/12"> 

  <div className={` w-16 h-16 rounded-xl  text-gray-600   flex items-center justify-center backdrop-blur-sm`}>
                    {React.cloneElement(study.icon, { className: "w-8 h-8 text-black" })}
                  </div>

                     <div className="mt-auto">
                    <h3 className="text-2xl font-bold    text-gray-600 mb-2">{study.title}</h3>
                    <p className="   text-gray-600 mb-4">{study.subtitle}</p>
                    <p className="   text-gray-600 mb-6">{study.description}</p>
                    
                    {/* Results chips */}
                    <div className="flex  flex-wrap gap-2 mb-8">
                      {study.results.map((result, i) => (
                        <span key={i} className="inline-flex border-gray-200 border-[1px] items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10  text-gray-600  ">
                          {result}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA button */}
                    <button className={`w-full py-3 px-6 rounded-xl  font-medium  text-gray-600  r} hover:opacity-90 transition-all flex items-center justify-between`}>
                      {study.cta}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                  
                  
                  </div>
                    <div className="col  w-5/12">
                     
                   <div className=" flex justify-center items-center card w-96 h-full">
                        <img className=' h-full object-center object-cover w-full' src="https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/decodive_11zon_o02wag.webp" alt="" />
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
}

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Web Development Services
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
  return (
 
<>
   <div className="  bg-gray-50 font-inter antialiased overflow-hidden">
      {/* Main container with a more complex background gradient and shape */}
      <div
        className="relative isolate py-20 sm:py-28 lg:py-36
                   bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100
                   shadow-xl 
                   transform skew-y-1 -translate-y-4" // Subtle skew and translation for dynamic look
      >
        {/* Inner content wrapper to counteract the skew and maintain readability */}
        <div className="transform -skew-y-1 translate-y-4">
          {/* Abstract background shapes for visual flair */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-300 to-blue-300 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10"> {/* Added padding to main content */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-12">
              {/* Image Section - Enhanced with more complex styling */}
              <div className="lg:pr-8 relative"> {/* Increased padding, added relative for absolute positioning */}
                <div className="relative md:h-[80vh] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/10 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"> {/* Slight rotation and hover effect */}
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" // Larger placeholder
                    alt="Web Development Services by Flux Digital"
                    className="w-full  object-cover h-full rounded-3xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/900x700/A7F3D0/06B6D4?text=Image+Unavailable";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-800/60 to-transparent rounded-3xl"></div> {/* Darker cyan overlay */}
                  <p className="absolute bottom-6 left-6 text-white text-xl font-bold drop-shadow-lg">
                    Crafting Digital Experiences with Flux Digital
                  </p>
                </div>
                {/* Decorative element near the image */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              </div>

              {/* Content Section - More structured and visually appealing */}
              <div className="  bg-white p-8 rounded-3xl shadow-xl border border-cyan-100 relative z-10"> {/* Added background, padding, shadow, border */}
                <h2 className="text-base font-extrabold leading-7 text-cyan-600 uppercase tracking-wide">
                  Web Development
                </h2>
                {webDevelopmentContent.map((section) => (
                  <React.Fragment key={section.id}>
                    <p className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900   leading-tight"> {/* Larger, bolder title */}
                      {section.title}
                    </p>
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index} className={`mt-${index === 0 ? '6' : '4'} text-sm leading-8 text-gray-700`}>
                        {paragraph}
                      </p>
                    ))}
                  </React.Fragment>
                ))}
              
              </div>
            </div>
          </div>

          {/* Another abstract background shape */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-cyan-300 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>

      <div className="min-h-screen  bg-transparent font-inter antialiased overflow-hidden">
      
      <WebDevServicesSection />
  
   <TechnologyStackSection />


 <WebDevelopmentProcessSection />



      <IndustriesSection />


     <WhyUsInnovativeSection/>

<PremiumCaseStudies/>

    </div>
</>
    
  );
}
