import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import LazyImage from "@/components/LazyImage";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import airPollutionImage from "@/assets/air-pollution-article.jpg";
import heartAttackImage from "@/assets/heart-palpitations.jpg";
import strokeImage from "@/assets/af-stroke-risk-article.jpg";
import highBPImage from "@/assets/high-blood-pressure-control.jpg";

const AirPollutionEffectsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تأثیر آلودگی هوا بر قلب و ریه", url: "" }
  ];

  const relatedArticles = [
    {
      title: "علائم سکته قلبی: تشخیص زودهنگام و اقدامات فوری",
      description: "شناخت علائم هشداردهنده سکته قلبی و اهمیت مراجعه فوری به پزشک",
      link: "/articles/heart-attack-symptoms",
      image: heartAttackImage,
      category: "قلب و عروق"
    },
    {
      title: "علائم سکته مغزی و اهمیت طلایی زمان",
      description: "شناسایی سریع نشانه‌های سکته مغزی و اهمیت درمان فوری",
      link: "/articles/stroke-symptoms",
      image: strokeImage,
      category: "مغز و اعصاب"
    },
    {
      title: "کنترل فشار خون بالا: راهکارهای دارویی و غیردارویی",
      description: "روش‌های علمی کنترل و مدیریت فشار خون بالا",
      link: "/articles/high-blood-pressure-control",
      image: highBPImage,
      category: "قلب و عروق"
    }
  ];

  const faqs = [
    {
      question: "شاخص AQI چیست و اعداد آن چه معنایی دارند؟",
      answer: "شاخص کیفیت هوا (AQI) معیاری استاندارد برای اندازه‌گیری آلودگی هواست. AQI زیر 50 هوای خوب، 51-100 متوسط، 101-150 ناسالم برای گروه‌های حساس، 151-200 ناسالم برای همه، 201-300 بسیار ناسالم و بالای 301 خطرناک تلقی می‌شود. در AQI بالای 150، افراد باید از فعالیت‌های خارج از منزل خودداری کنند."
    },
    {
      question: "ذرات PM2.5 چگونه وارد جریان خون می‌شوند؟",
      answer: "ذرات PM2.5 به دلیل قطر بسیار کوچک (کمتر از 2.5 میکرومتر)، از سد دفاعی راه‌های تنفسی عبور کرده و به عمیق‌ترین قسمت ریه‌ها (آلوئول‌ها) می‌رسند. در آنجا، این ذرات از دیواره نازک آلوئول‌ها عبور کرده و مستقیماً وارد مویرگ‌های خونی می‌شوند و با جریان خون به سراسر بدن منتقل می‌شوند."
    },
    {
      question: "آیا آلودگی هوا می‌تواند باعث سکته قلبی شود؟",
      answer: "بله، آلودگی هوا یک عامل خطر مستقیم برای سکته قلبی است. ذرات ریز با ایجاد التهاب سیستمیک، آسیب به دیواره عروق، افزایش فشار خون و تشکیل لخته‌های خونی، خطر سکته قلبی را به طور قابل توجهی افزایش می‌دهند. تحقیقات نشان می‌دهند در روزهای با آلودگی بالا، میزان بستری شدن به دلیل حوادث قلبی افزایش می‌یابد."
    },
    {
      question: "آیا آلودگی هوا بر مغز تأثیر می‌گذارد؟",
      answer: "بله، ذرات ریز می‌توانند از سد خونی-مغزی عبور کنند و وارد بافت مغز شوند. مطالعات علمی نشان داده‌اند که قرار گرفتن مزمن در معرض آلودگی هوا با افزایش خطر زوال عقل (دمانس)، آلزایمر، سکته مغزی و کاهش عملکرد شناختی مرتبط است."
    },
    {
      question: "چه زمانی باید از دستگاه اکسیژن ساز در منزل استفاده کرد؟",
      answer: "افرادی که بیماری‌های ریوی مزمن مانند COPD یا آسم شدید دارند و در روزهای با آلودگی بالای هوا دچار افت اکسیژن خون می‌شوند، ممکن است نیاز به استفاده موقت از اکسیژن ساز در منزل داشته باشند. این تصمیم باید توسط پزشک متخصص و بر اساس اندازه‌گیری اکسیژن خون گرفته شود."
    },
    {
      question: "در چه سطحی از AQI باید از فعالیت بیرون از خانه خودداری کرد؟",
      answer: "زمانی که AQI به بالای 150 برسد، همه افراد باید فعالیت‌های خارج از منزل را محدود کنند. افراد در گروه‌های حساس (بیماران قلبی، تنفسی، کودکان و سالمندان) باید حتی از AQI 101 احتیاط کنند. در AQI بالای 200، همه باید در منزل بمانند و از ماسک‌های N95 در صورت ضرورت خروج استفاده کنند."
    }
  ];

  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  return (
    <ArticleLayout>
      <SEOHead
        title="تأثیر آلودگی هوا بر قلب و ریه: مکانیسم‌های آسیب و شاخص AQI | نوید زندگی"
        description="آلودگی هوا چگونه بر قلب، ریه، مغز و سایر اندام‌ها تأثیر می‌گذارد؟ شناخت شاخص AQI، مکانیسم‌های آسیب PM2.5 و راهکارهای محافظت با ویزیت متخصص قلب و ریه در منزل"
        keywords="آلودگی هوا، تأثیر آلودگی هوا بر قلب، PM2.5، شاخص AQI، ذرات معلق، آسیب ریه، سکته قلبی، التهاب سیستمیک، دستگاه اکسیژن ساز، ویزیت متخصص قلب در منزل، آلودگی هوا و سکته مغزی"
        canonical="https://navidzendegi.com/articles/air-pollution-effects"
        ogType="article"
        publishedTime="2025-01-20"
        modifiedTime="2025-01-20"
      />

      <ArticleSchema
        title="تأثیر آلودگی هوا بر کل بدن: مکانیسم‌های آسیب‌رسان قلبی-ریوی و شاخص AQI"
        description="بررسی جامع اثرات آلودگی هوا بر سیستم قلبی-عروقی، تنفسی، مغز و سایر اندام‌ها، مکانیسم‌های ورود ذرات PM2.5 به خون و راهنمای شاخص کیفیت هوا"
        publishedTime="2025-01-20"
        modifiedTime="2025-01-20"
        image={airPollutionImage}
      />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              تأثیر آلودگی هوا بر کل بدن: مکانیسم‌های آسیب‌رسان و ریسک‌های قلبی-ریوی و دامنه خطر AQI
            </h1>

            <LazyImage
              src={airPollutionImage}
              alt="تأثیرات آلودگی هوا بر سلامت قلب و ریه"
              className="w-full rounded-lg my-8"
            />

            <p className="text-lg leading-relaxed text-muted-foreground">
              آلودگی هوا یک بحران سلامت عمومی است که اثرات آن فراتر از سیستم تنفسی است و بر تقریباً تمام اندام‌های حیاتی بدن تأثیر می‌گذارد. ذرات ریز و مواد شیمیایی سمی از طریق ریه‌ها جذب جریان خون می‌شوند و باعث التهاب سیستمیک (سراسری) و آسیب‌های جدی به قلب، عروق، و مغز می‌گردند. سازمان بهداشت جهانی (WHO) آلودگی هوا را به عنوان یکی از ده تهدید اصلی سلامت جهانی معرفی کرده است.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              اجزای اصلی آلودگی هوا و نحوه ورود آن‌ها به بدن
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              مهم‌ترین عوامل آسیب‌رسان در آلودگی هوا، ذرات ریزی هستند که قابلیت نفوذ بالایی دارند:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              ذرات معلق (Particulate Matter - PM)
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              PM10 و PM2.5: این ذرات ریزتر (به ویژه PM2.5) به دلیل قطر کوچک، به عمق ریه‌ها نفوذ کرده و وارد جریان خون می‌شوند. آن‌ها منبع اصلی التهاب سیستمیک هستند. ذرات PM2.5 کوچک‌تر از موی انسان هستند و توانایی عبور از سدهای دفاعی طبیعی بدن را دارند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              گازهای سمی
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              شامل دی‌اکسید نیتروژن (NO₂)، دی‌اکسید گوگرد (SO₂) و ازن (O₃) که مستقیماً به بافت‌های تنفسی آسیب می‌رسانند و واکنش‌های التهابی شدیدی در ریه‌ها ایجاد می‌کنند.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              شاخص کیفیت هوا (AQI) و دامنه خطر عددی
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              شاخص کیفیت هوا (Air Quality Index - AQI) یک مقیاس استاندارد برای اطلاع‌رسانی به عموم در مورد میزان آلودگی و پیامدهای سلامتی آن است. این شاخص معمولاً بر اساس غلظت آلاینده‌های اصلی مانند PM2.5 و PM10 اندازه‌گیری می‌شود:
            </p>

            <div className="my-6 space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 dark:bg-green-950/20">
                <h4 className="font-bold text-foreground">0-50: خوب (Good)</h4>
                <p className="text-sm text-muted-foreground">کیفیت هوا رضایت‌بخش است و خطر کمی دارد.</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 dark:bg-yellow-950/20">
                <h4 className="font-bold text-foreground">51-100: متوسط (Moderate)</h4>
                <p className="text-sm text-muted-foreground">کیفیت هوا قابل قبول است؛ اما افراد بسیار حساس باید احتیاط کنند.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 dark:bg-orange-950/20">
                <h4 className="font-bold text-foreground">101-150: ناسالم برای گروه‌های حساس</h4>
                <p className="text-sm text-muted-foreground">افراد مبتلا به بیماری‌های تنفسی، قلبی، کودکان و سالمندان باید از فعالیت‌های طولانی‌مدت در فضای باز خودداری کنند.</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 dark:bg-red-950/20">
                <h4 className="font-bold text-foreground">151-200: ناسالم (Unhealthy)</h4>
                <p className="text-sm text-muted-foreground">همه ممکن است عوارض جانبی را تجربه کنند. گروه‌های حساس باید فعالیت‌های خارج از منزل را محدود کنند.</p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4 py-2 bg-purple-50 dark:bg-purple-950/20">
                <h4 className="font-bold text-foreground">201-300: بسیار ناسالم (Very Unhealthy)</h4>
                <p className="text-sm text-muted-foreground">هشدار سلامتی! افزایش خطر حوادث جدی برای عموم مردم.</p>
              </div>

              <div className="border-l-4 border-red-900 pl-4 py-2 bg-red-100 dark:bg-red-950/40">
                <h4 className="font-bold text-foreground">301+: خطرناک (Hazardous)</h4>
                <p className="text-sm text-muted-foreground">وضعیت اضطراری. همه باید از فعالیت‌های خارج از منزل اجتناب کنند.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              آسیب به سیستم قلبی-ریوی (Cardiopulmonary)
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              مخرب‌ترین اثرات آلودگی هوا بر روی ریه‌ها و قلب متمرکز است. این دو سیستم به طور مستقیم در معرض آلاینده‌ها قرار می‌گیرند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              سیستم قلبی-عروقی
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              سیستم قلبی-عروقی به طور مستقیم و شدیدترین تأثیر را از آلودگی هوا می‌پذیرد. ذرات ریز PM2.5 که به جریان خون می‌رسند، مجموعه‌ای از واکنش‌های زنجیره‌ای التهابی را آغاز می‌کنند که شامل موارد زیر است:
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>التهاب سیستمیک و استرس اکسیداتیو:</strong> ورود ذرات ریز منجر به پاسخ شدید التهابی و افزایش تولید رادیکال‌های آزاد در بدن می‌شود. این التهاب به بافت عروق خونی آسیب می‌رساند و زمینه را برای بیماری‌های قلبی-عروقی فراهم می‌کند.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>آسیب به دیواره عروق (اختلال عملکرد اندوتلیال):</strong> التهاب باعث آسیب به اندوتلیوم (لایه داخلی رگ‌ها) شده و توانایی عروق را در گشاد شدن طبیعی و تنظیم جریان خون مختل می‌کند. این امر زمینه را برای <Link to="/articles/high-blood-pressure-control" className="text-primary hover:underline">افزایش فشار خون</Link> فراهم می‌کند.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>افزایش خطر تشکیل لخته:</strong> التهاب باعث چسبنده‌تر شدن خون و فعال شدن پلاکت‌ها می‌شود. این وضعیت، احتمال تشکیل لخته‌های خونی را به شدت بالا می‌برد که می‌تواند منجر به <Link to="/articles/heart-attack-symptoms" className="text-primary hover:underline">سکته قلبی</Link> یا <Link to="/articles/stroke-symptoms" className="text-primary hover:underline">سکته مغزی</Link> شود.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>آریتمی‌های قلبی:</strong> آلودگی هوا می‌تواند باعث تحریک سیستم عصبی خودکار قلب شود و احتمال بروز ضربان‌های نامنظم (آریتمی) را در افراد مستعد افزایش دهد.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              سیستم تنفسی (Respiratory System)
            </h3>

            <p className="leading-relaxed text-muted-foreground">
              <strong>نفوذ عمیق:</strong> ذرات PM2.5 و گازهای سمی به عمیق‌ترین قسمت‌های ریه (آلوئول‌ها) نفوذ کرده و باعث التهاب حاد و مزمن می‌شوند. این التهاب مزمن می‌تواند به فیبروز ریوی و کاهش دائمی عملکرد تنفسی منجر شود.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>تشدید بیماری‌های مزمن:</strong> آلودگی هوا عامل تشدید حملات <Link to="/articles/asthma-treatment" className="text-primary hover:underline">آسم</Link>، بیماری مزمن انسدادی ریه (COPD) و برونشیت مزمن است. بیماران مبتلا به این بیماری‌ها در روزهای با آلودگی بالا با افزایش شدید علائم مواجه می‌شوند.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>کاهش عملکرد ریه:</strong> قرار گرفتن طولانی‌مدت در معرض آلودگی، به کاهش تدریجی ظرفیت ریه‌ها و افزایش آسیب‌پذیری در برابر عفونت‌ها منجر می‌شود.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              تأثیرات گسترده بر مغز، کلیه‌ها و پوست
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              آلودگی هوا بر سلامت اندام‌های انتهایی نیز تأثیر می‌گذارد:
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>سیستم عصبی مرکزی (مغز):</strong> ذرات ریز می‌توانند از سد خونی-مغزی عبور کرده و وارد بافت مغز شوند. مطالعات نشان می‌دهند قرار گرفتن در معرض آلودگی هوا با افزایش خطر زوال عقل (Dementia)، آلزایمر و تسریع کاهش عملکرد شناختی مرتبط است.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>کلیه‌ها:</strong> التهاب سیستمیک ناشی از آلودگی، به کاهش عملکرد کلیه‌ها و افزایش خطر ابتلا یا پیشرفت بیماری مزمن کلیوی کمک می‌کند. این آسیب از طریق آسیب به عروق کوچک کلیه‌ها صورت می‌گیرد.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>پوست:</strong> آلاینده‌ها می‌توانند به سد دفاعی پوست آسیب برسانند، باعث افزایش تولید رادیکال‌های آزاد، پیری زودرس پوست، و تشدید بیماری‌های التهابی مانند اگزما شوند.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              مدیریت ریسک و نیاز به تجهیزات تنفسی در منزل
            </h2>

            <p className="leading-relaxed text-muted-foreground">
              در روزهای اوج آلودگی هوا، مدیریت سلامتی و محافظت از سیستم تنفسی اهمیت ویژه‌ای دارد:
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>کاهش مواجهه:</strong> ماندن در منزل، استفاده از دستگاه‌های تصفیه هوا و ماسک‌های تنفسی مناسب (N95) هنگام خروج ضروری است. پنجره‌های خانه را در ساعات اوج آلودگی بسته نگه دارید.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              <strong>حمایت تنفسی در منزل:</strong> در بیمارانی که به دلیل تشدید بیماری‌های ریوی ناشی از آلودگی، دچار افت اکسیژن خون می‌شوند، استفاده موقت از تجهیزات حمایتی ضروری است. خدماتی مانند <Link to="/services/medical-equipment-rental" className="text-primary hover:underline">اجاره دستگاه اکسیژن ساز</Link> یا دستگاه بای‌پپ (BiPAP) در منزل، می‌تواند به پایداری وضعیت تنفسی بیمار کمک کند.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/20 border-r-4 border-amber-500 p-6 my-8 rounded">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                ⚠️ هشدار مهم
              </h3>
              <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                هرگز بدون مشاوره با پزشک متخصص اقدام به استفاده از دستگاه‌های تنفسی نکنید. تنظیم نادرست دستگاه یا استفاده بی‌مورد می‌تواند عوارض جدی داشته باشد. همیشه قبل از استفاده از هرگونه تجهیزات پزشکی با متخصص مشورت کنید.
              </p>
            </div>

            <div className="bg-primary/5 border-r-4 border-primary p-6 my-8 rounded">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                تماس فوری برای مشاوره تخصصی
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                در روزهایی که AQI در محدوده ناسالم یا خطرناک قرار دارد، از سلامت قلب و ریه خود در خانه محافظت کنید. برای <Link to="/cardiology" className="text-primary hover:underline font-semibold">ویزیت متخصص قلب و عروق</Link> یا متخصص ریه در منزل و هماهنگی جهت <Link to="/services/medical-equipment-rental" className="text-primary hover:underline font-semibold">اجاره دستگاه‌های تنفسی</Link> (مانند اکسیژن ساز یا بای‌پپ)، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <button
                onClick={handleCall}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                تماس: 09386117912
              </button>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
              منابع (References)
            </h3>

            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>World Health Organization (WHO). (2021). Ambient (outdoor) air pollution: key facts.</li>
              <li>U.S. Environmental Protection Agency (EPA). (2023). Technical Assistance Document for the Reporting of Daily Air Quality - the Air Quality Index (AQI).</li>
              <li>Pope, C. A., et al. (2004). Fine particulate air pollution and cardiovascular mortality: a systematic review and meta-analysis. JAMA, 291(9), 1070-1077.</li>
              <li>Power, M. C., et al. (2016). Traffic-related air pollution and the risk of dementia and stroke in older adults. JAMA Internal Medicine, 176(2), 253-260.</li>
            </ol>
          </article>

          <div className="mt-12">
            <FAQSection faqs={faqs} />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          <div className="mt-12">
            <PricingInfo />
          </div>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default AirPollutionEffectsPage;
