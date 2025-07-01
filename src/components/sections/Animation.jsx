import React, { useEffect, useRef } from 'react';

// Declare particlesJS globally for TypeScript if you were using it
// declare var particlesJS: any;

const Animation = () => {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    // Dynamically load the particles.js script if it's not already loaded
    // This ensures it runs only once and is available globally
    if (typeof window !== 'undefined' && !(window as any).particlesJS) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
      script.async = true;
      script.onload = () => {
        // Once particles.js script is loaded, initialize it
        initializeParticles();
      };
      document.body.appendChild(script);
    } else if (typeof window !== 'undefined' && (window as any).particlesJS) {
      // If particles.js is already loaded, just initialize it
      initializeParticles();
    }

    // Function to initialize particles.js with the given configuration
    const initializeParticles = () => {
      if (particlesContainerRef.current && (window as any).particlesJS) {
        // The configuration object provided by the user
        const particlesConfig = {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg', // This image won't load in this isolated environment
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        };

        // Initialize particles.js on the ref element with the configuration
        (window as any).particlesJS(particlesContainerRef.current.id, particlesConfig);
      }
    };

    // Cleanup function: Destroy particles.js instance when component unmounts
    return () => {
      if (typeof window !== 'undefined' && (window as any).pJS) {
        // pJS is the global instance managed by particles.js
        (window as any).pJS.fn.vendors.destroypJS();
        (window as any).pJS = null; // Clear the instance
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div
      id="particles-js" // The ID must match the one passed to particlesJS()
      ref={particlesContainerRef}
      className="relative w-full h-screen bg-gray-900 overflow-hidden" // Tailwind classes for full screen and dark background
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* Optional: Add content over the particles */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center rounded-lg p-2 bg-black bg-opacity-50">
          Welcome to My Page
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl rounded-lg p-2 bg-black bg-opacity-50">
          A dynamic background built with `particles.js` in Next.js.
        </p>
      </div>
    </div>
  );
};

export default Animation;