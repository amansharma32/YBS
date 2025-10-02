'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import emailjs from "@emailjs/browser"; 
import { useRouter } from 'next/navigation';
  
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';  

const ContactUs = () => {

  const router = useRouter();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState('india');
  const [showMap, setShowMap] = useState(false);

  // Refs for Mapbox and Intersection Observer
  const mapContainerRef = useRef(null);
  const globalOfficesRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const mapMarkerRef = useRef(null); 

 
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
  }, [showMap, activeLocation]);  

 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };



    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        city: "",
        state: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }
        if (formData.phoneNumber.trim() === "") {
            newErrors.phoneNumber = "Phone Number is required";
            
        }
     else if (!/^\d{10}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Phone Number must be exactly 10 digits";
    }
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (formData.city.trim() === "") {
            newErrors.city = "City is required";
        }
        if (formData.state.trim() === "") {
            newErrors.state = "State is required";
        }
        if (formData.message.trim() === "") {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
          
            emailjs
                .sendForm("service_vgeg", "template_iaqbr", form.current, {
                    publicKey: "KKPUCuex5nscVL",
                })
                .then(() => {
                 
                    console.log("SUCCESS!");
                    setIsSubmitted(true);
                    setTimeout(() => {
                        router.push("/");
                    }, 10000);
                })
                .catch((error) => {
                    console.log("FAILED...", error);
                });
            console.log("Form validate");
        } else {
          
            console.log("Form validation failed");
           
        }
    };


  return (

    <div className=" pt-28  bg-gray-50 text-gray-800 font-sans antialiased flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="  mb-16  text-center md:text-left  "
      >
        <h1 className="text-4xl   font-extrabold mb-4 text-gray-900 leading-tight">
          Let's Connect and Build Together
        </h1>

        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          We're excited to hear from you. Reach out to discuss your project, partnership opportunities, or just to say hello!
        </p>
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row mx-auto   gap-16 items-start mb-20">
        {/* Left Side: Contact Form */}
        <div className="flex flex-col w-full md:w-6/12  gap-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 flex-grow"
          >
            <h2 className="  text-3xl font-semibold mb-3 text-gray-900">
            Get a Quote
            </h2>
                <p className="text-4xl pb-7 capitalize">Talk to our Experts.</p>
                             

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
              <form
                                className="w-auto m-3 md:m-7"
                                onSubmit={sendEmail}
                                ref={form}
                            >
                               <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-first-name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            placeholder="Enter Name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500">{errors.name}</p>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-last-name"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Enter Phone Number"
                                        />
                                        {errors.phoneNumber && (
                                            <p className="text-red-500">{errors.phoneNumber}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email ID
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Enter Email ID"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500">{errors.email}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-city"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Gurugram"
                                        />
                                        {errors.city && (
                                            <p className="text-red-500">{errors.city}</p>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-state"
                                        >
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Haryana"
                                        />
                                        {errors.state && (
                                            <p className="text-red-500">{errors.state}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="text-area mt-5">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 "
                                        placeholder="Write here..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500">{errors.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"

                                    className="w-full button bg-transparent hover:bg-cyan-600 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mt-5"
                                >
                                    Send Enquiry
                                </button>
                            </form>
            )}
          </motion.div>
        </div>

        {/* Right Side: Image Placeholder */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center w-full md:w-6/12 h-full justify-center    rounded-2xl   border border-gray-100 overflow-hidden"
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
           <img src="https://cdn-icons-png.flaticon.com/512/14009/14009677.png" className=' h-9 w-9' alt="" /> <strong>INDIA  </strong>
          </button>
          <button
            onClick={() => setActiveLocation('usa')}
            className={`flex-1 py-3 px-4 rounded-xl text-base font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${activeLocation === 'usa' ? 'bg-cyan-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
          > 
            <img src="https://cdn-icons-png.flaticon.com/512/206/206626.png"  className=' h-9 w-9' alt="" /><strong> USA  </strong>
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
              className=" md:space-y-7  p-4 md:p-14    rounded-xl bg-gray-50 border border-gray-100 shadow-inner   flex flex-col justify-center" // Added flex-col & justify-center for vertical alignment
            >
              <h3 className=" text-lg md:text-3xl font-bold text-gray-800">
                {activeLocation === 'india' ? 'Digital Flux India' : 'Digital Flux Inc. USA'}
              </h3>
              <div className="space-y-6"> {/* Changed grid to space-y for vertical stacking */}
                {/* Address */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="flex-shrink-0 bg-cyan-100 p-4 rounded-full shadow-sm">
                    <FiMapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div >
                    <p className=" md:text-lg font-medium text-gray-800">Address</p>
                    {activeLocation === 'india' ? (
                      <>
                       <div className=' text-sm'>
                        <p className="text-gray-600 mt-1"></p>
                        <p className="text-gray-600">#603, Reach My Tower
Sec-70, </p>
                        <p className="text-gray-600">Gurugram-122001</p>
                        </div>
                      </>
                    ) : (
                      <>
                       <div className=' text-sm'>
                         <p className="text-gray-600 mt-1">456 Innovation Drive</p>
                        <p className="text-gray-600">New York, NY 10001</p>
                        <p className="text-gray-600">United States</p>
                       </div>
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
                    <p className=" md:text-lg font-medium text-gray-800">Email</p>
                    <p className="text-cyan-600 hover:underline mt-1 transition-colors duration-200">
                      <a   className=' text-sm' href={`mailto:${activeLocation === 'india' ? 'ronnieromano2482@gmail.com' : 'ronnieromano2482@gmail.com'}`}>
                        {activeLocation === 'india' ? 'ronnieromano2482@gmail.com' : 'ronnieromano2482@gmail.com'}
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
                    <p className=" md:text-lg font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600 mt-1">
                      {activeLocation === 'india' ? '9205104767' : 'processing...'}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {activeLocation === 'india' ? 'Mon - Fri : 10am - 6pm IST' : 'Mon - Fri: 9am - 6pm EST'}
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

export default ContactUs;