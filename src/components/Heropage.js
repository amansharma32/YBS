"use client"
import { words } from '@/constants/page'
import React, { useEffect, useRef, useState } from 'react'
 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
 
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact' 
import { CaseStudy } from './sections/CaseStudy'
import OurStorySection from './sections/OurStorySection'


export default function Heropage() {

    useGSAP(() => {
        gsap.fromTo('.hero-text .p-anime',

            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            }
        )
    })

  const slides = [

    {
      id: 1,
      video: 'https://videos.pexels.com/video-files/18069235/18069235-uhd_2560_1440_24fps.mp4',
    }
 
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);


  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;

    // If the user drags left
    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }

    // If the user drags right
    if (diff < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };


    return (

        <>

   <div

          className="relative  w-full h-screen overflow-hidden"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <video
                autoPlay
                loop
                muted
                poster="/mv2.webp"
                playsInline
                type="video/mp4"
                className=" w-full h-full object-cover brightness-[100%]"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                >
                <source src={slide.video} type="video/mp4"/>

                {slide.descriptivetext}

              </video>

  <div className="absolute inset-0  bg-[#0000004d] md:bg-[#0000002d] bg-opacity-50 z-0">
  
  </div>

              <div className="  flex items-center h-screen bg-transparent bg-opacity-40">

                <div className=" text-white   text-center md:text-left  lg:px-16">
                <div className="hero-text">
                                <p className=' MyFont p-anime'> Shaping

                                    <span className=' slide'>
                                        <span className=' wrapper'>
                                            {words.map((word) => (

                                                <span key={word.key} className=' flex items-center md:gap-3 gap-1 pb-2'>

                                                    <img src={word.imgPath} alt={word.text} className=' xl:size-12 size-7 md:p-2 p-1 rounded-full  bg-white-50 ' />

                                                    <span> {word.text} </span>

                                                </span>
                                            ))}
                                        </span>
                                    </span>

                                </p>
                                <p className='p-anime'>Into Real Projects</p>
                                <p className='p-anime'> That Deliver Results</p>
                                <p className=' py-5 text-white-50 relative  z-10 md:text-lg  pointer-events-none'> Hi,  We are Flux Digital, a agency based in india <br /> with passion for all web services. </p>
 
                            </div>
                </div>
              </div>


            </div>
          ))}


          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-5 h-1 rounded-sm ${index === currentSlide ? 'bg-[#FC6C1E]' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
              />
            ))}

          </div>


        </div>


<section className=' bg-black' >

<CaseStudy/>

<OurStorySection/>
            <FeatureCards />

            <LogoShowcase />

            <Experience />

            <TechStack />

            <Testimonials/>
            
            <Contact/>

       
</section>
 
        
 

        </>
    )
}
