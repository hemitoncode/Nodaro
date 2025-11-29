"use client"

import { useState } from 'react';
import { 
  Menu,
  X, 
  ChevronRight, 
  Mail, 
  Youtube,
  Twitter, 
  Linkedin, 
  Github 
} from 'lucide-react';

export default function NodoroLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const values = [
    { title: 'Innovation', description: 'Pushing boundaries in technology and research' },
    { title: 'Collaboration', description: 'Building together as a community' },
    { title: 'Excellence', description: 'Striving for the highest standards' },
    { title: 'Impact', description: 'Creating meaningful change in our field' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Nodaro
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-gray-700 hover:text-orange-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <button 
              className="md:hidden flex items-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="text-orange-600" /> : <Menu className="text-orange-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Welcome to Nodaro
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Empowering innovation through technology, education, and collaboration. Join us in shaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              Learn More
            </a>
            <a href="#contact" className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all border-2 border-orange-600">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-orange-600 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Nodaro</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Nodaro is a pioneering organization dedicated to fostering innovation in technology and education. Our community brings together students, professionals, and enthusiasts to learn, create, and make an impact.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through hands-on tutorials, collaborative events, and cutting-edge research, we&apos;re building the next generation of tech leaders and innovators.
              </p>
              <div className="bg-orange-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-orange-600 mb-3">2025-2026 Goals</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="text-orange-600 mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Launch 50+ new tutorials across hardware and software domains</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-orange-600 mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Host quarterly hackathons and innovation challenges</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-orange-600 mt-1 mr-2 flex-shrink-0" size={20} />
                    <span>Publish 20+ research articles and project showcases</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                We believe in the power of technology to transform lives and solve complex challenges. Our mission is to create an inclusive community where innovation thrives and knowledge is freely shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-600">Contact Form</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
                <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
                <textarea placeholder="Message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-600">Connect With Us</h3>
              <div className="space-y-4">
                <a href="mailto:hello@nodaro.org" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <Mail className="text-orange-600 mr-4" size={24} />
                  <span className="text-gray-900 font-semibold">hello@nodaro.org</span>
                </a>
                <div className="flex gap-4 pt-6">
                  <a href="#" className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Nodaro
          </h3>
          <p className="text-gray-400 mb-6">Empowering innovation through technology and education</p>
          <p className="text-gray-500 text-sm">© 2025 Nodaro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}