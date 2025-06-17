 "use client"
import { words } from '@/constants/page'
import React from 'react'
import Heromodel from './sections/Heromodel'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { AppShowcase } from './sections/ShowcaseSection'
import { AnimatedCounter } from './sections/AnimatedCounter'
 

export default function Heropage() {

useGSAP(()=>{
    gsap.fromTo('.hero-text .p-anime',

        {
y:50,
opacity:0
        },
        {
y:0,
opacity:1,
stagger:0.2,
duration:1,
ease:'power2.inOut'
        }
    )
})


    return (

        <>


            <section id='hero' className=' relative overflow-hidden'>

                <div className="absolute top-0 left-0 z-10">
                    <img src="/images/bg.png" alt="background" />
                </div>

                <div className="hero-layout">
                    {/* {left section hero content } */}
                    <header className=' flex flex-col justify-center md:w-full w-screen px-5 md:px-20'>
                        <div className="flex  flex-col gap-7">
                            <div className="hero-text">
                                <p className='p-anime'> Shaping

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
                    </header>

                    {/* {right section 3d model } */}


                    <figure> 
                 <div className="hero-3d-layout   ">

<Heromodel/>

                 </div>
                    </figure>

                </div>
<AnimatedCounter/>

            </section>


            <AppShowcase/>

            
            
        </>
    )
}
