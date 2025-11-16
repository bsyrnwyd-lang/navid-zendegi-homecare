import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import MedicalBusinessSchema from "@/components/MedicalBusinessSchema";
import ServiceSchema from "@/components/ServiceSchema";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import cardiologyImage from "@/assets/cardiology-home-visit.jpg";
import holterImage from "@/assets/holter-monitoring.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const EchoHomePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqs = [
    {
      question: "اکو قلب در منزل چقدر طول می‌کشد؟",
      answer: "انجام اکو قلب در منزل معمولاً بین ۳۰ تا ۴۵ دقیقه زمان می‌برد. این زمان شامل آماده‌سازی، انجام تست و بررسی اولیه نتایج توسط متخصص است."
    },
    {
      question: "آیا اکو قلب دردناک است؟",
      answer: "خیر، اکو قلب یک روش کاملاً غیرتهاجمی و بدون درد است. در این تست تنها یک پروب روی قفسه سینه حرکت داده می‌شود که هیچ ناراحتی ایجاد نمی‌کند."
    },
    {
      question: "چه کسانی به اکو قلب نیاز دارند؟",
      answer: "اکو قلب برای افرادی که علائم بیماری قلبی مانند تنگی نفس، تپش قلب، درد قفسه سینه یا ورم پاها دارند، بیماران با سابقه حمله قلبی، افراد با فشار خون بالا و برای پایش بیماری‌های قلبی موجود توصیه می‌شود."
    },
    {
      question: "آیا برای اکو قلب نیاز به آماده‌سازی خاصی هست؟",
      answer: "خیر، برای اکو قلب معمولی نیازی به ناشتا بودن یا آماده‌سازی خاص نیست. فقط توصیه می‌شود لباسی بپوشید که دسترسی به قفسه سینه را آسان کند."
    },
    {
      question: "هزینه اکو قلب در منزل چقدر است؟",
      answer: "هزینه اکو قلب در منزل بستگی به منطقه جغرافیایی و نوع خدمات دارد. برای اطلاع از تعرفه دقیق می‌توانید با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید."
    },
    {
      question: "چه مناطقی از تهران تحت پوشش خدمات اکو در منزل هستند؟",
      answer: "خدمات اکو قلب در منزل در تمام مناطق تهران شامل شمال، غرب، شرق، جنوب و مرکز فعال است."
    },
    {
      question: "آیا اکو قلب در منزل معتبر است؟",
      answer: "بله، دستگاه‌های اکو قابل حمل استاندارد بوده و نتایج توسط متخصص قلب تفسیر می‌شود. کیفیت تشخیص معادل اکو بیمارستانی است."
    },
    {
      question: "نتایج اکو قلب چه زمانی آماده می‌شود؟",
      answer: "نتایج اولیه در همان جلسه توضیح داده می‌شود و گزارش کامل ظرف ۲۴ ساعت ارسال می‌گردد."
    }
  ];

  const relatedArticles = [
    {
      title: "خدمات متخصص قلب و عروق در منزل",
      description: "ویزیت تخصصی قلب و عروق در منزل",
      link: "/cardiology",
      image: cardiologyImage,
      category: "خدمات پزشکی"
    },
    {
      title: "هولتر قلب در منزل",
      description: "نصب و مانیتورینگ هولتر قلب در منزل",
      link: "/services/holter",
      image: holterImage,
      category: "خدمات پزشکی"
    },
    {
      title: "تپش قلب: علل، علائم و درمان",
      description: "راهنمای کامل تپش قلب و روش‌های کنترل آن",
      link: "/articles/heart-palpitations",
      image: heartPalpitationsImage,
      category: "مقالات"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="اکو قلب در منزل تهران | اکوکاردیوگرافی ۲۴ ساعته ☎️ 09386117912"
        description="🏥 اکو قلب در منزل تهران - انجام اکوکاردیوگرافی تخصصی با دستگاه‌های پیشرفته و تفسیر توسط متخصص قلب. خدمات ۲۴ ساعته در تمام مناطق تهران ☎️ 09386117912"
        keywords="اکو قلب در منزل تهران، اکوکاردیوگرافی در خانه، اکو قلب تهران شمال، سونوگرافی قلب در منزل، اکو قلب در خانه تهران، اکو قلب فوری"
        canonical="https://navidzendegi.ir/articles/echo-home"
        ogType="article"
        publishedTime="2025-10-20T10:00:00+03:30"
        modifiedTime="2025-10-20T10:00:00+03:30"
      />
      <MedicalBusinessSchema 
        name="اکو قلب در منزل تهران - نوید زندگی"
        description="انجام اکوکاردیوگرافی تخصصی در منزل با دستگاه‌های پیشرفته و تفسیر توسط متخصص قلب"
        service="اکو قلب در منزل"
      />
      <ServiceSchema 
        name="اکو قلب در منزل تهران"
        description="اکوکاردیوگرافی تخصصی در منزل با دستگاه پرتابل و تفسیر فوری توسط کاردیولوژیست"
      />
      <ArticleSchema
        title="اکو قلب در منزل: تشخیص دقیق و غیرتهاجمی بیماری‌های قلبی با دستگاه پرتابل"
        description="راهنمای کامل اکو قلب در منزل، فرآیند انجام، کاربردها و مزایای این روش تشخیصی برای بیماران قلبی"
        publishedTime="2025-10-20T10:00:00+03:30"
        modifiedTime="2025-10-20T10:00:00+03:30"
        image="/assets/echo-home-service.jpg"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        <article>
          {/* Breadcrumb */}
          <section className="medical-section py-4">
            <div className="container mx-auto max-w-4xl">
              <BreadcrumbNavigation 
                items={[
                  { name: "صفحه اصلی", url: "/" },
                  { name: "مقالات", url: "/articles" },
                  { name: "اکو قلب در منزل", url: "/articles/echo-home" }
                ]}
              />
            </div>
          </section>

          {/* Hero Section */}
          <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
                اکو قلب در منزل: تشخیص دقیق و غیرتهاجمی بیماری‌های قلبی با دستگاه پرتابل
              </h1>
              
              <div className="relative mb-8">
                <img 
                  src={echoHomeImage} 
                  alt="اکو قلب در منزل - اکوکاردیوگرافی تخصصی"
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="prose max-w-none">
                <p className="text-base md:text-lg text-foreground leading-relaxed text-justify mb-6">
                  <Link to="/cardiology" className="text-primary hover:underline font-semibold">اکو قلب</Link> یا اکوکاردیوگرافی، یکی از حیاتی‌ترین و بی‌خطرترین روش‌های تشخیصی در علم قلب و عروق است. این آزمایش در واقع یک سونوگرافی تخصصی از قلب است که از امواج صوتی با فرکانس بالا (اولتراسوند) برای تولید تصاویر متحرک از قلب استفاده می‌کند. این تصاویر ساختار دقیق قلب، عملکرد دریچه‌ها و نحوه جریان خون را نشان می‌دهند.
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed text-justify mb-8">
                  در عصر حاضر، با پیشرفت فناوری دستگاه‌های اکوکاردیوگرافی پرتابل، امکان انجام این تست تخصصی مستقیماً در محل اقامت بیمار (خانه یا محل کار) فراهم شده است. این خدمات توسط <Link to="/cardiology" className="text-primary hover:underline">متخصصان قلب نوید زندگی</Link> ارائه می‌شود.
                </p>

                <div className="flex gap-4 mb-8 flex-wrap justify-center">
                  <Button onClick={handleCall} size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    تماس فوری: 09386117912
                  </Button>
                  <Button onClick={handleWhatsApp} variant="outline" size="lg" className="gap-2">
                    <MessageCircle className="h-5 w-5" />
                    واتساپ
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="medical-section">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                اکو قلب چیست و کاربردهای حیاتی آن کدامند؟
              </h2>
              <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
                اکو قلب اطلاعات بسیار مهمی را در اختیار متخصص قلب و عروق قرار می‌دهد که برای تشخیص و پیگیری انواع بیماری‌های قلبی ضروری است.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="border border-border p-3 text-right">ساختار مورد بررسی</th>
                      <th className="border border-border p-3 text-right">اطلاعات تشخیصی</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">اندازه و شکل قلب</td>
                      <td className="border border-border p-3">بررسی بزرگ شدن حفره‌ها یا ضخیم شدن دیواره‌های قلب (کاردیومیوپاتی)</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">عملکرد پمپاژ (EF)</td>
                      <td className="border border-border p-3">تعیین قدرت پمپاژ قلب که در تشخیص و ارزیابی نارسایی قلبی کلیدی است.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">دریچه‌های قلبی</td>
                      <td className="border border-border p-3">بررسی اختلالاتی مانند تنگی دریچه (باریک شدن) یا نارسایی دریچه (نشت خون).</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">جریان خون</td>
                      <td className="border border-border p-3">مشاهده مسیر و جهت جریان خون در قلب و عروق اصلی.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">مشکلات ساختاری</td>
                      <td className="border border-border p-3">تشخیص نقایص مادرزادی قلب، لخته‌های خونی یا توده‌های غیرعادی.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                چرا باید اکو قلب در منزل را انتخاب کنید؟
              </h2>
              <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
                انجام اکو قلب در منزل توسط متخصص قلب و عروق یک مزیت بزرگ برای بیماران، به ویژه گروه‌های پرخطر محسوب می‌شود.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="text-base text-foreground">
                  <strong>مناسب برای بیماران بدحال و سالمندان:</strong> بیمارانی که جابجایی برایشان دشوار است، یا پس از عمل جراحی در دوران نقاهت به سر می‌برند، نیازی به تحمل سختی‌های رفت و آمد ندارند.
                </li>
                <li className="text-base text-foreground">
                  <strong>کاهش اضطراب و استرس:</strong> معاینه در محیط آشنا و آرام خانه، به کاهش استرس بیمار (که می‌تواند بر ضربان قلب تأثیر بگذارد) کمک کرده و دقت تست را افزایش می‌دهد.
                </li>
                <li className="text-base text-foreground">
                  <strong>تشخیص فوری و سریع:</strong> متخصص قلب به همراه تجهیزات پرتابل به محل اعزام شده، تست را انجام می‌دهد و در همان لحظه نتایج اولیه را تفسیر می‌کند، که این امر فرآیند درمان را تسریع می‌بخشد.
                </li>
                <li className="text-base text-foreground">
                  <strong>کاهش ریسک مواجهه:</strong> برای بیماران با نقص ایمنی، جلوگیری از قرار گرفتن در معرض عفونت‌های احتمالی محیط‌های درمانی شلوغ اهمیت حیاتی دارد.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                فرآیند اکو قلب در منزل چگونه است؟
              </h2>
              <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
                فرآیند انجام اکوکاردیوگرافی در منزل مشابه کلینیک‌ها و مراکز درمانی است، با این تفاوت که محیط آن منزل شماست:
              </p>

              <ol className="space-y-4 mb-8 list-decimal list-inside">
                <li className="text-base text-foreground">
                  <strong>ثبت درخواست و هماهنگی:</strong> پس از تماس با مرکز و ثبت درخواست، زمان اعزام تکنسین متخصص (یا پزشک متخصص قلب) با دستگاه اکو پرتابل هماهنگ می‌شود.
                </li>
                <li className="text-base text-foreground">
                  <strong>آماده‌سازی:</strong> تکنسین از شما می‌خواهد که لباس بالاتنه خود را درآورید یا آن را شل کنید تا دسترسی به قفسه سینه فراهم شود.
                </li>
                <li className="text-base text-foreground">
                  <strong>انجام تست:</strong> ابتدا ژل مخصوص سونوگرافی روی قفسه سینه زده می‌شود. سپس پروب دستگاه (مبدل) روی قفسه سینه قرار گرفته و امواج صوتی به سمت قلب ارسال و دریافت می‌شوند. تصاویر متحرک قلب روی مانیتور دستگاه ثبت می‌گردد.
                </li>
                <li className="text-base text-foreground">
                  <strong>مدت زمان:</strong> این فرآیند معمولاً ۳۰ تا ۴۵ دقیقه طول می‌کشد و کاملاً بدون درد و غیرتهاجمی است.
                </li>
              </ol>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                نوید زندگی؛ ارائه‌دهنده خدمات تخصصی اکو قلب در منزل
              </h2>
              <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
                <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با استفاده از دستگاه‌های اکوکاردیوگرافی پرتابل با وضوح بالا و همکاری با <Link to="/cardiology" className="text-primary hover:underline">متخصصان مجرب قلب</Link>, تضمین می‌کند که کیفیت تصویربرداری و تشخیص در منزل شما، هم‌سطح مراکز تخصصی است. علاوه بر اکو، می‌توانید از خدمات <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب</Link> و <Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب در منزل</Link> نیز استفاده کنید.
              </p>

              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <p className="text-base text-foreground leading-relaxed text-center mb-4">
                  برای پایش دقیق و به‌موقع سلامت قلب خود و عزیزانتان، همین حالا برای رزرو نوبت اکو قلب در منزل با کارشناسان ما تماس بگیرید.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button onClick={handleCall} size="lg" className="gap-2">
                    <Phone className="h-5 w-5" />
                    09386117912
                  </Button>
                  <Button onClick={handleWhatsApp} variant="outline" size="lg" className="gap-2">
                    <MessageCircle className="h-5 w-5" />
                    پیام در واتساپ
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="medical-section bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <PricingInfo />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="medical-section">
            <div className="container mx-auto max-w-4xl">
              <FAQSection faqs={faqs} />
            </div>
          </section>

          {/* Related Articles */}
          <section className="medical-section">
            <div className="container mx-auto max-w-4xl">
              <RelatedArticles articles={relatedArticles} />
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default EchoHomePage;
