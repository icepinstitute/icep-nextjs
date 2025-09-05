'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PiFilePdf } from 'react-icons/pi';
import { formatSubjectForUrl } from '@/utils/pastPapersTypes';
import type { PastPaper } from '@/utils/pastPapersUtils';

interface PaperCardProps {
  paper: PastPaper;
  index: number;
}

const PaperCard = ({ paper, index }: PaperCardProps) => {
  const urlSubject = formatSubjectForUrl(paper.subject.name);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="w-full"
    >
      <Link href={`/past-papers/${urlSubject}/${paper.id}`}>
        <div className="bg-white border border-brand-blue-100 hover:border-brand-blue-300 text-brand-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 h-full flex items-center gap-4">
          <div className="text-3xl text-brand-red">
            <PiFilePdf />
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium text-brand-blue-800">
              {paper.subject.name}
            </h3>
            <p className="text-sm text-brand-blue-400">
              Years: {paper.yearRange}
            </p>
          </div>

          <div className="flex items-center justify-center px-3 py-1 bg-brand-blue-50 rounded-full text-xs font-medium">
            View
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PaperCard;
