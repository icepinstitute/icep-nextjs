'use client'
import React from 'react';
import Image from 'next/image';

const PDFViewerSimple = ({ pdfUrl }: { pdfUrl: string }) => {
  // Create PDF URL with toolbar disabled to prevent download
  const pdfUrlWithParams = `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0`;

  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      {/* PDF Iframe */}
      <iframe 
        src={pdfUrlWithParams}
        width="100%" 
        height="100%"
        title="PDF Viewer"
        className="border-0"
        style={{
          pointerEvents: 'auto',
        }}
        onContextMenu={(e) => e.preventDefault()} // Disable right-click
      />
      
      {/* Watermark Logo */}
      {/* <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md">
          <Image
            src="/images/logos/logo.png"
            alt="ICEP Institute"
            width={40}
            height={40}
            className="opacity-70"
          />
        </div>
      </div> */}
      
      {/* Additional watermark in center (subtle) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="">
          <Image
            src="/images/logos/logo.png"
            alt="ICEP Institute"
            width={300}
            height={300}
            className="opacity-30 grayscale"
          />
        </div>
      </div>
        {/* Overlay to prevent right-click and selection */}
      <div 
        className="absolute inset-0 z-5"
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      
      {/* Bottom watermark */}
      {/* <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1">
          <Image
            src="/images/logos/logo.png"
            alt="ICEP Institute"
            width={24}
            height={24}
            className="opacity-70"
          />
          <span className="text-xs font-semibold text-gray-700">ICEP Institute</span>
        </div>
      </div> */}    </div>
  );
};

export default PDFViewerSimple;