'use client'
import React from 'react'
import {
  Palette, Brush, Box, LayoutTemplate, Monitor,
  Code2, Smartphone, ShoppingCart, BrainCircuit,
  Server, Database, ShieldCheck, Search, Share2,
  TrendingUp, FileText, LayoutDashboard,
  SmartphoneNfc, ShoppingBag, Cpu, Users, Rocket, Film, Music,
} from 'lucide-react';

import { Briefcase, Zap, BarChart2, Star, Code, Mail, Menu, X, Wind, Thermometer, EyeOff, Check, Package, Wrench, Globe, Settings, PieChart, ClipboardCheck, PhoneCall, Terminal, BookOpen, Cloud, Camera, Cctv, Layers, FileCode, EyeIcon, TrendingUpIcon, LayersIcon, ArrowRight, PaletteIcon, CodeIcon, LucideTrendingUp, LayoutIcon, UsersIcon, FileCheck, ChevronDown, CheckCheckIcon, ChevronUp, RocketIcon, ZapIcon, AwardIcon, FileCheck2Icon, CheckCircle2Icon, ArrowRightCircle, LucideRocket, LucideZap, LucideAward, CheckIcon, ArrowRightCircleIcon } from 'lucide-react';

export default function ServicePage() {

     const ArchitecturalDivider = ({ title, id }) => (
    <div id={id} className="relative h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent max-w-7xl mx-auto my-20 md:my-28">
      <h2 className="absolute left-1/2 -translate-x-1/2 -top-4 bg-slate-50 px-4 text-gray-500 text-lg font-semibold text-center md:text-2xl">
        {title}
      </h2>
    </div>
  );

  const integratedPackagesData = [
    {
      name: "Launchpad",
      idealFor: "For new ventures",
      price: "$3,500+",
      features: ["Custom Website (5-7 Pages)", "Basic CMS & SEO", "Social Media Setup", "Monthly Performance Snapshot"],
      highlight: false
    },
    {
      name: "Accelerator",
      idealFor: "For growing businesses",
      price: "$7,000+",
      features: ["Everything in Launchpad", "Enhanced Website (10-15 Pages)", "Content Marketing (2 Blogs/mo)", "Basic Google Ads"],
      highlight: true
    },
    {
      name: "Enterprise Impact",
      idealFor: "For market leaders",
      price: "Custom",
      features: ["Everything in Accelerator", "Enterprise-Grade Platform", "Mobile App Development", "Advanced AI & DevOps"],
      highlight: false
    }
  ];
  
  const serviceCategories = [
  {
    title: "Branding",
    icon: <Palette className="w-8 h-8" />,
    services: [
      { name: "Brand Consulting", icon: <Users className="w-5 h-5" /> },
      { name: "Logo Design", icon: <Brush className="w-5 h-5" /> },
      { name: "Industrial/Product Design", icon: <Box className="w-5 h-5" /> },
      { name: "Graphic Design", icon: <LayoutTemplate className="w-5 h-5" /> },
      { name: "2D/3D Visualisation", icon: <Monitor className="w-5 h-5" /> }
    ],
    
    image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Technology & Development",
    icon: <Code2 className="w-8 h-8" />,
    services: [
      { name: "Web Development", icon: <Globe className="w-5 h-5" /> },
      { name: "Frontend Development", icon: <LayoutTemplate className="w-5 h-5" /> },
      { name: "Backend Development", icon: <Server className="w-5 h-5" /> },
      { name: "Mobile App Development", icon: <Smartphone className="w-5 h-5" /> },
      { name: "E-commerce Solutions", icon: <ShoppingCart className="w-5 h-5" /> },
      { name: "AI & Machine Learning", icon: <BrainCircuit className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Digital Marketing",
    icon: <TrendingUp className="w-8 h-8" />,
    services: [
      { name: "Search Engine Optimization", icon: <Search className="w-5 h-5" /> },
      { name: "Social Media Management", icon: <Share2 className="w-5 h-5" /> },
      { name: "Performance Marketing", icon: <BarChart2 className="w-5 h-5" /> },
      { name: "Content Marketing", icon: <FileText className="w-5 h-5" /> },
      { name: "Marketing Automation", icon: <Settings className="w-5 h-5" /> },
      { name: "Analytics", icon: <PieChart className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Experience Design",
    icon: <LayoutDashboard className="w-8 h-8" />,
    services: [
      { name: "UI/UX Design", icon: <Monitor className="w-5 h-5" /> },
      { name: "Website Design", icon: <Globe className="w-5 h-5" /> },
      { name: "Mobile Experience", icon: <SmartphoneNfc className="w-5 h-5" /> },
      { name: "Commerce Experience", icon: <ShoppingBag className="w-5 h-5" /> },
      { name: "Human Machine Interface", icon: <Cpu className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Strategic & Consulting",
    icon: <ClipboardCheck className="w-8 h-8" />,
    services: [
      { name: "Online Consultations", icon: <PhoneCall className="w-5 h-5" /> },
      { name: "Project Management", icon: <Settings className="w-5 h-5" /> },
      { name: "AI Automation Strategy", icon: <Terminal className="w-5 h-5" /> },
      { name: "Brand Building", icon: <BookOpen className="w-5 h-5" /> },
      { name: "Digital Transformation", icon: <Cloud className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Media Production",
    icon: <Camera className="w-8 h-8" />,
    services: [
      { name: "Photography", icon: <Camera className="w-5 h-5" /> },
      { name: "Videography", icon: <Film className="w-5 h-5" /> },
      { name: "Audio Production", icon: <Music className="w-5 h-5" /> },
      { name: "Motion Graphics", icon: <Monitor className="w-5 h-5" /> },
      { name: "Live Streaming", icon: <Cctv className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  }
];


const specializedSolutionsData = [
  { name: "Brand Builder Package", desc: "Establish a cohesive brand identity from scratch.", icon: Star },
  { name: "Website Refresh & Optimization", desc: "Enhance your site's UI/UX, speed, and SEO.", icon: Zap },
  { name: "SEO & Content Retainer", desc: "Sustained organic growth through high-quality content and technical SEO.", icon: BarChart2 },
  { name: "Performance Marketing Retainer", desc: "Maximize ad spend efficiency and drive leads with strategic PPC campaigns.", icon: Briefcase }
];




  return (
    <>

        <section>


                <div className="relative flex  h-[86vh] md:h-[67vh] w-full">
                 


                       <div className="box w-full h-full">
                               <img src="https://images.unsplash.com/photo-1727125893979-5d81a3443ca1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className=' hidden md:block  h-full w-full  object-center object-cover'
                  alt="  Addressable Fire Alarm System"
                  
                />

                <img
                src="https://images.unsplash.com/photo-1727125893979-5d81a3443ca1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className=' md:hidden  h-full w-full object-center object-cover'
                       alt="  Addressable Fire Alarm System"
                 
                />
                       </div>


                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center font-sans md:text-left font-thin text-orange-800 text-3xl md:text-6xl flex flex-col justify-center items-center h-full my-auto">
                         Our Services
                            <br />
                            <span className="text-center font-sans  text-[10px] md:text-[15px] pt-5 w-full md:text-start uppercase">Home /  Our Services
                            </span>
                        </p>
                    </div>
                </div>
                
            </section>
       
        {/* ===== Zig-Zag Section 1: Philosophy ===== */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-cyan-600">Core Services</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business
            </p>
          </div>

          <div className="space-y-32">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}
              >
                {/* Content Column */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-gradient-to-br from-white to-cyan-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600 mr-4">
                        {category.icon}
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900">
                        {category.title}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {category.services.map((service, i) => (
                        <div key={i} className="flex items-start p-4 hover:bg-cyan-50/50 rounded-lg transition-all group">
                          <div className="bg-cyan-100/50 p-2 rounded-lg mr-4 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                            {service.icon}
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-700 transition-colors">
                              {service.name}
                            </h5>
                            <p className="text-gray-600 text-sm mt-1">
                              Professional {service.name.toLowerCase()} services tailored to your needs
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="mt-8 px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-medium rounded-lg shadow-md transition-all flex items-center group">
                      <Rocket className="mr-2 group-hover:animate-bounce" />
                      Explore {category.title}
                    </button>
                  </div>
                </div>

                {/* Sticky Image Column */}
                <div className={`lg:sticky lg:top-32 h-[500px] ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full w-full">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <div className="bg-cyan-600/90 backdrop-blur-sm inline-block px-4 py-2 rounded-lg mb-3">
                        <span className="font-medium">Featured Work</span>
                      </div>
                      <h5 className="text-2xl font-bold mb-2">{category.title} Solutions</h5>
                      <p className="mb-4 max-w-md">See our award-winning work in {category.title.toLowerCase()}</p>
                      <button className="flex items-center text-cyan-200 hover:text-white transition-colors font-medium">
                        View portfolio
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ArchitecturalDivider id="packages" title="Integrated Growth Packages" />

        {/* ===== Zig-Zag Section 2: Packages (Reversed) ===== */}
        <section className="relative max-w-7xl mx-auto px-6 mb-20 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16">
            <div className="lg:sticky lg:top-32 h-fit lg:order-last">
              <h3 className="text-center md:text-left text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Scalable Solutions<br />
                <span className="text-cyan-600">From Launch to Enterprise</span>
              </h3>
              <p className="text-gray-600 text-justify text-base mb-8">
                Our integrated packages are designed to provide a clear growth path. Whether you're a startup laying the groundwork or an established business aiming for market leadership, we have a comprehensive solution that scales with your ambition, ensuring you have the right tools at every stage of your journey.
              </p>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Business growth and scaling"
                  className="rounded-xl shadow-2xl border-4 border-white w-full"
                />
              </div>
            </div>
            <div className="lg:col-start-1 lg:row-start-1 space-y-10 md:space-y-12 mt-12 lg:mt-0">
              {integratedPackagesData.map((pkg) => (
                <div key={pkg.name} className={`relative overflow-hidden rounded-2xl bg-white border shadow-lg transition-all duration-300 ${pkg.highlight ? 'border-cyan-500 shadow-cyan-200/50' : 'border-gray-100 hover:shadow-xl'}`}>
                  {pkg.highlight && <div className="absolute top-0 right-0 bg-cyan-600 text-white text-xs font-bold tracking-wider uppercase py-1.5 px-4 rounded-bl-xl rounded-tr-xl">Most Popular</div>}
                  <div className="p-8 lg:p-10">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                    <p className="text-gray-500 mb-6">{pkg.idealFor}</p>
                    <p className="text-4xl font-extrabold text-gray-900 mb-6">{pkg.price}</p>
                    <ul className="space-y-3 text-gray-600 mb-8">
                      {pkg.features.map(feature => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className={`w-full block text-center font-bold py-3 px-6 rounded-lg transition-colors ${pkg.highlight ? 'bg-cyan-600 text-white hover:bg-cyan-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                      Select Package
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ArchitecturalDivider id="solutions" title="Specialized Project-Based Solutions" />



        {/* ===== Zig-Zag Section 3: Solutions ===== */}
        <section className="relative max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16">
            <div className="lg:sticky lg:top-32 h-fit">
              <h3 className="text-center md:text-left text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Targeted Expertise<br />
                <span className="text-cyan-600">For Your Unique Needs</span>
              </h3>
              <p className="text-gray-600 text-justify text-base mb-8">
                Beyond our integrated packages, we offer specialized retainers and project-based solutions. These are designed to address specific challenges and opportunities, providing focused expertise to kickstart a new initiative, refresh an existing asset, or power ongoing growth in a key area.
              </p>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team collaborating on a specialized project"
                  className="rounded-xl shadow-2xl border-4 border-white w-full"
                />
              </div>
            </div>
            <div className="lg:col-start-2 space-y-10 md:space-y-12 mt-12 lg:mt-0">
              {specializedSolutionsData.map((solution) => {
                const Icon = solution.icon;
                return (
                  <div key={solution.name} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-8 lg:p-10 flex flex-col md:flex-row md:items-start gap-8">
                      <div className="bg-orange-100 border border-orange-200/50 p-4 rounded-xl text-orange-600 flex-shrink-0 mt-1 self-center md:self-start">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl text-center md:text-left font-bold text-gray-900 mb-4">{solution.name}</h4>
                        <p className="text-gray-600 text-base leading-relaxed">{solution.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        
    </>
  )
}
