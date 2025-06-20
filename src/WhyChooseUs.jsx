import React from 'react';
import calendar from './assets/calendar.png';
import profile from './assets/profile.png';
import people from './assets/people.png';
import plus from './assets/plus.png';

const cards = [
  {
    icon: calendar,
    title: 'Flexible Scheduling',
    desc: 'We offer Flexible scheduling options to fit you busy life style.',
    bg: 'bg-[rgba(142,213,235,0.25)]'
  },
  {
    icon: profile,
    title: 'Personalized Programs',
    desc: 'We understand that everyone\'s wellness journey is unique.',
    bg: 'bg-white'
  },
  {
    icon: people,
    title: 'Expert Instructions',
    desc: 'Our team of certified and experienced instructors is dedicated to helping you achive your fitnes.',
    bg: 'bg-[rgba(142,213,235,0.25)]'
  },
  {
    icon: plus,
    title: 'Comprehensive Wellness approach',
    desc: 'Our Services beyond fitness and Yoga.',
    bg: 'bg-white'
  },
];

const WhyChooseUs = () => (
  <section className="w-full flex flex-col items-start py-20 px-2 md:px-8 bg-white">
    <h2 className="text-[#1661A6] text-3xl md:text-[64px] font-cormorant font-medium mb-10 md:mb-16 leading-[40px] md:leading-[72px] tracking-[1.2px] text-left ml-4 md:ml-24">Why Choose Us?</h2>
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ml-0 md:ml-24">
      {cards.map((card, idx) => (
        <div key={idx} className={`rounded-2xl shadow-lg ${card.bg} flex flex-col items-start px-6 py-8 md:px-8 md:py-10 min-h-[340px] md:min-h-[440px] transition-transform hover:-translate-y-2 w-full`}>
          <img src={card.icon} alt={card.title} className="h-16 w-16 mb-6" />
          <h3 className="text-[#1661A6] text-lg md:text-[25.08px] font-cormorant font-semibold mb-4 text-left leading-tight ">{card.title}</h3>
          <p className="text-[#222] text-base md:text-[18.81px] font-lato font-light mb-8 text-left leading-snug">{card.desc}</p>
          <button className="mt-auto bg-[#0655A0] text-white font-inter font-medium rounded-full px-8 py-2 text-[15.68px] shadow hover:bg-[#0d3c6e] transition text-left">Join Now</button>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs; 