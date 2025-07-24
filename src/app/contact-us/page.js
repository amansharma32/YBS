'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox access token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // REMEMBER TO REPLACE THIS WITH YOUR ACTUAL TOKEN

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState('india');
  const [showMap, setShowMap] = useState(false);

  // Refs for Mapbox and Intersection Observer
  const mapContainerRef = useRef(null);
  const globalOfficesRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const mapMarkerRef = useRef(null); // Ref to store the Mapbox marker instance

  // Country Flag SVGs (for a more professional look than emojis)
  const IndiaFlag = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="12" fill="white"/>
      <mask id="mask0_24_1156" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" rx="12" fill="white"/>
      </mask>
      <g mask="url(#mask0_24_1156)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 8H24V16H0V8Z" fill="#F93F16"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V8H0V0Z" fill="#FF8D00"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 16H24V24H0V16Z" fill="#118600"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 12C10.6667 12 10 11.3333 10 10C10 8.66667 10.6667 8 12 8C13.3333 8 14 8.66667 14 10C14 11.3333 13.3333 12 12 12Z" fill="#000080"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 10.5C11.5 10.5 11.5 10 12 10C12.5 10 12.5 10.5 12 10.5Z" fill="white"/>
      </g>
    </svg>
  );

  const USAFlag = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="12" fill="white"/>
      <mask id="mask0_24_1158" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" rx="12" fill="white"/>
      </mask>
      <g mask="url(#mask0_24_1158)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V24H0V0Z" fill="#0A3161"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 24L24 0V24H0Z" fill="#B22234"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M24 0L0 24V0H24Z" fill="#B22234"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 24L24 0V24H0Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M24 0L0 24V0H24Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0V24H24V0H0ZM2 2H22V22H2V2ZM4 4H20V20H4V4ZM6 6H18V18H6V6ZM8 8H16V16H8V8ZM10 10H14V14H10V10ZM12 12H12.01V12.01H12V12Z" fill="white"/>
      </g>
    </svg>
  );

  // Effect for Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowMap(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (globalOfficesRef.current) {
      observer.observe(globalOfficesRef.current);
    }

    return () => {
      if (globalOfficesRef.current) {
        observer.unobserve(globalOfficesRef.current);
      }
    };
  }, []);

  // Effect for Mapbox initialization and updates
  useEffect(() => {
    if (showMap && mapContainerRef.current) {
      // Initialize map if it doesn't exist
      if (!mapInstanceRef.current) {
        mapInstanceRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/light-v11',
          center: activeLocation === 'india' ? [77.2090, 28.6139] : [-74.0060, 40.7128],
          zoom: 12,
          essential: true,
        });

        mapInstanceRef.current.on('load', () => {
          mapInstanceRef.current.resize();
        });
      }

      // Update marker and fly to location whenever activeLocation changes
      const currentMap = mapInstanceRef.current;
      let centerCoords = activeLocation === 'india' ? [77.2090, 28.6139] : [-74.0060, 40.7128];
      let popupHTML = activeLocation === 'india' ? '<h3>Digital Flux India</h3><p>New Delhi Office</p>' : '<h3>Digital Flux USA</h3><p>New York Office</p>';

      if (mapMarkerRef.current) {
        mapMarkerRef.current.remove(); // Remove old marker
      }
      mapMarkerRef.current = new mapboxgl.Marker({ color: '#06B6D4' }) // Cyan marker
        .setLngLat(centerCoords)
        .setPopup(new mapboxgl.Popup().setHTML(popupHTML))
        .addTo(currentMap);

      currentMap.flyTo({
        center: centerCoords,
        zoom: 12,
        speed: 1.2,
        curve: 1,
        essential: true,
      });
    }

    // Cleanup function for Mapbox
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (mapMarkerRef.current) {
        mapMarkerRef.current.remove();
        mapMarkerRef.current = null;
      }
    };
  }, [showMap, activeLocation]); // Re-run effect when showMap or activeLocation changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50 text-gray-800 font-sans antialiased flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="  mb-16   "
      >
        <h1 className="text-4xl   font-extrabold mb-4 text-gray-900 leading-tight">
          Let's Connect and Build Together
        </h1>

        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          We're excited to hear from you. Reach out to discuss your project, partnership opportunities, or just to say hello!
        </p>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
        {/* Left Side: Contact Form */}
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 flex-grow"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Get a Quote
            </h2>

            {isSubmitted ? (
              <motion.div

                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}

                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-4 shadow-inner">
                  <FiCheck className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24-48 hours. Thank you!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 resize-y"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, boxShadow: "0 8px 25px -5px rgba(6, 182, 212, 0.4)" }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-300"
                >
                  <FiSend className="mr-3 text-xl" />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Right Side: Image Placeholder */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center h-full justify-center    rounded-2xl   border border-gray-100 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Global Collaboration"
            className="w-full h-[80vh] object-cover rounded-xl shadow-lg"
          />

        </motion.div>
      </div>

      {/* New Section: Our Global Offices with Map & Details Side-by-Side */}
      <motion.div
        ref={globalOfficesRef}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: showMap ? 0 : 50, opacity: showMap ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-7xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 mt-16"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Our Global Presence</h2>
        <p className="text-xl text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          We operate across continents to bring you seamless digital solutions. Explore our locations below.
        </p>

        <div className="flex  gap-1 rounded-lg bg-gray-100 p-1 border border-gray-200 shadow-inner mb-8 w-full max-w-md mx-auto">
          <button
            onClick={() => setActiveLocation('india')}
            className={`flex-1 py-3 px-4 rounded-xl   text-base font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${activeLocation === 'india' ? 'bg-cyan-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
          >
           <img src="https://cdn-icons-png.flaticon.com/512/14009/14009677.png" className=' h-15 w-15' alt="" /> <strong>India  </strong>
          </button>
          <button
            onClick={() => setActiveLocation('usa')}
            className={`flex-1 py-3 px-4 rounded-xl text-base font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${activeLocation === 'usa' ? 'bg-cyan-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
          > 
            <img src="https://cdn-icons-png.flaticon.com/512/206/206626.png"  className=' h-15 w-15' alt="" /><strong> USA  </strong>
          </button>
        </div>

        {showMap && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" // New grid for map & details
          >
            {/* Left Side: Map Container */}
            <div className="w-full   rounded-xl overflow-hidden shadow-lg border border-gray-200">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.937462191515!2d77.02752827554416!3d28.39095677579762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22c3ae1907e1%3A0x3f36ee7e064eac62!2sREACH%20MY%20TOWER!5e0!3m2!1sen!2sin!4v1753353636367!5m2!1sen!2sin" width="600" height="450"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Right Side: Contact Details */}
            <motion.div
              key={activeLocation + "-details-side"} // Ensure re-animation on location change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-7 p-14    rounded-xl bg-gray-50 border border-gray-100 shadow-inner   flex flex-col justify-center" // Added flex-col & justify-center for vertical alignment
            >
              <h3 className="text-3xl font-bold text-gray-800">
                {activeLocation === 'india' ? 'Digital Flux India' : 'Digital Flux Inc. USA'}
              </h3>
              <div className="space-y-6"> {/* Changed grid to space-y for vertical stacking */}
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-cyan-100 p-4 rounded-full shadow-sm">
                    <FiMapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800">Address</p>
                    {activeLocation === 'india' ? (
                      <>
                        <p className="text-gray-600 mt-1"></p>
                        <p className="text-gray-600">#603, Reach My Tower
Sec-70, </p>
                        <p className="text-gray-600">Gurugram-122001</p>
                      </>
                    ) : (
                      <>
                        <p className="text-gray-600 mt-1">456 Innovation Drive</p>
                        <p className="text-gray-600">New York, NY 10001</p>
                        <p className="text-gray-600">United States</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-cyan-100 p-4 rounded-full shadow-sm">
                    <FiMail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800">Email</p>
                    <p className="text-cyan-600 hover:underline mt-1 transition-colors duration-200">
                      <a href={`mailto:${activeLocation === 'india' ? 'fluxdigital2005@gmail.com' : 'fluxdigital2005@gmail.com'}`}>
                        {activeLocation === 'india' ? 'fluxdigital2005@gmail.com' : 'fluxdigital2005@gmail.com'}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-cyan-100 p-4 rounded-full shadow-sm">
                    <FiPhone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600 mt-1">
                      {activeLocation === 'india' ? '7017915594' : 'processing...'}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {activeLocation === 'india' ? 'Mon-Sat: 9am-6pm IST' : 'Mon-Fri: 9am-6pm EST'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
    

      {/* Global Mapbox Popup Styles for Light Theme */}
      <style jsx global>{`
        /* Mapbox Popup Styles */
        .mapboxgl-popup-content {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(8px) !important;
          border: 1px solid rgba(0, 0, 0, 0.1) !important;
          color: #333 !important;
          padding: 1rem !important;
          border-radius: 0.5rem !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .mapboxgl-popup-content h3 {
          color: #1a202c !important;
          margin-bottom: 0.25rem !important;
          font-weight: 600 !important;
        }
        .mapboxgl-popup-content p {
          color: #4a5568 !important;
          font-size: 0.9rem !important;
        }
        .mapboxgl-popup-close-button {
          color: #666 !important;
          font-size: 1.5rem !important;
          padding-right: 0.5rem !important;
        }
        .mapboxgl-popup-tip {
          border-top-color: rgba(255, 255, 255, 0.95) !important;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;