import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import mriImage from "@/assets/mri-imaging-article.jpg";
import echoSafetyImage from "@/assets/echo-safety-home.jpg";
import cervicalDiscImage from "@/assets/cervical-disc-article.jpg";
import herniedDiscImage from "@/assets/herniated-disc.jpg";

const MRIImagingArticlePage = () => {
  const publishDate = "۱۴۰۴/۱۲/۲۱";
  const isoPublishDate = "2026-03-11";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "ام‌آر‌آی (MRI): راهنمای کامل", url: "/articles/mri-imaging-guide" }
  ];

  const faqs = [
    {
      question: "آیا ام‌آر‌آی خطرناک است؟",
      answer: "خیر. MRI از اشعه ایکس استفاده نمی‌کند و بر پایه امواج مغناطیسی و رادیویی کار می‌کند که هیچ خطر تشعشعی ثابت شده‌ای ندارند."
    },
    {
      question: "آیا افراد دارای پیس‌میکر می‌توانند MRI انجام دهند؟",
      answer: "مدل‌های قدیمی پیس‌میکر سازگار با MRI نیستند، اما مدل‌های جدید (MRI-Compatible) امکان انجام MRI را فراهم می‌کنند. حتماً پزشک خود را مطلع کنید."
    },
    {
      question: "تفاوت MRI با سی‌تی‌اسکن چیست؟",
      answer: "MRI برای بافت‌های نرم (مغز، نخاع، تاندون‌ها) عالی است و از اشعه استفاده نمی‌کند. سی‌تی‌اسکن برای استخوان‌ها و خونریزی حاد بهتر است اما از اشعه ایکس استفاده می‌کند."
    },
    {
      question: "چرا قبل از MRI باید آزمایش کلیه بدهم؟",
      answer: "در برخی MRIها ماده حاجب گادولینیوم تزریق می‌شود. اگر کلیه‌ها ضعیف باشند، این ماده می‌تواند باعث فیبروز سیستمیک نفروژنیک شود. بررسی Creatinine قبل از تزریق ضروری است."
    },
    {
      question: "آیا نوید زندگی MRI در منزل انجام می‌دهد؟",
      answer: "خیر. دستگاه MRI به دلیل ابعاد بزرگ قابل حمل نیست. اما نوید زندگی آمادگی قبل از MRI (آزمایش کلیه، بررسی قلب) و پیگیری بعد از آن (تفسیر نتایج و ویزیت تخصصی) را در منزل انجام می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "ایمنی اکوکاردیوگرافی در منزل",
      description: "بررسی علمی ایمنی اکو قلب و تفاوت آن با رادیولوژی",
      image: echoSafetyImage,
      link: "/articles/echo-safety-home",
      category: "قلب و عروق"
    },
    {
      title: "دیسک گردن: علائم و درمان",
      description: "بررسی علائم دیسک گردن و روش‌های تشخیص و درمان آن",
      image: cervicalDiscImage,
      link: "/articles/cervical-disc",
      category: "سلامت عمومی"
    },
    {
      title: "فتق دیسک کمر: تشخیص و درمان",
      description: "راهنمای کامل فتق دیسک کمر و اهمیت تشخیص زودهنگام",
      image: herniedDiscImage,
      link: "/articles/herniated-disc",
      category: "سلامت عمومی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="ام‌آر‌آی (MRI) چیست؟ راهنمای کامل تصویربرداری رزونانس مغناطیسی | نوید زندگی"
        description="راهنمای جامع ام‌آر‌آی: مکانیسم کار، کاربردها، تفاوت با سی‌تی‌اسکن، موارد منع و نقش خدمات نوید زندگی در آمادگی و پیگیری MRI"
        keywords="ام آر آی، MRI چیست، تفاوت MRI و سی تی اسکن، تصویربرداری رزونانس مغناطیسی، آزمایش کلیه قبل از MRI، اکو قلب در منزل، نوید زندگی"
        canonical="https://navidzendegi.ir/articles/mri-imaging-guide"
        ogType="article"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="ام‌آر‌آی (MRI) چیست؟ راهنمای کامل تصویربرداری رزونانس مغناطیسی"
        description="راهنمای جامع ام‌آر‌آی: مکانیسم، کاربردها و نقش خدمات نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={mriImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          ام‌آر‌آی (MRI) چیست؟ راهنمای کامل تصویربرداری رزونانس مغناطیسی
        </h1>

        <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: {publishDate}</p>

        <img
          src={mriImage}
          alt="دستگاه ام‌آر‌آی تصویربرداری رزونانس مغناطیسی"
          className="w-full rounded-lg mb-8"
          loading="lazy"
        />

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          ام‌آر‌آی (MRI) که مخفف عبارت Magnetic Resonance Imaging است، یکی از پیشرفته‌ترین و دقیق‌ترین روش‌های تصویربرداری پزشکی محسوب می‌شود. برخلاف سی‌تی‌اسکن یا رادیولوژی، در این روش از اشعه ایکس استفاده نمی‌شود؛ به همین دلیل خطرات ناشی از تشعشعات یونیزان را ندارد.
        </p>

        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <p className="text-destructive text-sm font-medium">
            ⚠️ هشدار: هرگونه تصمیم درباره انجام MRI یا سایر تصویربرداری‌ها باید با تجویز پزشک متخصص باشد. از خوددرمانی و مراجعه خودسرانه پرهیز کنید.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">۱. ام‌آر‌آی چگونه کار می‌کند؟ (تکنولوژی آهنربا)</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          بدن انسان عمدتاً از آب تشکیل شده است و مولکول‌های آب حاوی اتم‌های هیدروژن (پروتون) هستند.
        </p>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>میدان مغناطیسی:</strong> دستگاه MRI یک آهنربای بسیار قوی است. وقتی بیمار داخل دستگاه قرار می‌گیرد، پروتون‌های بدن او با میدان مغناطیسی هم‌تراست می‌شوند.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>امواج رادیویی:</strong> سپس امواج رادیویی به بدن فرستاده شده و چیدمان پروتون‌ها را به هم می‌زنند. با خاموش شدن امواج، پروتون‌ها به حالت اول برمی‌گردند و سیگنالی ارسال می‌کنند.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>تصویرسازی:</strong> کامپیوتر این سیگنال‌ها را دریافت کرده و تصاویر سه‌بعدی بسیار دقیقی از بافت‌های نرم بدن خلق می‌کند.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">۲. کاربردهای اصلی MRI در پزشکی</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          MRI بهترین ابزار برای دیدن بافت‌های نرم است. کاربردهای آن عبارتند از:
        </p>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>مغز و اعصاب:</strong> تشخیص تومورهای مغزی، سکته مغزی، ام‌اس (MS)، عفونت‌های مغزی و ناهنجاری‌های عروقی.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>ستون فقرات و مفاصل:</strong> دقیق‌ترین روش برای تشخیص <Link to="/articles/herniated-disc" className="text-primary hover:underline">دیسک کمر</Link>، پارگی رباط‌ها (مثل ACL زانو)، مینیسک و التهاب مفاصل.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>قلب و عروق (Cardiac MRI):</strong> بررسی آسیب‌های عضله قلب بعد از سکته، تومورهای قلبی و بیماری‌های مادرزادی قلب. برای بررسی اولیه قلب، <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی در منزل</Link> گزینه مناسبی است.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>اندام‌های داخلی:</strong> بررسی کبد، کلیه‌ها، لوزالمعده و اندام‌های لگنی (مثل رحم و پروستات).</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">۳. تفاوت‌های کلیدی MRI با سی‌تی‌اسکن (CT)</h2>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>نوع اشعه:</strong> MRI از امواج مغناطیسی و رادیویی (بی‌خطر) استفاده می‌کند، در حالی که سی‌تی‌اسکن از اشعه ایکس (یونیزان) بهره می‌برد.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>بهترین کاربرد:</strong> MRI برای بافت‌های نرم، عصب‌ها و تاندون‌ها عالی است. سی‌تی‌اسکن برای استخوان‌ها، ریه و خونریزی حاد بهتر عمل می‌کند.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>زمان انجام:</strong> MRI طولانی‌تر (۲۰ تا ۶۰ دقیقه) و سی‌تی‌اسکن کوتاه‌تر (کمتر از ۵ دقیقه) است.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>دقت:</strong> MRI دقت بسیار بالایی در جزئیات نرم دارد، در حالی که سی‌تی‌اسکن در ساختارهای سخت دقیق‌تر است.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">۴. خدمات نوید زندگی در مسیر تشخیصی شما</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          اگرچه دستگاه MRI به دلیل ابعاد بزرگ قابل حمل به منزل نیست، اما مرکز نوید زندگی در مراحل قبل و بعد از آن نقش حیاتی ایفا می‌کند:
        </p>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>آمادگی برای MRI با ویزیت در منزل:</strong> بسیاری از بیماران به دلیل ترس از محیط بسته (Claustrophobia) یا مشکلات قلبی نگران هستند. متخصصین ما با <Link to="/services/general-doctor" className="text-primary hover:underline">ویزیت در منزل</Link> و تجویز آرام‌بخش‌های ایمن یا بررسی وضعیت قلبی با <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو و نوار قلب</Link>، بیمار را آماده می‌کنند.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>بررسی کلیه قبل از MRI با تزریق:</strong> برای برخی MRIها ماده حاجب (گادولینیوم) تزریق می‌شود. تیم <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه ما در منزل</Link> میزان Creatinine خون شما را چک می‌کند تا از سلامت کلیه قبل از تزریق مطمئن شویم.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>تفسیر تخصصی و پیگیری:</strong> پس از انجام MRI، متخصصین ما در منزل شما حضور یافته و گزارش تصویربرداری را با علائم بالینی تطبیق داده و نقشه درمان را ترسیم می‌کنند.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">۵. چه کسانی نباید MRI انجام دهند؟</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          به دلیل وجود آهنربای بسیار قوی، افراد زیر باید قبل از ورود به اتاق MRI حتماً پزشک خود را مطلع کنند:
        </p>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>افرادی که دارای باتری قلب (PaceMaker) قدیمی هستند (مدل‌های جدید سازگار با MRI شده‌اند).</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>کسانی که ترکش فلزی در بدن یا جراحی‌های چشمی با قطعات فلزی داشته‌اند.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>بیماران دارای برخی پروتزهای فلزی خاص یا کلیپس‌های عروقی مغز.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">نتیجه‌گیری</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          MRI چشم قدرتمند پزشک برای دیدن پنهان‌ترین نقاط بدن است. با وجود دقت بالا، انجام آن نیاز به پیش‌نیازهای سلامتی (مثل سلامت کلیه و ثبات قلبی) دارد. مرکز نوید زندگی با پایش‌های دقیق آزمایشگاهی و قلبی در منزل، امنیت و آرامش شما را در مسیر این تصویربرداری پیشرفته تضمین می‌کند.
        </p>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">نیاز به آمادگی قبل از MRI دارید؟</h2>
          <p className="text-muted-foreground mb-4">
            برای آزمایش کلیه، بررسی قلب یا ویزیت تخصصی قبل و بعد از MRI در منزل، تماس بگیرید.
          </p>
          <a
            href="tel:09386117912"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            تماس: ۰۹۳۸۶۱۱۷۹۱۲
          </a>
        </div>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />

        <section className="mt-12">
          <PricingInfo />
        </section>
      </main>
    </ArticleLayout>
  );
};

export default MRIImagingArticlePage;
