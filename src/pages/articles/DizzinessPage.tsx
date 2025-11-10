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
import dizzinessImage from "../../assets/dizziness-comprehensive.jpg";
import { Link } from "react-router-dom";

const DizzinessPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سرگیجه", url: "/articles/dizziness" }
  ];

  const faqs = [
    {
      question: "چه تفاوتی بین سرگیجه (vertigo) و احساس سبکی سر (light-headedness) وجود دارد؟",
      answer: "سرگیجه واقعی (vertigo) حس چرخش محیط است، در حالی که احساس سبکی سر یا غش‌کردنی معمولاً به دلیل افت فشار خون یا کم‌آبی رخ می‌دهد."
    },
    {
      question: "آیا سرگیجه می‌تواند نشانه بیماری جدی باشد؟",
      answer: "بله، اگر سرگیجه با ضعف ناگهانی، اختلال در گفتار، سردرد شدید یا فلج صورت همراه باشد، ممکن است نشانه سکته مغزی باشد و نیاز به مراجعه فوری دارد."
    },
    {
      question: "BPPV چیست و چگونه درمان می‌شود؟",
      answer: "BPPV (Benign Paroxysmal Positional Vertigo) شایع‌ترین علت سرگیجه موقعیتی است که با مانورهای درمانی مانند مانور Epley به راحتی قابل درمان است."
    },
    {
      question: "چه کارهایی می‌توانم برای پیشگیری از سرگیجه هنگام بلند شدن انجام دهم؟",
      answer: "آرام بلند شوید، هیدراته باشید، وعده‌های غذایی را منظم مصرف کنید و از افت قند خون یا کم‌آبی پیشگیری کنید."
    },
    {
      question: "آیا می‌توان سرگیجه را در منزل درمان کرد؟",
      answer: "بسیاری از موارد سرگیجه با تغییرات ساده سبک زندگی و مانورهای خاص قابل کنترل هستند، اما موارد جدی نیاز به ویزیت پزشک در منزل یا مراجعه به مرکز درمانی دارند."
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
      title: "فشار خون بالا: راهنمای جامع پیشگیری و کنترل",
      description: "همه چیز درباره فشار خون، علائم و روش‌های کنترل آن",
      link: "/articles/blood-pressure",
      image: "/src/assets/blood-pressure-article.jpg",
      category: "قلب و عروق"
    },
    {
      title: "میگرن: علل، تشخیص و درمان سردرد میگرنی",
      description: "اطلاعات کامل درباره سردرد میگرنی، علائم و روش‌های درمان",
      link: "/articles/migraine",
      image: "/src/assets/migraine-article.jpg",
      category: "عمومی"
    }
  ];

  return (
    <>
      <SEOHead
        title="سرگیجه؛ علل، تشخیص، درمان و نکات مهم | نوید زندگی"
        description="راهنمای جامع سرگیجه: تعاریف، دسته‌بندی، علل شایع، تشخیص و درمان. اطلاعات کامل درباره BPPV، سرگیجه موقعیتی و زمان مراجعه ضروری"
        keywords="سرگیجه، علت سرگیجه، درمان سرگیجه، vertigo، BPPV، سرگیجه موقعیتی، گیجی، عدم تعادل، ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/dizziness"
        ogType="article"
        author="تیم تخصصی نوید زندگی"
        publishedTime="2024-01-21T00:00:00Z"
        modifiedTime="2024-01-21T00:00:00Z"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "سرگیجه؛ علل، تشخیص، درمان و نکات مهم",
          description: "راهنمای جامع سرگیجه: تعاریف، علل، تشخیص و درمان",
          author: "تیم تخصصی نوید زندگی",
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
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              سرگیجه؛ علل، تشخیص، درمان و نکات مهم
            </h1>
            <div className="flex justify-center mb-6">
              <LazyImage
                src={dizzinessImage}
                alt="سرگیجه - علل، تشخیص و درمان"
                className="rounded-lg shadow-lg max-w-2xl w-full h-auto"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-right leading-relaxed" dir="rtl">
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">مقدمه</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                سرگیجه، احساسی از سبکی سر، عدم تعادل، یا گیجی است که می‌تواند بسیار ناراحت‌کننده باشد و کیفیت زندگی را کم کند. این علامت می‌تواند موقتی یا مزمن باشد، و علل آن طیف وسیعی دارد — از مشکلات ساده مانند کم‌آبی تا شرایط جدی مانند اختلالات در سیستم عصبی یا قلبی.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                در این مقاله به تعاریف، دسته‌بندی، علل شایع، زمان مراجعه ضروری، تشخیص و درمان می‌پردازیم.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">تعریف و انواع سرگیجه</h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">تعریف</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                در پزشکی، سرگیجه می‌تواند به چند حالت شرح داده شود: احساس سبکی یا غش‌کردنی («light-headedness»)، احساس عدم تعادل، یا چرخش محیط («vertigo»). بعضی منابع آن را «دسی‌اریتا» (disequilibrium) می‌نامند که احساس ناتوانی در حفظ وضعیت بدن است.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">دسته‌بندی کلی</h3>
              <ul className="mr-6 space-y-2 text-muted-foreground">
                <li><strong>سرگیجه حاد:</strong> ناگهانی شروع شده، ممکن است با سبکی سر شدید، تهوع یا عدم تعادل همراه باشد.</li>
                <li><strong>سرگیجه مزمن یا مکرر:</strong> علائم به مدت طولانی‌تر یا مکرر ظاهر می‌شوند.</li>
                <li><strong>سرگیجه موقعیتی:</strong> با تغییر وضعیت بدن (مثل بلند شدن ناگهانی) یا حرکت سر ایجاد می‌شود (مثلاً در Benign Paroxysmal Positional Vertigo یا BPPV).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">علل شایع سرگیجه</h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">علل عمومی و قابل‌کنترل</h3>
              <ul className="mr-6 space-y-2 text-muted-foreground mb-4">
                <li>تغییر ناگهانی وضعیت بدن (ایستادن سریع) → افت فشار خون وضعیتی (Orthostatic hypotension) یا تجمع خون در پاها</li>
                <li>کم‌آبی بدن، گرسنگی، <Link to="/articles/diabetes" className="text-primary hover:underline">قند پایین خون (hypoglycemia)</Link></li>
                <li>داروها، به‌خصوص <Link to="/articles/high-blood-pressure-control" className="text-primary hover:underline">داروهای کاهش‌دهنده فشار خون</Link>، یا داروهایی که اثر بر تعادل دارند</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">علل مرتبط با گوش داخلی/دستگاه تعادل</h3>
              <ul className="mr-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>BPPV:</strong> یکی از شایع‌ترین علل سرگیجهِ موقعیتی است</li>
                <li>التهاب عصب تعادل یا دستگاه حلزونی (مثل vestibular neuritis) یا بیماری‌هایی مثل Meniere's disease</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">علل مرکزی و جدی‌تر</h3>
              <ul className="mr-6 space-y-2 text-muted-foreground">
                <li>بیماری‌های عروق مغزی، <Link to="/articles/stroke-symptoms" className="text-primary hover:underline">سکته کوچک</Link>، تومورها یا بیماری‌های سیستم عصبی مرکزی</li>
                <li>کم‌خونی، اختلالات قلبی، کاهش جریان خون به مغز</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">تشخیص و نکات مهم برای مراجعه</h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">تشخیص</h3>
              <ul className="mr-6 space-y-2 text-muted-foreground mb-4">
                <li>پزشک سابقه دقیق می‌گیرد: چه زمانی شروع شد؟ با چه فعالیتی؟ همراه با تهوع، استفراغ، کاهش شنوایی یا وزوز گوش؟</li>
                <li>معاینه فیزیکی شامل تست‌های تعادل، وضعیت سر، راه‌رفتن، گوش داخلی و عصب شنوایی</li>
                <li>واکنش به وضعیت‌های مختلف (مثلاً بلند شدن سریع) و تست‌های خاص برای BPPV یا سایر اختلالات</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">چه زمانی باید سریع مراجعه کرد؟</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                اگر سرگیجه با هر یک از موارد زیر همراه است، بررسی فوری لازم است:
              </p>
              <ul className="mr-6 space-y-2 text-muted-foreground">
                <li>ناگهانی، شدید، یا بدتر شونده</li>
                <li>همراه با سردرد شدید، ضعف ناگهانی یا فلج صورت/اندام، گفتار نامفهوم – ممکن است نشانه <Link to="/articles/stroke-symptoms" className="text-primary hover:underline">سکته مغزی</Link> باشد</li>
                <li>همراه با کاهش شنوایی ناگهانی یا وزوز گوش (ممکن است مربوط به گوش داخلی باشد)</li>
                <li>همراه با تنگی نفس، <Link to="/articles/heart-attack-symptoms" className="text-primary hover:underline">درد قفسه سینه</Link> یا علائم قلبی</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">درمان و مدیریت</h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">درمان بر اساس علت</h3>
              <ul className="mr-6 space-y-2 text-muted-foreground mb-4">
                <li>برای BPPV، مانورهایی مثل مانور Epley maneuver بسیار مؤثرند</li>
                <li>برای اختلالات گوش داخلی یا نوریتِ وستیبولار، درمان ممکن است شامل دارو، فیزیوتراپی تعادلی (vestibular rehab) و اولویت گذاشتن به ثبات سر و بدن باشد</li>
                <li>اگر علت قلبی یا عروقی دارد، درمان بیماری زمینه‌ای (مثلاً <Link to="/articles/blood-pressure" className="text-primary hover:underline">فشار خون</Link>، کم‌خونی، اختلالات ریتم قلب) ضروری است</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">نکات مراقبتی سبک‌زندگی</h3>
              <ul className="mr-6 space-y-2 text-muted-foreground">
                <li>بلند شدن آرام از حالت نشسته یا خوابیده تا میزان افت فشار خون را کاهش دهید</li>
                <li>هیدراته بمانید، وعده‌های غذایی را منظم کنید و از افت قند خون یا کم‌آبی پیشگیری کنید</li>
                <li>در محیط‌های پرنور یا پر‌حرکت که ممکن است سرگیجه را تشدید کنند، احتیاط داشته باشید</li>
                <li>اگر دارویی مصرف می‌کنید که ممکن است سرگیجه دهد، با پزشک یا داروساز مشورت کنید</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">خدمات پزشکی در منزل</h2>
              <p className="text-muted-foreground leading-relaxed">
                برای افرادی که سرگیجه مکرر دارند یا توان مراجعه حضوری ندارند، استفاده از خدمات <Link to="/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل</Link> در نوید زندگی می‌تواند مفید باشد: پزشک می‌تواند معاینه اولیه انجام دهد، داروها و علل احتمالی را بررسی کند، در صورت لزوم ارجاع به متخصص را هماهنگ نماید و برنامه پیگیری تنظیم کند.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">جمع‌بندی</h2>
              <p className="text-muted-foreground leading-relaxed">
                سرگیجه علامتی است با طیف گسترده از علل — از عوامل ساده تا شرایط جدی. شناخت موقعیت، رفتار سریع با علائم هشدار، اصلاح سبک زندگی و در صورت لزوم درمان یا ارجاع تخصصی می‌توانند کیفیت زندگی را بسیار بهبود بخشند. اگر سرگیجه شما مکرر، شدید یا همراه با علائم خطر است، حتماً با پزشک مشورت کنید.
              </p>
            </section>

            <section className="mb-8 p-6 bg-muted/30 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">منابع (References)</h3>
              <ol className="mr-6 space-y-1 text-sm text-muted-foreground">
                <li>"Dizziness: Causes & Treatment." Cleveland Clinic</li>
                <li>"Dizziness – Symptoms and causes." Mayo Clinic</li>
                <li>"Evaluation of the Dizzy and Unbalanced Patient." StatPearls – NCBI Bookshelf</li>
                <li>Staab JP et al. "Diagnosis and Treatment of Vertigo and Dizziness." PMC</li>
                <li>"Dizziness: Approach to Evaluation and Management." American Academy of Family Physicians (AAFP)</li>
                <li>"Causes of Dizziness – Vestibular Disorders Association." Vestibular Disorders Association</li>
              </ol>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-border" dir="rtl">
            <p className="text-sm text-muted-foreground">
              نویسنده: تیم تخصصی نوید زندگی
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              تاریخ انتشار: ۱۴۰۳/۱۰/۳۰ | آخرین بروزرسانی: ۱۴۰۳/۱۰/۳۰
            </p>
          </div>

          <FAQSection faqs={faqs} />

          <RelatedArticles articles={relatedArticles} />

          <div className="mt-12 p-8 bg-primary/5 rounded-lg text-center border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              نیاز به مشاوره پزشکی دارید؟
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              برای دریافت خدمات ویزیت پزشک در منزل، بررسی علت سرگیجه و دریافت درمان تخصصی با ما تماس بگیرید
            </p>
            <a 
              href="tel:+989386117912" 
              className="inline-block text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
              aria-label="تماس با شماره 09386117912"
            >
              ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </div>

          <div className="mt-12">
            <PricingInfo />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  </>
  );
};

export default DizzinessPage;