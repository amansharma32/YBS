"use client"

import { useCallback, useEffect, useRef, useState } from 'react';

import Fuse from "fuse.js";
import { useRouter } from "next/navigation";

import { Dropdown, DropdownItem } from "flowbite-react";

import Link from 'next/link';

import Image from 'next/image';

import { usePathname } from 'next/navigation';



export  default function Navbar() {



  const [openDropdown, setOpenDropdown] = useState(null);



  const toggleDropdown = (dropdownIndex) => {
    setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
  };


  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const links = [
    { href: '/', text: 'Home' },

    {
      to: '#',
      text: 'Services',
      dropdownItems: [
        { href: '/our-Company', label: 'Our Company' },
 
      ],
    },
 
    {
      to: '#',
      text: 'Solutions',
      dropdownItems: [
        { href: '/product-overview', label: 'Overview' },
      
      ],
    },
     
    {
      to: '#',
      text: 'MAINTENANCE ',
      dropdownItems: [
        { label: 'Annual Maintenance Contract (AMC)', href: '/annual-maintenance-contract' },

      ],
    },

    { text: 'About', href: '/About' },
    { text: 'Contact', href: '/support-form' },
  ];



  const [nestedDropdown, setNestedDropdown] = useState(null);



  const toggleNestedDropdown = (index) => {
    setNestedDropdown(nestedDropdown === index ? null : index);
  };
 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);


  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };


    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState('/flux.webp');
  const [logoSize, setLogoSize] = useState({ width: '150', height: '60' });


  useEffect(() => {
    if (!pathname) return;

    const firePages = [
      '/top-Fire-Fighting-Company-in-Delhi-NCR-And-India',
      '/fire-extinguishers',
      '/fire-hydrant-system',
      '/fire-sprinkler-system',
      '/fire-suppression-system',
      '/glow-signage-&-emergency-lights',
      '/fire-tubing-system',
      '/fire-VESDA-system',
      '/fire-alarm-system',
    ];
    
    if (firePages.includes(pathname)) {
      setLogoSrc('/flux.webp');
      setLogoSize({ width: '180', height: '44' });
    } else if (pathname === '/flux.webp') {
      setLogoSrc('/flux.webp');
      setLogoSize({ width: '150', height: '60' });
    } else {
      setLogoSrc('/flux.webp');
      setLogoSize({ width: '150', height: '60' });
    }
  }, [pathname]);


  const menuItems = [
    {
      label: "Services",
      dropdown: [
        { label: "Our Company", href: "/our-Company" },
     
      ],
    },

    {
      label: "Solutions",
      dropdown: [
        { label: "Overview", href: "/product-overview" },
   

      ],
    },
 
    {
      label: "Works",
      dropdown: [

        { label: "Overview", href: "/manufacturing-and-r-&-d" },

      ],
    },
    

    { label: "About", href: "/About" },

    
    { label: "Careers", href: "/Careers" },


    { label: "Contact", href: "/support-form" },
  ];



  const handleLinkClick = (href) => {
    closeMobileMenu(); // Close the mobile menu
    router.push(href);  // Redirect to the selected page
  };




  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Use a ref to manage the audio instance

  // Initialize audio instance only once
  useEffect(() => {
    audioRef.current = new Audio("/audio/1.mp3");

    // Cleanup on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleAudioToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Stop and reset the audio
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      // Play the audio
      audioRef.current.play();
      setIsPlaying(true);

      // Reset state when audio ends
      audioRef.current.onended = () => setIsPlaying(false);
    }
  };


  const searchBarRef = useRef(null); // Ref for the search bar

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false); // To toggle input visibility
  const router = useRouter();

  const items = [
    { id: "1", name: "Air Washer", link: "/air-washer" },
    { id: "2", name: "Ducted Air Coolers", link: "/ducted-air-cooler" },
    { id: "3", name: "Ventilation Exhaust Fan", link: "/ventilation-fans" },
    { id: "4", name: "Panel Air Conditioner", link: "/panel-air-conditioners" },
    { id: "5", name: "Oil/Coolant Chiller", link: "/chiller-oil-water-coolant" },
    { id: "6", name: "Air Handling Unit", link: "/air-handling-unit" },
    { id: "7", name: " Air Shower & Pass Box ", link: "/air-shower" },
    { id: "8", name: " Fire Extinguishers", link: "/fire-extinguishers" },
    { id: "9", name: " Fire Hydrant System", link: "/fire-hydrant-system" },
    { id: "10", name: " Fire Sprinkler System", link: "/fire-sprinkler-system" },
    { id: "11", name: " Fire suppression system", link: "/fire-suppression-system" },
    { id: "12", name: " Glow Signage & Emergency Lights", link: "/glow-signage-&-emergency-lights" },
    { id: "13", name: " Fire tubing system", link: "/fire-tubing-system" },
    { id: "14", name: " Fire VESDA System", link: "/fire-VESDA-system" },
  ];

  const fuse = new Fuse(items, {
    keys: ["name"],
    threshold: 0.3,
  });

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setResults([]);
    } else {
      const searchResults = fuse.search(input).map((result) => result.item);
      setResults(searchResults);
    }
  };

  const handleSelect = (link) => {
    router.push(link);
    setShowSearch(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowSearch(false); // Close the search bar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

    <nav className={` fixed       z-20 w-full top-0 transition-all duration-300 ${isScrolled ? " bg-black text-white shadow-md" : " bg-gradient-to-b from-black text-white"
      }`}
    >
      <div className="  ">

        <div className="flex lg:flex-row items-center xl:flex-row justify-between px-16 py-2" >

          <div className="flex space-x-4">
            <div className="row flex  md:flex-col lg:flex-row ">

              <Link href='/'  >

                {pathname && (<Image

                  src={logoSrc}
                  width={logoSize.width}
                  height={logoSize.height}
                  alt="Picture"
                  className="  md:h-[60px] md:w-auto my-3"
                  style={{ width: `${logoSize.width}px`, height: `${logoSize.height}px` }}  

                />
                )}




              </Link>

            </div>


          </div>


          <div className="row flex-col  lg:flex lg:px-4  ">


           


            <div className="col">
              <div className="hidden xl:flex items-center space-x-1">

                <ul className="flex md:text-[11px] lg:text-[15px] flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                  {menuItems.map((item, index) => (
                    <li className=" after:content-[''] after:block after:w-full after:h-[3px] after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 " key={index}>
                      {item.dropdown ? (
                        <Dropdown label={item.label} inline>
                          {item.dropdown.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              {subItem.dropdown ? (
                                <Dropdown className='w-44' placement="right" label={subItem.label} inline>
                                  {subItem.dropdown.map((nestedItem, nestedIndex) => (
                                    <Link key={nestedIndex} href={nestedItem.href || "#"}>
                                      <Dropdown.Item onClick={() => handleLinkClick(nestedItem.href)}>{nestedItem.label}</Dropdown.Item>
                                    </Link>
                                  ))}
                                </Dropdown>
                              ) : (
                                <Link href={subItem.href || "#"}>
                                  <Dropdown.Item onClick={() => handleLinkClick(subItem.href)}>{subItem.label}</Dropdown.Item>
                                </Link>
                              )}
                            </div>
                          ))}
                        </Dropdown>
                      ) : (
                        <Link href={item.href || "#"} onClick={() => handleLinkClick(item.href)}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

              </div>

            </div>

          </div>


       
          <div className="xl:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
               
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
              
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>


        </div>
      </div>

     






      <div className={`mobile-menu xl:hidden  ${isMobileMenuOpen ? 'mobile-menu-open bg-gray-100 text-black' : 'mobile-menu-closed'}`}>
        {isMobileMenuOpen && links.map((link, index) => (
          <div key={index} className="mx-7 mb-2 border-b-2">
            {link.dropdownItems ? (
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <Link
                    href={link.to || '/'} 
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                  
                  >
                    {link.text}
                  </Link>
                  <div className="transition-transform duration-300 transform">
                    <svg
                      className={`w-4 h-4 ml-2 ${openDropdown === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {openDropdown === index && (
                  <div className="ml-2">
                    {link.dropdownItems.map((dropdownItem, i) => (
                      <div key={i}>
                        {dropdownItem.dropdownItems ? (
                          <div>
                            <div
                              className="flex items-center justify-between cursor-pointer"
                              onClick={() => toggleNestedDropdown(i)}
                            >
                              <Link
                                href={dropdownItem.href || '/'}  
                                className="block py-2 px-4 text-sm hover:bg-gray-200"
                               >
                                {dropdownItem.label}
                              </Link>
                              <div className="transition-transform duration-300 transform">
                                <svg
                                  className={`w-4 h-4 ml-2 ${nestedDropdown === i ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >

                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </div>

                            {nestedDropdown === i && (
                              <div className="ml-4">
                                {dropdownItem.dropdownItems.map((subItem, j) => (
                                  <Link
                                    key={j}
                                    href={subItem.href || '/'} 
                                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                                    onClick={() => handleLinkClick(subItem.href)} // Call handleLinkClick
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={dropdownItem.href || '/'} 
                            className="block py-2 px-4 text-sm hover:bg-gray-200"
                            onClick={() => handleLinkClick(dropdownItem.href)} 
                          >
                            {dropdownItem.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href || '/'} // Use a fallback if link.to is undefined
                className="block py-2 px-4 text-sm hover:bg-gray-200"
                onClick={() => handleLinkClick(link.href)} // Call handleLinkClick
              >
                {link.text}
              </Link>
            )}
          </div>
        ))}


      </div>

      <div className="search-bar-container">
      

        <div className="logo-section">

        </div>

        

        {showSearch && (
          <div className="search-bar p-5" ref={searchBarRef}>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search Solutions..."


              className={`search-input ${isScrolled
                ? " text-black hover:text-black border-black "
                : " text-black hover:text-black "
                }`}
            />
            {results.length > 0 && (
              <ul
                className={`search-results ${isScrolled
                  ? " text-black hover:text-black border-black "
                  : " text-black hover:text-black "
                  }`}

              >
                {results.map((item) => (
                  <li
                    key={item.id}
                    className="search-item"
                    onClick={() => handleSelect(item.link)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}



      </div>


    </nav>



  );
}

 