import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import methamphetamineEffectsImage from "@/assets/methamphetamine-effects.jpg";
import marijuanaEffectsImage from "@/assets/marijuana-effects.jpg";
import cocaineDangersImage from "@/assets/cocaine-dangers.jpg";
import psychiatryImage from "@/assets/psychiatry-home-visit.jpg";

const MethamphetamineEffectsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "عوارض مصرف شیشه", url: "/articles/methamphetamine-effects" },
  ];

  const faqs = [
    {
      question: "سایکوز ناشی از مت‌آمفتامین چیست؟",
      answer: "سایکوز ناشی از مت‌آمفتامین یک وضعیت روان‌پریشی شدید است که با پارانویا (سوءظن شدید)، توهمات بینایی و شنوایی و هذیان همراه است. این علائم شبیه به اسکیزوفرنی بوده و ممکن است حتی پس از ترک نیز ادامه یابد. این یک فوریت پزشکی است که نیاز به مداخله فوری دارد."
    },
    {
      question: "چرا مصرف شیشه برای قلب بسیار خطرناک است؟",
      answer: "مت‌آمفتامین باعث افزایش ناگهانی و شدید فشار خون و ضربان قلب می‌شود. همچنین اسپاسم عروق کرونر ایجاد کرده که می‌تواند جریان خون به قلب را قطع کند و منجر به سکته قلبی شود. مصرف طولانی‌مدت نیز باعث کاردیومیوپاتی و نارسایی قلبی می‌شود."
    },
    {
      question: "دهان مت (Meth Mouth) چیست؟",
      answer: "دهان مت به تخریب سریع و گسترده دندان‌ها و لثه در اثر مصرف شیشه گفته می‌شود. خشکی شدید دهان، دندان قروچه و عدم رعایت بهداشت در طول مصرف، باعث این عارضه می‌شود که نیاز به مداخلات دندانپزشکی گسترده دارد."
    },
    {
      question: "آیا آسیب‌های مغزی ناشی از شیشه قابل برگشت است؟",
      answer: "متأسفانه بسیاری از آسیب‌های مغزی ناشی از مت‌آمفتامین برگشت‌ناپذیر هستند. مصرف مزمن باعث مرگ سلول‌های عصبی و کاهش حجم ماده خاکستری مغز می‌شود. با این حال، ترک زودهنگام و توانبخشی تخصصی می‌تواند از پیشرفت آسیب‌ها جلوگیری کرده و عملکردهای باقیمانده را بهبود بخشد."
    },
    {
      question: "چه علائمی نشان‌دهنده اورژانس پزشکی در مصرف شیشه است؟",
      answer: "علائم خطرناک شامل درد قفسه سینه، تنگی نفس، سردرد شدید، تپش قلب شدید، علائم روان‌پریشی (توهم و هذیان)، تشنج، دمای بدن بسیار بالا و افکار خودکشی است. در صورت بروز هر یک از این علائم، باید فوراً به اورژانس مراجعه کرد."
    },
    {
      question: "آیا می‌توان از اعتیاد به شیشه ترک کرد؟",
      answer: "بله، ترک اعتیاد به شیشه با کمک تیم تخصصی پزشکی و روانپزشکی امکان‌پذیر است. فرآیند ترک باید تحت نظارت متخصصان انجام شود و نیاز به روان‌درمانی طولانی‌مدت و پشتیبانی مداوم دارد. نوید زندگی خدمات مشاوره روانپزشکی و پیگیری درمان را ارائه می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "عوارض مصرف گل (ماری‌جوانا/حشیش)",
      description: "بررسی کامل عوارض جسمی و روانی مصرف گل و حشیش شامل آسیب به مغز و اختلالات روانی",
      image: marijuanaEffectsImage,
      link: "/articles/marijuana-effects",
      category: "روانپزشکی"
    },
    {
      title: "عوارض مصرف کوکائین بر قلب و سیستم عصبی",
      description: "خطرات جدی مصرف کوکائین و تأثیرات مخرب آن بر سلامت قلب و عروق",
      image: cocaineDangersImage,
      link: "/articles/cocaine-dangers",
      category: "روانپزشکی"
    },
    {
      title: "خدمات روانپزشکی در منزل",
      description: "دریافت مشاوره و ویزیت روانپزشک در منزل برای درمان اعتیاد و اختلالات روانی",
      image: psychiatryImage,
      link: "/services/psychiatry",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="عوارض مصرف شیشه (مت‌آمفتامین): تخریب مغز، قلب و سیستم عصبی | نوید زندگی"
        description="بررسی جامع عوارض خطرناک مصرف شیشه شامل سایکوز، آسیب‌های مغزی، سکته قلبی، کاردیومیوپاتی و عوارض دندانی. راهنمای ترک و درمان اعتیاد"
        keywords="عوارض شیشه، مت آمفتامین، سایکوز، آسیب مغزی، سکته قلبی، کاردیومیوپاتی، دهان مت، ترک اعتیاد، درمان اعتیاد، مشاوره روانپزشکی"
        canonical="https://navidzendegi.com/articles/methamphetamine-effects"
        ogType="article"
        publishedTime="2025-01-15T11:00:00+03:30"
        modifiedTime="2025-01-15T11:00:00+03:30"
      />
      <ArticleSchema
        title="عوارض مصرف شیشه (مت‌آمفتامین): تخریب شدید مغز، قلب، سیستم عصبی و سلامت عمومی"
        description="بررسی کامل عوارض مصرف شیشه بر مغز، قلب، دندان‌ها و سلامت عمومی و ضرورت درمان تخصصی"
        publishedTime="2025-01-15T11:00:00+03:30"
        modifiedTime="2025-01-15T11:00:00+03:30"
        image="/src/assets/methamphetamine-effects.jpg"
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              عوارض مصرف "شیشه" (مت‌آمفتامین): تخریب شدید مغز، قلب، سیستم عصبی و سلامت عمومی
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>نویسنده: تیم پزشکی نوید زندگی</span>
              <span>تاریخ انتشار: 15 ژانویه 2025</span>
            </div>
          </header>

          <img
            src={methamphetamineEffectsImage}
            alt="عوارض مصرف شیشه بر مغز، قلب و سلامت عمومی"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            loading="eager"
          />

          <div className="bg-destructive/10 border-r-4 border-destructive p-6 rounded-lg mb-8">
            <p className="text-destructive-foreground font-semibold mb-2">
              ⚠️ هشدار فوری: مصرف شیشه یک فوریت پزشکی-روانی است
            </p>
            <p className="text-sm text-muted-foreground">
              در صورت مصرف یا علائم شدید، فوراً به اورژانس مراجعه کنید. برای شروع فرآیند ترک، حتماً با متخصص روانپزشکی مشورت کنید.
            </p>
          </div>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              مت‌آمفتامین (Methamphetamine) که در ایران با نام شیشه شناخته می‌شود، یک ماده محرک بسیار قوی و اعتیادآور است. این ماده با تحریک شدید سیستم عصبی مرکزی، باعث آزادسازی انفجاری انتقال‌دهنده‌های عصبی (به ویژه دوپامین و نوراپی‌نفرین) می‌شود که این امر، نه تنها منجر به سرخوشی شدید، بلکه به آسیب‌های جدی و اغلب برگشت‌ناپذیر در مغز، <a href="/cardiology" className="text-primary hover:underline">قلب</a>، و سایر ارگان‌های حیاتی بدن می‌گردد.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              تأثیرات مخرب بر مغز و اختلالات روان‌پزشکی
            </h2>
            <p>
              تأثیر مت‌آمفتامین بر <a href="/services/neurology" className="text-primary hover:underline">مغز</a>، از جدی‌ترین و شناخته‌شده‌ترین عوارض آن است:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              سایکوز ناشی از مت‌آمفتامین (Meth-Induced Psychosis)
            </h3>
            <p>
              مصرف، به ویژه در دوزهای بالا یا پس از بیداری طولانی، می‌تواند به طور مستقیم باعث روان‌پریشی شدید شود. علائم شامل پارانویا (سوءظن شدید)، توهمات بینایی و شنوایی و هذیان است. این روان‌پریشی اغلب شبیه به اسکیزوفرنی است و ممکن است حتی پس از ترک نیز ادامه یابد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              آسیب‌های ساختاری مغز
            </h3>
            <p>
              مت‌آمفتامین دارای خاصیت نوروتوکسیک (سمی برای اعصاب) است. مصرف مزمن باعث مرگ سلول‌های عصبی و کاهش حجم ماده خاکستری مغز، به خصوص در نواحی مرتبط با تصمیم‌گیری، حافظه و احساسات می‌شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              افزایش پرخاشگری و خشونت
            </h3>
            <p>
              تغییرات شیمیایی مغز می‌تواند منجر به تکانشگری، رفتار خشونت‌آمیز و افزایش خطر خودکشی شود. این عوارض نیاز به <a href="/services/psychiatry" className="text-primary hover:underline">مشاوره روانپزشکی</a> فوری و تخصصی دارند.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              سندرم بی‌قراری و بی‌خوابی
            </h3>
            <p>
              مصرف شیشه باعث بیداری‌های طولانی و بی‌قراری شدید می‌شود که به نوبه خود، وضعیت روانی و جسمی بیمار را وخیم‌تر می‌کند.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              فشار شدید بر قلب و سیستم گردش خون
            </h2>
            <p>
              مت‌آمفتامین مستقیماً سیستم قلبی-عروقی را تهدید می‌کند:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              افزایش حاد فشار خون و ضربان قلب
            </h3>
            <p>
              آزادسازی نوراپی‌نفرین باعث انقباض شدید عروق و افزایش ناگهانی و خطرناک <a href="/articles/high-blood-pressure-control" className="text-primary hover:underline">فشار خون</a> (بحران فشار خون) و تاکی‌کاردی می‌شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              سکته قلبی (Myocardial Infarction)
            </h3>
            <p>
              افزایش شدید فشار خون و ضربان قلب، بار کاری قلب را به شدت بالا می‌برد. از طرف دیگر، اسپاسم عروق کرونر ناشی از مت‌آمفتامین می‌تواند جریان خون به قلب را قطع کند و منجر به <a href="/articles/heart-attack-symptoms" className="text-primary hover:underline">سکته قلبی</a> شود. این حوادث در مصرف‌کنندگان جوان، شایع است.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              کاردیومیوپاتی مت‌آمفتامینی
            </h3>
            <p>
              مصرف طولانی‌مدت، حتی در دوزهای پایین، می‌تواند باعث تضعیف و بزرگ شدن عضله قلب (کاردیومیوپاتی) شود که در نهایت منجر به نارسایی قلبی مزمن و مرگ ناگهانی می‌شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              سکته مغزی
            </h3>
            <p>
              افزایش شدید و ناگهانی فشار خون خطر <a href="/articles/stroke-symptoms" className="text-primary hover:underline">سکته مغزی</a> هموراژیک (خونریزی‌دهنده) را به شدت بالا می‌برد.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              عوارض بر سایر ارگان‌ها و سلامت فیزیکی
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              دندان‌ها (Meth Mouth)
            </h3>
            <p>
              خشکی شدید دهان، دندان قروچه (ساییدن دندان‌ها)، و عدم رعایت بهداشت در طول مصرف، باعث تخریب سریع و گسترده دندان‌ها و لثه می‌شود که به آن "دهان مت" گفته می‌شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              کلیه‌ها
            </h3>
            <p>
              فشار خون بالا و دمای بالای بدن می‌تواند به نارسایی حاد کلیه و آسیب‌های بلندمدت کلیوی منجر شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              پوست
            </h3>
            <p>
              مصرف شیشه باعث احساس خزش حشرات زیر پوست می‌شود که فرد را وادار می‌کند به طور وسواسی پوست خود را بکند. این رفتار منجر به زخم‌ها و عفونت‌های شدید پوستی می‌شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              کاهش وزن شدید
            </h3>
            <p>
              مت‌آمفتامین به شدت اشتها را سرکوب کرده و منجر به سوء تغذیه حاد و تحلیل عضلات می‌شود.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              هشدار و ضرورت درمان تخصصی
            </h2>
            <p>
              مصرف شیشه یک وضعیت پزشکی اورژانسی است و درمان آن نیازمند رویکرد چند رشته‌ای است:
            </p>

            <p>
              <strong>خطر اورژانسی:</strong> علائم شدید مانند درد قفسه سینه، تنگی نفس، سردرد شدید و علائم روان‌پریشی نیازمند اعزام آمبولانس فوری و مداخله تخصصی پزشکی هستند.
            </p>

            <p>
              <strong>سم‌زدایی و ترک اعتیاد:</strong> فرآیند ترک مت‌آمفتامین باید تحت نظارت تخصصی پزشکی و روان‌پزشکی صورت گیرد. مدیریت علائم ترک و جلوگیری از خودکشی در این دوره حیاتی است.
            </p>

            <p>
              <strong>توانبخشی روانی:</strong> آسیب‌های طولانی‌مدت بر سلامت روان و شناختی نیازمند روان‌درمانی طولانی‌مدت و مشاوره روان‌پزشکی برای مدیریت اختلالات خلقی و روان‌پریشی است.
            </p>

            <div className="bg-primary/10 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                دریافت کمک تخصصی فوری
              </h3>
              <p className="text-foreground mb-4">
                خطرات مصرف شیشه جدی و فوری است. برای ارزیابی فوری آسیب‌های قلبی توسط <a href="/cardiology" className="text-primary hover:underline font-semibold">متخصص قلب و عروق در منزل</a> و <a href="/services/psychiatry" className="text-primary hover:underline font-semibold">مشاوره روانپزشکی آنلاین و حضوری</a> جهت شروع ایمن و تخصصی روند ترک، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <a href="tel:09386117912">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="ml-2 h-5 w-5" />
                  تماس فوری: 09386117912
                </Button>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              منابع (References)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                National Institute on Drug Abuse (NIDA). (2020). Methamphetamine DrugFacts.
              </li>
              <li>
                Chang, L., et al. (2018). Neurotoxic effects of methamphetamine on the brain. Current Opinion in Neurology, 31(2), 220-227.
              </li>
              <li>
                Kiyatkin, E. A., & Wise, R. A. (2014). Cardiovascular effects of methamphetamine. Current Opinion in Neurobiology, 27, 24-30.
              </li>
              <li>
                Shepherd, C. M., et al. (2018). Methamphetamine-Associated Cardiomyopathy. JACC: Heart Failure, 6(11), 937-947.
              </li>
            </ol>
          </div>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default MethamphetamineEffectsPage;
