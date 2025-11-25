import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import bloodPressureMeasurementImage from "@/assets/blood-pressure-measurement.jpg";
import normalBPImage from "@/assets/normal-blood-pressure.jpg";
import highBPImage from "@/assets/high-blood-pressure-control.jpg";
import cardiologyImage from "@/assets/cardiology-home-visit.jpg";

const BloodPressureMeasurementPage = () => {
  const phoneNumber = "09386117912";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "نحوه صحیح اندازه‌گیری فشار خون", url: "" }
  ];

  const relatedArticles = [
    {
      title: "فشار خون طبیعی: مقادیر استاندارد و نکات کلیدی",
      description: "آشنایی با مقادیر نرمال فشار خون و عوامل مؤثر بر آن",
      link: "/articles/normal-blood-pressure",
      image: normalBPImage,
      category: "قلب و عروق"
    },
    {
      title: "کنترل فشار خون بالا: راهکارهای دارویی و غیردارویی",
      description: "روش‌های علمی کنترل و مدیریت فشار خون بالا",
      link: "/articles/high-blood-pressure-control",
      image: highBPImage,
      category: "قلب و عروق"
    },
    {
      title: "ویزیت متخصص قلب و عروق در منزل",
      description: "دریافت خدمات تخصصی قلب و عروق در آسایش منزل",
      link: "/services/cardiology",
      image: cardiologyImage,
      category: "خدمات"
    }
  ];

  const faqItems = [
    {
      question: "چند بار در روز باید فشار خون را اندازه بگیریم؟",
      answer: "برای پایش دقیق، توصیه می‌شود دو بار در روز (یک بار صبح قبل از صبحانه و قبل از مصرف دارو، و یک بار عصر قبل از شام) فشار خون را اندازه‌گیری کنید. این کار باید حداقل به مدت ۱۰ روز متوالی ادامه یابد."
    },
    {
      question: "چرا باید ۵ دقیقه قبل از اندازه‌گیری استراحت کنیم؟",
      answer: "استراحت ۵ دقیقه‌ای به بدن اجازه می‌دهد که به حالت آرامش برسد و فشار خون به وضعیت طبیعی (پایه) خود بازگردد. فعالیت فیزیکی، استرس یا صحبت کردن می‌تواند فشار خون را به طور موقت افزایش دهد."
    },
    {
      question: "آیا دستگاه‌های مچی برای اندازه‌گیری فشار خون دقیق هستند؟",
      answer: "دستگاه‌های فشارسنج مچی معمولاً دقت کمتری نسبت به دستگاه‌های بازویی دارند. دستگاه‌های دیجیتال بازویی برای استفاده در منزل توصیه می‌شوند."
    },
    {
      question: "چگونه می‌توانم از صحت دستگاه فشارسنج خود مطمئن شوم؟",
      answer: "دستگاه خود را باید حداقل سالی یک‌بار توسط یک فرد حرفه‌ای کالیبره کنید. همچنین می‌توانید نتایج دستگاه خود را با نتایج اندازه‌گیری در مطب پزشک مقایسه کنید."
    },
    {
      question: "آیا باید هر دو بازو را اندازه بگیریم؟",
      answer: "در اولین بار، توصیه می‌شود فشار خون هر دو بازو اندازه‌گیری شود. اختلاف کمی (تا ۱۰ میلی‌متر جیوه) طبیعی است. برای اندازه‌گیری‌های بعدی، از بازویی استفاده کنید که فشار بالاتری نشان داده است."
    },
    {
      question: "نوید زندگی چگونه می‌تواند در پایش فشار خون کمک کند؟",
      answer: "نوید زندگی خدمات ویزیت متخصص قلب و عروق در منزل، آموزش نحوه صحیح اندازه‌گیری فشار خون، و اجاره دستگاه‌های مانیتورینگ را ارائه می‌دهد. با تماس با ۰۹۳۸۶۱۱۷۹۱۲ می‌توانید این خدمات را دریافت کنید."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="نحوه صحیح اندازه‌گیری فشار خون: پروتکل استاندارد و زمان‌بندی ۱۰ روزه | نوید زندگی"
        description="راهنمای کامل اندازه‌گیری دقیق فشار خون: آمادگی بیمار، وضعیت صحیح بدن، تکنیک استفاده از دستگاه و ثبت نتایج به مدت ۱۰ روز. ویزیت متخصص قلب در منزل"
        keywords="اندازه‌گیری فشار خون, نحوه صحیح گرفتن فشار خون, دستگاه فشارسنج, پایش فشار خون در منزل, ثبت فشار خون, متخصص قلب در منزل, کالیبراسیون فشارسنج"
        canonical="https://navidzendegi.com/articles/blood-pressure-measurement"
        ogImage={bloodPressureMeasurementImage}
        ogType="article"
        publishedTime="2025-01-15T10:00:00Z"
        modifiedTime="2025-01-15T10:00:00Z"
      />

      <ArticleSchema
        title="نحوه صحیح اندازه‌گیری فشار خون: پروتکل استاندارد و زمان‌بندی ۱۰ روزه"
        description="راهنمای کامل اندازه‌گیری دقیق فشار خون با رعایت پروتکل‌های پزشکی"
        publishedTime="2025-01-15T10:00:00Z"
        modifiedTime="2025-01-15T10:00:00Z"
        image={bloodPressureMeasurementImage}
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <h1 className="text-4xl font-bold mb-6 text-foreground">
          نحوه صحیح اندازه‌گیری فشار خون: پروتکل‌های استاندارد، زمان‌بندی ۱۰ روزه و ثبت دقیق نتایج
        </h1>

        <img
          src={bloodPressureMeasurementImage}
          alt="نحوه صحیح اندازه‌گیری فشار خون با دستگاه دیجیتال"
          className="w-full h-auto rounded-lg mb-8 shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>اندازه‌گیری فشار خون</strong> یک اقدام حیاتی برای تشخیص و مدیریت بیماری‌های قلبی-عروقی، به‌ویژه <strong>فشار خون بالا (Hypertension)</strong> است. اندازه‌گیری نادرست، چه در منزل و چه در مطب، می‌تواند منجر به تشخیص اشتباه یا تأخیر در درمان شود. رعایت دقیق <strong>پروتکل‌های استاندارد پزشکی</strong> در مورد آمادگی بیمار و تکنیک استفاده از دستگاه ضروری است.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
            آمادگی بیمار و زمان‌بندی (۱۰ تا ۳۰ دقیقه پیش از اندازه‌گیری)
          </h2>

          <p className="leading-relaxed mb-4">
            مهم‌ترین بخش اندازه‌گیری فشار خون، آمادگی قبل از انجام آن است. این نکات باید در هر بار اندازه‌گیری رعایت شوند:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            استراحت و آرامش
          </h3>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li>بیمار باید حداقل <strong>۵ دقیقه</strong> قبل از اندازه‌گیری، در یک محیط آرام و به دور از سر و صدا استراحت کند.</li>
            <li>در طول این مدت از صحبت کردن، تماشای تلویزیون یا کار با تلفن همراه خودداری شود.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            پرهیز از محرک‌ها
          </h3>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li>حداقل <strong>۳۰ دقیقه</strong> قبل از اندازه‌گیری، از مصرف کافئین (قهوه، چای، نوشابه)، سیگار کشیدن یا ورزش خودداری شود.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            وضعیت مثانه
          </h3>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li>مطمئن شوید که مثانه خالی است. مثانه پر می‌تواند فشار خون سیستولیک را ۱۰ تا ۱۵ میلی‌متر جیوه (mmHg) افزایش دهد.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            لباس مناسب
          </h3>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li>آستین لباس را تا بالای بازو بالا بزنید. کاف (بازوبند) نباید روی لباس یا پارچه ضخیم قرار بگیرد.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
            وضعیت صحیح بدن و تکنیک اندازه‌گیری
          </h2>

          <p className="leading-relaxed mb-4">
            رعایت وضعیت صحیح بدن در حین اندازه‌گیری برای ثبت دقیق، حیاتی است:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            ۱. پشتیبانی از پشت و پاها
          </h3>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li>بیمار باید روی یک صندلی نشسته باشد که <strong>پشتی</strong> دارد و پشت صاف است.</li>
            <li>پاها باید صاف روی زمین قرار بگیرند و <strong>نباید روی هم قرار داده شوند</strong> (این وضعیت می‌تواند فشار را ۲ تا ۸ mmHg افزایش دهد).</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            ۲. موقعیت بازو
          </h3>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li>بازو باید روی یک میز یا تکیه‌گاه قرار بگیرد به طوری که بازوبند در سطح <strong>قلب</strong> قرار گیرد.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            ۳. قرار دادن کاف (بازوبند)
          </h3>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li><strong>اندازه کاف:</strong> اندازه کاف باید متناسب با دور بازوی بیمار باشد. کاف کوچک‌تر از حد لازم، عدد فشار را <strong>بالاتر از واقعیت</strong> نشان می‌دهد.</li>
            <li>کاف باید دور بازو بسته شود به طوری که لبه پایین آن حدود ۲ تا ۳ سانتی‌متر بالای آرنج باشد.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            ۴. تکرار اندازه‌گیری
          </h3>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li>برای اطمینان از دقت، حداقل <strong>دو بار اندازه‌گیری</strong> انجام شود و بین دو اندازه‌گیری <strong>۱ تا ۲ دقیقه</strong> فاصله باشد. میانگین این دو عدد، به عنوان نتیجه نهایی ثبت می‌شود.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
            ثبت نتایج و زمان‌بندی استاندارد (۱۰ روز)
          </h2>

          <p className="leading-relaxed mb-4">
            ثبت نتایج در منزل یک جزء ضروری از تشخیص و کنترل فشار خون است و باید با رعایت موارد زیر صورت گیرد:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            مدت زمان ثبت
          </h3>
          <p className="leading-relaxed mb-4">
            برای ارائه یک تصویر دقیق و قابل اعتماد به پزشک، اندازه‌گیری‌ها باید حداقل به مدت <strong>۱۰ روز متوالی</strong> انجام و ثبت شوند.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            زمان‌بندی ثابت
          </h3>
          <p className="leading-relaxed mb-4">
            اندازه‌گیری‌ها باید در زمان‌های مشخص و ثابت انجام شوند تا نوسانات طبیعی فشار خون (مانند افزایش صبحگاهی) به درستی ارزیابی شود. بهترین زمان‌ها عبارت‌اند از:
          </p>
          <ul className="list-disc pr-6 mb-6 space-y-2">
            <li><strong>یک بار صبح:</strong> قبل از خوردن صبحانه و قبل از مصرف داروهای صبحگاهی.</li>
            <li><strong>یک بار عصر:</strong> قبل از خوردن شام (یا قبل از خواب).</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            ثبت دقیق
          </h3>
          <p className="leading-relaxed mb-6">
            نتایج فشار خون (سیستولیک و دیاستولیک)، ضربان قلب، و زمان دقیق اندازه‌گیری باید در یک دفترچه یا نرم‌افزار ثبت شود. این اطلاعات به پزشک کمک می‌کند تا روند فشار خون شما را به دقت ارزیابی کند و در صورت نیاز، درمان را تنظیم کند.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
            هشدارها و انتخاب دستگاه
          </h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            دستگاه‌های دیجیتال بازویی
          </h3>
          <p className="leading-relaxed mb-4">
            این دستگاه‌ها رایج‌ترین و قابل اعتمادترین نوع برای استفاده در منزل هستند. دستگاه‌های مچی دقت کمتری دارند و برای استفاده روزمره توصیه نمی‌شوند.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            کالیبراسیون
          </h3>
          <p className="leading-relaxed mb-4">
            دستگاه‌های فشارسنج دیجیتال باید به طور منظم (حداقل سالی یک‌بار) توسط یک فرد حرفه‌ای بررسی و کالیبره شوند تا از دقت نتایج اطمینان حاصل شود.
          </p>

          <div className="bg-amber-50 border-r-4 border-amber-500 p-6 my-8 rounded">
            <p className="text-amber-900 font-semibold mb-2">⚠️ هشدار مهم:</p>
            <p className="text-amber-800">
              اندازه‌گیری فشار خون به تنهایی برای تشخیص یا تغییر درمان کافی نیست. حتماً نتایج ثبت شده را با پزشک متخصص در میان بگذارید. هرگز بدون مشورت با پزشک، داروهای خود را تغییر ندهید یا قطع نکنید.
            </p>
          </div>

          <div className="bg-primary/5 border-r-4 border-primary p-8 my-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              مراقبت تخصصی از سلامت قلب و عروق در منزل
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              برای اطمینان از صحت اندازه‌گیری و تشخیص دقیق وضعیت فشار خون، <Link to="/services/cardiology" className="text-primary hover:underline font-semibold">ویزیت متخصص قلب و عروق در منزل</Link> را رزرو کنید تا ضمن معاینه کامل، نحوه صحیح استفاده از دستگاه فشارسنج شما را آموزش دهند.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              همچنین برای پایش مستمر، می‌توانید <Link to="/services/medical-equipment-rental" className="text-primary hover:underline font-semibold">دستگاه مانیتورینگ فشار خون</Link> را از طریق نوید زندگی اجاره کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                size="lg"
                className="text-lg"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Phone className="ml-2 h-5 w-5" />
                تماس با {phoneNumber}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link to="/services/cardiology">
                  خدمات قلب و عروق
                </Link>
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
            منابع
          </h2>
          <ol className="list-decimal pr-6 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>American Heart Association (AHA).</strong> (2019). <em>Guidelines for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults</em>.
            </li>
            <li>
              <strong>Pickering, T. G., et al.</strong> (2005). Recommendations for blood pressure measurement in humans and experimental animals: Part 1: blood pressure measurement in humans. <em>Hypertension</em>, 45(1), 142-161.
            </li>
            <li>
              <strong>O'Brien, E., et al.</strong> (2010). The European Society of Hypertension International Protocol for the validation of blood pressure measuring devices in adults. <em>Blood Pressure Monitoring</em>, 15(1), 23-30.
            </li>
          </ol>
        </div>
      </article>

      <div className="container mx-auto px-4 max-w-4xl mb-12">
        <FAQSection faqs={faqItems} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl mb-12">
        <RelatedArticles articles={relatedArticles} />
      </div>
    </ArticleLayout>
  );
};

export default BloodPressureMeasurementPage;
