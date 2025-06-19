import React from 'react';

const Journey = () => {
  return (
    <div className="flex items-center justify-center w-full bg-white px-4 py-12">
      <div className="bg-[#F6FCDB] rounded-[200px] w-full max-w-7xl text-center py-16 px-4 md:px-20 shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-[60px] font-cormorant text-[#0655A0] mb-14 font-normal  leading-[56px] tracking-[2px]  ">
          Your Healing Journey Starts Here
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary Button */}
          <button className="bg-[#0655A0] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#054a8a] transition">
            Let's Talk
          </button>
          <span className="text-[#0655A0] font-medium">Or</span>
          {/* Outline Button */}
          <button className="border border-[#0655A0] text-[#0655A0] px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-[#e8f0ff] transition">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journey; 