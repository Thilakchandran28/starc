// src/App.tsx
import React from 'react';
import vector from "../Assets/Vector.svg";
import WOLImage1 from '../Assets/icons/WOLImage1.svg'
import WOLImage2 from '../Assets/icons/WOLImage2.svg'
import WOLImage3 from '../Assets/icons/WOLImage3.svg'
import WOLImage4 from '../Assets/icons/WOLImage4.svg'
import WOLImage5 from '../Assets/icons/WOLImage5.svg'
import WOLImage6 from '../Assets/icons/WOLImage6.svg'
import WOLtwitterLogo from '../Assets/icons/WOLtwitterLogo.svg'

// --- TestimonialCard Component ---
interface TestimonialCardProps {
   id: number;
  name: string;
  content: string;
  image:string;
}

const testimonials: TestimonialCardProps[] = [
 {
    id: 1,
    name: 'Esther Howard',
    content:
      'Pharetra pharetra massa massa ultricies. Accumsan sit amet nulla facilisi morbi. Integer eget aliquet nibh praesent tristique magna sit amet.',
    image:WOLImage1
   
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    content:
      'Magna fermentum iaculis eu non diam phasellus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.',
    image:WOLImage2

  
  },
  {
    id: 3,
    name: 'Wade Warren',
    content:
      'Porttitor rhoncus dolor purus non. Varius duis at consectetur leo a diam sollicitudin tempor id.',
    image:WOLImage3

  
  },
  {
    id: 4,
    name: 'Jacob Jones',
    content:
      'Aliquam faucibus purus in massa tempor. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit.',
    image:WOLImage4

   
  },
  {
    id: 5,
    name: 'Courtney Henry',
    content:
      'Nunc sed velit dignissim sodales ut eu sem integer. Scelerisque varius morbi enim nunc faucibus. Mi sit amet mauris commodo quis.',
    image:WOLImage5

  
  },
  {
    id: 6,
    name: 'Darrell Steward',
    content:
      'Donec et scelerisque quam. Aliquam varius et sapien a pharetra. Maecenas auctor, augue finibus rhoncus, orci lorem ultricies eli.',
    image:WOLImage6


  },
];

const WallOfLove: React.FC = () => {
  return (
    <section className="flex justify-center items-center w-full  mt-20 lg:h-[700px] xl:h-[800px] 2xl:h-[900px] 3xl:h-[1000px] ">
      <div className="flex flex-col items-center lg:w-[90%] lg:h-[90%] xl:w-[90%] xl:h-[90%] 2xl:w-[90%] 2xl:h-[90%] 3xl:w-[90%] 3xl:h-[90%] mx-auto px-4 ">
        <h2 className="text-6xl font-mont font-bold text-center mb-12 text-gray-800">Wall of love</h2>
        <div className="flex flex-wrap justify-around lg:w-[80%] lg:h-[75%] xl:w-[80%] xl:h-[75%] 2xl:w-[80%] 2xl:h-[75%] 3xl:w-[75%] 3xl:h-[70%] ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between bg-white lg:h-[45%] lg:w-[32%] xl:h-[45%] xl:w-[32%]  2xl:h-[45%] 2xl:w-[32%] 3xl:h-[45%] 3xl:w-[32%] border border-[#8A63FF] p-6 rounded-2xl"
              // Approximate height and width based on the image
            >
              <div className="flex items-center justify-between mb-4 ">
                <div className="flex items-center">
                  {/* You can add a profile picture here if desired */}
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-semibold text-lg mr-3">
                    <img src={testimonial.image} alt="" />
                  </div>
                 <div className="flex justify-between w-[350px] ">
                   <div>
                    <p className="font-semibold text-black flex flex-col">{testimonial.name} <span className='text-[#82828299] text-sm'>@totallyrealperson</span></p>
                  
                  </div>
                
                 </div>
                </div>
                {/* <svg
                  className="w-6 h-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-6.17-8.084-4.717 8.084H1.858l7.228-8.26L1.233 2.25H4.53L9.58 9.493L13.24 2.25h4.904zM10.875 17.56L9.697 15.656l-5.617-8.73H5.85L11.5 15.424l1.178 1.906l5.617 8.73h-1.18z" />
                </svg> */}
                {/* <img  src={vector}/> */}
              </div>
              <p className="text-black font-mont font-medium leading-relaxed lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-xl flex-grow mb-4">{testimonial.content}</p>
              
              <p className='lg:text-[10px] xl:text-xs text-sm'>12:15 PM . May 19,2009</p>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;