import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import marijuanaEffectsImage from "@/assets/marijuana-effects.jpg";
import cocaineDangersImage from "@/assets/cocaine-dangers.jpg";
import drugCardiovascularImage from "@/assets/drug-cardiovascular-effects.jpg";
import psychiatryImage from "@/assets/psychiatry-home-visit.jpg";

const MarijuanaEffectsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "عوارض مصرف گل", url: "/articles/marijuana-effects" },
  ];

  const faqs = [
    {
      question: "آیا مصرف گل (ماری‌جوانا) می‌تواند به قلب آسیب برساند؟",
      answer: "بله، مصرف گل باعث افزایش ضربان قلب (20 تا 50 ضربه در دقیقه)، افزایش نیاز قلب به اکسیژن و انقباض عروق کرونر می‌شود. این تأثیرات می‌تواند خطر سکته قلبی را به ویژه در ساعات اولیه پس از مصرف افزایش دهد، حتی در افراد جوان."
    },
    {
      question: "مصرف گل چه تأثیری بر حافظه و یادگیری دارد؟",
      answer: "THC موجود در گل با تأثیر بر هیپوکامپ (ناحیه حافظه مغز)، توانایی تمرکز، یادگیری مطالب جدید و حفظ اطلاعات را کاهش می‌دهد. این عارضه در مصرف‌کنندگان نوجوان شدیدتر و ماندگارتر است و می‌تواند به آسیب‌های دائمی شناختی منجر شود."
    },
    {
      question: "آیا مصرف گل می‌تواند باعث اختلالات روانی شود؟",
      answer: "بله، مصرف گل به ویژه در افرادی که سابقه خانوادگی اختلالات روان‌پریشی مانند اسکیزوفرنی دارند یا در سنین پایین شروع به مصرف کرده‌اند، می‌تواند خطر ابتلا به روان‌پریشی، اضطراب، حملات پانیک و افسردگی را به طور چشمگیری افزایش دهد."
    },
    {
      question: "چرا مصرف گل برای ریه‌ها مضر است؟",
      answer: "دود گل حاوی مواد شیمیایی سمی و کارسینوژن‌های مشابه دود سیگار است. این دود می‌تواند به بافت ریه آسیب زده، باعث التهاب برونش‌ها، سرفه مزمن، افزایش تولید خلط و در دراز مدت منجر به بیماری‌های مزمن تنفسی مانند برونشیت مزمن شود."
    },
    {
      question: "سندرم استفراغ کانابینوئیدی چیست؟",
      answer: "سندرم استفراغ کانابینوئیدی یک عارضه ناشی از مصرف سنگین و مزمن گل است که با دوره‌های شدید و مکرر تهوع و استفراغ همراه می‌شود. این سندرم نیاز به مراقبت پزشکی دارد و تنها با قطع مصرف بهبود می‌یابد."
    },
    {
      question: "آیا می‌توان از مصرف گل ترک کرد؟",
      answer: "بله، ترک مصرف گل با کمک متخصصان امکان‌پذیر است. نوید زندگی خدمات مشاوره روانپزشکی آنلاین و ویزیت روانپزشک در منزل را برای کمک به شروع روند ترک و مدیریت اختلالات روانی ناشی از مصرف ارائه می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "عوارض مصرف کوکائین بر قلب و سیستم عصبی",
      description: "خطرات جدی مصرف کوکائین و تأثیرات مخرب آن بر سلامت قلب و عروق",
      image: cocaineDangersImage,
      link: "/articles/cocaine-dangers",
      category: "روانپزشکی"
    },
    {
      title: "تأثیرات قلبی-عروقی مصرف مواد مخدر",
      description: "بررسی جامع عوارض قلبی و عروقی ناشی از مصرف انواع مواد مخدر",
      image: drugCardiovascularImage,
      link: "/articles/drug-cardiovascular-effects",
      category: "قلب و عروق"
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
        title="عوارض مصرف گل (ماری‌جوانا/حشیش): تأثیرات مخرب بر مغز، قلب و ریه | نوید زندگی"
        description="بررسی کامل عوارض جسمی و روانی مصرف گل و حشیش شامل آسیب به مغز، اختلالات روانی، بیماری‌های قلبی و ریوی. راهنمای جامع ترک و درمان با نوید زندگی"
        keywords="عوارض گل، عوارض ماری جوانا، عوارض حشیش، THC، آسیب مغزی، اختلالات روانی، روان‌پریشی، سکته قلبی، بیماری ریوی، ترک اعتیاد، مشاوره روانپزشکی"
        canonical="https://navidzendegi.com/articles/marijuana-effects"
        ogType="article"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
      />
      <ArticleSchema
        title="عوارض مصرف گل (ماری‌جوانا/حشیش): تأثیرات مخرب بر مغز، سلامت روان، قلب، ریه و سایر ارگان‌ها"
        description="بررسی جامع عوارض جسمی و روانی مصرف ماری‌جوانا و حشیش بر سلامت مغز، قلب، ریه و سلامت روان"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
        image="/src/assets/marijuana-effects.jpg"
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              عوارض مصرف "گل" (ماری‌جوانا/حشیش): تأثیرات مخرب بر مغز، سلامت روان، قلب، ریه و سایر ارگان‌ها
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>نویسنده: تیم پزشکی نوید زندگی</span>
              <span>تاریخ انتشار: 15 ژانویه 2025</span>
            </div>
          </header>

          <img
            src={marijuanaEffectsImage}
            alt="عوارض مصرف ماری‌جوانا بر مغز، قلب و ریه"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            loading="eager"
          />

          <div className="bg-destructive/10 border-r-4 border-destructive p-6 rounded-lg mb-8">
            <p className="text-destructive-foreground font-semibold mb-2">
              ⚠️ هشدار مهم: خودسرانه مصرف هیچ ماده‌ای، حتی به قصد درمان، ممنوع است
            </p>
            <p className="text-sm text-muted-foreground">
              در صورت مصرف یا قصد ترک، حتماً با متخصص مشورت کنید. تیم نوید زندگی آماده ارائه مشاوره تخصصی است.
            </p>
          </div>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              ماری‌جوانا (Marijuana) یا حشیش که در ایران به نام‌هایی مانند گل یا گرس نیز شناخته می‌شود، از برگ و گل گیاه Cannabis sativa به دست می‌آید. ماده فعال اصلی و روان‌گردان در آن تتراهیدروکانابینول (THC) است. مصرف این ماده، به ویژه در دوزهای بالا یا به صورت مزمن، می‌تواند تأثیرات مخربی بر تمام ارگان‌های بدن، از جمله <a href="/services/neurology" className="text-primary hover:underline">مغز</a>، <a href="/services/psychiatry" className="text-primary hover:underline">سلامت روان</a>، <a href="/services/cardiology" className="text-primary hover:underline">قلب</a>، و ریه‌ها داشته باشد.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              تأثیرات مخرب بر مغز و عملکردهای شناختی
            </h2>
            <p>
              THC مستقیماً بر گیرنده‌های کانابینوئیدی (CB1) در مغز تأثیر می‌گذارد و عملکردهای شناختی را مختل می‌کند:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              اختلال حافظه و یادگیری
            </h3>
            <p>
              THC با تأثیر بر هیپوکامپ (ناحیه مسئول حافظه)، توانایی فرد را در تمرکز، یادگیری مطالب جدید و حفظ اطلاعات کاهش می‌دهد. این عارضه در مصرف‌کنندگان نوجوان شدیدتر و ماندگارتر است.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              عملکرد اجرایی و زمان واکنش
            </h3>
            <p>
              مصرف کانابیس باعث کند شدن زمان واکنش، اختلال در مهارت‌های حرکتی و کاهش توانایی‌های تصمیم‌گیری می‌شود. این تأثیرات می‌تواند خطر تصادفات رانندگی و حوادث کاری را به شدت افزایش دهد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              سندرم بی‌انگیزگی (Amotivational Syndrome)
            </h3>
            <p>
              مصرف مزمن و طولانی‌مدت با کاهش شدید انگیزه، بی‌علاقگی به فعالیت‌های اجتماعی و شغلی و کاهش عملکرد تحصیلی همراه است. این سندرم می‌تواند زندگی فردی و اجتماعی فرد را به طور جدی تحت تأثیر قرار دهد.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              عوارض و اختلالات روانی
            </h2>
            <p>
              تأثیر کانابیس بر سلامت روان، یکی از جدی‌ترین عوارض آن است که نیاز به توجه ویژه دارد:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ریسک روان‌پریشی (Psychosis)
            </h3>
            <p>
              مصرف، به‌ویژه در افرادی که سابقه خانوادگی اختلالات روان‌پریشی (مانند اسکیزوفرنی) دارند یا در سنین پایین شروع به مصرف کرده‌اند، می‌تواند خطر ابتلا به این اختلالات را به طور چشمگیری افزایش دهد. کانابیس می‌تواند باعث بروز دوره‌های حاد روان‌پریشی، شامل توهم و هذیان‌های موقت، در حین مسمومیت شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              اضطراب و حملات پانیک
            </h3>
            <p>
              در حالی که برخی مصرف‌کنندگان به دنبال آرامش هستند، مصرف دوزهای بالا و یا سویه‌های دارای THC زیاد، می‌تواند به طور متناقض منجر به افزایش شدید اضطراب، پارانویا (بدگمانی) و حملات وحشت‌زدگی شود. این عوارض می‌تواند بسیار ناخوشایند و وحشتناک باشد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              افسردگی
            </h3>
            <p>
              اگرچه رابطه علی و معلولی پیچیده است، مصرف مزمن کانابیس به ویژه در نوجوانان، با افزایش احتمال بروز یا تشدید علائم <a href="/articles/depression" className="text-primary hover:underline">افسردگی</a> مرتبط دانسته شده است.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              آسیب به قلب، ریه‌ها و سایر ارگان‌ها
            </h2>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              سیستم قلبی-عروقی
            </h3>
            <p>
              <strong>افزایش ضربان قلب (تاکی‌کاردی):</strong> پس از مصرف، ضربان قلب می‌تواند 20 تا 50 ضربه در دقیقه افزایش یابد که این فشار برای افراد دارای <a href="/articles/heart-attack-symptoms" className="text-primary hover:underline">مشکلات قلبی</a> خطرناک است.
            </p>
            <p>
              <strong>افزایش خطر سکته قلبی:</strong> THC باعث افزایش نیاز قلب به اکسیژن و در عین حال، انقباض عروق کرونر می‌شود. این عدم تعادل می‌تواند خطر وقوع سکته قلبی را در ساعات اولیه پس از مصرف، به خصوص در افراد جوان، افزایش دهد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ریه‌ها و سیستم تنفسی
            </h3>
            <p>
              <strong>آسیب‌های ریوی:</strong> دود کانابیس حاوی مواد شیمیایی سمی و کارسینوژن‌های مشابه دود سیگار است. این دود می‌تواند به بافت ریه آسیب زده و به التهاب برونش‌ها، سرفه مزمن، و افزایش تولید خلط منجر شود.
            </p>
            <p>
              <strong>بیماری‌های مزمن تنفسی:</strong> مصرف سنگین می‌تواند به مرور زمان، خطر ابتلا به بیماری‌های مزمن ریوی (مانند برونشیت مزمن) را افزایش دهد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              سایر ارگان‌ها و سلامت عمومی
            </h3>
            <p>
              <strong>سندرم استفراغ کانابینوئیدی:</strong> مصرف سنگین و مزمن می‌تواند باعث ایجاد سندرم استفراغ کانابینوئیدی شود که با دوره‌های شدید و مکرر تهوع و استفراغ همراه است.
            </p>
            <p>
              <strong>سلامت باروری:</strong> مصرف در دوران <a href="/articles/pregnancy-nutrition" className="text-primary hover:underline">بارداری</a> با وزن کم هنگام تولد و مشکلات در رشد مغزی جنین مرتبط است.
            </p>

            <div className="bg-primary/10 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                دریافت مشاوره تخصصی برای ترک و درمان
              </h3>
              <p className="text-foreground mb-4">
                عوارض جسمی و روانی مصرف گل و حشیش را جدی بگیرید. برای ارزیابی سلامت قلب و ریه توسط <a href="/cardiology" className="text-primary hover:underline font-semibold">متخصص قلب و عروق</a> یا متخصص ریه در منزل و <a href="/services/psychiatry" className="text-primary hover:underline font-semibold">مشاوره روانپزشکی آنلاین</a> برای شروع روند ترک و مدیریت اختلالات روانی، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <a href="tel:09386117912">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="ml-2 h-5 w-5" />
                  تماس با نوید زندگی: 09386117912
                </Button>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              منابع (References)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                National Institute on Drug Abuse (NIDA). (2020). Marijuana DrugFacts. (Comprehensive overview of effects).
              </li>
              <li>
                Meier, M. H., et al. (2012). Persistent cannabis users show neuropsychological decline from childhood to midlife. Proceedings of the National Academy of Sciences, 109(40), E2657-E2664.
              </li>
              <li>
                Richards, J. R., et al. (2018). Marijuana use and the risk of acute myocardial infarction: a systematic review and meta-analysis. Clinical Cardiology, 41(5), 585-594.
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

export default MarijuanaEffectsPage;
