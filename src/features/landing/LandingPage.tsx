import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LatestReportsSection from "./LatestReportsSection";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import ItemCategoriesSection from "./ItemCategoriesSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ItemCategoriesSection />
      <LatestReportsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default LandingPage;