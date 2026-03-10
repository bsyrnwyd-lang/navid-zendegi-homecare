import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import leechTherapyImage from "@/assets/leech-therapy-heart.jpg";
import ecgImage from "@/assets/ecg-home-service.jpg";
import cardiologyImage from "@/assets/cardiology-home-visit.jpg";
import holterImage from "@/assets/holter-home-service.jpg";

const LeechTherapyHeartPage = () => {
  const faqs = [
    {
      question: "آیا زالودرمانی می‌تواند گرفتگی رگ قلب را باز کند؟",
      answer: "خیر. گرفتگی عروق کرونر ناشی از رسوب پلاک چربی و کلسیم در عمق دیواره رگ است. بزاق زالو (هیرودین) فقط یک ضدانعقاد موقتی سطحی است و توانایی نفوذ به شریان‌های عمقی و حل کردن پلاک‌ها را ندارد."
    },
    {
      question: "آیا زالودرمانی همراه با مصرف آسپرین یا وارفارین خطرناک است؟",
      answer: "بله، بسیار خطرناک است. ترکیب اثر هیرودین زالو با داروهای ضدلخته مثل آسپرین، پلاویکس یا وارفارین می‌تواند باعث خونریزی‌های شدید و غیرقابل کنترل شود."
    },
    {
      question: "زالو در چه مواردی در طب نوین استفاده می‌شود؟",
      answer: "در طب نوین، از زالو بیشتر در جراحی‌های پیوند اعضا و جراحی پلاستیک برای بازگرداندن جریان خون به بافت‌های پیوندی در سطح پوست استفاده می‌شود، نه برای باز کردن رگ‌های اصلی قلب."
    },
    {
      question: "جایگزین علمی زالودرمانی برای بررسی سلامت قلب چیست؟",
      answer: "اکوکاردیوگرافی پرتابل، نوار قلب (ECG)، آزمایش آنزیم‌های قلبی (تروپونین) و هولتر ۲۴ ساعته روش‌های علمی تأیید شده هستند که تیم نوید زندگی همه آن‌ها را در منزل ارائه می‌دهد."
    },
    {
      question: "آیا عفونت ناشی از زالو ممکن است؟",
      answer: "بله. در دستگاه گوارش زالو باکتری‌هایی وجود دارد که می‌تواند وارد خون بیمار شده و در موارد نادر باعث عفونت دریچه‌های قلب (اندوکاردیت) شود، به‌ویژه در بیمارانی که دریچه مصنوعی دارند."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی و نوار قلب در منزل",
      image: ecgImage,
      link: "/articles/ecg-home",
      description: "خدمات تشخیصی قلب با تجهیزات پرتابل در منزل شما",
      category: "خدمات پزشکی"
    },
    {
      title: "ویزیت متخصص قلب در منزل",
      image: cardiologyImage,
      link: "/articles/heart-attack-symptoms",
      description: "بررسی علائم سکته قلبی و اقدامات اورژانسی توسط متخصص",
      category: "قلب و عروق"
    },
    {
      title: "هولتر قلب در منزل",
      image: holterImage,
      link: "/articles/holter-guide",
      description: "راهنمای کامل هولتر مانیتورینگ ریتم قلب و فشار خون در منزل",
      category: "خدمات پزشکی"
    }
  ];

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات پزشکی", url: "/articles" },
    { name: "زالودرمانی و گرفتگی قلب", url: "/articles/leech-therapy-heart" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="زالودرمانی و گرفتگی قلب: حقایق علمی و خطرات | نوید زندگی"
        description="بررسی علمی زالودرمانی برای بیماران قلبی: آیا زالو رگ قلب را باز می‌کند؟ خطرات تداخل با داروهای ضدلخته و جایگزین‌های علمی مثل اکو و نوار قلب در منزل"
        keywords="زالودرمانی قلب, عوارض زالو برای بیماران قلبی, گرفتگی عروق کرونر, اکو قلب در منزل, نوار قلب در محل, آزمایش خون در خانه, نوید زندگی"
        canonical="https://navidzendegi.com/articles/leech-therapy-heart"
        ogType="article"
        publishedTime="2025-03-10"
        modifiedTime="2025-03-10"
      />
      <ArticleSchema
        title="زالودرمانی و گرفتگی قلب: حقایق علمی و خطرات"
        description="بررسی علمی زالودرمانی برای بیماران قلبی و جایگزین‌های مبتنی بر شواهد"
        publishedTime="2025-03-10"
        modifiedTime="2025-03-10"
        image={leechTherapyImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
            زالودرمانی و گرفتگی قلب: حقایق علمی و خطرات احتمالی
          </h1>

          <p className="text-sm text-muted-foreground mb-4">تاریخ انتشار: ۱۴۰۴/۱۲/۲۰</p>

          <img
            src={leechTherapyImage}
            alt="بررسی علمی زالودرمانی و تأثیر آن بر گرفتگی عروق کرونر قلب"
            className="w-full rounded-lg mb-8"
          />

          <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-amber-800 font-semibold mb-2">هشدار مهم</p>
                <p className="text-amber-700 text-sm">
                  هرگز بدون مشورت با متخصص قلب و عروق، از زالودرمانی به عنوان جایگزین درمان‌های استاندارد قلبی استفاده نکنید. خوددرمانی می‌تواند جان شما را به خطر بیندازد.
                </p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            زالودرمانی در محافل علمی و فوق‌تخصصی قلب، به عنوان یک روش درمان قطعی برای گرفتگی عروق کرونر (Atherosclerosis) شناخته نمی‌شود. با این حال، درک دقیق علت استفاده از آن و خطرات احتمالی‌اش برای بیماران قلبی بسیار حیاتی است. مرکز نوید زندگی با ارائه خدمات تشخیصی مدرن در منزل، جایگزین‌های علمی مطمئنی را در اختیار شما قرار می‌دهد.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۱. زالو چه می‌کند و چه نمی‌کند؟</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            بزاق زالو حاوی ماده‌ای به نام هیرودین (Hirudin) است که یک ضدانعقاد بسیار قوی محسوب می‌شود.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 mr-4">
            <li>
              <strong>آنچه زالو انجام می‌دهد:</strong> هیرودین باعث می‌شود خون در محل گزیدگی لخته نشود و رقیق شود. این کار می‌تواند به طور موقت گردش خون مویرگی را در سطح پوست بهبود ببخشد.
            </li>
            <li>
              <strong>آنچه زالو انجام نمی‌دهد:</strong> گرفتگی قلب ناشی از رسوب چربی و کلسیم (پلاک) در داخل دیواره رگ‌های اصلی است. بزاق زالو نمی‌تواند به داخل شریان‌های عمقی قلب نفوذ کرده و پلاک‌های سخت شده را حل کند. بنابراین، زالو تنگی رگ را از بین نمی‌برد.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۲. چرا زالودرمانی برای بیمار قلبی خطرناک است؟</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            استفاده از زالو بدون نظارت متخصص قلب و عروق، ریسک‌های جدی دارد:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 mr-4">
            <li>
              <strong>تداخل با داروهای ضد لخته:</strong> اکثر بیماران قلبی داروهایی مثل <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link>، پلاویکس یا <Link to="/articles/warfarin" className="text-primary hover:underline">وارفارین</Link> مصرف می‌کنند. ترکیب اثر این داروها با هیرودین زالو می‌تواند باعث خونریزی‌های شدید و غیرقابل کنترل شود.
            </li>
            <li>
              <strong>عفونت باکتریایی:</strong> در دستگاه گوارش زالو باکتری‌هایی وجود دارد که می‌تواند وارد خون بیمار شده و در موارد نادر باعث عفونت دریچه‌های قلب (اندوکاردیت) شود.
            </li>
            <li>
              <strong>ایجاد حس امنیت کاذب:</strong> خطرناک‌ترین بخش این است که بیمار با انجام زالودرمانی تصور کند درمان شده و چک‌آپ‌های حیاتی خود را عقب بیندازد، در حالی که رگ قلب همچنان در حال بسته شدن است.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۳. جایگزین علمی: پایش در منزل با «نوید زندگی»</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            به جای تکیه بر روش‌های سنتی که اثربخشی آن‌ها در گرفتگی عروق کرونر اثبات نشده، ما مسیر علمی را به خانه شما می‌آوریم:
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">الف) اکوکاردیوگرافی پرتابل</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            به جای حدس زدن درباره وضعیت رگ‌ها، متخصصین ما با انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link>، حرکت دیواره‌های قلب را بررسی می‌کنند. اگر رگی گرفته باشد، عضله مربوط به آن ضعیف عمل می‌کند و در اکو کاملاً مشهود است.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ب) آزمایش تخصصی آنزیم‌های قلبی</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تیم <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه ما در منزل</Link>، سطح تروپونین (برای رد کردن سکته خفیف) و پروفایل لیپید را چک می‌کند تا مشخص شود آیا نیاز به تغییر دارو وجود دارد یا خیر.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ج) هولتر قلب ۲۴ ساعته</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            اگر بیمار به دلیل گرفتگی دچار تپش قلب یا آریتمی شده باشد، با نصب <Link to="/articles/holter-guide" className="text-primary hover:underline">هولتر در منزل</Link>، تمام سیگنال‌های الکتریکی قلب در محیط واقعی زندگی ثبت و تحلیل می‌شود.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۴. چه زمانی زالو در طب نوین مفید است؟</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            در طب نوین، از زالو بیشتر در جراحی‌های پیوند اعضا یا جراحی پلاستیک برای بازگرداندن جریان خون به بافت‌های پیوندی (در سطح پوست) استفاده می‌شود، نه برای باز کردن رگ‌های اصلی قلب. این کاربرد تحت نظارت دقیق پزشک و در محیط بیمارستانی انجام می‌گیرد.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نتیجه‌گیری</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            گرفتگی قلب یک مسئله مکانیکی و بیوشیمیایی در عمق بدن است که نیاز به مدیریت تخصصی دارد. زالودرمانی ممکن است در طب سنتی جایگاهی برای تصفیه خون سطحی داشته باشد، اما هرگز جایگزین آنژیوگرافی، <Link to="/articles/stent-smoking-danger" className="text-primary hover:underline">استنت</Link> یا داروهای تخصصی نیست. مرکز نوید زندگی با آوردن پیشرفته‌ترین تجهیزات تشخیصی به بالین بیمار، به شما کمک می‌کند تا بر اساس اعداد و تصاویر واقعی، برای سلامت قلب خود تصمیم بگیرید.
          </p>

          {/* CTA Section */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              نیاز به بررسی تخصصی قلب در منزل دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              تیم پزشکی نوید زندگی با تجهیزات اکو، نوار قلب و هولتر پرتابل، آماده ارزیابی دقیق سلامت قلب شما در منزل است.
            </p>
            <a
              href="tel:09386117912"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              تماس: 09386117912
            </a>
          </div>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default LeechTherapyHeartPage;
