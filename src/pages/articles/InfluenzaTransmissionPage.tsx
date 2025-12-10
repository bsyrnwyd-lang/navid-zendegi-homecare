import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import fluTransmissionImage from "@/assets/flu-transmission-article.jpg";
import fluPreventionImage from "@/assets/flu-prevention-article.jpg";
import fluMortalityImage from "@/assets/flu-mortality-article.jpg";
import fluMedicationsImage from "@/assets/flu-treatment-medications.jpg";

const InfluenzaTransmissionPage = () => {
  const faqs = [
    {
      question: "آیا آنفولانزا از طریق هوا منتقل می‌شود؟",
      answer: "بله، آنفولانزا عمدتاً از طریق قطرات تنفسی (در فاصله ۱ تا ۲ متری) منتقل می‌شود. انتقال از طریق آئروسل‌های کوچکتر نیز ممکن است، به‌ویژه در محیط‌های بسته با تهویه ضعیف."
    },
    {
      question: "فرد مبتلا به آنفولانزا چند روز واگیردار است؟",
      answer: "افراد بزرگسال معمولاً از ۱ روز قبل از بروز علائم تا ۵ تا ۷ روز بعد واگیردار هستند. در کودکان این دوره ممکن است تا ۱۰ روز یا بیشتر ادامه یابد."
    },
    {
      question: "آیا لمس سطوح آلوده می‌تواند آنفولانزا را منتقل کند؟",
      answer: "بله، ویروس آنفولانزا می‌تواند روی سطوح مانند دستگیره در، تلفن و کیبورد باقی بماند. اگر فرد سالم این سطوح را لمس کرده و سپس دست خود را به صورت ببرد، امکان آلوده شدن وجود دارد."
    },
    {
      question: "چگونه می‌توان از انتقال آنفولانزا جلوگیری کرد؟",
      answer: "شستشوی مکرر دست‌ها، پوشاندن دهان و بینی هنگام سرفه و عطسه، اجتناب از لمس صورت، ضدعفونی سطوح و واکسیناسیون سالانه مهم‌ترین روش‌های پیشگیری هستند."
    },
    {
      question: "آیا افراد بدون علامت می‌توانند آنفولانزا را منتقل کنند؟",
      answer: "بله، افراد مبتلا از ۱ روز قبل از بروز علائم قادر به انتقال ویروس هستند، بنابراین ممکن است بدون آگاهی از بیماری خود، دیگران را آلوده کنند."
    }
  ];

  const relatedArticles = [
    {
      title: "راهبردهای پیشگیری از آنفولانزا",
      description: "واکسیناسیون، بهداشت فردی و اقدامات احتیاطی برای جلوگیری از ابتلا",
      image: fluPreventionImage,
      link: "/articles/influenza-prevention",
      category: "سلامت عمومی"
    },
    {
      title: "نرخ مرگ و میر آنفولانزا",
      description: "آمار جهانی، گروه‌های پرخطر و تأثیر واکسیناسیون",
      image: fluMortalityImage,
      link: "/articles/influenza-mortality",
      category: "سلامت عمومی"
    },
    {
      title: "داروهای درمان آنفولانزا",
      description: "ضدویروسی‌ها، درمان‌های حمایتی و مدیریت آنتی‌بیوتیکی",
      image: fluMedicationsImage,
      link: "/articles/influenza-medications",
      category: "دارو"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "نحوه انتقال آنفولانزا", url: "/articles/influenza-transmission" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="نحوه انتقال آنفولانزا | مسیرهای انتقال و دوره واگیرداری | نوید زندگی"
        description="راهنمای کامل نحوه انتقال آنفولانزا: قطرات تنفسی، تماس مستقیم و غیرمستقیم، انتقال هوایی و دوره واگیرداری در بزرگسالان و کودکان"
        keywords="انتقال آنفولانزا، نحوه انتقال آنفولانزا، قطرات تنفسی، واگیرداری آنفولانزا، پیشگیری از آنفولانزا"
        canonical="https://navidzendegi.com/articles/influenza-transmission"
        ogType="article"
        publishedTime="2024-12-10"
        modifiedTime="2024-12-10"
      />
      <ArticleSchema
        title="نحوه انتقال آنفولانزا"
        description="راهنمای کامل نحوه انتقال آنفولانزا شامل انتقال از طریق قطرات تنفسی، تماس مستقیم و غیرمستقیم، و دوره واگیرداری"
        publishedTime="2024-12-10"
        modifiedTime="2024-12-10"
        image={fluTransmissionImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none text-right" dir="rtl">
          <h1 className="text-3xl font-bold mb-6 text-foreground">نحوه انتقال آنفولانزا</h1>

          <img
            src={fluTransmissionImage}
            alt="نحوه انتقال آنفولانزا و مسیرهای شیوع ویروس"
            className="w-full rounded-lg mb-8"
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            آنفولانزا یک بیماری تنفسی واگیردار است که توسط ویروس‌های آنفولانزا ایجاد می‌شود. انتقال این ویروس به طور عمده از طریق <strong>مجرای تنفسی</strong> و از فردی به فرد دیگر صورت می‌گیرد.
          </p>

          <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded-lg mb-6">
            <p className="text-red-800 font-semibold">
              ⚠️ هشدار: از خوددرمانی خودداری کنید. در صورت مشاهده علائم آنفولانزا، حتماً با پزشک مشورت کنید.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">۱. انتقال از طریق قطرات تنفسی (Droplet Transmission)</h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            شایع‌ترین و اصلی‌ترین روش انتقال آنفولانزا، از طریق قطرات تنفسی بزرگ است.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">مکانیسم انتقال</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            هنگامی که فرد مبتلا به آنفولانزا <strong>سرفه، عطسه یا صحبت</strong> می‌کند، قطرات ریز بزاق و ترشحات تنفسی حاوی ویروس به هوا پرتاب می‌شوند.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">مسافت انتقال</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            این قطرات معمولاً سنگین هستند و مسافت کوتاهی (حدود <strong>۱ تا ۲ متر</strong>) را در هوا طی می‌کنند. اگر فرد سالم در این محدوده نزدیک باشد و این قطرات را از طریق بینی، دهان یا چشم‌ها استنشاق یا دریافت کند، به ویروس آلوده می‌شود.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">۲. انتقال از طریق تماس (Contact Transmission)</h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            انتقال از طریق تماس با سطوح آلوده یا تماس مستقیم با فرد بیمار نیز یک مسیر مهم است.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">تماس مستقیم</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تماس فیزیکی مانند <strong>دست دادن یا در آغوش گرفتن</strong> فرد بیمار می‌تواند ویروس را منتقل کند.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">تماس غیرمستقیم (Fomites)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            فرد بیمار با لمس دهان و بینی خود، دستانش را آلوده می‌کند و سپس ویروس را به سطوح و اشیاء دیگر (مانند <strong>دستگیره در، میز، تلفن، یا کیبورد</strong>) منتقل می‌کند. اگر فرد سالم این سطوح آلوده را لمس کند و سپس دست آلوده خود را به چشم، بینی یا دهان ببرد، ویروس وارد بدن او می‌شود.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">۳. انتقال از طریق هوا (Airborne Transmission)</h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            بحث در مورد انتقال آنفولانزا از طریق ذرات کوچک معلق در هوا (آئروسل‌ها) وجود دارد.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">مکانیسم</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            این انتقال توسط ذرات ریزتری صورت می‌گیرد که می‌توانند برای مدت زمان طولانی‌تری در هوا معلق بمانند و مسافت بیشتری را طی کنند.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">نقش در انتقال</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            اگرچه قطرات بزرگ (Droplet) مسیر اصلی انتقال در آنفولانزای فصلی تلقی می‌شوند، انتقال از طریق <strong>آئروسل‌ها</strong> نیز ممکن است نقش داشته باشد، به‌ویژه در محیط‌های بسته و با تهویه ضعیف.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">دوره واگیرداری</h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            افراد مبتلا به آنفولانزا معمولاً از <strong>۱ روز قبل از بروز علائم</strong> تا حدود <strong>۵ تا ۷ روز بعد</strong> از بیمار شدن، واگیردار هستند و می‌توانند ویروس را به دیگران منتقل کنند.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">کودکان</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            دوره واگیرداری در کودکان ممکن است طولانی‌تر باشد و تا <strong>۱۰ روز</strong> یا بیشتر پس از شروع علائم ادامه یابد.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg mt-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">درخواست ویزیت پزشک در منزل</h3>
            <p className="text-muted-foreground mb-4">
              در صورت مشاهده علائم آنفولانزا، تیم پزشکی <strong>نوید زندگی</strong> آماده ارائه خدمات ویزیت در منزل است.
            </p>
            <p className="text-lg font-bold text-primary">
              تماس: <a href="tel:09386117912" className="hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a>
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">منابع</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
            <li>How Flu Spreads. Centers for Disease Control and Prevention (CDC).</li>
            <li>Influenza Transmission. World Health Organization (WHO).</li>
            <li>Transmission of influenza A in human beings: a review of the evidence. The Lancet Infectious Diseases.</li>
          </ul>
        </article>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />
      </div>
    </ArticleLayout>
  );
};

export default InfluenzaTransmissionPage;
