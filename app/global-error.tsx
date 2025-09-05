'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { 
  PiHouseBold,
  PiArrowCounterClockwiseBold,
  PiWarningOctagonBold,
  PiBugBold
} from 'react-icons/pi';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body className="bg-gradient-to-br from-brand-white to-brand-blue-50">
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-12">
              <Logo />
            </div>

            {/* Error Icon */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <PiWarningOctagonBold className="text-8xl text-brand-red mr-4" />
                <PiBugBold className="text-6xl text-brand-blue" />
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 heading-font">
                Something went wrong!
              </h1>
              <p className="text-lg text-brand-blue-600 mb-6 leading-relaxed">
                We encountered an unexpected error. This has been logged and our development team 
                will investigate the issue.
              </p>
              
              {/* Error Details */}
              {process.env.NODE_ENV === 'development' && (
                <div className="bg-brand-red-50 border border-brand-red-200 rounded-lg p-4 mb-6 text-left">
                  <h3 className="font-semibold text-brand-red mb-2">Development Error Details:</h3>
                  <code className="text-sm text-brand-red-700 block whitespace-pre-wrap break-all">
                    {error.message}
                  </code>
                  {error.digest && (
                    <p className="text-xs text-brand-red-600 mt-2">
                      Error Digest: {error.digest}
                    </p>
                  )}
                </div>
              )}
            </div>            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={reset}
                className="btn bg-brand-blue text-white hover:bg-brand-blue-700 w-full sm:w-auto"
              >
                <PiArrowCounterClockwiseBold className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <Link
                href="/"
                className="btn bg-brand-yellow text-brand-blue hover:bg-brand-yellow-600 w-full sm:w-auto"
              >
                <PiHouseBold className="w-5 h-5 mr-2" />
                Go to Homepage
              </Link>
            </div>

            {/* Help Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-blue-100">
              <h3 className="text-lg font-semibold text-brand-blue mb-4 heading-font">
                Need Help?
              </h3>
              <p className="text-brand-blue-600 mb-4">
                If this error persists, please contact our support team with the error details above.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Link 
                  href="/contact" 
                  className="text-brand-blue hover:text-brand-blue-700 underline"
                >
                  Contact Support
                </Link>
                <span className="hidden sm:inline text-brand-blue-300">|</span>
                <button 
                  onClick={() => window.location.reload()}
                  className="text-brand-blue hover:text-brand-blue-700 underline"
                >
                  Refresh Page
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-sm text-brand-blue-400">
              <p>ICEP Institute - We apologize for the inconvenience</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
