import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollAnimationSection from "@/components/ScrollAnimationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GolldCard - Cartão Inteligente Premium | Conecte Pessoas e Negócios</title>
        <meta
          name="description"
          content="GolldCard é o cartão inteligente premium com NFC. Compartilhe suas informações de contato com um toque. Personalizável, sustentável e profissional."
        />
        <meta name="keywords" content="cartão inteligente, NFC, cartão digital, networking, GolldCard, cartão premium" />
        <meta property="og:title" content="GolldCard - Cartão Inteligente Premium" />
        <meta property="og:description" content="Conecte Pessoas e Negócios com um Toque. Cartão inteligente, profissional e personalizável." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://golldcard.com.br" />
      </Helmet>
      
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
    </>
  );
};

export default Index;
