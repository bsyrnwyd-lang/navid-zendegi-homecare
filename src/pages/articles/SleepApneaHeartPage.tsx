import { Link } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import sleepApneaHeartImage from "@/assets/sleep-apnea-heart.jpg";
import holterHomeImage from "@/assets/holter-home-service.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import bloodPressureImage from "@/assets/blood-pressure-article.jpg";

const SleepApneaHeartPage = () => {
  const publishDate = "۱۴۰۴/۱۱/۱۱";
  const isoPublishDate = "2026-01-30";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "آپنه خواب و قلب", url: "/articles/sleep-apnea-heart" }
  ];

  const faqs = [
    {
      question: "آپنه انسدادی خواب چیست؟",
      answer: "آپنه انسدادی خواب (OSA) یک اختلال تنفسی است که در آن مسیر هوایی بالایی در طول خواب به طور مکرر بسته می‌شود و تنفس برای ثانیه‌هایی قطع می‌گردد. این وقفه‌ها می‌توانند تا ۵۰ بار در ساعت تکرار شوند و باعث کاهش شدید اکسیژن خون می‌شوند."
    },
    {
      question: "چرا آپنه خواب برای قلب خطرناک است؟",
      answer: "هر بار که تنفس قطع می‌شود، اکسیژن خون کاهش یافته و مغز هورمون‌های استرس مثل آدرنالین آزاد می‌کند. این فرآیند باعث فشار خون بالا در شب، آریتمی‌های قلبی مثل فیبریلاسیون دهلیزی، و در درازمدت نارسایی بطن راست می‌شود."
    },
    {
      question: "هولتر فشار خون چگونه به تشخیص آپنه کمک می‌کند؟",
      answer: "هولتر فشار خون ۲۴ ساعته فشار شما را در طول شب نیز ثبت می‌کند. در افراد سالم، فشار خون در خواب باید ۱۰-۲۰٪ کاهش یابد. اگر نمودار هولتر نشان دهد که فشار شما در شب بالا می‌ماند یا افزایش می‌یابد، احتمال آپنه خواب بسیار بالاست."
    },
    {
      question: "آیا هولتر قلب می‌تواند آریتمی‌های مرتبط با خروپف را تشخیص دهد؟",
      answer: "بله، هولتر قلب تمام ضربان‌های قلب را در طول شب ثبت می‌کند. اگر در لحظات قطع تنفس، قلب دچار ایست موقت (Pause) یا ضربان‌های نامنظم شود، این اطلاعات به وضوح در نوار هولتر مشخص می‌شود."
    },
    {
      question: "چه علائمی نشان می‌دهد که خروپف من خطرناک است؟",
      answer: "علائم هشداردهنده شامل: خستگی مفرط صبحگاهی، بیدار شدن با سردرد، تکرر ادرار شبانه، کاهش حافظه و تمرکز، و فشار خون مقاوم به درمان است. اگر این علائم را دارید، به چک‌آپ قلبی نیاز دارید."
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
      title: "فشار خون بالا؛ علل، علائم و کنترل",
      description: "راهنمای جامع فشار خون بالا و خدمات پایش فشار خون در منزل",
      image: bloodPressureImage,
      link: "/articles/blood-pressure",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آپنه خواب و قلب | خروپف و خطر ایست قلبی | نوید زندگی"
        description="راهنمای کامل آپنه خواب و ارتباط آن با بیماری‌های قلبی: مکانیسم آسیب به قلب، نقش هولتر فشار خون و قلب در تشخیص، خدمات پایش شبانه در منزل"
        keywords="آپنه خواب, خروپف و قلب, هولتر فشار خون در منزل, هولتر قلب در محل, اکو در منزل, فشار خون شبانه, نارسایی قلبی, نوید زندگی"
        canonical="https://navidzendegi.com/articles/sleep-apnea-heart"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="آپنه خواب و خروپف؛ چرا توقف تنفس شبانه زنگ خطری برای ایست قلبی است؟"
        description="راهنمای کامل آپنه خواب و ارتباط آن با بیماری‌های قلبی و خدمات هولتر و اکو در منزل"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={sleepApneaHeartImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              آپنه خواب و خروپف؛ چرا توقف تنفس شبانه زنگ خطری برای ایست قلبی است؟
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: {publishDate}
            </p>
          </header>

          <img
            src={sleepApneaHeartImage}
            alt="آپنه خواب و ارتباط آن با بیماری‌های قلبی"
            className="w-full h-auto rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              بسیاری از افراد خروپف را تنها یک عادت ناخوشایند شبانه می‌دانند که خواب اطرافیان را مختل می‌کند. اما از نگاه متخصصان قلب، <strong>خروپف‌های سنگین که با وقفه‌های تنفسی همراه هستند، می‌توانند نشانه‌ای از یک بیماری جدی به نام آپنه انسدادی خواب (OSA) باشند</strong>. آپنه خواب یعنی در طول شب، مسیر تنفسی شما به طور متناوب بسته می‌شود و بدن برای ثانیه‌هایی طولانی با کمبود شدید اکسیژن مواجه می‌گردد.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              مرکز خدمات پزشکی نوید زندگی، با بهره‌گیری از تکنولوژی‌های پایش در محل، ارتباط حیاتی بین کیفیت خواب و سلامت قلب شما را بررسی کرده و از بروز فجایع قلبی در خواب پیشگیری می‌کند.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز علائم خواب مختل را نادیده نگیرید. خوددرمانی می‌تواند خطرناک باشد. در صورت مشاهده علائم مشکوک، با پزشک متخصص مشورت کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۱. مکانیسم تخریب قلب توسط آپنه خواب
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              وقتی تنفس در خواب قطع می‌شود، سطح اکسیژن خون به شدت سقوط می‌کند (هیپوکسی). در پاسخ به این وضعیت اورژانسی، مغز سیستم عصبی سمپاتیک را فعال کرده و سیلابی از هورمون‌های استرس مانند آدرنالین و کورتیزول را به خون می‌ریزد تا فرد را از حالت خفگی نجات دهد. تکرار این چرخه (گاهی تا ۵۰ بار در هر ساعت) منجر به فجایع زیر می‌شود:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-3 mr-4 mb-6">
              <li><strong>فشار خون مقاوم و شبانه:</strong> در افراد عادی، فشار خون در خواب باید ۱۰ تا ۲۰ درصد کاهش یابد. در بیماران آپنه، فشار خون نه تنها پایین نمی‌آید، بلکه به دلیل استرس تنفسی، در تمام طول شب بالا باقی می‌ماند.</li>
              <li><strong>فیبریلاسیون دهلیزی (AF):</strong> فشار منفی شدیدی که قفسه سینه برای کشیدن هوا وارد می‌کند، باعث کشیدگی عضلات قلب و به هم خوردن ریتم برقی آن می‌شود. این ریشه اصلی بسیاری از <Link to="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب‌های صبحگاهی</Link> است.</li>
              <li><strong>نارسایی بطن راست:</strong> ریه‌ها در اثر کم‌اکسیژنی منقبض می‌شوند و بطن راست قلب مجبور است با فشاری عظیم خون را به ریه بفرستد که در درازمدت باعث بزرگ شدن و شکست قدرت قلب می‌شود.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۲. تشخیص پنهان با خدمات هولتر و اکو در منزل "نوید زندگی"
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              از آنجا که اکثر علائم آپنه در زمان خواب رخ می‌دهند، تشخیص آن‌ها در مطب پزشک دشوار است. ما تجهیزات بیمارستانی را به اتاق خواب شما می‌آوریم:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              الف) هولتر فشار خون ۲۴ ساعته؛ تنها راه شناسایی "فشار خون شبانه"
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              بسیاری از بیماران در طول روز فشار خون نرمال دارند، اما به دلیل آپنه، در شب دچار فشار خون انفجاری می‌شوند.
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-4">
              <li><strong>چرا هولتر؟</strong> دستگاه هولتر فشار خون نوید زندگی، در طول ۲۴ ساعت و حتی در زمان خواب، به طور خودکار فشار شما را اندازه می‌گیرد.</li>
              <li>اگر نمودار هولتر نشان دهد که فشار شما در زمان خروپف بالا می‌رود، تشخیص آپنه قطعی است.</li>
              <li>این پایش دقیق، از سکته‌های مغزی صبحگاهی جلوگیری می‌کند.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ب) هولتر مانیتورینگ قلب؛ شکار آریتمی‌های حین خروپف
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              آیا تا به حال با تپش قلب شدید از خواب پریده‌اید؟
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-4">
              <li><strong>دقت تشخیص:</strong> با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، ما هر ضربان قلب شما را در طول یک شب کامل ثبت می‌کنیم.</li>
              <li>این دستگاه به ما می‌گوید که آیا در لحظاتی که تنفس شما قطع می‌شود، قلب دچار ایست موقت (Pause) یا ضربان‌های نامنظم (AF) می‌شود یا خیر.</li>
              <li>تکنسین ما برای نصب این دستگاه سبک و کوچک به منزل شما آمده و پس از پایان پایش، داده‌ها را برای تحلیل به متخصص قلب ارسال می‌کند.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ج) اکوکاردیوگرافی (اکو) پورتابل؛ بررسی آسیب‌های ساختاری
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              اگر سال‌هاست که خروپف می‌کنید، احتمالاً قلب شما تغییر شکل داده است. متخصصین ما با انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link>، ضخامت دیواره‌های قلب و وضعیت دریچه‌ها را بررسی می‌کنند. اکو مشخص می‌کند که آیا آپنه خواب باعث بالا رفتن فشار ریوی شما شده است یا خیر؛ سؤالی که پاسخ به آن برای شروع درمان حیاتی است.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۳. علائم خطر: آیا شما در معرض خطر هستید؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              اگر علاوه بر خروپف، موارد زیر را تجربه می‌کنید، نیاز به چک‌آپ فوری قلبی در منزل دارید:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>خستگی مفرط صبحگاهی:</strong> انگار که اصلاً نخوابیده‌اید.</li>
              <li>بیدار شدن با سردرد یا خشکی شدید دهان.</li>
              <li><strong>تکرر ادرار در شب:</strong> که به دلیل فشارهای وارده به قلب و ترشح هورمون‌های خاص رخ می‌دهد.</li>
              <li>کاهش حافظه و تمرکز در طول روز.</li>
              <li><strong>فشار خون بالا که با چندین دارو کنترل نمی‌شود.</strong></li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۴. ویزیت متخصص و شخصی‌سازی درمان در محل
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              تشخیص آپنه پایان راه نیست. <Link to="/services/specialist-doctor" className="text-primary hover:underline">پزشک متخصص نوید زندگی</Link> در جلسه ویزیت در منزل، با تطبیق نتایج هولتر قلب و فشار خون، یک برنامه درمانی جامع ارائه می‌دهد. این برنامه می‌تواند شامل تنظیم داروهای قلبی، پیشنهاد کاهش وزن، یا استفاده از دستگاه‌های کمک تنفسی باشد. هدف ما این است که قلب شما در زمان استراحت، واقعاً استراحت کند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نتیجه‌گیری
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              هر خروپف می‌تواند یک قدم به سمت نارسایی قلب باشد. اجازه ندهید خواب که باید منبع انرژی شما باشد، به منشأ بیماری تبدیل شود. مرکز نوید زندگی با ارائه پیشرفته‌ترین پکیج‌های پایش شامل هولتر قلب، هولتر فشار خون و اکو در منزل، دقیق‌ترین تصویر را از وضعیت قلبی شما در زمان خواب ارائه داده و امنیت شب‌های شما را تضمین می‌کند.
            </p>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                درخواست پکیج پایش شبانه قلب در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای انجام هولتر فشار خون، هولتر قلب، اکو و ویزیت متخصص در منزل با ما تماس بگیرید:
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
                <li>• American Academy of Sleep Medicine (AASM): Obstructive Sleep Apnea and Cardiovascular Disease</li>
                <li>• American Heart Association (AHA): Sleep Apnea and Hypertension – A Dangerous Duo</li>
                <li>• Journal of the American College of Cardiology (JACC): Long-term Cardiovascular Outcomes in Patients with OSA</li>
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

export default SleepApneaHeartPage;
