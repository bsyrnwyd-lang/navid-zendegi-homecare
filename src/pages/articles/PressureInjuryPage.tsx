import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import pressureInjuryImage from "@/assets/pressure-injury-care.jpg";
import nursingCareImage from "@/assets/nursing-home-care.jpg";
import elderlyCareImage from "@/assets/elderly-care-home.jpg";
import medicalEquipmentImage from "@/assets/medical-equipment-rental.jpg";

const PressureInjuryPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "زخم بستر", url: "/articles/pressure-injury" }
  ];

  const faqItems = [
    {
      question: "زخم بستر چگونه ایجاد می‌شود؟",
      answer: "زخم بستر یا آسیب فشاری زمانی ایجاد می‌شود که فشار مداوم خارجی بر پوست و بافت‌های زیرین (بیش از 32 میلی‌متر جیوه) جریان خون را مختل کند. این فشار پایدار منجر به ایسکمی (کاهش جریان خون) و در نهایت نکروز بافت (مرگ سلولی) می‌شود. این آسیب می‌تواند حتی در مدت کمتر از دو ساعت در بیماران بی‌حرکت رخ دهد."
    },
    {
      question: "زخم بستر در چه نقاطی از بدن شایع‌تر است؟",
      answer: "زخم بستر معمولاً در نواحی استخوانی برجسته ایجاد می‌شود که فشار بیشتری به آن‌ها وارد می‌شود: ساکروم (پایین کمر)، پاشنه پا، مچ پا، لگن، آرنج، کتف، و پشت سر. همچنین می‌تواند زیر تجهیزات پزشکی مانند لوله‌ها، ماسک اکسیژن یا گچ ایجاد شود."
    },
    {
      question: "چگونه می‌توان از ایجاد زخم بستر پیشگیری کرد؟",
      answer: "پیشگیری از زخم بستر شامل چهار اقدام اصلی است: (1) تغییر وضعیت منظم بیمار هر 2 ساعت در بستر و هر 1 ساعت در صندلی، (2) استفاده از تشک‌های پیشرفته با فشار متناوب و پدهای ژل/فوم، (3) تمیز و خشک نگه داشتن پوست و بازرسی روزانه، (4) تأمین تغذیه مناسب با کالری و پروتئین کافی برای سلامت پوست."
    },
    {
      question: "زخم بستر چند مرحله دارد و چگونه تشخیص داده می‌شود؟",
      answer: "طبقه‌بندی آسیب فشاری بر اساس سیستم چهار مرحله‌ای است: مرحله 1 (قرمزی غیرقابل سفید شدن پوست سالم)، مرحله 2 (آسیب سطحی پوست شبیه تاول)، مرحله 3 (از دست رفتن کامل پوست و آسیب به بافت زیرجلدی)، و مرحله 4 (آسیب عمیق با قرار گرفتن استخوان، تاندون یا ماهیچه در معرض دید). تشخیص و ارزیابی باید توسط تیم مراقبت تخصصی انجام شود."
    },
    {
      question: "چه کسانی در معرض خطر بیشتری برای زخم بستر هستند؟",
      answer: "افراد در معرض خطر شامل: بیماران بی‌حرکت یا فلج، افراد مسن، بیماران بستری در بخش مراقبت‌های ویژه، افراد با سوءتغذیه یا سطوح پایین آلبومین، بیماران دیابتی یا دارای بیماری‌های عروق محیطی، افراد با بی‌اختیاری ادرار یا مدفوع، و بیماران تحت تهویه مکانیکی یا سدیشن مداوم."
    },
    {
      question: "درمان زخم بستر چگونه است؟",
      answer: "درمان زخم بستر چند رشته‌ای است و شامل: (1) حذف کامل فشار از ناحیه آسیب‌دیده، (2) استفاده از پانسمان‌های تخصصی بر اساس میزان ترشحات زخم، (3) کنترل عفونت و دبریدمان (حذف بافت مرده)، (4) بهینه‌سازی تغذیه و تأمین پروتئین کافی، (5) در مراحل پیشرفته، مداخلات جراحی برای ترمیم نقص بافتی. برای <a href='/services/nursing' class='text-primary hover:underline'>پانسمان تخصصی زخم بستر در منزل</a> با نوید زندگی تماس بگیرید."
    }
  ];

  const relatedArticles = [
    {
      title: "خدمات پرستاری در منزل: مراقبت تخصصی برای بیماران و سالمندان",
      description: "راهنمای کامل خدمات پرستاری در منزل شامل تزریقات، سرم‌تراپی، پانسمان و مراقبت از بیماران بستری",
      image: nursingCareImage,
      link: "/services/nursing",
      category: "خدمات"
    },
    {
      title: "راهنمای جامع مراقبت از سالمندان در منزل: تغذیه، دارو و پیشگیری از زخم بستر",
      description: "نکات کلیدی برای مراقبت از سالمندان در خانه، از تغذیه مناسب تا پیشگیری از عوارض بستری",
      image: elderlyCareImage,
      link: "/articles/elderly-care-guide",
      category: "سلامت عمومی"
    },
    {
      title: "اجاره تجهیزات پزشکی در منزل: تشک ضد زخم بستر، ویلچر و سایر ملزومات",
      description: "راهنمای کامل اجاره تجهیزات پزشکی در منزل برای مراقبت بهتر از بیماران و سالمندان",
      image: medicalEquipmentImage,
      link: "/services/medical-equipment-rental",
      category: "خدمات"
    }
  ];

  return (
    <>
      <SEOHead
        title="زخم بستر (آسیب فشاری): علل، مراحل و درمان تخصصی | راهنمای کامل پیشگیری"
        description="راهنمای جامع زخم بستر (Pressure Injury): علل ایجاد، عوامل خطر، طبقه‌بندی چهار مرحله‌ای، روش‌های پیشگیری و درمان تخصصی. مراقبت حرفه‌ای از زخم بستر در منزل با نوید زندگی"
        keywords="زخم بستر، آسیب فشاری، pressure injury، پانسمان زخم بستر، پیشگیری از زخم بستر، درمان زخم بستر، تشک ضد زخم بستر، مراقبت از سالمندان، پرستاری در منزل"
        canonical="https://navidzendegi.ir/articles/pressure-injury"
        ogImage={pressureInjuryImage}
      />

      <ArticleSchema
        title="زخم بستر (آسیب فشاری): علل، مراحل و درمان تخصصی"
        description="راهنمای علمی و کاربردی زخم بستر با تمرکز بر پیشگیری، تشخیص زودهنگام و مدیریت حرفه‌ای"
        publishedTime="2024-12-01"
        modifiedTime="2024-12-01"
        image={pressureInjuryImage}
      />

      <ArticleLayout>
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <img
            src={pressureInjuryImage}
            alt="مراقبت تخصصی از زخم بستر در منزل"
            className="w-full rounded-lg mb-8"
            loading="eager"
          />

          <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            🛏️ آسیب‌های فشاری (Pressure Injuries): زخم بستر - اتیولوژی، طبقه‌بندی و مدیریت
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            <strong>زخم بستر</strong> که در ادبیات تخصصی با نام <strong>آسیب فشاری</strong> (Pressure Injury یا PI) یا <strong>اولسر دکوبیتوس</strong> (Decubitus Ulcer) شناخته می‌شود، یک ضایعه موضعی به پوست و/یا بافت‌های زیرین است که معمولاً در نواحی استخوانی برجسته یا زیر تجهیزات پزشکی (مانند لوله‌ها یا گچ) ایجاد می‌شود. این وضعیت یکی از شایع‌ترین و پرهزینه‌ترین عوارض بستری در بخش‌های مراقبت‌های ویژه و مراکز نگهداری طولانی‌مدت است.
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-r-4 border-amber-500 p-6 rounded-lg my-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-2">هشدار پزشکی مهم</h3>
                <p className="text-amber-900 dark:text-amber-200 leading-relaxed">
                  زخم بستر یک وضعیت جدی پزشکی است که نیاز به مدیریت تخصصی دارد. عدم درمان صحیح می‌تواند منجر به عفونت‌های شدید، سپسیس و حتی مرگ شود. <strong className="font-bold">هرگز خودسرانه اقدام به درمان زخم بستر نکنید</strong> و حتماً برای ارزیابی و درمان تخصصی با تیم پزشکی مشورت کنید.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">مکانیسم ایجاد (Etiology and Pathophysiology)</h2>

          <p className="text-lg leading-relaxed mb-6">
            مکانیسم اصلی ایجاد زخم بستر بر اساس <strong>ایسکمی</strong> (کاهش جریان خون) ناشی از فشار خارجی مداوم است:
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">۱. فشار خارجی</h3>
          <p className="text-lg leading-relaxed mb-6">
            فشار وارده بر پوست و بافت‌های زیرین باید از فشار بسته شدن شریانچه‌های مویرگی (حدود 32 mmHg) فراتر رود تا جریان خون به آن ناحیه مختل شود. این فشار پایدار منجر به <strong>ایسکمی موضعی</strong> و نهایتاً <strong>نکروز بافت</strong> (مرگ سلولی) می‌شود.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">۲. مدت زمان</h3>
          <p className="text-lg leading-relaxed mb-6">
            آسیب می‌تواند در مدت زمان کوتاهی (در برخی منابع حتی کمتر از <strong>دو ساعت</strong>) در بیماران بی‌حرکت رخ دهد.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">۳. نیروهای برشی و اصطکاک</h3>
          <p className="text-lg leading-relaxed mb-6">
            علاوه بر فشار عمودی، نیروهای <strong>برشی</strong> (Shear Force) که ناشی از لغزش بافت‌های زیرین بر روی استخوان در هنگام تغییر وضعیت هستند، و <strong>اصطکاک</strong> (Friction) نیز به آسیب‌های اولیه کمک می‌کنند.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">عوامل خطر (Risk Factors)</h2>

          <p className="text-lg leading-relaxed mb-6">
            عوامل خطر توسعه زخم بستر معمولاً در سه دسته طبقه‌بندی می‌شوند:
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">۱. بی‌حرکتی و مکانیکی</h3>
          <p className="text-lg leading-relaxed mb-6">
            <strong>عدم تغییر وضعیت</strong> یا تغییر وضعیت ناکافی، استفاده نادرست از تشک‌های حمایتی، محدودیت‌های حرکتی به دلیل فلج یا بیماری‌های عصبی.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">۲. وضعیت سیستمیک بیمار</h3>
          <p className="text-lg leading-relaxed mb-6">
            <strong>سوءتغذیه</strong> (به ویژه سطوح پایین آلبومین خون، که برای ترمیم بافت حیاتی است)، <strong>بیماری‌های مزمن</strong> (مانند <a href="/articles/diabetes" className="text-primary hover:underline">دیابت</a> یا بیماری‌های عروق محیطی)، سن بالا، تب و کم‌خونی.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">۳. شرایط موضعی پوست</h3>
          <p className="text-lg leading-relaxed mb-6">
            <strong>بی‌اختیاری ادرار یا مدفوع</strong> (که باعث افزایش رطوبت و فرسایش پوست می‌شود)، ادامه‌دار بودن استفاده از سدیشن (آرام‌بخش) یا تهویه مکانیکی در بخش مراقبت‌های ویژه (ICU).
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">طبقه‌بندی مراحل آسیب فشاری (Staging System)</h2>

          <p className="text-lg leading-relaxed mb-6">
            انجمن ملی مشاوره زخم‌های فشاری آمریکا (NPUAP) از یک سیستم <strong>چهار مرحله‌ای</strong> برای طبقه‌بندی عمق آسیب استفاده می‌کند. تشخیص و ارزیابی زخم باید به طور کامل توسط تیم مراقبت انجام شود:
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">مرحله ۱ (Stage 1): قرمزی غیرقابل سفید شدن</h3>
          <p className="text-lg leading-relaxed mb-6">
            پوست در این ناحیه آسیب‌دیده، گرم‌تر، سفت‌تر یا دردناک‌تر است. بافت پوست سالم است اما قرمزی آن با فشار دادن سفید نمی‌شود (Non-blanchable erythema).
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">مرحله ۲ (Stage 2): آسیب ضخامت نسبی پوست</h3>
          <p className="text-lg leading-relaxed mb-6">
            زخم سطحی است و شامل اپیدرم و/یا درم می‌باشد. ظاهر آن شبیه تاول پاره شده یا دست‌نخورده، یا یک زخم باز کم‌عمق با بستر صورتی یا قرمز است.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">مرحله ۳ (Stage 3): آسیب ضخامت کامل پوست</h3>
          <p className="text-lg leading-relaxed mb-6">
            از دست رفتن کامل پوست و آسیب به بافت زیر جلدی (Subcutaneous Tissue)، اما عضلات، تاندون‌ها و استخوان‌ها هنوز در معرض دید نیستند.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">مرحله ۴ (Stage 4): آسیب کامل ضخامت بافت</h3>
          <p className="text-lg leading-relaxed mb-6">
            از دست رفتن گسترده بافت که در آن استخوان، تاندون یا ماهیچه در معرض دید قرار گرفته و به طور مستقیم لمس می‌شوند. اغلب شامل تونل‌سازی (Tunneling) و زیرکنده‌شدگی (Undermining) است.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">قابل طبقه‌بندی نیست (Unstageable)</h3>
          <p className="text-lg leading-relaxed mb-6">
            در این حالت، میزان کامل آسیب بافت نامشخص است زیرا زخم با بافت نکروز سیاه (Eschar) یا بافت مرده زرد رنگ (Slough) پوشیده شده است.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">آسیب بافت عمقی مشکوک (SDTI)</h3>
          <p className="text-lg leading-relaxed mb-6">
            ناحیه‌ای به رنگ بنفش یا قهوه‌ای تیره از پوست سالم یا تاول پرخون، که نشان‌دهنده آسیب بافت نرم زیرین به دلیل فشار و/یا نیروی برشی است.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">راهکارهای پیشگیری و مدیریت</h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>پیشگیری</strong> سنگ بنای مدیریت زخم بستر است. برنامه‌های پیشگیری موفق بر چهار ستون اصلی تکیه دارند:
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">۱. توزیع مجدد فشار و تغییر وضعیت</h3>
          <ul className="list-disc pr-8 space-y-3 text-lg mb-6">
            <li>
              <strong>تغییر وضعیت مکرر:</strong> تغییر موقعیت بیمار در بستر هر <strong>۲ ساعت</strong> یک بار (بسته به شرایط فردی) و در صندلی هر 1 ساعت یک بار.
            </li>
            <li>
              <strong>تجهیزات حمایتی:</strong> استفاده از تشک‌های پیشرفته با فشار متناوب (Alternating Pressure Mattress)، تشک‌های با فشار پایین ثابت یا پدهای ژل/فوم برای کاهش فشار و نیروهای برشی. برای <a href="/services/medical-equipment-rental" className="text-primary hover:underline">اجاره تشک ضد زخم بستر</a> با نوید زندگی تماس بگیرید.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">۲. مراقبت از پوست و رطوبت</h3>
          <ul className="list-disc pr-8 space-y-3 text-lg mb-6">
            <li>تمیز و خشک نگه داشتن پوست، به ویژه در بیماران دارای بی‌اختیاری (مدیریت رطوبت).</li>
            <li>بازرسی روزانه پوست برای شناسایی زودهنگام علائم مرحله 1.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">۳. بهینه‌سازی تغذیه</h3>
          <p className="text-lg leading-relaxed mb-6">
            ارزیابی وضعیت تغذیه‌ای بیمار و تأمین کالری و پروتئین کافی برای ترمیم زخم. مطالعات نشان داده‌اند مکمل‌های تغذیه‌ای می‌توانند بروز آسیب‌های فشاری را کاهش دهند.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">۴. مدیریت زخم</h3>
          <p className="text-lg leading-relaxed mb-6">
            برای زخم‌های ایجادشده، درمان چند رشته‌ای شامل موارد زیر است:
          </p>
          <ul className="list-disc pr-8 space-y-3 text-lg mb-6">
            <li><strong>کاهش فشار:</strong> اطمینان از حذف فشار از زخم.</li>
            <li><strong>مدیریت زخم:</strong> استفاده از پانسمان‌های مناسب بر اساس میزان ترشحات (مانند آلژینات، فوم، هیدروکلوئید) و کنترل عفونت.</li>
            <li><strong>دبریدمان:</strong> حذف بافت نکروز (مرده) برای تسهیل ترمیم.</li>
            <li><strong>مداخلات جراحی:</strong> در مراحل پیشرفته (مانند مرحله 4) ممکن است برای ترمیم نقص بافتی نیاز به جراحی باشد.</li>
          </ul>

          <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold text-primary mb-4">سلامت پوست و پیشگیری از زخم بستر در اولویت است</h3>
            <p className="text-lg leading-relaxed mb-4">
              برای <strong>پانسمان تخصصی زخم بستر در منزل</strong> توسط پرستاران مجرب، <strong>اجاره تشک ضد زخم بستر</strong> و <strong>مشاوره تخصصی مراقبت از بیماران بستری</strong>، همین حالا با نوید زندگی تماس بگیرید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:09386117912"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                📞 تماس: 09386117912
              </a>
            </div>
          </div>

          <PricingInfo />

          <h2 className="text-2xl font-bold mt-12 mb-6">منابع (References)</h2>
          <ol className="list-decimal pr-8 space-y-2 text-base mb-8">
            <li>Revised National Pressure Ulcer Advisory Panel Pressure Injury Staging System. <em>NIH (National Institutes of Health).</em></li>
            <li>Pressure Ulcer - StatPearls. <em>NCBI Bookshelf/NIH (National Institutes of Health).</em></li>
            <li>Risk Assessment and Prevention of Pressure Ulcers: A Clinical Practice Guideline From the American College of Physicians. <em>ACP Journals.</em></li>
            <li>Decubitus Ulcers: Pathophysiology and Primary Prevention. <em>PMC (PubMed Central)/NIH.</em></li>
            <li>Decubitus ulcers: A review of the literature. <em>ResearchGate/Academic Review.</em></li>
            <li>Risk factors for pressure ulcer development in Intensive Care Units: A systematic review. <em>Elsevier/Academic Journal.</em></li>
            <li>Pressure injury prevention measures: overview of systematic reviews. <em>ResearchGate/Academic Review.</em></li>
            <li>WHS Guidelines for the Treatment of Pressure Ulcers – 2023 update. <em>PMC (PubMed Central)/NIH.</em></li>
          </ol>
        </article>

        <FAQSection faqs={faqItems} />

        <RelatedArticles articles={relatedArticles} />
      </ArticleLayout>
    </>
  );
};

export default PressureInjuryPage;
