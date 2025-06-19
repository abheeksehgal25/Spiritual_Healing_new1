import React from 'react';
import services1 from './assets/services_1.jpg';
import services2 from './assets/services_2.png';
import circle from './assets/circle.svg';

const services = [
  {
    type: 'text',
    title: 'Flexible Scheduling',
    desc: 'My approach blends the ancient wisdom of yoga therapy with us.',
    bg: 'bg-[#DFF384]'
  },
  {
    type: 'image',
    img: services1,
    alt: 'Yoga Session',
  },
  {
    type: 'image',
    img: services2,
    alt: 'Numerology',
  },
  {
    type: 'text',
    title: 'Numerology',
    desc: `You have three numbers that are derived from your birth date. We'll explain what each number means, and how it can assist you with your career.`,
    bg: 'bg-[#DFF384]'
  },
];

const ServicesOffered = () => (
  <section className="w-full flex flex-col items-start py-16 px-2 md:px-8 bg-white">
    <h2 className="text-[#0655A0] text-2xl md:text-[60px]  mb-10 ml-24 font-normal leading-[60px] tracking-[1.2px] ml-8 font-Cormorant Garamond ">Services offered</h2>
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-6 md:gap-10 mt-5">
      {/* Top left */}
      <div className={`rounded-2xl p-8 ${services[0].bg} aspect-square md:min-h-[480px] md:min-w-[480px] transition-transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col items-start justify-center w-full h-full`}>
      
        <h3 className="mb-2 font-normal text-[40px] md:text-[56px] leading-[40px] md:leading-[56px] tracking-[0px] font-Cormorant Garamond">{services[0].title}</h3>

        <p className="mt-5 font-light text-[20px] md:text-[28px] leading-[24px] md:leading-[28px] tracking-[0px] font-Lato">{services[0].desc}</p>
        <img src={circle} alt="" />
        <button className="bg-[#0655A0] hover:bg-blue-800 text-white  md:text-[18px] px-5 md:px-7 py-3 rounded-full shadow-lg transition font-bold  leading-[24px] tracking-[2px] text-center uppercase font-urbanist">
            CONTACT US
          </button>
      </div>
      {/* Top right */}
      <div className="rounded-2xl overflow-hidden aspect-square md:min-h-[380px] md:min-w-[380px] transition-transform hover:scale-105 hover:shadow-xl cursor-pointer w-full h-full flex items-center justify-center">
        <img src={services[1].img} alt={services[1].alt} className="object-cover w-full h-full" />
      </div>
      {/* Bottom left */}
      <div className="rounded-2xl overflow-hidden aspect-square md:min-h-[380px] md:min-w-[380px] transition-transform hover:scale-105 hover:shadow-xl cursor-pointer w-full h-full flex items-center justify-center">
        <img src={services[2].img} alt={services[2].alt} className="object-cover w-full h-full" />
      </div>
      {/* Bottom right */}
      <div className={`rounded-2xl p-8 ${services[3].bg} aspect-square md:min-h-[380px] md:min-w-[380px] transition-transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col items-start justify-center w-full h-full`}>
        <h3 className="mb-2 font-normal text-[40px] md:text-[56px] leading-[40px] md:leading-[56px] tracking-[0px] font-Cormorant Garamond">{services[3].title}</h3>
        
        <p className="mt-5 font-light text-[20px] md:text-[28px] leading-[24px] md:leading-[28px] tracking-[0px] font-Lato">{services[3].desc}</p><img src={circle} alt="" />
         <button className="bg-[#0655A0] hover:bg-blue-800 text-white  md:text-[18px] px-5 md:px-7 py-3 rounded-full shadow-lg transition font-bold  leading-[24px] tracking-[2px] text-center uppercase font-Urbanist">
            CONTACT US
          </button>
      </div>
    </div>
  </section>
);

export default ServicesOffered; 