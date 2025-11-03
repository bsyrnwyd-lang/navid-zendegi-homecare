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
import fluPreventionImage from "@/assets/flu-prevention-article.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";
import influenzaImage from "@/assets/infectious-disease.jpg";
import adultFeverImage from "@/assets/adult-fever-article.jpg";

const InfluenzaPreventionPage = () => {
  const phoneNumber = "09386117912";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "پیشگیری از آنفولانزا", url: "/articles/influenza-prevention" }
  ];

  const faqs = [
    {
      question: "بهترین زمان برای تزریق واکسن آنفولانزا چه زمانی است؟",
      answer: "بهترین زمان برای دریافت واکسن آنفولانزا، قبل از شروع فصل شیوع یعنی در اوایل پاییز است. با این حال، تزریق واکسن در طول فصل شیوع نیز سودمند است و توصیه می‌شود."
    },
    {
      question: "چه کسانی باید حتماً واکسن آنفولانزا دریافت کنند؟",
      answer: "واکسیناسیون سالانه برای همه افراد بالای شش ماه توصیه می‌شود، اما برای گروه‌های پرخطر مانند سالمندان، کودکان خردسال، زنان باردار، افراد دارای بیماری‌های مزمن (آسم، دیابت، بیماری‌های قلبی) و کادر درمانی حیاتی است."
    },
    {
      question: "آیا واکسن آنفولانزا می‌تواند باعث ابتلا به آنفولانزا شود؟",
      answer: "خیر، واکسن آنفولانزا شامل ویروس‌های غیرفعال یا کشته‌شده است و نمی‌تواند باعث ابتلا به آنفولانزا شود. عوارض جانبی خفیفی مانند درد محل تزریق یا تب خفیف ممکن است رخ دهد که طبیعی است."
    },
    {
      question: "چگونه می‌توانم از انتقال آنفولانزا به دیگران جلوگیری کنم؟",
      answer: "با رعایت بهداشت دست‌ها (شستشو با آب و صابون یا استفاده از ضدعفونی‌کننده الکلی)، استفاده از دستمال یک‌بار مصرف هنگام سرفه یا عطسه، پرهیز از لمس چشم‌ها و بینی با دست‌های شسته‌نشده، و حفظ فاصله از افراد بیمار می‌توانید از انتقال جلوگیری کنید."
    },
    {
      question: "آیا تقویت سیستم ایمنی می‌تواند به پیشگیری از آنفولانزا کمک کند؟",
      answer: "بله، یک سیستم ایمنی قوی به مبارزه مؤثر با عفونت‌های ویروسی کمک می‌کند. تغذیه متعادل، مصرف کافی ویتامین D و C، خواب کافی (7-9 ساعت برای بزرگسالان) و مدیریت استرس می‌تواند عملکرد سیستم ایمنی را بهبود بخشد."
    },
    {
      question: "آیا می‌توانم واکسن آنفولانزا را در منزل تزریق کنم؟",
      answer: "بله، نوید زندگی خدمات تزریق واکسن آنفولانزا در منزل را توسط پرستاران مجرب ارائه می‌دهد. این خدمت به‌ویژه برای گروه‌های پرخطر که نمی‌توانند به مراکز شلوغ مراجعه کنند، بسیار مناسب است."
    }
  ];

  const relatedArticles = [
    {
      title: "تزریق واکسن آنفولانزا در منزل",
      description: "راهنمای کامل واکسیناسیون آنفولانزا، زمان‌بندی، گروه‌های پرخطر و تزریق در منزل",
      image: vaccinationImage,
      link: "/articles/influenza-vaccine",
      category: "واکسیناسیون"
    },
    {
      title: "درمان آنفولانزا در منزل",
      description: "راهکارهای درمانی و مراقبتی برای بهبود سریع آنفولانزا در خانه",
      image: influenzaImage,
      link: "/articles/influenza-treatment",
      category: "بیماری‌های عفونی"
    },
    {
      title: "تب در بزرگسالان",
      description: "راهنمای علمی تشخیص، دلایل تب و زمان مراجعه به پزشک",
      image: adultFeverImage,
      link: "/articles/adult-fever",
      category: "سلامت عمومی"
    }
  ];

  return (
    <div className="bg-background">
      <Header />
      <FloatingContact />
      <SEOHead
        title="پیشگیری از آنفولانزا: واکسیناسیون و بهداشت - نوید زندگی"
        description="راهکارهای علمی پیشگیری از آنفولانزا شامل واکسیناسیون، بهداشت فردی، تقویت ایمنی و تزریق واکسن در منزل"
        keywords="پیشگیری از آنفولانزا، واکسن آنفولانزا، تزریق واکسن در منزل، بهداشت دست، سیستم ایمنی، تقویت ایمنی، آنفولانزا، فصل شیوع، گروه‌های پرخطر"
        canonical="https://navidzendegi.com/articles/influenza-prevention"
        ogType="article"
        publishedTime="2025-02-01T09:00:00Z"
        modifiedTime="2025-02-01T09:00:00Z"
        author="نوید زندگی"
      />
      <ArticleSchema
        title="راهکارهای علمی پیشگیری از آنفولانزا: واکسیناسیون، بهداشت و تقویت ایمنی"
        description="راهنمای جامع پیشگیری از آنفولانزا با واکسیناسیون و بهداشت"
        publishedTime="2025-02-01T09:00:00Z"
        modifiedTime="2025-02-01T09:00:00Z"
        image={fluPreventionImage}
        author="نوید زندگی"
      />

      <main className="pt-20 md:pt-24">
        <article className="container mx-auto px-4 py-8 max-w-4xl" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            راهکارهای علمی پیشگیری از آنفولانزا: واکسیناسیون، بهداشت و تقویت ایمنی
          </h1>
          
          <LazyImage
            src={fluPreventionImage}
            alt="تصویر توضیحی پیشگیری از آنفولانزا با واکسیناسیون و بهداشت"
            className="w-full h-[400px] object-cover rounded-lg my-6"
          />

          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong>آنفولانزا (Influenza)</strong> یک بیماری حاد تنفسی است که توسط ویروس‌های RNA از خانواده Orthomyxoviridae ایجاد می‌شود. این بیماری، برخلاف سرماخوردگی معمولی، می‌تواند منجر به عوارض جدی مانند <strong>ذات‌الریه، بستری شدن در بیمارستان و حتی مرگ</strong> شود، به‌ویژه در گروه‌های پرخطر. <strong>پیشگیری از آنفولانزا</strong> بر اساس شواهد علمی، بر دو ستون اصلی متکی است: ایمن‌سازی فعال (واکسیناسیون) و بهداشت فردی و محیطی.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            واکسیناسیون: مؤثرترین راهکار علمی پیشگیری
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>واکسن آنفولانزا</strong> به عنوان مؤثرترین ابزار در کاهش شیوع، شدت بیماری و کاهش نرخ مرگ و میر شناخته می‌شود.
          </p>
          
          <div className="space-y-4 mr-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">مکانیسم</h3>
              <p className="text-muted-foreground leading-relaxed">
                واکسن، سیستم ایمنی بدن را تحریک می‌کند تا آنتی‌بادی‌هایی علیه سویه‌های ویروس آنفولانزای شایع در آن سال (بر اساس پیش‌بینی سازمان بهداشت جهانی) تولید کند.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">زمان‌بندی</h3>
              <p className="text-muted-foreground leading-relaxed">
                بهترین زمان برای دریافت واکسن، قبل از شروع فصل شیوع (معمولاً در اوایل پاییز) است، هرچند تزریق آن در طول فصل نیز توصیه می‌شود.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">گروه‌های هدف</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>واکسیناسیون سالانه</strong> برای همه افراد بالای شش ماه توصیه می‌شود، با تأکید ویژه بر سالمندان، کودکان خردسال، زنان باردار، افراد دارای بیماری‌های مزمن (مانند آسم، بیماری‌های قلبی) و کادر درمانی.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
            نوید زندگی با ارائه خدمات <Link to="/articles/influenza-vaccine" className="text-primary hover:underline font-semibold">تزریق واکسن آنفولانزا در منزل</Link>، این راهکار حیاتی را برای گروه‌های پرخطر بدون نیاز به مراجعه به مراکز شلوغ، آسان می‌سازد.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            اقدامات بهداشت فردی و محیطی برای کاهش انتقال
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            علاوه بر واکسیناسیون، رعایت پروتکل‌های بهداشتی، انتقال ویروس را به شدت کاهش می‌دهد:
          </p>

          <div className="space-y-4 mr-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">بهداشت دست‌ها</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>شستشوی منظم دست‌ها</strong> با آب و صابون (به مدت حداقل 20 ثانیه) یا استفاده از ضدعفونی‌کننده‌های حاوی الکل، مؤثرترین راه برای حذف ویروس‌ها از سطح پوست است.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">آداب سرفه و عطسه</h3>
              <p className="text-muted-foreground leading-relaxed">
                استفاده از دستمال یک‌بار مصرف هنگام سرفه یا عطسه، یا استفاده از قسمت داخلی آرنج (Draping)، برای جلوگیری از انتشار قطرات تنفسی حاوی ویروس در محیط.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">پرهیز از تماس</h3>
              <p className="text-muted-foreground leading-relaxed">
                خودداری از لمس چشم‌ها، بینی و دهان با دست‌های شسته‌نشده و پرهیز از تماس نزدیک با افراد بیمار.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">تهویه مناسب</h3>
              <p className="text-muted-foreground leading-relaxed">
                حفظ تهویه مناسب در محیط‌های بسته (مانند خانه و محل کار) می‌تواند تراکم ویروس در هوا را کاهش دهد.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            نقش تقویت سیستم ایمنی و سبک زندگی
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            یک سیستم ایمنی قوی، کلید مبارزه مؤثر با هرگونه عفونت ویروسی است.
          </p>

          <div className="space-y-4 mr-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">تغذیه و مکمل‌ها</h3>
              <p className="text-muted-foreground leading-relaxed">
                مصرف کافی <strong>ویتامین D و ویتامین C</strong> (بر اساس مشورت با پزشک) و یک رژیم غذایی متعادل، به عملکرد بهینه سیستم ایمنی کمک می‌کند. برای اطلاعات بیشتر، مقاله <Link to="/articles/vitamins-health" className="text-primary hover:underline">ویتامین‌ها و سلامتی</Link> را مطالعه کنید.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">خواب کافی</h3>
              <p className="text-muted-foreground leading-relaxed">
                کمبود خواب عملکرد سلول‌های ایمنی را مختل می‌کند. خواب <strong>7-9 ساعته</strong> برای بزرگسالان توصیه می‌شود.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">مدیریت استرس</h3>
              <p className="text-muted-foreground leading-relaxed">
                استرس مزمن تولید کورتیزول را افزایش داده و پاسخ ایمنی بدن را تضعیف می‌کند.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Phone className="w-6 h-6 text-primary" />
            برای محافظت کامل در برابر آنفولانزا، اقدام کنید
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            جهت هماهنگی برای <strong>تزریق واکسن آنفولانزا در منزل</strong> توسط پرستاران مجرب، همین حالا با نوید زندگی تماس بگیرید.
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
            <p>[1] World Health Organization (WHO). (2024). Influenza (Seasonal). WHO Fact Sheets.</p>
            <p>[2] Fiore, A. E., et al. (2014). Prevention and Control of Seasonal Influenza with Vaccines. <em>Morbidity and Mortality Weekly Report (MMWR)</em>, 63(RR-6), 1-43.</p>
            <p>[3] Centers for Disease Control and Prevention (CDC). (2024). Who Should Get Flu Shot? CDC Influenza Guidelines.</p>
            <p>[4] Allegranzi, B., & Pittet, D. (2009). Role of hand hygiene in healthcare. <em>The Lancet</em>, 373(9677), 1801-1804.</p>
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

export default InfluenzaPreventionPage;