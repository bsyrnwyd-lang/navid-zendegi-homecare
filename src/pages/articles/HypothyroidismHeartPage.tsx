import { Link } from "react-router-dom";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

import hypothyroidismHeartImage from "@/assets/hypothyroidism-heart-article.jpg";
import levothyroxineImage from "@/assets/levothyroxine-article.jpg";
import anemiaHeartImage from "@/assets/anemia-heart-article.jpg";
import legEdemaImage from "@/assets/leg-edema-article.jpg";

const HypothyroidismHeartPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "کم‌کاری تیروئید و قلب", url: "/articles/hypothyroidism-heart" }
  ];

  const relatedArticles = [
    {
      title: "لووتیروکسین؛ داروی تیروئید و نکات قلبی آن",
      description: "تاریخچه، مکانیسم اثر و نکات پایش قلبی در مصرف لووتیروکسین",
      image: levothyroxineImage,
      link: "/articles/levothyroxine",
      category: "داروها"
    },
    {
      title: "کم‌خونی و قلب؛ وقتی فقر آهن قلب را خسته می‌کند",
      description: "رابطه کم‌خونی با تپش قلب و نارسایی قلبی و آزمایش‌های در منزل",
      image: anemiaHeartImage,
      link: "/articles/anemia-heart",
      category: "قلب و عروق"
    },
    {
      title: "ورم پا؛ زنگ خطر خاموش قلب یا مشکل ساده؟",
      description: "رابطه ورم پا با کم‌کاری تیروئید و نارسایی قلب و تشخیص در منزل",
      image: legEdemaImage,
      link: "/articles/leg-edema",
      category: "قلب و عروق"
    }
  ];

  const faqItems = [
    {
      question: "کم‌کاری تیروئید چگونه قلب را تحت تأثیر قرار می‌دهد؟",
      answer: "هورمون تیروئید (T4 و T3) سرعت کار قلب، قدرت انقباض آن و انعطاف عروق را تنظیم می‌کند. در کم‌کاری تیروئید ضربان قلب کند می‌شود، قدرت پمپاژ افت می‌کند، کلسترول خون بالا می‌رود و دیواره عروق سفت‌تر می‌شود؛ مجموعه این تغییرات خطر آترواسکلروز (گرفتگی عروق) و در موارد شدید، پریکارد (تجمع مایع دور قلب) را افزایش می‌دهد."
    },
    {
      question: "چه علائمی نشان می‌دهد کم‌کاری تیروئید قلب من را درگیر کرده است؟",
      answer: "خستگی شدید و غیرعادی، ضربان آهسته قلب (کمتر از ۶۰ در دقیقه)، تنگی نفس هنگام فعالیت، ورم پا و صورت (به‌ویژه ورم صبحگاهی)، خشکی پوست، ریزش مو، یبوست، افزایش وزن بی‌دلیل و حساسیت به سرعت. اگر چند مورد از این‌ها را با هم دارید، آزمایش TSH ساده می‌تواند تشخیص را روشن کند."
    },
    {
      question: "آزمایش تیروئید در منزل هم قابل انجام است؟",
      answer: "بله. پرستار آموزش‌دیده در منزل شما نمونه خون می‌گیرد و آزمایش TSH، Free T4، Free T3، آنتی‌بادی تیروئید (Anti-TPO)، آزمایش کامل خون و پروفایل چربی انجام می‌شود؛ بدون ترافیک و بدون مراجعه به آزمایشگاه."
    },
    {
      question: "اگر تیروئیدم کم‌کار باشد، قلبم را هم باید چک کنم؟",
      answer: "بله، به‌ویژه اگر سن بالای ۵۰ سال دارید، سابقه بیماری قلبی دارید یا مدت طولانی کم‌کاری تیروئید تشخیص داده نشده است. نوار قلب (ECG) برای بررسی برادی‌کاردی و اکوکاردیوگرافی برای بررسی قدرت پمپاژ و تجمع مایع دور قلب، هر دو در منزل قابل انجام هستند."
    },
    {
      question: "شروع قرص لووتیروکسین بدون آزمایش خطرناک است؟",
      answer: "بله، بسیار خطرناک است. دوز لووتیروکسین باید بر اساس نتیجه TSH و وضعیت قلبی بیمار توسط پزشک تعیین شود. مصرف خودسرانه در افراد دارای مشکل قلبی می‌تواند باعث آنژین صدری، آریتمی و حتی سکته قلبی شود. همیشه ابتدا آزمایش، سپس تجویز پزشک."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="کم‌کاری تیروئید و قلب؛ زنگ خطر خاموش برای ضربان قلب | نوید زندگی"
        description="رابطه کم‌کاری تیروئید با بیماری قلبی: برادی‌کاردی، کلسترول بالا و نارسایی قلب؛ آزمایش TSH و چربی خون، نوار قلب و اکو در منزل تهران و کرج."
        keywords="کم‌کاری تیروئید و قلب, TSH در منزل, آزمایش تیروئید در منزل, برادیکاردی, کلسترول و تیروئید, نوار قلب در منزل, اکو در منزل, لووتیروکسین, ویزیت پزشک منزل"
        canonical="https://navidzendegi.com/articles/hypothyroidism-heart"
        ogType="article"
      />

      <ArticleSchema
        title="کم‌کاری تیروئید و قلب؛ زنگ خطر خاموش برای ضربان قلب"
        description="راهنمای جامع اثر کم‌کاری تیروئید بر قلب و خدمات تشخیصی و درمانی در منزل"
        publishedTime="2026-09-15"
        modifiedTime="2026-09-15"
        author="تیم پزشکی نوید زندگی"
        image={hypothyroidismHeartImage}
      />

      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              کم‌کاری تیروئید و قلب؛ زنگ خطر خاموش برای ضربان قلب
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۲۴ شهریور ۱۴۰۵</p>
          </header>

          <img
            src={hypothyroidismHeartImage}
            alt="آزمایش TSH تیروئید و نوار قلب در منزل"
            className="w-full h-auto rounded-lg mb-8"
            width={1280}
            height={854}
            loading="lazy"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
            <p className="text-lg">
              افزایش وزن، خستگی دائمی، خشکی پوست و احساس سرما را بسیاری از افراد به «شلوغی زندگی» یا «افزایش سن» ربط می‌دهند؛ اما این علائم می‌توانند پیام کم‌کاری تیروئید باشند؛ اختلالی که در زنان بسیار شایع است و کمتر کسی می‌داند که در سکوت، قلب را هم هدف می‌گیرد: ضربان قلب را کند می‌کند، کلسترول خون را بالا می‌برد و در طول زمان می‌تواند به گرفتگی عروق و نارسایی قلبی بینجامد.
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                کم‌کاری تیروئید چگونه قلب را درگیر می‌کند؟
              </h2>
              <p>
                هورمون‌های تیروئید (T4 و T3) مانند «پدال گاز» بدن عمل می‌کنند؛ سرعت سوخت‌وساز، ضربان قلب، قدرت انقباض عضله قلب و انعطاف رگ‌ها را تنظیم می‌کنند. وقتی تیروئید کم‌کار می‌شود:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>ضربان قلب کند می‌شود:</strong> تعداد ضربان در حالت استراحت به زیر ۶۰ می‌رسد (برادی‌کاردی) و برخی افراد دچار اختلال ریتم می‌شوند.</li>
                <li><strong>کلسترول خون بالا می‌رود:</strong> کاهش سوخت‌وساز چربی‌ها باعث افزایش LDL (چربی بد) و تری‌گلیسیرید می‌شود؛ مهم‌ترین عامل گرفتگی عروق قلب.</li>
                <li><strong>دیواره عروق سفت می‌شود:</strong> فشار خون دیاستولیک (عدد پایین) افزایش می‌یابد و رگ‌ها انعطاف خود را از دست می‌دهند.</li>
                <li><strong>قدرت پمپاژ افت می‌کند:</strong> در موارد شدید و طولانی، عضله قلب ضعیف می‌شود و مایع دور قلب (پریکارد) تجمع می‌یابد.</li>
              </ul>
              <p>
                این خطر در سالمندان و افراد با سابقه بیماری قلبی بسیار جدی‌تر است؛ چون شروع درمان تیروئید در این افراد باید بسیار محتاطانه و با پایش قلبی انجام شود.
              </p>

              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg my-4">
                <p className="text-blue-800 m-0">
                  <strong>نکته مهم:</strong> اگر کم‌کاری تیروئید دارید و تنگی نفس، ورم پا یا ضربان بسیار کند دارید، انجام <Link to="/articles/ecg-home" className="text-primary hover:underline font-semibold">نوار قلب در منزل</Link> و <Link to="/articles/echo-home" className="text-primary hover:underline font-semibold">اکوکاردیوگرافی در منزل</Link> سریع‌ترین راه بررسی وضعیت قلب است.
                </p>
              </div>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                نشانه‌های کم‌کاری تیروئید که نباید نادیده گرفت
              </h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>خستگی و ضعف که حتی با خواب کافی بهتر نمی‌شود</li>
                <li>ضربان آهسته قلب یا احساس «سنگینی» در قفسه سینه</li>
                <li>افزایش وزن بی‌دلیل با رژیم تغییریافته</li>
                <li>خشکی پوست، ریزش مو و شکنندگی ناخن</li>
                <li>احساس سرما حتی در هوای معتدل</li>
                <li>یبوست مزمن</li>
                <li>ورم صورت (به‌ویژه دور چشم) و ورم پا</li>
                <li>افسردگی، کندی ذهنی و فراموشی</li>
                <li>قاعدگی‌های نامنظم یا پرحجم در زنان</li>
              </ul>
              <p>
                در افراد مسن، این علائم اغلب به «پیری» نسبت داده می‌شود؛ در حالی که یک آزمایش TSH ساده می‌تواند علت واقعی را مشخص کند. توجه کنید که علائم قلبی در کم‌کاری تیروئید اغلب «بی‌صدا» هستند و اولین هشدار، گاهی نتیجه آزمایش چربی خون بالا یا یک نوار قلب غیرطبیعی است.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                چه کسانی باید تیروئید خود را چک کنند؟
              </h2>
              <p>
                <strong>۱. زنان بالای ۳۵ سال:</strong> کم‌کاری تیروئید در زنان حدود ۵ تا ۸ برابر مردان شایع است.
              </p>
              <p>
                <strong>۲. افراد با سابقه خانوادگی تیروئید یا بیماری‌های خودایمنی:</strong> تیروئیدیت هاشیموتو شایع‌ترین علت کم‌کاری تیروئید در ایران و جهان است.
              </p>
              <p>
                <strong>۳. بیماران قلبی با علائم مبهم:</strong> برادی‌کاردی بی‌دلیل، کلسترول بالا مقاوم به رژیم غذایی یا نارسایی قلبی با علت نامشخص، همیشه باید با آزمایش تیروئید بررسی شود.
              </p>
              <p>
                <strong>۴. بیماران تحت درمان با لووتیروکسین:</strong> دوز دارو باید هر ۶ تا ۱۲ ماه با آزمایش TSH کنترل شود؛ نه کمتر از آن خطرناک است نه بیشتر.
              </p>
            </section>

            <section className="mt-8 bg-primary/5 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                تشخیص و پایش تیروئید و قلب در منزل؛ بدون ترافیک و نوبت
              </h2>
              <p>
                خبر خوب این است که تمام مراحل تشخیص کم‌کاری تیروئید و بررسی اثر آن بر قلب، در منزل شما قابل انجام است. ما در نوید زندگی بیمارستان را به خانه شما می‌آوریم:
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">آزمایش تیروئید و خون در منزل</h3>
              <p>
                پرستار مجرب ما در منزل شما نمونه‌گیری انجام می‌دهد؛ آزمایش TSH، Free T4، Free T3، آنتی‌بادی تیروئید (Anti-TPO)، آزمایش کامل خون (CBC) و <Link to="/articles/cholesterol-test" className="text-primary hover:underline">پروفایل چربی خون</Link>. جواب‌ها به پزشک شما ارسال می‌شود و برنامه درمانی بر اساس آن تنظیم می‌گردد.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">نوار قلب (ECG) در منزل</h3>
              <p>
                در بیماران تیروئیدی با ضربان آهسته یا نامنظم، <Link to="/articles/ecg-home" className="text-primary hover:underline font-semibold">نوار قلب در منزل</Link> اولین قدم برای بررسی برادی‌کاردی و آریتمی‌هاست؛ بدون نیاز به حمل بیمار مسن به بیمارستان.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">اکوکاردیوگرافی پورتابل در منزل</h3>
              <p>
                اگر کم‌کاری تیروئید طولانی‌مانده یا شدید باشد، اکو مشخص می‌کند آیا قدرت پمپاژ (EF) افت کرده، تجمع مایع دور قلب وجود دارد یا دیواره‌ها تغییر کرده‌اند. تمام این بررسی‌ها روی تخت خانه و در حضور خانواده انجام می‌شود.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">ویزیت پزشک و شروع درمان اصولی در منزل</h3>
              <p>
                پزشک متخصص با <Link to="/services/specialist" className="text-primary hover:underline font-semibold">ویزیت در منزل</Link> نتیجه آزمایش‌ها را بررسی و دوز دقیق دارو را تعیین می‌کند. در بیماران مسن یا دارای مشکل قلبی، شروع درمان باید با دوز پایین و افزایش تدریجی همراه با پایش قلبی انجام شود؛ فرآیندی که تیم نوید زندگی کاملاً در منزل شما مدیریت می‌کند و <Link to="/services/nursing" className="text-primary hover:underline font-semibold">خدمات پرستاری در منزل</Link> تزریق‌ها و نمونه‌گیری‌های پیگیری را انجام می‌دهد.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                درمان کم‌کاری تیروئید؛ چرا خوددرمانی برای قلب خطرناک است؟
              </h2>
              <p>
                بسیاری از افراد با شنیدن «تیروئید کم‌کار» سراغ مصرف قرص لووتیروکسین با دوز دلخواه می‌روند یا برعکس، درمان را خودسرانه قطع می‌کنند. هر دو کار خطرناک است؛ زیرا:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>دوز بیش از حد لووتیروکسین در افراد دارای مشکل قلبی می‌تواند باعث آنژین صدری، آریتمی و حتی سکته قلبی شود.</li>
                <li>قطع خودسرانه دارو باعث بازگشت کلسترول بالا و فشار بر قلب می‌شود.</li>
                <li>در سالمندان، شروع درمان با دوز کامل می‌تواند قلبی که سال‌ها با کم‌کاری تیروئید سازگار شده را غافلگیر کند.</li>
                <li>کم‌کاری تیروئید گاهی نشانه بیماری زمینه‌ای دیگری (مثل کمبود ید، هاشیموتو یا اختلال هیپوفیز) است که باید تشخیص داده شود.</li>
              </ul>
              <p>
                به همین دلیل اولین قدم همیشه «آزمایش» است، نه دارو. برای آشنایی بیشتر با داروی تیروئید و نکات قلبی آن، مقاله <Link to="/articles/levothyroxine" className="text-primary hover:underline">لووتیروکسین</Link> را بخوانید.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                تغذیه‌ای که به قلب بیمار تیروئیدی کمک می‌کند
              </h2>
              <p>
                در کنار درمان دارویی، رژیم غذایی مناسب هم به قلب کمک می‌کند: مصرف متعادل ید (نمک یددار استاندارد، نه بیش از حد)، منابع سلنیوم و روی (ماهی، گردو، تخمه کدو)، میوه و سبزیجات تازه برای کنترل کلسترول و کاهش نمک برای کنترل فشار خون. توجه کنید که مصرف قرص لووتیروکسین باید با معده خالی و حداقل ۳۰ تا ۶۰ دقیقه قبل از صبحانه انجام شود؛ چای، قهوه، کلسیم و مکمل آهن جذب آن را به‌شدت کاهش می‌دهند. برای آشنایی بیشتر با تغذیه سالم قلب، مقاله <Link to="/articles/fruits-heart-health" className="text-primary hover:underline">میوه‌ها و سلامت قلب</Link> را بخوانید.
              </p>
            </section>

            <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded-lg my-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span className="font-bold text-red-800">چه زمانی کم‌کاری تیروئید یک وضعیت اورژانسی است؟</span>
              </div>
              <p className="text-red-800 m-0">
                در صورت مشاهده علائم زیر بدون تأخیر با تیم پزشکی تماس بگیرید:
              </p>
              <ul className="list-disc list-inside text-red-800 mt-2 space-y-1">
                <li>کاهش شدید هوشیاری یا خواب‌آلودگی عمیق (کمای میکس‌ادماتوس)</li>
                <li>تنگی نفس شدید در حالت استراحت</li>
                <li>ضربان بسیار کند (زیر ۴۰) همراه با سرگیجه یا غش</li>
                <li>درد قفسه سینه</li>
                <li>دمای بدن بسیار پایین (زیر ۳۵ درجه) با تعریق سرد</li>
              </ul>
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">منابع معتبر</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>American Thyroid Association: Hypothyroidism and Heart Disease</li>
                <li>European Thyroid Association: Thyroid Dysfunction and Cardiovascular Risk</li>
                <li>Cleveland Clinic: Hypothyroidism - Symptoms &amp; Causes</li>
              </ul>
            </section>

            <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg my-6">
              <p className="text-yellow-800 m-0 font-medium">
                ⚠️ هشدار: اطلاعات این مقاله جنبه آموزشی دارد و جایگزین مشاوره پزشکی نیست. از مصرف خودسرانه قرص لووتیروکسین، تغییر دوز دارو و هرگونه خوددرمانی جداً خودداری کنید؛ تشخیص و تجویز دارو فقط توسط پزشک و بر اساس آزمایش انجام می‌شود.
              </p>
            </div>

            <section className="mt-8 bg-primary/10 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                با «نوید زندگی» تیروئید و قلب سالم را به خانه بیاورید
              </h2>
              <p className="mb-6">
                اگر خستگی، افزایش وزن و ضربان کند قلب شما را نگران کرده، اجازه دهید بدون یک قدم بیرون رفتن، آزمایش تیروئید، نوار قلب و ویزیت متخصص در منزل شما انجام شود. همین حالا تماس بگیرید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCall}
                  className="bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  <a href="tel:09386117912">تماس: ۰۹۳۸۶۱۱۷۹۱۲</a>
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  size="lg"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  مشاوره واتساپ
                </Button>
              </div>
            </section>
          </div>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default HypothyroidismHeartPage;
