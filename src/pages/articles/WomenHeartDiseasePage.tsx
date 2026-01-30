import { Link } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import womenHeartDiseaseImage from "@/assets/women-heart-disease.jpg";
import holterHomeImage from "@/assets/holter-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const WomenHeartDiseasePage = () => {
  const publishDate = "1404/11/11";
  const isoPublishDate = "2026-01-30";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بیماری قلبی در زنان", url: "/articles/women-heart-disease" }
  ];

  const faqs = [
    {
      question: "آیا علائم سکته قلبی در زنان متفاوت است؟",
      answer: "بله، در حالی که مردان معمولاً درد شدید و فشار در مرکز سینه را تجربه می‌کنند، زنان ممکن است علائم غیرکلاسیک مثل درد در فک، گردن یا کمر، تنگی نفس بدون درد سینه، تهوع، سوءهاضمه و خستگی مفرط را داشته باشند."
    },
    {
      question: "چرا بیماری قلبی در زنان بعد از یائسگی افزایش می‌یابد؟",
      answer: "کاهش هورمون استروژن پس از یائسگی خطر ابتلا به بیماری‌های عروق کوچک را افزایش می‌دهد. استروژن نقش محافظتی برای قلب دارد و کاهش آن باعث افزایش ریسک تصلب شرایین و بیماری‌های قلبی می‌شود."
    },
    {
      question: "هولتر قلب چگونه به تشخیص مشکلات قلبی در زنان کمک می‌کند؟",
      answer: "بسیاری از بانوان از تپش قلب‌های گذرا شکایت دارند که در نوار قلب ساده دیده نمی‌شود. هولتر با پایش ۲۴ تا ۷۲ ساعته، ضربان قلب را در حین فعالیت، استرس و خواب ثبت می‌کند و مشخص می‌کند که آیا تپش قلب ریشه عصبی دارد یا اختلال ریتم جدی است."
    },
    {
      question: "سندرم قلب شکسته (تاکوتسوبو) چیست؟",
      answer: "سندرم تاکوتسوبو یا قلب شکسته، یک بیماری قلبی است که در اثر شوک‌های عاطفی شدید (مثل فوت عزیزان یا استرس شدید) ایجاد می‌شود. قلب زنان به این شوک‌ها حساس‌تر است و علائم آن شبیه سکته قلبی است اما انسداد عروقی ندارد."
    },
    {
      question: "آیا سابقه دیابت بارداری خطر بیماری قلبی را افزایش می‌دهد؟",
      answer: "بله، سابقه فشار خون بارداری یا دیابت بارداری، ریسک بیماری قلبی را در آینده بالا می‌برد. این خانم‌ها باید پایش قلبی منظم داشته باشند و عوامل خطر دیگر مثل چاقی و بی‌تحرکی را کنترل کنند."
    }
  ];

  const relatedArticles = [
    {
      title: "هولتر قلب در منزل",
      description: "پایش ۲۴ تا ۷۲ ساعته ریتم قلب برای تشخیص آریتمی‌های پنهان در منزل",
      image: holterHomeImage,
      link: "/services/holter",
      category: "خدمات قلب"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "بررسی ساختار قلب و عملکرد دریچه‌ها با تجهیزات پیشرفته در منزل شما",
      image: echoHomeImage,
      link: "/services/echo-ecg",
      category: "خدمات قلب"
    },
    {
      title: "تپش قلب؛ علل، علائم و روش‌های بررسی",
      description: "راهنمای کامل تپش قلب، علل شایع، علائم خطرناک و خدمات هولتر در منزل",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="بیماری قلبی در زنان | علائم فریبنده و پایش تخصصی در منزل"
        description="راهنمای کامل بیماری قلبی در زنان: علائم متفاوت سکته قلبی در بانوان، عوامل خطر اختصاصی مثل یائسگی و بارداری، خدمات هولتر، اکو و نوار قلب در منزل"
        keywords="علائم قلبی در زنان, هولتر قلب در منزل, اکو در منزل, نوار قلب در منزل, ویزیت متخصص قلب در منزل, تپش قلب بانوان, نوید زندگی"
        canonical="https://navidzendegi.com/articles/women-heart-disease"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="بیماری قلبی در زنان؛ علائم فریبنده و ضرورت پایش تخصصی در منزل"
        description="راهنمای کامل بیماری قلبی در زنان و خدمات تشخیصی هولتر، اکو و نوار قلب در منزل"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={womenHeartDiseaseImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              بیماری قلبی در زنان؛ علائم فریبنده و ضرورت پایش تخصصی در منزل
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: {publishDate}
            </p>
          </header>

          <img
            src={womenHeartDiseaseImage}
            alt="بیماری قلبی در زنان - پایش تخصصی در منزل"
            className="w-full h-auto rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              برای دهه‌ها تصور می‌شد که بیماری قلبی عمدتاً مشکلی مردانه است، اما واقعیت این است که <strong>بیماری‌های قلبی عروقی قاتل شماره یک زنان در سراسر جهان هستند</strong>. نکته بسیار حیاتی اینجاست که قلب زنان نه تنها از نظر فیزیولوژیک کوچک‌تر است، بلکه علائم آسیب را نیز به شکلی کاملاً متفاوت و گاهی فریبنده نشان می‌دهد.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              ما در مرکز خدمات پزشکی نوید زندگی با ارائه پکیج‌های تشخیصی شامل <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link>، <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو و نوار قلب در منزل</Link>، به بانوان کمک می‌کنیم تا بدون نیاز به جابه‌جایی و در کمال آرامش، سلامت قلب خود را پایش کنند.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز علائم قلبی را نادیده نگیرید. خوددرمانی می‌تواند خطرناک باشد. در صورت مشاهده علائم مشکوک، با پزشک متخصص مشورت کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۱. چرا علائم قلبی در زنان متفاوت است؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              در حالی که مردان معمولاً درد شدید و فشار در مرکز سینه (احساس سنگینی وزنه) را تجربه می‌کنند، زنان ممکن است علائم "غیرکلاسیک" زیر را داشته باشند که اغلب نادیده گرفته می‌شوند:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>درد در فک، گردن یا بالای کمر:</strong> گاهی تنها علامت یک مشکل جدی است.</li>
              <li><strong>تنگی نفس شدید:</strong> بدون اینکه درد سینه‌ای وجود داشته باشد.</li>
              <li><strong>درد در دست‌ها:</strong> که معمولاً با دردهای عضلانی یا خستگی اشتباه گرفته می‌شود.</li>
              <li><strong>تهوع و سوءهاضمه:</strong> بسیاری از زنان حملات قلبی خود را با مشکلات گوارشی اشتباه می‌گیرند.</li>
              <li><strong>خستگی مفرط و ناگهانی:</strong> احساس ضعف شدید که فرد را از انجام کارهای ساده روزمره باز می‌دارد.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۲. عوامل خطر اختصاصی برای خانم‌ها
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              برخی فاکتورها فقط مختص بانوان است و ریسک قلبی آن‌ها را دوچندان می‌کند:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>یائسگی:</strong> کاهش استروژن خطر ابتلا به بیماری‌های عروق کوچک را افزایش می‌دهد.</li>
              <li><strong>عوارض بارداری:</strong> سابقه فشار خون یا دیابت بارداری، ریسک بیماری قلبی را در آینده بالا می‌برد.</li>
              <li><strong>استرس و سندرم قلب شکسته:</strong> قلب زنان به شوک‌های عاطفی حساس‌تر است (سندرم تاکوتسوبو).</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۳. خدمات تخصصی نوید زندگی؛ تشخیص هوشمندانه در منزل
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              خانم‌ها معمولاً به دلیل مشغله‌های خانوادگی، رسیدگی به سلامت خود را به تعویق می‌اندازند. ما تمام امکانات را به خانه شما می‌آوریم:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              الف) هولتر مانیتورینگ قلب در منزل (شکار آریتمی‌های پنهان)
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              بسیاری از بانوان از تپش قلب‌های گذرا یا احساس "خالی کردن دل" شکایت دارند که در یک نوار قلب ساده ۱۰ ثانیه‌ای دیده نمی‌شود.
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-4">
              <li><strong>پایش ۲۴ تا ۷۲ ساعته:</strong> ما دستگاه کوچک هولتر را در منزل برای شما نصب می‌کنیم تا ضربان قلب شما را در حین فعالیت، استرس و خواب ثبت کند.</li>
              <li><strong>تشخیص دقیق:</strong> هولتر مشخص می‌کند که آیا تپش قلب شما ریشه عصبی و هورمونی دارد یا یک اختلال ریتم جدی است.</li>
              <li><strong>بدون جابه‌جایی:</strong> تکنسین ما برای نصب و برداشتن دستگاه به منزل شما می‌آید.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ب) اکوکاردیوگرافی (اکو) در منزل
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              زنان بیشتر مستعد بیماری‌های عروق کوچک و مشکلات دریچه‌ای هستند. متخصصین ما با <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو پورتابل</Link>، ساختار قلب و عملکرد دریچه‌ها را با دقت بالا در اتاق خواب بیمار ارزیابی می‌کنند.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ج) نوار قلب (ECG) و ویزیت متخصص
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              اگر دچار تنگی نفس یا درد مبهم هستید، جابه‌جایی در ترافیک و استرس مطب می‌تواند وضعیت شما را بدتر کند. <Link to="/services/specialist-doctor" className="text-primary hover:underline">متخصص قلب نوید زندگی</Link> با حضور در بالین شما، نوار قلب را تفسیر کرده و بهترین پروتکل درمانی را ارائه می‌دهد.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۴. چه زمانی باید فوراً درخواست کمک کنید؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              اگر به عنوان یک بانو، به طور ناگهانی دچار خستگی غیرعادی، تنگی نفس یا دردی شدید که به سمت فک و گردن حرکت می‌کند شدید، زمان را از دست ندهید. این‌ها می‌توانند نشانه‌های اولیه یک حمله قلبی باشند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نتیجه‌گیری
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              مراقبت از خود، اولین قدم برای مراقبت از خانواده است. مرکز نوید زندگی با تکنولوژی‌های پیشرفته مثل هولتر و اکو در منزل، امنیت و سلامت قلب بانوان را در محیط گرم خانه تضمین می‌کند.
            </p>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                درخواست پایش قلبی تخصصی در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای انجام هولتر، اکو، نوار قلب و ویزیت متخصص قلب در منزل با ما تماس بگیرید:
              </p>
              <a
                href="tel:09386117912"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-8">
              <h4 className="font-bold text-foreground mb-2">منابع معتبر علمی:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• American Heart Association (AHA): Go Red for Women - Heart Attack Symptoms</li>
                <li>• Mayo Clinic: Heart disease in women: Understand symptoms and risk factors</li>
                <li>• Lancet Women and Cardiovascular Disease Commission</li>
              </ul>
            </div>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default WomenHeartDiseasePage;
