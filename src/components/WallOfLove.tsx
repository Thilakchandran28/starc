// src/App.tsx
import React from 'react';
import vector from "../assests/Vector.svg"
// --- TestimonialCard Component ---
interface TestimonialCardProps {
   id: number;
  name: string;
  handle: string;
  content: string;
  time: string;
  date: string;
}

const testimonials: TestimonialCardProps[] = [
 {
    id: 1,
    name: 'Esther Howard',
    handle: '@totallyrealperson', // Changed to match your first image
    content:
      'Pharetra pharetra massa massa ultricies. Accumsan sit amet nulla facilisi morbi. Integer eget aliquet nibh praesent tristique magna sit amet.',
    time: '12:15 PM',
    date: 'May 19, 2009',
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    handle: '@totallyrealperson', // Changed to match your first image
    content:
      'Magna fermentum iaculis eu non diam phasellus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.',
    time: '12:15 PM',
    date: 'May 19, 2009',
  },
  {
    id: 3,
    name: 'Wade Warren',
    handle: '@totallyrealperson', // Changed to match your first image
    content:
      'Porttitor rhoncus dolor purus non. Varius duis at consectetur leo a diam sollicitudin tempor id.',
    time: '12:15 PM',
    date: 'May 19, 2009',
  },
  {
    id: 4,
    name: 'Jacob Jones',
    handle: '@totallyrealperson', // Changed to match your first image
    content:
      'Aliquam faucibus purus in massa tempor. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit.',
    time: '12:15 PM',
    date: 'May 19, 2009',
  },
  {
    id: 5,
    name: 'Courtney Henry',
    handle: '@totallyrealperson', // Changed to match your first image
    content:
      'Nunc sed velit dignissim sodales ut eu sem integer. Scelerisque varius morbi enim nunc faucibus. Mi sit amet mauris commodo quis.',
    time: '12:15 PM',
    date: 'May 19, 2009',
  },
  {
    id: 6,
    name: 'Darrell Steward',
    handle: '@totallyrealperson', // Changed to match your first image
    content:
      'Donec et scelerisque quam. Aliquam varius et sapien a pharetra. Maecenas auctor, augue finibus rhoncus, orci lorem ultricies eli.',
    time: '12:15 PM',
    date: 'May 19, 2009',
  },
];

const WallOfLove: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Wall of love</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-400 p-6 rounded-lg shadow-md flex flex-col justify-between"
              style={{ minHeight: '280px', minWidth: '320px' }} // Approximate height and width based on the image
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {/* You can add a profile picture here if desired */}
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-semibold text-lg mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.handle}</p>
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
                <img  src={vector}/>
              </div>
              <p className="text-gray-700 leading-relaxed flex-grow mb-4">{testimonial.content}</p>
              <div className="text-xs text-gray-500 mt-auto">
                {testimonial.time} - {testimonial.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;