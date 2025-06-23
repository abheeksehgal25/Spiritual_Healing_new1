import React from 'react';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';
import image10 from './assets/image1.jpg';

// Row 1 images: 1 to 5
const row1Images = [image1, image2, image3, image4, image5];

// Row 2 images: 6 to 10
const row2Images = [image6, image7, image8, image9, image10];

export default function ImageSlider() {
  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      {/* Row 1 - Left to Right */}
      <div className="w-full whitespace-nowrap animate-marquee">
        <div className="inline-flex">
          {row1Images.concat(row1Images).map((src, index) => (
            <img
              key={`row1-${index}`}
              src={src}
              alt={`row1-img-${index}`}
              className="w-[200px] md:w-[250px] h-auto max-h-[190px] md:max-h-[300px] object-cover mx-2"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="w-full whitespace-nowrap animate-marquee-reverse mt-4">
        <div className="inline-flex">
          {row2Images.concat(row2Images).map((src, index) => (
            <img
              key={`row2-${index}`}
              src={src}
              alt={`row2-img-${index}`}
              className="w-[200px] md:w-[250px] h-auto max-h-[190px] md:max-h-[300px] object-cover mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
