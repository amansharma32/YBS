 
 import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { socialImgs } from "@/constants/page"; 



const footerLinks = {
  company: {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Solutions", href: "/industries" },
      { name: "Works", href: "/works" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { name: "Branding", href: "/services/branding" },
      { name: "Experience Design", href: "/services/experience-design" },
      { name: "Technology", href: "/services/technology" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  other: {
    title: "Other",
    links: [
      { name: "Partnership", href: "/partnership" },
      { name: "Awards and Recognitions", href: "/awards" },
      { name: "Insights", href: "/insights" },
      { name: "Blogs", href: "/blog" },
      { name: "Resource Augmentation", href: "/resource-augmentation" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Our Clients", href: "/clients" },
      { name: "Submit Feedback to Our CEO", href: "#" },  
      { name: "Download Brochure", href: "#" }, 
      { name: "Sitemap", href: "/sitemap" },
    ],
  },
};

const footerConnect = {
  title: "Connect",
  items: [

    { label: "Contact Number", value: "920-5104-767", type: "tel", href: "tel:9205104767" }, 
    { label: "Email", value: "yourbeyondsolutions@gmail.com", type: "email", href: "mailto:yourbeyondsolutions@gmail.com" },
    
  ],
};

const Footer = () => {
  return (

    



   <footer className=" relative z-50 bg-neutral-950 text-neutral-200 py-16 px-4 sm:px-6 lg:px-8 w-full ">
      <div className="max-w-6xl mx-auto">
      
        {/* Top Section: Get Started */}
        <div className="flex flex-col  md:flex-row md:items-center md:justify-between pb-12 border-b border-neutral-700 mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-3">Get started now! </h2>
            <p className="text-lg text-neutral-400">It takes less than a minute of your time.</p>
          </div>
          <Link href="/contact-us" className="mt-8 md:mt-0 px-8 py-4 border border-neutral-600 text-white rounded-full flex items-center justify-center
                       transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-500 hover:text-cyan-400 group">
            Request a quote <FiArrowRight className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom Section: Links and Contact Info - Grid Layout */}
        <div className="grid  text-center md:text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-sm">
          {/* Render Company, Services, Other sections using map */}
          {Object.values(footerLinks).map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-lg font-bold text-neutral-100 mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? ( // Check if it's an internal Next.js link
                      <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors duration-200">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-200">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-bold text-neutral-100 mb-6">{footerConnect.title}</h3>
            <ul className="space-y-4">
              {footerConnect.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between items-start">
                  <span className="text-neutral-400 flex-shrink-0 mr-4">{item.label}</span>
                  <a
                    href={item.href}
                    target={item.type === 'whatsapp' ? "_blank" : "_self"}
                    rel={item.type === 'whatsapp' ? "noopener noreferrer" : ""}
                    className="text-white hover:text-cyan-400 transition-colors duration-200 text-right break-words"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>


<div className="container ">
   <div className="row flex w-full  py-8 rounded-full  justify-center md:justify-start    gap-3 cursor-pointer">
            

              <a href="https://x.com/YBS_beyound" className="w-8 h-8 bg-white flex items-center justify-center rounded-full relative overflow-hidden group transition-all duration-300" aria-label="Visit our profile on X (formerly Twitter)">
                <svg className="fill-black z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 72 72" fill="none">
                  <path d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z" fill=""></path>
                </svg>
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-black z-0 transition-all duration-500 group-hover:top-0"></div>
                <span className="hidden">x.com</span>
              </a>


              <a href="https://www.instagram.com/your.beyondsolutionsybs" className="w-8 h-8 bg-white flex items-center justify-center rounded-full relative overflow-hidden group transition-all duration-500" aria-label="Visit our profile on Instagram">
                <svg className="fill-gray-900 relative z-10 transition-all duration-500 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 51" fill="none">
                  <path d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86576 45.2827 11.0354C45.6269 11.9164 46.0331 13.2406 46.144 15.678C46.2647 18.3134 46.2896 19.104 46.2896 25.781C46.2896 32.4572 46.2647 33.2488 46.144 35.884C46.033 38.3214 45.6269 39.6466 45.2827 40.5266C44.8283 41.6938 44.2861 42.5258 43.4144 43.4002C42.5389 44.2746 41.7057 44.816 40.537 45.2702C39.6564 45.6132 38.3305 46.0192 35.8916 46.1302C33.2532 46.2516 32.4598 46.2744 25.7826 46.2744C19.1054 46.2744 18.3133 46.2516 15.6765 46.1302Z" fill=""></path>
                </svg>
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-tr from-yellow-300 via-red-600 to-fuchsia-600 z-0 transition-all duration-500 group-hover:top-0"></div>
                <span className="hidden">instagram</span>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61582351415489" className="w-8 h-8 bg-white flex items-center justify-center rounded-full relative overflow-hidden group transition-all duration-300" aria-label="Visit our profile on Facebook">
                <svg className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 72 72" fill="none"><path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" fill=""></path></svg>
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                <span className="hidden">facebook</span>
              </a>

              <a href="https://www.youtube.com/@YourBeyondSolutionsYBS" className="w-8 h-8 bg-white flex items-center justify-center rounded-full relative overflow-hidden group transition-all duration-300" aria-label="Visit our profile on YouTube">
                <svg className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 72 72" fill="none"><path d="M61.1026 23.7185C60.5048 21.471 58.7363 19.6981 56.4863 19.0904C52.4181 18 36.0951 18 36.0951 18C36.0951 18 19.7805 18 15.7039 19.0904C13.4622 19.6897 11.6937 21.4627 11.0876 23.7185C10 27.7971 10 36.3124 10 36.3124C10 36.3124 10 44.8276 11.0876 48.9063C11.6854 51.1537 13.4539 52.9267 15.7039 53.5343C19.7805 54.6247 36.0951 54.6247 36.0951 54.6247C36.0951 54.6247 52.4181 54.6247 56.4863 53.5343C58.728 52.935 60.4965 51.162 61.1026 48.9063C62.1902 44.8276 62.1902 36.3124 62.1902 36.3124C62.1902 36.3124 62.1902 27.7971 61.1026 23.7185Z" fill=""></path><path className="fill-white transition-all duration-300 group-hover:fill-[#FF3000]" d="M30.8811 44.1617L44.4392 36.3124L30.8811 28.463V44.1617Z" fill="white"></path></svg>
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-red-600 z-0 transition-all duration-500 group-hover:top-0"></div>
                <span className="hidden">youtube</span>
              </a>

              <a href="https://www.linkedin.com/in/your-beyond-solutions-ybs-627b8038a" className="w-8 h-8 bg-white flex items-center justify-center rounded-full relative overflow-hidden group transition-all duration-300" aria-label="Visit our profile on YouTube">
                <svg className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                  <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" fill=""></path>
                </svg>
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
                <span className="hidden">youtube</span>
              </a>




            </div>
</div>
            
          </div>
        </div>

        {/* Socials and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-neutral-800 space-y-6 md:space-y-0">
          {/* Social Icons */}
         

          {/* Terms & Conditions */}
          <div className="order-1 md:order-2">
            <Link href="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">Terms & Conditions</Link>
          </div>

          {/* Copyright */}
          <div className="order-3">
            <p className="text-sm text-center md:text-end text-neutral-400">
              © {new Date().getFullYear()} Beyond Solutions (YBS). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;



