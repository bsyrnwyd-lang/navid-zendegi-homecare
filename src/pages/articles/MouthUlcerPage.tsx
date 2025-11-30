import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import mouthUlcerImage from "@/assets/mouth-ulcer-article.jpg";
import medicalConsultationImage from "@/assets/medical-consultation-article.jpg";
import generalDoctorImage from "@/assets/general-doctor-home-clean.jpg";
import internalMedicineImage from "@/assets/internal-medicine.jpg";

const MouthUlcerPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "آفت دهانی", url: "/articles/mouth-ulcer" }
  ];

  const faqItems = [
    {
      question: "آفت دهانی چقدر طول می‌کشد تا بهبود یابد؟",
      answer: "آفت مینور (شایع‌ترین نوع) معمولاً ظرف ۷ تا ۱۴ روز بدون اسکار بهبود می‌یابد. آفت ماژور که بزرگ‌تر و عمیق‌تر است، ممکن است ۲ تا ۶ هفته طول بکشد و اغلب اسکار به جای می‌گذارد. آفت هرپتی‌فرم که شامل زخم‌های متعدد کوچک است، در ۷ تا ۱۰ روز بهبود می‌یابد."
    },
    {
      question: "آفت دهانی مسری است؟",
      answer: "خیر، آفت دهانی (Recurrent Aphthous Stomatitis) هیچ‌گونه ماهیت مسری ندارد و از طریق تماس، بوسیدن یا استفاده مشترک از ظروف منتقل نمی‌شود. این ضایعات ناشی از یک اختلال موضعی ایمنی هستند و با تبخال (هرپس) که مسری است، متفاوت است."
    },
    {
      question: "چه عواملی می‌توانند باعث ایجاد آفت دهانی شوند؟",
      answer: "عوامل متعددی می‌توانند آفت را تحریک کنند: کمبود آهن، ویتامین B12، روی و فولات، ضربه موضعی به دهان (گاز گرفتن، مسواک زدن شدید)، استرس روانی، حساسیت به برخی غذاها (شکلات، قهوه، غذاهای اسیدی)، استعداد ژنتیکی، و برخی بیماری‌های سیستمیک مانند بیماری بهجت یا کرون."
    },
    {
      question: "چه زمانی باید برای آفت دهانی به پزشک مراجعه کرد؟",
      answer: "اگر زخم دهانی پس از سه هفته بهبود نیافت، زخم‌ها بسیار بزرگ یا دردناک هستند، همراه با تب، ضایعات پوستی یا مشکلات گوارشی باشند، یا به طور مکرر عود کنند، باید فوراً به پزشک یا دندانپزشک مراجعه کنید. این علائم می‌توانند نشانه بیماری‌های جدی‌تری مانند بیماری بهجت، بیماری کرون یا بدخیمی‌های دهانی باشند."
    },
    {
      question: "برای جلوگیری از آفت دهانی چه کارهایی می‌توان انجام داد؟",
      answer: "برای پیشگیری از آفت: از غذاهای تند، نمکی، اسیدی و سخت اجتناب کنید، از مسواک نرم استفاده کنید، از خمیردندان‌های حاوی سدیم لوریل سولفات (SLS) دوری کنید، استرس را مدیریت کنید، و در صورت وجود کمبودهای تغذیه‌ای، از مکمل‌های ویتامین B12، آهن یا فولات استفاده کنید."
    },
    {
      question: "آیا می‌توان آفت دهانی را به طور کامل درمان کرد؟",
      answer: "متأسفانه در حال حاضر هیچ درمان قطعی برای ریشه‌کنی آفت دهانی وجود ندارد زیرا علت دقیق آن هنوز به طور کامل شناخته نشده است. اما درمان‌های موجود می‌توانند به کاهش درد، افزایش سرعت بهبود و پیشگیری از عود کمک کنند. برای مشاوره تخصصی و <a href='/services/general-doctor' class='text-primary hover:underline'>ویزیت پزشک عمومی در منزل</a> می‌توانید با نوید زندگی تماس بگیرید."
    }
  ];

  const relatedArticles = [
    {
      title: "مشاوره پزشکی تخصصی: چه زمانی نیاز به ویزیت متخصص داریم؟",
      description: "راهنمای کامل برای تشخیص نیاز به مشاوره پزشکی، تفاوت پزشک عمومی و متخصص، و زمان مناسب مراجعه",
      image: medicalConsultationImage,
      link: "/articles/medical-consultation",
      category: "سلامت عمومی"
    },
    {
      title: "ویزیت پزشک عمومی در منزل",
      description: "خدمات ویزیت پزشک عمومی در منزل برای بیماران، سالمندان و افرادی که امکان مراجعه به مطب ندارند",
      image: generalDoctorImage,
      link: "/services/general-doctor",
      category: "خدمات پزشکی"
    },
    {
      title: "ویزیت متخصص داخلی در منزل",
      description: "خدمات ویزیت فوق‌تخصص داخلی در منزل برای تشخیص و درمان بیماری‌های عفونی، گوارشی و سیستمیک",
      image: internalMedicineImage,
      link: "/services/internal-medicine",
      category: "خدمات پزشکی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آفت دهانی (RAS): علل، انواع و درمان بر اساس منابع دانشگاهی | نوید زندگی"
        description="راهنمای جامع آفت دهانی عودکننده (Recurrent Aphthous Stomatitis): طبقه‌بندی انواع آفت (مینور، ماژور، هرپتی‌فرم)، علل ایجاد، کمبودهای تغذیه‌ای، درمان موضعی و سیستمیک"
        keywords="آفت دهانی، RAS، آفت مینور، آفت ماژور، زخم دهان، Canker Sore، کمبود ویتامین B12، کمبود آهن، درمان آفت، ویزیت پزشک عمومی"
        canonical="https://navidzendegi.com/articles/mouth-ulcer"
        ogImage={mouthUlcerImage}
        ogType="article"
        author="نوید زندگی"
        publishedTime="2024-02-21"
        modifiedTime="2024-02-21"
      />
      
      <ArticleSchema
        title="آفت دهانی (RAS): علل، انواع و درمان بر اساس منابع دانشگاهی"
        description="راهنمای جامع آفت دهانی عودکننده با تمرکز بر علل، طبقه‌بندی و درمان"
        publishedTime="2024-02-21"
        modifiedTime="2024-02-21"
        image={mouthUlcerImage}
      />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              🦠 آفت دهانی (Recurrent Aphthous Stomatitis - RAS): علل، انواع و مدیریت بر اساس منابع دانشگاهی
            </h1>

            <div className="my-8">
              <img 
                src={mouthUlcerImage} 
                alt="آفت دهانی - زخم دهان" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <p className="lead text-xl text-muted-foreground mb-8">
              <strong>آفت دهانی عودکننده</strong> که در زبان انگلیسی با عنوان «Recurrent Aphthous Stomatitis» یا به طور رایج «Canker Sore» شناخته می‌شود، یکی از شایع‌ترین ضایعات مخاط دهان است که حدود ۲۰ درصد از جمعیت عمومی را درگیر می‌کند. این زخم‌ها ماهیت <strong>غیرمسری</strong> دارند و با وجود خوش‌خیم بودن، می‌توانند به شدت کیفیت زندگی فرد را تحت تأثیر قرار دهند.
            </p>

            <p>
              طبق بررسی‌های علمی، اگرچه مکانیسم پاتوژنز (سیر بیماری‌زایی) آفت تا حدودی شناخته شده است (واکنش ایمونولوژیک با واسطه سلول T)، <strong>علت دقیق و نهایی</strong> RAS هنوز نامشخص است و ماهیتی چندعاملی دارد.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
              طبقه‌بندی بالینی آفت دهانی
            </h2>

            <p>
              آفت‌های دهانی عودکننده به سه نوع اصلی طبقه‌بندی می‌شوند:
            </p>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4">۱. آفت مینور (Minor RAS)</h3>
              <ul className="space-y-2">
                <li><strong>شیوع:</strong> شایع‌ترین نوع (۸۰٪ موارد)</li>
                <li><strong>ویژگی‌های ظاهری:</strong> کوچک (۳ تا ۱۰ میلی‌متر)، گرد یا بیضی، با حاشیه قرمز رنگ و مرکز زرد/خاکستری</li>
                <li><strong>محل شایع:</strong> مخاط غیرکراتینیزه (داخل لب، گونه، زیر زبان)</li>
                <li><strong>زمان بهبودی:</strong> ۷ تا ۱۴ روز، بدون اسکار</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4">۲. آفت ماژور (Major RAS)</h3>
              <ul className="space-y-2">
                <li><strong>شیوع:</strong> کمتر شایع (۱۰٪ موارد)</li>
                <li><strong>ویژگی‌های ظاهری:</strong> بزرگ‌تر (بیش از ۱۰ میلی‌متر، تا ۳ سانتی‌متر)، عمیق‌تر و شدیداً دردناک</li>
                <li><strong>محل شایع:</strong> لب‌ها، کام نرم، حلق</li>
                <li><strong>زمان بهبودی:</strong> ۲ تا ۶ هفته، اغلب با به جای ماندن اسکار</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4">۳. آفت هرپتی‌فرم (Herpetiform Ulcers)</h3>
              <ul className="space-y-2">
                <li><strong>شیوع:</strong> نادر</li>
                <li><strong>ویژگی‌های ظاهری:</strong> زخم‌های متعدد (۱۰ تا ۱۰۰ عدد) بسیار کوچک (۱ تا ۳ میلی‌متر)، که ممکن است به هم بپیوندند</li>
                <li><strong>محل شایع:</strong> مخاط غیرکراتینیزه</li>
                <li><strong>زمان بهبودی:</strong> ۷ تا ۱۰ روز، بدون اسکار</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
              علل و عوامل زمینه‌ساز (Etiology and Predisposing Factors)
            </h2>

            <p>
              اگرچه آفت یک بیماری <strong>خودایمنی</strong> نیست، اما اعتقاد بر این است که یک اختلال موضعی ایمنی است که توسط عوامل متعددی آغاز می‌شود. مهم‌ترین عوامل محرک عبارتند از:
            </p>

            <ul>
              <li>
                <strong>نقایص هماتولوژیک/تغذیه:</strong> کمبود آهن، روی (Zinc)، ویتامین B12، و فولات (اسید فولیک) به عنوان عوامل اصلی علت‌زا در مطالعات متاآنالیز مرتبط شناخته شده‌اند.
              </li>
              <li>
                <strong>ضربه موضعی (Local Trauma):</strong> آسیب‌های جزئی به دهان، مانند گاز گرفتن تصادفی گونه، مسواک زدن بیش از حد، یا لبه تیز دندان‌ها یا پروتز، می‌توانند باعث شروع آفت شوند.
              </li>
              <li>
                <strong>استرس و عوامل روانشناختی:</strong> استرس، به خصوص در نوجوانان و جوانان، با تشدید اثرات ایمنی و افزایش تعداد لکوسیت‌ها در محل التهاب، یک عامل محرک قوی در نظر گرفته می‌شود.
              </li>
              <li>
                <strong>حساسیت غذایی:</strong> حساسیت به برخی غذاها، از جمله شکلات، قهوه، تخم‌مرغ، توت‌فرنگی، پنیر، مغزها و غذاهای اسیدی یا تند.
              </li>
              <li>
                <strong>عوامل ژنتیکی:</strong> سابقه خانوادگی در ۴۰ درصد بیماران مبتلا به RAS مشاهده می‌شود که نشان‌دهنده استعداد ژنتیکی قوی است.
              </li>
              <li>
                <strong>شرایط سیستمیک:</strong> زخم‌های دهانی مکرر ممکن است نشانه‌ای از بیماری‌های زمینه‌ای جدی‌تر باشند، از جمله <strong>بیماری بهجت</strong> (Behçet's disease)، <strong>بیماری کرون</strong> (Crohn's disease)، کولیت اولسراتیو، یا نقص ایمنی (HIV). برای بررسی دقیق‌تر، <a href="/services/internal-medicine" className="text-primary hover:underline">ویزیت متخصص داخلی در منزل</a> توصیه می‌شود.
              </li>
              <li>
                <strong>ترک سیگار:</strong> قطع مصرف دخانیات می‌تواند در برخی افراد منجر به عود آفت شود.
              </li>
              <li>
                <strong>عامل میکروبی:</strong> شواهدی مبنی بر ارتباط آفت‌های عودکننده با باکتری <strong>هلیکوباکتر پیلوری</strong> (Helicobacter pylori) وجود دارد.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
              مدیریت و درمان (Management and Treatment)
            </h2>

            <p>
              از آنجایی که علت دقیقی برای آفت مشخص نشده است، در حال حاضر هیچ درمان قطعی برای ریشه‌کنی آن وجود ندارد. مدیریت درمان بر <strong>کاهش درد</strong>، <strong>افزایش سرعت بهبود</strong> و <strong>پیشگیری از عود</strong> متمرکز است.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
              ۱. درمان موضعی (First-line)
            </h3>

            <ul>
              <li>
                <strong>ضدعفونی‌کننده‌ها:</strong> دهان‌شویه‌های آنتی‌بیوتیکی مانند <strong>کلرهگزیدین گلوکونات</strong> برای کاهش عفونت ثانویه و کوتاه کردن مدت زخم‌ها استفاده می‌شوند.
              </li>
              <li>
                <strong>کورتیکواستروئیدهای موضعی:</strong> ژل‌ها یا خمیرهای حاوی کورتیکواستروئید (مانند تریامسینولون یا فلوئوسینونید) به عنوان ضدالتهاب برای کاهش درد و التهاب توصیه می‌شوند.
              </li>
              <li>
                <strong>عوامل محافظ:</strong> استفاده از ژل‌ها یا پمادهایی که یک سد محافظ روی زخم ایجاد می‌کنند و آن را در برابر تحریک مکانیکی محافظت می‌کنند.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
              ۲. درمان سیستمیک
            </h3>

            <p>
              در موارد شدید آفت ماژور یا عود بسیار مکرر که کیفیت زندگی بیمار را مختل می‌کند، درمان‌های سیستمیک (خوراکی) مانند کورتیکواستروئیدهای خوراکی یا داروهای سرکوب‌کننده سیستم ایمنی تجویز می‌شود.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
              ۳. اقدامات پیشگیری و حمایتی
            </h3>

            <ul>
              <li>
                <strong>رژیم غذایی:</strong> اجتناب از غذاهایی که باعث تحریک دهان می‌شوند (مانند غذاهای تند، نمکی، اسیدی یا سخت).
              </li>
              <li>
                <strong>بهداشت دهان:</strong> استفاده از مسواک نرم و اجتناب از خمیردندان‌ها و دهان‌شویه‌های حاوی <strong>سدیم لوریل سولفات</strong> (SLS) که ممکن است تحریک‌کننده باشند.
              </li>
              <li>
                <strong>مدیریت استرس:</strong> استفاده از تکنیک‌های کاهش استرس و مشاوره در صورت لزوم.
              </li>
              <li>
                <strong>مکمل‌های غذایی:</strong> تجویز مکمل‌های <strong>ویتامین B12، آهن یا فولات</strong> در صورت وجود کمبودهای تغذیه‌ای.
              </li>
            </ul>

            <div className="bg-primary/5 border-r-4 border-primary p-6 my-8 rounded">
              <p className="text-lg font-semibold mb-2">
                ⚠️ هشدار: عدم خودسرانه مصرف دارو
              </p>
              <p className="text-muted-foreground">
                هیچ‌گاه بدون مشورت با پزشک یا دندانپزشک، خودسرانه از داروهای موضعی یا سیستمیک برای درمان آفت استفاده نکنید. مصرف نادرست کورتیکواستروئیدها و سایر داروها می‌تواند عوارض جانبی جدی داشته باشد. برای <a href="/services/general-doctor" className="text-primary hover:underline font-semibold">ویزیت پزشک عمومی در منزل</a> با نوید زندگی تماس بگیرید.
              </p>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded">
              <p className="text-lg font-semibold mb-2">
                🔴 چه زمانی باید به پزشک مراجعه کرد؟
              </p>
              <p className="text-muted-foreground">
                در صورتی که زخم دهانی پس از <strong>سه هفته</strong> بهبود نیابد، یا اگر زخم‌ها همراه با علائم سیستمیک (مانند تب، ضایعات پوستی یا مشکلات گوارشی) باشند، ارجاع فوری به پزشک یا دندانپزشک برای رد احتمال بیماری‌های جدی (مانند بیماری بهجت، بیماری کرون یا بدخیمی‌های دهانی) ضروری است.
              </p>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg my-10 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                مشاوره تخصصی برای آفت دهانی مزمن
              </h3>
              <p className="text-lg mb-6">
                برای <strong>ویزیت پزشک عمومی یا متخصص داخلی در منزل</strong> جهت ارزیابی علل زمینه‌ای آفت دهانی مکرر، بررسی کمبودهای تغذیه‌ای و تجویز درمان مناسب، با نوید زندگی تماس بگیرید.
              </p>
              <a
                href="tel:09386117912"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                تماس: 09386117912
              </a>
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-4 text-foreground">
              منابع (References)
            </h3>

            <ol className="text-sm text-muted-foreground space-y-2">
              <li>
                <strong>Recurrent Aphthous Stomatitis: Current Concepts in Diagnosis and Management.</strong> <em>ResearchGate/Academic Review.</em>
              </li>
              <li>
                <strong>Guideline for the Diagnosis and Treatment of Recurrent Aphthous Stomatitis for Dental Practitioners.</strong> <em>PubMed Central/NIH (National Institutes of Health).</em>
              </li>
              <li>
                <strong>Canker sore - Symptoms and causes.</strong> <em>Mayo Clinic (Academic Medical Center).</em>
              </li>
              <li>
                <strong>Recurrent aphthous stomatitis (RAS): guideline for differential diagnosis and management.</strong> <em>European Journal of Paediatric Dentistry.</em>
              </li>
              <li>
                <strong>Etiology and Treatment of Recurrent Oral Aphthous Stomatitis; An Umbrella Review.</strong> <em>ResearchGate/Academic Review.</em>
              </li>
              <li>
                <strong>Recurrent aphthous stomatitis: etiology, diagnosis, and treatment.</strong> <em>PubMed/Harvard School of Dental Medicine.</em>
              </li>
              <li>
                <strong>Treatments for Recurrent Aphthous Stomatitis: A Literature Review.</strong> <em>MDPI/Academic Journal.</em>
              </li>
              <li>
                <strong>Recurrent Aphthous Stomatitis - StatPearls - NCBI Bookshelf.</strong> <em>NIH (National Institutes of Health) Academic Source.</em>
              </li>
            </ol>
          </article>

          <div className="mt-12">
            <FAQSection faqs={faqItems} />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          <div className="mt-12">
            <PricingInfo />
          </div>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default MouthUlcerPage;
