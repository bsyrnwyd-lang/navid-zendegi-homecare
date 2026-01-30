import { Link } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import abdominalUltrasoundImage from "@/assets/abdominal-ultrasound-home.jpg";
import abdominalPainImage from "@/assets/abdominal-pain-article.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import elderlyCareImage from "@/assets/iranian-elderly-care.jpg";

const AbdominalUltrasoundHomePage = () => {
  const publishDate = "۱۴۰۴/۱۱/۱۱";
  const isoPublishDate = "2026-01-30";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سونوگرافی شکم در منزل", url: "/articles/abdominal-ultrasound-home" }
  ];

  const faqs = [
    {
      question: "سونوگرافی شکم چه اندام‌هایی را بررسی می‌کند؟",
      answer: "سونوگرافی شکم کبد، کیسه صفرا، کلیه‌ها، طحال، پانکراس، مثانه و آئورت شکمی را بررسی می‌کند. این روش می‌تواند سنگ، کیست، تومور، التهاب و تغییرات ساختاری را تشخیص دهد."
    },
    {
      question: "آیا برای سونوگرافی شکم در منزل نیاز به آمادگی خاصی است؟",
      answer: "بله، برای سونوگرافی کیسه صفرا باید ۶-۸ ساعت ناشتا باشید. برای سونوگرافی مثانه و لگن نیاز به پر بودن مثانه است. تیم ما قبل از مراجعه، دستورالعمل دقیق آمادگی را به شما می‌دهد."
    },
    {
      question: "چرا سونوگرافی در منزل برای سالمندان بهتر است؟",
      answer: "سالمندان در محیط آشنای خانه استرس کمتری دارند، نیازی به انتظار در صف نیست، ریسک عفونت در مراکز درمانی کاهش می‌یابد، و آمادگی (ناشتایی یا پر کردن مثانه) راحت‌تر انجام می‌شود."
    },
    {
      question: "آیا سونوگرافی می‌تواند سنگ کلیه را تشخیص دهد؟",
      answer: "بله، سونوگرافی روش اصلی تشخیص سنگ کلیه است. این روش می‌تواند اندازه، محل و تعداد سنگ‌ها را نشان دهد و همچنین هیدرونفروز (تورم کلیه به دلیل انسداد) را بررسی کند."
    },
    {
      question: "آیا نتایج سونوگرافی بلافاصله آماده می‌شود؟",
      answer: "بله، پس از انجام سونوگرافی در منزل، نتایج توسط پزشک متخصص تحلیل شده و در همان جلسه به شما توضیح داده می‌شود. در صورت نیاز، برنامه درمانی نیز همان لحظه نوشته می‌شود."
    }
  ];

  const relatedArticles = [
    {
      title: "درد شکم؛ علل، انواع و تشخیص",
      description: "راهنمای کامل دردهای شکمی: علل شایع، علائم هشدار و روش‌های تشخیص",
      image: abdominalPainImage,
      link: "/articles/abdominal-pain",
      category: "عمومی"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "بررسی ساختار قلب و عملکرد دریچه‌ها با تجهیزات پیشرفته در منزل شما",
      image: echoHomeImage,
      link: "/services/echo-ecg",
      category: "خدمات قلب"
    },
    {
      title: "مراقبت از سالمندان در منزل",
      description: "خدمات پزشکی و پرستاری ویژه سالمندان در محیط امن خانه",
      image: elderlyCareImage,
      link: "/services/nursing",
      category: "خدمات پرستاری"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="سونوگرافی شکم در منزل | تشخیص سنگ کلیه و کیسه صفرا | نوید زندگی"
        description="سونوگرافی شکم و لگن در منزل برای سالمندان: تشخیص سنگ کلیه، سنگ کیسه صفرا، کبد چرب و بررسی آئورت شکمی بدون نیاز به جابه‌جایی"
        keywords="سونوگرافی شکم در منزل, سونوگرافی کلیه در محل, تشخیص سنگ کیسه صفرا, سونوگرافی لگن در منزل, نوید زندگی"
        canonical="https://navidzendegi.com/articles/abdominal-ultrasound-home"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="دردهای شکمی در سالمندان؛ تشخیص فوری سنگ کلیه و کیسه صفرا با سونوگرافی در منزل"
        description="سونوگرافی شکم و لگن در منزل برای تشخیص سنگ کلیه و کیسه صفرا"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={abdominalUltrasoundImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              دردهای شکمی در سالمندان؛ تشخیص فوری سنگ کلیه و کیسه صفرا با سونوگرافی در منزل
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: {publishDate}
            </p>
          </header>

          <img
            src={abdominalUltrasoundImage}
            alt="سونوگرافی شکم و لگن در منزل برای سالمندان"
            className="w-full h-auto rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              درد شکم در سنین بالا هرگز نباید نادیده گرفته شود. از آنجا که آستانه تحمل درد در سالمندان تغییر می‌کند، گاهی یک سنگ کیسه صفرای ملتهب یا سنگ کلیه‌ای که مسیر ادرار را بسته است، خود را با یک درد خفیف یا بی‌اشتهایی ساده نشان می‌دهد. انتقال سالمندی که دچار درد است به مراکز سونوگرافی و انتظار در صف‌های طولانی، نه تنها بیمار را خسته می‌کند، بلکه می‌تواند تشخیص را به تأخیر بیندازد.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              مرکز خدمات پزشکی نوید زندگی با ارائه خدمات سونوگرافی کامل شکم و لگن در منزل، دقت یک مرکز تصویربرداری را به اتاق استراحت بیمار می‌آورد.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: در صورت درد شدید شکمی همراه با تب، استفراغ یا تغییر رنگ ادرار، هرگز خوددرمانی نکنید و فوراً با پزشک مشورت کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۱. چرا سونوگرافی شکم و لگن در منزل حیاتی است؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              بسیاری از اندام‌های حیاتی در ناحیه شکم قرار دارند و سونوگرافی ایمن‌ترین و سریع‌ترین راه برای بررسی آن‌هاست:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>کیسه صفرا:</strong> تشخیص سنگ‌های صفراوی که علائمی مثل درد زیر دنده راست یا تهوع بعد از غذای چرب ایجاد می‌کنند.</li>
              <li><strong>کلیه‌ها و مجاری ادراری:</strong> بررسی سنگ کلیه، هیدرونفروز (تورم کلیه) و سلامت مثانه.</li>
              <li><strong>کبد:</strong> تشخیص کبد چرب، کیست‌ها یا بزرگ شدن کبد.</li>
              <li><strong>آئورت شکمی:</strong> بررسی آنوریسم (گشاد شدن رگ اصلی شکم) که در افراد با سابقه <Link to="/articles/blood-pressure" className="text-primary hover:underline">فشار خون بالا</Link> بسیار حیاتی است.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۲. ارتباط سلامت شکم با سیستم قلبی-عروقی
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              بسیاری از دردهای ناحیه فوقانی شکم ممکن است با دردهای قلبی اشتباه گرفته شوند یا برعکس.
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>پکیج تشخیصی نوید زندگی:</strong> در مواردی که منشأ درد مشخص نیست، تیم ما آمادگی دارد تا علاوه بر سونوگرافی، خدمات <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی و نوار قلب در منزل</Link> را نیز انجام دهد.</li>
              <li>برای بیمارانی که فشار خون نوسانی دارند، نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر فشار خون</Link> همزمان با بررسی کلیه‌ها می‌تواند علت دقیق پرفشاری خون را مشخص کند.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۳. مزایای سونوگرافی در منزل برای خانواده‌ها
            </h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>آمادگی آسان‌تر:</strong> بسیاری از سونوگرافی‌ها نیاز به پر بودن مثانه یا ناشتا بودن دارند. انجام این تست در منزل باعث می‌شود بیمار تا آخرین لحظه در محیط راحت خود باشد.</li>
              <li><strong>کاهش ریسک عفونت:</strong> دوری از محیط‌های آلوده درمانی برای بیماران با سیستم ایمنی ضعیف.</li>
              <li><strong>تفسیر آنی و ویزیت متخصص:</strong> بلافاصله پس از انجام سونوگرافی، نتایج توسط پزشک متخصص تحلیل شده و در صورت لزوم، برنامه دارویی در همان لحظه نوشته می‌شود.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۴. چه زمانی باید درخواست سونوگرافی در منزل بدهید؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              اگر خودتان یا عزیزانتان با این موارد روبرو هستید، معطل نکنید:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li>درد ناگهانی یا مزمن در پهلوها یا زیر دنده‌ها.</li>
              <li>تغییر رنگ ادرار یا سوزش ادرار شدید.</li>
              <li>نفخ مداوم و بی‌اشتهایی غیرعادی در سالمندان.</li>
              <li>لمس توده یا نبض غیرطبیعی در ناحیه شکم.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۵. هولتر قلب و فشار خون؛ مکمل‌های ضروری
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              در مرکز نوید زندگی، ما نگاهی جامع به سلامت داریم. اگر در حین سونوگرافی شکم، متوجه نارسایی‌های عروقی شویم، بلافاصله استفاده از <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب</Link> (برای بررسی آریتمی‌های ناشی از دردهای مزمن) یا هولتر فشار خون را پیشنهاد می‌دهیم تا تصویر کاملی از وضعیت سلامت بیمار به دست آید.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نتیجه‌گیری
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              سونوگرافی در منزل، فراتر از یک خدمت لوکس، یک ضرورت برای مراقبت حرفه‌ای از سالمندان است. مرکز نوید زندگی با آوردن پیشرفته‌ترین دستگاه‌های سونوگرافی پورتابل، اکو، و هولتر به منزل شما، مسیر تشخیص و درمان را کوتاه، دقیق و بدون استرس کرده است.
            </p>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                درخواست سونوگرافی شکم و لگن در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای انجام سونوگرافی شکم، کلیه، کیسه صفرا و ویزیت متخصص در منزل با ما تماس بگیرید:
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
                <li>• RadiologyInfo.org: Abdominal Ultrasound Essentials</li>
                <li>• Mayo Clinic: Kidney stones and Gallstones diagnosis</li>
                <li>• Journal of Diagnostic Medical Sonography</li>
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

export default AbdominalUltrasoundHomePage;
