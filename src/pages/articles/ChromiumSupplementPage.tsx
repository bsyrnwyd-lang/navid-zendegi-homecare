import { Phone, AlertTriangle } from "lucide-react";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LazyImage from "@/components/LazyImage";
import { Link } from "react-router-dom";

import chromiumImage from "@/assets/chromium-supplement-article.jpg";
import diabetesHeartImage from "@/assets/diabetes-heart-connection.jpg";
import dopplerDVTImage from "@/assets/doppler-ultrasound-dvt.jpg";
import bloodPressureReadingsImage from "@/assets/blood-pressure-readings.jpg";

const ChromiumSupplementPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "مکمل کروم", url: "/articles/chromium-supplement" },
  ];

  const faqs = [
    {
      question: "کروم پیکولینات برای چه کسانی مفید است؟",
      answer: "افراد مبتلا به دیابت نوع ۲، پیش‌دیابت، مقاومت به انسولین، سندرم تخمدان پلی‌کیستیک (PCOS) و افرادی با اضافه وزن و میل شدید به شیرینی از مکمل کروم بهره‌مند می‌شوند."
    },
    {
      question: "دوز مناسب مکمل کروم چقدر است؟",
      answer: "دوز معمول بین ۲۰۰ تا ۱۰۰۰ میکروگرم در روز متغیر است، اما تعیین دوز دقیق باید توسط پزشک و بر اساس آزمایش خون انجام شود."
    },
    {
      question: "آیا مصرف کروم عوارض جانبی دارد؟",
      answer: "در دوزهای توصیه‌شده عوارض جدی ندارد، اما مصرف بیش از حد می‌تواند به کلیه‌ها آسیب بزند. سردرد، بی‌خوابی و ناراحتی گوارشی از عوارض نادر هستند."
    },
    {
      question: "آیا کروم جایگزین داروهای دیابت می‌شود؟",
      answer: "خیر، کروم یک مکمل کمکی است و هرگز نباید جایگزین داروهای اصلی دیابت شود. قطع داروها بدون نظر پزشک خطرناک است."
    },
    {
      question: "چه آزمایش‌هایی قبل از مصرف کروم لازم است؟",
      answer: "آزمایش قند خون ناشتا (FBS)، هموگلوبین A1C و فاکتورهای کلیوی (کراتینین و GFR) قبل از شروع مصرف دوزهای بالای کروم توصیه می‌شود."
    },
  ];

  const relatedArticles = [
    {
      title: "دیابت و قلب؛ چرا بیماران دیابتی باید بیش از دیگران مراقب قلب خود باشند؟",
      description: "ارتباط دیابت و بیماری‌های قلبی، سکته قلبی خاموش و چک‌آپ قلبی در منزل",
      image: diabetesHeartImage,
      link: "/articles/diabetes-heart",
      category: "قلب و عروق",
    },
    {
      title: "تشخیص فوری لخته خون (DVT) با سونوگرافی داپلر در منزل",
      description: "علائم DVT، افراد در معرض خطر و مزایای سونوگرافی داپلر سیار",
      image: dopplerDVTImage,
      link: "/articles/doppler-dvt",
      category: "قلب و عروق",
    },
    {
      title: "راهنمای کنترل فشار خون با دستگاه‌های خانگی",
      description: "آموزش روش صحیح استفاده از فشارسنج و خدمات کالیبره در منزل",
      image: bloodPressureReadingsImage,
      link: "/articles/blood-pressure-readings",
      category: "قلب و عروق",
    },
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="مکمل کروم؛ کلید طلایی تنظیم انسولین و سوخت‌وساز | نوید زندگی"
        description="راهنمای جامع مکمل کروم پیکولینات: تاریخچه، مکانیسم اثر بر انسولین، ارتباط با قلب، هشدارها و خدمات آزمایش و پایش قلبی در منزل"
        keywords="قرص کروم برای لاغری, عوارض کروم پیکولینات, درمان مقاومت به انسولین, آزمایش قند خون در منزل, سونوگرافی داپلر, نوید زندگی"
        canonical="https://navidzendegi.com/articles/chromium-supplement"
        ogType="article"
      />
      <ArticleSchema
        title="مکمل کروم؛ کلید طلایی تنظیم سوخت‌وساز و انسولین"
        description="راهنمای جامع مکمل کروم پیکولینات: تاریخچه، عملکرد و پایش‌های قلبی"
        publishedTime="2025-02-19"
        modifiedTime="2025-02-19"
        image={chromiumImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4 leading-relaxed">
          مکمل کروم؛ کلید طلایی تنظیم سوخت‌وساز و انسولین (تاریخچه، عملکرد و پایش‌های قلبی)
        </h1>

        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
          <span>نویسنده: تیم تحریریه نوید زندگی</span>
          <span>تاریخ انتشار: ۱۴۰۴/۱۱/۳۰</span>
        </div>

        <Alert className="mb-8 border-destructive bg-destructive/10">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-destructive font-bold">هشدار مهم</AlertTitle>
          <AlertDescription className="text-destructive/90">
            اطلاعات این مقاله صرفاً جنبه آموزشی دارد. هرگز بدون مشورت پزشک اقدام به مصرف خودسرانه مکمل کروم در دوزهای بالا نکنید. خوددرمانی خطرناک است.
          </AlertDescription>
        </Alert>

        <LazyImage
          src={chromiumImage}
          alt="مکمل کروم پیکولینات و ارتباط آن با انسولین و قلب"
          className="w-full rounded-lg mb-8"
        />

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          در میان عناصر کمیابی که بدن ما برای بقا به آن‌ها نیاز دارد، کروم (Chromium) جایگاهی ویژه و استراتژیک دارد. این عنصر که اغلب با نام «فاکتور تحمل گلوکز» شناخته می‌شود، مانند یک پل ارتباطی عمل می‌کند که به انسولین اجازه می‌دهد قند را از خون گرفته و وارد سلول‌ها کند. مرکز خدمات پزشکی نوید زندگی با پایش‌های دقیق آزمایشگاهی و قلبی در منزل، به شما کمک می‌کند تا نقش این مکمل را در بهبود متابولیسم خود به درستی مدیریت کنید.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۱. تاریخچه: از رنگ‌سازی تا کشف در خون انسان</h2>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">کشف عنصر (۱۷۹۷)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          لوئی نیکولا ووکلن فرانسوی این عنصر را کشف کرد. به دلیل رنگ‌های متنوع ترکیباتش، نام آن را از واژه یونانی «Chroma» به معنای رنگ گرفتند.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">کشف نقش بیولوژیک (۱۹۵۹)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          تا اواسط قرن بیستم، کسی نمی‌دانست کروم برای بدن ضروری است. دانشمندان دریافتند که موش‌های دچار کمبود کروم، نمی‌توانند قند خون خود را کنترل کنند.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">تاییدیه رسمی (۱۹۸۰)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          سازمان‌های بهداشتی دنیا کروم را به عنوان یک عنصر معدنی ضروری برای انسان به رسمیت شناختند و فرم کروم پیکولینات به دلیل جذب بسیار بالا، به محبوب‌ترین فرم دارویی تبدیل شد.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۲. مکانیسم اثر: کروم چگونه به انسولین کمک می‌کند؟</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          کروم مستقیماً قند خون را پایین نمی‌آورد، بلکه کارایی انسولین را افزایش می‌دهد:
        </p>

        <ul className="list-disc pr-6 space-y-3 text-muted-foreground leading-relaxed mb-6">
          <li><strong className="text-foreground">فعال‌سازی گیرنده‌ها:</strong> کروم باعث می‌شود گیرنده‌های انسولین روی دیواره سلول‌ها حساس‌تر شوند.</li>
          <li><strong className="text-foreground">ورود گلوکز:</strong> با فعال شدن این گیرنده‌ها، «درهای سلول» باز شده و قند خون (گلوکز) به جای رسوب در رگ‌ها، وارد سلول شده و به انرژی تبدیل می‌شود.</li>
          <li><strong className="text-foreground">کنترل اشتها:</strong> کروم با تنظیم قند خون، میل شدید به شیرینی‌جات و «کاذب‌خواری» را کاهش می‌دهد.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۳. کروم و سلامت قلب (ارتباط تخصصی با خدمات نوید زندگی)</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          تنظیم قند خون توسط کروم، تأثیری مستقیم بر سلامت سیستم قلبی-عروقی دارد:
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">الف) پیشگیری از تنگی عروق (سونوگرافی داپلر در منزل)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          قند خون بالا باعث آسیب به دیواره داخلی رگ‌ها و ایجاد رسوب (پلاک) می‌شود. کروم با کنترل قند، از سفت شدن رگ‌ها جلوگیری می‌کند.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">خدمات ما:</strong> ما با انجام <Link to="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی داپلر در منزل</Link>، وضعیت رسوب در عروق گردنی و پا را بررسی می‌کنیم تا تأثیر مدیریت قند و مصرف مکمل‌ها بر باز بودن رگ‌ها را بسنجیم.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ب) نوسانات قند و ریتم قلب (هولتر قلب در منزل)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          افت یا خیز ناگهانی قند خون (دیس‌گلیسمی) یکی از عوامل اصلی تپش قلب و آریتمی است.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">خدمات ما:</strong> اگر با مصرف مکمل‌های متابولیک یا داروهای دیابت دچار تپش قلب می‌شوید، نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link> توسط تیم ما مشخص می‌کند که آیا این تپش ناشی از نوسانات قند است یا یک مسئله قلبی مستقل.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ج) فشار خون و چربی خون (هولتر فشار خون)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          کروم نقش مثبتی در کاهش کلسترول بد (LDL) دارد که خود عامل اصلی فشار خون بالاست.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">خدمات ما:</strong> پایش فشار خون با <Link to="/services/holter" className="text-primary hover:underline">هولتر ۲۴ ساعته در منزل</Link> به متخصص داخلی ما اجازه می‌دهد تا ببیند آیا بهبود متابولیسم ناشی از مصرف کروم و داروها، منجر به ثبات فشار خون شما شده است یا خیر.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۴. چه کسانی به مکمل کروم نیاز دارند؟</h2>

        <ul className="list-disc pr-6 space-y-3 text-muted-foreground leading-relaxed mb-6">
          <li>افراد مبتلا به دیابت نوع ۲ یا مقاومت به انسولین.</li>
          <li>خانم‌های مبتلا به سندرم تخمدان پلی‌کیستیک (PCOS).</li>
          <li>افرادی که دچار اضافه وزن شدید و میل مفرط به کربوهیدرات هستند.</li>
          <li>ورزشکارانی که به دنبال بهبود ترکیب بدنی (عضله‌سازی و چربی‌سوزی) هستند.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">۵. هشدارها و آزمایش‌های لازم</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          مصرف خودسرانه کروم در دوزهای بالا می‌تواند به کلیه‌ها آسیب بزند.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          <strong className="text-foreground">آزمایش در منزل:</strong> قبل از شروع مصرف دوزهای بالای کروم، تیم <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه نوید زندگی</Link> با حضور در منزل، سطح قند خون ناشتا (FBS)، هموگلوبین A1C و فاکتورهای کلیوی شما را چک می‌کند تا دوز مصرفی توسط <Link to="/services/specialist-visit" className="text-primary hover:underline">متخصص داخلی</Link> به دقت تنظیم شود.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">نتیجه‌گیری</h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          کروم یک ابزار کمکی قدرتمند برای مدیریت سوخت‌وساز بدن است، اما جایگزین داروهای اصلی دیابت یا اصلاح سبک زندگی نیست. مرکز نوید زندگی با نگاهی جامع، سلامت متابولیک شما را از طریق آزمایش خون، سونوگرافی و پایش‌های قلبی در منزل زیر نظر می‌گیرد تا اطمینان حاصل شود که مسیر سلامتی شما هموار و بی‌خطر است.
        </p>

        {/* CTA */}
        <section className="mt-10 p-6 bg-primary/10 rounded-lg text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">آزمایش قند خون و پایش قلبی در منزل</h3>
          <p className="text-muted-foreground mb-4">
            برای انجام آزمایش خون، سونوگرافی داپلر یا هولتر قلب در منزل با ما تماس بگیرید.
          </p>
          <a
            href="tel:09386117912"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            <Phone className="h-5 w-5" />
            تماس: ۰۹۳۸۶۱۱۷۹۱۲
          </a>
        </section>

        {/* References */}
        <div className="mt-10 pt-6 border-t border-border">
          <h3 className="text-lg font-bold text-foreground mb-3">منابع معتبر علمی</h3>
          <ul className="list-disc pr-6 space-y-1 text-sm text-muted-foreground">
            <li>National Institutes of Health (NIH): Chromium Fact Sheet for Health Professionals.</li>
            <li>Diabetes Care Journal: The role of chromium in insulin resistance.</li>
            <li>Harvard Health: Mineral Series: Chromium and Diabetes.</li>
            <li>WebMD: Chromium Picolinate: Uses and Side Effects.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
        <PricingInfo />
        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default ChromiumSupplementPage;
