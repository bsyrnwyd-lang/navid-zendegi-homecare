import { Link } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import supplementsHeartImage from "@/assets/supplements-heart-athletes.jpg";
import holterHomeImage from "@/assets/holter-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const SupplementsHeartAthletesPage = () => {
  const publishDate = "۱۴۰۴/۱۱/۱۱";
  const isoPublishDate = "2026-01-30";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "مکمل‌های بدنسازی و قلب", url: "/articles/supplements-heart-athletes" }
  ];

  const faqs = [
    {
      question: "آیا مکمل‌های ورزشی برای قلب خطرناک هستند؟",
      answer: "بسیاری از مکمل‌های ورزشی حاوی دوزهای بالای کافئین، یوهمبین و تائورین هستند که با تحریک سیستم عصبی سمپاتیک، ضربان قلب و فشار خون را بالا می‌برند. مصرف نادرست این محرک‌ها می‌تواند باعث آریتمی‌های خطرناک شود."
    },
    {
      question: "چرا ورزشکاران به هولتر قلب نیاز دارند؟",
      answer: "بسیاری از اختلالات قلبی ناشی از مکمل‌ها تنها در زمان تمرین یا در ساعات خاصی از شبانه‌روز (زمان اوج اثر مکمل) رخ می‌دهند و در نوار قلب ساده دیده نمی‌شوند. هولتر ۲۴-۴۸ ساعته این آریتمی‌های پنهان را شکار می‌کند."
    },
    {
      question: "هیپرتروفی قلب در ورزشکاران چیست؟",
      answer: "هیپرتروفی یعنی ضخیم شدن غیرطبیعی دیواره قلب. استفاده از برخی هورمون‌ها و مکمل‌های غیرمجاز می‌تواند باعث این وضعیت شود که در ورزشکاران بسیار خطرناک است و می‌تواند منجر به مرگ ناگهانی شود."
    },
    {
      question: "چه علائمی نشان می‌دهد که مکمل‌ها به قلب من آسیب زده‌اند؟",
      answer: "علائم هشداردهنده شامل: تپش قلب طولانی‌مدت که بعد از تمرین قطع نمی‌شود، تنگی نفس غیرعادی، سنگینی یا سوزش در قفسه سینه، و سرگیجه یا سیاهی رفتن چشم هنگام بلند کردن وزنه است."
    },
    {
      question: "آیا می‌توانم با هولتر قلب ورزش کنم؟",
      answer: "بله، دستگاه هولتر قلب نوید زندگی سبک و کوچک است و شما می‌توانید با آن به تمرینات روزمره خود بپردازید. این دستگاه واکنش قلب شما را در اوج فشار تمرین و پس از مصرف مکمل ثبت می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "هولتر قلب در منزل",
      description: "پایش ۲۴ تا ۷۲ ساعته ریتم قلب برای تشخیص آریتمی‌های پنهان در منزل",
      image: holterHomeImage,
      link: "/services/holter",
      category: "خدمات قلب"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "بررسی ساختار قلب و عملکرد دریچه‌ها با تجهیزات پیشرفته در منزل شما",
      image: echoHomeImage,
      link: "/services/echo-ecg",
      category: "خدمات قلب"
    },
    {
      title: "تپش قلب؛ علل، علائم و روش‌های بررسی",
      description: "راهنمای کامل تپش قلب، علل شایع، علائم خطرناک و خدمات هولتر در منزل",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="مکمل‌های بدنسازی و قلب | هولتر قلب برای ورزشکاران | نوید زندگی"
        description="راهنمای جامع اثرات مکمل‌های ورزشی بر قلب: خطرات محرک‌ها، آریتمی‌های ناشی از مکمل، نقش هولتر قلب و اکو در پایش سلامت ورزشکاران"
        keywords="مکمل بدنسازی و قلب, تپش قلب بعد از تمرین, هولتر قلب در منزل, اکو در منزل, فشار خون ورزشکاران, نوید زندگی"
        canonical="https://navidzendegi.com/articles/supplements-heart-athletes"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="مکمل‌های بدنسازی و قلب؛ آن‌سوی بازوهای ستبر"
        description="راهنمای جامع اثرات مکمل‌های ورزشی بر قلب و نقش هولتر و اکو در پایش ورزشکاران"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={supplementsHeartImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              مکمل‌های بدنسازی و قلب؛ آن‌سوی بازوهای ستبر (چرا ورزشکاران به هولتر قلب نیاز دارند؟)
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: {publishDate}
            </p>
          </header>

          <img
            src={supplementsHeartImage}
            alt="مکمل‌های بدنسازی و تاثیر آن‌ها بر قلب ورزشکاران"
            className="w-full h-auto rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              امروزه استفاده از مکمل‌های ورزشی، از پودرهای پروتئین ساده گرفته تا پمپ‌های پیش از تمرین (Pre-workout) و چربی‌سوزهای قوی، در میان ورزشکاران آماتور و حرفه‌ای بسیار رایج شده است. اما نکته‌ای که در شلوغی باشگاه‌ها گم می‌شود، <strong>فشار مضاعفی است که این ترکیبات به سیستم برقی و عضلانی قلب وارد می‌کنند</strong>. بسیاری از ورزشکاران علائمی مثل تپش قلب یا سرگیجه را نشانه تمرین سخت می‌دانند، در حالی که این‌ها ممکن است هشدارهای جدی قلب باشند.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              ما در مرکز نوید زندگی با ارائه پکیج‌های پایش تخصصی در منزل، به ورزشکاران کمک می‌کنیم تا مرز میان «تمرین موثر» و «آسیب قلبی» را به دقت شناسایی کنند.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز مکمل‌های ورزشی را بدون مشورت با پزشک مصرف نکنید. خوددرمانی می‌تواند خطرناک باشد و عوارض جدی قلبی ایجاد کند.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۱. محرک‌ها و مکمل‌ها؛ با قلب شما چه می‌کنند؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              بسیاری از مکمل‌های ورزشی حاوی دوزهای بالای کافئین، یوهمبین، تائورین و سایر محرک‌ها هستند. این ترکیبات با تحریک سیستم عصبی سمپاتیک، ضربان قلب و فشار خون را به شدت بالا می‌برند.
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-3 mr-4 mb-6">
              <li><strong>فشار خون انفجاری:</strong> برخی مکمل‌ها باعث انقباض ناگهانی عروق می‌شوند که در حین جابه‌جایی وزنه‌های سنگین، فشار خون را به اعداد خطرناکی می‌رساند.</li>
              <li><strong>آریتمی‌های ناشی از مکمل:</strong> مصرف نادرست محرک‌ها می‌تواند باعث ایجاد ضربان‌های اضافه (PVC) یا حتی آریتمی‌های خطرناکی مثل تاکی‌کاردی فوق بطنی شود.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۲. چرا "هولتر قلب" برای هر بدنساز یک ضرورت است؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              بسیاری از اختلالات قلبی ناشی از مکمل‌ها، تنها در زمان تمرین یا در ساعات خاصی از شبانه‌روز (زمان اوج اثر مکمل) رخ می‌دهند و در یک نوار قلب ساده در مطب دیده نمی‌شوند.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              الف) هولتر مانیتورینگ قلب در منزل؛ پایش در حین تمرین
            </h3>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-4">
              <li><strong>ثبت واقعیت:</strong> ما دستگاه <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب نوید زندگی</Link> را در منزل برای شما نصب می‌کنیم. شما می‌توانید با این دستگاه سبک به تمرینات روزمره خود بپردازید.</li>
              <li>هولتر به ما نشان می‌دهد که در اوج فشار تمرین و پس از مصرف مکمل، قلب شما دقیقاً چه واکنشی نشان می‌دهد.</li>
              <li><strong>شکار ضربان‌های نامنظم:</strong> اگر بعد از مصرف چربی‌سوزها احساس <Link to="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب</Link> یا "ریختن دل" دارید، هولتر ۲۴ یا ۴۸ ساعته مشخص می‌کند که آیا این تپش‌ها بی‌خطر هستند یا نشانه‌ای از تحریک بیش از حد عضله قلب.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ب) هولتر فشار خون؛ بررسی اثر "پمپ‌ها"
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              مکمل‌های پیش از تمرین (PUMP) با افزایش نیتریک اکسید عروق را باز می‌کنند، اما همزمان محرک‌های موجود در آن‌ها ممکن است فشار خون را به صورت کاذب بالا ببرند. هولتر فشار خون ۲۴ ساعته در منزل به ورزشکار نشان می‌دهد که آیا سطح فشار خون او در طول شبانه‌روز (به ویژه پس از اثر مکمل) به محدوده نرمال بازمی‌گردد یا خیر.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۳. اکوکاردیوگرافی در منزل؛ بررسی ضخامت عضله قلب
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              استفاده از برخی هورمون‌ها و مکمل‌های غیرمجاز می‌تواند باعث "هیپرتروفی" یا ضخیم شدن غیرطبیعی دیواره قلب شود. این وضعیت در ورزشکاران بسیار خطرناک است و می‌تواند منجر به مرگ ناگهانی شود.
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>دقت تشخیص:</strong> متخصصین ما با انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link>، ابعاد دقیق حفرات قلب و ضخامت دیواره‌ها را بررسی می‌کنند تا مطمئن شوند قلب ورزشکار دچار تغییرات پاتولوژیک (بیمارگونه) نشده است.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۴. علائم هشدار دهنده برای ورزشکاران
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              اگر مکمل مصرف می‌کنید و دچار این علائم هستید، بدون معطلی درخواست چک‌آپ در منزل بدهید:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>تپش قلب طولانی‌مدت:</strong> که حتی ساعت‌ها بعد از تمرین قطع نمی‌شود.</li>
              <li><strong>تنگی نفس غیرعادی:</strong> که با شدت تمرین شما همخوانی ندارد.</li>
              <li>احساس سنگینی یا سوزش در قفسه سینه.</li>
              <li><strong>سرگیجه یا سیاهی رفتن چشم:</strong> به خصوص در هنگام تغییر وضعیت یا بلند کردن وزنه.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۵. ویزیت متخصص قلب در منزل؛ مشاوره اختصاصی برای ورزشکاران
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <Link to="/services/specialist-doctor" className="text-primary hover:underline">پزشکان متخصص نوید زندگی</Link> در جلسات ویزیت در منزل، لیست مکمل‌های مصرفی شما را بازبینی کرده و با تطبیق نتایج هولتر و اکو، به شما می‌گویند که کدام مکمل‌ها برای قلب شما ایمن هستند و کدام‌یک باید فوراً قطع شوند. هدف ما متوقف کردن ورزش شما نیست، بلکه ایمن‌سازی مسیر قهرمانی شماست.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نتیجه‌گیری
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              بدنسازی و تناسب اندام نباید به قیمت از دست دادن سلامت قلب تمام شود. با خدمات پیشرفته نوید زندگی شامل هولتر قلب، هولتر فشار خون و اکو در منزل، هوشمندانه تمرین کنید و اجازه دهید تکنولوژی نگهبان قلب شما در مسیر سلامتی باشد.
            </p>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                درخواست پکیج چک‌آپ قلب ویژه ورزشکاران
              </h3>
              <p className="text-foreground/80 mb-4">
                برای انجام هولتر قلب، هولتر فشار خون، اکو و ویزیت متخصص در منزل با ما تماس بگیرید:
              </p>
              <a
                href="tel:09386117912"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-8">
              <h4 className="font-bold text-foreground mb-2">منابع معتبر علمی:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Journal of the International Society of Sports Nutrition: Cardiovascular effects of energy stimulants</li>
                <li>• American College of Cardiology (ACC): Performance-Enhancing Drugs and the Heart</li>
                <li>• European Journal of Preventive Cardiology: Sudden cardiac death in young athletes</li>
              </ul>
            </div>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default SupplementsHeartAthletesPage;
