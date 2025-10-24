import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingInfo from "@/components/PricingInfo";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import StructuredData from "@/components/StructuredData";
import psychiatryImage from "@/assets/psychiatry-home-visit.jpg";

const PsychiatryPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const faqs = [
    {
      question: "چگونه می‌توانم تعرفه خدمات روانپزشکی در منزل را محاسبه کنم؟",
      answer: "هزینه ویزیت روانپزشک در منزل بستگی به نوع خدمات، زمان ویزیت (روز یا شب)، و منطقه جغرافیایی شما دارد. برای دریافت تعرفه دقیق با شماره 09386117912 تماس بگیرید."
    },
    {
      question: "آیا می‌توان داروی روانپزشکی را در منزل دریافت کرد؟",
      answer: "بله، متخصص روانپزشک در منزل می‌تواند نسخه تجویز کند و در صورت نیاز، خدمات تزریق دارو نیز توسط تیم پرستاری ما در منزل انجام می‌شود."
    },
    {
      question: "چه کسانی به ویزیت روانپزشک در منزل نیاز دارند؟",
      answer: "بیماران با اضطراب شدید، افسردگی، سالمندان مبتلا به آلزایمر یا دمانس، افراد با محدودیت حرکتی، و کسانی که به دلایل روانی قادر به ترک منزل نیستند، از این خدمات بهره‌مند می‌شوند."
    },
    {
      question: "آیا ویزیت روانپزشک در منزل برای تمام مناطق تهران امکان‌پذیر است؟",
      answer: "بله، نوید زندگی در تمام مناطق تهران شامل شمال، جنوب، شرق، غرب و مرکز خدمات ویزیت روانپزشک در منزل را ارائه می‌دهد."
    },
    {
      question: "آیا اطلاعات بیمار در ویزیت منزل محرمانه است؟",
      answer: "بله، تمامی اطلاعات پزشکی و روانی بیماران کاملاً محرمانه بوده و تیم ما به حریم خصوصی بیماران احترام کامل می‌گذارد."
    }
  ];

  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "خدمات", url: "/#services" },
    { name: "ویزیت روانپزشک در منزل", url: "/services/psychiatry" }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEOHead
        title="ویزیت متخصص روانپزشک در منزل تهران | آسایش در خانه، درمان تخصصی اعصاب و روان"
        description="خدمات ویزیت روانپزشک (متخصص اعصاب و روان) در منزل تهران با نوید زندگی. تشخیص و درمان افسردگی، اضطراب، آلزایمر و بیماری‌های روانی در محیط آرام خانه."
        keywords="روانپزشک در منزل تهران، ویزیت متخصص اعصاب و روان در منزل، روانپزشک در خانه، خدمات روانپزشکی منزل، درمان افسردگی در منزل، روانپزشک شمال تهران، متخصص اعصاب و روان در منزل غرب تهران"
        canonical="https://navidzendegi.com/services/psychiatry"
        ogType="website"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        service={{
          name: "ویزیت روانپزشک در منزل تهران",
          description: "خدمات تخصصی روانپزشکی شامل تشخیص و درمان اختلالات روانی، افسردگی، اضطراب و بیماری‌های اعصاب و روان در منزل",
          provider: "نوید زندگی",
          areaServed: "تهران",
          serviceType: "خدمات روانپزشکی در منزل"
        }}
        faqs={faqs}
      />

      <Header />
      
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-12">
          <BreadcrumbNavigation items={breadcrumbs} />

          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  ویزیت متخصص روانپزشک در منزل تهران: آسایش در خانه، درمان تخصصی اعصاب و روان
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  آیا شما یا عزیزانتان با چالش‌های سلامت روان یا مشکلات اعصاب دست و پنجه نرم می‌کنید؟ دسترسی به متخصص اعصاب و روان (روانپزشک) برای تشخیص دقیق و مدیریت دارو حیاتی است. نوید زندگی با ارائه خدمات ویزیت روانپزشک در منزل تهران، این امکان را فراهم کرده تا در فضایی آرام، ایمن و خصوصی، بهترین مراقبت‌های تخصصی را دریافت کنید.
                </p>
                <Button 
                  size="lg" 
                  onClick={handleCall}
                  className="gap-2"
                >
                  <Phone className="w-5 h-5" />
                  تماس فوری: 09386117912
                </Button>
              </div>
              <div className="relative">
                <img
                  src={psychiatryImage}
                  alt="ویزیت متخصص روانپزشک در منزل تهران"
                  className="rounded-lg shadow-xl w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </section>

          {/* چرا باید روانپزشک در منزل را انتخاب کنید */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              چرا باید روانپزشک در منزل را در تهران انتخاب کنید؟
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              ویزیت متخصص روانپزشک در منزل یک راهکار حیاتی برای بیماران خاص است و مزایای متعددی نسبت به مراجعه به مطب‌ها یا کلینیک‌ها دارد.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  ۱. تمرکز بر بیماران با چالش‌های حرکتی و روانی
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>اختلالات حرکتی و سالمندی:</strong> افراد سالمند یا بیمارانی که به دلیل مشکلات جسمی، جابجایی برایشان دشوار است.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>بیماران با اضطراب شدید (آگورافوبیا):</strong> افرادی که به دلیل شدت اضطراب یا فوبیا، قادر به ترک منزل یا حضور در محیط‌های عمومی نیستند.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>تشخیص دقیق در محیط طبیعی:</strong> روانپزشک می‌تواند با مشاهده بیمار در محیط آشنای خانه، ارزیابی دقیق‌تری از وضعیت روانی و عملکرد روزانه او داشته باشد.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  ۲. مدیریت تخصصی دارو و بیماری‌های مزمن
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>تنظیم و پایش دارو:</strong> متخصص اعصاب و روان می‌تواند در منزل، تنظیم دقیق داروهای ضد افسردگی، ضد اضطراب یا تثبیت‌کننده خلق را انجام دهد و علائم حیاتی و پاسخ بیمار به دارو را در طول زمان پایش کند.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>مدیریت زوال عقل و آلزایمر:</strong> بیماران مبتلا به آلزایمر و دمانس (زوال عقل) اغلب در جابجایی دچار سردرگمی می‌شوند. ویزیت در منزل امکان مدیریت تخصصی و تنظیم داروی این بیماران را بدون استرس اضافی فراهم می‌کند.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* خدمات تخصصی */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              خدمات تخصصی روانپزشکی در منزل توسط نوید زندگی
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              خدمات ما فراتر از یک ویزیت ساده است؛ ما یک برنامه جامع درمانی را در خانه شما پیاده‌سازی می‌کنیم.
            </p>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  ۱. تشخیص و طرح درمان توسط متخصص
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>ارزیابی جامع:</strong> انجام معاینه وضعیت روانی (Mental Status Exam) و تاریخچه دقیق برای تشخیص اختلالاتی مانند افسردگی شدید، اختلال دو قطبی، اختلالات اضطرابی، و سایکوز (روان‌پریشی).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>تجویز دارو:</strong> صدور نسخه‌های دارویی و تجویز دقیق داروهای تخصصی اعصاب و روان.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  ۲. پایش سلامت روان و همکاری چندرشته‌ای
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>درمان تکمیلی:</strong> در صورت نیاز، هماهنگی برای ارائه خدمات روان‌درمانی و مشاوره (توسط روانشناس) و همچنین نوروتراپی در منزل، تحت نظارت مستقیم روانپزشک.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>خدمات تزریقات در منزل:</strong> برای بیمارانی که نیاز به تزریق‌های دوره‌ای داروهای روانپزشکی (مانند برخی داروهای ضد سایکوز طولانی‌اثر) دارند، این خدمات با رعایت پروتکل‌های بهداشتی در خانه انجام می‌شود.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* چه کسانی نیاز دارند */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              چه کسانی به ویزیت روانپزشک در منزل نیاز دارند؟
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              اگر هر یک از شرایط زیر در شما یا عزیزانتان مشاهده می‌شود، خدمات ویزیت متخصص اعصاب و روان در منزل بهترین انتخاب است:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  بیماران افسرده با انزوای شدید
                </h3>
                <p className="text-muted-foreground text-sm">
                  افرادی که به دلیل شدت افسردگی تمایل یا توانایی خروج از منزل برای پیگیری درمان را ندارند.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  بحران‌های حاد روانی
                </h3>
                <p className="text-muted-foreground text-sm">
                  نیاز به ارزیابی فوری پزشکی برای بیماران دچار حملات پانیک شدید یا دوره‌های شیدایی (Mania) که نیاز به مدیریت دارویی سریع دارند.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  مدیریت سم‌زدایی مواد مخدر
                </h3>
                <p className="text-muted-foreground text-sm">
                  پایش شرایط حیاتی و مدیریت عوارض دارویی در مراحل اولیه ترک اعتیاد در منزل.
                </p>
              </div>
            </div>
          </section>

          {/* تخصص مکانی */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              تخصص مکانی: ویزیت روانپزشک در تمام مناطق تهران
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              ما با درک اهمیت دسترسی سریع به خدمات تخصصی، تیم‌های روانپزشکی خود را در سراسر تهران مستقر کرده‌ایم.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  شمال تهران
                </h3>
                <p className="text-muted-foreground text-sm">
                  خدمات سریع برای مناطق نیاوران، زعفرانیه و پاسداران
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  غرب تهران
                </h3>
                <p className="text-muted-foreground text-sm">
                  پوشش‌دهی کامل برای شهرک غرب، سعادت آباد و مناطق اطراف
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  مرکز و شرق تهران
                </h3>
                <p className="text-muted-foreground text-sm">
                  پوشش‌دهی مناطق مرکزی و شرقی برای اطمینان از دسترسی فوری
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16 bg-primary/5 rounded-lg p-8 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              آسایش، حریم خصوصی و درمان تخصصی را همزمان تجربه کنید
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              برای هماهنگی و تعیین وقت ویزیت متخصص روانپزشک (اعصاب و روان) در منزل تهران، همین حالا با ما تماس بگیرید.
            </p>
            <Button 
              size="lg"
              onClick={handleCall}
              className="gap-2"
            >
              <Phone className="w-5 h-5" />
              تماس: 09386117912
            </Button>
          </section>

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Pricing */}
          <PricingInfo />

          {/* References */}
          <section className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">منابع</h3>
            <ol className="space-y-2 text-sm text-muted-foreground pr-5 list-decimal">
              <li>
                American Psychiatric Association (APA). (2020). Clinical Practice Guideline for the Treatment of Depression. (Emphasizes the importance of the patient's environment in assessment).
              </li>
              <li>
                Jeste, D. V., et al. (2020). Home-Based Mental Health Care for Older Adults. The American Journal of Geriatric Psychiatry, 28(6), 617-620. (Discusses the benefits of home-based care for the geriatric population).
              </li>
            </ol>
          </section>
        </div>
      </main>
      
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default PsychiatryPage;
