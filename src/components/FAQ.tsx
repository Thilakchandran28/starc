import React, { useState } from 'react';
import faqicons from "../assests/faqicon.png"

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isFAQVisible, setIsFAQVisible] = useState<boolean>(true);

  const faqs: FAQItem[] = [
    {
      question: "Why do I need to use a Design System?",
      answer:
        "A Design System is a super useful tool for designers. It helps keep designs consistent and makes the user process faster. You can use pre-designed stuff over and over, and it’s helpful for both new and experienced designers. In short, a Design System is like a designer’s toolbox for making great-looking and user-friendly designs.",
    },
    {
      question: "Is there a preview or a free trial available?",
      answer:
        "Yes, we offer a free trial for you to explore the features of our Design System before committing to a purchase. Sign up on our website to get started!",
    },
    {
      question: "Where can I purchase AlignUI Design System?",
      answer:
        "You can purchase the AlignUI Design System directly from our official website. Visit the pricing page for more details and to complete your purchase.",
    },
    {
      question: "What are the recent updates and enhancements in AlignUI?",
      answer:
        "We regularly update AlignUI with new components, improved accessibility, and enhanced performance. Check our changelog on the website for the latest updates.",
    },
    {
      question: "How do I install AlignUI Design System in Figma?",
      answer:
        "To install AlignUI in Figma, visit our website and download the design kit. Follow the step-by-step instructions in the documentation to import it into Figma.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleFAQSection = () => {
    setIsFAQVisible(!isFAQVisible);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <button
          onClick={toggleFAQSection}
          className="flex items-center justify-center space-x-2 w-32 h-12 bg-purple-500 rounded-2xl text-white text-sm font-semibold hover:bg-purple-600 transition-colors mb-4"
        >
          <img src={faqicons} style={{width:"18px",height:"18px"}}/>
          <span>FAQS</span>
        </button>
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        {isFAQVisible && (
          <div className="space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-all ${
                  openIndex === index
                    ? 'border-purple-500 shadow-md shadow-purple-200'
                    : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="flex items-center justify-center w-8 h-8  text-[#8F8F8F] text-2xl">
                    {openIndex === index ? '-' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
