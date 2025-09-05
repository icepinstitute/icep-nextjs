'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Sections/Footer';
import { phoneNumber, icep_social_links } from '@/Constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Topbar />
      <Navbar />
      
      <main className="bg-white">
        {/* Hero Section with Diagonal Split */}
        <section className="min-h-screen relative overflow-hidden">
          {/* Background with Diagonal Split */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 transform -skew-y-6 origin-top-left scale-110"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-to-tl from-brand-yellow to-yellow-400 transform skew-x-12 origin-bottom-right"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-32 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 left-16 w-16 h-16 bg-brand-yellow/30 rounded-full blur-lg animate-bounce"></div>
          
          <div className="container mx-auto px-4 lg:px-6 relative z-10 pt-10 pb-5">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  Contact Us
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Let&apos;s Start Your
                  <span className="block text-brand-yellow">Success Story</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                  Have questions about our programs? Ready to enroll? Our expert counselors are here to guide you every step of the way.
                </p>
                  {/* Quick Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  <div className="bg-slate-900/95 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <FaPhone className="text-brand-yellow" />
                      <span className="font-medium">Call Us</span>
                    </div>
                    <p className="text-sm text-gray-200">{phoneNumber.withoutCountryCode}</p>
                  </div>
                  
                  <div className="bg-slate-900/95 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <FaWhatsapp className="text-brand-yellow" />
                      <span className="font-medium">WhatsApp</span>
                    </div>
                    <p className="text-sm text-gray-200">{phoneNumber.withCountryCode}</p>
                  </div>
                </div>
              </div>
              
              {/* Right Contact Form */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl py-6 lg:py-8 px-5 lg:px-8 relative z-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                          placeholder="+92 300 1234567"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Program of Interest</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Select a program</option>
                        <option value="css-annual">CSS Annual Plan 2027</option>
                        <option value="css-prime">CSS Prime Session 2026</option>
                        <option value="pms-executive">PMS Executive Plan 2026</option>
                        <option value="test-series">Test Series Only</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300"
                        placeholder="Tell us about your goals and any questions you have..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-brand-blue to-brand-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                
                {/* Background Decoration */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-yellow/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Office Info */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience world-class facilities and meet our expert faculty
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Map/Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">                  <Image
                    src="/images/about/about-icep.jpg"
                    alt="ICEP Institute Campus"
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Main Campus</h3>
                    <p className="text-sm text-gray-200">Modern facilities • Expert faculty • Success environment</p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-blue">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        123 Education Street, University Town<br />
                        Lahore, Punjab 54000<br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-yellow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-yellow text-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Office Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>General: info@icepatitute.edu.pk</p>
                        <p>Admissions: admissions@icepatitute.edu.pk</p>
                        <p>Support: support@icepatitute.edu.pk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media & FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Social Media */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Follow Our Journey</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Stay connected with ICEP Institute on social media for updates, success stories, and valuable content.
                </p>
                  <div className="grid grid-cols-2 gap-4">
                  <a href={icep_social_links.facebook} target="_blank" rel="noopener noreferrer" className="group bg-blue-50 hover:bg-blue-100 p-6 rounded-xl transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaFacebook className="text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-gray-900">Facebook</span>
                    </div>
                    <p className="text-sm text-gray-600">Follow for daily updates</p>
                  </a>
                  
                  <a href={icep_social_links.instagram} target="_blank" rel="noopener noreferrer" className="group bg-pink-50 hover:bg-pink-100 p-6 rounded-xl transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaInstagram className="text-pink-600 text-2xl group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-gray-900">Instagram</span>
                    </div>
                    <p className="text-sm text-gray-600">Behind the scenes</p>
                  </a>
                  
                  <a href={icep_social_links.youtube} target="_blank" rel="noopener noreferrer" className="group bg-red-50 hover:bg-red-100 p-6 rounded-xl transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaYoutube className="text-red-600 text-2xl group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-gray-900">YouTube</span>
                    </div>
                    <p className="text-sm text-gray-600">Free lectures & tips</p>
                  </a>
                  
                  <a href={`https://wa.me/${phoneNumber.withCountryCode.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="group bg-green-50 hover:bg-green-100 p-6 rounded-xl transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaWhatsapp className="text-green-600 text-2xl group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold text-gray-900">WhatsApp</span>
                    </div>
                    <p className="text-sm text-gray-600">Quick support</p>
                  </a>
                </div>
              </div>

              {/* Quick FAQ */}
              <div id='faqs-section'>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Answers</h2>
                
                <div className="space-y-4">
                  {[
                    {
                      question: "When do new batches start?",
                      answer: "We start new batches every month. CSS Annual Plan starts in January, while PMS batches begin quarterly."
                    },
                    {
                      question: "Do you offer online classes?",
                      answer: "Yes! We offer both physical and online classes with the same quality of instruction and materials."
                    },
                    {
                      question: "What's included in the fee?",
                      answer: "Our fee includes all study materials, test series, mock interviews, and one-on-one mentorship sessions."
                    },
                    {
                      question: "Can I visit for a demo class?",
                      answer: "Absolutely! We encourage prospective students to attend a free demo class. Contact us to schedule one."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.question}</h4>
                      <p className="text-gray-600 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue-800">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Future?
              </h2>
              <p className="text-lg text-blue-100 mb-8">                Don&apos;t wait for the perfect moment. Your CSS/PMS journey starts with a single step. 
                Let&apos;s take that step together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-brand-yellow text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                  Schedule a Visit
                </button>
                <button className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
