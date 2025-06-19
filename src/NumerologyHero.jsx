import React from 'react';
import bg from './assets/background.png';
import avatar from './assets/avatar.jpg';
import avatar_1 from './assets/avatar_1.jpg';
import avatar_2 from './assets/avatar_2.jpg';
import bigOne from './assets/big_one.jpg';

const reviews = [
  {
    text: 'My approach blends the ancient wisdom of yoga therapy with',
    text2: 'My approach blends the ancient wisdom of yoga therapy with',
    avatar: bigOne,
    name: 'User Name',
  },
  {
    text: 'My approach blends the ancient wisdom of yoga therapy with',
    text2: 'My approach blends the ancient wisdom of yoga therapy with',
    avatar: bigOne,
    name: 'User Name',
  },
 
];

const NumerologyHero = () => {
  return (
    <section className="relative w-full min-h-[110vh] h-full flex flex-col items-start justify-start overflow-hidden" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Mobile: stacked layout with equal gaps */}
      <div className="flex flex-col items-center space-y-24 md:hidden relative z-10 w-full px-4 pt-10">
        {/* Heading and subheading */}
        <div className="w-full">
          <span className="text-white font-normal text-base leading-6 tracking-[0px] font-inter mb-3 block">Gain clarity .</span>
          <h1 className="text-white font-cormorant text-3xl sm:text-4xl font-normal leading-tight tracking-[2px] text-left">Infinite power<br />of Numerology</h1>
        </div>
        {/* CTA Button (mobile only) */}
        <div className="w-full">
          <button className="flex md:hidden items-center bg-[#0655A0] hover:bg-blue-800 text-white font-semibold px-5 sm:px-7 py-3 rounded-full shadow-lg transition text-base sm:text-[18px] leading-[24px] tracking-[2px] text-center uppercase font-urbanist w-full max-w-xl mx-auto">
            START DOING TODAY
            <span className="ml-3 bg-white/20 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </button>
        </div>
        {/* Badge */}
        <div className="w-full">
          <div className="flex flex-col bg-white/10 rounded-3xl px-6 py-4 backdrop-blur-md shadow-2xl w-full max-w-xl mx-auto min-h-[90px]">
            <div className="flex items-center mb-4">
              <div className="flex -space-x-4 mr-4">
                <img src={avatar} alt="user1" className="h-8 w-8 rounded-full object-cover" />
                <img src={avatar_1} alt="user2" className="h-8 w-8 rounded-full object-cover" style={{marginLeft: '-1.5rem'}} />
                <img src={avatar_2} alt="user3" className="h-8 w-8 rounded-full object-cover" style={{marginLeft: '-1.5rem'}} />
              </div>
              <span className="text-white font-inter font-normal rounded-full px-4 py-1 text-xs mr-4 backdrop-blur-md">Plus 2k</span>
              <span className="text-white font-inter font-normal text-xs">Trusted</span>
            </div>
            <div className="text-[#565656] font-lato text-xs font-light leading-snug max-w-[210px]">
              My approach blends the ancient wisdom of yoga therapy with
            </div>
          </div>
        </div>
       {/* Review slider */}
<div className="w-full">
  <div className="flex-1 w-full max-w-xl mx-auto min-h-[90px] overflow-x-auto scrollbar-hide">
    <div className="flex flex-nowrap">
      {reviews.map((review, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-4 flex items-center min-w-[220px] max-w-xs min-h-[90px] h-[90px] mr-4 shadow-2xl"
        >
          <img
            src={review.avatar}
            alt="avatar"
            className="h-12 w-12 rounded-2xl object-cover mr-4"
          />
          <div className="flex flex-col text-white text-xs font-lato font-light">
            <span className="mb-2 font-light text-[10px] leading-[15px] tracking-[0px] align-middle font-urbanist">
              {review.text}
            </span>
            <span className="font-light text-[10px] leading-[15px] tracking-[0px] align-middle font-urbanist">
              {review.text2}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Hide scrollbar for Webkit browsers */}
  <style>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  `}</style>
</div>

        </div>
      
      {/* Desktop: original layout */}
      <div className="hidden md:block w-full h-full relative z-10">
        {/* Top left content */}
        <div className="w-full max-w-7xl mx-auto pt-16 ml-24 flex flex-col items-start">
          <span className="text-white font-normal text-base leading-6 tracking-[0px] font-inter mb-3">Gain clarity .</span>
          <h1 className="text-white font-cormorant text-[90px] font-normal leading-[90px] tracking-[2px] text-left">Infinite power<br />of Numerology</h1>
        </div>
      </div>
      {/* Vertically centered, left-aligned button (desktop only) */}
      <div className="hidden md:flex flex-col items-start justify-center absolute top-1/2 left-0 ml-24 z-20 transform -translate-y-1/2 pointer-events-none">
        <button className="flex items-center bg-[#0655A0] hover:bg-blue-800 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition text-[18px] leading-[24px] tracking-[2px] text-center uppercase font-urbanist pointer-events-auto">
          START DOING TODAY
          <span className="ml-3 bg-white/20 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </button>
      </div>
      {/* Move these outside the .max-w-7xl container so they are truly at the bottom corners */}
      <div className="hidden md:block absolute bottom-8 left-0 ml-24 z-10">
        <div className="flex flex-col bg-white/10 rounded-3xl px-8 py-6 backdrop-blur-md shadow-2xl min-w-[370px] max-w-[420px] min-h-[110px]">
          <div className="flex items-center mb-4">
            <div className="flex -space-x-4 mr-6">
              <img src={avatar} alt="user1" className="h-9 w-11 rounded-full object-cover" />
              <img src={avatar_1} alt="user2" className="h-9 w-11 rounded-full object-cover" style={{marginLeft: '-1.5rem'}} />
              <img src={avatar_2} alt="user3" className="h-9 w-11 rounded-full object-cover" style={{marginLeft: '-1.5rem'}} />
            </div>
            <span className=" text-white font-inter font-normal rounded-full px-6 py-2 text-[14px] mr-6 backdrop-blur-md  ">Plus 2k</span>
            <span className="text-white font-inter font-normal  text-[14px]">Trusted</span>
          </div>
          <div className="text-[#565656] font-lato text-[14px] font-light leading-snug max-w-[210px]">
            My approach blends the ancient wisdom of yoga therapy with
          </div>
        </div>
      </div>
      {/* Review slider at bottom right */}
      <div className="hidden md:block absolute bottom-8 right-0 mr-24 z-10 min-w-[370px] max-w-[420px] min-h-[110px] overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex" style={{ height: '100%' }}>
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-3xl p-4 flex items-center min-w-[300px] max-w-[320px] min-h-[130px] h-[130px] mr-4 shadow-2xl">
              <img src={review.avatar} alt="avatar" className="h-20 w-20 rounded-2xl object-cover mr-4" />
              <div className="flex flex-col text-white text-base font-lato font-light">
                <span className="mb-2 font-light text-[12px] leading-[15px] tracking-[0px] align-middle font-urbanist">{review.text}</span>
                <span className='font-light text-[12px] leading-[15px] tracking-[0px] align-middle font-urbanist'>{review.text2}</span>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
};

export default NumerologyHero; 