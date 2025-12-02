import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import ArticleLayout from "@/components/ArticleLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import troponinImage from "@/assets/troponin-test.jpg";
import cholesterolTestImage from "@/assets/cholesterol-test-article.jpg";
import heartAttackImage from "@/assets/cardiology-home-visit.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const TroponinPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تروپونین قلبی", url: "/articles/troponin" }
  ];

  const faqItems = [
    {
      question: "تروپونین چیست و چرا در تشخیص سکته قلبی مهم است؟",
      answer: "تروپونین پروتئین اختصاصی عضله قلب است که هنگام آسیب به سلول‌های قلبی به خون آزاد می‌شود. این پروتئین به عنوان استاندارد طلایی برای تشخیص سکته قلبی شناخته می‌شود زیرا بسیار اختصاصی است و حتی آسیب‌های جزئی به قلب را نشان می‌دهد."
    },
    {
      question: "چه زمانی باید تست تروپونین انجام شود؟",
      answer: "تست تروپونین معمولاً در مواقع بروز درد قفسه سینه، علائم مشکوک به سکته قلبی، تنگی نفس شدید یا سایر نشانه‌های بیماری‌های قلبی انجام می‌شود. این آزمایش بخشی از ارزیابی استاندارد در اورژانس برای بیماران با علائم قلبی است."
    },
    {
      question: "چقدر طول می‌کشد تا تروپونین در خون بالا برود؟",
      answer: "تروپونین معمولاً ظرف ۲ تا ۴ ساعت پس از شروع آسیب قلبی در خون قابل اندازه‌گیری است، در ۱۲ تا ۲۴ ساعت به اوج می‌رسد و می‌تواند چندین روز در خون باقی بماند. به همین دلیل ممکن است چندین بار آزمایش تکرار شود."
    },
    {
      question: "آیا تروپونین بالا همیشه به معنی سکته قلبی است؟",
      answer: "خیر، تروپونین بالا نشان‌دهنده آسیب به عضله قلب است اما علل متعددی غیر از سکته قلبی می‌توانند باعث افزایش آن شوند، مانند نارسایی قلبی، التهاب عضله قلب، بیماری کلیوی مزمن، آمبولی ریه یا فشار خون بسیار بالا. پزشک بر اساس علائم بالینی و سایر آزمایش‌ها تشخیص نهایی را می‌دهد."
    },
    {
      question: "تست تروپونین با حساسیت بالا (hs-cTn) چه تفاوتی با تست معمولی دارد؟",
      answer: "تست‌های تروپونین با حساسیت بالا می‌توانند مقادیر بسیار کمتری از تروپونین را در خون شناسایی کنند، که به تشخیص سریع‌تر سکته قلبی و کاهش زمان انتظار در اورژانس کمک می‌کند. این روش‌ها امروزه استاندارد جدید در بسیاری از بیمارستان‌ها هستند."
    }
  ];

  const relatedArticles = [
    {
      title: "آزمایش چربی خون (Lipid Profile): راهنمای کامل",
      description: "راهنمای جامع آزمایش پروفایل لیپید: کلسترول، تری‌گلیسرید، HDL و LDL",
      image: cholesterolTestImage,
      link: "/articles/cholesterol-test",
      category: "آزمایش"
    },
    {
      title: "علائم سکته قلبی: چه زمانی باید به اورژانس مراجعه کرد؟",
      description: "شناخت علائم سکته قلبی و اقدامات فوری برای نجات جان",
      image: heartAttackImage,
      link: "/articles/heart-attack-symptoms",
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
        title="تروپونین قلبی (Cardiac Troponin): بیومارکر طلایی سکته قلبی | نوید زندگی"
        description="راهنمای جامع تروپونین قلبی: ساختار، عملکرد، اهمیت در تشخیص سکته قلبی، آزمایش‌های حساسیت بالا و علل غیرایسکمیک افزایش تروپونین"
        keywords="تروپونین، تروپونین قلبی، Cardiac Troponin، cTnI، cTnT، سکته قلبی، آسیب میوکارد، بیومارکر قلبی، تست تروپونین"
        canonical="https://navidzendegi.com/articles/troponin"
        ogImage={troponinImage}
        ogType="article"
        publishedTime="2024-12-02"
        modifiedTime="2024-12-02"
      />

      <ArticleSchema
        title="تروپونین قلبی (Cardiac Troponin): بیومارکر طلایی آسیب میوکارد"
        description="راهنمای جامع تروپونین قلبی: ساختار، عملکرد، اهمیت در تشخیص سکته قلبی، آزمایش‌های حساسیت بالا و علل غیرایسکمیک افزایش تروپونین"
        publishedTime="2024-12-02"
        modifiedTime="2024-12-02"
        image={troponinImage}
      />

      <ArticleLayout>
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <img
              src={troponinImage}
              alt="تست تروپونین قلبی - آزمایش بیومارکر سکته قلبی"
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />

            <h1 className="text-4xl font-bold text-foreground mb-6">
              تروپونین قلبی (Cardiac Troponin): بیومارکر طلایی آسیب میوکارد
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              تروپونین یک مجموعه پروتئینی حیاتی است که در تنظیم انقباض عضلات مخطط (شامل عضلات قلبی و اسکلتی) نقش محوری دارد. با توجه به ماهیت منحصربه‌فرد ایزوفرم‌های آن در عضله قلب، اندازه‌گیری تروپونین قلبی در خون، امروزه به عنوان <strong>بیومارکر استاندارد طلایی</strong> برای تشخیص آسیب حاد میوکارد (مانند <a href="/articles/heart-attack-symptoms" className="text-primary hover:underline">سکته قلبی</a>) شناخته می‌شود.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              ساختار و عملکرد تروپونین
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              تروپونین یک کمپلکس هتروتریمری است که بر روی فیلامنت‌های نازک میوفیبریل‌ها قرار گرفته و دارای سه زیرواحد مجزا است:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۱. تروپونین T (TnT)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              زیرواحدی که مسئول اتصال کل کمپلکس تروپونین به مولکول <strong>تروپومیوزین</strong> است. این اتصال برای قرارگیری صحیح کمپلکس بر روی فیلامنت‌های عضلانی ضروری است.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۲. تروپونین I (TnI)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              زیرواحد <strong>مهارکننده</strong> است. در حالت استراحت، TnI فعالیت آدنوزین تری‌فسفاتاز (ATPase) اکتومیوزین را مهار می‌کند و از انقباض جلوگیری می‌کند. این مکانیسم تضمین می‌کند که عضله قلب فقط در زمان مناسب منقبض شود.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۳. تروپونین C (TnC)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              زیرواحد <strong>متصل‌شونده به کلسیم</strong> است. اتصال کلسیم به TnC باعث تغییر کنفورماسیون در کمپلکس تروپونین شده، TnI را از موقعیت مهارکننده خارج می‌کند و اجازه می‌دهد تا تعامل بین اکتین و میوزین برای شروع انقباض رخ دهد.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950 border-r-4 border-blue-500 p-6 my-6 rounded">
              <p className="text-blue-900 dark:text-blue-100 leading-relaxed">
                <strong>نکته مهم:</strong> ایزوفرم‌های قلبی تروپونین I (cTnI) و T (cTnT) دارای توالی اسید آمینه منحصربه‌فردی هستند که تقریباً فقط در سلول‌های عضله قلب (Cardiomyocyte) بیان می‌شوند، و این امر اساس <strong>حساسیت و اختصاصیت</strong> آن‌ها در تشخیص آسیب میوکارد است.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              اهمیت بالینی و تشخیص انفارکتوس میوکارد (MI)
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>آسیب میوکارد (Myocardial Injury)</strong> زمانی تعریف می‌شود که غلظت تروپونین قلبی در خون از <strong>نود و نهمین صدک (99th Percentile)</strong> جمعیت مرجع سالم تجاوز کند.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۱. مکانیسم آزادسازی
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              هنگامی که سلول‌های عضله قلب به دلیل <strong>ایسکمی</strong> (کاهش خون‌رسانی) و <strong>نکروز (Necrosis)</strong> دچار مرگ سلولی می‌شوند، تروپونین‌های موجود در سیتوپلاسم سلول به داخل جریان خون آزاد می‌شوند.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۲. تعریف سکته قلبی (MI)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              بر اساس <strong>تعریف جهانی سکته قلبی (Universal Definition of Myocardial Infarction)</strong>، تشخیص سکته قلبی (نوع ۱) نیازمند <strong>افزایش و/یا کاهش پویا (Dynamic Rise/Fall)</strong> در غلظت تروپونین بالاتر از آستانه 99th Percentile است، که همراه با شواهد بالینی ایسکمی حاد میوکارد باشد.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۳. سینتیک آزادسازی
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              تروپونین معمولاً <strong>ظرف ۲ تا ۴ ساعت</strong> پس از شروع علائم قفسه سینه در خون قابل اندازه‌گیری است، در <strong>۱۲ تا ۲۴ ساعت</strong> به اوج خود می‌رسد و می‌تواند <strong>چندین روز</strong> در گردش خون باقی بماند.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              روش‌های اندازه‌گیری حساسیت بالا (High-Sensitivity Assays)
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              ورود <strong>آزمایش‌های تروپونین قلبی با حساسیت بالا (hs-cTn Assays)</strong> انقلاب بزرگی در تشخیص سکته قلبی ایجاد کرده است.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>مزایا:</strong> این روش‌ها به دلیل حساسیت تحلیلی بالا قادرند تروپونین را در سطوحی بسیار پایین‌تر، حتی در افراد سالم، اندازه‌گیری کنند.</li>
              <li><strong>تشخیص سریع:</strong> حساسیت بالاتر اجازه می‌دهد تا از الگوریتم‌های تشخیص سریع (Rapid Rule-In/Rule-Out)، مانند پروتکل‌های ۰/۱ ساعت یا ۰/۲ ساعت استفاده شود. این امر زمان لازم برای تشخیص و ترخیص ایمن بیماران کم‌خطر را به شدت کاهش می‌دهد.</li>
              <li><strong>آستانه‌های جنسیتی:</strong> برای بهبود دقت تشخیصی، امروزه استفاده از آستانه‌های 99th Percentile مختص جنسیت (Sex-specific) توصیه می‌شود، زیرا زنان معمولاً مقادیر پایه پایین‌تری نسبت به مردان دارند.</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              علل غیرایسکمیک افزایش تروپونین
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              بالا بودن تروپونین، صرفاً نشان‌دهنده <strong>آسیب میوکارد (Myocardial Injury)</strong> است، نه لزوماً سکته قلبی ناشی از پارگی پلاک آترواسکلروتیک (Type 1 MI). بسیاری از شرایط دیگر که با ایسکمی ناشی از آترواسکلروز همراه نیستند، می‌توانند باعث افزایش تروپونین شوند.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-right font-semibold">علت</th>
                    <th className="border border-border px-4 py-3 text-right font-semibold">مکانیسم احتمالی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3"><strong>نارسایی قلبی (Heart Failure)</strong></td>
                    <td className="border border-border px-4 py-3">کشیدگی دیواره میوکارد، فشار زیاد بر بطن و مرگ سلولی ناشی از افزایش استرس</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3"><strong>نارسایی مزمن کلیه (CKD)</strong></td>
                    <td className="border border-border px-4 py-3">کاهش کلیرانس کلیوی تروپونین و/یا آسیب مزمن میوکارد ناشی از توکسین‌های اورمیک</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3"><strong>سپسیس و شوک سپتیک</strong></td>
                    <td className="border border-border px-4 py-3">آسیب مستقیم میوکارد ناشی از سایتوکین‌ها و اندوتوکسین‌ها، یا عدم تطابق عرضه/تقاضای اکسیژن</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3"><strong>آمبولی ریه (Pulmonary Embolism)</strong></td>
                    <td className="border border-border px-4 py-3">فشار حاد بر بطن راست به دلیل افزایش مقاومت شریان ریوی</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3"><strong>میوکاردیت و پریکاردیت</strong></td>
                    <td className="border border-border px-4 py-3">التهاب و تخریب مستقیم سلول‌های میوکارد</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3"><strong>هایپرتنشن شدید</strong></td>
                    <td className="border border-border px-4 py-3">افزایش بار و استرس شدید بر میوکارد</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950 border-r-4 border-amber-500 p-6 my-8 rounded">
              <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
                ⚠️ هشدار مهم
              </h3>
              <p className="text-amber-900 dark:text-amber-100 leading-relaxed">
                <strong>در مواجهه با تروپونین بالا، ارزیابی بالینی باید بر اساس پویایی (تغییر) سطح تروپونین، تظاهرات بالینی و شواهد الکتروکاردیوگرافی (ECG) برای تمایز بین سکته قلبی حاد و سایر علل آسیب میوکارد متمرکز شود.</strong> هرگز بر اساس نتیجه آزمایش به تنهایی خودسرانه اقدام نکنید.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              منابع (References)
            </h3>

            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground mb-8">
              <li>Cardiac Troponin Structure-Function and the Influence of Hypertrophic Cardiomyopathy Associated Mutations on Modulation of Contractility. ResearchGate.</li>
              <li>Human cardiac troponin complex. Structure and functions. SciSpace.</li>
              <li>Troponin I – a comprehensive review of its function, structure, evolution, and role in muscle diseases. PubMed Central.</li>
              <li>Cardiac troponin and defining myocardial infarction. Oxford Academic/Cardiovascular Research.</li>
              <li>High-Sensitivity Cardiac Troponin and the 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guidelines for the Evaluation and Diagnosis of Acute Chest Pain. American Heart Association Journals.</li>
              <li>Australian clinical guideline for diagnosing and managing acute coronary syndromes 2025. Heart Foundation.</li>
              <li>High-Sensitivity Cardiac Troponin and the 2021 Guidelines for Acute Chest Pain. American College of Cardiology (ACC).</li>
              <li>Elevated Troponin I in the Absence of Coronary Artery Disease. Semantic Scholar.</li>
              <li>Causes of Non ACS Related Troponin Elevations. American College of Cardiology (ACC).</li>
            </ol>

            <div className="bg-primary/10 border-r-4 border-primary p-6 my-8 rounded">
              <h3 className="text-xl font-bold text-foreground mb-3">
                🏥 نیاز به مشاوره یا آزمایش در منزل دارید؟
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                برای مشاوره با متخصص قلب در منزل، انجام <a href="/services/laboratory" className="text-primary hover:underline font-semibold">آزمایش‌های قلبی</a> یا <a href="/services/echo-ecg" className="text-primary hover:underline font-semibold">اکوکاردیوگرافی در منزل</a>، با ما تماس بگیرید.
              </p>
              <a
                href="tel:09386117912"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس: ۰۹۳۸۶۱۱۷۹۱۲
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

export default TroponinPage;
