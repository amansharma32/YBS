"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Ghost } from 'lucide-react';
import { useState } from 'react';


// This is the main component for our dynamic page.
const NotFound = () => {
  // State to toggle between "Under Construction" and "Under Maintenance" modes.
  const [pageState, setPageState] = useState('construction');

  // Utility function for a simple SVG icon.
  const renderLucideIcon = (path, size = 24, className = '') => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {path}
    </svg>
  );

  // SVG components for our icons.
  const Hammer = () => renderLucideIcon(<>
    <path d="M15 12l-12 12m-3-3l12-12" />
    <path d="M14 14l-2 2" />
    <path d="M16 16l-2 2" />
    <path d="M18 18l-2 2" />
    <path d="M22 6l-5 5" />
    <path d="M22 6l-5 5" />
    <path d="M17 11L11 17" />
  </>);

  const Wrench = () => renderLucideIcon(<>
    <path d="M10 20l4-4 2 2 4-4" />
    <path d="M18 22l-10-10" />
    <path d="M21 16l-4 4" />
    <path d="M16 5l-4 4" />
    <path d="M10 10l-4-4" />
  </>);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
        
          }

          @keyframes pulse-gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .animated-gradient {
            background-size: 200% 200%;
            animation: pulse-gradient 10s ease infinite;
          }
          
          .line-animation {
            animation: move-lines 20s linear infinite;
          }

          @keyframes move-lines {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 1000;
            }
          }
        `}
      </style>
      
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white p-4 overflow-hidden">
        {/* Animated background lines */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            stroke="#4f46e5"
            strokeWidth="0.2"
            strokeDasharray="10 5"
            className="line-animation"
          >
            <path d="M0 50 Q 25 20 50 50 T 100 50" />
            <path d="M0 20 Q 25 80 50 20 T 100 20" />
            <path d="M0 80 Q 25 30 50 80 T 100 80" />
          </motion.g>
        </svg>

        {/* The main content container with a glassmorphism effect */}
        <motion.div
          className="relative z-10 w-full max-w-lg p-8 md:p-12 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          {/* Header icon and title */}
          <div className="flex flex-col items-center justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="p-4 rounded-full bg-indigo-500/10 text-indigo-300"
            >
              {pageState === 'construction' ? <Hammer size={48} /> : <Wrench size={48} />}
            </motion.div>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
              {pageState === 'construction' ? 'Under Construction' : 'Under Maintenance'}
            </h1>
          </div>

          {/* Main message and details based on the state */}
          {pageState === 'construction' ? (
            <motion.div
              key="construction"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mt-4 text-lg text-gray-600">
                Our team is busy deploying a new architecture for a more robust and fluid user experience. We're refining our web dev, branding, and marketing platforms.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Check back soon to see our progress.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="maintenance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mt-4 text-lg text-gray-300">
                Our digital systems are currently undergoing scheduled maintenance to ensure peak performance and security. We're optimizing the core components.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Thank you for your patience as we optimize our systems.
              </p>
            </motion.div>
          )}

          {/* Call to action and state toggle */}
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center space-x-2 px-6 py-3 text-lg font-semibold rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg animated-gradient"
            >
              Contact Us
            </Link>
          </div>

          {/* Toggle buttons to switch states */}
         
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;