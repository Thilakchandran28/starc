
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is included in the course enrollment?",
      answer: "Each course includes lifetime access to video lessons, downloadable resources, assignments, quizzes, and a certificate of completion. You'll also get access to our community forum and instructor support."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers. You can learn anywhere, anytime."
    },
    {
      question: "Do you offer certificates upon completion?",
      answer: "Absolutely! Upon successful completion of a course, you'll receive a verified certificate that you can add to your LinkedIn profile and share with employers."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your course within the first 30 days, you can request a full refund, no questions asked."
    },
    {
      question: "How long do I have access to the courses?",
      answer: "Once you enroll in a course, you have lifetime access to all course materials. You can learn at your own pace and revisit the content whenever you need to."
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Prerequisites vary by course. Each course page clearly lists any required knowledge or skills. Many of our courses are designed for beginners and require no prior experience."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our courses</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
