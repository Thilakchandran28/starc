// src/App.tsx
import React from 'react';
import vector from "../Assets/Vector.svg";
// --- TestimonialCard Component ---
interface TestimonialCardProps {
   id: number;
  name: string;
  content: string;
}

const testimonials: TestimonialCardProps[] = [
 {
    id: 1,
    name: 'Esther Howard',
    content:
      'Pharetra pharetra massa massa ultricies. Accumsan sit amet nulla facilisi morbi. Integer eget aliquet nibh praesent tristique magna sit amet.',
   
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    content:
      'Magna fermentum iaculis eu non diam phasellus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.',
  
  },
  {
    id: 3,
    name: 'Wade Warren',
    content:
      'Porttitor rhoncus dolor purus non. Varius duis at consectetur leo a diam sollicitudin tempor id.',
  
  },
  {
    id: 4,
    name: 'Jacob Jones',
    content:
      'Aliquam faucibus purus in massa tempor. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit.',
   
  },
  {
    id: 5,
    name: 'Courtney Henry',
    content:
      'Nunc sed velit dignissim sodales ut eu sem integer. Scelerisque varius morbi enim nunc faucibus. Mi sit amet mauris commodo quis.',
  
  },
  {
    id: 6,
    name: 'Darrell Steward',
    content:
      'Donec et scelerisque quam. Aliquam varius et sapien a pharetra. Maecenas auctor, augue finibus rhoncus, orci lorem ultricies eli.',

  },
];

const WallOfLove: React.FC = () => {
  return (
    <section className="py-16 xl:p-30  ">
      <div className="container mx-auto px-20 xl:px-40 lg:px-50    ">
        <h2
          className="text-4xl font-mont-regular font-bold text-center font- mb-12 text-black"
          style={{ fontFamily: "mont-regular" }}
        >
          Wall of love
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-[100%] h-[100%] ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-[#8A63FF] p-4 rounded-2xl flex flex-col justify-between lg:p-4"
            >
              <div className="flex items-center justify-between mb-4 ">
                <div className="flex items-center">
                  {/* You can add a profile picture here if desired */}
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-semibold text-lg mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-black"
                      style={{
                        fontFamily: "mont-regular",
                      }}
                    >
                      {testimonial.name}
                    </p>
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
              <p
                className="text-black font-mont font-medium leading-relaxed flex-grow mb-4"
                style={{
                  fontFamily: "mont-regular",
                }}
              >
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;