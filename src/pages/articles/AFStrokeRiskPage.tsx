import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import afStrokeImage from "@/assets/af-stroke-risk-article.jpg";
import echoIndicationsImage from "@/assets/echo-indications-article.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AFStrokeRiskPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "فیبریلاسیون دهلیزی و ریسک سکته مغزی", url: "/articles/af-stroke-risk" }
  ];

  const faqs = [
    {
      question: "فیبریلاسیون دهلیزی (AF) چیست و چرا خطرناک است؟",
      answer: "فیبریلاسیون دهلیزی یک آریتمی قلبی است که در آن دهلیزهای قلب به جای انقباض منظم، به صورت نامنظم می‌لرزند. این وضعیت باعث رکود خون و تشکیل لخته در دهلیز چپ می‌شود که می‌تواند به مغز برسد و سکته مغزی ایجاد کند. سکته‌های ناشی از AF معمولاً شدیدتر هستند."
    },
    {
      question: "چگونه می‌توان AF را تشخیص داد؟",
      answer: "تشخیص AF با انجام نوار قلب (ECG) انجام می‌شود. از آنجا که این آریتمی می‌تواند بدون علامت باشد یا به صورت متناوب رخ دهد، انجام نوار قلب در منزل برای افراد پرخطر می‌تواند به تشخیص زودهنگام کمک کند. نوید زندگی این خدمت را در منزل ارائه می‌دهد."
    },
    {
      question: "درمان AF برای پیشگیری از سکته چیست؟",
      answer: "اصلی‌ترین درمان برای پیشگیری از سکته در بیماران AF، مصرف داروهای ضد انعقاد خوراکی مانند NOACs (آپیکسابان، ریواروکسابان) است. این داروها از تشکیل لخته در قلب جلوگیری می‌کنند. نوید زندگی با اعزام پرستار به منزل، بر مصرف صحیح این داروها نظارت می‌کند."
    },
    {
      question: "امتیازدهی CHA₂DS₂VASc چیست؟",
      answer: "این یک ابزار بالینی است که ریسک سکته مغزی در بیماران AF را بر اساس عواملی مانند سن، فشار خون، دیابت، نارسایی قلبی و سابقه سکته قبلی محاسبه می‌کند. بر اساس این امتیاز، پزشک تصمیم می‌گیرد که آیا بیمار نیاز به شروع درمان ضد انعقاد دارد یا خیر."
    },
    {
      question: "آیا نوار قلب در منزل برای تشخیص AF کافی است؟",
      answer: "بله، نوار قلب استاندارد 12 لیدی که توسط متخصص یا تکنسین مجرب در منزل انجام شود، می‌تواند AF را تشخیص دهد. در برخی موارد، ممکن است نیاز به نوار قلب 24 ساعته (هولتر) باشد تا حملات متناوب AF شناسایی شوند. نوید زندگی هر دو خدمت را ارائه می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "اندیکاسیون‌های اکو قلب",
      description: "چه زمانی به اکوکاردیوگرافی نیاز دارید؟",
      image: echoIndicationsImage,
      link: "/articles/echo-indications",
      category: "تشخیص"
    },
    {
      title: "تپش قلب (پالپیتیشن)",
      description: "علل، تشخیص و درمان تپش قلب",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "علائم"
    },
    {
      title: "وارفارین و مدیریت ضد انعقاد",
      description: "نکات مهم در مصرف داروهای ضد انعقاد",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "دارو"
    }
  ];

  return (
    <>
      <SEOHead
        title="فیبریلاسیون دهلیزی (AF) و ریسک سکته مغزی | نوار قلب در منزل | نوید زندگی"
        description="فیبریلاسیون دهلیزی شایع‌ترین آریتمی و عامل خطر قوی سکته مغزی است. تشخیص زودهنگام با نوار قلب در منزل و درمان ضد انعقاد، کلید پیشگیری از سکته است."
        keywords="فیبریلاسیون دهلیزی, AF, آریتمی قلبی, سکته مغزی, نوار قلب در منزل, ضد انعقاد, NOACs, CHA2DS2VASc, پیشگیری از سکته, ویزیت متخصص قلب در منزل"
        canonical="https://navidzendegi.com/articles/af-stroke-risk"
        ogImage={afStrokeImage}
        ogType="article"
        publishedTime="2025-10-20"
        modifiedTime="2025-10-20"
      />
      
      <ArticleSchema
        title="فیبریلاسیون دهلیزی (AF) و ریسک سکته مغزی: کلید پیشگیری با نوار قلب در منزل"
        description="راهنمای جامع درباره فیبریلاسیون دهلیزی، مکانیسم سکته مغزی در AF، تشخیص با نوار قلب و پیشگیری با درمان ضد انعقاد"
        publishedTime="2025-10-20"
        modifiedTime="2025-10-20"
        image={afStrokeImage}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-8 max-w-4xl">
            <BreadcrumbNavigation items={breadcrumbItems} />
            
            <img 
              src={afStrokeImage} 
              alt="فیبریلاسیون دهلیزی و ریسک سکته مغزی" 
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                فیبریلاسیون دهلیزی (AF) و ریسک سکته مغزی: کلید پیشگیری با نوار قلب در منزل و ضد انعقاد
              </h1>
            </header>

            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  فیبریلاسیون دهلیزی (AF)، شایع‌ترین آریتمی قلبی پایدار، نه تنها یک اختلال ریتمیک است، بلکه یک عامل خطر قوی و قابل پیشگیری برای سکته مغزی ایسکمیک به شمار می‌رود. تشخیص زودهنگام AF و شروع به موقع درمان ضد انعقاد، حیاتی‌ترین گام در نجات جان بیمار است.
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  نوید زندگی با ارائه خدمات تخصصی <Link to="/services/holter" className="text-primary hover:underline">نوار قلب در منزل</Link>، <Link to="/services/cardiology" className="text-primary hover:underline">ویزیت متخصص قلب در منزل</Link> و مدیریت دقیق دارویی، به غربالگری و پایش مستمر بیماران پرخطر در محیط امن خانه کمک می‌کند.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:09386117912"
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>تماس فوری: 09386117912</span>
                  </a>
                  <a 
                    href="https://wa.me/989386117912"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>واتساپ</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <section className="prose prose-lg max-w-none mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                مکانیسم سکته در بیماران AF: چرا تشخیص زودهنگام ضروری است؟
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ریسک بالای سکته مغزی در AF به دلیل آمبولی کاردیوژنیک است. درک این مکانیسم، ضرورت پایش ریتم قلب را مشخص می‌کند:
              </p>
              
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">رکود خون در دهلیز چپ</h3>
                <p className="text-muted-foreground leading-relaxed">
                  در AF، حفره‌های بالایی قلب (دهلیزها) به جای انقباض مؤثر، می‌لرزند. این لرزش نامنظم منجر به رکود خون (Stasis)، به‌ویژه در زائده دهلیز چپ (LAA)، می‌شود.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">تشکیل لخته و آمبولی</h3>
                <p className="text-muted-foreground leading-relaxed">
                  رکود خون در LAA بستر مناسبی برای تشکیل لخته‌های خونی (Thrombi) است. بیش از 90% از لخته‌های مسبب سکته مغزی در این بیماران، از همین ناحیه سرچشمه می‌گیرند.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">شدت سکته</h3>
                <p className="text-muted-foreground leading-relaxed">
                  سکته‌های ناشی از AF معمولاً به دلیل اندازه بزرگ لخته‌ها، شدیدتر بوده و با معلولیت و مرگ و میر بالاتری همراه هستند.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                به همین دلیل، هرگونه تأخیر در تشخیص AF و آغاز درمان، به معنای پذیرش ریسک بالای سکته مغزی است.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">
                ابزارهای ارزیابی ریسک و ضرورت نوار قلب در منزل
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                تشخیص AF اغلب توسط <Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب (ECG)</Link> انجام می‌شود، اما از آنجا که این آریتمی می‌تواند بدون علامت باشد، غربالگری منظم در افراد پرخطر اهمیت دارد.
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">غربالگری فعال با نوار قلب در منزل</h3>
                <p className="text-muted-foreground leading-relaxed">
                  برای افراد مسن، کسانی که سابقه <Link to="/articles/high-blood-pressure" className="text-primary hover:underline">نارسایی قلبی یا فشار خون</Link> دارند، انجام نوار قلب در منزل می‌تواند به صورت دوره‌ای و در زمان مناسب بیمار انجام شود تا حملات AF متناوب (Paroxysmal) تشخیص داده شوند.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">امتیازدهی CHA₂DS₂VASc</h3>
                <p className="text-muted-foreground leading-relaxed">
                  این ابزار بالینی ریسک سکته مغزی بیمار را بر اساس عواملی مانند سن، فشار خون بالا، دیابت و نارسایی قلبی تعیین می‌کند و مبنای شروع درمان ضد انعقاد است.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">
                مدیریت و پیشگیری از سکته مغزی: رویکرد نوید زندگی
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                پیشگیری در AF، در وهله اول با درمان‌های ضد انعقاد خوراکی صورت می‌گیرد.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">درمان ضد انعقاد خوراکی (Oral Anticoagulation)</h3>
              
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">NOACs/DOACs (نسل جدید ضد انعقادها)</h4>
                <p className="text-muted-foreground leading-relaxed">
                  این داروها (مانند آپیکسابان یا ریواروکسابان) به دلیل اثربخشی بالا و خطر کمتر خونریزی، خط اول درمان در اکثر بیماران پرخطر هستند.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">مدیریت دارو در منزل</h4>
                <p className="text-muted-foreground leading-relaxed">
                  شرکت نوید زندگی با اعزام <Link to="/services/nursing" className="text-primary hover:underline">پرستاران متخصص</Link>، بر پایبندی دقیق بیمار به مصرف داروهای ضد انعقاد نظارت می‌کند تا از دوز نادرست یا فراموشی دارو که می‌تواند ریسک سکته را به شدت افزایش دهد، جلوگیری شود.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">ویزیت و مشاوره تخصصی در منزل</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                پزشکان متخصص قلب و عروق با حضور در منزل، می‌توانند به طور جامع علائم بیمار، نتایج نوار قلب و <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو قلب</Link> (در صورت نیاز به اکو قلب در منزل) را ارزیابی کرده و بهترین رژیم درمانی (دارویی یا مداخله‌ای) را با توجه به شرایط زندگی بیمار تعیین نمایند.
              </p>

              <Card className="bg-primary/10 border-primary/30 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">دعوت به عمل</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    با تشخیص و درمان به موقع فیبریلاسیون دهلیزی، خطر سکته مغزی را کاهش دهید. برای هماهنگی فوری جهت دریافت خدمات تخصصی نوار قلب، ویزیت یا تزریقات ضد انعقاد در منزل، با نوید زندگی تماس بگیرید.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:09386117912"
                      className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>09386117912</span>
                    </a>
                    <Link 
                      to="/contact"
                      className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      فرم تماس
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mb-3">منابع (References)</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-8">
                <li>American Heart Association (AHA). (2020). Atrial Fibrillation and Stroke.</li>
                <li>Al-Saady, N. M., et al. (1999). Left atrial appendage: structure, function, and role in thromboembolism. Heart, 82(5), 547–554.</li>
                <li>Kirchhof, P., et al. (2016). 2016 ESC Guidelines for the management of atrial fibrillation developed in collaboration with EACTS. European Heart Journal, 37(38), 2893–2962.</li>
                <li>January, C. T., et al. (2019). 2019 AHA/ACC/HRS Focused Update of the 2014 AHA/ACC/HRS Guideline for the Management of Patients with Atrial Fibrillation. Circulation, 140(2), e125-e151.</li>
                <li>Ruff, C. T., et al. (2014). Comparison of the efficacy and safety of new oral anticoagulants with warfarin in patients with atrial fibrillation: a meta-analysis of randomised trials. The Lancet, 383(9921), 955-962.</li>
              </ol>
            </section>

            <FAQSection faqs={faqs} />

            <div className="mt-12">
              <RelatedArticles articles={relatedArticles} />
            </div>

            <div className="mt-8">
              <PricingInfo />
            </div>
          </article>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default AFStrokeRiskPage;
