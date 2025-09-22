import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SEOContent from "@/components/SEOContent";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <Hero />
        <Services />
        <SEOContent />
        <AboutUs />
        <WhyChooseUs />
        <PricingInfo />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
