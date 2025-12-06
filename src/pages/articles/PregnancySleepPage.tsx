import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import pregnancySleepImage from "@/assets/pregnancy-sleep-article.jpg";
import pregnancyNutritionImage from "@/assets/pregnancy-nutrition.jpg";
import diabetesPregnancyImage from "@/assets/diabetes-pregnancy.jpg";
import rubellaPregnancyImage from "@/assets/rubella-pregnancy-article.jpg";

const PregnancySleepPage = () => {
  const phoneNumber = "09386117912";

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات پزشکی", url: "/articles" },
    { name: "تأثیر کم‌خوابی مادران باردار بر رشد جنین", url: "/articles/pregnancy-sleep" }
  ];

  const faqs = [
    {
      question: "کم‌خوابی در بارداری چقدر شایع است؟",
      answer: "بیش از نیمی از مادران باردار در طول دوران بارداری، به‌ویژه در سه ماهه سوم، دچار درجاتی از اختلال خواب می‌شوند. تغییرات فیزیولوژیک و هورمونی گسترده این دوره بر الگوی خواب اثر می‌گذارد."
    },
    {
      question: "کم‌خوابی مادر چگونه بر جنین تأثیر می‌گذارد؟",
      answer: "کم‌خوابی مزمن منجر به افزایش هورمون کورتیزول، التهاب سیستمیک و اختلالات متابولیک می‌شود. کورتیزول می‌تواند از سد جفت عبور کرده و بر رشد عصبی جنین اثر بگذارد. همچنین کاهش کارایی جفت باعث محدودیت رشد داخل رحمی می‌شود."
    },
    {
      question: "پیامدهای بلندمدت کم‌خوابی مادر بر کودک چیست؟",
      answer: "کودکانی که مادرانشان دچار کم‌خوابی شدید بوده‌اند، ممکن است با مشکلات توجه و بیش‌فعالی، اختلالات خواب و تأخیر در تکامل شناختی مواجه شوند."
    },
    {
      question: "چه ساعتی خواب برای مادران باردار ایده‌آل است؟",
      answer: "توصیه می‌شود مادران باردار ۷ تا ۹ ساعت خواب با کیفیت در شب داشته باشند. خوابیدن به پهلوی چپ می‌تواند به جریان خون بهتر به جفت و جنین کمک کند."
    },
    {
      question: "آیا خدمات مشاوره خواب در منزل وجود دارد؟",
      answer: "بله، نوید زندگی با ارائه خدمات پزشکی و پرستاری تخصصی بارداری در منزل تهران، به مادران کمک می‌کند تا الگوهای خواب خود را بهبود بخشند و ریسک فاکتورهای زمینه‌ای را کنترل کنند."
    }
  ];

  const relatedArticles = [
    {
      title: "تغذیه در دوران بارداری",
      description: "راهنمای جامع تغذیه صحیح و نیازهای غذایی در دوران بارداری",
      image: pregnancyNutritionImage,
      link: "/articles/pregnancy-nutrition",
      category: "زنان"
    },
    {
      title: "دیابت بارداری: علائم، خطرات و مدیریت",
      description: "بررسی دیابت حاملگی، عوامل خطر و روش‌های کنترل قند خون در بارداری",
      image: diabetesPregnancyImage,
      link: "/articles/diabetes-pregnancy",
      category: "زنان"
    },
    {
      title: "سرخجه و بارداری: خطرات و پیشگیری",
      description: "تأثیر عفونت سرخجه بر جنین و اهمیت واکسیناسیون پیش از بارداری",
      image: rubellaPregnancyImage,
      link: "/articles/rubella-pregnancy",
      category: "زنان"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تأثیر کم‌خوابی مادران باردار بر رشد جنین و تکامل کودک | نوید زندگی"
        description="بررسی علمی تأثیرات کم‌خوابی مادران باردار بر رشد جنین: افزایش خطر زایمان زودرس، محدودیت رشد داخل رحمی و مشکلات رفتاری کودک. مشاوره تخصصی بارداری در منزل."
        keywords="کم‌خوابی بارداری، تأثیر خواب بر جنین، رشد جنین، زایمان زودرس، محدودیت رشد داخل رحمی، مراقبت بارداری، پرستار بارداری، خدمات منزل تهران"
        canonical="https://navidzendegi.com/articles/pregnancy-sleep"
        ogType="article"
      />
      <ArticleSchema
        title="تأثیر کم‌خوابی مادران باردار بر رشد جنین و تکامل کودک"
        description="بررسی علمی تأثیرات کم‌خوابی مادران باردار بر رشد جنین و پیامدهای بلندمدت بر تکامل شناختی و رفتاری کودک"
        publishedTime="2024-12-06"
        modifiedTime="2024-12-06"
        image={pregnancySleepImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              تأثیر کم‌خوابی مادران باردار بر رشد جنین و تکامل کودک
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>تاریخ انتشار: ۱۵ آذر ۱۴۰۳</span>
              <span>|</span>
              <span>دسته‌بندی: زنان و بارداری</span>
            </div>
            <img
              src={pregnancySleepImage}
              alt="مادر باردار در حال استراحت و خواب سالم"
              className="w-full rounded-lg shadow-md mb-6"
            />
          </header>

          <div className="bg-muted/30 border border-border rounded-lg p-4 mb-8">
            <h2 className="text-lg font-semibold mb-2">چکیده</h2>
            <p className="text-muted-foreground">
              کم‌خوابی و اختلالات خواب در دوران بارداری پدیده‌ای بسیار شایع است و مطالعات علمی نشان می‌دهند که می‌تواند از طریق تغییرات پیچیده هورمونی، التهابی و متابولیک، اثرات منفی قابل توجهی بر سلامت و رشد جنین اعمال کند. پژوهش‌ها ارتباط مستقیمی میان کیفیت پایین خواب مادر و افزایش خطر زایمان زودرس، رشد ناکافی داخل رحمی (IUGR) و بروز مشکلات رفتاری و شناختی در دوران کودکی پیدا کرده‌اند.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">مقدمه: شیوع کم‌خوابی و لزوم پایش سلامت در دوران بارداری</h2>
          <p>
            تغییرات فیزیولوژیک و هورمونی گسترده دوران بارداری، بر الگوی خواب زنان اثر می‌گذارد؛ به‌طوری‌که بیش از نیمی از مادران باردار در طول این دوره، به‌ویژه در سه ماهه سوم، دچار درجاتی از اختلال خواب می‌شوند. خواب ناکافی یا بی‌کیفیت، تعادل مواد شیمیایی و هورمون‌های حیاتی بدن مادر را بر هم می‌زند. این مواد تغییریافته قادرند به طور مستقیم بر محیط داخل رحمی و تکامل مغز و بدن جنین اثر سوء بگذارند.
          </p>
          <p>
            باتوجه به اهمیت این موضوع و نیاز به <Link to="/services/nursing" className="text-primary hover:underline">مراقبت‌های تخصصی بارداری در منزل تهران</Link>، ارزیابی خواب مادر یک بخش کلیدی از سلامت پیش از تولد است.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">مکانیسم‌ها و یافته‌های علمی: تأثیرات بیولوژیکی کم‌خوابی بر جنین</h2>
          <p>
            مطالعات آکادمیک، مسیرهای بیولوژیکی متعددی را برای انتقال اثرات منفی کم‌خوابی مادر به جنین شناسایی کرده‌اند:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">افزایش هورمون کورتیزول و استرس</h3>
          <p>
            کم‌خوابی مزمن منجر به افزایش مداوم ترشح کورتیزول (هورمون استرس) می‌شود. این هورمون قادر است از سد جفت عبور کرده و مستقیماً بر رشد و سازماندهی عصبی جنین اثر بگذارد. سطوح بالای کورتیزول می‌تواند انعطاف‌پذیری مغز جنین را کاهش داده و بر ساختارهای مسئول تنظیم استرس در آینده تأثیر بگذارد.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">التهاب سیستمیک و آسیب جفتی</h3>
          <p>
            کم‌خوابی به طور قابل توجهی منجر به افزایش عوامل پیش‌التهابی (مانند سیتوکین‌ها) در خون مادر می‌شود. این التهاب سیستمیک می‌تواند جریان خون جفت و به‌تبع آن، انتقال اکسیژن و مواد مغذی حیاتی به جنین را کاهش دهد. کاهش کارایی جفت، عاملی کلیدی در محدودیت رشد داخل رحمی است.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">اختلالات متابولیک و ریسک پره‌اکلامپسی</h3>
          <p>
            کم‌خوابی با افزایش مقاومت به انسولین و خطر بالاتر ابتلا به <Link to="/articles/diabetes-pregnancy" className="text-primary hover:underline">دیابت بارداری</Link> مرتبط است. همچنین، اختلال خواب خود می‌تواند عامل خطر برای فشار خون بالا و پره‌اکلامپسی باشد. این اختلالات عروقی و متابولیک، به‌طور مستقیم بر وزن تولد جنین و تکامل مغزی او اثر منفی می‌گذارند.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">پیامدهای بلندمدت کودکی: از تکامل شناختی تا اختلالات رفتاری</h2>
          <p>
            تأثیرات کم‌خوابی مادر تنها به دوره بارداری محدود نمی‌شود و می‌تواند پیامدهای طولانی‌مدتی در دوران کودکی داشته باشد:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">مشکلات توجه و بیش‌فعالی</h3>
          <p>
            کودکانی که مادرانشان در دوران بارداری دچار اختلالات خواب شدید بوده‌اند، ممکن است در سال‌های اولیه زندگی با شیوع بالاتری از مشکلات توجه، تمرکز و تنظیم هیجانات مواجه شوند. این ارتباط با تأثیر کورتیزول بر ساختارهای مغزی مرتبط با توجه توضیح داده می‌شود.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">اختلالات خواب کودکی</h3>
          <p>
            برخی تحقیقات نشان می‌دهند که الگوی خواب نامناسب مادر با افزایش مشکلات خواب (مانند بدخوابی و بی‌نظمی در ساعات خواب) در کودک مرتبط است. این یافته‌ها نشان می‌دهد که برنامه‌ریزی خواب ممکن است تا حدودی در دوران جنینی شکل بگیرد.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">تأخیر در تکامل شناختی</h3>
          <p>
            مجموع تغییرات هورمونی و التهابی ناشی از کم‌خوابی مادر، می‌تواند در نهایت به تأخیر یا کاهش توانایی‌های شناختی کودک در مقایسه با همسالان منجر شود.
          </p>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 my-8">
            <p className="text-destructive font-semibold mb-2">⚠️ هشدار مهم</p>
            <p className="text-sm">
              خوددرمانی با داروهای خواب‌آور در دوران بارداری به شدت خطرناک است. بسیاری از داروهای خواب‌آور می‌توانند از سد جفت عبور کرده و به جنین آسیب برسانند. در صورت مشکلات خواب، حتماً با متخصص زنان یا پزشک خود مشورت کنید.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">مدیریت تخصصی خواب و ارائه خدمات پزشکی در منزل تهران</h2>
          <p>
            باتوجه به این یافته‌ها، مدیریت فعال و زودهنگام اختلالات خواب در دوران بارداری از اهمیت حیاتی برخوردار است. نوید زندگی با ارائه <Link to="/services/nursing" className="text-primary hover:underline">خدمات پزشکی در منزل تهران</Link> و مشاوره تخصصی پرستاری بارداری، به مادران کمک می‌کند تا:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>الگوهای خواب خود را تحت نظر پرستار متخصص بارداری بهبود بخشند</li>
            <li>ریسک فاکتورهای زمینه‌ای (مانند <Link to="/articles/blood-pressure" className="text-primary hover:underline">فشار خون</Link> و دیابت) که با کم‌خوابی تشدید می‌شوند، را به طور دقیق پایش و کنترل کنند</li>
            <li>آموزش‌های لازم در خصوص بهداشت خواب و تکنیک‌های آرام‌سازی را دریافت نمایند</li>
          </ul>
          <p>
            مدیریت زودهنگام این عوامل، راهکاری کلیدی برای تضمین رشد بهینه جنین و سلامت آتی کودک است.
          </p>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-bold mb-4">مشاوره و مراقبت تخصصی بارداری در منزل</h3>
            <p className="mb-4">
              برای دریافت خدمات پرستاری و مشاوره بارداری در منزل تهران، با ما تماس بگیرید.
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{phoneNumber}</span>
            </a>
          </div>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default PregnancySleepPage;
