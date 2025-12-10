import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import coldVsFluImage from "@/assets/cold-vs-flu-article.jpg";
import fluPreventionImage from "@/assets/flu-prevention-article.jpg";
import fluMedicationsImage from "@/assets/flu-treatment-medications.jpg";
import fluTransmissionImage from "@/assets/flu-transmission-article.jpg";

const ColdVsFluPage = () => {
  const faqs = [
    {
      question: "تفاوت اصلی سرماخوردگی و آنفولانزا چیست؟",
      answer: "آنفولانزا با شروع ناگهانی، تب بالا، درد شدید عضلانی و خستگی شدید مشخص می‌شود، در حالی که سرماخوردگی معمولاً تدریجی شروع شده و علائم خفیف‌تری مانند آبریزش بینی و گلودرد دارد."
    },
    {
      question: "آیا برای سرماخوردگی واکسن وجود دارد؟",
      answer: "خیر، برای سرماخوردگی واکسنی وجود ندارد زیرا بیش از ۲۰۰ نوع ویروس می‌تواند آن را ایجاد کند. اما برای آنفولانزا واکسن سالانه موجود و توصیه می‌شود."
    },
    {
      question: "چه زمانی باید برای سرماخوردگی یا آنفولانزا به پزشک مراجعه کرد؟",
      answer: "اگر تنگی نفس، درد قفسه سینه، تب بالا و طولانی‌مدت، یا علائمی که بدتر می‌شوند را تجربه کردید، باید فوراً به پزشک مراجعه کنید."
    },
    {
      question: "آیا داروی ضدویروسی برای سرماخوردگی مفید است؟",
      answer: "خیر، داروهای ضدویروسی مانند تامیفلو فقط برای آنفولانزا مؤثرند و روی ویروس‌های سرماخوردگی تأثیری ندارند. درمان سرماخوردگی بیشتر حمایتی است."
    },
    {
      question: "آنفولانزا چقدر طول می‌کشد؟",
      answer: "اکثر افراد در طی ۱ تا ۲ هفته بهبود می‌یابند، اما خستگی و ضعف می‌تواند هفته‌ها ادامه یابد. سرماخوردگی معمولاً در ۷ تا ۱۰ روز بهبود می‌یابد."
    }
  ];

  const relatedArticles = [
    {
      title: "راهبردهای پیشگیری از آنفولانزا",
      description: "واکسیناسیون، بهداشت فردی و اقدامات احتیاطی",
      image: fluPreventionImage,
      link: "/articles/influenza-prevention",
      category: "سلامت عمومی"
    },
    {
      title: "داروهای درمان آنفولانزا",
      description: "ضدویروسی‌ها و درمان‌های حمایتی",
      image: fluMedicationsImage,
      link: "/articles/influenza-medications",
      category: "دارو"
    },
    {
      title: "نحوه انتقال آنفولانزا",
      description: "قطرات تنفسی، تماس و دوره واگیرداری",
      image: fluTransmissionImage,
      link: "/articles/influenza-transmission",
      category: "سلامت عمومی"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تفاوت سرماخوردگی و آنفولانزا", url: "/articles/cold-vs-flu" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تفاوت سرماخوردگی و آنفولانزا: علائم، تشخیص و درمان | نوید زندگی"
        description="مقایسه کامل سرماخوردگی و آنفولانزا: تفاوت علائم، شدت بیماری، روش‌های درمان و پیشگیری. چه زمانی به پزشک مراجعه کنیم؟"
        keywords="سرماخوردگی، آنفولانزا، تفاوت سرماخوردگی و آنفولانزا، علائم آنفولانزا، درمان سرماخوردگی"
        canonical="https://navidzendegi.com/articles/cold-vs-flu"
        ogType="article"
        publishedTime="2024-12-10"
        modifiedTime="2024-12-10"
      />
      <ArticleSchema
        title="تفاوت سرماخوردگی و آنفولانزا: علائم، تشخیص و درمان"
        description="مقایسه کامل سرماخوردگی و آنفولانزا شامل تفاوت علائم، روش‌های درمان و پیشگیری"
        publishedTime="2024-12-10"
        modifiedTime="2024-12-10"
        image={coldVsFluImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none text-right" dir="rtl">
          <h1 className="text-3xl font-bold mb-6 text-foreground">تفاوت سرماخوردگی و آنفولانزا</h1>

          <img
            src={coldVsFluImage}
            alt="مقایسه سرماخوردگی و آنفولانزا"
            className="w-full rounded-lg mb-8"
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            سرماخوردگی و آنفولانزا هر دو بیماری‌های تنفسی هستند، اما توسط <strong>ویروس‌های متفاوتی</strong> ایجاد می‌شوند و شدت آن‌ها نیز کاملاً متفاوت است. آنفولانزا می‌تواند منجر به عوارض جدی شود، در حالی که سرماخوردگی معمولاً یک بیماری خفیف است.
          </p>

          <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded-lg mb-6">
            <p className="text-red-800 font-semibold">
              ⚠️ هشدار: از خوددرمانی خودداری کنید. در صورت مشاهده علائم شدید، حتماً با پزشک مشورت کنید.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">مقایسه علائم بالینی</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">شروع علائم</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> تدریجی و آهسته</li>
            <li><strong>آنفولانزا:</strong> ناگهانی و شدید</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">تب</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> نادر است. در صورت وجود، خفیف و گذرا</li>
            <li><strong>آنفولانزا:</strong> شایع و برجسته. معمولاً بالا (۳۸ درجه سانتی‌گراد یا بالاتر) و طولانی‌تر</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">درد عضلانی و بدن درد</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> خفیف یا وجود ندارد</li>
            <li><strong>آنفولانزا:</strong> شایع، شدید و کوبنده</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">خستگی و ضعف</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> خفیف یا ملایم</li>
            <li><strong>آنفولانزا:</strong> شدید و ناگهانی، می‌تواند هفته‌ها طول بکشد</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">سردرد</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> معمولاً خفیف یا وجود ندارد</li>
            <li><strong>آنفولانزا:</strong> شایع و شدید</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">آبریزش و گرفتگی بینی</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> علامت اصلی و شایع</li>
            <li><strong>آنفولانزا:</strong> کمتر شایع، اما ممکن است رخ دهد</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">سرفه</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> معمولاً خفیف و همراه با خلط کم</li>
            <li><strong>آنفولانزا:</strong> شایع و اغلب خشک و شدید</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">عوارض جدی</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> بسیار نادر</li>
            <li><strong>آنفولانزا:</strong> شایع، شامل ذات‌الریه، برونشیت، بستری شدن و مرگ</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">علت و دوره بیماری</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">۱. سرماخوردگی</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>عامل بیماری:</strong> معمولاً توسط راینوویروس‌ها (Rhinoviruses)، کروناویروس‌های خفیف و آدنوویروس‌ها ایجاد می‌شود</li>
            <li><strong>شدت و مدت:</strong> علائم معمولاً در ۳ تا ۷ روز به اوج می‌رسند و بیماری اغلب طی ۷ تا ۱۰ روز بهبود می‌یابد</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">۲. آنفولانزا</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>عامل بیماری:</strong> توسط ویروس‌های آنفولانزای A، B و C ایجاد می‌شود</li>
            <li><strong>شدت و مدت:</strong> علائم به طور ناگهانی ظاهر شده و معمولاً شدیدتر از سرماخوردگی هستند. اکثر افراد در طی ۱ تا ۲ هفته بهبود می‌یابند، اما خستگی و ضعف می‌تواند طولانی‌تر باشد</li>
            <li><strong>اهمیت:</strong> آنفولانزا به‌ویژه در گروه‌های پرخطر (سالمندان، کودکان و افراد دارای بیماری‌های زمینه‌ای) می‌تواند زندگی فرد را تهدید کند</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">راهکارهای درمانی و پیشگیری</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">واکسن</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> واکسنی وجود ندارد</li>
            <li><strong>آنفولانزا:</strong> واکسن سالانه، مؤثرترین راه پیشگیری از آنفولانزای شدید</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">داروی ضدویروسی</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> کاربرد ندارد</li>
            <li><strong>آنفولانزا:</strong> تجویز می‌شود، به‌ویژه اگر ظرف ۴۸ ساعت اولیه شروع شود</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">درمان</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong>سرماخوردگی:</strong> استراحت، مایعات و داروهای بدون نسخه برای کاهش علائم (مانند ضد درد و ضد احتقان)</li>
            <li><strong>آنفولانزا:</strong> استراحت، مایعات، داروهای حمایتی و داروهای ضدویروسی (در صورت لزوم)</li>
          </ul>

          <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg mb-6">
            <p className="text-amber-800 font-semibold">
              نکته مهم: اگر فردی علائم شدید، به‌ویژه تنگی نفس، درد قفسه سینه، یا تب بالا و طولانی‌مدت را تجربه کند، باید فوراً به پزشک مراجعه کند تا از عوارض آنفولانزا (مانند ذات‌الریه) جلوگیری شود.
            </p>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg mt-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">درخواست ویزیت پزشک در منزل</h3>
            <p className="text-muted-foreground mb-4">
              در صورت مشاهده علائم سرماخوردگی یا آنفولانزا، تیم پزشکی <strong>نوید زندگی</strong> آماده ارائه خدمات ویزیت در منزل است.
            </p>
            <p className="text-lg font-bold text-primary">
              تماس: <a href="tel:09386117912" className="hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a>
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">منابع</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
            <li>Cold versus Flu: What's the Difference? Centers for Disease Control and Prevention (CDC).</li>
            <li>Common Cold. Mayo Clinic (Academic Medical Center).</li>
            <li>Seasonal Influenza (Flu). World Health Organization (WHO).</li>
          </ul>
        </article>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />
      </div>
    </ArticleLayout>
  );
};

export default ColdVsFluPage;
