import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, CheckCircle, Phone, ClipboardList, Heart, FileText } from "lucide-react";
import medicalEquipmentImage from "@/assets/medical-equipment-home.jpg";

const LaboratoryPage = () => {
  const phoneNumber = "09386117912";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "خدمات", url: "/#services" },
    { name: "خدمات آزمایشگاه در منزل", url: "/services/laboratory" }
  ];

  const faqs = [
    {
      question: "چه آزمایش‌هایی را می‌توانم در منزل انجام دهم؟",
      answer: "شما می‌توانید انواع آزمایش‌های خون، ادرار، مدفوع، آزمایش‌های هورمونی، تست کرونا، آزمایش‌های تخصصی قلب، کبد، کلیه، دیابت و چکاپ کامل را در منزل انجام دهید."
    },
    {
      question: "آیا بدون نسخه پزشک هم می‌توانم آزمایش بدهم؟",
      answer: "بله، مجموعه نوید زندگی دارای پزشک مقیم است و شما می‌توانید شرح حال خود را توضیح دهید تا پزشک بر اساس علائم، آزمایش‌های لازم را تجویز کند."
    },
    {
      question: "نتایج آزمایش چه زمانی آماده می‌شود؟",
      answer: "نتایج آزمایش در کوتاه‌ترین زمان ممکن از طریق واتساپ، پیامک یا پیک برای شما ارسال می‌گردد. زمان دقیق بستگی به نوع آزمایش دارد."
    },
    {
      question: "چگونه می‌توانم از خدمات آزمایشگاه در منزل استفاده کنم؟",
      answer: "کافی است با شماره 09386117912 تماس بگیرید یا عکس نسخه پزشک خود را ارسال کنید. نمونه‌گیر حرفه‌ای در سریع‌ترین زمان به منزل شما مراجعه می‌کند."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="خدمات آزمایشگاه در منزل تهران | نوید زندگی"
        description="انجام آزمایش خون، ادرار و سایر آزمایش‌های تخصصی در منزل با نمونه‌گیران حرفه‌ای. تحویل سریع نتایج با بالاترین دقت و کیفیت."
        keywords="آزمایش در منزل، خدمات آزمایشگاهی در منزل، نمونه‌گیری در منزل، آزمایش خون در خانه، آزمایش ادرار در منزل"
        canonical="https://navidezendegi.com/services/laboratory"
      />
      
      <StructuredData 
        breadcrumbs={breadcrumbItems}
        service={{
          name: "خدمات آزمایشگاه در منزل",
          description: "انجام کلیه آزمایش‌های خون، ادرار، هورمونی و تخصصی در منزل با نمونه‌گیران مجرب",
          provider: "نوید زندگی",
          areaServed: "تهران",
          serviceType: "خدمات آزمایشگاهی در منزل"
        }}
        faqs={faqs}
      />

      <Header />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
                  خدمات آزمایشگاه در منزل
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  انجام آزمایش در منزل با مجموعه «نوید زندگی» - راحتی، دقت و سرعت در خدمات آزمایشگاهی
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleCall}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: {phoneNumber}
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={medicalEquipmentImage} 
                  alt="خدمات آزمایشگاه در منزل - نمونه‌گیری حرفه‌ای"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center mb-12">مزایای انجام آزمایش در منزل</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">صرفه‌جویی در زمان</h3>
                  <p className="text-muted-foreground">جلوگیری از اتلاف وقت در صف‌های آزمایشگاه</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">راحتی و آرامش بیمار در محیط منزل</h3>
                  <p className="text-muted-foreground">انجام آزمایش در محیط آرام و راحت خانه</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                <Microscope className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">کاهش خطر ابتلا به عفونت‌ها</h3>
                  <p className="text-muted-foreground">کاهش خطر ابتلا به بیماری‌های واگیردار</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                <ClipboardList className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">انجام نمونه‌گیری با رعایت کامل اصول بهداشتی</h3>
                  <p className="text-muted-foreground">نمونه‌گیری با استانداردهای بالا</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">ارسال سریع جواب آزمایش</h3>
                  <p className="text-muted-foreground">تحویل نتایج به‌صورت آنلاین یا چاپی</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center mb-12">نحوه انجام آزمایش در منزل</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-lg bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">ارسال نسخه پزشک</h3>
                  <p className="text-muted-foreground">
                    در صورت داشتن نسخه، عکس آن را برای ما ارسال کنید. اگر نسخه ندارید، پزشک مقیم ما آزمایش‌های لازم را تجویز می‌کند.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-lg bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">اعزام نمونه‌گیر</h3>
                  <p className="text-muted-foreground">
                    نمونه‌گیر حرفه‌ای در سریع‌ترین زمان ممکن به آدرس شما مراجعه کرده و نمونه‌گیری را انجام می‌دهد.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-lg bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">تحویل نتایج</h3>
                  <p className="text-muted-foreground">
                    پس از انجام آزمایش، نتیجه در کوتاه‌ترین زمان از طریق واتساپ، پیامک یا پیک برای شما ارسال می‌گردد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tests Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center mb-12">انواع آزمایش‌هایی که در منزل انجام می‌شود</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Microscope className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">آزمایش‌های عمومی</h3>
                </div>
                <ul className="space-y-2 mr-11">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary ml-2 flex-shrink-0" />
                    <span>آزمایش خون کامل (CBC)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary ml-2 flex-shrink-0" />
                    <span>آزمایش قند و چربی</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary ml-2 flex-shrink-0" />
                    <span>آزمایش هورمونی و تیروئید</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary ml-2 flex-shrink-0" />
                    <span>تست کرونا و آنفلوآنزا</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary ml-2 flex-shrink-0" />
                    <span>آزمایش ادرار و مدفوع</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary ml-2 flex-shrink-0" />
                    <span>آزمایش‌های تخصصی قلب، کبد، کلیه و دیابت</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary ml-2 flex-shrink-0" />
                    <span>آزمایش‌های چکاپ کامل سلامت</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center mb-12">چرا «نوید زندگی» را انتخاب کنیم؟</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-card/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">نمونه‌گیران مجرب و آموزش‌دیده</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-card/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">همکاری با آزمایشگاه‌های معتبر و دارای مجوز وزارت بهداشت</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-card/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">سرعت بالا در اعزام و تحویل نتایج</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-card/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">دقت بالا در فرآیند نمونه‌گیری و انتقال</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-card/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">پشتیبانی تلفنی و آنلاین همه‌روزه</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Contact Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="section-title mb-6">آزمایش در منزل با نوید زندگی</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              دیگر نیازی به حضور در مراکز شلوغ نیست. با آرامش در منزل خود آزمایش‌های لازم را انجام دهید و نتیجه را در کوتاه‌ترین زمان دریافت کنید.
            </p>
            <button
              onClick={handleCall}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: {phoneNumber}
            </button>
          </div>
        </section>

        {/* Pricing Info Section */}
        <section className="medical-section bg-background">
          <div className="container mx-auto">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default LaboratoryPage;
