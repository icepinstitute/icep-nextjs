import React from 'react';
import { notFound } from 'next/navigation';
import { getMagazineById, getAllMagazines } from '@/utils/magazinesServerUtils';
import { formatMagazineTitle, formatMonthName } from '@/utils/magazinesTypes';
import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Sections/Footer';
import PDFViewerWrapper from '@/components/PDFViewerWrapper';
import ViewCounter from '@/components/ViewCounter';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  PiBookBookmarkBold,
  PiCalendarBold,
  PiArrowLeftBold
} from 'react-icons/pi';

interface MagazinePageProps {
  params: {
    magazineId: string;
  };
}

export async function generateStaticParams() {
  const magazines = getAllMagazines();
  
  return magazines.map((magazine) => ({
    magazineId: magazine.id,
  }));
}

export async function generateMetadata({ params }: MagazinePageProps): Promise<Metadata> {
  const magazine = getMagazineById(params.magazineId);
  
  if (!magazine) {
    return {
      title: 'Magazine Not Found - ICEP',
      description: 'The requested magazine could not be found.',
    };
  }

  const cleanTitle = formatMagazineTitle(magazine.id + '.pdf');
  
  return {
    title: `${cleanTitle} - ICEP Magazines`,
    description: `Read ${cleanTitle} from ${formatMonthName(magazine.month)} ${magazine.year}. Educational resources and insights from ICEP.`,
    keywords: `ICEP magazine, ${magazine.month} ${magazine.year}, educational resources, ${magazine.title}`,
  };
}

export default function MagazinePage({ params }: MagazinePageProps) {
  const magazine = getMagazineById(params.magazineId);

  if (!magazine) {
    notFound();
  }

  const cleanTitle = formatMagazineTitle(magazine.id + '.pdf');
  return (
    <>
      <Topbar />
      <Navbar />
      <main className="min-h-screen">
        {/* Header Section */}
        <section className="bg-brand-blue text-white py-16 md:py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="text-sm mb-6">
                <ol className="flex items-center space-x-2 text-brand-blue-200">
                  <li>
                    <Link href="/" className="hover:text-brand-blue-100 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </li>
                  <li>
                    <Link href="/magazines" className="hover:text-brand-blue-100 transition-colors">
                      Magazines
                    </Link>
                  </li>
                  <li>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </li>
                  <li className="text-white font-medium">{magazine.year}</li>
                  <li>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </li>
                  <li className="text-white font-medium">{formatMonthName(magazine.month)}</li>
                </ol>
              </nav>

              {/* Back Button */}
              <div className="flex items-center gap-4 mb-6">
                <Link 
                  href="/magazines" 
                  className="text-brand-blue-200 hover:text-white transition-colors"
                >
                  <PiArrowLeftBold className="text-xl" />
                </Link>
                <div className="flex items-center gap-3">
                  <PiBookBookmarkBold className="text-4xl text-brand-yellow" />
                  <h1 className="text-3xl md:text-4xl font-bold heading-font">
                    {cleanTitle}
                  </h1>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center bg-brand-blue-700 rounded-lg px-4 py-2">
                  <PiCalendarBold className="w-5 h-5 mr-2 text-brand-yellow" />
                  <span className="font-medium">{formatMonthName(magazine.month)} {magazine.year}</span>
                </div>
                
                {magazine.week && (
                  <div className="flex items-center bg-brand-blue-700 rounded-lg px-4 py-2">
                    <svg className="w-5 h-5 mr-2 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Week {magazine.week}</span>
                  </div>
                )}
                
                <div className="flex items-center bg-brand-blue-700 rounded-lg px-4 py-2">
                  <svg className="w-5 h-5 mr-2 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-medium">PDF Magazine</span>
                </div>
                
                <ViewCounter type="magazine" />
              </div>
            </div>
          </div>
        </section>        {/* PDF Viewer Section */}
        <section className="py-8 md:py-12 bg-brand-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-brand-blue-100">
              <div className="p-6 border-b border-brand-blue-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-semibold text-brand-blue mb-4 sm:mb-0 heading-font">
                    Magazine Viewer
                  </h2>
                  <div className="flex items-center space-x-4">
                    <a
                      href={magazine.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-brand-yellow text-brand-blue hover:bg-brand-yellow-600"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <PDFViewerWrapper 
                  fileUrl={magazine.fileUrl}
                />
              </div>
            </div>
          </div>
        </section>        {/* Navigation Section */}
        <section className="py-8 md:py-12 bg-brand-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-blue-100">
              <div className="text-center">
                <div className="bg-brand-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <PiBookBookmarkBold className="text-2xl text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-brand-blue mb-4 heading-font">
                  Explore More Magazines
                </h3>
                <p className="text-brand-blue-600 mb-6">
                  Discover other educational resources and stay updated with the latest content.
                </p>
                <Link
                  href="/magazines"
                  className="btn bg-brand-blue text-white hover:bg-brand-blue-700"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Back to All Magazines
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main> {/* ✅ Fixed closing tag added here */}
      <Footer />
    </>
  );
}
