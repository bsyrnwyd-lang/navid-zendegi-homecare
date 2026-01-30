import { Link } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import dopplerUltrasoundImage from "@/assets/doppler-ultrasound-dvt.jpg";
import varicoseVeinsImage from "@/assets/varicose-veins-article.jpg";
import legEdemaImage from "@/assets/leg-edema-article.jpg";
import heparinEnoxaparinImage from "@/assets/heparin-enoxaparin-article.jpg";

const DopplerDVTPage = () => {
  const publishDate = "۱۴۰۴/۱۱/۱۱";
  const isoPublishDate = "2026-01-30";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سونوگرافی داپلر و تشخیص DVT", url: "/articles/doppler-dvt" }
  ];

  const faqs = [
    {
      question: "DVT یا ترومبوز ورید عمقی چیست؟",
      answer: "ترومبوز ورید عمقی (DVT) یعنی تشکیل لخته خون در وریدهای عمقی بدن، معمولاً در پاها. این لخته می‌تواند کنده شده و به سمت ریه حرکت کند (آمبولی ریه) که وضعیتی تهدیدکننده حیات است."
    },
    {
      question: "چرا بیمار مشکوک به DVT نباید راه برود؟",
      answer: "فعالیت بدنی و جابه‌جایی می‌تواند باعث کنده شدن لخته و انتقال آن به قلب یا ریه شود. به همین دلیل، انجام سونوگرافی در منزل بدون نیاز به جابه‌جایی بیمار، ایمن‌ترین روش تشخیص است."
    },
    {
      question: "سونوگرافی داپلر چگونه لخته را تشخیص می‌دهد؟",
      answer: "داپلر رنگی به پزشک اجازه می‌دهد جریان خون را به صورت زنده مشاهده کند. اگر انسدادی ناشی از لخته وجود داشته باشد، جریان خون در آن نقطه قطع یا کند می‌شود و در همان لحظه قابل شناسایی است."
    },
    {
      question: "چه کسانی در معرض خطر بیشتری برای DVT هستند؟",
      answer: "افرادی که پس از جراحی‌های سنگین بی‌تحرک هستند، سالمندان بستری، مسافران سفرهای طولانی (بیش از ۴ ساعت)، افراد دارای واریس مزمن، و زنان باردار در معرض خطر بیشتری قرار دارند."
    },
    {
      question: "آیا واریس همیشه به معنای لخته خون است؟",
      answer: "خیر، واریس لزوماً به معنای وجود لخته نیست، اما نارسایی عروقی باید بررسی شود. سونوگرافی داپلر سلامت دریچه‌های رگ را ارزیابی می‌کند تا از پیشرفت بیماری و رسیدن به مرحله لخته شدن جلوگیری شود."
    }
  ];

  const relatedArticles = [
    {
      title: "واریس؛ علل، علائم و درمان",
      description: "راهنمای کامل واریس: علل، انواع درمان و پیشگیری از عوارض",
      image: varicoseVeinsImage,
      link: "/articles/varicose-veins",
      category: "عمومی"
    },
    {
      title: "ورم پا؛ زنگ خطر خاموش قلب یا مشکل ساده؟",
      description: "علل ورم پا و رابطه آن با بیماری قلبی، لخته وریدی و نارسایی کلیه",
      image: legEdemaImage,
      link: "/articles/leg-edema",
      category: "قلب و عروق"
    },
    {
      title: "راهنمای جامع هپارین و انوکساپارین",
      description: "مراقبت و تزریق داروهای ضدانعقاد در منزل",
      image: heparinEnoxaparinImage,
      link: "/articles/heparin-enoxaparin",
      category: "دارو"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="سونوگرافی داپلر در منزل | تشخیص لخته خون (DVT) | نوید زندگی"
        description="تشخیص فوری لخته خون در پا با سونوگرافی داپلر در منزل: علائم DVT، افراد در معرض خطر، مزایای سونوگرافی سیار و خدمات درمانی نوید زندگی"
        keywords="سونوگرافی داپلر در منزل, تشخیص لخته خون در پا, سونوگرافی عروق در محل, درمان واریس, DVT, ترومبوز ورید عمقی, نوید زندگی"
        canonical="https://navidzendegi.com/articles/doppler-dvt"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="ورم پا را جدی بگیرید؛ تشخیص فوری لخته خون (DVT) با سونوگرافی داپلر در منزل"
        description="تشخیص فوری لخته خون در پا با سونوگرافی داپلر در منزل و خدمات درمانی نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={dopplerUltrasoundImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              ورم پا را جدی بگیرید؛ تشخیص فوری لخته خون (DVT) با سونوگرافی داپلر در منزل
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: {publishDate}
            </p>
          </header>

          <img
            src={dopplerUltrasoundImage}
            alt="سونوگرافی داپلر عروق پا در منزل برای تشخیص لخته خون"
            className="w-full h-auto rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              آیا دچار ورم ناگهانی، درد یا قرمزی در یکی از پاهای خود شده‌اید؟ بسیاری از افراد این علائم را به گرفتگی عضلانی یا خستگی نسبت می‌دهند، اما در دنیای پزشکی، این‌ها نشانه‌های هشداردهنده <strong>ترومبوز ورید عمقی (DVT)</strong> یا همان لخته شدن خون در رگ‌های پا هستند. خطر بزرگ اینجاست که این لخته می‌تواند کنده شده و به سمت ریه حرکت کند (آمبولی ریه) که وضعیتی مرگبار است.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              مرکز خدمات پزشکی نوید زندگی با اعزام متخصص و انجام سونوگرافی داپلر عروق در منزل، این خطر پنهان را در سریع‌ترین زمان ممکن و بدون نیاز به جابه‌جایی بیمار تشخیص می‌دهد.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: در صورت مشاهده ورم ناگهانی پا همراه با درد، هرگز خوددرمانی نکنید و فوراً با پزشک مشورت کنید. جابه‌جایی بی‌مورد می‌تواند خطرناک باشد.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۱. چه کسانی در معرض خطر لخته شدن خون هستند؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              لخته شدن خون در پا معمولاً در شرایط زیر رخ می‌دهد:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>پس از جراحی‌های سنگین:</strong> به ویژه جراحی لگن، زانو یا قلب که بیمار مدتی بی‌تحرک است.</li>
              <li><strong>استراحت طولانی در بستر:</strong> بیماران سالمند یا کسانی که دوره نقاهت را می‌گذرانند.</li>
              <li><strong>سفرهای طولانی:</strong> نشستن بیش از ۴ ساعت در هواپیما یا اتومبیل.</li>
              <li><strong>واریس مزمن:</strong> نارسایی عروق که باعث کند شدن جریان خون می‌شود.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۲. چرا سونوگرافی در منزل بهترین انتخاب است؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              بیماری که مشکوک به لخته خون در پاست، نباید راه برود یا جابه‌جا شود؛ زیرا فعالیت بدنی می‌تواند باعث کنده شدن لخته و انتقال آن به قلب یا ریه شود.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              الف) سونوگرافی داپلر رنگی در محل
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              متخصصین نوید زندگی با دستگاه‌های پیشرفته سونوگرافی سیار به منزل شما می‌آیند. داپلر رنگی به پزشک اجازه می‌دهد تا جریان خون را به صورت زنده مشاهده کند. اگر انسدادی ناشی از لخته وجود داشته باشد، در همان لحظه شناسایی شده و اقدامات درمانی آغاز می‌شود.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ب) بررسی همزمان با هولتر و اکو (در صورت نیاز)
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              گاهی لخته‌های خون ریشه در نارسایی قلبی یا آریتمی‌های خاص دارند. در مرکز ما، اگر پزشک تشخیص دهد، علاوه بر سونوگرافی، می‌تواند از <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب</Link> برای بررسی ریتم‌های نامنظم یا <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link> برای سنجش قدرت پمپاژ قلب استفاده کند تا علت اصلی تشکیل لخته مشخص شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۳. علائم DVT که نیاز به سونوگرافی فوری دارند
            </h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>ورم در یکی از پاها</strong> (به ندرت هر دو پا).</li>
              <li><strong>درد یا حساسیت</strong> که معمولاً از ساق پا شروع می‌شود و شبیه گرفتگی است.</li>
              <li><strong>قرمز شدن یا تغییر رنگ پوست پا.</strong></li>
              <li><strong>احساس گرما</strong> در ناحیه ورم‌کرده.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۴. پیشگیری بهتر از درمان؛ پایش واریس در منزل
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              اگر دچار <Link to="/articles/varicose-veins" className="text-primary hover:underline">رگ‌های واریسی برجسته</Link> هستید، لزوماً به معنای وجود لخته نیست، اما نارسایی عروقی شما باید بررسی شود. سونوگرافی داپلر در منزل به شما کمک می‌کند تا میزان سلامت دریچه‌های رگ‌های خود را بدانید و از پیشرفت بیماری و رسیدن به مرحله لخته شدن جلوگیری کنید.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۵. ویزیت متخصص و درمان در محل
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              پس از انجام سونوگرافی، <Link to="/services/specialist-doctor" className="text-primary hover:underline">متخصص نوید زندگی</Link> نتایج را تحلیل کرده و در صورت نیاز، <Link to="/articles/heparin-enoxaparin" className="text-primary hover:underline">داروهای ضدانعقاد</Link> (رقیق‌کننده خون) را تجویز می‌کند. همچنین آموزش‌های لازم برای استفاده از جوراب‌های واریس یا حرکات ورزشی مجاز در منزل به بیمار داده می‌شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نتیجه‌گیری
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              زمان در تشخیص لخته خون حرف اول را می‌زند. جابه‌جا کردن بیماری که ورم پا دارد در ترافیک و راهروهای مراکز درمانی، ریسک آمبولی را افزایش می‌دهد. مرکز نوید زندگی با آوردن تجهیزات سونوگرافی داپلر، اکو و هولتر به منزل، ایمن‌ترین و سریع‌ترین راه را برای نجات جان شما و عزیزانتان فراهم کرده است.
            </p>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                درخواست سونوگرافی داپلر در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای انجام سونوگرافی داپلر عروق، اکو، هولتر و ویزیت متخصص در منزل با ما تماس بگیرید:
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
                <li>• Mayo Clinic: Deep vein thrombosis (DVT) diagnosis & treatment</li>
                <li>• WebMD: Doppler Ultrasound for DVT</li>
                <li>• American Society of Hematology: Blood Clots and Cardiovascular Health</li>
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

export default DopplerDVTPage;
