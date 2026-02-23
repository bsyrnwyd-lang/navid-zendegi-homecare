import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import hiddenStrokeImage from "@/assets/hidden-stroke-heart-attack-symptoms.jpg";
import silentHeartAttackImage from "@/assets/silent-heart-attack.jpg";
import dopplerDVTImage from "@/assets/doppler-ultrasound-dvt.jpg";
import sleepApneaHeartImage from "@/assets/sleep-apnea-heart.jpg";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HiddenStrokeHeartAttackPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "علائم پنهان سکته قلبی و مغزی", url: "/articles/hidden-stroke-heart-attack-symptoms" }
  ];

  const faqs = [
    {
      question: "آیا سکته قلبی همیشه با درد شدید سینه همراه است؟",
      answer: "خیر، بسیاری از سکته‌های قلبی به‌ویژه در زنان، سالمندان و افراد دیابتی بدون درد شدید رخ می‌دهند. علائمی مثل درد فک، سوزش سردل، تهوع و عرق سرد می‌توانند نشانه سکته قلبی باشند."
    },
    {
      question: "قانون FAST برای تشخیص سکته مغزی چیست؟",
      answer: "FAST مخفف Face (افتادگی صورت)، Arms (ضعف دست)، Speech (اختلال تکلم) و Time (زمان تماس فوری) است. اگر هر یک از این علائم وجود داشت، فوراً با اورژانس تماس بگیرید."
    },
    {
      question: "آیا نوار قلب در منزل می‌تواند سکته قلبی را تشخیص دهد؟",
      answer: "بله، نوار قلب (ECG) پرتابل می‌تواند تغییرات ایسکمیک قلب را نشان دهد. تیم نوید زندگی با انجام نوار قلب و بررسی آنزیم‌های قلبی در منزل، تشخیص سریع ارائه می‌دهد."
    },
    {
      question: "سونوگرافی داپلر گردن چه نقشی در پیشگیری از سکته مغزی دارد؟",
      answer: "سونوگرافی داپلر عروق گردن (کاروتید) تنگی و رسوبات چربی در رگ‌های منتهی به مغز را شناسایی می‌کند. این تست در منزل توسط تیم نوید زندگی قابل انجام است."
    },
    {
      question: "چه اقدام اولیه‌ای در منزل باید انجام دهیم تا تیم پزشکی برسد؟",
      answer: "بیمار را در وضعیت نیمه‌نشسته قرار دهید، از فعالیت بدنی جلوگیری کنید، پنجره‌ها را باز کنید و با مشورت تلفنی پزشک در صورت عدم حساسیت یک آسپرین بدهید."
    }
  ];

  const relatedArticles = [
    {
      title: "سکته قلبی خاموش؛ وقتی قلب بدون فریاد آسیب می‌بیند",
      description: "مکانیسم، علائم پنهان و افراد در معرض خطر سکته قلبی خاموش",
      image: silentHeartAttackImage,
      link: "/articles/silent-heart-attack",
      category: "قلب و عروق"
    },
    {
      title: "تشخیص فوری لخته خون (DVT) با سونوگرافی داپلر در منزل",
      description: "علائم DVT، افراد در معرض خطر و مزایای سونوگرافی داپلر سیار",
      image: dopplerDVTImage,
      link: "/articles/doppler-dvt",
      category: "قلب و عروق"
    },
    {
      title: "آپنه خواب و خروپف؛ زنگ خطر ایست قلبی",
      description: "مکانیسم تخریب قلب توسط آپنه خواب و پایش شبانه در منزل",
      image: sleepApneaHeartImage,
      link: "/articles/sleep-apnea-heart",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="علائم پنهان سکته قلبی و مغزی؛ تشخیص سریع در منزل | نوید زندگی"
        description="علائم فریبنده سکته قلبی و مغزی: درد فک، سوزش سردل، تنگی نفس ناگهانی. تشخیص فوری با نوار قلب، اکو و سونوگرافی داپلر پرتابل در منزل توسط نوید زندگی."
        keywords="علائم سکته قلبی در خانه، ویزیت فوری متخصص در منزل، نوار قلب در محل، سونوگرافی داپلر گردن در منزل، تست آنزیم قلب در خانه، درمان اورژانسی در محل، نوید زندگی"
        canonical="https://navidzendegi.com/articles/hidden-stroke-heart-attack-symptoms"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-02-23"
        modifiedTime="2026-02-23"
      />

      <ArticleSchema
        title="علائم پنهان سکته قلبی و مغزی؛ تشخیص سریع با تجهیزات پرتابل در منزل"
        description="راهنمای جامع علائم فریبنده سکته قلبی و مغزی و تشخیص سریع با تجهیزات پرتابل در منزل"
        publishedTime="2026-02-23"
        modifiedTime="2026-02-23"
        image={hiddenStrokeImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              علائم پنهان سکته قلبی و مغزی؛ تشخیص سریع با تجهیزات پرتابل در منزل
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>تیم پزشکی نوید زندگی</span>
              <span>•</span>
              <time dateTime="2026-02-23">۵ اسفند ۱۴۰۴</time>
            </div>
            <img
              src={hiddenStrokeImage}
              alt="علائم پنهان سکته قلبی و مغزی و تشخیص در منزل"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
              loading="eager"
            />
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-foreground">
              زمان، در مواجهه با سکته قلبی و مغزی، حکم طلا را دارد. هر ثانیه‌ای که هدر می‌رود، بخشی از عضله قلب یا سلول‌های مغزی از بین می‌روند. اما مشکل اینجاست که سکته همیشه با درد شدید قفسه سینه یا فلج ناگهانی همراه نیست؛ گاهی علائم به قدری فریبنده هستند که با یک معده‌درد ساده یا <Link to="/articles/dizziness" className="text-primary hover:underline">سرگیجه</Link> اشتباه گرفته می‌شوند.
            </p>

            <p className="text-foreground leading-relaxed">
              مرکز خدمات پزشکی <Link to="/" className="text-primary hover:underline font-semibold">نوید زندگی</Link> با اعزام فوری متخصص و تجهیزات تشخیصی (<Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب</Link>، <Link to="/services/radiology" className="text-primary hover:underline">سونوگرافی</Link> و <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه سیار</Link>) به منزل، فاصله میان بروز علائم تا شروع درمان را به حداقل می‌رساند.
            </p>

            <div className="bg-destructive/10 border-r-4 border-destructive p-4 rounded-lg">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز علائم مشکوک قلبی یا مغزی را نادیده نگیرید. خوددرمانی و تأخیر در مراجعه به پزشک می‌تواند جبران‌ناپذیر باشد.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۱. علائم فریبنده سکته قلبی؛ آیا فقط درد سینه است؟</h2>
              <p className="text-foreground leading-relaxed mb-4">
                برخلاف تصور عموم، بسیاری از سکته‌های قلبی (به‌ویژه در <Link to="/articles/women-heart-disease" className="text-primary hover:underline">زنان</Link>، سالمندان و افراد <Link to="/articles/diabetes-heart" className="text-primary hover:underline">دیابتی</Link>) بدون درد شدید رخ می‌دهند. به این نشانه‌ها توجه کنید:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>درد مبهم در فک، گردن یا کتف:</strong> گاهی تنها علامت، احساس فشار در فک پایین یا دردی است که به پشت بین دو کتف می‌زند.</li>
                <li><strong>سنگینی و سوزش سردل:</strong> بسیاری از بیماران تصور می‌کنند دچار رفلکس معده شده‌اند، در حالی که این نشانه سکته دیواره تحتانی قلب است.</li>
                <li><strong>تنگی نفس ناگهانی:</strong> بدون وجود درد، فرد احساس می‌کند هوای کافی به ریه‌هایش نمی‌رسد.</li>
                <li><strong>عرق سرد و تهوع:</strong> ترکیب عرق سرد ناگهانی با ضعف مفرط، یک زنگ خطر جدی است.</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                <strong>نقش نوید زندگی:</strong> در این شرایط، جابه‌جایی بیمار می‌تواند خطرناک باشد. تیم ما با انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">نوار قلب (ECG)</Link> در بالین و بررسی آنزیم‌های قلبی از طریق <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون فوری در منزل</Link>، در کمتر از ۳۰ دقیقه وضعیت را مشخص می‌کند.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۲. سکته مغزی؛ قانون FAST را بشناسید</h2>
              <p className="text-foreground leading-relaxed mb-4">
                در <Link to="/articles/stroke-symptoms" className="text-primary hover:underline">سکته مغزی</Link>، مسدود شدن یک رگ در مغز می‌تواند در عرض چند دقیقه آسیب‌های جبران‌ناپذیری بزند. اگر این علائم را در عزیزانتان دیدید، ثانیه‌ای را تلف نکنید:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>صورت (Face):</strong> آیا نیمی از صورت افتادگی دارد؟ (از او بخواهید لبخند بزند).</li>
                <li><strong>دست‌ها (Arms):</strong> آیا یک دست ضعیف یا بی‌حس است؟ (بخواهید هر دو دست را بالا ببرد).</li>
                <li><strong>تکلم (Speech):</strong> آیا جملات را به سختی بیان می‌کند یا کلمات نامفهوم می‌گوید؟</li>
                <li><strong>زمان (Time):</strong> اگر هر یک از این علائم وجود داشت، زمان تماس فوری با متخصص فرا رسیده است.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۳. تشخیص در منزل؛ چرا تجهیزات پرتابل نوید زندگی حیاتی هستند؟</h2>
              <p className="text-foreground leading-relaxed mb-4">
                در لحظات بحرانی، استرس ترافیک و شلوغی اورژانس بیمارستان می‌تواند وضعیت بیمار را وخیم‌تر کند. ما بیمارستان را به خانه شما می‌آوریم:
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">الف) نوار قلب و اکوکاردیوگرافی پرتابل</h3>
              <p className="text-foreground leading-relaxed mb-4">
                متخصصین ما با <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link>، حرکت دیواره‌های قلب را چک می‌کنند. اگر بخشی از قلب به دلیل سکته حرکت نکند، بلافاصله تشخیص داده شده و اقدامات حمایتی آغاز می‌شود.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">ب) سونوگرافی داپلر عروق مغز و گردن</h3>
              <p className="text-foreground leading-relaxed mb-4">
                برای پیشگیری از سکته مغزی مجدد یا تشخیص تنگی عروق کاروتید، <Link to="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی داپلر در منزل</Link> دقیق‌ترین راه برای بررسی رسوب (پلاک) در رگ‌های منتهی به مغز است.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">ج) پایش ریتم با هولتر قلب</h3>
              <p className="text-foreground leading-relaxed">
                بسیاری از سکته‌های مغزی ناشی از لخته‌هایی است که در اثر آریتمی‌های پنهان (مثل <Link to="/articles/af-stroke-risk" className="text-primary hover:underline">فیبریلاسیون دهلیزی</Link>) ایجاد می‌شوند. ما با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، منشاء اصلی خطر را پیدا می‌کنیم.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۴. اقدامات اولیه در منزل تا رسیدن تیم پزشکی</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li>بیمار را در وضعیت استراحت کامل (نیمه‌نشسته) قرار دهید.</li>
                <li>از فعالیت بدنی یا راه رفتن بیمار به شدت جلوگیری کنید.</li>
                <li>اگر بیمار حساسیت ندارد، با مشورت تلفنی پزشک، یک عدد قرص <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link> به او بدهید.</li>
                <li>پنجره‌ها را باز کنید تا اکسیژن کافی در محیط باشد.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">۵. چرا نوید زندگی را انتخاب کنیم؟</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>سرعت در اعزام:</strong> کاهش زمان طلایی درمان.</li>
                <li><strong>تخصص بالا:</strong> حضور <Link to="/internal-medicine" className="text-primary hover:underline">پزشکان متخصص داخلی</Link> و قلب در بالین.</li>
                <li><strong>تجهیزات مدرن:</strong> انجام تست‌هایی که پیش از این فقط در بیمارستان میسر بود.</li>
                <li><strong>آرامش محیط خانه:</strong> کاهش استرس بیمار که مستقیماً بر <Link to="/articles/blood-pressure" className="text-primary hover:underline">فشار خون</Link> و ضربان قلب اثر مثبت دارد.</li>
              </ul>
            </section>

            {/* CTA */}
            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">اعزام فوری متخصص و تجهیزات تشخیصی به منزل</h3>
              <p className="text-foreground leading-relaxed mb-4">
                برای <strong>نوار قلب فوری</strong>، <strong>اکوکاردیوگرافی</strong>، <strong>سونوگرافی داپلر</strong> و <strong>آزمایش آنزیم‌های قلبی در منزل</strong>، همین الان با نوید زندگی تماس بگیرید.
              </p>
              <a href="tel:09386117912">
                <Button className="gap-2">
                  <Phone className="w-4 h-4" />
                  تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
                </Button>
              </a>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">نتیجه‌گیری</h2>
              <p className="text-foreground leading-relaxed">
                علائم سکته همیشه واضح نیستند. اگر کوچکترین شکی به سلامت قلب یا مغز خود یا عزیزانتان دارید، ریسک نکنید. تشخیص زودهنگام در منزل نه تنها جان بیمار را نجات می‌دهد، بلکه از هزینه‌های سنگین جراحی و ناتوانی‌های آینده جلوگیری می‌کند.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">منابع معتبر علمی</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>American Heart Association (AHA): Warning Signs of Heart Attack and Stroke.</li>
                <li>World Stroke Organization (WSO): Early detection and pre-hospital care.</li>
                <li>Mayo Clinic: Heart attack symptoms: Know what's a medical emergency.</li>
              </ul>
            </section>
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          <div className="mt-12">
            <FAQSection faqs={faqs} />
          </div>

          <div className="mt-12">
            <PricingInfo />
          </div>
        </article>
      </main>
    </ArticleLayout>
  );
};

export default HiddenStrokeHeartAttackPage;
