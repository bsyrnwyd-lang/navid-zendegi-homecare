import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import LazyImage from "@/components/LazyImage";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Phone } from "lucide-react";
import herniaPainImage from "@/assets/hernia-pain-article.jpg";
import abdominalPainImage from "@/assets/abdominal-pain-article.jpg";
import generalDoctorImage from "@/assets/general-doctor-home-clean.jpg";
import specialistDoctorImage from "@/assets/specialist-doctor.jpg";

const HerniaPainPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "درد فتق: انواع و علائم خطر", url: "/articles/hernia-pain" }
  ];

  const relatedArticles = [
    {
      title: "درد شکم: علل شایع و زمان مراجعه به پزشک",
      description: "راهنمای جامع درد شکم شامل علل مختلف، تشخیص افتراقی و موارد نیاز به مراجعه فوری",
      image: abdominalPainImage,
      link: "/articles/abdominal-pain",
      category: "جراحی"
    },
    {
      title: "ویزیت پزشک عمومی در منزل",
      description: "خدمات ویزیت پزشک عمومی در منزل برای تشخیص اولیه و درمان بیماری‌های شایع",
      image: generalDoctorImage,
      link: "/general-doctor",
      category: "خدمات"
    },
    {
      title: "ویزیت متخصص در منزل",
      description: "خدمات ویزیت پزشک متخصص در منزل برای تشخیص و درمان تخصصی بیماری‌ها",
      image: specialistDoctorImage,
      link: "/services/specialist",
      category: "خدمات"
    }
  ];

  const faqs = [
    {
      question: "آیا همه فتق‌ها دردناک هستند؟",
      answer: "خیر، همه فتق‌ها دردناک نیستند. برخی فتق‌ها، به ویژه در مراحل اولیه، ممکن است بدون درد باشند و فقط به صورت یک برجستگی یا توده قابل لمس ظاهر شوند. با این حال، درد معمولاً با افزایش فشار داخل شکمی (مانند سرفه، بلند کردن اجسام سنگین یا فشار) شروع می‌شود. اگر فتق بدون درد است، باز هم نیاز به ارزیابی پزشکی دارد."
    },
    {
      question: "آیا می‌توان فتق را بدون جراحی درمان کرد؟",
      answer: "خیر، درمان قطعی فتق فقط از طریق جراحی امکان‌پذیر است. هیچ دارو یا روش غیرجراحی دیگری نمی‌تواند دیواره عضلانی ضعیف را ترمیم کند. در برخی موارد خفیف، پزشک ممکن است تصمیم بگیرد فتق را تحت نظر بگیرد (Watchful Waiting) و جراحی را به تعویق بیندازد، اما این رویکرد فقط در شرایط خاص و تحت نظارت پزشک امکان‌پذیر است. استفاده از باند فتق (Hernia Truss) فقط می‌تواند موقتاً علائم را کاهش دهد و درمان نیست."
    },
    {
      question: "علائم فتق خفه شده چیست و چه زمانی باید فوراً به اورژانس مراجعه کرد؟",
      answer: "فتق خفه شده یک اورژانس پزشکی است. علائم شامل: درد ناگهانی و بسیار شدید در محل فتق، تهوع و استفراغ شدید، تب بالا، تغییر رنگ توده به قرمز، بنفش یا سیاه، عدم توانایی در بازگرداندن توده به داخل شکم. اگر این علائم را تجربه کردید، فوراً به اورژانس مراجعه کنید یا با اورژانس 115 تماس بگیرید. تأخیر می‌تواند منجر به نکروز بافت، عفونت خون و خطر مرگ شود."
    },
    {
      question: "آیا بعد از جراحی فتق، امکان عود دارد؟",
      answer: "بله، متأسفانه امکان عود فتق بعد از جراحی وجود دارد، اما نرخ عود بستگی به نوع جراحی، مهارت جراح، استفاده از مش (Mesh) و رعایت مراقبت‌های پس از عمل دارد. جراحی لاپاراسکوپی با استفاده از مش معمولاً نرخ عود کمتری (حدود 1-3 درصد) نسبت به جراحی باز دارد. برای کاهش خطر عود، باید از بلند کردن اجسام سنگین در هفته‌های اول پس از جراحی اجتناب کرد و دستورات پزشک را دقیقاً رعایت نمود."
    },
    {
      question: "چگونه می‌توان از بروز فتق پیشگیری کرد؟",
      answer: "برای کاهش خطر بروز فتق می‌توانید: وزن سالم خود را حفظ کنید (چاقی فشار اضافی به دیواره شکمی وارد می‌کند)، از بلند کردن صحیح اجسام سنگین استفاده کنید (خم کردن زانوها به جای کمر)، یبوست مزمن را درمان کنید (فشار مداوم روی شکم)، سرفه مزمن را درمان کنید، ورزش‌های تقویت عضلات مرکزی بدن (Core) انجام دهید. اما توجه داشته باشید که برخی فتق‌ها ناشی از ضعف مادرزادی عضلات هستند و قابل پیشگیری نیستند."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="درد فتق (Hernia Pain): انواع شایع، علائم خطر و ضرورت ویزیت متخصص جراحی | نوید زندگی"
        description="راهنمای جامع درد فتق: انواع فتق اینگوینال، نافی و شکاف مری، علائم خطرناک فتق خفه شده، تشخیص و درمان جراحی. ویزیت متخصص جراحی در منزل."
        keywords="فتق, درد فتق, Hernia, فتق اینگوینال, فتق کشاله ران, فتق خفه شده, درد شکم, جراحی فتق, ویزیت جراح در منزل, علائم فتق, فتق نافی, فتق شکاف مری"
        canonical="https://navidzendegi.com/articles/hernia-pain"
        ogType="article"
        publishedTime="2025-01-21"
        modifiedTime="2025-01-21"
      />

      <ArticleSchema
        title="درد فتق (Hernia Pain): انواع شایع، علائم خطر و ضرورت ویزیت متخصص جراحی"
        description="راهنمای جامع درد فتق: انواع فتق اینگوینال، نافی و شکاف مری، علائم خطرناک فتق خفه شده، تشخیص و درمان جراحی"
        publishedTime="2025-01-21"
        modifiedTime="2025-01-21"
        image="/assets/hernia-pain-article.jpg"
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            درد فتق (Hernia Pain): انواع شایع، علائم خطر و ضرورت ویزیت متخصص جراحی
          </h1>

          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle className="text-lg font-semibold">هشدار اورژانسی</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              اگر درد شدید و ناگهانی در محل فتق، همراه با تهوع، استفراغ و تب دارید، فوراً به اورژانس مراجعه کنید. 
              فتق خفه شده یک وضعیت تهدیدکننده حیات است که نیاز به جراحی فوری دارد.
            </AlertDescription>
          </Alert>

          <LazyImage
            src={herniaPainImage}
            alt="درد فتق - Hernia Pain medical illustration"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
            width={800}
            height={400}
          />

          <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 text-justify">
            فتق (Hernia) زمانی رخ می‌دهد که بخشی از یک اندام (معمولاً روده یا بافت چربی) از طریق یک نقطه ضعیف یا شکاف در دیواره عضلانی که به طور معمول آن اندام را در جای خود نگه می‌دارد، بیرون بزند. 
            درد فتق معمولاً زمانی احساس می‌شود که فشار داخلی (ناشی از بلند کردن اجسام، سرفه یا فشار) به بافت بیرون زده وارد شود [1].
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">
            انواع شایع فتق و محل بروز درد
          </h2>

          <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
            درد فتق بسته به نوع و محل آن متفاوت است. شایع‌ترین انواع فتق عبارت‌اند از:
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
            فتق اینگوینال (Inguinal Hernia)
          </h3>
          <ul className="space-y-3 mb-6 mr-6">
            <li className="text-base text-foreground">
              شایع‌ترین نوع فتق است که عمدتاً در مردان رخ می‌دهد.
            </li>
            <li className="text-base text-foreground">
              <strong>محل بروز:</strong> در ناحیه کشاله ران ایجاد می‌شود.
            </li>
            <li className="text-base text-foreground">
              <strong>نوع درد:</strong> احساس برجستگی یا توده قابل مشاهده، درد یا سوزش در کشاله ران که هنگام خم شدن، سرفه کردن یا بلند کردن اجسام سنگین بدتر می‌شود.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            فتق شکاف مری (Hiatal Hernia)
          </h3>
          <ul className="space-y-3 mb-6 mr-6">
            <li className="text-base text-foreground">
              در بخش بالایی شکم و زمانی رخ می‌دهد که بخشی از معده از طریق شکاف (Hiatus) در دیافراگم، به سمت قفسه سینه برود.
            </li>
            <li className="text-base text-foreground">
              <strong>نوع درد:</strong> معمولاً به جای درد حاد، باعث علائمی مانند سوزش سر دل (Heartburn)، رفلاکس اسید و درد در قفسه سینه می‌شود.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            فتق نافی (Umbilical Hernia)
          </h3>
          <ul className="space-y-3 mb-6 mr-6">
            <li className="text-base text-foreground">
              اطراف ناف ایجاد می‌شود و در نوزادان شایع است، اما در بزرگسالان نیز رخ می‌دهد.
            </li>
            <li className="text-base text-foreground">
              <strong>نوع درد:</strong> ناراحتی یا درد در اطراف ناف که با فعالیت افزایش می‌یابد [2].
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">
            علائم خطر و اورژانس جراحی (فتق گیر افتاده و خفه شده)
          </h2>

          <p className="text-base text-foreground leading-relaxed mb-6 text-justify">
            درد فتق زمانی به یک اورژانس پزشکی تبدیل می‌شود که بافت بیرون زده در موقعیت خود گیر بیفتد (Incarcerated Hernia) یا خون‌رسانی به آن قطع شود (Strangulated Hernia).
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-4">
            ۱. فتق گیر افتاده (Incarcerated)
          </h3>
          <ul className="space-y-3 mb-6 mr-6">
            <li className="text-base text-foreground">
              زمانی رخ می‌دهد که بافت بیرون زده نتواند به داخل حفره شکمی بازگردد.
            </li>
            <li className="text-base text-foreground">
              <strong>علائم:</strong> درد ناگهانی و شدید، عدم توانایی در بازگشت توده به داخل شکم با فشار ملایم.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-4">
            ۲. فتق خفه شده (Strangulated)
          </h3>
          <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
            این وضعیت خطرناک‌ترین نوع فتق است که در آن، خون‌رسانی به بافت گیر افتاده قطع می‌شود.
          </p>

          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle className="text-lg font-semibold">هشدار اورژانسی</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              فتق خفه شده یک وضعیت تهدیدکننده حیات است و نیاز به جراحی فوری دارد. 
              تأخیر می‌تواند منجر به سپتیسمی (عفونت خون) و مرگ شود [3].
            </AlertDescription>
          </Alert>

          <ul className="space-y-3 mb-8 mr-6">
            <li className="text-base text-foreground">
              <strong>علائم:</strong> درد بسیار شدید و مداوم، تهوع و استفراغ شدید، تب بالا، تغییر رنگ توده به قرمز، بنفش یا سیاه (ناشی از مرگ بافت یا نکروز).
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6">
            تشخیص و درمان: لزوم ویزیت متخصص جراحی
          </h2>

          <p className="text-base text-foreground leading-relaxed mb-6 text-justify">
            مدیریت فتق تقریباً همیشه شامل ترمیم جراحی است.
          </p>

          <ul className="space-y-4 mb-8 mr-6">
            <li className="text-base text-foreground">
              <strong>تشخیص:</strong> تشخیص معمولاً از طریق معاینه فیزیکی توسط پزشک متخصص جراحی انجام می‌شود. در معاینه، پزشک از بیمار می‌خواهد که سرفه کند یا فشار وارد کند تا برجستگی فتق مشخص شود.
            </li>
            <li className="text-base text-foreground">
              <strong>درمان قطعی (هرنیورافی):</strong> درمان نهایی فتق، جراحی (به روش باز یا لاپاراسکوپی) برای برگرداندن بافت به داخل و تقویت دیواره ضعیف عضلانی با بخیه یا مش است.
            </li>
            <li className="text-base text-foreground">
              <strong>مدیریت درد اولیه:</strong> در مراحل اولیه، قبل از جراحی، پزشک ممکن است برای مدیریت درد داروهای مسکن تجویز کند. با این حال، استفاده از مسکن‌ها نباید باعث تأخیر در مراجعه به پزشک شود.
            </li>
            <li className="text-base text-foreground">
              <strong>ویزیت تخصصی در منزل:</strong> برای ارزیابی اولیه، تعیین نوع فتق و تشخیص فوریت وضعیت، 
              <a href="/services/specialist" className="text-primary hover:underline mx-1">ویزیت متخصص جراحی در منزل</a>
              توسط نوید زندگی امکان پذیر است. پزشک می‌تواند وضعیت فتق (کاهش‌پذیر یا کاهش‌ناپذیر بودن) را بررسی و در صورت نیاز، دستور اعزام آمبولانس به بیمارستان را صادر کند.
            </li>
          </ul>

          <section className="bg-primary/5 rounded-lg p-8 my-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              برجستگی‌های شکمی و دردهای شدید را نادیده نگیرید
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              برای ارزیابی سریع و تشخیص نوع فتق توسط متخصص جراحی، 
              <a href="/services/specialist" className="text-primary hover:underline mx-1 font-semibold">
                ویزیت تخصصی در منزل
              </a>
              خود را رزرو کنید یا در صورت بروز علائم خطر (تهوع و درد شدید)، فوراً تماس بگیرید.
            </p>
            <a 
              href="tel:09386117912"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس فوری: 09386117912
            </a>
          </section>

          <div className="bg-muted/50 rounded-lg p-6 mt-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">منابع (References)</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>
                Kingsnorth, A. N., & LeBlanc, K. A. (2003). Hernias: inguinal and incisional. 
                <em> The Lancet</em>, 362(9395), 1561-1571.
              </li>
              <li>
                Fitzgibbons, R. J., & Forse, R. A. (2015). Groin hernias in adults. 
                <em> New England Journal of Medicine</em>, 373(17), 1635-1644.
              </li>
              <li>
                Snyder, B. E., & Williams, J. M. (2020). Management of strangulated hernias. 
                <em> Surgical Clinics of North America</em>, 100(2), 297-313.
              </li>
            </ol>
          </div>
        </article>

        <FAQSection faqs={faqs} />

        <div className="mt-12">
          <PricingInfo />
        </div>

        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default HerniaPainPage;
