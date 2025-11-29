import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import sertralineImage from "@/assets/sertraline-medication.jpg";
import depressionImage from "@/assets/depression-article.jpg";
import psychiatryImage from "@/assets/psychiatry-home-visit.jpg";
import anxietyImage from "@/assets/medical-anxiety-article.jpg";

const SertralinePage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "داروی سرتالین", url: "/articles/sertraline" }
  ];

  const faqs = [
    {
      question: "سرتالین چقدر طول می‌کشد تا اثر کند؟",
      answer: "معمولاً 2 تا 4 هفته برای مشاهده بهبود اولیه و تا 8 تا 12 هفته برای حداکثر اثرگذاری لازم است. مهم است که دارو را حتی در صورت عدم بهبود فوری ادامه دهید و با پزشک خود در ارتباط باشید."
    },
    {
      question: "آیا می‌توانم سرتالین را به طور ناگهانی قطع کنم؟",
      answer: "خیر، قطع ناگهانی سرتالین شدیداً ممنوع است. این کار می‌تواند منجر به علائم قطع مصرف مانند سرگیجه، تهوع، اضطراب و احساس شوک الکتریکی در سر شود. همیشه باید دوز را تحت نظارت روانپزشک به صورت تدریجی کاهش دهید."
    },
    {
      question: "عوارض جانبی سرتالین چه مدت طول می‌کشد؟",
      answer: "بیشتر عوارض جانبی مانند تهوع، اسهال و بی‌خوابی معمولاً خفیف تا متوسط هستند و پس از چند هفته اول با تطبیق بدن با دارو کاهش می‌یابند. اگر عوارض شدید یا ماندگار باشند، با روانپزشک خود مشورت کنید."
    },
    {
      question: "سرتالین چه تاثیری بر عملکرد جنسی دارد؟",
      answer: "کاهش میل جنسی، اختلال در عملکرد جنسی و تأخیر در انزال یا ارگاسم از عوارض شایع سرتالین و سایر SSRIها است. اگر این عوارض برای شما مشکل‌ساز است، با روانپزشک خود درباره گزینه‌های دیگر صحبت کنید."
    },
    {
      question: "آیا سرتالین برای کودکان و نوجوانان امن است؟",
      answer: "سرتالین برای کودکان بالای 6 سال برای درمان OCD تأیید شده است، اما FDA هشدار جدی درباره افزایش خطر افکار خودکشی در کودکان، نوجوانان و بزرگسالان زیر 25 سال داده است. نظارت دقیق پزشکی و خانوادگی در شروع درمان ضروری است."
    },
    {
      question: "چه داروهایی نباید با سرتالین مصرف شوند؟",
      answer: "سرتالین نباید با مهارکننده‌های MAOIs، ترامادول، برخی داروهای میگرن (تریپتان‌ها) یا سایر داروهای افزایش‌دهنده سروتونین مصرف شود چون خطر سندرم سروتونین را افزایش می‌دهد. همیشه لیست کامل داروهای خود را به روانپزشک اطلاع دهید."
    }
  ];

  const relatedArticles = [
    {
      title: "افسردگی: علائم، تشخیص و روش‌های درمانی",
      description: "راهنمای جامع درباره اختلال افسردگی اساسی، علائم، روش‌های تشخیص و گزینه‌های درمانی دارویی و غیردارویی.",
      image: depressionImage,
      link: "/articles/depression",
      category: "سلامت روان"
    },
    {
      title: "اختلال اضطراب: علائم و درمان",
      description: "شناخت انواع اختلالات اضطرابی، علائم آنها و روش‌های درمان دارویی و روان‌درمانی.",
      image: anxietyImage,
      link: "/articles/medical-anxiety",
      category: "سلامت روان"
    },
    {
      title: "ویزیت روانپزشک در منزل",
      description: "دریافت خدمات تخصصی روانپزشکی در منزل، تشخیص اختلالات روانی، تنظیم دارو و پیگیری درمان.",
      image: psychiatryImage,
      link: "/services/psychiatry",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="داروی سرتالین (Sertraline) - زولوفت: مکانیسم اثر، کاربردها و هشدارهای تخصصی | نوید زندگی"
        description="راهنمای جامع داروی سرتالین (Zoloft) برای درمان افسردگی، اضطراب و OCD. مکانیسم اثر SSRIs، عوارض جانبی، هشدارهای FDA و نکات مهم مصرف."
        keywords="سرتالین، زولوفت، Sertraline، Zoloft، داروی افسردگی، SSRI، ضد افسردگی، اختلال وسواس فکری، اختلال هراس، اختلال اضطراب اجتماعی، PTSD، عوارض سرتالین، روانپزشک در منزل"
        canonical="https://navidzendegi.com/articles/sertraline"
        ogImage={sertralineImage}
        ogType="article"
        publishedTime="2025-01-18T10:00:00Z"
        modifiedTime="2025-01-18T10:00:00Z"
      />

      <ArticleSchema
        title="داروی سرتالین (Sertraline) - زولوفت: مکانیسم اثر، کاربردها و هشدارهای تخصصی"
        description="راهنمای جامع داروی سرتالین (Zoloft) برای درمان افسردگی، اضطراب و OCD. مکانیسم اثر SSRIs، عوارض جانبی، هشدارهای FDA و نکات مهم مصرف."
        publishedTime="2025-01-18T10:00:00Z"
        modifiedTime="2025-01-18T10:00:00Z"
        image={sertralineImage}
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <img
            src={sertralineImage}
            alt="داروی سرتالین (زولوفت) - قرص‌های ضد افسردگی SSRI"
            className="w-full h-auto rounded-lg mb-8 shadow-lg"
            loading="eager"
          />

          <h1 className="text-4xl font-bold text-foreground mb-6">
            💊 داروی سرتالین (Sertraline): مکانیسم اثر، کاربردها و هشدارهای تخصصی (Zoloft)
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            سرتالین یک داروی ضد افسردگی است که به طور گسترده برای درمان اختلالات سلامت روان تجویز می‌شود. این دارو متعلق به دسته <strong>مهارکننده‌های انتخابی بازجذب سروتونین (SSRIs)</strong> است و با تنظیم تعادل شیمیایی مغز، به بهبود خلق‌وخو، کاهش اضطراب و مدیریت فوبی‌ها کمک می‌کند.
          </p>

          <div className="bg-muted/50 border-r-4 border-primary p-6 rounded-lg my-8">
            <p className="text-sm text-muted-foreground mb-2">⚠️ هشدار مهم</p>
            <p className="text-foreground leading-relaxed">
              این مقاله صرفاً جنبه آموزشی دارد و جایگزین مشاوره پزشکی نیست. سرتالین یک داروی تجویزی است که باید تحت نظر روانپزشک متخصص مصرف شود. هرگز بدون تجویز پزشک این دارو را مصرف نکنید یا دوز آن را تغییر ندهید.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            موارد مصرف اصلی و تأیید شده
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            سرتالین توسط سازمان غذا و داروی آمریکا (FDA) برای درمان اختلالات زیر در بزرگسالان تأیید شده است:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed mb-6">
            <li><strong>اختلال افسردگی اساسی (Major Depressive Disorder):</strong> بهبود علائم افسردگی، از جمله خلق افسرده، بی‌انگیزگی و احساس گناه.</li>
            <li><strong>اختلال وسواس فکری-عملی (OCD):</strong> مدیریت افکار و رفتارهای وسواسی.</li>
            <li><strong>اختلال هراس (Panic Disorder):</strong> کاهش دفعات و شدت حملات هراس.</li>
            <li><strong>اختلال اضطراب اجتماعی (Social Anxiety Disorder):</strong> کاهش اضطراب و ترس از موقعیت‌های اجتماعی.</li>
            <li><strong>اختلال استرس پس از سانحه (PTSD):</strong> درمان اضطراب و یادآوری‌های مرتبط با ضربه‌های روانی.</li>
            <li><strong>اختلال نارسایی پیش از قاعدگی (PMDD):</strong> کاهش علائم شدید خلقی و جسمی پیش از پریود.</li>
          </ol>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            مکانیسم عمل
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4">
            سرتالین با مهار انتخابی بازجذب <strong>سروتونین</strong> در شکاف سیناپسی در مغز، باعث افزایش غلظت سروتونین در دسترس می‌شود. سروتونین یک انتقال‌دهنده عصبی کلیدی است که در تنظیم خلق‌وخو، خواب، اشتها و ادراک نقش دارد. این افزایش تدریجی، به بازسازی ارتباطات سلول‌های عصبی آسیب‌دیده و بهبود عملکرد شبکه‌های مغزی کمک می‌کند.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-r-4 border-blue-500 p-6 rounded-lg my-8">
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">💡 نکته کلیدی</p>
            <p className="text-foreground leading-relaxed">
              سرتالین برای تأثیرگذاری کامل نیازمند زمان است. معمولاً 2 تا 4 هفته برای مشاهده بهبود اولیه و تا 8 تا 12 هفته برای مشاهده حداکثر اثرگذاری لازم است.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            عوارض جانبی شایع و موقت
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            عوارض جانبی سرتالین معمولاً خفیف تا متوسط هستند و اغلب پس از چند هفته اول مصرف، با تطبیق بدن با دارو، کاهش می‌یابند:
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mb-6">
            <li><strong>دستگاه گوارش:</strong> تهوع، اسهال (شایع)، خشکی دهان، سوءهاضمه</li>
            <li><strong>سیستم عصبی مرکزی:</strong> بی‌خوابی، خواب‌آلودگی، سردرد، لرزش خفیف</li>
            <li><strong>عملکرد جنسی:</strong> کاهش میل جنسی، اختلال در عملکرد جنسی و تأخیر در انزال یا ارگاسم</li>
            <li><strong>سایر موارد:</strong> تعریق بیش از حد، بی‌قراری</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            هشدارهای جدی و اقدامات احتیاطی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            چندین هشدار حیاتی هنگام تجویز و مصرف سرتالین وجود دارد که نیاز به نظارت دقیق پزشکی دارند:
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۱. خطر افکار خودکشی (FDA Black Box Warning)
          </h3>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mb-6">
            <li>داروهای ضد افسردگی، از جمله سرتالین، می‌توانند خطر <strong>افکار و رفتارهای خودکشی</strong> را در کودکان، نوجوانان و بزرگسالان زیر 25 سال افزایش دهند، به‌ویژه در شروع درمان یا هنگام تغییر دوز.</li>
            <li>خانواده و مراقبان باید بیمار را در هفته‌های اولیه درمان به دقت تحت نظر داشته باشند و در صورت مشاهده تغییرات شدید خلقی یا رفتاری، فوراً با پزشک مشورت کنند.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۲. سندرم سروتونین (Serotonin Syndrome)
          </h3>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mb-6">
            <li>این یک عارضه جدی و بالقوه کشنده است که در اثر افزایش بیش از حد سروتونین در مغز رخ می‌دهد (اغلب هنگام ترکیب با سایر داروهای افزایش‌دهنده سروتونین مانند MAOIs، ترامادول یا برخی داروهای میگرن).</li>
            <li><strong>علائم:</strong> تغییر وضعیت روانی (توهم، بی‌قراری)، افزایش ضربان قلب، تب بالا، سفت شدن عضلات، و رفلکس‌های بیش فعال.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۳. علائم قطع مصرف (Discontinuation Syndrome)
          </h3>

          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mb-6">
            <li><strong>قطع ناگهانی سرتالین شدیداً ممنوع است.</strong> قطع ناگهانی می‌تواند منجر به علائمی مانند سرگیجه، حالت تهوع، بی‌حسی یا احساس شوک الکتریکی در سر (Brain Zaps)، اضطراب و اختلالات خواب شود.</li>
            <li>دوز دارو باید همیشه تحت نظارت روانپزشک و به صورت <strong>تدریجی</strong> کاهش یابد.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            ۴. منع مصرف
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            سرتالین نباید با مهارکننده‌های مونوآمین اکسیداز (MAOIs) مصرف شود و باید حداقل 14 روز پس از قطع MAOIs شروع گردد.
          </p>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              📞 دریافت مشاوره تخصصی روانپزشکی
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              مصرف سرتالین نیازمند تشخیص و پایش دقیق روانپزشکی است. برای <strong>تشخیص تخصصی اختلالات افسردگی و اضطرابی</strong> و <strong>تنظیم ایمن دوز دارو و مدیریت عوارض جانبی</strong>، مشاوره آنلاین یا حضوری با روانپزشک متخصص را از طریق نوید زندگی رزرو کنید.
            </p>
            <a
              href="tel:09386117912"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              📱 تماس: 09386117912
            </a>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
            منابع (References)
          </h3>

          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>National Institute of Mental Health (NIMH). Mental Health Medications. (U.S. Government Source).</li>
            <li>Mayo Clinic. Sertraline (Oral Route) - Side Effects & Dosage. (Academic Medical Center Source).</li>
            <li>U.S. Food and Drug Administration (FDA). Suicidality in Children and Adolescents Being Treated with Antidepressant Medications. (Government Regulatory Source, Black Box Warning).</li>
            <li>Harvard Health Publishing (Harvard Medical School). Going off antidepressants. (University Academic Source).</li>
          </ol>
        </article>

        <FAQSection faqs={faqs} />

        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>

        <div className="mt-8">
          <PricingInfo />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default SertralinePage;
