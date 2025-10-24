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
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <BreadcrumbNavigation items={breadcrumbs} />
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                ویزیت متخصص روانپزشک در منزل تهران: آسایش در خانه، درمان تخصصی اعصاب و روان
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                آیا شما یا عزیزانتان با چالش‌های سلامت روان یا مشکلات اعصاب دست و پنجه نرم می‌کنید؟ دسترسی به متخصص اعصاب و روان (روانپزشک) برای تشخیص دقیق و مدیریت دارو حیاتی است. نوید زندگی با ارائه خدمات ویزیت روانپزشک در منزل تهران، این امکان را فراهم کرده تا در فضایی آرام، ایمن و خصوصی، بهترین مراقبت‌های تخصصی را دریافت کنید.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img
                src={psychiatryImage}
                alt="ویزیت متخصص روانپزشک در منزل تهران"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                loading="eager"
              />
            </div>

            <div className="text-center mb-8">
              <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: 09386117912
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چرا باید روانپزشک در منزل را در تهران انتخاب کنید؟
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              ویزیت متخصص روانپزشک در منزل یک راهکار حیاتی برای بیماران خاص است و مزایای متعددی نسبت به مراجعه به مطب‌ها یا کلینیک‌ها دارد.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              ۱. تمرکز بر بیماران با چالش‌های حرکتی و روانی
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>اختلالات حرکتی و سالمندی:</strong> افراد سالمند یا بیمارانی که به دلیل مشکلات جسمی، جابجایی برایشان دشوار است.
              </li>
              <li className="text-base text-foreground">
                <strong>بیماران با اضطراب شدید (آگورافوبیا):</strong> افرادی که به دلیل شدت اضطراب یا فوبیا، قادر به ترک منزل یا حضور در محیط‌های عمومی نیستند.
              </li>
              <li className="text-base text-foreground">
                <strong>تشخیص دقیق در محیط طبیعی:</strong> روانپزشک می‌تواند با مشاهده بیمار در محیط آشنای خانه، ارزیابی دقیق‌تری از وضعیت روانی و عملکرد روزانه او داشته باشد.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              ۲. مدیریت تخصصی دارو و بیماری‌های مزمن
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>تنظیم و پایش دارو:</strong> متخصص اعصاب و روان می‌تواند در منزل، تنظیم دقیق داروهای ضد افسردگی، ضد اضطراب یا تثبیت‌کننده خلق را انجام دهد و علائم حیاتی و پاسخ بیمار به دارو را در طول زمان پایش کند.
              </li>
              <li className="text-base text-foreground">
                <strong>مدیریت زوال عقل و آلزایمر:</strong> بیماران مبتلا به آلزایمر و دمانس (زوال عقل) اغلب در جابجایی دچار سردرگمی می‌شوند. ویزیت در منزل امکان مدیریت تخصصی و تنظیم داروی این بیماران را بدون استرس اضافی فراهم می‌کند.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              خدمات تخصصی روانپزشکی در منزل توسط نوید زندگی
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              خدمات ما فراتر از یک ویزیت ساده است؛ ما یک برنامه جامع درمانی را در خانه شما پیاده‌سازی می‌کنیم.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              ۱. تشخیص و طرح درمان توسط متخصص
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>ارزیابی جامع:</strong> انجام معاینه وضعیت روانی (Mental Status Exam) و تاریخچه دقیق برای تشخیص اختلالاتی مانند افسردگی شدید، اختلال دو قطبی، اختلالات اضطرابی، و سایکوز (روان‌پریشی).
              </li>
              <li className="text-base text-foreground">
                <strong>تجویز دارو:</strong> صدور نسخه‌های دارویی و تجویز دقیق داروهای تخصصی اعصاب و روان.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              ۲. پایش سلامت روان و همکاری چندرشته‌ای
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>درمان تکمیلی:</strong> در صورت نیاز، هماهنگی برای ارائه خدمات روان‌درمانی و مشاوره (توسط روانشناس) و همچنین نوروتراپی در منزل، تحت نظارت مستقیم روانپزشک.
              </li>
              <li className="text-base text-foreground">
                <strong>خدمات تزریقات در منزل:</strong> برای بیمارانی که نیاز به تزریق‌های دوره‌ای داروهای روانپزشکی (مانند برخی داروهای ضد سایکوز طولانی‌اثر) دارند، این خدمات با رعایت پروتکل‌های بهداشتی در خانه انجام می‌شود.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چه کسانی به ویزیت روانپزشک در منزل نیاز دارند؟
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              اگر هر یک از شرایط زیر در شما یا عزیزانتان مشاهده می‌شود، خدمات ویزیت متخصص اعصاب و روان در منزل بهترین انتخاب است:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>بیماران افسرده با انزوای شدید:</strong> افرادی که به دلیل شدت افسردگی تمایل یا توانایی خروج از منزل برای پیگیری درمان را ندارند.
              </li>
              <li className="text-base text-foreground">
                <strong>بحران‌های حاد روانی:</strong> نیاز به ارزیابی فوری پزشکی برای بیماران دچار حملات پانیک شدید یا دوره‌های شیدایی (Mania) که نیاز به مدیریت دارویی سریع دارند.
              </li>
              <li className="text-base text-foreground">
                <strong>مدیریت سم‌زدایی مواد مخدر:</strong> پایش شرایط حیاتی و مدیریت عوارض دارویی در مراحل اولیه ترک اعتیاد در منزل.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              تخصص مکانی: ویزیت روانپزشک در تمام مناطق تهران
            </h2>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              ما با درک اهمیت دسترسی سریع به خدمات تخصصی، تیم‌های روانپزشکی خود را در سراسر تهران مستقر کرده‌ایم. خدمات ویزیت روانپزشک در منزل شمال تهران (مناطق نیاوران، زعفرانیه و پاسداران)، متخصص اعصاب و روان در منزل غرب تهران (شهرک غرب، سعادت آباد و مناطق اطراف) و ویزیت روانپزشک در منزل مرکز و شرق تهران با سرعت و کیفیت بالا ارائه می‌شود.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              آسایش، حریم خصوصی و درمان تخصصی را همزمان تجربه کنید
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              برای هماهنگی و تعیین وقت ویزیت متخصص روانپزشک (اعصاب و روان) در منزل تهران، همین حالا با ما تماس بگیرید.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <PricingInfo />
          </div>
        </section>

        {/* References */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <div className="pt-8 border-t border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">منابع</h3>
              <ol className="space-y-2 text-sm text-muted-foreground pr-5 list-decimal">
                <li>
                  American Psychiatric Association (APA). (2020). Clinical Practice Guideline for the Treatment of Depression. (Emphasizes the importance of the patient's environment in assessment).
                </li>
                <li>
                  Jeste, D. V., et al. (2020). Home-Based Mental Health Care for Older Adults. The American Journal of Geriatric Psychiatry, 28(6), 617-620. (Discusses the benefits of home-based care for the geriatric population).
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default PsychiatryPage;
