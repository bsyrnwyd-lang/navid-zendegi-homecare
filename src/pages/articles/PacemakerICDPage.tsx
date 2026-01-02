import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import { Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import pacemakerImage from "@/assets/pacemaker-icd-article.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import cardiologyHomeImage from "@/assets/cardiology-home-services.jpg";

const PacemakerICDPage = () => {
  const faqs = [
    {
      question: "پیس‌میکر و ICD چه تفاوتی دارند؟",
      answer: "پیس‌میکر برای درمان ضربان قلب بسیار کند (برادیکاردی) استفاده می‌شود و پالس‌های ضعیف ارسال می‌کند. اما ICD برای جلوگیری از مرگ ناگهانی قلبی در اثر آریتمی‌های تند و خطرناک طراحی شده و علاوه بر پالس، قابلیت ارسال شوک الکتریکی دارد."
    },
    {
      question: "آیا استفاده از موبایل برای دارندگان باتری قلب خطرناک است؟",
      answer: "خیر، استفاده از تلفن همراه ایمن است. فقط توصیه می‌شود گوشی را در جیب روی سینه قرار ندهید و برای مکالمه از گوش سمت مخالف دستگاه استفاده کنید."
    },
    {
      question: "عمر باتری پیس‌میکر و ICD چقدر است؟",
      answer: "عمر باتری پیس‌میکر معمولاً ۷ تا ۱۲ سال و عمر باتری ICD حدود ۵ تا ۱۰ سال است. این زمان بستگی به میزان استفاده و تنظیمات دستگاه دارد."
    },
    {
      question: "آیا می‌توانم با پیس‌میکر ورزش کنم؟",
      answer: "بله، ورزش‌های سبک مانند پیاده‌روی و شنا توصیه می‌شوند. اما از ورزش‌های تماسی مانند ورزش‌های رزمی که ممکن است به دستگاه ضربه بزند، باید خودداری شود."
    },
    {
      question: "چرا نیاز به ویزیت دوره‌ای در منزل دارم؟",
      answer: "ویزیت دوره‌ای برای بررسی سلامت لیدها (سیم‌ها)، وضعیت باتری، تنظیم دارویی و مراقبت از محل کاشت ضروری است. تیم نوید زندگی این خدمات را بدون نیاز به خروج از منزل ارائه می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "تپش قلب؛ علل و درمان",
      description: "راهنمای جامع علل تپش قلب و روش‌های تشخیص و درمان آن",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب"
    },
    {
      title: "نوار قلب در منزل",
      description: "خدمات نوار قلب (ECG) در منزل توسط تیم متخصص نوید زندگی",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "قلب"
    },
    {
      title: "خدمات قلب در منزل",
      description: "ویزیت متخصص قلب و خدمات تشخیصی قلب در منزل تهران و کرج",
      image: cardiologyHomeImage,
      link: "/articles/cardiology-home-services",
      category: "قلب"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="پیس‌میکر و ICD؛ راهنمای کامل باتری و دفیبریلاتور قلب | نوید زندگی"
        description="راهنمای جامع پیس‌میکر و ICD: نحوه عملکرد، تفاوت‌ها، زندگی روزمره با باتری قلب و خدمات مراقبتی در منزل تهران و کرج توسط نوید زندگی. تماس: 09386117912"
        keywords="پیس‌میکر, باتری قلب, ICD, دفیبریلاتور قلب, مراقبت از پیس‌میکر, ویزیت قلب در منزل, نوید زندگی"
        canonical="https://navidzendegi.ir/articles/pacemaker-icd"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-01-02"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                پیس‌میکر و ICD؛ راهنمای کامل باتری و دفیبریلاتور قلب در منزل
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                زمانی که سیستم برق‌رسانی طبیعی قلب دچار اختلال می‌شود، تکنولوژی به کمک زندگی می‌آید. دستگاه‌های پیس‌میکر (Pacemaker) و ICD مانند نگهبانانی هوشمند، هر ثانیه مراقب تپش‌های قلب شما هستند. مرکز نوید زندگی با دانش روز، این مراقبت تخصصی را به آرامش خانه شما در تهران و کرج می‌آورد.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={pacemakerImage} 
                alt="پیس‌میکر و ICD - باتری و دفیبریلاتور قلب"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="text-center mb-8">
              <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: 09386117912
              </a>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="medical-section bg-destructive/5">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-start gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <p className="text-foreground">
                <strong>هشدار مهم:</strong> اطلاعات این مقاله صرفاً جهت آگاهی عمومی است و جایگزین مشاوره پزشکی نمی‌شود. هرگونه تغییر در داروها یا تنظیمات دستگاه باید فقط با نظر پزشک متخصص انجام شود.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۱. پیس‌میکر (باتری قلب) چیست و چگونه کار می‌کند؟
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              پیس‌میکر دستگاه کوچکی است که زیر پوست (معمولاً زیر استخوان ترقوه) کاشته می‌شود تا ریتم‌های بسیار کند قلب (برادیکاردی) را اصلاح کند.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>عملکرد هوشمند:</strong> این دستگاه دارای سنسورهایی است که متوجه میزان فعالیت شما می‌شوند. اگر در حال پیاده‌روی باشید، ضربان را بالا می‌برد و هنگام استراحت آن را کاهش می‌دهد.
              </li>
              <li className="text-base text-foreground">
                <strong>هدف:</strong> جلوگیری از سرگیجه، غش کردن (سنکوپ) و خستگی مفرط ناشی از نرسیدن خون کافی به مغز.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۲. دفیبریلاتور (ICD) چیست؟ (فراتر از یک باتری ساده)
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              ICD پیشرفته‌تر از پیس‌میکر است. وظیفه اصلی آن جلوگیری از مرگ ناگهانی قلبی در اثر آریتمی‌های تند و خطرناک است.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>تشخیص هوشمند:</strong> ICD تفاوت بین ضربان بالای ناشی از ورزش و آریتمی کشنده را می‌فهمد.
              </li>
              <li className="text-base text-foreground">
                <strong>درمان دو مرحله‌ای:</strong>
                <ul className="mr-6 mt-2 space-y-2">
                  <li>۱. <strong>پیسینگ سریع (ATP):</strong> با فرستادن پالس‌های بسیار ریز و بدون درد، سعی می‌کند ضربان تند را آرام کند.</li>
                  <li>۲. <strong>شوک الکتریکی:</strong> تنها در صورتی که روش اول جواب ندهد، یک شوک قوی برای بازگرداندن ریتم زندگی صادر می‌کند.</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۳. مقایسه پیس‌میکر و ICD در یک نگاه
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base text-foreground"><strong>وظیفه اصلی:</strong></p>
              <ul className="mr-6 space-y-2 text-foreground">
                <li>پیس‌میکر: جلوگیری از ضربان خیلی کند</li>
                <li>ICD: جلوگیری از ضربان خیلی تند و ایست قلبی</li>
              </ul>
              <p className="text-base text-foreground"><strong>نوع مداخله:</strong></p>
              <ul className="mr-6 space-y-2 text-foreground">
                <li>پیس‌میکر: پالس‌های ضعیف و مداوم</li>
                <li>ICD: پالس ضعیف + شوک (در صورت نیاز)</li>
              </ul>
              <p className="text-base text-foreground"><strong>جامعه هدف:</strong></p>
              <ul className="mr-6 space-y-2 text-foreground">
                <li>پیس‌میکر: بیماران با بلوک قلبی</li>
                <li>ICD: بیماران با ریسک آریتمی‌های بطنی</li>
              </ul>
              <p className="text-base text-foreground"><strong>طول عمر باتری:</strong></p>
              <ul className="mr-6 space-y-2 text-foreground">
                <li>پیس‌میکر: ۷ تا ۱۲ سال</li>
                <li>ICD: ۵ تا ۱۰ سال</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۴. زندگی روزمره با دستگاه؛ افسانه‌ها و واقعیت‌ها
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              بسیاری از بیماران نگران تداخل وسایل برقی با دستگاه خود هستند. طبق استانداردهای AHA:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>تلفن همراه:</strong> ایمن است؛ فقط گوشی را در جیب روی سینه قرار ندهید و از گوش سمت مخالف دستگاه برای مکالمه استفاده کنید.
              </li>
              <li className="text-base text-foreground">
                <strong>لوازم خانگی:</strong> مایکروویو، تلویزیون و جاروبرقی تداخلی ندارند.
              </li>
              <li className="text-base text-foreground">
                <strong>امنیت فرودگاه:</strong> از گیت‌های بازرسی عبور کنید اما بین آن‌ها توقف نکنید. به مامور امنیت اطلاع دهید که باتری قلب دارید.
              </li>
              <li className="text-base text-foreground">
                <strong>ورزش:</strong> پیاده‌روی، شنا و ورزش‌های سبک عالی هستند، اما از ورزش‌های تماسی (مانند رزمی) که ممکن است به دستگاه ضربه بزند خودداری کنید.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۵. چرا خدمات نوید زندگی برای دارندگان باتری قلب حیاتی است؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              داشتن این دستگاه‌ها پایان مسیر نیست، بلکه شروع یک مراقبت دقیق است. تیم نوید زندگی در تهران و کرج این خدمات را در منزل شما ارائه می‌دهد:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>پایش دوره‌ای و <Link to="/articles/ecg-home" className="text-primary hover:underline">نوار قلب</Link>:</strong> اطمینان از سلامت لیدها (سیم‌ها) و وضعیت باتری بدون نیاز به خروج از منزل و تحمل ترافیک.
              </li>
              <li className="text-base text-foreground">
                <strong>مراقبت از محل زخم:</strong> پیشگیری و درمان عفونت‌های احتمالی محل کاشت دستگاه توسط پرستاران مجرب.
              </li>
              <li className="text-base text-foreground">
                <strong>تنظیم دارویی:</strong> مدیریت تداخلات دارویی با تنظیمات الکترونیکی دستگاه توسط <Link to="/cardiology" className="text-primary hover:underline">متخصص قلب</Link>.
              </li>
              <li className="text-base text-foreground">
                <strong>آموزش اختصاصی:</strong> آموزش بیمار و خانواده برای شناسایی علائم هشداردهنده (مثل سکسکه مداوم یا ورم دست).
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              منابع و رفرنس‌های معتبر
            </h2>
            <ul className="space-y-2 mb-8 text-foreground">
              <li>• Mayo Clinic: Pacemakers and ICDs: Life-saving technology.</li>
              <li>• American Heart Association (AHA): Devices that may interfere with pacemakers.</li>
              <li>• Heart Rhythm Society (HRS): Guide for patients with implanted cardiac devices.</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              با خیالی آسوده، به تپش‌های قلب خود اعتماد کنید
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              اگر شما یا عزیزانتان پیس‌میکر یا ICD دارید، ما در نوید زندگی با ویزیت‌های منظم در منزل، امنیت و سلامت قلب شما را تضمین می‌کنیم.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Related Articles */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default PacemakerICDPage;
