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
import AreasServed from "@/components/AreasServed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="پزشک در منزل تهران | ویزیت متخصص قلب در منزل | نوید زندگی"
        description="ویزیت پزشک در منزل تهران ۲۴ ساعته. متخصص قلب، داخلی، اعصاب در منزل. اکو، هولتر، نوار قلب، آزمایش در محل. تماس: ۰۹۳۸۶۱۱۷۹۱۲"
        keywords="پزشک در منزل, پزشک در منزل تهران, ویزیت پزشک در منزل, متخصص قلب در منزل, اکو در منزل, هولتر در منزل, نوار قلب در منزل, متخصص داخلی در منزل, آزمایش خون در منزل, پرستاری در منزل تهران, ویزیت متخصص در منزل"
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
        <AreasServed />
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
