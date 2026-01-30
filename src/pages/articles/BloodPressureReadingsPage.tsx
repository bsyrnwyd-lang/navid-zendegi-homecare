import { Link } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import bloodPressureReadingsImage from "@/assets/blood-pressure-readings.jpg";
import bloodPressureMeasurementImage from "@/assets/blood-pressure-measurement.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";
import normalBloodPressureImage from "@/assets/normal-blood-pressure.jpg";

const BloodPressureReadingsPage = () => {
  const publishDate = "1404/11/11";
  const isoPublishDate = "2026-01-30";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "راهنمای کنترل فشار خون با دستگاه خانگی", url: "/articles/blood-pressure-readings" }
  ];

  const faqs = [
    {
      question: "آیا دستگاه فشارسنج مچی دقیق است؟",
      answer: "دستگاه‌های مچی به شدت به وضعیت قرارگیری دست حساس هستند و معمولاً اعداد را بالاتر یا پایین‌تر نشان می‌دهند. پزشکان فشارسنج‌های بازویی را به دلیل هم‌سطح بودن با قلب، استاندارد طلایی برای پایش خانگی می‌دانند."
    },
    {
      question: "چرا فشار خون من هر بار متفاوت است؟",
      answer: "فشار خون در طول روز نوسان طبیعی دارد. عواملی مثل مثانه پر، صحبت کردن، وضعیت پاها، مصرف چای و قهوه، استرس و فعالیت بدنی می‌توانند عدد را تغییر دهند. رعایت پروتکل صحیح اندازه‌گیری (قانون ۵ دقیقه) این نوسان‌ها را کاهش می‌دهد."
    },
    {
      question: "چند بار در روز باید فشار خون را اندازه بگیرم؟",
      answer: "توصیه می‌شود روزی دو بار (صبح قبل از صبحانه و عصر) فشار خون را یادداشت کنید. این جدول یک‌هفته‌ای به پزشک کمک می‌کند تا دقیق‌ترین دوز دارو را تنظیم کند."
    },
    {
      question: "آیا می‌توانم خودم دوز داروی فشار خون را تغییر دهم؟",
      answer: "هرگز! تغییر خودسرانه دوز دارو بر اساس اعداد دستگاه خانگی می‌تواند خطرناک باشد. حتماً با پزشک متخصص مشورت کنید. خدمات ویزیت متخصص در منزل نوید زندگی این امکان را فراهم می‌کند."
    },
    {
      question: "چطور بفهمم دستگاه فشارسنج من درست کار می‌کند؟",
      answer: "متخصص قلب در زمان ویزیت در منزل، فشار خون شما را با دستگاه تخصصی جیوه‌ای یا عقربه‌ای چک کرده و آن را با عدد دستگاه خانگی مقایسه می‌کند تا میزان خطای دستگاه شما مشخص شود."
    }
  ];

  const relatedArticles = [
    {
      title: "روش صحیح اندازه‌گیری فشار خون در منزل",
      description: "راهنمای کامل اندازه‌گیری دقیق فشار خون با دستگاه‌های دیجیتال و نکات مهم برای نتایج صحیح",
      image: bloodPressureMeasurementImage,
      link: "/articles/blood-pressure-measurement",
      category: "سلامت عمومی"
    },
    {
      title: "فشار خون بالا چه علائمی دارد و چگونه باید کنترل شود؟",
      description: "فشار خون بالا معمولاً بدون علامت است اما می‌تواند خطرناک باشد. راهنمای کامل علائم و کنترل",
      image: highBloodPressureImage,
      link: "/articles/high-blood-pressure-control",
      category: "قلب و عروق"
    },
    {
      title: "فشار خون طبیعی چقدر است؟",
      description: "راهنمای کامل مقادیر طبیعی فشار خون سیستولیک و دیاستولیک در سنین مختلف",
      image: normalBloodPressureImage,
      link: "/articles/normal-blood-pressure",
      category: "سلامت عمومی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="راهنمای کنترل فشار خون با دستگاه‌های خانگی | چرا اعداد اشتباه هستند؟"
        description="آموزش روش صحیح استفاده از فشارسنج دیجیتال، اشتباهات رایج در اندازه‌گیری، انتخاب دستگاه بازویی یا مچی، و خدمات کالیبره کردن دستگاه توسط متخصص قلب در منزل."
        keywords="فشارسنج دیجیتال, روش صحیح گرفتن فشار خون, ویزیت متخصص قلب در منزل, اکو در منزل, نوار قلب در منزل, فشار خون بالا, نوید زندگی"
        canonical="https://navidzendegi.com/articles/blood-pressure-readings"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="راهنمای کنترل فشار خون با دستگاه‌های خانگی؛ چرا اعداد گاهی اشتباه هستند؟"
        description="آموزش روش صحیح استفاده از فشارسنج دیجیتال، اشتباهات رایج در اندازه‌گیری فشار خون، و خدمات کالیبره کردن دستگاه توسط متخصص قلب در منزل"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={bloodPressureReadingsImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              راهنمای کامل کنترل فشار خون با دستگاه‌های خانگی؛ چرا اعداد گاهی اشتباه هستند؟
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: {publishDate}
            </p>
          </header>

          <img
            src={bloodPressureReadingsImage}
            alt="راهنمای کنترل فشار خون با دستگاه خانگی"
            className="w-full h-auto rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              فشار خون بالا یا همان «قاتل خاموش»، اگر به درستی پایش نشود، ریشه اصلی سکته‌های مغزی و قلبی است. امروزه در اکثر خانه‌ها یک دستگاه فشارسنج دیجیتالی وجود دارد، اما سوال اینجاست: آیا عددی که دستگاه نشان می‌دهد همیشه درست است؟ و چطور باید بر اساس این اعداد، دارو مصرف کرد؟
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              ما در مرکز نوید زندگی متوجه شده‌ایم که بسیاری از مراجعات اورژانسی به دلیل اشتباه در اندازه‌گیری فشار خون یا خوددرمانی بر اساس دستگاه‌های خانگی است. در این مقاله، اصول حرفه‌ای پایش فشار خون در منزل را به شما آموزش می‌دهیم.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز بدون مشورت با پزشک، دوز داروی فشار خون خود را تغییر ندهید. خوددرمانی بر اساس اعداد دستگاه خانگی می‌تواند خطرناک باشد.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۱. انتخاب دستگاه مناسب: بازویی یا مچی؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              پزشکان متخصص قلب در ویزیت‌های منزل همواره بر یک نکته تأکید دارند:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>فشارسنج‌های بازویی:</strong> به دلیل هم‌سطح بودن با قلب، دقت بسیار بالاتری دارند و استاندارد طلایی برای پایش خانگی هستند.</li>
              <li><strong>فشارسنج‌های مچی:</strong> به شدت به وضعیت قرارگیری دست حساس هستند و معمولاً اعداد را بالاتر یا پایین‌تر نشان می‌دهند. این دستگاه‌ها برای بیماران با شرایط خاص یا صرفاً جهت تخمین کلی مناسب‌اند.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۲. اشتباهات رایجی که فشار خون شما را کاذب نشان می‌دهد
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              اگر این نکات را رعایت نکنید، ممکن است بی‌دلیل دوز داروی خود را تغییر دهید:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>مثانه پر:</strong> جالب است بدانید مثانه پر می‌تواند فشار خون را ۱۰ تا ۱۵ درجه به صورت کاذب بالا ببرد.</li>
              <li><strong>صحبت کردن:</strong> حرف زدن در حین اندازه‌گیری یا بلافاصله قبل از آن، عدد را افزایش می‌دهد.</li>
              <li><strong>وضعیت پاها:</strong> انداختن پاها روی هم (چهارزانو) باعث تجمع خون در پا و تغییر عدد فشار می‌شود.</li>
              <li><strong>کاف نامناسب:</strong> اگر بازوبند دستگاه (کاف) خیلی کوچک یا خیلی بزرگ باشد، عدد کاملاً اشتباه خواهد بود.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۳. پروتکل صحیح اندازه‌گیری در منزل (قانون ۵ دقیقه)
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              برای اینکه دقیق‌ترین عدد را داشته باشید، این مراحل را دنبال کنید:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li>۵ دقیقه قبل از تست، در محیطی آرام بنشینید و تکیه دهید.</li>
              <li>۳۰ دقیقه قبل از تست، از مصرف سیگار، چای، قهوه و فعالیت بدنی خودداری کنید.</li>
              <li>بازو باید لخت و هم‌سطح قلب روی میز قرار گیرد.</li>
              <li>دستگاه را روشن کرده و در حین کار با گوشی موبایل کار نکنید.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۴. چه زمانی عدد دستگاه خانگی نیاز به بررسی تخصصی دارد؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              اگر دستگاه خانگی شما اعدادی بالاتر از ۱۴۰ روی ۹۰ را به طور مداوم نشان می‌دهد، یا اگر اعداد به شدت نوسانی هستند، زمان آن رسیده که از خدمات تخصصی نوید زندگی استفاده کنید:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              الف) کالیبره کردن دستگاه با ویزیت در منزل
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              متخصص قلب ما در زمان <Link to="/services/specialist-doctor" className="text-primary hover:underline">ویزیت در منزل</Link>، فشار خون شما را با دستگاه تخصصی جیوه‌ای یا عقربه‌ای چک کرده و آن را با عدد دستگاه خانگی شما مقایسه می‌کند تا میزان خطای دستگاه شما مشخص شود.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ب) نوار قلب (ECG) در منزل؛ بررسی اثرات فشار خون
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              فشار خون بالا به مرور باعث تغییر در ریتم قلب و ضخیم شدن دیواره آن می‌شود. انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب در منزل</Link> نشان می‌دهد که آیا این اعداد بالا، عملاً به سیستم برقی قلب شما آسیب زده‌اند یا خیر.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ج) اکوکاردیوگرافی (اکو) در منزل
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              دقیق‌ترین راه برای فهمیدن اینکه فشار خون بالا چه بلایی سر قلب آورده، <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link> است. در اکو می‌توانیم "فشار پنهان" را در حفرات قلب ببینیم و متوجه شویم که آیا نیاز به تغییر فوری دارو وجود دارد یا خیر.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۵. دفترچه ثبت فشار خون؛ بهترین هدیه برای پزشک شما
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              به جای اینکه فقط یک بار فشار را چک کنید، به مدت یک هفته، روزی دو بار (صبح و عصر) فشار خود را یادداشت کنید. این جدول به پزشک متخصص نوید زندگی کمک می‌کند تا در زمان ویزیت، بهترین و دقیق‌ترین دوز دارو را برای شما تنظیم کند و از افت یا فشار خون ناگهانی جلوگیری نماید.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نتیجه‌گیری
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              دستگاه‌های خانگی ابزارهای مفیدی هستند، اما نباید جایگزین تشخیص متخصص شوند. برای اطمینان از صحت درمان، پایش دوره‌ای توسط تیم متخصص ضرورت دارد. مرکز نوید زندگی با آوردن تجهیزات تشخیصی و پزشک متخصص به بالین شما، اطمینان حاصل می‌کند که فشار خون شما نه تنها اندازه گرفته می‌شود، بلکه به درستی "درمان" می‌شود.
            </p>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                درخواست ویزیت متخصص قلب در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای کالیبره کردن دستگاه فشارسنج، انجام نوار قلب و اکو در منزل، و تنظیم دقیق داروهای فشار خون با ما تماس بگیرید:
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
                <li>• American Heart Association (AHA): How to Monitor Blood Pressure at Home</li>
                <li>• Mayo Clinic: Get the most out of home blood pressure monitoring</li>
                <li>• Hypertension Journal: Validation of home blood pressure monitoring devices</li>
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

export default BloodPressureReadingsPage;
