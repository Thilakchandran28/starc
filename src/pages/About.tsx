import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";
import WallOfLove from "@/components/WallOfLove";
import PurpleBox from "@/components/PurpleBox";
import TeamShip from "@/components/TeamShip";
import StarcTeam from "@/components/StarcTeam";
import woman from '../Assets/woman.png';
import world from '../Assets/world.png';
import trust from '../Assets/trust.png';
import award from '../Assets/award.png';
import positive from '../Assets/positive.png';
import indus from '../Assets/indus.png';
import stay from '../Assets/stay.svg';
import promote from '../Assets/promote.svg';
import foster from '../Assets/foster.svg';
import provide from '../Assets/provide.svg';
import group from '../Assets/Group.svg'

const About = () => {
 

  const stats = [
    { number: "500+", label: "Students" },
    { number: "1M+", label: "A modest number to start off the metrics section " },
    { number: "94%", label: "A modest number to start off the metrics section" },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About
                <span className="text-purple-600"> Nexora</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're on a mission to democratize education and make high-quality learning accessible to everyone, everywhere. Since 2020, we've been helping millions of students achieve their dreams through innovative online education.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                Join Our Mission
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Values Section (custom design) */}
      <section className="relative overflow-hidden flex justify-center px-10 lg:px-20 lg:py-24 xl:w-[90%] ">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pl-0 lg:pl-12 2xl:pl-24  ">
          <span className="text-[#8A63FF] text-lg w-full 3xl:ml-40 flex  lg:text-xl 2xl:text-2xl font-medium font-mont mb-4">
            Our Values
          </span>
          <h2 className="text-xl lg:text-4xl 2xl:text-5xl 3xl:mr-20 3xl:leading-relaxed font-mont font-semibold xl:py-1 text-black-900 mb-4 leading-snug ">
            Our team shares <br /> values to{" "}
            <span className="text-purple-500">Success</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg 2xl:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur. Convallis <br />
            ante euismod commodo facilisi.
          </p>
          <ul className="space-y-4 text-base lg:text-lg 2xl:text-xl 3xl:mr-10">
            <li className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#8A63FF] ">
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
              </span>
              <span className="text-black font-mont">
                Add your feature details here
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#8A63FF]">
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
              </span>
              <span className="text-black font-mont">
                Inform your customers about your features
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Responsive Image Container */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-12 lg:mt-0  ">
          <div className="relative w-full max-w-[640px] aspect-[16/10]">
            {/* World Map Background */}
            <img
              src={world}
              alt="World Map"
              className="absolute  top-[25%] w-full h-full object-contain  z-0"
            />
            <div className="">
              {/* Main Image */}
              <img
                src={woman}
                alt="Team"
                className="absolute 3xl:w-[70%] top-[14%] left-[30%] lg:w-[200px] 2xl:w-[280px] rounded-xl shadow-lg z-10"
              />

              {/* Overlapping Image */}
              <img
                src={woman}
                alt="Team 2"
                className="absolute 3xl:top-[50%] 3xl:right-[-40px] 3xl:w-[50%]  xl:bottom-[21%] xl:right-[10%] lg:w-[180px] 2xl:w-[240px] rounded-xl shadow-lg border-4 border-white z-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learn Today, Lead Tomorrow Section */}
      <section className="py-20 bg-white   flex  justify-center ">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-36 border border-green-400"> */}
        {/* Left: Text Content */}
        <div className=" w-[35%] pt-10 pl-20 ">
          <h2 className="text-xl lg:text-4xl 2xl:text-5xl w-[80%]  md:text-5xl font-mont font-medium text-gray-900 mb-8 leading-tight">
            "Learn today, lead tomorrow"
          </h2>
          <div className="flex  justify-between   3xl:w-[70%]">
            <div className="text-center   3xl:">
              <div className="text-4xl 3xl:text-5xl  font-mont font-bold bg-gradient-to-r from-[#6E51E0] to-[#8A63FFB2] bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-gray-600">People</div>
            </div>
            <div className="text-center">
              <div className="text-4xl  3xl:text-5xl font-mont font-bold bg-gradient-to-r from-[#6E51E0] to-[#8A63FFB2] bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl  3xl:text-5xl font-mont font-bold bg-gradient-to-r from-[#6E51E0] to-[#8A63FFB2] bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-gray-600">Experience Staff</div>
            </div>
          </div>
        </div>

        {/* Right: Description */}
        <div className="w-[40%] px-10">
          <div className="w-[203px]">
            <span className="text-3xl text-[#8A63FF] font-mont font-bold mb-4  flex justify-between">
              nexora{" "}
              <span>
                {" "}
                <img src={group} alt="R image" />
              </span>
            </span>
          </div>
          <p className="text-lg text-gray-600  font-mont leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        {/* </div> */}
      </section>
      {/* Achievements Section */}
      <section className="py-20  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-mont font-medium text-gray-900 pr-[78%] mb-4">
              Achievements
            </h2>
            <p className="text-l text-gray-600 pr-48">
              Our commitment to excellence has led us to achieve significant
              milestones along our journey. Here are some of our notable
              Achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 ml-12 gap-y-20">
            <div className="flex flex-col items-start space-y-4 w-[490px]">
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={trust} />{" "}
              </div>
              <div>
                <h3 className="text-2xl font-mont font-medium text-gray-900 mb-2">
                  Trusted by Thousands
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Nibh nisl ornare
                  blandit id eu cursus sagittis molestie.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4  w-[490px]">
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={award} />{" "}
              </div>
              <div>
                <h3 className="text-2xl font-mont font-medium text-gray-900 mb-2">
                  Award-Winning Courses
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Lorem augue imperdiet
                  ac tellus sapien.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4  w-[490px]">
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={positive} />{" "}
              </div>
              <div>
                <h3 className="text-2xl font-mont font-medium text-gray-900 mb-2">
                  Positive Student Feedback
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Aliquam ac vulputate
                  duis sit orci non nec.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4  w-[490px]">
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={indus} />{" "}
              </div>
              <div>
                <h3 className="text-2xl font-mont font-medium text-gray-900 mb-2">
                  Industry Partnerships
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas
                  viverra a magnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-center lg:grid-cols-4 gap-10 bg-white p-6 ">
            {stats.map((stat, index) => (
              <div key={index} className="text-center  w-1/3 ">
                <div className="text-4xl lg:text-5xl font-mont font-medium  text-center pl-6 text-[#6E51E0] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-center text-wrap font-mont">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <TeamShip />
        </div>
      </section>

      {/* Our Goals Section */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-mont font-semibold pr-[86%] text-gray-900 mb-3">
              Our Goals
            </h2>
            <p className="text-xl font-mont text-gray-600 pr-[70%]max-w-3xl mx-auto">
              At SkillBridge, our goal is to empower individuals from all
              backgrounds to thrive in the world of design and development. We
              believe that education should be accessible and transformative,
              enabling learners to pursue their passions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-start space-y-4">
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={provide} />{" "}
              </div>
              <div>
                <h3 className="text-2xl font-mont font-medium text-gray-900 mb-2">
                  Provide Practical Skills
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas
                  viverra a magnis.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={foster} />{" "}
              </div>
              <div>
                <h3 className="text-2xl font-mont font-medium text-gray-900 mb-2">
                  Foster Creative Problem-Solving
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas
                  viverra a magnis.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={promote} />{" "}
              </div>
              <div>
                <h3 className="text-2xl font-mont font-medium text-gray-900 mb-2">
                  Promote Collaboration and Community
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas
                  viverra a magnis.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src={stay} />{" "}
              </div>
              <div>
                <h3 className="text-2xl font-mont font-medium text-gray-900 mb-2">
                  Stay Ahead of the Curve
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas
                  viverra a magnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To empower individuals worldwide with the knowledge and skills they need to succeed in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate educators and technologists working to transform learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of learners who are already transforming their careers with Nexora.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-700 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-xl"
          >
            Get Started Today
          </Button>
        </div>
      </section> */}
      <StarcTeam />
      <WallOfLove />
      <div className="flex justify-center">
        <PurpleBox />
      </div>
      <Footer />
    </div>
  );
};

export default About;
