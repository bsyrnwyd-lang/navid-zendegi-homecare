import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleSchema from "@/components/ArticleSchema";
import wbcImage from "@/assets/white-blood-cells-article.jpg";
import hemoglobinImage from "@/assets/hemoglobin-article.jpg";
import annualScreeningImage from "@/assets/annual-screening-tests.jpg";
import hivAidsImage from "@/assets/hiv-aids-article.jpg";

const WhiteBloodCellsPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "گلبول‌های سفید", url: "/articles/white-blood-cells" }
  ];

  const faqs = [
    {
      question: "سطح طبیعی گلبول‌های سفید چقدر است؟",
      answer: "سطح طبیعی گلبول‌های سفید در بزرگسالان بین 4,500 تا 11,000 عدد در هر میکرولیتر خون است. در کودکان این میزان کمی بالاتر و متغیرتر است. هر گونه تغییر قابل توجه باید توسط پزشک ارزیابی شود."
    },
    {
      question: "افزایش گلبول سفید نشانه چیست؟",
      answer: "افزایش گلبول سفید (لکوسیتوز) معمولاً نشانه عفونت باکتریایی است، اما می‌تواند ناشی از التهاب مزمن، استرس شدید، واکنش‌های آلرژیک، یا در موارد نادر سرطان‌های خون (لوسمی) باشد. پزشک با بررسی نوع گلبول‌های افزایش یافته، علت را تشخیص می‌دهد."
    },
    {
      question: "کاهش گلبول سفید چه خطراتی دارد؟",
      answer: "کاهش گلبول سفید (لکوپنی) سیستم ایمنی را ضعیف کرده و خطر ابتلا به عفونت‌ها را افزایش می‌دهد. این وضعیت می‌تواند ناشی از عفونت‌های ویروسی، شیمی‌درمانی، برخی داروها، یا اختلالات مغز استخوان باشد و نیاز به بررسی پزشکی دارد."
    },
    {
      question: "تفاوت نوتروفیل و لنفوسیت چیست؟",
      answer: "نوتروفیل‌ها فراوان‌ترین گلبول‌های سفید هستند و در خط مقدم دفاع در برابر عفونت‌های باکتریایی قرار دارند (ایمنی ذاتی). لنفوسیت‌ها مسئول ایمنی اکتسابی هستند و شامل سلول‌های T (کشتن سلول‌های آلوده) و سلول‌های B (تولید آنتی‌بادی) می‌شوند."
    },
    {
      question: "آیا آزمایش گلبول سفید را می‌توان در منزل انجام داد؟",
      answer: "بله، با خدمات نمونه‌گیری خون در منزل نوید زندگی، آزمایش CBC شامل شمارش گلبول‌های سفید و تفکیک انواع آن‌ها (Differential) در محیط راحت منزل شما انجام می‌شود. برای هماهنگی با شماره 09386117912 تماس بگیرید."
    }
  ];

  const relatedArticles = [
    {
      title: "هموگلوبین: ساختار، عملکرد و اهمیت بالینی",
      description: "راهنمای کامل هموگلوبین و نقش آن در انتقال اکسیژن",
      image: hemoglobinImage,
      link: "/articles/hemoglobin",
      category: "سلامت عمومی"
    },
    {
      title: "آزمایش‌های غربالگری سالانه",
      description: "چه آزمایش‌هایی باید به طور منظم انجام دهید؟",
      image: annualScreeningImage,
      link: "/articles/annual-screening-tests",
      category: "سلامت عمومی"
    },
    {
      title: "HIV/AIDS: پیشگیری و درمان",
      description: "اطلاعات جامع درباره ویروس HIV و سیستم ایمنی",
      image: hivAidsImage,
      link: "/articles/hiv-aids",
      category: "سلامت عمومی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="گلبول‌های سفید (WBC): انواع، عملکرد و اهمیت بالینی | نوید زندگی"
        description="راهنمای کامل گلبول‌های سفید شامل انواع (نوتروفیل، لنفوسیت، مونوسیت)، نقش در سیستم ایمنی، لکوسیتوز و لکوپنی. اهمیت آزمایش خون در منزل."
        keywords="گلبول سفید، لکوسیت، نوتروفیل، لنفوسیت، مونوسیت، سیستم ایمنی، آزمایش خون، CBC"
        canonical="https://navidzendegi.com/articles/white-blood-cells"
        ogType="article"
        publishedTime="2024-12-15"
        modifiedTime="2024-12-15"
      />

      <ArticleSchema
        title="گلبول‌های سفید (WBC): ارتش دفاعی بدن"
        description="راهنمای کامل گلبول‌های سفید شامل انواع، عملکرد و اهمیت بالینی"
        publishedTime="2024-12-15"
        modifiedTime="2024-12-15"
        image={wbcImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none dark:prose-invert text-right" dir="rtl">
          <h1 className="text-3xl font-bold mb-6 text-primary">
            گلبول‌های سفید (WBC / لکوسیت‌ها): ارتش دفاعی بدن
          </h1>

          <img
            src={wbcImage}
            alt="گلبول‌های سفید و سیستم ایمنی بدن"
            className="w-full rounded-lg mb-8"
          />

          <p className="lead">
            <strong>گلبول‌های سفید</strong> که با نام‌های <strong>لکوسیت‌ها (Leukocytes)</strong> نیز شناخته می‌شوند، سلول‌های حیاتی سیستم ایمنی بدن هستند. آن‌ها برخلاف گلبول‌های قرمز که وظیفه انتقال اکسیژن را بر عهده دارند، نقش اصلی را در دفاع از بدن در برابر عوامل بیماری‌زا (پاتوژن‌ها) مانند باکتری‌ها، ویروس‌ها، قارچ‌ها و انگل‌ها و همچنین حذف سلول‌های آسیب‌دیده یا غیرطبیعی ایفا می‌کنند.
          </p>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-r-4 border-amber-500 p-4 my-6 rounded">
            <p className="font-bold text-amber-800 dark:text-amber-200 mb-2">⚠️ هشدار مهم:</p>
            <p className="text-amber-700 dark:text-amber-300">
              هرگونه تغییر غیرطبیعی در تعداد گلبول‌های سفید نیاز به بررسی پزشکی دارد. از خوددرمانی خودداری کنید و در صورت مشاهده علائم عفونت مکرر یا تب مداوم به پزشک مراجعه نمایید.
            </p>
          </div>

          <h2>۱. منشأ و ویژگی‌های گلبول‌های سفید</h2>

          <ul>
            <li><strong>تولید:</strong> گلبول‌های سفید عمدتاً در <strong>مغز استخوان (Bone Marrow)</strong> از سلول‌های بنیادی خون‌ساز تولید می‌شوند (فرآیندی به نام لکوپوئیز).</li>
            <li><strong>حرکت:</strong> گلبول‌های سفید بر خلاف RBCs، هسته دارند و می‌توانند به صورت فعال از طریق دیواره‌های عروق خونی عبور کرده و وارد بافت‌های بدن شوند تا به محل عفونت یا آسیب برسند (فرآیند دیاپدز).</li>
          </ul>

          <h2>۲. انواع اصلی گلبول‌های سفید</h2>

          <p>
            گلبول‌های سفید به دو دسته اصلی تقسیم می‌شوند: <strong>گرانولوسیت‌ها (دانه‌دار)</strong> و <strong>آگرانولوسیت‌ها (بدون دانه)</strong>.
          </p>

          <h3>الف) گرانولوسیت‌ها (Granulocytes)</h3>

          <p>
            این سلول‌ها دارای دانه‌های (Granules) سیتوپلاسمی مشخصی هستند که حاوی مواد شیمیایی مختلفی برای دفاع از بدن می‌باشند:
          </p>

          <ul>
            <li><strong>نوتروفیل‌ها (Neutrophils):</strong> 50 تا 70 درصد (فراوان‌ترین) - خط مقدم دفاع. فاگوسیتوز (بلعیدن و تخریب) باکتری‌ها و قارچ‌ها در محل عفونت حاد.</li>
            <li><strong>ائوزینوفیل‌ها (Eosinophils):</strong> 1 تا 4 درصد - دفاع در برابر انگل‌ها (مانند کرم‌ها) و نقش کلیدی در واکنش‌های آلرژیک.</li>
            <li><strong>بازوفیل‌ها (Basophils):</strong> کمتر از 1 درصد (کمیاب‌ترین) - ترشح هیستامین و سایر مواد شیمیایی که در واکنش‌های التهابی و آلرژیک نقش دارند.</li>
          </ul>

          <h3>ب) آگرانولوسیت‌ها (Agranulocytes)</h3>

          <p>
            این سلول‌ها فاقد گرانول‌های مشخص در سیتوپلاسم خود هستند:
          </p>

          <ul>
            <li><strong>لنفوسیت‌ها (Lymphocytes):</strong> 20 تا 40 درصد - مسئول ایمنی اکتسابی. شامل سلول‌های T (کشتن سلول‌های آلوده به ویروس و سلول‌های سرطانی) و سلول‌های B (تولید آنتی‌بادی برای خنثی کردن پاتوژن‌ها).</li>
            <li><strong>مونوسیت‌ها (Monocytes):</strong> 2 تا 8 درصد - بزرگ‌ترین WBCها. پس از ورود به بافت‌ها به ماکروفاژ تبدیل می‌شوند. ماکروفاژها پاتوژن‌ها، سلول‌های مرده و بقایای سلولی را فاگوسیتوز می‌کنند.</li>
          </ul>

          <h2>۳. اهمیت بالینی: شمارش گلبول‌های سفید (WBC Count)</h2>

          <p>
            آزمایش شمارش کامل خون (CBC) شامل اندازه‌گیری تعداد WBCs در هر میکرولیتر خون است. تغییرات در این عدد می‌تواند نشان‌دهنده مشکلات جدی باشد:
          </p>

          <h3>لکوپنی (Leukopenia)</h3>
          <p>
            کاهش غیرطبیعی تعداد WBCs است:
          </p>
          <ul>
            <li><strong>علل:</strong> برخی عفونت‌های ویروسی (مانند HIV یا آنفلوانزا)، شیمی‌درمانی، و اختلالات مغز استخوان.</li>
            <li><strong>پیامد:</strong> افزایش خطر ابتلا به عفونت‌ها.</li>
          </ul>

          <h3>لکوسیتوز (Leukocytosis)</h3>
          <p>
            افزایش غیرطبیعی تعداد WBCs است:
          </p>
          <ul>
            <li><strong>علل:</strong> شایع‌ترین علت، عفونت‌های باکتریایی است (افزایش نوتروفیل‌ها)، اما می‌تواند ناشی از التهاب مزمن، آلرژی‌ها (افزایش ائوزینوفیل‌ها)، یا سرطان‌های خون (لوسمی) نیز باشد.</li>
          </ul>

          <h2>۴. نقش لکوسیت‌ها در التهاب</h2>

          <p>
            هنگامی که آسیبی رخ می‌دهد یا عفونتی وارد می‌شود، WBCs (به ویژه نوتروفیل‌ها و ماکروفاژها) اولین پاسخ‌دهندگان هستند. آن‌ها مواد شیمیایی التهابی را آزاد می‌کنند که باعث گشاد شدن عروق، افزایش نفوذپذیری مویرگ‌ها و جذب سلول‌های ایمنی بیشتر به محل آسیب می‌شوند. این فرآیند منجر به علائم التهاب (قرمزی، تورم، گرما و درد) می‌شود.
          </p>

          <h2>اهمیت آزمایش خون در منزل تهران</h2>

          <p>
            پایش منظم شمارش گلبول‌های سفید برای افرادی که تحت شیمی‌درمانی هستند، بیماران با ضعف سیستم ایمنی، و کسانی که علائم عفونت مکرر دارند اهمیت ویژه‌ای دارد. با خدمات <strong>نمونه‌گیری خون در منزل</strong> نوید زندگی، آزمایش CBC کامل شامل شمارش و تفکیک گلبول‌های سفید در محیط راحت منزل شما انجام می‌شود.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-bold text-primary mb-4">درخواست آزمایش خون در منزل</h3>
            <p className="mb-4">
              برای انجام آزمایش CBC و شمارش گلبول‌های سفید در منزل با ما تماس بگیرید:
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
            <li>[1] Leukocytes. Immunology Textbooks.</li>
            <li>[2] White Blood Cell Differential. Clinical Laboratory Medicine.</li>
            <li>[3] Role of Lymphocytes in Adaptive Immunity. Nature Immunology.</li>
            <li>[4] Approach to the patient with leukocytosis. The American Journal of Medicine.</li>
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

export default WhiteBloodCellsPage;
