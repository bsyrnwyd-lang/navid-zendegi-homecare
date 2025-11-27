import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import adhdImage from "@/assets/adhd-disorder.jpg";
import psychiatryImage from "@/assets/psychiatry-home-visit.jpg";
import childGrowthImage from "@/assets/pediatrics.jpg";
import depressionImage from "@/assets/depression-article.jpg";

const ADHDPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "اختلال ADHD", url: "/articles/adhd" },
  ];

  const faqs = [
    {
      question: "تفاوت ADD و ADHD چیست؟",
      answer: "ADD (اختلال کمبود توجه) اصطلاحی قدیمی است که به نوع ADHD با غلبه بی‌توجهی اشاره داشت. امروزه همه انواع این اختلال تحت عنوان ADHD طبقه‌بندی می‌شوند و به سه نوع تقسیم می‌شوند: نوع با غلبه بی‌توجهی، نوع با غلبه بیش‌فعالی-تکانشگری، و نوع ترکیبی."
    },
    {
      question: "ADHD فقط در کودکان دیده می‌شود؟",
      answer: "خیر، ADHD معمولاً از دوران کودکی آغاز می‌شود اما می‌تواند تا بزرگسالی نیز ادامه یابد. بسیاری از بزرگسالان با ADHD تشخیص داده نشده زندگی می‌کنند و با مشکلات تمرکز، سازماندهی، مدیریت زمان و روابط اجتماعی دست و پنجه نرم می‌کنند."
    },
    {
      question: "علل اصلی ADHD چیست؟",
      answer: "علت دقیق ADHD هنوز به طور کامل شناخته نشده است، اما ترکیبی از عوامل ژنتیکی (وراثت قوی‌ترین عامل)، اختلالات عصبی در تکامل مغز، و عوامل محیطی مانند تولد زودرس، آسیب‌های مغزی و قرار گرفتن در معرض مواد مخدر در دوران بارداری نقش دارند."
    },
    {
      question: "آیا ADHD قابل درمان است؟",
      answer: "ADHD قابل درمان کامل نیست، اما با مدیریت صحیح علائم آن قابل کنترل است. بهترین رویکرد درمانی ترکیبی از درمان دارویی (داروهای محرک یا غیرمحرک)، رفتاردرمانی، روان‌درمانی و آموزش مهارت‌های زندگی است که می‌تواند به بهبود قابل توجه عملکرد فرد کمک کند."
    },
    {
      question: "داروهای ADHD چگونه کار می‌کنند؟",
      answer: "داروهای محرک (مانند متیل‌فنیدیت) با افزایش انتقال‌دهنده‌های عصبی خاص در مغز (به ویژه دوپامین و نوراپی‌نفرین)، به بهبود تمرکز، کاهش بیش‌فعالی و کنترل تکانه‌ها کمک می‌کنند. داروهای غیرمحرک (مانند آتوموکستین) با مکانیسم‌های متفاوتی عمل می‌کنند و برای افرادی که به داروهای محرک پاسخ ندادند مفید هستند."
    },
    {
      question: "چرا تشخیص زودهنگام ADHD مهم است؟",
      answer: "تشخیص زودهنگام ADHD می‌تواند از بروز مشکلات تحصیلی، اجتماعی و عاطفی جلوگیری کند. کودکان و بزرگسالان با ADHD تشخیص داده نشده، در معرض خطر بیشتری برای افت تحصیلی، مشکلات شغلی، مشکلات روابط اجتماعی، افسردگی، اضطراب و کاهش عزت نفس هستند."
    }
  ];

  const relatedArticles = [
    {
      title: "افسردگی: علائم، تشخیص و روش‌های درمان",
      description: "آشنایی کامل با علائم افسردگی که اغلب همراه با ADHD دیده می‌شود",
      image: depressionImage,
      link: "/articles/depression",
      category: "روانپزشکی"
    },
    {
      title: "رشد و نمو کودکان: نظارت و ارزیابی تخصصی",
      description: "اهمیت پایش رشد کودکان برای تشخیص زودهنگام اختلالات رشدی",
      image: childGrowthImage,
      link: "/articles/child-growth-monitoring",
      category: "کودکان"
    },
    {
      title: "خدمات روانپزشکی در منزل",
      description: "دریافت مشاوره و ویزیت روانپزشک در منزل برای تشخیص و درمان ADHD",
      image: psychiatryImage,
      link: "/services/psychiatry",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="اختلال ADHD: انواع، علائم، علل و روش‌های درمانی | نوید زندگی"
        description="راهنمای جامع اختلال کم‌توجهی/بیش‌فعالی (ADHD): انواع اختلال، علائم بی‌توجهی و بیش‌فعالی، علل ژنتیکی و محیطی، روش‌های تشخیص و درمان دارویی و رفتاردرمانی"
        keywords="ADHD، اختلال کم‌توجهی، بیش‌فعالی، ADD، تکانشگری، درمان ADHD، علائم ADHD، ADHD در کودکان، ADHD در بزرگسالان، متیل‌فنیدیت، روانپزشکی"
        canonical="https://navidzendegi.com/articles/adhd"
        ogType="article"
        publishedTime="2025-01-15T14:00:00+03:30"
        modifiedTime="2025-01-15T14:00:00+03:30"
      />
      <ArticleSchema
        title="اختلال کم‌توجهی/بیش‌فعالی (ADHD): معرفی، انواع، علائم و روش‌های درمانی"
        description="راهنمای کامل اختلال ADHD شامل انواع، علائم، علل و روش‌های درمانی"
        publishedTime="2025-01-15T14:00:00+03:30"
        modifiedTime="2025-01-15T14:00:00+03:30"
        image="/src/assets/adhd-disorder.jpg"
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              اختلال کم‌توجهی/بیش‌فعالی (ADHD): معرفی، انواع، علائم و روش‌های درمانی
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>نویسنده: تیم پزشکی نوید زندگی</span>
              <span>تاریخ انتشار: 15 ژانویه 2025</span>
            </div>
          </header>

          <img
            src={adhdImage}
            alt="اختلال کم‌توجهی/بیش‌فعالی ADHD"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            loading="eager"
          />

          <div className="bg-accent/20 border-r-4 border-accent p-6 rounded-lg mb-8">
            <p className="text-accent-foreground font-semibold mb-2">
              💡 نکته مهم: تشخیص زودهنگام کلید درمان است
            </p>
            <p className="text-sm text-muted-foreground">
              ADHD یک اختلال قابل مدیریت است. با تشخیص و درمان به موقع، افراد مبتلا می‌توانند زندگی موفق و سازنده‌ای داشته باشند.
            </p>
          </div>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              اختلال کم‌توجهی/بیش‌فعالی (Attention-Deficit/Hyperactivity Disorder یا ADHD) یک اختلال عصبی-رشدی شایع است که بر توانایی فرد در تمرکز، کنترل تکانه‌ها (رفتارهای ناگهانی) و تنظیم سطح فعالیت تأثیر می‌گذارد. این اختلال معمولاً از دوران کودکی آغاز می‌شود و می‌تواند تا بزرگسالی نیز ادامه یابد و بر عملکرد تحصیلی، شغلی، و روابط اجتماعی فرد اثر بگذارد.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              انواع ADHD
            </h2>
            <p>
              بر اساس راهنمای تشخیصی و آماری اختلالات روانی (DSM-5)، ADHD به سه نوع اصلی تقسیم می‌شود که بر اساس الگوی علائم غالب تشخیص داده می‌شوند:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">نوع ADHD</th>
                    <th className="border border-border p-3 text-right">ویژگی‌های غالب</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">۱. نوع با غلبه بی‌توجهی</td>
                    <td className="border border-border p-3">نقص در تمرکز بارزترین ویژگی است، در حالی که علائم بیش‌فعالی و تکانشگری کمتر هستند یا اصلاً وجود ندارند. این نوع در گذشته به عنوان ADD شناخته می‌شد.</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">۲. نوع با غلبه بیش‌فعالی-تکانشگری</td>
                    <td className="border border-border p-3">بی‌قراری شدید و رفتارهای تکانشی ویژگی‌های اصلی هستند. فرد به سختی می‌تواند آرام بنشیند، زیاد حرف می‌زند و بدون فکر عمل می‌کند.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">۳. نوع ترکیبی</td>
                    <td className="border border-border p-3">فرد به طور همزمان، علائم قابل توجهی از هر دو دسته بی‌توجهی و بیش‌فعالی/تکانشگری را نشان می‌دهد. این شایع‌ترین نوع ADHD است.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              علائم اصلی ADHD
            </h2>
            <p>
              علائم این اختلال به طور کلی در دو دسته اصلی قرار می‌گیرند و باید به صورت مداوم، شدید و مختل‌کننده در بیش از یک محیط (مانند خانه و مدرسه/محل کار) وجود داشته باشند:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۱. علائم بی‌توجهی (Inattention)
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>ناتوانی در توجه دقیق به جزئیات یا اشتباهات ناشی از بی‌دقتی در کارها و تکالیف</li>
              <li>دشوار بودن حفظ تمرکز در حین کار یا بازی</li>
              <li>به نظر می‌رسد وقتی مستقیماً مورد خطاب قرار می‌گیرد، گوش نمی‌دهد</li>
              <li>ناتوانی در پیروی از دستورالعمل‌ها یا ناتمام گذاشتن کارها (نه به دلیل سرپیچی)</li>
              <li>مشکل در سازماندهی وظایف، فعالیت‌ها و مدیریت زمان</li>
              <li>پرهیز یا اکراه از انجام کارهایی که نیاز به تلاش ذهنی طولانی دارند (مانند تکالیف مدرسه یا گزارش کار)</li>
              <li>گم کردن مداوم وسایل مورد نیاز (مانند کلید، کیف پول، کتاب، عینک)</li>
              <li>حواس‌پرتی آسان با محرک‌های بیرونی</li>
              <li>فراموشکاری در فعالیت‌های روزمره</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۲. علائم بیش‌فعالی و تکانشگری (Hyperactivity-Impulsivity)
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>بی‌قراری و ناآرامی مفرط (مثلاً تکان دادن دست‌ها و پاها یا پیچ و تاب خوردن در حالت نشسته)</li>
              <li>ترک مکرر صندلی در موقعیت‌هایی که انتظار می‌رود فرد نشسته بماند</li>
              <li>دویدن یا بالارفتن بیش از حد در موقعیت‌های نامناسب (در بزرگسالان، این ممکن است به شکل احساس بی‌قراری شدید درونی بروز کند)</li>
              <li>ناتوانی در بازی یا شرکت در فعالیت‌های تفریحی به صورت آرام</li>
              <li>حرف زدن بیش از حد (Perpetual Talking)</li>
              <li>پاسخ دادن قبل از اتمام سؤال دیگران (پرش در کلام)</li>
              <li>مشکل در رعایت نوبت (کم‌صبری)</li>
              <li>قطع کردن یا دخالت در کارهای دیگران (مثلاً پریدن وسط صحبت یا بازی)</li>
              <li>اقدام کردن بدون فکر کردن به پیامدهای آن (رفتار تکانشی)</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              علل و درمان ADHD
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              علل
            </h3>
            <p>
              علت دقیق ADHD هنوز به طور کامل شناخته نشده است، اما به نظر می‌رسد ترکیبی از عوامل ژنتیکی و محیطی نقش دارند:
            </p>

            <ul className="list-disc list-inside space-y-2 mr-6">
              <li><strong>ژنتیک:</strong> وراثت قوی‌ترین عامل است. اغلب این اختلال در سایر اعضای خانواده نیز دیده می‌شود.</li>
              <li><strong>اختلالات عصبی:</strong> نقص در تکامل یا عملکرد بخش‌هایی از مغز که مسئول توجه، تمرکز و تنظیم فعالیت‌های حرکتی هستند (مانند بخش‌های پیشانی مغز).</li>
              <li><strong>عوامل محیطی:</strong> تولد زودرس، وزن کم هنگام تولد، آسیب‌های مغزی در دوران جنینی یا نوزادی، و قرار گرفتن مادر در معرض سیگار، الکل یا سموم محیطی در دوران بارداری.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              روش‌های درمان
            </h3>
            <p>
              ADHD قابل درمان کامل نیست، اما با مدیریت صحیح علائم آن قابل کنترل است. بهترین رویکرد درمانی، استفاده از یک برنامه درمانی جامع (Multimodal Treatment) است که شامل موارد زیر است:
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-4 mb-2">
              درمان دارویی (Pharmacological Treatment)
            </h4>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>داروهای محرک (مانند متیل‌فنیدیت و آمفتامین‌ها) که با افزایش انتقال‌دهنده‌های عصبی خاص در مغز، به بهبود تمرکز و کاهش بیش‌فعالی کمک می‌کنند.</li>
              <li>داروهای غیرمحرک (مانند آتوموکستین) برای افرادی که به داروهای محرک پاسخ نمی‌دهند یا عوارض جانبی شدیدی دارند.</li>
            </ul>

            <h4 className="text-xl font-semibold text-foreground mt-4 mb-2">
              رفتاردرمانی (Behavioral Therapy)
            </h4>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>بهبود مهارت‌های سازمانی، مدیریت زمان و تکنیک‌های حل مسئله</li>
              <li>آموزش مهارت‌های اجتماعی و مدیریت هیجانات</li>
              <li>آموزش والدین برای مدیریت رفتار کودک و ایجاد محیطی ساختارمند</li>
            </ul>

            <h4 className="text-xl font-semibold text-foreground mt-4 mb-2">
              روان‌درمانی و آموزش
            </h4>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>مشاوره برای فرد مبتلا به ویژه در بزرگسالی برای مدیریت استرس، عزت نفس پایین و مشکلات ارتباطی</li>
              <li>استفاده از تکنیک‌هایی مانند نوروفیدبک و آموزش‌های شناختی-رفتاری (CBT)</li>
            </ul>

            <div className="bg-primary/10 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                مشاوره تخصصی برای تشخیص و درمان ADHD
              </h3>
              <p className="text-foreground mb-4">
                اگر شما یا فرزندتان علائم مداوم و مختل‌کننده ADHD را تجربه می‌کنید، مشاوره با یک <a href="/services/psychiatry" className="text-primary hover:underline font-semibold">متخصص روانپزشکی</a> یا روانشناس متخصص در اختلالات عصبی-رشدی برای تشخیص دقیق و شروع برنامه درمانی مناسب حیاتی است. تشخیص زودهنگام می‌تواند به بهبود عملکرد تحصیلی، شغلی و کیفیت زندگی کمک کند.
              </p>
              <a href="tel:09386117912">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="ml-2 h-5 w-5" />
                  مشاوره روانپزشکی: 09386117912
                </Button>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              منابع (References)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                Royal College of Psychiatrists. (ADHD in adults in Persian (Farsi)).
              </li>
              <li>
                Dr. Kažem Malakouti. (ADHD چیست؟ دلایل، 10 علائم بیماری و درمان).
              </li>
              <li>
                Doctoreto. (اختلال بیش فعالی و کاهش توجه (ADHD) در کودکان و بزرگسالان چگونه رخ میدهد؟).
              </li>
            </ol>
          </div>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default ADHDPage;
