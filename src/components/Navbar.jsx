"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Palette,
  Layout,
  Code,
  BarChart,
  PenTool,
  Box,
  Image,
  BoxSelect,
  Smartphone,
  Globe,
  ShoppingCart,
  Cpu,
  BrainCircuit,
  Server,
  Database,
  CreditCard,
  TestTube2,
  Cloud,
  Shield,
  Search,
  Share2,
  Zap,
  FileText,
  RefreshCw,
  LineChart,
  BrickWallFire,
} from "lucide-react";

// 1. Unified and Enriched Service Data
// All services are merged into one array. Each category has a unique color and description.
const serviceCategories = [
  {
    id: "branding",
    category: "Branding",
    icon: <Palette className="w-6 h-6" />,
    color: "cyan",
    description:
      "Crafting unique brand identities that resonate and endure, from strategy to visual design.",
    items: [
      {
        id: "brand-consulting",
        name: "Brand Consulting",
        icon: <PenTool className="w-4 h-4" />,
      },
      {
        id: "logo-design",
        name: "Logo Design",
        icon: <Box className="w-4 h-4" />,
      },
      {
        id: "product-design",
        name: "Industrial/Product Design",
        icon: <Image className="w-4 h-4" />,
      },
      {
        id: "graphic-design",
        name: "Graphic Design",
        icon: <BoxSelect className="w-4 h-4" />,
      },
      {
        id: "visualisation",
        name: "2D/3D Visualisation",
        icon: <Cpu className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "experience-design",
    category: "Experience Design",
    icon: <Layout className="w-6 h-6" />,
    color: "cyan",
    description:
      "Designing intuitive and beautiful user interfaces that deliver exceptional user experiences.",
    items: [
      {
        id: "ui-ux-design",
        name: "UI/UX Design",
        icon: <Smartphone className="w-4 h-4" />,
      },
      {
        id: "website-design",
        name: "Website Design",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        id: "mobile-experience",
        name: "Mobile Experience",
        icon: <Smartphone className="w-4 h-4" />,
      },
      {
        id: "commerce-experience",
        name: "Commerce Experience",
        icon: <ShoppingCart className="w-4 h-4" />,
      },
      {
        id: "hmi",
        name: "Human Machine Interface",
        icon: <Cpu className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "technology",
    category: "Technology",
    icon: <Code className="w-6 h-6" />,
    color: "cyan",
    description:
      "Building robust, scalable, and secure technology solutions for the modern web.",
    items: [
      {
        id: "ai-ml",
        name: "AI & Machine Learning",
        icon: <BrainCircuit className="w-4 h-4" />,
      },
      {
        id: "web-development",
        name: "Web Development",
        icon: <Code className="w-4 h-4" />,
      },
      {
        id: "mobile-development",
        name: "Mobile App Development",
        icon: <Smartphone className="w-4 h-4" />,
      },
      {
        id: "devops",
        name: "DevOps Consulting",
        icon: <Server className="w-4 h-4" />,
      },
      {
        id: "data-analytics",
        name: "Data & Analytics",
        icon: <Database className="w-4 h-4" />,
      },
      {
        id: "ecommerce",
        name: "E-commerce Platforms",
        icon: <CreditCard className="w-4 h-4" />,
      },
      {
        id: "qa-testing",
        name: "Quality Assurance",
        icon: <TestTube2 className="w-4 h-4" />,
      },
      {
        id: "cloud-service",
        name: "Cloud Service",
        icon: <Cloud  className="w-4 h-4" />,
      },
      {
        id: "cyber-security",
        name: "Cyber Security",
        icon: <BrickWallFire className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "digital-marketing",
    category: "Digital Marketing",
    icon: <BarChart className="w-6 h-6" />,
    color: "cyan",
    description:
      "Driving growth and engagement through data-driven digital marketing strategies.",
    items: [
      {
        id: "seo",
        name: "Search Engine Optimisation",
        icon: <Search className="w-4 h-4" />,
      },
      {
        id: "social-media",
        name: "Social Media Management",
        icon: <Share2 className="w-4 h-4" />,
      },
      {
        id: "performance-marketing",
        name: "Performance Marketing",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        id: "content-marketing",
        name: "Content Marketing",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        id: "marketing-automation",
        name: "Marketing Automation",
        icon: <RefreshCw className="w-4 h-4" />,
      },
      {
        id: "analytics",
        name: "Marketing Analytics",
        icon: <LineChart className="w-4 h-4" />,
      },
    ],
  },
];

// Helper to map colors to Tailwind classes
const colorClasses = {
  cyan: {
    text: "text-cyan-400",
    shadow: "hover:shadow-cyan-500/50",
    border: "border-cyan-500/30",
  },
 
};

import { useRouter } from "next/navigation";

import { Dropdown, DropdownItem } from "flowbite-react";

import Link from "next/link";

import { usePathname } from "next/navigation";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownIndex) => {
    setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const links = [
    { href: "/solutions", text: "Solutions" },

    {
      to: "#",
      text: " Service ",
      dropdownItems: [{ label: "Branding ", href: "/fire-extinguishers" }],
    },

    { text: "Our Works", href: "/" },
    { href: "/", text: "About" },
    { href: "/", text: "Careers" },

    { text: "Contact", href: "/contact-us" },
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
  const [logoSrc, setLogoSrc] = useState("/flux.webp");
  const [logoSize, setLogoSize] = useState({ width: "140", height: "50" });

  useEffect(() => {
    if (pathname) {
      if (pathname === "/") {
        setLogoSrc("/flux.webp");
        setLogoSize({ width: "140", height: "50" });
      } else {
        setLogoSrc("/flux.webp");
        setLogoSize({ width: "140", height: "50" });
      }
    }
  }, [pathname]);

  const menuItems = [
    {
      label: "Solutions",
      href: "/solutions",
    },

    {
      label: "Service",
      dropdown: [],
    },

    {
      label: "Works",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },

    {
      label: "Careers",
      href: "/",
    },

    {
      label: "Contact",
      href: "/contact-us",
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
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const services = [
  //   {
  //     category: "Branding →",
  //     items: [
  //       "Brand Consulting",
  //       "Logo Design",
  //       "Industrial / Product Design",
  //       "Graphic Design",
  //       "2D / 3D Visualisation",
  //     ],
  //   },
  //   {
  //     category: "Experience Design →",
  //     items: [
  //       "UI/UX Design",
  //       "Website Design",
  //       "Mobile Experience",
  //       "Commerce Experience",
  //       "Human Machine Interface",
  //     ],
  //   },
  // ];

  // const services2 = [
  //   {
  //     category: "Technology →",
  //     items: [
  //       "AI & Machine Learning",
  //       "DevOps Consulting",
  //       "Data & Analytics",
  //       "Web Development",
  //       "Mobile App Development",
  //       "E-commerce",
  //       "Quality Assurance & Testing",
  //       "Cloud Services",
  //       "Cyber Security",
  //     ],
  //   },
  //   {
  //     category: "Digital Marketing →",
  //     items: [
  //       "Search Engine Optimisation",
  //       "Social Media Management",
  //       "Performance Marketing",
  //       "Content Marketing",
  //       "Marketing Automation",
  //       "Analytics",
  //     ],
  //   },
  // ];

  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <nav
        className={` fixed  z-90 w-full top-0 transition-all duration-300 ${
          isScrolled
            ? " bg-black text-white shadow-md"
            : " bg-gradient-to-b from-black  text-white"
        }`}
      >
        <div className=" md:mx-2 md:px-4">
          <div className="flex lg:flex-row items-center xl:flex-row justify-between p-4">
            <div className="flex space-x-4">
              <div className="row flex  md:flex-col lg:flex-row ">
                <Link href="/">
                  {pathname && (
                    <img
                      src={logoSrc}
                      width={logoSize.width}
                      height={logoSize.height}
                      alt="Picture"
                      className="md:h-[60px] md:w-auto my-3"
                      style={{
                        width: `${logoSize.width}px`,
                        height: `${logoSize.height}px`,
                      }}
                    />
                  )}
                </Link>
              </div>
            </div>

            <div className="row flex-col  lg:flex lg:px-2  ">
              <div className="col">
                <div className="hidden xl:flex items-center space-x-1">
                  <ul className="flex    flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    {menuItems.map((item, index) => (
                      <li
                        className=" md:px-3 flex items-center justify-center  after:content-[''] after:block after:w-full after:h-[3px] after:bg-gradient-to-r after:from-cyan-500 after:to-blue-700 after:scale-x-0    after:origin-left after:transition-transform after:duration-250 after:ease-in-out  hover:after:scale-x-100 "
                        key={index}
                      >
                        {item.dropdown ? (
                          <Dropdown
                            className="  bg-transparent group"
                            label={
                              <div className="flex items-center   py-2 text-white hover:text-cyan-300 transition-colors duration-300 rounded-lg group-hover:bg-neutral-800/50">
                                <span className="font-medium">Services</span>
                                <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                              </div>
                            }
                            inline
                            arrowIcon={false}
                          >
                            <DropdownItem
                              as="div"
                              className="p-0   focus:bg-transparent"
                            >
                              <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="w-[95vw]     p-0 bg-black/80 backdrop-blur-2xl rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl shadow-black/50"
                                style={{
                                  backgroundImage:
                                    "radial-gradient(circle at top left, rgba(255,255,255,0.03), transparent 30%), radial-gradient(circle at bottom right, rgba(255,255,255,0.03), transparent 30%)",
                                }}
                              >
                                <div className="flex w-full text-white">
                                  {/* Left Panel: Category Selection */}
                                  <div className="w-1/3 border-r border-neutral-800">
                                    <div className="p-6">
                                      <h3 className="text-xl font-bold text-white mb-1">
                                        Our Services
                                      </h3>
                                      <p className="text-sm text-neutral-400">
                                        Select a category to explore.
                                      </p>
                                    </div>
                                    <div className="flex flex-col">
                                      {serviceCategories.map((cat) => (
                                        <button
                                          key={cat.id}
                                          onMouseEnter={() =>
                                            setActiveCategory(cat)
                                          }
                                          className={`flex items-center w-full text-left px-6 py-4 transition-all duration-300 relative ${
                                            activeCategory.id === cat.id
                                              ? "bg-neutral-800/50"
                                              : "hover:bg-neutral-900/50"
                                          }`}
                                        >
                                          {activeCategory.id === cat.id && (
                                            <motion.div
                                              layoutId="activePill"
                                              className={`absolute left-0 top-0 bottom-0 w-1 ${colorClasses[
                                                cat.color
                                              ].text.replace("text", "bg")}`}
                                              transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                              }}
                                            ></motion.div>
                                          )}
                                          <div
                                            className={`mr-4 p-2 rounded-lg bg-neutral-800 ${
                                              colorClasses[cat.color].text
                                            }`}
                                          >
                                            {cat.icon}
                                          </div>
                                          <div>
                                            <p className="font-semibold text-white">
                                              {cat.category}
                                            </p>
                                          </div>
                                          <ArrowRight
                                            className={`ml-auto h-5 w-5 text-neutral-600 transition-all duration-300 ${
                                              activeCategory.id === cat.id
                                                ? "translate-x-0 text-neutral-400"
                                                : "-translate-x-2"
                                            }`}
                                          />
                                        </button>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Right Panel: Active Category Details */}
                                  <div className="w-2/3 p-8">
                                    <AnimatePresence mode="wait">
                                      <motion.div
                                        key={activeCategory.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{
                                          duration: 0.3,
                                          ease: "easeInOut",
                                        }}
                                        className="h-full"
                                      >
                                        <div className="flex items-start mb-6">
                                          <div
                                            className={`p-3 rounded-xl bg-neutral-900 mr-5 ${
                                              colorClasses[activeCategory.color]
                                                .text
                                            }`}
                                          >
                                            {activeCategory.icon}
                                          </div>
                                          <div>
                                            <h2
                                              className={`text-2xl font-bold ${
                                                colorClasses[
                                                  activeCategory.color
                                                ].text
                                              }`}
                                            >
                                              {activeCategory.category}
                                            </h2>
                                            <p className="text-neutral-400 mt-1">
                                              {activeCategory.description}
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          className={`grid grid-cols-2 gap-4 border-t ${
                                            colorClasses[activeCategory.color]
                                              .border
                                          } pt-6`}
                                        >
                                          {activeCategory.items.map((item) => (
                                            <Link
                                              key={item.id}
                                              href={`/services/${activeCategory.id}/${item.id}`}
                                              className={`group flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-neutral-800/80 ${
                                                colorClasses[
                                                  activeCategory.color
                                                ].shadow
                                              }`}
                                            >
                                              <div
                                                className={`mr-4 ${
                                                  colorClasses[
                                                    activeCategory.color
                                                  ].text
                                                }`}
                                              >
                                                {item.icon}
                                              </div>
                                              <span className="text-neutral-200">
                                                {item.name}
                                              </span>
                                              <ArrowRight className="h-4 w-4 ml-auto text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    </AnimatePresence>
                                  </div>
                                </div>
                              </motion.div>
                            </DropdownItem>
                          </Dropdown>
                        ) : (
                          <Link
                            href={item.href || "#"}
                            className=" "
                            onClick={() => handleLinkClick(item.href)}
                          >
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
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mobile-menu xl:hidden  ${
            isMobileMenuOpen
              ? "mobile-menu-open py-2 bg-gray-100 text-black border-red-300 border-b-[1px]"
              : "mobile-menu-closed"
          }`}
        >
          {isMobileMenuOpen &&
            links.map((link, index) => (
              <div
                key={index}
                className="mx-7 mb-2 border-b-[1px] border-red-600 "
              >
                {link.dropdownItems ? (
                  <div>
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleDropdown(index)}
                    >
                      <Link
                        href={link.to || "/"}
                        className="block py-2 px-4 text-sm hover:bg-gray-200"
                      >
                        {link.text}
                      </Link>
                      <div className="transition-transform duration-300 transform">
                        <svg
                          className={`w-4 h-4 ml-2 ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
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
                                    href={dropdownItem.href || "/"}
                                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                  <div className="transition-transform duration-300 transform">
                                    <svg
                                      className={`w-4 h-4 ml-2 ${
                                        nestedDropdown === i ? "rotate-180" : ""
                                      }`}
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
                                    {dropdownItem.dropdownItems.map(
                                      (subItem, j) => (
                                        <Link
                                          key={j}
                                          href={subItem.href || "/"}
                                          className="block py-2 px-4 text-sm hover:bg-gray-200"
                                          onClick={() =>
                                            handleLinkClick(subItem.href)
                                          }
                                        >
                                          {subItem.label}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={dropdownItem.href || "/"}
                                className="block py-2 px-4 text-sm hover:bg-gray-200"
                                onClick={() =>
                                  handleLinkClick(dropdownItem.href)
                                }
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
                    href={link.href || "/"}
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
          <div className="logo-section"></div>

          {showSearch && (
            <div className="search-bar p-5" ref={searchBarRef}>
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search products..."
                className={`search-input ${
                  isScrolled
                    ? " text-black hover:text-black border-black "
                    : " text-black hover:text-black "
                }`}
              />
              {results.length > 0 && (
                <ul
                  className={`search-results ${
                    isScrolled
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
    </>
  );
}

export default Header;
