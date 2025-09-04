import React, { useEffect, useState } from 'react';

const WhyFluxDigital = () => {
  const [animated, setAnimated] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    team: 0,
    projects: 0
  });

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation
  useEffect(() => {
    if (animated) {
      const duration = 1500;
      const steps = 60;
      const increment = {
        years: 8 / steps,
        team: 20 / steps,
        projects: 100 / steps
      };

      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCounters({
          years: Math.min(8, Math.ceil(increment.years * step)),
          team: Math.min(120, Math.ceil(increment.team * step)),
          projects: Math.min(500, Math.ceil(increment.projects * step))
        });
        if (step >= steps) clearInterval(interval);
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [animated]);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100 blur-3xl transition-all duration-1000 ${animated ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-100 blur-3xl transition-all duration-1000 delay-300 ${animated ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Headline */}
        <div className={`text-center mb-16 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-5xl   font-bold text-gray-900 mb-4">
            Why <span className=" ">Beyond Solutions</span>?
          </p>
          <p className=" text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            We blend strategy, design, and technology to create digital experiences that drive real business results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left content */}
      <div className={`lg:w-1/2 transition-all duration-700 delay-150 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="space-y-10">
    {[
      {
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: "Future-Focused Approach",
        description: "We build digital solutions that evolve with your business, using cutting-edge technologies designed for scalability.",
        bgColor: "bg-blue-50",
        hoverBgColor: "group-hover:bg-blue-100",
        iconColor: "text-blue-600"
      },
      {
        icon: (
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: "Security First",
        description: "Every project is built with enterprise-grade security protocols from day one.",
        bgColor: "bg-purple-50",
        hoverBgColor: "group-hover:bg-purple-100",
        iconColor: "text-purple-600"
      },
      {
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        title: "Cloud-Native Solutions",
        description: "We architect systems for the modern cloud environment, ensuring maximum performance and reliability.",
        bgColor: "bg-blue-50",
        hoverBgColor: "group-hover:bg-blue-100",
        iconColor: "text-blue-600"
      }
    ].map((feature, index) => (
      <div 
        key={index}
        className="group border hover:scale-[1.02] transition-all   border-gray-300 duration-300 p-6 hover:bg-gray-50 rounded-xl"
      >
        <div className="flex items-start mb-4  ">
          <div className={`w-12 h-12 rounded-lg  flex items-center justify-center mr-5   transition-colors`}>
            {feature.icon}
          </div>
          <div>
            <h3 className=" text-lg md:text-2xl font-bold text-gray-600 mb-2 ">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

          {/* Right stats */}
          <div className={`lg:w-1/2 transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-2 gap-6 mb-10">
  {[
    {
      value: counters.years,
      suffix: "+",
      label: "Years in Digital Innovation",
      color: "blue",
      hoverBorder: "hover:border-blue-200"
    },
    {
      value: counters.team,
      suffix: "+",
      label: "Expert Team Members",
      color: "purple",
      hoverBorder: "hover:border-purple-200"
    },
    {
      value: counters.projects,
      suffix: "+",
      label: "Successful Projects",
      color: "blue",
      hoverBorder: "hover:border-blue-200"
    },
    {
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      color: "purple",
      hoverBorder: "hover:border-purple-200"
    }
  ].map((stat, index) => (
    <div 
      key={index}
      className={`p-5 rounded-xl   bg-white border border-gray-300 ${stat.hoverBorder} transition-colors`}
    >
      <div className={` text-lg md:text-4xl  font-bold  text-gray-500 mb-2`}>
        {stat.value}{stat.suffix}
      </div>
      <div className="text-gray-600 text-sm font-medium">
        {stat.label}
      </div>
    </div>
  ))}
</div>

              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h4 className=" text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">Our Methodology</h4>
                <div className="space-y-4">
                  {[
                    { label: 'Discovery & Strategy', width: '100%' },
                    { label: 'User-Centered Design', width: '100%' },
                    { label: 'Agile Development', width: '100%' },
                    { label: 'Quality Assurance', width: '100%' }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-cyan-800 mb-1">
                        <span className=' '>{item.label}</span>
                        <span>{item.width}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 delay-${300 + index * 200}`}
                          style={{ 
                            width: animated ? item.width : '0%',
                            transitionDelay: `${300 + index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFluxDigital;