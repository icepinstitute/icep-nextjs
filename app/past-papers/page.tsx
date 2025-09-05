import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Sections/Footer';
import Link from 'next/link';
import { getAllSubjects } from '@/utils/pastPapersServerUtils';
import { 
  PiExamBold, 
  PiBuildings,
  PiBookOpenTextBold,
  PiGraduationCapBold
} from 'react-icons/pi';

export const metadata = {
  title: 'CSS & PMS Past Papers | ICEP Institute',
  description: 'Access a comprehensive collection of CSS and PMS past papers. Choose between Central Superior Services (CSS) or Provincial Management Service (PMS) exam preparations.',
};

export default async function PastPapersPage() {
  // Get all unique subjects to show counts
  const subjectsObject = await getAllSubjects();
  return (
    <>
      <Topbar />
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero section */}
        <section className="bg-brand-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold heading-font mb-4">
              Past Papers
            </h1>
            <p className="text-brand-blue-100 text-lg max-w-3xl">
              Choose your examination type to access a comprehensive collection of past papers. 
            </p>
          </div>
        </section>
        
        {/* Exam Options */}
        <section className="py-10 bg-brand-white">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold heading-font text-brand-blue mb-12 text-center">
              Select Your Examination
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* CSS Card */}
              <Link href="/css-past-papers">
                <div className="bg-gradient-to-br from-brand-blue to-brand-blue-600 text-white rounded-xl shadow-lg p-8 cursor-pointer hover:from-brand-blue-600 hover:to-brand-blue-700 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-brand-yellow rounded-lg flex items-center justify-center">
                      <PiExamBold className="text-3xl text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">CSS Papers</h3>
                      <p className="text-brand-blue-100">Central Superior Services</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center bg-white/10 rounded p-3">
                      <span>Compulsory Subjects</span>
                      <span className="font-semibold">{subjectsObject.css.comp.length}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 rounded p-3">
                      <span>Optional Subjects</span>
                      <span className="font-semibold">{subjectsObject.css.optional.length}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-block bg-brand-yellow text-brand-blue px-4 py-2 rounded-lg font-semibold">
                      Browse CSS Papers →
                    </span>
                  </div>
                </div>
              </Link>

              {/* PMS Card */}
              <Link href="/pms-past-papers">
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl shadow-lg p-8 cursor-pointer hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-brand-yellow rounded-lg flex items-center justify-center">
                      <PiBuildings className="text-3xl text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">PMS Papers</h3>
                      <p className="text-green-100">Provincial Management Service</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center bg-white/10 rounded p-3">
                      <span>Compulsory Subjects</span>
                      <span className="font-semibold">{subjectsObject.pms.comp.length}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 rounded p-3">
                      <span>Optional Subjects</span>
                      <span className="font-semibold">{subjectsObject.pms.optional.length}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-block bg-brand-yellow text-green-700 px-4 py-2 rounded-lg font-semibold">
                      Browse PMS Papers →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiBookOpenTextBold className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Comprehensive Collection</h3>
                <p className="text-gray-600">Access past papers from multiple years with detailed categorization by subjects and exam types.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiGraduationCapBold className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Exam Pattern Analysis</h3>
                <p className="text-gray-600">Understand question patterns and marking schemes through systematic practice with real papers.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiExamBold className="text-2xl text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">Regular Updates</h3>
                <p className="text-gray-600">Stay updated with the latest papers and examination trends for better preparation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
