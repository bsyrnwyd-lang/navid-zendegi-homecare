import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import cardiologyImage from "@/assets/cardiology-home-visit.jpg";
import afStrokeImage from "@/assets/af-stroke-risk-article.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const ECGHomePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const relatedArticles = [
    {
      title: "فیبریلاسیون دهلیزی و ریسک سکته مغزی",
      description: "راهنمای جامع فیبریلاسیون دهلیزی، تشخیص با نوار قلب و پیشگیری از سکته",
      image: afStrokeImage,
      link: "/articles/af-stroke-risk",
      category: "قلب و عروق"
    },
    {
      title: "تپش قلب: علل و روش‌های بررسی",
      description: "راهنمای کامل تپش قلب، علل و تشخیص با نوار قلب و هولتر",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    },
    {
      title: "خدمات قلب و عروق در منزل",
      description: "ویزیت متخصص قلب، نوار قلب و اکو در منزل توسط نوید زندگی",
      image: cardiologyImage,
      link: "/cardiology",
      category: "خدمات"
    }
  ];

  const faqItems = [
    {
      question: "نوار قلب چگونه گرفته می‌شود؟",
      answer: "برای گرفتن نوار قلب، تکنسین یا پرستار الکترودهایی را بر روی سینه، مچ دست‌ها و مچ پاها قرار می‌دهد. این الکترودها فعالیت الکتریکی قلب را ثبت کرده و به دستگاه ECG منتقل می‌کنند. کل فرآیند معمولاً ۵ تا ۱۰ دقیقه طول می‌کشد و کاملاً بی‌درد است."
    },
    {
      question: "آیا نوار قلب در منزل دقت کافی دارد؟",
      answer: "بله، دستگاه‌های ECG قابل حمل که در منزل استفاده می‌شوند، همان استانداردهای تشخیصی دستگاه‌های بیمارستانی را دارند. تیم نوید زندگی از دستگاه‌های کالیبره شده و استاندارد استفاده کرده و نتایج توسط متخصص قلب تفسیر می‌شود."
    },
    {
      question: "نوار قلب چه اطلاعاتی را نشان می‌دهد؟",
      answer: "نوار قلب اطلاعات مهمی درباره ریتم قلب، سرعت ضربان، اختلالات هدایت الکتریکی، علائم ایسکمی (کمبود اکسیژن)، بزرگی حفره‌های قلب و آسیب‌های قبلی به عضله قلب را نشان می‌دهد."
    },
    {
      question: "چه زمانی باید نوار قلب بگیرم؟",
      answer: "نوار قلب در موارد درد قفسه سینه، تپش قلب، تنگی نفس، سرگیجه، غش، پیگیری بیماری‌های قلبی شناخته شده، قبل از جراحی‌های بزرگ و برای بررسی اثرات برخی داروها توصیه می‌شود."
    },
    {
      question: "آیا برای نوار قلب نیاز به آماده‌سازی خاصی هست؟",
      answer: "نه، نوار قلب نیاز به آماده‌سازی خاصی ندارد. فقط توصیه می‌شود لباس راحت بپوشید و اگر استفاده از داروهای خاصی دارید، به پزشک اطلاع دهید. مصرف غذا یا نوشیدنی بر نتایج تأثیری ندارد."
    },
    {
      question: "نتایج نوار قلب چقدر طول می‌کشد تا آماده شود؟",
      answer: "در خدمات نوید زندگی، نوار قلب بلافاصله پس از ثبت به صورت الکترونیکی برای متخصص قلب ارسال می‌شود. تفسیر اولیه معمولاً در عرض چند ساعت و در موارد اورژانسی فوراً انجام می‌شود."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="نوار قلب در منزل تهران | ECG/EKG فوری و تخصصی - نوید زندگی"
        description="خدمات نوار قلب در منزل با دستگاه استاندارد و تفسیر توسط متخصص قلب. تشخیص فوری آریتمی، سکته قلبی و اختلالات قلبی در تهران"
        keywords="نوار قلب در منزل, ECG در خانه, نوار قلب در منزل تهران, تفسیر نوار قلب, تشخیص آریتمی, فیبریلاسیون دهلیزی"
        canonical="https://navidzendegi.com/articles/ecg-home"
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-21"
        modifiedTime="2025-01-21"
      />
      <Header />
      <FloatingContact />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              نوار قلب (ECG) در منزل: تشخیص فوری اختلالات قلبی با دقت تخصصی
            </h1>
            <div className="flex flex-col gap-2 text-muted-foreground text-lg">
              <p>نویسنده: نوید زندگی</p>
              <p>تاریخ انتشار: ۲ بهمن ۱۴۰۳</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src={ecgHomeImage}
              alt="نوار قلب در منزل - دستگاه ECG و تشخیص اختلالات قلبی"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              نوار قلب (Electrocardiogram - ECG یا EKG) یک ابزار تشخیصی بنیادین و غیرتهاجمی در پزشکی است که فعالیت الکتریکی قلب را ثبت می‌کند. این تست ساده، اطلاعات حیاتی در مورد ریتم، سرعت، و سلامت ساختاری قلب فراهم می‌کند.
            </p>

            <p className="text-lg leading-relaxed text-foreground mb-8">
              با خدمات <a href="/cardiology" className="text-primary hover:underline">نوار قلب در منزل تهران</a>، نوید زندگی امکان دسترسی سریع به این ابزار تشخیصی را برای بیماران قلبی، سالمندان و افراد با محدودیت حرکتی فراهم می‌سازد.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نوار قلب چیست و چگونه کار می‌کند؟
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-4">
              قلب ما یک پمپ عضلانی است که با سیگنال‌های الکتریکی کوچک تحریک می‌شود. ECG این سیگنال‌ها را از طریق الکترودهایی که روی سینه و اندام‌ها قرار می‌گیرند، ثبت می‌کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              ثبت فعالیت الکتریکی
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              دستگاه ECG، این سیگنال‌ها را تقویت کرده و به شکل یک نمودار موجی بر روی کاغذ یا صفحه نمایش ترسیم می‌کند. هر موج (مانند موج P، کمپلکس QRS و موج T) نشان‌دهنده یک رویداد الکتریکی خاص در چرخه قلب است (فعالیت دهلیزها، بطن‌ها و مرحله استراحت).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              تشخیص فوری
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-8">
              از آنجایی که نوار قلب یک تصویر لحظه‌ای از وضعیت قلب است، اغلب در شرایط اورژانسی یا هنگام <a href="/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل</a> برای ارزیابی سریع وضعیت بیمار حیاتی است.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              چه زمانی به نوار قلب (ECG) نیاز دارید؟
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-4">
              پزشکان متخصص قلب (کاردیولوژیست) و پزشکان عمومی، ECG را برای تشخیص یا پایش طیف گسترده‌ای از شرایط توصیه می‌کنند:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              ۱. تشخیص اختلالات ریتمیک (آریتمی‌ها)
            </h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li className="text-lg leading-relaxed text-foreground">
                <strong><a href="/articles/af-stroke-risk" className="text-primary hover:underline">فیبریلاسیون دهلیزی (AF)</a>:</strong> ECG شایع‌ترین کاربرد خود را در تشخیص AF دارد که یک عامل خطر اصلی برای سکته مغزی است.
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong><a href="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب</a> و سنکوپ:</strong> در بیمارانی که تپش قلب، ضربان نامنظم یا دوره‌های غش (سنکوپ) را تجربه می‌کنند، نوار قلب می‌تواند آریتمی‌های زمینه‌ای را مشخص کند.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              ۲. ارزیابی سکته قلبی (انفارکتوس میوکارد)
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              درد قفسه سینه یا مشکوک به حمله قلبی (Heart Attack)، نوار قلب مهم‌ترین ابزار تشخیصی اولیه است. تغییرات در بخش ST یا موج T می‌تواند نشان‌دهنده ایسکمی (کاهش جریان خون) یا آسیب واقعی عضله قلب باشد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              ۳. بررسی اثرات بیماری‌های دیگر بر قلب
            </h3>
            <ul className="list-disc pr-6 mb-8 space-y-2">
              <li className="text-lg leading-relaxed text-foreground">
                <strong>هایپرتروفی (بزرگ شدن قلب):</strong> ECG می‌تواند نشانه‌هایی از فشار بیش از حد بر بطن‌ها (مانند بزرگ شدن بطن چپ به دلیل <a href="/articles/high-blood-pressure-control" className="text-primary hover:underline">فشار خون مزمن</a>) را آشکار کند.
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong>عوارض دارویی:</strong> برخی داروها می‌توانند بر هدایت الکتریکی قلب تأثیر بگذارند؛ ECG برای پایش این عوارض استفاده می‌شود.
              </li>
              <li className="text-lg leading-relaxed text-foreground">
                <strong>تغییرات الکترولیتی:</strong> عدم تعادل شدید پتاسیم یا کلسیم می‌تواند با تغییر الگوهای ECG شناسایی شود.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نوار قلب در منزل: تخصص نوید زندگی و مزایای آن
            </h2>

            <p className="text-lg leading-relaxed text-foreground mb-4">
              نوار قلب در منزل یک سرویس ضروری برای مدیریت بیماران مزمن و سالمند است:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              سرعت و راحتی
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              انجام ECG در محیط خانه، به ویژه برای بیمارانی که جابجایی آن‌ها می‌تواند استرس‌زا یا خطرناک باشد (مانند بیماران پس از سکته قلبی یا افراد مبتلا به آنژین ناپایدار)، امکان‌پذیر است.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              پایش آریتمی‌های متناوب
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              در برخی موارد، آریتمی‌ها به صورت ناگهانی رخ می‌دهند. امکان تماس و اعزام سریع تیم نوید زندگی برای گرفتن ECG در زمان بروز علامت، شانس تشخیص AF یا سایر آریتمی‌های متناوب را افزایش می‌دهد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              تفسیر فوری
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-8">
              پس از ثبت نوار قلب توسط تکنسین یا پرستار، تصویر به صورت الکترونیکی برای تفسیر به متخصص قلب و عروق ارسال شده و طرح درمانی به سرعت آغاز می‌شود.
            </p>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                چرا نوار قلب در منزل انتخاب هوشمندانه‌ای است؟
              </h3>
              <ul className="list-disc pr-6 space-y-2">
                <li className="text-lg leading-relaxed text-foreground">حذف استرس جابجایی و ترافیک برای بیماران قلبی</li>
                <li className="text-lg leading-relaxed text-foreground">امکان تشخیص سریع در زمان بروز علائم</li>
                <li className="text-lg leading-relaxed text-foreground">دقت بالا با دستگاه‌های استاندارد و کالیبره شده</li>
                <li className="text-lg leading-relaxed text-foreground">تفسیر توسط متخصص قلب با تجربه</li>
                <li className="text-lg leading-relaxed text-foreground">صرفه‌جویی در زمان و هزینه</li>
                <li className="text-lg leading-relaxed text-foreground">مناسب برای سالمندان و بیماران با محدودیت حرکتی</li>
              </ul>
            </div>

            {/* Call to Action Section */}
            <div className="bg-secondary/10 p-8 rounded-xl my-10">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                نوار قلب در منزل با تفسیر تخصصی
              </h3>
              <p className="text-lg text-center text-foreground mb-6 leading-relaxed">
                برای تشخیص به موقع و دقیق مشکلات قلبی، زمان را از دست ندهید. خدمات نوار قلب در منزل تهران نوید زندگی، آسایش خانه را با دقت تخصصی ترکیب می‌کند.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCall}
                  size="lg"
                  className="gap-2 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  تماس فوری: 09386117912
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  size="lg"
                  className="gap-2 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  پیام در واتساپ
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              منابع علمی
            </h2>
            <ol className="list-decimal pr-6 mb-8 space-y-2">
              <li className="text-base leading-relaxed text-muted-foreground">
                Hampton, J. R. (2019). The ECG Made Easy. Churchill Livingstone.
              </li>
              <li className="text-base leading-relaxed text-muted-foreground">
                January, C. T., et al. (2019). 2019 AHA/ACC/HRS Focused Update of the 2014 AHA/ACC/HRS Guideline for the Management of Patients with Atrial Fibrillation. Circulation, 140(2), e125-e151.
              </li>
              <li className="text-base leading-relaxed text-muted-foreground">
                Amsterdam, E. A., et al. (2014). 2014 AHA/ACC Guideline for the Management of Patients with Non–ST-Elevation Acute Coronary Syndromes. Journal of the American College of Cardiology, 64(24), e139-e228.
              </li>
              <li className="text-base leading-relaxed text-muted-foreground">
                American Heart Association (AHA). (2020). Electrocardiogram (ECG or EKG). Retrieved from official AHA resources.
              </li>
            </ol>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <FAQSection faqs={faqItems} />
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          {/* Pricing Info */}
          <div className="mt-12">
            <PricingInfo />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ECGHomePage;
