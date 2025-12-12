import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import zincImage from "@/assets/zinc-supplement-article.jpg";
import vitaminEImage from "@/assets/vitamin-e-article.jpg";
import vitaminsColdImage from "@/assets/vitamins-cold-article.jpg";
import ginsengImage from "@/assets/ginseng-article.jpg";

const ZincSupplementPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912?text=سلام، می‌خواستم درباره مشاوره مکمل زینک اطلاعات بگیرم", "_blank");
  };

  const faqs = [
    {
      question: "زینک چه فوایدی برای بدن دارد؟",
      answer: "زینک نقش‌های متعددی در بدن دارد: تقویت سیستم ایمنی، کمک به التیام زخم‌ها و سلامت پوست، بهبود عملکرد شناختی و عصبی، مشارکت در سنتز پروتئین و DNA، و نقش در حس چشایی و بویایی. کمبود زینک می‌تواند منجر به افزایش ابتلا به عفونت‌ها و تأخیر در ترمیم زخم شود."
    },
    {
      question: "بهترین منابع غذایی زینک کدامند؟",
      answer: "غنی‌ترین منابع طبیعی زینک شامل صدف و غذاهای دریایی، گوشت قرمز و مرغ است. منابع گیاهی شامل حبوبات (عدس، لوبیا)، دانه‌ها (تخمه کدو، کنجد) و محصولات لبنی می‌باشد. توجه کنید که جذب زینک از منابع گیاهی به دلیل وجود فیتات‌ها کمتر است."
    },
    {
      question: "علائم کمبود زینک چیست؟",
      answer: "علائم کمبود زینک عبارتند از: اختلال عملکرد سیستم ایمنی و افزایش عفونت‌ها، اختلالات پوستی و درماتیت، ریزش مو و شکنندگی ناخن، اختلال در حس چشایی و بویایی، تأخیر در بهبود زخم‌ها، و در کودکان تأخیر در رشد و نمو."
    },
    {
      question: "چه مقدار زینک در روز نیاز داریم؟",
      answer: "دوز توصیه شده روزانه (RDA) زینک برای مردان بالغ ۱۱ میلی‌گرم، زنان بالغ ۸ میلی‌گرم، و زنان باردار یا شیرده ۱۱ تا ۱۲ میلی‌گرم است. مصرف بیش از ۴۰ میلی‌گرم در روز می‌تواند عوارض جانبی ایجاد کند."
    },
    {
      question: "آیا مصرف زیاد زینک عوارض دارد؟",
      answer: "بله، مصرف بیش از حد زینک (بالای ۴۰ میلی‌گرم روزانه) می‌تواند عوارض حاد مانند تهوع و استفراغ ایجاد کند. مصرف طولانی مدت دوزهای بالا منجر به کمبود مس می‌شود، زیرا زینک در جذب مس اختلال ایجاد می‌کند. همچنین تداخل با برخی آنتی‌بیوتیک‌ها دارد."
    }
  ];

  const relatedArticles = [
    {
      title: "ویتامین E: آنتی‌اکسیدان قوی برای سلامت پوست و قلب",
      description: "فواید ویتامین E برای سلامت پوست، قلب و سیستم ایمنی",
      image: vitaminEImage,
      link: "/articles/vitamin-e",
      category: "تغذیه"
    },
    {
      title: "ویتامین‌ها و سرماخوردگی: آیا ویتامین C کمک می‌کند؟",
      description: "بررسی علمی نقش ویتامین‌ها در پیشگیری و درمان سرماخوردگی",
      image: vitaminsColdImage,
      link: "/articles/vitamins-cold",
      category: "تغذیه"
    },
    {
      title: "جینسینگ: فواید، عوارض و نحوه مصرف",
      description: "راهنمای کامل گیاه جینسینگ و تأثیرات آن بر سلامت",
      image: ginsengImage,
      link: "/articles/ginseng",
      category: "تغذیه"
    }
  ];

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "زینک (روی)", url: "/articles/zinc-supplement" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="زینک (روی): عنصر ضروری، نقش‌ها و مکمل‌یاری | نوید زندگی"
        description="راهنمای کامل زینک شامل نقش در سیستم ایمنی، التیام زخم، سلامت پوست و مغز، منابع غذایی، علائم کمبود و مکمل‌یاری"
        keywords="زینک, روی, مکمل زینک, کمبود زینک, سیستم ایمنی, التیام زخم, سلامت پوست, EGCG"
        canonical="https://navidzendegi.com/articles/zinc-supplement"
        ogType="article"
        publishedTime="2024-12-12"
        modifiedTime="2024-12-12"
      />
      <ArticleSchema
        title="زینک (روی): عنصر ضروری، نقش‌ها و مکمل‌یاری"
        description="راهنمای کامل زینک شامل نقش در سیستم ایمنی، التیام زخم، سلامت پوست و مغز، منابع غذایی، علائم کمبود و مکمل‌یاری"
        publishedTime="2024-12-12"
        modifiedTime="2024-12-12"
        image={zincImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              زینک (روی - Zinc): عنصر ضروری، نقش‌ها و مکمل‌یاری
            </h1>
            <img
              src={zincImage}
              alt="زینک و منابع غذایی غنی از روی"
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
          </header>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>زینک (Zn)</strong> یک عنصر کمیاب (Trace Element) و حیاتی است که برای سلامتی انسان ضروری بوده و پس از آهن، فراوان‌ترین ماده معدنی در بدن محسوب می‌شود. زینک در بیش از ۳۰۰ آنزیم شرکت دارد و در ساختار، عملکرد و حفظ پایداری بیش از ۲۰۰۰ فاکتور رونویسی پروتئینی نقش ایفا می‌کند.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">۱. نقش‌های فیزیولوژیک کلیدی زینک</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              زینک در بدن عملکردهای گسترده و حیاتی دارد:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">تقویت سیستم ایمنی</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>عملکرد سلول‌های ایمنی:</strong> زینک برای رشد، عملکرد و تمایز سلول‌های ایمنی (مانند لنفوسیت‌های T و سلول‌های کشنده طبیعی یا NK) حیاتی است.</li>
              <li><strong>کاهش طول مدت سرماخوردگی:</strong> مصرف مکمل‌های زینک (به شکل آب‌نبات‌های مکیدنی یا شربت) در ساعات اولیه سرماخوردگی می‌تواند با مهار اتصال ویروس راینوویروس به سلول‌های مخاطی، مدت و شدت علائم سرماخوردگی را کاهش دهد.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">التیام زخم و سلامت پوست</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              زینک نقش حیاتی در سنتز کلاژن، تکثیر سلولی و ترمیم آسیب‌های بافتی و زخم‌ها دارد. به همین دلیل، در درمان سوختگی‌ها، زخم‌های مزمن و برخی مشکلات پوستی (مانند <a href="/articles/pressure-injury" className="text-primary hover:underline">آکنه و زخم بستر</a>) استفاده می‌شود.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">عملکرد شناختی و عصبی</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>انتقال عصبی:</strong> زینک در تنظیم ارتباط بین نورون‌ها و عملکرد انتقال‌دهنده‌های عصبی نقش دارد.</li>
              <li><strong>بینایی:</strong> زینک برای عملکرد شبکیه چشم ضروری است و در انتقال ویتامین A به شبکیه نقش دارد. کمبود آن می‌تواند با دژنراسیون ماکولا مرتبط باشد.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">سنتز پروتئین و DNA</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>رشد و تقسیم سلولی:</strong> زینک در فرآیندهای سنتز پروتئین، تقسیم سلولی و رشد DNA و RNA مشارکت دارد. این نقش به‌ویژه در دوران <a href="/articles/pregnancy-supplements" className="text-primary hover:underline">بارداری</a>، شیرخوارگی و نوجوانی برای رشد مناسب، حیاتی است.</li>
              <li><strong>فعالیت آنزیمی:</strong> زینک جزء ساختاری بسیاری از متالوآنزیم‌ها است.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">۲. منابع غذایی و کمبود زینک</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">منابع غذایی</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>گوشت قرمز و مرغ:</strong> منابع بسیار غنی</li>
              <li><strong>صدف و غذاهای دریایی:</strong> غنی‌ترین منبع طبیعی</li>
              <li><strong>حبوبات (مانند عدس و لوبیا):</strong> حاوی زینک، اما جذب آن به دلیل فیتات‌ها دشوار است</li>
              <li><strong>دانه‌ها (مانند تخمه کدو و کنجد):</strong> منابع خوب گیاهی</li>
              <li><strong>محصولات لبنی:</strong> حاوی زینک</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">علائم کمبود زینک</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              کمبود زینک در جهان نسبتاً شایع است، به‌ویژه در مناطقی که رژیم غذایی بر پایه غلات (که حاوی فیتات هستند و جذب زینک را کاهش می‌دهند) استوار است. علائم کمبود عبارتند از:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>اختلال عملکرد سیستم ایمنی (افزایش ابتلا به عفونت‌ها)</li>
              <li>اختلالات پوستی (درماتیت، ضایعات پوستی مقاوم)</li>
              <li><a href="/articles/hair-loss" className="text-primary hover:underline">ریزش مو</a> و شکنندگی ناخن‌ها</li>
              <li>اختلال در حس چشایی و بویایی</li>
              <li>تأخیر در بهبود زخم‌ها</li>
              <li>تأخیر در رشد و نمو (در کودکان)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">۳. مکمل‌یاری و ملاحظات ایمنی</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">دوزهای توصیه شده (RDA)</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>مردان بالغ:</strong> ۱۱ میلی‌گرم در روز</li>
              <li><strong>زنان بالغ:</strong> ۸ میلی‌گرم در روز</li>
              <li><strong>زنان باردار/شیرده:</strong> ۱۱ تا ۱۲ میلی‌گرم در روز</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">ملاحظات مصرف مکمل</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>انواع مکمل:</strong> زینک در اشکال مختلف مانند زینک گلوکونات، زینک سولفات و زینک استات موجود است. جذب زینک گلوکونات معمولاً خوب است.</li>
              <li><strong>تداخل دارویی:</strong> مکمل‌های زینک ممکن است جذب برخی آنتی‌بیوتیک‌ها (مانند کینولون‌ها و تتراسایکلین‌ها) و پنی‌سیل‌آمین را کاهش دهند.</li>
              <li><strong>عوارض جانبی:</strong> مصرف بیش از حد زینک (بیش از ۴۰ میلی‌گرم در روز) می‌تواند باعث عوارض جانبی حاد (تهوع، استفراغ) و مزمن شود. مصرف طولانی مدت دوزهای بالای زینک می‌تواند منجر به کمبود مس شود.</li>
            </ul>
          </section>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">هشدار مهم</h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  مصرف مکمل زینک باید تحت نظر پزشک و در صورت وجود شواهد کمبود یا نیاز درمانی (مانند کمک به بهبود زخم‌ها یا درمان آکنه) انجام شود. خوددرمانی با مکمل‌های زینک می‌تواند عوارض جانبی ایجاد کند.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">منابع علمی</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
              <li>Zinc: The Essential Micronutrient. The American Journal of Clinical Nutrition.</li>
              <li>Zinc in Human Health: Its Essential Role and Current Knowledge. Nutrients Journal/PMC.</li>
              <li>Zinc for the common cold. Cochrane Database of Systematic Reviews.</li>
              <li>Zinc Fact Sheet for Health Professionals. NIH (National Institutes of Health)/Office of Dietary Supplements.</li>
            </ul>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">مشاوره تغذیه و مکمل‌یاری در منزل</h2>
            <p className="text-muted-foreground mb-4">
              برای ارزیابی نیاز بدن به زینک، بررسی علائم کمبود و دریافت مشاوره تخصصی درباره مکمل‌یاری، می‌توانید از خدمات ویزیت پزشک در منزل نوید زندگی استفاده کنید. پزشکان ما با بررسی وضعیت سلامت شما، بهترین راهکار را پیشنهاد می‌دهند.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleCall} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>تماس: <a href="tel:09386117912" className="hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a></span>
              </Button>
              <Button variant="outline" onClick={handleWhatsApp} className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>مشاوره واتساپ</span>
              </Button>
            </div>
          </section>
        </article>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default ZincSupplementPage;
