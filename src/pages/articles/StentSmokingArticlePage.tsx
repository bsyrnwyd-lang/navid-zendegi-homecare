import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/stent-smoking-article.jpg";
import smokingHeartImage from "@/assets/drug-cardiovascular-effects.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import silentHeartAttackImage from "@/assets/silent-heart-attack.jpg";

const StentSmokingArticlePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "استنت و سیگار؛ ترکیب مرگبار", url: "/articles/stent-smoking-danger" }
  ];

  const faqs = [
    {
      question: "آیا بعد از استنت‌گذاری می‌توان سیگار کشید؟",
      answer: "خیر، به هیچ وجه. سیگار کشیدن بعد از استنت‌گذاری خطر لخته شدن خون روی استنت و سکته قلبی را ۲ تا ۴ برابر افزایش می‌دهد. ترک سیگار مهم‌ترین اقدام پس از استنت‌گذاری است."
    },
    {
      question: "تنگی مجدد استنت (Restenosis) چیست؟",
      answer: "تنگی مجدد زمانی رخ می‌دهد که بافت زخمی روی استنت رشد کرده و مسیر رگ را دوباره ببندد. سیگار با تحریک لایه داخلی رگ، سرعت این فرآیند را به شدت افزایش می‌دهد."
    },
    {
      question: "اکوکاردیوگرافی در منزل چگونه به بررسی استنت کمک می‌کند؟",
      answer: "اکو قلب قدرت پمپاژ قلب و حرکت دیواره‌های مرتبط با استنت را بررسی می‌کند. اگر خون‌رسانی از طریق استنت مختل شده باشد، حرکت غیرطبیعی دیواره قلب در اکو قابل مشاهده است."
    },
    {
      question: "آیا سیگار الکترونیکی هم برای استنت مضر است؟",
      answer: "بله. سیگار الکترونیکی نیز حاوی نیکوتین است و می‌تواند باعث اسپاسم عروق کرونر و افزایش چسبندگی پلاکت‌ها شود. هیچ شکل ایمنی از مصرف نیکوتین برای بیمار استنت‌دار وجود ندارد."
    },
    {
      question: "چه آزمایش‌هایی بعد از استنت‌گذاری باید انجام شود؟",
      answer: "آزمایش‌های انعقادی، پروفایل لیپید (چربی خون)، قند خون و فاکتورهای التهابی باید به صورت دوره‌ای بررسی شوند. تیم آزمایشگاه سیار نوید زندگی این آزمایش‌ها را در منزل انجام می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "تأثیر سیگار بر قلب و عروق",
      description: "بررسی جامع اثرات مخرب سیگار بر سیستم قلبی عروقی",
      link: "/articles/smoking-heart-effects",
      image: smokingHeartImage,
      category: "قلب و عروق"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "همه چیز درباره انجام اکو قلب در منزل و مزایای آن",
      link: "/articles/echo-home",
      image: echoHomeImage,
      category: "قلب و عروق"
    },
    {
      title: "سکته قلبی خاموش؛ تشخیص و پیشگیری",
      description: "علائم سکته قلبی بی‌سروصدا و نقش پایش‌های دوره‌ای در تشخیص",
      link: "/articles/silent-heart-attack",
      image: silentHeartAttackImage,
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="استنت و سیگار؛ چرا این ترکیب مرگبار است؟ | نوید زندگی"
        description="بررسی علمی تأثیر سیگار بر استنت قلب: لخته شدن، تنگی مجدد و اسپاسم عروق. خدمات اکو قلب و آزمایش خون در منزل نوید زندگی."
        keywords="عوارض سیگار بعد از فنر قلب، لخته شدن خون در استنت، اکوکاردیوگرافی در منزل، تنگی مجدد رگ قلب، ویزیت متخصص قلب در خانه، نوید زندگی"
        canonical="https://navidzendegi.com/articles/stent-smoking-danger"
        ogType="article"
      />
      <ArticleSchema
        title="استنت و سیگار؛ چرا این ترکیب می‌تواند مرگبار باشد؟"
        description="بررسی علمی تأثیر سیگار بر استنت قلب و خدمات پایش در منزل"
        publishedTime="2026-03-10"
        modifiedTime="2026-03-10"
        image={heroImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <img
          src={heroImage}
          alt="استنت و سیگار - تأثیر مخرب سیگار بر استنت قلب"
          className="w-full rounded-2xl shadow-lg mb-8 mt-6"
        />

        <p className="text-sm text-muted-foreground mb-4">تاریخ انتشار: ۲۰ اسفند ۱۴۰۴</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          استنت و سیگار؛ چرا این ترکیب می‌تواند مرگبار باشد؟
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          استنت یک وسیله فلزی ظریف است که برای باز نگه داشتن رگ مسدود شده استفاده می‌شود. بدن انسان به طور طبیعی استنت را یک «جسم خارجی» تلقی می‌کند. در شرایط عادی، داروهای ضدپلاکت اجازه نمی‌دهند خون روی این فنر لخته شود. اما سیگار تمام این معادلات را به هم می‌زند.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          مرکز نوید زندگی با انجام <Link to="/services/echo-ecg" className="text-primary font-bold hover:underline">اکوکاردیوگرافی</Link> و آنالیز فاکتورهای خونی در منزل، وضعیت خون‌رسانی و سلامت استنت‌های شما را رصد می‌کند تا از انسداد مجدد جلوگیری شود.
        </p>

        {/* بخش ۱ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۱. مکانیسم تخریب: سیگار با استنت چه می‌کند؟</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          سیگار از سه مسیر اصلی باعث شکست درمان با استنت می‌شود:
        </p>

        <h3 className="text-xl font-bold mb-3">الف) ترومبوز استنت (لخته شدن ناگهانی)</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          سموم موجود در سیگار باعث «چسبنده شدن» پلاکت‌های خون می‌شوند. این چسبندگی به قدری زیاد است که حتی داروهای ضد لخته هم نمی‌توانند جلوی تشکیل لخته روی بدنه استنت را بگیرند. نتیجه: لخته شدن خون روی استنت باعث <Link to="/articles/silent-heart-attack" className="text-primary font-bold hover:underline">سکته قلبی</Link> وسیع و ناگهانی می‌شود.
        </p>

        <h3 className="text-xl font-bold mb-3">ب) تنگی مجدد داخل استنت (Restenosis)</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          نیکوتین و کربن‌مونوکسید باعث تحریک لایه داخلی رگ (Endothelium) می‌شوند. این تحریک باعث می‌شود بافت‌های زخمی (Scar Tissue) با سرعت عجیبی روی استنت رشد کنند و مسیر رگ را دوباره ببندند.
        </p>

        <h3 className="text-xl font-bold mb-3">ج) اسپاسم عروق کرونر</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          سیگار باعث انقباض ناگهانی رگ‌های قلب می‌شود. وقتی رگی که استنت دارد دچار اسپاسم شود، فشار زیادی به دیواره رگ وارد شده و ممکن است باعث جابه‌جایی میکروسکوپی یا پارگی لایه‌های ظریف رگ شود.
        </p>

        {/* بخش ۲ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۲. سموم سیگار و خنثی کردن داروها</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          جالب است بدانید سیگار کشیدن می‌تواند متابولیسم داروهای قلبی را در کبد تغییر دهد. در برخی افراد، سیگار اثر داروهای ضد لخته را کاهش می‌دهد، که یعنی بیمار با وجود مصرف منظم قرص، همچنان در معرض خطر سکته است.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          تیم <Link to="/services/laboratory" className="text-primary font-bold hover:underline">آزمایشگاه سیار ما</Link> با حضور در منزل، تست‌های انعقادی و پروفایل لیپید شما را چک می‌کند تا مطمئن شویم سطح داروها برای محافظت از استنت کافی است.
        </p>

        {/* بخش ۳ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۳. نقش پایش‌های دوره‌ای «نوید زندگی» برای افراد سیگاری</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          اگر سابقه استنت دارید و هنوز سیگار می‌کشید (یا به تازگی ترک کرده‌اید)، پایش‌های زیر در منزل برای شما حیاتی است:
        </p>

        <h3 className="text-xl font-bold mb-3">الف) اکوکاردیوگرافی پرتابل</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          بررسی قدرت پمپاژ قلب (EF) و حرکت دیواره‌هایی که استنت در عروق مربوط به آن‌ها قرار دارد. <Link to="/services/echo-ecg" className="text-primary font-bold hover:underline">متخصص قلب در منزل</Link> با اکو بررسی می‌کند که آیا خون‌رسانی از طریق استنت همچنان به درستی انجام می‌شود یا خیر.
        </p>

        <h3 className="text-xl font-bold mb-3">ب) هولتر قلب ۲۴ ساعته</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          سیگار باعث آریتمی و نوسانات ضربان قلب می‌شود که می‌تواند به استنت فشار بیاورد. نصب <Link to="/services/holter" className="text-primary font-bold hover:underline">هولتر قلب در منزل</Link> برای شناسایی ضربان‌های نامنظم که ناشی از تحریک نیکوتین است.
        </p>

        <h3 className="text-xl font-bold mb-3">ج) ویزیت متخصص داخلی و مدیریت ترک</h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          ترک سیگار برای یک بیمار قلبی سخت است. <Link to="/services/specialist" className="text-primary font-bold hover:underline">پزشک ما در منزل</Link> با تجویز جایگزین‌های ایمن و داروهای کنترل استرس، این مسیر را برای شما هموار می‌کند.
        </p>

        {/* بخش ۴ */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">۴. آمار تکان‌دهنده (تلنگر علمی)</h2>

        <ul className="space-y-3 text-lg text-muted-foreground mb-8">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span>خطر بسته شدن مجدد استنت در افراد سیگاری <strong>۲ تا ۴ برابر</strong> بیشتر از افراد غیرسیگاری است.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
            <span>بیش از <strong>۵۰ درصد</strong> سکته‌های قلبی که در سال اول پس از فنر گذاشتن رخ می‌دهند، ناشی از ادامه مصرف سیگار است.</span>
          </li>
        </ul>

        {/* هشدار */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <p className="text-base font-bold text-destructive mb-2">⚠️ هشدار مهم</p>
          <p className="text-muted-foreground">
            هرگز بدون مشاوره پزشک متخصص، خود‌درمانی نکنید و داروهای قلبی خود را قطع نکنید. ترک سیگار باید تحت نظر پزشک و با برنامه‌ریزی انجام شود. در صورت بروز درد قفسه سینه، تنگی نفس شدید یا سرگیجه، فوراً با اورژانس تماس بگیرید.
          </p>
        </div>

        {/* نتیجه‌گیری */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">نتیجه‌گیری</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          استنت قلب یک «قطعه یدکی» دائمی نیست؛ بلکه ابزاری است که نیاز به نگهداری دارد. سیگار کشیدن پس از استنت‌گذاری، مانند ریختن بنزین روی آتش است. اگر می‌خواهید سرمایه‌گذاری که برای سلامت قلبتان کرده‌اید از بین نرود، ترک سیگار تنها راه است. مرکز نوید زندگی با تمام توان تشخیصی و درمانی خود در منزل، آماده است تا به شما در حفظ سلامت قلبتان کمک کند.
        </p>

        {/* CTA */}
        <div className="bg-muted/30 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-bold mb-3">دریافت خدمات تخصصی قلب در منزل</h3>
          <p className="text-muted-foreground mb-4">
            برای انجام اکو قلب، هولتر، آزمایش خون یا مشاوره ترک سیگار در منزل با ما تماس بگیرید:
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

export default StentSmokingArticlePage;
