"use client"
import { useInView,motion } from 'framer-motion';
import React, { useRef } from 'react';

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
      <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
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

      <div className="min-h-screen bg-gray-50 font-inter antialiased overflow-hidden">
      
      <WebDevServicesSection />
  
     
    </div>
</>
    
  );
}
