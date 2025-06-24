import React from 'react';

const Journey = () => {
  return (
    <div className="flex items-center justify-center w-full bg-white px-4 py-12">
      <div className="bg-[#F6FCDB] rounded-3xl md:rounded-[200px] w-full max-w-7xl text-center py-12 md:py-16 px-4 md:px-20 shadow-md">
        <h1 className="text-[35px] md:text-[60px] font-cormorant text-[#0655A0] mb-8 md:mb-14 font-medium leading-tight md:leading-[56px] tracking-wide md:tracking-[2px]">
          Your Healing Journey Starts Here
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Primary Button */}
          <a href="https://wa.me/7017094225" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#0655A0] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#054a8a] transition flex items-center space-x-2 w-full sm:w-auto justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.35-1l-4.65 1 1.25-3A8.996 8.996 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Let's Talk</span>
            </button>
          </a>
          <span className="text-[#0655A0] font-medium">Or</span>
          {/* Outline Button */}
          <a href="https://wa.me/7017094225" target="_blank" rel="noopener noreferrer">
            <button className="border border-[#0655A0] text-[#0655A0] px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-[#e8f0ff] transition flex items-center space-x-2 w-full sm:w-auto justify-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfaSQceUW-9TY2Sr0F9j6QR871C47BgmkCA&s" alt="" className="w-4 h-4" /> <span>Contact Us</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Journey; 