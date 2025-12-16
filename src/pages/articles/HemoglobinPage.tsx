import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleSchema from "@/components/ArticleSchema";
import hemoglobinImage from "@/assets/hemoglobin-article.jpg";
import ironSupplementImage from "@/assets/iron-supplement-article.jpg";
import troponinImage from "@/assets/troponin-test.jpg";
import annualScreeningImage from "@/assets/annual-screening-tests.jpg";

const HemoglobinPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "هموگلوبین", url: "/articles/hemoglobin" }
  ];

  const faqs = [
    {
      question: "سطح طبیعی هموگلوبین چقدر است؟",
      answer: "سطح طبیعی هموگلوبین در مردان بالغ بین 13.5 تا 17.5 گرم در دسی‌لیتر و در زنان بالغ بین 12 تا 16 گرم در دسی‌لیتر است. در زنان باردار این میزان کمی کمتر (حدود 11 گرم در دسی‌لیتر) طبیعی محسوب می‌شود."
    },
    {
      question: "علائم کاهش هموگلوبین (کم‌خونی) چیست؟",
      answer: "علائم شایع کم‌خونی شامل خستگی و ضعف مفرط، رنگ‌پریدگی پوست، تنگی نفس هنگام فعالیت، سرگیجه، سردرد، ضربان قلب تند یا نامنظم، و احساس سردی در دست‌ها و پاها است."
    },
    {
      question: "چگونه می‌توان سطح هموگلوبین را افزایش داد؟",
      answer: "برای افزایش هموگلوبین، مصرف مواد غذایی غنی از آهن (گوشت قرمز، جگر، حبوبات، سبزیجات برگ‌دار سبز) توصیه می‌شود. همچنین مصرف همزمان ویتامین C جذب آهن را افزایش می‌دهد. در موارد کمبود شدید، مکمل آهن یا تزریق تجویز می‌شود."
    },
    {
      question: "تفاوت تالاسمی و کم‌خونی فقر آهن چیست؟",
      answer: "تالاسمی یک بیماری ژنتیکی است که در آن تولید زنجیره‌های گلوبین مختل می‌شود، در حالی که کم‌خونی فقر آهن ناشی از کمبود آهن است. در تالاسمی MCV و MCH پایین است اما آهن سرم طبیعی یا بالاست. در فقر آهن، آهن سرم و فریتین کاهش یافته است."
    },
    {
      question: "آیا می‌توان آزمایش هموگلوبین را در منزل انجام داد؟",
      answer: "بله، با خدمات نمونه‌گیری خون در منزل نوید زندگی، آزمایش هموگلوبین و سایر شاخص‌های خونی (CBC کامل) در محیط راحت منزل شما انجام می‌شود. برای هماهنگی با شماره 09386117912 تماس بگیرید."
    }
  ];

  const relatedArticles = [
    {
      title: "مکمل آهن: فواید، عوارض و نحوه مصرف",
      description: "راهنمای کامل مکمل‌های آهن برای پیشگیری و درمان کم‌خونی فقر آهن",
      image: ironSupplementImage,
      link: "/articles/iron-supplement",
      category: "تغذیه"
    },
    {
      title: "تروپونین قلبی: نشانگر حیاتی آسیب قلب",
      description: "همه چیز درباره آزمایش تروپونین و نقش آن در تشخیص سکته قلبی",
      image: troponinImage,
      link: "/articles/troponin",
      category: "قلب و عروق"
    },
    {
      title: "آزمایش‌های غربالگری سالانه",
      description: "چه آزمایش‌هایی باید به طور منظم انجام دهید؟",
      image: annualScreeningImage,
      link: "/articles/annual-screening-tests",
      category: "سلامت عمومی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="هموگلوبین: ساختار، عملکرد و اهمیت بالینی | نوید زندگی"
        description="راهنمای کامل هموگلوبین شامل ساختار مولکولی، نقش در انتقال اکسیژن، کم‌خونی، تالاسمی و هموگلوبینوپاتی‌ها. اهمیت آزمایش خون در منزل."
        keywords="هموگلوبین، کم خونی، آنمی، تالاسمی، آزمایش خون، گلبول قرمز، آهن، فقر آهن"
        canonical="https://navidzendegi.com/articles/hemoglobin"
        ogType="article"
        publishedTime="2024-12-15"
        modifiedTime="2024-12-15"
      />

      <ArticleSchema
        title="هموگلوبین: ساختار، عملکرد و اهمیت بالینی"
        description="راهنمای کامل هموگلوبین شامل ساختار مولکولی، نقش در انتقال اکسیژن، کم‌خونی و هموگلوبینوپاتی‌ها"
        publishedTime="2024-12-15"
        modifiedTime="2024-12-15"
        image={hemoglobinImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none dark:prose-invert text-right" dir="rtl">
          <h1 className="text-3xl font-bold mb-6 text-primary">
            هموگلوبین (Hemoglobin): ساختار، عملکرد و اهمیت بالینی
          </h1>

          <img
            src={hemoglobinImage}
            alt="ساختار مولکولی هموگلوبین و انتقال اکسیژن"
            className="w-full rounded-lg mb-8"
          />

          <p className="lead">
            <strong>هموگلوبین (Hb)</strong> یک پروتئین حیاتی حاوی آهن است که به طور انحصاری درون <strong>گلبول‌های قرمز (RBCs)</strong> یافت می‌شود. وظیفه اصلی آن، انتقال اکسیژن از ریه‌ها به بافت‌ها و اندام‌های بدن و بازگرداندن بخش کوچکی از دی‌اکسید کربن به ریه‌ها برای بازدم است.
          </p>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-r-4 border-amber-500 p-4 my-6 rounded">
            <p className="font-bold text-amber-800 dark:text-amber-200 mb-2">⚠️ هشدار مهم:</p>
            <p className="text-amber-700 dark:text-amber-300">
              هرگونه علائم کم‌خونی مانند خستگی شدید، رنگ‌پریدگی یا تنگی نفس نیاز به بررسی پزشکی دارد. از خوددرمانی و مصرف خودسرانه مکمل‌های آهن خودداری کنید.
            </p>
          </div>

          <h2>۱. ساختار مولکولی هموگلوبین</h2>

          <p>
            هموگلوبین یک ساختار پروتئینی پیچیده و چهارجزئی است که از دو بخش اصلی تشکیل شده است:
          </p>

          <h3>الف) بخش پروتئینی (گلوبین - Globin)</h3>

          <ul>
            <li><strong>زنجیره‌های پلی‌پپتیدی:</strong> یک مولکول هموگلوبین بالغ (هموگلوبین A) شامل چهار زنجیره پروتئینی است: دو زنجیره آلفا (α) و دو زنجیره بتا (β). این چهار زنجیره به صورت یک ساختار چهارگانه به یکدیگر متصل می‌شوند.</li>
            <li><strong>انواع هموگلوبین:</strong> در مراحل مختلف زندگی، انواع مختلفی از زنجیره‌های گلوبین تولید می‌شود (مانند هموگلوبین جنینی HbF که دارای دو زنجیره آلفا و دو زنجیره گاما است).</li>
          </ul>

          <h3>ب) بخش غیرپروتئینی (گروه هِم - Heme Group)</h3>

          <ul>
            <li><strong>حلقه پورفیرین:</strong> هر یک از چهار زنجیره گلوبین به یک گروه غیرپروتئینی به نام هِم متصل است. هر گروه هِم یک حلقه آلی بزرگ به نام پورفیرین است.</li>
            <li><strong>آهن:</strong> در مرکز هر حلقه هِم، یک اتم آهن (Fe²⁺) در حالت فرو (Ferrous) قرار دارد. این اتم آهن دقیقاً همان محل فیزیکی است که مولکول اکسیژن (O₂) به آن متصل می‌شود.</li>
            <li><strong>ظرفیت حمل اکسیژن:</strong> از آنجایی که هر مولکول هموگلوبین چهار گروه هِم دارد، می‌تواند به طور همزمان به چهار مولکول اکسیژن متصل شود.</li>
          </ul>

          <h2>۲. عملکرد حیاتی: انتقال گازها</h2>

          <h3>الف) اتصال به اکسیژن</h3>

          <ul>
            <li><strong>ریه‌ها:</strong> در ریه‌ها که غلظت اکسیژن بالا است، اکسیژن به آسانی به اتم آهن در گروه‌های هِم متصل می‌شود (ایجاد اکسی‌هموگلوبین).</li>
            <li><strong>اثر بوهر (Bohr Effect):</strong> هنگامی که گلبول قرمز به بافت‌ها می‌رسد، محیط اسیدی‌تر و گرم‌تر (ناشی از فعالیت متابولیک و تولید CO₂) باعث می‌شود که هموگلوبین میل کمتری به اکسیژن داشته باشد و اکسیژن را آزاد کند تا توسط سلول‌های بدن مصرف شود.</li>
          </ul>

          <h3>ب) انتقال دی‌اکسید کربن</h3>

          <p>
            حدود 10 تا 20 درصد دی‌اکسید کربن (CO₂) توسط هموگلوبین حمل می‌شود. CO₂ به بخش پروتئینی (گلوبین) هموگلوبین متصل می‌شود (ایجاد کاربامینوهموگلوبین) تا به ریه‌ها بازگردانده شود.
          </p>

          <h2>۳. اهمیت بالینی و اختلالات مرتبط</h2>

          <p>
            سطح هموگلوبین اندازه‌گیری اصلی در آزمایش خون است که سلامت سیستم خونی و توانایی حمل اکسیژن بدن را منعکس می‌کند.
          </p>

          <h3>الف) کم‌خونی (Anemia)</h3>

          <ul>
            <li><strong>تعریف:</strong> کاهش سطح هموگلوبین در خون یا کاهش تعداد گلبول‌های قرمز سالم.</li>
            <li><strong>علل:</strong> شایع‌ترین علت، کمبود آهن است، زیرا بدن بدون آهن کافی نمی‌تواند هِم کافی برای ساخت هموگلوبین تولید کند. سایر علل شامل کمبود ویتامین B12، بیماری‌های مزمن و خونریزی هستند.</li>
          </ul>

          <h3>ب) هموگلوبینوپاتی‌ها (Hemoglobinopathies)</h3>

          <p>
            این‌ها اختلالات ژنتیکی هستند که بر ساختار یا تولید زنجیره‌های گلوبین تأثیر می‌گذارند:
          </p>

          <ul>
            <li><strong>کم‌خونی داسی‌شکل (Sickle Cell Anemia):</strong> ناشی از جهش در زنجیره بتا است که باعث می‌شود هموگلوبین در شرایط کمبود اکسیژن، شکل غیرطبیعی داس‌مانند به خود بگیرد.</li>
            <li><strong>تالاسمی (Thalassemia):</strong> ناشی از کاهش یا عدم تولید یک یا چند زنجیره گلوبین است (مانند آلفا تالاسمی یا بتا تالاسمی) که تولید کلی هموگلوبین را مختل می‌کند.</li>
          </ul>

          <h3>ج) مسمومیت با مونوکسید کربن (CO Poisoning)</h3>

          <p>
            گاز مونوکسید کربن (CO) میل بسیار بالاتری نسبت به اکسیژن برای اتصال به اتم آهن هموگلوبین دارد. هنگامی که CO متصل می‌شود (ایجاد کربوکسی‌هموگلوبین)، اکسیژن نمی‌تواند حمل شود و منجر به خفگی سلولی می‌شود.
          </p>

          <h2>اهمیت آزمایش خون در منزل تهران</h2>

          <p>
            پایش منظم سطح هموگلوبین برای تشخیص زودهنگام کم‌خونی و بیماری‌های خونی اهمیت بالایی دارد. با خدمات <strong>نمونه‌گیری خون در منزل</strong> نوید زندگی، می‌توانید آزمایش CBC کامل (شامل هموگلوبین، هماتوکریت و شاخص‌های گلبولی) را در محیط راحت منزل خود انجام دهید.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-bold text-primary mb-4">درخواست آزمایش خون در منزل</h3>
            <p className="mb-4">
              برای انجام آزمایش هموگلوبین و سایر شاخص‌های خونی در منزل با ما تماس بگیرید:
            </p>
            <a
              href="tel:09386117912"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              📞 09386117912
            </a>
          </div>

          <h3>منابع (References)</h3>

          <ul className="text-sm">
            <li>[1] Hemoglobin: Function, Regulation, and Utilization. The New England Journal of Medicine (NEJM).</li>
            <li>[2] Molecular Structure of Hemoglobin. Biochemistry Textbooks.</li>
            <li>[3] Role of hemoglobin in the regulation of blood gases. Physiological Reviews.</li>
          </ul>
        </article>

        <div className="mt-12">
          <FAQSection faqs={faqs} />
        </div>

        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </div>
    </ArticleLayout>
  );
};

export default HemoglobinPage;
