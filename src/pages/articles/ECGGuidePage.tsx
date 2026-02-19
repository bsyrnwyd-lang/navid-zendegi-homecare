import { Phone, MessageCircle, Heart, Activity, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import ArticleSchema from "@/components/ArticleSchema";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import echoSafetyImage from "@/assets/echo-safety-home.jpg";
import holterImage from "@/assets/holter-monitoring.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const ECGGuidePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل؛ ایمنی و دقت امواج",
      description: "بررسی ایمنی و نحوه کارکرد اکو قلب در خانه",
      link: "/articles/echo-safety-home",
      image: echoSafetyImage,
      category: "قلب و عروق"
    },
    {
      title: "هولتر مانیتورینگ قلب در منزل",
      description: "ثبت ۲۴ ساعته ضربان قلب برای تشخیص آریتمی",
      link: "/articles/holter",
      image: holterImage,
      category: "قلب و عروق"
    },
    {
      title: "تپش قلب؛ علل و درمان",
      description: "چرا قلب تند می‌زند و چه زمانی نگران‌کننده است",
      link: "/articles/heart-palpitations",
      image: heartPalpitationsImage,
      category: "قلب و عروق"
    }
  ];

  const faqItems = [
    {
      question: "نوار قلب درد دارد؟",
      answer: "خیر، گرفتن نوار قلب کاملاً بدون درد است. فقط چسب‌های الکترود روی پوست قرار می‌گیرند و هیچ‌گونه تزریق یا برشی انجام نمی‌شود."
    },
    {
      question: "چقدر طول می‌کشد نوار قلب گرفته شود؟",
      answer: "کل فرآیند نوار قلب معمولاً کمتر از ۱۰ دقیقه طول می‌کشد. ثبت سیگنال‌ها فقط ۳۰ ثانیه تا ۱ دقیقه است."
    },
    {
      question: "آیا قبل از نوار قلب باید ناشتا بود؟",
      answer: "خیر، برای نوار قلب معمولی نیازی به ناشتا بودن نیست. اما بهتر است از مصرف کافئین و سیگار ۲ ساعت قبل خودداری کنید."
    },
    {
      question: "آیا نوار قلب همه بیماری‌های قلبی را نشان می‌دهد؟",
      answer: "نوار قلب مشکلات ریتم و برخی بیماری‌ها را نشان می‌دهد، اما برای بررسی کامل ساختار قلب، اکوکاردیوگرافی نیز توصیه می‌شود."
    },
    {
      question: "هزینه نوار قلب در منزل چقدر است؟",
      answer: "هزینه نوار قلب در منزل با تفسیر متخصص قلب، بسیار مقرون‌به‌صرفه‌تر از مراجعه به مراکز درمانی است. برای اطلاع از تعرفه دقیق با ما تماس بگیرید."
    },
    {
      question: "آیا نوار قلب در منزل به اندازه بیمارستان دقیق است؟",
      answer: "بله، دستگاه‌های پرتابل مدرن ما دقت کاملاً مشابه دستگاه‌های بیمارستانی دارند و نتایج توسط متخصص قلب تفسیر می‌شود."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="نوار قلب (ECG) چیست؟ راهنمای کامل نحوه انجام و تحلیل | نوید زندگی"
        description="نوار قلب چگونه کار می‌کند؟ راهنمای کامل نحوه انجام، تحلیل موج‌های P، QRS و T توسط متخصص قلب در منزل تهران و کرج با تفسیر فوری."
        keywords="نوار قلب چیست، ECG در منزل، الکتروکاردیوگرام، تفسیر نوار قلب، نوار قلب تهران، نوار قلب کرج، موج P، QRS، تپش قلب"
        canonical="https://navidzendegi.com/articles/ecg-guide"
        ogImage={ecgHomeImage}
        ogType="article"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
      />

      <ArticleSchema
        title="نوار قلب (ECG) چیست؟ راهنمای کامل نحوه انجام و تحلیل"
        description="راهنمای جامع نوار قلب شامل نحوه کارکرد، مراحل انجام و تحلیل تخصصی در منزل"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
        image={ecgHomeImage}
      />

      <main className="py-12 px-4">
        <article className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"راهنمای نوار قلب",url:"/articles/ecg-guide"}]} />
          
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              نوار قلب (ECG) چیست؟ راهنمای کامل نحوه انجام، کارکرد و تحلیل تخصصی در منزل
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: ۲۵ دی ۱۴۰۳ | نویسنده: تیم پزشکی نوید زندگی
            </p>
          </header>

          <img
            src={ecgHomeImage}
            alt="نوار قلب در منزل - الکتروکاردیوگرام"
            className="w-full h-auto rounded-xl mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            
            <p className="text-lg text-muted-foreground mb-6">
              نوار قلب یا الکتروکاردیوگرام (ECG/EKG)، زبانی است که قلب با آن صحبت می‌کند. این تست ساده اما حیاتی، فعالیت الکتریکی قلب شما را ثبت کرده و به پزشک اجازه می‌دهد تا بفهمد آیا ضربان قلب شما منظم است و آیا عضله قلب تحت فشار یا آسیب قرار دارد یا خیر.
            </p>

            <p className="mb-8">
              مرکز <a href="/" className="text-primary hover:underline font-semibold">نوید زندگی</a> با اعزام تیم مجرب و دستگاه‌های پیشرفته به سراسر تهران و کرج، این تست را در آرامش کامل منزل شما انجام داده و بلافاصله توسط متخصص تحلیل می‌کند.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-destructive font-semibold flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5" />
                هشدار مهم
              </p>
              <p className="text-sm text-muted-foreground">
                هرگز علائم قلبی مثل درد قفسه سینه، تنگی نفس یا تپش قلب را نادیده نگیرید. خوددرمانی ممنوع است. با اولین علامت، با پزشک متخصص مشورت کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نوار قلب چگونه کار می‌کند؟ (زبان الکتریسیته)
            </h2>

            <p className="mb-4">
              قلب انسان دارای یک سیستم برق‌رسانی داخلی است. در هر تپش، یک سیگنال الکتریکی از بالای قلب (گره پیش‌آهنگ) شروع شده و به پایین حرکت می‌کند. این سیگنال باعث انقباض عضلات و پمپاژ خون می‌شود.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                مکانیزم دستگاه نوار قلب
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>الکترودها:</strong> دستگاه نوار قلب دارای ۱۰ یا ۱۲ سیم (لید) است که با چسب‌های مخصوص روی سینه، دست و پا قرار می‌گیرند. این‌ها مانند «میکروفون» عمل می‌کنند؛ اما به جای صدا، تغییرات الکتریکی بسیار ضعیف پوست را دریافت می‌کنند.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>ثبت موج:</strong> دستگاه این تغییرات را تقویت کرده و به صورت موج‌های مشخص روی کاغذ یا مانیتور رسم می‌کند.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              مراحل گرفتن نوار قلب در منزل توسط تیم نوید زندگی
            </h2>

            <p className="mb-4">
              بسیاری از بیماران، به‌ویژه سالمندان، هنگام خروج از خانه دچار استرس می‌شوند که می‌تواند ضربان قلب را به اشتباه بالا ببرد. انجام تست در منزل این خطا را حذف می‌کند:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">۱</span>
                <div>
                  <h4 className="font-semibold mb-1">آماده‌سازی</h4>
                  <p className="text-muted-foreground">پرستار از شما می‌خواهد روی تخت خود دراز بکشید و آرام باشید.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">۲</span>
                <div>
                  <h4 className="font-semibold mb-1">اتصال لیدها</h4>
                  <p className="text-muted-foreground">۱۰ الکترود کوچک روی قفسه سینه، مچ دست‌ها و مچ پاها قرار داده می‌شود. ممکن است برای اتصال بهتر از ژل یا پد الکلی استفاده شود.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">۳</span>
                <div>
                  <h4 className="font-semibold mb-1">ثبت سیگنال</h4>
                  <p className="text-muted-foreground">در حالی که شما به مدت حدود ۳۰ ثانیه بدون حرکت و صحبت کردن نفس می‌کشید، دستگاه سیگنال‌ها را ثبت می‌کند.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">۴</span>
                <div>
                  <h4 className="font-semibold mb-1">چاپ و ارسال</h4>
                  <p className="text-muted-foreground">کاغذ نوار قلب بلافاصله چاپ شده و تصویر آن برای متخصص قلب جهت تحلیل فوری ارسال می‌شود.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              تحلیل نوار قلب؛ پزشک در این خطوط چه می‌بیند؟
            </h2>

            <p className="mb-6">
              هر ضربان قلب در نوار به شکل سه موج اصلی (P, QRS, T) دیده می‌شود. تحلیل این موج‌ها دانش تخصصی می‌طلبد:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-r-4 border-primary pr-4">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  ۱. موج P (شروع تپش)
                </h3>
                <p className="text-muted-foreground">
                  این موج نشان‌دهنده انقباض دهلیزهاست. اگر این موج وجود نداشته باشد یا نامنظم باشد، ممکن است نشانه <strong>فیبریلاسیون دهلیزی (AF)</strong> باشد.
                </p>
              </div>

              <div className="border-r-4 border-secondary pr-4">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-secondary" />
                  ۲. مجتمع QRS (تپش اصلی)
                </h3>
                <p className="text-muted-foreground">
                  نشان‌دهنده انقباض بطن‌های بزرگ قلب است. پزشک با بررسی فاصله و شکل این موج، متوجه می‌شود که آیا قلب بزرگ شده یا انسدادی در مسیر برق‌رسانی وجود دارد.
                </p>
              </div>

              <div className="border-r-4 border-accent pr-4">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  ۳. موج T (استراحت)
                </h3>
                <p className="text-muted-foreground">
                  زمانی است که قلب برای تپش بعدی آماده می‌شود. تغییرات در این موج می‌تواند نشانه <strong>کم‌خونی قلب (ایسکمی)</strong> یا اختلال در املاح خون (مثل پتاسیم) باشد.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              تشخیص‌های کلیدی با نوار قلب در منزل
            </h2>

            <p className="mb-4">
              طبق استانداردهای انجمن قلب آمریکا (AHA)، نوار قلب می‌تواند موارد زیر را شناسایی کند:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>آریتمی:</strong> تپش خیلی تند، خیلی کند یا نامنظم</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>سکته قلبی:</strong> تشخیص اینکه آیا در حال حاضر حمله‌ای در حال وقوع است یا اثرات سکته قدیمی باقی مانده است</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>ضخامت عضله قلب:</strong> که معمولاً ناشی از فشار خون بالای مزمن است</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>اختلالات الکترولیتی:</strong> که برای بیماران کلیوی یا مصرف‌کنندگان داروهای خاص حیاتی است</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              چرا نوار قلب در منزل تهران و کرج را به نوید زندگی بسپاریم؟
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">دقت در آرامش</h4>
                <p className="text-sm text-muted-foreground">در منزل، «سندرم روپوش سفید» (بالا رفتن فشار و ضربان به دلیل ترس از محیط درمانی) وجود ندارد.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">تفسیر توسط متخصص</h4>
                <p className="text-sm text-muted-foreground">نوار قلب توسط پزشکان متخصص قلب و عروق تحلیل می‌شود، نه فقط تکنسین.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">پشتیبانی درمانی</h4>
                <p className="text-sm text-muted-foreground">در صورت مشاهده ناهنجاری، بلافاصله اقدامات درمانی یا هماهنگی برای <a href="/services/echo-ecg" className="text-primary hover:underline">اکو</a> انجام می‌شود.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              منابع و رفرنس‌های علمی
            </h2>

            <ul className="space-y-2 mb-8 text-muted-foreground">
              <li>• Mayo Clinic: Electrocardiogram (ECG or EKG) - How it's done</li>
              <li>• American Heart Association (AHA): Understand Your ECG Results</li>
              <li>• PubMed (NCBI): The Clinical Value of Home-Based ECG Monitoring</li>
            </ul>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                مراقب ضربان قلب خود باشید
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                اگر دچار تپش قلب، درد قفسه سینه یا سرگیجه هستید، زمان را از دست ندهید. تیم نوید زندگی در تمام ساعات شبانه‌روز آماده اعزام به منزل شما در تهران و کرج است.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleCall} className="gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:09386117912">تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲</a>
                </Button>
                <Button variant="outline" onClick={handleWhatsApp} className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  پیام در واتساپ
                </Button>
              </div>
            </div>

          </div>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />

        </article>
      </main>
    </ArticleLayout>
  );
};

export default ECGGuidePage;
