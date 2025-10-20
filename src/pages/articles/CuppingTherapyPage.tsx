import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import cuppingTherapyImage from "@/assets/cupping-therapy-home.jpg";
import generalDoctorImage from "@/assets/general-doctor-home.jpg";
import nursingImage from "@/assets/nursing-home-care.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";

const CuppingTherapyPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqs = [
    {
      question: "آیا حجامت از نظر پزشکی تأیید شده است؟",
      answer: "حجامت از نظر پزشکی رایج فاقد تأیید علمی قطعی است، اما در میان باورهای طب سنتی همچنان طرفداران زیادی دارد. اگر تصمیم به انجام حجامت دارید، حتماً با رعایت کامل اصول بهداشتی و استریل انجام دهید."
    },
    {
      question: "تفاوت حجامت و فصد خون چیست؟",
      answer: "فصد خون یک روش پزشکی پذیرفته شده برای کاهش حجم خون در شرایط خاص پزشکی (مانند پلی‌سیتمی) است که باید تحت نظر پزشک انجام شود. حجامت یک روش طب سنتی است که برای خارج کردن مقادیر کم خون از طریق خراش‌های کوچک استفاده می‌شود."
    },
    {
      question: "آیا می‌توانم به جای اهدای خون، حجامت انجام دهم؟",
      answer: "خیر، اگر شرایط اهدای خون را دارید، حتماً به مراکز انتقال خون مراجعه کنید. اهدای خون علاوه بر مزایای سلامتی برای شما، نجات‌بخش جان یک بیمار نیازمند است. حجامت یا فصد خون تنها برای افرادی است که منع اهدای خون دارند."
    },
    {
      question: "آیا حجامت در منزل ایمن است؟",
      answer: "حجامت در منزل تنها در صورتی ایمن است که با رعایت کامل اصول بهداشتی، استفاده از ابزار یکبار مصرف و توسط کادر مجرب انجام شود. نوید زندگی تمام این استانداردها را رعایت می‌کند."
    },
    {
      question: "چه کسانی نباید حجامت انجام دهند؟",
      answer: "افراد با اختلالات انعقاد خون، بیماران با سیستم ایمنی ضعیف، زنان باردار، افراد با عفونت‌های پوستی فعال و بیماران دیابتی کنترل نشده نباید حجامت انجام دهند. حتماً قبل از انجام با پزشک مشورت کنید."
    }
  ];

  const relatedArticles = [
    {
      title: "ویزیت پزشک عمومی در منزل",
      description: "اعزام فوری پزشک عمومی به منزل در تهران",
      link: "/general-doctor",
      image: generalDoctorImage,
      category: "خدمات پزشکی"
    },
    {
      title: "خدمات پرستاری در منزل",
      description: "پرستاری تخصصی و مراقبت از بیمار در منزل",
      link: "/services/nursing",
      image: nursingImage,
      category: "خدمات پزشکی"
    },
    {
      title: "تزریق واکسن آنفولانزا در منزل",
      description: "تزریق واکسن آنفولانزا در منزل توسط پرستار متخصص",
      link: "/articles/influenza-vaccine",
      image: vaccinationImage,
      category: "واکسیناسیون"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="حجامت در منزل و فصد خون در منزل | خدمات بهداشتی نوید زندگی"
        description="حجامت در منزل و فصد خون در منزل با رعایت کامل اصول بهداشتی. خدمات فصد خون درمانی با تجویز پزشک توسط تیم نوید زندگی در تهران"
        keywords="حجامت در منزل، فصد خون در منزل، حجامت تهران، فصد خون درمانی، خدمات بهداشتی در منزل"
        canonical="https://navidzendegi.com/articles/cupping-therapy"
        ogType="article"
        publishedTime="2025-10-20T09:00:00+03:30"
        modifiedTime="2025-10-20T09:00:00+03:30"
      />
      <ArticleSchema
        title="حجامت در منزل و فصد خون در منزل: راهنمای انتخاب آگاهانه و خدمات بهداشتی"
        description="راهنمای کامل حجامت و فصد خون در منزل با رعایت اصول بهداشتی، تفاوت‌ها و نکات ایمنی"
        publishedTime="2025-10-20T09:00:00+03:30"
        modifiedTime="2025-10-20T09:00:00+03:30"
        image="/assets/cupping-therapy-home.jpg"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary leading-tight">
                  حجامت در منزل و فصد خون در منزل: راهنمای انتخاب آگاهانه، ایمنی و خدمات بهداشتی نوید زندگی
                </h1>
                <p className="text-lg leading-relaxed mb-6">
                  برخی از افراد به دلایل شخصی یا توصیه‌های طب سنتی، به دنبال راهکارهایی برای خروج مقداری از خون بدن هستند. با وجود آنکه حجامت از منظر پزشکی رایج فاقد تأیید علمی قطعی است، در میان باورهای عمومی همچنان طرفدارانی دارد. <strong>نوید زندگی</strong> خدمات <strong>حجامت در منزل</strong> و <strong>فصد خون در منزل</strong> را با تمرکز کامل بر رعایت اصول بهداشتی و ایمنی برای متقاضیان این خدمات فراهم می‌کند.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleCall}
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: 09386117912
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    size="lg"
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    واتساپ
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={cuppingTherapyImage} 
                  alt="حجامت در منزل و فصد خون در منزل با رعایت کامل اصول بهداشتی"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* فصد خون یا حجامت */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              فصد خون یا حجامت: انتخابی برای افراد با شرایط خاص
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              برخی افراد به دلیل شرایط پزشکی خاص یا منع اهدای خون (مانند داشتن سطح بالای هموگلوبین یا هموکروماتوزیس) نیاز به خارج کردن مقدار کنترل شده‌ای از خون دارند. در این شرایط، <Link to="/general-doctor" className="text-primary hover:underline">پزشک</Link> ممکن است <strong>فصد خون درمانی</strong> را تجویز کند.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">فصد خون (Bloodletting/Phlebotomy)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  یک روش پذیرفته شده در طب رایج برای کاهش حجم یا تعداد سلول‌های خونی در شرایط خاص پزشکی مانند پلی‌سیتمی ورا یا هموکروماتوزیس است که باید تحت نظارت و با تجویز پزشک انجام شود.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">حجامت (Wet Cupping)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  یک روش طب سنتی که بر اساس باورهای خاص برای خارج کردن مقادیر کم خون از طریق ایجاد خراش‌های کوچک در پوست انجام می‌شود.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* اهمیت بهداشت و ایمنی */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              اهمیت بهداشت و ایمنی در خدمات حجامت و فصد خون در منزل
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              مهم‌ترین نگرانی در هر روش خروج خون از بدن، رعایت کامل نکات بهداشتی و استریلیزاسیون ابزار برای جلوگیری از انتقال بیماری‌های خونی (مانند هپاتیت B و C یا HIV) است.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>نوید زندگی</strong> تضمین می‌کند که تمامی خدمات <strong>فصد خون در منزل</strong> و <strong>حجامت در منزل</strong> با رعایت کامل موارد زیر انجام شوند:
            </p>

            <div className="space-y-4 mr-6">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>ابزار یکبار مصرف:</strong> استفاده از لیوان‌ها، تیغ‌ها و ست‌های کاملاً یکبار مصرف.
                </p>
              </div>

              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>رعایت پروتکل‌های استریل:</strong> انجام خدمات توسط کادر مجرب و آموزش‌دیده با رعایت کامل بهداشت فردی و محیطی.
                </p>
              </div>

              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>مدیریت پسماند:</strong> دفع بهداشتی پسماندهای بیولوژیک (خون و تجهیزات استفاده‌شده).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* هشدار اهدای خون */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              هشدار جدی و توصیه اخلاقی: اهدای خون، گزینه‌ای با تأیید علمی و انسانی
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              توصیه اکید ما این است که اگر شرایط اهدای خون را دارید، حتماً به مراکز انتقال خون مراجعه کنید.
            </p>

            <div className="space-y-4 mr-6">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>نیاز حیاتی بیماران:</strong> مراکز انتقال خون ایران به صورت روزانه به خون اهداکنندگان نیازمندند.
                </p>
              </div>

              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>مزایای علمی:</strong> از نظر مزایای کاهش غلظت خون برای افراد سالم، اهدای خون تفاوتی با حجامت ندارد و علاوه بر آن، نجات‌بخش جان یک بیمار است.
                </p>
              </div>

              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>توجه:</strong> فصد خون یا حجامت، نباید جایگزین اهدای خون شود مگر در شرایطی که فرد، منع اهدای خون داشته باشد.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              دریافت خدمات حجامت و فصد خون با بالاترین استانداردهای بهداشتی
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              اگر منع پزشکی برای اهدای خون دارید و یا به دلایل پزشکی نیاز به <strong>فصد خون درمانی</strong> دارید، تیم <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> آماده ارائه خدمات <strong>حجامت در منزل</strong> و <strong>فصد خون در منزل</strong> با بالاترین استانداردهای بهداشتی است. همچنین می‌توانید از سایر <Link to="/services/nursing" className="text-primary hover:underline">خدمات پرستاری در منزل</Link> نیز بهره‌مند شوید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleCall}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Phone className="ml-2 h-5 w-5" />
                مشاوره تخصصی و رزرو نوبت
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-lg">
                برای دریافت مشاوره تخصصی و رزرو نوبت، با کارشناسان نوید زندگی تماس بگیرید:
              </p>
              <p className="font-bold text-xl text-primary mt-2">
                <a href="tel:09386117912">۰۹۳۸۶۱۱۷۹۱۲</a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Related Articles */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </section>

        {/* Pricing Info */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default CuppingTherapyPage;
