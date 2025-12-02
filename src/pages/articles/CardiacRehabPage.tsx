import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import cardiacRehabImage from "@/assets/cardiac-rehab-exercise.jpg";
import coffeeHeartImage from "@/assets/coffee-heart-article.jpg";
import yogaHeartImage from "@/assets/yoga-heart-health.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const CardiacRehabPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "نقش ورزش در توانبخشی قلبی", url: "/articles/cardiac-rehab" }
  ];

  const faqItems = [
    {
      question: "توانبخشی قلبی چیست و چه کسانی نیاز به آن دارند؟",
      answer: "توانبخشی قلبی (Cardiac Rehabilitation) یک برنامه جامع و تحت نظارت است که شامل ورزش، آموزش سلامت و مشاوره روانی برای بیماران قلبی است. این برنامه برای افرادی که سکته قلبی، جراحی قلب، آنژیوپلاستی یا نارسایی قلبی داشته‌اند، بسیار مفید است."
    },
    {
      question: "چه نوع ورزش‌هایی در برنامه توانبخشی قلبی انجام می‌شود؟",
      answer: "برنامه شامل تمرینات هوازی (پیاده‌روی، دوچرخه‌سواری)، تمرینات مقاومتی با وزنه‌های سبک، و در برخی موارد تمرینات تناوبی با شدت بالا (HIIT) تحت نظارت دقیق پزشک است. شدت و نوع ورزش بر اساس وضعیت قلبی هر فرد تعیین می‌شود."
    },
    {
      question: "آیا ورزش برای بیماران قلبی خطرناک نیست؟",
      answer: "ورزش تحت نظارت در برنامه توانبخشی قلبی بسیار ایمن است و در واقع خطر عوارض قلبی و مرگ و میر را کاهش می‌دهد. برنامه‌ها با شدت پایین شروع شده و به تدریج افزایش می‌یابند، همچنین ضربان قلب و فشار خون به طور مداوم کنترل می‌شود."
    },
    {
      question: "چقدر طول می‌کشد تا نتایج توانبخشی قلبی مشخص شود؟",
      answer: "اکثر برنامه‌های توانبخشی قلبی حدود ۱۲ هفته طول می‌کشند. بسیاری از بیماران بهبود قابل توجهی در آمادگی جسمانی، کاهش علائم و افزایش کیفیت زندگی خود را در طول چند هفته اول مشاهده می‌کنند."
    },
    {
      question: "آیا می‌توانم تمرینات توانبخشی را در منزل انجام دهم؟",
      answer: "پس از تکمیل فاز ۲ تحت نظارت، بسیاری از بیماران می‌توانند تمرینات خود را در منزل ادامه دهند. اما شروع برنامه باید حتماً تحت نظارت پزشک متخصص قلب باشد تا برنامه مناسب تنظیم و ایمنی تضمین شود."
    }
  ];

  const relatedArticles = [
    {
      title: "قهوه و سلامت قلب: آیا قهوه برای قلب مضر است؟",
      description: "بررسی تأثیرات قهوه بر سلامت قلب و عروق بر اساس آخرین تحقیقات علمی",
      image: coffeeHeartImage,
      link: "/articles/coffee-heart",
      category: "قلب و عروق"
    },
    {
      title: "یوگا و سلامت قلب: تأثیرات تمرینات یوگا بر بیماری‌های قلبی-عروقی",
      description: "بررسی فواید یوگا در کنترل فشار خون، کاهش استرس و بهبود سلامت قلب",
      image: yogaHeartImage,
      link: "/articles/yoga-heart-health",
      category: "قلب و عروق"
    },
    {
      title: "تپش قلب (Palpitation): علل، تشخیص و درمان",
      description: "راهنمای جامع احساس تپش قلب، علل شایع و زمان مراجعه به پزشک",
      image: heartPalpitationsImage,
      link: "/articles/heart-palpitations",
      category: "قلب و عروق"
    }
  ];

  return (
    <>
      <SEOHead
        title="نقش ورزش در توانبخشی قلبی (Cardiac Rehabilitation) | نوید زندگی"
        description="راهنمای جامع توانبخشی قلبی: فواید ورزش برای بیماران قلبی، مراحل برنامه، انواع تمرینات هوازی و مقاومتی و تأثیرات بر بقاء و کیفیت زندگی"
        keywords="توانبخشی قلبی، ورزش قلبی، Cardiac Rehabilitation، تمرینات قلبی، نارسایی قلبی، سکته قلبی، آنژیوپلاستی، ورزش هوازی، HIIT"
        canonical="https://navidzendegi.com/articles/cardiac-rehab"
        ogImage={cardiacRehabImage}
        ogType="article"
        publishedTime="2024-12-02"
        modifiedTime="2024-12-02"
      />

      <ArticleSchema
        title="نقش ورزش در توانبخشی قلبی (Cardiac Rehabilitation): یک راهبرد درمانی مبتنی بر شواهد"
        description="راهنمای جامع توانبخشی قلبی: فواید ورزش برای بیماران قلبی، مراحل برنامه، انواع تمرینات هوازی و مقاومتی و تأثیرات بر بقاء و کیفیت زندگی"
        publishedTime="2024-12-02"
        modifiedTime="2024-12-02"
        image={cardiacRehabImage}
      />

      <ArticleLayout>
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <img
              src={cardiacRehabImage}
              alt="توانبخشی قلبی - ورزش درمانی تحت نظارت برای بیماران قلبی"
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />

            <h1 className="text-4xl font-bold text-foreground mb-6">
              نقش ورزش در توانبخشی قلبی (Cardiac Rehabilitation): یک راهبرد درمانی مبتنی بر شواهد
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              توانبخشی قلبی (Cardiac Rehabilitation یا CR) یک مداخله جامع و چندرشته‌ای است که برای بهبود نتایج و کیفیت زندگی بیماران مبتلا به بیماری‌های قلبی-عروقی (مانند سندرم حاد کرونری، نارسایی قلبی و پس از جراحی‌های عروق کرونر) طراحی شده است. تمرینات ورزشی ستون اصلی این برنامه‌ها محسوب می‌شوند و فراتر از بهبود آمادگی جسمانی، بر ابعاد فیزیولوژیک، روانی و اجتماعی سلامت قلب تأثیر می‌گذارند.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              فواید پروگنوستیک و فیزیولوژیک
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              مشارکت منظم در برنامه‌های CR مبتنی بر ورزش، با کاهش قابل توجه مرگ و میر قلبی-عروقی و عوارض بعدی همراه است.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۱. بقاء و پیشگیری از عود
            </h3>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>کاهش مرگ و میر:</strong> متاآنالیزها تأیید می‌کنند که CR مبتنی بر ورزش، میزان مرگ و میر قلبی-عروقی (Cardiovascular Mortality) را کاهش می‌دهد.</li>
              <li><strong>کاهش بستری:</strong> به طور قابل ملاحظه‌ای، خطر بستری مجدد در بیمارستان (به ویژه به دلیل نارسایی قلبی) و خطر عود انفارکتوس میوکارد (Myocardial Infarction) را کاهش می‌دهد.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۲. بهبود عملکرد قلبی-تنفسی
            </h3>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>افزایش VO₂ max:</strong> ورزش هوازی منظم به طور معناداری حداکثر اکسیژن مصرفی بدن (VO₂ max یا Peak Oxygen Consumption) را افزایش می‌دهد، که قوی‌ترین شاخص آمادگی قلبی-تنفسی و پیش‌بینی‌کننده بقاء در بیماران قلبی است.</li>
              <li><strong>بهبود پارامترهای همودینامیک:</strong> در بیماران مبتلا به نارسایی قلبی، ورزش می‌تواند برون‌ده قلبی را افزایش داده و عملکرد سیستولیک و دیاستولیک را بهبود بخشد.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              مکانیسم‌های عمل ورزش
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              تأثیرات درمانی ورزش تنها به قلب محدود نمی‌شود، بلکه شامل تغییرات مثبت در سطح سلولی و مولکولی است:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>اثر بر عروق:</strong> تمرینات ورزشی منجر به سازگاری سیستم قلبی-عروقی، بهبود عملکرد اندوتلیال و افزایش تولید نیتریک اکساید (NO) می‌شود، که به کاهش مقاومت عروقی محیطی و در نتیجه کاهش فشار خون کمک می‌کند.</li>
              <li><strong>کاهش التهاب و استرس اکسیداتیو:</strong> ورزش به تنظیم تعادل بیوشیمیایی، کاهش التهاب مزمن و مقابله با استرس اکسیداتیو کمک کرده و از پیشرفت آترواسکلروز جلوگیری می‌کند.</li>
              <li><strong>بهبود عوامل خطر:</strong> ورزش به طور مؤثری به مدیریت وزن، کاهش فشار خون، بهبود پروفایل لیپیدی و کنترل بهتر قند خون کمک می‌کند.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              اجزای برنامه ورزشی در مراحل مختلف
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              برنامه CR در فازهای مختلف، با نظارت دقیق آغاز می‌شود و شامل سه جزء اصلی است:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۱. فاز ۱: در بیمارستان (Inpatient)
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              این فاز بلافاصله پس از تثبیت وضعیت بیمار آغاز می‌شود و هدف اصلی آن پیشگیری از بی‌تحرکی طولانی‌مدت و آموزش اولیه است.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>نوع فعالیت:</strong> فعالیت‌های سبک مانند نشستن، غذا خوردن، راه رفتن کوتاه در اتاق یا راهرو.</li>
              <li><strong>شدت:</strong> بسیار کم، با ضربان قلب حداکثر ۱۲۰ تپش در دقیقه یا در مقیاس درجه‌بندی تلاش درک‌شده بورگ (RPE) کمتر از ۱۳.</li>
              <li><strong>تمرینات تنفسی:</strong> تنفس دیافراگمی، به‌ویژه برای بیماران پس از جراحی قلب، ضروری است.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۲. فاز ۲: پس از ترخیص (Outpatient)
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              یک برنامه ساختارمند و تحت نظارت که معمولاً ۱۲ هفته پس از ترخیص ادامه می‌یابد.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>تمرینات هوازی (Aerobic):</strong> شامل پیاده‌روی، دوچرخه‌سواری یا استفاده از دستگاه الیپتیکال. این تمرینات هسته اصلی برنامه هستند و عملکرد قلب را بهینه می‌کنند.</li>
              <li><strong>تمرینات مقاومتی (Resistance):</strong> استفاده از وزنه‌های آزاد یا باندهای مقاومتی برای افزایش قدرت عضلانی و بهبود متابولیسم.</li>
              <li><strong>تمرین تناوبی با شدت بالا (HIIT):</strong> در برخی پروتکل‌های نوین و برای بیماران منتخب، از HIIT (دوره‌های کوتاه فعالیت شدید به دنبال ریکاوری فعال) استفاده می‌شود که ممکن است تأثیرات فیزیولوژیکی قوی‌تری داشته باشد.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              اهمیت جنبه‌های روان‌اجتماعی و کیفیت زندگی
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              ورزش علاوه بر فواید جسمانی، یک درمان بسیار قوی برای بهبود سلامت روان است:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>کاهش استرس و اضطراب:</strong> CR به طور چشمگیری نشانه‌های افسردگی و اضطراب را که از عوامل خطر روان‌اجتماعی برای عود بیماری قلبی هستند، کاهش می‌دهد.</li>
              <li><strong>بهبود کیفیت زندگی:</strong> بهبود آمادگی جسمانی و مدیریت موفقیت‌آمیز بیماری، منجر به افزایش کیفیت زندگی مرتبط با سلامت (HRQoL) و احساس توانمندی و استقلال در بیمار می‌شود.</li>
            </ul>

            <div className="bg-amber-50 dark:bg-amber-950 border-r-4 border-amber-500 p-6 my-8 rounded">
              <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
                ⚠️ هشدار مهم
              </h3>
              <p className="text-amber-900 dark:text-amber-100 leading-relaxed">
                <strong>شروع هرگونه برنامه ورزشی برای بیماران قلبی باید حتماً تحت نظارت و تأیید پزشک متخصص قلب انجام شود.</strong> خودسرانه شروع کردن ورزش می‌تواند خطرناک باشد. همچنین، در صورت بروز علائمی مانند درد قفسه سینه، تنگی نفس شدید یا سرگیجه در حین ورزش، فوراً به پزشک مراجعه کنید.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              منابع (References)
            </h3>

            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground mb-8">
              <li>Exercise-Based Cardiac Rehabilitation: Analyzing Clinical Effectiveness. ResearchGate.</li>
              <li>Understanding the Role of Exercise in Cardiac Rehabilitation Programs. OMICS Online.</li>
              <li>What are the benefits and risks of exercise-based cardiac rehabilitation for heart failure? Cochrane Library.</li>
              <li>Physical activity and psychosocial function following cardiac rehabilitation: One-year follow-up of the ENHANCED study. NIH/PMC.</li>
              <li>The role of cardiac rehabilitation in improving cardiovascular outcomes. PMC/NIH.</li>
              <li>Exercise-based cardiac rehabilitation for coronary heart disease: a meta-analysis. PubMed.</li>
              <li>Impact of Cardiac Rehabilitation and Exercise Training on Psychological Risk Factors and Subsequent Prognosis in Patients With Cardiovascular Disease. ResearchGate.</li>
              <li>Exploring the Impact of Cardiac Rehabilitation Programs on Health-Related Quality of Life and Physiological Outcomes in Patients Post Coronary Artery Bypass Grafts: A Systematic Review. PubMed Central/NIH.</li>
            </ol>

            <div className="bg-primary/10 border-r-4 border-primary p-6 my-8 rounded">
              <h3 className="text-xl font-bold text-foreground mb-3">
                🏥 نیاز به مشاوره پزشکی دارید؟
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                برای مشاوره با متخصص قلب در منزل و دریافت برنامه ورزشی مناسب با وضعیت قلبی خود، با ما تماس بگیرید.
              </p>
              <a
                href="tel:09386117912"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس با متخصص قلب: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </div>
          </article>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />

          <PricingInfo />
        </div>
      </ArticleLayout>
    </>
  );
};

export default CardiacRehabPage;
