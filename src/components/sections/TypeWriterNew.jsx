import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Typewriter = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);

    return () => clearInterval(typing);
  }, [text, speed]);

  return <>{displayText}</>;
};

const TypeWriterNew = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isVisible) {
        setIsVisible(true);
        controls.start("visible");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, isVisible]);

    const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client side
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: `particle-${i}`,
      size: `${Math.random() * 20 + 5}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float${Math.floor(Math.random() * 4) + 1}`,
      duration: `${Math.random() * 20 + 10}s`
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative min-h-screen rounded-4xl py-12 md:py-28 overflow-hidden bg-gray-900">
      {/* 3D Floating Particles Background */}
       <motion.div 
      className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.2 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.5 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-500/30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`
          }}
          animate={particle.animate}
        />
      ))}
    </motion.div>

      {/* Holographic Card */}
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 1, type: "spring" } }
          }}
          className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
        >
          {/* Interactive Glow Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 p-4 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Column - Interactive Typography */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold   text-white mb-8 leading-tight">
                  <Typewriter text="Beyond Solutions (YBS) Partnership" speed={80} />
                </h2>
                
                <div className="space-y-6">
                  <p className="md:text-xl text-gray-300 leading-relaxed border-l-4 border-cyan-500 pl-6 py-2">
                    <span className="font-medium text-white">Transparent</span>, <span className="font-medium text-white">results-driven</span> solutions tailored to your vision.
                  </p>
                  
                  <p className="md:text-xl text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-6 py-2">
                    <span className="font-medium text-white">Strategic partnerships</span> that evolve with your business needs.
                  </p>
                  
                  <p className="md:text-xl text-gray-300 leading-relaxed border-l-4 border-indigo-500 pl-6 py-2">
                    Unleashing your <span className="font-medium text-white">full digital potential</span> through innovation.
                  </p>
                </div>
              </div>

              {/* Right Column - Interactive Console */}
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-2 md:p-6 shadow-inner">
                  <div className="flex items-center mb-4 ">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-gray-400 font-mono">partner_terminal</div>
                  </div>
                  
                  <ConsoleAnimation />
                  
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                      <span className=' text-sm md:text-lg'>Connect With Our Team</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating CTA */}
     
        </motion.div>
      </div>
    </section>
  );
};

const ConsoleAnimation = () => {
  const [lines, setLines] = useState([
    { text: "$ YBS.initPartnership()", color: "text-green-400", show: false },
    { text: "> Initializing digital transformation...", color: "text-gray-400", show: false },
    { text: "> Analyzing business potential...", color: "text-gray-400", show: false },
    { text: "> Found optimal growth pathways:", color: "text-cyan-400", show: false }
  ]);

  const [features, setFeatures] = useState([
    { text: "✓ Transparent Workflow v2.3", show: false },
    { text: "✓ Adaptive Strategy Module", show: false },
    { text: "✓ Performance Boost Package", show: false },
    { text: "✓ Innovation Pipeline", show: false }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLines(prev => prev.map((line, i) => 
        i === 0 ? { ...line, show: true } : line
      ));
    }, 500);

    const timers = lines.map((_, i) => {
      return setTimeout(() => {
        setLines(prev => prev.map((line, j) => 
          j === i + 1 ? { ...line, show: true } : line
        ));
      }, 1000 * (i + 1));
    });

    const featureTimers = features.map((_, i) => {
      return setTimeout(() => {
        setFeatures(prev => prev.map((feature, j) => 
          j === i ? { ...feature, show: true } : feature
        ));
      }, 1500 * (i + 1) + 1000);
    });

    return () => {
      clearTimeout(timer);
      timers.forEach(t => clearTimeout(t));
      featureTimers.forEach(t => clearTimeout(t));
    };
  }, []);

  return (
    <>
      {lines.map((line, i) => (
        line.show && <div key={i} className={` text-sm md:text-lg px-2 font-mono mb-2 ${line.color}`}>{line.text}</div>
      ))}
      
      <div className="ml-4 space-y-3">
        {features.map((feature, i) => (
          feature.show && (
            <div key={i} className="font-mono text-white flex items-center">
              <span className="text-green-500  mr-2">→</span> 
             <span className=' text-sm md:text-lg'> {feature.text}</span>
              {i === 3 && <span className="ml-2  px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-xs animate-pulse">NEW</span>}
            </div>
          )
        ))}
      </div>
    </>
  );
};

 

// Add these keyframes to your global CSS
// @keyframes float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
// @keyframes float2 { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-20px); } }
// @keyframes float3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-10px, -10px); } }
// @keyframes float4 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(10px, -10px); } }

export default TypeWriterNew;