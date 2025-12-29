import { Phone, MessageCircle, Heart, Activity, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import ArticleLayout from "@/components/ArticleLayout";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import ArticleSchema from "@/components/ArticleSchema";
import holterHomeImage from "@/assets/holter-home-service.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import echoSafetyImage from "@/assets/echo-safety-home.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const HolterGuidePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const relatedArticles = [
    {
      title: "نوار قلب (ECG) چیست؟ راهنمای کامل",
      description: "نحوه کارکرد و تحلیل نوار قلب توسط متخصص در منزل",
      link: "/articles/ecg-guide",
      image: ecgHomeImage,
      category: "قلب و عروق"
    },
    {
      title: "اکوکاردیوگرافی در منزل؛ ایمنی و دقت",
      description: "بررسی ایمنی و نحوه کارکرد اکو قلب در خانه",
      link: "/articles/echo-safety-home",
      image: echoSafetyImage,
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
      question: "هولتر چند ساعت به بدن متصل می‌ماند؟",
      answer: "معمولاً هولتر ریتم ۲۴ تا ۴۸ ساعت و هولتر فشار خون ۲۴ ساعت به بدن متصل می‌ماند. در موارد خاص ممکن است تا ۷۲ ساعت نیز باشد."
    },
    {
      question: "آیا می‌توانم با هولتر دوش بگیرم؟",
      answer: "خیر، دستگاه هولتر و الکترودها ضدآب نیستند. در طول دوره پایش باید از خیس شدن دستگاه خودداری کنید. می‌توانید با حوله مرطوب بدن را پاک کنید."
    },
    {
      question: "آیا هولتر درد دارد؟",
      answer: "خیر، نصب و استفاده از هولتر کاملاً بدون درد است. فقط چسب‌های الکترود روی پوست قرار می‌گیرند و ممکن است کمی خارش ایجاد کنند."
    },
    {
      question: "در حین بستن هولتر چه فعالیت‌هایی ممنوع است؟",
      answer: "از حضور در نزدیکی دستگاه‌های آهنربایی قوی، MRI، و سونا خودداری کنید. ورزش سبک مجاز است اما از فعالیت‌های شدید و تعریق زیاد پرهیز کنید."
    },
    {
      question: "دفترچه وقایع روزانه چیست؟",
      answer: "یک فرم ساده است که در آن زمان فعالیت‌ها (غذا خوردن، ورزش، استرس، خواب، مصرف دارو) و علائم (تپش قلب، سرگیجه) را یادداشت می‌کنید تا پزشک بتواند آن را با داده‌های هولتر مطابقت دهد."
    },
    {
      question: "نتیجه هولتر چه زمانی آماده می‌شود؟",
      answer: "معمولاً ۲۴ تا ۴۸ ساعت پس از برداشت دستگاه، گزارش تحلیل شده توسط متخصص قلب آماده و ارسال می‌شود."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="هولتر ریتم و فشار خون در منزل؛ پایش ۲۴ ساعته قلب | نوید زندگی"
        description="هولتر مانیتورینگ قلب و فشار خون در منزل تهران و کرج. تشخیص آریتمی‌های گذرا، فشار خون مخفی و پایش ۲۴ ساعته توسط متخصص قلب و عروق."
        keywords="هولتر در منزل، هولتر ریتم قلب، هولتر فشار خون، پایش ۲۴ ساعته قلب، ABPM، هولتر تهران، هولتر کرج، آریتمی"
        canonical="https://navidzendegi.com/articles/holter-guide"
        ogImage={holterHomeImage}
        ogType="article"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
      />

      <ArticleSchema
        title="هولتر ریتم و فشار خون در منزل؛ تشخیص دقیق فراتر از یک لحظه"
        description="راهنمای جامع هولتر مانیتورینگ قلب و فشار خون در منزل"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
        image={holterHomeImage}
      />

      <main className="py-12 px-4">
        <article className="max-w-4xl mx-auto">
          
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              هولتر ریتم و فشار خون در منزل؛ تشخیص دقیق فراتر از یک لحظه
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: ۲۵ دی ۱۴۰۳ | نویسنده: تیم پزشکی نوید زندگی
            </p>
          </header>

          <img
            src={holterHomeImage}
            alt="هولتر مانیتورینگ قلب در منزل"
            className="w-full h-auto rounded-xl mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            
            <p className="text-lg text-muted-foreground mb-6">
              آیا تا به حال دچار تپش قلب ناگهانی یا سرگیجه شده‌اید که درست موقع رسیدن به مطب پزشک برطرف شده باشد؟ یا فشار خون شما فقط در محیط درمانی بالا می‌رود؟ <a href="/articles/ecg-guide" className="text-primary hover:underline">نوار قلب</a> و تست فشار خون در مطب، تنها یک «عکس» از وضعیت همان لحظه شماست؛ اما هولتر مانند یک «فیلم ۲۴ یا ۴۸ ساعته» عمل کرده و تمام نوسانات بدن شما را در حین فعالیت، استرس و حتی خواب ثبت می‌کند.
            </p>

            <p className="mb-8">
              مرکز <a href="/" className="text-primary hover:underline font-semibold">نوید زندگی</a>، پیشرفته‌ترین دستگاه‌های هولتر را به منزل شما در تهران و کرج آورده و توسط متخصصین قلب و عروق تحلیل می‌کند.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-destructive font-semibold flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5" />
                هشدار مهم
              </p>
              <p className="text-sm text-muted-foreground">
                هرگز علائم قلبی مثل تپش قلب، سرگیجه یا درد قفسه سینه را نادیده نگیرید. خوددرمانی ممنوع است. با اولین علامت، با پزشک متخصص مشورت کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۱. هولتر ریتم (Holter Monitoring) چیست؟
            </h2>

            <p className="mb-4">
              هولتر ریتم یک دستگاه کوچک و قابل حمل است که به مدت ۲۴ تا ۴۸ ساعت (و گاهی بیشتر) به بدن شما متصل می‌ماند تا فعالیت الکتریکی قلب را به طور مداوم ثبت کند.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                چرا به هولتر ریتم نیاز دارید؟
              </h3>
              <p className="mb-4 text-muted-foreground">طبق منابع معتبر مانند Mayo Clinic، هولتر برای تشخیص مواردی استفاده می‌شود که در نوار قلب ساده (ECG) دیده نمی‌شوند:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>آریتمی‌های گذرا:</strong> ضربان‌های نامنظمی که فقط در زمان‌های خاصی از روز رخ می‌دهند.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>بررسی علت تپش قلب، سرگیجه یا غش:</strong> تشخیص اینکه آیا این حالات منشأ قلبی دارند یا خیر.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>ارزیابی اثربخشی داروها:</strong> بررسی اینکه داروهای ضد آریتمی چقدر موفق بوده‌اند.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong>پایش پس از سکته قلبی یا جراحی:</strong> برای اطمینان از عملکرد صحیح قلب در زندگی روزمره.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۲. هولتر فشار خون (ABPM) چیست؟
            </h2>

            <p className="mb-4">
              این دستگاه شامل یک کاف (بازوبند) است که به یک دستگاه کوچک متصل شده و فشار خون شما را در فواصل زمانی مشخص (مثلاً هر ۲۰ یا ۳۰ دقیقه) در طول شبانه‌روز اندازه‌گیری و ثبت می‌کند.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">مزایای علمی هولتر فشار خون (بر اساس منابع AHA):</h3>
              <div className="space-y-4">
                <div className="border-r-4 border-primary pr-4">
                  <h4 className="font-semibold mb-1">حذف فشار خون روپوش سفید (White Coat Hypertension)</h4>
                  <p className="text-muted-foreground text-sm">بسیاری از افراد به دلیل استرس حضور در مطب، فشار خونشان به طور کاذب بالا می‌رود. هولتر در منزل این خطا را حذف می‌کند.</p>
                </div>
                <div className="border-r-4 border-secondary pr-4">
                  <h4 className="font-semibold mb-1">تشخیص فشار خون مخفی (Masked Hypertension)</h4>
                  <p className="text-muted-foreground text-sm">افرادی که در مطب فشار نرمال دارند اما در طول روز یا حین خواب دچار <a href="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون بالا</a> می‌شوند.</p>
                </div>
                <div className="border-r-4 border-accent pr-4">
                  <h4 className="font-semibold mb-1">بررسی الگوی افت شبانه (Dipping)</h4>
                  <p className="text-muted-foreground text-sm">فشار خون به طور طبیعی در شب باید افت کند؛ عدم افت فشار در شب نشان‌دهنده ریسک بالای سکته مغزی است که فقط با هولتر قابل تشخیص است.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              چرا نصب هولتر در منزل (تهران و کرج) بهترین گزینه است؟
            </h2>

            <p className="mb-4">
              بر اساس مقالات منتشر شده در NCBI، دقت هولتر زمانی به حداکثر می‌رسد که بیمار در شرایط واقعی زندگی خود باشد.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">ثبت فعالیت‌های واقعی</h4>
                <p className="text-sm text-muted-foreground">استرس رانندگی در تهران، فعالیت‌های کاری و کیفیت خواب شما در خانه، دقیق‌ترین داده‌ها را به پزشک می‌دهد.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">حذف دو بار مراجعه</h4>
                <p className="text-sm text-muted-foreground">برای نصب و برداشتن هولتر، تیم نوید زندگی برای هر دو مرحله به منزل شما می‌آید.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">آموزش اختصاصی</h4>
                <p className="text-sm text-muted-foreground">پرستار در محیط خانه آموزش می‌دهد که چطور «دفترچه وقایع روزانه» را پر کنید.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              مراحل انجام کار در مرکز نوید زندگی
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">۱</span>
                <div>
                  <h4 className="font-semibold mb-1">اعزام کارشناس</h4>
                  <p className="text-muted-foreground">پس از تماس، کارشناس با تجهیزات استریل به آدرس شما در تهران یا کرج می‌آید.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">۲</span>
                <div>
                  <h4 className="font-semibold mb-1">نصب دستگاه</h4>
                  <p className="text-muted-foreground">الکترودها (برای ریتم) یا کاف (برای فشار) با دقت نصب می‌شوند.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">۳</span>
                <div>
                  <h4 className="font-semibold mb-1">ثبت وقایع</h4>
                  <p className="text-muted-foreground">شما به زندگی عادی ادامه می‌دهید و فعالیت‌های خاص (ورزش، استرس، زمان مصرف دارو) را یادداشت می‌کنید.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">۴</span>
                <div>
                  <h4 className="font-semibold mb-1">برداشت و تحلیل</h4>
                  <p className="text-muted-foreground">پس از ۲۴ یا ۴۸ ساعت، دستگاه تحویل گرفته شده و داده‌ها توسط متخصص قلب و عروق تحلیل و گزارش نهایی ارائه می‌شود.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              منابع و رفرنس‌های علمی
            </h2>

            <ul className="space-y-2 mb-8 text-muted-foreground">
              <li>• American Heart Association (AHA): Ambulatory Blood Pressure Monitoring</li>
              <li>• Mayo Clinic: Holter Monitor: Why it's done and what to expect</li>
              <li>• National Center for Biotechnology Information (NCBI): Clinical Utility of Ambulatory ECG Monitoring</li>
            </ul>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                همین حالا پایش سلامت قلب خود را آغاز کنید
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                اجازه ندهید نوسانات قلبی و فشار خون پنهان بمانند. با خدمات هولتر در منزل نوید زندگی، دقیق‌ترین گزارش پزشکی را در محیط آرام خانه خود دریافت کنید.
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

export default HolterGuidePage;
