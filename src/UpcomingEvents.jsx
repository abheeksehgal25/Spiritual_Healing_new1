import React from 'react';
import event1 from './assets/image1.svg';
import event2 from './assets/image2.svg';
import './App.css'; 

const events = [
  {
    date: '5 July 2025',
    title: 'UnderStanding Different Yoga Styles',
    location: 'Delhi',
    desc: 'Explore the various types of yoga and find the perfect fit for your needs.',
    img: event1,
  },
  {
    date: '5 July 2025',
    title: 'UnderStanding Different Yoga Styles',
    location: 'Delhi',
    desc: 'Explore the various types of yoga and find the perfect fit for your needs.',
    img: event2,
  },
];

const UpcomingEvents = () => (
  <section className="w-full">
    {/* Moving banner heading */}
    <div className="marquee-wrapper bg-white py-8 px-0 md:px-0 mt-8 mb-8">
      <div className="marquee-inner w-full h-full mt-2 mb-2">
        <div className="marquee-content">
          <h2 className="text-[#1661A6] text-4xl md:text-6xl font-cormorant font-medium leading-tight tracking-wide text-left inline-block px-4 md:px-16">
            Comfort, Care, Confidence, Power of Numerology
          </h2>
        </div>
        <div className="marquee-content">
          <h2 className="text-[#1661A6] text-4xl md:text-6xl font-cormorant font-normal leading-tight tracking-wide text-left inline-block px-4 md:px-16">
            Comfort, Care, Confidence, Power of Numerology
          </h2>
        </div>
      </div>
    </div>
    {/* Events section with light blue bg */}
    <div className="w-full bg-[#EAF1F8] py-12 px-4 md:px-16 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-12 max-w-7xl mx-auto w-full">
        {/* Left heading */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 flex-shrink-0 mt-4">
          <h3 className="text-[#1661A6] text-4xl md:text-[60px] font-cormorant font-medium leading-tight text-left">
            Upcoming<br />Events
          </h3>
        </div>
        {/* Event cards */}
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 mb-12">
          {events.map((event, idx) => (
            <div key={idx} className="flex flex-col">
              <img src={event.img} alt={event.title} className="w-full h-64 object-cover rounded-2xl" />
              <div className="p-0 mt-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs text-[#8E8E8E] mb-2">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
                <h4 className="text-[#565656] text-lg md:text-xl font-cormorant font-semibold mb-2">{event.title}</h4>
                <p className="text-[#8E8E8E] text-sm md:text-base font-lato font-light flex-1">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default UpcomingEvents; 