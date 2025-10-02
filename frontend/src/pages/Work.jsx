import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { projects, categories } from '../data/mockData';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

    const elements = document.querySelectorAll('.fade-in-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsFilterOpen(false);
  };

  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-light text-[#222222] mb-6">
              My <span className="font-bold text-[#008080]">Work</span>
            </h1>
            <p className="text-xl text-[#222222]/70 leading-relaxed mb-12">
              A collection of projects where creativity meets technology. Each piece represents 
              a unique challenge solved through thoughtful design and innovative development.
            </p>
          </div>

          {/* Filter Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#008080] text-[#F8F7F4] shadow-lg'
                      : 'bg-white text-[#222222] hover:bg-[#008080]/10 hover:text-[#008080]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Dropdown */}
            <div className="lg:hidden relative w-full max-w-xs">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-between bg-white px-6 py-3 rounded-full font-medium text-[#222222] shadow-sm"
              >
                <span>{selectedCategory}</span>
                <Filter size={18} />
              </button>
              
              {isFilterOpen && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl z-10 overflow-hidden">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-6 py-3 hover:bg-[#008080]/10 transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#008080]/10 text-[#008080] font-medium'
                          : 'text-[#222222]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="text-[#222222]/60 mt-4 lg:mt-0">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="fade-in-card opacity-0 transform translate-y-12 transition-all duration-1000"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link to={`/work/${project.id}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-[#008080] text-[#F8F7F4] px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="bg-[#008080]/10 text-[#008080] px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#222222] mb-3 group-hover:text-[#008080] transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-[#222222]/70 leading-relaxed mb-4 line-clamp-2">
                        {project.shortDescription}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#008080] font-medium group-hover:translate-x-2 transition-transform">
                          <span>View Project</span>
                          <ArrowRight size={16} className="ml-2" />
                        </div>
                        
                        <div className="text-sm text-[#222222]/50">
                          {project.timeline}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-[#222222] mb-2">No projects found</h3>
              <p className="text-[#222222]/60">Try selecting a different category to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-[#222222] mb-4">
            Have a project in <span className="font-bold text-[#008080]">mind?</span>
          </h2>
          <p className="text-lg text-[#222222]/70 mb-8">
            Let's discuss how we can bring your vision to life with thoughtful design and robust technology.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-[#008080] text-[#F8F7F4] px-8 py-4 rounded-full hover:bg-[#006666] transition-all duration-300 hover:scale-105 font-medium"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;