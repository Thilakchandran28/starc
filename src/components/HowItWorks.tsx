
import { UserCircle2, Send, Target } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <UserCircle2 className="w-6 h-6" />,
      title: "Sign Up and create Account",
      description: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      number: "02",
      icon: <Send className="w-6 h-6" />,
      title: "Expression of interest",
      description: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      number: "03",
      icon: <Target className="w-6 h-6" />,
      title: "Get Discovered",
      description: "Lorem ipsum dolor sit amet consectetur."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-4xl font-light text-purple-200">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
              <img 
                src="/student-working.jpg" 
                alt="Student working"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`/avatar-${i}.jpg`}
                      alt={`User ${i}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-900">10k+ students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
