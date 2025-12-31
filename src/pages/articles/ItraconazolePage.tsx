import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import { Phone, AlertTriangle } from "lucide-react";
import itraconazoleImage from "@/assets/itraconazole-medication.jpg";
import dandruffImage from "@/assets/dandruff-treatment.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";

const ItraconazolePage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "داروی ایتراکونازول", url: "/articles/itraconazole" }
  ];

  const faqItems = [
    {
      question: "ایتراکونازول برای چه بیماری‌هایی استفاده می‌شود؟",
      answer: "این دارو برای درمان عفونت‌های قارچی شامل قارچ ناخن، قارچ پوست، برفک دهان و عفونت‌های سیستمیک مانند آسپرژیلوز و هیستوپلاسموز تجویز می‌شود."
    },
    {
      question: "آیا ایتراکونازول برای قلب ضرر دارد؟",
      answer: "بله، این دارو دارای هشدار جعبه سیاه FDA است و در بیماران با نارسایی قلبی یا اختلال عملکرد بطنی ممنوع است. توصیه می‌شود قبل از شروع درمان، اکوکاردیوگرافی انجام شود."
    },
    {
      question: "ایتراکونازول را با چه چیزی بخورم؟",
      answer: "کپسول‌های ایتراکونازول باید بلافاصله بعد از یک غذای کامل مصرف شوند تا جذب بهتری داشته باشند. همچنین از مصرف همزمان با آب گریپ‌فروت خودداری کنید."
    },
    {
      question: "عوارض جانبی ایتراکونازول چیست؟",
      answer: "عوارض شایع شامل تهوع، استفراغ، اسهال و سردرد است. عوارض جدی شامل زردی پوست (مشکلات کبدی)، تنگی نفس و ورم پاها (نشانه‌های نارسایی قلبی) می‌باشد."
    },
    {
      question: "آیا می‌توانم ایتراکونازول را خودسرانه مصرف کنم؟",
      answer: "خیر، به هیچ وجه. این دارو تداخلات دارویی زیادی دارد و باید تحت نظر پزشک متخصص و با انجام آزمایش‌های لازم مصرف شود."
    }
  ];

  const relatedArticles = [
    {
      title: "شوره سر و درمان آن",
      description: "علل شوره سر و درمان‌های خانگی و پزشکی",
      image: dandruffImage,
      link: "/articles/dandruff",
      category: "پوست"
    },
    {
      title: "تپش قلب",
      description: "علل و درمان تپش قلب و ضربان نامنظم",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    },
    {
      title: "نوار قلب در منزل",
      description: "خدمات ECG و نوار قلب در منزل تهران و کرج",
      image: ecgHomeImage,
      link: "/articles/ecg-guide",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="داروی ایتراکونازول | کاربردها، عوارض و نکات مصرف | نوید زندگی"
        description="راهنمای کامل داروی ایتراکونازول: موارد مصرف، عوارض جانبی، تداخلات دارویی و هشدارهای قلبی. ویزیت متخصص در منزل تهران و کرج."
        keywords="ایتراکونازول, داروی ضدقارچ, قارچ ناخن, درمان قارچ پوست, عوارض ایتراکونازول, تداخل دارویی"
        canonical="https://navidzendegi.com/articles/itraconazole"
        ogType="article"
      />

      <ArticleSchema
        title="داروی ایتراکونازول؛ کاربردها، عوارض و نکات حیاتی"
        description="راهنمای کامل داروی ایتراکونازول بر اساس منابع معتبر پزشکی"
        publishedTime="2024-12-31"
        modifiedTime="2024-12-31"
        image={itraconazoleImage}
      />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
              داروی ایتراکونازول؛ کاربردها، عوارض و نکات حیاتی
            </h1>
            <p className="text-muted-foreground mb-6">
              نویسنده: تیم پزشکی نوید زندگی | آخرین به‌روزرسانی: دی ۱۴۰۳
            </p>
            <img
              src={itraconazoleImage}
              alt="داروی ایتراکونازول - کپسول ضدقارچ"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </header>

          {/* Warning Box */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-destructive mb-2">هشدار مهم</h3>
                <p className="text-foreground">
                  مصرف خودسرانه ایتراکونازول به دلیل تداخلات دارویی و اثرات قلبی می‌تواند خطرناک باشد. 
                  این دارو حتماً باید تحت نظر پزشک متخصص تجویز و مصرف شود.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              ایتراکونازول یک داروی ضدقارچ سنتتیک از خانواده «آزول‌ها» است که با جلوگیری از رشد قارچ‌ها، عفونت را ریشه‌کن می‌کند. 
              این دارو به‌ویژه برای بیمارانی که به داروهای ضدقارچ دیگر پاسخ نداده‌اند، یک گزینه حیاتی است.
            </p>
            <p className="text-foreground leading-relaxed">
              مرکز نوید زندگی با اعزام متخصص داخلی و پوست به منزل، دوز دقیق این دارو را بر اساس آزمایش‌های پایه برای شما تنظیم می‌کند.
            </p>
          </section>

          {/* Usage Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">موارد مصرف ایتراکونازول</h2>
            <p className="text-foreground mb-4">
              بر اساس گزارش‌های Mayo Clinic و FDA، این دارو در موارد زیر تجویز می‌شود:
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>عفونت‌های پوستی:</strong> درمان موارد شدید درماتیت سبوره و قارچ‌های پوستی مقاوم.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>قارچ ناخن (Onychomycosis):</strong> درمان عفونت‌های قارچی ناخن دست و پا.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>عفونت‌های دهانی و مری:</strong> مانند برفک دهان (Candidiasis).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>عفونت‌های سیستمیک:</strong> درمان بیماری‌هایی مثل هیستوپلاسموز، آسپرژیلوز و بلاستومایکوز.</span>
              </li>
            </ul>
          </section>

          {/* Mechanism Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">مکانیزم اثر</h2>
            <p className="text-foreground leading-relaxed">
              ایتراکونازول با مهار آنزیم سیتوکروم P450 در قارچ، از سنتز «ارگوسترول» جلوگیری می‌کند. 
              ارگوسترول جزء حیاتی دیواره سلولی قارچ است؛ بدون آن، دیواره سلولی قارچ نشت کرده و عامل بیماری‌زا از بین می‌رود.
            </p>
          </section>

          {/* Heart Warning Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">هشدار بسیار مهم: تداخل با سلامت قلب</h2>
            <div className="bg-destructive/10 border-r-4 border-destructive p-6 rounded-lg mb-6">
              <h3 className="font-bold text-destructive mb-3">هشدار جعبه سیاه (Black Box Warning)</h3>
              <p className="text-foreground">
                طبق اعلام FDA، ایتراکونازول <strong>نباید</strong> برای درمان قارچ ناخن در بیمارانی که سابقه نارسایی قلبی (CHF) 
                یا اختلال در عملکرد بطنی دارند استفاده شود. این دارو می‌تواند قدرت پمپاژ قلب را کاهش دهد.
              </p>
            </div>
            <p className="text-foreground leading-relaxed">
              اگر پزشک برای شما ایتراکونازول تجویز کرده است، توصیه می‌شود ابتدا یک ویزیت متخصص قلب و اکو در منزل 
              توسط تیم نوید زندگی انجام دهید تا از سلامت کامل پمپاژ قلب خود مطمئن شوید.
            </p>
          </section>

          {/* Usage Tips Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">نحوه مصرف و نکات طلایی</h2>
            <ul className="space-y-4 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>همراه با غذا:</strong> کپسول‌های ایتراکونازول برای جذب بهتر حتماً باید بلافاصله بعد از یک غذای کامل مصرف شوند.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>محیط اسیدی معده:</strong> جذب این دارو به اسید معده نیاز دارد. اگر از داروهای ضد اسید معده استفاده می‌کنید، حتماً به پزشک اطلاع دهید.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>منع مصرف با گریپ‌فروت:</strong> مصرف همزمان با آب گریپ‌فروت می‌تواند سطح دارو را در خون به شدت بالا برده و سمی شود.</span>
              </li>
            </ul>
          </section>

          {/* Side Effects Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">عوارض جانبی احتمالی</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-foreground mb-2">عوارض شایع:</h3>
                <p className="text-foreground">تهوع، استفراغ، اسهال و سردرد.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">عوارض جدی (نیازمند مراجعه فوری به پزشک):</h3>
                <ul className="text-foreground space-y-2">
                  <li>• زردی پوست یا چشم (مشکلات کبدی)</li>
                  <li>• تنگی نفس و ورم پاها (نشانه‌های نارسایی قلبی)</li>
                  <li>• خستگی غیرعادی و شدید</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Drug Interactions Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">تداخلات دارویی مهم</h2>
            <p className="text-foreground mb-4">ایتراکونازول با لیست بلندی از داروها تداخل دارد، از جمله:</p>
            <ul className="space-y-2 text-foreground">
              <li>• داروهای چربی خون (استاتین‌ها)</li>
              <li>• داروهای رقیق‌کننده خون (وارفارین)</li>
              <li>• برخی داروهای تنظیم ضربان قلب</li>
              <li>• داروهای ضد اسید معده</li>
            </ul>
            <p className="text-foreground mt-4">
              بررسی تداخلات دارویی توسط متخصص نوید زندگی در منزل الزامی است.
            </p>
          </section>

          {/* References Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">منابع علمی</h2>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• NCBI (StatPearls): Itraconazole Pharmacology and Indications</li>
              <li>• Mayo Clinic: Itraconazole (Oral Route) Description and Precautions</li>
              <li>• FDA Center for Drug Evaluation: Safety Information on Itraconazole</li>
              <li>• WebMD: Itraconazole Capsules - Uses, Side Effects, and Warnings</li>
            </ul>
          </section>

          {/* Why Navid Zendegi Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">چرا برای شروع این درمان به «نوید زندگی» نیاز دارید؟</h2>
            <p className="text-foreground mb-4">با توجه به حساسیت بالای داروی ایتراکونازول و اثرات آن بر کبد و قلب:</p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>آزمایش خون در منزل:</strong> بررسی آنزیم‌های کبدی قبل از شروع دوره درمان.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>ویزیت متخصص در منزل:</strong> بررسی دقیق تداخلات دارویی با داروهای فعلی شما.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>پایش قلبی:</strong> انجام نوار قلب و اکو برای اطمینان از عدم بروز نارسایی قلبی در طول درمان.</span>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/10 rounded-lg p-8 mb-10 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              مشاوره تخصصی دارویی در منزل
            </h2>
            <p className="text-foreground mb-6">
              برای تجویز صحیح ایتراکونازول و انجام آزمایش‌های لازم با ما تماس بگیرید.
            </p>
            <a
              href="tel:09386117912"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              تماس: ۰۹۳۸۶۱۱۷۹۱۲
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

export default ItraconazolePage;
