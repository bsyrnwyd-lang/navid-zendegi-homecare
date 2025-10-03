import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingContact from "../../components/FloatingContact";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation";
import LazyImage from "../../components/LazyImage";
import RelatedArticles from "../../components/RelatedArticles";
import FAQSection from "../../components/FAQSection";
import SEOHead from "../../components/SEOHead";
import StructuredData from "../../components/StructuredData";
import dizzinessImage from "../../assets/dizziness-article.jpg";

const DizzinessPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سرگیجه", url: "/articles/dizziness" }
  ];

  const faqs = [
    {
      question: "تفاوت احساس عدم تعادل با سرگیجه واقعی چیست؟",
      answer: "احساس عدم تعادل معمولاً به صورت تار شدن یا سیاهی رفتن چشم‌ها هنگام بلند شدن است، در حالی که در سرگیجه واقعی فرد محیط اطراف را در حال چرخیدن می‌بیند."
    },
    {
      question: "علل شایع سیاهی رفتن چشم‌ها چیست؟",
      answer: "کم‌خونی، افت قند خون، اضطراب، افسردگی و فشار خون پایین از علل شایع سیاهی رفتن چشم‌ها هستند."
    },
    {
      question: "چه زمانی سرگیجه خطرناک است؟",
      answer: "اگر سرگیجه همراه با ضعف اندام‌ها، اختلال در تکلم یا بینایی، سردرد شدید ناگهانی یا از دست دادن تعادل شدید باشد، باید فوراً به بیمارستان مراجعه کرد."
    },
    {
      question: "چگونه از سرگیجه هنگام بلند شدن پیشگیری کنیم؟",
      answer: "از تغییر ناگهانی پوزیشن بدن خودداری کنید، هنگام برخاستن چند لحظه بنشینید و سپس به آرامی بایستید، آب کافی بنوشید و تغذیه منظم داشته باشید."
    }
  ];

  const relatedArticles = [
    {
      title: "سردرد: انواع، علل و روش‌های درمان",
      description: "راهنمای جامع انواع سردرد، علل ایجاد و درمان‌های موثر",
      link: "/articles/headache",
      image: "/src/assets/headache-article.jpg",
      category: "عمومی"
    },
    {
      title: "میگرن: علل، تشخیص و درمان سردرد میگرنی",
      description: "اطلاعات کامل درباره سردرد میگرنی، علائم و روش‌های درمان",
      link: "/articles/migraine",
      image: "/src/assets/migraine-article.jpg",
      category: "عمومی"
    },
    {
      title: "فشار خون بالا: راهنمای جامع پیشگیری و کنترل",
      description: "همه چیز درباره فشار خون، علائم و روش‌های کنترل آن",
      link: "/articles/blood-pressure",
      image: "/src/assets/blood-pressure-article.jpg",
      category: "قلب و عروق"
    }
  ];

  return (
    <>
      <SEOHead
        title="سرگیجه: علت‌ها، تفاوت‌ها و راه‌های پیشگیری | نوید زندگی"
        description="راهنمای جامع سرگیجه، تفاوت انواع سرگیجه، علل ایجاد و روش‌های پیشگیری. راهنمای کامل با نظارت دکتر نیره مظاهری تهرانی"
        keywords="سرگیجه، علت سرگیجه، درمان سرگیجه، سیاهی رفتن چشم، کم خونی، افت قند، ویزیت پزشک در منزل"
        canonical="https://navidzendegi.ir/articles/dizziness"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2024-01-21T00:00:00Z"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "سرگیجه: علت‌ها، تفاوت‌ها و راه‌های پیشگیری",
          description: "راهنمای جامع سرگیجه، تفاوت انواع و روش‌های پیشگیری",
          author: "دکتر نیره مظاهری تهرانی",
          publishedDate: "2024-01-21",
          image: dizzinessImage
        }}
        faqs={faqs}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingContact />
      
        <main className="container mx-auto px-4 py-8 mt-20">
          <article className="max-w-4xl mx-auto">
            <BreadcrumbNavigation items={breadcrumbs} />
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              سرگیجه: علت‌ها، تفاوت‌ها و راه‌های پیشگیری
            </h1>
            <div className="flex justify-center mb-6">
              <LazyImage
                src={dizzinessImage}
                alt="درمان سرگیجه در منزل"
                className="rounded-lg shadow-lg max-w-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <h2>مقدمه</h2>
            <p>
              سرگیجه یکی از شایع‌ترین شکایات بیماران است و می‌تواند به شکل‌های مختلفی تجربه شود. بسیاری از افراد آن را به صورت سیاهی رفتن چشم‌ها هنگام ایستادن یا راه رفتن توصیف می‌کنند، در حالی که برخی دیگر احساس می‌کنند محیط اطراف یا اتاق به دورشان می‌چرخد. شناخت تفاوت این دو حالت می‌تواند به تشخیص بهتر علت سرگیجه کمک کند.
            </p>

            <h2>تفاوت بین احساس عدم تعادل و سرگیجه واقعی</h2>
            <p><strong>احساس عدم تعادل:</strong> بیشتر به صورت تار شدن یا سیاهی رفتن چشم‌ها هنگام بلند شدن یا راه رفتن است.</p>
            <p><strong>سرگیجه واقعی:</strong> بیمار محیط اطراف را در حال چرخیدن می‌بیند (حالتی شبیه دوران چرخ و فلک).</p>

            <h2>علل شایع احساس عدم تعادل</h2>
            <ul>
              <li>کم‌خونی (کاهش گلبول‌های قرمز یا هموگلوبین)</li>
              <li>افت قند خون</li>
              <li>اضطراب و افسردگی</li>
              <li>بیماری‌های زمینه‌ای قلبی یا فشار خون پایین</li>
            </ul>
            <p>این نوع سرگیجه اغلب هنگام تغییر ناگهانی وضعیت بدن (مثل بلند شدن سریع از حالت نشسته یا خوابیده) اتفاق می‌افتد.</p>

            <h2>راهکار پیشگیری</h2>
            <ul>
              <li>از تغییر ناگهانی پوزیشن بدن خودداری کنید.</li>
              <li>هنگام برخاستن، ابتدا چند لحظه بنشینید، سپس به‌آرامی بایستید.</li>
              <li>مصرف آب کافی و تغذیه منظم به کاهش این حالت کمک می‌کند.</li>
            </ul>

            <h2>علل سرگیجه واقعی</h2>
            <p>سرگیجه واقعی می‌تواند نشانه مشکلات جدی‌تری باشد:</p>
            <ul>
              <li>اختلالات گوش داخلی (مانند بیماری منیر یا عفونت گوش)</li>
              <li>مشکلات عصبی</li>
              <li>سکته مغزی یا حمله ایسکمیک گذرا (TIA)</li>
            </ul>

            <h2>علائم خطرناک همراه با سرگیجه واقعی</h2>
            <p>اگر سرگیجه همراه با هر یک از موارد زیر باشد، باید فوراً به بیمارستان مراجعه کرد:</p>
            <ul>
              <li>ضعف یا بی‌حسی اندام‌ها</li>
              <li>اختلال در تکلم یا بینایی</li>
              <li>سردرد شدید ناگهانی</li>
              <li>از دست دادن تعادل شدید</li>
            </ul>

            <h2>خدمات پزشکی در منزل برای بررسی سرگیجه</h2>
            <p>بسیاری از بیماران مبتلا به سرگیجه ممکن است توانایی حرکت یا مراجعه سریع به مراکز درمانی را نداشته باشند. در این شرایط استفاده از خدمات پزشکی در منزل گزینه‌ای ایمن و مطمئن است:</p>
            <ul>
              <li>ویزیت پزشک عمومی یا متخصص در منزل برای بررسی علت سرگیجه</li>
              <li>انجام آزمایش‌های لازم (مثل آزمایش خون برای بررسی کم‌خونی یا قند)</li>
              <li>کنترل فشار خون در منزل</li>
              <li>تجویز دارو یا سرم‌تراپی در صورت نیاز توسط پرستار در منزل</li>
            </ul>

            <h2>نتیجه‌گیری</h2>
            <p>
              سرگیجه همیشه نشانه بیماری جدی نیست و می‌تواند به علت‌های ساده‌ای مثل افت قند یا کم‌خونی ایجاد شود. اما اگر همراه با علائم خطرناک باشد، نیاز به بررسی فوری پزشکی دارد. استفاده از خدمات پزشکی در منزل به بیماران کمک می‌کند بدون استرس و در کوتاه‌ترین زمان علت مشکل شناسایی و درمان شود.
            </p>
          </div>

          {/* Author and Date */}
          <div className="mt-8 pt-6 border-t border-border" dir="rtl">
            <p className="text-sm text-muted-foreground">
              نویسنده: دکتر نیره مظاهری تهرانی متخصص قلب و عروق
            </p>
          </div>

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Related Articles */}
          <RelatedArticles articles={relatedArticles} />

          {/* Contact Section */}
          <div className="mt-8 p-6 bg-muted rounded-lg text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              نیاز به مشاوره دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              برای دریافت خدمات پزشکی در منزل با ما تماس بگیرید
            </p>
            <a 
              href="tel:+989386117912" 
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              aria-label="تماس با شماره 09386117912"
            >
              ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  </>
  );
};

export default DizzinessPage;