import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/acid-rain-skin-article.jpg";
import airPollutionImage from "@/assets/air-pollution-article.jpg";
import skinItchingImage from "@/assets/skin-itching-causes.jpg";
import hairLossImage from "@/assets/hair-loss-causes.jpg";

const AcidRainSkinPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "باران اسیدی و سلامت پوست", url: "/articles/acid-rain-skin" }
  ];

  const faqs = [
    {
      question: "آیا باران اسیدی مستقیماً پوست را می‌سوزاند؟",
      answer: "باران اسیدی معمولی به اندازه‌ای اسیدی نیست که مانند اسید صنعتی پوست را بسوزاند. اما pH پایین آن (۴.۲ تا ۴.۴) در تماس مکرر، سد دفاعی اسیدی طبیعی پوست را مختل کرده و باعث خشکی، تحریک و تشدید بیماری‌های پوستی زمینه‌ای می‌شود."
    },
    {
      question: "چه کسانی بیشتر در معرض آسیب پوستی باران اسیدی هستند؟",
      answer: "افرادی که دچار اگزما، پسوریازیس، روزاسه یا پوست حساس هستند، بیشتر آسیب‌پذیرند. همچنین کودکان و سالمندان به دلیل نازک‌تر بودن پوست، حساسیت بیشتری نشان می‌دهند."
    },
    {
      question: "آیا باران اسیدی باعث ریزش مو می‌شود؟",
      answer: "تماس مکرر باران اسیدی با پوست سر می‌تواند فولیکول‌های مو را تحریک کرده و باعث ضعیف شدن و ریزش مو شود. همچنین فلزات سنگین آزاد شده از خاک توسط باران اسیدی، در صورت ورود به آب شرب، ریزش مو را تشدید می‌کنند."
    },
    {
      question: "بعد از تماس با باران آلوده چه اقداماتی باید انجام دهیم؟",
      answer: "بلافاصله پس از رسیدن به مقصد، پوست و موی خود را با آب تمیز و شوینده ملایم (Syndet) بشویید. سپس از کرم مرطوب‌کننده حاوی سرامید و نیاسینامید استفاده کنید تا سد دفاعی پوست بازسازی شود."
    },
    {
      question: "آیا باران اسیدی بر سلامت قلب هم تأثیر دارد؟",
      answer: "بله، آلاینده‌هایی که باران اسیدی را تشکیل می‌دهند (SO₂ و NOₓ) مستقیماً بر سلامت ریه و قلب تأثیر می‌گذارند و می‌توانند باعث تنگی نفس، آریتمی و تشدید بیماری‌های قلبی شوند."
    }
  ];

  const relatedArticles = [
    {
      title: "تأثیر آلودگی هوا بر سلامت",
      description: "بررسی جامع اثرات آلودگی هوا بر سیستم تنفسی و قلبی",
      link: "/articles/air-pollution",
      image: airPollutionImage,
      category: "سلامت عمومی"
    },
    {
      title: "علل خارش پوست و راه‌های درمان",
      description: "بررسی دلایل مختلف خارش پوست و روش‌های درمانی خانگی و تخصصی",
      link: "/articles/skin-itching",
      image: skinItchingImage,
      category: "سلامت عمومی"
    },
    {
      title: "علل ریزش مو و راهکارهای درمانی",
      description: "بررسی عوامل ریزش مو از کمبود آهن تا عوامل محیطی و درمان در منزل",
      link: "/articles/hair-loss",
      image: hairLossImage,
      category: "سلامت عمومی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="باران اسیدی و سلامت پوست؛ تهدید شیمیایی | نوید زندگی"
        description="بررسی علمی تأثیر باران اسیدی بر پوست: تخریب سد دفاعی، التهاب، فلزات سنگین. خدمات ویزیت متخصص پوست و آزمایش خون در منزل نوید زندگی."
        keywords="عوارض باران اسیدی بر انسان، درمان حساسیت پوستی در منزل، ویزیت متخصص پوست در محل، آزمایش خون و سموم در خانه، تاثیر آلودگی هوا بر پوست، نوید زندگی"
        canonical="https://navidzendegi.com/articles/acid-rain-skin"
        ogType="article"
      />
      <ArticleSchema
        title="باران اسیدی؛ تهدیدی شیمیایی برای سلامت و شادابی پوست"
        description="بررسی علمی تأثیر باران اسیدی بر پوست و خدمات پایش در منزل"
        publishedTime="2026-03-10"
        modifiedTime="2026-03-10"
        image={heroImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <img
          src={heroImage}
          alt="باران اسیدی و تأثیر آن بر سلامت پوست"
          className="w-full rounded-2xl shadow-lg mb-8 mt-6"
        />

        <p className="text-sm text-muted-foreground mb-4">تاریخ انتشار: ۲۰ اسفند ۱۴۰۴</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          باران اسیدی؛ تهدیدی شیمیایی برای سلامت و شادابی پوست
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          زمانی که آلاینده‌هایی مانند دی‌اکسید گوگرد (SO₂) و اکسیدهای نیتروژن (NOₓ) ناشی از سوخت‌های فسیلی با بخار آب در اتمسفر ترکیب می‌شوند، اسید سولفوریک و اسید نیتریک ایجاد می‌کنند. این اسیدها با بارش باران به زمین برمی‌گردند. در حالی که pH باران معمولی حدود ۵.۶ است، باران اسیدی می‌تواند pH بین ۴.۲ تا ۴.۴ داشته باشد.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          مرکز نوید زندگی با ارائه خدمات <Link to="/services/specialist" className="text-primary font-bold hover:underline">ویزیت متخصص پوست و داخلی در منزل</Link>، به پایش و درمان ضایعات پوستی ناشی از عوامل محیطی و آلودگی هوا کمک می‌کند.
        </p>

        {/* بخش ۱ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۱. باران اسیدی چگونه تشکیل می‌شود؟</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          آلاینده‌های صنعتی (به ویژه از نیروگاه‌ها، کارخانه‌ها و خودروها) توسط باد تا مسافت‌های طولانی حمل می‌شوند. دی‌اکسید گوگرد و اکسیدهای نیتروژن در اتمسفر با آب واکنش شیمیایی داده و تبدیل به اسید سولفوریک و اسید نیتریک می‌شوند. این اسیدها همراه با بارش (باران، برف یا مه) به سطح زمین برمی‌گردند.
        </p>

        {/* بخش ۲ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۲. تأثیرات مستقیم باران اسیدی بر پوست</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          پوست انسان به طور طبیعی دارای یک لایه محافظ اسیدی (Acid Mantle) با pH حدود ۵.۵ است. تماس با باران اسیدی این تعادل را برهم می‌زند:
        </p>

        <h3 className="text-xl font-bold mb-3">تخریب سد دفاعی (Skin Barrier)</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          اسیدیته بالای باران باعث حل شدن چربی‌های مفید پوست (لیپیدها) می‌شود. این اتفاق پوست را خشک، حساس و آسیب‌پذیر می‌کند.
        </p>

        <h3 className="text-xl font-bold mb-3">تحریک و التهاب (Contact Dermatitis)</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          افرادی که پوست حساسی دارند، پس از تماس با باران اسیدی دچار قرمزی، خارش و سوزش می‌شوند.
        </p>

        <h3 className="text-xl font-bold mb-3">تشدید بیماری‌های زمینه‌ای</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          اگر دچار اگزما، پسوریازیس یا روزاسه هستید، باران اسیدی می‌تواند مانند یک محرک قوی باعث شعله‌ور شدن (Flare-up) بیماری شما شود.
        </p>

        {/* بخش ۳ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۳. تأثیرات غیرمستقیم: فلزات سنگین</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          باران اسیدی باعث آزاد شدن فلزات سنگین مانند آلومینیوم و جیوه از خاک و لوله‌های آب می‌شود.
        </p>

        <h3 className="text-xl font-bold mb-3">مسمومیت سلولی</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          تماس پوست با آبی که حاوی این فلزات است، می‌تواند باعث ایجاد لک‌های پوستی، پیری زودرس و تخریب کلاژن شود.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          اگر دچار تغییرات ناگهانی در کیفیت پوست یا ریزش مو شده‌اید، تیم نوید زندگی با انجام <Link to="/services/laboratory" className="text-primary font-bold hover:underline">آزمایش خون</Link> و آنالیز عناصر معدنی در منزل، سطح سموم بدن شما را بررسی می‌کند.
        </p>

        {/* بخش ۴ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۴. اقدامات حفاظتی در روزهای بارانی آلوده</h2>

        <ul className="space-y-3 text-lg text-muted-foreground mb-8">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>استفاده از چتر و پوشش مناسب:</strong> اجازه ندهید باران مستقیماً با پوست سر و صورت شما تماس پیدا کند.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>شستشوی بلافاصله:</strong> اگر زیر باران ماندید، به محض رسیدن به مقصد، پوست خود را با یک شوینده ملایم (Syndet) که pH تنظیم شده دارد، بشویید.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span><strong>مرطوب‌کننده:</strong> استفاده از کرم‌های حاوی سرامید و نیاسینامید به بازسازی سد دفاعی تخریب شده کمک می‌کند.</span>
          </li>
        </ul>

        {/* بخش ۵ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۵. نقش «نوید زندگی» در سلامت پوست و کل بدن</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          آلودگی هوا و باران اسیدی تنها به پوست آسیب نمی‌زنند، بلکه بر سیستم قلبی-عروقی نیز فشار می‌آورند.
        </p>

        <h3 className="text-xl font-bold mb-3">ویزیت متخصص در منزل</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          <Link to="/services/specialist" className="text-primary font-bold hover:underline">پزشکان ما</Link> با بررسی ضایعات پوستی، تداخلات احتمالی با بیماری‌های داخلی را ارزیابی می‌کنند.
        </p>

        <h3 className="text-xl font-bold mb-3">پایش ریوی و قلبی</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          از آنجا که عوامل ایجادکننده باران اسیدی باعث تنگی نفس و آریتمی نیز می‌شوند، ما با تجهیزات <Link to="/services/echo-ecg" className="text-primary font-bold hover:underline">نوار قلب و اکو در منزل</Link>، سلامت عمومی شما را در فصول آلوده سال تضمین می‌کنیم.
        </p>

        {/* هشدار */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <p className="text-base font-bold text-destructive mb-2">⚠️ هشدار مهم</p>
          <p className="text-muted-foreground">
            هرگز بدون مشاوره پزشک، خود‌درمانی نکنید. در صورت مشاهده ضایعات پوستی شدید، تورم یا عفونت، حتماً با متخصص مشورت کنید. مصرف خودسرانه داروهای پوستی می‌تواند وضعیت را بدتر کند.
          </p>
        </div>

        {/* نتیجه‌گیری */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">نتیجه‌گیری</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          باران اسیدی هشداری است که نشان می‌دهد محیط زیست ما با سلامت فردی ما گره خورده است. محافظت از پوست در برابر این پدیده شیمیایی، تنها یک اقدام آرایشی نیست، بلکه حفظ اولین خط دفاعی بدن در برابر بیماری‌هاست.
        </p>

        {/* CTA */}
        <div className="bg-muted/30 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-bold mb-3">دریافت خدمات تخصصی در منزل</h3>
          <p className="text-muted-foreground mb-4">
            برای ویزیت متخصص پوست، آزمایش خون یا پایش قلبی در منزل با ما تماس بگیرید:
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

export default AcidRainSkinPage;
