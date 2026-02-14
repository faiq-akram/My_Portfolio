import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedWork from "@/components/home/FeaturedWork";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturedWork />
          <CTASection />
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Index;
