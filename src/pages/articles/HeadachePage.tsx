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
import headacheImage from "../../assets/headache-article.jpg";
import migrainArticleImage from "../../assets/migraine-article.jpg";
import vitaminsColdImage from "../../assets/vitamins-cold-article.jpg";
import mediterraneanDietImage from "../../assets/mediterranean-diet.jpg";

const HeadachePage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سردرد", url: "/articles/headache" }
  ];

  const faqs = [
    {
      question: "چه زمانی باید برای سردرد فوراً به پزشک مراجعه کرد؟",
      answer: "اگر سردرد ناگهانی و بسیار شدید باشد یا با علائمی مانند تب بالا، تهوع شدید، کاهش سطح هوشیاری، سفتی گردن یا ضعف حرکتی همراه باشد، باید فوراً بررسی پزشکی انجام شود."
    },
    {
      question: "آیا ویتامین‌ها می‌توانند در کاهش سردرد مؤثر باشند؟",
      answer: "بله، مطالعات نشان داده‌اند که ویتامین‌هایی مانند ویتامین C، ویتامین D و ریبوفلاوین (ویتامین B2) می‌توانند در کاهش احتمال یا شدت سردردهای مکرر مؤثر باشند. اما باید با نظر پزشک مصرف شوند."
    },
    {
      question: "چه عواملی باعث ایجاد سردرد می‌شوند؟",
      answer: "کم‌خوابی، استرس، مصرف زیاد کافئین یا قطع ناگهانی آن، کم‌آبی بدن، گرسنگی، وضعیت نامناسب نشستن و کار طولانی مقابل صفحه‌نمایش از جمله عوامل شایع ایجاد سردرد هستند."
    },
    {
      question: "چگونه می‌توان سردرد را در خانه کنترل کرد؟",
      answer: "استراحت در محیط آرام با نور کم، نوشیدن مایعات کافی، استفاده از کمپرس سرد یا گرم روی پیشانی و مصرف مسکن‌های بدون نسخه (مانند ایبوپروفن یا استامینوفن) با تأیید پزشک می‌تواند کمک کند."
    },
    {
      question: "آیا رژیم غذایی می‌تواند در پیشگیری از سردرد نقش داشته باشد؟",
      answer: "بله، مصرف منظم وعده‌های غذایی، تأمین ویتامین‌ها (به‌ویژه ویتامین C و D)، اجتناب از غذاهای محرک مانند شکلات و پنیر و نوشیدن آب کافی می‌تواند در پیشگیری از سردرد مؤثر باشد."
    }
  ];

  const relatedArticles = [
    {
      title: "میگرن: علل، تشخیص و درمان سردرد میگرنی",
      description: "اطلاعات کامل درباره سردرد میگرنی، علائم و روش‌های درمانی مؤثر",
      link: "/articles/migraine",
      image: migrainArticleImage,
      category: "عمومی"
    },
    {
      title: "تأثیرات علمی ویتامین‌ها در زمان سرماخوردگی",
      description: "بررسی نقش ویتامین‌های C، D، E و A در پیشگیری و درمان سرماخوردگی",
      link: "/articles/vitamins-cold",
      image: vitaminsColdImage,
      category: "تغذیه"
    },
    {
      title: "رژیم غذایی مدیترانه‌ای: فواید برای قلب و عروق",
      description: "آشنایی با رژیم مدیترانه‌ای و تأثیرات مثبت آن بر سلامت قلب",
      link: "/articles/mediterranean-diet",
      image: mediterraneanDietImage,
      category: "تغذیه"
    }
  ];

  return (
    <>
      <SEOHead
        title="سردرد؛ علل، انواع، درمان و نقش تغذیه و ویتامین‌ها | نوید زندگی"
        description="راهنمای جامع سردرد شامل علل، انواع سردرد اولیه و ثانویه، روش‌های درمان فوری و نقش تغذیه و ویتامین‌ها در کاهش سردرد. خدمات ویزیت پزشک در منزل"
        keywords="سردرد، میگرن، درمان سردرد، ویتامین C، ویتامین D، ریبوفلاوین، علائم خطرناک سردرد، ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/headache"
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-15T00:00:00Z"
        modifiedTime="2025-01-15T00:00:00Z"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "سردرد؛ علل، انواع، درمان و نقش تغذیه و ویتامین‌ها",
          description: "راهنمای جامع سردرد شامل علل، انواع، درمان و نقش تغذیه و ویتامین‌ها",
          author: "نوید زندگی",
          publishedDate: "2025-01-15",
          image: headacheImage
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
              سر درد؛ علل، انواع، درمان و نقش تغذیه و ویتامین‌ها
            </h1>
            <div className="flex justify-center mb-6">
              <LazyImage
                src={headacheImage}
                alt="سردرد و درمان آن"
                className="rounded-lg shadow-lg max-w-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <h2>مقدمه</h2>
            <p>
              سر درد یکی از رایج‌ترین مشکلات سلامت عمومی است — تقریباً همه افراد در طول زندگی حداقل یک بار سر درد را تجربه کرده‌اند. Headache می‌تواند به دلایل مختلفی ایجاد شود و گاهی به‌سادگی با استراحت و تغییر سبک زندگی برطرف می‌شود؛ اما در مواردی نیاز به بررسی تخصصی دارد. در این مقاله به انواع سر درد، علل شایع، روش‌های رفع فوری، و به‌ویژه نقش تغذیه و ویتامین‌ها پرداخته‌ایم.
            </p>

            <h2>چه زمانی سر درد به وجود می‌آید؟</h2>

            <h3>انواع سر درد</h3>
            <p>سر درد‌ها عمدتاً به دو دسته تقسیم می‌شوند:</p>
            <ul>
              <li><strong>سر درد اولیه:</strong> بدون اینکه بیماری زمینه‌ای قابل‌شناسایی باشد، مانند شکلی که ناشی از تنش (tension-type headache)، <a href="/articles/migraine" className="text-primary hover:underline">میگرن</a> یا خوشه‌ای (cluster headache) است.</li>
              <li><strong>سر درد ثانویه:</strong> به علت عوامل مشخص مثل عفونت، ضربه، فشار خون بالا یا وضعیت چشمی خاص به‌وجود می‌آید.</li>
            </ul>

            <h3>علل شایع و عوامل محرک</h3>
            <p>برخی عوامل شناخته‌شده که می‌توانند باعث یا تشدید سر درد شوند عبارت‌اند از:</p>
            <ul>
              <li>کم‌خوابی، استراحت نامناسب، یا تغییر ناگهانی در الگوی خواب</li>
              <li>مصرف الکل، نیکوتین، یا کافئین زیاد یا حذف ناگهانی آن‌ها</li>
              <li>غذای نامناسب، کم‌آبی بدن، گرسنگی یا حذف وعده غذایی</li>
              <li>شرایط محیطی یا وضعیت بدنی مانند اضطراب، استرس، وضعیت نامناسب نشستن یا کار طولانی مقابل صفحه‌نمایش</li>
            </ul>

            <h2>تشخیص و درمان فوری</h2>

            <h3>درمان و کنترل سریع</h3>
            <p>برای سر درد خفیف تا متوسط معمولاً می‌توان راهکارهای زیر را در خانه امتحان کرد:</p>
            <ul>
              <li>استراحت در محیط آرام، کاهش نور، کاهش سر و صدا</li>
              <li>نوشیدن مایعات کافی و اجتناب از الکل</li>
              <li>استفاده از کمپرس سرد یا گرم روی پیشانی یا پشت گردن</li>
              <li>مصرف داروهای بدون نسخه مانند ایبوپروفن یا استامینوفن (در صورت تأیید پزشک)</li>
            </ul>

            <h3>چه زمانی باید فوراً به پزشک مراجعه کرد؟</h3>
            <p>
              اگر سر درد ناگهانی و بسیار شدید بوده یا با علائمی چون تب بالا، تهوع شدید، کاهش سطح هوشیاری، سفتی گردن یا ضعف حرکت همراه باشد، باید فوراً بررسی شود چون ممکن است نشانه‌ای از عارضه جدی باشد.
            </p>

            <h2>نقش تغذیه و ویتامین‌ها در سر درد</h2>

            <h3>شواهد علمی</h3>
            <ul>
              <li>یک مطالعه بزرگ نشان داد که مصرف بیشتر <a href="/articles/vitamins-cold" className="text-primary hover:underline">ویتامین C</a> غذایی با کاهش احتمال سر درد شدید یا میگرن ارتباط داشت (در یک گروه بزرگ ۱۳٬۴۴۵ نفره، بالاترین ربع مصرف ویتامین C با تقریباً ۲۲٪ کاهش احتمال شدید بودن سر درد یا میگرن همراه بود).</li>
              <li>در مطالعات بازبینی شده آمده است که مکمل‌های مانند ویتامین D، ریبوفلاوین (ویتامین B2) و برخی مواد معدنی ممکن است به کاهش تعداد حملات میگرن یا شدت آن‌ها کمک کنند.</li>
              <li>به عنوان مثال، در راهنمای درمان سر درد مزمن، مکمل ریبوفلاوین ۴۰۰ میلی‌گرم در روز برای بعضی بیماران میگرن پیشنهاد شده است.</li>
            </ul>

            <h3>نکات کاربردی برای بیماران</h3>
            <ul>
              <li>اگر سر درد مکرر دارید، می‌توانید وضعیت تغذیه و سطح ویتامین‌های بدن را با پزشک بررسی کنید (به ویژه ویتامین C و D).</li>
              <li>تأمین ویتامین‌ها از طریق رژیم غذایی ترجیح داده می‌شود؛ مکمل‌ها می‌توانند گزینه باشند اما باید با نظر پزشک.</li>
              <li>ویتامین‌ها جایگزین درمان پزشکی یا تغییر سبک زندگی نیستند؛ بلکه می‌توانند مکملی در کنار کنترل عوامل محرک سر درد باشند.</li>
              <li>هم‌زمان با تغذیه، اصلاح سبک زندگی (مثل خواب کافی، خودداری از محرک‌ها، مدیریت استرس) در کاهش سر درد بسیار مهم است.</li>
            </ul>

            <h2>جمع‌بندی</h2>
            <p>
              سر درد یک مشکل رایج است، اما با شناسایی محرک‌ها، اصلاح سبک زندگی، استفاده هوشمندانه از تغذیه و ویتامین‌ها و در صورت نیاز درمان پزشکی می‌توان آن را مؤثر کنترل کرد. اگر سر درد شما مکرر است یا الگویش تغییر کرده، بهتر است با <a href="/services/general-doctor" className="text-primary hover:underline">پزشک عمومی</a> مشورت کنید.
            </p>
          </div>

          {/* منابع علمی */}
          <section className="mt-12 pt-8 border-t border-border">
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <h2 className="text-2xl font-bold text-foreground mb-6">منابع (References)</h2>
              <ol className="space-y-3 text-sm leading-relaxed">
                <li>Kuruvilla D, et al. "Evidence Based Integrative Treatments for Headache." PMC. 2019.</li>
                <li>Nattagh-Eshtivani E, et al. "The role of nutrients in the pathogenesis and treatment of headache." ScienceDirect. 2018.</li>
                <li>"Headache: What It Is, Types, Causes & Treatment." Cleveland Clinic.</li>
                <li>"Headache: Types, Causes, and How to Get Rid of Them." Patient.info.</li>
                <li>WebMD. "Vitamins & Supplements for Migraine Pain Relief."</li>
                <li>Zheng Y, et al. "Association of dietary vitamin C consumption with severe headache or migraine." Frontiers in Nutrition. 2024.</li>
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
              اگر شما یا یکی از اعضای خانواده دچار سر درد مکرر یا شدید هستید، خدمات <a href="/services/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل</a> از طریق سایت navidzendegi.com می‌تواند به شما کمک کند تا سابقه دقیقی از الگوی سر دردتان تهیه شود، بررسی آزمایش‌هایی برای سطح ویتامین‌ها یا عوامل دیگر صورت گیرد و برنامه جامع تغذیه، ویتامین‌ها و سبک زندگی تنظیم شود.
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

export default HeadachePage;