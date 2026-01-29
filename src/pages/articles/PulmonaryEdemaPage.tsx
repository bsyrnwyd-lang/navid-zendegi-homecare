import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import pulmonaryEdemaImage from "@/assets/pulmonary-edema.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import postCCUCareImage from "@/assets/post-ccu-care-home.jpg";

const PulmonaryEdemaPage = () => {
  const publishDate = "2025-01-29";

  const faqs = [
    {
      question: "آب آوردن ریه چیست؟",
      answer: "آب آوردن ریه یا ادم ریوی (Pulmonary Edema) وضعیتی است که در آن مایعات به جای هوا وارد کیسه‌های هوایی ریه (آلوئول‌ها) می‌شوند و اکسیژن کافی به خون نمی‌رسد. شایع‌ترین علت آن نارسایی قلبی است."
    },
    {
      question: "علائم آب آوردن ریه چیست؟",
      answer: "تنگی نفس شدید، احساس خفگی، سرفه‌های خلط‌دار (گاهی صورتی یا کف‌آلود)، خس‌خس سینه، عدم توانایی دراز کشیدن و بیدار شدن ناگهانی از خواب به دلیل تنگی نفس از علائم اصلی هستند."
    },
    {
      question: "آیا آب آوردن ریه خطرناک است؟",
      answer: "بله. ادم ریوی حاد یک وضعیت اورژانسی است و می‌تواند تهدیدکننده حیات باشد. تشخیص و درمان سریع ضروری است."
    },
    {
      question: "علت اصلی آب آوردن ریه چیست؟",
      answer: "شایع‌ترین علت، مشکلات قلبی مانند نارسایی قلبی، سکته قلبی، مشکلات دریچه‌ای قلب و فشار خون بسیار بالا است. به این نوع ادم ریوی کاردیوژنیک گفته می‌شود."
    },
    {
      question: "آیا می‌توان ادم ریوی را در منزل تشخیص داد؟",
      answer: "بله. تیم نوید زندگی با اعزام پزشک متخصص قلب به همراه دستگاه اکو و نوار قلب پورتابل، می‌تواند ادم ریوی را در منزل تشخیص داده و درمان فوری را شروع کند."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل؛ راهنمای کامل",
      description: "همه چیز درباره انجام اکو قلب در منزل و مزایای آن",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "قلب و عروق"
    },
    {
      title: "نوار قلب در منزل؛ راهنمای کامل ECG",
      description: "همه چیز درباره انجام نوار قلب در منزل و تفسیر نتایج",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "قلب و عروق"
    },
    {
      title: "مراقبت‌های پس از ترخیص از CCU",
      description: "راهنمای مراقبت‌های منزل پس از ترخیص از بخش مراقبت‌های ویژه قلبی",
      image: postCCUCareImage,
      link: "/articles/post-ccu-care",
      category: "قلب و عروق"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "آب آوردن ریه (ادم ریوی)", url: "/articles/pulmonary-edema" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آب آوردن ریه (ادم ریوی)؛ علائم، علل و درمان اورژانسی در منزل | نوید زندگی"
        description="راهنمای کامل آب آوردن ریه (ادم ریوی): علائم هشداردهنده، علل قلبی، تشخیص با اکو و نوار قلب در منزل و درمان فوری توسط متخصص قلب."
        keywords="آب آوردن ریه، ادم ریوی، تنگی نفس، نارسایی قلبی، اکو در منزل، نوار قلب در منزل، متخصص قلب در منزل، درمان تنگی نفس"
        canonical="https://navidzendegi.com/articles/pulmonary-edema"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      <ArticleSchema
        title="آب آوردن ریه (ادم ریوی)؛ وقتی تنگی نفس به یک وضعیت اورژانسی تبدیل می‌شود"
        description="راهنمای کامل آب آوردن ریه: علائم، علل قلبی و تشخیص و درمان در منزل"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={pulmonaryEdemaImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              آب آوردن ریه (ادم ریوی)؛ وقتی تنگی نفس به یک وضعیت اورژانسی تبدیل می‌شود
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۱۴۰۳/۱۱/۱۰</p>
          </header>

          <img
            src={pulmonaryEdemaImage}
            alt="آب آوردن ریه - ادم ریوی - تشخیص در منزل"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
            <p className="text-lg mb-6">
              احساس غرق‌شدگی در خشکی، تنگی نفسی که اجازه دراز کشیدن نمی‌دهد و سرفه‌های مداوم؛ این‌ها توصیفات بیمارانی است که دچار <strong>آب آوردن ریه یا ادم ریوی (Pulmonary Edema)</strong> شده‌اند. این وضعیت نه تنها ترسناک است، بلکه یکی از جدی‌ترین چالش‌های پزشکی برای بیماران قلبی و خانواده‌های آن‌ها محسوب می‌شود.
            </p>

            <p className="text-lg mb-6">
              در مرکز خدمات پزشکی <a href="/" className="text-primary hover:underline">نوید زندگی</a>، ما بر این باوریم که در مواجهه با ادم ریوی، ثانیه‌ها تعیین‌کننده هستند.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
              <p className="text-destructive font-semibold">
                ⚠️ هشدار: ادم ریوی حاد یک وضعیت اورژانسی است. در صورت بروز تنگی نفس شدید، فوراً با پزشک تماس بگیرید. هرگز خوددرمانی نکنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">ادم ریوی چیست و چرا رخ می‌دهد؟</h2>
            <p className="mb-6">
              در حالت عادی، ریه‌ها مسئول تبادل اکسیژن و دی‌اکسید کربن هستند. اما وقتی مایعات به جای هوا وارد کیسه‌های هوایی (آلوئول‌ها) می‌شوند، اکسیژن کافی به خون نمی‌رسد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">علل قلبی (کاردیوژنیک)</h3>
            <p className="mb-4">
              شایع‌ترین علت آب آوردن ریه، مشکلات قلبی است. وقتی بطن چپ قلب ضعیف می‌شود (<a href="/articles/post-ccu-care" className="text-primary hover:underline">نارسایی قلبی</a>)، نمی‌تواند خون را به جلو پمپاژ کند. این خون در رگ‌های ریه پس می‌زند و فشار زیاد باعث نشت مایع به بافت ریه می‌شود.
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>سکته قلبی:</strong> آسیب به عضله قلب و کاهش ناگهانی قدرت پمپاژ</li>
              <li><strong>مشکلات دریچه‌ای:</strong> تنگ بودن یا گشاد بودن دریچه‌های میترال و آئورت</li>
              <li><strong>فشار خون بسیار بالا:</strong> که فشار مضاعفی به قلب وارد می‌کند</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">علائم هشداردهنده: چه زمانی باید نگران شد؟</h2>
            <p className="mb-4">
              آب آوردن ریه می‌تواند به دو صورت <strong>حاد (ناگهانی)</strong> یا <strong>مزمن (تدریجی)</strong> بروز کند:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">علائم حاد (وضعیت اورژانسی)</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>تنگی نفس شدید:</strong> که با فعالیت بدنی یا حتی در حالت استراحت بدتر می‌شود</li>
              <li><strong>احساس خفگی:</strong> بیمار احساس می‌کند نمی‌تواند نفس بکشد و معمولاً رنگ‌پریده و مضطرب است</li>
              <li><strong>سرفه‌های خلط‌دار:</strong> خلطی که ممکن است کف‌آلود یا صورتی‌رنگ (خونی) باشد</li>
              <li><strong>خس‌خس سینه (ویزینگ):</strong> شنیده شدن صدای سوت هنگام نفس کشیدن</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">علائم مزمن (تدریجی)</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>ارتوپنه:</strong> تنگی نفس هنگام دراز کشیدن که بیمار را مجبور به استفاده از چند بالش زیر سر می‌کند</li>
              <li><strong>PND:</strong> بیدار شدن ناگهانی از خواب به دلیل تنگی نفس</li>
              <li>افزایش ناگهانی وزن و <a href="/articles/leg-edema" className="text-primary hover:underline">ورم پاها</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">خطرات جابه‌جایی بیمار مبتلا به ادم ریوی</h2>
            <p className="mb-6">
              برای بیماری که با کمبود اکسیژن دست‌وپنجه نرم می‌کند، هرگونه فعالیت بدنی یا استرس ناشی از جابه‌جایی در ترافیک، می‌تواند وضعیت را وخیم‌تر کند. تلاش برای رساندن بیمار به بیمارستان ممکن است باعث افت شدیدتر اکسیژن و فشار بیشتر به قلب شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">تشخیص و مدیریت تخصصی در منزل با نوید زندگی</h2>
            <p className="mb-6">
              ما در نوید زندگی تجهیزات بیمارستانی را به بالین بیمار می‌آوریم تا از خطرات جابه‌جایی جلوگیری کنیم:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">الف) اکوکاردیوگرافی (اکو) در منزل؛ تشخیص ریشه مشکل</h3>
            <p className="mb-4">
              برای درمان آب ریه، باید بدانیم چرا قلب ضعیف شده است. متخصصین ما با دستگاه <a href="/articles/echo-home" className="text-primary hover:underline">اکو پورتابل در منزل</a>، قدرت انقباض بطن‌ها، سلامت دریچه‌ها و فشارهای داخلی قلب را چک می‌کنند. این کار دقیق‌ترین راه برای تشخیص نارسایی قلب در همان لحظه است.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ب) نوار قلب (ECG) در منزل</h3>
            <p className="mb-4">
              بسیاری از موارد ادم ریوی ناشی از آریتمی‌های پنهان یا سکته‌های قلبی بی‌سروصداست. انجام <a href="/articles/ecg-home" className="text-primary hover:underline">نوار قلب در منزل</a> به پزشک اجازه می‌دهد وضعیت برقی قلب را فوراً بررسی کرده و درمان‌های لازم را آغاز کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ج) ویزیت متخصص و درمان دارویی در محل</h3>
            <p className="mb-6">
              پزشک <a href="/services/internal-medicine" className="text-primary hover:underline">متخصص قلب نوید زندگی</a> پس از معاینه و بررسی اکو و نوار قلب، بلافاصله درمان‌های دارویی (مانند داروهای ادرارآور تزریقی برای دفع سریع آب ریه) را شروع کرده و وضعیت تنفسی بیمار را مدیریت می‌کند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مراقبت‌های پیشگیرانه در خانه</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>رژیم غذایی بدون نمک:</strong> نمک باعث احتباس آب در بدن و ریه می‌شود</li>
              <li><strong>پایش وزن:</strong> افزایش وزن بیش از ۱ تا ۲ کیلوگرم در چند روز، زنگ خطر تجمع مایعات است</li>
              <li><strong>چکاپ‌های دوره‌ای:</strong> منتظر بحران نمانید. چکاپ ماهانه شامل ویزیت پزشک در منزل و پایش وضعیت قلب، مانع از رسیدن بیمار به مرحله آب آوردن ریه می‌شود</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/10 rounded-lg p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                تشخیص و درمان ادم ریوی در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                در صورت بروز تنگی نفس شدید، برای اعزام تیم تخصصی قلب به منزل (اکو + نوار قلب + ویزیت متخصص) همین حالا تماس بگیرید:
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس فوری: 09386117912
              </a>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نتیجه‌گیری</h2>
            <p className="mb-6">
              آب آوردن ریه یک وضعیت بحرانی است، اما با تشخیص زودهنگام قابل مدیریت است. اگر عزیز شما دچار تنگی نفس شده، به جای استرسِ انتقال به مراکز درمانی، از خدمات پزشکی در منزل نوید زندگی استفاده کنید. تیم ما با تمام امکانات (اکو، نوار قلب و متخصص) امنیت و سلامت را به خانه شما می‌آورد.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">منابع معتبر علمی</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4 text-muted-foreground">
              <li>American Heart Association (AHA): Acute Pulmonary Edema Management</li>
              <li>Mayo Clinic: Pulmonary edema: Symptoms, causes, and diagnosis</li>
              <li>The New England Journal of Medicine (NEJM): Heart Failure and Pulmonary Congestion</li>
              <li>Cleveland Clinic: Understanding Cardiogenic Pulmonary Edema</li>
            </ul>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default PulmonaryEdemaPage;
