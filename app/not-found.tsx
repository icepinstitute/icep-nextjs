import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { 
  PiHouseBold,
  PiMagnifyingGlassBold,
  PiWarningCircleBold
} from 'react-icons/pi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-white to-brand-blue-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12">
          <Logo />
        </div>

        {/* 404 Icon and Number */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <PiWarningCircleBold className="text-8xl text-brand-yellow mr-4" />
            <div className="text-9xl font-bold text-brand-blue leading-none">404</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 heading-font">
            Page Not Found
          </h1>
          <p className="text-lg text-brand-blue-600 mb-6 leading-relaxed">
            Oops! The page you&apos;re looking for seems to have wandered off. 
            Don&apos;t worry, even the best students sometimes take a wrong turn.
          </p>
          <p className="text-brand-blue-500">
            Let&apos;s get you back on track to your educational journey.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/"
            className="btn bg-brand-blue text-white hover:bg-brand-blue-700 w-full sm:w-auto"
          >
            <PiHouseBold className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          
          <Link
            href="/past-papers"
            className="btn bg-brand-yellow text-brand-blue hover:bg-brand-yellow-600 w-full sm:w-auto"
          >
            <PiMagnifyingGlassBold className="w-5 h-5 mr-2" />
            Browse Past Papers
          </Link>
          
          {/* <button
            onClick={() => window.history.back()}
            className="btn border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full sm:w-auto"
          >
            <PiArrowLeftBold className="w-5 h-5 mr-2" />
            Go Back
          </button> */}
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-blue-100">
          <h3 className="text-lg font-semibold text-brand-blue mb-4 heading-font">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link 
              href="/css-past-papers" 
              className="text-brand-blue-600 hover:text-brand-blue transition-colors p-2 rounded hover:bg-brand-blue-50"
            >
              📚 CSS Past Papers
            </Link>
            <Link 
              href="/pms-past-papers" 
              className="text-brand-blue-600 hover:text-brand-blue transition-colors p-2 rounded hover:bg-brand-blue-50"
            >
              📝 PMS Past Papers
            </Link>
            <Link 
              href="/magazines" 
              className="text-brand-blue-600 hover:text-brand-blue transition-colors p-2 rounded hover:bg-brand-blue-50"
            >
              📰 Magazines
            </Link>
            <Link 
              href="/about" 
              className="text-brand-blue-600 hover:text-brand-blue transition-colors p-2 rounded hover:bg-brand-blue-50"
            >
              ℹ️ About ICEP
            </Link>
            <Link 
              href="/contact" 
              className="text-brand-blue-600 hover:text-brand-blue transition-colors p-2 rounded hover:bg-brand-blue-50"
            >
              📞 Contact Us
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-sm text-brand-blue-400">
          <p>If you believe this is an error, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
}
