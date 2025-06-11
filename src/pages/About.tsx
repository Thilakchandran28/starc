import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Learning",
      description: "We believe learning should be accessible, engaging, and transformative for everyone."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from course content to student support."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Building a worldwide community of learners and educators working together."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously innovating to provide the best learning experience possible."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b669ad00?w=300&h=300&fit=crop&crop=face",
      bio: "Former Google executive with 15+ years in education technology."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Tech visionary who led engineering teams at Facebook and Microsoft."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning educator and curriculum designer with 12+ years experience."
    },
    {
      name: "David Kim",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Growth expert who has helped scale multiple education startups."
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Students" },
    { number: "2K+", label: "Expert Instructors" },
    { number: "10K+", label: "Courses Available" },
    { number: "50+", label: "Countries Reached" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
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
      </section>

      {/* Our Values Section (custom design) */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <span className="text-sm text-purple-600 font-semibold mb-2 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Our team shares<br />values to <span className="text-purple-500">Success</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur. Convallis ante euismod commodo facilisi.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-100">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-gray-700">Add your feature details here</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-100">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-gray-700">Inform your customers about your features</span>
              </li>
            </ul>
          </div>
          {/* Right: Overlapping Images */}
          <div className="relative flex justify-center items-center min-h-[400px] pt-10 lg:pt-0 xl:min-h-[320px] 2xl:min-h-[400px] 3xl:min-h-[480px] 4xl:min-h-[560px] 5xl:min-h-[640px]">
            {/* Faint world map background */}
            <img src="https://www.transparenttextures.com/patterns/world-map.png" alt="World Map" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-full max-w-lg pointer-events-none select-none" />
            {/* Main image */}
            <img src="https://images.unsplash.com/photo-1589939778912-291778d0117d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team" className="rounded-xl shadow-lg w-80 h-48 object-cover relative z-10 -top-10 left-10 md:left-0 lg:left-10 xl:left-20 2xl:left-40 3xl:left-60 4xl:left-80 5xl:left-100" />
            {/* Overlapping image */}
            <img src="https://images.unsplash.com/photo-1589939778912-291778d0117d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team 2" className="rounded-xl shadow-lg w-64 h-40 object-cover absolute -bottom-10 -right-10 md:-right-20 lg:-right-10 xl:-right-0 2xl:-right-20 3xl:-right-40 4xl:-right-60 5xl:-right-80 z-20 border-4 border-white" />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Thousands</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Nibh nisl ornare blandit id eu cursus sagittis molestie.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.519 4.674c.3.921-.755 1.688-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.363-1.118L2.927 9.091c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Award-Winning Courses</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Lorem augue imperdiet ac tellus sapien.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Positive Student Feedback</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Aliquam ac vulputate duis sit orci non nec.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Industry Partnerships</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas viverra a magnis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Today, Lead Tomorrow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              "Learn today, lead tomorrow"
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">200+</div>
                <div className="text-gray-600">People</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">20+</div>
                <div className="text-gray-600">Experience Staff's</div>
              </div>
            </div>
          </div>
          {/* Right: Description */}
          <div>
            <span className="text-sm text-purple-600 font-semibold mb-2 block">Nexora</span>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
              Through our carefully crafted courses, we aim to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Provide Practical Skills</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas viverra a magnis.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Foster Creative Problem-Solving</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas viverra a magnis.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10M7 16h10M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Promote Collaboration and Community</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas viverra a magnis.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Ahead of the Curve</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Lacus ipsum egestas viverra a magnis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
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
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700">
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
      </section>

      <Footer />
    </div>
  );
};

export default About;
