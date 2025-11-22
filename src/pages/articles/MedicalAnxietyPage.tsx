import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import LazyImage from "@/components/LazyImage";
import medicalAnxietyImage from "@/assets/medical-anxiety-article.jpg";
import diaphragmaticBreathingImage from "@/assets/diaphragmatic-breathing.jpg";
import depressionImage from "@/assets/depression-article.jpg";
import psychiatryImage from "@/assets/psychiatry-home-visit.jpg";
import onlineDoctorImage from "@/assets/home-medical-consultation.jpg";

const MedicalAnxietyPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "مدیریت اضطراب پزشکی", url: "/articles/medical-anxiety" }
  ];

  const faqs = [
    {
      question: "آیا اضطراب پزشکی یک اختلال روانی است؟",
      answer: "اضطراب پزشکی می‌تواند یک پاسخ طبیعی به موقعیت‌های استرس‌زا باشد، اما در برخی افراد به حد فوبیا یا اختلال اضطرابی می‌رسد که نیاز به مداخله تخصصی دارد. مشاوره با روانپزشک می‌تواند به تشخیص و درمان کمک کند."
    },
    {
      question: "آیا تنفس عمیق واقعاً می‌تواند اضطراب را کاهش دهد؟",
      answer: "بله، تنفس دیافراگمی به صورت علمی ثابت شده است که سیستم عصبی پاراسمپاتیک را فعال می‌کند و باعث کاهش ضربان قلب، فشار خون و احساس آرامش می‌شود."
    },
    {
      question: "چگونه به پزشک خود بگویم که اضطراب دارم؟",
      answer: "صادق باشید و به پزشک بگویید: 'من از مراجعات پزشکی اضطراب دارم و می‌خواهم بدانم چه کمکی می‌توانید به من بکنید.' اکثر پزشکان و دندانپزشکان با این موضوع آشنا هستند و می‌توانند تکنیک‌هایی را برای راحتی بیشتر شما اعمال کنند."
    },
    {
      question: "آیا می‌توانم از دارو برای کنترل اضطراب قبل از ویزیت استفاده کنم؟",
      answer: "استفاده از داروهای ضد اضطراب باید حتماً تحت نظر و تجویز روانپزشک باشد. خودسرانه مصرف دارو می‌تواند عوارض جانبی خطرناکی داشته باشد."
    }
  ];

  const relatedArticles = [
    {
      title: "افسردگی و ارتباط آن با بیماری‌های قلبی",
      description: "بررسی ارتباط میان افسردگی و بیماری‌های قلبی و نقش روان‌درمانی در بهبود سلامت قلب",
      link: "/articles/depression-heart-disease",
      image: depressionImage,
      category: "روانپزشکی"
    },
    {
      title: "ویزیت روانپزشک در منزل",
      description: "دریافت خدمات تخصصی روانپزشکی در منزل برای راحتی و حفظ حریم خصوصی بیماران",
      link: "/services/psychiatry",
      image: psychiatryImage,
      category: "خدمات"
    },
    {
      title: "ویزیت آنلاین پزشک",
      description: "مشاوره پزشکی آنلاین با متخصصان از راه دور برای دسترسی آسان‌تر به خدمات درمانی",
      link: "/services/online-doctor",
      image: onlineDoctorImage,
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="مدیریت اضطراب پزشکی (Medical Anxiety): حفظ خونسردی در مطب پزشک و دندانپزشکی | نوید زندگی"
        description="روش‌های علمی مدیریت اضطراب و ترس از مراجعه به پزشک و دندانپزشک: تکنیک‌های تنفس دیافراگمی، حواس‌پرتی، ارتباط مؤثر با تیم درمانی و چگونگی دریافت کمک تخصصی از روانپزشک."
        keywords="اضطراب پزشکی، ترس از دندانپزشک، White Coat Syndrome، تنفس دیافراگمی، مدیریت اضطراب، ویزیت روانپزشک، فوبیای درمانی، روان‌درمانی، تکنیک‌های آرامش"
        canonical="https://navidzendegi.com/articles/medical-anxiety"
        ogType="article"
        publishedTime="2025-01-15"
        modifiedTime="2025-01-15"
      />

      <ArticleSchema
        title="مدیریت اضطراب پزشکی (Medical Anxiety): حفظ خونسردی در مطب پزشک و دندانپزشکی"
        description="روش‌های علمی مدیریت اضطراب و ترس از مراجعه به پزشک و دندانپزشک"
        publishedTime="2025-01-15"
        modifiedTime="2025-01-15"
        image={medicalAnxietyImage}
      />

      <main className="py-12 px-4 max-w-4xl mx-auto">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <LazyImage
            src={medicalAnxietyImage}
            alt="بیمار آرام در حال مشاوره پزشکی"
            className="w-full h-auto rounded-lg mb-8"
            width={1920}
            height={1080}
          />

          <h1 className="text-4xl font-bold text-foreground mb-6">
            مدیریت اضطراب پزشکی (Medical Anxiety): حفظ خونسردی در مطب پزشک و دندانپزشکی
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            تجربه اضطراب یا ترس شدید در مواجهه با مداخلات پزشکی یا دندانپزشکی، که گاهی به آن سفیدپوشی (White Coat Syndrome) یا فوبیای درمانی گفته می‌شود، بسیار شایع است. این اضطراب نه تنها می‌تواند تجربه بیمار را ناخوشایند کند، بلکه ممکن است در فرآیند تشخیص (مانند بالا رفتن کاذب فشار خون) و تصمیم‌گیری‌های درمانی اختلال ایجاد کند [1]. حفظ خونسردی، با استفاده از تکنیک‌های علمی و ارتباط مؤثر با کادر درمانی، کاملاً امکان‌پذیر است.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            گام‌های پیشگیرانه برای کاهش اضطراب پیش از مراجعه
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            مدیریت اضطراب از خانه و پیش از ورود به مطب شروع می‌شود:
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            برنامه‌ریزی و آمادگی:
          </h3>

          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>
              <strong>سؤالات خود را بنویسید:</strong> یک لیست از تمام سؤالات، نگرانی‌ها و تاریخچه دارویی خود را از قبل آماده کنید. این کار حس کنترل را افزایش می‌دهد و تضمین می‌کند که نکته‌ای فراموش نشود.
            </li>
            <li>
              <strong>اطلاع‌رسانی به کلینیک:</strong> هنگام رزرو نوبت، اضطراب خود را با مسئول پذیرش یا پرستار در میان بگذارید تا بتوانند زمان بیشتری را برای شما در نظر بگیرند یا محیط آرام‌تری فراهم کنند.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            زمان‌بندی مناسب:
          </h3>

          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>
              از گرفتن نوبت‌های عجولانه خودداری کنید. عجله کردن خود یک عامل اضطراب‌زا است. سعی کنید در روزی که برنامه شما فشرده نیست، مراجعه کنید.
            </li>
            <li>
              اگر می‌توانید، یک همراه حمایتی (دوست یا اعضای خانواده) را با خود به همراه ببرید تا در اتاق انتظار یا حین صحبت با پزشک کنار شما باشد.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            تکنیک‌های حفظ خونسردی حین درمان
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            هنگامی که روی صندلی دندانپزشکی یا در اتاق معاینه نشسته‌اید، می‌توانید از تکنیک‌های زیر برای آرام‌سازی سیستم عصبی خود استفاده کنید:
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            تنفس دیافراگمی (Diaphragmatic Breathing):
          </h3>

          <LazyImage
            src={diaphragmaticBreathingImage}
            alt="تنفس قفسه سینه در مقابل تنفس دیافراگمی"
            className="w-full h-auto rounded-lg my-8"
            width={1920}
            height={1080}
          />

          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>
              این تکنیک یکی از قوی‌ترین روش‌ها برای فعال‌سازی <strong>سیستم عصبی پاراسمپاتیک</strong> (مسئول آرامش) است.
            </li>
            <li>
              نفس عمیق از طریق بینی بگیرید، طوری که شکم شما بالا بیاید.
            </li>
            <li>
              نفس را چند ثانیه نگه دارید و سپس به آرامی و با تمرکز از دهان خارج کنید. این کار را در طول فرآیند درمانی تکرار کنید.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            تکنیک حواس‌پرتی (Distraction):
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4">
            تمرکز ذهن بر چیز دیگری به جای حس‌های ناخوشایند:
          </p>

          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>گوش دادن به موسیقی یا پادکست آرام‌بخش از طریق هدفون.</li>
            <li>تمرکز بر یک شیء (مانند یک پوستر یا ساعت) در اتاق و توصیف جزئیات آن در ذهن.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            روش زمین‌سازی (Grounding Technique):
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            تمرکز بر حس‌های فیزیکی خنثی (مثلاً لمس صندلی زیر دست، یا حس سردی ابزار دندانپزشکی در دهان) به جای تمرکز بر درد مورد انتظار.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            ارتباط مؤثر با پزشک یا دندانپزشک
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            ارتباط صریح با تیم درمانی، اضطراب را به شدت کاهش می‌دهد:
          </p>

          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>
              <strong>درخواست توقف (Stop Signal):</strong> حتماً با پزشک خود یک علامت (مثلاً بالا بردن دست) را به عنوان سیگنال توقف فوری در هنگام احساس درد یا وحشت تعیین کنید.
            </li>
            <li>
              <strong>درخواست توضیح:</strong> از پزشک خود بخواهید تا قبل از انجام هر مرحله، آن را به زبان ساده و قابل درک برای شما توضیح دهد تا احساس کنترل بیشتری داشته باشید.
            </li>
            <li>
              <strong>شفاف‌سازی نگرانی‌ها:</strong> اگر نگرانی خاصی دارید (مثلاً ترس از سوزن)، آن را با پزشک در میان بگذارید. در صورت امکان، می‌توان از تکنیک‌هایی مانند بی‌حسی موضعی قبل از تزریق استفاده کرد.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            مدیریت اضطراب پزشکی مزمن با ویزیت آنلاین روانپزشک
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            اگر اضطراب پزشکی شما به حدی شدید است که مانع از دریافت مراقبت‌های حیاتی می‌شود، ممکن است نیاز به مداخله تخصصی باشد:
          </p>

          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>
              <strong>مشاوره و روان‌درمانی:</strong> <a href="/services/psychiatry" className="text-primary hover:underline">ویزیت آنلاین روانپزشک</a> یا روان‌شناس می‌تواند به شما در یادگیری تکنیک‌های تخصصی مانند درمان شناختی-رفتاری (CBT) کمک کند تا الگوهای فکری منجر به اضطراب را تغییر دهید.
            </li>
            <li>
              <strong>دارو درمانی:</strong> در موارد بسیار شدید فوبیا، روانپزشک ممکن است داروهای ضد اضطراب کوتاه‌اثر را برای مصرف تنها پیش از ویزیت‌های پزشکی تجویز کند تا اضطراب به سطح قابل کنترلی برسد.
            </li>
          </ul>

          <div className="bg-primary/10 border-r-4 border-primary p-6 rounded-lg my-8">
            <p className="text-foreground font-semibold mb-2">
              ⚠️ هشدار مهم:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              هرگز خودسرانه از داروهای ضد اضطراب استفاده نکنید. مصرف این داروها باید تحت نظر روانپزشک متخصص باشد و عدم رعایت دوز صحیح می‌تواند عوارض جانبی خطرناکی داشته باشد.
            </p>
          </div>

          <section className="bg-gradient-to-l from-primary/5 to-primary/10 rounded-xl p-8 my-12 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              اجازه ندهید اضطراب، سلامت شما را به خطر بیندازد
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              برای یادگیری تکنیک‌های مدیریت اضطراب مزمن و مشاوره تخصصی، <a href="/services/psychiatry" className="text-primary font-semibold hover:underline">ویزیت آنلاین روانپزشک</a> خود را از طریق نوید زندگی رزرو کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:09386117912"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <span>تماس فوری: 09386117912</span>
              </a>
              <a
                href="/services/online-doctor"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                رزرو ویزیت آنلاین
              </a>
            </div>
          </section>

          <h3 className="text-2xl font-semibold text-foreground mt-12 mb-4">
            منابع (References)
          </h3>

          <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-2 mb-8">
            <li>
              Yüksel, M., et al. (2019). The relationship between dental anxiety, fear of pain, and self-esteem in patients referred for dental treatment. Clinical and Experimental Dental Research, 5(2), 177-183.
            </li>
            <li>
              Kabat-Zinn, J. (1990). Full catastrophe living: Using the wisdom of your body and mind to face stress, pain, and illness. Delta. (Source for Mindfulness and Breathing).
            </li>
            <li>
              Taylor, S., & Cox, B. J. (2009). An experimental analysis of the effects of distraction on fear, pain, and coping with medical procedures. Journal of Anxiety Disorders, 23(1), 1-8.
            </li>
          </ol>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default MedicalAnxietyPage;
