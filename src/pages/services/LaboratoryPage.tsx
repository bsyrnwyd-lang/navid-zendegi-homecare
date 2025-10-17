import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import LazyImage from "@/components/LazyImage";
import { CheckCircle } from "lucide-react";
import medicalEquipmentImage from "@/assets/medical-equipment-home.jpg";

const LaboratoryPage = () => {
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
    <>
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

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                خدمات آزمایشگاه در منزل
              </h1>

              <LazyImage
                src={medicalEquipmentImage}
                alt="خدمات آزمایشگاه در منزل - نمونه‌گیری حرفه‌ای"
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              />
            </header>

            <div className="space-y-6 text-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">انجام آزمایش در منزل با مجموعه «نوید زندگی»</h2>
                <p>
                  در بسیاری از مواقع، مراجعه حضوری به آزمایشگاه برای بیماران، سالمندان یا افرادی که محدودیت زمانی دارند دشوار است. شرکت خدمات پزشکی در منزل نوید زندگی این مشکل را برطرف کرده و امکان انجام کلیه خدمات آزمایشگاهی را در منزل یا محل کار شما فراهم کرده است.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">مزایای انجام آزمایش در منزل</h2>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>صرفه‌جویی در زمان و جلوگیری از اتلاف وقت در صف‌های آزمایشگاه</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>راحتی و آرامش بیمار در محیط منزل</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>کاهش خطر ابتلا به عفونت‌ها و بیماری‌های واگیردار</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>انجام نمونه‌گیری با رعایت کامل اصول بهداشتی</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>ارسال سریع جواب آزمایش به‌صورت آنلاین یا چاپی</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">نحوه انجام آزمایش در منزل</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">۱. ارسال نسخه پزشک</h3>
                    <p>در صورت داشتن نسخه، کافی است عکس آن را برای همکاران ما ارسال کنید.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">۲. اعزام نمونه‌گیر</h3>
                    <p>نمونه‌گیر حرفه‌ای در سریع‌ترین زمان ممکن به آدرس شما مراجعه می‌کند و نمونه‌گیری انجام می‌شود.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">۳. تحویل نتایج</h3>
                    <p>پس از انجام آزمایش، نتیجه در کوتاه‌ترین زمان از طریق واتساپ، پیامک یا پیک برای شما ارسال می‌گردد.</p>
                  </div>
                </div>
              </section>

              <section className="bg-muted/50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">بدون نسخه پزشک هم می‌توانید آزمایش دهید</h2>
                <p>
                  اگر نسخه پزشک ندارید، جای نگرانی نیست. مجموعه نوید زندگی دارای پزشک مقیم است. شما می‌توانید شرح حال خود را به‌صورت تلفنی یا آنلاین توضیح دهید تا پزشک بر اساس علائم و نیاز شما، آزمایش‌های لازم را تجویز کند.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">انواع آزمایش‌هایی که در منزل انجام می‌شود</h2>
                <p>خدمات آزمایشگاهی در منزل شامل طیف گسترده‌ای از تست‌هاست، از جمله:</p>
                
                <ul className="list-disc list-inside space-y-2 mr-4 mt-4">
                  <li>آزمایش خون کامل (CBC)</li>
                  <li>آزمایش قند و چربی</li>
                  <li>آزمایش هورمونی و تیروئید</li>
                  <li>تست کرونا و آنفلوآنزا</li>
                  <li>آزمایش ادرار و مدفوع</li>
                  <li>آزمایش‌های تخصصی قلب، کبد، کلیه و دیابت</li>
                  <li>آزمایش‌های چکاپ کامل سلامت</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">چرا «نوید زندگی» را انتخاب کنیم؟</h2>
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>نمونه‌گیران مجرب و آموزش‌دیده</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>همکاری با آزمایشگاه‌های معتبر و دارای مجوز وزارت بهداشت</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>سرعت بالا در اعزام و تحویل نتایج</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>دقت بالا در فرآیند نمونه‌گیری و انتقال</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>پشتیبانی تلفنی و آنلاین همه‌روزه</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">نتیجه‌گیری</h2>
                <p>
                  با خدمات آزمایشگاه در منزل نوید زندگی دیگر نیازی به حضور در مراکز شلوغ نیست. شما می‌توانید در منزل خود با آرامش، آزمایش‌های لازم را انجام دهید و نتیجه را در کوتاه‌ترین زمان دریافت کنید.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              {/* Contact Section */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary">نیاز به نمونه‌گیری در منزل دارید؟</h3>
                <p className="text-muted-foreground mb-4">
                  برای دریافت خدمات آزمایشگاهی در منزل با ما تماس بگیرید
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a 
                    href="tel:+989386117912" 
                    className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    ۰۹۳۸-۶۱۱-۷۹۱۲
                  </a>
                  <span className="text-muted-foreground hidden sm:inline">|</span>
                  <span className="text-sm text-muted-foreground">پاسخگویی ۲۴ ساعته</span>
                </div>
              </section>

              <div className="mt-8">
                <PricingInfo />
              </div>
            </div>
          </article>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default LaboratoryPage;
