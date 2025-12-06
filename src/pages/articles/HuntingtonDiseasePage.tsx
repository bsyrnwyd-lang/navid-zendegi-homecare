import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import huntingtonImage from "@/assets/huntington-disease-article.jpg";
import neurologyImage from "@/assets/neurology.jpg";
import depressionImage from "@/assets/depression-article.jpg";
import physiotherapyImage from "@/assets/physiotherapy.jpg";

const HuntingtonDiseasePage = () => {
  const phoneNumber = "09386117912";

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات پزشکی", url: "/articles" },
    { name: "بیماری هانتیگتون", url: "/articles/huntington-disease" }
  ];

  const faqs = [
    {
      question: "بیماری هانتیگتون چیست؟",
      answer: "بیماری هانتیگتون یک اختلال نورودژنراتیو ارثی با الگوی اتوزومال غالب است که به دلیل جهش در ژن HTT ایجاد می‌شود. این بیماری باعث تخریب تدریجی نورون‌ها در مناطق خاصی از مغز، به‌ویژه عقده‌های قاعده‌ای می‌شود."
    },
    {
      question: "علائم اولیه بیماری هانتیگتون چیست؟",
      answer: "علائم اولیه معمولاً شامل حرکات غیرارادی (کوره‌آ)، اختلال تعادل، کاهش سرعت حرکتی و مشکلات خلقی مانند افسردگی یا تحریک‌پذیری است. تغییرات روان‌پزشکی اغلب جزو اولین نشانه‌های بیماری هستند."
    },
    {
      question: "آیا بیماری هانتیگتون قابل درمان است؟",
      answer: "در حال حاضر درمان قطعی برای متوقف کردن روند تخریب نورونی وجود ندارد، اما درمان‌های حمایتی مانند داروهای کنترل حرکات غیرارادی، داروهای ضد افسردگی و توان‌بخشی می‌توانند کیفیت زندگی بیمار را بهبود دهند."
    },
    {
      question: "بیماری هانتیگتون چگونه تشخیص داده می‌شود؟",
      answer: "تشخیص از طریق ارزیابی بالینی تخصصی (مشاهده کوره‌آ و علائم شناختی)، تصویربرداری MRI مغزی که آتروفی هسته دم‌دار را نشان می‌دهد، و آزمایش ژنتیک که تعداد تکرارهای CAG را تأیید می‌کند، انجام می‌شود."
    },
    {
      question: "آیا خدمات مراقبتی در منزل برای بیماران هانتیگتون وجود دارد؟",
      answer: "بله، نوید زندگی با ارائه خدمات ویزیت پزشک متخصص نورولوژی در منزل تهران، فیزیوتراپی و توان‌بخشی در منزل، و پایش دارویی تخصصی، به بیماران هانتیگتون و خانواده‌هایشان کمک می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "ویزیت متخصص مغز و اعصاب در منزل",
      description: "خدمات تخصصی نورولوژی در منزل برای بیماران با مشکلات حرکتی",
      image: neurologyImage,
      link: "/services/neurology",
      category: "خدمات"
    },
    {
      title: "افسردگی: علائم، علل و درمان",
      description: "راهنمای جامع افسردگی و روش‌های درمانی دارویی و غیردارویی",
      image: depressionImage,
      link: "/articles/depression",
      category: "سلامت روان"
    },
    {
      title: "فیزیوتراپی در منزل",
      description: "خدمات فیزیوتراپی و توان‌بخشی تخصصی در منزل تهران",
      image: physiotherapyImage,
      link: "/services/physiotherapy",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="بیماری هانتیگتون: علائم، تشخیص و درمان | نوید زندگی"
        description="راهنمای جامع بیماری هانتیگتون: مکانیسم ژنتیکی، علائم حرکتی و شناختی، روش‌های تشخیص و درمان‌های حمایتی. ویزیت متخصص نورولوژی در منزل تهران."
        keywords="بیماری هانتیگتون، کوره‌آ، اختلال نورودژنراتیو، ژن HTT، عقده‌های قاعده‌ای، تترابنازین، ویزیت نورولوژی منزل تهران"
        canonical="https://navidzendegi.com/articles/huntington-disease"
        ogType="article"
      />
      <ArticleSchema
        title="بیماری هانتیگتون: اختلال نورودژنراتیو ارثی و پیشرونده"
        description="راهنمای جامع بیماری هانتیگتون شامل مکانیسم مولکولی، سیر بالینی، تشخیص و راهبردهای درمانی و توان‌بخشی"
        publishedTime="2024-12-06"
        modifiedTime="2024-12-06"
        image={huntingtonImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              بیماری هانتیگتون (Huntington's Disease): اختلال نورودژنراتیو ارثی و پیشرونده
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>تاریخ انتشار: ۱۵ آذر ۱۴۰۳</span>
              <span>|</span>
              <span>دسته‌بندی: نورولوژی</span>
            </div>
            <img
              src={huntingtonImage}
              alt="تصویر مغز انسان با نمایش نواحی درگیر در بیماری هانتیگتون"
              className="w-full rounded-lg shadow-md mb-6"
            />
          </header>

          <div className="bg-muted/30 border border-border rounded-lg p-4 mb-8">
            <h2 className="text-lg font-semibold mb-2">چکیده</h2>
            <p className="text-muted-foreground">
              بیماری هانتیگتون (HD) یک اختلال نورودژنراتیو و ارثی با الگوی اتوزومال غالب است که به‌دلیل جهش در ژن HTT ایجاد می‌شود. این جهش باعث افزایش تکرار سه‌تایی کدون‌های CAG و تولید پروتئینی غیرطبیعی به نام هانتیگتین جهش‌یافته می‌شود که برای نورون‌ها سمی است. تجمع این پروتئین موجب تخریب تدریجی نواحی خاصی از مغز، به‌ویژه عقده‌های قاعده‌ای و قشر مغز می‌گردد.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">مکانیسم مولکولی و پاتوفیزیولوژی</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">مکانیسم ژنتیکی</h3>
          <p>
            جهش ژنتیکی عامل بیماری هانتیگتون در ژن HTT (واقع بر روی کروموزوم ۴) رخ می‌دهد. این جهش شامل افزایش تکرار توالی سه‌تایی CAG است. در افراد سالم این تکرار معمولاً کمتر از ۲۶ بار است؛ اما در بیماران HD، تعداد این تکرارها ۳۶ یا بیشتر است. هر چه تعداد تکرارهای CAG بیشتر باشد، بیماری در سنین پایین‌تر و با شدت بیشتری آغاز می‌شود.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">اثرات پروتئین جهش‌یافته</h3>
          <p>
            جهش ژنتیکی منجر به تولید پروتئین هانتیگتین جهش‌یافته (mHTT) می‌شود که تمایل به تجمع و تشکیل توده‌های سمی (Aggregates) درون هسته نورون‌ها دارد. این تجمع موجب:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>اختلال در عملکرد میتوکندری و تولید انرژی سلولی</li>
            <li>اختلال در انتقال و بازیافت پروتئین‌ها در سلول</li>
            <li>فعال‌سازی مسیرهای آپوپتوز (مرگ برنامه‌ریزی‌شده سلولی) می‌شود</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">نواحی آسیب‌دیده مغزی</h3>
          <p>
            تخریب نورونی به‌طور خاص بر نورون‌های خاردار در هسته دم‌دار و پوتامن (بخشی از عقده‌های قاعده‌ای) تأثیر می‌گذارد. از دست دادن این نورون‌ها باعث عدم مهار حرکات ناخواسته می‌شود که منجر به علامت بارز بیماری، یعنی کوره‌آ (Chorea) می‌گردد.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">سیر بالینی و پیشرفت علائم</h2>
          <p>
            پیشرفت بیماری به‌تدریج موجب تشدید علائم در سه حوزه اصلی می‌شود:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">۱. اختلالات حرکتی</h3>
          <p>
            علائم اولیه معمولاً شامل حرکات غیرارادی و ناگهانی (Chorea) در صورت، بازوها و تنه، به‌همراه اختلال تعادل و ناهماهنگی حرکتی است. با پیشرفت بیماری، حرکات غیرارادی جای خود را به سفتی عضلانی (Rigidity) و کاهش سرعت حرکت (Bradykinesia) می‌دهند.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">۲. اختلالات شناختی</h3>
          <p>
            این حوزه با کاهش توانایی‌های شناختی، شامل کاهش توانایی برنامه‌ریزی، تصمیم‌گیری، انعطاف‌پذیری ذهنی و اختلال در حافظه کوتاه‌مدت نمایان می‌شود. این مشکلات به تدریج توانایی بیمار برای کار و زندگی مستقل را از بین می‌برد.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">۳. اختلالات خلقی و رفتاری</h3>
          <p>
            تغییرات روان‌پزشکی اغلب جزو اولین نشانه‌های بیماری هستند و شامل <Link to="/articles/depression" className="text-primary hover:underline">افسردگی</Link> شدید، اضطراب، تحریک‌پذیری بالا، نوسانات خلقی و گاهی علائم روان‌پریشی می‌شوند. در مراحل پیشرفته‌تر، مشکلات تکلم و بلع (Dysphagia) نیز بروز می‌کنند.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">تشخیص و راهبردهای درمانی</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">تشخیص</h3>
          <p>
            تشخیص بیماری معمولاً از طریق ارزیابی بالینی تخصصی (مشاهده کوره‌آ و علائم شناختی)، تصویربرداری مغزی (مانند MRI که آتروفی هسته دم‌دار را نشان می‌دهد) و آزمایش ژنتیک قطعی می‌گردد. آزمایش ژنتیک تعداد دقیق تکرارهای CAG را تأیید می‌کند.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">مدیریت درمانی</h3>
          <p>
            اگرچه درمان قطعی برای متوقف کردن روند تخریب نورونی وجود ندارد، اما درمان‌های حمایتی می‌توانند علائم و کیفیت زندگی بیمار را بهبود دهند:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li><strong>مدیریت حرکات غیرارادی:</strong> داروهایی مانند تترابنازین (Tetrabenazine) و دوترابنازین (Deutetrabenazine) برای کاهش شدت حرکات کوره‌آ استفاده می‌شوند</li>
            <li><strong>مدیریت روان‌پزشکی:</strong> داروهای ضد افسردگی (SSRIs)، تثبیت‌کننده‌های خلق و آنتی‌سایکوتیک‌ها برای کنترل اختلالات خلقی و رفتاری</li>
            <li><strong>توان‌بخشی:</strong> <Link to="/services/physiotherapy" className="text-primary hover:underline">فیزیوتراپی</Link> برای حفظ تعادل و تحرک، کاردرمانی برای حفظ استقلال در فعالیت‌های روزمره و گفتاردرمانی برای بهبود مشکلات بلع و تکلم</li>
          </ul>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 my-8">
            <p className="text-destructive font-semibold mb-2">⚠️ هشدار مهم</p>
            <p className="text-sm">
              خوددرمانی یا تغییر دوز داروهای بیماری هانتیگتون بدون نظر پزشک می‌تواند عوارض جدی ایجاد کند. مصرف داروهای کنترل حرکات غیرارادی باید تحت نظارت دقیق متخصص نورولوژی انجام شود.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">خدمات پشتیبانی تخصصی در منزل تهران</h2>
          <p>
            بیماری هانتیگتون با ایجاد اختلالات حرکتی شدید، جابه‌جایی بیماران را برای دریافت مراقبت‌های پزشکی تخصصی بسیار دشوار می‌سازد. از این رو، <Link to="/services/neurology" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</Link> و خدمات پرستاری تخصصی نورولوژی در منزل به یک راهکار حیاتی تبدیل می‌شود. این خدمات شامل:
          </p>
          <ul className="list-disc list-inside space-y-2 my-4">
            <li>ارزیابی دوره‌ای نورولوژیست و روانپزشک بدون نیاز به خروج بیمار از منزل</li>
            <li>ارائه جلسات فیزیوتراپی و توان‌بخشی در محیط امن منزل</li>
            <li>پایش مصرف داروها و مدیریت عوارض جانبی مانند دیسکینزی دیررس</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">امید به آینده (تحقیقات نوین)</h3>
          <p>
            پژوهش‌های جدید روی روش‌هایی مانند درمان‌های ژنتیکی، مهار RNA و کاهش تولید پروتئین جهش‌یافته متمرکز است و امیدهایی برای کند کردن روند بیماری و کنترل بهتر آن در آینده ایجاد کرده است.
          </p>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-bold mb-4">ویزیت متخصص نورولوژی در منزل</h3>
            <p className="mb-4">
              برای دریافت خدمات تخصصی نورولوژی و توان‌بخشی در منزل تهران، با ما تماس بگیرید.
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{phoneNumber}</span>
            </a>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-3">منابع (References)</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
            <li>Huntington's Disease: Pathophysiology and Therapeutics. JAMA Neurology/Academic Journal.</li>
            <li>Diagnosis and Management of Huntington's Disease. Mayo Clinic Proceedings (Academic Journal).</li>
            <li>Clinical Features and Stages of Huntington's Disease. National Institutes of Health (NIH).</li>
            <li>Genetic Testing and Diagnosis of Huntington's Disease. Genetic and Rare Diseases Information Center (GARD).</li>
            <li>Gene Therapy and Emerging Treatments for Huntington's Disease. The Lancet Neurology (Major Academic Journal).</li>
          </ol>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default HuntingtonDiseasePage;
