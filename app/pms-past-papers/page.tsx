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
  title: 'PMS Past Papers | ICEP Institute',
  description: 'Access a comprehensive collection of PMS (Provincial Management Service) past papers from all subjects. Download and practice with solved and unsolved papers to enhance your PMS preparation.',
};

export default async function PMSPastPapersPage() {
  // Get all PMS subjects
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
    'Economics': <PiLightbulbBold />,
    'Public Administration': <PiBuildings />,
    'Geography': <PiMountainsBold />,
    'Mathematics': <PiBrainBold />,
    'Statistics': <PiBrainBold />,
    'Urdu Essay & Composition': <PiBookOpenTextBold />,
    'General Knowledge': <PiNewspaperClippingBold />,
    'Everyday Science': <PiBrainBold />,
  };
  
  return (
    <>
      <Topbar />
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero section */}
        <section className="bg-green-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-green-200 mb-4">
              <Link href="/" className="hover:text-green-100">Home</Link>
              <span>/</span>
              <Link href="/past-papers" className="hover:text-green-100">Past Papers</Link>
              <span>/</span>
              <span>PMS Papers</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <Link href="/past-papers" className="text-green-200 hover:text-white transition-colors">
                <PiArrowLeftBold className="text-xl" />
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold heading-font">
                PMS Past Papers
              </h1>
            </div>
            <p className="text-green-100 text-lg max-w-3xl">
              Access a comprehensive collection of PMS past papers from recent years. 
              Practice with real exam questions to enhance your Provincial Management Service preparation.
            </p>
          </div>
        </section>
        
        {/* Subjects Organization */}
        <section className="py-12 md:py-20 bg-brand-white">
          <div className="container mx-auto px-6 md:px-12">
            {/* PMS Compulsory Subjects */}
            {subjectsObject.pms.comp.length > 0 ? (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-green-600 rounded-full"></div>
                  <h2 className="text-3xl font-bold heading-font text-green-700">Compulsory Subjects</h2>
                  <div className="flex-1 h-px bg-green-200"></div>
                </div>
                <p className="text-green-600 mb-8">
                  All PMS candidates must appear in these 4 compulsory subjects.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {subjectsObject.pms.comp.map(async (subject, index) => {
                    const papers = await getPapersBySubject(subject.name);
                    const paperCount = papers.length;
                    return (
                      <SubjectCard 
                        key={`pms-comp-${subject.name}`}
                        subject={subject.name}
                        icon={subjectIcons[subject.name] || <PiBookBookmarkBold />}
                        count={paperCount}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-green-600 rounded-full"></div>
                  <h2 className="text-3xl font-bold heading-font text-green-700">Compulsory Subjects</h2>
                  <div className="flex-1 h-px bg-green-200"></div>
                </div>
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-500 mb-4">PMS compulsory subjects papers are being organized.</p>
                  <p className="text-sm text-gray-400">Expected subjects: Urdu Essay & Composition, English Essay & Composition, General Knowledge, Everyday Science</p>
                </div>
              </div>
            )}
            
            {/* PMS Optional Subjects */}
            {subjectsObject.pms.optional.length > 0 ? (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-brand-yellow rounded-full"></div>
                  <h2 className="text-3xl font-bold heading-font text-green-700">Optional Subjects</h2>
                  <div className="flex-1 h-px bg-green-200"></div>
                </div>
                <p className="text-green-600 mb-8">
                  Choose from various optional subjects based on your background and interest.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {subjectsObject.pms.optional.map(async (subject, index) => {
                    const papers = await getPapersBySubject(subject.name);
                    const paperCount = papers.length;
                    return (
                      <SubjectCard 
                        key={`pms-opt-${subject.name}`}
                        subject={subject.name}
                        icon={subjectIcons[subject.name] || <PiBookBookmarkBold />}
                        count={paperCount}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-brand-yellow rounded-full"></div>
                  <h2 className="text-3xl font-bold heading-font text-green-700">Optional Subjects</h2>
                  <div className="flex-1 h-px bg-green-200"></div>
                </div>
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-500 mb-4">PMS optional subjects papers are being organized.</p>
                  <p className="text-sm text-gray-400">Expected subjects: Economics, Political Science, Public Administration, History, Geography, Mathematics, Statistics, and more</p>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Info section */}
        <section className="py-16 bg-green-50 border-t border-b border-green-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-green-100">
              <h2 className="text-2xl font-bold heading-font text-green-700 mb-4">
                How to Use PMS Past Papers
              </h2>
              
              <div className="space-y-4 text-green-600">
                <p>
                  <strong>1. Understand PMS Pattern:</strong> Review the PMS exam structure, marking scheme, and provincial focus areas.
                </p>
                <p>
                  <strong>2. Focus on Provincial Context:</strong> PMS papers often have questions specific to provincial administration and local governance.
                </p>
                <p>
                  <strong>3. Practice Writing Skills:</strong> Both Urdu and English composition are crucial for PMS success.
                </p>
                <p>
                  <strong>4. Current Affairs:</strong> Stay updated with both national and provincial current affairs and developments.
                </p>
                <p>
                  <strong>5. Optional Strategy:</strong> Choose optional subjects based on your academic background and scoring potential.
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800 font-medium">
                  Need structured PMS preparation? Join ICEP&apos;s comprehensive PMS courses designed specifically for provincial service success.
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
