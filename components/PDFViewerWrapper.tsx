'use client';

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-gray-600">Loading PDF...</p>
      </div>
    </div>
  )
});

interface PDFViewerWrapperProps {
  fileUrl: string;
}

const PDFViewerWrapper = ({ fileUrl }: PDFViewerWrapperProps) => {
  return <PDFViewer fileUrl={fileUrl} />;
};

export default PDFViewerWrapper;
