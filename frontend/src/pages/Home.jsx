import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { personalInfo, projects } from '../data/mockData';

const Home = () => {
  const scrollRef = useRef(null);

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

  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F8F7F4]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light text-[#222222] leading-[0.9]">
                Hi, I'm{' '}
                <span className="block font-bold text-[#008080]">
                  {personalInfo.name.split(' ')[0]}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-[#222222] font-light leading-relaxed max-w-2xl">
                {personalInfo.tagline}
              </p>
              
              <div className="flex items-center space-x-2 text-[#008080] font-medium">
                <span className="text-lg">{personalInfo.title}</span>
              </div>
            </div>

            <div className="pt-8">
              <Link
                to="/work"
                className="inline-flex items-center space-x-3 bg-[#008080] text-[#F8F7F4] px-8 py-4 rounded-full hover:bg-[#006666] transition-all duration-300 hover:scale-105 text-lg font-medium"
              >
                <span>Explore My Work</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right Image - 40% */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#008080]/20 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#008080] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#008080] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-[#008080] hover:text-[#006666] transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={24} />
        </button>
      </section>

      {/* Featured Projects Section */}
      <section ref={scrollRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-light text-[#222222] mb-6">
                Selected <span className="font-bold text-[#008080]">Works</span>
              </h2>
              <p className="text-xl text-[#222222]/70 max-w-2xl mx-auto leading-relaxed">
                A curated collection of projects showcasing my passion for creating 
                meaningful digital experiences through design and technology.
              </p>
            </div>

            {/* Asymmetrical Project Grid */}
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Large Featured Project */}
              <div className="lg:col-span-8 fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
                <div className="group cursor-pointer h-full">
                  <Link to={`/work/${featuredProjects[0]?.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={featuredProjects[0]?.image}
                          alt={featuredProjects[0]?.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="bg-[#008080]/10 text-[#008080] px-3 py-1 rounded-full text-sm font-medium">
                            {featuredProjects[0]?.category}
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#222222] mb-4 group-hover:text-[#008080] transition-colors">
                          {featuredProjects[0]?.title}
                        </h3>
                        <p className="text-[#222222]/70 text-lg leading-relaxed mb-6">
                          {featuredProjects[0]?.shortDescription}
                        </p>
                        <div className="flex items-center text-[#008080] font-medium group-hover:translate-x-2 transition-transform">
                          <span>View Case Study</span>
                          <ArrowRight size={18} className="ml-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Two Smaller Projects */}
              <div className="lg:col-span-4 space-y-8">
                {featuredProjects.slice(1, 3).map((project, index) => (
                  <div key={project.id} className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000" style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
                    <div className="group cursor-pointer">
                      <Link to={`/work/${project.id}`}>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="bg-[#008080]/10 text-[#008080] px-3 py-1 rounded-full text-sm font-medium">
                                {project.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-[#222222] mb-3 group-hover:text-[#008080] transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-[#222222]/70 leading-relaxed mb-4">
                              {project.shortDescription}
                            </p>
                            <div className="flex items-center text-[#008080] font-medium group-hover:translate-x-2 transition-transform">
                              <span>View Project</span>
                              <ArrowRight size={16} className="ml-2" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-4xl lg:text-5xl font-light text-[#222222] mb-6">
              Let's build something{' '}
              <span className="font-bold text-[#008080]">great together</span>
            </h2>
            <p className="text-xl text-[#222222]/70 mb-12 leading-relaxed">
              Whether you have a project in mind or just want to explore possibilities, 
              I'd love to hear from you and discuss how we can bring your vision to life.
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
    </div>
  );
};

export default Home;