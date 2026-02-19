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
import alopeciaImage from "@/assets/alopecia-areata.jpg";
import hairLossImage from "@/assets/hair-loss-article.jpg";
import zincImage from "@/assets/zinc-supplement-article.jpg";
import ironImage from "@/assets/iron-supplement-article.jpg";

const AlopeciaAreataPage = () => {
  const faqs = [
    {
      question: "آیا ریزش سکه‌ای مو قابل درمان است؟",
      answer: "بله، در بسیاری از موارد ریزش سکه‌ای قابل درمان است. فولیکول‌های مو از بین نمی‌روند و با درمان مناسب، موها می‌توانند دوباره رشد کنند. حدود ۵۰ درصد از بیماران ظرف یک سال بدون درمان نیز بهبود می‌یابند."
    },
    {
      question: "تفاوت ریزش سکه‌ای با ریزش معمولی چیست؟",
      answer: "ریزش سکه‌ای به صورت لکه‌های گرد و مشخص رخ می‌دهد و ناگهانی است، در حالی که ریزش معمولی (آندروژنیک) تدریجی بوده و با عقب رفتن خط رویش یا کم‌حجم شدن موها همراه است."
    },
    {
      question: "آیا استرس باعث ریزش سکه‌ای می‌شود؟",
      answer: "استرس شدید یکی از محرک‌های اصلی ریزش سکه‌ای است. فشارهای عصبی و شوک‌های روانی می‌توانند سیستم ایمنی را تحریک کرده و به فولیکول‌های مو حمله کنند."
    },
    {
      question: "PRP برای درمان ریزش سکه‌ای مؤثر است؟",
      answer: "بله، PRP یا پلاسمای غنی از پلاکت یکی از روش‌های مؤثر برای تحریک رشد مجدد مو در ریزش سکه‌ای است. پلاکت‌ها حاوی فاکتورهای رشد هستند که به فولیکول‌ها کمک می‌کنند دوباره فعال شوند."
    },
    {
      question: "آیا نوید زندگی خدمات تشخیص و درمان ریزش مو ارائه می‌دهد؟",
      answer: "بله، تیم نوید زندگی خدمات ویزیت متخصص پوست، آزمایش خون جامع، و درمان‌های تخصصی مانند PRP را در منزل شما در تهران و کرج ارائه می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "ریزش مو؛ علل، تشخیص و درمان",
      description: "راهنمای جامع انواع ریزش مو و روش‌های درمانی",
      image: hairLossImage,
      link: "/articles/hair-loss",
      category: "پوست و مو"
    },
    {
      title: "مکمل روی و تأثیر آن بر سلامت",
      description: "نقش روی در سلامت پوست و مو و جلوگیری از ریزش",
      image: zincImage,
      link: "/articles/zinc-supplement",
      category: "تغذیه"
    },
    {
      title: "مکمل آهن و کم‌خونی",
      description: "ارتباط کمبود آهن با ریزش مو و راه‌های درمان",
      image: ironImage,
      link: "/articles/iron-supplement",
      category: "تغذیه"
    }
  ];

  const publishDate = "۱۴۰۴/۱۰/۱۶";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ریزش سکه‌ای مو و ریش (آلوپسی آره‌آتا) | علل، تشخیص و درمان | نوید زندگی"
        description="راهنمای جامع ریزش سکه‌ای مو و ریش: مکانیسم بیماری، علل و محرک‌ها، روش‌های تشخیص و جدیدترین درمان‌ها شامل PRP در منزل تهران و کرج"
        keywords="ریزش سکه‌ای مو, آلوپسی آره‌آتا, ریزش ریش, درمان ریزش مو, PRP, متخصص پوست در منزل, نوید زندگی"
        canonical="https://navidzendegi.com/articles/alopecia-areata"
        ogType="article"
      />

      <Header />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"ریزش سکه‌ای مو",url:"/articles/alopecia-areata"}]} />
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              ریزش سکه‌ای مو و ریش (آلوپسی آره‌آتا)؛ از علل تا جدیدترین درمان‌ها
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: {publishDate}</p>
          </header>

          <img 
            src={alopeciaImage} 
            alt="ریزش سکه‌ای مو آلوپسی آره‌آتا" 
            className="w-full rounded-lg mb-8 shadow-md"
          />

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            
            <p className="text-lg leading-relaxed mb-6">
              ریزش سکه‌ای یا <strong>آلوپسی آره‌آتا</strong>، یک اختلال خودایمنی شایع است که در آن سیستم ایمنی بدن به اشتباه به فولیکول‌های مو حمله می‌کند. این عارضه معمولاً به صورت لکه‌های گرد یا بیضی شکل روی پوست سر یا در ناحیه ریش (Alopecia Barbae) ظاهر می‌شود. اگرچه این بیماری تهدیدکننده زندگی نیست، اما تأثیرات روانی و اجتماعی زیادی بر فرد دارد.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              مرکز <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> با ارائه خدمات آزمایش خون در منزل و ویزیت متخصص پوست (تهران و کرج)، به شما کمک می‌کند تا علل زمینه‌ای این ریزش را شناسایی و سریع‌ترین مسیر درمان را آغاز کنید.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۱. مکانیسم بیماری: چرا موها به صورت سکه‌ای می‌ریزند؟</h2>
            
            <p className="mb-4">
              در حالت طبیعی، فولیکول‌های مو توسط سیستم ایمنی محافظت می‌شوند. اما در افراد مبتلا به آلوپسی آره‌آتا، گلبول‌های سفید خون به فولیکول‌ها حمله کرده و باعث التهاب و توقف رشد مو می‌شوند. با این حال، <strong>فولیکول‌ها از بین نمی‌روند</strong> و پتانسیل رشد مجدد را حفظ می‌کنند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">تفاوت ریزش موی سر و ریش:</h3>
            
            <p className="mb-3">
              <strong>آلوپسی سر:</strong> معمولاً به صورت لکه‌های بدون موی نرم و صاف ظاهر می‌شود.
            </p>
            <p className="mb-6">
              <strong>آلوپسی ریش (Alopecia Barbae):</strong> اختصاصاً در ناحیه صورت رخ می‌دهد و ممکن است با خارش یا سوزش خفیف قبل از ریزش همراه باشد.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۲. علل و محرک‌های اصلی ریزش سکه‌ای</h2>
            
            <p className="mb-4">
              بر اساس تحقیقات Harvard Health، علت دقیق این بیماری هنوز کاملاً مشخص نیست، اما عوامل زیر نقش کلیدی دارند:
            </p>

            <p className="mb-3">
              <strong>ژنتیک:</strong> حدود ۲۰ درصد از مبتلایان، سابقه خانوادگی این بیماری را دارند.
            </p>
            <p className="mb-3">
              <strong>استرس شدید:</strong> فشارهای عصبی و شوک‌های روانی می‌توانند سیستم ایمنی را تحریک کنند.
            </p>
            <p className="mb-3">
              <strong>بیماری‌های خودایمنی مرتبط:</strong> افرادی که دچار بیماری‌های تیروئید (هاشیموتو)، ویتیلیگو (پیسی) یا دیابت نوع ۱ هستند، بیشتر در معرض این نوع ریزش قرار دارند.
            </p>
            <p className="mb-6">
              <strong>کمبودهای تغذیه‌ای:</strong> کمبود آهن، ویتامین D و <Link to="/articles/zinc-supplement" className="text-primary hover:underline">روی</Link> می‌تواند روند بهبودی را کند یا ریزش را تشدید کند.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۳. تشخیص تخصصی در منزل با «نوید زندگی»</h2>
            
            <p className="mb-4">
              تشخیص درست، کلید درمان موفق است. ما در مرکز نوید زندگی این فرآیند را برای شما تسهیل کرده‌ایم:
            </p>

            <p className="mb-3">
              <strong>معاینه بالینی:</strong> ویزیت متخصص پوست در منزل برای بررسی الگوی ریزش و انجام تست کشش مو.
            </p>
            <p className="mb-3">
              <strong>آزمایش خون جامع:</strong> از آنجایی که ریزش سکه‌ای با مشکلات تیروئید و کم‌خونی مرتبط است، ما پنل کامل آزمایشگاهی را در منزل شما انجام می‌دهیم تا علل داخلی بررسی شود.
            </p>
            <p className="mb-6">
              <strong>نمونه‌برداری (در صورت نیاز):</strong> برای افتراق بین آلوپسی آره‌آتا و قارچ‌های پوستی.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۴. روش‌های درمانی نوین</h2>
            
            <p className="mb-4">
              بسته به وسعت ریزش، پزشک متخصص روش‌های زیر را پیشنهاد می‌دهد:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">الف) تزریق کورتیکواستروئید (رایج‌ترین روش)</h3>
            <p className="mb-4">
              پزشک دارو را مستقیماً به ناحیه بدون مو تزریق می‌کند تا التهاب ناشی از حمله ایمنی متوقف شود. رشد مجدد معمولاً پس از ۴ تا ۶ هفته شروع می‌شود.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">ب) درمان‌های موضعی</h3>
            <p className="mb-4">
              استفاده از کرم‌های کورتونی قوی، محلول مینوکسیدیل ۵ درصد یا کرم آنترالین.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">ج) درمان‌های پیشرفته (PRP)</h3>
            <p className="mb-4">
              <strong>پی‌آرپی (PRP)</strong> یا پلاسمای غنی از پلاکت، یکی از خدمات تخصصی نوید زندگی در منزل است. در این روش، پلاکت‌های غنی از فاکتور رشد از خون خود بیمار استخراج و به ناحیه ریزش تزریق می‌شود تا فولیکول‌ها دوباره فعال شوند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">د) ایمونوتراپی موضعی</h3>
            <p className="mb-6">
              در موارد شدید، از مواد شیمیایی خاصی برای ایجاد یک واکنش آلرژیک کنترل شده استفاده می‌شود که سیستم ایمنی را «گمراه» کرده و تمرکز آن را از روی فولیکول‌ها برمی‌دارد.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۵. مقایسه انواع ریزش مو</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">ویژگی</th>
                    <th className="border border-border p-3 text-right">ریزش سکه‌ای (آلوپسی آره‌آتا)</th>
                    <th className="border border-border p-3 text-right">ریزش هورمونی (آندروژنیک)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">الگوی ریزش</td>
                    <td className="border border-border p-3">لکه‌های گرد و مشخص</td>
                    <td className="border border-border p-3">عقب رفتن خط رویش یا کم‌حجم شدن فرق سر</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3">علت اصلی</td>
                    <td className="border border-border p-3">سیستم ایمنی و استرس</td>
                    <td className="border border-border p-3">ژنتیک و هورمون DHT</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">سرعت بروز</td>
                    <td className="border border-border p-3">ناگهانی (چند روز)</td>
                    <td className="border border-border p-3">تدریجی (چند سال)</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3">احتمال رویش مجدد</td>
                    <td className="border border-border p-3">بسیار زیاد</td>
                    <td className="border border-border p-3">نیاز به درمان مداوم</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Warning Section */}
            <div className="bg-amber-50 border-r-4 border-amber-500 p-4 my-8 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-amber-800 font-semibold mb-2">هشدار مهم:</p>
                <p className="text-amber-700">
                  هرگز بدون تشخیص پزشک متخصص، از داروهای تقویتی یا ضدریزش استفاده نکنید. برخی ریزش‌ها ممکن است نشانه بیماری‌های زمینه‌ای جدی‌تری باشند که نیاز به درمان اختصاصی دارند.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">منابع و رفرنس‌های معتبر</h2>
            
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>American Academy of Dermatology (AAD): Alopecia Areata: Signs, symptoms, and causes.</li>
              <li>Mayo Clinic: Hair loss - Diagnosis and treatment.</li>
              <li>National Alopecia Areata Foundation (NAAF): Current and emerging therapies for Alopecia Areata.</li>
              <li>Journal of Clinical and Aesthetic Dermatology: Efficacy of PRP in treating Alopecia Areata.</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8 text-center">
              <h3 className="text-xl font-bold mb-4">نگذارید اضطراب، موهای شما را کم‌رنگ کند</h3>
              <p className="mb-4 text-muted-foreground">
                ریزش سکه‌ای اغلب با استرس تشدید می‌شود. تیم نوید زندگی در تهران و کرج با ارائه خدمات درمانی در محیط آرام خانه، استرس ناشی از مراجعه به مراکز درمانی را حذف کرده و تخصصی‌ترین مراقبت‌ها را به شما ارائه می‌دهد.
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </div>

          </div>

          <FAQSection faqs={faqs} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />

        </article>
      </main>

      <FloatingContact />
      <Footer />
    </div>
  );
};

export default AlopeciaAreataPage;
