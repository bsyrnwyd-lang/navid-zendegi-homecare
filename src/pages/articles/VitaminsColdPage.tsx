import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import vitaminsColdImage from "@/assets/vitamins-cold-article.jpg";
import vitaminEImage from "@/assets/vitamin-e-article.jpg";
import generalDoctorImage from "@/assets/modern-general-doctor-home.jpg";
import medicalConsultationImage from "@/assets/medical-consultation-article.jpg";

const VitaminsColdPage = () => {
  const faqs = [
    {
      question: "آیا ویتامین C واقعاً از سرماخوردگی جلوگیری می‌کند؟",
      answer: "مطالعات نشان می‌دهند که مصرف روزانه منظم ویتامین C معمولاً جلوی گرفتن سرماخوردگی را در جمعیت عمومی نمی‌گیرد، اما می‌تواند کمی طول بیماری را کاهش دهد. در ورزشکاران و افرادی که تحت استرس فیزیکی شدید هستند، اثر محافظتی بیشتری دیده شده است."
    },
    {
      question: "ویتامین D چه نقشی در پیشگیری از عفونت‌های تنفسی دارد؟",
      answer: "شواهد نشان می‌دهند که تکمیل ویتامین D ممکن است در افرادی که کمبود دارند کمی خطر عفونت‌های تنفسی حاد را کاهش دهد. با این حال، در افراد با سطح نرمال، شواهد برای تجویز عمومی ضعیف‌تر است."
    },
    {
      question: "چه دوزی از ویتامین C برای سرماخوردگی مناسب است؟",
      answer: "در مطالعات مختلف، دوزهای 200-1000 میلی‌گرم روزانه برای پیشگیری و دوزهای بالاتر (تا چند گرم در روز) برای درمان بررسی شده‌اند. اما مصرف دوزهای خیلی بالا می‌تواند باعث عوارض گوارشی شود. حتماً با پزشک مشورت کنید."
    },
    {
      question: "آیا ویتامین E می‌تواند شیوع سرماخوردگی را کاهش دهد؟",
      answer: "شواهد محدود ولی امیدوارکننده‌ای وجود دارد که نشان می‌دهد ویتامین E ممکن است در برخی گروه‌ها مانند سالمندان شیوع سرماخوردگی را کاهش دهد. اما نیاز به مطالعات بیشتر وجود دارد."
    },
    {
      question: "آیا مصرف ویتامین A برای سرماخوردگی مفید است؟",
      answer: "خیر، شواهد کلی نشان می‌دهند که مصرف اضافی ویتامین A برای بهبود یا پیشگیری عفونت‌های تنفسی حاد مفید نیست و در برخی موارد حتی می‌تواند ریسک را افزایش دهد. مصرف خودسرانه توصیه نمی‌شود."
    },
    {
      question: "چه کسانی باید مکمل ویتامین مصرف کنند؟",
      answer: "افراد دارای کمبود مشخص، افرادی که تحت استرس فیزیکی شدید هستند، سالمندان، و افرادی با مشکلات جذب چربی ممکن است از مکمل‌ها سود ببرند. اما هر گونه مکمل‌درمانی باید تحت نظر پزشک انجام شود."
    }
  ];

  const relatedArticles = [
    {
      title: "ویتامین E؛ نقش، کاربردها و نکاتی که باید بدانیم",
      description: "راهنمای جامع ویتامین E: عملکرد، منابع غذایی و احتیاط‌های مصرف",
      image: vitaminEImage,
      link: "/articles/vitamin-e",
      category: "تغذیه"
    },
    {
      title: "ویزیت پزشک عمومی در منزل",
      description: "خدمات ویزیت پزشک عمومی در منزل به صورت شبانه‌روزی در تهران",
      image: generalDoctorImage,
      link: "/general-doctor",
      category: "خدمات پزشکی"
    },
    {
      title: "مشاوره پزشکی در منزل",
      description: "دریافت مشاوره تخصصی پزشکی در منزل با بهترین پزشکان",
      image: medicalConsultationImage,
      link: "/articles/medical-consultation",
      category: "خدمات پزشکی"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="تأثیرات علمی ویتامین‌ها در زمان سرماخوردگی - شواهد، دوزها و نکات ایمنی | نوید زندگی"
        description="بررسی کامل شواهد علمی درباره تأثیر ویتامین C، D، E و A در پیشگیری و درمان سرماخوردگی. دوزهای مناسب، نکات ایمنی و توصیه‌های کاربردی"
        keywords="ویتامین C سرماخوردگی، ویتامین D عفونت تنفسی، نقش ویتامین E، مکمل‌ها سرماخوردگی، ویزیت پزشک منزل، درمان سرماخوردگی"
        canonical="https://navidzendegi.ir/articles/vitamins-cold"
        ogType="article"
        ogImage={vitaminsColdImage}
      />
      <Header />
      <FloatingContact />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                  تأثیرات علمی ویتامین‌ها در زمان سرماخوردگی
                </h1>
                <p className="text-lg leading-relaxed mb-6">
                  سرماخوردگی معمولاً توسط ویروس‌های رینوویروس ایجاد می‌شود و درمان اختصاصی ضدویروسی برای آن وجود ندارد. در این مقاله شواهد علمی مربوط به مهم‌ترین ویتامین‌ها را بررسی می‌کنیم.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={vitaminsColdImage} 
                  alt="تأثیرات علمی ویتامین‌ها در سرماخوردگی - مکمل‌های ویتامین"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* مقدمه */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              مقدمه
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              سرماخوردگی معمولاً توسط انواع ویروس‌های رینوویروس و دیگر خانواده‌ها ایجاد می‌شود و درمان اختصاصی ضدویروسی برای آن وجود ندارد. بنابراین مردم اغلب از <Link to="/articles/vitamins-health" className="text-primary hover:underline">مکمل‌های ویتامینی</Link> برای کاهش طول یا شدت علائم استفاده می‌کنند.
            </p>
            <p className="text-lg leading-relaxed">
              در این مقاله شواهد علمی مربوط به مهم‌ترین ویتامین‌ها (ویتامین C، ویتامین D، ویتامین E، ویتامین A) را مرور می‌کنیم و توضیح می‌دهیم چه کسی ممکن است سود ببرد، چه دوزهایی بررسی شده و خطرات احتمالی چیست.
            </p>
          </div>
        </section>

        {/* ویتامین C */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ویتامین C — چه اثری دارد؟
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">خلاصه شواهد</h3>
            <p className="text-lg leading-relaxed mb-6">
              مطالعات و متاآنالیزها نشان می‌دهند که مصرف روزانه منظم ویتامین C (نه مصرف فقط بعد از شروع علائم) معمولاً جلوی گرفتن سرماخوردگی را در جمعیت عمومی نمی‌گیرد، اما می‌تواند کمی طول بیماری را کاهش دهد.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              کاهش متوسط چند ساعت تا یک روز در بالغین دیده شده است. در کودکان و در افرادی که تحت استرس فیزیکی شدید هستند — مانند ورزشکاران استقامتی یا سربازان در شرایط سخت — اثر بزرگ‌تری مشاهده شده است.
            </p>

            <h3 className="text-xl font-semibold mb-4">نکات عملی</h3>
            <p className="text-lg leading-relaxed mb-6">
              اگر می‌خواهید ویتامین C مصرف کنید، تکرار منظم (200-1000 میلی‌گرم روزانه) یا دوزهای بالاتر درمانی (در برخی مطالعات تا چند گرم در روز برای چند روز) بررسی شده‌اند.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/20 border-r-4 border-amber-500 p-6 rounded-lg mb-6">
              <p className="font-semibold text-amber-800 dark:text-amber-200">
                توجه: مصرف دوزهای خیلی بالا می‌تواند باعث عوارض گوارشی و در موارد خاص افزایش خطر سنگ کلیه شود. از تجاوز طولانی‌مدت به حد بالای مجاز بدون نظر پزشک پرهیز کنید.
              </p>
            </div>
          </div>
        </section>

        {/* ویتامین D */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ویتامین D — آیا از بروز یا شدت عفونت‌های تنفسی جلوگیری می‌کند؟
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">خلاصه شواهد</h3>
            <p className="text-lg leading-relaxed mb-6">
              نتایج مطالعات بر روی ویتامین D در پیشگیری از عفونت‌های تنفسی حاکی از نتایج مخلوط است. متاآنالیزهای بزرگ نشان داده‌اند که در مجموع، مکمل ویتامین D ممکن است کمی خطر وقوع عفونت‌های تنفسی حاد را کاهش دهد، به‌ویژه در افرادی که سطح اولیه ویتامین D آنها پایین است.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              دوزهای نگه‌دارنده منظم (نه دزهای بالا نامنظم) موثرتر بوده‌اند. با این‌حال، برخی متاآنالیزهای جدیدتر و بررسی‌های به‌روز بزرگ‌تر، اثر محافظتی قوی و یکنواختی را تأیید نمی‌کنند.
            </p>

            <h3 className="text-xl font-semibold mb-4">نکات عملی</h3>
            <p className="text-lg leading-relaxed">
              برای افرادی که کمبود ویتامین D دارند (مثلاً سالمندان، افراد کم‌تحرک یا کم‌قرار در معرض نور خورشید)، تکمیل کسری ویتامین D تحت نظر پزشک منطقی است و ممکن است مزیت محافظتی در برابر عفونت‌های تنفسی داشته باشد. برای بررسی سطح ویتامین D خود می‌توانید از خدمات <Link to="/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل</Link> استفاده کنید.
            </p>
          </div>
        </section>

        {/* ویتامین E */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ویتامین E — شواهد برای کاهش شیوع یا شدت؟
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              چند مطالعه نشان داده‌اند که در برخی گروه‌ها (مثلاً سالمندان ساکن خانه‌های مراقبت)، مکمل <Link to="/articles/vitamin-e" className="text-primary hover:underline">ویتامین E</Link> ممکن است شیوع سرماخوردگی را کاهش دهد یا برخی شاخص‌های ایمنی را بهبود بخشد.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              اما شواهد کلی محدود است و نتایج در جمعیت‌های مختلف یکسان نیست. به‌عنوان مثال یک کارآزمایی روی سالمندان نشان داد که 20٪ کاهش بروز سرماخوردگی وجود داشت، اما لازم است این نتایج در مطالعات وسیع‌تر تکرار شوند.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/20 border-r-4 border-blue-500 p-6 rounded-lg">
              <p className="font-semibold text-blue-800 dark:text-blue-200">
                نکته: ویتامین E در دوزهای معمول غذایی ایمن است، اما مصرف مکمل دوز بالا باید با احتیاط و تحت نظر پزشک (مخصوصاً در افرادی که داروهای رقیق‌کننده خون مصرف می‌کنند) باشد.
              </p>
            </div>
          </div>
        </section>

        {/* ویتامین A */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ویتامین A — نه برای درمان یا پیشگیری سرماخوردگی عمومی
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              شواهد کلی نشان می‌دهد که مصرف اضافی ویتامین A برای بهبود یا پیشگیری عفونت‌های تنفسی حاد در جمعیت‌های عمومی مفید نیست. در برخی مطالعات مصرف بیش از حد ویتامین A حتی با افزایش ریسک عفونت مرتبط بوده است.
            </p>
            <p className="text-lg leading-relaxed">
              بنابراین استفاده خودسرانه مکمل ویتامین A برای سرماخوردگی توصیه نمی‌شود، مگر در موارد نقص تغذیه‌ای مشخص یا تجویز پزشک.
            </p>
          </div>
        </section>

        {/* چه کسانی سود می‌برند */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چه کسانی ممکن است از مکمل ویتامین سود ببرند؟
            </h2>
            <div className="space-y-4 mr-6">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  افراد دارای کمبود مشخص (مثلاً کمبود ویتامین D یا C در آزمایش‌ها یا نشانه‌های بالینی)
                </p>
              </div>
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  افرادی که تحت استرس فیزیکی شدید یا قرارگرفتن در شرایط محیطی سخت هستند
                </p>
              </div>
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  سالمندان یا افرادی با سوءجذب چربی که ممکن است ویتامین E یا A آنها ناکافی باشد — اما هر گونه مکمل‌درمانی باید تحت نظر پزشک انجام شود
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* خطرات و احتیاطات */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              خطرات و احتیاطات
            </h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                مصرف بیش از حد ویتامین‌های محلول در چربی (A، D، E، K) می‌تواند تجمعی و خطرناک باشد. بنابراین از مصرف طولانی‌مدت دوزهای بالا بدون نظارت خودداری کنید.
              </p>
              <p className="text-lg leading-relaxed">
                برخی ویتامین‌ها/مکمل‌ها (مثلاً ویتامین E یا دوزهای بالای ویتامین C) ممکن است با داروهای رقیق‌کننده خون یا داروهای دیگر تداخل داشته باشند. قبل از شروع مکمل، با پزشک یا داروساز مشورت کنید.
              </p>
              <div className="bg-red-50 dark:bg-red-950/20 border-r-4 border-red-500 p-6 rounded-lg">
                <p className="font-semibold text-red-800 dark:text-red-200 mb-4">
                  هشدار مهم: مکمل‌ها نباید به‌عنوان جایگزین درمان حمایتی یا مراقبت پزشکی پذیرفته شوند.
                </p>
                <p className="text-red-800 dark:text-red-200">
                  درمان علامتی (استراحت، مایعات، تب‌برها در صورت نیاز) و در صورت بروز علائم هشدار (تب بالا، تنگی نفس، علائم شدید) مراجعه پزشکی ضروری است.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* جمع‌بندی */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              جمع‌بندی اجرایی
            </h2>
            <div className="space-y-4 mr-6 mb-8">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>ویتامین C:</strong> برای جمعیت عمومی جلوی سرماخوردگی را نمی‌گیرد اما می‌تواند مدت بیماری را کمی کوتاه‌تر کند. در افراد خاص (ورزشکاران تحت فشار) اثر محافظتی بیشتر دیده شده است
                </p>
              </div>
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>ویتامین D:</strong> ممکن است در کسانی که کمبود دارند تا حدی از عفونت‌های تنفسی جلوگیری کند، ولی شواهد کلی مخلوط است
                </p>
              </div>
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>ویتامین E:</strong> شواهد محدود ولی نشانگر احتمال کاهش بروز در برخی گروه‌ها (مثلاً سالمندان) است—نیاز به شواهد بیشتر وجود دارد
                </p>
              </div>
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>ویتامین A:</strong> به‌طور کلی برای سرماخوردگی مفید نیست و مصرف بیش از حد ممکن است مضر باشد
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">اقدام عملی</h3>
              <p className="text-lg leading-relaxed mb-4">
                پیش از شروع هر مکملی، مخصوصاً در صورت داروهای زمینه‌ای یا بیماری‌های مزمن، با پزشک مشورت کنید.
              </p>
              <p className="text-lg leading-relaxed">
                خدمات <Link to="/general-doctor" className="text-primary hover:underline font-semibold">ویزیت پزشک در منزل</Link> در نوید زندگی می‌تواند کمک کند نیاز شما به تست ویتامین را ارزیابی کند و مکمل مناسب را تحت نظر پزشکی تجویز یا رد کند.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                برای مشاوره و ویزیت پزشک با شماره <a href="tel:09386117912" className="text-primary hover:underline font-bold">09386117912</a> تماس بگیرید.
              </p>
            </div>
          </div>
        </section>

        {/* منابع علمی */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              منابع علمی
            </h2>
            <div className="space-y-4 text-sm md:text-base">
              <p className="leading-relaxed">
                1. Cochrane Review: Vitamin C for preventing and treating the common cold. Cochrane Library.
              </p>
              <p className="leading-relaxed">
                2. Hemilä H. Vitamin C for preventing and treating the common cold. PubMed / Systematic reviews. 2013.
              </p>
              <p className="leading-relaxed">
                3. NIH — Office of Dietary Supplements. Vitamin C — Health Professional Fact Sheet. (اطلاعات در مورد دوز، عوارض، تداخلات)
              </p>
              <p className="leading-relaxed">
                4. Martineau AR, et al. Vitamin D supplementation to prevent acute respiratory tract infections: systematic review and meta-analysis of individual participant data. BMJ (2017).
              </p>
              <p className="leading-relaxed">
                5. Martineau AR (update) et al. Vitamin D supplementation and ARIs — later analyses & updates. PubMed (2019) / Lancet updates 2024. (مطالعات متا-آنالیز و بررسی‌های به‌روز)
              </p>
              <p className="leading-relaxed">
                6. Cochrane Review: Zinc for the prevention and treatment of the common cold. (برای مرجع در مورد روی؛ مطالعه‌های مرتبط)
              </p>
              <p className="leading-relaxed">
                7. Meydani SN, et al. Vitamin E and respiratory infections among the elderly. PMC / The American Journal of Clinical Nutrition (2004).
              </p>
              <p className="leading-relaxed">
                8. Cheng X, et al. Oral vitamin A supplements to prevent acute upper respiratory infections. Cochrane Review / PMC (2023).
              </p>
              <p className="leading-relaxed">
                9. Bucher et al. Vitamin C in the Prevention and Treatment of the Common Cold — review article. PMC (2016).
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Related Articles */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </section>

        {/* Pricing Info */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <PricingInfo />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VitaminsColdPage;
