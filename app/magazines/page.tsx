import React from 'react';
import Link from 'next/link';
import { getMagazinesByYear, getAvailableYears } from '@/utils/magazinesServerUtils';
import { formatMonthName } from '@/utils/magazinesTypes';
import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Sections/Footer';
import { Metadata } from 'next';
import { 
  PiBookBookmarkBold,
  PiCalendarBold,
  PiDownloadBold,
  PiArrowRightBold
} from 'react-icons/pi';

export const metadata: Metadata = {
  title: 'ICEP Magazines - Educational Resources',
  description: 'Access comprehensive ICEP magazines organized by year and month. Download educational resources and stay updated with the latest content.',
  keywords: 'ICEP magazines, educational resources, monthly magazines, download magazines',
};

export default function MagazinesPage() {
  const magazinesByYear = getMagazinesByYear();
  const availableYears = getAvailableYears();

  return (
    <>
      <Topbar />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-brand-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-brand-blue-200 mb-4">
              <Link href="/" className="hover:text-brand-blue-100">Home</Link>
              <span>/</span>
              <span>Magazines</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <PiBookBookmarkBold className="text-4xl text-brand-yellow" />
              <h1 className="text-3xl md:text-4xl font-bold heading-font">
                ICEP Magazines
              </h1>
            </div>
            <p className="text-brand-blue-100 text-lg max-w-3xl mb-8">
              Comprehensive educational resources and insights to enhance your learning journey. 
              Access the latest magazines with valuable content and knowledge.
            </p>
            
            {/* Statistics */}
            <div className="flex flex-wrap gap-6">
              <div className="bg-brand-blue-700 rounded-lg px-6 py-4">
                <div className="flex items-center gap-3">
                  <PiCalendarBold className="text-2xl text-brand-yellow" />
                  <div>
                    <div className="text-sm text-brand-blue-200">Available Years</div>
                    <div className="text-xl font-bold">
                      {availableYears.length > 0 ? availableYears.join(', ') : 'No magazines available'}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-blue-700 rounded-lg px-6 py-4">
                <div className="flex items-center gap-3">
                  <PiDownloadBold className="text-2xl text-brand-yellow" />
                  <div>
                    <div className="text-sm text-brand-blue-200">Total Issues</div>
                    <div className="text-xl font-bold">
                      {magazinesByYear.reduce((total, yearGroup) => total + yearGroup.magazines.length, 0)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        
        
        {/* Main Content */}
        <section className="py-12 md:py-20 bg-brand-white">
          <div className="container mx-auto px-6 md:px-12">
            {magazinesByYear.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-white rounded-xl shadow-lg p-12 max-w-md mx-auto border border-brand-blue-100">
                  <div className="text-6xl mb-6">📰</div>
                  <h2 className="text-2xl font-bold text-brand-blue mb-4">No Magazines Available</h2>
                  <p className="text-brand-blue-600">
                    Magazines will be added soon. Please check back later for the latest educational resources.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-16">
                {magazinesByYear.map((yearGroup) => (
                  <div key={yearGroup.year}>
                    {/* Year Header */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-1 h-8 bg-brand-yellow rounded-full"></div>
                      <h2 className="text-3xl font-bold heading-font text-brand-blue">{yearGroup.year}</h2>
                      <div className="flex-1 h-px bg-brand-blue-200"></div>
                      <span className="text-brand-blue-600 font-medium">
                        {yearGroup.magazines.length} issue{yearGroup.magazines.length !== 1 ? 's' : ''} available
                      </span>
                    </div>                    
                    {/* Magazines Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {yearGroup.magazines.map((magazine) => (
                        <div
                          key={magazine.id}
                          className="group bg-white rounded-xl p-6 border border-brand-blue-100 hover:border-brand-blue-300 transition-all duration-300 hover:shadow-lg"
                        >
                          {/* Magazine Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="bg-brand-blue-50 rounded-lg p-3 group-hover:bg-brand-blue-100 transition-colors">
                              <PiBookBookmarkBold className="w-8 h-8 text-brand-blue" />
                            </div>
                            <span className="text-sm text-brand-blue font-medium bg-brand-yellow px-3 py-1 rounded-full">
                              {formatMonthName(magazine.month)}
                            </span>
                          </div>

                          {/* Magazine Title */}
                          <h3 className="font-bold text-lg text-brand-blue mb-3 group-hover:text-brand-blue-700 transition-colors">
                            {magazine.title}
                          </h3>

                          {/* Magazine Details */}
                          <div className="space-y-2 mb-6">
                            {magazine.week && (
                              <div className="flex items-center text-sm text-brand-blue-600">
                                <PiCalendarBold className="w-4 h-4 mr-2" />
                                Week {magazine.week}
                              </div>
                            )}
                            <div className="flex items-center text-sm text-brand-blue-600">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {magazine.publishDate.toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="space-y-3">
                            <Link
                              href={`/magazines/${magazine.id}`}
                              className="w-full bg-brand-blue text-white py-3 px-4 rounded-lg font-medium hover:bg-brand-blue-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-md"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View Magazine
                            </Link>
                            <Link
                              href={magazine.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-brand-yellow text-brand-blue py-3 px-4 rounded-lg font-medium hover:bg-brand-yellow-600 transition-all duration-300 flex items-center justify-center"
                            >
                              <PiDownloadBold className="w-4 h-4 mr-2" />
                              Download PDF
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Info Section */}
            <div className="mt-20 bg-white rounded-xl shadow-lg p-8 border border-brand-blue-100">
              <div className="text-center">
                <div className="bg-brand-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <PiBookBookmarkBold className="text-2xl text-brand-blue" />
                </div>
                <h2 className="text-2xl font-bold text-brand-blue mb-4 heading-font">About ICEP Magazines</h2>
                <p className="text-brand-blue-600 max-w-3xl mx-auto leading-relaxed">
                  Our magazines provide comprehensive educational content, insights, and resources to help students 
                  and professionals stay updated with the latest developments in their fields. Each issue is carefully 
                  curated to deliver valuable information and knowledge.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/about"
                    className="inline-flex items-center text-brand-blue hover:text-brand-blue-700 font-medium transition-colors"
                  >
                    Learn more about ICEP
                    <PiArrowRightBold className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
