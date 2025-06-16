import { words } from '@/constants/page'
import React from 'react'
import Heromodel from './Heromodel'

 

export default function Heropage() {




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
                                <p className=''> Shaping

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
                                <p>Into Real Projects</p>
                                <p> That Deliver Results</p>
                                <p className=' text-white-50 relative  z-10 md:text-lg  pointer-events-none'> Hi,  We are Flux Digital, a agency based in india with passion for all web services. </p>


 
                              


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

            </section>

        </>
    )
}
