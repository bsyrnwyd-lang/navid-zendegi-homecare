import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import ranolazineImage from "@/assets/ranolazine-medication.jpg";
import sacubitrilImage from "@/assets/sacubitril-valsartan.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import ejectionFractionImage from "@/assets/ef-ejection-fraction.jpg";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const RanolazinePage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "رانولازین (رانکسا)", url: "/articles/ranolazine" }
  ];

  const faqs = [
    {
      question: "قرص رانولازین برای چیست؟",
      answer: "رانولازین یک داروی قلبی تخصصی است که برای درمان آنژین صدری پایدار (دردهای مزمن قفسه سینه) استفاده می‌شود. این دارو بدون تغییر در ضربان قلب یا فشار خون، از داخل سلول‌های قلبی محافظت می‌کند."
    },
    {
      question: "تفاوت رانولازین با نیتروگلیسیرین چیست؟",
      answer: "نیتروگلیسیرین با گشاد کردن عروق عمل می‌کند و فشار خون را پایین می‌آورد، اما رانولازین بدون تأثیر بر فشار خون و ضربان قلب، از طریق مهار جریان سدیم دیرهنگام در سلول‌های قلبی عمل می‌کند."
    },
    {
      question: "عوارض رانولازین ۵۰۰ چیست؟",
      answer: "عوارض شایع شامل سرگیجه، سردرد، یبوست و تهوع است. مهم‌ترین عارضه‌ای که باید پایش شود، طولانی شدن فاصله QT در نوار قلب است که نیاز به هولتر قلب دارد."
    },
    {
      question: "آیا رانولازین با داروهای دیگر تداخل دارد؟",
      answer: "بله، رانولازین با بسیاری از داروها از جمله برخی آنتی‌بیوتیک‌ها، داروهای ضد قارچ و داروهای طولانی‌کننده فاصله QT تداخل دارد. حتماً لیست کامل داروهای خود را به پزشک اطلاع دهید."
    },
    {
      question: "آیا می‌توان رانولازین را همراه با آب گریپ‌فروت مصرف کرد؟",
      answer: "خیر، مصرف آب گریپ‌فروت همزمان با رانولازین ممنوع است؛ زیرا غلظت دارو را در خون به شدت بالا می‌برد و خطر عوارض را افزایش می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "ساکوبیتریل/والزارتان: انقلابی در درمان نارسایی قلبی",
      description: "راهنمای جامع داروی ساکوبیتریل/والزارتان و نقش آن در بهبود عملکرد قلب",
      image: sacubitrilImage,
      link: "/articles/sacubitril-valsartan",
      category: "دارو"
    },
    {
      title: "وارفارین: راهنمای مصرف و پایش",
      description: "مدیریت دقیق مصرف وارفارین و کنترل INR در منزل",
      image: warfarinImage,
      link: "/articles/warfarin",
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
        title="رانولازین (رانکسا): درمان نوین دردهای قلبی | نوید زندگی"
        description="رانولازین (Ranolazine) داروی تخصصی درمان آنژین صدری پایدار. مکانیسم اثر، عوارض، تداخلات دارویی و اهمیت پایش با هولتر و اکو در منزل."
        keywords="قرص رانولازین برای چیست، عوارض رانولازین ۵۰۰، تفاوت رانولازین با نیتروگلیسیرین، رانکسا، هولتر قلب در منزل، اکوکاردیوگرافی در محل، درمان آنژین صدری، نوید زندگی"
        canonical="https://navidzendegi.com/articles/ranolazine"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-02-21"
        modifiedTime="2026-02-21"
      />

      <ArticleSchema
        title="رانولازین (رانکسا): رویکردی نوین در درمان دردهای قلبی"
        description="راهنمای جامع رانولازین شامل تاریخچه، مکانیسم سلولی، عوارض، تداخلات دارویی و اهمیت پایش‌های تخصصی قلب در منزل"
        publishedTime="2026-02-21"
        modifiedTime="2026-02-21"
        image={ranolazineImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              رانولازین (Ranolazine)؛ رویکردی نوین در درمان دردهای قلبی
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>تیم پزشکی نوید زندگی</span>
              <span>•</span>
              <time dateTime="2026-02-21">۳ اسفند ۱۴۰۴</time>
            </div>
            <img
              src={ranolazineImage}
              alt="رانولازین (رانکسا) - داروی درمان آنژین صدری"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
              loading="eager"
            />
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-foreground">
              در دنیای بیماری‌های قلبی، <strong>آنژین صدری</strong> یا همان دردهای قفسه سینه، نشانه‌ای از عدم تعادل میان نیاز قلب به اکسیژن و توانایی عروق در خون‌رسانی است. برای دهه‌ها، درمان‌ها فقط بر کاهش ضربان قلب یا گشاد کردن عروق متمرکز بود؛ تا اینکه <strong>رانولازین (Ranolazine)</strong> با نام تجاری <strong>رانکسا (Ranexa)</strong> وارد صحنه شد. این دارو برخلاف داروهای قدیمی، بدون تغییر در ضربان قلب یا فشار خون، از داخل سلول‌های قلبی محافظت می‌کند.
            </p>

            <p className="text-foreground leading-relaxed">
              مرکز خدمات پزشکی <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با ارائه خدمات <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو و هولتر در منزل</Link>، پایش دقیق بیماران تحت درمان با رانولازین را برای اطمینان از اثربخشی و ایمنی دارو انجام می‌دهد.
            </p>

            {/* هشدار عدم خوددرمانی */}
            <div className="bg-destructive/10 border-r-4 border-destructive p-4 rounded-lg">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز بدون تجویز پزشک متخصص، رانولازین یا هر داروی قلبی دیگری را مصرف نکنید. خوددرمانی در بیماری‌های قلبی می‌تواند جان شما را به خطر بیندازد.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۱. تاریخچه: از سنتز شیمیایی تا تاییدیه جهانی</h2>
              <p className="text-foreground leading-relaxed mb-4">
                مسیر ورود رانولازین به داروخانه‌ها، طولانی و پر فراز و نشیب بود:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>دهه ۱۹۸۰:</strong> اولین بار این مولکول توسط دانشمندان سنتز شد. هدف اولیه، ساخت دارویی بود که متابولیسم قلب را تغییر دهد.</li>
                <li><strong>چالش‌های تاییدیه:</strong> در ابتدا به دلیل نگرانی‌هایی در مورد تأثیر آن بر فعالیت برقی قلب، روند تایید آن کند شد.</li>
                <li><strong>تاییدیه FDA (۲۰۰۶):</strong> پس از انجام مطالعات گسترده که نشان داد رانولازین در کاهش حملات درد سینه در بیماران مقاوم به درمان بسیار موثر است، سرانجام مجوز مصرف رسمی را دریافت کرد.</li>
                <li><strong>جایگاه امروزی:</strong> اکنون رانولازین به عنوان یک داروی خط دوم یا کمکی در کنار داروهایی مثل <Link to="/articles/atenolol" className="text-primary hover:underline">بتابلاکرها</Link> برای بیماران با دردهای قلبی مزمن تجویز می‌شود.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۲. مکانیسم اثر: محافظت از قلب در سطح مولکولی</h2>
              <p className="text-foreground leading-relaxed mb-4">
                رانولازین به جای "لوله‌کشی" عروق، روی "برق و شیمی" داخل سلول کار می‌کند:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">مهار جریان سدیم دیرهنگام</h3>
              <p className="text-foreground leading-relaxed mb-4">
                در قلب‌های بیمار، مقدار زیادی سدیم وارد سلول‌ها می‌شود که باعث تجمع کلسیم می‌گردد. کلسیم زیاد باعث سفت شدن عضله قلب و فشار به رگ‌ها می‌شود.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">بهبود آرامش قلب (Relaxation)</h3>
              <p className="text-foreground leading-relaxed mb-4">
                رانولازین با بستن کانال‌های سدیم، مانع تجمع کلسیم می‌شود. این کار باعث می‌شود عضله قلب در زمان استراحت بهتر شل شود، خون‌رسانی به دیواره‌های قلب افزایش یابد و درد سینه کاهش پیدا کند.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">بدون تغییر در علائم حیاتی</h3>
              <p className="text-foreground leading-relaxed">
                بزرگ‌ترین مزیت رانولازین این است که برخلاف نیترات‌ها یا بتابلاکرها، فشار خون را پایین نمی‌آورد و ضربان قلب را کند نمی‌کند؛ بنابراین برای بیمارانی که فشار خون پایینی دارند، انتخابی عالی است.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۳. اهمیت پایش‌های قلبی در مصرف رانولازین (خدمات نوید زندگی)</h2>
              <p className="text-foreground leading-relaxed mb-4">
                با وجود فواید بسیار، رانولازین بر فعالیت برقی قلب اثر می‌گذارد و نیاز به نظارت دقیق دارد:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">الف) هولتر قلب در منزل؛ بررسی فواصل QT</h3>
              <p className="text-foreground leading-relaxed mb-4">
                رانولازین می‌تواند فاصله QT (مدت زمان شارژ مجدد الکتریکی قلب) را در نوار قلب کمی طولانی کند. در برخی افراد، این طولانی شدن می‌تواند منجر به آریتمی‌های خاص شود. ما با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، ریتم قلب بیمار را ۲۴ تا ۴۸ ساعت مانیتور می‌کنیم تا مطمئن شویم رانولازین باعث بی‌نظمی در ضربان قلب نشده است.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">ب) اکوکاردیوگرافی و بررسی عملکرد بطن</h3>
              <p className="text-foreground leading-relaxed mb-4">
                بیمارانی که کاندید مصرف رانولازین هستند، اغلب دچار <Link to="/articles/coronary-artery-disease" className="text-primary hover:underline">بیماری عروق کرونر مزمن</Link> می‌باشند. متخصصین نوید زندگی با انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link>، وضعیت دیواره‌های قلب و <Link to="/articles/ejection-fraction" className="text-primary hover:underline">کسر تخلیه‌ای (EF)</Link> را چک می‌کنند تا اثربخشی دارو بر بهبود عملکرد قلب در حین استراحت را ارزیابی کنند.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">ج) پایش تداخلات دارویی و آزمایش خون</h3>
              <p className="text-foreground leading-relaxed">
                رانولازین با بسیاری از داروها (مثل برخی آنتی‌بیوتیک‌ها یا داروهای ضد قارچ) تداخل دارد. همچنین سلامت کبد و کلیه در دفع این دارو نقش حیاتی دارد. تیم <Link to="/laboratory" className="text-primary hover:underline">آزمایشگاه نوید زندگی</Link> با حضور در منزل، فاکتورهای کبدی و کلیوی شما را قبل و حین درمان بررسی می‌کند تا دوز دارو توسط <Link to="/internal-medicine" className="text-primary hover:underline">متخصص داخلی</Link> به دقت تنظیم شود.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۴. چه کسانی باید رانولازین مصرف کنند؟</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li>بیماران مبتلا به <strong>آنژین صدری پایدار</strong> که با داروهای معمولی (مثل آملودیپین یا آتنولول) دردشان کنترل نشده است.</li>
                <li>افرادی که به دلیل <strong>فشار خون پایین</strong> یا <strong>ضربان قلب کند</strong>، نمی‌توانند از سایر داروهای قلبی استفاده کنند.</li>
                <li>بیماران <strong>دیابتی</strong> مبتلا به بیماری قلبی (رانولازین می‌تواند تأثیر اندکی در کاهش قند خون HbA1C نیز داشته باشد).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۵. عوارض جانبی و هشدارها</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground mb-4">
                <li><strong>عوارض شایع:</strong> سرگیجه، سردرد، یبوست و تهوع.</li>
                <li><strong>هشدار مهم:</strong> مصرف آب گریپ‌فروت همزمان با این دارو ممنوع است؛ زیرا غلظت دارو را در خون به شدت بالا می‌برد.</li>
                <li><strong>ممنوعیت:</strong> در افراد مبتلا به نارسایی شدید کبدی یا کسانی که داروهای طولانی‌کننده فاصله QT مصرف می‌کنند، ممنوع است.</li>
              </ul>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">مشاوره و پایش تخصصی در منزل</h3>
              <p className="text-foreground leading-relaxed mb-4">
                برای <strong>هولتر قلب</strong>، <strong>اکوکاردیوگرافی در منزل</strong> و <strong>ویزیت متخصص قلب</strong> جهت پایش درمان با رانولازین، با نوید زندگی تماس بگیرید.
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
                رانولازین یک پیشرفت بزرگ در درمان دردهای قلبی است که کیفیت زندگی بیماران را بدون تغییر در توان بدنی آن‌ها بهبود می‌بخشد. با این حال، به دلیل تأثیر بر سیستم الکتریکی قلب، پایش منظم الزامی است. مرکز نوید زندگی با ترکیب <Link to="/cardiology" className="text-primary hover:underline">ویزیت متخصص قلب</Link>، <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو</Link> و <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، امنیت و سلامت شما را در طول درمان با این داروی مدرن تضمین می‌کند.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-foreground mb-3">منابع (References)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>FDA: Ranexa (ranolazine) Full Prescribing Information.</li>
                <li>European Heart Journal: Ranolazine in the management of chronic stable angina.</li>
                <li>Circulation (AHA Journal): Mechanisms of Action of Ranolazine.</li>
                <li>Mayo Clinic: Ranolazine (Oral Route) Side Effects and Precautions.</li>
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

export default RanolazinePage;
