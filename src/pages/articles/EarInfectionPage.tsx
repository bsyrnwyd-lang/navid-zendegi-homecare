import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import earInfectionImage from "@/assets/ear-infection-article.jpg";
import childrenFeverImage from "@/assets/children-fever-article.jpg";
import strepThroatImage from "@/assets/strep-throat-article.jpg";
import dizzinessImage from "@/assets/dizziness-comprehensive.jpg";

const EarInfectionPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912?text=سلام، می‌خواستم درباره ویزیت پزشک برای عفونت گوش اطلاعات بگیرم", "_blank");
  };

  const faqs = [
    {
      question: "عفونت گوش میانی چگونه ایجاد می‌شود؟",
      answer: "عفونت گوش میانی معمولاً به دنبال سرماخوردگی، آنفولانزا یا آلرژی رخ می‌دهد. تجمع مایع و التهاب پشت پرده گوش به دلیل عملکرد نامناسب شیپور استاش ایجاد می‌شود. باکتری‌هایی مانند استرپتوکوک پنومونیه و هموفیلوس آنفلوآنزا معمولاً عامل هستند."
    },
    {
      question: "علائم عفونت گوش در کودکان چیست؟",
      answer: "کودکان خردسال قادر به بیان درد نیستند، اما علائم شامل: کشیدن یا مالیدن گوش، گریه و بی‌قراری به ویژه هنگام دراز کشیدن، تب، کاهش اشتها، مشکل در خوابیدن و گاهی خروج مایع از گوش است."
    },
    {
      question: "آیا عفونت گوش همیشه نیاز به آنتی‌بیوتیک دارد؟",
      answer: "خیر. بسیاری از عفونت‌های گوش میانی ویروسی هستند و خودبه‌خود بهبود می‌یابند. پزشک ممکن است ابتدا ۳ روز انتظار فعال با مدیریت درد را توصیه کند. آنتی‌بیوتیک در صورت عدم بهبود، عفونت باکتریایی یا در کودکان خردسال تجویز می‌شود."
    },
    {
      question: "گوش شناگران چیست و چگونه درمان می‌شود؟",
      answer: "گوش شناگران (عفونت گوش خارجی) به دلیل رطوبت یا آسیب به مجرای گوش ایجاد می‌شود. علائم شامل درد هنگام لمس لاله گوش، خارش و قرمزی است. درمان با قطره‌های گوش حاوی آنتی‌بیوتیک و گاهی کورتیکواستروئید انجام می‌شود."
    },
    {
      question: "چگونه می‌توان از عفونت گوش پیشگیری کرد؟",
      answer: "واکسیناسیون (واکسن آنفولانزا و پنوموکوک)، پرهیز از دود سیگار، بهداشت مناسب دست‌ها، خشک کردن گوش‌ها پس از شنا، و جلوگیری از قرار گرفتن اجسام خارجی در گوش به پیشگیری کمک می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "تب در کودکان: علائم، علل و مدیریت",
      description: "راهنمای کامل مدیریت تب در کودکان و زمان مراجعه به پزشک",
      image: childrenFeverImage,
      link: "/articles/children-fever",
      category: "اطفال"
    },
    {
      title: "گلو درد چرکی: تشخیص و درمان",
      description: "راهنمای کامل گلو درد چرکی و درمان آنتی‌بیوتیکی",
      image: strepThroatImage,
      link: "/articles/strep-throat",
      category: "سلامت عمومی"
    },
    {
      title: "سرگیجه: انواع، علل و درمان",
      description: "بررسی جامع انواع سرگیجه و راهکارهای درمانی",
      image: dizzinessImage,
      link: "/articles/dizziness",
      category: "سلامت عمومی"
    }
  ];

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "عفونت گوش", url: "/articles/ear-infection" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="عفونت گوش: انواع، علائم و راهکارهای درمانی | نوید زندگی"
        description="راهنمای کامل عفونت گوش شامل انواع عفونت (گوش میانی، خارجی، داخلی)، علائم در کودکان و بزرگسالان، تشخیص با اتوسکوپ و درمان با آنتی‌بیوتیک"
        keywords="عفونت گوش, اوتیت, گوش میانی, گوش شناگران, عفونت گوش کودکان, درمان عفونت گوش, آموکسی‌سیلین"
        canonical="https://navidzendegi.com/articles/ear-infection"
        ogType="article"
        publishedTime="2024-12-12"
        modifiedTime="2024-12-12"
      />
      <ArticleSchema
        title="عفونت گوش: انواع، علائم و راهکارهای درمانی"
        description="راهنمای کامل عفونت گوش شامل انواع عفونت، علائم در کودکان و بزرگسالان، تشخیص و درمان"
        publishedTime="2024-12-12"
        modifiedTime="2024-12-12"
        image={earInfectionImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              عفونت گوش (Ear Infection): انواع، علائم و راهکارهای درمانی
            </h1>
            <img
              src={earInfectionImage}
              alt="آناتومی گوش و محل‌های عفونت"
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
          </header>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>عفونت گوش</strong> یکی از شایع‌ترین مشکلات پزشکی، به‌ویژه در کودکان است، اما می‌تواند بزرگسالان را نیز درگیر کند. این عفونت‌ها معمولاً به دلیل ورود باکتری‌ها یا ویروس‌ها به بخش‌های مختلف گوش ایجاد می‌شوند و می‌توانند از نظر شدت و محل درگیری متفاوت باشند.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">۱. انواع اصلی عفونت گوش (بر اساس محل درگیری)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ساختار گوش به سه بخش اصلی تقسیم می‌شود و عفونت در هر بخش، نام متفاوتی دارد:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">الف) عفونت گوش میانی (Acute Otitis Media - AOM)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              شایع‌ترین نوع عفونت گوش است که معمولاً به دنبال <a href="/articles/cold-vs-flu" className="text-primary hover:underline">سرماخوردگی، آنفولانزا</a> یا آلرژی رخ می‌دهد.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>علت:</strong> تجمع مایع و التهاب پشت پرده گوش (در فضای گوش میانی) که اغلب به دلیل عملکرد نامناسب شیپور استاش (Eustachian Tube) ایجاد می‌شود.</li>
              <li><strong>عامل بیماری:</strong> معمولاً باکتری‌هایی مانند استرپتوکوک پنومونیه و هموفیلوس آنفلوآنزا، یا در برخی موارد ویروس‌ها.</li>
              <li><strong>علائم اصلی:</strong> درد شدید گوش (به خصوص در کودکان)، احساس پری گوش، <a href="/articles/children-fever" className="text-primary hover:underline">تب</a> و گاهی اوقات کاهش موقت شنوایی.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">ب) عفونت گوش خارجی (Otitis Externa)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              به نام «گوش شناگران» نیز شناخته می‌شود، زیرا اغلب به دلیل رطوبت یا آسیب به مجرای گوش خارجی رخ می‌دهد.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>علت:</strong> التهاب و عفونت در مجرای گوش (کانال منتهی به پرده گوش).</li>
              <li><strong>عامل بیماری:</strong> معمولاً باکتری‌ها (مانند سودوموناس آئروژینوزا یا استافیلوکوک).</li>
              <li><strong>علائم اصلی:</strong> درد هنگام لمس یا کشیدن لاله گوش، خارش و قرمزی در مجرا، و خروج ترشح از گوش.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">ج) عفونت گوش داخلی (Labyrinthitis)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              این نوع عفونت نادرتر بوده و معمولاً ناشی از یک عفونت ویروسی یا باکتریایی است که به لابیرنت (بخش حلزونی و سیستم دهلیزی) گسترش می‌یابد.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>علائم اصلی:</strong> <a href="/articles/dizziness" className="text-primary hover:underline">سرگیجه شدید (ورتیگو)</a>، عدم تعادل، حالت تهوع و کاهش شنوایی، که به دلیل درگیری اعصاب تعادل ایجاد می‌شود.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">۲. علائم عفونت گوش در کودکان و بزرگسالان</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">علائم در کودکان (اغلب زیر ۳ سال)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              تشخیص عفونت گوش میانی در کودکان خردسال دشوار است زیرا آن‌ها قادر به بیان درد خود نیستند. علائم زیر باید مورد توجه قرار گیرند:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>کشیدن یا مالیدن گوش</li>
              <li>گریه و بی‌قراری، به ویژه هنگام دراز کشیدن</li>
              <li>تب</li>
              <li>کاهش اشتها و مشکل در خوابیدن</li>
              <li>خروج مایع از گوش (نشان‌دهنده پارگی پرده گوش)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">علائم در بزرگسالان</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>درد گوش (Earache) شدید</li>
              <li>کاهش یا گرفتگی شنوایی</li>
              <li>احساس پری یا فشار در گوش</li>
              <li>ترشح مایع از گوش</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">۳. راهکارهای تشخیصی و درمانی</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">تشخیص</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              پزشک با استفاده از <strong>اتوسکوپ (Otoscope)</strong> پرده گوش را معاینه می‌کند تا قرمزی، التهاب، مایع پشت پرده یا برآمدگی آن را تشخیص دهد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">درمان</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              راهکار درمانی بر اساس نوع عفونت و عامل آن تعیین می‌شود:
            </p>
            
            <h4 className="text-lg font-semibold text-foreground mb-2">گوش میانی (AOM):</h4>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>رویکرد انتظار فعال:</strong> از آنجا که بسیاری از عفونت‌های گوش میانی ویروسی هستند، پزشک ممکن است در ابتدا ۳ روز انتظار فعال همراه با مدیریت درد را توصیه کند.</li>
              <li><strong>آنتی‌بیوتیک‌ها:</strong> در صورت عدم بهبود، تشخیص عفونت باکتریایی، یا در کودکان خردسال، آنتی‌بیوتیک‌هایی مانند آموکسی‌سیلین تجویز می‌شود. تکمیل دوره درمان ضروری است.</li>
            </ul>

            <h4 className="text-lg font-semibold text-foreground mb-2">گوش خارجی (Otitis Externa):</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              معمولاً با استفاده از قطره‌های گوش حاوی آنتی‌بیوتیک (و گاهی کورتیکواستروئید) درمان می‌شود.
            </p>

            <h4 className="text-lg font-semibold text-foreground mb-2">مدیریت درد:</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              داروهای ضد درد بدون نسخه مانند ایبوپروفن یا استامینوفن برای کاهش درد و تب تجویز می‌شوند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">پیشگیری</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <a href="/articles/influenza-vaccine" className="text-primary hover:underline">واکسیناسیون</a> (مانند واکسن آنفولانزا و واکسن پنوموکوک)، پرهیز از دود سیگار، و بهداشت مناسب دست‌ها به کاهش خطر عفونت گوش میانی کمک می‌کند.
            </p>
          </section>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">هشدار مهم</h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  در صورت درد شدید گوش، تب بالا، خروج چرک یا خون از گوش، یا کاهش شنوایی، فوراً به پزشک مراجعه کنید. خوددرمانی با آنتی‌بیوتیک بدون تجویز پزشک توصیه نمی‌شود.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">منابع علمی</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
              <li>Ear Infections in Children (Otitis Media). Centers for Disease Control and Prevention (CDC).</li>
              <li>Otitis Media and Otitis Externa. American Academy of Pediatrics (AAP).</li>
              <li>Labyrinthitis. Mayo Clinic (Academic Medical Center).</li>
              <li>Diagnosis and Management of Acute Otitis Media. The New England Journal of Medicine (NEJM) Review.</li>
            </ul>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">ویزیت پزشک در منزل برای عفونت گوش</h2>
            <p className="text-muted-foreground mb-4">
              اگر کودک یا بزرگسالی در خانواده شما دچار درد گوش شده است، می‌توانید از خدمات ویزیت پزشک در منزل نوید زندگی استفاده کنید. پزشکان ما با تجهیزات اتوسکوپ می‌توانند گوش را معاینه کرده و در صورت نیاز، درمان مناسب را تجویز کنند.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleCall} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>تماس: <a href="tel:09386117912" className="hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a></span>
              </Button>
              <Button variant="outline" onClick={handleWhatsApp} className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>مشاوره واتساپ</span>
              </Button>
            </div>
          </section>
        </article>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default EarInfectionPage;
