import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import articleImage from "@/assets/adult-fever-article.jpg";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import childrenFeverImage from "@/assets/children-fever-article.jpg";
import feverTrackingImage from "@/assets/fever-tracking-article.jpg";
import influenzaImage from "@/assets/infectious-disease.jpg";

const AdultFeverPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تب در بزرگسالان", url: "/articles/adult-fever" },
  ];

  const faqs = [
    {
      question: "تب در بزرگسالان از چه دمایی به بالا تعریف می‌شود؟",
      answer: "تب در بزرگسالان معمولاً به دمای دهانی 38 درجه سانتی‌گراد (100.4 فارنهایت) یا بالاتر گفته می‌شود. این تعریف بسته به روش اندازه‌گیری (دهانی، گوشی، مقعدی یا زیربغلی) ممکن است کمی متفاوت باشد."
    },
    {
      question: "چه زمانی باید برای تب در بزرگسالان به پزشک مراجعه کرد؟",
      answer: "اگر تب شما بالای 39.4 درجه سانتی‌گراد باشد، بیش از 3 روز ادامه داشته باشد، یا با علائمی مانند تنگی نفس، درد شدید قفسه سینه، سردرد شدید، یا گیجی همراه باشد، باید فوراً به پزشک مراجعه کنید. افراد با بیماری‌های مزمن یا ضعف سیستم ایمنی باید در هر تب بالای 38 درجه با پزشک تماس بگیرند."
    },
    {
      question: "تب با منشأ ناشناخته (FUO) چیست؟",
      answer: "تب با منشأ ناشناخته یا FUO زمانی است که تب حداقل سه هفته ادامه داشته باشد و پس از بررسی‌های جامع در بیمارستان یا سه ویزیت سرپایی، علت آن هنوز مشخص نشده باشد. این وضعیت نیازمند رویکرد تشخیصی سیستماتیک برای بررسی علل عفونی، التهابی و سرطانی است."
    },
    {
      question: "دقیق‌ترین روش اندازه‌گیری تب در بزرگسالان چیست؟",
      answer: "اندازه‌گیری مقعدی (رکتال) دقیق‌ترین روش برای بازتاب دمای مرکزی بدن است. با این حال، برای راحتی و کاربرد روزمره، اندازه‌گیری دهانی یا تمپانیک (گوشی) معمولاً کافی است. اندازه‌گیری زیربغلی کمترین دقت را دارد."
    },
    {
      question: "چه داروهایی برای کاهش تب در بزرگسالان توصیه می‌شود؟",
      answer: "استامینوفن (مانند پاراسیتامول) و ایبوپروفن رایج‌ترین داروهای تب‌بر برای بزرگسالان هستند. هدف اصلی از این داروها کاهش دمای بدن و بهبود راحتی بیمار است، اما درمان علت اصلی تب نیز ضروری است. همیشه قبل از مصرف دارو با پزشک خود مشورت کنید."
    }
  ];

  const relatedArticles = [
    {
      title: "تب در کودکان: علل، علائم خطر و زمان مراجعه به پزشک",
      description: "راهنمای کامل برای والدین درباره تب کودکان، روش‌های اندازه‌گیری صحیح و اقدامات درمانی",
      image: childrenFeverImage,
      link: "/articles/children-fever",
      category: "سلامت کودکان"
    },
    {
      title: "ردیابی تب و زمان مراجعه به پزشک در منزل",
      description: "آموزش روش‌های صحیح ثبت و پیگیری تب و تشخیص زمان مناسب برای دریافت خدمات پزشکی در منزل",
      image: feverTrackingImage,
      link: "/articles/fever-tracking",
      category: "مراقبت منزل"
    },
    {
      title: "درمان آنفولانزا در منزل: راهنمای کامل",
      description: "راهکارهای علمی و موثر برای مدیریت علائم آنفولانزا در منزل و زمان مراجعه به پزشک",
      image: influenzaImage,
      link: "/articles/influenza-treatment",
      category: "بیماری‌های عفونی"
    }
  ];

  return (
    <>
      <SEOHead
        title="تب در بزرگسالان: راهنمای علمی تشخیص، دلایل و رویکرد تخصصی | نوید زندگی"
        description="راهنمای جامع و علمی تب در بزرگسالان: تعاریف دقیق، روش‌های اندازه‌گیری، علل عفونی و غیرعفونی، تب با منشأ ناشناخته (FUO) و زمان مراجعه به پزشک"
        keywords="تب در بزرگسالان, پایره‌کسیا, تب با منشأ ناشناخته, FUO, اندازه‌گیری تب, دمای بدن, علل تب, ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/adult-fever"
        ogImage={articleImage}
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-20T10:00:00+03:30"
        modifiedTime="2025-01-20T10:00:00+03:30"
      />
      
      <ArticleSchema
        title="تب در بزرگسالان: راهنمای علمی تشخیص، دلایل و رویکرد تخصصی"
        description="راهنمای جامع و علمی تب در بزرگسالان: تعاریف دقیق، روش‌های اندازه‌گیری، علل عفونی و غیرعفونی، تب با منشأ ناشناخته (FUO) و زمان مراجعه به پزشک"
        publishedTime="2025-01-20T10:00:00+03:30"
        modifiedTime="2025-01-20T10:00:00+03:30"
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
                تب در بزرگسالان: راهنمای علمی برای تشخیص، دلایل و رویکرد تخصصی
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: نوید زندگی</span>
                <span>•</span>
                <span>تاریخ انتشار: 20 دی 1403</span>
              </div>
              
              <img
                src={articleImage}
                alt="بررسی تب در بزرگسالان توسط پزشک متخصص در منزل با دماسنج دیجیتال"
                className="w-full h-auto rounded-lg shadow-lg mb-6"
                width="1536"
                height="1024"
              />
            </header>

            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-foreground">
                  برای <Link to="/general-doctor" className="text-primary hover:underline font-semibold">ویزیت پزشک عمومی در منزل</Link> و ارزیابی دقیق تب با <strong>تیم پزشکی نوید زندگی</strong> تماس بگیرید:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button asChild size="lg" className="text-lg">
                    <a href="tel:09386117912" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      تماس فوری: 09386117912
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services/internal">
                      مشاوره با متخصص داخلی
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>تب (Fever)</strong>، که در زبان پزشکی به آن <strong>پایره‌کسیا (Pyrexia)</strong> نیز گفته می‌شود، یک علامت بالینی رایج و اغلب نشان‌دهنده یک فرآیند بیماری‌زا است. تب به طور عمده به معنای افزایش تنظیم شده نقطه تنظیم حرارتی (Set Point) بدن در هیپوتالاموس است و معمولاً به عنوان دمای دهانی <strong>38.0°C (100.4°F)</strong> یا بالاتر تعریف می‌شود.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                تب یک پاسخ دفاعی بدن است که توسط سیستم ایمنی، عمدتاً از طریق آزادسازی پایروژن‌های اندوژن (Endogenous Pyrogens) مانند سیتوکین‌ها (به ویژه IL-1 و IL-6)، تنظیم می‌شود. این سیتوکین‌ها به هیپوتالاموس پیام می‌دهند تا نقطه تنظیم حرارتی را بالا ببرد.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                اندازه‌گیری و تعریف تب در بزرگسالان
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                تشخیص صحیح تب به روش اندازه‌گیری بستگی دارد. در بزرگسالان، تعاریف زیر معمولاً مورد استفاده قرار می‌گیرند:
              </p>

              <div className="bg-card border border-border rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-foreground mb-4">آستانه تب بر اساس روش اندازه‌گیری</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-semibold">دهانی (Oral)</span>
                    <span className="text-primary font-bold">≥ 38.0°C (100.4°F)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-semibold">تمپانیک/گوشی (Tympanic)</span>
                    <span className="text-primary font-bold">≥ 38.0°C (100.4°F)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-semibold">زیر بغلی (Axillary)</span>
                    <span className="text-primary font-bold">≥ 37.2°C (99.0°F)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">مقعدی/رکتال (Rectal)</span>
                    <span className="text-primary font-bold">≥ 38.3°C (101.0°F)</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border-r-4 border-primary p-6 my-8 rounded">
                <p className="text-foreground font-semibold">
                  <strong>نکته علمی:</strong> اندازه‌گیری مقعدی دقیق‌ترین روش برای بازتاب دمای مرکزی بدن است، در حالی که اندازه‌گیری زیر بغلی کمترین دقت را دارد.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                اتیولوژی (دلایل) تب در بزرگسالان
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                دلایل تب را می‌توان به سه دسته اصلی تقسیم کرد. اگرچه عفونت‌ها شایع‌ترین علت هستند، سایر علل جدی نیز باید در نظر گرفته شوند:
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                ۱. علل عفونی (Infectious Causes)
              </h3>
              
              <p className="text-lg leading-relaxed mb-4">
                شایع‌ترین و اصلی‌ترین دسته هستند:
              </p>

              <ul className="list-disc pr-6 space-y-2 mb-6">
                <li className="text-lg"><strong>عفونت‌های ویروسی:</strong> <Link to="/articles/influenza-treatment" className="text-primary hover:underline">آنفولانزا</Link>, سرماخوردگی, کووید-19</li>
                <li className="text-lg"><strong>عفونت‌های باکتریایی:</strong> ذات‌الریه (Pneumonia), عفونت‌های دستگاه ادراری (UTI), سپسیس (Sepsis), اندوکاردیت (Endocarditis)</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                ۲. علل التهابی/خودایمنی (Inflammatory/Autoimmune Causes)
              </h3>
              
              <p className="text-lg leading-relaxed mb-4">
                این موارد زمانی رخ می‌دهند که سیستم ایمنی بدن به طور غیرعادی فعال شود و سیتوکین‌های تب‌زا آزاد کند:
              </p>

              <ul className="list-disc pr-6 space-y-2 mb-6">
                <li className="text-lg"><strong>اختلالات روماتولوژی:</strong> آرتریت روماتوئید (Rheumatoid Arthritis), لوپوس اریتماتوز سیستمیک (SLE)</li>
                <li className="text-lg"><strong>بیماری‌های التهابی روده (IBD):</strong> مانند بیماری کرون و کولیت اولسراتیو</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                ۳. علل نئوپلاستیک (Neoplastic Causes)
              </h3>
              
              <p className="text-lg leading-relaxed mb-4">
                برخی از سرطان‌ها با آزاد کردن سیتوکین‌ها می‌توانند به طور مستقیم باعث تب شوند، که اغلب به عنوان <strong>تب پارانئوپلاستیک</strong> شناخته می‌شود:
              </p>

              <ul className="list-disc pr-6 space-y-2 mb-6">
                <li className="text-lg">لنفوم‌ها (Lymphomas)</li>
                <li className="text-lg">سرطان سلول‌های کلیوی (Renal Cell Carcinoma)</li>
                <li className="text-lg">برخی از لوسمی‌ها (Leukemias)</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                تب با منشأ ناشناخته (Fever of Unknown Origin - FUO)
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                اگر تب بزرگسالان برای حداقل <strong>سه هفته</strong> ادامه یابد و دلیل آن پس از سه روز تحقیق و بررسی جامع در بیمارستان یا سه ویزیت سرپایی همچنان نامشخص باشد، به آن <strong>تب با منشأ ناشناخته (FUO)</strong> می‌گویند. این وضعیت یک چالش تشخیصی است و نیازمند رویکرد سیستماتیک برای غربالگری طیف گسترده‌ای از علل عفونی، نئوپلاستیک و التهابی است.
              </p>

              <div className="bg-card border border-border rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-foreground mb-4">خدمات تشخیصی نوید زندگی</h3>
                <p className="mb-4">
                  تیم پزشکی نوید زندگی با <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه در منزل</Link> و <Link to="/services/radiology" className="text-primary hover:underline">رادیولوژی در منزل</Link> می‌تواند بررسی‌های اولیه را در راحتی خانه شما انجام دهد.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                رویکرد به مدیریت تب و ملاحظات در بزرگسالان
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                اگرچه تب یک پاسخ مفید بدن است، در بزرگسالان با مشکلات قلبی یا تنفسی می‌تواند نیاز متابولیک و اکسیژن‌رسانی را افزایش دهد و مضر باشد.
              </p>

              <div className="bg-primary/10 border-r-4 border-primary p-6 my-8 rounded">
                <p className="text-foreground font-semibold mb-2">
                  <strong>هدف درمانی:</strong>
                </p>
                <p className="text-foreground">
                  هدف اصلی، درمان علت زمینه‌ای است. استفاده از داروهای تب‌بر (مانند استامینوفن یا ایبوپروفن) برای کاهش دمای بدن و بهبود راحتی بیمار انجام می‌شود، اما درمان علت اصلی ضروری است.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                ارزیابی در منزل
              </h3>

              <p className="text-lg leading-relaxed mb-6">
                در بزرگسالانی که شرایط مزمن یا نقص ایمنی دارند، هرگونه تب ≥ 38.0°C نیازمند ارزیابی فوری پزشکی است. خدمات <Link to="/general-doctor" className="text-primary hover:underline">پزشک در منزل</Link> و تست‌های آزمایشگاهی در منزل به تسریع تشخیص و درمان، به ویژه در موارد مشکوک به عفونت‌های باکتریایی جدی، کمک می‌کند.
              </p>

              <Card className="my-8 bg-accent/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">چه زمانی باید فوراً با پزشک تماس بگیرید؟</h3>
                  <ul className="list-disc pr-6 space-y-2">
                    <li className="text-lg">تب بالای 39.4°C (103°F)</li>
                    <li className="text-lg">تب که بیش از 3 روز ادامه دارد</li>
                    <li className="text-lg">تنگی نفس یا درد شدید قفسه سینه</li>
                    <li className="text-lg">سردرد شدید با گردن سفت</li>
                    <li className="text-lg">گیجی یا تغییر در وضعیت هوشیاری</li>
                    <li className="text-lg">راش پوستی شدید</li>
                    <li className="text-lg">استفراغ مداوم</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                منابع علمی (References)
              </h3>

              <div className="bg-card border border-border rounded-lg p-6 space-y-3 text-sm">
                <p>[1] American Academy of Pediatrics (AAP). (2021). Fever in Infants and Children: Evaluation and Management.</p>
                <p>[2] Dinarello, C. A. (2004). Infection, fever, and the common cold. Nature Medicine, 10(2), 118-120.</p>
                <p>[3] Sexton, D. J., & Gallis, H. A. (2024). Evaluation of fever in the adult with bacteremia. UpToDate.</p>
                <p>[4] Cunha, B. A. (2003). Fever of unknown origin: clinical overview of classic and atypical causes. Infectious Disease Clinics of North America, 17(3), 513-566.</p>
                <p>[5] Knockaert, D. C., et al. (2003). Fever of unknown origin in adults: a review. Clinical Infectious Diseases, 36(11), 1435-1441.</p>
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

export default AdultFeverPage;