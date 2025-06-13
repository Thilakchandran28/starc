import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react"; // Removed Check as it's not used in the form
import heros from "../assests/hero.png";
import PurpleBox from "@/components/PurpleBox";

import WallOfLove from "../components/WallOfLove";
const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 from-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Optional: Subtle noise texture or pattern */}
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgeT0iMSIgcj0iMSIgZmlsbD0iIzAwMDAwMDMzIi8+PC9zdmc+')] bg-repeat"></div>
        </div>
        <div className="relative z-10 pt-80">
          <div className="flex justify-center mb-12">
            <img src={heros} alt="Hero" className="w-[75%] absolute top-[10px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
              STARC COURSE
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto pb-36">
              Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit.
              <br />
              Posuere vel netus auctor phasellus fermentum.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur. Elementum massa gravida ante iaculis diam nibh.
            </p>

            <h3 className="text-2xl font-mont text-gray-900 mb-4">How we can help</h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#8A63FF]">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#8A63FF]">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#8A63FF]">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>                Lorem ipsum dolor sit amet consectetur.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Note</h3>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur. Sed magna sit tortor
              nunc vel viverra tempor. Risus vitae a facilisi scelerisque
              malesuada. At enim viverra morbi risus in diam non.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md"> {/* Changed bg-gray-50 to bg-white */}
            <h3 className="text-2xl font-mont text-gray-900 mb-6">Access the Starc Template:</h3> {/* Updated title */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Added grid for side-by-side inputs */}
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3  bg-[#F7F8FA] font-mont rounded-md focus:ring-2 focus:ring-purple-600 "
                  />
                  {/* Removed Check icon */}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border font-mont bg-[#F7F8FA] rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  {/* Removed Check icon */}
                </div>
              </div>
              <Textarea
                placeholder="Message" // Placeholder in image looks like a general message or larger input area
                rows={5}
                className="w-full p-3 border font-mont bg-[#F7F8FA] rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              ></Textarea>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md text-lg font-mont"
              >
                Sign Up
              </Button>
              <p className="text-sm font-mont text-gray-500 mt-4 text-center">
                Section can be added here (description or information) {/* Updated text */}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Us</h3>
            <p className="text-gray-600">hello@example.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us!</h3>
            <p className="text-gray-600">000-000-0000</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
        </div>
      </section>

   
      {/* CTA Section */}
     
      <PurpleBox/>
      <WallOfLove/>
      <Footer />
    </div>
  );
};

export default Contact;
