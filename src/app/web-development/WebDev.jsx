"use client"
import React from 'react';

// Main App component as required for the immersive
export default function WebDev() {
  // Define the content data for Flux Digital's web development services
  const webDevelopmentContent = [
    {
      id: 1,
      title: "Web Development Services to Make Your Project a Digital Stand-Out",
      paragraphs: [
        "Web development services at Flux Digital empower businesses to build cutting-edge web-based software, ensuring an exceptional digital user experience. As a leading web development partner, we combine a team of seasoned experts, advanced technologies, and innovative tools, adhering to the latest industry trends to form the cornerstone of your business’s online growth.",
        "At Flux Digital, we meticulously focus on every facet of web development, guaranteeing a seamless and efficient process for your business. From crafting responsive designs and ensuring improved performance to building robust functionality, we specialize in delivering custom web development solutions for stunning, user-friendly, and highly engaging websites, eCommerce storefronts, web applications, CMS, SaaS platforms, and enterprise applications. Our goal is to ensure your online presence not only stands out but truly shines in the digital landscape."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased overflow-hidden">
      {/* Main container with a more complex background gradient and shape */}
      <div
        className="relative isolate py-20 sm:py-28 lg:py-36
                   bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100
                   shadow-xl rounded-b-[4rem] sm:rounded-b-[8rem] lg:rounded-b-[12rem]
                   transform skew-y-1 -translate-y-4" // Subtle skew and translation for dynamic look
      >
        {/* Inner content wrapper to counteract the skew and maintain readability */}
        <div className="transform -skew-y-1 translate-y-4">
          {/* Abstract background shapes for visual flair */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-300 to-blue-300 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10"> {/* Added padding to main content */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-12">
              {/* Image Section - Enhanced with more complex styling */}
              <div className="lg:pr-8 relative"> {/* Increased padding, added relative for absolute positioning */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/10 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"> {/* Slight rotation and hover effect */}
                  <img
                    src="https://placehold.co/900x700/06B6D4/FFFFFF?text=Flux+Digital+Web+Dev" // Larger placeholder
                    alt="Web Development Services by Flux Digital"
                    className="w-full object-cover rounded-3xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/900x700/A7F3D0/06B6D4?text=Image+Unavailable";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-800/60 to-transparent rounded-3xl"></div> {/* Darker cyan overlay */}
                  <p className="absolute bottom-6 left-6 text-white text-xl font-bold drop-shadow-lg">
                    Crafting Digital Experiences with Flux Digital
                  </p>
                </div>
                {/* Decorative element near the image */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              </div>

              {/* Content Section - More structured and visually appealing */}
              <div className="lg:max-w-lg bg-white p-8 rounded-3xl shadow-xl border border-cyan-100 relative z-10"> {/* Added background, padding, shadow, border */}
                <h2 className="text-base font-extrabold leading-7 text-cyan-600 uppercase tracking-wide">
                  Web Development
                </h2>
                {webDevelopmentContent.map((section) => (
                  <React.Fragment key={section.id}>
                    <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight"> {/* Larger, bolder title */}
                      {section.title}
                    </p>
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index} className={`mt-${index === 0 ? '6' : '4'} text-lg leading-8 text-gray-700`}>
                        {paragraph}
                      </p>
                    ))}
                  </React.Fragment>
                ))}
                <div className="mt-12 flex justify-start"> {/* Centered button on small screens, left on large */}
                  <button
                    type="button"
                    className="rounded-full bg-cyan-600 px-10 py-4 text-xl font-semibold text-white shadow-lg
                               hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600
                               transform transition duration-400 ease-in-out hover:scale-105 hover:shadow-2xl
                               relative overflow-hidden group" // Added group for hover effects
                    onClick={() => alert('Let\'s talk button clicked!')}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10">Let's talk</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Another abstract background shape */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-cyan-300 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
