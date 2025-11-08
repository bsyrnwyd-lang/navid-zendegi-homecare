import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import abdominalPainImage from "@/assets/abdominal-pain-article.jpg";
import legSwellingImage from "@/assets/leg-swelling-article.jpg";
import dizzinessImage from "@/assets/dizziness-article.jpg";
import headacheImage from "@/assets/headache-article.jpg";

const AbdominalPainPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "درد شکم؛ علل، انواع، تشخیص و مدیریت", url: "/articles/abdominal-pain" }
  ];

  const faqs = [
    {
      question: "چه زمانی درد شکم نیاز به مراجعه فوری دارد؟",
      answer: "اگر درد بسیار شدید و ناگهانی باشد، با تب بالا، استفراغ خونی، مدفوع خونی، زردی، تنگی نفس یا عدم توانایی دفع گاز همراه باشد، باید فوراً به پزشک یا اورژانس مراجعه کنید."
    },
    {
      question: "آیا درد شکم همیشه نشانه بیماری جدی است؟",
      answer: "خیر، بسیاری از دردهای شکم ناشی از علل ساده مانند گاز، یبوست، گرسنگی یا استرس هستند. اما اگر درد مداوم، شدید یا همراه با علائم هشدار باشد، نیاز به بررسی دارد."
    },
    {
      question: "آیا می‌توان با تغییر رژیم غذایی درد شکم را کنترل کرد؟",
      answer: "در بسیاری از موارد، خاصه در سندرم روده تحریک‌پذیر، اصلاح رژیم غذایی، کاهش غذاهای چرب، افزایش فیبر و نوشیدن آب کافی می‌تواند به کاهش درد کمک کند."
    },
    {
      question: "چرا محل درد شکم اهمیت دارد؟",
      answer: "محل درد می‌تواند سرنخی به علت آن باشد. برای مثال درد پایین سمت راست ممکن است نشانه آپاندیسیت باشد، درد بالای شکم ممکن است مربوط به معده یا صفرا باشد."
    },
    {
      question: "آیا ویزیت پزشک در منزل برای درد شکم کافی است؟",
      answer: "در بسیاری موارد، پزشک در منزل می‌تواند ارزیابی اولیه دقیق انجام دهد، تاریخچه بگیرد و تصمیم بگیرد که آیا نیاز به آزمایش، تصویربرداری یا ارجاع به مرکز تخصصی وجود دارد یا خیر."
    }
  ];

  const relatedArticles = [
    {
      title: "ورم پا؛ انواع، علل، تشخیص و درمان",
      description: "راهنمای جامع ورم پا شامل انواع ادم، علل احتباس مایع، تشخیص DVT و روش‌های درمانی",
      image: legSwellingImage,
      link: "/articles/leg-swelling",
      category: "عمومی"
    },
    {
      title: "سرگیجه؛ علل، انواع و روش‌های درمان",
      description: "راهنمای کامل سرگیجه: انواع ورتیگو، علل شایع، تشخیص و درمان",
      image: dizzinessImage,
      link: "/articles/dizziness",
      category: "عمومی"
    },
    {
      title: "سر درد؛ علل، انواع، درمان و نقش تغذیه",
      description: "بررسی جامع انواع سر درد، علل شایع، روش‌های درمانی و نقش ویتامین‌ها",
      image: headacheImage,
      link: "/articles/headache",
      category: "عمومی"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <SEOHead
        title="درد شکم؛ علل، انواع، تشخیص و مدیریت | راهنمای جامع"
        description="راهنمای کامل درد شکم: انواع درد حاد و مزمن، علل شایع از گاز تا آپاندیسیت، علائم هشدار و روش‌های تشخیص و درمان"
        keywords="درد شکم، Abdominal Pain، درد حاد شکم، یبوست، گاز شکم، آپاندیسیت، سنگ صفرا، IBS، ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/abdominal-pain"
        ogType="article"
        publishedTime="2025-02-08"
        modifiedTime="2025-02-08"
      />

      <article itemScope itemType="https://schema.org/Article" className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <header className="mb-8">
          <h1 itemProp="headline" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            درد شکم؛ علل، انواع، تشخیص و مدیریت
          </h1>
          <meta itemProp="datePublished" content="2025-02-08" />
          <meta itemProp="dateModified" content="2025-02-08" />
          <meta itemProp="author" content="تیم پزشکی نوید زندگی" />
          
          <img 
            src={abdominalPainImage} 
            alt="درد شکم - علل، انواع، تشخیص و مدیریت" 
            className="w-full h-auto rounded-lg shadow-md mb-6"
            itemProp="image"
          />
        </header>

        <div itemProp="articleBody" className="prose prose-lg max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مقدمه</h2>
            <p className="leading-relaxed">
              درد شکم یا «Abdominal Pain» یکی از شایع‌ترین علائم مراجعه به پزشک یا <a href="/services/general-doctor" className="text-primary hover:underline">ویزیت در منزل</a> است. این درد می‌تواند از خیلی علت‌های ساده ناشی شود (مثل گرسنگی، گاز، یبوست) یا نشانه وضعیت‌های جدی پزشکی باشد که نیاز به بررسی فوری دارند.
            </p>
            <p className="leading-relaxed">
              در این مقاله انواع درد شکم، علل رایج، خطراتی که باید به آن‌ها توجه شود، و راهکارهای اولیه و توصیه‌های پزشکی را مرور می‌کنیم.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">انواع درد شکم</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۱. درد اولیه (Acute)</h3>
            <p className="leading-relaxed">
              دردی که ناگهانی شروع می‌شود، اغلب کمتر از چند روز طول می‌کشد و ممکن است با التهاب، انسداد یا عفونت همراه باشد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۲. درد مزمن</h3>
            <p className="leading-relaxed">
              دردی که چند هفته یا ماه ادامه دارد و یا مکرر بازمی‌گردد، ممکن است به اختلالات عملکردی دستگاه گوارش یا بیماری‌های زمینه‌ای مربوط باشد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۳. درد موقعیتی یا منطقه‌ای</h3>
            <p className="leading-relaxed">
              محل درد می‌تواند سرنخی به علت آن باشد: درد بالای شکم، وسط شکم، پایین شکم، یا سمت چپ یا راست.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">علل شایع درد شکم</h2>
            <ul className="list-disc pr-6 space-y-2">
              <li>عفونت‌های گوارشی، ویروسی یا باکتریایی (مثل گاستروانتریت)</li>
              <li>یبوست یا نفخ و تجمع گاز</li>
              <li>بیماری‌های دستگاه گوارش مثل ورم آپاندیس، سنگ صفرا، بیماری التهابی روده</li>
              <li>مشکلات مجرای ادراری یا سنگ کلیه</li>
              <li>مشکلات زنانگی یا بارداری (در خانم‌ها)</li>
              <li>اختلالات عملکردی مانند سندرم روده تحریک‌پذیر (IBS) یا درد شکمی عملکردی</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">تشخیص نکات مهم</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">تاریخچه دقیق</h3>
            <p className="leading-relaxed">
              شروع درد، محل، شدت، همراهی با تهوع، استفراغ، اسهال، مدفوع خونی، تب، یا علائم دیگر.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">معاینه فیزیکی</h3>
            <p className="leading-relaxed">
              لمس شکم، بررسی حساسیت، نفخ، صداهای روده، علائم پریتونیت.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">علائم هشدار (Red flags)</h3>
            <p className="leading-relaxed">
              درد بسیار شدید ناگهانی، تب بالا، خون در مدفوع یا ادرار، عدم توانایی دفع گاز یا مدفوع، زردی، <a href="/articles/shortness-breath-treatment" className="text-primary hover:underline">تنگی نفس</a>. این‌ها ممکن است به اورژانس نیاز داشته باشند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">آزمایش‌ها و تصویربرداری</h3>
            <p className="leading-relaxed">
              ممکن است عنصری از جمله خون، ادرار، سونوگرافی یا سی‌تی‌اسکن لازم شود تا علت مشخص شود.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مدیریت و درمان اولیه</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">توصیه‌های عمومی</h3>
            <ul className="list-disc pr-6 space-y-2">
              <li>استراحت و خودداری از فعالیت شدید در زمان درد شدید</li>
              <li>نوشیدن مایعات کافی و اجتناب از غذاهای سنگین یا چرب در فاز اولیه</li>
              <li>کمپرس گرم یا سرد بسته به نوع درد (مثلاً درد عضلانی یا نفخ)</li>
              <li>اگر درد خفیف باشد و با تغذیه و سبک زندگی قابل کنترل است، پیگیری در منزل می‌تواند کافی باشد</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">زمانی که باید پزشک در منزل یا مرکز درمانی مراجعه شود</h3>
            <p className="leading-relaxed">
              اگر درد ادامه پیدا کند، شدت بگیرد یا با علائم هشدار همراه شود، خدمات <a href="/services/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل</a> می‌تواند گام مهمی برای ارزیابی و اقدام باشد. پزشک در منزل می‌تواند سابقه بگیرد، معاینه اولیه کند، تصمیم بگیرد آزمایش یا ارجاع لازم است یا نه، و در صورت نیاز شما را به مرکز تخصصی هدایت کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">درمان‌های تخصصی</h3>
            <p className="leading-relaxed">
              بسته به علت، ممکن است نیاز به دارو (مانند مسکن، داروهای ضدالتهاب، آنتی‌بیوتیک‌ها)، اصلاح رژیم غذایی، جراحی یا مداخلات ویژه باشد (مثلاً آپاندکتومی، سنگ‌کلیه درمانی).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نکات ویژه برای بیماران و کاربران</h2>
            <ul className="list-disc pr-6 space-y-2">
              <li>اگر درد شکم مکرر دارید، بهتر است الگوی غذایی، خواب، استرس، داروهای مصرفی را بررسی کنید و این اطلاعات را برای پزشک آماده داشته باشید</li>
              <li>داشتن دستگاه ثبت درد یا دفترچه‌ای که محل، شدت، زمان، عوامل تشدید و تخفیف درد را ثبت می‌کند، می‌تواند به تشخیص کمک کند</li>
              <li>خدمات پزشکی در منزل (از طریق Navidzendegi) برای بررسی و ارزیابی درد شکم گزینه مناسبی است: پزشک در منزل می‌تواند به راحتی شما را معاینه کند، تاریخچه بگیرد و در صورت لزوم هماهنگی برای آزمایش یا ارجاع انجام دهد</li>
              <li>هیچ‌گاه درد شکم را ساده نگیرید اگر همراه با علائم هشدار باشد: مراجعه سریع ممکن است نتیجه بهتری داشته باشد</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">منابع (References)</h2>
            <ol className="list-decimal pr-6 space-y-2">
              <li>Longstreth GF. Studies of the symptom abdominal pain — a systematic review and meta-analysis. Fam Pract. 2014;31(5):517-529.</li>
              <li>"Abdominal Pain: Causes, Types & Treatment." Cleveland Clinic.</li>
              <li>"A primary care approach to abdominal pain in adults." PMC.</li>
              <li>"Acute Abdominal Pain – StatPearls." NCBI Bookshelf.</li>
              <li>"Abdominal pain: Common and uncommon causes." Medical News Today.</li>
              <li>"Evaluation of Acute Abdominal Pain in Adults." AAFP.</li>
            </ol>
          </section>
        </div>

        <Card className="bg-muted/30 border-primary/20 p-6 my-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Phone className="h-12 w-12 text-primary flex-shrink-0" />
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-xl font-bold text-foreground mb-2">
                نیاز به ویزیت پزشک در منزل دارید؟
              </h3>
              <p className="text-muted-foreground mb-3">
                برای بررسی درد شکم و ارزیابی تخصصی در منزل با ما تماس بگیرید
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                تماس: 09386117912
              </a>
            </div>
          </div>
        </Card>

        <section className="my-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">سوالات متداول</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-right text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <RelatedArticles articles={relatedArticles} />
        
        <div className="mt-12">
          <PricingInfo />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default AbdominalPainPage;
