import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import magnesiumImage from "@/assets/magnesium-supplement-article.jpg";
import ironImage from "@/assets/iron-supplement-article.jpg";
import zincImage from "@/assets/zinc-supplement-article.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const MagnesiumSupplementPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "منیزیم", url: "/articles/magnesium-supplement" }
  ];

  const faqs = [
    {
      question: "علائم کمبود منیزیم چیست؟",
      answer: "گرفتگی و اسپاسم عضلانی (به ویژه ساق پا)، خستگی و ضعف عمومی، اضطراب، بی‌خوابی و تحریک‌پذیری عصبی از علائم شایع کمبود منیزیم هستند. در موارد شدید لرزش، آریتمی قلبی و تشنج نیز ممکن است رخ دهد."
    },
    {
      question: "چه کسانی بیشتر در معرض کمبود منیزیم هستند؟",
      answer: "افراد مبتلا به بیماری‌های گوارشی (کرون، سلیاک)، دیابتی‌ها، افرادی که داروهای دیورتیک یا مهارکننده پمپ پروتون مصرف می‌کنند، و افرادی با رژیم غذایی نامناسب بیشتر در معرض کمبود منیزیم هستند."
    },
    {
      question: "منیزیم چه نقشی در سلامت قلب دارد؟",
      answer: "منیزیم برای پایداری الکتریکی غشای سلولی قلب حیاتی است و به پیشگیری از آریتمی‌ها کمک می‌کند. همچنین به عنوان گشادکننده طبیعی عروق عمل کرده و می‌تواند به کاهش فشار خون بالا کمک کند."
    },
    {
      question: "بهترین منابع غذایی منیزیم کدامند؟",
      answer: "سبزیجات برگ سبز (اسفناج)، دانه‌ها و آجیل‌ها (تخمه کدو، بادام)، غلات کامل، حبوبات و شکلات تلخ از بهترین منابع غذایی منیزیم هستند."
    },
    {
      question: "آیا مصرف مکمل منیزیم عوارض جانبی دارد؟",
      answer: "منیزیم معمولاً ایمن است، اما مصرف بیش از حد آن می‌تواند باعث اسهال شود. در افراد با نارسایی کلیوی مصرف منیزیم باید با احتیاط و تحت نظر پزشک انجام شود."
    }
  ];

  const relatedArticles = [
    {
      title: "آهن: نقش‌ها، کمبود و مصرف توصیه‌شده",
      description: "راهنمای کامل آهن و کم‌خونی فقر آهن برای بزرگسالان و زنان باردار",
      image: ironImage,
      link: "/articles/iron-supplement",
      category: "تغذیه"
    },
    {
      title: "زینک (روی): عنصر ضروری برای سلامتی",
      description: "نقش زینک در تقویت سیستم ایمنی، التیام زخم و عملکرد شناختی",
      image: zincImage,
      link: "/articles/zinc-supplement",
      category: "تغذیه"
    },
    {
      title: "تپش قلب: علل، تشخیص و درمان",
      description: "بررسی علل تپش قلب و ارتباط آن با اختلالات الکترولیتی",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="منیزیم: نقش‌ها، کمبود و اهمیت مکمل‌یاری | نوید زندگی"
        description="منیزیم عنصری حیاتی برای سلامت قلب، عضلات و اعصاب است. بررسی علائم کمبود منیزیم، منابع غذایی و اهمیت مکمل‌یاری."
        keywords="منیزیم, کمبود منیزیم, مکمل منیزیم, گرفتگی عضلات, سلامت قلب, آریتمی, میگرن, الکترولیت"
        canonical="https://navidzendegi.com/articles/magnesium-supplement"
        ogType="article"
        ogImage={magnesiumImage}
      />
      <ArticleSchema
        title="منیزیم: نقش‌ها، کمبود و اهمیت مکمل‌یاری"
        description="منیزیم عنصری حیاتی برای سلامت قلب، عضلات و اعصاب است."
        publishedTime="2024-12-13"
        modifiedTime="2024-12-13"
        image={magnesiumImage}
      />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>

        <article className="container mx-auto max-w-4xl px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              منیزیم (Magnesium): عنصر حیاتی، نقش‌ها و اهمیت مصرف مکمل
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              منیزیم (Mg) چهارمین ماده معدنی فراوان در بدن و یک الکترولیت ضروری است که در بیش از ۳۰۰ واکنش آنزیمی نقش دارد. این عنصر در تنظیم عملکردهای حیاتی مانند سنتز پروتئین، عملکرد عصب و عضله، کنترل قند خون، و تولید انرژی ATP مشارکت می‌کند.
            </p>
          </header>

          <img 
            src={magnesiumImage} 
            alt="منیزیم و اهمیت آن در سلامتی" 
            className="w-full rounded-lg mb-8"
          />

          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
            <p className="text-red-800 dark:text-red-200 text-sm">
              ⚠️ هشدار: مصرف خودسرانه مکمل‌های منیزیم بدون تشخیص پزشک می‌تواند در افراد با نارسایی کلیوی خطرناک باشد. قبل از مصرف هر نوع مکمل، با پزشک مشورت کنید.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۱. نقش‌های فیزیولوژیک کلیدی منیزیم
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              الف) سلامت قلب و عروق
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>تنظیم ریتم قلب:</strong> منیزیم برای پایداری الکتریکی غشای سلولی، به‌ویژه در سلول‌های قلبی، حیاتی است و به پیشگیری از آریتمی‌ها کمک می‌کند.</li>
              <li><strong>کنترل فشار خون:</strong> این عنصر به عنوان یک گشادکننده عروق طبیعی عمل کرده و می‌تواند به کاهش فشار خون بالا کمک کند.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              ب) عملکرد عصب و عضله
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>آرامش عضلانی:</strong> منیزیم به عنوان یک مسدودکننده طبیعی کلسیم عمل می‌کند؛ کلسیم باعث انقباض عضلات می‌شود و منیزیم به شل شدن آن‌ها کمک می‌کند.</li>
              <li><strong>کاهش اضطراب و میگرن:</strong> منیزیم در تنظیم انتقال‌دهنده‌های عصبی و محافظت از نورون‌ها نقش داشته و مصرف آن می‌تواند به کاهش شدت و دفعات حملات میگرنی کمک کند.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              ج) متابولیسم گلوکز
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>حساسیت به انسولین:</strong> منیزیم در مسیر پیام‌رسانی انسولین مشارکت دارد و کمبود آن می‌تواند مقاومت به انسولین را افزایش دهد. مکمل‌یاری آن برای افراد مبتلا به دیابت نوع ۲ مفید است.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۲. کمبود منیزیم (هیپومنیزیمی)
            </h2>
            <p className="text-muted-foreground mb-4">
              با وجود فراوانی منیزیم در غذاها، کمبود آن در جمعیت‌های خاص شایع است.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              علل کمبود
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>رژیم غذایی:</strong> مصرف کم منابع غذایی غنی از منیزیم.</li>
              <li><strong>بیماری‌های گوارشی:</strong> بیماری‌هایی مانند کرون یا سلیاک که جذب مواد مغذی را مختل می‌کنند.</li>
              <li><strong>داروها:</strong> مصرف طولانی‌مدت برخی داروها (مانند مهارکننده‌های پمپ پروتون یا دیورتیک‌ها).</li>
              <li><strong>بیماری‌های مزمن:</strong> دیابت نوع ۲ و الکلیسم مزمن.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              علائم کمبود
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>گرفتگی و اسپاسم عضلانی (به ویژه ساق پا).</li>
              <li>خستگی و ضعف عمومی.</li>
              <li>اضطراب، بی‌خوابی و تحریک‌پذیری عصبی.</li>
              <li>در موارد شدید: لرزش، آریتمی قلبی و تشنج.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۳. منابع غذایی و مکمل‌یاری
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              منابع غذایی غنی از منیزیم
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>سبزیجات برگ سبز:</strong> اسفناج، کلم بروکلی</li>
              <li><strong>دانه‌ها و آجیل‌ها:</strong> تخمه کدو، بادام، گردو</li>
              <li><strong>غلات کامل:</strong> جو، گندم کامل</li>
              <li><strong>حبوبات:</strong> لوبیا، عدس</li>
              <li><strong>شکلات تلخ:</strong> حاوی مقادیر قابل توجه منیزیم</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              دوزهای توصیه شده (RDA)
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>مردان بالغ:</strong> ۴۰۰-۴۲۰ میلی‌گرم در روز</li>
              <li><strong>زنان بالغ:</strong> ۳۱۰-۳۲۰ میلی‌گرم در روز</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۴. اهمیت تشخیص و تجویز مکمل منیزیم
            </h2>
            <p className="text-muted-foreground mb-4">
              باتوجه به اینکه علائم کمبود منیزیم می‌تواند با سایر اختلالات (مانند کمبود کلسیم یا پتاسیم) همپوشانی داشته باشد، تشخیص دقیق و پایش الکترولیت‌ها اهمیت حیاتی دارد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              نقش ویزیت پزشک در منزل
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>تشخیص افتراقی:</strong> پزشک متخصص می‌تواند علائم عصبی-عضلانی (مانند اسپاسم و گرفتگی) و قلبی بیمار را به طور دقیق ارزیابی کرده و کمبود منیزیم را از سایر بیماری‌ها تشخیص دهد.</li>
              <li><strong>تنظیم دوز تخصصی:</strong> دوز منیزیم باید با توجه به عملکرد کلیوی و داروهای مصرفی دیگر تنظیم شود.</li>
              <li><strong>تزریق منیزیم:</strong> در موارد کمبود شدید یا شرایط حاد مانند پره‌اکلامپسی، تجویز منیزیم به صورت تزریق وریدی یا عضلانی مورد نیاز است.</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                💡 نکته ایمنی: منیزیم معمولاً ایمن است، اما مصرف بیش از حد آن می‌تواند در افراد با نارسایی کلیوی مشکل‌ساز باشد. تعیین سطح سرمی و مشورت با پزشک قبل از مصرف دوزهای بالا ضروری است.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              منابع (References)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Magnesium in Human Health and Disease. Physiological Reviews.</li>
              <li>Hypomagnesemia: Clinical Consequences and Management. NEJM Review.</li>
              <li>Role of magnesium in the pathogenesis and treatment of migraine. Expert Review of Neurotherapeutics.</li>
              <li>Magnesium Fact Sheet for Health Professionals. NIH/Office of Dietary Supplements.</li>
            </ul>
          </section>

          <section className="mb-8 bg-primary/5 rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-3">
              مشاوره پزشکی در منزل
            </h2>
            <p className="text-muted-foreground mb-4">
              اگر علائم کمبود منیزیم (گرفتگی عضلات، خستگی، اضطراب) دارید یا نیاز به بررسی سطح الکترولیت‌ها و مشاوره تغذیه‌ای دارید، می‌توانید از خدمات <a href="/services/internal-medicine" className="text-primary hover:underline">ویزیت متخصص داخلی در منزل</a> و <a href="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</a> نوید زندگی استفاده کنید.
            </p>
            <p className="text-foreground font-semibold">
              برای هماهنگی تماس بگیرید: <a href="tel:09386117912" className="text-primary hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a>
            </p>
          </section>
        </article>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <FAQSection faqs={faqs} />
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default MagnesiumSupplementPage;
