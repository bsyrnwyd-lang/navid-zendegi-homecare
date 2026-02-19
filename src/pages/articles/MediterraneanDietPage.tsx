import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import mediterraneanDietImage from "@/assets/mediterranean-diet.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";
import cholesterolImage from "@/assets/cholesterol-test-article.jpg";
import bloodPressureImage from "@/assets/blood-pressure-article.jpg";

const MediterraneanDietPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "رژیم مدیترانه‌ای", url: "/articles/mediterranean-diet" }
  ];
  const relatedArticles = [
    {
      title: "دیابت چیست و چگونه کنترل می‌شود؟",
      description: "راهنمای جامع درباره دیابت، علائم، تشخیص و روش‌های کنترل قند خون",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "بیماری‌ها"
    },
    {
      title: "آزمایش چربی خون: راهنمای کامل",
      description: "همه چیز درباره آزمایش چربی خون، نحوه انجام و تفسیر نتایج",
      image: cholesterolImage,
      link: "/articles/cholesterol-test",
      category: "آزمایش‌ها"
    },
    {
      title: "فشار خون بالا: علائم، علل و درمان",
      description: "راهنمای کامل درباره فشار خون بالا و روش‌های کنترل آن",
      image: bloodPressureImage,
      link: "/articles/blood-pressure",
      category: "بیماری‌ها"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEOHead
        title="رژیم مدیترانه‌ای: بهترین رژیم غذایی برای قلب و دیابت | نوید زندگی"
        description="راهنمای کامل رژیم مدیترانه‌ای برای سلامت قلب، کنترل قند خون و دیابت. آشنایی با مواد غذایی مجاز، فواید علمی و نحوه اجرای این الگوی غذایی سالم."
        keywords="رژیم مدیترانه‌ای, رژیم غذایی قلبی, کنترل قند خون, دیابت, روغن زیتون, غذای سالم, کاهش وزن, سلامت قلب"
        canonical="https://navidzendegi.com/articles/mediterranean-diet"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی، متخصص قلب و عروق"
        ogImage={mediterraneanDietImage}
      />
      
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28 md:pb-12">
        <article className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              رژیم مدیترانه‌ای: بهترین رژیم غذایی برای قلب، کنترل قند خون و دیابت
            </h1>
            <p className="text-muted-foreground">
              نویسنده/ویراستار پزشکی: دکتر نیره مظاهری تهرانی، متخصص قلب و عروق
            </p>
          </div>

          <img
            src={mediterraneanDietImage}
            alt="رژیم مدیترانه‌ای - غذاهای سالم برای قلب و کنترل دیابت"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="lead text-xl mb-6">
              آیا به دنبال راهی مطمئن برای بهبود سلامت قلب و کنترل قند خون خود هستید؟ رژیم مدیترانه‌ای که ریشه در فرهنگ غذایی کشورهای اطراف دریای مدیترانه دارد، یک الگوی غذایی اثبات‌شده بر پایه غذاهای طبیعی و چربی‌های مفید است.
            </p>

            <p>
              این سبک زندگی غذایی در کاهش بیماری‌های قلبی-عروقی و بهبود دیابت نوع ۲ موثر است، همچنین به کاهش وزن و کاهش التهاب بدن کمک می‌کند. در ادامه، راهنمای کامل این رژیم را برای شما توضیح می‌دهیم.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۱. اجزای اصلی رژیم مدیترانه‌ای (چه بخوریم و چه نخوریم؟)
            </h2>
            
            <p>
              رژیم مدیترانه‌ای بر مصرف بهینه و متعادل منابع غذایی طبیعی تمرکز دارد. مصرف غذاهای فرآوری شده، قند مصنوعی و نوشابه در این برنامه غذایی باید به حداقل برسد یا کاملاً قطع شود.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              مواد غذایی که باید به صورت روزانه مصرف شوند:
            </h3>

            <ul className="list-disc pr-6 space-y-2">
              <li>
                <strong>غلات کامل:</strong> نان‌های سبوس‌دار، ماکارونی‌های سبوس‌دار، برنج قهوه‌ای و بلغور.
              </li>
              <li>
                <strong>میوه‌ها و سبزیجات:</strong> انواع سبزیجات تازه و فصلی، و مصرف میوه‌ها به عنوان دسر طبیعی.
              </li>
              <li>
                <strong>حبوبات و مغزها:</strong> عدس، لوبیا، نخود و انواع مغزهای روغنی (مانند گردو و بادام) که منبع پروتئین و چربی سالم هستند.
              </li>
              <li>
                <strong>چربی‌های مفید:</strong> روغن زیتون فرابکر به عنوان منبع اصلی چربی.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              مواد غذایی با مصرف هفتگی و محدود:
            </h3>

            <ul className="list-disc pr-6 space-y-2">
              <li>
                <strong>لبنیات:</strong> مصرف متعادل پنیر و ماست (ترجیحاً کم‌چرب).
              </li>
              <li>
                <strong>ماهی و مرغ:</strong> ماهی‌ها به دلیل داشتن اسیدهای چرب امگا ۳ باید حداقل دو بار در هفته مصرف شوند. گوشت مرغ با اولویت کمتری مجاز است.
              </li>
              <li>
                <strong>تخم‌مرغ:</strong> مصرف متعادل.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              مواد غذایی که باید بسیار محدود شوند:
            </h3>

            <ul className="list-disc pr-6 space-y-2">
              <li>
                <strong>گوشت قرمز و فرآوری‌شده:</strong> مصرف بسیار محدود (نهایتاً چند بار در ماه).
              </li>
              <li>
                <strong>قند و شیرینی‌جات مصنوعی:</strong> نوشابه‌ها، آبمیوه‌های صنعتی، کیک‌ها و شکلات‌های غیرطبیعی.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۲. فواید اثبات شده رژیم مدیترانه‌ای برای سلامتی
            </h2>

            <p>
              رژیم مدیترانه‌ای فراتر از یک روش کاهش وزن است؛ یک الگوی زندگی است که فواید بلندمدت برای سلامت دارد:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              کنترل دیابت نوع ۲ و قند خون
            </h3>

            <p>
              این رژیم به دلیل داشتن فیبر بالا (از طریق سبزیجات و غلات کامل) و چربی‌های سالم (مانند روغن زیتون)، به بهبود حساسیت به انسولین و تثبیت سطح قند خون کمک می‌کند. این امر، آن را به گزینه‌ای عالی برای افراد مبتلا به دیابت یا پیش‌دیابت تبدیل کرده است.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              سلامت قلب و عروق
            </h3>

            <p>
              چربی‌های غیراشباع موجود در روغن زیتون و امگا ۳ ماهی‌ها، به کاهش کلسترول بد (LDL) و کاهش فشار خون کمک می‌کنند، که مستقیماً در کاهش خطر بیماری‌های قلبی-عروقی موثر است.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              تأثیر بر کاهش وزن و التهاب
            </h3>

            <p>
              با جایگزینی چربی‌های ناسالم و غذاهای فرآوری شده با مواد طبیعی و فیبردار، این رژیم به کاهش وزن پایدار کمک می‌کند. همچنین، مواد آنتی‌اکسیدانی موجود در سبزیجات و میوه‌ها، التهاب مزمن بدن را کاهش می‌دهند.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              ۳. لینک‌های داخلی و راهنمای دریافت خدمات
            </h2>

            <p>
              توجه داشته باشید که تغییر رژیم غذایی، به خصوص برای بیماران دارای سوابق قلبی یا دیابت، باید حتماً تحت نظر متخصص انجام شود.
            </p>

            <div className="bg-primary/5 border-r-4 border-primary p-6 my-6 rounded">
              <p className="text-foreground">
                برای پیگیری دقیق و تنظیم یک رژیم غذایی کاملاً شخصی‌سازی شده متناسب با شرایط سلامتی شما، می‌توانید از خدمات <a href="/services/specialist-doctor" className="text-primary hover:underline font-semibold">ویزیت متخصص در منزل</a> یا <a href="/services/cardiology" className="text-primary hover:underline font-semibold">ویزیت پزشک متخصص قلب در منزل</a> نوید زندگی استفاده کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              اصول فرهنگی و سبک زندگی مدیترانه‌ای
            </h2>

            <p>
              فرهنگ مدیترانه‌ای علاوه بر غذا، بر کیفیت زندگی نیز تأکید دارد. اصول آن‌ها شامل غذا خوردن در کنار خانواده و با سرعت آرام است. این امر به هضم بهتر و کاهش استرس کمک می‌کند و یک عامل حمایتی مهم در دستیابی به سلامت کامل محسوب می‌شود.
            </p>

            <div className="bg-accent/10 border border-accent p-6 my-8 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                دعوت به اقدام
              </h3>
              <p className="text-foreground mb-4">
                آیا در اجرای این رژیم غذایی یا سایر برنامه‌های مراقبتی، نیاز به مشاوره یا مراقبت تخصصی دارید؟ کافیست با نوید زندگی تماس بگیرید تا تیم ما، شامل متخصصین تغذیه، پرستار و پزشک، شما را در منزل و در کمال آرامش پشتیبانی کند.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  تماس با ما
                </a>
                <a 
                  href="/services/cardiology" 
                  className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  خدمات قلب و عروق
                </a>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border-r-4 border-amber-500 p-6 my-6 rounded">
              <p className="text-sm text-foreground">
                <strong>⚠️ نکته مهم:</strong> قبل از شروع هر رژیم غذایی جدید، حتماً با پزشک یا متخصص تغذیه خود مشورت کنید، به ویژه اگر بیماری مزمنی دارید یا دارو مصرف می‌کنید.
              </p>
            </div>
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default MediterraneanDietPage;
