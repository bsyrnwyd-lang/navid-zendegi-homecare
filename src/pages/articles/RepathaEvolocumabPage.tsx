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
import repathaImage from "@/assets/repatha-evolocumab-article.jpg";
import atorvastatinImage from "@/assets/atorvastatin-medication.jpg";
import rosuvastatinImage from "@/assets/rosuvastatin-medication.jpg";
import dopplerDVTImage from "@/assets/doppler-ultrasound-dvt.jpg";

const RepathaEvolocumabPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "رپتا (Repatha)", url: "" }
  ];

  const faqs = [
    {
      question: "رپتا چیست و چه تفاوتی با استاتین‌ها دارد؟",
      answer: "رپتا (اولوسوکومب) یک آنتی‌بادی منوکلونال مهارکننده PCSK9 است که برخلاف استاتین‌ها که تولید کلسترول در کبد را مهار می‌کنند، با افزایش گیرنده‌های LDL در کبد، پاکسازی کلسترول بد از خون را تسریع می‌کند."
    },
    {
      question: "رپتا چگونه تزریق می‌شود؟",
      answer: "رپتا به صورت تزریق زیرپوستی با قلم مخصوص (مشابه انسولین) در ران، شکم یا بازو انجام می‌شود. معمولاً هر دو هفته یک‌بار یا ماهی یک‌بار تزریق می‌شود."
    },
    {
      question: "چه کسانی کاندیدای مصرف رپتا هستند؟",
      answer: "بیماران مبتلا به کلسترول بالای ارثی، افرادی که با وجود مصرف استاتین LDL بالای ۷۰ دارند، و بیمارانی که به استاتین‌ها تحمل ندارند از کاندیداهای اصلی هستند."
    },
    {
      question: "عوارض جانبی رپتا چیست؟",
      answer: "شایع‌ترین عوارض شامل علائم شبیه سرماخوردگی، گلودرد، آبریزش بینی و قرمزی محل تزریق است. عوارض جدی بسیار نادر هستند اما در صورت بروز هر علامت غیرعادی باید با پزشک مشورت کنید."
    },
    {
      question: "آیا می‌توان رپتا را همراه با استاتین مصرف کرد؟",
      answer: "بله، در بسیاری از موارد رپتا همراه با استاتین تجویز می‌شود تا حداکثر کاهش کلسترول LDL حاصل شود. این ترکیب باید حتماً تحت نظر پزشک متخصص باشد."
    }
  ];

  const relatedArticles = [
    {
      title: "آتورواستاتین؛ راهنمای کامل مصرف و عوارض",
      description: "آتورواستاتین یکی از پرمصرف‌ترین داروهای کاهش چربی خون است.",
      image: atorvastatinImage,
      link: "/articles/atorvastatin",
      category: "دارو"
    },
    {
      title: "رُزُواستاتین؛ قدرتمندترین استاتین",
      description: "راهنمای جامع رُزُواستاتین برای کاهش کلسترول و پیشگیری از بیماری قلبی.",
      image: rosuvastatinImage,
      link: "/articles/rosuvastatin",
      category: "دارو"
    },
    {
      title: "سونوگرافی داپلر؛ تشخیص لخته و تنگی عروق",
      description: "نقش سونوگرافی داپلر در تشخیص بیماری‌های عروقی در منزل.",
      image: dopplerDVTImage,
      link: "/articles/doppler-dvt",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="رپتا (Repatha)؛ پایان عصر کلسترول بالا؟ | نوید زندگی"
        description="راهنمای جامع داروی رپتا (اولوسوکومب): مکانیسم مهار PCSK9، تاریخچه، عوارض، و پایش با سونوگرافی داپلر و آزمایشگاه سیار در منزل"
        keywords="رپتا, Repatha, اولوسوکومب, Evolocumab, PCSK9, کلسترول بالا, چربی خون ارثی, سونوگرافی داپلر منزل"
        ogType="article"
        publishedTime="2026-02-24"
      />
      <ArticleSchema
        title="رپتا (Repatha)؛ پایان عصر کلسترول بالا؟ (تکنولوژی نوین در خدمت قلب)"
        description="راهنمای جامع داروی رپتا (اولوسوکومب): مکانیسم مهار PCSK9، تاریخچه، عوارض، و پایش با سونوگرافی داپلر و آزمایشگاه سیار در منزل"
        publishedTime="2026-02-24"
        modifiedTime="2026-02-24"
        image={repathaImage}
      />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="mt-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-4">
            رپتا (Repatha)؛ پایان عصر کلسترول بالا؟ (تکنولوژی نوین در خدمت قلب)
          </h1>

          <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: ۱۴۰۴/۱۲/۰۶</p>

          <img
            src={repathaImage}
            alt="داروی رپتا (اولوسوکومب) - مهارکننده PCSK9 برای کاهش کلسترول"
            className="w-full max-h-[400px] object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <p className="text-foreground/90 leading-8 mb-6">
            برای سال‌ها، استاتین‌ها تنها قهرمانان مبارزه با چربی خون بودند. اما بسیاری از بیماران یا به دوزهای بالای استاتین پاسخ نمی‌دادند و یا دچار عوارض شدیدی مثل دردهای عضلانی می‌شدند. ظهور داروی رپتا، دریچه‌ای جدید به سوی درمان افرادی گشود که کلسترول خونشان به هیچ وجه پایین نمی‌آمد.
          </p>

          <p className="text-foreground/90 leading-8 mb-6">
            مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با پایش‌های <Link to="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی داپلر</Link> و آزمایشگاه سیار، اثربخشی این داروی نوین را در پاکسازی عروق شما رصد می‌کند.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
            <p className="text-destructive font-semibold text-sm">
              ⚠️ هشدار مهم: هرگز بدون تجویز پزشک متخصص اقدام به مصرف یا قطع هیچ دارویی نکنید. خوددرمانی خطرناک است.
            </p>
          </div>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۱. تاریخچه: از آزمایشگاه ژنتیک تا تاییدیه جهانی
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            کشف رپتا مدیون درک عمیق‌تری از ژنتیک انسان است:
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>کشف آنزیم PCSK9:</strong> دانشمندان متوجه شدند افرادی که به طور طبیعی سطح آنزیم PCSK9 در خونشان پایین است، سطح کلسترول بسیار پایینی دارند و هرگز دچار سکته قلبی نمی‌شوند.</li>
            <li><strong>تولید دارو:</strong> شرکت آمژن (Amgen) موفق شد آنتی‌بادی تولید کند که این آنزیم را مهار کند.</li>
            <li><strong>تاییدیه (۲۰۱۵):</strong> سازمان غذا و داروی آمریکا (FDA) رپتا را به عنوان اولین داروی مهارکننده PCSK9 تایید کرد. این دارو برای افرادی با چربی خون ارثی (HeFH) و بیماران قلبی مقاوم به درمان، یک معجزه بود.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۲. مکانیسم اثر: رپتا چگونه کبد را به جاروبرقی کلسترول تبدیل می‌کند؟
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            برای درک رپتا، باید بدانید که کبد ما دارای «گیرنده‌های LDL» است که کلسترول بد را از خون جمع می‌کنند.
          </p>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li><strong>مشکل:</strong> آنزیمی به نام PCSK9 این گیرنده‌ها را تخریب می‌کند. هرچه این آنزیم فعال‌تر باشد، گیرنده‌های کمتری برای پاکسازی خون وجود دارد.</li>
            <li><strong>راهکار رپتا:</strong> این دارو مستقیماً به آنزیم PCSK9 می‌چسبد و آن را غیرفعال می‌کند. در نتیجه، کبد می‌تواند گیرنده‌های بیشتری تولید کند. این یعنی کبد مثل یک «جاروبرقی قدرتمند»، کلسترول LDL را از خون می‌کشد و سطح آن را گاهی تا ۶۰ درصد کاهش می‌دهد.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۳. نقش نوید زندگی در پایش درمان با رپتا
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            رپتا یک داروی تزریقی است و به دلیل قدرت بسیار بالا در کاهش چربی، نیاز به نظارت دقیق دارد:
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">
            الف) سونوگرافی داپلر عروق در منزل
          </h3>
          <p className="text-foreground/90 leading-8 mb-4">
            هدف نهایی رپتا، جلوگیری از تشکیل پلاک در رگ‌ها یا کوچک کردن پلاک‌های موجود است. متخصصین ما با انجام <Link to="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی داپلر عروق کاروتید</Link> و اندام‌ها در منزل، قبل و شش ماه بعد از شروع رپتا، میزان ضخامت دیواره رگ‌های شما را اندازه می‌گیرند تا عقب‌نشینی رسوبات چربی را به صورت علمی مشاهده کنید.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">
            ب) اکوکاردیوگرافی و بررسی پلاک‌های قلبی
          </h3>
          <p className="text-foreground/90 leading-8 mb-4">
            رپتا ریسک سکته مجدد را به شدت کاهش می‌دهد. با انجام <Link to="/services/echocardiography" className="text-primary hover:underline">اکو در منزل</Link>، وضعیت دریچه‌ها و عملکرد دیواره‌های قلب را در بیمارانی که سابقه سکته داشته و اکنون رپتا مصرف می‌کنند، پایش می‌کنیم.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-6 mb-3">
            ج) آزمایشگاه سیار برای پروفایل لیپید
          </h3>
          <p className="text-foreground/90 leading-8 mb-4">
            تنظیم دوز رپتا (تزریق هر ۲ هفته یا ماهی یک‌بار) نیاز به چکاپ دقیق دارد. تیم آزمایشگاه ما با حضور در منزل، سطح LDL، HDL و آنزیم‌های کبدی شما را اندازه‌گیری می‌کند تا پزشک متخصص در <Link to="/services/specialist" className="text-primary hover:underline">ویزیت منزل</Link>، بهترین پروتکل تزریق را برای شما بنویسد.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۴. چه کسانی باید رپتا مصرف کنند؟
          </h2>
          <ul className="list-disc pr-6 space-y-3 text-foreground/90 leading-8 mb-6">
            <li>بیماران مبتلا به کلسترول بالای ارثی (Familial Hypercholesterolemia).</li>
            <li>افرادی که دچار <Link to="/articles/silent-heart-attack" className="text-primary hover:underline">سکته قلبی</Link> یا مغزی شده‌اند و با وجود مصرف استاتین، LDL آن‌ها بالای ۷۰ باقی مانده است.</li>
            <li>بیمارانی که نسبت به <Link to="/articles/atorvastatin" className="text-primary hover:underline">استاتین‌ها</Link> عدم تحمل دارند (دچار دردهای شدید عضلانی یا آسیب کبدی می‌شوند).</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            ۵. عوارض جانبی و شیوه مصرف
          </h2>
          <p className="text-foreground/90 leading-8 mb-4">
            <strong>شیوه مصرف:</strong> رپتا به صورت یک «قلم تزریقی» (مشابه انسولین) زیر پوست ران، شکم یا بازو تزریق می‌شود.
          </p>
          <p className="text-foreground/90 leading-8 mb-6">
            <strong>عوارض احتمالی:</strong> علائم شبیه سرماخوردگی، گلودرد، آبریزش بینی و قرمزی در محل تزریق. در موارد بسیار نادر، ممکن است بر حافظه یا تمرکز اثر بگذارد که نیاز به بررسی پزشک دارد.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">نتیجه‌گیری</h2>
          <p className="text-foreground/90 leading-8 mb-6">
            رپتا فراتر از یک داروی چربی خون ساده است؛ این دارو یک «مهندس بیولوژیک» است که امنیت عروق شما را تضمین می‌کند. اگر شما هم جزو افرادی هستید که کلسترول خونتان با داروهای معمولی کنترل نمی‌شود، تیم نوید زندگی آماده است تا با پکیج تخصصی (ویزیت، آزمایش و سونوگرافی در منزل)، مسیر درمان با این تکنولوژی نوین را برای شما هموار کند.
          </p>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
            <p className="text-foreground font-bold text-lg mb-3">
              مشاوره و پایش تخصصی داروی رپتا در منزل
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
            منابع: Amgen (Repatha Official) | NEJM: FOURIER Study | Mayo Clinic: PCSK9 Inhibitors
          </p>

          <PricingInfo />
          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </div>
    </ArticleLayout>
  );
};

export default RepathaEvolocumabPage;
