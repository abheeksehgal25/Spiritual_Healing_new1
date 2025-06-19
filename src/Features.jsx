import React from 'react';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

const features = [
  {
    icon: icon1,
    number: '1000+',
    label: 'Clients',
  },
  {
    icon: icon2,
    number: '100+',
    label: 'Numerology sessions',
  },
  {
    icon: icon3,
    number: '120+',
    label: 'Yoga Camps',
  },
  {
    icon: icon4,
    number: '12+',
    label: 'Experience',
  },
];

const Features = () => (
  <section className="w-full flex flex-col items-center py-16 px-2 md:px-8 bg-transparent">
    <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center md:space-x-16 gap-6 md:gap-0">
      {features.map((f, idx) => (
        <div key={idx} className="flex flex-col items-center text-center py-6 flex-1 w-full">
          <img src={f.icon} alt={f.label} className="h-20 w-20 mb-4 rounded-full bg-[#F5F6F4]" />
          <div className="text-4xl md:text-[56px]  text-[#0655A0] mb-2 font-normal  leading-[56px] tracking-[0.38px]   font-urbanist">{f.number}</div>
          <div className="text-[#0655A0] text-lg md:text-[32px]  font-light  leading-[32px] tracking-[0.38px] font-cormorant mt-2">{f.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Features; 