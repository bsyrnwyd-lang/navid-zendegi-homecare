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
        title="ویزیت متخصص قلب در منزل تهران | هولتر در منزل | پزشک عمومی در منزل | نوید زندگی"
        description="ویزیت متخصص قلب در منزل تهران، هولتر ۲۴ ساعته در منزل، ویزیت پزشک عمومی و متخصص داخلی در منزل شما. اکوکاردیوگرافی و نوار قلب در منزل با تجهیزات کامل. خدمات ۲۴ ساعته. تماس: 09386117912"
        keywords="ویزیت متخصص قلب در منزل, هولتر در منزل, ویزیت متخصص در منزل, پزشک عمومی در منزل, اکو قلب در منزل, نوار قلب در منزل, ویزیت پزشک در منزل تهران, متخصص داخلی در منزل"
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
