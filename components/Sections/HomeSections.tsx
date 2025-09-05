'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { PiExamBold, PiBookOpenTextBold, PiBrainBold, PiNewspaperClippingBold, PiFlagBold, PiHandsPrayingBold, PiBuildings } from 'react-icons/pi';
import { formatSubjectForUrl } from '@/utils/pastPapersTypes';
import CourseCard from '@/components/CourseCard';
import { phoneNumber } from '@/Constants';

// Counting Number Animation Component
function CountingNumber({ target, duration = 2000, suffix = '' }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const compulsorySubjects = [
  { name: 'English Essay', icon: PiBookOpenTextBold },
  { name: 'English (Precis & Composition)', icon: PiExamBold },
  { name: 'General Science & Ability', icon: PiBrainBold },
  { name: 'Current Affairs', icon: PiNewspaperClippingBold },
  { name: 'Pakistan Affairs', icon: PiFlagBold },
  { name: 'Islamic Studies / Comparative Religion', icon: PiHandsPrayingBold },
];

export function CSSOverviewSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue-50 to-brand-white text-brand-blue px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font text-brand-blue mb-4">
            CSS 2026 Examination Overview
          </h2>          <p className="text-lg text-brand-blue-400 max-w-3xl mx-auto">
            Comprehensive guide to Central Superior Services examination - Your gateway to Pakistan&apos;s prestigious civil services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Key Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-brand-blue-100"
          >
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Key Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-brand-blue-600"><strong>Exam Date:</strong> February 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-brand-blue-600"><strong>Application Deadline:</strong> October 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-brand-blue-600"><strong>Age Limit:</strong> 21-30 years</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-brand-blue-600"><strong>Education:</strong> Minimum Bachelor&apos;s Degree</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-brand-blue-600"><strong>Total Marks:</strong> 1200 (Written) + 300 (Interview)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Exam Structure */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-brand-blue-100"
          >
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Exam Structure</h3>
            <div className="space-y-4">
              <div className="bg-brand-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-brand-blue mb-2">Compulsory Subjects (600 marks)</h4>
                <p className="text-sm text-brand-blue-500">Essay, English, General Science, Current Affairs, Pakistan Affairs, Islamic Studies</p>
              </div>
              <div className="bg-brand-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-brand-blue mb-2">Optional Subjects (600 marks)</h4>
                <p className="text-sm text-brand-blue-500">6 subjects from 9 groups (100 marks each)</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-brand-blue mb-2">Interview (300 marks)</h4>
                <p className="text-sm text-brand-blue-500">Personality assessment by FPSC panel</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Latest Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-brand-blue to-brand-blue-700 text-white p-8 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">What&apos;s New in CSS 2026?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2"></div>
                  <span>Enhanced focus on <strong>Environmental Science</strong> and <strong>Public Policy</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2"></div>
                  <span>Updated syllabus for <strong>Current Affairs</strong> with digital governance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2"></div>
                  <span>New essay topics on <strong>Climate Change</strong> and <strong>Technology</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2"></div>
                  <span>Revised marking scheme for better evaluation</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-brand-yellow mb-2">1200+</div>
                <div className="text-brand-blue-100 mb-4">Students Successfully Trained</div>
                <div className="text-2xl font-bold text-brand-yellow mb-2">85%</div>
                <div className="text-brand-blue-100">Success Rate in CSS</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function MagazineAndBlog() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue-700 to-brand-blue-800 text-white px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font text-white mb-4">
            Read our Blog
          </h2>
          <p className="text-lg text-brand-blue-100 max-w-3xl mx-auto">
            Stay informed with expert insights, current affairs analysis, and valuable tips for CSS exam success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold mb-3">Latest Articles & Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2"></div>
                    <span className="text-brand-blue-100">Current Affairs breakdowns and analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2"></div>
                    <span className="text-brand-blue-100">CSS exam preparation strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2"></div>
                    <span className="text-brand-blue-100">Success stories from CSS officers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2"></div>
                    <span className="text-brand-blue-100">Monthly essay topics and discussions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold mb-3">Expert Contributors</h3>
                <p className="text-brand-blue-100 text-sm">
                  Our blog features content from experienced CSS mentors, successful officers, 
                  and subject matter experts who provide valuable insights for your preparation journey.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="mb-6">
                <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiBookOpenTextBold className="text-3xl text-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Ready to Learn?</h3>
                <p className="text-brand-blue-100 mb-6">
                  Explore our comprehensive blog with hundreds of articles designed to enhance your CSS preparation and keep you updated with the latest trends.
                </p>
              </div>
              
              <div className="space-y-4">
                <Link
                  href="/blog"
                  className="block w-full bg-brand-yellow text-brand-blue font-semibold px-8 py-4 rounded-lg hover:bg-brand-yellow-400 transition-all transform hover:scale-105 shadow-lg"
                >
                  Visit Our Blog
                </Link>
                <p className="text-xs text-brand-blue-200">
                  New articles published weekly
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-yellow mb-2">200+</div>
              <div className="text-brand-blue-100">Published Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-yellow mb-2">50k+</div>
              <div className="text-brand-blue-100">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-yellow mb-2">Weekly</div>
              <div className="text-brand-blue-100">Fresh Content</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export function PastPapersTeaser() {
  return (
    <section className="py-20 bg-white text-black px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-8 rounded-xl bg-brand-white shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-font mb-3">
            CSS & PMS Past Papers
          </h2>
          <p className="text-base mb-10">
            Access solved and unsolved past papers for both CSS and PMS exams, categorized by subject and year.
          </p>          {/* CSS and PMS Exam Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* CSS Card */}
            <Link href="/css-past-papers">
              <div className="bg-gradient-to-br from-brand-blue to-brand-blue-600 text-white rounded-xl shadow-lg p-6 cursor-pointer hover:from-brand-blue-600 hover:to-brand-blue-700 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center">
                    <PiExamBold className="text-2xl text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">CSS Papers</h3>
                    <p className="text-brand-blue-100">Central Superior Services</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  <div className="bg-white/10 rounded p-2">
                    <span className="font-semibold">6</span> Compulsory
                  </div>
                  <div className="bg-white/10 rounded p-2">
                    <span className="font-semibold">6+</span> Optional
                  </div>
                </div>
              </div>
            </Link>

            {/* PMS Card */}
            <Link href="/pms-past-papers">
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl shadow-lg p-6 cursor-pointer hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">                  <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center">
                    <PiBuildings className="text-2xl text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">PMS Papers</h3>
                    <p className="text-green-100">Provincial Management Service</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  <div className="bg-white/10 rounded p-2">
                    <span className="font-semibold">4</span> Compulsory
                  </div>
                  <div className="bg-white/10 rounded p-2">
                    <span className="font-semibold">Various</span> Optional
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Access to Popular Subjects */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-brand-blue rounded-full"></div>
              <h3 className="text-2xl font-bold text-brand-blue">Popular Subjects</h3>
              <div className="flex-1 h-px bg-brand-blue-200"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {compulsorySubjects.slice(0, 6).map((subject, index) => {
                const Icon = subject.icon;
                const urlSubject = formatSubjectForUrl(subject.name);
                return (
                  <Link key={index} href={`/past-papers/${urlSubject}`}>
                    <div className="bg-gray-50 text-brand-blue rounded-lg shadow p-3 cursor-pointer flex flex-col items-center gap-2 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 border border-gray-200">
                      <Icon className="text-xl text-brand-blue" />
                      <span className="text-xs font-semibold text-center">
                        {subject.name.length > 15 ? subject.name.slice(0, 12) + '...' : subject.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/past-papers"
              className="inline-block bg-black text-brand-white font-semibold px-8 py-3 rounded-md hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              → View All Past Papers
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ProgramsAndCourses() {  const programs = [
    {
      title: "CSS Annual Plan 2027",
      duration: "15 Months",
      description: "Comprehensive preparation program covering all CSS subjects with expert guidance and mock tests.",
      features: ["Complete Syllabus Coverage", "Weekly Mock Tests", "Individual Mentorship", "Study Materials Included"],
      color: "bg-brand-blue",
      hoverColor: "hover:bg-brand-blue-600",
      badge: "Most Popular",
      poster: undefined,
      href: "/courses/css-annual-plan-2027"
    },
    {
      title: "CSS Prime Session 2026",
      duration: "8 Months",
      description: "Intensive crash course designed for focused preparation with proven strategies.",
      features: ["Intensive Training", "Expert Faculty", "Regular Assessments", "Career Counseling"],
      color: "bg-brand-red-800",
      hoverColor: "hover:bg-brand-blue-800",
      badge: "Best Value",
      poster: undefined,
      href: "/courses/css-prime-session-2026"
    },
    {
      title: "PMS Executive Plan 2026",
      duration: "6 Months",
      description: "Specialized program for Provincial Management Service exam preparation.",
      features: ["PMS Focused Curriculum", "Provincial Insights", "Interview Preparation", "Success Guarantee"],
      color: "bg-slate-700",
      hoverColor: "hover:bg-slate-800",
      badge: "Executive",
      poster: undefined,
      href: "/courses/pms-executive-plan-2026"
    }
  ];

  return (
    <section id='courses-section' className="py-20 bg-white text-brand-blue px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font text-brand-blue mb-4">
            Programs & Courses at ICEP
          </h2>
          <p className="text-lg text-brand-blue-400 max-w-3xl mx-auto">
            Choose from our specially designed programs tailored for CSS and PMS exam success
          </p>
        </motion.div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <CourseCard
              key={index}
              title={program.title}
              duration={program.duration}
              description={program.description}              features={program.features}
              color={program.color}
              hoverColor={program.hoverColor}
              badge={program.badge}
              poster={program.poster}
              index={index}
              href={program.href}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Physical as well as Online Classes are available</h3>
            <p className="text-brand-blue-100 mb-6">
              Join thousands of successful candidates who achieved their dreams with ICEP Institute
            </p>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <Link 
                href={`tel:${phoneNumber.withCountryCode}`} 
                className="inline-block bg-white text-brand-blue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg w-full max-w-xs text-center"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TestSeriesSection() {
  const testSeries = [
    {
      title: "Half Book Test Series",
      description: "Subject-wise tests covering half syllabus with detailed feedback"
    },
    {
      title: "Full Book Test Series", 
      description: "Complete CSS syllabus coverage with comprehensive evaluation"
    },
    {
      title: "Grand Mock Tests",
      description: "Final exam simulation in real CSS environment"
    },
    {
      title: "Mock Interviews",
      description: "Professional interview practice with experienced CSS officers"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-brand-blue mb-3">
            Test Series & Mock Interviews
          </h2>
          <p className="text-brand-blue-400">
            Evaluate your preparation with our comprehensive testing programs
          </p>
        </div>        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">          {/* Left Side - Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2">
                <Image 
                  src="/images/test-series/test-environment.jpg" 
                  alt="CSS Test Environment" 
                  width={500}
                  height={192}
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              {/* Two smaller images */}
              <div>
                <Image 
                  src="/images/test-series/mock-tests.jpg" 
                  alt="Mock Tests" 
                  width={250}
                  height={128}
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div>
                <Image 
                  src="/images/test-series/interview-prep.jpg" 
                  alt="Interview Preparation" 
                  width={250}
                  height={128}
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Cards in Columns */}
          <div className="space-y-4">
            {testSeries.map((test, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg border-l-4 border-brand-blue hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {test.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {test.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function OurResults() {
  const results = [
    {
      image: "/images/our-results/1.png",
      alt: "CSS Position Holder 1"
    },
    {
      image: "/images/our-results/2.png", 
      alt: "CSS Position Holder 2"
    },
    {
      image: "/images/our-results/3.png",
      alt: "CSS Position Holder 3"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-white to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold heading-font text-brand-blue mb-4">
            Our Pride
          </h2>
          <p className="text-lg text-brand-blue-400 max-w-3xl mx-auto">
            Celebrating the success of our students who achieved top positions in CSS examinations
          </p>
        </div>

        {/* Image Slider using Swiper */}
        <div className="mb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-brand-blue-300',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-brand-blue',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 2,
                centeredSlides: false,
              },
            }}
            className="results-swiper"
          >
            {results.map((result, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto">
                  <Image
                    src={result.image}
                    alt={result.alt}
                    width={400}
                    height={500}
                    className="w-full h-auto object-contain"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-700 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-yellow rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-yellow rounded-full translate-x-20 translate-y-20"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Experience
                </h3>
                <p className="text-brand-blue-100 text-lg max-w-2xl mx-auto">
                  15 years of excellence in nurturing Pakistan&apos;s future leaders
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2"
                    >
                      <CountingNumber target={6300} duration={2000} suffix="+" />
                    </motion.div>
                    <div className="text-brand-blue-100 text-sm md:text-base font-medium">Alumni</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2"
                    >
                      <CountingNumber target={650} duration={2000} suffix="+" />
                    </motion.div>
                    <div className="text-brand-blue-100 text-sm md:text-base font-medium">Qualifiers</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2"
                    >
                      <CountingNumber target={400} duration={2000} suffix="+" />
                    </motion.div>
                    <div className="text-brand-blue-100 text-sm md:text-base font-medium">Serving Bureaucrats</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2"
                    >
                      <CountingNumber target={15} duration={2000} suffix=" Years" />
                    </motion.div>
                    <div className="text-brand-blue-100 text-sm md:text-base font-medium">Experience</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center group col-span-2 md:col-span-1"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2"
                    >
                      <CountingNumber target={690} duration={2000} suffix="+" />
                    </motion.div>
                    <div className="text-brand-blue-100 text-sm md:text-base font-medium">Currently Enrolled</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function VideoReviews() {
  const swiperRef = React.useRef<SwiperRef | null>(null);
  
  const videoReviews = [
    {
      embedUrl: "https://www.youtube.com/embed/9W8b6LOhWEs?si=6fe0rBkITyhsP6m7&enablejsapi=1",
      title: "Why was #ICEP my first choice for #css preparation?!",
      description: "How ICEP helped me secure 25th position"
    },
    {
      embedUrl: "https://www.youtube.com/embed/qndlMZFo3P4?si=sAOSQzU45rsuyoMN&enablejsapi=1",
      title: "Why ICEP's Topic Wise Test Series for #CSS25?",
      description: "Complete guide to our comprehensive test series program"
    },
    {
      embedUrl: "https://www.youtube.com/embed/GkgSQQDuDWk?si=kBPUf408nVaa-Ngy&enablejsapi=1",
      title: "Listen to it by Topper Dr. Shaher Bano if are you a beginner for CSS26 Exam",
      description: "Topper Dr. Shaher Bano shares her journey with ICEP"
    },
    {
      embedUrl: "https://www.youtube.com/embed/01Zrx8YQ4HI?si=aEOHE-AkH6FyoCGR&enablejsapi=1",
      title: "Mock Interview Review by Special CSS23 Topper Zuha Tiwana @ ICEP CSS Institute",
      description: "Former ICEP student shares interview experience"
    }
  ];

  // Handle iframe interactions to control autoplay
  const handleIframeInteraction = (action: 'play' | 'pause') => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay) {
      if (action === 'play') {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  };

  React.useEffect(() => {
    // Listen for YouTube API messages
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        if (data.event === 'video-progress') {
          if (data.info && data.info.playerState === 1) { // Playing
            handleIframeInteraction('play');
          } else if (data.info && (data.info.playerState === 2 || data.info.playerState === 0)) { // Paused or Ended
            handleIframeInteraction('pause');
          }
        }
      } catch {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section id='success-stories-section' className="pt-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font text-brand-blue mb-4">
            Success Stories
          </h2>          <p className="text-lg text-brand-blue-400 max-w-3xl mx-auto">
            Hear directly from our successful students who achieved their dreams with ICEP&apos;s guidance and support
          </p>
        </motion.div>

        {/* Video Reviews Swiper */}        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-brand-blue-300',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-brand-blue',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
              },
            }}
            className="video-reviews-swiper pb-16"
          >
            {videoReviews.map((video, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                  style={{ height: '420px' }}
                  onMouseEnter={() => handleIframeInteraction('play')}
                  onMouseLeave={() => handleIframeInteraction('pause')}
                >
                  {/* Video Container */}
                  <div className="relative aspect-video bg-gray-100">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Video Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand-blue mb-2 group-hover:text-brand-blue-700 transition-colors overflow-hidden text-ellipsis" style={{ 
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      minHeight: '3.5rem'
                    }}>
                      {video.title}
                    </h3>
                    <p className="text-brand-blue-600 text-sm leading-relaxed overflow-hidden text-ellipsis" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {video.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-blue-100">
            <h3 className="text-2xl font-bold text-brand-blue mb-4 heading-font">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-brand-blue-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful candidates who achieved their goals with ICEP&apos;s proven methodology and expert guidance.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <Link
                href="/contact"
                className="bg-brand-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-blue-700 transition-colors shadow-lg w-full max-w-xs text-center"
              >
                Start Your Journey
              </Link>
              <Link
                href="/about"
                className="bg-brand-yellow text-brand-blue font-semibold px-8 py-3 rounded-lg hover:bg-brand-yellow-600 transition-colors shadow-lg w-full max-w-xs text-center"
              >
                Learn About ICEP
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function IeltsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-font text-brand-blue mb-4">
            IELTS Preparation at ICEP Institute
          </h2>
          <p className="text-lg text-brand-blue-400 max-w-3xl mx-auto">
            Achieve your dream IELTS score with our comprehensive preparation program. 
            Our expert instructors and proven methodology help students excel in all four skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <PiBookOpenTextBold className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-brand-blue">Expert Training</h3>
            <p className="text-brand-blue-600">Comprehensive coverage of Reading, Writing, Listening, and Speaking</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <PiBrainBold className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-brand-blue">Small Batches</h3>
            <p className="text-brand-blue-600">Personalized attention with limited students per batch</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <PiExamBold className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-brand-blue">Proven Results</h3>
            <p className="text-brand-blue-600">High success rate with students achieving target band scores</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <PiNewspaperClippingBold className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-brand-blue">Mock Tests</h3>
            <p className="text-brand-blue-600">Regular practice tests to track progress and build confidence</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">
                Why Choose ICEP for IELTS?
              </h3>
              <ul className="space-y-3 text-brand-blue-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experienced certified IELTS trainers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Updated study materials and practice tests
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Flexible batch timings for working professionals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Individual feedback and progress tracking
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Speaking practice sessions with native speakers
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Ready to Start?</h4>
                <p className="mb-4">Join our next IELTS batch and achieve your target score</p>
                <Link
                  href={`tel:${phoneNumber.withCountryCode}`}
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

