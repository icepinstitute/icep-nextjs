'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Sections/Footer';

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      
      <main className="bg-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-blue to-brand-blue-800"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-brand-yellow/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-6 pt-8 pb-14 lg:pb-8 relative z-10">
            <div className="grid lg:flex lg:justify-evenly gap-16 items-center justify-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div className="inline-block px-4 py-2 bg-brand-yellow/20 rounded-full text-brand-yellow text-sm font-medium">
                  Est. 2009 • 15+ Years Excellence
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  We Create
                  <span className="block text-brand-yellow">Leaders</span>
                  <span className="block text-3xl lg:text-4xl font-normal text-gray-300">not just officers</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  ICEP Institute has been shaping Pakistan&apos;s bureaucratic landscape for over a decade. 
                  We don&apos;t just prepare students for exams — we transform them into visionary leaders.
                </p>
                
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-yellow">6300+</div>
                    <div className="text-sm text-gray-400">Alumni</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-yellow">650+</div>
                    <div className="text-sm text-gray-400">Qualifiers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-yellow">400+</div>
                    <div className="text-sm text-gray-400">Serving Officers</div>
                  </div>
                </div>
              </div>
              
              {/* Right Visual */}
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/images/about/about-icep.jpg"
                    alt="ICEP Institute Campus"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-600">Live Classes</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">690+</div>
                    <div className="text-sm text-gray-500">Currently Enrolled</div>
                  </div>
                </div>
                
                {/* Background Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-yellow/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-brand-blue/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Mission */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-blue/10 rounded-full"></div>
                <div className="bg-white px-5 py-6 lg:px-8 rounded-2xl shadow-lg relative z-10 border-l-4 border-brand-blue">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center mb-6">
                    <FaGraduationCap size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To revolutionize Pakistan&apos;s civil service preparation by providing world-class education, 
                    innovative teaching methodologies, and comprehensive mentorship that transforms aspiring 
                    candidates into competent, ethical, and visionary public servants.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-yellow/10 rounded-full"></div>
                <div className="bg-white px-5 py-6 lg:px-8 rounded-2xl shadow-lg relative z-10 border-l-4 border-brand-yellow">
                  <div className="w-12 h-12 bg-brand-yellow text-brand-blue rounded-lg flex items-center justify-center mb-6">
                    <FaTrophy size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To be Pakistan&apos;s premier institute for civil service excellence, setting the gold standard 
                    in CSS and PMS preparation while fostering a new generation of leaders committed to 
                    national development and social progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-brand-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who chose ICEP Institute for their CSS and PMS preparation.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-brand-blue px-8 py-4 text-white rounded-lg font-semibold hover:bg-brand-blue-700 transition-colors duration-300"
            >
              Get Enrolled Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
