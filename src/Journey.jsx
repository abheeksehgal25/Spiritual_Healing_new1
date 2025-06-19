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
          <button className="bg-[#0655A0] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#054a8a] transition flex items-center space-x-2" >
            <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/all-icons/chat-bubble-oval-left-ellipsis-oauw334st3eo8c42vnivy.png/chat-bubble-oval-left-ellipsis-tsq0e6vl06ox5tpkb9cds.png?_a=DATAdtAAZAA0" alt="" className="w-7 h-7 color-green"/> <span>Let's Talk</span>
            
          </button>
          <span className="text-[#0655A0] font-medium">Or</span>
          {/* Outline Button */}
          <button className="border border-[#0655A0] text-[#0655A0] px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-[#e8f0ff] transition flex items-center space-x-2">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfaSQceUW-9TY2Sr0F9j6QR871C47BgmkCA&s" alt="" className="w-4 h-4" /> <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journey; 