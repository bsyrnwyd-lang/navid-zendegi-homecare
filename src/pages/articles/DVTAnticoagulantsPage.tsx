import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";

import legSwellingImage from "@/assets/leg-swelling-article.jpg";
import nursingImage from "@/assets/nurse-home-visit.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";

const DVTAnticoagulantsPage = () => {
  const faqs = [
    {
      question: "انوکساپارین بهتر است یا هپارین معمولی؟",
      answer: "برای اکثر بیماران مبتلا به DVT، انوکساپارین (LMWH) به دلیل سهولت تزریق زیرجلدی، عدم نیاز به پایش آزمایشگاهی روزانه و امکان درمان در منزل، داروی ارجح است. اما در بیماران با نارسایی شدید کلیوی یا نیاز به جراحی فوری، هپارین غیرکسر شده ترجیح داده می‌شود."
    },
    {
      question: "آیا می‌توان تزریق انوکساپارین را در منزل انجام داد؟",
      answer: "بله، یکی از مزایای اصلی انوکساپارین امکان تزریق زیرجلدی در منزل است. این تزریق می‌تواند توسط پرستار در منزل یا پس از آموزش، توسط خود بیمار یا مراقب انجام شود. این موضوع نیاز به بستری طولانی‌مدت را کاهش می‌دهد."
    },
    {
      question: "عوارض خطرناک هپارین چیست؟",
      answer: "مهم‌ترین عوارض شامل خون‌ریزی (از خفیف تا شدید) و ترومبوسیتوپنی ناشی از هپارین (HIT) است. HIT یک واکنش ایمنی است که منجر به کاهش پلاکت‌ها می‌شود و خطر آن با هپارین غیرکسر شده بیشتر از انوکساپارین است."
    },
    {
      question: "چرا در نارسایی کلیوی انوکساپارین توصیه نمی‌شود؟",
      answer: "انوکساپارین عمدتاً از طریق کلیه‌ها دفع می‌شود. در بیماران با نارسایی شدید کلیوی (CrCl < 30 mL/min)، دارو در بدن تجمع یافته و خطر خون‌ریزی افزایش می‌یابد. در این موارد، هپارین غیرکسر شده که دفع غیرکلیوی دارد، ایمن‌تر است."
    },
    {
      question: "مدت زمان درمان ضدانعقادی برای DVT چقدر است؟",
      answer: "مدت درمان بستگی به علت DVT دارد. برای DVT با علت قابل شناسایی (مانند جراحی)، معمولاً ۳ ماه کافی است. برای DVT بدون علت مشخص یا عود کننده، ممکن است درمان طولانی‌مدت یا حتی مادام‌العمر لازم باشد."
    }
  ];

  const relatedArticles = [
    {
      title: "تورم پا: علل و روش‌های درمان",
      description: "بررسی علل تورم پا از جمله DVT و نارسایی قلبی",
      image: legSwellingImage,
      link: "/articles/leg-swelling",
      category: "سلامت عمومی"
    },
    {
      title: "خدمات پرستاری در منزل",
      description: "تزریقات تخصصی و مراقبت پرستاری در منزل",
      image: nursingImage,
      link: "/services/nursing",
      category: "خدمات"
    },
    {
      title: "وارفارین: راهنمای مصرف و عوارض",
      description: "اطلاعات کامل درباره داروی ضدانعقاد وارفارین",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "دارو"
    }
  ];

  const breadcrumbItems = [
    { name: "مقالات پزشکی", url: "/articles" },
    { name: "مقایسه هپارین و انوکساپارین", url: "/articles/dvt-anticoagulants" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="مقایسه هپارین و انوکساپارین در درمان DVT | ویزیت پزشک در منزل تهران"
        description="مقایسه فارماکولوژیک هپارین غیرکسر شده (UFH) و انوکساپارین (LMWH) در درمان ترومبوز ورید عمقی: مکانیسم اثر، ایمنی و کاربرد در خدمات پزشکی منزل"
        keywords="هپارین, انوکساپارین, کلکسان, LMWH, UFH, ترومبوز ورید عمقی, DVT, ضدانعقاد, تزریق در منزل"
        ogType="article"
        publishedTime="2024-12-08"
        modifiedTime="2024-12-08"
      />
      <ArticleSchema
        title="مقایسه هپارین و انوکساپارین در درمان DVT"
        description="مقایسه فارماکولوژیک هپارین غیرکسر شده و انوکساپارین در درمان ترومبوز ورید عمقی"
        publishedTime="2024-12-08"
        modifiedTime="2024-12-08"
        image="/assets/dvt-anticoagulant-article.jpg"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            مقایسه هپارین غیرکسر شده (UFH) و انوکساپارین (LMWH): راهبردهای ضدانعقادی در درمان ترومبوز ورید عمقی (DVT)
          </h1>

          <div className="bg-primary/5 border-r-4 border-primary p-4 rounded-lg mb-8">
            <p className="text-muted-foreground leading-relaxed m-0">
              <strong>هشدار مهم:</strong> تجویز داروهای ضدانعقاد باید تحت نظر پزشک متخصص و با پایش دقیق انجام شود. هرگز بدون مشورت پزشکی اقدام به مصرف یا تغییر دوز این داروها نکنید.
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            ترومبوز ورید عمقی (DVT) یک وضعیت حاد پزشکی شایع است که به دلیل خطر بالای آمبولی ریوی (Pulmonary Embolism) و عوارض مزمن، نیازمند شروع سریع و مؤثر درمان‌های ضدانعقادی (Anticoagulant) است. هپارین غیرکسر شده (UFH) و انوکساپارین (Enoxaparin) یا هپارین با وزن مولکولی پایین (LMWH)، دو داروی خط اول برای مدیریت حاد DVT هستند.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مکانیسم اثر و تفاوت‌های فارماکولوژیک</h2>
          
          <p className="text-muted-foreground leading-relaxed">
            هر دو دارو با تقویت فعالیت آنتی‌ترومبین III، مانع تشکیل و گسترش لخته می‌شوند. تفاوت‌های کلیدی در فارماکولوژی، ایمنی و سهولت استفاده، انتخاب آن‌ها را در پروتکل‌های درمانی و <Link to="/services/nursing" className="text-primary hover:underline">خدمات پرستاری در منزل</Link> تعیین می‌کند.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">هپارین غیرکسر شده (UFH)</h3>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li><strong>وزن مولکولی:</strong> بالا و متغیر (۱۲٬۰۰۰ تا ۱۵٬۰۰۰ دالتون)</li>
            <li><strong>مکانیسم اصلی:</strong> مهار فاکتورهای Xa و IIa (ترومبین) به‌طور مساوی</li>
            <li><strong>نیمه‌عمر:</strong> کوتاه (حدود ۳۰ تا ۹۰ دقیقه)</li>
            <li><strong>پایش آزمایشگاهی:</strong> ضروری (aPTT روزانه)</li>
            <li><strong>دفع:</strong> عمدتاً از طریق سیستم Reticuloendothelial (غیر کلیوی)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">انوکساپارین (LMWH - کلکسان)</h3>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li><strong>وزن مولکولی:</strong> پایین و ثابت (۴٬۰۰۰ تا ۵٬۰۰۰ دالتون)</li>
            <li><strong>مکانیسم اصلی:</strong> مهار انتخابی فاکتور Xa (میل بیشتر به Xa)</li>
            <li><strong>نیمه‌عمر:</strong> طولانی‌تر (حدود ۴ تا ۶ ساعت)</li>
            <li><strong>پایش آزمایشگاهی:</strong> معمولاً ضروری نیست (فقط در موارد خاص)</li>
            <li><strong>دفع:</strong> عمدتاً کلیوی</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مقایسه کاربرد بالینی و پروفایل ایمنی</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">اثربخشی و کارآیی بالینی</h3>
          <p className="text-muted-foreground leading-relaxed">
            مطالعات بالینی متعدد نشان داده‌اند که اثربخشی LMWH در پیشگیری از عوارض DVT (مانند گسترش لخته، آمبولی ریوی و عود) مشابه یا حتی بهتر از UFH است. این بهبود نسبی به دلیل فراهمی زیستی بالاتر و پاسخ ضدانعقادی پایدارتر LMWH است.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ملاحظات ایمنی</h3>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li><strong>ترومبوسیتوپنی ناشی از هپارین (HIT):</strong> UFH خطر بالاتری برای ایجاد این عارضه ایمنی جدی دارد. خطر HIT با استفاده از LMWH به طور قابل ملاحظه‌ای کمتر است.</li>
            <li><strong>خطر خون‌ریزی:</strong> هر دو دارو خطر خون‌ریزی دارند. با این حال، به دلیل اتصال کمتر LMWH به سلول‌های اندوتلیال، دوز آن قابل پیش‌بینی‌تر بوده و خطر خون‌ریزی عمده مشابه یا کمی کمتر گزارش شده است.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">ترجیح بالینی و کاربرد در خدمات پزشکی در منزل</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">چه زمانی انوکساپارین ترجیح دارد؟</h3>
          <p className="text-muted-foreground leading-relaxed">
            به دلیل نیمه‌عمر طولانی‌تر، دوز ثابت بر اساس وزن و عدم نیاز به پایش روزانه aPTT، انوکساپارین داروی ارجح برای درمان DVT در شرایط سرپایی و خانگی است. این موضوع برای <Link to="/" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</Link> که نیاز به <Link to="/services/nursing" className="text-primary hover:underline">تزریقات تخصصی و مراقبت پرستاری در منزل</Link> وجود دارد، مزیت بزرگی محسوب می‌شود.
          </p>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li>سهولت تزریق زیرجلدی توسط بیمار یا پرستار در منزل</li>
            <li>کاهش هزینه‌های بستری طولانی‌مدت</li>
            <li>امکان ادامه درمان در محیط آشنا و راحت خانه</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">چه زمانی هپارین غیرکسر شده ترجیح دارد؟</h3>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li><strong>نارسایی کلیوی شدید:</strong> در بیماران با CrCl کمتر از ۳۰ میلی‌لیتر در دقیقه، نیمه‌عمر انوکساپارین طولانی شده و خطر تجمع و خون‌ریزی افزایش می‌یابد. UFH به دلیل دفع غیرکلیوی ارجح است.</li>
            <li><strong>نیاز به انعطاف درمانی:</strong> در بیمارانی که احتمالاً به زودی نیاز به جراحی یا مداخلات تهاجمی دارند، UFH به دلیل نیمه‌عمر بسیار کوتاه و امکان معکوس کردن سریع اثر آن با پروتامین سولفات ترجیح داده می‌شود.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نتیجه‌گیری</h2>
          <p className="text-muted-foreground leading-relaxed">
            LMWH (انوکساپارین) به دلیل ویژگی‌های فارماکولوژیک برتر برای مدیریت DVT در محیط سرپایی، به عنوان استاندارد مراقبت پذیرفته شده است. در صورت نیاز به تشخیص، درمان اولیه DVT و پیگیری تزریقات ضدانعقادی در منزل، دریافت خدمات تخصصی از طریق <Link to="/" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</Link> یک راهکار ایمن و کارآمد است.
          </p>

          {/* CTA Section */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-3">نیاز به تزریقات ضدانعقادی در منزل دارید؟</h3>
            <p className="text-muted-foreground mb-4">
              تیم پرستاری مجرب ما آماده ارائه خدمات تزریق انوکساپارین و سایر داروهای ضدانعقادی در منزل شما هستند.
            </p>
            <a
              href="tel:09386117912"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-8">
            <p className="text-amber-800 dark:text-amber-200 text-sm m-0">
              <strong>هشدار:</strong> اطلاعات این مقاله صرفاً جنبه آموزشی دارد. تشخیص و درمان DVT باید توسط پزشک متخصص انجام شود. هرگز خودسرانه اقدام به مصرف دارو نکنید.
            </p>
          </div>
        </article>

        <FAQSection faqs={faqs} />

        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default DVTAnticoagulantsPage;
