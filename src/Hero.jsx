import React from 'react';


const testimonials = [
  {
    text: 'My approach blends the ancient wisdom of yoga therapy with',
    author: '-Ajay kushwash',
    title: 'Business owner',
  },
  {
    text: 'My approach blends the ancient wisdom of yoga therapy with',
    author: '-Ajay kushwash',
    title: 'Business owner',
  },
  {
    text: 'My approach blends the ancient wisdom of yoga therapy with',
    author: '-Ajay kushwash',
    title: 'Business owner',
  },
  {
    text: 'My approach blends the ancient wisdom of yoga therapy with',
    author: '-Ajay kushwash',
    title: 'Business owner',
  },
];

const Hero = () => {
  return (
    <section className="absolute top-0 left-0 w-full flex flex-col justify-start min-h-screen px-4 md:pl-12 z-10 max-w-full pt-32 pb-24">
      <div className="max-w-xl">
        <span className="text-white font-normal text-base leading-6 tracking-[0px] font-lato  mb-2 block">Gain clarity .</span>
        <h1 className="text-white font-bold text-4xl md:text-[90px] font-cormorant leading-tight mb-4" style={{fontFamily: 'serif'}}>
          Find Your<br />Inner Peace
        </h1>
        <div className="max-w-md">
          <p className="text-white font-normal leading-6 tracking-[0px] font-inter text-base md:text-base mb-8">
            Join our community and experience the transformative power of yoga, both in-person and online.
          </p>
        </div>
        <div className="flex items-center space-x-3 mb-12 md:mb-20">
          <button className="bg-[#0655A0] hover:bg-blue-800 text-white  md:text-[18px] px-5 md:px-7 py-3 rounded-full shadow-lg transition font-bold  leading-[24px] tracking-[2px] text-center uppercase font-urbanist">
            START DOING TODAY
          </button>
          <button className="bg-[#0655A0] hover:bg-blue-800 text-white rounded-full p-3 shadow-lg transition flex items-center justify-center" style={{width: '48px', height: '48px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
       {/* Testimonials Within Hero Section */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 mt-6 pb-6 w-full justify-start">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white/20 backdrop-blur-md rounded-3xl p-4 md:p-6 text-white w-full md:w-[45%] lg:w-[22%] shadow-lg"
          >
            <p className="mb-4 text-sm font-lato">{t.text}</p>
            <div className="mt-4">
              <div className="text-sm font-lato">{t.author}</div>
              <div className="text-sm font-lato">{t.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero; 