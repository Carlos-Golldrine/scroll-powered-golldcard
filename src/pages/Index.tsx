import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import ScrollJourneyCard from "@/components/ScrollJourneyCard";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main">
      <Header />
      
      {/* Hero with floating card that follows scroll */}
      <div className="relative">
        <HeroContent />
        <ScrollJourneyCard />
      </div>
      
      {/* Static sections after the scroll journey */}
      <main className="relative z-10 bg-gradient-main">
        <HowItWorksSection />
        <ProductsSection />
        <BenefitsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
