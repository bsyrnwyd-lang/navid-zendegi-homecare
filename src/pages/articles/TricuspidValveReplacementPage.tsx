import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import { Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import tricuspidValveImage from "@/assets/tricuspid-valve-replacement.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import holterImage from "@/assets/holter-home-service.jpg";
import mitralValveImage from "@/assets/mitral-valve-replacement.jpg";

const TricuspidValveReplacementPage = () => {
  const faqs = [
    {
      question: "دریچه تریکاسپید چیست و چه وظیفه‌ای دارد؟",
      answer: "دریچه تریکاسپید (سه لتی) دروازه بین دهلیز راست و بطن راست قلب است. وظیفه آن جلوگیری از برگشت خون به دهلیز راست هنگام انقباض بطن است و نقش مهمی در جریان صحیح خون به سمت ریه‌ها دارد."
    },
    {
      question: "چه زمانی تعویض دریچه تریکاسپید ضروری است؟",
      answer: "تعویض دریچه زمانی ضروری می‌شود که نارسایی یا تنگی شدید دریچه وجود داشته باشد و روش‌های ترمیمی پاسخگو نباشند. همچنین در موارد عفونت دریچه (اندوکاردیت) یا ناهنجاری‌های مادرزادی مانند ابشتاین نیز ممکن است نیاز به تعویض باشد."
    },
    {
      question: "تفاوت دریچه بیولوژیک و مکانیکی برای تریکاسپید چیست؟",
      answer: "دریچه بیولوژیک خطر لخته‌زایی کمتری دارد و نیاز کمتری به داروهای رقیق‌کننده دارد، اما عمر کوتاه‌تری دارد. دریچه مکانیکی عمر طولانی‌تری دارد اما به دلیل جریان خون کندتر در سمت راست قلب، ریسک لخته‌زایی بالاتری دارد."
    },
    {
      question: "چرا هولتر ریتم پس از جراحی تریکاسپید مهم است؟",
      answer: "دریچه تریکاسپید در نزدیکی سیستم برق‌رسانی قلب قرار دارد. جراحی در این ناحیه ممکن است باعث آریتمی‌هایی مثل بلوک قلبی یا فیبریلاسیون دهلیزی شود. هولتر ۲۴ ساعته به تشخیص این مشکلات کمک می‌کند."
    },
    {
      question: "آیا می‌توان خدمات پایش قلبی را در منزل انجام داد؟",
      answer: "بله، نوید زندگی خدمات اکوکاردیوگرافی پرتابل، نصب هولتر و آزمایش خون را در منزل ارائه می‌دهد. این خدمات برای بیماران پس از جراحی دریچه بسیار مفید است."
    },
    {
      question: "علائم هشدار پس از تعویض دریچه تریکاسپید چیست؟",
      answer: "تورم ناگهانی پا یا شکم، ضربان قلب نامنظم یا کند، زرد شدن پوست یا چشم‌ها، و تنگی نفس در حالت درازکش از علائم هشداری هستند که نیاز به بررسی فوری دارند."
    }
  ];

  const relatedArticles = [
    {
      title: "تعویض دریچه میترال",
      description: "راهنمای جامع تعویض دریچه میترال و مراقبت‌های پس از عمل",
      image: mitralValveImage,
      link: "/articles/mitral-valve-replacement",
      category: "قلب"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "خدمات اکوی قلب تخصصی در محیط امن خانه شما",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "قلب"
    },
    {
      title: "هولتر مانیتورینگ قلب",
      description: "پایش ۲۴ ساعته ریتم قلب با نصب هولتر در منزل",
      image: holterImage,
      link: "/articles/holter-guide",
      category: "قلب"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="تعویض دریچه تریکاسپید؛ بازسازی مسیر خون و مراقبت در منزل | نوید زندگی"
        description="راهنمای جامع تعویض دریچه تریکاسپید: بیماری‌های دریچه سه‌لتی، انتخاب دریچه بیولوژیک یا مکانیکی، خدمات هولتر و اکو در منزل. تماس: 09386117912"
        keywords="تعویض دریچه تریکاسپید, دریچه سه لتی, نارسایی تریکاسپید, تنگی تریکاسپید, هولتر در منزل, اکو قلب, نوید زندگی"
        canonical="https://navidzendegi.ir/articles/tricuspid-valve-replacement"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-01-05"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto max-w-4xl px-4 pt-4">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"تعویض دریچه تریکاسپید",url:"/articles/tricuspid-valve-replacement"}]} />
        </div>
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2">تاریخ انتشار: ۱۴۰۴/۱۰/۱۵</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                تعویض دریچه تریکاسپید؛ بازسازی مسیر خون در قلب راست و مراقبت‌های پس از عمل
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                دریچه تریکاسپید (Tricuspid) یا «سه لتی»، دروازه بین دهلیز راست و بطن راست قلب است. اگرچه در گذشته به آن «دریچه فراموش شده» می‌گفتند، اما امروزه مشخص شده که سلامت این دریچه برای جلوگیری از نارسایی قلب راست و ورم اندام‌ها حیاتی است.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={tricuspidValveImage} 
                alt="تعویض دریچه تریکاسپید - دریچه سه لتی قلب"
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
                <strong>هشدار مهم:</strong> اطلاعات این مقاله صرفاً جهت آگاهی عمومی است و جایگزین مشاوره پزشکی نمی‌شود. هرگز خوددرمانی نکنید و برای تشخیص و درمان حتماً با پزشک متخصص مشورت کنید.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۱. چه زمانی تعویض دریچه تریکاسپید ضروری است؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              زمانی که دریچه تریکاسپید دچار نارسایی شدید (برگشت خون) یا تنگی شود و روش‌های ترمیمی پاسخگو نباشند، عمل تعویض دریچه تریکاسپید (TVR) انجام می‌شود. این جراحی باعث بهبود جریان خون به سمت ریه‌ها شده و فشار را از روی کبد و سیاهرگ‌های بدن برمی‌دارد.
            </p>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              این عمل معمولاً در موارد زیر توسط جراح قلب توصیه می‌شود:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">
                <strong>نارسایی شدید (Regurgitation):</strong> وقتی دریچه به خوبی بسته نمی‌شود و خون به دهلیز راست برمی‌گردد.
              </li>
              <li className="text-base text-foreground">
                <strong>تنگی شدید (Stenosis):</strong> وقتی دریچه سفت شده و اجازه ورود خون به بطن راست را نمی‌دهد.
              </li>
              <li className="text-base text-foreground">
                <strong>عفونت دریچه (Endocarditis):</strong> که معمولاً در اثر عفونت‌های خونی ایجاد شده و دریچه را تخریب می‌کند.
              </li>
              <li className="text-base text-foreground">
                <strong>ناهنجاری ابشتاین (Ebstein's Anomaly):</strong> یک نقص مادرزادی در ساختار دریچه.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۲. انتخاب نوع دریچه: بیولوژیک یا مکانیکی؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              در سمت راست قلب (بخش تریکاسپید)، سرعت جریان خون کمتر از سمت چپ است. به همین دلیل انتخاب نوع دریچه حساسیت بالایی دارد:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>دریچه بیولوژیک (حیوانی):</strong> در اکثر موارد برای تریکاسپید اولویت دارد، زیرا خطر لخته شدن خون در آن کمتر است و بیمار نیاز کمتری به داروهای رقیق‌کننده سنگین دارد.
              </li>
              <li className="text-base text-foreground">
                <strong>دریچه مکانیکی (فلزی):</strong> عمر طولانی‌تری دارد اما به دلیل جریان خون کندتر در سمت راست، ریسک لخته‌زایی آن بالاست و نیاز به کنترل بسیار دقیق INR دارد.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۳. خدمات تخصصی «نوید زندگی» برای بیماران در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              بیماران پس از تعویض دریچه تریکاسپید با چالش‌هایی مثل مدیریت ورم و ریتم قلب مواجه هستند. تیم <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> با ارائه خدمات تخصصی در منزل (تهران و کرج)، مدیریت دوران نقاهت شما را به عهده می‌گیرد.
            </p>

            <h3 className="text-xl font-bold mb-3 text-foreground">الف) هولتر ریتم ۲۴ ساعته (خدمات کلیدی)</h3>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              دریچه تریکاسپید در نزدیکی سیستم برق‌رسانی قلب قرار دارد. جراحی در این ناحیه ممکن است باعث بروز آریتمی‌هایی مثل <Link to="/articles/af-stroke-risk" className="text-primary hover:underline">بلوک قلبی یا فیبریلاسیون دهلیزی</Link> شود. ما با <Link to="/services/holter" className="text-primary hover:underline">نصب هولتر در منزل</Link>، ریتم قلب شما را پس از جراحی به دقت پایش می‌کنیم.
            </p>

            <h3 className="text-xl font-bold mb-3 text-foreground">ب) اکوکاردیوگرافی پرتابل</h3>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              بررسی عملکرد دریچه جدید و پایش فشار شریان ریوی بدون نیاز به خروج از منزل و جابه‌جایی بیمار، توسط متخصصین ما انجام می‌شود. <Link to="/articles/echo-home" className="text-primary hover:underline">اکوکاردیوگرافی در منزل</Link> امکان پیگیری دقیق وضعیت دریچه را فراهم می‌کند.
            </p>

            <h3 className="text-xl font-bold mb-3 text-foreground">ج) کنترل ورم (ادم) و آزمایش خون</h3>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              نارسایی قلب راست باعث <Link to="/articles/leg-swelling" className="text-primary hover:underline">ورم پاها</Link> و شکم می‌شود. پرستاران ما با کنترل وزن روزانه و <Link to="/services/laboratory" className="text-primary hover:underline">انجام آزمایش خون در منزل</Link> (برای بررسی عملکرد کلیه و کبد)، دوز داروهای ادرارآور شما را تحت نظر پزشک تنظیم می‌کنند.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۴. مقایسه تعویض دریچه تریکاسپید و میترال
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-muted">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-muted p-3 text-right">ویژگی</th>
                    <th className="border border-muted p-3 text-right">تعویض دریچه میترال (سمت چپ)</th>
                    <th className="border border-muted p-3 text-right">تعویض دریچه تریکاسپید (سمت راست)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-muted p-3">فشار خون در رگ‌ها</td>
                    <td className="border border-muted p-3">بسیار بالا</td>
                    <td className="border border-muted p-3">پایین</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-muted p-3">ریسک لخته شدن</td>
                    <td className="border border-muted p-3">متوسط</td>
                    <td className="border border-muted p-3">بالا (به دلیل جریان خون کندتر)</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3">نوع دریچه انتخابی</td>
                    <td className="border border-muted p-3">اغلب مکانیکی (در جوانان)</td>
                    <td className="border border-muted p-3">اغلب بیولوژیک</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-muted p-3">نشانه اصلی نارسایی</td>
                    <td className="border border-muted p-3">تنگی نفس و آب آوردن ریه</td>
                    <td className="border border-muted p-3">ورم پا، بزرگ شدن کبد و برجستگی رگ گردن</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۵. علائم هشدار پس از جراحی در منزل
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              در صورت مشاهده این موارد، بلافاصله با کارشناسان نوید زندگی تماس بگیرید:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• تورم ناگهانی و شدید در مچ پا یا شکم</li>
              <li className="text-base text-foreground">• احساس <Link to="/articles/heart-palpitations" className="text-primary hover:underline">ضربان قلب نامنظم</Link> یا بسیار کند</li>
              <li className="text-base text-foreground">• زرد شدن پوست یا چشم‌ها (نشانه فشار بر کبد)</li>
              <li className="text-base text-foreground">• <Link to="/articles/breathing-treatment" className="text-primary hover:underline">تنگی نفس</Link> در حالت درازکش</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              منابع و رفرنس‌های معتبر
            </h2>
            <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
              <li>• American College of Cardiology (ACC): Management of Patients With Valvular Heart Disease</li>
              <li>• Journal of Thoracic and Cardiovascular Surgery: Long-term outcomes of Tricuspid Valve Replacement</li>
              <li>• Mayo Clinic: Tricuspid valve surgery: Why it's performed</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/5 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">نوید زندگی؛ مراقبتی فراتر از بیمارستان</h3>
              <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
                ما می‌دانیم که مسیر بهبودی پس از جراحی قلب در خانه شروع می‌شود. تیم نوید زندگی در تهران و کرج با تجهیزات کامل پایش قلبی (هولتر و اکو) و تیم آزمایشگاه سیار، امنیت و آرامش را به شما هدیه می‌دهد.
              </p>
              <p className="text-lg font-semibold text-primary mb-2">چون هر تپش قلب شما برای ما اهمیت دارد.</p>
              <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                <Phone className="ml-2 h-5 w-5" />
                رزرو نوبت ویزیت و هولتر: 09386117912
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">سوالات متداول درباره تعویض دریچه تریکاسپید</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Related Articles */}
        <section className="medical-section">
          <div className="container mx-auto max-w-6xl">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </section>

        {/* Pricing Section */}
        <PricingInfo />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default TricuspidValveReplacementPage;
