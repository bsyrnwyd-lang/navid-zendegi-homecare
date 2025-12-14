import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleSchema from "@/components/ArticleSchema";

import phosphorusImage from "@/assets/phosphorus-supplement-article.jpg";
import magnesiumImage from "@/assets/magnesium-supplement-article.jpg";
import ironImage from "@/assets/iron-supplement-article.jpg";
import zincImage from "@/assets/zinc-supplement-article.jpg";

const PhosphorusSupplementPage = () => {
  const faqs = [
    {
      question: "فسفر چیست و چه نقشی در بدن دارد؟",
      answer: "فسفر دومین ماده معدنی فراوان در بدن است که نقش کلیدی در سلامت استخوان‌ها و دندان‌ها، تولید انرژی ATP، ساختار DNA و RNA، و تشکیل غشای سلولی دارد."
    },
    {
      question: "آیا کمبود فسفر شایع است؟",
      answer: "خیر، کمبود واقعی فسفر (هیپوفسفاتمی) نادر است و معمولاً ناشی از بیماری‌های زمینه‌ای مانند الکلیسم، دیابت کنترل‌نشده یا سوء تغذیه شدید می‌باشد."
    },
    {
      question: "زیادی فسفر چه مشکلاتی ایجاد می‌کند؟",
      answer: "هایپرفسفاتمی در بیماران کلیوی شایع‌تر است و می‌تواند باعث تخریب استخوان، کلسیفیکاسیون عروق و بیماری‌های قلبی-عروقی شود."
    },
    {
      question: "میزان توصیه‌شده مصرف فسفر برای بزرگسالان چقدر است؟",
      answer: "میزان توصیه‌شده مصرف روزانه (RDA) برای بزرگسالان ۷۰۰ میلی‌گرم در روز است."
    },
    {
      question: "بهترین منابع غذایی فسفر کدامند؟",
      answer: "منابع غنی فسفر شامل گوشت، مرغ، ماهی، تخم‌مرغ، لبنیات، حبوبات، آجیل و غلات کامل می‌باشند."
    }
  ];

  const relatedArticles = [
    {
      title: "منیزیم: عنصر حیاتی برای سلامت قلب و عضلات",
      description: "نقش منیزیم در سلامت قلب، عملکرد عصب و عضله و کاهش اضطراب",
      image: magnesiumImage,
      link: "/articles/magnesium-supplement",
      category: "تغذیه"
    },
    {
      title: "آهن: نقش‌ها، کمبود و میزان مصرف توصیه‌شده",
      description: "راهنمای کامل آهن و اهمیت آن در حمل اکسیژن و پیشگیری از کم‌خونی",
      image: ironImage,
      link: "/articles/iron-supplement",
      category: "تغذیه"
    },
    {
      title: "روی (Zinc): نقش‌ها و اهمیت مکمل‌یاری",
      description: "تأثیر روی بر سیستم ایمنی، ترمیم زخم و سلامت پوست",
      image: zincImage,
      link: "/articles/zinc-supplement",
      category: "تغذیه"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="فسفر (Phosphorus): نقش‌های حیاتی، جذب و کمبود | نوید زندگی"
        description="راهنمای کامل فسفر شامل نقش در سلامت استخوان، تولید انرژی ATP، ساختار DNA، کمبود و زیادی فسفر و ملاحظات پزشکی برای بیماران کلیوی"
        keywords="فسفر، مکمل فسفر، سلامت استخوان، ATP، DNA، هیپوفسفاتمی، هایپرفسفاتمی، بیماری کلیوی"
        canonical="https://navidzendegi.com/articles/phosphorus-supplement"
        ogType="article"
        publishedTime="2024-12-14"
        modifiedTime="2024-12-14"
      />
      
      <ArticleSchema
        title="فسفر (Phosphorus): نقش‌های حیاتی، جذب و کمبود"
        description="راهنمای کامل فسفر شامل نقش در سلامت استخوان، تولید انرژی ATP و ملاحظات پزشکی"
        publishedTime="2024-12-14"
        modifiedTime="2024-12-14"
        image={phosphorusImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation
          items={[
            { name: "خانه", url: "/" },
            { name: "مقالات", url: "/articles" },
            { name: "فسفر: نقش‌های حیاتی", url: "/articles/phosphorus-supplement" }
          ]}
        />

        <article className="prose prose-lg max-w-none mt-8 text-right" dir="rtl">
          <img 
            src={phosphorusImage} 
            alt="فسفر و نقش آن در سلامت استخوان و تولید انرژی" 
            className="w-full rounded-lg mb-8"
          />

          <h1 className="text-3xl font-bold text-foreground mb-6">
            فسفر (Phosphorus): نقش‌های حیاتی، جذب، کمبود و ملاحظات پزشکی
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            فسفر (P)، دومین ماده معدنی فراوان در بدن پس از کلسیم است. این عنصر حیاتی در تقریباً تمام سلول‌های بدن یافت می‌شود و نقش‌های ساختاری و عملکردی متعددی دارد. حدود ۸۵ درصد از فسفر بدن در استخوان‌ها و دندان‌ها به صورت هیدروکسی آپاتیت (Hydroxyapatite) ذخیره شده است.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۱. نقش‌های ساختاری و عملکردی فسفر</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            فسفر یک جزء کلیدی در مولکول‌های اساسی حیات است:
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">الف) سلامت استخوان و دندان</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            فسفر با کلسیم پیوند خورده و ماتریکس سختی را تشکیل می‌دهد که ساختار و استحکام استخوان‌ها و دندان‌ها را تأمین می‌کند. تعادل دقیق بین فسفر و کلسیم برای حفظ سلامت اسکلتی ضروری است.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ب) تولید انرژی و متابولیسم</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li><strong>آدنوزین تری‌فسفات (ATP):</strong> فسفر جزء کلیدی مولکول ATP (واحد اصلی انرژی سلولی) است. شکستن پیوندهای فسفات در ATP، انرژی مورد نیاز برای تمام فرآیندهای بیولوژیکی را فراهم می‌کند.</li>
            <li><strong>فسفوریلاسیون:</strong> این فرآیند (اضافه کردن گروه فسفات) در فعال‌سازی و غیرفعال‌سازی بسیاری از آنزیم‌ها، پروتئین‌ها و مسیرهای سیگنال‌دهی حیاتی در متابولیسم قندها، چربی‌ها و پروتئین‌ها نقش دارد.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ج) جزء ساختاری مواد ژنتیکی</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            فسفر جزء ستون فقرات فسفات-قندی مولکول‌های DNA و RNA است که کدهای وراثتی را حمل می‌کنند.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">د) غشای سلولی</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            فسفولیپیدها (Phospholipids): فسفر جزء اصلی تشکیل‌دهنده غشاهای سلولی است و ساختار دولایه لیپیدی غشا را فراهم می‌کند که نقش حیاتی در تنظیم عبور مواد از سلول دارد.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ه) تنظیم pH</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            فسفر به عنوان یک سیستم بافری (بافر فسفاتی) به حفظ تعادل اسید و باز (pH) در خون و مایعات داخلی بدن کمک می‌کند.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۲. منابع غذایی، جذب و کمبود</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">منابع غذایی</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            فسفر به طور گسترده‌ای در رژیم غذایی یافت می‌شود و کمبود آن در افراد سالم نادر است:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li><strong>منابع پروتئینی:</strong> گوشت قرمز، مرغ، ماهی، تخم‌مرغ و لبنیات (شیر، ماست، پنیر)</li>
            <li>حبوبات، آجیل و غلات کامل</li>
            <li><strong>افزودنی‌های غذایی:</strong> فسفات‌ها به عنوان افزودنی در بسیاری از غذاهای فرآوری شده و نوشابه‌ها استفاده می‌شوند</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">جذب و دفع</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            فسفر عمدتاً از طریق روده کوچک جذب شده و میزان جذب آن توسط ویتامین D تنظیم می‌شود. کلیه‌ها با تنظیم دفع فسفر از طریق ادرار، نقش اصلی را در حفظ تعادل آن در بدن ایفا می‌کنند.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">کمبود فسفر (هیپوفسفاتمی)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            کمبود واقعی فسفر (Hypophosphatemia) نادر است و معمولاً ناشی از یک بیماری زمینه‌ای است:
          </p>
          
          <p className="text-muted-foreground font-semibold mb-2">علل:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            <li>الکلیسم شدید</li>
            <li>دیابت کنترل‌نشده (به‌ویژه در شروع درمان با انسولین)</li>
            <li>سوء تغذیه شدید</li>
            <li>سوختگی‌های وسیع</li>
            <li>مصرف برخی داروها (مانند آنتی‌اسیدهای حاوی آلومینیوم که جذب فسفر را مختل می‌کنند)</li>
          </ul>

          <p className="text-muted-foreground font-semibold mb-2">علائم:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            <li>ضعف عضلانی</li>
            <li>خستگی شدید</li>
            <li>درد استخوان</li>
            <li>ناهنجاری‌های تنفسی</li>
            <li>گیجی</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۳. مدیریت پزشکی و ملاحظات مهم</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">دوزهای توصیه‌شده (RDA)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>بزرگسالان:</strong> ۷۰۰ میلی‌گرم در روز
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">فسفر و بیماری کلیوی</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            مهم‌ترین نگرانی بالینی در مورد فسفر، سَمّیت (زیادی) آن است:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li><strong>هایپرفسفاتمی:</strong> در بیماران مبتلا به نارسایی مزمن کلیوی (CKD)، کلیه‌ها قادر به دفع مؤثر فسفر اضافی نیستند. این وضعیت منجر به سطوح بالای فسفر خون (هایپرفسفاتمی) می‌شود.</li>
            <li><strong>عوارض:</strong> هایپرفسفاتمی با گذشت زمان می‌تواند باعث تخریب استخوان، کلسیفیکاسیون عروق خونی و بیماری‌های قلبی-عروقی شود.</li>
            <li><strong>درمان در نارسایی کلیوی:</strong> درمان شامل محدودیت شدید فسفر در رژیم غذایی و تجویز بافرهای فسفاتی (Phosphate Binders) برای کاهش جذب آن از دستگاه گوارش است.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">اهمیت ویزیت پزشک در منزل تهران</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            درمان کمبود شدید فسفر (به‌ویژه در بیماران بستری) معمولاً نیاز به تجویز وریدی دارد. با این حال، در مدیریت بیماری‌های مزمن:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li><strong>پایش الکترولیت‌ها:</strong> برای بیمارانی که در منزل تحت مراقبت هستند (مانند بیماران کلیوی، دیابتی یا افراد مسن)، نظارت منظم بر سطح فسفر و کلسیم در خون حیاتی است.</li>
            <li><strong>تنظیم رژیم و دارو:</strong> <a href="/services/internal" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</a> امکان تنظیم دقیق داروهای پیوند دهنده فسفات و ارائه مشاوره تخصصی در مورد محدودیت‌های غذایی حاوی فسفر را در محیط بیمار فراهم می‌کند تا از عوارض جدی هایپرفسفاتمی جلوگیری شود.</li>
          </ul>

          <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 my-6 rounded">
            <p className="text-yellow-800 font-semibold">⚠️ هشدار مهم</p>
            <p className="text-yellow-700 mt-2">
              مصرف خودسرانه مکمل‌های فسفر یا تغییر در رژیم غذایی بدون مشورت پزشک، به‌ویژه در بیماران کلیوی، می‌تواند خطرناک باشد. همیشه قبل از مصرف هرگونه مکمل با پزشک متخصص مشورت کنید.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">منابع (References)</h3>
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm">
            <li>Phosphorus: Fact Sheet for Health Professionals. NIH (National Institutes of Health)/Office of Dietary Supplements.</li>
            <li>Role of phosphate in health and disease. The American Journal of Clinical Nutrition.</li>
            <li>Hypophosphatemia: An Overview. Mayo Clinic Proceedings.</li>
            <li>Hyperphosphatemia in Chronic Kidney Disease. Kidney International.</li>
          </ol>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-3">برای مشاوره تخصصی تماس بگیرید</h3>
            <p className="text-muted-foreground mb-4">
              جهت بررسی سطح فسفر، تشخیص کمبود یا زیادی الکترولیت‌ها و دریافت مشاوره تغذیه‌ای تخصصی با پزشکان ما تماس بگیرید:
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              📞 تماس: 09386117912
            </a>
          </div>
        </article>
      </div>

      <div className="container mx-auto max-w-4xl px-4">
        <FAQSection faqs={faqs} />
      </div>

      <div className="container mx-auto max-w-4xl px-4 pb-8">
        <RelatedArticles articles={relatedArticles} />
      </div>
    </ArticleLayout>
  );
};

export default PhosphorusSupplementPage;
