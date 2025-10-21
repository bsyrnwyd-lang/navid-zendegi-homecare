import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import articleImage from "@/assets/echo-indications-article.jpg";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import cardiologyImage from "@/assets/cardiology-home-visit.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const EchoIndicationsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "اندیکاسیون‌های اکو قلب", url: "/articles/echo-indications" },
  ];

  const faqs = [
    {
      question: "چه کسانی نیاز به انجام اکو قلب دارند؟",
      answer: "افراد با علائمی مانند تنگی نفس، درد قفسه سینه، تپش قلب، غش، یا افرادی که در معاینه فیزیکی صدای غیرطبیعی قلبی (Murmur) دارند، نیاز به اکو قلب دارند. همچنین بیماران با تاریخچه حمله قلبی، نارسایی قلبی، یا بیماری‌های دریچه‌ای نیاز به پایش منظم با اکو دارند."
    },
    {
      question: "اکو قلب چه اطلاعاتی را فراهم می‌کند؟",
      answer: "اکوکاردیوگرافی اطلاعات دقیقی از ساختار قلب، عملکرد پمپاژ بطن‌ها (کسر جهشی)، عملکرد دریچه‌های قلب، فشار داخل حفره‌های قلبی، وجود مایع اطراف قلب و تشخیص لخته‌های خونی فراهم می‌کند. این اطلاعات برای تشخیص و درمان بیماری‌های قلبی حیاتی است."
    },
    {
      question: "آیا اکو قلب درد دارد یا خطرناک است؟",
      answer: "خیر، اکو قلب یک روش کاملاً غیرتهاجمی و بدون درد است که از امواج اولتراسوند استفاده می‌کند. این تست هیچ اشعه یا خطری ندارد و می‌توان آن را بارها تکرار کرد. تنها در اکو از طریق مری (TEE) نیاز به آرام‌بخش و فرو بردن پروب در مری است."
    },
    {
      question: "اکو قلب در منزل چگونه انجام می‌شود؟",
      answer: "با دستگاه‌های اکو پرتابل مدرن، متخصص قلب می‌تواند در منزل بیمار حاضر شده و تست را انجام دهد. این روش برای بیماران مسن، بدحال یا افرادی که از نظر حرکتی محدودیت دارند بسیار مناسب است و فوریت تشخیص را افزایش می‌دهد."
    },
    {
      question: "چند وقت یکبار باید اکو قلب تکرار شود؟",
      answer: "فواصل زمانی تکرار اکو به وضعیت بیمار بستگی دارد. بیماران با نارسایی قلبی یا بیماری‌های دریچه‌ای ممکن است هر 6-12 ماه نیاز به پایش داشته باشند. بیماران تحت شیمی‌درمانی قلبی‌سمی نیز به پایش منظم نیاز دارند. پزشک متخصص برنامه پیگیری را تعیین می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "اکو قلب در منزل: تشخیص دقیق بیماری‌های قلبی با دستگاه پرتابل",
      description: "انجام اکوکاردیوگرافی تخصصی در منزل با دستگاه پرتابل و تفسیر توسط متخصص قلب",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "خدمات پزشکی"
    },
    {
      title: "خدمات تخصصی کاردیولوژی در منزل",
      description: "ویزیت متخصص قلب و عروق در منزل با تجهیزات تشخیصی پیشرفته",
      image: cardiologyImage,
      link: "/cardiology",
      category: "خدمات تخصصی"
    },
    {
      title: "تپش قلب: علل، تشخیص و درمان",
      description: "راهنمای جامع درباره علل مختلف تپش قلب و روش‌های تشخیص و درمان آن",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "سلامت قلب"
    }
  ];

  return (
    <>
      <SEOHead
        title="اندیکاسیون‌های اکو قلب: چه زمانی نیاز به اکوکاردیوگرافی دارید؟ | نوید زندگی"
        description="راهنمای جامع علمی اندیکاسیون‌های اکو قلب: علائم و شرایط بالینی که انجام اکوکاردیوگرافی را ضروری می‌سازند، انواع بیماری‌های قلبی و اکو در منزل"
        keywords="اندیکاسیون اکو قلب, اکوکاردیوگرافی, چه زمانی اکو قلب لازم است, نارسایی قلبی, بیماری دریچه‌ای, اکو قلب در منزل, متخصص قلب"
        canonical="https://navidzendegi.com/articles/echo-indications"
        ogImage={articleImage}
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-20T14:00:00+03:30"
        modifiedTime="2025-01-20T14:00:00+03:30"
      />
      
      <ArticleSchema
        title="اندیکاسیون‌های اکو قلب: چه زمانی یک فرد به اکوکاردیوگرافی نیاز دارد؟"
        description="راهنمای جامع علمی اندیکاسیون‌های اکو قلب: علائم و شرایط بالینی که انجام اکوکاردیوگرافی را ضروری می‌سازند، انواع بیماری‌های قلبی و اکو در منزل"
        publishedTime="2025-01-20T14:00:00+03:30"
        modifiedTime="2025-01-20T14:00:00+03:30"
        image={articleImage}
        author="نوید زندگی"
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          <article className="max-w-4xl mx-auto mt-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                اندیکاسیون‌های اکو قلب: چه زمانی یک فرد به اکوکاردیوگرافی نیاز دارد؟
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: نوید زندگی</span>
                <span>•</span>
                <span>تاریخ انتشار: 20 دی 1403</span>
              </div>
              
              <img
                src={articleImage}
                alt="انجام اکوکاردیوگرافی توسط متخصص قلب در منزل با دستگاه پرتابل"
                className="w-full h-auto rounded-lg shadow-lg mb-6"
                width="1536"
                height="1024"
              />
            </header>

            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-foreground">
                  برای <Link to="/articles/echo-home" className="text-primary hover:underline font-semibold">اکو قلب در منزل</Link> با دستگاه پرتابل و تفسیر توسط <Link to="/cardiology" className="text-primary hover:underline font-semibold">متخصص قلب</Link> با <strong>تیم پزشکی نوید زندگی</strong> تماس بگیرید:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button asChild size="lg" className="text-lg">
                    <a href="tel:09386117912" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      تماس فوری: 09386117912
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services/echo-ecg">
                      خدمات اکو و نوار قلب
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>اکوکاردیوگرافی (Echocardiography)</strong> یا اکو قلب، یک روش تصویربرداری غیرتهاجمی با استفاده از امواج اولتراسوند است که اطلاعات حیاتی و ساختاری را از قلب فراهم می‌کند. این ابزار به عنوان یک <strong>سنگ بنای تشخیصی در کاردیولوژی مدرن</strong> شناخته می‌شود و استفاده از آن بر اساس دستورالعمل‌های بالینی دقیق صورت می‌گیرد.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                تصمیم برای تجویز اکو قلب معمولاً بر اساس ارزیابی علائم بالینی بیمار، یافته‌های معاینه فیزیکی و نتایج تست‌های اولیه دیگر مانند <Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب (ECG)</Link> یا تصویربرداری قفسه سینه است.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                علائم بالینی که اکو قلب را ضروری می‌سازند
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                وجود برخی علائم یا یافته‌های فیزیکی، نیازمند ارزیابی ساختاری و عملکردی قلب توسط اکوکاردیوگرافی است:
              </p>

              <div className="space-y-6 mb-8">
                <Card className="border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      ۱. تنگی نفس (Dyspnea) یا نارسایی قلبی (Heart Failure)
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                      اگر بیمار <strong>تنگی نفس بدون علت واضح ریوی</strong> یا سایر دلایل شناخته شده داشته باشد، اکو برای ارزیابی <strong>عملکرد پمپاژ بطن‌ها (کسر جهشی یا Ejection Fraction)</strong> و تشخیص نارسایی قلبی (HF) ضروری است.
                    </p>
                    <div className="bg-primary/10 p-4 rounded">
                      <p className="font-semibold">
                        اکو می‌تواند نوع نارسایی قلبی (نارسایی سیستولیک یا دیاستولیک) را مشخص کند.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      ۲. درد قفسه سینه (Chest Pain) با منشأ نامشخص
                    </h3>
                    <p className="text-lg leading-relaxed">
                      درد قفسه سینه، به ویژه اگر به دنبال <strong>انفارکتوس میوکارد (حمله قلبی)</strong> باشد، اکو قلب برای ارزیابی آسیب عضلانی، اندازه بطن و پتانسیل عوارض مکانیکی تجویز می‌شود. این تست می‌تواند مناطق آسیب دیده عضله قلب را شناسایی کند.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      ۳. غش یا سنکوپ (Syncope) و تپش قلب (Palpitations)
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                      اگر سنکوپ یا دوره‌های <Link to="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب (احساس ضربان نامنظم)</Link> در ارتباط با بیماری‌های ساختاری احتمالی قلب باشد، اکو می‌تواند ناهنجاری‌هایی مانند:
                    </p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li className="text-lg"><strong>کاردیومیوپاتی هیپرتروفیک (HCM)</strong></li>
                      <li className="text-lg">مشکلات دریچه‌ای که زمینه‌ساز آریتمی هستند</li>
                      <li className="text-lg">اختلالات ساختاری دیگر قلب</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      ۴. شواهد بالینی بیماری دریچه‌ای (Valvular Disease)
                    </h3>
                    <p className="text-lg leading-relaxed">
                      شنیدن <strong>صداهای غیرعادی قلبی (Murmurs)</strong> در معاینه فیزیکی قویاً انجام اکو را ایجاب می‌کند تا نوع و شدت اختلال دریچه‌ای (مانند تنگی آئورت یا نارسایی میترال) مشخص شود. اکو می‌تواند دقیقاً درجه آسیب دریچه را ارزیابی کند.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                شرایط و بیماری‌هایی که نیازمند اکو قلب منظم هستند
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                علاوه بر علائم حاد، برخی شرایط مزمن یا شناخته شده، نیاز به اکوکاردیوگرافی به عنوان ابزار <strong>پایش (Monitoring)</strong> دارند:
              </p>

              <div className="bg-card border border-border rounded-lg p-6 space-y-6 my-8">
                <div className="border-b border-border pb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    🫁 فشار خون ریوی (Pulmonary Hypertension)
                  </h3>
                  <p className="text-lg">
                    اکو قلب برای تخمین فشار شریان ریوی و ارزیابی تأثیر آن بر بطن راست قلب، ابزار کلیدی است. این بیماران نیاز به پایش منظم دارند.
                  </p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    🦠 عفونت یا التهاب قلبی
                  </h3>
                  <ul className="list-disc pr-6 space-y-2">
                    <li className="text-lg">
                      <strong>اندوکاردیت (Endocarditis):</strong> اکو (به ویژه اکو از طریق مری یا TEE) برای تشخیص توده‌های عفونی (Vegetations) روی دریچه‌ها و ارزیابی آسیب دریچه‌ای ضروری است.
                    </li>
                    <li className="text-lg">
                      <strong>پریکاردیت و افیوژن پریکارد:</strong> اکو برای تشخیص التهاب کیسه اطراف قلب و وجود مایع غیرعادی در اطراف قلب به کار می‌رود.
                    </li>
                  </ul>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    👶 نقص مادرزادی قلب (Congenital Heart Defects)
                  </h3>
                  <p className="text-lg">
                    بیماران مبتلا به نقایص مادرزادی (مانند سوراخ بین بطنی یا دهلیزی) نیاز به پیگیری منظم با اکو برای ارزیابی عملکرد قلب در طول زمان دارند.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    💊 بیماران تحت شیمی‌درمانی (Cardiotoxicity)
                  </h3>
                  <p className="text-lg">
                    برخی از داروهای شیمی‌درمانی (مانند آنتراسایکلین‌ها) می‌توانند به عضله قلب آسیب بزنند. اکو قلب در فواصل منظم برای ارزیابی آسیب عضله قلب و جلوگیری از نارسایی قلبی ناشی از دارو ضروری است.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                اکو قلب در منزل: افزایش دسترسی و فوریت تشخیص
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                امروزه، با وجود <strong>دستگاه‌های اکوکاردیوگرافی پرتابل (Portable)</strong> با کیفیت بالا، امکان انجام تست توسط <Link to="/cardiology" className="text-primary hover:underline">متخصص قلب و عروق در منزل</Link> بیمار فراهم شده است. این سرویس به ویژه برای بیماران مسن، بدحال یا کسانی که از نظر حرکتی محدودیت دارند، یک مزیت بزرگ است.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="bg-primary/5 border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-primary mb-3">✅ سهولت در پیگیری</h3>
                    <p className="text-lg">
                      امکان پایش منظم شرایط مزمن مانند نارسایی قلبی بدون نیاز به جابجایی بیمار و کاهش استرس و خستگی ناشی از رفت و آمد به بیمارستان.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-primary mb-3">⚡ تشخیص سریع</h3>
                    <p className="text-lg">
                      ارزیابی فوری بیمارانی که در منزل دچار تنگی نفس حاد یا نارسایی قلبی ناگهانی شده‌اند، می‌تواند در تعیین سریع‌تر روند درمان حیاتی باشد.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/10 border-r-4 border-primary p-6 my-8 rounded">
                <h3 className="text-2xl font-bold text-foreground mb-4">نتیجه‌گیری</h3>
                <p className="text-lg leading-relaxed">
                  اکو قلب یک ابزار تشخیصی انعطاف‌پذیر و غیرتهاجمی است که در هر زمان که نیاز به ارزیابی ساختار و عملکرد مکانیکی قلب وجود داشته باشد، به شدت اندیکاسیون دارد. <strong>تشخیص به موقع از طریق اکو برای مدیریت مؤثر بیماری‌های قلبی ضروری است.</strong>
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                منابع علمی (References)
              </h3>

              <div className="bg-card border border-border rounded-lg p-6 space-y-3 text-sm">
                <p>[1] American Society of Echocardiography (ASE) / American College of Cardiology (ACC). (2020). Guidelines for the Use of Echocardiography in the Evaluation of Cardiac Structures and Function.</p>
                <p>[2] Yancy, C. W., et al. (2017). 2017 ACC/AHA/HFSA Focused Update of the 2013 ACCF/AHA Guideline for the Management of Heart Failure. Circulation, 136(6), e137-e161.</p>
                <p>[3] Lang, R. M., et al. (2015). Recommendations for cardiac chamber quantification by echocardiography in adults: an update from the American Society of Echocardiography and the European Association of Cardiovascular Imaging. Journal of the American Society of Echocardiography, 28(1), 1-39.e14.</p>
                <p>[4] Nishimura, R. A., et al. (2014). 2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease. Journal of the American College of Cardiology, 63(22), e57-e185.</p>
              </div>
            </div>

            <FAQSection faqs={faqs} />

            <div className="mt-12">
              <RelatedArticles articles={relatedArticles} />
            </div>

            <div className="mt-12">
              <PricingInfo />
            </div>
          </article>
        </main>

        <FloatingContact />
        <Footer />
      </div>
    </>
  );
};

export default EchoIndicationsPage;