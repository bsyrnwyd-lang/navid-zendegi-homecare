import { Link } from "react-router-dom";
import { Phone, MessageCircle, AlertTriangle, Heart, Activity, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

import legEdemaImage from "@/assets/leg-edema-article.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import dvtImage from "@/assets/dvt-anticoagulant-article.jpg";

const LegEdemaPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "ورم پا و زنگ خطر قلب", url: "/articles/leg-edema" }
  ];

  const relatedArticles = [
    {
      title: "خدمات اکوکاردیوگرافی در منزل",
      description: "بررسی قدرت پمپاژ قلب و دریچه‌ها در محیط آرام خانه",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "خدمات"
    },
    {
      title: "نوار قلب در منزل",
      description: "تشخیص آریتمی و مشکلات ریتم قلب بدون نیاز به مراجعه",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "خدمات"
    },
    {
      title: "لخته وریدی عمقی (DVT) و داروهای ضدانعقاد",
      description: "پیشگیری و درمان لخته خون در پاها",
      image: dvtImage,
      link: "/articles/dvt-anticoagulants",
      category: "قلب"
    }
  ];

  const faqItems = [
    {
      question: "آیا ورم پا همیشه نشانه بیماری قلبی است؟",
      answer: "خیر، ورم پا علل متعددی دارد از جمله ایستادن طولانی، مشکلات کلیوی، کبدی، دارویی یا لخته وریدی. اما ورم دو طرفه همراه با تنگی نفس معمولاً نشان‌دهنده مشکل قلبی است و نیاز به بررسی با اکوکاردیوگرافی دارد."
    },
    {
      question: "چگونه بفهمم ورم پایم خطرناک است؟",
      answer: "ورم ناگهانی یک طرفه با درد و قرمزی (احتمال لخته)، ورم همراه با تنگی نفس (نارسایی قلب)، یا ورم با کبودی پوست نیاز به بررسی فوری پزشکی دارد."
    },
    {
      question: "آیا بالا نگه داشتن پا ورم را درمان می‌کند؟",
      answer: "بالا نگه داشتن پا به طور موقت ورم را کاهش می‌دهد اما علت زمینه‌ای را درمان نمی‌کند. اگر ورم مکرر است، باید علت اصلی با ویزیت پزشک و آزمایشات مشخص شود."
    },
    {
      question: "چه داروهایی باعث ورم پا می‌شوند؟",
      answer: "داروهای فشار خون مانند آملودیپین، برخی داروهای دیابت، کورتون‌ها و ضدالتهاب‌های غیراستروئیدی می‌توانند ورم پا ایجاد کنند. هرگز دارو را خودسرانه قطع نکنید."
    },
    {
      question: "آیا اکو در منزل می‌تواند علت ورم پا را مشخص کند؟",
      answer: "بله، اکوکاردیوگرافی بهترین روش برای بررسی عملکرد قلب و دریچه‌هاست. اگر ورم پا منشأ قلبی داشته باشد، اکو آن را نشان می‌دهد."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="ورم پا؛ زنگ خطر خاموش قلب یا مشکل ساده؟ | نوید زندگی"
        description="علت ورم پا چیست؟ رابطه ورم پا با بیماری قلبی، لخته وریدی و نارسایی کلیه. خدمات اکو، نوار قلب و ویزیت متخصص در منزل تهران و کرج."
        keywords="ورم پا, علت ورم پا, ادم پا, نارسایی قلبی, لخته پا, DVT, اکو در منزل, ویزیت قلب منزل"
        canonical="https://navidzendegi.com/articles/leg-edema"
        ogType="article"
      />

      <ArticleSchema
        title="ورم پا؛ زنگ خطر خاموش قلب یا یک مشکل ساده؟"
        description="راهنمای جامع علل ورم پا و خدمات تشخیصی در منزل"
        publishedTime="2025-01-07"
        modifiedTime="2025-01-07"
        author="تیم پزشکی نوید زندگی"
        image={legEdemaImage}
      />

      <Header />
      <FloatingContact />

      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              ورم پا؛ زنگ خطر خاموش قلب یا یک مشکل ساده؟
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۱۷ دی ۱۴۰۴</p>
          </header>

          <img
            src={legEdemaImage}
            alt="ورم پا و معاینه پزشکی"
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
            <p className="text-lg">
              آیا تا به حال متوجه شده‌اید که کفش‌هایتان در انتهای روز تنگ می‌شوند یا جای کش جوراب روی پایتان باقی می‌ماند؟ ورم پا (Edema) تنها یک مشکل ظاهری یا ناشی از خستگی نیست؛ بلکه در بسیاری از موارد، زبان گویای بدن برای اعلام یک اختلال داخلی، به‌ویژه در سیستم قلبی و عروقی است.
            </p>

            <p>
              ما در مرکز خدمات پزشکی نوید زندگی، روزانه با مراجعین بسیاری روبرو هستیم که ورم پا را نادیده گرفته‌اند، در حالی که این نشانه می‌تواند کلید تشخیص زودهنگام بیماری‌های حیاتی باشد.
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                انواع ورم پا و دلایل پنهان آن
              </h2>
              <p>
                ورم پا بسته به علت ایجاد آن، به انواع مختلفی تقسیم می‌شود که هر کدام نیاز به بررسی تخصصی متفاوتی دارد:
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                ۱. ورم قلبی (ادم سیستمیک)
              </h3>
              <p>
                وقتی قلب (به‌ویژه سمت راست) ضعیف می‌شود، نمی‌تواند خون را به‌طور موثر پمپاژ کند. در نتیجه، خون در رگ‌ها پس می‌زند و مایعات به بافت‌های پا نشت می‌کنند.
              </p>
              <p>
                <strong>ویژگی:</strong> معمولاً در هر دو پا به صورت متقارن دیده می‌شود و با استراحت و بالا نگه داشتن پا کمی بهتر می‌شود.
              </p>
              
              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg my-4">
                <p className="text-blue-800 m-0">
                  <strong>نکته حیاتی:</strong> اگر ورم پا همراه با تنگی نفس (حتی در حالت استراحت) باشد، نشان‌دهنده نارسایی قلبی است. در این شرایط، جابه‌جایی بیمار به بیمارستان ممکن است خطرناک باشد؛ پیشنهاد ما استفاده از خدمات <Link to="/articles/echo-home" className="text-primary hover:underline font-semibold">اکو در منزل</Link> برای بررسی قدرت پمپاژ قلب در محیطی آرام است.
                </p>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                ۲. لخته شدن خون (DVT)
              </h3>
              <p>
                این یکی از خطرناک‌ترین انواع ورم است که معمولاً فقط در یک پا رخ می‌دهد. برای اطلاعات بیشتر، مقاله <Link to="/articles/dvt-anticoagulants" className="text-primary hover:underline">لخته وریدی عمقی (DVT)</Link> را مطالعه کنید.
              </p>
              <p>
                <strong>علائم:</strong> ورم ناگهانی یک طرفه، درد ساق پا، قرمزی و گرمی پوست.
              </p>
              <p>
                <strong>خطر:</strong> لخته می‌تواند حرکت کرده و به ریه برسد (آمبولی ریه). اگر چنین علائمی دارید، سریعاً باید توسط <Link to="/services/specialist-doctor" className="text-primary hover:underline">متخصص ویزیت</Link> شوید.
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                ۳. ورم ناشی از نارسایی کلیوی یا کبدی
              </h3>
              <p>
                وقتی کلیه‌ها دفع پروتئین داشته باشند یا کبد نتواند پروتئین کافی (آلبومین) تولید کند، تعادل آب در بدن بهم خورده و پاها به شدت ورم می‌کنند. این ورم معمولاً در صبح‌ها در زیر چشم‌ها و در طول روز در پاها ظاهر می‌شود.
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-green-600" />
                ۴. ورم ناشی از عوارض دارویی
              </h3>
              <p>
                برخی داروهای فشار خون (مانند آملودیپین) ممکن است باعث ورم پا شوند. هرگز دارو را خودسرانه قطع نکنید! به جای آن، از خدمات <Link to="/services/specialist-doctor" className="text-primary hover:underline font-semibold">ویزیت پزشک در منزل</Link> استفاده کنید تا داروی جایگزین بدون خطر بازگشت فشار خون برای شما تجویز شود. همچنین مقاله <Link to="/articles/heart-medications-warning" className="text-primary hover:underline">خطرات قطع خودسرانه داروهای قلبی</Link> را بخوانید.
              </p>
            </section>

            <section className="mt-8 bg-primary/5 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                تشخیص علت ورم پا در منزل؛ بدون نیاز به ترافیک و نوبت‌های طولانی
              </h2>
              <p>
                تشخیص علت ورم پا نیاز به معاینه دقیق و ابزارهای تشخیصی دارد. در نوید زندگی، ما بیمارستان را به خانه شما می‌آوریم:
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">ویزیت متخصص قلب و داخلی در منزل</h3>
              <p>
                پزشک با بررسی سوابق دارویی، معاینه فیزیکی و تست «گوده‌گذاری» (Pitting Test)، تشخیص اولیه را انجام می‌دهد. تشخیص زودهنگام می‌تواند از بستری شدن‌های طولانی‌مدت جلوگیری کند.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">نوار قلب (ECG) در منزل</h3>
              <p>
                اگر ورم پای شما با ضربان قلب نامنظم یا سنگینی قفسه سینه همراه است، انجام <Link to="/articles/ecg-home" className="text-primary hover:underline font-semibold">نوار قلب در منزل</Link> اولین قدم برای رد کردن آریتمی‌های خطرناک و فشارهای حاد قلبی است.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">اکوکاردیوگرافی پورتابل (اکو در منزل)</h3>
              <p>
                طلایی‌ترین روش برای تشخیص اینکه آیا ورم پا منشأ قلبی دارد یا خیر، انجام <Link to="/articles/echo-home" className="text-primary hover:underline font-semibold">اکو</Link> است. متخصصین ما با دستگاه‌های پیشرفته در اتاق خواب بیمار، دریچه‌ها و فراکسیون تخلیه قلب (EF) را چک می‌کنند تا از سلامت پمپ قلبی مطمئن شوند.
              </p>
            </section>

            <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded-lg my-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <span className="font-bold text-red-800">چه زمانی ورم پا یک وضعیت اورژانسی است؟</span>
              </div>
              <p className="text-red-800 m-0">
                در صورت مشاهده علائم زیر، ثانیه‌ها را از دست ندهید و با تیم پزشکی تماس بگیرید:
              </p>
              <ul className="list-disc list-inside text-red-800 mt-2 space-y-1">
                <li>ورم ناگهانی و شدید در یک پا</li>
                <li>همراه بودن ورم با تنگی نفس یا سرفه</li>
                <li>احساس درد یا فشار در قفسه سینه</li>
                <li>کبودی پوست در محل ورم</li>
              </ul>
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">منابع معتبر</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>Cleveland Clinic: Leg Swelling (Edema) Causes & Treatment</li>
                <li>American College of Cardiology (ACC) - Heart Failure Signs</li>
                <li>NHS: Swollen ankles, feet and legs (oedema)</li>
              </ul>
            </section>

            <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg my-6">
              <p className="text-yellow-800 m-0 font-medium">
                ⚠️ هشدار: اطلاعات این مقاله جنبه آموزشی دارد و جایگزین مشاوره پزشکی نیست. برای تشخیص علت ورم پا حتماً با پزشک متخصص مشورت کنید.
              </p>
            </div>

            <section className="mt-8 bg-primary/10 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                با «نوید زندگی» هوشمندانه مراقب خود باشید
              </h2>
              <p className="mb-6">
                ورم پا شاید ساده به نظر برسد، اما می‌تواند نویدبخش یک نیاز فوری به مراقبت باشد. اجازه دهید متخصصین ما با ویزیت و اکو در منزل، آرامش را به قلب و پاهای شما بازگردانند.
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

      <Footer />
    </ArticleLayout>
  );
};

export default LegEdemaPage;
