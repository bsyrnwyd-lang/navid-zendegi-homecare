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
import hivImage from "@/assets/hiv-article.jpg";
import turnerSyndromeImage from "@/assets/turner-syndrome-article.jpg";
import ejectionFractionImage from "@/assets/ef-ejection-fraction.jpg";
import downSyndromeImage from "@/assets/down-syndrome-home-visit.jpg";

const HIVArticlePage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "HIV؛ از فرضیه تا واقعیت", url: "/articles/hiv-modern-treatment" }
  ];

  const faqs = [
    {
      question: "آیا HIV قابل درمان است؟",
      answer: "HIV قابل کنترل است اما هنوز درمان قطعی ندارد. با مصرف منظم داروهای ضد رتروویروسی (ART)، بار ویروسی به سطح غیرقابل شناسایی می‌رسد و فرد زندگی طبیعی خواهد داشت."
    },
    {
      question: "آیا آزمایش HIV در منزل قابل انجام است؟",
      answer: "بله، تیم آزمایشگاه سیار نوید زندگی نمونه‌گیری را در منزل و با حفظ کامل محرمانگی انجام می‌دهد و نتایج به صورت خصوصی ارائه می‌شود."
    },
    {
      question: "U=U یعنی چه؟",
      answer: "U=U (Undetectable = Untransmittable) یعنی فردی که بار ویروسی غیرقابل شناسایی دارد، ویروس را از طریق رابطه جنسی به دیگران منتقل نمی‌کند."
    },
    {
      question: "چرا پایش قلبی برای بیماران HIV مهم است؟",
      answer: "برخی داروهای ART می‌توانند چربی خون را افزایش داده و ریسک بیماری‌های قلبی را بالا ببرند. اکو و نوار قلب دوره‌ای برای این بیماران توصیه می‌شود."
    },
    {
      question: "آیا HIV از طریق تماس‌های روزمره منتقل می‌شود؟",
      answer: "خیر. HIV از طریق دست دادن، آغوش، بوسیدن ساده، ظروف غذا یا نیش پشه منتقل نمی‌شود. راه‌های اصلی انتقال شامل رابطه جنسی محافظت‌نشده، خون آلوده و سوزن مشترک است."
    }
  ];

  const relatedArticles = [
    {
      title: "سندرم ترنر؛ ژنتیک، علائم و پایش قلبی",
      description: "بررسی اختلالات ژنتیکی و اهمیت پایش قلبی در منزل.",
      image: turnerSyndromeImage,
      link: "/articles/turner-syndrome",
      category: "زنان"
    },
    {
      title: "کسر جهشی قلب (EF) چیست؟",
      description: "اهمیت اکوکاردیوگرافی در ارزیابی عملکرد قلب.",
      image: ejectionFractionImage,
      link: "/articles/ejection-fraction",
      category: "قلب و عروق"
    },
    {
      title: "ویزیت پزشک در منزل برای بیماران سندروم دان",
      description: "خدمات پزشکی تخصصی در خانه برای بیماران خاص.",
      image: downSyndromeImage,
      link: "/articles/down-syndrome-home-visit",
      category: "سلامت عمومی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="HIV از فرضیه تا واقعیت؛ تاریخچه، درمان و پایش در منزل | نوید زندگی"
        description="بررسی جامع HIV: تاریخچه، مکانیسم عملکرد، درمان مدرن ART، مفهوم U=U و خدمات آزمایش و پایش محرمانه در منزل نوید زندگی"
        keywords="علائم اولیه HIV, درمان جدید ایدز, آزمایش HIV در منزل محرمانه, ویزیت متخصص داخلی در محل, تداخلات دارویی ART, نوید زندگی"
        ogType="article"
        publishedTime="2026-02-27"
      />
      <ArticleSchema
        title="HIV از فرضیه تا واقعیت؛ تاریخچه، علم و زندگی با ویروس در عصر مدرن"
        description="بررسی جامع ویروس HIV از تاریخچه تا درمان‌های مدرن و خدمات پایش در منزل"
        publishedTime="2026-02-27"
        modifiedTime="2026-02-27"
        image={hivImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="mt-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-4">
            HIV از فرضیه تا واقعیت؛ تاریخچه، علم و زندگی با ویروس در عصر مدرن
          </h1>

          <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: ۱۴۰۴/۱۲/۰۹</p>

          <img
            src={hivImage}
            alt="ویروس HIV و سیستم ایمنی بدن"
            className="w-full max-h-[400px] object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <p className="text-foreground/90 leading-8 mb-6">
            ویروس HIV دیگر یک حکم مرگبار نیست، بلکه یک بیماری مزمن و قابل کنترل محسوب می‌شود. در دهه‌های گذشته، پیشرفت‌های علمی نه تنها نحوه برخورد ما با این ویروس را تغییر داده، بلکه افق‌های جدیدی در درمان‌های پیشرفته باز کرده است.
          </p>

          <p className="text-foreground/90 leading-8 mb-6">
            مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با ارائه خدمات <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link>، <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی</Link> و <Link to="/services/specialist" className="text-primary hover:underline">ویزیت متخصص داخلی</Link> در محیط خصوصی منزل، در تمام مراحل پایش سلامت بیماران HIV در کنار شماست.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
            <p className="text-destructive font-semibold text-sm">
              ⚠️ هشدار مهم: هرگز بدون تجویز پزشک متخصص اقدام به مصرف یا قطع هیچ دارویی نکنید. خوددرمانی خطرناک است.
            </p>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۱. تاریخچه: از اعماق جنگل‌های آفریقا تا پاندمی جهانی
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            <strong>ریشه‌های اولیه:</strong> تحقیقات ژنتیکی نشان می‌دهد که HIV احتمالاً در اواخر قرن ۱۹ یا اوایل قرن ۲۰ از ویروس نقص ایمنی میمونی (SIV) به انسان منتقل شده است (فرضیه شکارچی).
          </p>
          <p className="text-foreground/90 leading-8 mb-4">
            <strong>دهه ۱۹۸۰؛ آغاز بحران:</strong> در سال ۱۹۸۱، اولین موارد غیرعادی از نقص ایمنی در آمریکا گزارش شد. در سال ۱۹۸۳، تیم دکتر لوک مونتانیه در انستیتو پاستور فرانسه موفق به شناسایی ویروس شد.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>تحول در درمان:</strong> از اواسط دهه ۹۰ با معرفی درمان‌های ترکیبی (ART)، نرخ مرگ‌ومیر به شدت کاهش یافت.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۲. مکانیسم عملکرد: ویروس چگونه به قلعه بدن نفوذ می‌کند؟
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            HIV به طور مستقیم به سلول‌های فرمانده سیستم ایمنی یعنی CD4 (لنفوسیت‌های T) حمله می‌کند:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>اتصال و ورود:</strong> ویروس با استفاده از پروتئین‌های سطح خود به گیرنده‌های سلول CD4 می‌چسبد.</li>
            <li><strong>رونویسی معکوس:</strong> ویروس RNA خود را به DNA تبدیل کرده و وارد هسته سلول انسان می‌کند.</li>
            <li><strong>تولید انبوه:</strong> سلول آلوده به جای انجام وظایف ایمنی، تبدیل به کارخانه تولید ویروس‌های جدید می‌شود.</li>
            <li><strong>تخریب:</strong> با خروج ویروس‌های جدید، سلول میزبان از بین می‌رود و قدرت دفاعی بدن سقوط می‌کند.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۳. مراحل بیماری؛ از عفونت اولیه تا AIDS
          </h2>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>مرحله حاد (Acute):</strong> ۲ تا ۴ هفته پس از ورود ویروس، علائمی شبیه <Link to="/articles/influenza" className="text-primary hover:underline">آنفولانزا</Link> بروز می‌کند. بار ویروسی در این مرحله بسیار بالاست.</li>
            <li><strong>مرحله مزمن (Latency):</strong> ویروس فعال است اما علائم کمی دارد. این مرحله بدون درمان می‌تواند ۱۰ سال یا بیشتر طول بکشد.</li>
            <li><strong>مرحله ایدز (AIDS):</strong> زمانی که تعداد سلول‌های CD4 به زیر ۲۰۰ عدد برسد، بدن در برابر عفونت‌های ساده نیز ناتوان می‌شود.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۴. درمان‌های مدرن و مفهوم U=U
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            امروزه درمان با داروهای ضد رتروویروسی (ART) به قدری پیشرفته شده که می‌تواند بار ویروسی را به سطح «غیرقابل شناسایی» برساند:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>U=U (Undetectable = Untransmittable):</strong> فردی که بار ویروسی غیرقابل شناسایی دارد، ویروس را به شریک جنسی خود منتقل نمی‌کند.</li>
            <li><strong>پروفیلاکسی (PrEP و PEP):</strong> داروهایی که قبل یا بلافاصله بعد از مواجهه احتمالی مصرف می‌شوند تا از استقرار ویروس جلوگیری کنند.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۵. پایش‌های ضروری و خدمات نوید زندگی در منزل
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            زندگی با HIV نیاز به مراقبت‌های دوره‌ای برای پیشگیری از عوارض جانبی داروها و بیماری‌های همراه دارد. ما این خدمات را در امنیت و حریم خصوصی منزل شما ارائه می‌دهیم:
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">الف) آزمایش‌های دوره‌ای در منزل</h3>
          <p className="text-foreground/90 leading-8 mb-6">
            پایش مداوم تعداد CD4 و بار ویروسی (Viral Load) حیاتی است. تیم <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه سیار نوید زندگی</Link> بدون نیاز به مراجعه شما به مراکز شلوغ، نمونه‌گیری را در منزل انجام داده و نتایج را به صورت محرمانه ارائه می‌دهد.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">ب) پایش سلامت قلب و عروق</h3>
          <p className="text-foreground/90 leading-8 mb-6">
            برخی داروهای HIV می‌توانند باعث افزایش چربی خون و ریسک بیماری‌های قلبی شوند. انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی</Link> و <Link to="/services/holter" className="text-primary hover:underline">نوار قلب در منزل</Link> برای بیماران تحت درمان، جهت اطمینان از سلامت قلب و عروق ضروری است.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">ج) بررسی کبد و کلیه</h3>
          <p className="text-foreground/90 leading-8 mb-6">
            داروها باید توسط کبد و کلیه پردازش شوند. چکاپ دوره‌ای فاکتورهای کبدی و کلیوی در منزل برای تنظیم دقیق دوز داروها توسط <Link to="/services/specialist" className="text-primary hover:underline">متخصص داخلی</Link> انجام می‌شود.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۶. راه‌های انتقال و باورهای غلط
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            <strong>راه‌های انتقال:</strong> رابطه جنسی محافظت‌نشده، خون آلوده، سوزن مشترک و از مادر به نوزاد.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>باورهای غلط:</strong> HIV از طریق دست دادن، آغوش، بوسیدن ساده، ظروف غذا یا نیش پشه منتقل <strong>نمی‌شود</strong>.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">نتیجه‌گیری</h2>
          <p className="text-foreground/90 leading-8 mb-6">
            HIV امروز دیگر یک پایان نیست، بلکه شروع یک سبک زندگی آگاهانه است. با تشخیص زودهنگام و درمان منظم، طول عمر افراد مبتلا به HIV با افراد عادی تفاوتی ندارد. مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با حفظ کامل محرمانگی و ارائه خدمات تخصصی در منزل، در تمام مراحل درمان و پایش سلامتی در کنار شماست.
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
            <p className="text-foreground font-bold text-lg mb-3">
              آزمایش و پایش محرمانه HIV در منزل
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
            منابع: WHO | CDC | UNAIDS | Harvard Health
          </p>

          <PricingInfo />
          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </div>
    </ArticleLayout>
  );
};

export default HIVArticlePage;
