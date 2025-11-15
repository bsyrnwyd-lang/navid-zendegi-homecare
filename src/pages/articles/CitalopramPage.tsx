import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import citalopramImage from "@/assets/citalopram-medication.jpg";

const CitalopramPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "https://navidzendegi.com/" },
    { name: "مقالات", url: "https://navidzendegi.com/articles" },
    { name: "سیتالوپرام", url: "https://navidzendegi.com/articles/citalopram" }
  ];

  const faqs = [
    {
      question: "سیتالوپرام چقدر طول می‌کشد تا اثر کند؟",
      answer: "معمولاً اثرات کامل سیتالوپرام بین 4 تا 6 هفته پس از شروع مصرف ظاهر می‌شود. در برخی افراد ممکن است بهبود جزئی در هفته‌های اول مشاهده شود اما برای دستیابی به نتیجه کامل نیاز به صبر و پیگیری منظم با روانپزشک است."
    },
    {
      question: "آیا می‌توانم سیتالوپرام را به صورت ناگهانی قطع کنم؟",
      answer: "خیر، قطع ناگهانی سیتالوپرام می‌تواند منجر به سندرم قطع دارو شود که شامل علائمی مانند سرگیجه، تهوع، اضطراب و تحریک‌پذیری است. قطع دارو باید به صورت تدریجی و تحت نظارت دقیق روانپزشک انجام شود."
    },
    {
      question: "عوارض جانبی سیتالوپرام چیست؟",
      answer: "عوارض جانبی شایع شامل تهوع، اسهال، خشکی دهان، بی‌خوابی، خواب‌آلودگی و اختلالات جنسی است. عوارض جدی نادر مانند سندرم سروتونین و طولانی شدن فاصله QT قلبی نیز ممکن است رخ دهد که نیاز به پایش پزشکی دارند."
    },
    {
      question: "آیا سیتالوپرام در بارداری امن است؟",
      answer: "مصرف سیتالوپرام در بارداری تنها در صورتی توصیه می‌شود که منافع آن بر خطرات احتمالی غلبه کند. زنان باردار یا کسانی که قصد بارداری دارند باید حتماً با روانپزشک خود مشورت کنند تا بهترین تصمیم درمانی اتخاذ شود."
    },
    {
      question: "چرا باید با ویزیت آنلاین روانپزشک سیتالوپرام مصرف کنم؟",
      answer: "ویزیت آنلاین روانپزشک امکان تنظیم دقیق دوز، پایش عوارض جانبی، و مدیریت تداخلات دارویی را در محیط آرام منزل فراهم می‌کند. این خدمات به ویژه برای بیمارانی که دسترسی محدود به کلینیک دارند یا ترجیح می‌دهند در خانه مشاوره دریافت کنند، بسیار مفید است."
    }
  ];

  const relatedArticles = [
    {
      title: "افسردگی: علائم، تشخیص و روش‌های درمان",
      description: "آشنایی کامل با علائم افسردگی، روش‌های تشخیص و گزینه‌های درمانی مؤثر",
      image: "/src/assets/depression-article.jpg",
      link: "/articles/depression",
      category: "سلامت روان"
    },
    {
      title: "ویزیت آنلاین پزشک: راهنمای جامع",
      description: "هرآنچه باید درباره ویزیت آنلاین پزشک و مزایای آن بدانید",
      image: "/src/assets/doctor-patient-home.jpg",
      link: "/services/online-doctor",
      category: "خدمات پزشکی"
    },
    {
      title: "اختلالات اضطرابی: علائم و درمان",
      description: "شناخت انواع اختلالات اضطرابی و روش‌های درمان آنها",
      image: "/src/assets/psychiatry-home-visit.jpg",
      link: "/services/psychiatry",
      category: "سلامت روان"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <SEOHead
        title="سیتالوپرام (سلکسا): درمان افسردگی، عوارض و ویزیت آنلاین روانپزشک"
        description="راهنمای جامع سیتالوپرام (Citalopram): مکانیسم اثر، کاربردهای درمانی در افسردگی و اضطراب، عوارض جانبی و اهمیت ویزیت آنلاین روانپزشک نوید زندگی"
        keywords="سیتالوپرام، Citalopram، سلکسا، افسردگی، اضطراب، SSRI، سروتونین، ویزیت آنلاین روانپزشک، نوید زندگی"
        canonical="https://navidzendegi.com/articles/citalopram"
        ogImage="https://navidzendegi.com/src/assets/citalopram-medication.jpg"
        ogType="article"
        publishedTime="2025-01-15T10:00:00Z"
        modifiedTime="2025-01-15T10:00:00Z"
      />
      
      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "سیتالوپرام (Citalopram): مدیریت تخصصی افسردگی و اختلالات اضطراب",
          description: "راهنمای کامل سیتالوپرام: مکانیسم اثر، کاربردها، عوارض و نکات مهم درمانی",
          author: "نوید زندگی",
          publishedDate: "2025-01-15T10:00:00Z",
          modifiedDate: "2025-01-15T10:00:00Z",
          image: "https://navidzendegi.com/src/assets/citalopram-medication.jpg"
        }}
        faqs={faqs}
      />
      
      <Header />
      <FloatingContact />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNavigation items={[
            { name: "خانه", url: "/" },
            { name: "مقالات", url: "/articles" },
            { name: "سیتالوپرام", url: "/articles/citalopram" }
          ]} />
          
          <div className="mt-8 mb-8">
            <img
              src={citalopramImage}
              alt="قرص سیتالوپرام (Citalopram) برای درمان افسردگی و اضطراب"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              loading="eager"
            />
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            سیتالوپرام (Citalopram): مدیریت تخصصی افسردگی و اختلالات اضطراب
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong>سیتالوپرام (Citalopram)</strong> یکی از داروهای رایج و مؤثر در دسته <strong>مهارکننده‌های انتخابی بازجذب سروتونین (SSRI)</strong> است. این دارو به طور عمده برای درمان <strong>افسردگی اساسی (Major Depressive Disorder)</strong> و برخی از <strong>اختلالات اضطرابی</strong> تجویز می‌شود و با نام تجاری <strong>سلکسا (Celexa)</strong> نیز شناخته می‌شود. سیتالوپرام با هدف بهبود خلق‌وخو، کاهش اضطراب و بازگرداندن تعادل شیمیایی مغز عمل می‌کند.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              مکانیسم اثر سیتالوپرام: افزایش سطح سروتونین
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              سیتالوپرام عملکرد خود را با تأثیرگذاری بر یکی از مهم‌ترین انتقال‌دهنده‌های عصبی در مغز، یعنی <strong>سروتونین</strong>، انجام می‌دهد:
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>بازجذب سروتونین:</strong> سروتونین یک انتقال‌دهنده عصبی کلیدی است که در تنظیم خلق‌وخو، خواب و اشتها نقش دارد. در افراد مبتلا به <Link to="/articles/depression" className="text-primary hover:underline">افسردگی</Link>، سطح این ماده اغلب پایین است.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>مهار انتخابی:</strong> سیتالوپرام با مهار انتخابی بازجذب سروتونین توسط سلول‌های عصبی، میزان سروتونین در شکاف سیناپسی (فضای بین سلول‌های عصبی) را افزایش می‌دهد. این افزایش به مرور زمان منجر به بهبود علائم افسردگی و اضطراب می‌شود.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              کاربردهای درمانی اصلی سیتالوپرام
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              سیتالوپرام یک داروی <Link to="/services/psychiatry" className="text-primary hover:underline">روانپزشکی</Link> با کاربردهای تأیید شده در درمان بیماری‌های زیر است:
            </p>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>
                <strong>اختلال افسردگی اساسی (MDD):</strong> برای تسکین علائم افسردگی مانند غم و اندوه مستمر، از دست دادن علاقه، و مشکلات خواب
              </li>
              <li>
                <strong>اختلال هراس (Panic Disorder):</strong> کاهش دفعات و شدت حملات پانیک
              </li>
              <li>
                <strong>اختلال وسواس فکری-عملی (OCD):</strong> در برخی موارد و با نظر پزشک، برای کاهش علائم وسواسی
              </li>
            </ul>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
              <p className="text-foreground font-semibold mb-2">نکته مهم:</p>
              <p className="text-muted-foreground leading-relaxed">
                اثرات کامل درمانی سیتالوپرام معمولاً چندین هفته (4 تا 6 هفته) پس از شروع مصرف ظاهر می‌شود و نیاز به صبر و پیگیری منظم دارد. دوز دارو باید توسط روانپزشک متخصص تنظیم شود.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              عوارض جانبی، تداخلات و ملاحظات درمانی
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              مانند تمام داروهای SSRI، سیتالوپرام نیز عوارض جانبی دارد که نیاز به پایش دقیق دارند.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              1. عوارض جانبی شایع
            </h3>
            
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>
                <strong>عوارض گوارشی:</strong> تهوع، اسهال و خشکی دهان (اغلب در ابتدای درمان و گذرا هستند)
              </li>
              <li>
                <strong>اختلالات خواب:</strong> بی‌خوابی یا خواب‌آلودگی
              </li>
              <li>
                <strong>اختلالات جنسی:</strong> کاهش میل جنسی یا اختلال در عملکرد جنسی (از شایع‌ترین عوارض SSRIها)
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              2. عوارض جدی و هشدارها
            </h3>
            
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>
                <strong>سندرم سروتونین:</strong> یک عارضه نادر اما جدی است که در اثر مصرف همزمان با داروهای دیگر افزایش‌دهنده سروتونین (مانند MAOIs) رخ می‌دهد و نیاز به مراجعه فوری به پزشک دارد
              </li>
              <li>
                <strong>طولانی شدن فاصله QT:</strong> در دوزهای بالا می‌تواند باعث تغییرات در <Link to="/cardiology" className="text-primary hover:underline">ریتم قلب</Link> شود و در بیمارانی که سابقه مشکلات قلبی دارند، باید با احتیاط مصرف شود
              </li>
              <li>
                <strong>قطع ناگهانی ممنوع:</strong> سیتالوپرام نباید به صورت ناگهانی قطع شود؛ قطع مصرف باید به صورت تدریجی و تحت نظارت روانپزشک انجام گیرد تا از بروز سندرم قطع دارو (Discontinuation Syndrome) جلوگیری شود
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              3. ملاحظات بارداری و شیردهی
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              مصرف سیتالوپرام در بارداری و شیردهی تنها در صورتی مجاز است که منافع آن بر خطرات احتمالی آن غلبه کند و حتماً باید با مشورت متخصص باشد.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              پایش و تنظیم دارو با ویزیت آنلاین روانپزشک
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              به دلیل اهمیت تنظیم دقیق دوز و مدیریت عوارض جانبی، استفاده از خدمات تخصصی در منزل یا به صورت آنلاین، برای بیماران مصرف‌کننده سیتالوپرام ضروری است.
            </p>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>
                <strong>تنظیم دوز تخصصی:</strong> <Link to="/services/online-doctor" className="text-primary hover:underline">ویزیت آنلاین روانپزشک</Link> نوید زندگی امکان تنظیم دقیق دوز دارو، مدیریت عوارض و ارزیابی تأثیر درمان را در محیط آرام منزل فراهم می‌کند
              </li>
              <li>
                <strong>پرهیز از قطع خودسرانه:</strong> مشاوره مستمر با روانپزشک آنلاین، اطمینان می‌دهد که بیمار از قطع ناگهانی و خودسرانه دارو پرهیز می‌کند
              </li>
            </ul>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                نیاز به مشاوره تخصصی روانپزشکی دارید؟
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                برای شروع درمان سیتالوپرام، تنظیم دوز ایمن و مدیریت عوارض جانبی، با روانپزشکان مجرب ما مشورت کنید. برای رزرو وقت ویزیت آنلاین روانپزشک و شروع مسیر بهبود، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <a
                href="tel:09386117912"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>تماس: 09386117912</span>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              منابع (References)
            </h2>
            
            <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground mb-8">
              <li>
                Kennedy, S. H., et al. (2016). Canadian Network for Mood and Anxiety Treatments (CANMAT) 2016 Clinical Guidelines for the Management of Adults with Major Depressive Disorder. The Canadian Journal of Psychiatry, 61(9), 540-560.
              </li>
              <li>
                Stahl, S. M. (2013). Stahl's Essential Psychopharmacology: Neuroscientific Basis and Practical Applications. Cambridge University Press. (Explaining SSRI mechanism).
              </li>
              <li>
                Fergusson, D. M., et al. (2005). Selective serotonin reuptake inhibitor use and the risk of congenital anomalies: a meta-analysis of cohort studies. Psychopharmacology (Berl), 179(3), 505-512.
              </li>
            </ol>
          </div>

          <FAQSection faqs={faqs} />
          
          <div className="mt-12">
            <PricingInfo />
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default CitalopramPage;