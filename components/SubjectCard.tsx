'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatSubjectForUrl } from '@/utils/pastPapersTypes';

interface SubjectCardProps {
  subject: string;
  icon?: React.ReactNode;
  count?: number;
  index: number;
}

const SubjectCard = ({ subject, icon, count, index }: SubjectCardProps) => {
  const urlEncodedSubject = formatSubjectForUrl(subject);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/past-papers/${urlEncodedSubject}`}>
        <div className="bg-brand-blue text-brand-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 h-full flex flex-col items-center justify-center gap-3">
          {icon && <div className="text-3xl text-brand-yellow mb-2">{icon}</div>}
          
          <h3 className="text-center font-medium text-md">
            {subject}
          </h3>
          
          {count !== undefined && (
            <span className="text-xs bg-brand-yellow text-brand-blue px-2 py-1 rounded-full font-medium">
              {count} Paper{count !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default SubjectCard;
