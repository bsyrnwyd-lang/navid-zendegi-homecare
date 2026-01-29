import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import heartValveDiseaseImage from "@/assets/heart-valve-disease.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import mitralValveImage from "@/assets/mitral-valve-replacement.jpg";

const HeartValveDiseasePage = () => {
  const publishDate = "2025-01-29";

  const faqs = [
    {
      question: "علائم بیماری دریچه‌ای قلب چیست؟",
      answer: "تنگی نفس (به‌ویژه هنگام فعالیت یا دراز کشیدن)، خستگی مفرط، تپش قلب و سرگیجه، و ورم مچ پا و شکم از علائم شایع هستند."
    },
    {
      question: "تنگی دریچه با نارسایی دریچه چه تفاوتی دارد؟",
      answer: "در تنگی دریچه (Stenosis)، دریچه به خوبی باز نمی‌شود و خون به سختی عبور می‌کند. در نارسایی دریچه (Regurgitation)، دریچه به خوبی بسته نمی‌شود و خون به عقب نشت می‌کند."
    },
    {
      question: "آیا اکو در منزل برای بررسی دریچه‌های قلب کافی است؟",
      answer: "بله. اکوکاردیوگرافی استاندارد طلایی تشخیص مشکلات دریچه‌ای است و دستگاه‌های پورتابل نوید زندگی با دقت بالا میزان تنگی یا گشادی دریچه، فشار داخل حفرات و اندازه قلب را اندازه‌گیری می‌کنند."
    },
    {
      question: "پس از تعویض دریچه قلب چه مراقبت‌هایی لازم است؟",
      answer: "پیشگیری از عفونت (به‌ویژه عفونت‌های دندانی و پوستی)، تنظیم منظم وارفارین و کنترل INR، و اکو دوره‌ای برای بررسی عملکرد دریچه مصنوعی ضروری است."
    },
    {
      question: "چه زمانی باید فوری با پزشک تماس گرفت؟",
      answer: "در صورت غش کردن ناگهانی، درد قفسه سینه که به گلو یا گوش می‌زند، یا تنگی نفس شدید که اجازه صحبت کردن نمی‌دهد، باید فوراً درخواست ویزیت پزشک در منزل بدهید."
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
      title: "وارفارین؛ راهنمای کامل مصرف",
      description: "همه چیز درباره داروی ضدانعقاد وارفارین و تنظیم INR",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "دارو"
    },
    {
      title: "تعویض دریچه میترال؛ راهنمای کامل",
      description: "همه چیز درباره جراحی تعویض دریچه میترال و مراقبت‌های پس از آن",
      image: mitralValveImage,
      link: "/articles/mitral-valve-replacement",
      category: "قلب و عروق"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بیماری‌های دریچه‌ای قلب", url: "/articles/heart-valve-disease" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="بیماری‌های دریچه‌ای قلب؛ تشخیص و مراقبت تخصصی در منزل | نوید زندگی"
        description="راهنمای کامل بیماری‌های دریچه‌ای قلب: تنگی و نارسایی دریچه، علائم هشداردهنده، تشخیص با اکو در منزل و مراقبت از دریچه‌های مصنوعی."
        keywords="تنگی دریچه آئورت، نارسایی دریچه میترال، اکو در منزل، بیماری دریچه قلب، تعویض دریچه قلب، ویزیت متخصص قلب در منزل"
        canonical="https://navidzendegi.com/articles/heart-valve-disease"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      <ArticleSchema
        title="بیماری‌های دریچه‌ای قلب؛ از تشخیص تا مراقبت‌های تخصصی در منزل"
        description="راهنمای کامل بیماری‌های دریچه‌ای قلب و پایش آن‌ها در منزل"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={heartValveDiseaseImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              بیماری‌های دریچه‌ای قلب؛ از تشخیص تا مراقبت‌های تخصصی در منزل
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۱۴۰۳/۱۱/۱۰</p>
          </header>

          <img
            src={heartValveDiseaseImage}
            alt="بیماری‌های دریچه‌ای قلب - تشخیص و مراقبت در منزل"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
            <p className="text-lg mb-6">
              قلب دارای چهار دریچه اصلی (میترال، آئورت، تری‌کاسپید و ریوی) است که وظیفه آن‌ها یک‌طرفه نگه داشتن جریان خون است. هرگونه اختلال در باز یا بسته شدن این دریچه‌ها، قلب را مجبور می‌کند تا برای جبران، چندین برابر سخت‌تر کار کند. بیماری‌های دریچه‌ای اغلب به تدریج پیشرفت می‌کنند و بسیاری از بیماران زمانی متوجه مشکل می‌شوند که قلب دچار خستگی شدید شده است.
            </p>

            <p className="mb-6">
              در مرکز <a href="/" className="text-primary hover:underline">نوید زندگی</a>، ما معتقدیم که مدیریت بیماری‌های دریچه‌ای نیازمند پایش دقیق و مستمر است تا از نیاز به جراحی‌های سنگین جلوگیری شود.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
              <p className="text-destructive font-semibold">
                ⚠️ هشدار: هرگز داروهای قلبی را خودسرانه قطع یا تغییر ندهید. تغییر دوز داروها باید تحت نظر پزشک متخصص انجام شود.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">انواع اختلالات دریچه‌ای که باید بشناسید</h2>
            <p className="mb-4">
              اختلالات دریچه‌ای به دو دسته کلی تقسیم می‌شوند:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>تنگی دریچه (Stenosis):</strong> دریچه به خوبی باز نمی‌شود و خون به سختی از آن عبور می‌کند (مثل تنگی دریچه آئورت که در سالمندان شایع است)</li>
              <li><strong>نارسایی یا گشادی دریچه (Regurgitation):</strong> دریچه به خوبی بسته نمی‌شود و خون به عقب نشت می‌کند (مثل <a href="/articles/mitral-valve-replacement" className="text-primary hover:underline">نارسایی دریچه میترال</a>)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">علائم هشداردهنده مشکلات دریچه‌ای</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>تنگی نفس:</strong> به‌ویژه هنگام فعالیت بدنی یا دراز کشیدن (<a href="/articles/pulmonary-edema" className="text-primary hover:underline">ادم ریوی</a> می‌تواند عارضه آن باشد)</li>
              <li><strong>خستگی مفرط:</strong> کاهش توانایی انجام کارهای روزمره</li>
              <li><strong><a href="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب</a> و سرگیجه:</strong> احساس نامنظمی در ضربان یا سیاهی رفتن چشم</li>
              <li><strong>ورم مچ پا و شکم:</strong> نشانه پس‌زدن خون و درگیری کبد و ریه</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">چرا پایش دریچه‌ها در منزل «نوید زندگی» اهمیت دارد؟</h2>
            <p className="mb-6">
              بیمارانی که دچار مشکلات دریچه‌ای هستند، اغلب توان بدنی کمی دارند. پیاده‌روی در راهروهای بیمارستان یا ایستادن در صف انتظار مطب، می‌تواند باعث تنگی نفس شدید و فشار به قلب آن‌ها شود.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۱. اکوکاردیوگرافی (اکو) در منزل؛ استاندارد طلایی تشخیص</h3>
            <p className="mb-4">
              تنها راه قطعی برای بررسی وضعیت دریچه‌ها، <a href="/articles/echo-home" className="text-primary hover:underline">اکو</a> است. متخصصین ما با دستگاه اکو پورتابل در منزل، موارد زیر را با دقت میلی‌متری اندازه می‌گیرند:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li>میزان تنگی یا گشادی دریچه</li>
              <li>فشار داخل حفرات قلب</li>
              <li>اندازه سایز قلب (بزرگ شدن قلب ناشی از فشار دریچه)</li>
            </ul>
            <p className="mb-6">
              این اطلاعات برای تصمیم‌گیری درباره ادامه درمان دارویی یا نیاز به جراحی حیاتی است.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۲. نوار قلب (ECG) در منزل؛ پایش ریتم</h3>
            <p className="mb-6">
              بیماری‌های دریچه‌ای اغلب باعث ایجاد بی‌نظمی در ضربان قلب (مانند <a href="/articles/af-stroke-risk" className="text-primary hover:underline">آریتمی AF</a>) می‌شوند. انجام <a href="/articles/ecg-home" className="text-primary hover:underline">نوار قلب در منزل</a> به صورت دوره‌ای، از بروز سکته‌های مغزی ناشی از این آریتمی‌ها جلوگیری می‌کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۳. ویزیت متخصص قلب و تنظیم داروهای پیشگیری</h3>
            <p className="mb-6">
              پزشک متخصص نوید زندگی در <a href="/services/internal-medicine" className="text-primary hover:underline">منزل</a>، داروهایی مثل مدرها (برای کاهش بار قلب) یا <a href="/articles/warfarin" className="text-primary hover:underline">داروهای ضدانعقاد</a> (برای جلوگیری از لخته روی دریچه) را تجویز و تنظیم می‌کند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مراقبت از دریچه‌های مصنوعی در خانه</h2>
            <p className="mb-4">
              اگر قبلاً جراحی <a href="/articles/mitral-valve-replacement" className="text-primary hover:underline">تعویض دریچه</a> انجام داده‌اید، مراقبت شما حساس‌تر است:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>پیشگیری از عفونت:</strong> هرگونه عفونت دندانی یا پوستی می‌تواند به دریچه قلب سرایت کند (اندوکاردیت)</li>
              <li><strong>تنظیم وارفارین:</strong> تنظیم <a href="/articles/inr-monitoring" className="text-primary hover:underline">INR</a> برای دارندگان دریچه مصنوعی حیاتی است که تیم ما با آزمایش خون در منزل آن را مدیریت می‌کند</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">چه زمانی وضعیت بحرانی است؟</h2>
            <p className="mb-4">
              در صورت مشاهده این موارد، معطل نکنید و درخواست ویزیت متخصص در منزل بدهید:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li>غش کردن ناگهانی (سنکوپ)</li>
              <li>درد قفسه سینه که به گلو یا گوش می‌زند</li>
              <li>افزایش ناگهانی تنگی نفس به طوری که بیمار نتواند چند کلمه صحبت کند</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/10 rounded-lg p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                پایش تخصصی دریچه‌های قلب در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای رزرو نوبت اکو، نوار قلب یا ویزیت متخصص قلب در منزل، همین حالا تماس بگیرید:
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس: 09386117912
              </a>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نتیجه‌گیری</h2>
            <p className="mb-6">
              بیماری دریچه‌ای قلب مسیری طولانی است که با نظارت دقیق می‌تواند سال‌ها بدون مشکل سپری شود. مرکز نوید زندگی با آوردن پیشرفته‌ترین تجهیزات اکو و نوار قلب به منزل، این اطمینان را به شما می‌دهد که دریچه‌های قلب شما یا عزیزانتان تحت دقیق‌ترین نظارت‌های پزشکی قرار دارد.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">منابع معتبر علمی</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4 text-muted-foreground">
              <li>American College of Cardiology (ACC): Management of Patients With Valvular Heart Disease</li>
              <li>Mayo Clinic: Valvular heart disease - Diagnosis and treatment</li>
              <li>European Society of Cardiology (ESC): Guidelines on the management of valvular heart disease</li>
            </ul>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default HeartValveDiseasePage;
