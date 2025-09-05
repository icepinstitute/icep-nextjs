import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Sections/Footer';
import PaperCard from '@/components/PaperCard';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import {  
  getSubjectFromUrl, 
  formatSubjectForUrl 
} from '@/utils/pastPapersTypes';

import { getPapersBySubject , getAllSubjects} from '@/utils/pastPapersServerUtils';

// Define the structure of page params from dynamic route segments
type PageParams = {
  subject: string;
}

// Define Props type with correct searchParams type
type Props = {
  params: PageParams;
  searchParams: { [key: string]: string | string[] | undefined };
}

export const dynamicParams = true;

export async function generateStaticParams(): Promise<PageParams[]> {
  const subjectsObject = await getAllSubjects();
  const subjects = [...subjectsObject.css.comp, ...subjectsObject.css.optional];
  // const compulsoryCSSSubjects = subjectsObject.css.comp;
  // const optionalCSSSubjects = subjectsObject.css.optional;
  
  return subjects.map(subject => ({
    subject: formatSubjectForUrl(subject.name)
  }));
}

export async function generateMetadata({ params }: Props) {
  // Make sure to use promise here to avoid Next.js warnings
  const subjectParam = (await Promise.resolve(params)).subject;
  const subjectsObject = await getAllSubjects();
  const subjects = [...subjectsObject.css.comp, ...subjectsObject.css.optional];
  const subject = getSubjectFromUrl(subjectParam, subjects.map(subject => subject.name));
  
  if (!subject) {
    return {
      title: 'Subject Not Found | ICEP Institute'
    };
  }
  
  return {
    title: `${subject} Past Papers | ICEP Institute`,
    description: `Access past papers for ${subject} CSS exams from 2014 to 2024. Download and practice with real exam questions to enhance your preparation.`
  };
}

export default async function SubjectPage({ params }: Props) {
  // Make sure to use promise here to avoid Next.js warnings
  const subjectParam = await Promise.resolve(params.subject);
  
  // Get the actual subject name from the URL parameter
  const subjectsObject = await getAllSubjects();
  const subjects = [...subjectsObject.css.comp, ...subjectsObject.css.optional];
  const subject = getSubjectFromUrl(subjectParam, subjects.map(subject => subject.name));
  console.log('found subject', subject);
  
  // If subject doesn't exist, show 404
  if (!subject) {
    notFound();
  }
  
  // Get papers for this subject
  const papers = await getPapersBySubject(subject);
  console.log('found papers for this subject', papers);
  
  return (
    <>
      <Topbar />
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero section */}
        <section className="bg-brand-blue text-white py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 text-brand-blue-200 mb-4">
              <Link href="/" className="hover:text-brand-blue-100">Home</Link>
              <ChevronRightIcon className="w-4 h-4" />
              <Link href="/past-papers" className="hover:text-brand-blue-100">Past Papers</Link>
              <ChevronRightIcon className="w-4 h-4" />
              <span>{subject}</span>
            </div>
            
            <h1 className="text-4xl font-bold heading-font mb-4">
              {subject} Past Papers
            </h1>
            <p className="text-brand-blue-100 text-lg max-w-3xl">
              Access past papers for {subject} from recent CSS examinations. 
              Practice with real questions to enhance your preparation.
            </p>
          </div>
        </section>
        
        {/* Papers list */}
        <section className="py-12 md:py-16 bg-brand-white">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-bold heading-font text-brand-blue mb-6">
              Available {subject} Papers
            </h2>
            
            {papers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {papers.map((paper, index) => (
                  <PaperCard 
                    key={paper.id}
                    paper={paper}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-brand-blue-400 mb-4">No past papers available for this subject yet.</p>
                <Link 
                  href="/past-papers"
                  className="inline-block bg-brand-blue text-white px-4 py-2 rounded-md hover:bg-brand-blue-600"
                >
                  View Other Subjects
                </Link>
              </div>
            )}
          </div>
        </section>
        
        {/* Tips section */}
        <section className="py-12 bg-brand-blue-50 border-t border-b border-brand-blue-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-brand-blue-100">
              <h2 className="text-2xl font-bold heading-font text-brand-blue mb-4">
                Tips for {subject} Preparation
              </h2>
              
              <div className="space-y-3 text-brand-blue-700">
                <p>
                  <strong>Focus on Fundamentals:</strong> Ensure you have a solid understanding of core concepts and theories.
                </p>
                <p>
                  <strong>Analyze Question Patterns:</strong> Study past papers to identify recurring themes and question formats.
                </p>
                <p>
                  <strong>Practice Answer Writing:</strong> Regular practice helps improve your writing style, coherence, and time management.
                </p>
                <p>
                  <strong>Stay Updated:</strong> Keep up with current events and developments related to this subject.
                </p>
              </div>
              
              <div className="mt-6 flex justify-between items-center flex-col md:flex-row gap-4">
                <p className="text-brand-blue-500">
                  Need more study materials for {subject}?
                </p>
                <Link 
                  href="/courses"
                  className="inline-block bg-brand-red text-white px-5 py-2 rounded-md hover:bg-brand-red-600 transition"
                >
                  Explore Our Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
