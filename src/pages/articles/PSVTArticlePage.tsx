import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/psvt-article.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";
import ecgHomeImage from "@/assets/ecg-home.jpg";
import caffeineHeartImage from "@/assets/caffeine-heart-effects.jpg";

const PSVTArticlePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "PSVT؛ تشخیص و درمان تپش قلب ناگهانی", url: "/articles/psvt-sudden-tachycardia" }
  ];

  const faqs = [
    {
      question: "آیا PSVT خطرناک است؟",
      answer: "PSVT در بیشتر موارد کشنده نیست، اما تکرار حملات می‌تواند کیفیت زندگی را کاهش دهد و فشار زیادی به عضله قلب وارد کند. در صورت بروز حملات مکرر، حتماً باید تحت نظر متخصص قلب قرار بگیرید."
    },
    {
      question: "تفاوت PSVT با حمله قلبی چیست؟",
      answer: "در حمله قلبی (سکته قلبی)، درد شدید قفسه سینه، تعریق و درد بازوی چپ وجود دارد و ناشی از انسداد عروق کرونر است. PSVT فقط تپش قلب تند ناگهانی است که معمولاً بدون درد قفسه سینه رخ می‌دهد و به دلیل اختلال در سیستم الکتریکی قلب ایجاد می‌شود."
    },
    {
      question: "هولتر قلب چگونه به تشخیص PSVT کمک می‌کند؟",
      answer: "از آنجا که حملات PSVT ناگهانی و گذرا هستند، نوار قلب معمولی ممکن است چیزی نشان ندهد. هولتر قلب ۲۴ تا ۷۲ ساعته ریتم قلب را به طور مداوم ثبت می‌کند و حملات گذرا را شکار می‌کند."
    },
    {
      question: "مانور والسالوا چیست و چگونه انجام می‌شود؟",
      answer: "مانور والسالوا یک روش ساده برای قطع حمله PSVT است. در این روش، نفس عمیق بکشید، سپس دهان و بینی را ببندید و ۱۰ تا ۱۵ ثانیه زور بزنید (مثل زور زدن برای اجابت مزاج). این کار عصب واگ را تحریک کرده و می‌تواند مدار الکتریکی غیرطبیعی را بشکند. حتماً قبل از انجام این مانور با پزشک مشورت کنید."
    },
    {
      question: "آیا PSVT درمان قطعی دارد؟",
      answer: "بله. در موارد تکرارشونده، روش آبلاسیون (سوزاندن مسیر الکتریکی اضافی) درمان قطعی با نرخ موفقیت بسیار بالا (بیش از ۹۵ درصد) است. پزشک متخصص پس از تشخیص دقیق نوع مدار، بیمار را برای این روش ارجاع می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "تپش قلب: علل، تشخیص و درمان",
      description: "بررسی جامع علل تپش قلب و روش‌های تشخیص و درمان آن",
      link: "/articles/heart-palpitations",
      image: heartPalpitationsImage,
      category: "قلب و عروق"
    },
    {
      title: "نوار قلب در منزل: راهنمای کامل",
      description: "همه چیز درباره انجام نوار قلب (ECG) در منزل و مزایای آن",
      link: "/articles/ecg-home",
      image: ecgHomeImage,
      category: "قلب و عروق"
    },
    {
      title: "تأثیر کافئین بر سلامت قلب",
      description: "بررسی علمی اثرات کافئین بر ریتم و عملکرد قلب",
      link: "/articles/caffeine-heart-effects",
      image: caffeineHeartImage,
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="PSVT تپش قلب ناگهانی؛ تشخیص و درمان در منزل | نوید زندگی"
        description="راهنمای جامع تپش قلب ناگهانی (PSVT): مکانیسم، علائم، تشخیص با هولتر قلب در منزل و درمان. خدمات نوار قلب و اکو در منزل نوید زندگی."
        keywords="درمان تپش قلب ناگهانی، تشخیص PSVT با هولتر قلب، ویزیت متخصص قلب در خانه، نوار قلب در محل، علت ضربان قلب بالای ۱۵۰، نوید زندگی"
        canonical="https://navidzendegi.com/articles/psvt-sudden-tachycardia"
        ogType="article"
      />
      <ArticleSchema
        title="PSVT؛ وقتی برق قلب در اتوبان اشتباه می‌افتد (تشخیص و درمان در منزل)"
        description="راهنمای جامع تپش قلب ناگهانی PSVT: مکانیسم، علائم، تشخیص و درمان در منزل"
        publishedTime="2026-03-10"
        modifiedTime="2026-03-10"
        image={heroImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <img
          src={heroImage}
          alt="PSVT تپش قلب ناگهانی - تشخیص و درمان"
          className="w-full rounded-2xl shadow-lg mb-8 mt-6"
        />

        <p className="text-sm text-muted-foreground mb-4">تاریخ انتشار: ۲۰ اسفند ۱۴۰۴</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          PSVT؛ وقتی برق قلب در اتوبان اشتباه می‌افتد (تشخیص و درمان در منزل)
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          بسیاری از افراد هنگام حمله PSVT تصور می‌کنند دچار حمله قلبی شده‌اند. اگرچه این اختلال معمولاً کشنده نیست، اما تکرار آن کیفیت زندگی را کاهش داده و فشار زیادی به عضله قلب وارد می‌کند. تشخیص دقیق نوع این تپش قلب، کلید اصلی درمان قطعی آن است.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          مرکز نوید زندگی با اعزام تیم متخصص و تجهیزات <Link to="/services/holter" className="text-primary font-bold hover:underline">هولتر</Link> و <Link to="/services/echo-ecg" className="text-primary font-bold hover:underline">نوار قلب</Link> به منزل، این حملات گذرا را شکار و مدیریت می‌کند.
        </p>

        {/* بخش ۱ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۱. مکانیسم اثر: در قلب چه اتفاقی می‌افتد؟</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          قلب دارای یک سیستم سیم‌کشی الکتریکی است. در حالت عادی، پیام از گره سینوسی (بالای قلب) به گره دهلیزی-بطنی (مرکز قلب) می‌رود.
        </p>

        <h3 className="text-xl font-bold mb-3">پدیده ورود مجدد (Re-entry)</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          در PSVT، یک مسیر الکتریکی اضافی یا میان‌بر در قلب وجود دارد. پیام الکتریکی به جای اینکه یک‌بار عبور کند، وارد یک «مدار بسته» یا چرخ‌سنگ می‌شود و با سرعت بسیار زیاد دور خود می‌چرخد. این چرخش مداوم باعث می‌شود بطن‌ها با سرعت سرسام‌آوری منقبض شوند.
        </p>

        {/* بخش ۲ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۲. علائم شایع حملات PSVT</h2>

        <ul className="space-y-3 text-lg text-muted-foreground mb-8">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>تپش قلب صاعقه‌ای:</strong> شروع و پایان ناگهانی ضربان تند (انگار کلیدی زده شده باشد).</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>احساس کوبش در گردن:</strong> به دلیل انقباض همزمان دهلیز و بطن.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>سرگیجه و تنگی نفس:</strong> به دلیل اینکه قلب فرصت کافی برای پر شدن از خون را ندارد.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>اضطراب شدید:</strong> که اغلب با حملات پانیک اشتباه گرفته می‌شود.</span>
          </li>
        </ul>

        {/* بخش ۳ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۳. چالش تشخیص و خدمات «نوید زندگی» در منزل</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          بزرگ‌ترین مشکل PSVT این است که وقتی بیمار به اورژانس می‌رسد، تپش قلب او قطع شده و نوار قلب عادی چیزی نشان نمی‌دهد.
        </p>

        <h3 className="text-xl font-bold mb-3">الف) هولتر قلب ۲۴ تا ۷۲ ساعته در منزل</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          برای شکار حملات ناگهانی، بیمار باید در محیط طبیعی زندگی خود پایش شود. ما دستگاه <Link to="/services/holter" className="text-primary font-bold hover:underline">هولتر قلب</Link> را در منزل روی سینه شما نصب می‌کنیم. اگر در طول شبانه‌روز حمله‌ای رخ دهد، دستگاه آن را ثبت کرده و متخصصین ما دقیقاً نوع مدار الکتریکی (مانند AVNRT یا WPW) را تشخیص می‌دهند.
        </p>

        <h3 className="text-xl font-bold mb-3">ب) نوار قلب (ECG) در بالین</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          اگر در حال حاضر دچار حمله هستید، اعزام فوری تیم ما برای ثبت <Link to="/services/echo-ecg" className="text-primary font-bold hover:underline">نوار قلب</Link> در همان لحظه حیاتی است. اعزام پزشک با دستگاه نوار قلب پرتابل به منزل جهت ثبت ریتم در حین حمله.
        </p>

        <h3 className="text-xl font-bold mb-3">ج) اکوکاردیوگرافی در منزل</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          برای اطمینان از اینکه PSVT ناشی از بیماری‌های ساختاری قلب (مثل مشکلات دریچه‌ای) نیست، انجام <Link to="/services/echo-ecg" className="text-primary font-bold hover:underline">اکو در منزل</Link> برای بررسی سلامت کلی پمپ قلب توصیه می‌شود.
        </p>

        {/* بخش ۴ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۴. اقدامات فوری و درمان</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          پزشک متخصص در منزل ممکن است اقدامات زیر را انجام دهد:
        </p>

        <ul className="space-y-3 text-lg text-muted-foreground mb-8">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>مانورهای واگال (Vagal Maneuvers):</strong> روش‌هایی مثل حبس کردن نفس و زور زدن (مانور والسالوا) یا گذاشتن آب یخ روی صورت که می‌تواند مدار الکتریکی را بشکند.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>درمان دارویی:</strong> استفاده از داروهایی مثل وراپامیل، دیلتیازم یا بتابلاکرها (مثل متوپرولول) برای کنترل ضربان.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>آبلاسیون (Ablation):</strong> در موارد تکرارشونده، پزشک ممکن است شما را برای سوزاندن آن مسیر اضافی به بیمارستان ارجاع دهد (درمان قطعی).</span>
          </li>
        </ul>

        {/* بخش ۵ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۵. محرک‌های اصلی PSVT (چه چیزهایی را رعایت کنیم؟)</h2>

        <ul className="space-y-3 text-lg text-muted-foreground mb-8">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>کافئین و نیکوتین:</strong> محرک‌های مستقیم سیستم الکتریکی قلب. برای اطلاعات بیشتر مقاله <Link to="/articles/caffeine-heart-effects" className="text-primary font-bold hover:underline">تأثیر کافئین بر قلب</Link> را مطالعه کنید.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>استرس و خستگی مفرط:</strong> که آستانه تحریک قلب را پایین می‌آورند.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>داروهای سرماخوردگی:</strong> حاوی مواد محرکی مثل سودوافدرین.</span>
          </li>
        </ul>

        {/* هشدار */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <p className="text-base font-bold text-destructive mb-2">⚠️ هشدار مهم</p>
          <p className="text-muted-foreground">
            هرگز بدون مشاوره پزشک متخصص، خود‌درمانی نکنید. مصرف خودسرانه داروهای ضد آریتمی می‌تواند عوارض جدی و حتی خطرناک داشته باشد. در صورت بروز تپش قلب شدید همراه با درد قفسه سینه یا از حال رفتن، فوراً با اورژانس تماس بگیرید.
          </p>
        </div>

        {/* نتیجه‌گیری */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">نتیجه‌گیری</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          PSVT یک «اتصال کوتاه» در برق قلب است. اگرچه در لحظه وقوع ترسناک است، اما با تشخیص درست توسط تجهیزات پیشرفته در منزل، کاملاً قابل کنترل و درمان است. مرکز نوید زندگی با پایش‌های دقیق <Link to="/services/holter" className="text-primary font-bold hover:underline">هولتر</Link> و <Link to="/services/echo-ecg" className="text-primary font-bold hover:underline">اکو</Link> در محل، به شما کمک می‌کند تا علت اصلی تپش‌های ناگهانی خود را پیدا کرده و با آرامش به زندگی عادی بازگردید.
        </p>

        {/* CTA */}
        <div className="bg-muted/30 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-bold mb-3">دریافت خدمات تخصصی قلب در منزل</h3>
          <p className="text-muted-foreground mb-4">
            برای نصب هولتر قلب، انجام نوار قلب یا اکوکاردیوگرافی در منزل با ما تماس بگیرید:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" onClick={handleCall} className="group">
              <Phone className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              <span>تماس: <a href="tel:09386117912" className="underline">۰۹۳۸۶۱۱۷۹۱۲</a></span>
            </Button>
          </div>
        </div>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default PSVTArticlePage;
