// components/ServiceCards.js
"use client";

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Image URLs
const BRANDING_IMG = 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60';
const UIUX_IMG = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60';
const ECOMMERCE_IMG = 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60';
const WEBAPP_IMG = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60';
const MOBILEAPP_IMG = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60';
const DEVOPS_IMG = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60';

const services = [
  {
    title: "Branding",
    description: "Ensure that your brand is consistent on every single touch point through an intuitive visual strategy",
    link: "Learn more",
    icon: "🎨",
    image: BRANDING_IMG
  },
  {
    title: "UI/UX Design",
    description: "Embracing UI/UX in crafting seamless experiences, keeping up with efficiency and elegance",
    link: "Learn more ",
    icon: "🖌️",
    image: UIUX_IMG
  },
  {
    title: "E-commerce",
    description: "Bridge the gap between your storefront and customer with our strategic eCommerce solutions",
    link: "Learn more  ",
    icon: "🛒",
    image: ECOMMERCE_IMG
  },
  {
    title: "Web App Development",
    description: "Dive into the realm of intuitive web applications exclusively tailored to gift an immersive digital experience",
    link: "Learn more  ",
    icon: "💻",
    image: WEBAPP_IMG
  },
  {
    title: "Mobile App Development",
    description: "From enterprise to consumer apps that are specifically tailored to meet your business needs",
    link: "Learn more  ",
    icon: "📱",
    image: MOBILEAPP_IMG
  },
  {
    title: "DevOps Consulting",
    description: "Streamline software development processes and enhance the overall reliability of software delivery",
    link: "Learn more ",
    icon: "⚙️",
    image: DEVOPS_IMG
  }
];

export default function ServiceCards() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-left    pt-20 text-gray-900 sm:text-5xl lg:text-6xl tracking-tight"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r to-[#0093E9] from-cyan-600">Premium</span> Services
          </motion.h2>
        </div>

        {/* Animated Cards Container */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative group transform-gpu will-change-transform"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300">
                {/* Image Container */}
                <motion.div
                  className="relative h-48 overflow-hidden"
                  variants={imageVariants}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-indigo-600 text-2xl shadow-sm">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-8 h-fit flex flex-col">
                  <h3 className="text-2xl font-thin font-sans text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 font-sans flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500 transition-colors duration-200 group/link"
                  >
                    {service.link}
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}