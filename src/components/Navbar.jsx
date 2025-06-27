

"use client"

import { useCallback, useEffect, useRef, useState } from 'react';

import Fuse from "fuse.js";
import { useRouter } from "next/navigation";

import { Dropdown, DropdownItem } from "flowbite-react";

import Link from 'next/link';

import Image from "next/legacy/image";

import { usePathname } from 'next/navigation';



function Header() {



  const [openDropdown, setOpenDropdown] = useState(null);



  const toggleDropdown = (dropdownIndex) => {
    setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
  };


  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const links = [

    { href: '/', text: 'Services' },

    { href: '/about-Us', text: 'Solutions' },


    {
      to: '#',
      text: ' Service ',
      dropdownItems: [
        { label: 'Branding ', href: '/fire-extinguishers' },
        { label: "Addressable Fire Alarm System", href: "/addressable-fire-alarm-system-in-delhi-ncr" },
        { label: "Fire Sprinkler System", href: "/fire-sprinkler-system" },
        { label: "Fire Hydrant System", href: "/fire-hydrant-system" },
        { label: "Fire Suppression System", href: "/fire-suppression-system" },
        { label: "Anti Rodent System", href: "/anti-rodent-system" },
        { label: "Water Leak Device (WLD)", href: "/water-leak-detection-device" },
        { label: "Vesda System", href: "/fire-VESDA-system" },
        { label: "Fire Tubing System", href: "/fire-tubing-system" },
        { label: "Fire Door Service", href: "/fire-door-service" },
        { label: "Kitchen Fire Suppression System", href: "/kitchen-fire-suppression-system" },

      ],
    },


    { text: 'Our Works', href: '/our-Works' },
    { href: '/About', text: 'About' },
    { href: '/Careers', text: 'Careers' },

    { text: 'Contact', href: '/contact-Us' },
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
    if (pathname) {
      if (pathname === '/') {
        setLogoSrc('/flux.webp');
        setLogoSize({ width: '150', height: '60' });

      } else {
        setLogoSrc('/flux.webp');
        setLogoSize({ width: '150', height: '60' });
      }

    }
  }, [pathname]);


  const menuItems = [
    {
      label: "Services",
      href: "/"
    },
    {
      label: "Solutions",
      href: "/about-Us"
    },

    {
      label: "Service",
      dropdown: [],
    },

    {
      label: "Works",
      href: "/our-Works"
    },
    {
      label: "About",
      href: "/About"
    },

    {
      label: "Careers",
      href: "/Careers"
    },

    {
      label: "Contact",
      href: "/contact-Us"
    },
  ];


  const handleLinkClick = (href) => {
    closeMobileMenu();
    router.push(href);
  };


  const searchBarRef = useRef(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();




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
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

    <nav className={` fixed        z-20 w-full top-0 transition-all duration-300 ${isScrolled ? " bg-black text-white shadow-md" : " bg-gradient-to-b from-black  text-white"
      }`}
    >
      <div className=" md:mx-2 md:px-4">

        <div className="flex lg:flex-row items-center xl:flex-row justify-between p-4" >

          <div className="flex space-x-4">
            <div className="row flex  md:flex-col lg:flex-row ">

              <Link href='/'>

                {pathname && (
                  <Image
                    src={logoSrc}
                    width={logoSize.width}
                    height={logoSize.height}
                    alt="Picture"
                    className="md:h-[60px] md:w-auto my-3"
                    style={{ width: `${logoSize.width}px`, height: `${logoSize.height}px` }}

                  />
                )}


              </Link>

            </div>


          </div>


          <div className="row flex-col  lg:flex lg:px-4  ">





            <div className="col">
              <div className="hidden xl:flex items-center space-x-1">

                <ul className="flex   flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                  {menuItems.map((item, index) => (
                    <li className=" md:px-3  after:content-[''] after:block after:w-full after:h-[3px] after:bg-gradient-to-r after:from-cyan-500 after:to-blue-700 after:scale-x-0    after:origin-left after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 " key={index}>
                      {item.dropdown ? (


                        <Dropdown className='  ' label="Service" inline>

                          <DropdownItem >
                            <Link className=' text-black' href='/Branding'>
                              Branding 
                            </Link>
                          </DropdownItem>


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



      <div className={`mobile-menu xl:hidden  ${isMobileMenuOpen ? 'mobile-menu-open py-2 bg-gray-100 text-black border-red-300 border-b-[1px]' : 'mobile-menu-closed'}`}>
        {isMobileMenuOpen && links.map((link, index) => (
          <div key={index} className="mx-7 mb-2 border-b-[1px] border-red-600 ">
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
                                    onClick={() => handleLinkClick(subItem.href)}
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
                href={link.href || '/'}
                className="block py-2 px-4 text-sm hover:bg-gray-200"
                onClick={() => handleLinkClick(link.href)}
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
              placeholder="Search products..."


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

export default Header;


