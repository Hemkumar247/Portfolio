import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Coffee, MapPin } from 'lucide-react';
import { personalInfo, skills, experience, testimonials } from '../data/mockData';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image - Left 40% */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={personalInfo.aboutImage}
                    alt={`About ${personalInfo.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#008080]/10 to-transparent"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#008080] rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#008080] rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Content - Right 60% */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-light text-[#222222]">
                  A bit about <span className="font-bold text-[#008080]">me</span>
                </h1>
                
                <div className="space-y-6 text-lg text-[#222222]/80 leading-relaxed">
                  <p>
                    Hello! I'm Vitta Hem Kumar, an aspiring software engineer passionate about creating innovative 
                    technology solutions that solve real-world problems. Currently pursuing my Bachelor of Engineering 
                    in Computer Science at Rajalakshmi Institute of Technology, Chennai, I've been on an exciting 
                    journey exploring the intersection of artificial intelligence, mobile development, and data science.
                  </p>
                  
                  <p>
                    My experience spans from developing AI-powered mobile applications like SignLearn (which earned 
                    a Government of India Copyright) to working as a Cybersecurity Intern at Mastercard, where I 
                    engineered automated sentiment analysis pipelines. Whether I'm building VR educational experiences, 
                    creating farmer intelligence platforms, or developing machine learning models with 95%+ accuracy, 
                    my focus remains on practical applications that make a meaningful impact.
                  </p>
                  
                  <p>
                    I believe in continuous learning and hands-on problem solving. My coursework in Data Structures & 
                    Algorithms, Database Management, and Computer Networks, combined with real-world internship 
                    experience at companies like Mastercard and Accenture, has given me a strong foundation in both 
                    theoretical concepts and practical implementation. I'm always eager to take on new challenges 
                    and contribute to innovative projects.
                  </p>
                </div>

                <div className="flex items-center space-x-6 text-[#008080]">
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} />
                    <span className="font-medium">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee size={20} />
                    <span className="font-medium">Problem Solver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-[#222222] mb-6">
                Skills & <span className="font-bold text-[#008080]">Expertise</span>
              </h2>
              <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto leading-relaxed">
                A diverse toolkit built through hands-on experience, continuous learning, 
                and a passion for staying at the forefront of technology.
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <div 
                  key={category}
                  className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000"
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-[#222222] mb-4 flex items-center">
                    <Award className="text-[#008080] mr-3" size={24} />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="bg-[#008080]/10 text-[#008080] px-4 py-2 rounded-full font-medium hover:bg-[#008080]/20 transition-colors cursor-default"
                        style={{ 
                          animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                          animation: 'fadeInScale 0.5s ease-out forwards'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-[#222222] mb-6">
                My <span className="font-bold text-[#008080]">Journey</span>
              </h2>
              <p className="text-xl text-[#222222]/70 leading-relaxed">
                Key milestones that have shaped my path in technology and design.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#008080]/30"></div>
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div 
                    key={index}
                    className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000 relative pl-20"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-2 w-4 h-4 bg-[#008080] rounded-full border-4 border-[#F8F7F4] shadow-lg"></div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#222222]">{item.title}</h3>
                        <span className="text-[#008080] font-semibold text-lg">{item.year}</span>
                      </div>
                      <p className="text-[#222222]/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-[#222222] mb-6">
                Kind <span className="font-bold text-[#008080]">Words</span>
              </h2>
              <p className="text-xl text-[#222222]/70 leading-relaxed">
                What colleagues and collaborators have to say about working with me.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000 bg-[#008080]/5 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-lg"
                    />
                    <div className="flex-1">
                      <p className="text-[#222222]/80 leading-relaxed mb-4 italic">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <div className="font-semibold text-[#222222]">{testimonial.name}</div>
                        <div className="text-[#008080] text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-4xl lg:text-5xl font-light text-[#222222] mb-6">
              Let's create something{' '}
              <span className="font-bold text-[#008080]">amazing</span>
            </h2>
            <p className="text-xl text-[#222222]/70 mb-12 leading-relaxed">
              I'm always excited to connect with fellow creators, innovators, and dreamers. 
              Whether you have a project in mind or just want to chat about technology and design.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-[#008080] text-[#F8F7F4] px-12 py-5 rounded-full hover:bg-[#006666] transition-all duration-300 hover:scale-105 text-xl font-medium shadow-lg hover:shadow-xl"
            >
              <span>Get in Touch</span>
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default About;