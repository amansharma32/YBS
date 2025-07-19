import React from 'react';



import { motion, useInView } from 'framer-motion';
import { Target, BarChart2, ShoppingCart, CheckCircle } from 'lucide-react';




import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, } from 'framer-motion';
import { ArrowRight, Zap, PenTool, Camera, Smartphone, Shield, Handshake, Search, BookOpen, BarChart, Code, Layers, Bot, Orbit, Menu, TestTube, Cloud, BrainCircuit, X } from 'lucide-react';
import TypeWriterNew from './TypeWriterNew';

// --- DATA ---
const retainerPackages = [
    {
        id: 'seo',
        icon: <Target className="w-10 h-10" />,
        title: "Dedicated SEO & Content Growth",
        idealFor: "Businesses prioritizing organic traffic and aiming to become thought leaders in their industry.",
        focus: "Consistent content creation, technical SEO, and link building for sustained organic growth.",
        inclusions: [
            "Monthly Comprehensive Keyword Research & Trend Analysis",
            "Technical SEO Monitoring & Maintenance",
            "High-Quality Blog Content Creation (4-6 posts/month) & Optimization",
            "Link Building & Digital PR Outreach",
            "Monthly Performance Reporting: Detailed analytics on organic traffic, rankings, and conversions",
            "Competitor Monitoring"
        ],
        cta: "Boost Organic Growth",
        color: "cyan"
    },
    {
        id: 'ppc',
        icon: <BarChart2 className="w-10 h-10" />,
        title: "Performance Marketing Power-Up",
        subtitle: "(PPC & Paid Social)",
        idealFor: "Businesses focused on immediate lead generation, sales, and maximizing ad spend efficiency.",
        focus: "Strategic planning, execution, and optimization of paid advertising campaigns.",
        inclusions: [
            "Multi-Platform Ad Strategy & Setup (Google Ads, Facebook/Instagram Ads, LinkedIn Ads)",
            "Ongoing Campaign Management & Optimization",
            "Conversion Tracking & Analytics Setup",
            "Monthly Budget Management & Recommendations",
            "A/B Testing & Creative Optimization",
            "Detailed Monthly Performance Reports: Focus on ROI, cost-per-lead/sale, and ROAS"
        ],
        cta: "Maximize Ad Performance",
        color: "violet"
    },
    {
        id: 'ecommerce',
        icon: <ShoppingCart className="w-10 h-10" />,
        title: "E-commerce Accelerator",
        subtitle: "(Specific for Online Stores)",
        idealFor: "E-commerce businesses needing specialized support to boost online sales and user experience.",
        focus: "Optimizing the online store for conversions and customer lifetime value.",
        inclusions: [
            "E-commerce Platform Optimization (e.g., Shopify, WooCommerce)",
            "Product Listing Optimization (SEO for products)",
            "Conversion Rate Optimization (CRO) Implementation",
            "Email Marketing Automation for E-commerce",
            "Retargeting & Dynamic Product Ads Management",
            "Inventory & Product Feed Management Support",
            "Monthly E-commerce Sales & Conversion Reporting"
        ],
        cta: "Accelerate Online Sales",
        color: "fuchsia"
    }
];

const fluxCustomProcess = [
    { title: "In-depth Discovery & Requirements Gathering", description: "Detailed workshops to understand goals, challenges, and technical specifications." },
    { title: "Custom Proposal & Scope Definition", description: "Tailored solution outlining services, deliverables, timelines, and pricing." },
    { title: "Dedicated Team Allocation", description: "Assigning a specialized team with relevant expertise and project management oversight." },
    { title: "Agile Methodology", description: "Flexible and iterative approach to development and marketing initiatives." },
    { title: "Continuous Optimization & Strategy", description: "Regular reviews, data analysis, and proactive strategic recommendations." },
    { title: "AI Automation Consultation & Implementation", description: "Tailored AI solutions for specific business processes." },
    { title: "On-Demand 3D Website Creation", description: "Custom development of immersive 3D web experiences." },
    { title: "AR Menu Development", description: "Custom development of augmented reality menus." },
    { title: "Mobile App Development", description: "Custom iOS/Android app development." },
    { title: "Quality Assurance & Testing", description: "Comprehensive testing for all custom solutions." },
    { title: "Cloud Services & Cyber Security Consulting", description: "Strategic guidance for robust cloud infrastructure and security." },
    { title: "Human Machine Interface (HMI) Design", description: "Designing intuitive interactions for complex systems." }
];

const addonServices = [
    { icon: <PenTool />, title: "Graphic Design" },
    { icon: <Zap />, title: "Branding & Logo" },
    { icon: <Camera />, title: "Photography & Videography" },
    { icon: <Smartphone />, title: "App Development" },
    { icon: <Shield />, title: "Reputation Management" },
    { icon: <Handshake />, title: "CRM Implementation" },
    { icon: <Search />, title: "Lead Generation" },
    { icon: <BookOpen />, title: "Training & Workshops" },
    { icon: <BarChart />, title: "Advanced Analytics" },
    { icon: <Code />, title: "Technical SEO Audits" },
    { icon: <Layers />, title: "Interactive Development" },
    { icon: <Code />, title: "Frontend Development" },
    { icon: <Code />, title: "Backend Development" },
    { icon: <ShoppingCart />, title: "Custom Shopify Dev" },
    { icon: <Code />, title: "WordPress Customization" },
    { icon: <Orbit />, title: "3D Website Creation" },
    { icon: <Menu />, title: "AR Menu Development" },
    { icon: <Bot />, title: "AI Automation Strategy" },
    { icon: <Layers />, title: "DevOps Consulting" },
    { icon: <PenTool />, title: "Industrial / Product Design" },
    { icon: <Orbit />, title: "2D / 3D Visualisation" },
    { icon: <TestTube />, title: "QA & Testing" },
    { icon: <Cloud />, title: "Cloud & Cyber Security" },
    { icon: <BrainCircuit />, title: "HMI Design" },
];

// --- UI COMPONENTS ---

const ParticlesBackground = () => {
    
    useEffect(() => {
        const scriptId = 'tsparticles-script';
        if (document.getElementById(scriptId)) {
            if (window.tsParticles) {
                window.tsParticles.load("tsparticles", {
                    background: { color: { value: '#f9fafb' } }, // gray-50
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: 'grab' } },
                        modes: { grab: { distance: 150, links: { opacity: 0.5 } } }
                    },
                    particles: {
                        color: { value: '#6b7280' }, // gray-500
                        links: { color: '#60a5fa', distance: 150, enable: true, opacity: 0.3, width: 1 },
                        move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: true, speed: 0.5, straight: false },
                        number: { density: { enable: true }, value: 50 },
                        opacity: { value: 0.4 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 3 } }
                    },
                    detectRetina: true,
                });
            }
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://cdn.jsdelivr.net/npm/tsparticles-slim@2.12.0/tsparticles.slim.bundle.min.js";
        script.async = true;

        script.onload = () => {
            if (window.tsParticles) {

                window.tsParticles.load("tsparticles", {
                    background: { color: { value: '#f9fafb' } },
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: 'grab' } },
                        modes: { grab: { distance: 150, links: { opacity: 0.5 } } }
                    },
                    particles: {
                        color: { value: '#6b7280' },
                        links: { color: '#60a5fa', distance: 150, enable: true, opacity: 0.3, width: 1 },
                        move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: true, speed: 0.5, straight: false },
                        number: { density: { enable: true }, value: 50 },
                        opacity: { value: 0.4 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 3 } }
                    },
                    detectRetina: true,
                });
            }
        };

        document.body.appendChild(script);
    }, []);

    return <div id="tsparticles" style={{ position: 'relative', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
};

const PackageNode = ({ pack, onSelect, isSelected, isAnySelected }) => {
    const colorClasses = {
        cyan: { text: 'text-cyan-600', border: 'border-cyan-400/50', bg: 'bg-cyan-400/10' },
        violet: { text: 'text-violet-600', border: 'border-violet-400/50', bg: 'bg-violet-400/10' },
        fuchsia: { text: 'text-fuchsia-600', border: 'border-fuchsia-400/50', bg: 'bg-fuchsia-400/10' }
    };
    const theme = colorClasses[pack.color];

    return (
        <motion.div
            layoutId={`package-node-${pack.id}`}
            onClick={() => onSelect(pack)}
            className={`relative cursor-pointer transition-all duration-500 ${isAnySelected && !isSelected ? 'opacity-40 scale-90' : 'opacity-100 scale-100'}`}
            whileHover={{ scale: 1.05 }}
        >
            <div className={`w-48 h-48 rounded-full border ${theme.border} flex flex-col justify-center items-center text-center p-4 bg-white/50 backdrop-blur-sm`}>
                <motion.div layoutId={`package-icon-${pack.id}`} className={theme.text}>{pack.icon}</motion.div>
                <motion.h3 layoutId={`package-title-${pack.id}`} className="mt-2 text-gray-800 font-bold">{pack.title}</motion.h3>
            </div>
            <motion.div className={`absolute inset-0 rounded-full ${theme.bg} blur-2xl opacity-80`}></motion.div>
        </motion.div>
    );
};

const PackageDetailView = ({ pack, onDeselect }) => {
    const colorClasses = {
        cyan: { text: 'text-cyan-600', border: 'border-cyan-400/50', button: 'bg-cyan-500 hover:bg-cyan-600' },
        violet: { text: 'text-violet-600', border: 'border-violet-400/50', button: 'bg-violet-500 hover:bg-violet-600' },
        fuchsia: { text: 'text-fuchsia-600', border: 'border-fuchsia-400/50', button: 'bg-fuchsia-500 hover:bg-fuchsia-600' }
    };
    const theme = colorClasses[pack.color];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`absolute inset-0 z-20 bg-white/70 backdrop-blur-2xl p-8 rounded-2xl border ${theme.border} overflow-y-auto shadow-2xl`}
        >
            <div className="relative">
                <motion.button onClick={onDeselect} className="absolute top-0 right-0 text-gray-500 hover:text-gray-800" whileHover={{ scale: 1.2, rotate: 90 }}>
                    <X />
                </motion.button>
                <div className="flex items-center mb-6">
                    <motion.div layoutId={`package-icon-${pack.id}`} className={`${theme.text} mr-4`}>{pack.icon}</motion.div>
                    <div>
                        <motion.h3 layoutId={`package-title-${pack.id}`} className="text-3xl font-bold text-gray-900">{pack.title}</motion.h3>
                        {pack.subtitle && <p className="text-md text-gray-500">{pack.subtitle}</p>}
                    </div>
                </div>
                <div className="my-6 border-t border-gray-200"></div>
                <div className="space-y-3 mb-6 text-gray-600">
                    <p><strong className="text-gray-800">Ideal For:</strong> {pack.idealFor}</p>
                    <p><strong className="text-gray-800">Focus:</strong> {pack.focus}</p>
                </div>
                <h4 className="font-semibold text-gray-800 mb-4">Core Inclusions:</h4>
                <ul className="space-y-3 mb-8">
                    {pack.inclusions.map((item, i) => (
                        <motion.li key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                        </motion.li>
                    ))}
                </ul>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className={`w-full py-3 px-6 text-white font-bold rounded-lg transition-all duration-300 shadow-lg ${theme.button}`}>
                    {pack.cta}
                </motion.button>
            </div>
        </motion.div>
    );
};

const FluxCustomSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-20  container-fluid ">
            <div className=" mx-auto px-4">
              <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block py-2.5 px-5 mb-6 text-xs font-semibold tracking-widest text-cyan-600 uppercase bg-cyan-100/50 rounded-full border border-cyan-200 backdrop-blur-sm">
            Exclusive Offering
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">FLUX Custom</span> Solution
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Your dedicated digital innovation team, seamlessly integrating with your organization to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Luxury card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl shadow-gray-300/30 transform group-hover:-rotate-1 transition-all duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/60 group-hover:border-cyan-200/80 transition-all duration-500">
              {/* Card header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 px-10 pt-10 pb-8 border-b border-gray-200/50">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-900 flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Tailored Digital Partnership</h3>
                    <p className="text-lg text-gray-500">Strategic collaboration designed for enterprise innovation</p>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-10">
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Ideal For */}
                  <div className="relative">
                    <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-teal-500 rounded-full"></div>
                    <div className="pl-8">
                      <div className="flex items-center mb-4">
                        <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold mr-3">1</span>
                        <h4 className="text-xl font-semibold text-gray-800">Ideal For</h4>
                      </div>
                      <p className="text-gray-500 leading-relaxed">
                        Large enterprises with complex digital ecosystems, organizations undergoing transformation, and businesses requiring white-glove technical partnership.
                      </p>
                    </div>
                  </div>

                  {/* Approach */}
                  <div className="relative">
                    <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-teal-500 rounded-full"></div>
                    <div className="pl-8">
                      <div className="flex items-center mb-4">
                        <span className="w-8   h-8 rounded-full bg-blue-100 text-gray-50 flex items-center justify-center font-bold mr-3">2</span>
                        <h4 className="text-xl font-semibold text-gray-800">Our Approach</h4>
                      </div>
                      <p className="text-gray-500 leading-relaxed">
                        Dedicated cross-functional team embedded within your organization, working as an extension of your internal capabilities with complete alignment to your goals.
                      </p>
                    </div>
                  </div>
                </div>

            
              </div>

              {/* Card footer */}
         
            </div>
          </div>
        </motion.div>
      </div>



                    
                    <div>


                        <div className="max-w-8xl mx-auto px-6 py-24 bg-gradient-to-b from-gray-50  to-transparent">
                            <div className="max-w-4xl mx-auto text-center mb-20">
                                <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-cyan-600 bg-cyan-100 rounded-full uppercase tracking-widest">Workflow</span>
                                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">Refined Process</span>
                                </h2>
                                <p className="text-xl text-gray-500 font-light">
                                    Meticulously crafted methodology delivering exceptional digital experiences
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                                {fluxCustomProcess.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 40 }}
                                         whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                                        whileHover={{ y: -8 }}
                                        className="group relative overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-100 hover:border-cyan-100 transition-all duration-500"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        <div className="relative z-10 p-8 h-full flex flex-col">
                                            <div className="flex items-start mb-6">
                                                <div className="flex-shrink-0 relative">
                                                    <div className="absolute -inset-4 bg-cyan-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    <div className="relative flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 text-white text-2xl font-bold shadow-lg">
                                                        {index + 1}
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-semibold text-gray-900 ml-6 mt-1 tracking-tight">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-500 text-lg leading-relaxed mb-8 flex-grow">
                                                {item.description}
                                            </p>

                                            <div className="mt-auto">
                                                <div className="h-[2px] w-full bg-gray-100 relative overflow-hidden">
                                                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-700"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-[0.1vh] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            
        </section>
    );
};

const AddonSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
      <section ref={ref} className="relative py-20 md:py-32  overflow-hidden">
  {/* Luxury decorative elements */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-20 left-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
  </div>

  <div className="relative container mx-auto px-6">
    <motion.div 
      initial={{ opacity: 0, y: -40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="text-center mb-20"
    >
      <span className="inline-block py-2.5 px-5 mb-6 text-xs font-semibold tracking-widest text-cyan-600 uppercase bg-cyan-100/50 rounded-full border border-cyan-200 backdrop-blur-sm">
        Value-Added Services
      </span>
      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Premium <span className="bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">Add-ons</span>
      </h2>
      <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
        Enhance your package with our specialized services, available à la carte or bundled.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {addonServices.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
            ease: [0.16, 1, 0.3, 1]
          }}
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.1), 0 10px 10px -5px rgba(6, 182, 212, 0.04)"
          }}
          className="relative group"
        >
          {/* Card background layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg shadow-gray-300/20 transform group-hover:scale-[1.02] transition-all duration-500"></div>
          
          {/* Main card */}
          <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/60 group-hover:border-cyan-200 transition-all duration-500 flex flex-col">
            {/* Icon container */}
            <div className="p-6 pb-0 flex justify-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-cyan-500/30 transition-shadow duration-500">
                {React.cloneElement(service.icon, { className: "w-8 h-8" })}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 pt-4 text-center flex-grow">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h4>
              <p className="text-sm text-gray-500 mb-4">{service.description}</p>
            </div>
            
            {/* Footer */}
           
            
            {/* Hover accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="text-center mt-16"
    >
     
    </motion.div>
  </div>
</section>
    );
};



// --- UI COMPONENTS ---




const ProjectPackages = () => {


    const [selectedPackage, setSelectedPackage] = useState(null);




    return (
        <>

            <div className="    py-14 px-4 ">
                <div className=" mx-auto flex flex-col  justify-center items-center">
                    {/* Section Header */}




                    <div className="relative  bg-gray-50 font-sans text-gray-800 overflow-x-hidden py-9">
                        <ParticlesBackground />
                        <div className="relative z-10">

                            <main>
                                <div className="container-fluid mx-auto relative z-1 px-4">
                                    <div className="relative  h-[78vh] flex justify-center items-center">
                                        <AnimatePresence>
                                            {selectedPackage ? (
                                                <PackageDetailView pack={selectedPackage} onDeselect={() => setSelectedPackage(null)} />
                                            ) : (
                                                <motion.div className="flex justify-center items-center gap-8  ">
                                                    {retainerPackages.map((pack) => (
                                                        <PackageNode key={pack.id} pack={pack} onSelect={setSelectedPackage} isSelected={false} isAnySelected={false} />
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className={`transition-all duration-500 ${selectedPackage ? ' ' : ' '}`}>
                                    <FluxCustomSection />
                                    <AddonSection />
                                </div>
                            </main>


                        </div>
                    </div>


                </div>


<TypeWriterNew/>


                
            </div>




        </>



    );
};

export default ProjectPackages;