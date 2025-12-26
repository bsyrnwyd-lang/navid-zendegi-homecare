import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Link } from "react-router-dom";
import ivSerumHomeImage from "@/assets/iv-serum-home.jpg";
import nursingHomeImage from "@/assets/nursing-home-care.jpg";
import ivTherapyImage from "@/assets/iv-therapy-home.jpg";
import injectionHomeImage from "@/assets/iranian-injection-home.jpg";

const IVSerumHomeSafetyPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تزریق سرم در منزل", url: "/articles/iv-serum-home-safety" }
  ];

  const faqs = [
    {
      question: "آیا تزریق سرم در منزل بدون پزشک امکان‌پذیر است؟",
      answer: "بله، تزریق سرم توسط پرستاران مجرب دارای نظام پزشکی در منزل امکان‌پذیر است. پرستار قبل از تزریق علائم حیاتی را بررسی کرده و در صورت نیاز با پزشک هماهنگی می‌کند."
    },
    {
      question: "چه عوارضی ممکن است در تزریق سرم رخ دهد؟",
      answer: "عوارض احتمالی شامل آمبولی هوا، فلبیت (التهاب ورید)، واکنش‌های آلرژیک و اضافه بار مایعات است. این عوارض با رعایت پروتکل‌های استاندارد و مانیتورینگ بیمار به حداقل می‌رسد."
    },
    {
      question: "تفاوت سرم تقویتی و سرم دارویی چیست؟",
      answer: "سرم تقویتی حاوی مایعات و الکترولیت‌ها برای جبران کم‌آبی است، در حالی که سرم دارویی شامل داروهایی مثل آنتی‌بیوتیک است که باید با نظر پزشک تجویز شود."
    },
    {
      question: "مدت زمان تزریق سرم چقدر است؟",
      answer: "معمولاً یک سرم ۵۰۰ میلی‌لیتری بین ۳۰ دقیقه تا ۲ ساعت طول می‌کشد. سرعت تزریق بستگی به نوع سرم و وضعیت بیمار دارد و توسط پرستار تنظیم می‌شود."
    },
    {
      question: "آیا خدمات تزریق سرم در منزل شبانه‌روزی است؟",
      answer: "بله، تیم نوید زندگی خدمات تزریق سرم در منزل را به صورت ۲۴ ساعته در تمام مناطق تهران و کرج ارائه می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "خدمات پرستاری در منزل",
      description: "آشنایی با انواع خدمات پرستاری حرفه‌ای در محیط خانه",
      image: nursingHomeImage,
      link: "/services/nursing",
      category: "خدمات پزشکی"
    },
    {
      title: "سرم درمانی در منزل",
      description: "مزایا و روش انجام سرم درمانی در خانه",
      image: ivTherapyImage,
      link: "/articles/iv-therapy-home",
      category: "سلامت عمومی"
    },
    {
      title: "تزریقات در منزل",
      description: "انواع تزریقات عضلانی و وریدی در محل",
      image: injectionHomeImage,
      link: "/services/nursing",
      category: "خدمات پزشکی"
    }
  ];

  return (
    <>
      <SEOHead
        title="آیا تزریق سرم در منزل خطرناک است؟ | عوارض و استانداردهای ایمنی"
        description="آیا تزریق سرم در منزل ایمن است؟ در این مقاله با خطرات تزریق غیرحرفه‌ای و استانداردهای تزریق سرم در منزل توسط تیم نوید زندگی در تهران و کرج آشنا شوید."
        keywords="تزریق سرم در منزل تهران، عوارض تزریق سرم غلط، وصل کردن سرم در خانه کرج، سرم تقویتی در منزل، خطرات تزریق سرم"
        canonical="https://navidzendegi.com/articles/iv-serum-home-safety"
      />
      <StructuredData
        breadcrumbs={breadcrumbItems}
        article={{
          title: "آیا تزریق سرم در منزل خطرناک است؟ | دانستنی‌های حیاتی درباره ایمنی و استانداردها",
          description: "آیا تزریق سرم در منزل ایمن است؟ در این مقاله با خطرات تزریق غیرحرفه‌ای و استانداردهای تزریق سرم در منزل توسط تیم نوید زندگی در تهران و کرج آشنا شوید.",
          author: "تیم پزشکی نوید زندگی",
          publishedDate: "2025-01-06",
          modifiedDate: "2025-01-06",
          image: "https://navidzendegi.com/assets/iv-serum-home.jpg"
        }}
        faqs={faqs}
      />
      <Header />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>

        <article className="container mx-auto max-w-4xl px-4 py-8">
          <img 
            src={ivSerumHomeImage} 
            alt="تزریق سرم در منزل توسط پرستار مجرب" 
            className="w-full h-auto rounded-lg mb-8"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
            آیا تزریق سرم در منزل خطرناک است؟ | دانستنی‌های حیاتی درباره ایمنی و استانداردها
          </h1>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            تزریق سرم یکی از رایج‌ترین روش‌های درمان برای جبران کم‌آبی بدن، رساندن داروهای وریدی و تقویت قوای جسمانی است. اما وقتی صحبت از انجام آن در محیط خانه می‌شود، یک سوال مهم ذهن بسیاری را درگیر می‌کند: «آیا تزریق سرم در منزل خطرناک است؟»
          </p>

          <p className="text-lg text-foreground mb-8 leading-relaxed">
            پاسخ کوتاه این است: <strong>اگر توسط فرد متخصص و با رعایت پروتکل‌های پزشکی انجام شود، نه‌تنها خطرناک نیست، بلکه ایمن‌تر و راحت‌تر از مراکز درمانی شلوغ است.</strong> اما اگر به افراد غیرمتخصص اعتماد کنید، خطرات جدی شما را تهدید می‌کند.
          </p>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
            <p className="text-destructive font-bold">⚠️ هشدار مهم:</p>
            <p className="text-foreground">هرگز خودسرانه اقدام به تزریق سرم نکنید. تمامی تزریقات باید توسط پرستار یا پزشک متخصص و با تجویز پزشک انجام شود.</p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
            خطرات احتمالی تزریق سرم توسط افراد غیرحرفه‌ای
          </h2>

          <p className="text-foreground mb-4 leading-relaxed">
            بسیاری از افراد تصور می‌کنند وصل کردن سرم یک کار ساده است، اما در صورت عدم رعایت استانداردها، خطرات زیر وجود دارد:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-8 text-foreground">
            <li><strong>آمبولی هوا:</strong> ورود حباب‌های هوا به جریان خون که در صورت عدم هواگیری صحیح ست سرم رخ می‌دهد.</li>
            <li><strong>عفونت و فلبیت:</strong> التهاب و عفونت ورید به دلیل استفاده از تجهیزات غیراستریل یا تکنیک اشتباه رگ‌گیری.</li>
            <li><strong>واکنش‌های آلرژیک شدید (آنافیلاکسی):</strong> برخی داروها یا ترکیبات سرم ممکن است باعث حساسیت ناگهانی شوند که مدیریت آن نیاز به دانش پزشکی دارد.</li>
            <li><strong>اضافه بار مایعات:</strong> تزریق سریع سرم برای بیماران قلبی یا کلیوی می‌تواند باعث فشار به قلب و ریه شود.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
            چرا خدمات تزریق سرم «نوید زندگی» کاملاً ایمن است؟
          </h2>

          <p className="text-foreground mb-6 leading-relaxed">
            ما در نوید زندگی با آگاهی کامل از این حساسیت‌ها، خدماتی در سطح استانداردهای بیمارستانی در تهران و کرج ارائه می‌دهیم:
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
            ۱. اعزام پرستاران مجرب و دارای نظام پزشکی
          </h3>
          <p className="text-foreground mb-4 leading-relaxed">
            تمامی تزریقات توسط پرستاران باسابقه بخش‌های ویژه (ICU و CCU) انجام می‌شود که تسلط کامل بر رگ‌گیری و مدیریت عوارض احتمالی دارند.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
            ۲. بررسی سوابق پزشکی قبل از تزریق
          </h3>
          <p className="text-foreground mb-4 leading-relaxed">
            پرستار اعزامی ما پیش از شروع، علائم حیاتی بیمار (فشار خون، ضربان قلب و اکسیژن) را چک کرده و در صورت وجود بیماری‌های قلبی یا کلیوی، سرعت تزریق را تنظیم می‌کند.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
            ۳. رعایت کامل زنجیره استریل
          </h3>
          <p className="text-foreground mb-4 leading-relaxed">
            تمامی تجهیزات مصرفی (آنژیوکت، ست سرم و چسب) از برندهای معتبر و در بسته‌بندی‌های کاملاً استریل در حضور بیمار باز می‌شوند.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
            ۴. مانیتورینگ بیمار حین تزریق
          </h3>
          <p className="text-foreground mb-4 leading-relaxed">
            پرستار تا پایان زمان تزریق در کنار بیمار می‌ماند تا در صورت بروز هرگونه واکنش اولیه، اقدامات لازم را سریعاً انجام دهد.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
            مقایسه تزریق سرم در منزل و مراکز درمانی
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-right">ویژگی</th>
                  <th className="border border-border p-3 text-right">مراکز درمانی و اورژانس‌ها</th>
                  <th className="border border-border p-3 text-right">تزریق در منزل (نوید زندگی)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">خطر عفونت</td>
                  <td className="border border-border p-3">بالا (به دلیل حضور بیماران مختلف)</td>
                  <td className="border border-border p-3 text-primary font-bold">بسیار پایین (محیط ایزوله خانه)</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3">آرامش بیمار</td>
                  <td className="border border-border p-3">پایین (شلوغی و سر و صدا)</td>
                  <td className="border border-border p-3 text-primary font-bold">حداکثر (استراحت روی تخت شخصی)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">زمان</td>
                  <td className="border border-border p-3">اتلاف وقت در ترافیک و صف</td>
                  <td className="border border-border p-3 text-primary font-bold">صرفه‌جویی کامل در زمان</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border p-3">دقت و تمرکز</td>
                  <td className="border border-border p-3">تقسیم شده بین چندین بیمار</td>
                  <td className="border border-border p-3 text-primary font-bold">تمرکز ۱۰۰ درصدی پرستار روی یک بیمار</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
            چه زمانی باید برای تزریق سرم در منزل تماس بگیریم؟
          </h2>

          <ul className="list-disc list-inside space-y-2 mb-8 text-foreground">
            <li>مسمومیت‌های غذایی شدید و حالت تهوع</li>
            <li>ضعف و بی‌حالی ناشی از بیماری‌های ویروسی (مثل آنفولانزا یا کرونا)</li>
            <li>نیاز به تزریق آنتی‌بیوتیک‌های دوره‌ای</li>
            <li>جبران کم‌آبی در سالمندان و بیمارانی که میل به غذا و مایعات ندارند</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
            خدمات شبانه‌روزی در تمام نقاط تهران و کرج
          </h2>

          <p className="text-foreground mb-6 leading-relaxed">
            فرقی نمی‌کند ساعت ۲ بعدازظهر باشد یا ۴ صبح؛ تیم اعزامی نوید زندگی در تمام مناطق تهران و محله‌های مختلف کرج آماده ارائه خدمت است. ما امنیت سلامت شما را با دانش تخصصی گره زده‌ایم.
          </p>

          <p className="text-lg font-bold text-foreground mb-8">
            تزریق سرم در منزل، یک انتخاب هوشمندانه است؛ به شرطی که متخصص آن را انتخاب کنید.
          </p>

          {/* بخش دعوت به اقدام */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-3">درخواست اعزام پرستار همین حالا</h3>
            <p className="text-foreground mb-4">
              اگر نیاز به تزریق سرم تقویتی یا دارویی در منزل دارید، با ما تماس بگیرید تا در کمتر از یک ساعت پرستار مجرب در کنار شما باشد.
            </p>
            <p className="text-lg">
              <strong>تلفن پشتیبانی:</strong>{" "}
              <a href="tel:09386117912" className="text-primary hover:underline font-bold">
                ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </p>
          </div>

          {/* لینک‌های داخلی */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-foreground mb-3">خدمات مرتبط:</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/nursing" className="text-primary hover:underline">
                  خدمات پرستاری در منزل
                </Link>
              </li>
              <li>
                <Link to="/articles/iv-therapy-home" className="text-primary hover:underline">
                  سرم درمانی در منزل
                </Link>
              </li>
              <li>
                <Link to="/articles/specialist-home-visit" className="text-primary hover:underline">
                  ویزیت متخصص در منزل
                </Link>
              </li>
            </ul>
          </div>
        </article>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <FAQSection faqs={faqs} />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <RelatedArticles articles={relatedArticles} />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <PricingInfo />
        </div>
      </main>

      <FloatingContact />
      <Footer />
    </>
  );
};

export default IVSerumHomeSafetyPage;
