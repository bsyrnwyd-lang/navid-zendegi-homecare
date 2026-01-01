import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import sodiumPotassiumImage from "@/assets/sodium-potassium-balance.jpg";
import dashDietImage from "@/assets/dash-diet.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";
import captoprilImage from "@/assets/captopril-medication.jpg";

const SodiumPotassiumPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "نمک یا پتاسیم؛ کدام فرمانروای فشار خون است؟", url: "/articles/sodium-potassium" }
  ];

  const faqs = [
    {
      question: "آیا حذف کامل نمک برای کنترل فشار خون ضروری است؟",
      answer: "خیر، حذف کامل نمک نه تنها ضروری نیست بلکه می‌تواند مضر باشد. هدف اصلی کاهش سدیم و همزمان افزایش پتاسیم است. تعادل بین این دو ماده مهم‌تر از حذف کامل نمک است."
    },
    {
      question: "چه مواد غذایی سرشار از پتاسیم هستند؟",
      answer: "موز، پرتقال، زردآلو، اسفناج، سیب‌زمینی پخته، حبوبات (لوبیا و عدس)، ماست و شیر کم‌چرب از منابع غنی پتاسیم هستند. بهتر است پتاسیم را از غذا بگیرید نه از مکمل‌ها."
    },
    {
      question: "آیا افراد کلیوی می‌توانند پتاسیم زیاد مصرف کنند؟",
      answer: "خیر، افرادی که دچار بیماری‌های کلیوی هستند باید مصرف پتاسیم را محدود کنند زیرا کلیه‌های آن‌ها توانایی دفع پتاسیم اضافی را ندارند. حتماً قبل از تغییر رژیم غذایی با پزشک مشورت کنید."
    },
    {
      question: "نمک‌های رژیمی جایگزین مناسبی هستند؟",
      answer: "نمک‌های رژیمی معمولاً حاوی کلرید پتاسیم هستند. اگرچه سدیم کمتری دارند، اما برای افراد با مشکلات کلیوی یا مصرف‌کنندگان داروهای خاص (مانند ACE inhibitors) می‌توانند خطرناک باشند."
    },
    {
      question: "چگونه می‌توانم سدیم پنهان در غذاها را تشخیص دهم؟",
      answer: "برچسب‌های مواد غذایی را بخوانید. بسیاری از غذاهایی که طعم شور ندارند (مانند نان، غلات صبحانه و سس‌ها) سرشار از سدیم هستند. به دنبال عبارت‌هایی مانند 'کم‌نمک' یا 'بدون نمک افزوده' باشید."
    }
  ];

  const relatedArticles = [
    {
      title: "رژیم غذایی DASH برای کنترل فشار خون",
      description: "آشنایی با رژیم DASH و نقش آن در مدیریت فشار خون بالا",
      image: dashDietImage,
      link: "/articles/dash-diet",
      category: "تغذیه"
    },
    {
      title: "فشار خون بالا؛ علائم و راه‌های کنترل",
      description: "راهنمای جامع شناخت و مدیریت فشار خون بالا",
      image: highBloodPressureImage,
      link: "/articles/high-blood-pressure",
      category: "قلب و عروق"
    },
    {
      title: "داروی کاپتوپریل؛ کاربردها و هشدارها",
      description: "راهنمای کامل مصرف کاپتوپریل برای کنترل فشار خون",
      image: captoprilImage,
      link: "/articles/captopril",
      category: "دارو"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="نمک یا پتاسیم؛ کدام فرمانروای فشار خون شماست؟ | نوید زندگی"
        description="راهنمای علمی تأثیر سدیم و پتاسیم بر فشار خون. یاد بگیرید چگونه با تعادل این دو ماده معدنی، فشار خون خود را در خانه کنترل کنید."
        keywords="سدیم و فشار خون، پتاسیم و فشار خون، رژیم غذایی فشار خون، کنترل فشار خون با غذا، نمک و فشار خون، رژیم DASH"
        canonical="https://navidzendegi.com/articles/sodium-potassium"
        ogType="article"
        publishedTime="2026-01-01"
        modifiedTime="2026-01-01"
      />
      <ArticleSchema
        title="نمک یا پتاسیم؛ کدام فرمانروای فشار خون شماست؟"
        description="راهنمای علمی تأثیر سدیم و پتاسیم بر فشار خون و نقش تغذیه در کنترل فشار خون"
        publishedTime="2026-01-01"
        modifiedTime="2026-01-01"
        image={sodiumPotassiumImage}
      />
      <Header />
      <FloatingContact />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <img
              src={sodiumPotassiumImage}
              alt="تعادل سدیم و پتاسیم برای کنترل فشار خون"
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
            />

            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              نمک یا پتاسیم؛ کدام‌یک فرمانروای فشار خون شماست؟
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              اگر فشار خون بالا دارید، احتمالاً بارها شنیده‌اید که «نمک نخورید». اما حقیقت این است که نمک (سدیم) تنها نیمی از داستان است. نیمه دیگر و بسیار حیاتی، <strong>پتاسیم</strong> است. در واقع، فشار خون شما بیش از آنکه به مقدار نمک بستگی داشته باشد، به نسبت سدیم به پتاسیم در بدن شما وابسته است.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              مرکز نوید زندگی با ارائه خدمات چک‌آپ کامل در منزل و مشاوره تغذیه (تهران و کرج)، به شما کمک می‌کند تا این تعادل حیاتی را در بدن خود برقرار کنید.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
              <p className="text-destructive font-semibold text-sm">
                ⚠️ هشدار: هرگز بدون مشورت با پزشک، رژیم غذایی خود را به صورت خودسرانه تغییر ندهید یا مکمل‌های پتاسیم مصرف نکنید.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۱. سدیم (نمک) چگونه فشار خون را بالا می‌برد؟
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                سدیم مانند یک «اسفنج» عمل می‌کند. وقتی نمک زیادی مصرف می‌کنید، سدیم وارد خون شده و آب را به سمت خود می‌کشد.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>افزایش حجم خون:</strong> آب اضافه شده به خون، حجم کلی مایع در رگ‌های شما را بالا می‌برد.</li>
                <li><strong>فشار به دیواره رگ‌ها:</strong> درست مثل لوله‌کشی ساختمانی که فشار آب در آن بیش از حد زیاد شده باشد، به دیواره رگ‌ها و قلب فشار وارد می‌شود.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۲. پتاسیم؛ قهرمان گمنام در برابر فشار خون
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                بر اساس گزارش‌های سازمان جهانی بهداشت (WHO)، پتاسیم دو نقش جدی در کاهش فشار خون دارد:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>دفع سدیم:</strong> پتاسیم به کلیه‌ها کمک می‌کند تا سدیم اضافی را از طریق ادرار دفع کنند. هرچه پتاسیم بیشتری مصرف کنید، نمک بیشتری از بدن خارج می‌شود.</li>
                <li><strong>آرامش رگ‌ها:</strong> پتاسیم تنش را در دیواره رگ‌های خونی کاهش می‌دهد که خود باعث پایین آمدن فشار خون می‌شود.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۳. نسبت سدیم به پتاسیم (تعادل حیاتی)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                تحقیقات دانشگاهی نشان می‌دهند افرادی که پتاسیم بالایی مصرف می‌کنند اما همچنان نمک زیادی می‌خورند، وضعیت بهتری نسبت به کسانی دارند که هر دو را کم مصرف می‌کنند.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>هدف اصلی:</strong> کاهش سدیم و همزمان افزایش پتاسیم.
              </p>
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mb-4">
                <p className="text-warning-foreground text-sm">
                  <strong>هشدار مهم:</strong> اگر دچار بیماری‌های کلیوی هستید، مصرف زیاد پتاسیم می‌تواند خطرناک باشد. قبل از تغییر رژیم غذایی یا مصرف مکمل، حتماً با <Link to="/services/internal" className="text-primary underline">متخصص داخلی نوید زندگی</Link> در منزل مشورت کنید.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۴. منابع غذایی برای برقراری تعادل (رژیم DASH)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">مواد غذایی غنی از پتاسیم (دوستِ قلب)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• موز، پرتقال و زردآلو</li>
                    <li>• اسفناج و سیب‌زمینی پخته</li>
                    <li>• حبوبات (لوبیا و عدس)</li>
                    <li>• ماست و شیر کم‌چرب</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">مواد غذایی پر سدیم (دشمنِ قلب)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• انواع کنسروها و غذاهای آماده</li>
                    <li>• سوسیس، کالباس و گوشت‌های فرآوری شده</li>
                    <li>• نان‌های پرنمک و تنقلات شور</li>
                    <li>• سس‌های آماده (مایونز و کچاپ)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                ۵. راهکارهای عملی برای کنترل فشار خون در خانه
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                تیم مراقبتی نوید زندگی این گام‌های ساده را به شما پیشنهاد می‌دهد:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>برچسب‌ها را بخوانید:</strong> بسیاری از مواد غذایی که طعم شور ندارند (مانند نان یا غلات صبحانه) سرشار از سدیم پنهان هستند.</li>
                <li><strong>از چاشنی‌های جایگزین استفاده کنید:</strong> به جای نمک، از آبلیمو، نارنج، سیر، و سبزیجات معطر برای طعم‌دار کردن غذا استفاده کنید.</li>
                <li><strong>پتاسیم را از غذا بگیرید، نه قرص:</strong> جذب پتاسیم از طریق میوه و سبزیجات بسیار ایمن‌تر و موثرتر از مکمل‌های دارویی است.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                خدمات تخصصی نوید زندگی در تهران و کرج
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ما برای مدیریت هوشمندانه فشار خون شما، در کنار مصرف دارو، خدمات زیر را در منزل ارائه می‌دهیم:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>آزمایش الکترولیت خون:</strong> بررسی دقیق سطح سدیم و پتاسیم خون برای جلوگیری از عوارض قلبی.</li>
                <li><strong>مشاوره تغذیه در منزل:</strong> تنظیم رژیم غذایی اختصاصی بر اساس سن و بیماری‌های زمینه‌ای.</li>
                <li><strong>آموزش خانواده:</strong> نحوه طبخ غذاهای کم‌نمک اما خوش‌طعم برای بیماران قلبی.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                منابع و رفرنس‌های معتبر
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>World Health Organization (WHO): Potassium intake for adults and children</li>
                <li>American Heart Association (AHA): How Potassium Can Help Control High Blood Pressure</li>
                <li>CDC: The Role of Sodium and Potassium in Maintaining Health</li>
              </ul>
            </section>

            <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                مسیر سلامت از آشپزخانه شما شروع می‌شود
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                اگر فشار خون شما حتی با مصرف دارو کنترل نمی‌شود، ممکن است مشکل در تعادل املاح بدن شما باشد. برای بررسی تخصصی و دریافت برنامه مراقبتی در منزل، با ما تماس بگیرید.
              </p>
              <a
                href="tel:09386117912"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </section>

            <FAQSection faqs={faqs} />
          </article>

          <PricingInfo />
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SodiumPotassiumPage;
