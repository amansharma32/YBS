"use client"
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
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
import Link from 'next/link';

const caseStudies = [
    {
        title: "Translating Interior Aesthetics into Intuitive Web Experiences",
        imgsrc: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/decodive_11zon_o02wag.webp",
        logoimg: "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811688/Adhunik_DecoDive_Logo_povt7l.webp",

        description: <>
            <ul className=' list-disc ps-4 '>


                <li>Modern Website for a Premium Interior Brand</li>
                <li>Elegant UI That Reflects Aesthetic Expertise</li>
                <li>High-Performance, Mobile-First Experience</li>
                <li>Built with SEO & Speed in Mind</li>
            </ul>
        </>,
        icon: <BarChart4 className="w-8 h-8" />,
        cta: "View Case Study",
        color: "bg-gradient-to-br from-teal-500 to-emerald-600",
        results: ["+300% insights", "92% adoption rate"]
    },

    {
        title: "  Intuitive Interface for Complex Engineering Products",
        logoimg: "https://www.adhunikpowertech.com/we.svg",
        imgsrc: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/adhunik_11zon_shrb78.webp",
        description: <>


            <ul className=' list-disc ps-4 '>

                <li>Fast, Secure, and Mobile-Optimized</li>
                <li>Built for Search. Designed for Impact.</li>
                <li>High-Performance Website, Minimal Load Times</li>
                <li>Optimized Digital Experience for Technical Audiences</li>

            </ul>
        </>,
        icon: <Users className="w-8 h-8" />,
        cta: "Explore Project",
        color: "bg-gradient-to-br from-pink-500 to-rose-600",
        results: ["42% conversion lift", "28% retention boost"]
    },

    {
        title: "Fueling Growth for a Fast-Moving FMCG Brand Online",
        imgsrc: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1753788701/blackbites_11zon_gxi5nn.webp",
        logoimg: "https://blackbites.in/cdn/shop/files/BB-BHgi6px2-modified.png?v=1723010888&width=300",

        description: <>
            <ul className=' list-disc ps-4 '>



                <li> Integrated Cart & Smooth Checkout Flow</li>
                <li>Performance-Optimized E-commerce Platform
                </li>
                <li>Custom CMS for Easy Inventory & Offers Management</li>
                <li>Built for FMCG Scale and Digital Reach</li>
            </ul>
        </>,
        icon: <Globe2 className="w-8 h-8" />,
        cta: "See Results",
        color: "bg-gradient-to-br from-blue-500 to-indigo-600",
        results: ["5x performance", "Global deployment"]
    },

    {
        title: "Building a Reliable Digital Presence for Fire Safety Experts",
        imgsrc: "https://res.cloudinary.com/dkbusg4bq/image/upload/v1754127636/zedex_fire_krrzfc.webp",
        logoimg: "https://www.zedexfire.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgx5cntyb%2Fimage%2Fupload%2Fv1747476068%2FZedex_Fire_Logo_2025_PNG_New_1_1_ec1hlx.webp&w=384&q=75",

        description: <>

            <ul className=' list-disc ps-4 '>
                <li>Smooth Navigation Through Products & Solutions</li>
                <li>B2B-Focused Webflow with Enquiry Conversion in Mind
                </li>
                <li>Mobile-Optimized & SEO-Ready
                </li>
                <li>Clean Architecture for Complex Service Offerings
                </li>
            </ul>
        </>,
        icon: <GraduationCap className="w-8 h-8" />,
        cta: "Learn More",
        color: "bg-gradient-to-br from-indigo-500 to-violet-600",
        results: ["60% faster onboarding", "94% satisfaction"]
    },


];


// Main App component as required for the immersive
export default function BrandingConsultingService() {

    const faqs = [
        {
            question: "What is brand consulting, and how can it benefit my business ?",
            answer: "Brand consulting is a strategic service focused on building, refining, and positioning your brand to connect with your target audience. It helps define your brand identity, clarify messaging, and improve visibility across all customer touchpoints. The result? Increased brand trust, customer loyalty, and stronger market performance."
        },

        {
            question: "How long does a typical brand consulting project take ?",
            answer: "The timeline can vary based on the project's scope and depth. A basic brand strategy review might take a few weeks, while comprehensive brand development—including identity, voice, and collateral—can take several months. We tailor timelines based on your business needs and goals"
        },

        {
            question: "What types of businesses can benefit from brand consulting services ?",
            answer: "Any business—whether a startup, small enterprise, or large corporation—can benefit from brand consulting. These services are especially valuable for companies undergoing rebranding, launching new products, entering new markets, or seeking to build a stronger emotional connection with their audience"
        },

        {
            question: " How do I choose the right brand consulting agency for my business ?",
            answer: <>
                <h2> When selecting a brand consultant, consider :
                </h2>
                <ul>
                    <li>
                        <strong className=' text-cyan-600'>Experience : </strong> Look for a proven track record in delivering branding results.

                    </li>
                    <li>
                        <strong className=' text-cyan-600'>Industry expertise : </strong>
                        Choose an agency that understands your sector or has worked with similar businesses.

                    </li>
                    <li>
                        <strong className=' text-cyan-600'>Approach : </strong>

                        Opt for a collaborative agency that customizes strategies based on your specific goals.

                    </li>
                    <li>
                        <strong className=' text-cyan-600'>
                            Client reviews and portfolio : </strong>

                        Review past projects and testimonials to ensure credibility and success.
                    </li>
                </ul>




            </>
        },

        {
            question: " What does a brand consultant actually do ?",
            answer: "A brand consultant analyzes your business, industry, and audience to create or refine your brand strategy. Their responsibilities may include logo design consulting, brand positioning, messaging, competitive research, customer perception audits, visual identity development, and aligning brand values with marketing efforts."
        },
        {
            question: "How much do brand consulting services cost ?",
            answer: "Costs can vary based on project size, agency expertise, and deliverables. A small business brand strategy may start from a few hundred dollars, while complete brand development packages can range into the thousands. We provide transparent, custom quotes based on your goals."
        },

        {
            question: "Is brand consulting only for new businesses or startups ?",
            answer: "No. While startups greatly benefit from brand consulting, established businesses also use these services for rebranding, market repositioning, or expanding into new markets. Even well-known companies regularly consult experts to keep their brand relevant and competitive."
        },

        {
            question: "Can brand consulting help with online reputation and digital branding ?",
            answer: "Yes, absolutely. Modern brand consulting includes digital brand strategy—such as social media branding, website messaging, and online reputation management. It ensures your brand identity is consistent and strong across digital platforms where most customer interactions happen."
        },

        {
            question: "Do you provide both strategy and creative brand assets ?",
            answer: "Yes. Our services cover both strategy (brand audits, messaging, positioning) and creative execution (logos, typography, brand colors, style guides, etc.). This end-to-end service ensures consistency and clarity in all your brand communications."
        },

        {
            question: "What is the ROI of investing in brand consulting ?",
            answer: "A well-executed brand strategy improves customer trust, increases conversion rates, shortens sales cycles, and boosts marketing performance. Over time, a strong brand also commands higher pricing and creates long-term brand equity, delivering sustainable growth."
        },



    ];

    const [activeFaq, setActiveFaq] = useState(null);

    // Define the content data for Beyond Solutions's web development services

    const WebDevServicesSection = () => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.2 });


        const webDevServicesData = [
            {
                title: "Logo Design Services",
                description: "Create a professional, memorable logo that makes your business stand out. Our logo design solutions help you build a strong brand identity, improve recognition, and connect with your target audience across all platforms.",
                link: "#" // Placeholder link
            },
            {
                title: "Brand Collateral Design",
                description: "Maintain brand consistency across brochures, business cards, letterheads, and more. Our brand collateral design ensures a unified visual identity that enhances trust and reinforces your brand in every customer interaction.",
                link: "#"
            },
            {
                title: "Graphic Design Services",
                description: "Visualize your message with high-impact graphic designs. From infographics to product packaging and presentations, we translate complex ideas into engaging visual content that speaks to your audience.",
                link: "#"
            },
            {
                title: "Digital Marketing Solutions",
                description: "Drive traffic, leads, and conversions with data-driven digital marketing strategies. Our services include SEO, PPC, email marketing, and content creation — all designed to grow your business online.",
                link: "#"
            },
            {
                title: "Social Media Management",
                description: "Build brand awareness and engage your audience through targeted social media strategies. We manage your profiles, create engaging content, and schedule campaigns that keep your brand active and visible.",
                link: "#"
            },
            {
                title: "Complete Branding Services",
                description: "Align your brand identity across every touchpoint. From strategy to design, we help you define and execute a consistent, impactful brand presence that sets you apart in the market.",
                link: "#"
            }
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

    const webDevelopmentContent = [
        {
            id: 1,
            title: "Web Development Services to Make Your Project a Digital Stand-Out",
            paragraphs: [
                "Web development services at Beyond Solutions empower businesses to build cutting-edge web-based software, ensuring an exceptional digital user experience. As a leading web development partner, we combine a team of seasoned experts, advanced technologies, and innovative tools, adhering to the latest industry trends to form the cornerstone of your business’s online growth.",
                "At Beyond Solutions, we meticulously focus on every facet of web development, guaranteeing a seamless and efficient process for your business. From crafting responsive designs and ensuring improved performance to building robust functionality, we specialize in delivering custom web development solutions for stunning, user-friendly, and highly engaging websites, eCommerce storefronts, web applications, CMS, SaaS platforms, and enterprise applications. Our goal is to ensure your online presence not only stands out but truly shines in the digital landscape."
            ]
        }
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
                        <h2 className=" text-lg md:text-4xl  font-extrabold text-gray-900 mb-3 md:mb-8 leading-tight drop-shadow-lg">
                            Web Development <span  >Technology Stack</span>
                        </h2>
                        <p className=" text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
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
                                        className={`  relative py-3   md:px-8 rounded-full text-sm   md:text-lg font-semibold transition-all duration-300 ease-in-out z-10
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
                                        <h3 className=" text-lg md:text-2xl font-extrabold text-gray-900 leading-tight mb-4">
                                            {tech.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-700  text-sm md:text-md leading-relaxed mb-8 flex-grow">
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
            image: "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                            A Refined Development <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Workflow</span>
                        </p>
                        <p className="text-sm md:text-xl text-gray-500 max-w-3xl mx-auto">
                            From initial concept to final deployment, we follow a structured process to ensure quality, efficiency, and exceptional results.
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
            icon: <Store size={28} className="text-blue-600" />,
            title: "Education",
            description: "Empowering the future of learning with innovative mobile app development and intuitive digital solutions tailored for students, educators, and institutions. Our education technology services make learning accessible, engaging, and efficient—anytime, anywhere."
        },
        {
            icon: <Cpu size={28} className="text-green-600" />,
            title: "Retail",
            description: "Transform your retail business with cutting-edge IT services designed to deliver seamless omnichannel experiences. From personalized shopping journeys to advanced eCommerce platforms, we help brands thrive in the digital-first economy."
        },
       
        {
            icon: <Palette size={28} className="text-purple-600" />,
            title: "Healthcare",
            description: "Revolutionize patient care through secure, scalable, and innovative digital health solutions. We specialize in custom healthcare software, patient portals, and telemedicine platforms that enhance operational efficiency and clinical outcomes."
        },
         {
            icon: <Cpu size={28} className="text-green-600" />,
            title: "Fashion",
            description: "Unleash your brand’s potential with visually compelling websites and immersive digital storytelling. Our fashion industry solutions combine creativity with technology to create unforgettable brand experiences and drive customer engagement."
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
                            Featured Web Development Case Studies

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

                                                <div className={`  w-28 h-fit pb-5 rounded-xl  text-gray-600   flex items-center justify-center backdrop-blur-sm`}>
                                                    <img src={study.logoimg} alt="" />
                                                </div>

                                                <div className="mt-auto ">
                                                    <h3 className=" w-[50%] md:w-full text-lg md:text-2xl font-bold    text-gray-600 mb-2">{study.title}</h3>
                                                    <p className="  text-sm  text-gray-600 mb-4">{study.subtitle}</p>
                                                    <div className="  text-sm  text-gray-600 mb-6">{study.description}</div>

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

                                            <div className="col  w-full md:w-5/12">

                                                <div className=" flex  md:justify-center md:items-center card w-full h-96   md:h-[40vh]  ">
                                                    <img className=' h-full object-center  object-contain w-full' src={study.imgsrc} alt="" />
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

                        <img src="https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic1_mcjwxl.webp"
                            className=' hidden md:block  h-full w-full  object-center object-cover'
                            alt="  Addressable Fire Alarm System"
                        />

                        <img
                            src="https://res.cloudinary.com/dkbusg4bq/image/upload/v1755156356/pic1_mcjwxl.webp"
                            className=' md:hidden  h-full w-full object-center object-cover'
                            alt="  Addressable Fire Alarm System"
                        />

                    </div>


                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center font-sans md:text-left font-thin text-white text-3xl md:text-5xl flex flex-col justify-center items-center h-full my-auto">
                          Brand Consulting Services
                            <br />
                            <span className="text-center font-sans  text-[10px] md:text-[15px] pt-5 w-full md:text-start uppercase">Branding /  Brand Consulting Services
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
                                                <Link href='https://www.yourbeyondsolutions.com/' >
                                                    Brand Consulting  Services to Make
                                                </Link>
                                            </span><br />
                                            <span className="font-light text-gray-700">   <span className="bg-gradient-to-r from-cyan-600 to-cyan-800 bg-clip-text text-transparent">
                                                <span className='  '>
                                                    Your Project a Digital Stand-Out

                                                </span>
                                            </span>
                                            </span>
                                        </p>
                                    </div>
                                    <p className=" font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">


                                        Brand Consulting Services – Elevate Your Business Identity with Strategic Branding
                                        A strong brand is the foundation of business success, shaping customer perceptions and fostering long-term loyalty. At Beyond Solutions, our Brand Consulting services empower businesses to develop a distinctive and memorable brand identity that stands out in today’s competitive market. We go beyond aesthetics, crafting a strategic brand narrative that aligns with your vision, values, and audience expectations.

                                        Our Logo Design service creates a unique and impactful visual identity that differentiates your business while maintaining professionalism and appeal. To ensure consistency across all platforms, our Brand Collateral service develops cohesive design elements for business cards, letterheads, packaging, and marketing materials. With Graphic Design, we transform complex ideas into visually engaging content that enhances communication and strengthens brand messaging.


                                    </p>

                                    <p className=" pb-4 font-sans text-sm md:text-md text-gray-600 text-justify  md:text-left pt-3   ">

                                        To maximize your brand’s reach, our Digital Marketing team delivers data-driven strategies that drive engagement, conversions, and growth. Our Social Media Management service ensures consistent and meaningful interactions with your audience through curated content calendars and platform-specific campaigns. Finally, our Branding solutions guarantee a unified identity across every customer touchpoint—establishing trust, recognition, and a lasting impression.

                                        Partner with Beyond Solutions to build a brand that not only stands out but also connects deeply with your audience, driving long-term success in the digital world.

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
