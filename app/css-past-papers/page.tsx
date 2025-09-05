import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Sections/Footer';
import SubjectCard from '@/components/SubjectCard';
import Link from 'next/link';
import { getAllSubjects, getPapersBySubject } from '@/utils/pastPapersServerUtils';
import { 
  PiExamBold, 
  PiBookOpenTextBold, 
  PiBrainBold, 
  PiNewspaperClippingBold, 
  PiFlagBold, 
  PiHandsPrayingBold, 
  PiBookBookmarkBold,
  PiGlobeBold,
  PiMountainsBold,
  PiLightbulbBold,
  PiTreeBold,
  PiBuildings,
  PiArrowLeftBold
} from 'react-icons/pi';

export const metadata = {
  title: 'CSS Past Papers | ICEP Institute',
  description: 'Access a comprehensive collection of CSS (Central Superior Services) past papers from all subjects. Download and practice with solved and unsolved papers to enhance your CSS preparation.',
};

export default async function CSSPastPapersPage() {
  // Get all CSS subjects
  const subjectsObject = await getAllSubjects();
  
  // Map icons to subjects
  const subjectIcons: Record<string, React.ReactNode> = {
    'English Essay': <PiBookOpenTextBold />,
    'English (Precis & Composition)': <PiExamBold />,
    'General Science & Ability': <PiBrainBold />,
    'Current Affairs': <PiNewspaperClippingBold />,
    'Pakistan Affairs': <PiFlagBold />,
    'Islamic Studies': <PiHandsPrayingBold />,
    'Political Science': <PiBuildings />,
    'Indo-Pak History': <PiMountainsBold />,
    'International Relations': <PiGlobeBold />,
    'Environmental Science': <PiTreeBold />,
    'Governance & Public Policies': <PiLightbulbBold />,
  };
  
  return (
    <>
      <Topbar />
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero section */}
        <section className="bg-brand-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-brand-blue-200 mb-4">
              <Link href="/" className="hover:text-brand-blue-100">Home</Link>
              <span>/</span>
              <Link href="/past-papers" className="hover:text-brand-blue-100">Past Papers</Link>
              <span>/</span>
              <span>CSS Papers</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <Link href="/past-papers" className="text-brand-blue-200 hover:text-white transition-colors">
                <PiArrowLeftBold className="text-xl" />
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold heading-font">
                CSS Past Papers
              </h1>
            </div>
            <p className="text-brand-blue-100 text-lg max-w-3xl">
              Access a comprehensive collection of CSS past papers from 2014 to 2024. 
              Practice with real exam questions to enhance your Central Superior Services preparation.
            </p>
          </div>
        </section>
        
        {/* Subjects Organization */}
        <section className="py-12 md:py-20 bg-brand-white">
          <div className="container mx-auto px-6 md:px-12">
            {/* CSS Compulsory Subjects */}
            {subjectsObject.css.comp.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-brand-blue rounded-full"></div>
                  <h2 className="text-3xl font-bold heading-font text-brand-blue">Compulsory Subjects</h2>
                  <div className="flex-1 h-px bg-brand-blue-200"></div>
                </div>
                <p className="text-brand-blue-600 mb-8">
                  All CSS candidates must appear in these 6 compulsory subjects (100 marks each).
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {subjectsObject.css.comp.map(async (subject, index) => {
                    const papers = await getPapersBySubject(subject.name);
                    const paperCount = papers.length;
                    return (
                      <SubjectCard 
                        key={`css-comp-${subject.name}`}
                        subject={subject.name}
                        icon={subjectIcons[subject.name] || <PiBookBookmarkBold />}
                        count={paperCount}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* CSS Optional Subjects */}
            {subjectsObject.css.optional.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-brand-yellow rounded-full"></div>
                  <h2 className="text-3xl font-bold heading-font text-brand-blue">Optional Subjects</h2>
                  <div className="flex-1 h-px bg-brand-blue-200"></div>
                </div>
                <p className="text-brand-blue-600 mb-8">
                  Choose 6 optional subjects from different groups (100 marks each).
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {subjectsObject.css.optional.map(async (subject, index) => {
                    const papers = await getPapersBySubject(subject.name);
                    const paperCount = papers.length;
                    return (
                      <SubjectCard 
                        key={`css-opt-${subject.name}`}
                        subject={subject.name}
                        icon={subjectIcons[subject.name] || <PiBookBookmarkBold />}
                        count={paperCount}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Info section */}
        <section className="py-16 bg-brand-blue-50 border-t border-b border-brand-blue-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-brand-blue-100">
              <h2 className="text-2xl font-bold heading-font text-brand-blue mb-4">
                How to Use CSS Past Papers
              </h2>
              
              <div className="space-y-4 text-brand-blue-700">
                <p>
                  <strong>1. Understand the CSS Pattern:</strong> Review the CSS exam structure, marking scheme (1200 marks written + 300 interview), and question formats.
                </p>
                <p>
                  <strong>2. Practice Subject-wise:</strong> Start with compulsory subjects and then move to your chosen optional subjects.
                </p>
                <p>
                  <strong>3. Time Management:</strong> CSS papers are 3 hours each. Practice under timed conditions to improve speed.
                </p>
                <p>
                  <strong>4. Essay Writing:</strong> Pay special attention to English Essay and Urdu Essay papers for writing skills.
                </p>
                <p>
                  <strong>5. Current Affairs:</strong> Focus on Pakistan Affairs and Current Affairs for updated information and analysis.
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-brand-yellow-50 border border-brand-yellow-200 rounded-md">
                <p className="text-brand-blue-800 font-medium">
                  Need structured CSS preparation? Join ICEP&apos;s comprehensive CSS courses with expert mentorship and mock tests.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
