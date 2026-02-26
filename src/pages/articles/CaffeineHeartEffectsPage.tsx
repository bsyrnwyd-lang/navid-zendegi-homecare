import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import caffeineImage from "@/assets/caffeine-heart-effects.jpg";
import famotidineImage from "@/assets/famotidine-article.jpg";
import supplementsHeartImage from "@/assets/supplements-heart-athletes.jpg";
import sleepApneaHeartImage from "@/assets/sleep-apnea-heart.jpg";

const CaffeineHeartEffectsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تأثیرات کافئین بر قلب و سلامت", url: "/articles/caffeine-heart-effects" }
  ];

  const faqs = [
    {
      question: "آیا مصرف قهوه برای بیماران قلبی ممنوع است؟",
      answer: "مصرف قهوه برای بیماران قلبی کاملاً ممنوع نیست، اما باید زیر ۲۰۰ میلی‌گرم کافئین (حدود ۲ فنجان کوچک) و با مشورت پزشک متخصص باشد."
    },
    {
      question: "آیا تپش قلب بعد از نوشیدن قهوه خطرناک است؟",
      answer: "تپش قلب بعد از قهوه در بیشتر افراد بی‌خطر است، اما اگر مکرر یا همراه با سرگیجه و تنگی نفس باشد، باید با هولتر قلب بررسی شود."
    },
    {
      question: "کافئین چقدر فشار خون را بالا می‌برد؟",
      answer: "کافئین می‌تواند فشار خون را به طور موقت ۵ تا ۱۰ میلی‌متر جیوه افزایش دهد. در افراد مبتلا به فشار خون بالا این اثر ممکن است شدیدتر باشد."
    },
    {
      question: "آیا چای هم مثل قهوه اثر منفی بر قلب دارد؟",
      answer: "چای حاوی کافئین کمتری نسبت به قهوه است (حدود نصف). چای سبز حاوی آنتی‌اکسیدان‌هایی است که اثرات محافظتی بر قلب دارند، اما مصرف بیش از حد آن هم می‌تواند تپش قلب ایجاد کند."
    },
    {
      question: "چگونه بفهمم کافئین باعث مشکل قلبی من شده است؟",
      answer: "با نصب هولتر قلب ۲۴ ساعته در منزل توسط تیم نوید زندگی، ضربان قلب شما در طول روز و هنگام مصرف کافئین ثبت و بررسی می‌شود."
    }
  ];

  const relatedArticles = [
    {
      title: "فاموتیدین؛ نگهبان هوشمند معده",
      description: "ارتباط اسید معده با مصرف کافئین و درمان رفلاکس.",
      image: famotidineImage,
      link: "/articles/famotidine",
      category: "دارو"
    },
    {
      title: "مکمل‌های بدنسازی و قلب",
      description: "خطرات محرک‌ها برای قلب و نقش هولتر در پایش ورزشکاران.",
      image: supplementsHeartImage,
      link: "/articles/supplements-heart-athletes",
      category: "قلب و عروق"
    },
    {
      title: "آپنه خواب و قلب",
      description: "ارتباط اختلالات خواب با بیماری‌های قلبی.",
      image: sleepApneaHeartImage,
      link: "/articles/sleep-apnea-heart",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تأثیرات کافئین بر قلب و سلامت؛ تیغ دو لبه قهوه | نوید زندگی"
        description="بررسی تأثیرات مثبت و منفی کافئین بر قلب، فشار خون و آریتمی. میزان مجاز مصرف قهوه و خدمات هولتر و اکو در منزل نوید زندگی"
        keywords="عوارض قهوه برای قلب, تأثیر کافئین بر فشار خون, هولتر قلب در منزل, اکوکاردیوگرافی در محل, تپش قلب بعد از قهوه, نوید زندگی"
        ogType="article"
        publishedTime="2026-02-26"
      />
      <ArticleSchema
        title="تأثیرات کافئین بر قلب و سلامت؛ تیغ دو لبه قهوه"
        description="بررسی تأثیرات مثبت و منفی کافئین بر قلب، فشار خون و آریتمی. میزان مجاز مصرف قهوه و خدمات هولتر و اکو در منزل"
        publishedTime="2026-02-26"
        modifiedTime="2026-02-26"
        image={caffeineImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="mt-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-4">
            تأثیرات کافئین بر قلب و سلامت؛ تیغ دو لبه قهوه
          </h1>

          <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: ۱۴۰۴/۱۲/۰۸</p>

          <img
            src={caffeineImage}
            alt="تأثیرات کافئین بر قلب و سلامت"
            className="w-full max-h-[400px] object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <p className="text-foreground/90 leading-8 mb-6">
            کافئین پرمصرف‌ترین ماده روان‌گردان در جهان است که به طور مستقیم بر سیستم عصبی مرکزی، متابولیسم و عملکرد قلب تأثیر می‌گذارد. در حالی که برای بسیاری از ما سوخت اصلی شروع روز است، اما مرز باریکی میان «بهره‌وری» و «اضطراب» ایجاد می‌کند.
          </p>

          <p className="text-foreground/90 leading-8 mb-6">
            مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با ارائه خدمات <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب</Link> و <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی در منزل</Link>، اثرات کافئین را بر قلب شما پایش می‌کند.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
            <p className="text-destructive font-semibold text-sm">
              ⚠️ هشدار مهم: هرگز بدون تجویز پزشک متخصص اقدام به مصرف یا قطع هیچ دارویی نکنید. خوددرمانی خطرناک است.
            </p>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۱. تأثیرات مثبت کافئین (نیمه روشن ماجرا)
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            کافئین با مسدود کردن گیرنده‌های آدنوزین (ماده‌ای که باعث احساس خواب‌آلودگی می‌شود) در مغز عمل می‌کند:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>افزایش هوشیاری و تمرکز:</strong> کافئین با آزاد کردن انتقال‌دهنده‌های عصبی مانند دوپامین و نوراپی‌نفرین، عملکرد شناختی و حافظه کوتاه‌مدت را بهبود می‌بخشد.</li>
            <li><strong>بهبود عملکرد ورزشی:</strong> کافئین سطح آدرنالین را در خون بالا برده و به عضلات کمک می‌کند تا چربی‌ها را به عنوان سوخت بسوزانند، که باعث افزایش استقامت بدنی می‌شود.</li>
            <li><strong>کاهش ریسک بیماری‌های عصبی:</strong> تحقیقات نشان داده که مصرف متعادل کافئین می‌تواند ریسک ابتلا به پارکینسون و آلزایمر را کاهش دهد.</li>
            <li><strong>تحریک متابولیسم:</strong> کافئین سرعت سوخت‌وساز پایه بدن را ۳ تا ۱۱ درصد افزایش می‌دهد که به مدیریت وزن کمک می‌کند.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۲. تأثیرات منفی کافئین (نیمه تاریک ماجرا)
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            مصرف بیش از حد (معمولاً بیش از ۴۰۰ میلی‌گرم در روز) یا حساسیت فردی می‌تواند منجر به عوارض جدی شود:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>اضطراب و بی‌خوابی:</strong> کافئین می‌تواند باعث تحریک بیش از حد سیستم عصبی شود که نتیجه آن لرزش دست، بی‌قراری و اختلال در چرخه <Link to="/articles/sleep-apnea-heart" className="text-primary hover:underline">خواب عمیق</Link> است.</li>
            <li><strong>مشکلات گوارشی:</strong> کافئین ترشح اسید معده را افزایش می‌دهد. افرادی که دچار رفلاکس هستند، با مصرف قهوه شاهد تشدید سوزش مری خواهند بود. (در این موارد مصرف <Link to="/articles/famotidine" className="text-primary hover:underline">فاموتیدین</Link> با نظر پزشک تجویز می‌شود).</li>
            <li><strong>پوکی استخوان:</strong> مصرف خیلی زیاد کافئین می‌تواند مانع جذب <Link to="/articles/calcium-supplement" className="text-primary hover:underline">کلسیم</Link> در روده‌ها شده و دفع آن را از طریق ادرار افزایش دهد.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۳. تأثیر کافئین بر قلب؛ زنگ خطر برای بیماران عروقی
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            بزرگترین چالش کافئین، تأثیر آن بر ضربان قلب و <Link to="/articles/blood-pressure-readings" className="text-primary hover:underline">فشار خون</Link> است. در اینجا نقش خدمات تخصصی نوید زندگی پررنگ می‌شود:
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">الف) تپش قلب و آریتمی (هولتر قلب در منزل)</h3>
          <p className="text-foreground/90 leading-8 mb-4">
            کافئین یک محرک قوی است. در برخی افراد، مصرف حتی یک فنجان قهوه می‌تواند باعث ایجاد ضربان‌های اضافه (PVC) یا <Link to="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب</Link> ناگهانی شود.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>خدمات ما:</strong> اگر بعد از مصرف چای یا قهوه احساس تپش قلب غیرعادی دارید، ما با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، ریتم قلب شما را در طول فعالیت‌های روزمره چک می‌کنیم تا مطمئن شویم این تپش‌ها خطرناک نیستند.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">ب) افزایش فشار خون (هولتر فشار خون)</h3>
          <p className="text-foreground/90 leading-8 mb-4">
            کافئین باعث تنگ شدن موقتی عروق و افزایش فشار خون می‌شود. در افراد مبتلا به <Link to="/articles/resistant-hypertension" className="text-primary hover:underline">فشار خون بالا</Link>، این اثر می‌تواند شدیدتر باشد.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>خدمات ما:</strong> با استفاده از <Link to="/services/holter" className="text-primary hover:underline">هولتر فشار خون ۲۴ ساعته در منزل</Link>، تأثیر مصرف کافئین را بر نوسانات فشار خون شما بررسی می‌کنیم تا دوز داروهای فشار خونتان به درستی تنظیم شود.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">ج) پایش اکوکاردیوگرافی</h3>
          <p className="text-foreground/90 leading-8 mb-4">
            در افرادی که دچار <Link to="/articles/ejection-fraction" className="text-primary hover:underline">نارسایی قلبی</Link> هستند، مصرف زیاد کافئین می‌تواند فشار مضاعفی به عضله قلب وارد کند.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>خدمات ما:</strong> انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link> به متخصصین ما اجازه می‌دهد تا وضعیت دریچه‌ها و قدرت انقباضی قلب شما را در برابر محرک‌های محیطی ارزیابی کنند.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۴. چه میزان کافئین ایمن است؟
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            میزان مجاز مصرف روزانه کافئین بر اساس گروه‌های مختلف:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>بزرگسالان سالم:</strong> ۴۰۰ میلی‌گرم (معادل حدود ۴ فنجان قهوه دم‌کرده)</li>
            <li><strong>بیماران قلبی:</strong> زیر ۲۰۰ میلی‌گرم (حتماً با مشورت پزشک)</li>
            <li><strong>زنان باردار:</strong> زیر ۲۰۰ میلی‌گرم (معادل ۱ تا ۲ فنجان کوچک)</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">نتیجه‌گیری</h2>
          <p className="text-foreground/90 leading-8 mb-6">
            کافئین تیغ دو لبه است؛ می‌تواند شما را هوشیارتر کند یا قلبتان را به تپش‌های خطرناک بیندازد. اگر سابقه فشار خون، آریتمی یا نارسایی قلبی دارید، باید مصرف کافئین را تحت نظارت دقیق مدیریت کنید. مرکز نوید زندگی با اعزام <Link to="/services/specialist" className="text-primary hover:underline">متخصص داخلی به منزل</Link> و انجام پایش‌های <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو</Link> و <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link>، به شما کمک می‌کند تا بدون به خطر انداختن سلامت قلب، از نوشیدنی‌های محبوبتان لذت ببرید.
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
            <p className="text-foreground font-bold text-lg mb-3">
              پایش اثرات کافئین بر قلب شما در منزل
            </p>
            <p className="text-muted-foreground mb-4">
              همین حالا با کارشناسان نوید زندگی تماس بگیرید
            </p>
            <a href="tel:09386117912">
              <Button className="gap-2">
                <Phone className="h-4 w-4" />
                تماس: ۰۹۳۸۶۱۱۷۹۱۲
              </Button>
            </a>
          </div>

          <p className="text-xs text-muted-foreground mb-8">
            منابع: Harvard Health: Coffee and Heart Disease | AHA: Caffeine and Blood Pressure | Mayo Clinic: Caffeine Content Guide
          </p>

          <PricingInfo />
          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </div>
    </ArticleLayout>
  );
};

export default CaffeineHeartEffectsPage;
