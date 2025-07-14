import React, { useRef, useEffect } from 'react';
import { TbRocket, TbBolt, TbBuildingSkyscraper, TbCircleCheck, TbArrowRight } from 'react-icons/tb';
import { gsap } from 'gsap';

// Color configurations for each package
const colorConfigs = {
  launchpad: {
    primary: '#06b6d4', // cyan-500
    gradientFrom: '#06b6d4', // from-cyan-500
    gradientTo: '#0891b2', // to-cyan-600
    text: '#ffffff',
    hover: '#0e7490', // cyan-700
    iconBg: 'rgba(255, 255, 255, 0.25)',
    border: 'rgba(255, 255, 255, 0.20)'
  },
  accelerator: {
    primary: '#0d9488', // teal-600
    gradientFrom: '#0d9488', // from-teal-600
    gradientTo: '#0f766e', // to-teal-700
    text: '#ffffff',
    hover: '#115e59', // teal-800
    iconBg: 'rgba(255, 255, 255, 0.25)',
    border: 'rgba(255, 255, 255, 0.20)'
  },
  enterprise: {
    primary: '#7c3aed', // violet-600
    gradientFrom: '#7c3aed', // from-violet-600
    gradientTo: '#6d28d9', // to-violet-700
    text: '#ffffff',
    hover: '#5b21b6', // violet-800
    iconBg: 'rgba(255, 255, 255, 0.25)',
    border: 'rgba(255, 255, 255, 0.20)'
  }
};

// Package data with color configurations
const packagesData = [
    {
      id: 'launchpad',
      title: "The Launchpad Package",
      idealFor: "Startups, small businesses, or new ventures looking to establish a professional online presence and kickstart their digital journey.",
      valueProp: "Get a professional, functional website and establish your initial digital footprint to connect with your audience.",
      icon: TbRocket,
      colorConfig: colorConfigs.launchpad,
      inclusions: [
        {
          category: "Web & Experience Design",
          details: [
            "Custom Website Design & Development (Up to 5-7 Pages): Responsive, modern UI/UX design.",
            "Basic Content Management System (CMS) Setup: Empowering clients to manage basic website content easily.",
            "Mobile Responsiveness: Ensuring the site looks great on all devices."
          ]
        },
        {
          category: "Digital Marketing & SEO",
          details: [
            "Initial SEO Integration: Basic on-page SEO setup for core pages.",
            "Google My Business Optimization: Setting up and optimizing local listings.",
            "Social Media Profile Setup (2 Platforms): Professional setup of profiles (e.g., Facebook, Instagram).",
            "Monthly Performance Snapshot: A concise report on website traffic and engagement."
          ]
        },
        {
          category: "Strategic & Account Management",
          details: ["Initial Consultation & Discovery Session", "Dedicated Account Coordinator", "Bi-monthly Check-in Calls"]
        }
      ]
    },
    {
      id: 'accelerator',
      title: "The Accelerator Package",
      idealFor: "Growing businesses that have an existing online presence but need to enhance their reach, engage more effectively, and drive conversions.",
      valueProp: "Boost your online visibility, attract qualified leads, and convert them into customers with integrated web and marketing efforts.",
      icon: TbBolt,
      colorConfig: colorConfigs.accelerator,
      inclusions: [
        {
          category: "Enhanced Web & Experience Design",
          details: [
              "All 'Launchpad' features, PLUS:",
              "Enhanced Custom Website (Up to 10-15 Pages / Blog): Complex layouts and interactive elements.",
              "E-commerce Basic Setup (up to 10 products, optional): Utilizing platforms like Shopify or WordPress.",
              "Website Maintenance & Security (Monthly): Updates, backups, and basic security monitoring."
          ]
        },
        {
          category: "Digital Marketing & Lead Generation",
          details: [
              "Comprehensive SEO Strategy (On-Page & Technical): In-depth keyword research and technical audit.",
              "Content Marketing (2 Blog Posts/Month): Strategically planned content to attract organic traffic.",
              "Social Media Management (3 Platforms): Regular posting and community engagement.",
              "Email Marketing Setup & Campaign: Lead nurturing, welcome series, or newsletter setup.",
              "Google Ads Basic Campaign Management (ad spend separate)."
          ]
        },
        {
          category: "Strategic & Account Management",
          details: [
              "In-depth Quarterly Strategy Review", "Dedicated Digital Marketing Manager", "Bi-weekly Performance Reports & Calls", "Access to basic data dashboards"
          ]
        }
      ]
    },
    {
      id: 'enterprise',
      title: "The Enterprise Impact Package",
      idealFor: "Established businesses and large enterprises seeking aggressive growth, market leadership, and a highly sophisticated, fully integrated digital ecosystem.",
      valueProp: "Achieve market dominance and maximize your digital ROI through a fully customized, continuously optimized, and data-driven digital ecosystem.",
      icon: TbBuildingSkyscraper,
      colorConfig: colorConfigs.enterprise,
      inclusions: [
        {
          category: "Web & Experience Design",
          details: [
            "All 'Accelerator' features, PLUS:",
            "Enterprise-Grade Custom Website/Platform Development: Complex functionalities, custom integrations (CRM, ERP), scalable architecture.",
            "On-Demand 3D Website Elements/Integration: Incorporating immersive 3D graphics and interactive experiences.",
            "AR Menu Development: Creation of interactive Augmented Reality menus for products/services.",
            "Advanced E-commerce Solutions: Multi-vendor, subscription models, complex product catalogs.",
            "Dedicated Web Development & Maintenance Team: Priority support and continuous feature development.",
            "Conversion Rate Optimization (CRO): A/B testing, user behavior analysis, heatmaps.",
            "Mobile App Development: Custom mobile application development for iOS/Android."
          ]
        },
        {
          category: "Digital Marketing & AI Automation",
          details: [
            "Full-Spectrum SEO (Local, Technical, Content, Link Building): Aggressive organic growth strategies.",
            "Extensive Content Marketing Strategy: High-volume content creation and distribution.",
            "Advanced Social Media Strategy & Advertising: Comprehensive campaign management.",
            "Sophisticated Email Marketing & Marketing Automation: Complex workflows and CRM integration.",
            "Multi-Channel Paid Advertising: Strategic budget allocation across all platforms.",
            "Advanced Lead Generation Systems: Robust lead capture funnels and nurturing strategies.",
            "Data Analysis & Attribution Modeling: Deep dives into customer journey and marketing effectiveness.",
            "AI Automation Implementation: Integrating AI & Machine Learning tools for efficiency."
          ]
        },
        {
          category: "Strategic & Account Management",
          details: [
            "Dedicated Senior Digital Marketing Manager: Strategic leadership and hands-on guidance.",
            "Monthly In-depth Performance Reviews: Comprehensive data analysis and strategic adjustments.",
            "Custom Data Dashboards & Predictive Analytics: Real-time insights and forecasting.",
            "Priority Support & Rapid Response.",
            "Regular Team Syncs & Client Workshops.",
            "Comprehensive Project Management: Dedicated project manager overseeing all initiatives.",
            "Unlimited Online Consultations: Ongoing strategic guidance and support.",
            "DevOps Consulting: CI/CD, infrastructure as code, and cloud optimization.",
            "Cloud Services & Cyber Security Consulting: Robust cloud infrastructure and security."
          ]
        }
      ]
    }
];

const Firespark = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure GSAP and window are available
    if (typeof window === 'undefined' || !gsap) return;

    const sections = Array.from(containerRef.current.querySelectorAll('section.package-section'));
    const sectionCleanupFns = [];

    sections.forEach((section, index) => {
      const stickyCard = section.querySelector('.lg\\:sticky');
      if (!stickyCard) return;

      const isReversed = index % 2 !== 0;
      let isAnimating = false;

      // --- Create Particles ---
      const particles = [];

      // Create Sparks
      const sparkColors = ['#ff7800', '#ff5400', '#facc15'];
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full particle-element';
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = sparkColors[Math.floor(Math.random() * sparkColors.length)];
        section.appendChild(particle);
        particles.push({ type: 'spark', element: particle });
      }

      // Create Fumes
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full particle-element';
        particle.style.width = `${Math.random() * 15 + 8}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(100, 116, 139, 0.4)'; // slate-500 with opacity
        particle.style.filter = 'blur(5px)';
        section.appendChild(particle);
        particles.push({ type: 'fume', element: particle });
      }

      // Create Ignition Line
      const ignitionLine = document.createElement('div');
      ignitionLine.className = 'absolute ignition-line';
      ignitionLine.style.background = 'linear-gradient(to bottom, rgba(255, 120, 0, 0.8), rgba(252, 211, 77, 0.8))';
      ignitionLine.style.width = '8px';
      ignitionLine.style.filter = 'blur(4px)';
      section.appendChild(ignitionLine);

      // --- Animation Logic ---
      const handleScroll = () => {
        const stickyRect = stickyCard.getBoundingClientRect();
        const scrollAmount = window.scrollY;

        // Check if the card is in the "sticky" position relative to the viewport
        const isSticking = stickyRect.top <= 100 && stickyRect.top >= 92;
        
        if (isAnimating || !isSticking) return;

        // Trigger on significant scroll up or down
        if (Math.abs(scrollAmount - (section.lastScroll || 0)) > 20) {
            isAnimating = true;
            section.lastScroll = scrollAmount;

            const sectionRect = section.getBoundingClientRect();
            const lineTop = stickyRect.top - sectionRect.top;
            const lineHeight = stickyRect.height;

            // --- Animate Ignition Line ---
            gsap.set(ignitionLine, {
                left: isReversed ? `${stickyRect.left - sectionRect.left}px` : `${stickyRect.right - sectionRect.left - 4}px`,
                top: `${lineTop}px`,
                height: `${lineHeight}px`,
                opacity: 0,
            });
            gsap.to(ignitionLine, { opacity: 1, duration: 0.1, repeat: 1, yoyo: true, ease: 'power2.inOut' });

            // --- Animate Particles ---
            const xDirection = isReversed ? -1 : 1;
            
            particles.forEach(p => {
                // Set initial position along the ignition line
                gsap.set(p.element, {
                    left: isReversed ? `${stickyRect.left - sectionRect.left}px` : `${stickyRect.right - sectionRect.left}px`,
                    top: `${lineTop + Math.random() * lineHeight}px`,
                    opacity: 1, scale: 1, x: 0, y: 0,
                });

                if (p.type === 'spark') {
                    gsap.to(p.element, {
                        x: () => `+=${xDirection * (80 + Math.random() * 120)}`,
                        y: () => `+=${-80 + Math.random() * 160}`,
                        opacity: 0, scale: 0,
                        duration: 0.6 + Math.random() * 1.0,
                        ease: 'power3.out',
                        delay: Math.random() * 0.3, // Stagger start time 
                    });
                } else { // Fume animation
                    gsap.to(p.element, {
                        x: () => `+=${xDirection * (20 + Math.random() * 40)}`,
                        y: () => `+=${-40 + Math.random() * 80}`,
                        opacity: 0, scale: (i, t) => t.style.scale * 1.5,
                        duration: 1.5 + Math.random() * 2.0, // Slower, longer drift
                        ease: 'sine.out',
                        delay: Math.random() * 0.5,
                    });
                }
            });

            // Reset animation flag after the longest animation could have finished
            setTimeout(() => { isAnimating = false; }, 3500);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      const cleanup = () => {
        window.removeEventListener('scroll', handleScroll);
        particles.forEach(p => p.element.remove());
        ignitionLine.remove();
      };
      sectionCleanupFns.push(cleanup);
    });

    return () => {
      sectionCleanupFns.forEach(fn => fn());
    };
  }, []);

  return (
    <div className="  relative z-1 bg-transparent font-sans antialiased text-gray-800">
      <div className="flex flex-col justify-center items-center mx-auto px-4 sm:px-6 py-20 md:py-24" ref={containerRef}>
        {/* Header */}
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent">
              Integrated Growth
            </span> Packages
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            These packages offer comprehensive, integrated solutions for businesses seeking holistic digital transformation and sustained growth.
          </p>
        </div>

        {/* Packages Container */}
        <div className="space-y-24">
          {packagesData.map((pkg, index) => {
            const Icon = pkg.icon;
            const isReversed = index % 2 !== 0;
            const colors = pkg.colorConfig;

            const summaryCard = (
              <div
                className="p-8 rounded-3xl shadow-2xl flex flex-col h-full"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradientFrom}, ${colors.gradientTo})`,
                  color: colors.text
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="p-3 rounded-2xl backdrop-blur-sm border"
                    style={{
                      backgroundColor: colors.iconBg,
                      borderColor: colors.border
                    }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold">{pkg.title}</h2>
                </div>
                <p className="text-white/90 font-medium mb-2 mt-4 text-sm uppercase tracking-wider">Ideal for:</p>
                <p className="text-white/80 mb-6 flex-grow leading-relaxed">{pkg.idealFor}</p>
                
                <div className="mt-auto pt-6 border-t" style={{ borderColor: colors.border }}>
                  <p className="text-white/90 font-semibold mb-2">Value Proposition:</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-8">{pkg.valueProp}</p>
                  <button
                    className={`group w-full font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center`}
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.text,
                      '--tw-shadow-color': colors.hover,
                      '&:hover': {
                        backgroundColor: colors.hover
                      }
                    }}
                  >
                    Get Started
                    <TbArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );

            const detailsCard = (
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl ring-1 ring-slate-200/50 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Inclusions</h3>
                <div className="space-y-8">
                  {pkg.inclusions.map((inclusion) => (
                    <div key={inclusion.category}>
                      <h4
                        className="text-lg font-semibold mb-4 pb-3 border-b border-slate-200"
                        style={{ color: colors.primary }}
                      >
                        {inclusion.category}
                      </h4>
                      <ul className="space-y-3">
                        {inclusion.details.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div
                              className="p-1 rounded-full mr-4 mt-1 flex-shrink-0"
                              style={{
                                backgroundColor: `${colors.primary}10`,
                                color: colors.primary
                              }}
                            >
                              <TbCircleCheck className="w-4 h-4" />
                            </div>
                            <span className="text-gray-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );

            return (
              // IMPORTANT: Removed 'overflow-hidden' to allow sticky positioning to work
              <section key={pkg.id} className="package-section grid grid-cols-1 lg:grid-cols-2   p-8 items-start relative">
                {/* The sticky column */}
                <div className={`lg:sticky lg:top-24 h-fit ${isReversed ? 'lg:order-last' : ''}`}>
                  {summaryCard}
                </div>

                {/* The scrolling column */}
                <div className={`${isReversed ? 'lg:order-first' : ''}`}>
                  {detailsCard}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* GSAP animation styles */}
      <style jsx global>{`
        .particle-element, .ignition-line {
          will-change: transform, opacity;
          pointer-events: none;
          opacity: 0;
        }
        .package-section {
            /* Using contain: paint helps browsers optimize rendering for animations */
            contain: paint;
        }
      `}</style>
    </div>
  );
};

export default Firespark;