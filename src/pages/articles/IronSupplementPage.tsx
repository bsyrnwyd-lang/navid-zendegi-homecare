import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import ironImage from "@/assets/iron-supplement-article.jpg";
import zincImage from "@/assets/zinc-supplement-article.jpg";
import pregnancySupplementsImage from "@/assets/pregnancy-supplements.jpg";
import pregnancyNutritionImage from "@/assets/pregnancy-nutrition.jpg";

const IronSupplementPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "آهن و کم‌خونی", url: "/articles/iron-supplement" }
  ];

  const faqs = [
    {
      question: "علائم کمبود آهن چیست؟",
      answer: "خستگی و ضعف مفرط، تنگی نفس، تپش قلب، پوست رنگ‌پریده، شکنندگی ناخن‌ها، التهاب زبان و گاهی میل غیرعادی به خوردن مواد غیرخوراکی مانند یخ (پیکا) از علائم شایع کمبود آهن هستند."
    },
    {
      question: "چرا زنان باردار به آهن بیشتری نیاز دارند؟",
      answer: "در دوران بارداری حجم خون مادر افزایش می‌یابد، جنین برای رشد و ذخیره‌سازی آهن نیاز دارد و جفت نیز به آهن وابسته است. به همین دلیل نیاز به آهن تقریباً دو برابر می‌شود (۲۷ میلی‌گرم در روز)."
    },
    {
      question: "تفاوت آهن هِم و غیر هِم چیست؟",
      answer: "آهن هِم در منابع حیوانی (گوشت قرمز، مرغ، ماهی) یافت می‌شود و جذب بالایی دارد. آهن غیر هِم در منابع گیاهی (حبوبات، سبزیجات) موجود است و جذب کمتری دارد اما با مصرف همزمان ویتامین C بهبود می‌یابد."
    },
    {
      question: "چه عواملی جذب آهن را کاهش می‌دهند؟",
      answer: "چای، قهوه، کلسیم و مکمل‌های حاوی کلسیم جذب آهن را کاهش می‌دهند. بهتر است این مواد را جدا از وعده‌های حاوی آهن مصرف کنید."
    },
    {
      question: "آیا مصرف بیش از حد آهن خطرناک است؟",
      answer: "بله، مصرف بیش از حد آهن می‌تواند مسمومیت ایجاد کند و به کبد و سایر اندام‌ها آسیب برساند. مکمل‌های آهن فقط باید تحت نظر پزشک مصرف شوند."
    }
  ];

  const relatedArticles = [
    {
      title: "زینک (روی): عنصر ضروری برای سلامتی",
      description: "نقش زینک در تقویت سیستم ایمنی، التیام زخم و عملکرد شناختی",
      image: zincImage,
      link: "/articles/zinc-supplement",
      category: "تغذیه"
    },
    {
      title: "مکمل‌های دوران بارداری",
      description: "راهنمای کامل ویتامین‌ها و مواد معدنی ضروری در بارداری",
      image: pregnancySupplementsImage,
      link: "/articles/pregnancy-supplements",
      category: "بارداری"
    },
    {
      title: "تغذیه در دوران بارداری",
      description: "اصول تغذیه سالم برای مادران باردار و رشد جنین",
      image: pregnancyNutritionImage,
      link: "/articles/pregnancy-nutrition",
      category: "بارداری"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آهن و کم‌خونی فقر آهن | نقش، علائم کمبود و مصرف توصیه‌شده | نوید زندگی"
        description="آهن یک ماده معدنی حیاتی برای حمل اکسیژن است. بررسی علائم کمبود آهن، کم‌خونی فقر آهن، میزان مصرف توصیه‌شده برای بزرگسالان و زنان باردار."
        keywords="آهن, کم‌خونی, فقر آهن, هموگلوبین, مکمل آهن, بارداری, تغذیه, گلبول قرمز"
        canonical="https://navidzendegi.com/articles/iron-supplement"
        ogType="article"
        ogImage={ironImage}
      />
      <ArticleSchema
        title="آهن و کم‌خونی فقر آهن"
        description="آهن یک ماده معدنی حیاتی برای حمل اکسیژن است. بررسی علائم کمبود آهن و میزان مصرف توصیه‌شده."
        publishedTime="2024-12-13"
        modifiedTime="2024-12-13"
        image={ironImage}
      />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>

        <article className="container mx-auto max-w-4xl px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              اهمیت آهن (Iron): نقش‌ها، کمبود و میزان مصرف توصیه‌شده
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              آهن (Fe) یک ماده معدنی حیاتی است که برای سلامتی انسان ضروری است. این عنصر نقش اصلی را در حمل و نقل اکسیژن و بسیاری از فرآیندهای متابولیکی کلیدی در بدن ایفا می‌کند. کمبود آهن، شایع‌ترین کمبود تغذیه‌ای در جهان است که می‌تواند منجر به کم‌خونی فقر آهن شود.
            </p>
          </header>

          <img 
            src={ironImage} 
            alt="آهن و اهمیت آن در سلامتی" 
            className="w-full rounded-lg mb-8"
          />

          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
            <p className="text-red-800 dark:text-red-200 text-sm">
              ⚠️ هشدار: مصرف خودسرانه مکمل‌های آهن بدون تشخیص پزشک می‌تواند خطرناک باشد. قبل از مصرف هر نوع مکمل، با پزشک مشورت کنید.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۱. نقش‌های حیاتی آهن در بدن
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              ۱.۱. حمل اکسیژن (نقش اصلی)
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>هموگلوبین:</strong> بیش از دو سوم آهن بدن در هموگلوبین موجود در گلبول‌های قرمز یافت می‌شود. هموگلوبین مسئول اتصال به اکسیژن در ریه‌ها و حمل آن به بافت‌ها و اندام‌های مختلف بدن است.</li>
              <li><strong>میوگلوبین:</strong> آهن همچنین در ساختار میوگلوبین عضلات نقش دارد، که اکسیژن را در بافت عضلانی ذخیره می‌کند.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              ۱.۲. عملکرد متابولیک و انرژی
            </h3>
            <p className="text-muted-foreground mb-4">
              آهن جزء ضروری بسیاری از آنزیم‌های دخیل در فرآیندهای حیاتی زیر است:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>تولید انرژی (ATP):</strong> در زنجیره تنفسی میتوکندری و تولید انرژی سلولی نقش دارد.</li>
              <li><strong>عملکرد سیستم ایمنی:</strong> برای بلوغ و فعال‌سازی سلول‌های ایمنی ضروری است.</li>
              <li><strong>سنتز DNA:</strong> در سنتز و ترمیم DNA مشارکت دارد.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۲. کم‌خونی فقر آهن (Iron Deficiency Anemia)
            </h2>
            <p className="text-muted-foreground mb-4">
              کمبود آهن می‌تواند به دلایل مختلفی از جمله رژیم غذایی نامناسب، کاهش جذب آهن یا افزایش از دست دادن خون (به ویژه خونریزی‌های قاعدگی سنگین) رخ دهد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              علائم شایع کم‌خونی فقر آهن
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>خستگی و ضعف مفرط:</strong> ناشی از کاهش اکسیژن‌رسانی به بافت‌ها.</li>
              <li><strong>تنگی نفس و تپش قلب:</strong> به دلیل تلاش بدن برای جبران کمبود اکسیژن.</li>
              <li><strong>پوست رنگ‌پریده.</strong></li>
              <li><strong>شکنندگی ناخن‌ها و التهاب زبان.</strong></li>
              <li><strong>پیکا (Pica):</strong> میل غیرعادی به خوردن مواد غیرخوراکی مانند یخ، خاک یا نشاسته.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۳. میزان مصرف روزانه توصیه شده (RDA)
            </h2>
            <p className="text-muted-foreground mb-4">
              نیاز روزانه به آهن بر اساس سن، جنسیت و وضعیت فیزیولوژیک (مانند بارداری) به طور قابل توجهی متفاوت است:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>مردان بالغ (۱۹ تا ۵۰ سال):</strong> ۸ میلی‌گرم در روز</li>
              <li><strong>زنان بالغ (۱۹ تا ۵۰ سال):</strong> ۱۸ میلی‌گرم در روز (جبران اتلاف آهن در قاعدگی)</li>
              <li><strong>زنان بالغ (بالای ۵۰ سال):</strong> ۸ میلی‌گرم در روز</li>
              <li><strong>زنان باردار:</strong> ۲۷ میلی‌گرم در روز (بیشترین نیاز)</li>
              <li><strong>زنان شیرده:</strong> ۹-۱۰ میلی‌گرم در روز</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۴. تأثیر آهن در دوران بارداری
            </h2>
            <p className="text-muted-foreground mb-4">
              نیاز به آهن در دوران بارداری تقریباً دو برابر می‌شود. این افزایش نیاز به دلایل زیر است:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>افزایش حجم خون مادر:</strong> برای حمایت از گردش خون جفتی و افزایش حجم گلبول‌های قرمز مادر.</li>
              <li><strong>رشد جنین و جفت:</strong> جنین برای ساخت ذخایر آهن خود به انتقال فعال آهن از بدن مادر نیاز دارد.</li>
              <li><strong>جلوگیری از عوارض:</strong> کمبود آهن در بارداری با عوارضی مانند زایمان زودرس، وزن کم هنگام تولد و تأخیر در رشد شناختی جنین مرتبط است.</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                💡 توصیه: پزشکان معمولاً برای زنان باردار، حتی در صورت عدم تشخیص کم‌خونی اولیه، مکمل‌های آهن (معمولاً ۳۰ تا ۶۰ میلی‌گرم آهن عنصری در روز) را توصیه می‌کنند.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۵. انواع آهن و منابع غذایی
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              انواع آهن
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>آهن هِم (Heme):</strong> در محصولات حیوانی (گوشت، ماهی، مرغ) یافت می‌شود و جذب بالایی دارد.</li>
              <li><strong>آهن غیر هِم (Non-Heme):</strong> در گیاهان (حبوبات، سبزیجات برگ سبز، غلات غنی شده) یافت می‌شود و جذب آن پایین‌تر است.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              نکات برای بهبود جذب آهن
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>ویتامین C:</strong> مصرف ویتامین C (مانند آب پرتقال یا مرکبات) همراه با منابع آهن غیر هِم، جذب آن را به طور چشمگیری افزایش می‌دهد.</li>
              <li><strong>مهارکننده‌ها:</strong> مصرف چای، قهوه، کلسیم و مکمل‌های آن باید جدا از وعده‌های حاوی آهن صورت گیرد.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              منابع (References)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Iron Deficiency Anemia. The New England Journal of Medicine (NEJM) Review.</li>
              <li>Iron: Fact Sheet for Health Professionals. NIH/Office of Dietary Supplements.</li>
              <li>Diagnosis and Management of Iron Deficiency Anemia. American College of Physicians.</li>
              <li>Dietary Reference Intakes for Iron. National Academies Press.</li>
              <li>Iron deficiency in pregnancy. British Journal of Haematology.</li>
            </ul>
          </section>

          <section className="mb-8 bg-primary/5 rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-3">
              مشاوره پزشکی در منزل
            </h2>
            <p className="text-muted-foreground mb-4">
              اگر علائم کم‌خونی دارید یا نیاز به بررسی سطح آهن خون و مشاوره تغذیه‌ای دارید، می‌توانید از خدمات <a href="/services/internal-medicine" className="text-primary hover:underline">ویزیت متخصص داخلی در منزل</a> و <a href="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</a> نوید زندگی استفاده کنید.
            </p>
            <p className="text-foreground font-semibold">
              برای هماهنگی تماس بگیرید: <a href="tel:09386117912" className="text-primary hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a>
            </p>
          </section>
        </article>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <FAQSection faqs={faqs} />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default IronSupplementPage;
