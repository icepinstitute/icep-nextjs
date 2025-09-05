import HeroSectionSwiper from "@/components/Sections/HeroSections/HeroSectionSwiper";
import AboutSectionOne from "@/components/Sections/AboutSections/AboutSectionOne";
import AboutSectionTwo from "@/components/Sections/AboutSections/AboutSectionTwo";
import CampusLifeSection from "@/components/Sections/CampusLifeSection";
import Footer from "@/components/Sections/Footer";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import { CSSOverviewSection, ProgramsAndCourses, TestSeriesSection, MagazineAndBlog, PastPapersTeaser, OurResults, VideoReviews, IeltsSection } from "@/components/Sections/HomeSections";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />

      <main>
        <HeroSectionSwiper />
        <AboutSectionOne />
        <CampusLifeSection />
        <CSSOverviewSection />
        <PastPapersTeaser />
        <ProgramsAndCourses />
        <IeltsSection />
        <TestSeriesSection />
        <AboutSectionTwo />
        <VideoReviews />
        <OurResults />
        <MagazineAndBlog />
      </main>

      <Footer />
    </>
  );
}
