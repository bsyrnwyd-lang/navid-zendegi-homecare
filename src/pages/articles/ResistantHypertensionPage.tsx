import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import resistantHypertensionImage from "@/assets/resistant-hypertension.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import holterImage from "@/assets/holter-monitoring.jpg";

const ResistantHypertensionPage = () => {
  const publishDate = "2025-01-29";

  const faqs = [
    {
      question: "فشار خون مقاوم به درمان چیست؟",
      answer: "فشار خون مقاوم زمانی تشخیص داده می‌شود که بیمار حداقل ۳ داروی مختلف فشار خون (از جمله یک داروی ادرارآور) را با حداکثر دوز مصرف کند، اما فشار خون همچنان بالاتر از ۱۴۰ روی ۹۰ میلی‌متر جیوه باقی بماند."
    },
    {
      question: "چرا قرص‌های فشار خون من جواب نمی‌دهند؟",
      answer: "دلایل متعددی وجود دارد: تداخلات دارویی پنهان (مانند ایبوپروفن، ناپروکسن)، بیماری‌های زمینه‌ای مثل تنگی رگ کلیه، آپنه خواب، یا فشار خون روپوش سفید. بررسی دقیق توسط پزشک متخصص ضروری است."
    },
    {
      question: "آیا آپنه خواب می‌تواند باعث فشار خون مقاوم شود؟",
      answer: "بله. خروپف شدید و وقفه تنفسی در خواب یکی از بزرگترین دلایل بالا ماندن فشار خون است و باید با پلی‌سومنوگرافی بررسی شود."
    },
    {
      question: "فشار خون روپوش سفید چیست؟",
      answer: "بسیاری از بیماران به دلیل استرس در مطب، فشارشان بالا می‌رود در حالی که در خانه نرمال هستند. برای تشخیص این وضعیت، مانیتورینگ ۲۴ ساعته فشار خون در منزل توصیه می‌شود."
    },
    {
      question: "چگونه می‌توان در منزل فشار خون مقاوم را بررسی کرد؟",
      answer: "تیم نوید زندگی با اعزام پزشک متخصص به منزل، انجام هولتر فشار خون، نوار قلب و اکوکاردیوگرافی، علل ریشه‌ای فشار خون مقاوم را بررسی می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "فشار خون بالا چه علائمی دارد و چگونه باید کنترل شود؟",
      description: "راهنمای کامل علائم، علت‌ها و روش‌های کنترل فشار خون بالا",
      image: highBloodPressureImage,
      link: "/articles/high-blood-pressure-control",
      category: "قلب و عروق"
    },
    {
      title: "اکوکاردیوگرافی در منزل؛ راهنمای کامل",
      description: "همه چیز درباره انجام اکو قلب در منزل و مزایای آن",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "قلب و عروق"
    },
    {
      title: "هولتر قلب؛ راهنمای مانیتورینگ ۲۴ ساعته",
      description: "آشنایی با هولتر قلب، نحوه انجام و تفسیر نتایج",
      image: holterImage,
      link: "/articles/holter-guide",
      category: "قلب و عروق"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "فشار خون مقاوم به درمان", url: "/articles/resistant-hypertension" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="فشار خون مقاوم به درمان؛ وقتی قرص‌ها جواب نمی‌دهند، چاره چیست؟ | نوید زندگی"
        description="راهنمای کامل فشار خون مقاوم به درمان: علل، روش‌های تشخیص و درمان در منزل. بررسی تداخلات دارویی، آپنه خواب و خدمات اکو و هولتر در منزل."
        keywords="فشار خون مقاوم، فشار خون بالا، هیپرتانسیون مقاوم، داروی فشار خون، آپنه خواب، فشار خون روپوش سفید، اکو در منزل، هولتر فشار خون"
        canonical="https://navidzendegi.com/articles/resistant-hypertension"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      <ArticleSchema
        title="فشار خون مقاوم به درمان؛ وقتی قرص‌ها جواب نمی‌دهند، چاره چیست؟"
        description="راهنمای کامل فشار خون مقاوم به درمان: علل، روش‌های تشخیص و درمان در منزل"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={resistantHypertensionImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              فشار خون مقاوم به درمان؛ وقتی قرص‌ها جواب نمی‌دهند، چاره چیست؟
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۱۴۰۳/۱۱/۱۰</p>
          </header>

          <img
            src={resistantHypertensionImage}
            alt="فشار خون مقاوم به درمان - ویزیت پزشک در منزل"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
            <p className="text-lg mb-6">
              بسیاری از بیماران با کلافگی می‌پرسند: «با وجود مصرف سه نوع قرص مختلف، چرا باز هم فشار خون من بالای ۱۶ است؟». این وضعیت در پزشکی <strong>فشار خون مقاوم (Resistant Hypertension)</strong> نامیده می‌شود. نادیده گرفتن این وضعیت مانند راه رفتن روی یک بمب ساعتی است، زیرا فشار خون بالا و کنترل‌نشده، عامل اصلی سکته‌های مغزی و نارسایی کلیوی است.
            </p>

            <p className="text-lg mb-6">
              ما در مرکز <a href="/" className="text-primary hover:underline">نوید زندگی</a> با رویکردی متفاوت، به بررسی علل ریشه‌ای این مشکل در محل زندگی شما می‌پردازیم.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
              <p className="text-destructive font-semibold">
                ⚠️ هشدار: هرگز داروهای فشار خون را خودسرانه قطع یا تغییر ندهید. همیشه با پزشک متخصص مشورت کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">فشار خون مقاوم به چه معناست؟</h2>
            <p className="mb-6">
              زمانی که بیمار حداقل <strong>۳ داروی مختلف فشار خون</strong> (از جمله یک داروی ادرارآور) را با حداکثر دوز مصرف می‌کند، اما فشار خون او همچنان بالاتر از ۱۴۰ روی ۹۰ میلی‌متر جیوه باقی می‌ماند، تشخیص «فشار خون مقاوم» داده می‌شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">علل احتمالی که باید بررسی شوند</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۱. تداخلات دارویی پنهان</h3>
            <p className="mb-4">
              مصرف همزمان داروهای ضدالتهاب (مثل بروفن، ناپروکسن یا کورتون‌ها) و حتی برخی داروهای گیاهی، اثر قرص‌های فشار را خنثی می‌کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۲. بیماری‌های زمینه‌ای (علل ثانویه)</h3>
            <p className="mb-4">
              تنگی رگ کلیه، اختلالات غدد فوق کلیوی یا تومورهای خاص می‌توانند عامل فشار خون مقاوم باشند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۳. آپنه خواب</h3>
            <p className="mb-4">
              خروپف شدید و وقفه تنفسی در خواب یکی از بزرگترین دلایل بالا ماندن فشار خون است.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۴. فشار خون روپوش سفید</h3>
            <p className="mb-6">
              بسیاری از بیماران به دلیل استرس در مطب، فشارشان بالا می‌رود در حالی که در خانه نرمال هستند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">تشخیص دقیق در خانه؛ راهکار نوید زندگی</h2>
            <p className="mb-6">
              برای حل این معما، نیاز به پایش دقیق وجود دارد که در محیط شلوغ مطب امکان‌پذیر نیست:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">الف) هولتر فشار خون و نوار قلب در منزل</h3>
            <p className="mb-4">
              یکی از بهترین راه‌ها، مانیتورینگ ۲۴ ساعته است. تیم ما با انجام <a href="/articles/ecg-home" className="text-primary hover:underline">نوار قلب در منزل</a>، علائم ضخیم شدن دیواره قلب (بر اثر فشار طولانی‌مدت) را بررسی کرده و وضعیت ریتم قلب را پایش می‌کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ب) اکوکاردیوگرافی (اکو) در منزل؛ بررسی آسیب‌ها</h3>
            <p className="mb-4">
              فشار خون مقاوم به قلب آسیب می‌زند. متخصصین ما با انجام <a href="/articles/echo-home" className="text-primary hover:underline">اکو در منزل</a>، میزان شل شدن قلب (عملکرد دیاستولیک) و ضخامت ماهیچه قلب را چک می‌کنند. اگر قلب در حال "سفت شدن" باشد، پروتکل دارویی باید فوراً تغییر کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ج) ویزیت متخصص و بررسی آزمایشگاهی</h3>
            <p className="mb-6">
              پزشک متخصص نوید زندگی در قالب <a href="/services/internal-medicine" className="text-primary hover:underline">ویزیت در منزل</a>، تمام داروهای شما را بازبینی کرده و آزمایش‌های تخصصی کلیه و غدد را (که نمونه‌گیری آن در محل انجام می‌شود) تجویز می‌کند تا علل ثانویه فشار خون شناسایی شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">راهکارهای طلایی برای کنترل فشار خون در منزل</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>کاهش نمک پنهان:</strong> فست‌فودها، نان‌های صنعتی و کنسروها سرشار از سدیم هستند.</li>
              <li><strong>تنظیم زمان مصرف دارو:</strong> گاهی جابه‌جا کردن زمان مصرف یکی از قرص‌ها به شب (قبل از خواب) طبق نظر پزشک، نتایج شگفت‌انگیزی دارد.</li>
              <li><strong>کاهش وزن و فعالیت:</strong> حتی ۵ کیلوگرم کاهش وزن می‌تواند نیاز شما به یکی از داروها را کاملاً حذف کند.</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/10 rounded-lg p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                مشاوره تخصصی فشار خون در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای بررسی علل فشار خون مقاوم و انجام اکو و نوار قلب در منزل، همین حالا تماس بگیرید:
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس: 09386117912
              </a>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">منابع معتبر</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4 text-muted-foreground">
              <li>American Heart Association (AHA): Resistant Hypertension: Diagnosis, Evaluation, and Treatment</li>
              <li>Journal of the American Society of Hypertension</li>
            </ul>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default ResistantHypertensionPage;
