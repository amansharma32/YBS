import React from 'react'

export default function OurStorySection() {
  return (
    <>
    
    

        <div className="bg-gray-900 relative z-1  py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex flex-col-reverse  md:flex-row  gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6 w-full text-center md:text-left md:w-6/12">
            <h2 className="text-6xl font-thin font-sans text-white ">
              Our Story
            </h2>
            
            <p className="text-3xl font-thin font-sans  text-white">
              In a world brimming with possibilities, we sprouted, seizing our destiny to create an extraordinary narrative - a tale that encapsulates laughter, tears, challenges, and triumphs.
            </p>

         <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">
       About Us

        </span>
    </span>
</a>
        
          </div>
          
          {/* Video Side */}
          <div className="relative w-full md:w-6/12  h-96 rounded-xl overflow-hidden shadow-lg  ">
          
            <video
              className="w-full h-full  object-center object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
            >
              <source src="https://videos.pexels.com/video-files/18069473/18069473-uhd_1440_2560_24fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play button overlay */}
            
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
