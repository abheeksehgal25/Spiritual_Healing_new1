import React from 'react';
import image from './assets/image1.jpg';
import image2 from './assets/image6.jpg'; // Using image1.jpg as a placeholder

const BlogSection = () => {
  return (
    <div className="py-12" style={{ backgroundColor: '#E7EEF6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[60px] font-semibold text-center mb-12 font-cormorant" style={{ color: '#0655A0' }} >Blogs</h2>
        <div className="grid grid-cols-1 gap-y-12">
          {/* Blog Post 1 */}
          <div className="flex flex-col md:flex-row items-center justify-center" style={{ gap: '24.3px' }}>
            <div>
              <img src={image} alt="Career & Finances" className="shadow-lg" style={{ width: '370px', height: '333px', borderRadius: '10.62px' }} />
            </div>
            <div className="relative flex flex-col justify-center" style={{ width: '725px', height: '333px', backgroundColor: '#DFF384', borderRadius: '24px', padding: '24px' }}>
              <h3 className=" mb-4 font-semibold text-[56px] font-cormorant">Career & Finances</h3>
              <p className="text-[#2E2E2E] text-[28px] font-lato mb-6">
                Get clarity on your career path and financial decisions. Discover opportunities, overcome obstacles, and achieve your professional goals.
              </p>
              <button className="text-white font-urbanist font-bold text-[18px] py-2 px-6 rounded-lg self-start" style={{ backgroundColor: '#0655A0' }}>
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="flex flex-col md:flex-row items-center justify-center" style={{ gap: '24.3px' }}>
            <div className="relative flex flex-col justify-center" style={{ width: '725px', height: '333px', backgroundColor: '#DFF384', borderRadius: '24px', padding: '24px' }}>
              <h3 className="font-semibold text-[56px] font-cormorant mb-4" >Personalized Consultation</h3>
              <p className="text-[#2E2E2E] text-[28px] font-lato mb-6">
                Gain clarity and insight into your life's path with a personalized Consultaion. Explore your past, present, and future to make informed decisions.
              </p>
              <button className="text-white font-urbanist font-bold text-[18px] py-2 px-6 rounded-lg self-start" style={{ backgroundColor: '#0655A0' }}>
                LEARN MORE
              </button>
            </div>
            <div>
              <img src={image2} alt="Personalized Consultation" className="shadow-lg" style={{ width: '370px', height: '333px', borderRadius: '10.62px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection; 