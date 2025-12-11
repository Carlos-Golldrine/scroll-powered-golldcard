import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollAnimationSection from "@/components/ScrollAnimationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ScrollAnimationSection />
        <HowItWorksSection />
        <ProductsSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
