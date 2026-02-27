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
import turnerImage from "@/assets/turner-syndrome-article.jpg";
import downSyndromeImage from "@/assets/down-syndrome-home-visit.jpg";
import ejectionFractionImage from "@/assets/ef-ejection-fraction.jpg";
import bloodPressureImage from "@/assets/blood-pressure-readings.jpg";

const TurnerSyndromePage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سندرم ترنر؛ ژنتیک، علائم و پایش قلبی", url: "/articles/turner-syndrome" }
  ];

  const faqs = [
    {
      question: "سندرم ترنر چیست و چه کسانی را مبتلا می‌کند؟",
      answer: "سندرم ترنر یک اختلال ژنتیکی است که فقط زنان را مبتلا می‌کند و در آن یکی از کروموزوم‌های X به طور کامل یا جزئی غایب است. این وضعیت در حدود ۱ از هر ۲۵۰۰ دختر دیده می‌شود."
    },
    {
      question: "آیا سندرم ترنر قابل درمان است؟",
      answer: "تغییر ژنتیکی قابل درمان نیست، اما علائم آن با هورمون رشد، استروژن درمانی و پایش قلبی مستمر به خوبی قابل مدیریت است و فرد می‌تواند زندگی باکیفیتی داشته باشد."
    },
    {
      question: "چرا پایش قلبی در سندرم ترنر مهم است؟",
      answer: "حدود ۳۰ تا ۵۰ درصد افراد مبتلا به سندرم ترنر ناهنجاری‌های قلبی مادرزادی دارند. خطر دایسکسیون آئورت نیز بالاتر از جمعیت عمومی است و پایش منظم با اکو و هولتر ضروری است."
    },
    {
      question: "آیا اکوکاردیوگرافی در منزل برای بیماران ترنر قابل انجام است؟",
      answer: "بله، تیم نوید زندگی با تجهیزات پرتابل اکو، وضعیت دریچه‌ها و آئورت را در محیط آرام خانه بررسی می‌کند."
    },
    {
      question: "چه آزمایش‌هایی برای بیماران سندرم ترنر لازم است؟",
      answer: "آزمایش‌های هورمون تیروئید (TSH)، قند خون (HbA1C)، سطح استروژن و آزمایش‌های کلیوی به صورت دوره‌ای لازم است که همه در منزل قابل انجام هستند."
    }
  ];

  const relatedArticles = [
    {
      title: "ویزیت پزشک در منزل برای بیماران سندروم دان",
      description: "مراقبت تخصصی در خانه برای افراد دارای اختلالات ژنتیکی.",
      image: downSyndromeImage,
      link: "/articles/down-syndrome-home-visit",
      category: "سلامت عمومی"
    },
    {
      title: "کسر جهشی قلب (EF) چیست؟",
      description: "اهمیت اکوکاردیوگرافی در ارزیابی عملکرد قلب.",
      image: ejectionFractionImage,
      link: "/articles/ejection-fraction",
      category: "قلب و عروق"
    },
    {
      title: "خواندن و تفسیر اعداد فشار خون",
      description: "پایش فشار خون و اهمیت آن در بیماری‌های عروقی.",
      image: bloodPressureImage,
      link: "/articles/blood-pressure-readings",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="سندرم ترنر؛ علائم، مشکلات قلبی و پایش در منزل | نوید زندگی"
        description="بررسی سندرم ترنر: علت ژنتیکی، علائم ظاهری، ناهنجاری‌های قلبی و اهمیت اکو و هولتر در منزل. خدمات تخصصی نوید زندگی."
        keywords="سندرم ترنر, علائم سندرم ترنر در نوزادان, مشکلات قلبی ترنر, اکوکاردیوگرافی در منزل, آزمایش هورمونی در محل, نوید زندگی"
        ogType="article"
        publishedTime="2026-02-27"
      />
      <ArticleSchema
        title="سندرم ترنر؛ ژنتیک، علائم و پایش قلبی در منزل"
        description="بررسی جامع سندرم ترنر از ریشه‌های ژنتیکی تا ضرورت پایش‌های قلبی در منزل"
        publishedTime="2026-02-27"
        modifiedTime="2026-02-27"
        image={turnerImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="mt-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-4">
            سندرم ترنر؛ ژنتیک، علائم و پایش قلبی در منزل
          </h1>

          <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: ۱۴۰۴/۱۲/۰۹</p>

          <img
            src={turnerImage}
            alt="سندرم ترنر و مشکلات قلبی"
            className="w-full max-h-[400px] object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <p className="text-foreground/90 leading-8 mb-6">
            سندرم ترنر (Turner Syndrome) یکی از شایع‌ترین اختلالات کروموزومی در زنان است که به دلیل فقدان کامل یا جزئی یکی از کروموزوم‌های جنسی X رخ می‌دهد. این بیماری تأثیرات گسترده‌ای بر ظاهر، سیستم باروری و به‌ویژه سلامت قلب و عروق دارد.
          </p>

          <p className="text-foreground/90 leading-8 mb-6">
            مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با ارائه خدمات <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی</Link>، <Link to="/services/holter" className="text-primary hover:underline">هولتر فشار خون</Link> و <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link>، پایش جامع این بیماران را بدون نیاز به مراجعه حضوری فراهم می‌کند.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
            <p className="text-destructive font-semibold text-sm">
              ⚠️ هشدار مهم: هرگز بدون تجویز پزشک متخصص اقدام به مصرف یا قطع هیچ دارویی نکنید. خوددرمانی خطرناک است.
            </p>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۱. تاریخچه و علت ژنتیکی
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            <strong>کشف:</strong> این بیماری اولین بار در سال ۱۹۳۸ توسط دکتر هنری ترنر توصیف شد.
          </p>
          <p className="text-foreground/90 leading-8 mb-4">
            <strong>ژنتیک:</strong> انسان به‌طور طبیعی دارای ۴۶ کروموزوم است که ۲ تای آن‌ها کروموزوم جنسی هستند (XX در زنان). در سندرم ترنر، فرد به‌جای ۴۶ کروموزوم، با ۴۵ کروموزوم متولد می‌شود (فرمول ژنتیکی 45,X).
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>موزائیسم:</strong> در برخی موارد، فقط بعضی از سلول‌ها کروموزوم X کم دارند و بقیه طبیعی هستند که به آن «ترنر موزائیک» می‌گویند و علائم خفیف‌تری دارد.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۲. نشانه‌های ظاهری و بالینی
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            سندرم ترنر معمولاً در بدو تولد یا در دوران بلوغ تشخیص داده می‌شود. علائم شایع عبارتند از:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>قد کوتاه:</strong> بارزترین ویژگی که تقریباً در همه بیماران دیده می‌شود.</li>
            <li><strong>چین‌های پوستی در گردن:</strong> گردن پرده‌دار (Webbed neck).</li>
            <li><strong>مشکلات باروری:</strong> عدم تکامل تخمدان‌ها و یائسگی زودرس.</li>
            <li><strong>ادم لنفاوی:</strong> تورم دست‌ها و پاها در بدو تولد.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۳. چالش‌های قلبی؛ بخش حیاتی (خدمات نوید زندگی)
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            مهم‌ترین خطری که سلامت و طول عمر افراد مبتلا به سندرم ترنر را تهدید می‌کند، ناهنجاری‌های قلبی عروقی است. حدود ۳۰ تا ۵۰ درصد این افراد با مشکلات قلبی متولد می‌شوند.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">الف) تنگی دریچه آئورت و کوارکتاسیون</h3>
          <p className="text-foreground/90 leading-8 mb-4">
            بسیاری از این بیماران دچار «دریچه آئورت دولتی» (به‌جای سه‌لتی) یا تنگی بخشی از رگ آئورت هستند.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>خدمات ما:</strong> از آنجا که این بیماران نیاز به پایش مادام‌العمر دارند، انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی در منزل</Link> توسط متخصصین نوید زندگی اجازه می‌دهد بدون استرسِ محیط‌های درمانی، وضعیت دریچه‌ها و قطر رگ آئورت به دقت بررسی شود.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">ب) خطر دایسکسیون (پارگی) آئورت</h3>
          <p className="text-foreground/90 leading-8 mb-4">
            دیواره رگ آئورت در این افراد ممکن است به مرور زمان ضعیف و گشاد شود (آنوریسم آئورت). کنترل دقیق <Link to="/articles/blood-pressure-readings" className="text-primary hover:underline">فشار خون</Link> در این بیماران حیاتی است.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>خدمات ما:</strong> ما با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر فشار خون ۲۴ ساعته در منزل</Link>، کوچک‌ترین نوسانات فشار را رصد می‌کنیم تا از فشار بیش از حد به دیواره عروق پیشگیری کنیم.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۴. اختلالات غدد و آزمایشگاه سیار
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            سندرم ترنر با بیماری‌های خودایمنی مثل کم‌کاری تیروئید و دیابت در ارتباط است.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>آزمایش در منزل:</strong> تیم <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه نوید زندگی</Link> با حضور در محل، آزمایش‌های دوره‌ای هورمون تیروئید (TSH)، قند خون (HbA1C) و بررسی‌های هورمونی (مانند سطح استروژن) را انجام می‌دهد تا دوز داروهای جایگزین هورمونی به دقت تنظیم شود.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۵. درمان و مدیریت
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            اگرچه درمان قطعی برای تغییر کروموزوم وجود ندارد، اما مدیریت علائم زندگی باکیفیتی را فراهم می‌کند:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>هورمون رشد:</strong> برای بهبود وضعیت قد در دوران کودکی.</li>
            <li><strong>استروژن درمانی:</strong> برای شروع بلوغ و پیشگیری از <Link to="/articles/calcium-supplement" className="text-primary hover:underline">پوکی استخوان</Link>.</li>
            <li><strong>پایش قلبی مستمر:</strong> حیاتی‌ترین بخش درمان برای جلوگیری از حوادث ناگوار عروقی.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">نتیجه‌گیری</h2>
          <p className="text-foreground/90 leading-8 mb-6">
            سندرم ترنر یک وضعیت پیچیده است که نیاز به تیمی متشکل از متخصصین غدد، ژنتیک و قلب دارد. مرکز نوید زندگی با درک حساسیت‌های این بیماران، تمام خدمات تشخیصی از جمله <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو قلب</Link>، <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link> و <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون</Link> را در محیط آرام خانه فراهم می‌کند تا این عزیزان با امنیت کامل، مسیر سلامتی خود را طی کنند.
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
            <p className="text-foreground font-bold text-lg mb-3">
              پایش قلبی و آزمایش‌های هورمونی در منزل برای بیماران سندرم ترنر
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

          <p className="text-xs text-muted-foreground mb-8">
            منابع: FDA | Harvard Health | Journal of Internal Medicine
          </p>

          <PricingInfo />
          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </div>
    </ArticleLayout>
  );
};

export default TurnerSyndromePage;
