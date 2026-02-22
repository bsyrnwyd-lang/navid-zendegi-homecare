import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import heartFailureDrugInteractionsImage from "@/assets/heart-failure-drug-interactions.jpg";
import ivabradineVsBetablockerImage from "@/assets/ivabradine-vs-betablocker.jpg";
import drugInteractionsHeartProstateImage from "@/assets/drug-interactions-heart-prostate.jpg";
import ivabradineImage from "@/assets/ivabradine-medication.jpg";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeartFailureDrugInteractionsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تداخلات دارویی در نارسایی قلبی", url: "/articles/heart-failure-drug-interactions" }
  ];

  const faqs = [
    {
      question: "آیا ژلوفن (ایبوپروفن) برای بیمار قلبی خطرناک است؟",
      answer: "بله، ایبوپروفن و سایر مسکن‌های NSAID باعث احتباس آب و نمک در بدن شده و می‌توانند نارسایی قلبی را تشدید کنند. استامینوفن با نظر پزشک جایگزین ایمن‌تری است."
    },
    {
      question: "آیا قرص سرماخوردگی برای بیمار قلبی مضر است؟",
      answer: "بله، بسیاری از قرص‌ها و شربت‌های سرماخوردگی حاوی سودوافدرین یا فنیل‌افرین هستند که باعث افزایش ناگهانی فشار خون و ضربان قلب شده و برای بیماران نارسایی قلبی خطرناکند."
    },
    {
      question: "آیا داروهای گیاهی با داروهای قلب تداخل دارند؟",
      answer: "بله، بسیاری از داروهای گیاهی مثل شیرین‌بیان، جینسینگ و گل‌راعی تداخلات جدی با داروهای قلبی دارند. حتماً قبل از مصرف هر مکمل گیاهی با پزشک مشورت کنید."
    },
    {
      question: "چگونه بفهمم داروهایم با هم تداخل دارند؟",
      answer: "بهترین راه، بررسی توسط پزشک متخصص است. در ویزیت‌های منزل نوید زندگی، متخصص داخلی تمام داروهای شما را بررسی و تداخلات را شناسایی می‌کند."
    },
    {
      question: "آیا مصرف کلسیم با داروهای قلب مشکلی دارد؟",
      answer: "مصرف خودسرانه کلسیم می‌تواند با داروهایی مثل دیگوکسین تداخل کرده و ریسک آریتمی قلبی را افزایش دهد. همچنین جذب برخی داروهای دیگر مثل لووتیروکسین را مختل می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "ایوابرادین یا بتابلاکر؟ نبرد برای کنترل ضربان",
      description: "مقایسه کامل ایوابرادین و بتابلاکرها در نارسایی قلبی",
      image: ivabradineVsBetablockerImage,
      link: "/articles/ivabradine-vs-betablocker",
      category: "دارو"
    },
    {
      title: "تداخلات دارویی قلب، پروستات و ناتوانی جنسی",
      description: "خطرات ترکیب ویاگرا با نیترات‌های قلبی و داروهای پروستات",
      image: drugInteractionsHeartProstateImage,
      link: "/articles/drug-interactions-heart-prostate",
      category: "دارو"
    },
    {
      title: "ایوابرادین (کورالان): ضربان‌سنج هوشمند قلب",
      description: "راهنمای جامع ایوابرادین: مکانیسم اثر و پایش‌های تخصصی",
      image: ivabradineImage,
      link: "/articles/ivabradine",
      category: "دارو"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تداخلات دارویی خطرناک در نارسایی قلبی؛ داروهای ممنوع | نوید زندگی"
        description="داروهای ممنوع در نارسایی قلبی: خطرات ژلوفن، قرص سرماخوردگی، آنتی‌بیوتیک و مکمل‌های گیاهی برای بیماران قلبی. پایش دارویی با ویزیت متخصص در منزل."
        keywords="تداخل دارویی ژلوفن و قلب، داروهای ممنوع در نارسایی قلبی، عوارض قرص سرماخوردگی برای قلب، ویزیت متخصص در منزل، هولتر قلب و فشار خون، نوید زندگی"
        canonical="https://navidzendegi.com/articles/heart-failure-drug-interactions"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-02-22"
        modifiedTime="2026-02-22"
      />

      <ArticleSchema
        title="تداخلات دارویی خطرناک در نارسایی قلبی؛ چه داروهایی برای قلب شما سم هستند؟"
        description="بررسی جامع تداخلات دارویی خطرناک در نارسایی قلبی: مسکن‌ها، داروهای سرماخوردگی، آنتی‌بیوتیک‌ها و مکمل‌های گیاهی"
        publishedTime="2026-02-22"
        modifiedTime="2026-02-22"
        image={heartFailureDrugInteractionsImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              تداخلات دارویی خطرناک در نارسایی قلبی؛ چه داروهایی برای قلب شما «سم» هستند؟
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>تیم پزشکی نوید زندگی</span>
              <span>•</span>
              <time dateTime="2026-02-22">۴ اسفند ۱۴۰۴</time>
            </div>
            <img
              src={heartFailureDrugInteractionsImage}
              alt="تداخلات دارویی خطرناک در نارسایی قلبی"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
              loading="eager"
            />
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-foreground">
              بیماران مبتلا به نارسایی قلبی معمولاً لیستی از داروهای حیاتی (مثل بتابلاکرها، <Link to="/articles/ivabradine" className="text-primary hover:underline">ایوابرادین</Link>، یا داروهای ادرارآور) را مصرف می‌کنند. اما مشکل زمانی شروع می‌شود که بیمار برای یک درد ساده، <Link to="/articles/cold-treatment" className="text-primary hover:underline">سرماخوردگی</Link> یا مشکل گوارشی، دارویی را به صورت خودسرانه اضافه می‌کند. برخی از این داروهای به ظاهر ساده، می‌توانند نارسایی قلبی را تشدید کرده یا باعث ایست قلبی شوند.
            </p>

            <p className="text-foreground leading-relaxed">
              تیم متخصصین <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با بررسی دقیق کیسه‌های دارویی شما در <Link to="/internal-medicine" className="text-primary hover:underline">ویزیت‌های منزل</Link>، این تداخلات پنهان را شناسایی و اصلاح می‌کنند.
            </p>

            <div className="bg-destructive/10 border-r-4 border-destructive p-4 rounded-lg">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز بدون مشورت با پزشک متخصص، داروی جدیدی به لیست داروهای قلبی خود اضافه نکنید. خوددرمانی در نارسایی قلبی می‌تواند کشنده باشد.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۱. مسکن‌های معمولی (NSAIDs)؛ دشمن شماره یک</h2>
              <p className="text-foreground leading-relaxed mb-4">
                داروهایی مثل <strong>ایبوپروفن (ژلوفن)</strong>، <strong>دیکلوفناک</strong>، <strong>ناپروکسن</strong> و <strong>اندومتاسین</strong> که برای دردهای مفصلی یا سردرد مصرف می‌شوند، برای بیماران نارسایی قلبی بسیار خطرناکند.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>چرا خطرناک است؟</strong> این داروها باعث احتباس نمک و آب در بدن می‌شوند. این تجمع مایعات، بار کاری قلب را به شدت بالا برده و می‌تواند بیمار را دچار تنگی نفس شدید و <Link to="/articles/pulmonary-edema" className="text-primary hover:underline">ادم ریوی</Link> کند. همچنین این مسکن‌ها اثر داروهای <Link to="/articles/blood-pressure" className="text-primary hover:underline">فشار خون</Link> را خنثی می‌کنند.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>راهکار:</strong> در صورت نیاز به مسکن، حتماً با نظر پزشک از جایگزین‌های ایمن‌تر مثل استامینوفن استفاده کنید.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۲. داروهای سرماخوردگی و ضد‌احتقان</h2>
              <p className="text-foreground leading-relaxed mb-4">
                بسیاری از شربت‌ها و قرص‌های "Cold &amp; Flu" حاوی موادی مثل <strong>سودوافدرین</strong> یا <strong>فنیل‌افرین</strong> هستند.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>چرا خطرناک است؟</strong> این مواد باعث تنگ شدن عروق و افزایش ناگهانی ضربان قلب و فشار خون می‌شوند. برای قلبی که دچار نارسایی است، این افزایش فشار ناگهانی می‌تواند منجر به <Link to="/articles/heart-palpitations" className="text-primary hover:underline">آریتمی</Link> یا حمله قلبی شود.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>پایش نوید زندگی:</strong> اگر به ناچار از این داروها استفاده کردید، نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link> برای اطمینان از عدم بروز آریتمی‌های ناشی از محرک‌ها توصیه می‌شود.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۳. برخی آنتی‌بیوتیک‌ها و داروهای ضد‌قارچ</h2>
              <p className="text-foreground leading-relaxed mb-4">
                آنتی‌بیوتیک‌هایی مثل <strong>اریترومایسین</strong> یا <strong>کلاریتومایسین</strong> و داروهای ضد‌قارچ (مثل <Link to="/articles/itraconazole" className="text-primary hover:underline">ایتراکونازول</Link>) می‌توانند با داروهایی مثل <Link to="/articles/ivabradine" className="text-primary hover:underline">ایوابرادین</Link> یا دیگوکسین تداخل جدی داشته باشند.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>چرا خطرناک است؟</strong> این داروها مانع دفع داروهای قلبی از بدن شده و سطح آن‌ها را در خون به شدت بالا می‌برند که منجر به مسمومیت دارویی و کندی بیش از حد ضربان قلب می‌شود.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>پایش نوید زندگی:</strong> انجام <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link> برای چک کردن سطح دارو (مثل سطح دیگوکسین) و فاکتورهای کلیوی در این مواقع حیاتی است.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۴. داروهای گیاهی و مکمل‌ها</h2>
              <p className="text-foreground leading-relaxed mb-4">
                بسیاری تصور می‌کنند داروهای گیاهی بی‌خطر هستند، اما:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>شیرین‌بیان:</strong> باعث دفع پتاسیم و تجمع آب شده و فشار خون را بالا می‌برد.</li>
                <li><strong><Link to="/articles/ginseng" className="text-primary hover:underline">جینسینگ</Link>:</strong> می‌تواند ضربان قلب را نامنظم کرده و با داروهای ضد‌انعقاد (مثل <Link to="/articles/warfarin" className="text-primary hover:underline">وارفارین</Link>) تداخل کند.</li>
                <li><strong>گل‌راعی (St. John's Wort):</strong> اثر بسیاری از داروهای قلبی را در بدن از بین می‌برد.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۵. مکمل‌های کلسیم و آنتی‌اسیدهای معده</h2>
              <p className="text-foreground leading-relaxed">
                مصرف خودسرانه <Link to="/articles/calcium-supplement" className="text-primary hover:underline">کلسیم</Link> یا شربت‌های معده حاوی کلسیم/منیزیم می‌تواند روی جذب داروهایی مثل <Link to="/articles/levothyroxine" className="text-primary hover:underline">لووتیروکسین</Link> یا برخی داروهای قلبی تأثیر بگذارد. همچنین کلسیم زیاد در خون ریسک آریتمی را در بیماران تحت درمان با دیگوکسین افزایش می‌دهد.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">نقش نوید زندگی در مدیریت دارویی شما</h2>
              <p className="text-foreground leading-relaxed mb-4">
                تعدد داروها در سنین بالا گیج‌کننده است. ما برای امنیت شما این خدمات را در منزل ارائه می‌دهیم:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>دارودرمانی بالینی (Medication Review):</strong> <Link to="/internal-medicine" className="text-primary hover:underline">متخصص داخلی</Link> ما تمام داروهای شما (شیمیایی، گیاهی و مکمل) را بررسی کرده و تداخلات را حذف می‌کند.</li>
                <li><strong><Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی</Link> و <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link>:</strong> اگر به اشتباه دارویی مصرف شده که به قلب فشار آورده، ما با اکو و هولتر در منزل میزان آسیب یا نوسانات ریتم را سریعاً ارزیابی می‌کنیم.</li>
                <li><strong>آموزش خانواده:</strong> تیم <Link to="/services/nursing" className="text-primary hover:underline">پرستاری</Link> ما نحوه صحیح چیدمان و زمان‌بندی داروها را به مراقبین بیمار آموزش می‌دهند.</li>
              </ul>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">بررسی تداخلات دارویی در منزل</h3>
              <p className="text-foreground leading-relaxed mb-4">
                برای <strong>ویزیت متخصص داخلی</strong>، <strong>بررسی تداخلات دارویی</strong> و <strong>پایش قلب با اکو و هولتر در منزل</strong>، با نوید زندگی تماس بگیرید.
              </p>
              <a href="tel:09386117912">
                <Button className="gap-2">
                  <Phone className="w-4 h-4" />
                  تماس: ۰۹۳۸۶۱۱۷۹۱۲
                </Button>
              </a>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">نتیجه‌گیری</h2>
              <p className="text-foreground leading-relaxed">
                نارسایی قلبی یک بیماری حساس است که در آن "هر قرص اضافه می‌تواند یک تهدید باشد". هرگز داروی جدیدی را بدون مشورت با پزشک قلب خود شروع نکنید. مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با پایش‌های مستمر در منزل، چتر حمایتی شماست تا درمان‌هایتان همواره ایمن و مؤثر باقی بماند.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-foreground mb-3">منابع (References)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>AHA: Medication Adherence and Interactions in Heart Failure.</li>
                <li>Journal of Cardiac Failure: Polypharmacy and drug-drug interactions.</li>
                <li>Mayo Clinic: Common drugs that can worsen heart failure.</li>
              </ol>
            </section>
          </div>

          <FAQSection faqs={faqs} />

          <div className="mt-12">
            <PricingInfo />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </article>
      </main>
    </ArticleLayout>
  );
};

export default HeartFailureDrugInteractionsPage;
