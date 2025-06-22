import React, { useState } from 'react';
import { Star, Clock, HelpCircle, Plus, Minus } from 'lucide-react'; // All icons from lucide-react

// --- Data Interfaces ---
interface Mentor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  reviews: number;
  image: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// --- Mentor Section Data ---

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Lawerence",
    specialization: "Full Stack Development",
    experience: "10 Years",
    rating: 5,
    reviews: 200,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Sneha Singh",
    specialization: "UI/UX Designing",
    experience: "7 Years",
    rating: 5,
    reviews: 200,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Louis Cahya",
    specialization: "IOT Integration",
    experience: "5 Years",
    rating: 5,
    reviews: 200,
    image: "https://via.placeholder.com/150"
  }
];

// --- FAQ Section Data ---
const faqs: FaqItem[] = [
  {
    id: '1',
    question: 'Why do I need to use a Design System?',
    answer: 'A Design System is a super useful tool for designers. It helps keep designs consistent and makes the design process faster. You can use pre-designed stuff over and over, and it\'s helpful for both new and experienced designers. In short, a Design System is like a designer\'s toolbox for making great-looking and user-friendly designs.',
  },
  {
    id: '2',
    question: 'Is there a preview or a free trial available?',
    answer: 'Yes, we offer a demo version that allows you to explore the core features. Contact our sales team for more details on trial periods and enterprise solutions.',
  },
  {
    id: '3',
    question: 'Where can I purchase AlignUI Design System?',
    answer: 'AlignUI Design System can be purchased directly from our official website or through our authorized resellers. Please visit our pricing page for more information.',
  },
  {
    id: '4',
    question: 'What are the recent updates and enhancements in AlignUI?',
    answer: 'We regularly update AlignUI with new features, components, and improvements. You can find a detailed changelog on our documentation page or subscribe to our newsletter for release announcements.',
  },
  {
    id: '5',
    question: 'How do I install AlignUI Design System in Figma?',
    answer: 'Installing AlignUI Design System in Figma is straightforward. Simply download the Figma file from your purchase confirmation, then import it into your Figma account. Detailed instructions are available in our getting started guide.',
  },
];

// --- Helper Component: StarRating (for Mentors) ---
const StarRating: React.FC = () => {
  return (
    <div className="flex items-center space-x-0.5 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
      ))}
    </div>
  );
};

// --- Main Combined Component ---
const CombinedSections: React.FC = () => {
  // State for FAQ section to manage open/closed state
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0].id); // First FAQ item open by default

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className=" font-mont 2">
      {/* --- Top Mentors Section --- */}
      <section className="lg:py-10 xl:py-16 2xl:py-20 h-[70vh]">
        <div className="w-[70%] h-[60vh] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header Section */}
          <div className="mb-12 h-[20%]">
            <h2 className="lg:text-4xl xl:text-5xl 3xl:text-5xl font-mont font-medium text-gray-900 mb-4">
              Our Top Mentor At Starc
            </h2>
            <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Mentor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden w-[100%] h-[100%] "
              >
                <div>
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className=" w-full lg:h-72 xl:h-80  2xl:h-72   object-contain rounded-xl bg-black"
                  />
                </div>
                <div className="p-6 text-start">
                  <h3 className="lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-4xl font-mont font-bold text-gray-900 mb-1">{mentor.name}</h3>
                  <p className="text-sm text-gray-500 mb-2  ">{mentor.specialization}</p>
                  <div className=" flex items-center justify-start gap-2 text-gray-600 text-sm mb-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{mentor.experience}</span>
                  </div>
                  <div className=" gap-2">
                    <StarRating />
                    <span className="text-sm text-gray-500">({mentor.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer or separator if needed */}
      <div className="lg:py-8 2xl:py-0"></div>

      {/* --- FAQ Section (placeholder for future addition) --- */}
    </div>
  );
};

export default CombinedSections;