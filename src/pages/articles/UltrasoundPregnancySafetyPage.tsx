import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ultrasoundPregnancyImage from "@/assets/ultrasound-pregnancy-safety.jpg";
import pregnancyNutritionImage from "@/assets/pregnancy-nutrition.jpg";
import echoSafetyImage from "@/assets/echo-safety-home.jpg";
import abdominalUltrasoundImage from "@/assets/abdominal-ultrasound-home.jpg";

const UltrasoundPregnancySafetyPage = () => {
  const publishDate = "۱۴۰۴/۱۲/۲۱";
  const isoPublishDate = "2026-03-11";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "ایمنی سونوگرافی در بارداری", url: "/articles/ultrasound-pregnancy-safety" }
  ];

  const faqs = [
    {
      question: "آیا سونوگرافی برای جنین خطرناک است؟",
      answer: "خیر. بر اساس تأیید FDA و انجمن پریناتولوژی جهان، سونوگرافی که توسط متخصص و با اهداف پزشکی انجام شود، هیچ خطر ثابت شده‌ای برای جنین ندارد."
    },
    {
      question: "سونوگرافی داپلر در سه ماهه اول بارداری مجاز است؟",
      answer: "سونوگرافی داپلر انرژی بیشتری استفاده می‌کند، بنابراین در سه ماهه اول فقط در موارد ضروری و در کوتاه‌ترین زمان ممکن توصیه می‌شود."
    },
    {
      question: "سونوگرافی سه‌بعدی و چهاربعدی برای یادگاری ضرر دارد؟",
      answer: "سونوگرافی‌های تفننی در مراکز غیرمجاز ممکن است جنین را برای مدت طولانی در معرض امواج قرار دهند که توصیه نمی‌شود. سونوگرافی باید هدفمند و پزشکی باشد."
    },
    {
      question: "آیا سونوگرافی در منزل با سونوگرافی بیمارستانی تفاوت کیفی دارد؟",
      answer: "خیر. دستگاه‌های پرتابل مدرن که تیم نوید زندگی استفاده می‌کند، کیفیت تصویر مشابه مراکز درمانی دارند و مزیت کاهش استرس مادر را نیز به همراه دارند."
    },
    {
      question: "چند بار سونوگرافی در طول بارداری لازم است؟",
      answer: "معمولاً ۲ تا ۳ سونوگرافی در طول بارداری طبیعی کافی است: یکی در سه ماهه اول (تأیید بارداری)، یکی در هفته ۱۸-۲۲ (غربالگری آنومالی) و در صورت نیاز در سه ماهه سوم."
    }
  ];

  const relatedArticles = [
    {
      title: "تغذیه دوران بارداری: راهنمای جامع",
      description: "اصول تغذیه صحیح در دوران بارداری و مکمل‌های ضروری برای سلامت مادر و جنین",
      image: pregnancyNutritionImage,
      link: "/articles/pregnancy-nutrition",
      category: "زنان"
    },
    {
      title: "ایمنی اکوکاردیوگرافی در منزل",
      description: "بررسی علمی ایمنی اکو قلب و تفاوت آن با رادیولوژی",
      image: echoSafetyImage,
      link: "/articles/echo-safety-home",
      category: "قلب و عروق"
    },
    {
      title: "سونوگرافی شکم و لگن در منزل",
      description: "بررسی کامل خدمات سونوگرافی شکمی برای سالمندان و بیماران در منزل",
      image: abdominalUltrasoundImage,
      link: "/articles/abdominal-ultrasound-home",
      category: "سلامت عمومی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="ایمنی سونوگرافی در بارداری | عوارض سونوگرافی بر جنین | نوید زندگی"
        description="بررسی علمی ایمنی سونوگرافی در بارداری، خطرات احتمالی امواج صوتی بر جنین، اصل ALARA و خدمات سونوگرافی ایمن در منزل توسط نوید زندگی"
        keywords="عوارض سونوگرافی بر جنین، سونوگرافی در منزل تهران، اکو قلب جنین در محل، خطرات سونوگرافی سه بعدی، ویزیت متخصص زنان در خانه، آزمایش غربالگری در منزل، نوید زندگی"
        canonical="https://navidzendegi.ir/articles/ultrasound-pregnancy-safety"
        ogType="article"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="ایمنی سونوگرافی در بارداری: آیا امواج صوتی به جنین آسیب می‌زند؟"
        description="بررسی علمی ایمنی سونوگرافی در بارداری و نقش خدمات سونوگرافی در منزل نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={ultrasoundPregnancyImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          ایمنی سونوگرافی در بارداری: آیا امواج صوتی به جنین آسیب می‌زند؟
        </h1>

        <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: {publishDate}</p>

        <img
          src={ultrasoundPregnancyImage}
          alt="سونوگرافی ایمن در بارداری"
          className="w-full rounded-lg mb-8"
          loading="lazy"
        />

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          سونوگرافی یکی از بزرگ‌ترین دستاوردهای پزشکی مدرن در مراقبت‌های دوران بارداری است. با این حال، بسیاری از مادران نگران هستند که آیا تابش امواج صوتی می‌تواند به بافت‌های ظریف جنین آسیب بزند یا خیر. در این مقاله، این موضوع را از دیدگاه علمی بررسی می‌کنیم.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
          <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
            ⚠️ هشدار: هرگونه تصمیم درباره انجام یا عدم انجام سونوگرافی باید با مشورت پزشک متخصص باشد. از خوددرمانی و تصمیم‌گیری خودسرانه پرهیز کنید.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">۱. سونوگرافی دقیقاً چیست؟ (تفاوت با رادیولوژی)</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          اولین نکته‌ای که باید بدانید این است که سونوگرافی از اشعه ایکس (X-ray) یا یونیزان استفاده نمی‌کند. این دستگاه امواج صوتی با فرکانس بالا (اولتراسوند) را به داخل بدن می‌فرستد. این امواج پس از برخورد به اندام‌های جنین بازمی‌گردند و توسط کامپیوتر به تصویر تبدیل می‌شوند.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          بر اساس گزارش انجمن پریناتولوژی جهان و FDA، سونوگرافی که توسط متخصص و با اهداف پزشکی انجام شود، هیچگونه خطر ثابت شده‌ای (مانند نقص عضو یا سرطان) برای جنین ندارد. برای آشنایی بیشتر با تفاوت امواج صوتی و اشعه ایکس، مقاله <Link to="/articles/echo-safety-home" className="text-primary hover:underline">ایمنی اکوکاردیوگرافی</Link> را مطالعه کنید.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4">۲. خطرات احتمالی در صورت استفاده غیراصولی</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          اگرچه سونوگرافی ایمن است، اما فیزیک امواج صوتی دو اثر بالقوه دارد که باید توسط اپراتور کنترل شود:
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">الف) اثر حرارتی (Thermal Effect)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          امواج سونوگرافی می‌توانند باعث گرم شدن مختصر بافت‌ها شوند. در دستگاه‌های مدرن، شاخصی به نام Thermal Index (TI) وجود دارد که پزشک آن را زیر نظر می‌گیرد تا دما از حد مجاز فراتر نرود.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          در سونوگرافی داپلر (برای شنیدن صدای قلب یا بررسی جریان خون)، انرژی بیشتری استفاده می‌شود. بنابراین متخصصان توصیه می‌کنند در سه ماهه اول بارداری از داپلر فقط در موارد ضروری و در کوتاه‌ترین زمان ممکن استفاده شود.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">ب) سونوگرافی‌های تفننی (Souvenir Scans)</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          یکی از بزرگ‌ترین خطرات، مراجعه به مراکز غیرمجاز برای گرفتن عکس‌های سه‌بعدی و چهاربعدی صرفاً برای یادگاری است. در این موارد ممکن است جنین برای مدت طولانی در معرض امواج قرار بگیرد که علمی نیست.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4">۳. خدمات نوید زندگی؛ سونوگرافی ایمن در محیط آرام منزل</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          بسیاری از مادران باردار به دلیل استرس حضور در محیط‌های بیمارستانی یا دشواری جابه‌جایی، تمایل دارند پایش‌های خود را در منزل انجام دهند.
        </p>
        <ul className="space-y-3 text-muted-foreground mb-4">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>سونوگرافی پرتابل در منزل:</strong> ما با استفاده از دستگاه‌های پیشرفته و کالیبره شده، <Link to="/services/radiology" className="text-primary hover:underline">سونوگرافی را در منزل</Link> شما انجام می‌دهیم. این کار استرس مادر را کاهش داده و فشار خون بارداری را کنترل می‌کند.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>پایش قلب جنین و مادر:</strong> متخصصین ما با انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب مادر</Link> و کنترل ضربان قلب جنین در منزل، سلامت هر دو نفر را بررسی می‌کنند.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>آزمایشگاه سیار:</strong> انجام تمام <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش‌های غربالگری و چک‌آپ‌های دوره‌ای بارداری</Link> در منزل برای جلوگیری از قرارگیری در معرض عفونت‌های بیمارستانی.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">۴. توصیه‌های کلیدی برای مادران</h2>
        <ul className="space-y-3 text-muted-foreground mb-4">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>قانون ALARA:</strong> این یک اصل پزشکی است (As Low As Reasonably Achievable). یعنی سونوگرافی باید در کمترین زمان ممکن و با کمترین انرژی لازم انجام شود.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>فقط توسط متخصص:</strong> هرگز برای سونوگرافی به افراد غیرپزشک یا تکنسین‌های بدون مجوز مراجعه نکنید.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>هدفمند باشید:</strong> سونوگرافی باید برای بررسی سلامت (مانند غربالگری آنومالی یا میزان مایع آمنیوتیک) انجام شود، نه صرفاً برای سرگرمی.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">نتیجه‌گیری</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          سونوگرافی اگر توسط متخصص و با تجهیزات استاندارد انجام شود، ابزاری حیاتی و بی‌خطر برای تضمین سلامت جنین است. مرکز نوید زندگی با آوردن این تکنولوژی به منزل شما، تجربه‌ای امن، علمی و بدون استرس را برای شما و فرزندتان فراهم می‌کند.
        </p>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">نیاز به سونوگرافی در منزل دارید؟</h2>
          <p className="text-muted-foreground mb-4">
            برای رزرو سونوگرافی ایمن در منزل توسط متخصصین مجرب، همین حالا تماس بگیرید.
          </p>
          <a
            href="tel:09386117912"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            تماس: ۰۹۳۸۶۱۱۷۹۱۲
          </a>
        </div>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />

        <section className="mt-12">
          <PricingInfo />
        </section>
      </main>
    </ArticleLayout>
  );
};

export default UltrasoundPregnancySafetyPage;
