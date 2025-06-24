import React from 'react';
import left from './assets/left.png';
import right from './assets/right.png';

const testimonials = [
  {
    name: 'Devshree annad',
    role: 'Corporate lawyer',
    image: 'https://mastdp.com/img/alone-girl-dp/alone-girl-pic-download.webp', 
    text: 'My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.',
    bgColor: 'bg-[#E2F4FA]',
    textColor: 'text-[#565656]',
    borderColor: 'border-[#E7EEF680]',
  },
  {
    name: 'Devshree annad',
    role: 'Corporate lawyer',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s",
    text: 'My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.',
    bgColor: 'bg-[#F9FDDC]',
    textColor: 'text-[#565656]',
    borderColor: 'border-[#F9FDDC]',
  },
  {
    name: 'Devshree annad',
    role: 'Corporate lawyer',
    image: 'https://photosrush.net/wp-content/uploads/cute-profile-pic-beautiful-girl-simple-indian-1.jpg',
    text: 'My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.',
    bgColor: 'bg-[#E2F4FA]',
    textColor: 'text-[#565656]',
    borderColor: 'border-[#F3F7FB]',
  },
];

const TestimonialSection = () => {
  return (
    <div className="px-4 py-16 w-full  bg-white animate-fadeInUp">
      {/* Heading + Arrows in one flex row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="ml-4 md:ml-24">
          <h2 className="text-[35px] md:text-[60px] font-cormorant text-[#0655A0] font-medium text-start">
            People finding inner peace
          </h2>
          <p className="text-[#0655A0] mt-9 text-start text-base md:text-[20px]">
            Let's find out how my clients broke those emotional barrier with my spiritual therapy
          </p>
        </div>
        {/* Arrows */}
        <div className="hidden md:flex gap-4 mt-2 md:mt-0 self-end md:self-center mr-4 md:mr-24">
          <button className=" text-xl border-outline-[#8C6E63] hover:bg-gray-100 flex items-center justify-center"><img src={left} alt="left" className="w-12 h-12" /></button>
          <button className=" text-xl border-outline-[#8C6E63] hover:bg-gray-100 flex items-center justify-center"><img src={right} alt="right" className="w-12 h-12" /></button>
        </div>
      </div>
      <div className="flex mt-14 justify-center my-6 mb-16 w-full">
        <hr className="border-t border-[#B57374] mx-8 md:mx-28 w-auto flex-1" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-h-[300px] gap-6 max-w-6xl sm:min-h-[400px] md:min-h-[350px] mb-10 px-4 mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`${t.bgColor} border ${t.borderColor} p-6 rounded-b-full rounded-t-lg shadow hover:shadow-lg transition duration-300 h-full flex min-h-[300px] md:min-h-[300px] overflow-hidden flex-col items-center hover:card-pop`}
          >
            {/* Image + Name + Role */}
            <div className="flex items-center gap-4 mb-4">
              <img src={t.image} alt="avatar" className="w-16 h-16 rounded-full shrink-0 hover:img-zoom" />
              <div className="text-left">
                <h4 className="text-[#0655A0] font-medium text-[17.38px] leading-[17.66px] tracking-[0px] align-middle font-lato">{t.name}</h4>
                <p className=" font-light text-[#A44C52] text-[13.52px] leading-[17.66px] tracking-[0px] align-middle font-lato mt-2">{t.role}</p>
              </div>
            </div>
            {/* Text */}
            <p className="text-[#565656] text-center flex-wrap font-normal text-[15.82px] leading-[23.17px] tracking-[0px] align-middle font-lato mt-4">{t.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="mt-4 md:mt-0 bg-[#0655A0] text-white px-16 py-2 rounded-full shadow-md hover:shadow-lg transition font-normal text-[15.68px] font-inter hover:btn-glow">
          View all Testimonials
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection; 