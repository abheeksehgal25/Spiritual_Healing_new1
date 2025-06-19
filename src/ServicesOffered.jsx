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
  <section className="w-full flex flex-col items-start py-16 px-4 md:px-8 bg-white relative overflow-hidden">
  {/* Large Decorative Circle */}
  <div className="hidden md:block absolute -top-32 -right-32 w-[600px] h-[600px] bg-white bg-no-repeat bg-cover opacity-20 z-0"></div>

  <h2 className="text-[#0655A0] text-2xl md:text-[80px] mb-10 ml-8 md:ml-24 font-normal leading-[60px] tracking-[1.2px] font-cormorant relative z-10">
    Services offered
  </h2>

  <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-6 md:gap-10 mt-5 relative z-10">
    {/* Top left Card */}
    <div className={`relative rounded-2xl p-8 ${services[0].bg} transition-transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col items-start justify-center w-full h-full aspect-square md:min-h-[480px] md:min-w-[480px]`}>
      <div className='bg-[#E7F6A0] justify-end px-20 py-20 rounded-full'></div>
      <h3 className="mb-2 font-normal text-[40px] md:text-[56px] leading-[40px] md:leading-[56px] tracking-[0px] font-cormorant">{services[0].title}</h3>
      <p className="mt-5 font-light text-[20px] md:text-[28px] leading-[24px] md:leading-[28px] tracking-[0px] font-lato">{services[0].desc}</p>
      <div className='bg-[#E7F6A0] px-10 py-10 rounded-full'></div>
      <a href="https://web.whatsapp.com/">
      <button className="mt-6 bg-[#0655A0] hover:bg-blue-800 text-white md:text-[18px] px-5 md:px-7 py-3 rounded-full shadow-lg transition font-bold leading-[24px] tracking-[2px] text-center uppercase font-urbanist">
        CONTACT US
      </button> </a>
    </div>

    {/* Top right Image with overlay */}
    <div className="relative rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl cursor-pointer w-full h-full aspect-square md:min-h-[380px] md:min-w-[380px]">
      <img src={services[1].img} alt={services[1].alt} className="object-cover w-full h-full mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    {/* Bottom left Image with overlay */}
    <div className="relative rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl cursor-pointer w-full h-full aspect-square md:min-h-[380px] md:min-w-[380px]">
      <img src={services[2].img} alt={services[2].alt} className="object-cover w-full h-full mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    {/* Bottom right Card */}
    <div className={`relative rounded-2xl p-8 ${services[3].bg} transition-transform hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col items-start justify-center w-full h-full aspect-square md:min-h-[380px] md:min-w-[380px]`}>
      <div className='bg-[#E7F6A0] justify-end px-20 py-20 rounded-full'></div>
      <h3 className="mb-2 font-normal text-[40px] md:text-[56px] leading-[40px] md:leading-[56px] tracking-[0px] font-cormorant">{services[3].title}</h3>
      
      <p className="mt-5 font-light text-[20px] md:text-[28px] leading-[24px] md:leading-[28px] tracking-[0px] font-lato">{services[3].desc}</p>
      <div className='bg-[#E7F6A0] px-10 py-10 rounded-full'></div>
      <a href="https://web.whatsapp.com/">
      <button className="mt-6 bg-[#0655A0] hover:bg-blue-800 text-white md:text-[18px] px-5 md:px-7 py-3 rounded-full shadow-lg transition font-bold leading-[24px] tracking-[2px] text-center uppercase font-urbanist">
        CONTACT US
      </button></a>
    </div>
  </div>
</section>

);

export default ServicesOffered; 