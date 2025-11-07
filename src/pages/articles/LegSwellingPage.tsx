import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingContact from "../../components/FloatingContact";
import BreadcrumbNavigation from "../../components/BreadcrumbNavigation";
import LazyImage from "../../components/LazyImage";
import RelatedArticles from "../../components/RelatedArticles";
import FAQSection from "../../components/FAQSection";
import SEOHead from "../../components/SEOHead";
import StructuredData from "../../components/StructuredData";
import PricingInfo from "../../components/PricingInfo";
import legSwellingImage from "../../assets/leg-swelling-article.jpg";
import varicoseVeinsImage from "../../assets/varicose-veins-article.jpg";
import internalMedicineImage from "../../assets/internal-medicine.jpg";
import cardiologyImage from "../../assets/cardiology-home-visit.jpg";

const LegSwellingPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "ورم پا", url: "/articles/leg-swelling" }
  ];

  const faqs = [
    {
      question: "چه زمانی ورم پا نیاز به مراجعه فوری دارد؟",
      answer: "اگر ورم ناگهانی در یک پا ایجاد شود، با درد، گرما یا قرمزی همراه باشد یا تنگی نفس و درد قفسه‌سینه داشته باشید، باید فوراً به پزشک مراجعه کنید زیرا ممکن است نشانه لخته خون یا نارسایی قلبی باشد."
    },
    {
      question: "تفاوت ورم دو طرفه و یک طرفه پا چیست؟",
      answer: "ورم دو طرفه معمولاً ناشی از مشکلات سیستمیک مانند نارسایی قلبی، کلیوی یا کبدی است. ورم یک طرفه اغلب نشانه مشکلات موضعی مانند لخته خون (DVT)، عفونت یا آسیب است."
    },
    {
      question: "چگونه می‌توان از ورم پا پیشگیری کرد؟",
      answer: "با حرکت منظم پاها، اجتناب از ایستادن یا نشستن طولانی، بالا نگه داشتن پاها هنگام استراحت، کاهش مصرف نمک، حفظ وزن سالم و استفاده از جوراب‌های فشاری (در صورت توصیه پزشک) می‌توان از ورم پا پیشگیری کرد."
    },
    {
      question: "آیا رژیم غذایی در کنترل ورم پا مؤثر است؟",
      answer: "بله، کاهش مصرف نمک، افزایش مصرف میوه‌ها و سبزیجات، نوشیدن آب کافی و پرهیز از غذاهای فرآوری شده می‌تواند به کاهش احتباس مایعات و کنترل ورم پا کمک کند."
    },
    {
      question: "چه داروهایی می‌توانند باعث ورم پا شوند؟",
      answer: "برخی داروهای فشار خون (مانند مسدودکننده‌های کانال کلسیم)، داروهای ضدالتهاب غیراستروئیدی، برخی داروهای دیابت و داروهای هورمونی می‌توانند باعث احتباس مایعات و ورم پا شوند. در صورت مشاهده این عارضه با پزشک مشورت کنید."
    }
  ];

  const relatedArticles = [
    {
      title: "واریس؛ علل، علائم و روش‌های درمانی",
      description: "اطلاعات کامل درباره واریس، علل ایجاد و روش‌های درمانی مؤثر",
      link: "/articles/varicose-veins",
      image: varicoseVeinsImage,
      category: "عمومی"
    },
    {
      title: "خدمات پزشک داخلی در منزل",
      description: "ویزیت متخصص داخلی در منزل برای تشخیص و درمان بیماری‌ها",
      link: "/services/internal-medicine",
      image: internalMedicineImage,
      category: "خدمات"
    },
    {
      title: "ویزیت متخصص قلب و عروق در منزل",
      description: "خدمات تخصصی قلب و عروق شامل معاینه، تفسیر آزمایش و تنظیم دارو در منزل",
      link: "/services/cardiology",
      image: cardiologyImage,
      category: "خدمات"
    }
  ];

  return (
    <>
      <SEOHead
        title="ورم پا؛ انواع، علل، تشخیص و درمان | نوید زندگی"
        description="راهنمای جامع ورم پا شامل انواع ادم، علل احتباس مایع، تشخیص DVT و نارسایی قلبی، روش‌های درمان و پیشگیری. خدمات ویزیت پزشک در منزل"
        keywords="ورم پا، ادم، احتباس مایع، DVT، لخته خون، نارسایی قلبی، نارسایی وریدی، واریس، لنفدما، ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/leg-swelling"
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-15T00:00:00Z"
        modifiedTime="2025-01-15T00:00:00Z"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "ورم پا؛ انواع، علل، تشخیص و درمان",
          description: "راهنمای جامع ورم پا شامل انواع، علل، تشخیص و درمان",
          author: "نوید زندگی",
          publishedDate: "2025-01-15",
          image: legSwellingImage
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
              ورم پا؛ انواع، علل، تشخیص و درمان
            </h1>
            <div className="flex justify-center mb-6">
              <LazyImage
                src={legSwellingImage}
                alt="ورم پا و معاینه پزشکی"
                className="rounded-lg shadow-lg max-w-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <h2>مقدمه</h2>
            <p>
              تورم اندام تحتانی یا به عبارتی «ورم پا» اصطلاحی است که بسیاری از مردم با آن مواجه می‌شوند؛ از ورم گاه‌به‌گاه پای بعد از ایستادن طولانی تا تورم شدید یکی از پاها که ممکن است نشانه بیماری جدی باشد. در پزشکی، اصطلاح غالب این وضعیت «Edema اندام تحتانی» یا «ورم دستگاه محیطی» است که به تجمع مایع یا اختلال در سیستم عروقی/لنفی/کلیوی باز می‌گردد.
            </p>
            <p>
              شناخت انواع مختلف ورم پا و تشخیص سریع علل آن بسیار مهم است، زیرا برخی علل آن ممکن است نشان‌دهنده بیماری خطرناک مانند لخته خون یا نارسایی قلبی باشند.
            </p>

            <h2>انواع و طبقه‌بندی ورم پا</h2>

            <h3>۱. ورم ناشی از احتباس مایع (پِدینگ ادِما / pitting edema)</h3>
            <p>
              در این حالت مایع بین سلول‌ها تجمع می‌کند و وقتی فشار انگشت بر محل داده شود، فرو رفتگی باقی می‌ماند («پیتینگ»)؛ این نوع ورم غالباً ناشی از اختلالات سیستمیک مانند نارسایی قلب، کلیه یا کمبود پروتئین است.
            </p>

            <h3>۲. ورم ناشی از اختلال لنفی یا لنفِدِما (lymphedema)</h3>
            <p>
              در این حالت، سیستم لنفاوی قادر به تخلیه مایع اضافی نیست و ورم غالباً بدون فرو رفتگی قابل‌لمس است («non-pitting») و ممکن است پوست ضخیم‌تر شود.
            </p>

            <h3>۳. ورم واریسی/ناقصی وریدی مزمن (chronic venous insufficiency, CVI)</h3>
            <p>
              وقتی وریدهای پا نتوانند خون را به خوبی به سمت قلب برگردانند، خون در پا تجمع می‌کند و فشار داخل وریدها بالا می‌رود که منجر به تورم، پوست تغییر رنگ داده، <a href="/articles/varicose-veins" className="text-primary hover:underline">وریدهای واریسی</a> می‌شود. غالباً تورم دو طرفه است، مخصوصاً در مچ پاها.
            </p>

            <h3>۴. ورم موضعی یا شدید ناگهانی</h3>
            <p>
              مثلاً در حالت‌هایی مانند Deep Vein Thrombosis (DVT) یا عفونت/ضربه که یکی از پاها سریعاً ورم می‌کند، پوست گرم/قرمز می‌شود و درد دارد؛ این حالت نیاز به بررسی فوری دارد.
            </p>

            <h3>۵. ورم ناشی از داروها یا عوامل سبک زندگی</h3>
            <p>
              برخی داروها (مثل برخی از مسدودکننده‌های کانال کلسیم) یا ایستادن یا نشستن طولانی، رژیم‌غذایی پرنمک، بارداری می‌توانند منجر به ورم پا شوند.
            </p>

            <h2>علل شایع ورم پا</h2>
            <p>در اینجا به برخی از دلایل رایج تورم پا اشاره می‌کنیم:</p>
            <ul>
              <li><strong>نارسایی قلبی:</strong> وقتی قلب نمی‌تواند خون را پمپاژ کند، مایع در بافت‌های پا جمع می‌شود. <a href="/services/cardiology" className="text-primary hover:underline">متخصص قلب و عروق</a> می‌تواند کمک کند.</li>
              <li><strong>مشکلات کلیوی:</strong> کاهش عملکرد کلیه باعث می‌شود سدیم و آب زیادتر نگه داشته شود.</li>
              <li><strong>بیماری کبد:</strong> سیروز یا اختلال در تولید آلبومین باعث نشت مایعات به بافت‌های بدن می‌شود.</li>
              <li><strong>مشکلات وریدی:</strong> مانند نارسایی وریدی مزمن، واریس، پس از DVT.</li>
              <li><strong>اختلالات لنفاوی:</strong> مانند لنفِدِما بعد از جراحی یا پرتو.</li>
              <li><strong>داروها یا رژیم غذایی:</strong> نمک زیاد، بارداری، داروهایی که باعث احتباس آب می‌شوند.</li>
            </ul>

            <h2>تشخیص و اهمیت پیگیری</h2>
            <p>تشخیص سریع و بررسی دقیق بسیار مهم است، چون ورم پا ممکن است نشانه بیماری جدی باشد:</p>
            <ul>
              <li>اگر ورم ناگهانی در یک پا ایجاد شود ➜ احتمال لخته خون (DVT) وجود دارد.</li>
              <li>اگر با علائمی مثل تنگی نفس، درد قفسه‌سینه، رنگ پوست تغییر کرده یا ورم مچ و پا شدید شود ➜ نیاز فوری به مراجعه پزشکی دارد.</li>
              <li>در معاینه، پزشک بررسی می‌کند: فرو رفتگی با انگشت (pitting vs non-pitting)؛ رنگ و پوست؛ وریدها؛ سابقه دارو/بیماری.</li>
            </ul>

            <h2>درمان و نکات مراقبتی</h2>

            <h3>درمان اصولی</h3>
            <ul>
              <li><strong>درمان علت زمینه‌ای:</strong> برای مثال نارسایی قلبی یا بیماری کلیوی باید تحت نظر <a href="/services/internal-medicine" className="text-primary hover:underline">پزشک داخلی</a> درمان شوند.</li>
              <li>رژیم کم‌نمک، بالا نگه داشتن پاها هنگام استراحت، استفاده از جوراب‌های فشاری (compression stockings) برای تورم ناشی از وریدی یا لنفی.</li>
              <li>اگر دارویی باعث ورم شده است، ممکن است پزشک دارو را تغییر دهد.</li>
            </ul>

            <h3>نکات شخصی/سبک‌زندگی</h3>
            <ul>
              <li>از ایستادن یا نشستن طولانی بدون حرکت خودداری کنید؛ هر یک ساعت بلند شوید و پاها را حرکت دهید.</li>
              <li>رعایت وزن سالم و فعالیت بدنی منظم به بهبود گردش خون کمک می‌کند.</li>
              <li>هنگام خواب، پاها را بالاتر از سطح قلب قرار دهید (مثلاً با گذاشتن بالش زیر مچ پا).</li>
              <li>مصرف نمک را کاهش دهید و در رژیم غذایی به میوه‌ها، سبزی‌ها و مایعات کافی توجه داشته باشید.</li>
            </ul>

            <h2>جمع‌بندی</h2>
            <p>
              ورم پا می‌تواند از یک مشکل ساده مثل ایستادن طولانی ناشی شود یا نشانه بیماری جدی مانند نارسایی قلب یا لخته خون باشد. بنابراین اگر تورم پا تکرار می‌شود، یک‌طرفه است یا با درد یا تنگی‌نفس همراه است، باید سریعاً بررسی شود. رعایت سبک‌زندگی سالم، بالا نگه‌داشتن پاها، کاهش نمک، و در صورت نیاز پیگیری پزشکی (حتی در منزل) می‌تواند به کنترل این وضعیت کمک کند.
            </p>
          </div>

          {/* منابع علمی */}
          <section className="mt-12 pt-8 border-t border-border">
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <h2 className="text-2xl font-bold text-foreground mb-6">منابع (References)</h2>
              <ol className="space-y-3 text-sm leading-relaxed">
                <li>"Peripheral Edema – StatPearls." NCBI Bookshelf.</li>
                <li>"Common Causes of Leg Swelling." WebMD.</li>
                <li>"Edema: Causes, Symptoms & Treatment." Cleveland Clinic.</li>
                <li>"Edema: Symptoms and causes." Mayo Clinic.</li>
                <li>"Diagnostic approach to lower limb edema." PMC (PubMed Central).</li>
                <li>"Understanding Leg Swelling: Causes, Symptoms and When to Seek Medical Help." Medical News Today.</li>
                <li>"In brief: Causes and signs of edema." InformedHealth.org (NCBI).</li>
              </ol>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Related Articles */}
          <RelatedArticles articles={relatedArticles} />

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              نیاز به مشاوره پزشکی دارید؟
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              اگر شما یا یکی از اعضای خانواده دچار ورم پا هستید — مخصوصاً اگر مکرر، شدید یا همراه درد/تنگی‌نفس است — می‌توانید از خدمات <a href="/services/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل</a> کمک بگیرید.
            </p>
            <a 
              href="tel:+989386117912" 
              className="inline-block text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              aria-label="تماس با شماره 09386117912"
            >
              ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </div>

          {/* Pricing Info */}
          <PricingInfo />
        </article>
      </main>
      
      <Footer />
    </div>
  </>
  );
};

export default LegSwellingPage;
