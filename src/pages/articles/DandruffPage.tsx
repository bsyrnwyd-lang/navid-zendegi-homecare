import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone, AlertTriangle } from "lucide-react";
import dandruffImage from "@/assets/dandruff-treatment.jpg";

const DandruffPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "شوره سر", url: "/articles/dandruff" }
  ];

  const faqItems = [
    {
      question: "آیا شوره سر واگیردار است؟",
      answer: "خیر، شوره سر یک بیماری غیرواگیردار است و از طریق تماس یا استفاده از وسایل مشترک منتقل نمی‌شود."
    },
    {
      question: "چه زمانی باید برای شوره سر به پزشک مراجعه کرد؟",
      answer: "اگر پس از چند هفته استفاده از شامپوهای ضدشوره بهبود نیافتید، پوست سر قرمز و ملتهب شده، یا شوره به نواحی دیگر سرایت کرده باشد، باید به متخصص پوست مراجعه کنید."
    },
    {
      question: "آیا شوره سر می‌تواند باعث ریزش مو شود؟",
      answer: "شوره سر به تنهایی باعث ریزش مو نمی‌شود، اما خارش شدید و خاراندن مداوم می‌تواند به فولیکول‌های مو آسیب بزند."
    },
    {
      question: "تفاوت شوره سر با پسوریازیس چیست؟",
      answer: "پوسته‌های شوره معمولاً سفید یا زرد و چرب هستند، در حالی که پسوریازیس پوسته‌های ضخیم و نقره‌ای ایجاد می‌کند. تشخیص قطعی نیاز به معاینه پزشک دارد."
    },
    {
      question: "آیا استرس می‌تواند باعث شوره سر شود؟",
      answer: "بله، استرس می‌تواند سیستم ایمنی را تحت تأثیر قرار داده و باعث تشدید شوره سر شود."
    }
  ];

  const relatedArticles = [
    {
      title: "درماتیت سبوره‌ای",
      description: "علل، علائم و درمان درماتیت سبوره‌ای پوست سر و صورت",
      image: "/placeholder.svg",
      link: "/articles/seborrheic-dermatitis",
      category: "پوست"
    },
    {
      title: "ریزش مو",
      description: "علل و درمان ریزش مو در زنان و مردان",
      image: "/placeholder.svg",
      link: "/articles/hair-loss",
      category: "پوست و مو"
    },
    {
      title: "ویزیت پزشک متخصص در منزل",
      description: "خدمات ویزیت تخصصی پوست و مو در منزل",
      image: "/placeholder.svg",
      link: "/services/specialist",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="شوره سر؛ علل، درمان و ویزیت متخصص پوست در منزل تهران و کرج | نوید زندگی"
        description="شوره سر از یک مشکل ساده تا نیاز به مداخله پزشکی. تشخیص افتراقی شوره با پسوریازیس و درماتیت توسط متخصص پوست در منزل تهران و کرج."
        keywords="شوره سر, درمان شوره سر, علت شوره سر, شامپو ضد شوره, متخصص پوست در منزل, درماتیت سبوره, پسوریازیس, خارش سر, قارچ پوست سر, تهران, کرج"
        canonical="https://navidzendegi.com/articles/dandruff"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
      />
      
      <ArticleSchema
        title="شوره سر؛ از یک مشکل ساده تا نیاز به مداخله پزشکی"
        description="راهنمای کامل شوره سر، علل، انواع و درمان تخصصی توسط متخصص پوست در منزل"
        publishedTime="2024-12-30"
        modifiedTime="2024-12-30"
        image={dandruffImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
              شوره سر؛ از یک مشکل ساده تا نیاز به مداخله پزشکی
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              درمان تخصصی شوره سر در منزل تهران و کرج
            </p>
            <img 
              src={dandruffImage} 
              alt="متخصص پوست در حال بررسی پوست سر بیمار" 
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </header>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-foreground leading-relaxed mb-4">
              شوره سر (Dandruff) یکی از رایج‌ترین مشکلات پوستی است که تقریباً نیمی از مردم جهان در دوره‌ای از زندگی خود با آن مواجه می‌شوند. اگرچه شوره سر معمولاً خطرناک نیست، اما می‌تواند باعث خارش شدید و کاهش اعتمادبه‌نفس در روابط اجتماعی شود.
            </p>
            <p className="text-foreground leading-relaxed">
              در مرکز نوید زندگی، ما فراتر از معرفی یک شامپو عمل می‌کنیم؛ ما علت ریشه‌ای شوره را توسط متخصصین پوست در منزل تشخیص داده و درمان قطعی را به شما ارائه می‌دهیم.
            </p>
          </section>

          {/* What is Dandruff */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">شوره سر دقیقاً چیست؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              از نظر علمی، شوره سر همان سلول‌های مرده پوست سر است که با سرعتی بیش از حد نرمال می‌ریزند. بر اساس گزارش‌های Mayo Clinic، این پدیده می‌تواند دلایل متعددی داشته باشد:
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground mr-4">
              <li><strong>پوست خشک:</strong> شایع‌ترین علت، به‌ویژه در فصول سرد سال</li>
              <li><strong>پوست چرب و حساس (درماتیت سبوره):</strong> پوست قرمز و چرب که با پوسته‌های سفید یا زرد پوشیده شده است</li>
              <li><strong>قارچ مالاسزیا:</strong> نوعی مخمر که از چربی پوست سر تغذیه کرده و در برخی افراد باعث تحریک و رشد بیش از حد سلول‌های پوست می‌شود</li>
              <li><strong>حساسیت به محصولات مراقبتی:</strong> (درماتیت تماسی) واکنش به رنگ مو یا اسپری‌های حالت‌دهنده</li>
            </ul>
          </section>

          {/* When to See a Doctor */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">چه زمانی شوره سر نیاز به ویزیت پزشک دارد؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              بسیاری از افراد ماه‌ها از شامپوهای مختلف استفاده می‌کنند و نتیجه نمی‌گیرند. اگر شرایط زیر را دارید، زمان آن رسیده که یک متخصص پوست در منزل وضعیت شما را بررسی کند:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li>اگر پس از چند هفته استفاده از شامپوهای ضدشوره معمولی، بهبودی حاصل نشده است</li>
              <li>اگر پوست سر شما قرمز، ملتهب یا متورم شده است</li>
              <li>اگر پوسته‌های شوره به نواحی دیگر مثل ابروها، گوش یا کناره‌های بینی سرایت کرده است</li>
              <li>اگر خارش سر مانع از خواب یا فعالیت روزانه شما می‌شود</li>
            </ul>
          </section>

          {/* Warning Box */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-destructive mb-2">هشدار مهم</h3>
                <p className="text-foreground">
                  از خوددرمانی و مصرف خودسرانه داروهای کورتون‌دار یا ضدقارچ خودداری کنید. استفاده نادرست از این داروها می‌تواند باعث تشدید مشکل یا ایجاد عوارض جانبی شود. همیشه قبل از شروع درمان با پزشک متخصص مشورت کنید.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits of Home Visit */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">مزایای ویزیت متخصص پوست «نوید زندگی» در منزل</h2>
            <p className="text-foreground leading-relaxed mb-4">
              برای ساکنین تهران و کرج، جابه‌جایی برای یک مشکل پوستی ممکن است وقت‌گیر باشد. ما این خدمات را به خانه شما می‌آوریم:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">۱. تشخیص افتراقی دقیق</h3>
                <p className="text-foreground leading-relaxed">
                  پزشک متخصص در منزل بررسی می‌کند که آیا مشکل شما «شوره ساده» است یا بیماری‌های جدی‌تری مانند پسوریازیس پوست سر یا عفونت‌های قارچی (Tinea Capitis).
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">۲. نسخه اختصاصی و ترکیبی</h3>
                <p className="text-foreground leading-relaxed">
                  برخلاف محصولات آماده بازار، پزشک ممکن است لوسیون‌ها یا شامپوهای ترکیبی خاصی را متناسب با نوع پوست و شدت بیماری شما تجویز کند که تأثیرگذاری چندبرابری دارند.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">۳. بررسی عوامل سیستمی</h3>
                <p className="text-foreground leading-relaxed">
                  گاهی شوره سر نشانه‌ای از کمبود ویتامین‌ها، استرس شدید یا اختلالات هورمونی است. متخصصین ما در صورت نیاز، آزمایش خون در منزل را برای بررسی دقیق‌تر تجویز می‌کنند.
                </p>
              </div>
            </div>
          </section>

          {/* Types Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">مقایسه انواع شوره سر</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">نوع شوره</th>
                    <th className="border border-border p-3 text-right">ظاهر</th>
                    <th className="border border-border p-3 text-right">علت احتمالی</th>
                    <th className="border border-border p-3 text-right">درمان پیشنهادی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">شوره خشک</td>
                    <td className="border border-border p-3">دانه‌های ریز، سفید و پودری</td>
                    <td className="border border-border p-3">خشکی هوا، شستشوی زیاد</td>
                    <td className="border border-border p-3">شامپوهای ملایم و آبرسان</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3">شوره چرب</td>
                    <td className="border border-border p-3">پوسته‌های بزرگ، زرد و چسبنده</td>
                    <td className="border border-border p-3">فعالیت قارچ مالاسزیا</td>
                    <td className="border border-border p-3">شامپوهای کتوکونازول یا زینک</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">شوره ناشی از پسوریازیس</td>
                    <td className="border border-border p-3">پوسته‌های ضخیم و نقره‌ای</td>
                    <td className="border border-border p-3">اختلال خودایمنی</td>
                    <td className="border border-border p-3">داروهای استروئیدی و ویزیت متخصص</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Prevention Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">راهکارهای پیشگیری و مراقبت در خانه</h2>
            <p className="text-foreground leading-relaxed mb-4">
              تیم مراقبتی نوید زندگی توصیه‌های زیر را برای کنترل شوره پیشنهاد می‌دهد:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li><strong>مدیریت استرس:</strong> استرس می‌تواند باعث تحریک سیستم ایمنی و تشدید شوره شود</li>
              <li><strong>رژیم غذایی سالم:</strong> مصرف کافی روی (Zink)، ویتامین‌های گروه B و اسیدهای چرب ضروری</li>
              <li><strong>قرارگیری محدود در معرض آفتاب:</strong> نور خورشید ممکن است برای برخی از موارد درماتیت سبوره مفید باشد (تحت نظر پزشک)</li>
            </ul>
          </section>

          {/* References */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">منابع و رفرنس‌های معتبر</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li>American Academy of Dermatology (AAD): How to treat dandruff</li>
              <li>National Institutes of Health (NIH): The role of Malassezia in seborrheic dermatitis</li>
              <li>Mayo Clinic: Dandruff symptoms and causes</li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/10 rounded-lg p-8 mb-10 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">نوید زندگی؛ پایان جستجوی شما برای درمان شوره</h2>
            <p className="text-foreground leading-relaxed mb-6">
              اگر از شوره‌های مزاحم خسته شده‌اید و به دنبال یک راهکار علمی و دائمی هستید، با ما تماس بگیرید. متخصصین ما در تمام مناطق تهران و کرج آماده ارائه خدمات تشخیصی و درمانی در منزل هستند.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </section>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default DandruffPage;
