"use client"
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Store, Cpu, Palette, ArrowRight } from 'lucide-react';
import Link from 'next/link';



// Main App component as required for the immersive

export default function ProductDesign() {

    const faqs = [

        {
            question: "How long does it take to complete an industrial product design project ?",
            answer: "The timeline for an industrial product design project is highly dependent on its scope and complexity. After a detailed analysis of the product's features and requirements, we provide an estimated timeline. While some projects can be completed in a few weeks, more intricate designs involving extensive engineering and prototyping may take several months. Our focus is on delivering exceptional quality without unnecessary delays."
        },

        {
            question: "How do you ensure the final product meets the client's expectations ?",
            answer: "Our process is built on a foundation of collaboration and quality assurance. We ensure the final product exceeds your expectations through multiple stages of client feedback and approval. This iterative process, combined with rigorous testing and prototyping, guarantees that all functional and aesthetic requirements are met, resulting in a product that aligns perfectly with your vision."
        },

        {
            question: "Do you offer prototyping and manufacturing services in addition to design ?",
            answer: "Yes, our services are comprehensive. We not only provide expert industrial product design, but we also offer prototyping and manufacturing support to bring the design to life. Our team ensures the design is optimized for efficient and cost-effective mass production, helping you seamlessly transition from concept to a market-ready product."
        },



        {
            question: "How do you manage revisions and edits during the design process ?",
            answer: "We view revisions as a critical part of our collaborative process. Our team is well-equipped to address modifications in a timely and efficient manner, ensuring the project stays on track. We welcome your feedback at every stage, as it helps us refine the design and ensures the final product is exactly what you envisioned."
        },
       




    ];

    const [activeFaq, setActiveFaq] = useState(null);

    // Define the content data for Flux Digital's web development services

    const WebDevServicesSection = () => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.2 });


        const webDevServicesData = [

            {
                title: "2D / 3D Visualisation",
                description: "Bring your ideas to life with stunning visuals. Our 2D/3D visualization services go beyond the canvas to create captivating product renders, architectural walkthroughs, and immersive animations that engage your audience and tell your brand's story.",
                link: "#"
            },

            {
                title: "Logo Design",
                description: "We create a unique and memorable visual mark that sets your business apart. Our logo design services build an impactful, professional, and adaptable brand identity that works across all platforms.",
                link: "#"
            },

            {
                title: "Brand Consulting",
                description: "We help businesses cut through complexity and stay focused on what matters, leading to rapid results. Our brand consulting services develop a powerful strategy and story that connects with your audience and ensures lasting success.",
                link: "#"
            },

            {
                title: "Brand Collateral",
                description: "Maintain a consistent visual identity with uniform design elements across all your materials. Our brand collateral services provide cohesive designs for business cards, letterheads, packaging, and digital assets, building a professional and trustworthy brand image.",
                link: "#"
            },

        ];

        return (
            
            <section ref={ref} className="py-12    bg-transparent  relative overflow-hidden">
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
                            Related <span className=" ">Services We Offer</span>
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
                                        <h3 className=" text-lg md:text-2xl font-semibold text-gray-900 leading-tight">
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


    const webDevelopmentProcessSteps = [
        {
            id: 'req-gathering',
            title: "Our Industrial Product Design Process",
            content: "We transform concepts into market-ready products by following a comprehensive, user-centric design process. Our structure approach ensures every product is innovative, functional, and built for success.",
            image: "https://plus.unsplash.com/premium_photo-1661376664649-821d586ef9f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 'wireframe-prototyping',
            title: "Expertise",
            content: "We offer industrial product design services focused on developing innovative and functional designs for a wide range of products, from consumer goods to specialized industrial equipment. Our experienced team uses a comprehensive design process to create products that meet the needs of both the client and the end-user.",
            image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 'Research & Insights',
            title: "Research & Analysis",
            content: "In this crucial phase, our team conducts thorough market research, competitor analysis, and user testing to gain insights. These findings are used to inform the design process, ensuring the final product effectively meets the needs and expectations of the target audience.",
            image: "https://images.unsplash.com/photo-1542289539-059dea254938?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 'development',
            title: "Brainstorming & Ideation",
            content: "During the brainstorming phase, our industrial product design team generates diverse ideas and concepts. We collaboratively explore different approaches to meet the project’s vision, pushing creative boundaries to find the most innovative solutions.",
            image: "https://images.unsplash.com/photo-1634838128617-efdf64411694?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 'quality-assurance',
            title: "Concept Sketching",
            content: "This phase involves sketching and refining the most promising concepts to create clear, visual representations of the product's design. This allows us to quickly explore potential forms and functions before moving to detailed digital modeling.",
            image: "https://images.unsplash.com/photo-1695374688412-4d6ff0bf6c6c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 'deployment',
            title: "Detailed Design",
            content: "Once a concept is selected, it is developed into a detailed design. Our team works to create a practical, aesthetically appealing, and manufacturable product, meticulously considering every aspect of its form and function.",
            image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 'maintenance-support',
            title: "Presentation & Refinement",
            content: "The completed design is presented to the client for feedback. We work closely with you to incorporate any necessary revisions, ensuring the final product design aligns perfectly with your expectations and vision.",
            image: "https://images.unsplash.com/photo-1635875060146-80ec95d47043?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 'final-delivery',
            title: "Final Delivery",
            content: "The final stage of the industrial product design process involves delivering the complete product design. This includes all essential documentation, files, and specifications, giving you everything you need to move confidently into production.",
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
                            Our Meticulous Process From <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Concept to Deployment</span>
                        </p>
                        <p className="text-sm   text-gray-500 max-w-3xl mx-auto">

                           From initial concept to final deployment, we follow a structured process to ensure quality, efficiency, and exceptional results. Our meticulous approach guarantees a smooth and transparent journey, giving you confidence in the outcome. Every step is a collaboration, designed to transform your vision into a powerful brand identity that stands out in the digital world.

                        </p>
                    </motion.div>

                    <div className="lg:grid flex  flex-col-reverse lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
                        {/* Left Column: Accordion */}
                        <div className="lg:col-span-6 space-y-2 ">

                            {webDevelopmentProcessSteps.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="rounded-lg   border-[1px] border-gray-200 transition-colors duration-300"
                                >
                                    <button
                                        type="button"
                                        className="flex justify-between items-center w-full p-5 md:p-6 text-left"
                                        onClick={() => setOpenItemId(item.id)}
                                    >
                                        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openItemId === item.id ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-400'}`}>

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
            icon: <Cpu size={28} className="text-green-600" />,
            title: "Retail",
            description: "Discover transformative IT services and digital solutions for the retail industry that drive seamless omnichannel experiences. We specialize in building robust e-commerce platforms, optimizing supply chain logistics, and implementing data-driven digital marketing strategies. Our goal is to help you connect with customers in a meaningful way, increase sales, and thrive in the fast-paced digital era."
        },
        
        {
            icon: <Cpu size={28} className="text-green-600" />,
            title: "Information Technology",
            description: "Drive efficiency, innovation, and sustainable growth within the dynamic information technology industry. We provide specialized IT consulting and digital solutions, including cloud migration, automation, and cybersecurity enhancements. Our services are designed to help your business optimize operations, solve complex challenges, and stay ahead of the curve."
        },

        {
            icon: <Palette size={28} className="text-purple-600" />,
            title: "Food & Beverage",
            description: "Whisk your food business to new heights with our specialized digital marketing and branding services. We design captivating websites with integrated online ordering systems and craft strategic social media campaigns that engage food enthusiasts. Our expertise helps you build a strong online presence, foster long-term customer loyalty, and stand out in the competitive culinary landscape."
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
    return (

        <>

            <section>

                <div className="relative flex  h-[86vh] md:h-[67vh] w-full">

                    <div className="box w-full h-full">

                        <img src="https://images.unsplash.com/photo-1681680603996-eb85ec3ceee9?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className=' hidden md:block  h-full w-full  object-center object-cover'
                            alt="  Addressable Fire Alarm System"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1681680603996-eb85ec3ceee9?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className=' md:hidden  h-full w-full object-center object-cover'
                            alt="  Addressable Fire Alarm System"
                        />
                    </div>


                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center font-sans md:text-left font-thin text-white text-2xl md:text-4xl flex flex-col justify-center items-center h-full my-auto">
                            Product Design Services
                            <br />
                            <span className="text-center font-sans  text-[10px] md:text-[15px] pt-5 w-full md:text-start uppercase">Home /   Product Design Services
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

                    <section className='  md:p-5 pb-0 mb-0 flex flex-col md:flex-row  '>
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
                                            <Sparkles className="w-4 h-4 text-cyan-600 mr-4" /> Branding
                                        </span>


                                        <p className="  text-lg md:text-2xl text-center md:text-left font-bold text-gray-900  mb-2 leading-tight">
                                            <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                                                <Link href='https://www.fluxdigital.online/' >
                                                    Transforming Ideas into Products
                                                </Link>
                                            </span><br />
                                            <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                                                <span className='  '>
                                                    Our End-to-End Design Services
                                                </span>
                                            </span>
                                            </span>
                                        </p>
                                    </div>
                                    <p className=" font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">


                                        At FLUX Digital, our Product Design Services are your strategic partner in innovation. We specialize in transforming your initial concepts into tangible, market-ready products that not only delight users but also drive significant business growth. Our comprehensive approach combines meticulous research and user-centric design with advanced engineering, ensuring every product is not only beautiful but also functional, manufacturable, and commercially viable. Whether you are launching a new consumer product or developing an industrial tool, our expert team delivers end-to-end solutions that make your product stand out in a competitive global market.




                                    </p>

                                    <p className=" pb-4 font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

                                        We begin with a deep dive into your market and target audience. Our team conducts extensive research and brainstorming sessions to develop innovative concepts that align with your business goals. This phase is crucial for defining the product's core features, user experience, and overall market strategy, setting a solid foundation for the entire project.


                                    </p>

                                    <Link href="/contact-us" className=' p-4 border-2 w-fit   border-cyan-600'>
                                        Let's talk →
                                    </Link>


                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </section>




            <div className="min-h-screen  bg-transparent font-inter antialiased overflow-hidden">

                <WebDevServicesSection />

                <WebDevelopmentProcessSection />

                <IndustriesSection />


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
                                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    >
                                        <h3 className="text-sm font-medium text-gray-900">{faq.question}</h3>
                                        <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-90' : ''}`} />
                                    </button>
                                    {activeFaq === index && (
                                        <div className=" text-sm p-6 pt-0 text-gray-600">
                                            <div className=' text-sm text-gray-500'>{faq.answer}</div>
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
