import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import ArticleLayout from "@/components/ArticleLayout";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import weightLossImage from "@/assets/weight-loss-injection-article.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";
import mediterraneanDietImage from "@/assets/mediterranean-diet.jpg";
import greenTeaWeightLossImage from "@/assets/green-tea-weight-loss-article.jpg";

const WeightLossInjectionsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "آمپول‌های لاغری", url: "/articles/weight-loss-injections" }
  ];

  const faqs = [
    {
      question: "آمپول‌های لاغری چگونه کار می‌کنند؟",
      answer: "این داروها با تقلید از هورمون GLP-1، احساس سیری را افزایش داده، اشتها را کاهش می‌دهند و تخلیه معده را کند می‌کنند. در نتیجه فرد کالری کمتری دریافت می‌کند."
    },
    {
      question: "چقدر می‌توان با آمپول‌های لاغری وزن کم کرد؟",
      answer: "با سماگلوتاید (Wegovy) حدود ۱۵ تا ۱۷ درصد و با لیراگلوتاید (Saxenda) حدود ۵ تا ۱۰ درصد وزن اولیه در طول درمان کاهش می‌یابد."
    },
    {
      question: "عوارض جانبی آمپول‌های لاغری چیست؟",
      answer: "شایع‌ترین عوارض شامل تهوع، استفراغ، اسهال یا یبوست و درد شکمی است. عوارض نادر شامل پانکراتیت و مشکلات کیسه صفرا می‌شود."
    },
    {
      question: "آیا هر کسی می‌تواند از آمپول لاغری استفاده کند؟",
      answer: "خیر، این داروها فقط برای افراد با BMI ۳۰ و بالاتر یا BMI ۲۷ و بالاتر همراه با بیماری‌های مرتبط با چاقی (مانند دیابت یا فشار خون) تجویز می‌شوند."
    },
    {
      question: "آیا بعد از قطع آمپول لاغری وزن برمی‌گردد؟",
      answer: "در صورت عدم تغییر سبک زندگی، امکان بازگشت وزن وجود دارد. این داروها باید همراه با رژیم غذایی سالم و فعالیت بدنی منظم استفاده شوند."
    }
  ];

  const relatedArticles = [
    {
      title: "دیابت نوع ۲: علل، علائم و درمان",
      description: "آشنایی با دیابت نوع ۲ که آمپول‌های GLP-1 ابتدا برای درمان آن توسعه یافتند.",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "سلامت عمومی"
    },
    {
      title: "رژیم غذایی مدیترانه‌ای",
      description: "یکی از بهترین رژیم‌های غذایی برای کاهش وزن سالم و پایدار.",
      image: mediterraneanDietImage,
      link: "/articles/mediterranean-diet",
      category: "تغذیه"
    },
    {
      title: "چای سبز و کاهش وزن",
      description: "نقش چای سبز در افزایش متابولیسم و کمک به کاهش وزن.",
      image: greenTeaWeightLossImage,
      link: "/articles/green-tea-weight-loss",
      category: "تغذیه"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آمپول‌های لاغری: سماگلوتاید و لیراگلوتاید (Wegovy, Ozempic, Saxenda) | نوید زندگی"
        description="بررسی علمی آمپول‌های لاغری GLP-1 شامل سماگلوتاید و لیراگلوتاید، مکانیسم اثر، اثربخشی در کاهش وزن، عوارض جانبی و ملاحظات درمانی"
        keywords="آمپول لاغری, سماگلوتاید, لیراگلوتاید, Wegovy, Ozempic, Saxenda, GLP-1, کاهش وزن, چاقی"
        canonical="https://navidzendegi.com/articles/weight-loss-injections"
        ogType="article"
        publishedTime="2024-12-15"
        modifiedTime="2024-12-15"
      />
      <ArticleSchema
        title="آمپول‌های لاغری: بررسی علمی آگونیست‌های گیرنده GLP-1"
        description="بررسی علمی آمپول‌های لاغری GLP-1 شامل سماگلوتاید و لیراگلوتاید"
        publishedTime="2024-12-15"
        modifiedTime="2024-12-15"
        image={weightLossImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            آمپول‌های لاغری: بررسی علمی آگونیست‌های گیرنده GLP-1 (سماگلوتاید و لیراگلوتاید)
          </h1>

          <img 
            src={weightLossImage} 
            alt="آمپول تزریقی لاغری" 
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="lead text-xl mb-6">
              <strong>آمپول‌های لاغری</strong> که در سال‌های اخیر به شهرت رسیده‌اند، در واقع داروهایی تزریقی هستند که عمدتاً از دسته <strong>آگونیست‌های گیرنده پپتید شبه گلوکاگون ۱ (GLP-1 Receptor Agonists)</strong> به شمار می‌روند. این داروها در اصل برای درمان <a href="/articles/diabetes" className="text-primary hover:underline">دیابت نوع ۲</a> توسعه یافتند، اما به دلیل اثرات قابل توجه خود بر کاهش وزن، برای مدیریت <strong>چاقی و اضافه وزن</strong> نیز تأییدیه دریافت کرده‌اند.
            </p>

            <p>
              شایع‌ترین داروهای این دسته شامل <strong>سماگلوتاید (Semaglutide با نام تجاری Wegovy یا Ozempic)</strong> و <strong>لیراگلوتاید (Liraglutide با نام تجاری Saxenda)</strong> هستند.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 rounded-lg mb-6">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                ⚠️ هشدار: مصرف خودسرانه آمپول‌های لاغری بدون تجویز و نظارت پزشک متخصص توصیه نمی‌شود و می‌تواند عوارض جدی داشته باشد.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">۱. مکانیسم اثر آگونیست‌های GLP-1</h2>
            
            <p>
              GLP-1 یک هورمون طبیعی (اینکرتین) است که در روده پس از غذا خوردن آزاد می‌شود. آمپول‌های لاغری با تقلید از عملکرد این هورمون، اثرات متعددی بر بدن می‌گذارند که منجر به کاهش وزن می‌شود:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">الف) کاهش اشتها و افزایش سیری</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>عملکرد مغزی:</strong> این داروها با فعال کردن گیرنده‌های GLP-1 در <strong>هیپوتالاموس</strong> (مرکز تنظیم اشتها در مغز)، احساس سیری را افزایش داده و اشتها را به شدت کاهش می‌دهند. این مکانیسم باعث کاهش قابل توجه کالری دریافتی روزانه می‌شود.</li>
              <li><strong>تخلیه کندتر معده:</strong> GLP-1 باعث <strong>تأخیر در تخلیه محتویات معده</strong> می‌شود. این فرآیند باعث می‌شود فرد برای مدت طولانی‌تری احساس پری و سیری کند.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">ب) اثرات متابولیک (در بیماران دیابتی)</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>افزایش ترشح انسولین:</strong> این داروها ترشح انسولین را از لوزالمعده به صورت وابسته به گلوکز تحریک می‌کنند (فقط زمانی که قند خون بالا باشد، انسولین ترشح می‌شود).</li>
              <li><strong>کاهش ترشح گلوکاگون:</strong> تولید هورمون گلوکاگون (که قند خون را افزایش می‌دهد) را مهار می‌کنند.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">۲. اثربخشی در کاهش وزن (مطالعات بالینی)</h2>
            
            <p>
              اثربخشی این داروها در کارآزمایی‌های بالینی بزرگ، به ویژه در مقایسه با مداخلات رفتاری و رژیم غذایی، چشمگیر بوده است:
            </p>

            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>سماگلوتاید (Wegovy):</strong> در دوزهای بالاتر (مناسب برای چاقی)، مطالعات نشان داده‌اند که در طول یک دوره ۶۸ هفته‌ای، میانگین کاهش وزن بدن حدود <strong>۱۵ تا ۱۷ درصد</strong> وزن اولیه بیمار بوده است.</li>
              <li><strong>لیراگلوتاید (Saxenda):</strong> مطالعات نشان داده‌اند که این دارو می‌تواند منجر به کاهش وزن حدود <strong>۵ تا ۱۰ درصد</strong> وزن اولیه شود.</li>
            </ul>

            <p>
              این میزان کاهش وزن اغلب برای بهبود شاخص‌های سلامتی (مانند <a href="/articles/blood-pressure" className="text-primary hover:underline">فشار خون</a>، قند خون و سطح چربی) کافی تلقی می‌شود.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">۳. نحوه تجویز و عوارض جانبی</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">نحوه تجویز</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li>این داروها به صورت <strong>تزریق زیرجلدی</strong> (Subcutaneous Injection) تجویز می‌شوند.</li>
              <li><strong>لیراگلوتاید</strong> به صورت روزانه و <strong>سماگلوتاید</strong> (برای مدیریت وزن) معمولاً به صورت هفتگی تزریق می‌شود.</li>
              <li>دوز دارو به تدریج افزایش می‌یابد تا عوارض جانبی گوارشی به حداقل برسد.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">عوارض جانبی شایع</h3>
            <p>شایع‌ترین عوارض جانبی مربوط به دستگاه گوارش هستند و با گذشت زمان و تثبیت دوز کاهش می‌یابند:</p>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>تهوع (شایع‌ترین)</strong></li>
              <li>استفراغ</li>
              <li>اسهال یا یبوست</li>
              <li>درد شکمی</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">عوارض جانبی جدی (نادر)</h3>
            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>پانکراتیت (التهاب لوزالمعده)</strong></li>
              <li>مشکلات کیسه صفرا</li>
              <li><strong>تومورهای سلول C تیروئید:</strong> این داروها در افرادی که سابقه شخصی یا خانوادگی سرطان تیروئید مدولاری (MTC) یا سندرم MEN 2 دارند، منع مصرف دارند.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">۴. ملاحظات مهم درمانی و نیاز به نظارت پزشکی</h2>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 rounded-lg mb-6">
              <p className="text-red-800 dark:text-red-200 font-bold">
                آمپول‌های لاغری نباید بدون نظارت پزشک مصرف شوند.
              </p>
            </div>

            <ul className="list-disc pr-6 mb-4 space-y-2">
              <li><strong>تشخیص و ارزیابی:</strong> تجویز این داروها مستلزم ارزیابی دقیق توسط پزشک متخصص غدد یا <a href="/services/internal" className="text-primary hover:underline">متخصص داخلی</a> است تا اطمینان حاصل شود بیمار کاندید مناسبی است (افراد با شاخص توده بدنی (BMI) ۳۰ و بالاتر، یا BMI ۲۷ و بالاتر به همراه حداقل یک بیماری مرتبط با وزن مانند فشار خون یا دیابت).</li>
              <li><strong>تغییر سبک زندگی:</strong> این آمپول‌ها <strong>جایگزین</strong> <a href="/articles/mediterranean-diet" className="text-primary hover:underline">رژیم غذایی سالم</a> و فعالیت بدنی نیستند. بهترین نتایج کاهش وزن زمانی حاصل می‌شود که دارو با تغییرات پایدار در سبک زندگی ترکیب شود.</li>
              <li><strong>پایش مداوم:</strong> بیمارانی که از این داروها استفاده می‌کنند باید به طور مداوم برای عوارض جانبی، به ویژه مشکلات گوارشی و علائم پانکراتیت، تحت نظر پزشک باشند.</li>
            </ul>

            <p>
              در صورت تمایل به شروع یا پایش درمان با آمپول‌های لاغری در محیط منزل و با نظارت کامل متخصص، می‌توانید از خدمات <a href="/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل تهران</a> بهره‌مند شوید.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">منابع (References)</h3>
            <ul className="list-disc pr-6 mb-4 space-y-1 text-sm text-muted-foreground">
              <li>[1] Semaglutide for Chronic Weight Management. The New England Journal of Medicine (NEJM).</li>
              <li>[2] GLP-1 receptor agonists and the central control of appetite. Nature Reviews Endocrinology.</li>
              <li>[3] Liraglutide and Cardiovascular Outcomes in Type 2 Diabetes. The New England Journal of Medicine (NEJM).</li>
              <li>[4] Gastrointestinal side effects of GLP-1 receptor agonists. Current Opinion in Endocrinology, Diabetes and Obesity.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-3">نیاز به مشاوره پزشکی دارید؟</h3>
            <p className="mb-4">
              برای ارزیابی کاندیداتوری، تجویز و پایش درمان با آمپول‌های لاغری در منزل با متخصصین ما تماس بگیرید.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              تماس: ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </div>
        </article>

        <div className="mt-12">
          <FAQSection faqs={faqs} />
        </div>

        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default WeightLossInjectionsPage;
