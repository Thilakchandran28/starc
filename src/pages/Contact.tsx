import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react"; // Removed Check as it's not used in the form
import heros from "../Assets/hero.png";
import PurpleBox from "@/components/PurpleBox";
import WallOfLove from "../components/WallOfLove";
import contactProfie from "../Assets/icons/Contact-profile.svg";
const Contact = () => {
  return (
    <div className="2xl:h-sreen w-full bg-white">
      <div className="2xl:w-full ">
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="relative from-purple-50 to-white overflow-hidden 2xl:h-[708px] 2xl:border border-green-500 ">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Optional: Subtle noise texture or pattern */}
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgeT0iMSIgcj0iMSIgZmlsbD0iIzAwMDAwMDMzIi8+PC9zdmc+')] bg-repeat"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center xl:pt-5 2xl:pt-16">
          <div className="xl:w-[70%] xl:h-[500px] 2xl:w-[1028px] 2xl:h-[764px] flex flex-col justify-center border border-blue-500 ">
            <div className="flex justify-center w-full">
              <img
                src={heros}
                alt="Hero"
                className="xl:w-[50%] 2xl:w-[50%] 3xl:w-[50%] absolute top-[10px]  2xl:pt-16"
              />
            </div>
            <div className="max-w-4xl flex flex-col justify-center items-center mx-auto xl:mt-20  text-center xl:h-[160px] xl:border border-red-400 2xl:h-[223px] 2xl:w-[50%] 3xl:w-[100%] ">
              <span className="xl:w-[100px] xl:h-[25px] 2xl:w-[123px] 2xl:h-[35px] flex justify-center items-center bg-purple-600 text-white text-xs font-semibold  rounded-full mb-2 ">
                STARC COURSE
              </span>
              <h1 className="xl:text-4xl 2xl:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 ">
                Contact Us
              </h1>
              <p className="xl:text-sm 2xl:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto ">
                Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo
                tempor nulla blandit.
                <br />
                Posuere vel netus auctor phasellus fermentum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="2xl:w-full flex justify-center border border-red-500">
        <div className="2xl:w-[80%] flex justify-between p-10 border border-amber-700 -500">
          {/* Left: Contact Info */}
          <div className="xl:w-[40%] xl:mx-16 2xl:w-[558px]  2xl:h-[740px] 3xl:mx-10 border border-pink-500">
            <p className="text-[#8A63FF] mb-5 xl:text-xs 2xl:text-sm">Starc</p>
            <h2 className="2xl:text-5xl font-normal text-black mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8 xl:text-base 2xl:text-lg">
              Lorem ipsum dolor sit amet consectetur. Elementum massa gravida
              ante iaculis diam nibh.
            </p>

            <h3 className="text-2xl font-mont text-gray-900 mb-4">
              How we can help
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-center gap-2 xl:text-base 2xl:text-lg">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#8A63FF]">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>{" "}
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center gap-2 xl:text-base 2xl:text-lg">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#8A63FF]">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>{" "}
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center gap-2 xl:text-base 2xl:text-lg">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#8A63FF]">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>{" "}
                Lorem ipsum dolor sit amet consectetur.
              </li>
            </ul>

            <div className="mt-10 flex ">
              <img src={contactProfie} alt="" />
              <div className="flex flex-col w-[50%]">
                <p>Name</p>
                <p>
                  CEO Founderat <span className="text-blue-500">Starc</span>
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Note</h3>
            <p className="text-gray-600  xl:text-base 2xl:text-lg">
              Lorem ipsum dolor sit amet consectetur. Sed magna sit tortor nunc
              vel viverra tempor. Risus vitae a facilisi scelerisque malesuada.
              At enim viverra morbi risus in diam non.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md xl:w-[26%] xl:mx-16 xl:h-[75%] 2xl:w-[35%] 2xl:h-[60%] 3xl:mx-10 border border-purple-500 3xl:w-[35%] 3xl:h-[60%] ">
            {" "}
            {/* Changed bg-gray-50 to bg-white */}
            <h3 className="xl:text-lg 2xl:text-2xl font-mont text-gray-900 mb-6">
              Access the Starc Template:
            </h3>{" "}
            {/* Updated title */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {" "}
                {/* Added grid for side-by-side inputs */}
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 xl:text-xs 2xl:text-lg border-none outline-none bg-[#F7F8FA] font-mont rounded-md focus:ring-2 focus:ring-purple-600 "
                  />
                  {/* Removed Check icon */}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 xl:text-xs 2xl:text-lg border-none outline-none font-mont bg-[#F7F8FA] rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  {/* Removed Check icon */}
                </div>
              </div>
              <Textarea
                placeholder="" // Placeholder in image looks like a general message or larger input area
                rows={5}
                className="w-full p-3 border-none outline-none font-mont bg-[#F7F8FA] rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              ></Textarea>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md text-xs font-mont"
              >
                Sign Up
              </Button>
              <p className="text-sm font-mont text-gray-500 mt-4 text-center">
                Section can be added here (description or information){" "}
                {/* Updated text */}
              </p>
            </form>
          </div>
        </div>
      </section>
      {/* Contact Cards Section */}
      <section className="py-16 w-full xl:h-[380px] 2xl:h-[420px] flex border border-pink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:w-[80%] 2xl:w-[80%] flex items-center justify-between border border-teal-300">

          <div className="bg-white p-1 border rounded-xl h-[256px] flex justify-center items-center xl:w-[30%] xl:h-[90%] 2xl:h-[90%] 2xl:w-[30%]">
            <div className="bg-[#F7F8FA]  p-6 rounded-xl  text-center h-full w-full flex  flex-col justify-center items-center">
            <div className="bg-purple-100 w-fit p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="`xl:text-sm 2xl:text-xl` font-medium text-gray-900 mb-2">Message Us</h3>
            <p className="text-gray-600 xl:text-sm 2xl:text-xl">hello@example.com</p>
          </div>
          </div>

         <div className="bg-white p-1 border rounded-xl h-[256px] flex justify-center items-center xl:w-[30%] xl:h-[90%] 2xl:h-[90%] 2xl:w-[30%]">
           <div className="bg-[#F7F8FA]  p-6 rounded-xl  text-center h-full w-full flex  flex-col justify-center items-center">
            <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="xl:text-sm 2xl:text-xl font-bold text-gray-900 mb-2">Call Us!</h3>
            <p className="text-gray-600 xl:text-sm 2xl:text-xl">000-000-0000</p>
          </div>
         </div>

         <div className="bg-white p-1 border rounded-xl h-[256px] flex justify-center items-center xl:w-[30%] xl:h-[90%] 2xl:h-[90%] 2xl:w-[30%]">
           <div className="bg-[#F7F8FA]  p-6 rounded-xl  text-center h-full w-full flex  flex-col justify-center items-center">
            <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-purple-600 xl:text-sm 2xl:text-xl" />
            </div>
            <h3 className="xl:text-sm 2xl:text-xl font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600 xl:text-sm 2xl:text-xl">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>
         </div>
        </div>
      </section>
      <WallOfLove />
      {/* CTA Section */}
      <div className="flex justify-center mb-28 ">
        <PurpleBox />
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
