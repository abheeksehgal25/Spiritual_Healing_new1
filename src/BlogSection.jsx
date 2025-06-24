import React from 'react';
import image from './assets/image1.jpg';
import image2 from './assets/image6.jpg'; // Using image1.jpg as a placeholder

const BlogSection = () => {
  return (
    <div className="py-12" style={{ backgroundColor: '#E7EEF6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-[60px] font-medium text-center mb-12 font-cormorant" style={{ color: '#0655A0' }} >Blogs</h2>
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-12">
          {/* Blog Post 1 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[24.3px] hover:card-pop transition-transform">
            <div className="w-full md:w-auto">
              <img src={image} alt="Career & Finances" className="shadow-lg rounded-[10.62px] w-full aspect-[4/3] object-cover md:w-[370px] md:h-[333px] hover:img-zoom" />
            </div>
            <div className="relative flex flex-col justify-center p-6 md:p-[24px] rounded-[24px] w-full md:w-[725px] h-auto md:h-[333px]" style={{ backgroundColor: '#F6FCDB' }}>
              
              <h3 className="mb-8 font-semibold text-3xl md:text-[56px] font-cormorant text-[#0655A0] ">Career & Finances</h3>
              <p className="text-[#2E2E2E] text-lg md:text-[28px] font-lato mb-6">
                Get clarity on your career path and financial decisions. Discover opportunities, overcome obstacles, and achieve your professional goals.
              </p>
              <button className="text-white font-urbanist font-normal text-base md:text-[18px] py-2 px-6  self-start rounded-full hover:btn-glow" style={{ backgroundColor: '#0655A0' }}>
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-[24.3px] hover:card-pop transition-transform">
            <div className="relative flex flex-col justify-center p-6 md:p-[24px] rounded-[24px] w-full md:w-[725px] h-auto md:h-[333px]" style={{ backgroundColor: '#F6FCDB' }}>
              <h3 className="font-semibold text-3xl md:text-[56px] font-cormorant mb-8 text-[#0655A0]" >Personalized Consultation</h3>
              <p className="text-[#2E2E2E] text-lg md:text-[28px] font-lato mb-6">
                Gain clarity and insight into your life's path with a personalized Consultaion. Explore your past, present, and future to make informed decisions.
              </p>
              <button className="text-white font-urbanist font-normal text-base md:text-[18px] py-2 px-6 rounded-full self-start hover:btn-glow" style={{ backgroundColor: '#0655A0' }}>
                LEARN MORE
              </button>
            </div>
            <div className="w-full md:w-auto">
              <img src={image2} alt="Personalized Consultation" className="shadow-lg rounded-[10.62px] w-full aspect-[4/3] object-cover md:w-[370px] md:h-[333px] hover:img-zoom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection; 