import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import anomalyScanImage from "@/assets/anomaly-scan-pregnancy-article.jpg";
import ultrasoundPregnancyImage from "@/assets/ultrasound-pregnancy-safety.jpg";
import pregnancyNutritionImage from "@/assets/pregnancy-nutrition.jpg";
import echoSafetyImage from "@/assets/echo-safety-home.jpg";

const AnomalyScanPregnancyPage = () => {
  const publishDate = "۱۴۰۴/۱۲/۲۲";
  const isoPublishDate = "2026-03-12";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سونوگرافی آنومالی", url: "/articles/anomaly-scan-pregnancy" }
  ];

  const faqs = [
    {
      question: "بهترین زمان انجام سونوگرافی آنومالی چه هفته‌ای است؟",
      answer: "بهترین زمان انجام سونوگرافی آنومالی بین هفته ۱۸ تا ۲۲ بارداری است. در این بازه اندام‌های جنین به اندازه کافی تکامل یافته‌اند و حجم مایع آمنیوتیک برای تصویربرداری مناسب است."
    },
    {
      question: "آیا سونوگرافی آنومالی جنسیت جنین را مشخص می‌کند؟",
      answer: "بله. در هفته ۱۸ تا ۲۲ اندام‌های تناسلی کاملاً شکل گرفته‌اند و در صورت وضعیت مناسب جنین، پزشک می‌تواند با دقت بالا جنسیت را اعلام کند. اما هدف اصلی این سونوگرافی بررسی سلامت است، نه تعیین جنسیت."
    },
    {
      question: "اگر در سونوگرافی آنومالی نشانگری دیده شود چه باید کرد؟",
      answer: "دیده شدن یک Marker لزوماً به معنی نقص جنین نیست. پزشک ممکن است تکرار سونوگرافی، اکوکاردیوگرافی قلب جنین یا آزمایش‌های ژنتیک تکمیلی را توصیه کند. آرامش خود را حفظ و طبق نظر متخصص عمل کنید."
    },
    {
      question: "آیا انجام سونوگرافی آنومالی در منزل ممکن است؟",
      answer: "بله. تیم نوید زندگی با دستگاه‌های پرتابل پیشرفته، سونوگرافی‌های پایش دوره‌ای بارداری را در منزل شما انجام می‌دهد و استرس مادر باردار را به حداقل می‌رساند."
    },
    {
      question: "چه اندام‌هایی در سونوگرافی آنومالی بررسی می‌شود؟",
      answer: "ساختار مغز و جمجمه، صورت (لب و کام)، چهار حفره قلب و شریان‌های اصلی، ستون فقرات، اندام‌های داخلی (معده، کلیه‌ها، مثانه)، دست‌ها و پاها، جفت، بند ناف و حجم مایع آمنیوتیک."
    }
  ];

  const relatedArticles = [
    {
      title: "ایمنی سونوگرافی در بارداری",
      description: "بررسی علمی ایمنی امواج صوتی سونوگرافی برای جنین و اصل ALARA",
      image: ultrasoundPregnancyImage,
      link: "/articles/ultrasound-pregnancy-safety",
      category: "زنان"
    },
    {
      title: "تغذیه دوران بارداری",
      description: "راهنمای جامع تغذیه صحیح و مکمل‌های ضروری دوران بارداری",
      image: pregnancyNutritionImage,
      link: "/articles/pregnancy-nutrition",
      category: "زنان"
    },
    {
      title: "ایمنی اکوکاردیوگرافی در منزل",
      description: "بررسی علمی ایمنی اکو قلب و کاربرد آن در پایش بارداری",
      image: echoSafetyImage,
      link: "/articles/echo-safety-home",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="سونوگرافی آنومالی | بهترین زمان غربالگری دوم بارداری | نوید زندگی"
        description="راهنمای جامع سونوگرافی آنومالی (غربالگری مرحله دوم): بهترین زمان (هفته ۱۸-۲۲)، اندام‌های مورد بررسی، تعیین جنسیت و خدمات سونوگرافی پرتابل در منزل نوید زندگی"
        keywords="سونوگرافی آنومالی، بهترین زمان سونوگرافی آنومالی، غربالگری دوم بارداری، سونوگرافی بارداری در منزل تهران، هزینه سونوگرافی آنومالی، اکو قلب جنین در محل، ویزیت پزشک متخصص زنان در خانه، نوید زندگی"
        canonical="https://navidzendegi.ir/articles/anomaly-scan-pregnancy"
        ogType="article"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="سونوگرافی آنومالی؛ راهنمای کامل غربالگری مرحله دوم بارداری"
        description="بررسی جامع سونوگرافی آنومالی، بهترین زمان انجام، اندام‌های ارزیابی‌شده و خدمات پایش بارداری در منزل نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={anomalyScanImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          سونوگرافی آنومالی؛ راهنمای کامل غربالگری مرحله دوم بارداری
        </h1>

        <p className="text-sm text-muted-foreground mb-6">تاریخ انتشار: {publishDate}</p>

        <img
          src={anomalyScanImage}
          alt="سونوگرافی آنومالی و غربالگری دوم بارداری در منزل"
          className="w-full rounded-lg mb-8"
          loading="lazy"
        />

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          سونوگرافی آنومالی (Anomaly Scan) که به آن غربالگری مرحله دوم یا سونوگرافی اواسط بارداری نیز گفته می‌شود، یکی از مهم‌ترین، دقیق‌ترین و هیجان‌انگیزترین سونوگرافی‌های دوران بارداری است. در این تست، پزشک متخصص ظاهر و ساختار تک‌تک اندام‌های جنین را به‌صورت میلی‌متری بررسی می‌کند تا از سلامت کامل و رشد نرمال فرزند شما مطمئن شود.
        </p>

        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <p className="text-destructive text-sm font-medium">
            ⚠️ هشدار: هرگونه تصمیم درباره انجام یا تفسیر سونوگرافی و آزمایش‌های تکمیلی باید با مشورت پزشک متخصص باشد. از خوددرمانی، مصرف خودسرانه دارو و مکمل و تصمیم‌گیری بر پایه اطلاعات فضای مجازی جداً پرهیز کنید.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">۱. زمان طلایی انجام سونوگرافی آنومالی</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          این سونوگرافی معمولاً بین <strong>هفته ۱۸ تا ۲۲ بارداری</strong> انجام می‌شود. در این بازه زمانی، اندام‌های جنین به اندازه کافی بزرگ و تکامل‌یافته شده‌اند که جزئیات ساختاری آن‌ها قابل مشاهده باشد و از طرفی، حجم مایع آمنیوتیک به‌قدری است که جنین به‌راحتی درون آن حرکت می‌کند و فضای کافی برای تصویربرداری وجود دارد.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          برای اطمینان از ایمنی امواج صوتی در این هفته‌ها، توصیه می‌کنیم مقاله <Link to="/articles/ultrasound-pregnancy-safety" className="text-primary hover:underline">ایمنی سونوگرافی در بارداری</Link> را نیز مطالعه کنید.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4">۲. در سونوگرافی آنومالی چه چیزهایی بررسی می‌شود؟</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          پزشک متخصص در این اسکن، بدن جنین را از سر تا پا اسکن می‌کند. این بررسی شامل موارد زیر است:
        </p>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>ساختار مغز و جمجمه:</strong> بررسی شکل مغز، بطن‌های مغزی و عدم وجود مایع اضافی (هیدروسفالی).</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>صورت جنین:</strong> بررسی لب‌ها و کام برای رد کردن احتمال لب‌شکری یا شکاف کام.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>قلب جنین (بسیار حیاتی):</strong> بررسی چهار حفره قلب، دریچه‌ها و شریان‌های اصلی ورودی و خروجی برای اطمینان از عدم وجود نقص‌های مادرزادی قلب.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>ستون فقرات و استخوان‌ها:</strong> بررسی مهره‌های پشت به‌صورت ردیفی برای رد نقص لوله عصبی (مانند اسپینا بیفیدا) و اندازه‌گیری طول استخوان ران.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>اندام‌های داخلی:</strong> بررسی وجود و سلامت معده، کلیه‌ها و مثانه (اطمینان از دفع ادرار جنین).</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>دست‌ها و پاها:</strong> شمارش انگشتان و بررسی وضعیت مفاصل.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>جفت، بند ناف و مایع آمنیوتیک:</strong> بررسی محل قرارگیری جفت (رد جفت سرراهی)، تعداد عروق بند ناف و حجم مایع دور جنین.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">۳. آیا سونوگرافی آنومالی جنسیت را مشخص می‌کند؟</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          بله؛ در این هفته‌ها اندام‌های تناسلی جنین کاملاً شکل گرفته‌اند و اگر وضعیت قرارگیری جنین مناسب باشد، پزشک می‌تواند با دقت بالایی جنسیت را به شما اعلام کند. البته هدف اصلی این سونوگرافی بررسی سلامت است، نه تعیین جنسیت.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4">۴. خدمات تخصصی نوید زندگی در این دوران حساس</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          دوران بارداری، به‌ویژه در اواسط آن، می‌تواند با خستگی، استرس و مشکلات حرکتی برای مادر همراه باشد. مرکز نوید زندگی با آوردن خدمات تخصصی به خانه شما، این مسیر را هموار می‌کند:
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">الف) سونوگرافی پرتابل در منزل</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          جابه‌جایی در ترافیک، معطلی در مطب‌ها و خطر ابتلا به بیماری‌های عفونی در مراکز درمانی، برای مادر باردار خطرناک است. تیم متخصص ما با دستگاه‌های <Link to="/services/radiology" className="text-primary hover:underline">سونوگرافی پیشرفته و پرتابل در منزل</Link> حاضر شده و اسکن‌های مراقبتی دوره‌ای را در کمال آرامش و امنیت خانه انجام می‌دهد.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">ب) پایش قلبی و کنترل فشار خون مادر</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          فشار خون بارداری یکی از چالش‌های شایع اواسط بارداری است که مستقیماً بر سلامت جفت اثر می‌گذارد. انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب (ECG) و کنترل دقیق فشار خون مادر در محل</Link> به همراه مانیتورینگ صدای قلب جنین از خدمات ماست.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">ج) آزمایش‌های مکمل غربالگری در منزل</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          گاهی پس از سونوگرافی آنومالی، نیاز به بررسی‌های خونی تکمیلی (مانند کواد مارکر یا آزمایش‌های قند و عفونی) است. <Link to="/services/laboratory" className="text-primary hover:underline">نمونه‌گیری خون و ادرار</Link> به‌صورت کاملاً استریل و محرمانه در منزل شما انجام می‌شود.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4">۵. اگر موردی در سونوگرافی دیده شد، چه باید کرد؟</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          ابتدا آرامش خود را حفظ کنید. دیده شدن یک نشانگر (Marker) در سونوگرافی لزوماً به معنی نقص جنین نیست. در بسیاری از موارد، پزشک توصیه به تکرار سونوگرافی در هفته‌های بالاتر، انجام اکوکاردیوگرافی قلب جنین یا آزمایش‌های ژنتیک پیشرفته‌تر می‌کند. هرگز به‌صورت خودسرانه در مورد ادامه یا ختم بارداری تصمیم نگیرید.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4">نتیجه‌گیری</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          سونوگرافی آنومالی، شناسنامه سلامت جنین قبل از تولد است. انجام به‌موقع آن تحت نظر متخصص، خیال شما را از روند رشد فرزندتان راحت می‌کند. مرکز نوید زندگی با ارائه خدمات پایش سلامت، آزمایشگاه و تصویربرداری در منزل، تلاش می‌کند تا شیرین‌ترین دوران زندگی شما، در نهایت آرامش و به دور از استرس‌های محیطی سپری شود.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">نیاز به سونوگرافی و پایش بارداری در منزل دارید؟</h2>
          <p className="text-muted-foreground mb-4">
            برای رزرو خدمات تخصصی سونوگرافی، اکو قلب جنین و آزمایشگاه سیار در منزل، همین حالا با ما تماس بگیرید.
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

export default AnomalyScanPregnancyPage;
