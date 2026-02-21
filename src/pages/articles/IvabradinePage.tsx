import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import ivabradineImage from "@/assets/ivabradine-medication.jpg";
import ranolazineImage from "@/assets/ranolazine-medication.jpg";
import ejectionFractionImage from "@/assets/ef-ejection-fraction.jpg";
import sleepApneaHeartImage from "@/assets/sleep-apnea-heart.jpg";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const IvabradinePage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "ایوابرادین (کورالان)", url: "/articles/ivabradine" }
  ];

  const faqs = [
    {
      question: "قرص ایوابرادین ۵ برای چیست؟",
      answer: "ایوابرادین ۵ میلی‌گرم برای کاهش ضربان قلب در بیماران مبتلا به نارسایی قلبی مزمن یا آنژین صدری پایدار استفاده می‌شود. این دارو بدون تأثیر بر فشار خون، فقط ضربان قلب را کاهش می‌دهد."
    },
    {
      question: "عوارض کورالان بر قلب چیست؟",
      answer: "مهم‌ترین عارضه کورالان، کاهش بیش از حد ضربان قلب (برادی‌کاردیا) است. همچنین ممکن است جرقه‌های نوری در بینایی ایجاد کند که معمولاً گذرا هستند. پایش با هولتر قلب برای تشخیص برادی‌کاردی ضروری است."
    },
    {
      question: "آیا ایوابرادین جایگزین بتابلاکر است؟",
      answer: "ایوابرادین معمولاً به عنوان مکمل بتابلاکرها استفاده می‌شود، نه جایگزین. اما در بیمارانی که به دلیل آسم، فشار خون پایین یا عوارض جانبی نمی‌توانند بتابلاکر مصرف کنند، می‌تواند جایگزین شود."
    },
    {
      question: "آیا ایوابرادین در فیبریلاسیون دهلیزی قابل استفاده است؟",
      answer: "خیر، ایوابرادین در بیمارانی که دچار فیبریلاسیون دهلیزی (AF) هستند نباید مصرف شود. تشخیص این مورد با نوار قلب یا هولتر قلب در منزل امکان‌پذیر است."
    },
    {
      question: "جرقه‌های نوری ناشی از ایوابرادین خطرناک هستند؟",
      answer: "جرقه‌های نوری (Phosphenes) معمولاً گذرا و بی‌خطر هستند و در ماه‌های اول مصرف شایع‌ترند. با این حال، اگر شدید یا مداوم باشند، باید به پزشک اطلاع داده شود."
    }
  ];

  const relatedArticles = [
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
    },
    {
      title: "آپنه خواب و بیماری‌های قلبی",
      description: "ارتباط اختلالات خواب با مشکلات قلبی و اهمیت پایش",
      image: sleepApneaHeartImage,
      link: "/articles/sleep-apnea-heart",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="ایوابرادین (کورالان): ضربان‌سنج هوشمند قلب | نوید زندگی"
        description="ایوابرادین (Ivabradine) داروی هوشمند کاهش ضربان قلب در نارسایی قلبی و آنژین صدری. مکانیسم اثر، عوارض، تداخلات و پایش با هولتر و اکو در منزل."
        keywords="قرص ایوابرادین ۵، عوارض کورالان بر قلب، درمان تپش قلب در نارسایی قلبی، هولتر قلب در منزل، اکوکاردیوگرافی در محل، ویزیت متخصص قلب در خانه، نوید زندگی"
        canonical="https://navidzendegi.com/articles/ivabradine"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-02-21"
        modifiedTime="2026-02-21"
      />

      <ArticleSchema
        title="ایوابرادین (کورالان): ضربان‌سنج هوشمند قلب"
        description="راهنمای جامع ایوابرادین شامل تاریخچه، مکانیسم اثر بر کانال‌های Funny، عوارض، تداخلات و پایش‌های تخصصی قلب در منزل"
        publishedTime="2026-02-21"
        modifiedTime="2026-02-21"
        image={ivabradineImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              ایوابرادین (Ivabradine)؛ ضربان‌سنج هوشمند قلب
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>تیم پزشکی نوید زندگی</span>
              <span>•</span>
              <time dateTime="2026-02-21">۳ اسفند ۱۴۰۴</time>
            </div>
            <img
              src={ivabradineImage}
              alt="ایوابرادین (کورالان) - داروی کاهش ضربان قلب"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
              loading="eager"
            />
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-foreground">
              در مدیریت بیماری‌های قلبی، کنترل ضربان قلب (Heart Rate) کلید اصلی کاهش فشار بر عضله قلب است. سال‌ها پزشکان تنها از «بتابلاکرها» برای این کار استفاده می‌کردند، اما این داروها عوارضی مثل افت فشار خون یا خستگی مفرط داشتند. ظهور <strong>ایوابرادین (Ivabradine)</strong> با نام تجاری <strong>کورالان (Corlanor)</strong> یا پروکورالان انقلابی ایجاد کرد؛ دارویی که تنها و تنها روی ضربان قلب اثر می‌گذارد، بدون اینکه به فشار خون یا قدرت پمپاژ قلب آسیبی بزند.
            </p>

            <p className="text-foreground leading-relaxed">
              مرکز خدمات پزشکی <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با ارائه خدمات <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب</Link> و <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link>، پایش دقیق بیماران تحت درمان با ایوابرادین را انجام می‌دهد تا بهترین ضربان قلب هدف برای بیمار محقق شود.
            </p>

            <div className="bg-destructive/10 border-r-4 border-destructive p-4 rounded-lg">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز بدون تجویز پزشک متخصص، ایوابرادین یا هر داروی قلبی دیگری را مصرف نکنید. خوددرمانی در بیماری‌های قلبی می‌تواند جان شما را به خطر بیندازد.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۱. تاریخچه: کشف کانال‌های "خنده‌دار" قلب!</h2>
              <p className="text-foreground leading-relaxed mb-4">
                داستان ایوابرادین به کشف یک پدیده عجیب در برق قلب برمی‌گردد:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>دهه ۱۹۷۰:</strong> دانشمندان کانال‌های خاصی را در گره پیش‌آهنگ قلب (باتری طبیعی قلب) کشف کردند که جریان الکتریکی عجیبی داشتند. به دلیل رفتار غیرمعمول این کانال‌ها، آن‌ها را کانال‌های "Funny" (خنده‌دار) نامیدند (جریان If).</li>
                <li><strong>توسعه دارو:</strong> محققان به دنبال ماده‌ای بودند که فقط این کانال‌های خاص را مسدود کند. پس از سال‌ها تحقیق، ایوابرادین سنتز شد.</li>
                <li><strong>تاییدیه (۲۰۰۵ و ۲۰۱۵):</strong> این دارو ابتدا در اروپا و سپس در سال ۲۰۱۵ توسط FDA آمریکا برای درمان نارسایی قلبی و آنژین صدری تایید شد.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۲. مکانیسم اثر: ایوابرادین چگونه کار می‌کند؟</h2>
              <p className="text-foreground leading-relaxed mb-4">
                قلب ما یک گره الکتریکی به نام <strong>گره سینوسی</strong> دارد که سرعت ضربان را تعیین می‌کند. ایوابرادین با دقت جراحی، مستقیماً روی این گره اثر می‌گذارد:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">مهار انتخابی جریان If</h3>
              <p className="text-foreground leading-relaxed mb-4">
                ایوابرادین فقط کانال‌های "Funny" را در باتری قلب مسدود می‌کند. این مکانیسم کاملاً اختصاصی است و هیچ اثر دیگری بر سیستم قلبی عروقی ندارد.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">کاهش ضربان بدون افت فشار</h3>
              <p className="text-foreground leading-relaxed mb-4">
                برخلاف داروهای دیگر، ایوابرادین روی عروق یا قدرت انقباضی قلب اثری ندارد. یعنی ضربان قلب را از ۸۰ به ۶۰ می‌رساند اما فشار خون را ثابت نگه می‌دارد.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">افزایش زمان استراحت قلب (دیاستول)</h3>
              <p className="text-foreground leading-relaxed">
                با کند شدن ضربان، قلب زمان بیشتری برای استراحت و پر شدن از خون پیدا می‌کند که باعث بهبود خون‌رسانی به خودِ عضله قلب می‌شود.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۳. اهمیت پایش‌های قلبی در مصرف ایوابرادین (خدمات نوید زندگی)</h2>
              <p className="text-foreground leading-relaxed mb-4">
                ایوابرادین داروی بسیار موثری است، اما تنظیم دوز آن نیازمند پایش دقیق است:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">الف) هولتر قلب در منزل؛ بررسی برادی‌کاردیا</h3>
              <p className="text-foreground leading-relaxed mb-4">
                بزرگ‌ترین ریسک ایوابرادین، کاهش بیش از حد ضربان قلب (برادی‌کاردیا) است، به‌ویژه در هنگام خواب. ما با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، ضربان قلب بیمار را در تمام طول شبانه‌روز پایش می‌کنیم. اگر ضربان در نیمه‌شب به زیر ۵۰ یا ۴۵ برسد، <Link to="/internal-medicine" className="text-primary hover:underline">متخصص داخلی</Link> نوید زندگی بلافاصله دوز دارو را تعدیل می‌کند تا از بروز سرگیجه یا غش پیشگیری شود.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">ب) اکوکاردیوگرافی و نارسایی قلب</h3>
              <p className="text-foreground leading-relaxed mb-4">
                ایوابرادین عمدتاً برای بیمارانی تجویز می‌شود که <Link to="/articles/ejection-fraction" className="text-primary hover:underline">کسر تخلیه‌ای قلب (EF)</Link> آن‌ها پایین (معمولاً زیر ۳۵٪) است. متخصصین ما با انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link>، تغییرات قدرت قلب را پس از شروع ایوابرادین رصد می‌کنند. هدف این است که با کاهش ضربان، فرصت بازسازی به عضله قلب داده شود که در اکوهای دوره‌ای قابل مشاهده است.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">ج) پایش پدیده نوری (Phosphenes)</h3>
              <p className="text-foreground leading-relaxed">
                یکی از عوارض جانبی عجیب ایوابرادین، ایجاد جرقه‌های نوری در میدان بینایی است. این به دلیل وجود کانال‌های مشابه در شبکیه چشم است. در <Link to="/cardiology" className="text-primary hover:underline">ویزیت‌های منزل</Link>، پزشک ما وضعیت بینایی بیمار را برای اطمینان از گذرا بودن این پدیده بررسی می‌کند.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۴. چه کسانی کاندید مصرف ایوابرادین هستند؟</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li>بیماران مبتلا به <strong>نارسایی قلبی مزمن</strong> که ضربان قلب آن‌ها با وجود مصرف بتابلاکرها هنوز بالای ۷۰ است.</li>
                <li>افرادی که به دلیل <strong>آسم</strong>، مشکلات ریوی یا <Link to="/articles/blood-pressure" className="text-primary hover:underline">فشار خون</Link> بسیار پایین، نمی‌توانند بتابلاکر مصرف کنند.</li>
                <li>بیماران مبتلا به <strong>آنژین صدری پایدار</strong> (درد قفسه سینه).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۵. نکات حیاتی و تداخلات</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>تداخل با گریپ‌فروت:</strong> همانند بسیاری از داروهای قلبی، آب گریپ‌فروت می‌تواند غلظت ایوابرادین را در خون به شدت افزایش دهد و باعث ایست موقت قلبی شود.</li>
                <li><strong>آریتمی AF:</strong> ایوابرادین در بیمارانی که دچار فیبریلاسیون دهلیزی هستند کاربرد ندارد. تشخیص این مورد در منزل با انجام یک نوار قلب (ECG) ساده توسط تیم ما امکان‌پذیر است.</li>
              </ul>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">مشاوره و پایش تخصصی در منزل</h3>
              <p className="text-foreground leading-relaxed mb-4">
                برای <strong>هولتر قلب</strong>، <strong>اکوکاردیوگرافی در منزل</strong> و <strong>ویزیت متخصص قلب</strong> جهت پایش درمان با ایوابرادین، با نوید زندگی تماس بگیرید.
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
                ایوابرادین یک داروی هوشمند برای آرام کردن قلب‌های خسته است. این دارو به قلب اجازه می‌دهد با سرعت کمتر اما با کیفیت بیشتر تپش کند. پایش ضربان قلب با <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link> و <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link> توسط مرکز نوید زندگی، این اطمینان را به شما می‌دهد که قلب شما در "محدوده طلایی" ضربان قرار دارد و از حداکثر مزایای دارو بهره‌مند می‌شوید.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-foreground mb-3">منابع (References)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>European Society of Cardiology (ESC): Guidelines on Chronic Heart Failure Management.</li>
                <li>FDA: Corlanor (ivabradine) prescribing information.</li>
                <li>Journal of the American College of Cardiology (JACC): Ivabradine in clinical practice.</li>
                <li>The New England Journal of Medicine (NEJM): Ivabradine and outcomes in chronic heart failure (SHIFT study).</li>
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

export default IvabradinePage;
