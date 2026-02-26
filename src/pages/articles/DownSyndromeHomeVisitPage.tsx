import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import downSyndromeImage from "@/assets/down-syndrome-home-visit.jpg";
import childGrowthImage from "@/assets/pediatrics.jpg";
import echoSafetyHomeImage from "@/assets/echo-safety-home.jpg";
import levothyroxineImage from "@/assets/levothyroxine-article.jpg";

const DownSyndromeHomeVisitPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "ویزیت پزشک در منزل برای سندروم دان", url: "/articles/down-syndrome-home-visit" }
  ];

  const faqs = [
    {
      question: "آیا پزشک متخصص هم برای بیماران سندروم دان به منزل می‌آید؟",
      answer: "بله، مرکز نوید زندگی امکان اعزام پزشک متخصص داخلی، متخصص قلب و متخصص اطفال به منزل بیماران سندروم دان را فراهم می‌کند."
    },
    {
      question: "آیا آزمایش خون و تیروئید در منزل برای بیماران سندروم دان انجام می‌شود؟",
      answer: "بله، تیم آزمایشگاه سیار نوید زندگی نمونه‌گیری خون شامل تیروئید، CBC و سایر آزمایش‌ها را در منزل انجام می‌دهد."
    },
    {
      question: "آیا اکوکاردیوگرافی در منزل برای بیماران سندروم دان امکان‌پذیر است؟",
      answer: "بله، با توجه به شیوع بالای مشکلات قلبی مادرزادی در سندروم دان، انجام اکو با دستگاه پرتابل در منزل یکی از خدمات مهم ما است."
    },
    {
      question: "هزینه ویزیت پزشک در منزل برای سندروم دان چقدر است؟",
      answer: "هزینه بسته به نوع پزشک (عمومی یا متخصص)، ساعت مراجعه و خدمات تکمیلی متفاوت است. برای اطلاع دقیق با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید."
    },
    {
      question: "آیا خدمات پرستاری در منزل برای بیماران سندروم دان ارائه می‌شود؟",
      answer: "بله، خدمات پرستاری شامل تزریقات، مراقبت از زخم، پانسمان و پایش علائم حیاتی در منزل قابل ارائه است."
    }
  ];

  const relatedArticles = [
    {
      title: "پایش رشد کودکان؛ ویزیت متخصص اطفال در منزل",
      description: "راهنمای پایش رشد و تکامل کودکان با ویزیت پزشک در منزل.",
      image: childGrowthImage,
      link: "/articles/child-growth-monitoring",
      category: "اطفال"
    },
    {
      title: "اکو و نوار قلب در منزل؛ دقت تجهیزات پرتابل",
      description: "مقایسه دقت اکو پرتابل با دستگاه‌های بیمارستانی.",
      image: echoSafetyHomeImage,
      link: "/articles/portable-device-accuracy",
      category: "قلب و عروق"
    },
    {
      title: "لووتیروکسین؛ داروی تیروئید و ارتباط با قلب",
      description: "راهنمای جامع لووتیروکسین و پایش تیروئید در منزل.",
      image: levothyroxineImage,
      link: "/articles/levothyroxine",
      category: "دارو"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="ویزیت پزشک در منزل برای بیماران سندروم دان | نوید زندگی"
        description="ویزیت پزشک در منزل برای بیماران سندروم دان با اعزام سریع پزشک عمومی و متخصص. دریافت خدمات پزشکی ایمن و تخصصی در خانه بدون نیاز به مراجعه حضوری."
        keywords="ویزیت پزشک در منزل برای سندروم دان, پزشک در منزل, خدمات پزشکی در منزل, ویزیت متخصص در منزل, مراقبت بیماران سندروم دان, پزشک عمومی در منزل"
        ogType="article"
        publishedTime="2026-02-26"
      />
      <ArticleSchema
        title="ویزیت پزشک در منزل برای بیماران سندروم دان | مراقبت تخصصی در خانه"
        description="ویزیت پزشک در منزل برای بیماران سندروم دان با اعزام سریع پزشک عمومی و متخصص. دریافت خدمات پزشکی ایمن و تخصصی در خانه."
        publishedTime="2026-02-26"
        modifiedTime="2026-02-26"
        image={downSyndromeImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="mt-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-4">
            ویزیت پزشک در منزل برای بیماران سندروم دان | مراقبت تخصصی در خانه
          </h1>

          <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: ۱۴۰۴/۱۲/۰۸</p>

          <img
            src={downSyndromeImage}
            alt="ویزیت پزشک در منزل برای بیماران سندروم دان"
            className="w-full max-h-[400px] object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <p className="text-foreground/90 leading-8 mb-6">
            ویزیت پزشک در منزل برای بیماران سندروم دان یکی از بهترین روش‌های دریافت خدمات پزشکی ایمن، آرام و تخصصی برای این عزیزان است. افراد مبتلا به سندروم دان به دلیل شرایط جسمی و سیستم ایمنی خاص خود، نیاز به مراقبت‌های منظم پزشکی دارند. دریافت خدمات درمانی در خانه می‌تواند استرس، ریسک عفونت و مشکلات رفت‌وآمد را به حداقل برساند.
          </p>

          <p className="text-foreground/90 leading-8 mb-6">
            در این مقاله به بررسی مزایای <Link to="/articles/specialist-home-visit" className="text-primary hover:underline">ویزیت پزشک در منزل</Link> برای بیماران سندروم دان، خدمات قابل ارائه، هزینه‌ها و نحوه درخواست ویزیت می‌پردازیم.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
            <p className="text-destructive font-semibold text-sm">
              ⚠️ هشدار مهم: هرگز بدون تجویز پزشک متخصص اقدام به مصرف یا قطع هیچ دارویی نکنید. خوددرمانی خطرناک است.
            </p>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            سندروم دان چیست و چرا نیاز به مراقبت پزشکی منظم دارد؟
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            سندروم دان یک اختلال ژنتیکی ناشی از وجود کروموزوم اضافی ۲۱ است. این وضعیت می‌تواند باعث مشکلات قلبی، تیروئیدی، ضعف سیستم ایمنی و تأخیر رشدی شود. به همین دلیل، این افراد نیازمند مراقبت‌های زیر هستند:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li>معاینات دوره‌ای قلب با <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی</Link></li>
            <li>بررسی عملکرد <Link to="/articles/levothyroxine" className="text-primary hover:underline">تیروئید</Link></li>
            <li>کنترل رشد و تغذیه</li>
            <li>ارزیابی شنوایی و بینایی</li>
            <li>مراقبت در زمان بیماری‌های عفونی</li>
          </ul>
          <p className="text-foreground/90 leading-8 mb-6">
            انجام تمام این موارد از طریق ویزیت پزشک در منزل بسیار راحت‌تر و ایمن‌تر است.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            چرا ویزیت پزشک در منزل برای بیماران سندروم دان اهمیت دارد؟
          </h2>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">۱. کاهش استرس بیمار</h3>
          <p className="text-foreground/90 leading-8 mb-4">
            افراد مبتلا به سندروم دان ممکن است در محیط‌های شلوغ درمانی دچار اضطراب شوند. ویزیت در منزل محیطی امن و آشنا فراهم می‌کند.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">۲. کاهش خطر عفونت</h3>
          <p className="text-foreground/90 leading-8 mb-4">
            سیستم ایمنی برخی از این بیماران ضعیف‌تر است. مراجعه به مراکز درمانی می‌تواند خطر ابتلا به بیماری‌های عفونی را افزایش دهد.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">۳. صرفه‌جویی در زمان خانواده</h3>
          <p className="text-foreground/90 leading-8 mb-4">
            حمل‌ونقل و انتظار در صف‌های درمانی برای خانواده‌ها دشوار است. <Link to="/services/internal" className="text-primary hover:underline">خدمات پزشکی در منزل</Link> این مشکل را برطرف می‌کند.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">۴. مراقبت اختصاصی و شخصی‌سازی شده</h3>
          <p className="text-foreground/90 leading-8 mb-6">
            پزشک در منزل زمان بیشتری برای بررسی کامل وضعیت بیمار اختصاص می‌دهد.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            خدمات ویزیت پزشک در منزل برای سندروم دان شامل چه مواردی است؟
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">خدمات قابل ارائه در منزل عبارتند از:</p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li>معاینه عمومی و تخصصی</li>
            <li>کنترل فشار خون و علائم حیاتی</li>
            <li>بررسی مشکلات تنفسی</li>
            <li>تجویز دارو</li>
            <li>درخواست و تفسیر <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link></li>
            <li>ارزیابی مشکلات رفتاری و رشدی</li>
            <li>مشاوره تغذیه</li>
            <li><Link to="/services/nursing" className="text-primary hover:underline">خدمات پرستاری در منزل</Link> (تزریقات، پانسمان و...)</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            چه زمانی باید برای بیمار سندروم دان پزشک به منزل بیاوریم؟
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">در شرایط زیر توصیه می‌شود از خدمات ویزیت در منزل استفاده شود:</p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li>تب و علائم عفونت</li>
            <li>سرفه و مشکلات تنفسی</li>
            <li>بی‌حالی یا تغییر رفتار ناگهانی</li>
            <li>مشکلات گوارشی</li>
            <li>پیگیری بیماری‌های مزمن</li>
            <li>چکاپ دوره‌ای</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            مزایای ویزیت پزشک در منزل نسبت به مراجعه حضوری
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            مراجعه حضوری به مطب یا بیمارستان معمولاً با انتظار طولانی، احتمال انتقال بیماری، استرس بیمار و رفت‌وآمد دشوار همراه است. در مقابل، ویزیت در منزل شامل معاینه سریع، کاهش ریسک عفونت، آرامش محیط خانه و عدم نیاز به جابجایی است.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            هزینه ویزیت پزشک در منزل برای بیماران سندروم دان
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">هزینه ویزیت بسته به موارد زیر متفاوت است:</p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li>نوع پزشک (عمومی یا متخصص)</li>
            <li>ساعت مراجعه (عادی یا شبانه)</li>
            <li>شهر محل سکونت</li>
            <li>خدمات تکمیلی (آزمایش، تزریقات و…)</li>
          </ul>
          <p className="text-foreground/90 leading-8 mb-6">
            برای اطلاع دقیق از تعرفه‌ها با مرکز نوید زندگی تماس بگیرید: <a href="tel:09386117912" className="text-primary hover:underline font-semibold">۰۹۳۸۶۱۱۷۹۱۲</a>
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            چگونه درخواست ویزیت پزشک در منزل ثبت کنیم؟
          </h2>
          <ul className="list-decimal pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li>تماس تلفنی با مرکز نوید زندگی: <a href="tel:09386117912" className="text-primary hover:underline font-semibold">۰۹۳۸۶۱۱۷۹۱۲</a></li>
            <li>ثبت درخواست و تعیین زمان مراجعه</li>
            <li>حضور پزشک در منزل در کوتاه‌ترین زمان</li>
          </ul>
          <p className="text-foreground/90 leading-8 mb-6">
            خدمات ویزیت در منزل نوید زندگی به صورت ۲۴ ساعته ارائه می‌شود.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">جمع‌بندی</h2>
          <p className="text-foreground/90 leading-8 mb-6">
            ویزیت پزشک در منزل برای بیماران سندروم دان راهکاری ایمن، راحت و تخصصی برای مراقبت از این عزیزان است. با توجه به نیاز به معاینات دوره‌ای و حساسیت سیستم ایمنی این افراد، دریافت خدمات پزشکی در محیط خانه می‌تواند کیفیت مراقبت را افزایش داده و استرس خانواده را کاهش دهد. اگر به دنبال دریافت خدمات سریع، مطمئن و تخصصی هستید، <Link to="/articles/specialist-home-visit" className="text-primary hover:underline">ویزیت پزشک در منزل</Link> بهترین انتخاب است.
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
            <p className="text-foreground font-bold text-lg mb-3">
              درخواست ویزیت پزشک در منزل برای بیماران سندروم دان
            </p>
            <p className="text-muted-foreground mb-4">
              همین حالا با کارشناسان نوید زندگی تماس بگیرید
            </p>
            <a href="tel:09386117912">
              <Button className="gap-2">
                <Phone className="h-4 w-4" />
                تماس: ۰۹۳۸۶۱۱۷۹۱۲
              </Button>
            </a>
          </div>

          <PricingInfo />
          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </div>
    </ArticleLayout>
  );
};

export default DownSyndromeHomeVisitPage;
