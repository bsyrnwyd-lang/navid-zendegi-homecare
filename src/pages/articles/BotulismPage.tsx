import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import botulismWarningImage from "@/assets/botulism-warning.jpg";
import childrenFeverImage from "@/assets/children-fever-article.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";
import nursingImage from "@/assets/nursing-home-care.jpg";

const BotulismPage = () => {
  const relatedArticles = [
    {
      title: "تب در کودکان: علل، خطرات و درمان",
      description: "راهنمای کامل تب در کودکان، علائم خطرناک و روش‌های کاهش تب",
      image: childrenFeverImage,
      link: "/articles/children-fever",
      category: "کودکان"
    },
    {
      title: "واکسیناسیون کودکان: جدول و اهمیت",
      description: "راهنمای جامع واکسیناسیون کودکان، جدول زمانی و اهمیت واکسن‌ها",
      image: vaccinationImage,
      link: "/articles/vaccination",
      category: "پیشگیری"
    },
    {
      title: "خدمات پرستاری در منزل",
      description: "مراقبت‌های تخصصی پرستاری در منزل برای بیماران نیازمند",
      image: nursingImage,
      link: "/services/nursing",
      category: "خدمات"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEOHead
        title="مسمومیت بوتولیسم: علائم، خطرات فلج تنفسی و راهنمای پیشگیری (کنسرو و عسل)"
        description="با خطرناک‌ترین مسمومیت غذایی، بوتولیسم، آشنا شوید. علائم (دوبینی، فلج تنفسی) و منابع انتقال (تن ماهی، عسل خام) را بشناسید. در صورت شک، سریعاً به اورژانس مراجعه کنید."
        keywords="بوتولیسم, مسمومیت غذایی, سم بوتولینوم, کنسرو آلوده, عسل خام, نوزاد, فلج تنفسی, اورژانس پزشکی, پیشگیری"
        canonical="https://navidzendegi.com/articles/botulism"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی، متخصص قلب و عروق"
        ogImage={botulismWarningImage}
      />
      
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28 md:pb-12">
        <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"بوتولیسم",url:"/articles/botulism"}]} />
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              مسمومیت بوتولیسم: علائم، خطرات فلج تنفسی و راهنمای پیشگیری (تن ماهی و عسل)
            </h1>
            <p className="text-muted-foreground">
              نویسنده/ویراستار پزشکی: دکتر نیره مظاهری تهرانی، متخصص قلب و عروق
            </p>
          </div>

          <img
            src={botulismWarningImage}
            alt="مسمومیت بوتولیسم - علائم فلج تنفسی و پیشگیری از کنسرو آلوده"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="lead text-xl mb-6">
              بوتولیسم یکی از خطرناک‌ترین انواع مسمومیت‌ها است که در اثر ورود ماده سمی به نام بوتولینوم (Botulinum) به بدن ایجاد می‌شود. این سم قوی بر سیستم عصبی تأثیر می‌گذارد و می‌تواند باعث فلج عضلات، از جمله عضلات تنفسی شود. از این رو، مسمومیت بوتولیسم یک فوریت پزشکی اورژانسی محسوب می‌شود.
            </p>

            <div className="bg-red-50 dark:bg-red-950/20 border-r-4 border-red-500 p-6 my-6 rounded">
              <p className="text-sm text-foreground font-semibold">
                <strong>🚨 هشدار اورژانسی:</strong> بوتولیسم یک فوریت پزشکی است. در صورت مشاهده علائم (دوبینی، اختلال تکلم، ضعف عضلانی پیشرونده)، فوراً به اورژانس ۱۱۵ مراجعه کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۱. علائم و نشانه‌های حیاتی مسمومیت بوتولیسم
            </h2>
            
            <p>
              علائم مسمومیت با بوتولیسم معمولاً حدود ۱۲ الی ۳۶ ساعت پس از ورود سم به بدن خود را نشان می‌دهند. در صورت مشاهده همزمان علائم زیر، فرد باید فوراً به اورژانس منتقل شود:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              مشکلات بینایی
            </h3>

            <p>
              شامل دوبینی (دیدن دوتایی) و تاری دید که از اولین علائم بوتولیسم هستند. این علامت نشان‌دهنده تأثیر سم بر اعصاب چشمی است.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              مشکلات دهان و گلو
            </h3>

            <p>
              خشکی دهان و اختلال تکلم (سختی در صحبت کردن) از علائم شایع هستند. بیمار ممکن است در بلع غذا و آب نیز دچار مشکل شود.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              مشکلات گوارشی
            </h3>

            <p>
              تهوع، استفراغ و درد شکم ممکن است در مراحل اولیه ظاهر شوند، اگرچه علائم عصبی شایع‌تر و مشخص‌تر هستند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              فلج عضلانی پیشرونده
            </h3>

            <p>
              ضعف شدید و فلج که از عضلات صورت شروع شده و به تدریج به سمت پایین بدن حرکت می‌کند. این علامت بسیار خطرناک است و نیاز به مداخله فوری دارد.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              فلج تنفسی
            </h3>

            <p>
              خطرناک‌ترین علامت که می‌تواند منجر به خفگی و مرگ شود. در این حالت، بیمار نیاز به حمایت تنفسی فوری با دستگاه ونتیلاتور دارد.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۲. علل شایع انتقال بوتولیسم (کنسرو، عسل خام و زخم)
            </h2>

            <p>
              بوتولیسم از منابع مختلفی منتقل می‌شود و شناخت این منابع برای پیشگیری بسیار مهم است:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              کنسروهای آلوده، شایع‌ترین منبع
            </h3>

            <p>
              شایع‌ترین نوع مسمومیت بوتولیسم از طریق مصرف غذاهای کنسرو شده آلوده، به خصوص تن ماهی یا کنسروهای خانگی که فرآیند استریل‌سازی درستی نداشته‌اند، منتقل می‌شود.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/20 border-r-4 border-amber-500 p-6 my-6 rounded">
              <p className="text-sm text-foreground">
                <strong>⚠️ نکته مهم:</strong> کنسروهای باد کرده، دارای نشتی یا با ظاهر غیرطبیعی را هرگز مصرف نکنید و فوراً دور بیندازید.
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              خطر عسل خام برای نوزادان
            </h3>

            <p>
              عسل خام حاوی اسپورهای بوتولینوم است. بدن بزرگسالان توانایی مقابله با این اسپورها را دارد، اما برای کودکان زیر یک سال، این خطر جدی بوده و می‌تواند منجر به بوتولیسم نوزادان شود.
            </p>

            <div className="bg-red-50 dark:bg-red-950/20 border-r-4 border-red-600 p-6 my-6 rounded">
              <p className="text-sm text-foreground font-bold">
                🚫 ممنوعیت مطلق: مصرف عسل خام برای کودکان زیر یک سال کاملاً ممنوع است.
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              کاربرد پزشکی بوتاکس
            </h3>

            <p>
              در دوزهای کنترل‌شده و ایمن، سم بوتولینوم برای تولید داروی بوتاکس و درمان‌های زیبایی یا پزشکی (مانند درمان میگرن، اسپاسم عضلانی) استفاده می‌شود.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۳. درمان و اقدامات اورژانسی
            </h2>

            <p>
              بوتولیسم یک فوریت پزشکی است و درمان آن باید در بیمارستان انجام شود. در صورتی که به این مسمومیت در فردی شک دارید، باید سریعاً او را به اورژانس منتقل کنید.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              تزریق آنتی‌توکسین
            </h3>

            <p>
              تزریق آنتی‌توکسین (پادتن سم) باید در اولین فرصت ممکن انجام شود تا سم را خنثی کند. هرچه این دارو زودتر تزریق شود، شانس بهبودی بیشتر است.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              حمایت تنفسی
            </h3>

            <p>
              به دلیل خطر فلج و خفگی، حمایت تنفسی (مانند استفاده از دستگاه ونتیلاتور) باید سریعاً اجرا شود. بیمار ممکن است برای هفته‌ها نیاز به این حمایت داشته باشد.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۴. توصیه‌های پیشگیرانه حیاتی
            </h2>

            <p>
              با رعایت این نکات ساده، خطر مسمومیت با بوتولیسم را به میزان قابل توجهی کاهش دهید:
            </p>

            <ul className="list-disc pr-6 space-y-3 my-4">
              <li>
                <strong>جوشاندن کنسرو:</strong> کنسروها را حتماً حداقل به مدت ۲۰ دقیقه در آب بجوشانید. دمای بالا سم بوتولینوم را از بین می‌برد.
              </li>
              <li>
                <strong>عدم مصرف کنسرو مشکوک:</strong> اگر کنسروی باد کرده، نشتی دارد یا ظاهر غیرطبیعی دارد، آن را مصرف نکرده و دور بیندازید.
              </li>
              <li>
                <strong>ممنوعیت عسل برای نوزاد:</strong> به هیچ عنوان به کودکان زیر یک سال عسل ندهید.
              </li>
              <li>
                <strong>نگهداری صحیح غذا:</strong> غذاهای خانگی را در یخچال نگهداری کنید و از کنسروهای خانگی بدون فرآیند استاندارد استفاده نکنید.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۵. مراقبت‌های تخصصی پس از ترخیص از بیمارستان
            </h2>

            <p>
              از آنجا که بهبودی از بوتولیسم ممکن است زمان‌بر باشد و بیمار برای مدتی نیاز به مراقبت حمایتی داشته باشد، می‌توانید از خدمات تخصصی نوید زندگی در منزل استفاده کنید:
            </p>

            <div className="bg-primary/5 border-r-4 border-primary p-6 my-6 rounded">
              <h3 className="text-lg font-bold text-foreground mb-3">
                خدمات نوید زندگی برای دوران نقاهت:
              </h3>
              
              <ul className="list-disc pr-6 space-y-3">
                <li>
                  <a href="/services/echo-ecg" className="text-primary hover:underline font-semibold">تأمین حمایت تنفسی و تجهیزات پزشکی</a>: در صورت نیاز به ادامه حمایت تنفسی یا نظارت بر علائم حیاتی.
                </li>
                <li>
                  <a href="/services/nursing" className="text-primary hover:underline font-semibold">پرستاری تخصصی در منزل</a>: برای مراقبت از بیمار در دوران نقاهت، نظارت دقیق بر وضعیت عضلانی و جلوگیری از عوارض ثانویه.
                </li>
                <li>
                  <a href="/services/specialist" className="text-primary hover:underline font-semibold">ویزیت پزشک در منزل</a>: برای پیگیری روند بهبودی و تنظیم داروهای بیمار.
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent p-6 my-8 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                نیاز به مراقبت پزشکی دارید؟
              </h3>
              <p className="text-foreground mb-4">
                اگر شما یا یکی از عزیزانتان به مراقبت‌های پزشکی در منزل نیاز دارید، تیم نوید زندگی آماده ارائه خدمات تخصصی پرستاری، ویزیت پزشک و تأمین تجهیزات پزشکی است.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  تماس با ما
                </a>
                <a 
                  href="/services/nursing" 
                  className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  خدمات پرستاری
                </a>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border-r-4 border-blue-500 p-6 my-6 rounded">
              <p className="text-sm text-foreground">
                <strong>ℹ️ یادآوری:</strong> این مقاله صرفاً برای اطلاع‌رسانی است و جایگزین مشاوره پزشکی نمی‌شود. در صورت شک به مسمومیت بوتولیسم، فوراً با اورژانس ۱۱۵ تماس بگیرید.
              </p>
            </div>
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BotulismPage;
