"use client"

import { useState } from 'react';
import { Menu, X, ChevronRight, Calendar, BookOpen, Users, Mail, Youtube, Twitter, Linkedin, Github } from 'lucide-react';

export default function NodoroLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'Events', href: '#events' },
    { name: 'Journal', href: '#journal' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' }
  ];

  const values = [
    { title: 'Innovation', description: 'Pushing boundaries in technology and research' },
    { title: 'Collaboration', description: 'Building together as a community' },
    { title: 'Excellence', description: 'Striving for the highest standards' },
    { title: 'Impact', description: 'Creating meaningful change in our field' }
  ];

  const tutorials = [
    { category: 'Hardware', title: 'Introduction to Arduino', duration: '45 min' },
    { category: 'Hardware', title: 'Raspberry Pi Setup', duration: '30 min' },
    { category: 'Software', title: 'Python Basics', duration: '60 min' },
    { category: 'Software', title: 'Web Development 101', duration: '90 min' }
  ];

  const events = [
    { title: 'Tech Workshop: AI Fundamentals', date: 'Dec 15, 2025', type: 'Workshop' },
    { title: 'Annual Hackathon 2025', date: 'Jan 20-21, 2026', type: 'Competition' },
    { title: 'Guest Speaker Series', date: 'Feb 5, 2026', type: 'Seminar' }
  ];

  const publications = [
    { title: 'Machine Learning in Edge Computing', author: 'Sarah Chen', date: 'Nov 2025', category: 'Research' },
    { title: 'Sustainable IoT Solutions', author: 'Marcus Johnson', date: 'Oct 2025', category: 'Projects' },
    { title: 'Quantum Computing Primer', author: 'Alex Rivera', date: 'Sep 2025', category: 'Tutorial' }
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
            <a href="#join" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              Get Involved
            </a>
            <a href="#about" className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all border-2 border-orange-600">
              Learn More
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
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a href="#tutorials" className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Browse Tutorials</span>
                  <ChevronRight />
                </a>
                <a href="#events" className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Upcoming Events</span>
                  <ChevronRight />
                </a>
                <a href="#journal" className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Read Our Journal</span>
                  <ChevronRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Tutorials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm rounded-full mb-4">
                  {tutorial.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600">{tutorial.duration}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
              View All Tutorials
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Upcoming Events</h2>
          <div className="space-y-6">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex items-start mb-4 md:mb-0">
                  <Calendar className="text-orange-600 mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                  <button className="text-orange-600 hover:text-orange-700 font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Journal & Publications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {publications.map((pub, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs rounded-full mb-4">
                  {pub.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                <div className="text-sm text-gray-600">
                  <p>By {pub.author}</p>
                  <p>{pub.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
              View All Publications
            </button>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 px-4 bg-gradient-to-br from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Users className="mx-auto mb-6" size={64} />
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8">
            Be part of something bigger. Whether you&apos;re a student, professional, or enthusiast, there&apos;s a place for you at Nodaro.
          </p>
          <div className="bg-white p-8 rounded-2xl text-gray-900 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-orange-600">Application Form</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
              <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent">
                <option>Select Interest Area</option>
                <option>Hardware Projects</option>
                <option>Software Development</option>
                <option>Research & Publications</option>
                <option>Event Organization</option>
              </select>
              <textarea placeholder="Tell us about yourself and why you want to join..." rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
                Submit Application
              </button>
            </form>
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