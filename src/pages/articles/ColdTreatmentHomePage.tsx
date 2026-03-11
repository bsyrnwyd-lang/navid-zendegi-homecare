import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import coldTreatmentImage from "@/assets/cold-treatment-home-article.jpg";
import coldVsFluImage from "@/assets/cold-vs-flu-article.jpg";
import fluPreventionImage from "@/assets/flu-prevention-article.jpg";
import vitaminsColdImage from "@/assets/vitamins-cold-article.jpg";

const ColdTreatmentHomePage = () => {
  const publishDate = "۱۴۰۴/۱۲/۲۱";
  const isoPublishDate = "2026-03-11";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "درمان سرماخوردگی", url: "/articles/cold-treatment-home" }
  ];

  const faqs = [
    {
      question: "آیا آنتی‌بیوتیک برای سرماخوردگی لازم است؟",
      answer: "خیر. سرماخوردگی یک بیماری ویروسی است و آنتی‌بیوتیک‌ها فقط بر باکتری‌ها اثر دارند. مصرف خودسرانه آنتی‌بیوتیک باعث مقاومت دارویی و آسیب به فلور روده می‌شود."
    },
    {
      question: "چه زمانی باید برای سرماخوردگی به پزشک مراجعه کرد؟",
      answer: "اگر علائم بیش از ۱۰ روز طول کشید، تب بالای ۳۸.۵ درجه داشتید، دچار تنگی نفس شدید یا درد شدید قفسه سینه احساس کردید، حتماً با پزشک مشورت کنید."
    },
    {
      question: "آیا عسل واقعاً برای سرفه مؤثر است؟",
      answer: "بله. مطالعات علمی نشان داده عسل طبیعی در کاهش سرفه حتی از برخی شربت‌های شیمیایی مثل دکسترومتورفان مؤثرتر عمل می‌کند. توجه: عسل برای کودکان زیر یک سال ممنوع است."
    },
    {
      question: "نقش روی (زینک) در درمان سرماخوردگی چیست؟",
      answer: "مصرف روی در ۲۴ ساعت اول شروع علائم می‌تواند طول دوره سرماخوردگی را تا ۳۰ درصد کاهش دهد. روی مانع تکثیر ویروس در سلول‌های مخاطی می‌شود."
    },
    {
      question: "آیا نوید زندگی برای سرماخوردگی هم خدمات ارائه می‌دهد؟",
      answer: "بله. تیم ما شامل ویزیت پزشک در منزل، تزریق سرم و تقویتی، آزمایش خون (CBC/CRP) برای بررسی عفونت ثانویه و نوار قلب برای رد مشکلات قلبی است."
    }
  ];

  const relatedArticles = [
    {
      title: "تفاوت سرماخوردگی و آنفلوانزا",
      description: "چگونه سرماخوردگی ساده را از آنفلوانزای خطرناک تشخیص دهیم؟",
      image: coldVsFluImage,
      link: "/articles/cold-vs-flu",
      category: "سلامت عمومی"
    },
    {
      title: "پیشگیری از آنفلوانزا",
      description: "روش‌های علمی پیشگیری از آنفلوانزا و اهمیت واکسیناسیون",
      image: fluPreventionImage,
      link: "/articles/flu-prevention",
      category: "سلامت عمومی"
    },
    {
      title: "ویتامین‌ها و سرماخوردگی",
      description: "نقش ویتامین C و سایر مکمل‌ها در پیشگیری و درمان سرماخوردگی",
      image: vitaminsColdImage,
      link: "/articles/vitamins-cold",
      category: "تغذیه"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="درمان سرماخوردگی در خانه | بهترین روش‌های علمی ۲۰۲۶ | نوید زندگی"
        description="بهترین روش‌های علمی درمان سرماخوردگی در خانه: از عسل و آب‌لیمو تا داروهای مؤثر، هشدار مصرف آنتی‌بیوتیک و خدمات پزشکی نوید زندگی در منزل"
        keywords="درمان سرماخوردگی، درمان خانگی سرماخوردگی، داروی سرماخوردگی، عسل برای سرفه، روی زینک سرماخوردگی، ویزیت پزشک در منزل، آزمایش خون در خانه، نوید زندگی"
        canonical="https://navidzendegi.ir/articles/cold-treatment-home"
        ogType="article"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="درمان سرماخوردگی در خانه: بهترین روش‌های علمی ۲۰۲۶"
        description="بهترین روش‌های علمی درمان سرماخوردگی و نقش خدمات نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={coldTreatmentImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          درمان سرماخوردگی در خانه: بهترین روش‌های علمی ۲۰۲۶
        </h1>

        <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: {publishDate}</p>

        <img
          src={coldTreatmentImage}
          alt="درمان خانگی سرماخوردگی با عسل و لیمو"
          className="w-full rounded-lg mb-8"
          loading="lazy"
        />

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          در سال ۲۰۲۶، علم پزشکی همچنان تأکید دارد که سرماخوردگی یک بیماری ویروسی است و «درمان قطعی» به معنای کشتن فوری ویروس ندارد، اما روش‌های مدیریت علائم به طرز چشمگیری پیشرفت کرده‌اند. برای آشنایی با تفاوت سرماخوردگی و آنفلوانزا، مقاله <Link to="/articles/cold-vs-flu" className="text-primary hover:underline">تفاوت سرماخوردگی و آنفلوانزا</Link> را مطالعه کنید.
        </p>

        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <p className="text-destructive text-sm font-medium">
            ⚠️ هشدار: از مصرف خودسرانه دارو، به‌خصوص آنتی‌بیوتیک، خودداری کنید. در صورت تشدید علائم حتماً با پزشک مشورت کنید.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">۱. استراتژی‌های طلایی برای سرعت بخشیدن به بهبودی</h2>

        <h3 className="text-xl font-semibold text-foreground mb-3">هیدراتاسیون هوشمند</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          آب، آب‌میوه‌های طبیعی و سوپ گرم باعث رقیق شدن مخاط و دفع راحت‌تر ویروس می‌شوند. مایعات گرم همچنین فعالیت مژک‌های مجاری تنفسی را برای بیرون راندن آلودگی‌ها بیشتر می‌کنند.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">استراحت مطلق در ۴۸ ساعت اول</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          سیستم ایمنی برای مبارزه با ویروس به انرژی زیادی نیاز دارد. خواب باکیفیت ترشح سیتوکین‌ها (پروتئین‌های دفاعی) را افزایش می‌دهد.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">شستشوی سینوس‌ها با سرم (نِتی پات)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          استفاده از محلول نمکی (نرمال سالین) برای شستشوی بینی، بار ویروسی را در ناحیه حلق و بینی به شدت کاهش داده و از سینوزیت جلوگیری می‌کند.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">عسل و آب‌لیموی تازه</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          مطالعات نشان داده عسل طبیعی در کاهش سرفه، حتی از شربت‌های شیمیایی مثل دکسترومتورفان در کودکان و بزرگسالان مؤثرتر عمل می‌کند. توجه: عسل برای کودکان زیر یک سال ممنوع است.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4">۲. داروهای ضروری و هشدارهای مهم</h2>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>مسکن‌ها و تب‌بر‌ها:</strong> استامینوفن یا ایبوپروفن برای کاهش بدن‌درد و تب مناسب هستند.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>روی (Zink):</strong> مصرف روی در ۲۴ ساعت اول شروع علائم می‌تواند طول دوره سرماخوردگی را تا ۳۰ درصد کاهش دهد. برای اطلاعات بیشتر درباره مکمل‌ها، مقاله <Link to="/articles/vitamins-cold" className="text-primary hover:underline">ویتامین‌ها و سرماخوردگی</Link> را بخوانید.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>پرهیز از آنتی‌بیوتیک خودسرانه:</strong> آنتی‌بیوتیک‌ها هیچ اثری بر ویروس سرماخوردگی ندارند و فقط باعث مقاومت دارویی و آسیب به فلور طبیعی روده می‌شوند.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">۳. چرا پایش در منزل توسط نوید زندگی اهمیت دارد؟</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          بسیاری از افراد تصور می‌کنند سرماخوردگی نیاز به پزشک ندارد، اما گاهی علائم سرماخوردگی با بیماری‌های جدی قلبی یا ریوی اشتباه گرفته می‌شود:
        </p>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>تشخیص افتراقی (قلب یا سرماخوردگی؟):</strong> گاهی دردهای قفسه سینه ناشی از سرفه با دردهای قلبی اشتباه گرفته می‌شود. متخصصین ما با <Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب و اکو در منزل</Link> اطمینان حاصل می‌کنند که فشار ناشی از بیماری به قلب شما آسیبی نزده است.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>تزریق سرم و تقویت‌کننده‌ها در منزل:</strong> اگر به دلیل ضعف شدید توان مراجعه به درمانگاه را ندارید، تیم <Link to="/services/nursing" className="text-primary hover:underline">پرستاری ما</Link> برای تزریق سرم، ویتامین‌های گروه B و تقویتی‌ها حاضر می‌شود.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>آزمایش خون سریع (CBC/CRP):</strong> برای بررسی عفونت ثانویه باکتریایی، تیم <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه ما</Link> در محل نمونه‌گیری می‌کند.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">۴. درمان‌های خانگی علمی (آپدیت ۲۰۲۶)</h2>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>بخور گرم با عصاره اکالیپتوس یا نعنا:</strong> برای باز کردن مجاری تنفسی.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>غرغره آب‌نمک گرم:</strong> برای از بین بردن باکتری‌ها و ویروس‌های مستقر در گلو.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>مصرف پروبیوتیک‌ها:</strong> تقویت سیستم ایمنی از طریق سلامت گوارش.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">نتیجه‌گیری</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          بهترین درمان سرماخوردگی، گوش دادن به صدای بدن و حمایت از سیستم ایمنی است. اگر سرماخوردگی شما بیش از ۱۰ روز طول کشید، تب بالای ۳۸.۵ درجه داشتید یا دچار تنگی نفس شدید، موضوع دیگر یک سرماخوردگی ساده نیست. مرکز نوید زندگی آماده است تا با <Link to="/services/general-doctor" className="text-primary hover:underline">ویزیت متخصص داخلی در منزل</Link>، وضعیت ریه و قلب شما را به دقت بررسی کند.
        </p>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">سرماخوردگی‌تان شدید است؟</h2>
          <p className="text-muted-foreground mb-4">
            برای ویزیت پزشک، تزریق سرم یا آزمایش خون در منزل، همین حالا تماس بگیرید.
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

export default ColdTreatmentHomePage;
