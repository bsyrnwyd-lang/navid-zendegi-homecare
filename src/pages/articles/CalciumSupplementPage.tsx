import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import ArticleLayout from "@/components/ArticleLayout";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import calciumImage from "@/assets/calcium-supplement-article.jpg";
import phosphorusImage from "@/assets/phosphorus-supplement-article.jpg";
import magnesiumImage from "@/assets/magnesium-supplement-article.jpg";
import ironImage from "@/assets/iron-supplement-article.jpg";

const CalciumSupplementPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "کلسیم", url: "/articles/calcium-supplement" }
  ];

  const faqs = [
    {
      question: "چه میزان کلسیم در روز نیاز داریم؟",
      answer: "بزرگسالان ۱۹ تا ۵۰ سال به ۱۰۰۰ میلی‌گرم در روز و سالمندان (زنان بالای ۵۱ و مردان بالای ۷۰ سال) به ۱۲۰۰ میلی‌گرم در روز نیاز دارند."
    },
    {
      question: "بهترین منابع غذایی کلسیم کدامند؟",
      answer: "لبنیات (شیر، ماست، پنیر)، سبزیجات سبز برگ (کلم، بروکلی)، ماهی‌های کوچک با استخوان (ساردین)، توفو غنی‌شده و آجیل مانند بادام بهترین منابع غذایی کلسیم هستند."
    },
    {
      question: "علائم کمبود کلسیم چیست؟",
      answer: "کمبود مزمن کلسیم می‌تواند منجر به پوکی استخوان، گرفتگی عضلانی، بی‌حسی انگشتان، ضعف ناخن‌ها و دندان‌ها و در موارد شدید، اختلالات ریتم قلب شود."
    },
    {
      question: "آیا مصرف زیاد مکمل کلسیم خطرناک است؟",
      answer: "بله، مصرف بیش از حد مکمل‌های کلسیم می‌تواند منجر به سنگ کلیه، یبوست، کلسیفیکاسیون عروق و اختلال در جذب آهن و روی شود. مصرف بیش از ۲۵۰۰ میلی‌گرم در روز توصیه نمی‌شود."
    },
    {
      question: "آیا کلسیم با داروهای دیگر تداخل دارد؟",
      answer: "بله، کلسیم می‌تواند جذب برخی داروها مانند آنتی‌بیوتیک‌های تتراسایکلین، لووتیروکسین و بیسفسفونات‌ها را مختل کند. بهتر است کلسیم را با فاصله ۲ ساعت از این داروها مصرف کنید."
    }
  ];

  const relatedArticles = [
    {
      title: "فسفر: نقش‌های حیاتی، جذب و کمبود",
      description: "فسفر دومین ماده معدنی فراوان بدن و شریک اصلی کلسیم در سلامت استخوان است.",
      image: phosphorusImage,
      link: "/articles/phosphorus-supplement",
      category: "تغذیه"
    },
    {
      title: "منیزیم: عنصر حیاتی برای سلامت",
      description: "منیزیم در بیش از ۳۰۰ واکنش آنزیمی بدن نقش دارد و برای متابولیسم کلسیم ضروری است.",
      image: magnesiumImage,
      link: "/articles/magnesium-supplement",
      category: "تغذیه"
    },
    {
      title: "آهن: نقش‌ها و کمبود",
      description: "آهن برای حمل اکسیژن در خون و عملکرد صحیح سلول‌ها ضروری است.",
      image: ironImage,
      link: "/articles/iron-supplement",
      category: "تغذیه"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="کلسیم (Calcium): نقش‌های حیاتی، جذب و مکمل‌یاری | نوید زندگی"
        description="راهنمای کامل کلسیم شامل نقش در سلامت استخوان و دندان، عملکرد عصبی-عضلانی، لخته شدن خون، علائم کمبود و زیادی و اهمیت پایش درمانی"
        keywords="کلسیم, مکمل کلسیم, پوکی استخوان, هیپوکلسمی, هایپرکلسمی, سلامت استخوان, ویتامین D"
        canonical="https://navidzendegi.com/articles/calcium-supplement"
        ogType="article"
        publishedTime="2024-12-15"
        modifiedTime="2024-12-15"
      />
      <ArticleSchema
        title="کلسیم (Calcium): عنصر حیاتی، نقش‌ها، جذب و اهمیت پایش درمانی"
        description="راهنمای کامل کلسیم شامل نقش در سلامت استخوان، عملکرد عصبی-عضلانی، لخته شدن خون و اهمیت پایش درمانی"
        publishedTime="2024-12-15"
        modifiedTime="2024-12-15"
        image={calciumImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            کلسیم (Calcium): عنصر حیاتی، نقش‌ها، جذب و اهمیت پایش درمانی
          </h1>

          <img 
            src={calciumImage} 
            alt="کلسیم و سلامت استخوان" 
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="lead text-xl mb-6">
              <strong>کلسیم (Ca)</strong> فراوان‌ترین ماده معدنی در بدن انسان است. این عنصر نه تنها یک جزء ساختاری حیاتی است، بلکه یک سیگنال‌دهنده مهم سلولی محسوب می‌شود که در بسیاری از فرآیندهای حیاتی بدن نقش دارد. تقریباً <strong>۹۹ درصد</strong> کل کلسیم بدن در <strong>استخوان‌ها و دندان‌ها</strong> ذخیره شده است، در حالی که ۱ درصد باقیمانده در خون، عضلات و مایعات دیگر بدن، عملکردهای متابولیک کلیدی را انجام می‌دهد.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 rounded-lg mb-6">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                ⚠️ هشدار: مصرف خودسرانه مکمل‌های کلسیم بدون مشورت پزشک توصیه نمی‌شود. دوز بالای کلسیم می‌تواند منجر به سنگ کلیه و عوارض قلبی شود.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">۱. نقش‌های فیزیولوژیک کلیدی کلسیم</h2>
            
            <p>نقش‌های کلسیم فراتر از استحکام استخوان‌ها است و شامل فرآیندهای حیاتی زیر می‌شود:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">الف) سلامت استخوان و دندان (نقش ساختاری)</h3>
            <p>
              کلسیم به همراه <a href="/articles/phosphorus-supplement" className="text-primary hover:underline">فسفر</a>، بخش اصلی <strong>هیدروکسی آپاتیت</strong> (ماده معدنی سخت استخوان) را تشکیل می‌دهد. استخوان به عنوان یک مخزن بزرگ کلسیم عمل می‌کند؛ بدن کلسیم را از استخوان‌ها می‌گیرد یا به آن‌ها برمی‌گرداند تا سطح کلسیم خون را ثابت نگه دارد.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">ب) عملکرد عصبی و عضلانی (نقش عملکردی)</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>انقباض عضلانی:</strong> کلسیم یک محرک ضروری برای انقباض تمام سلول‌های عضلانی، از جمله عضله قلب، است.</li>
              <li><strong>انتقال پیام عصبی:</strong> آزاد شدن کلسیم در پایانه‌های عصبی، آزادسازی پیام‌رسان‌های عصبی (نوروترانسمیترها) را تنظیم می‌کند و در نتیجه، انتقال پیام‌های عصبی را امکان‌پذیر می‌سازد.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">ج) لخته شدن خون</h3>
            <p>
              کلسیم (Ca²⁺) یک فاکتور ضروری (فاکتور IV) در آبشار انعقادی خون است و برای فعال‌سازی چندین مرحله در فرآیند تشکیل لخته مورد نیاز است. برای اطلاعات بیشتر درباره داروهای ضد انعقاد، مقاله <a href="/articles/warfarin" className="text-primary hover:underline">وارفارین</a> را مطالعه کنید.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">۲. تنظیم سطح کلسیم و جذب</h2>
            
            <p>
              سطح کلسیم خون (Serum Calcium) توسط سیستم پیچیده‌ای از هورمون‌ها به دقت تنظیم می‌شود، زیرا نوسانات شدید می‌تواند خطرناک باشد:
            </p>

            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>هورمون پاراتیروئید (PTH):</strong> در صورت پایین آمدن سطح کلسیم خون، PTH آزاد می‌شود. این هورمون باعث آزادسازی کلسیم از استخوان‌ها، افزایش جذب کلسیم در کلیه و تحریک ساخت ویتامین D فعال می‌شود.</li>
              <li><strong>ویتامین D فعال:</strong> این ویتامین (کلسیتریول) به طور قابل توجهی <strong>جذب کلسیم از روده کوچک</strong> را افزایش می‌دهد.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">۳. نیاز روزانه و کمبود کلسیم</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">دوزهای توصیه شده (RDA)</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>بزرگسالان (۱۹ تا ۵۰ سال):</strong> ۱۰۰۰ میلی‌گرم در روز</li>
              <li><strong>سالمندان (زنان بالای ۵۱ و مردان بالای ۷۰ سال):</strong> ۱۲۰۰ میلی‌گرم در روز</li>
              <li><strong>زنان باردار و شیرده:</strong> ۱۰۰۰ میلی‌گرم در روز</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">کمبود کلسیم (هیپوکلسمی)</h3>
            <p>کمبود مزمن کلسیم در رژیم غذایی می‌تواند به موارد زیر منجر شود:</p>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>استئوپنی و استئوپروز (پوکی استخوان):</strong> کاهش تراکم استخوان به دلیل برداشت مداوم کلسیم از ذخایر استخوانی برای حفظ سطح کلسیم خون.</li>
              <li><strong>کاهش رشد:</strong> در کودکان، کمبود می‌تواند مانع از رشد کامل اسکلتی شود.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">۴. کلسیم درمانی و اهمیت پایش در منزل تهران</h2>
            
            <p>
              مصرف مکمل‌های کلسیم (به اشکال کربنات یا سیترات) معمولاً برای افرادی که از رژیم غذایی خود به اندازه کافی کلسیم دریافت نمی‌کنند، توصیه می‌شود.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">اهمیت بالینی پایش</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>هایپرکلسمی (زیادی کلسیم):</strong> اگرچه مصرف بیش از حد کلسیم از طریق غذا نادر است، اما دوزهای بسیار بالای مکمل‌ها می‌تواند منجر به هایپرکلسمی شود که عوارضی مانند <strong>سنگ کلیه، یبوست و اختلال در عملکرد قلبی</strong> دارد.</li>
              <li><strong>تداخلات دارویی:</strong> کلسیم می‌تواند جذب برخی داروها (مانند آنتی‌بیوتیک‌های تتراسایکلین و لووتیروکسین) را مختل کند.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">نقش ویزیت پزشک در منزل تهران</h3>
            <p>
              درمان و پایش بیماران با مشکلات متابولیسم کلسیم به دلیل شرایط پیچیده زیر، نیازمند نظارت دقیق است:
            </p>
            <ol className="list-decimal pr-6 mb-4 space-y-2">
              <li><strong>بیماری‌های مزمن:</strong> بیماران با <a href="/services/internal" className="text-primary hover:underline">نارسایی کلیوی</a> (که متابولیسم ویتامین D و فسفر را تحت تأثیر قرار می‌دهد) یا بیماری‌های غدد درون‌ریز، نیازمند تنظیم دوز دقیق کلسیم و ویتامین D هستند.</li>
              <li><strong>درمان‌های تزریقی:</strong> در موارد کمبود شدید کلسیم (هیپوکلسمی شدید)، ممکن است نیاز به <strong>تزریق وریدی کلسیم</strong> باشد. این اقدام باید تحت نظارت و <a href="/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</a> انجام شود تا از عوارض جدی قلبی جلوگیری شود.</li>
              <li><strong>پایش آزمایشگاهی:</strong> <a href="/services/laboratory" className="text-primary hover:underline">انجام نمونه‌گیری خون در منزل</a> برای اندازه‌گیری سطح کلسیم، ویتامین D و PTH و تنظیم دقیق رژیم مکمل‌یاری.</li>
            </ol>

            <h3 className="text-lg font-semibold mt-6 mb-3">منابع (References)</h3>
            <ul className="list-disc pr-6 mb-4 space-y-1 text-sm text-muted-foreground">
              <li>[1] Calcium: Fact Sheet for Health Professionals. NIH (National Institutes of Health)/Office of Dietary Supplements.</li>
              <li>[2] Calcium: a versatile signalling molecule. The Lancet.</li>
              <li>[3] Regulation of Calcium and Phosphate Metabolism. The New England Journal of Medicine (NEJM) Review.</li>
              <li>[4] Hypercalcemia: Mechanisms, Manifestations, and Management. Mayo Clinic Proceedings.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-3">نیاز به مشاوره پزشکی دارید؟</h3>
            <p className="mb-4">
              برای بررسی سطح کلسیم خون، تنظیم دوز مکمل‌ها یا درمان در منزل با متخصصین ما تماس بگیرید.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              تماس: ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </div>
        </article>

        <div className="mt-12">
          <FAQSection faqs={faqs} />
        </div>

        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default CalciumSupplementPage;
