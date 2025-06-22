import React from 'react';
import bg from './assets/background.png';
import avatar from './assets/dummy.jpg';
import avatar_1 from './assets/dummy.jpg';
import avatar_2 from './assets/dummy.jpg';
import bigOne from './assets/dummy.jpg';

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
    <section
      className="relative w-full min-h-[110vh] h-full flex flex-col items-start justify-start overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Mobile Layout */}
      <div className="flex flex-col items-center space-y-24 md:hidden relative z-10 w-full px-4 pt-10 ml-[1.5px]">
        <div className="w-full">
          <span className="text-white font-normal text-base leading-6 tracking-[0px] font-inter mb-3 block">Gain clarity .</span>
          <h1 className="text-white font-cormorant text-3xl sm:text-4xl font-normal leading-tight tracking-[2px] text-left">
            Infinite power<br />of Numerology
          </h1>
        </div>

        <div className="w-full">
          <button className="flex md:hidden items-center bg-[#0655A0] hover:bg-blue-800 text-white font-semibold px-5 sm:px-7 py-3 rounded-full shadow-lg transition text-base sm:text-[18px] leading-[24px] tracking-[2px] text-center uppercase font-urbanist w-full max-w-xl mx-auto">
            START DOING TODAY
            <span className="ml-3 bg-white/20 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        <div className="w-full">
          <div className="flex flex-col bg-white/10 rounded-3xl px-6 py-4 backdrop-blur-md shadow-2xl w-full max-w-xl mx-auto min-h-[90px]">
            <div className="flex items-center mb-4">
              <div className="flex -space-x-4 mr-4">
                <img src={avatar} alt="user1" className="h-8 w-8 rounded-full object-cover" />
                <img src={avatar_1} alt="user2" className="h-8 w-8 rounded-full object-cover -ml-4" />
                <img src={avatar_2} alt="user3" className="h-8 w-8 rounded-full object-cover -ml-4" />
              </div>
              <span className="text-white font-inter font-normal rounded-full px-4 py-1 text-xs mr-4 backdrop-blur-md">Plus 2k</span>
              <span className="text-white font-inter font-normal text-xs">Trusted</span>
            </div>
            <div className="text-[#565656] font-lato text-xs font-light leading-snug max-w-[210px]">
              My approach blends the ancient wisdom of yoga therapy with
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="w-full">
          <div className="flex flex-col items-center gap-4 px-2">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-4 flex items-center w-full max-w-xl h-auto min-h-[110px] shadow-2xl"
              >
                <img src={review.avatar} alt="avatar" className="h-12 w-12 rounded-2xl object-cover mr-4" />
                <div className="flex flex-col text-white text-xs font-lato font-light">
                  <span className="mb-2 font-light text-[10px] leading-[15px] tracking-[0px] font-urbanist">{review.text}</span>
                  <span className="font-light text-[10px] leading-[15px] tracking-[0px] font-urbanist">{review.text2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block h-full relative z-10">
        <div className="max-w-7xl mx-auto px-4 pt-16 ml-24 flex flex-col items-start">
          <span className="text-white font-normal text-base leading-6 tracking-[0px] font-inter mb-3">Gain clarity .</span>
          <h1 className="text-white font-cormorant text-[90px] font-normal leading-[90px] tracking-[2px] text-left">
            Infinite power<br />of Numerology
          </h1>
        </div>
      </div>

      {/* Button with ml-24 for alignment */}
      <div className="hidden md:flex flex-col items-start justify-center absolute top-1/2 left-0 ml-24 z-20 transform -translate-y-1/2 pointer-events-none">
        <button className="flex items-center bg-[#0655A0] hover:bg-blue-800 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition text-[18px] leading-[24px] tracking-[2px] text-center uppercase font-urbanist pointer-events-auto">
          START DOING TODAY
          <span className="ml-3 bg-white/20 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>

      {/* Badge with ml-24 for alignment */}
      <div className="hidden md:block absolute bottom-8 left-0 ml-24 z-10">
        <div className="flex flex-col bg-white/10 rounded-3xl px-8 py-6 backdrop-blur-md shadow-2xl min-w-[370px] max-w-[420px] min-h-[110px]">
          <div className="flex items-center mb-4">
            <div className="flex -space-x-4 mr-6">
              <img src={avatar} alt="user1" className="h-9 w-11 rounded-full object-cover" />
              <img src={avatar_1} alt="user2" className="h-9 w-11 rounded-full object-cover -ml-6" />
              <img src={avatar_2} alt="user3" className="h-9 w-11 rounded-full object-cover -ml-6" />
            </div>
            <span className="text-white font-inter font-normal rounded-full px-6 py-2 text-[14px] mr-6 backdrop-blur-md">Plus 2k</span>
            <span className="text-white font-inter font-normal text-[14px]">Trusted</span>
          </div>
          <div className="text-[#565656] font-lato text-[14px] font-light leading-snug max-w-[210px]">
            My approach blends the ancient wisdom of yoga therapy with
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-2 right-0 mb-6 mr-6 z-10 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-2">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-4 flex items-center min-w-[300px] max-w-[320px] min-h-[130px] h-[130px] shadow-2xl"
            >
              <img src={review.avatar} alt="avatar" className="h-20 w-20 rounded-2xl object-cover mr-4" />
              <div className="flex flex-col text-white text-base font-lato font-light">
                <span className="mb-2 font-light text-[12px] leading-[15px] tracking-[0px] font-urbanist">{review.text}</span>
                <span className="font-light text-[12px] leading-[15px] tracking-[0px] font-urbanist">{review.text2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumerologyHero;
