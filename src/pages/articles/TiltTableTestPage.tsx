import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import tiltTableTestImage from "@/assets/tilt-table-test.jpg";
import dizzinessImage from "@/assets/dizziness-comprehensive.jpg";
import bloodPressureImage from "@/assets/blood-pressure-article.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const TiltTableTestPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تست تیلت", url: "/articles/tilt-table-test" }
  ];

  const faqs = [
    {
      question: "تست تیلت چیست و چرا انجام می‌شود؟",
      answer: "تست تیلت یا تست میز شیب‌دار یک روش تشخیصی برای ارزیابی افرادی است که دچار حملات مکرر و بدون علت غش کردن (سنکوپ) می‌شوند. این تست به پزشک کمک می‌کند تا متوجه شود آیا علت غش کردن مربوط به اختلال در تنظیم فشار خون یا ضربان قلب توسط سیستم عصبی است یا خیر."
    },
    {
      question: "تست تیلت چقدر طول می‌کشد؟",
      answer: "مدت زمان تست تیلت معمولاً بین ۳۰ تا ۹۰ دقیقه است. بیمار ابتدا حدود ۱۵ تا ۲۰ دقیقه در حالت خوابیده استراحت می‌کند، سپس ۲۰ تا ۴۰ دقیقه در وضعیت شیب‌دار قرار می‌گیرد. در صورت نیاز به تحریک دارویی، زمان بیشتری اضافه می‌شود."
    },
    {
      question: "آیا تست تیلت دردناک است؟",
      answer: "خیر، تست تیلت دردناک نیست. فقط الکترودهای نوار قلب و کاف فشار خون به بیمار متصل می‌شود. در صورت تزریق دارویی، ممکن است احساس گرمای خفیف یا سرگیجه داشته باشید که طبیعی است."
    },
    {
      question: "قبل از تست تیلت چه آمادگی‌هایی لازم است؟",
      answer: "معمولاً توصیه می‌شود ۴ تا ۶ ساعت قبل از تست ناشتا باشید. برخی داروها (مانند داروهای قلبی و فشارخون) ممکن است نیاز به قطع موقت داشته باشند. حتماً با پزشک خود در این مورد مشورت کنید."
    },
    {
      question: "نتیجه مثبت تست تیلت به چه معناست؟",
      answer: "نتیجه مثبت به این معناست که در طول تست، افت شدید فشار خون و/یا کاهش ضربان قلب رخ داده که منجر به علائم غش شده است. این نتیجه نشان می‌دهد که سیستم عصبی خودکار بدن در تنظیم فشار خون هنگام تغییر وضعیت، اختلال دارد (سنکوپ واسوواگال)."
    }
  ];

  const relatedArticles = [
    {
      title: "سرگیجه: علل، تشخیص و درمان",
      description: "بررسی کامل انواع سرگیجه و روش‌های تشخیص و درمان آن",
      image: dizzinessImage,
      link: "/articles/dizziness",
      category: "سلامت عمومی"
    },
    {
      title: "فشار خون و اهمیت کنترل آن",
      description: "همه چیز درباره فشار خون بالا و پایین و روش‌های کنترل",
      image: bloodPressureImage,
      link: "/articles/blood-pressure",
      category: "قلب و عروق"
    },
    {
      title: "تپش قلب: علل و درمان",
      description: "بررسی علل تپش قلب و روش‌های تشخیص و درمان آن",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background" dir="rtl">
      <SEOHead
        title="تست تیلت (Tilt Table Test): راهنمای کامل تشخیص علل سنکوپ و غش کردن | نوید زندگی"
        description="راهنمای جامع تست تیلت شامل مراحل انجام آزمایش، تفسیر نتایج، کاربرد در تشخیص سنکوپ واسوواگال و افت فشار خون ارتوستاتیک. ویزیت پزشک در منزل تهران."
        keywords="تست تیلت, تست میز شیب‌دار, سنکوپ, غش کردن, افت فشار خون, سنکوپ واسوواگال, تشخیص سرگیجه, ویزیت پزشک در منزل تهران"
        canonical="https://navidzendegi.com/articles/tilt-table-test"
      />

      <ArticleSchema
        title="تست تیلت (Tilt Table Test): راهنمای کامل تشخیص علل سنکوپ و غش کردن"
        description="راهنمای جامع تست تیلت شامل مراحل انجام آزمایش، تفسیر نتایج، کاربرد در تشخیص سنکوپ واسوواگال و مراقبت‌های پس از تست"
        publishedTime="2024-12-19"
        modifiedTime="2024-12-19"
        image={tiltTableTestImage}
        author="تیم پزشکی نوید زندگی"
      />

      <Header />
      
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              تست تیلت (Tilt Table Test): راهنمای کامل تشخیص علل سنکوپ و غش کردن
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: ۲۹ آذر ۱۴۰۳ | زمان مطالعه: ۸ دقیقه
            </p>
          </header>

          <figure className="mb-8">
            <img 
              src={tiltTableTestImage} 
              alt="تست تیلت و مانیتورینگ علائم حیاتی در تشخیص سنکوپ" 
              className="w-full h-auto rounded-lg shadow-md"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              تست تیلت با مانیتورینگ مداوم فشار خون و ضربان قلب
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="text-lg leading-relaxed mb-6">
              <strong>تست تیلت</strong> یا <strong>تست میز شیب‌دار</strong> یک روش تشخیصی استاندارد برای ارزیابی افرادی است که دچار حملات مکرر و بدون علت <strong>سنکوپ</strong> (غش کردن یا از دست دادن ناگهانی هوشیاری) می‌شوند. این تست به پزشک کمک می‌کند تا متوجه شود آیا علت غش کردن مربوط به اختلال در تنظیم فشار خون یا ضربان قلب توسط سیستم عصبی (<strong>سنکوپ واسوواگال</strong>) است یا خیر.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              ۱. تست تیلت برای چه کسانی تجویز می‌شود؟
            </h2>
            <p className="mb-4">
              پزشک متخصص <a href="/services/cardiology" className="text-primary hover:underline">قلب</a> یا مغز و اعصاب معمولاً در موارد زیر این تست را درخواست می‌کند:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 mr-4">
              <li>حملات مکرر غش کردن بدون علت مشخص قلبی</li>
              <li>احساس سبکی سر یا <a href="/articles/dizziness" className="text-primary hover:underline">سرگیجه</a> شدید هنگام تغییر وضعیت از خوابیده به ایستاده</li>
              <li>تمایز بین سنکوپ‌های عصبی و صرع (تشنج)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              ۲. مکانیسم فیزیولوژیک تست
            </h2>
            <p className="mb-6">
              در حالت عادی، وقتی فرد می‌ایستد، نیروی گرانش باعث تجمع خون در پاها می‌شود. سیستم عصبی خودکار (Autonomic Nervous System) با افزایش ضربان قلب و انقباض عروق، <a href="/articles/blood-pressure" className="text-primary hover:underline">فشار خون</a> را حفظ می‌کند. در افراد مبتلا به <strong>سنکوپ واسوواگال</strong>، این پاسخ مختل شده و بدن به جای جبران، واکنش معکوس نشان می‌دهد که منجر به افت ناگهانی فشار خون یا ضربان قلب می‌شود.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              ۳. مراحل انجام تست تیلت
            </h2>
            <p className="mb-4">
              این تست معمولاً در یک محیط کنترل شده بیمارستانی یا کلینیکی انجام می‌شود و شامل مراحل زیر است:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              مرحله اول: آماده‌سازی و مانیتورینگ
            </h3>
            <p className="mb-4">
              بیمار روی یک تخت مخصوص دراز می‌کشد. الکترودهای <a href="/articles/ecg-home" className="text-primary hover:underline">نوار قلب (ECG)</a> و کاف فشار خون به او متصل می‌شوند تا علائم حیاتی به طور لحظه‌ای ثبت شوند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              مرحله دوم: تغییر وضعیت (تیلت)
            </h3>
            <p className="mb-4">
              تخت به تدریج به سمت بالا حرکت می‌کند تا بیمار در وضعیت نیمه ایستاده (معمولاً با زاویه ۶۰ تا ۷۰ درجه) قرار بگیرد. بیمار توسط تسمه‌های ایمنی بسته شده است تا در صورت غش کردن سقوط نکند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              مرحله سوم: تحریک دارویی (در صورت نیاز)
            </h3>
            <p className="mb-6">
              اگر پس از ۲۰ تا ۴۰ دقیقه در وضعیت شیب‌دار علائمی ظاهر نشود، پزشک ممکن است دارویی (مانند نیتروگلیسیرین زیرزبانی یا ایزوپروترنول وریدی) تجویز کند تا حساسیت سیستم عصبی را برای بروز پاسخ بررسی کند.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              ۴. تفسیر نتایج تست
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-3 mr-4">
              <li>
                <strong>نتیجه منفی (نرمال):</strong> فشار خون و ضربان قلب در طول تست ثابت می‌مانند یا تغییرات جزئی و طبیعی دارند.
              </li>
              <li>
                <strong>نتیجه مثبت:</strong> بیمار دچار افت شدید فشار خون (Hypotension)، افت ضربان قلب (Bradycardia) یا هر دو می‌شود که معمولاً با علائمی مثل حالت تهوع، عرق سرد و در نهایت غش کردن همراه است. به محض بروز این علائم، تخت به حالت افقی بازگردانده می‌شود تا هوشیاری بیمار سریعاً بازگردد.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              ۵. مراقبت‌های لازم و اهمیت ویزیت پزشک در منزل تهران
            </h2>
            <p className="mb-4">
              پس از انجام تست تیلت، برخی بیماران ممکن است برای چند ساعت احساس خستگی یا ضعف داشته باشند. در این مرحله، مدیریت صحیح در محیط آرام منزل بسیار حائز اهمیت است.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              نقش خدمات ویزیت پزشک در منزل تهران در مدیریت سنکوپ:
            </h3>
            <ul className="list-disc list-inside mb-6 space-y-3 mr-4">
              <li>
                <strong>پایش علائم حیاتی پس از تست:</strong> پزشک می‌تواند با حضور در منزل، وضعیت فشار خون و ضربان قلب بیمار را در روزهای پس از تست بررسی کند تا از پایداری وضعیت او اطمینان حاصل یابد.
              </li>
              <li>
                <strong>تنظیم داروهای قلبی و عصبی:</strong> بر اساس نتیجه تست تیلت، ممکن است داروهای جدیدی (مانند داروهای افزایش دهنده حجم خون یا تنظیم کننده ضربان) تجویز شود. <a href="/doctor-visit" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</a> اجازه می‌دهد دوز این داروها با دقت و با توجه به واکنش‌های روزانه بیمار تنظیم شود.
              </li>
              <li>
                <strong>آموزش مانورهای پیشگیرانه:</strong> پزشک می‌تواند در محیط واقعی زندگی بیمار، آموزش‌های لازم برای جلوگیری از غش کردن (مانند نحوه صحیح بلند شدن یا انجام مانورهای فشاری عضلانی) را ارائه دهد.
              </li>
              <li>
                <strong>نمونه‌گیری دوره‌ای خون:</strong> بررسی سطح الکترولیت‌ها (مانند سدیم و پتاسیم) که در تکرار حملات سنکوپ نقش دارند، بدون نیاز به خروج بیمار از منزل انجام می‌شود.
              </li>
            </ul>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
              <p className="text-destructive font-semibold">
                ⚠️ هشدار مهم: اگر غش کردن ناگهانی همراه با درد قفسه سینه، تنگی نفس شدید، یا ضربان قلب نامنظم باشد، فوراً به اورژانس مراجعه کنید. خوددرمانی و عدم پیگیری علل سنکوپ می‌تواند خطرناک باشد.
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold mb-3 text-primary">
                نیاز به مشاوره تخصصی دارید؟
              </h3>
              <p className="mb-4">
                برای بررسی علل سرگیجه، غش کردن یا تفسیر دقیق نتایج تست تیلت، می‌توانید از خدمات ویزیت پزشک متخصص قلب در منزل تهران استفاده کنید.
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                تماس: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
              منابع (References)
            </h3>
            <ol className="list-decimal list-inside mb-6 space-y-2 mr-4 text-sm text-muted-foreground">
              <li>Tilt Table Test for Syncope Evaluation. American Heart Association (AHA).</li>
              <li>Pathophysiology of Vasovagal Syncope. Journal of the American College of Cardiology (JACC).</li>
              <li>Clinical practice guidelines for the diagnosis and management of syncope. European Society of Cardiology (ESC).</li>
              <li>Tilt-table testing: Indications and interpretation. Mayo Clinic Proceedings.</li>
            </ol>
          </div>

          <FAQSection faqs={faqs} />

          <RelatedArticles articles={relatedArticles} />
        </article>

        <PricingInfo />
      </main>

      <FloatingContact />
      <Footer />
    </div>
  );
};

export default TiltTableTestPage;
