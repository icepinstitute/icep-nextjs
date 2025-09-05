'use client';

import * as React from 'react';
import Image from 'next/image';
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = ({ fileUrl }: { fileUrl: string }) => {
  // Custom toolbar without download button
  // const renderToolbar = React.useCallback((Toolbar: React.ElementType) => (
  //   <Toolbar>
  //     {(slots: Record<string, React.ReactNode>) => {
  //       // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //       const { Download, ...otherSlots } = slots;
  //       // Download button ko remove kar dete hain, baaki sab rakhte hain
  //       return (
  //         <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
  //           {Object.values(otherSlots).map((slot: React.ReactNode, index: number) => (
  //             <React.Fragment key={index}>{slot}</React.Fragment>
  //           ))}
  //         </div>
  //       );
  //     }}
  //   </Toolbar>
  // ), []);

  // Default layout plugin with custom toolbar
  // const defaultLayoutPluginInstance = defaultLayoutPlugin({
  //   sidebarTabs: () => [], // Sidebar tabs remove kar dete hain
  //   renderToolbar,
  // });

  return (
    <div className="relative">
      {/* PDF Viewer Container */}
      <div
        className='h-[350px] sm:h-[90vh] rounded-xl overflow-hidden'
        style={{ border: '1px solid #eee' }}
        onContextMenu={(e) => e.preventDefault()} // Right-click disable
        onKeyDown={(e) => {
          // Only disable Ctrl+S (Save) for download protection
          if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
          }
        }}
      >
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={fileUrl}
            // plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>

      {/* Watermark Logo - Center (Subtle) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
        <div className="w-[25vw] aspect-square">
          <Image
            src="/images/logos/logo.png"
            alt="ICEP Institute"
            fill
            className="opacity-30 object-cover object-center"
          />
        </div>
      </div>
      
      {/* CSS to hide only download button */}
      {/* <style>{`
        .rpv-toolbar__item[data-testid="toolbar__download"] {
          display: none !important;
        }
        .rpv-menu__item[data-testid="context-menu__download"] {
          display: none !important;
        }
        .rpv-toolbar__item[aria-label="Download"] {
          display: none !important;
        }
      `}</style> */}
    </div>
  );
};

export default PDFViewer;