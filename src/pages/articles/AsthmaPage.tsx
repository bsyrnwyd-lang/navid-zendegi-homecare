import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import asthmaImage from "@/assets/asthma-treatment.jpg";

const AsthmaPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "آسم", url: "/articles/asthma" }
  ];
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqs = [
    {
      question: "آسم چگونه تشخیص داده می‌شود؟",
      answer: "تشخیص آسم معمولاً بر اساس شرح حال بیمار، معاینه فیزیکی و آزمایش‌های عملکرد ریه (اسپیرومتری) انجام می‌شود. متخصص ریه می‌تواند با ارزیابی دقیق، تشخیص قطعی را ارائه دهد."
    },
    {
      question: "آیا آسم قابل درمان است؟",
      answer: "آسم یک بیماری مزمن است که درمان قطعی ندارد، اما با مدیریت صحیح و استفاده منظم از داروها می‌توان علائم را کنترل کرد و کیفیت زندگی را بهبود بخشید."
    },
    {
      question: "چه زمانی باید به اورژانس مراجعه کرد؟",
      answer: "اگر علائم آسم با استفاده از داروهای معمول بهبود نیابد، تنگی نفس شدید باشد، لب‌ها یا ناخن‌ها کبود شوند، یا فرد نتواند صحبت کند، باید فوراً به اورژانس مراجعه کرد یا با خدمات اورژانس در منزل تماس گرفت."
    },
    {
      question: "آیا ویزیت متخصص ریه در منزل برای آسم مفید است؟",
      answer: "بله، ویزیت متخصص ریه در منزل به ویژه برای بیمارانی که دچار تنگی نفس شدید هستند یا جابجایی برایشان دشوار است، بسیار مفید است. این خدمات شامل ارزیابی، تنظیم داروها و استفاده از نبولایزر در محیط آرام منزل می‌شود."
    }
  ];

  const relatedArticles = [
    {
      title: "درمان تنگی نفس در منزل",
      description: "راهکارهای فوری برای مدیریت تنگی نفس و کمک به بهبود تنفس",
      image: "/src/assets/shortness-breath-treatment.jpg",
      link: "/articles/breathing-treatment",
      category: "تنفسی"
    },
    {
      title: "ویزیت متخصص داخلی در منزل",
      description: "دریافت خدمات تشخیصی و درمانی تخصصی در محیط آرام منزل",
      image: "/src/assets/internal-medicine.jpg",
      link: "/services/internal-medicine",
      category: "خدمات"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "انجام اکو قلب با دستگاه‌های پیشرفته در منزل برای ارزیابی دقیق قلب",
      image: "/src/assets/echo-home-service.jpg",
      link: "/articles/echo-home",
      category: "قلب و عروق"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEOHead
        title="آسم: بیماری مزمن ریوی، علائم و درمان تخصصی - نوید زندگی"
        description="آسم یک بیماری مزمن ریوی است که با تنگی نفس و خس خس سینه همراه است. درمان آسم در منزل با ویزیت متخصص ریه و خدمات تخصصی نوید زندگی."
        keywords="آسم, بیماری مزمن ریوی, تنگی نفس, درمان آسم در منزل, ویزیت متخصص ریه, خس خس سینه, محرک‌های آسم"
        canonical="https://navidzendegi.com/articles/asthma"
        ogImage={asthmaImage}
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2025-01-22"
        modifiedTime="2025-01-22"
      />
      <ArticleSchema
        title="آسم: مروری بر بیماری مزمن ریوی، علائم، محرک‌ها و نیاز به درمان تخصصی"
        description="آسم یکی از بیماری‌های مزمن ریوی شایع است که راه‌های هوایی به محرک‌های مختلف واکنش نشان می‌دهند و باعث تنگی نفس و خس خس سینه می‌شوند."
        publishedTime="2025-01-22"
        modifiedTime="2025-01-22"
        image={asthmaImage}
        author="دکتر نیره مظاهری تهرانی"
      />
      <Header />
      <FloatingContact />

      <main className="container mx-auto px-4 py-8 mt-20">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-4xl mx-auto">
          <img
            src={asthmaImage}
            alt="آسم و درمان تنگی نفس"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="mb-6 text-sm text-muted-foreground">
            <span className="font-semibold">نویسنده: دکتر نیره مظاهری تهرانی - متخصص قلب و عروق</span>
            <br />
            <span>تاریخ انتشار: ۳ بهمن ۱۴۰۳</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            آسم: مروری بر بیماری مزمن ریوی، علائم، محرک‌ها و نیاز به درمان تخصصی
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            <strong>آسم</strong> یکی از <strong>بیماری‌های مزمن ریوی</strong> شایع است که در واقع در آن، <strong>راه‌های هوایی</strong> به محرک‌های مختلفی واکنش نشان داده و باعث علائمی از جمله <strong>تنگی نفس</strong>، خس خس سینه و احساس فشار در سینه می‌شود.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            زمانی که شخص دچار علامت می‌شود، نیاز به <strong>درمان‌های دارویی</strong> دارد. اما در زمان غیرحمله، پرهیز از برخورد با محرک‌ها نیز قویاً توصیه می‌شود.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
            محرک‌های اصلی که باعث تحریک راه‌های هوایی می‌شوند
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            درک و شناسایی محرک‌ها، کلید مدیریت آسم و کاهش دفعات حملات است. این محرک‌ها شامل موارد زیر می‌باشند:
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>آلرژن‌های محیطی:</strong> گرده گل و گیاه، موی حیوانات، کنه‌های گرد و غبار</li>
            <li><strong>عوامل فیزیکی:</strong> ورزش شدید (به ویژه در هوای سرد)</li>
            <li><strong>عوامل تحریک‌کننده شیمیایی و آلودگی:</strong> دود سیگار و آلودگی هوا</li>
            <li><strong>عوامل عفونی:</strong> عفونت‌های تنفسی فوقانی (مانند سرماخوردگی)</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
            ضرورت درمان تخصصی و پایش در حملات شدید
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            حملات آسم گاهی آنقدر شدید است که شخص نیاز به مراجعه فوری به اورژانس و یا بستری در بیمارستان را نیز دارد. در این شرایط، دسترسی سریع به کادر درمان متخصص حیاتی است.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            <Link to="/services/internal-medicine" className="text-primary hover:underline">نوید زندگی</Link> با اعزام متخصص ریه یا پرستار مجرب به منزل، می‌تواند در مدیریت مراحل اولیه و شدید حمله آسم، از طریق ارائه خدمات تخصصی مانند نَبولایزر دارویی و پایش سطح اکسیژن، به سرعت وضعیت بیمار را تثبیت کند.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
            مدیریت آسم با ویزیت متخصص ریه در منزل
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            همانطور که اشاره شد، درمان‌های دارویی برای مدیریت علائم ضروری است. برای کنترل بهتر و بلندمدت این <strong>بیماری مزمن ریوی</strong>، مشاوره با متخصص ریه (پولمونولوژیست) برای تنظیم دوز داروهای کنترل‌کننده (مانند کورتیکواستروئیدهای استنشاقی) و داروهای تسکین‌دهنده (مانند سالبوتامول) بهترین رویکرد است.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            دریافت این خدمات در محیط آرام منزل، برای بیمارانی که دچار <strong>تنگی نفس</strong> هستند، راحتی و ایمنی بیشتری فراهم می‌کند.
          </p>

          <div className="bg-primary/5 border-r-4 border-primary p-6 my-8 rounded">
            <h3 className="text-xl font-bold text-foreground mb-4">
              نیاز به مشاوره یا درمان فوری آسم دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              تیم متخصصین نوید زندگی آماده ارائه خدمات تشخیصی و درمانی آسم در منزل شما هستند. برای مشاوره رایگان و هماهنگی ویزیت، همین الان تماس بگیرید.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={handleCall}
                size="lg"
                className="gap-2"
              >
                <Phone className="h-5 w-5" />
                تماس فوری: 09386117912
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                مشاوره واتساپ
              </Button>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
            منابع (References)
          </h3>

          <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-8">
            <li>Global Initiative for Asthma (GINA). (2024). Global Strategy for Asthma Management and Prevention.</li>
            <li>Busse, W. W., & Lemanske, R. F. (2022). Asthma. New England Journal of Medicine, 387(18), 1700-1708.</li>
            <li>American Lung Association. (2024). Asthma Triggers and How to Avoid Them.</li>
          </ol>

          <FAQSection faqs={faqs} />
          
          <PricingInfo />
          
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AsthmaPage;
