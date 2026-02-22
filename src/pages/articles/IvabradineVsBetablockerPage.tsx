import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import ivabradineVsBetablockerImage from "@/assets/ivabradine-vs-betablocker.jpg";
import ivabradineImage from "@/assets/ivabradine-medication.jpg";
import ranolazineImage from "@/assets/ranolazine-medication.jpg";
import ejectionFractionImage from "@/assets/ef-ejection-fraction.jpg";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const IvabradineVsBetablockerPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "مقایسه ایوابرادین و بتابلاکر", url: "/articles/ivabradine-vs-betablocker" }
  ];

  const faqs = [
    {
      question: "آیا ایوابرادین جایگزین بتابلاکر است؟",
      answer: "خیر، ایوابرادین معمولاً به عنوان مکمل بتابلاکرها استفاده می‌شود. در مواردی که بیمار نتواند بتابلاکر مصرف کند (مثلاً به دلیل آسم یا فشار خون پایین)، ممکن است جایگزین شود اما تصمیم نهایی با پزشک متخصص است."
    },
    {
      question: "چرا پزشک هم بتابلاکر و هم ایوابرادین تجویز کرده است؟",
      answer: "اگر با حداکثر دوز بتابلاکر، ضربان قلب شما هنوز بالای ۷۰ تپش در دقیقه باشد، پزشک ایوابرادین را اضافه می‌کند تا ضربان بدون افت بیشتر فشار خون کنترل شود."
    },
    {
      question: "تفاوت عوارض ایوابرادین و بتابلاکر چیست؟",
      answer: "بتابلاکرها ممکن است باعث خستگی، سرگیجه، افت فشار خون و تنگی نفس شوند. ایوابرادین عمدتاً جرقه‌های نوری گذرا و احتمال برادی‌کاردی دارد ولی فشار خون را تغییر نمی‌دهد."
    },
    {
      question: "آیا می‌توانم خودم بتابلاکر را قطع و ایوابرادین مصرف کنم؟",
      answer: "هرگز! قطع ناگهانی بتابلاکر بسیار خطرناک است و می‌تواند باعث حمله قلبی شود. هرگونه تغییر دارو باید زیر نظر پزشک متخصص انجام شود."
    },
    {
      question: "هولتر قلب چه کمکی به تنظیم دوز این داروها می‌کند؟",
      answer: "هولتر قلب ۲۴ ساعته نشان می‌دهد ضربان قلب در طول شبانه‌روز (به‌ویژه هنگام خواب) چقدر پایین می‌آید. این اطلاعات به پزشک کمک می‌کند دوز دارو را بدون خطر برادی‌کاردی تنظیم کند."
    }
  ];

  const relatedArticles = [
    {
      title: "ایوابرادین (کورالان): ضربان‌سنج هوشمند قلب",
      description: "راهنمای جامع ایوابرادین: تاریخچه، مکانیسم اثر بر کانال‌های Funny و پایش‌های تخصصی",
      image: ivabradineImage,
      link: "/articles/ivabradine",
      category: "دارو"
    },
    {
      title: "رانولازین (رانکسا): رویکردی نوین در درمان دردهای قلبی",
      description: "راهنمای جامع رانولازین: مکانیسم سلولی، عوارض و پایش‌های تخصصی",
      image: ranolazineImage,
      link: "/articles/ranolazine",
      category: "دارو"
    },
    {
      title: "کسر تخلیه‌ای قلب (EF) چیست؟",
      description: "آشنایی با شاخص عملکرد قلب و اهمیت اکوکاردیوگرافی",
      image: ejectionFractionImage,
      link: "/articles/ejection-fraction",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="مقایسه ایوابرادین و بتابلاکر در نارسایی قلبی | نوید زندگی"
        description="مقایسه کامل ایوابرادین (کورالان) با بتابلاکرها (متوپرولول و کارودیلول) در درمان نارسایی قلبی. تفاوت مکانیسم، عوارض و نقش هولتر و اکو در پایش."
        keywords="مقایسه کارودیلول و ایوابرادین، قرص متوپرولول برای نارسایی قلب، بهترین دارو برای کاهش ضربان قلب، اکو در منزل، هولتر قلب در محل، نوید زندگی"
        canonical="https://navidzendegi.com/articles/ivabradine-vs-betablocker"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-02-22"
        modifiedTime="2026-02-22"
      />

      <ArticleSchema
        title="ایوابرادین یا بتابلاکر؟ نبرد برای کنترل ضربان در نارسایی قلبی"
        description="مقایسه کامل ایوابرادین و بتابلاکرها در نارسایی قلبی: مکانیسم، عوارض، موارد استفاده و نقش پایش در منزل"
        publishedTime="2026-02-22"
        modifiedTime="2026-02-22"
        image={ivabradineVsBetablockerImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              ایوابرادین یا بتابلاکر؟ نبرد برای کنترل ضربان در نارسایی قلبی
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>تیم پزشکی نوید زندگی</span>
              <span>•</span>
              <time dateTime="2026-02-22">۴ اسفند ۱۴۰۴</time>
            </div>
            <img
              src={ivabradineVsBetablockerImage}
              alt="مقایسه ایوابرادین و بتابلاکر در نارسایی قلبی"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
              loading="eager"
            />
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-foreground">
              در مدیریت نارسایی قلبی، هدف اصلی ما «استراحت دادن به قلب» است. هرچه ضربان قلب کمتر باشد، عضله قلب فرصت بیشتری برای بازسازی و پر شدن از خون اکسیژن‌دار دارد. اما ابزارهای ما برای این کار متفاوت عمل می‌کنند.
            </p>

            <p className="text-foreground leading-relaxed">
              مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با پایش دقیق وضعیت شما از طریق <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی</Link> و <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، به متخصصین کمک می‌کند تا دقیق‌ترین ترکیب دارویی را برای شما انتخاب کنند.
            </p>

            <div className="bg-destructive/10 border-r-4 border-destructive p-4 rounded-lg">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز بدون تجویز پزشک متخصص، داروی قلبی خود را تغییر ندهید، قطع نکنید و خوددرمانی نکنید. قطع ناگهانی بتابلاکر می‌تواند جان شما را به خطر بیندازد.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۱. بتابلاکرها (متوپرولول و کارودیلول)؛ سربازان کهنه‌کار</h2>
              <p className="text-foreground leading-relaxed mb-4">
                بتابلاکرها دهه‌هاست که ستون اصلی درمان نارسایی قلبی هستند.
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>مکانیسم:</strong> این داروها با مسدود کردن اثر آدرنالین، هم ضربان قلب را کم می‌کنند و هم <Link to="/articles/blood-pressure" className="text-primary hover:underline">فشار خون</Link> را پایین می‌آورند.</li>
                <li><strong>مزیت بزرگ:</strong> ثابت شده است که بتابلاکرها خطر مرگ‌ومیر ناشی از نارسایی قلبی را به شدت کاهش می‌دهند.</li>
                <li><strong>چالش:</strong> از آنجا که این داروها قدرت انقباض قلب را هم کمی کم می‌کنند، برخی بیماران در ابتدای مصرف دچار خستگی مفرط یا تنگی نفس می‌شوند. همچنین برای افراد مبتلا به <Link to="/articles/asthma" className="text-primary hover:underline">آسم</Link> شدید محدودیت مصرف دارند.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۲. ایوابرادین؛ متخصص ضربان</h2>
              <p className="text-foreground leading-relaxed mb-4">
                <Link to="/articles/ivabradine" className="text-primary hover:underline">ایوابرادین</Link> برخلاف بتابلاکرها، یک داروی "تک‌منظوره" است.
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>مکانیسم:</strong> فقط روی باتری طبیعی قلب (کانال‌های Funny) اثر می‌گذارد تا ضربان را کم کند.</li>
                <li><strong>مزیت بزرگ:</strong> روی فشار خون، قدرت انقباض قلب یا سیستم تنفسی هیچ اثری ندارد. بنابراین برای بیمارانی که فشار خون پایینی دارند اما ضربان قلبشان بالاست، یک انتخاب معجزه‌گر است.</li>
                <li><strong>چالش:</strong> این دارو به تنهایی نمی‌تواند تمام مزایای محافظتی بتابلاکرها را ایفا کند و معمولاً به عنوان "یار کمکی" اضافه می‌شود.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۳. مقایسه کاربردی در نارسایی قلبی</h2>

              <h3 className="text-xl font-semibold text-foreground mb-2">تأثیر بر فشار خون</h3>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>بتابلاکر:</strong> فشار خون را کاهش می‌دهد (برای بیماران فشارخونی عالی است). <strong>ایوابرادین:</strong> اثری بر فشار خون ندارد (برای بیماران با فشار خون پایین عالی است).
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">تأثیر بر قدرت پمپاژ قلب</h3>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>بتابلاکر:</strong> در ابتدا ممکن است قدرت پمپاژ را کمی کاهش دهد. <strong>ایوابرادین:</strong> هیچ اثری بر قدرت انقباضی قلب ندارد و <Link to="/articles/ejection-fraction" className="text-primary hover:underline">کسر تخلیه‌ای (EF)</Link> را تحت تأثیر قرار نمی‌دهد.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">تأثیر بر آسم و ریه</h3>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>بتابلاکر:</strong> ممکن است باعث تنگی نفس شود و در آسم شدید ممنوع است. <strong>ایوابرادین:</strong> کاملاً ایمن برای بیماران ریوی است.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">کاهش مرگ‌ومیر</h3>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>بتابلاکر:</strong> اثر بسیار بالا و اثبات شده در کاهش مرگ‌ومیر. <strong>ایوابرادین:</strong> مؤثر در کاهش بستری شدن مجدد بیماران.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">ضربان قلب هدف</h3>
              <p className="text-foreground leading-relaxed">
                <strong>بتابلاکر:</strong> باید ضربان را به زیر ۷۰ برساند. <strong>ایوابرادین:</strong> زمانی اضافه می‌شود که ضربان با بتابلاکر بالای ۷۰ بماند.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۴. چرا گاهی هر دو دارو با هم تجویز می‌شوند؟</h2>
              <p className="text-foreground leading-relaxed mb-4">
                در بسیاری از پروتکل‌های جدید، اگر بیمار حداکثر دوز بتابلاکر را دریافت کند اما ضربان قلب او همچنان بالای ۷۰ تپش در دقیقه باشد، پزشک ایوابرادین را اضافه می‌کند. این "ترکیب طلایی" باعث می‌شود قلب بدون افت فشار خون، به آرامش کامل برسد.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">نقش خدمات نوید زندگی در این مسیر</h3>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong><Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی در منزل</Link>:</strong> قبل از شروع یا تغییر دوز هر کدام از این داروها، باید کسر تخلیه‌ای قلب (EF) سنجیده شود. ما این کار را در آرامش منزل برای شما انجام می‌دهیم.</li>
                <li><strong><Link to="/services/holter" className="text-primary hover:underline">هولتر قلب ۲۴ ساعته</Link>:</strong> برای اینکه بدانیم ضربان قلب شما در طول شب (هنگام خواب) چقدر پایین می‌آید، هولتر تنها راه ایمن است. این کار از بروز "برادی‌کاردیا" یا کندی بیش از حد ضربان جلوگیری می‌کند.</li>
                <li><strong><Link to="/internal-medicine" className="text-primary hover:underline">ویزیت متخصص داخلی</Link>:</strong> تنظیم این دو دارو در کنار هم، یک هنر پزشکی است که متخصصین ما در منزل با بررسی دقیق علائم شما انجام می‌دهند.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۵. کدام دارو برای شما بهتر است؟</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li>اگر <strong><Link to="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون بالا</Link></strong> دارید: بتابلاکرها ارجحیت دارند.</li>
                <li>اگر <strong>آسم یا برونشیت</strong> دارید: ایوابرادین انتخاب ایمن‌تری است.</li>
                <li>اگر <strong>فشار خون پایین و ضربان بالا</strong> دارید: ایوابرادین بهترین گزینه است.</li>
                <li>اگر <strong>نارسایی قلبی شدید</strong> دارید: احتمالاً به ترکیبی از هر دو نیاز خواهید داشت.</li>
              </ul>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">مشاوره و پایش تخصصی در منزل</h3>
              <p className="text-foreground leading-relaxed mb-4">
                برای <strong>هولتر قلب</strong>، <strong>اکوکاردیوگرافی در منزل</strong> و <strong>ویزیت متخصص داخلی</strong> جهت تنظیم دقیق داروهای قلبی، با نوید زندگی تماس بگیرید.
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
                انتخاب بین ایوابرادین و بتابلاکر، یا استفاده همزمان از آن‌ها، بستگی به "اثر انگشت قلبی" هر بیمار دارد. هیچ نسخه‌ای برای همه یکسان نیست. مرکز <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با آوردن تجهیزات تشخیصی به بالین شما، این امکان را فراهم می‌کند که پزشک با اطمینان ۱۰۰ درصدی، داروی مناسب را برای قلب شما انتخاب کند.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-foreground mb-3">منابع (References)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>ESC Guidelines: Heart Failure management 2024.</li>
                <li>ACC/AHA: Pharmacological treatment of Heart Failure.</li>
                <li>Journal of Cardiac Failure: Comparison of Ivabradine and Beta-blockers.</li>
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

export default IvabradineVsBetablockerPage;
