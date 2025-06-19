import React, { useEffect, useState } from 'react';
import first from './assets/first.jpg';
import second from './assets/second.jpg';
import third from './assets/third.jpg';

const images = [first, second, third];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[120vh] min-h-[700px] -z-10">
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              className="w-screen h-full object-cover flex-shrink-0"
              draggable="false"
            />
          ))}
        </div>
        {/* Optional: Overlay for darkening images for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none" />
      </div>
    </div>
  );
};

export default Slider; 