
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] flex items-center justify-center pointer-events-none opacity-20">
          <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 290 C 100 200, 400 200, 490 290" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            <path d="M20 280 C 110 190, 410 190, 480 280" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            <path d="M30 270 C 120 180, 420 180, 470 270" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            <path d="M40 260 C 130 170, 430 170, 460 260" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            <path d="M50 250 C 140 160, 440 160, 450 250" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            <path d="M60 240 C 150 150, 450 150, 440 240" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            <path d="M70 230 C 160 140, 460 140, 430 230" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            <path d="M80 220 C 170 130, 470 130, 420 220" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            <path d="M90 210 C 180 120, 480 120, 410 210" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            <path d="M100 200 C 190 110, 490 110, 400 200" stroke="#A78BFA" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-purple-200 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            STARC COURSE
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit.
            <br />
            Posuere vel netus auctor phasellus fermentum.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur. Elementum massa gravida ante iaculis diam nibh.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How we can help</h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Lorem ipsum dolor sit amet consectetur.
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
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Access the Start Template</h3>
            <form className="space-y-6">
              <Input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-md" />
              <Input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md" />
              <Textarea placeholder="Message" rows={5} className="w-full p-3 border border-gray-300 rounded-md"></Textarea>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md text-lg font-semibold">
                Submit
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-gray-100">
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

      {/* Wall of Love Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Wall of love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b669ad00?w=60&h=60&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Esther Howard</p>
                    <p className="text-sm text-gray-500">@estherhoward</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.4 7.5 3.53 4.76c-.36.62-.56 1.35-.56 2.12 0 1.48.75 2.79 1.91 3.56-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.81 3.44 4.2-1.8.49-2.76.07-3.16-.16.54 1.7 2.11 2.93 3.97 2.96C9.59 19.4 7.6 20 5.4 20c-.36 0-.7-.02-1.04-.06 2.05 1.32 4.48 2.08 7.08 2.08 8.49 0 13.13-7.03 13.13-13.17 0-.2-.01-.4-.02-.6.9-.63 1.68-1.42 2.3-2.32z"/></svg>
              </div>
              <p className="text-gray-700 mb-4">
                Pharetra commodo massa in vitae ultricies. Elementum sit amet nulla facilisi morbi. Images eget aliquam enim aenean
                venenatis magna diam.
              </p>
              <p className="text-sm text-gray-500">May 15, 2023</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Leslie Alexander</p>
                    <p className="text-sm text-gray-500">@lesliealexander</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.4 7.5 3.53 4.76c-.36.62-.56 1.35-.56 2.12 0 1.48.75 2.79 1.91 3.56-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.81 3.44 4.2-1.8.49-2.76.07-3.16-.16.54 1.7 2.11 2.93 3.97 2.96C9.59 19.4 7.6 20 5.4 20c-.36 0-.7-.02-1.04-.06 2.05 1.32 4.48 2.08 7.08 2.08 8.49 0 13.13-7.03 13.13-13.17 0-.2-.01-.4-.02-.6.9-.63 1.68-1.42 2.3-2.32z"/></svg>
              </div>
              <p className="text-gray-700 mb-4">
                Magna fermentum iaculis eu non diam phasellus. Vitae cursus euismod quis.
                Viverra nibh ma pulvinar mattis nunc.
              </p>
              <p className="text-sm text-gray-500">May 15, 2023</p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Kristin Watson</p>
                    <p className="text-sm text-gray-500">@kristinwatson</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.4 7.5 3.53 4.76c-.36.62-.56 1.35-.56 2.12 0 1.48.75 2.79 1.91 3.56-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.81 3.44 4.2-1.8.49-2.76.07-3.16-.16.54 1.7 2.11 2.93 3.97 2.96C9.59 19.4 7.6 20 5.4 20c-.36 0-.7-.02-1.04-.06 2.05 1.32 4.48 2.08 7.08 2.08 8.49 0 13.13-7.03 13.13-13.17 0-.2-.01-.4-.02-.6.9-.63 1.68-1.42 2.3-2.32z"/></svg>
              </div>
              <p className="text-gray-700 mb-4">
                Dictumst commodo quisque. Aliquam
                varius et amet a pharetra. Maecenas
                dictum, imperdiet rhoncus, orci lorem
                ullamcorper.
              </p>
              <p className="text-sm text-gray-500">May 15, 2023</p>
            </div>

            {/* Testimonial Card 4 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Guy Hawkins</p>
                    <p className="text-sm text-gray-500">@guyhawkins</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.4 7.5 3.53 4.76c-.36.62-.56 1.35-.56 2.12 0 1.48.75 2.79 1.91 3.56-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.81 3.44 4.2-1.8.49-2.76.07-3.16-.16.54 1.7 2.11 2.93 3.97 2.96C9.59 19.4 7.6 20 5.4 20c-.36 0-.7-.02-1.04-.06 2.05 1.32 4.48 2.08 7.08 2.08 8.49 0 13.13-7.03 13.13-13.17 0-.2-.01-.4-.02-.6.9-.63 1.68-1.42 2.3-2.32z"/></svg>
              </div>
              <p className="text-gray-700 mb-4">
                Risus pharetra tincidunt purus in massa
                tempus. Habitasse ultricies dolor sit amet
                vestibulum rhoncus est pellentesque elit.
              </p>
              <p className="text-sm text-gray-500">May 15, 2023</p>
            </div>

            {/* Testimonial Card 5 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Savannah Henry</p>
                    <p className="text-sm text-gray-500">@savannahhenry</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.4 7.5 3.53 4.76c-.36.62-.56 1.35-.56 2.12 0 1.48.75 2.79 1.91 3.56-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.81 3.44 4.2-1.8.49-2.76.07-3.16-.16.54 1.7 2.11 2.93 3.97 2.96C9.59 19.4 7.6 20 5.4 20c-.36 0-.7-.02-1.04-.06 2.05 1.32 4.48 2.08 7.08 2.08 8.49 0 13.13-7.03 13.13-13.17 0-.2-.01-.4-.02-.6.9-.63 1.68-1.42 2.3-2.32z"/></svg>
              </div>
              <p className="text-gray-700 mb-4">
                Morbi nisl velit big ipsum sodales ut ac
                eget integer. Scelerisque netus morbi
                viverra nunc faucibus. Mi et, amet neque
                commodo quis.
              </p>
              <p className="text-sm text-gray-500">May 15, 2023</p>
            </div>

            {/* Testimonial Card 6 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Darrell Steward</p>
                    <p className="text-sm text-gray-500">@darrellsteward</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.4 7.5 3.53 4.76c-.36.62-.56 1.35-.56 2.12 0 1.48.75 2.79 1.91 3.56-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.81 3.44 4.2-1.8.49-2.76.07-3.16-.16.54 1.7 2.11 2.93 3.97 2.96C9.59 19.4 7.6 20 5.4 20c-.36 0-.7-.02-1.04-.06 2.05 1.32 4.48 2.08 7.08 2.08 8.49 0 13.13-7.03 13.13-13.17 0-.2-.01-.4-.02-.6.9-.63 1.68-1.42 2.3-2.32z"/></svg>
              </div>
              <p className="text-gray-700 mb-4">
                Dictumst commodo quisque. Aliquam
                varius et amet a pharetra. Maecenas
                dictum, imperdiet rhoncus, orci lorem
                ullamcorper.
              </p>
              <p className="text-sm text-gray-500">May 15, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join ambitious professionals and
            <br />
            unlock your dream career today
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Lorem ipsum dolor sit amet consectetur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Input type="email" placeholder="Enter your email" className="w-full sm:w-auto bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
            <Button className="bg-white text-purple-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
              Join Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
