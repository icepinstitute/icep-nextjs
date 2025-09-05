'use client';
import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { 
  PiHouseBold,
  PiGearBold,
  PiWarningBold,
  PiChatCircleBold
} from 'react-icons/pi';

export default function Error500() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-white to-brand-blue-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12">
          <Logo />
        </div>

        {/* 500 Icon and Number */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <PiGearBold className="text-8xl text-brand-red mr-4 animate-spin" />
            <div className="text-9xl font-bold text-brand-blue leading-none">500</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 heading-font">
            Internal Server Error
          </h1>
          <p className="text-lg text-brand-blue-600 mb-6 leading-relaxed">
            We&apos;re experiencing some technical difficulties on our end. 
            Our team has been notified and is working to resolve this issue.
          </p>
          <div className="bg-brand-red-50 border border-brand-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <PiWarningBold className="text-brand-red w-5 h-5 mr-2" />
              <span className="text-brand-red font-medium">Temporary Service Interruption</span>
            </div>
            <p className="text-brand-red-600 text-sm">
              Please try again in a few minutes. If the problem persists, contact our support team.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          
          <Link
            href="/"
            className="btn bg-brand-yellow text-brand-blue hover:bg-brand-yellow-600 w-full sm:w-auto"
          >
            <PiHouseBold className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          
          <Link
            href="/contact"
            className="btn border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full sm:w-auto"
          >
            <PiChatCircleBold className="w-5 h-5 mr-2" />
            Contact Support
          </Link>
        </div>

        {/* What You Can Do */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-blue-100 mb-8">
          <h3 className="text-lg font-semibold text-brand-blue mb-4 heading-font">
            What can you do while we fix this?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <span className="text-2xl mr-3">⏰</span>
              <div>
                <h4 className="font-medium text-brand-blue">Wait a moment</h4>
                <p className="text-sm text-brand-blue-600">Try refreshing the page in a few minutes</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📚</span>
              <div>
                <h4 className="font-medium text-brand-blue">Browse other content</h4>
                <p className="text-sm text-brand-blue-600">Check out our past papers and magazines</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📞</span>
              <div>
                <h4 className="font-medium text-brand-blue">Contact us</h4>
                <p className="text-sm text-brand-blue-600">Reach out if you need immediate assistance</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🔄</span>
              <div>
                <h4 className="font-medium text-brand-blue">Check back later</h4>
                <p className="text-sm text-brand-blue-600">We&apos;re working to resolve this quickly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Details */}
        <div className="bg-brand-blue-50 rounded-lg p-4 mb-8">
          <details className="text-left">
            <summary className="text-brand-blue font-medium cursor-pointer hover:text-brand-blue-700">
              Technical Details (Click to expand)
            </summary>
            <div className="mt-3 text-sm text-brand-blue-600 space-y-2">
              <p><strong>Error Code:</strong> 500 - Internal Server Error</p>
              <p><strong>Time:</strong> {new Date().toLocaleString()}</p>
              <p><strong>Status:</strong> Our team has been automatically notified</p>
              <p><strong>What&apos;s happening:</strong> There&apos;s a temporary issue with our server that&apos;s preventing your request from being processed.</p>
            </div>
          </details>
        </div>

        {/* Footer Note */}
        <div className="text-sm text-brand-blue-400">
          <p>Error ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          <p className="mt-1">ICEP Institute - Committed to your educational success</p>
        </div>
      </div>
    </div>
  );
}
