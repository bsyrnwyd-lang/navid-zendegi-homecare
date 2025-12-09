import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import LazyImage from "@/components/LazyImage";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Button } from "@/components/ui/button";
import fluMortalityImage from "@/assets/flu-mortality-article.jpg";
import fluPreventionImage from "@/assets/flu-prevention-article.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";
import elderlyCareImage from "@/assets/elderly-care-home.jpg";

const InfluenzaMortalityPage = () => {
  const phoneNumber = "09386117912";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "نرخ مرگ و میر آنفولانزا", url: "/articles/influenza-mortality" }
  ];

  const faqs = [
    {
      question: "نرخ مرگ و میر آنفولانزا در سطح جهانی چقدر است؟",
      answer: "بر اساس برآورد سازمان جهانی بهداشت (WHO)، آنفولانزای فصلی سالانه منجر به ۲۹۰,۰۰۰ تا ۶۵۰,۰۰۰ مورد مرگ و میر مرتبط با عوارض تنفسی در سراسر جهان می‌شود. این اعداد شامل مرگ و میر ناشی از عوارضی مانند ذات‌الریه ثانویه نیز می‌شود."
    },
    {
      question: "چه کسانی بیشترین خطر مرگ ناشی از آنفولانزا را دارند؟",
      answer: "سالمندان بالای ۶۵ سال بیشترین سهم از مرگ و میرهای آنفولانزا را دارند (۷۰-۸۵ درصد). همچنین کودکان زیر ۵ سال، زنان باردار و افراد مبتلا به بیماری‌های مزمن (قلبی، ریوی، دیابت) در خطر بالایی قرار دارند."
    },
    {
      question: "آیا واکسیناسیون می‌تواند خطر مرگ ناشی از آنفولانزا را کاهش دهد؟",
      answer: "بله، واکسیناسیون سالانه آنفولانزا به طور چشمگیری خطر بستری شدن و مرگ و میر را کاهش می‌دهد. حتی اگر واکسن ۱۰۰ درصد از ابتلا جلوگیری نکند، شدت بیماری و احتمال عوارض کشنده را به طور قابل توجهی کم می‌کند."
    },
    {
      question: "تفاوت نرخ مرگ و میر در پاندمی‌ها با آنفولانزای فصلی چیست؟",
      answer: "در پاندمی‌ها مانند آنفولانزای اسپانیایی (۱۹۱۸) یا H1N1 (۲۰۰۹)، نرخ مرگ و میر به دلیل نبود ایمنی جمعیتی در برابر سویه جدید، بسیار بالاتر است. در پاندمی H1N1، برخلاف آنفولانزای فصلی، بخش قابل توجهی از مرگ و میرها در افراد جوان رخ داد."
    },
    {
      question: "چگونه می‌توانم از خود و خانواده‌ام در برابر آنفولانزا محافظت کنم؟",
      answer: "بهترین راه‌ها شامل واکسیناسیون سالانه (به‌ویژه برای گروه‌های پرخطر)، رعایت بهداشت دست‌ها، پوشاندن دهان و بینی هنگام سرفه و عطسه، پرهیز از تماس با افراد بیمار و مراجعه سریع به پزشک در صورت بروز علائم شدید است."
    }
  ];

  const relatedArticles = [
    {
      title: "پیشگیری از آنفولانزا",
      description: "راهکارهای علمی پیشگیری از آنفولانزا: واکسیناسیون، بهداشت و تقویت ایمنی",
      image: fluPreventionImage,
      link: "/articles/influenza-prevention",
      category: "پیشگیری"
    },
    {
      title: "تزریق واکسن آنفولانزا در منزل",
      description: "راهنمای کامل واکسیناسیون آنفولانزا و تزریق در منزل برای گروه‌های پرخطر",
      image: vaccinationImage,
      link: "/articles/influenza-vaccine",
      category: "واکسیناسیون"
    },
    {
      title: "مراقبت از سالمندان در منزل",
      description: "خدمات تخصصی مراقبت از سالمندان و کاهش خطر عوارض بیماری‌های عفونی",
      image: elderlyCareImage,
      link: "/articles/elderly-care",
      category: "مراقبت سالمندان"
    }
  ];

  return (
    <div className="bg-background">
      <Header />
      <FloatingContact />
      <SEOHead
        title="نرخ مرگ و میر آنفولانزا: آمار جهانی و گروه‌های پرخطر - نوید زندگی"
        description="بررسی آمار مرگ و میر آنفولانزا در سطح جهانی، گروه‌های سنی پرخطر، تأثیر واکسیناسیون و مقایسه با پاندمی‌ها"
        keywords="نرخ مرگ و میر آنفولانزا، آمار آنفولانزا، مرگ و میر فصلی، سالمندان پرخطر، واکسیناسیون آنفولانزا، پاندمی آنفولانزا، H1N1، عوارض آنفولانزا"
        canonical="https://navidzendegi.com/articles/influenza-mortality"
        ogType="article"
        publishedTime="2024-12-09T09:00:00Z"
        modifiedTime="2024-12-09T09:00:00Z"
        author="نوید زندگی"
      />
      <ArticleSchema
        title="نرخ مرگ و میر ناشی از آنفولانزا: آمار جهانی، گروه‌های پرخطر و تأثیر واکسیناسیون"
        description="بررسی جامع آمار مرگ و میر آنفولانزا و نقش واکسیناسیون در کاهش آن"
        publishedTime="2024-12-09T09:00:00Z"
        modifiedTime="2024-12-09T09:00:00Z"
        image={fluMortalityImage}
        author="نوید زندگی"
      />

      <main className="pt-20 md:pt-24">
        <article className="container mx-auto px-4 py-8 max-w-4xl" dir="rtl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              نرخ مرگ و میر ناشی از آنفولانزا (Influenza Mortality Rate)
            </h1>

            <LazyImage
              src={fluMortalityImage}
              alt="نمودار آماری نرخ مرگ و میر آنفولانزا در جهان"
              className="w-full h-[400px] object-cover rounded-lg my-6"
            />

            <p className="text-lg text-muted-foreground leading-relaxed">
              نرخ مرگ و میر ناشی از آنفولانزا، به دلیل تفاوت در نحوه گزارش‌دهی و شدت سویه‌های ویروسی در فصول مختلف، یک عدد ثابت نیست. این نرخ به طور قابل توجهی تحت تأثیر عواملی چون <strong>گروه سنی، سلامت عمومی جمعیت، و دسترسی به مراقبت‌های پزشکی</strong> قرار دارد.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              تخمین‌های جهانی و فصلی
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              به دلیل ماهیت متغیر آنفولانزا، آمار رسمی مرگ و میر اغلب شامل تخمین‌هایی است که مرگ و میر ناشی از عوارض مرتبط با آنفولانزا (مانند ذات‌الریه باکتریایی ثانویه، تشدید بیماری‌های قلبی-عروقی و تنفسی) را نیز در بر می‌گیرد.
            </p>

            <div className="space-y-4 mr-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">تخمین جهانی</h3>
                <p className="text-muted-foreground leading-relaxed">
                  سازمان جهانی بهداشت (WHO) و مراکز کنترل و پیشگیری از بیماری (CDC)، تخمین می‌زنند که آنفولانزای فصلی سالانه باعث <strong>۲۹۰,۰۰۰ تا ۶۵۰,۰۰۰</strong> مورد مرگ و میر مرتبط با عوارض تنفسی در سراسر جهان می‌شود.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">میزان مرگ و میر موردی (Case Fatality Rate - CFR)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  در اپیدمی‌های فصلی معمول، CFR آنفولانزا معمولاً بسیار پایین است (کمتر از <strong>۰.۱ درصد</strong>). این بدان معناست که از هر ۱۰۰۰ نفری که به طور رسمی تشخیص آنفولانزا می‌گیرند، کمتر از یک نفر فوت می‌کند.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              نرخ مرگ و میر بر اساس گروه سنی و ریسک
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              نرخ مرگ و میر به طور نامتناسبی در گروه‌های آسیب‌پذیر متمرکز است:
            </p>

            <div className="space-y-4 mr-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">سالمندان (Age ≥ 65)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  بیشترین سهم از مرگ و میرهای مرتبط با آنفولانزا مربوط به افراد مسن است. در بسیاری از فصول، <strong>۷۰ تا ۸۵ درصد</strong> مرگ و میرهای تخمینی آنفولانزا در ایالات متحده در این گروه سنی رخ می‌دهد. این موضوع اهمیت <Link to="/articles/elderly-care" className="text-primary hover:underline">مراقبت از سالمندان</Link> را دوچندان می‌کند.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">کودکان زیر ۵ سال</h3>
                <p className="text-muted-foreground leading-relaxed">
                  این گروه نیز آسیب‌پذیر هستند، به خصوص کودکان زیر دو سال. برای اطلاعات بیشتر، مقاله <Link to="/articles/children-fever" className="text-primary hover:underline">تب در کودکان</Link> را مطالعه کنید.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">افراد دارای بیماری‌های مزمن</h3>
                <p className="text-muted-foreground leading-relaxed">
                  افراد مبتلا به بیماری‌های قلبی، ریوی (مانند COPD یا <Link to="/articles/asthma" className="text-primary hover:underline">آسم</Link>)، <Link to="/articles/diabetes" className="text-primary hover:underline">دیابت</Link> و نقص سیستم ایمنی، ریسک بسیار بالاتری برای عوارض شدید و مرگ دارند.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              مقایسه با پاندمی‌ها (Pandemics)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              نرخ مرگ و میر آنفولانزا در دوران <strong>پاندمی‌ها</strong> (مانند آنفولانزای اسپانیایی در سال ۱۹۱۸ یا آنفولانزای خوکی H1N1 در سال ۲۰۰۹) به طور قابل توجهی بالاتر است، زیرا جمعیت فاقد ایمنی قبلی در برابر سویه جدید است.
            </p>

            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">آنفولانزای H1N1 (سال ۲۰۰۹)</h3>
              <p className="text-muted-foreground leading-relaxed">
                CFR آن در کل جمعیت نسبتاً پایین بود، اما برخلاف آنفولانزای فصلی، بخش قابل توجهی از مرگ و میرها در <strong>افراد جوان و میانسال</strong> اتفاق افتاد.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              تأثیر واکسیناسیون
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>واکسیناسیون سالانه</strong>، اگرچه ممکن است ۱۰۰ درصد از ابتلا جلوگیری نکند، اما به طور چشمگیری <strong>شدت بیماری، خطر بستری شدن و به خصوص ریسک مرگ و میر</strong> را در افراد واکسینه‌شده کاهش می‌دهد. برای اطلاعات بیشتر درباره پیشگیری، مقاله <Link to="/articles/influenza-prevention" className="text-primary hover:underline">راهکارهای پیشگیری از آنفولانزا</Link> را مطالعه کنید.
            </p>
          </section>

          <section className="mb-8 p-4 bg-destructive/10 rounded-lg border border-destructive/30">
            <p className="text-foreground font-semibold">
              ⚠️ هشدار: در صورت بروز علائم شدید آنفولانزا مانند تب بالا، تنگی نفس یا درد شدید قفسه سینه، فوراً به پزشک مراجعه کنید یا خدمات ویزیت پزشک در منزل را درخواست دهید. خوددرمانی و تأخیر در درمان می‌تواند عوارض خطرناکی داشته باشد.
            </p>
          </section>

          <section className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Phone className="w-6 h-6 text-primary" />
              برای واکسیناسیون و مراقبت در منزل
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              جهت هماهنگی برای <strong>تزریق واکسن آنفولانزا در منزل</strong> یا ویزیت پزشک در منزل، همین حالا با نوید زندگی تماس بگیرید.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
            >
              <Phone className="ml-2 h-5 w-5" />
              تماس با {phoneNumber}
            </Button>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">منابع (References)</h3>
            <div className="text-sm text-muted-foreground space-y-2 mr-4">
              <p>[1] Influenza Mortality in the United States. <em>American Medical Association (JAMA)</em>.</p>
              <p>[2] Global Mortality Estimates from Seasonal Influenza. <em>World Health Organization (WHO)</em>.</p>
              <p>[3] Seasonal Flu Burden and Mortality. <em>Centers for Disease Control and Prevention (CDC)</em>.</p>
              <p>[4] The 2009 H1N1 Influenza Pandemic: A Review of Epidemiology and Clinical Features. <em>The New England Journal of Medicine (NEJM)</em>.</p>
            </div>
          </section>

          <FAQSection faqs={faqs} />

          <div className="mt-12">
            <PricingInfo />
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default InfluenzaMortalityPage;
