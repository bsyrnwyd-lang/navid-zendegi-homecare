import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingContact from "../../components/FloatingContact";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation";
import LazyImage from "../../components/LazyImage";
import RelatedArticles from "../../components/RelatedArticles";
import FAQSection from "../../components/FAQSection";
import SEOHead from "../../components/SEOHead";
import StructuredData from "../../components/StructuredData";
import depressionImage from "../../assets/depression-article.jpg";

const DepressionPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "افسردگی", url: "/articles/depression" }
  ];

  const faqs = [
    {
      question: "علائم افسردگی چیست؟",
      answer: "علائم افسردگی شامل غمگینی مداوم، کاهش یا افزایش اشتها، انزوا، کاهش تمرکز، احساس بی‌ارزشی و در موارد شدید افکار خودکشی است."
    },
    {
      question: "افسردگی چگونه درمان می‌شود؟",
      answer: "درمان افسردگی شامل دارو درمانی با داروهای ضد افسردگی، روان‌درمانی، گروه‌درمانی و اصلاح سبک زندگی است."
    },
    {
      question: "آیا افسردگی قابل درمان است؟",
      answer: "بله، افسردگی با مراجعه به‌موقع به روانپزشک و پیروی از روند درمانی کاملاً قابل کنترل و درمان است."
    },
    {
      question: "آیا خدمات روانشناسی در منزل وجود دارد؟",
      answer: "بله، برای بیماران با افسردگی شدید که تمایل به خروج از خانه ندارند، خدمات ویزیت روانپزشک و روانشناس در منزل ارائه می‌شود."
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
      title: "سرگیجه: علت‌ها، تفاوت‌ها و راه‌های پیشگیری",
      description: "بررسی انواع سرگیجه، علل ایجاد و روش‌های پیشگیری",
      link: "/articles/dizziness",
      image: "/src/assets/dizziness-article.jpg",
      category: "عمومی"
    },
    {
      title: "افسردگی و ارتباط آن با بیماری‌های قلبی",
      description: "بررسی تاثیر افسردگی بر سلامت قلب و عروق",
      link: "/articles/depression-heart-disease",
      image: "/src/assets/depression-article.jpg",
      category: "قلب و عروق"
    }
  ];

  return (
    <>
      <SEOHead
        title="افسردگی: علائم، نشانه‌ها و روش‌های درمان | نوید زندگی"
        description="راهنمای جامع افسردگی، علائم هشدار دهنده، روش‌های درمانی و خدمات روانشناسی در منزل. راهنمای کامل با نظارت دکتر نیره مظاهری تهرانی"
        keywords="افسردگی، درمان افسردگی، علائم افسردگی، روانشناس در منزل، روانپزشک در منزل، خدمات روانشناسی در منزل"
        canonical="https://navidzendegi.ir/articles/depression"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2024-01-20T00:00:00Z"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "افسردگی: علائم، نشانه‌ها و روش‌های درمان",
          description: "راهنمای جامع افسردگی، علائم، درمان و خدمات روانشناسی در منزل",
          author: "دکتر نیره مظاهری تهرانی",
          publishedDate: "2024-01-20",
          image: depressionImage
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
              افسردگی: علائم، نشانه‌ها و روش‌های درمان
            </h1>
            <div className="flex justify-center mb-6">
              <LazyImage
                src={depressionImage}
                alt="درمان افسردگی در منزل"
                className="rounded-lg shadow-lg max-w-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <h2>مقدمه</h2>
            <p>
              خلق و خوی انسان‌ها در طول روز یا هفته تغییرات طبیعی دارد و معمولاً این تغییرات کوتاه‌مدت و گذرا هستند. اما وقتی تغییر خلق طولانی‌مدت شده و با علائم دیگر همراه باشد، احتمال افسردگی مطرح می‌شود. افسردگی یکی از شایع‌ترین اختلالات روانی در جهان است و می‌تواند بر کیفیت زندگی فرد و اطرافیانش اثر منفی بگذارد.
            </p>

            <h2>علائم افسردگی</h2>
            <p>علائم افسردگی بسته به شدت و سن فرد متفاوت است، اما شایع‌ترین آن‌ها عبارتند از:</p>
            <ul>
              <li>کاهش یا افزایش اشتها</li>
              <li>گریه‌های بی‌دلیل و احساس غمگینی مداوم</li>
              <li>انزوا و کاهش تعاملات اجتماعی</li>
              <li>کندی حرکت یا پرخوابی</li>
              <li>احساس بی‌ارزشی و گناه</li>
              <li>کاهش قدرت تمرکز و تصمیم‌گیری</li>
              <li>افکار خودکشی یا مرگ</li>
            </ul>
            <p>در نوجوانان افسردگی ممکن است بیشتر به شکل تحریک‌پذیری، پرخاشگری یا افت تحصیلی ظاهر شود.</p>

            <h2>اهمیت علائم هشداردهنده</h2>
            <p>
              اگر فردی دچار افکار خودکشی باشد، این وضعیت یک اورژانس روانپزشکی محسوب شده و نیازمند مداخله فوری و حتی بستری است. نادیده گرفتن این علائم می‌تواند خطرناک باشد.
            </p>

            <h2>روش‌های درمان افسردگی</h2>
            <p>درمان افسردگی توسط روانپزشک انجام می‌شود و معمولاً ترکیبی از دارو و روش‌های غیردارویی است:</p>
            <ul>
              <li><strong>دارو درمانی:</strong> داروهای ضدافسردگی متناسب با شرایط فرد تجویز می‌شوند.</li>
              <li><strong>روان‌درمانی:</strong> شامل جلسات فردی، گروهی یا خانواده‌درمانی است که به تغییر افکار و رفتارهای منفی کمک می‌کند.</li>
              <li><strong>گروه‌درمانی یا مشاوره حمایتی:</strong> افزایش حمایت اجتماعی نقش مهمی در بهبود افسردگی دارد.</li>
              <li><strong>اصلاح سبک زندگی:</strong> فعالیت بدنی منظم، تغذیه سالم و خواب کافی می‌توانند در بهبود علائم موثر باشند.</li>
            </ul>

            <h2>خدمات پزشکی و روانشناسی در منزل</h2>
            <p>افراد مبتلا به افسردگی به‌ویژه در موارد شدید، ممکن است تمایلی به خروج از خانه نداشته باشند. در این شرایط استفاده از خدمات پزشکی و روانشناسی در منزل می‌تواند بسیار مفید باشد:</p>
            <ul>
              <li>ویزیت روانپزشک یا روانشناس در منزل برای ارزیابی و شروع درمان</li>
              <li>پیگیری داروهای تجویزی و آموزش به بیمار و خانواده</li>
              <li>جلسات مشاوره روانشناسی در خانه برای راحتی بیشتر بیمار</li>
              <li>کاهش استرس ناشی از مراجعه حضوری به مراکز درمانی</li>
            </ul>

            <h2>نتیجه‌گیری</h2>
            <p>
              افسردگی یک بیماری شایع اما قابل درمان است. شناخت علائم هشداردهنده، مراجعه به‌موقع به پزشک و بهره‌گیری از خدمات روانشناسی و پزشکی در منزل می‌تواند به کنترل بهتر این اختلال کمک کند و کیفیت زندگی فرد و خانواده را بهبود بخشد.
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
              برای دریافت خدمات روانشناسی و مشاوره در منزل با ما تماس بگیرید
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

export default DepressionPage;