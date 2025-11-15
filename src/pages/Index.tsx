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
import OrganizationSchema from "@/components/OrganizationSchema";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت پزشک در منزل تهران | نوید زندگی - خدمات پزشکی در منزل"
        description="ویزیت پزشک در منزل تهران با نوید زندگی - اعزام دکتر عمومی، متخصص، پرستار و انجام آزمایش در منزل. خدمات پزشکی درب منزل با کیفیت بالا و قیمت مناسب در تمام مناطق تهران"
        keywords="ویزیت پزشک در منزل تهران, دکتر در منزل, پرستار در منزل تهران, آزمایش در منزل, خدمات پزشکی در منزل"
        canonical="https://navidzendegi.com/"
        ogType="website"
      />
      <OrganizationSchema />
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <PricingInfo />
        <Services />
        <SEOContent />
        <AboutUs />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
