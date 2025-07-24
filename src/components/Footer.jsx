 
 import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { socialImgs } from "@/constants/page"; // Ensure this path is correct

// --- Footer Data Structures ---
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
      { name: "Submit Feedback to Our CEO", href: "#" }, // Assuming this is not a Next.js route
      { name: "Download Brochure", href: "#" }, // Assuming this is not a Next.js route
      { name: "Sitemap", href: "/sitemap" },
    ],
  },
};

const footerConnect = {
  title: "Connect",
  items: [
    { label: "General Enquiry", value: "7017915594", type: "tel", href: "tel:7017915594" },
    { label: "Sales Enquiry", value: "7017915594", type: "tel", href: "tel:7017915594" },
    { label: "Email", value: "fluxdigital2005@gmail.com", type: "email", href: "mailto:fluxdigital2005@gmail.com" },
    { label: "HR Enquiry", value: "7017915594", type: "tel", href: "tel:7017915594" },
    { label: "Whatsapp (Sales)", value: "7017915594", type: "whatsapp", href: "https://wa.me/7017915594" },
  ],
};

const Footer = () => {
  return (

    



   <footer className="bg-neutral-950 text-neutral-200 py-16 px-4 sm:px-6 lg:px-8 w-full ">
      <div className="max-w-6xl mx-auto">
      
        {/* Top Section: Get Started */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-12 border-b border-neutral-700 mb-12">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-sm">
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
              © {new Date().getFullYear()} FLUX Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;



