import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mockData';

const Footer = () => {
  const getIcon = (iconName) => {
    const icons = {
      github: Github,
      linkedin: Linkedin,
      mail: Mail,
      globe: Globe
    };
    const Icon = icons[iconName] || Globe;
    return <Icon size={20} />;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222222] text-[#F8F7F4] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Vitta Hem Kumar</h3>
            <p className="text-gray-300 leading-relaxed">
              Aspiring Software Engineer passionate about creating innovative solutions that bridge 
              technology with real-world problem-solving. Always exploring new ways to make technology 
              more accessible and impactful.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#008080]">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-[#008080] transition-colors">
                Home
              </Link>
              <Link to="/work" className="block hover:text-[#008080] transition-colors">
                Work & Projects
              </Link>
              <Link to="/about" className="block hover:text-[#008080] transition-colors">
                About Me
              </Link>
              <Link to="/contact" className="block hover:text-[#008080] transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#008080]">Let's Connect</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="block hover:text-[#008080] transition-colors"
              >
                {personalInfo.email}
              </a>
              <p className="text-gray-300">{personalInfo.location}</p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#008080] transition-colors"
                    aria-label={link.name}
                  >
                    {getIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Vitta Hem Kumar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Designed & Built with passion and precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;