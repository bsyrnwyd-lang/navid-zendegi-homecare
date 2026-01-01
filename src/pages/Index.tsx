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
import RecentArticles from "@/components/RecentArticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="پزشک در منزل تهران | ویزیت دکتر عمومی و متخصص در منزل | نوید زندگی"
        description="پزشک در منزل تهران - ویزیت دکتر عمومی، متخصص داخلی، متخصص قلب و پرستار در منزل شما. خدمات پزشکی در منزل تهران با کادر مجرب، تجهیزات کامل و قیمت مناسب. تماس: 09386117912"
        keywords="پزشک در منزل تهران, ویزیت پزشک در منزل, دکتر در منزل تهران, خدمات پزشکی در منزل, متخصص در منزل تهران, پرستار در منزل, آزمایش در منزل تهران, ویزیت دکتر در منزل"
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
        <RecentArticles />
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
