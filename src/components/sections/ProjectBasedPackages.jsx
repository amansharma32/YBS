import React from 'react';



import { motion, useInView } from 'framer-motion';
import { Target, BarChart2, ShoppingCart, CheckCircle } from 'lucide-react';




import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, } from 'framer-motion';
import { ArrowRight, Zap, PenTool, Camera, Smartphone, Shield, Handshake, Search, BookOpen, BarChart, Code, Layers, Bot, Orbit, Menu, TestTube, Cloud, BrainCircuit, X } from 'lucide-react';
import TypeWriterNew from './TypeWriterNew';

// --- DATA ---
 



const addonServices = [
    { icon: <PenTool />, title: "Graphic Design" },
    { icon: <Zap />, title: "Branding & Logo" },
 
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
                        number: { density: { enable: true }, value: 100 },
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
                        number: { density: { enable: true }, value: 100 },
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
        red: { text: 'text-red-600', border: 'border-red-400/50', bg: 'bg-red-400/10' },
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
        red: { text: 'text-red-600', border: 'border-red-400/50', button: 'bg-red-500 hover:bg-red-600' },
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
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
      </div>

       



                    
                    <div>


                    

                    </div>
                </div>
            
        </section>
    );
};

const AddonSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
      <section ref={ref} className=" flex relative py-8  md:py-6  overflow-hidden">
  {/* Luxury decorative elements */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-20 left-1/4 w-80 h-80 bg-red-400/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-500/20 rounded-full blur-3xl"></div>
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
      <span className="inline-block py-2.5 px-5 mb-6 text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-100/50 rounded-full border border-red-200 backdrop-blur-sm">
        Value-Added Services
      </span>
      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Premium <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">Add-ons</span>
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
          <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/60 group-hover:border-red-200 transition-all duration-500 flex flex-col">
            {/* Icon container */}
            <div className="p-6 pb-0 flex justify-center">
              <div className="w-16 h-16 rounded-xl  bg-gray-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-red-500/30 transition-shadow duration-500">
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
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
const PackageCard = ({ pack, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const colorClasses = {
        red: {
            icon: 'text-red-600',
            button: 'bg-red-600 hover:bg-red-700',
            shadow: 'hover:shadow-red-500/20'
        },
        violet: {
            icon: 'text-violet-600',
            button: 'bg-violet-500 hover:bg-violet-600',
            shadow: 'hover:shadow-violet-500/20'
        },
        fuchsia: {
            icon: 'text-fuchsia-600',
            button: 'bg-fuchsia-500 hover:bg-fuchsia-600',
            shadow: 'hover:shadow-fuchsia-500/20'
        }
    };
    
    const currentTheme = colorClasses[pack.color] || colorClasses.red;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            className={`bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-200/80 transition-all duration-300 flex flex-col h-full shadow-lg ${currentTheme.shadow}`}
        >
            <div className={`mb-6 ${currentTheme.icon}`}>
                {pack.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{pack.title}</h3>
            {pack.subtitle && <p className="text-sm text-gray-500 mb-4">{pack.subtitle}</p>}
            
            <div className="my-6 border-t border-gray-200"></div>

            <div className="space-y-2 mb-6">
                <p className="text-gray-600"><strong className="text-gray-800">Ideal For:</strong> {pack.idealFor}</p>
                <p className="text-gray-600"><strong className="text-gray-800">Focus:</strong> {pack.focus}</p>
            </div>
            
            <div className="mb-8 flex-grow">
                <h4 className="font-semibold text-gray-800 mb-4">Core Inclusions:</h4>
                <ul className="space-y-3">
                    {pack.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-auto py-3 px-6 text-white font-bold rounded-lg transition-all duration-300 shadow-lg ${currentTheme.button}`}
            >
                {pack.cta}
            </motion.button>
        </motion.div>
    );
};

const AuroraBackground = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
            initial={{ opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-300/30 rounded-full filter blur-3xl animate-pulse"
        />
        <motion.div
            initial={{ opacity: 0, x: '50%', y: '50%' }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-300/30 rounded-full filter blur-3xl animate-pulse animation-delay-2000"
        />
         <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-violet-300/30 rounded-full filter blur-3xl animate-pulse animation-delay-4000"
        />
    </div>
);

const ProjectPackages = () => {


    const [selectedPackage, setSelectedPackage] = useState(null);




    return (
        <>

            <div className="    py-14 px-4 ">
                <div className=" mx-auto flex flex-col  justify-center items-center">
                    {/* Section Header */}

<div className="  block md:hidden relative min-h-screen bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
            <AuroraBackground />
            <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-4">
                        HIGHLY SPECIALIZED RETAINER PACKAGES
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Ongoing Services for Core Digital Areas
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        For clients with very specific and ongoing needs in one core area, requiring continuous strategic input and execution.
                    </p>
                </motion.div>
 

            </div>
        </div>


                    <div className=" bg-gray-50 font-sans  text-gray-800 overflow-x-hidden py-9">
                        <ParticlesBackground />
                        <div className="relative z-10">

                            <main>
                       

                                <div className={`  transition-all duration-500 ${selectedPackage ? ' ' : ' '}`}>
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