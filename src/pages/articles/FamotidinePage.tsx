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
import famotidineImage from "@/assets/famotidine-article.jpg";
import postprandialImage from "@/assets/postprandial-hypotension.jpg";
import repathaImage from "@/assets/repatha-evolocumab-article.jpg";
import ejectionFractionImage from "@/assets/ef-ejection-fraction.jpg";

const FamotidinePage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "فاموتیدین (Famotidine)", url: "" }
  ];

  const faqs = [
    {
      question: "فاموتیدین چیست و برای چه بیماری‌هایی تجویز می‌شود؟",
      answer: "فاموتیدین یک مسدودکننده گیرنده H2 هیستامین است که با کاهش تولید اسید معده، برای درمان زخم معده، رفلاکس معده به مری (GERD) و سوزش سردل استفاده می‌شود."
    },
    {
      question: "آیا فاموتیدین برای بیماران قلبی بی‌خطر است؟",
      answer: "بله، فاموتیدین نسبت به سایر داروهای معده (مثل امپرازول) تداخل کمتری با داروهای قلبی مانند پلاویکس دارد و معمولاً انتخاب اول برای بیماران قلبی با مشکلات گوارشی است."
    },
    {
      question: "تفاوت فاموتیدین با امپرازول چیست؟",
      answer: "فاموتیدین گیرنده H2 را مسدود می‌کند در حالی که امپرازول پمپ پروتون را مهار می‌کند. امپرازول قوی‌تر است اما تداخلات دارویی بیشتری دارد، به‌خصوص با داروهای ضد لخته خون."
    },
    {
      question: "آیا مصرف طولانی‌مدت فاموتیدین عوارضی دارد؟",
      answer: "مصرف طولانی‌مدت (چندین ساله) ممکن است جذب ویتامین B12 را کاهش دهد. همچنین در سالمندان با نارسایی کلیوی باید دوز تنظیم شود."
    },
    {
      question: "چگونه بفهمم درد قفسه سینه‌ام قلبی است یا معده‌ای؟",
      answer: "اگر درد با مصرف فاموتیدین کاهش یابد، احتمالاً معده‌ای است. اما هرگز ریسک نکنید؛ انجام نوار قلب و اکو توسط متخصص در منزل بهترین راه تشخیص قطعی است."
    }
  ];

  const relatedArticles = [
    {
      title: "افت فشار خون بعد از غذا؛ پدیده‌ای شایع در سالمندان",
      description: "راهنمای کامل افت فشار خون بعد از غذا و راهکارهای عملی.",
      image: postprandialImage,
      link: "/articles/postprandial-hypotension",
      category: "قلب و عروق"
    },
    {
      title: "رپتا (Repatha)؛ تکنولوژی نوین کاهش چربی خون",
      description: "راهنمای جامع داروی رپتا و مکانیسم مهار PCSK9.",
      image: repathaImage,
      link: "/articles/repatha-evolocumab",
      category: "دارو"
    },
    {
      title: "عدد EF در اکو قلب چیست؟",
      description: "تفسیر کسر تخلیه‌ای قلب و معنای درصدهای مختلف.",
      image: ejectionFractionImage,
      link: "/articles/ejection-fraction",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="فاموتیدین (Famotidine)؛ نگهبان هوشمند معده | نوید زندگی"
        description="راهنمای جامع فاموتیدین: تاریخچه، مکانیسم مهار گیرنده H2، تفاوت درد قلب و معده، عوارض و خدمات پایش در منزل"
        keywords="فاموتیدین, قرص فاموتیدین ۴۰, کوآموتل, تفاوت درد قلب و معده, رفلاکس معده, ویزیت متخصص منزل"
        ogType="article"
        publishedTime="2026-02-24"
      />
      <ArticleSchema
        title="فاموتیدین؛ نگهبان هوشمند معده (تاریخچه، عملکرد و هشدارهای قلبی)"
        description="راهنمای جامع فاموتیدین: تاریخچه، مکانیسم مهار گیرنده H2، تفاوت درد قلب و معده، عوارض و خدمات پایش در منزل"
        publishedTime="2026-02-24"
        modifiedTime="2026-02-24"
        image={famotidineImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="mt-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-4">
            فاموتیدین؛ نگهبان هوشمند معده (تاریخچه، عملکرد و هشدارهای قلبی)
          </h1>

          <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: ۱۴۰۴/۱۲/۰۶</p>

          <img
            src={famotidineImage}
            alt="فاموتیدین - مسدودکننده گیرنده H2 معده"
            className="w-full max-h-[400px] object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <p className="text-foreground/90 leading-8 mb-6">
            دردهای ناحیه قفسه سینه همیشه قلبی نیستند؛ بسیاری از اوقات، اسید معده است که با بازگشت به مری، دردی مشابه <Link to="/articles/silent-heart-attack" className="text-primary hover:underline">سکته قلبی</Link> ایجاد می‌کند. فاموتیدین دارویی است که با مدیریت اسید معده، به پزشکان کمک می‌کند تا میان «درد معده» و «درد قلب» تفکیک قائل شوند.
          </p>

          <p className="text-foreground/90 leading-8 mb-6">
            مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با ارائه <Link to="/services/specialist" className="text-primary hover:underline">ویزیت متخصص</Link> و تجهیزات تشخیصی در منزل، به شما کمک می‌کند تا منشاء واقعی دردهای خود را پیدا کنید.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
            <p className="text-destructive font-semibold text-sm">
              ⚠️ هشدار مهم: هرگز بدون تجویز پزشک متخصص اقدام به مصرف یا قطع هیچ دارویی نکنید. خوددرمانی خطرناک است.
            </p>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۱. تاریخچه: تکامل در خط مقدم درمان معده
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            قبل از دهه ۱۹۷۰، درمان زخم معده عمدتاً به جراحی یا استفاده از شربت‌های آنتی‌اسید ساده محدود می‌شد.
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>کشف نسل اول:</strong> ابتدا داروی سایمتیدین کشف شد، اما عوارض جانبی و تداخلات دارویی زیادی داشت.</li>
            <li><strong>تولد فاموتیدین:</strong> در سال ۱۹۷۹، دانشمندان ژاپنی شرکت Yamanouchi فاموتیدین را سنتز کردند. این دارو بسیار قوی‌تر از نسل‌های قبلی بود و تداخلات دارویی بسیار کمتری داشت.</li>
            <li><strong>تاییدیه FDA:</strong> در سال ۱۹۸۶، این دارو مجوز رسمی گرفت و به سرعت جایگزین داروهای قدیمی‌تر شد.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۲. مکانیسم اثر: فاموتیدین چگونه اسید را مهار می‌کند؟
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            برخلاف آنتی‌اسیدها (مثل شربت آلومینیوم ام‌جی) که فقط اسید موجود را خنثی می‌کنند، فاموتیدین از «تولید» اسید جلوگیری می‌کند.
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>مسدودکننده گیرنده H2:</strong> در دیواره معده، گیرنده‌هایی برای «هیستامین» وجود دارد که به محض تحریک، دستور ترشح اسید را می‌دهند. فاموتیدین مانند یک کلید که در قفل گیر می‌کند، این گیرنده‌ها را مسدود کرده و اجازه نمی‌دهد هیستامین پیام ترشح اسید را ارسال کند.</li>
            <li><strong>اثر طولانی‌مدت:</strong> یک قرص فاموتیدین می‌تواند بین ۱۰ تا ۱۲ ساعت ترشح اسید را کنترل کند، که برای پیشگیری از دردهای شبانه عالی است.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۳. فاموتیدین و قلب؛ تشخیص افتراقی در نوید زندگی
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            یکی از چالش‌های بزرگ در ویزیت‌های منزل، تشخیص درد معده از درد قلب است.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">
            الف) درد قفسه سینه؛ معده یا قلب؟
          </h3>
          <p className="text-foreground/90 leading-8 mb-4">
            بسیاری از بیماران با شکایت از سوزش قفسه سینه با ما تماس می‌گیرند. اگر این درد با مصرف فاموتیدین آرام شود، احتمالاً منشاء گوارشی دارد. اما ریسک نکنید! متخصصین نوید زندگی در مواجهه با این دردها، ابتدا با <Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب (ECG) و اکو در منزل</Link>، سلامت قلب را تایید می‌کنند و سپس به سراغ درمان‌های گوارشی مثل فاموتیدین می‌روند.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">
            ب) فاموتیدین؛ جایگزینی ایمن برای بیماران قلبی
          </h3>
          <p className="text-foreground/90 leading-8 mb-4">
            برخی داروهای معده (مثل امپرازول) ممکن است با داروهای ضد لخته خون (مثل پلاویکس) تداخل داشته باشند. فاموتیدین تداخل بسیار کمتری با <Link to="/articles/heart-failure-drug-interactions" className="text-primary hover:underline">داروهای قلبی</Link> دارد و اغلب انتخاب اول برای بیماران قلبی است که دچار مشکلات معده هستند.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>پایش فشار خون:</strong> در موارد نادر، فاموتیدین می‌تواند باعث آریتمی یا نوسان فشار شود. ما با <Link to="/services/holter" className="text-primary hover:underline">هولتر فشار خون ۲۴ ساعته در منزل</Link>، اثرات داروها را بر سیستم گردش خون شما رصد می‌کنیم.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۴. کاربردهای نوین: فاموتیدین و سیستم ایمنی
          </h2>
          <p className="text-foreground/90 leading-8 mb-6">
            در سال‌های اخیر، تحقیقاتی نشان داد که فاموتیدین ممکن است با مهار طوفان سیتوکینی در بیماری‌های ویروسی (مثل کرونا) نقش داشته باشد. اگرچه این یک درمان قطعی نیست، اما نشان‌دهنده پتانسیل بالای این دارو در تنظیم پاسخ‌های التهابی بدن است.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۵. عوارض جانبی و هشدارها
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            فاموتیدین بسیار ایمن است، اما در موارد زیر باید احتیاط کرد:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>نارسایی کلیوی:</strong> دفع این دارو از طریق کلیه است. در سالمندان با نارسایی کلیه، دوز دارو باید کاهش یابد. تیم ما با <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link>، سطح کراتینین شما را چک می‌کند.</li>
            <li><strong>گیجی در سالمندان:</strong> در دوزهای بالا، ممکن است باعث سرگیجه یا توهم در افراد مسن شود.</li>
            <li><strong>تداخل با جذب ویتامین B12:</strong> مصرف طولانی‌مدت (چندین ساله) می‌تواند جذب B12 را کم کند.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">نتیجه‌گیری</h2>
          <p className="text-foreground/90 leading-8 mb-6">
            فاموتیدین دارویی هوشمند برای مدیریت اسید معده است که امنیت بالایی در بیماران قلبی دارد. با این حال، نباید اجازه دهید تسکین درد توسط فاموتیدین، ماسکی بر روی دردهای جدی قلبی باشد. مرکز نوید زندگی با ترکیب تخصص داخلی و پایش‌های قلبی (<Link to="/services/echo-ecg" className="text-primary hover:underline">اکو</Link> و <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link>) در منزل، اطمینان حاصل می‌کند که درمان شما دقیق و بدون خطا باشد.
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
            <p className="text-foreground font-bold text-lg mb-3">
              تشخیص دقیق درد قفسه سینه در منزل
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
            منابع: FDA: Pepcid prescribing information | Harvard Health: Heartburn or Heart Attack | Journal of Internal Medicine
          </p>

          <PricingInfo />
          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </div>
    </ArticleLayout>
  );
};

export default FamotidinePage;
