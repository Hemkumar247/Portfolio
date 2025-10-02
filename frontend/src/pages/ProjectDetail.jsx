import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Wrench } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/work');
    }
  }, [id, navigate]);

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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const previousProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      {/* Back Navigation */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/work"
            className="inline-flex items-center space-x-2 text-[#008080] hover:text-[#006666] transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back to Work</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#008080]/10 text-[#008080] px-4 py-2 rounded-full text-sm font-medium mb-6">
              {project.category}
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#222222] mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/10]">
              <img
                src={project.gallery[currentImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Navigation */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#222222] p-3 rounded-full shadow-lg transition-all hover:scale-110"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#222222] p-3 rounded-full shadow-lg transition-all hover:scale-110"
                >
                  <ArrowRight size={20} />
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
              <div className="flex items-center space-x-3 mb-4">
                <User className="text-[#008080]" size={24} />
                <h3 className="text-lg font-semibold text-[#222222]">Role</h3>
              </div>
              <p className="text-[#222222]/70">{project.role}</p>
            </div>

            <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="text-[#008080]" size={24} />
                <h3 className="text-lg font-semibold text-[#222222]">Timeline</h3>
              </div>
              <p className="text-[#222222]/70">{project.timeline}</p>
            </div>

            <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000" style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Wrench className="text-[#008080]" size={24} />
                <h3 className="text-lg font-semibold text-[#222222]">Tools</h3>
              </div>
              <p className="text-[#222222]/70">{project.tools}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-3xl lg:text-4xl font-light text-[#222222] mb-8">
              The <span className="font-bold text-[#008080]">Challenge</span>
            </h2>
            <p className="text-lg text-[#222222]/80 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-3xl lg:text-4xl font-light text-[#222222] mb-12 text-center">
              My <span className="font-bold text-[#008080]">Process</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              {project.process.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-[#008080] text-[#F8F7F4] rounded-full flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#222222] mb-2">{step}</h3>
                  
                  {/* Arrow (except for last item) */}
                  {index < project.process.length - 1 && (
                    <div className="hidden lg:block absolute transform translate-x-20">
                      <ArrowRight className="text-[#008080]/30" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-3xl lg:text-4xl font-light text-[#222222] mb-8">
              The <span className="font-bold text-[#008080]">Solution</span>
            </h2>
            <p className="text-lg text-[#222222]/80 leading-relaxed mb-12">
              {project.solution}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.slice(1).map((image, index) => (
              <div
                key={index}
                className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 2}`}
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000">
            <h2 className="text-3xl lg:text-4xl font-light text-[#222222] mb-12">
              The <span className="font-bold text-[#008080]">Results</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="fade-in-section opacity-0 transform translate-y-12 transition-all duration-1000 p-6 bg-[#008080]/5 rounded-2xl"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-[#008080] mb-2">
                    {result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {previousProject ? (
              <Link
                to={`/work/${previousProject.id}`}
                className="flex items-center space-x-4 group hover:bg-white rounded-2xl p-4 transition-colors w-full md:w-auto"
              >
                <ArrowLeft className="text-[#008080] group-hover:transform group-hover:-translate-x-1 transition-transform" size={24} />
                <div className="text-left">
                  <div className="text-sm text-[#222222]/60">Previous Project</div>
                  <div className="text-lg font-semibold text-[#222222] group-hover:text-[#008080] transition-colors">
                    {previousProject.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextProject ? (
              <Link
                to={`/work/${nextProject.id}`}
                className="flex items-center space-x-4 group hover:bg-white rounded-2xl p-4 transition-colors w-full md:w-auto justify-end"
              >
                <div className="text-right">
                  <div className="text-sm text-[#222222]/60">Next Project</div>
                  <div className="text-lg font-semibold text-[#222222] group-hover:text-[#008080] transition-colors">
                    {nextProject.title}
                  </div>
                </div>
                <ArrowRight className="text-[#008080] group-hover:transform group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-[#222222] mb-4">
            Like what you see?
          </h2>
          <p className="text-lg text-[#222222]/70 mb-8">
            Let's discuss how we can create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-[#008080] text-[#F8F7F4] px-8 py-4 rounded-full hover:bg-[#006666] transition-all duration-300 hover:scale-105 font-medium"
          >
            <span>Start a Project</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;