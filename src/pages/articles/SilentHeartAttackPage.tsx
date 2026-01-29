import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone, AlertTriangle, Heart, Activity, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import silentHeartAttackImage from "@/assets/silent-heart-attack.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import troponinImage from "@/assets/troponin-test.jpg";

const SilentHeartAttackPage = () => {
  const phoneNumber = "09386117912";
  
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سکته قلبی خاموش", url: "/articles/silent-heart-attack" }
  ];

  const faqs = [
    {
      question: "آیا سکته قلبی خاموش خطرناک است؟",
      answer: "بله، سکته قلبی خاموش به همان اندازه سکته معمولی خطرناک است. چون بیمار متوجه علائم نمی‌شود، اغلب دیر به پزشک مراجعه می‌کند و آسیب بیشتری به عضله قلب وارد می‌شود. این می‌تواند منجر به نارسایی قلبی مزمن شود."
    },
    {
      question: "چه کسانی بیشتر در معرض سکته قلبی خاموش هستند؟",
      answer: "بیماران دیابتی، سالمندان، خانم‌ها و افرادی با نوروپاتی (آسیب اعصاب محیطی) بیشتر در معرض سکته قلبی خاموش هستند. در این افراد، سیستم عصبی پیام درد را به درستی منتقل نمی‌کند."
    },
    {
      question: "چگونه می‌توان سکته قلبی خاموش را تشخیص داد؟",
      answer: "نوار قلب (ECG) اولین ابزار تشخیصی است که تغییرات در قطعه ST را نشان می‌دهد. اکوکاردیوگرافی حرکت دیواره‌های قلب را بررسی می‌کند و آزمایش تروپونین آسیب عضله قلب را تأیید می‌کند."
    },
    {
      question: "آیا امکان انجام این تست‌ها در منزل وجود دارد؟",
      answer: "بله، نوید زندگی امکان انجام نوار قلب، اکوکاردیوگرافی پرتابل و نمونه‌گیری خون برای تست تروپونین را در منزل شما فراهم می‌کند. این خدمات در تهران و کرج در کمترین زمان ممکن ارائه می‌شود."
    },
    {
      question: "علائم غیرعادی سکته قلبی در خانم‌ها چیست؟",
      answer: "خانم‌ها بیشتر از آقایان علائم غیرکلاسیک تجربه می‌کنند: درد فک، درد بین دو کتف، حالت تهوع، خستگی شدید، سوءهاضمه مقاوم به درمان و تنگی نفس بدون درد سینه."
    }
  ];

  const relatedArticles = [
    {
      title: "نوار قلب (ECG) چیست؟ راهنمای کامل تحلیل",
      description: "راهنمای جامع نوار قلب شامل نحوه کارکرد و تحلیل موج‌های P، QRS و T",
      image: ecgHomeImage,
      link: "/articles/ecg-guide",
      category: "قلب و عروق"
    },
    {
      title: "اکوکاردیوگرافی در منزل؛ نحوه کارکرد و ایمنی",
      description: "بررسی کامل ایمنی و نحوه انجام اکو قلب در منزل",
      image: echoHomeImage,
      link: "/articles/echo-safety-home",
      category: "قلب و عروق"
    },
    {
      title: "تروپونین قلبی؛ مارکر طلایی تشخیص سکته",
      description: "راهنمای کامل آزمایش تروپونین و تفسیر نتایج آن",
      image: troponinImage,
      link: "/articles/troponin",
      category: "آزمایشگاه"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="سکته قلبی خاموش چیست؟ راهنمای تشخیص در منزل | نوید زندگی"
        description="سکته قلبی خاموش (Silent Ischemia) بدون علائم کلاسیک رخ می‌دهد. علائم پنهان، افراد در معرض خطر و خدمات تشخیص در منزل تهران و کرج"
        keywords="سکته قلبی خاموش, سکته بدون درد, علائم سکته قلبی, تشخیص سکته در منزل, نوار قلب در منزل, اکو قلب در منزل"
        canonical="https://navidzendegi.com/articles/silent-heart-attack"
        ogType="article"
        publishedTime="2025-01-29"
        modifiedTime="2025-01-29"
      />

      <ArticleSchema
        title="سکته قلبی خاموش؛ وقتی قلب بدون فریاد آسیب می‌بیند"
        description="راهنمای جامع سکته قلبی خاموش شامل مکانیسم، علائم پنهان، افراد در معرض خطر و خدمات تشخیص در منزل"
        publishedTime="2025-01-29"
        modifiedTime="2025-01-29"
        image={silentHeartAttackImage}
      />

      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              سکته قلبی خاموش؛ وقتی قلب بدون فریاد آسیب می‌بیند
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              راهنمای جامع تشخیص در منزل
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>تاریخ انتشار: ۱۴۰۳/۱۱/۱۰</span>
              <span>•</span>
              <span>دسته‌بندی: قلب و عروق</span>
            </div>
            <img
              src={silentHeartAttackImage}
              alt="سکته قلبی خاموش - تشخیص و درمان در منزل"
              className="w-full rounded-lg shadow-md mb-8"
            />
          </header>

          {/* Warning Box */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-destructive mb-1">هشدار مهم</p>
                <p className="text-sm text-muted-foreground">
                  اطلاعات این مقاله صرفاً جنبه آموزشی دارد. در صورت مشاهده علائم قلبی، فوراً با پزشک تماس بگیرید.
                  هرگز خودسرانه اقدام به مصرف دارو نکنید.
                </p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              بسیاری از ما تصور می‌کنیم حمله قلبی همیشه با دردی جانکاه، چنگ زدن به قفسه سینه و افتادن ناگهانی روی زمین همراه است؛ تصویری که سینما در ذهن ما ساخته است. اما واقعیت پزشکی بسیار فریبنده‌تر است. <strong>سکته قلبی خاموش (Silent Ischemia)</strong> نوعی از حمله قلبی است که بدون علائم کلاسیک رخ می‌دهد و بیمار حتی متوجه نمی‌شود که قلبش در حال تخریب است.
            </p>

            <p>
              ما در مرکز نوید زندگی، با مواردی روبرو می‌شویم که بیمار تنها با شکایت از یک خستگی ساده درخواست ویزیت در منزل می‌دهد، اما در معاینات مشخص می‌شود که یک سکته وسیع را پشت سر گذاشته است.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              ۱. مکانیسم سکته خاموش؛ چرا دردی حس نمی‌شود؟
            </h2>

            <p>
              در حالت عادی، وقتی اکسیژن به عضله قلب نرسد، سیستم عصبی پیام درد (آنژین) را به مغز مخابره می‌کند. اما در سکته خاموش، این سیستم پیام‌رسان دچار اختلال است:
            </p>

            <ul>
              <li>
                <strong>نوروپاتی در دیابتی‌ها:</strong> قند خون بالا به اعصاب حسی آسیب می‌زند. به همین دلیل، بیماران دیابتی ممکن است حتی یک سکته بزرگ را فقط به شکل یک تنگی نفس ملایم حس کنند.
              </li>
              <li>
                <strong>تغییرات سنی در سالمندان:</strong> با افزایش سن، آستانه تحمل درد بالا رفته و علائم قلبی بیشتر به صورت ضعف عمومی ظاهر می‌شوند.
              </li>
              <li>
                <strong>تفاوت‌های جنسیتی:</strong> خانم‌ها بیش از آقایان مستعد تجربه علائم غیرکلاسیک مانند درد فک، درد بین دو کتف یا حالت تهوع هستند که اغلب با خستگی روزانه اشتباه گرفته می‌شود.
              </li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <AlertTriangle className="w-6 h-6 text-primary" />
              ۲. علائم هشداردهنده پنهان
            </h2>

            <p>
              اگر هر یک از موارد زیر را به صورت ناگهانی یا غیرعادی تجربه کردید، باید به سلامت قلب خود شک کنید:
            </p>

            <ul>
              <li>
                <strong>احساس فشار ملایم یا مبهم:</strong> حسی شبیه به اینکه کسی قفسه سینه شما را کمی فشار می‌دهد، یا حسی شبیه به سوءهاضمه و ترش کردن معده که با قرص‌های معده خوب نمی‌شود.
              </li>
              <li>
                <strong>تنگی نفس هنگام فعالیت‌های عادی:</strong> اگر مسیری را که همیشه راحت پیاده‌روی می‌کردید، اکنون باعث نفس‌نفس زدن شما می‌شود.
              </li>
              <li>
                <strong>عرق سرد ناگهانی:</strong> تعریقی که ربطی به دمای محیط یا فعالیت بدنی ندارد و معمولاً با احساس اضطراب همراه است.
              </li>
              <li>
                <strong>سنگینی در بازوها یا فک:</strong> دردی که لزوماً شدید نیست، اما به صورت سنگینی یا مورمور شدن در دست چپ، شانه یا فک پایین حس می‌شود.
              </li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Activity className="w-6 h-6 text-primary" />
              ۳. خطرات نادیده گرفتن سکته خاموش
            </h2>

            <p>
              بزرگترین خطر سکته خاموش، <strong>«آسیب دائمی عضله قلب»</strong> است. وقتی درمان سریع (در ساعت طلایی) انجام نشود:
            </p>

            <ul>
              <li>بافت قلب می‌میرد و جای آن را زخم (Scar) می‌گیرد.</li>
              <li>قدرت پمپاژ قلب کاهش یافته و فرد دچار <Link to="/articles/leg-edema" className="text-primary hover:underline">نارسایی قلبی</Link> مزمن می‌شود.</li>
              <li>ریسک ایست قلبی ناگهانی در ماه‌های بعد به شدت افزایش می‌یابد.</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-10 mb-4">
              <Stethoscope className="w-6 h-6 text-primary" />
              ۴. تشخیص تخصصی در منزل؛ راهکار طلایی نوید زندگی
            </h2>

            <p>
              به دلیل ماهیت مبهم این علائم، بسیاری از بیماران از ترس ترافیک، محیط آلوده بیمارستان یا شلوغی مطب‌ها، از پیگیری منصرف می‌شوند. مرکز نوید زندگی این موانع را برداشته است:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">الف) نوار قلب (ECG) فوری در منزل</h3>
            <p>
              <Link to="/articles/ecg-guide" className="text-primary hover:underline">نوار قلب</Link> اولین و سریع‌ترین ابزار برای تشخیص است. تکنسین‌های ما با حضور در بالین شما، امواج الکتریکی قلب را ثبت می‌کنند. تغییرات در قطعه ST یا موج T می‌تواند به پزشک بگوید که آیا قلب در همین لحظه در حال آسیب دیدن است یا خیر.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">ب) اکوکاردیوگرافی پرتابل (اکو در منزل)</h3>
            <p>
              اگر نوار قلب شواهد کافی ارائه ندهد، <Link to="/articles/echo-safety-home" className="text-primary hover:underline">اکوکاردیوگرافی</Link> وارد عمل می‌شود. متخصص قلب ما با بررسی حرکت دیواره‌های بطنی در منزل، متوجه می‌شود که آیا بخشی از قلب "تنبلی" می‌کند یا خیر.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">ج) ویزیت متخصص و چکاپ بیوشیمی</h3>
            <p>
              پزشک متخصص در منزل، علاوه بر معاینه، درخواست آزمایش خون فوری (مانند <Link to="/articles/troponin" className="text-primary hover:underline">تست تروپونین</Link>) را می‌دهد. بالا بودن این آنزیم در خون، سند قطعی تخریب عضله قلب است که تیم آزمایشگاهی ما نمونه‌گیری آن را در محل انجام می‌دهد.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">۵. پیشگیری؛ چگونه غافلگیر نشویم؟</h2>

            <p>
              اگر دارای فاکتورهای خطر زیر هستید، منتظر علامت نمانید و پکیج‌های چک‌آپ دوره‌ای نوید زندگی را در منزل دریافت کنید:
            </p>

            <ul>
              <li>سیگار کشیدن یا مصرف دخانیات</li>
              <li>چربی خون و <Link to="/articles/high-blood-pressure-control" className="text-primary hover:underline">فشار خون بالا</Link></li>
              <li>سابقه خانوادگی سکته در سنین پایین</li>
              <li>استرس شغلی یا محیطی زیاد</li>
              <li><Link to="/articles/diabetes" className="text-primary hover:underline">دیابت</Link></li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">نتیجه‌گیری</h2>

            <p>
              سکته قلبی خاموش به معنای بی‌خطر بودن آن نیست، بلکه به معنای <strong>فریبنده بودن</strong> آن است. هرگونه تغییر ناگهانی در توان بدنی خود را جدی بگیرید. تیم نوید زندگی با تجهیزات کامل (اکو، نوار قلب و آزمایشگاه سیار) آماده است تا در کمترین زمان ممکن، شک شما را به یقین تبدیل کرده و از وقوع یک فاجعه جلوگیری کند.
            </p>

            <div className="bg-muted/50 rounded-lg p-4 mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>منابع معتبر علمی:</strong><br />
                • American College of Cardiology (ACC): Silent Myocardial Infarction and Long-term Risk<br />
                • Circulation Journal (AHA): Clinical Importance of Silent Ischemia<br />
                • Johns Hopkins Medicine: Silent Heart Attack: What You Need to Know<br />
                • Cleveland Clinic: Warning signs of a silent heart attack
              </p>
            </div>
          </article>

          {/* CTA Section */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-10">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              آیا در خانواده فرد دیابتی یا سالمند دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              همین حالا برای رزرو نوبت چک‌آپ قلبی در منزل اقدام کنید تا از سلامت قلب آن‌ها مطمئن شوید.
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              تماس فوری: {phoneNumber}
            </a>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <FAQSection faqs={faqs} />
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          {/* Pricing Info */}
          <div className="mt-12">
            <PricingInfo />
          </div>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default SilentHeartAttackPage;
