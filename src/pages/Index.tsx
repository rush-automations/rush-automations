import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import QSRSection from "@/components/QSRSection";
import IndustrialSection from "@/components/IndustrialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <QSRSection />
      <IndustrialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
