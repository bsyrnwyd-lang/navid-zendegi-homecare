import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import vitaminEImage from "@/assets/vitamin-e-article.jpg";
import mediterraneanDietImage from "@/assets/mediterranean-diet.jpg";
import medicalConsultationImage from "@/assets/medical-consultation-article.jpg";
import generalDoctorImage from "@/assets/modern-general-doctor-home.jpg";

const VitaminEPage = () => {
  const faqs = [
    {
      question: "ویتامین E چیست و چه نقشی در بدن دارد؟",
      answer: "ویتامین E یک ویتامین محلول در چربی و یکی از مهم‌ترین آنتی‌اکسیدان‌های بدن است که در مقابله با رادیکال‌های آزاد نقش دارد. این ویتامین به حفظ سلامت سلولی، تقویت سیستم ایمنی و حفظ سلامت رگ‌های خونی کمک می‌کند."
    },
    {
      question: "منابع غذایی غنی از ویتامین E کدامند؟",
      answer: "منابع اصلی ویتامین E شامل روغن‌های گیاهی (روغن آفتابگردان، روغن جوانه گندم)، مغزها و دانه‌ها (بادام، تخم آفتابگردان، گردو)، سبزیجات با برگ سبز و آووکادو هستند."
    },
    {
      question: "نیاز روزانه بدن به ویتامین E چقدر است؟",
      answer: "مقدار مصرف توصیه‌شده برای بزرگسالان (از سن ۱۴ سال به بالا) حدود ۱۵ میلی‌گرم یا حدود ۲۲ واحد بین‌المللی در روز است. برای زنان باردار یا شیرده ممکن است کمی بیشتر توصیه شود."
    },
    {
      question: "علائم کمبود ویتامین E چیست؟",
      answer: "علائم کمبود ویتامین E شامل ضعف عضلانی، بی‌حسی یا سوزن‌سوزن شدن اندام‌ها، ناهماهنگی حرکتی (آتاکسی) و ضعیف شدن سیستم ایمنی است. کمبود این ویتامین معمولاً ناشی از مشکلات جذب چربی یا بیماری‌های خاص است."
    },
    {
      question: "آیا مصرف زیاد مکمل ویتامین E خطرناک است؟",
      answer: "بله، مصرف مکمل‌های پر‌دوز ویتامین E می‌تواند خطراتی داشته باشد، از جمله افزایش خطر خونریزی در افرادی که داروهای رقیق‌کننده خون مصرف می‌کنند. همیشه قبل از مصرف مکمل با پزشک مشورت کنید."
    }
  ];

  const relatedArticles = [
    {
      title: "نقش ویتامین‌ها در سلامتی",
      description: "اطلاعات کامل درباره انواع ویتامین‌ها و نقش آنها در سلامت بدن",
      image: mediterraneanDietImage,
      link: "/articles/vitamins-health",
      category: "تغذیه"
    },
    {
      title: "مشاوره پزشکی در منزل",
      description: "دریافت مشاوره تخصصی پزشکی در منزل با بهترین پزشکان",
      image: medicalConsultationImage,
      link: "/articles/medical-consultation",
      category: "خدمات پزشکی"
    },
    {
      title: "ویزیت پزشک عمومی در منزل",
      description: "خدمات ویزیت پزشک عمومی در منزل به صورت شبانه‌روزی در تهران",
      image: generalDoctorImage,
      link: "/general-doctor",
      category: "خدمات پزشکی"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویتامین E: نقش، کاربردها و نکاتی که باید بدانیم | نوید زندگی"
        description="همه چیز درباره ویتامین E: عملکرد، منابع غذایی، نیاز روزانه، علائم کمبود و احتیاط‌های مصرف مکمل. راهنمای کامل از نوید زندگی"
        keywords="ویتامین E، آنتی اکسیدان، منابع ویتامین E، کمبود ویتامین E، مکمل ویتامین E، آلفا توکوفرول، فواید ویتامین E"
        canonical="https://navidzendegi.ir/articles/vitamin-e"
        ogType="article"
        ogImage={vitaminEImage}
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
                  ویتامین E؛ نقش، کاربردها و نکاتی که باید بدانیم
                </h1>
                <p className="text-lg leading-relaxed mb-6">
                  ویتامین E یک ویتامین محلول در چربی است که از طریق غذا باید وارد بدن شود. این ویتامین یکی از مهم‌ترین آنتی‌اکسیدان‌های بدن محسوب می‌شود و در مقابله با رادیکال‌های آزاد نقش حیاتی دارد.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={vitaminEImage} 
                  alt="ویتامین E - منابع غذایی شامل بادام، آووکادو و سبزیجات"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* معرفی کلی */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              معرفی کلی
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              ویتامین E یک ویتامین محلول در چربی است که از طریق غذا باید وارد بدن شود، چون بدن آن را به‌صورت مؤثر تولید نمی‌کند. شکل فعال و پرکاربرد آن <strong>α-توکوفرول (alpha-tocopherol)</strong> است.
            </p>
            <p className="text-lg leading-relaxed">
              این ویتامین یکی از مهم‌ترین آنتی‌اکسیدان‌های بدن محسوب می‌شود و در مقابله با رادیکال‌های آزاد که می‌توانند به سلول‌ها، بافت‌ها و اندام‌ها آسیب بزنند نقش دارد.
            </p>
          </div>
        </section>

        {/* عملکردها و فواید */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              عملکردها و فواید ویتامین E
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">عملکرد اصلی</h3>
            <p className="text-lg leading-relaxed mb-6">
              ویتامین E با محافظت از غشای سلول‌ها و لیپیدهای غشایی در مقابل اکسیداسیون، به حفظ سلامت سلولی کمک می‌کند. به بهبود عملکرد سیستم ایمنی کمک می‌کند و در حفظ سلامت رگ‌ها و جلوگیری از لخته شدن خون نقش دارد.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              در برخی مطالعات دیده شده که این ویتامین می‌تواند با کاهش التهاب، اثرات مفیدی بر سلامت قلبی-عروقی داشته باشد. برای اطلاعات بیشتر درباره خدمات قلب و عروق، می‌توانید به صفحه <Link to="/cardiology" className="text-primary hover:underline">ویزیت متخصص قلب در منزل</Link> مراجعه کنید.
            </p>

            <h3 className="text-xl font-semibold mb-4">کاربردها در سلامت</h3>
            <div className="space-y-4 mr-6">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  تأثیر مثبت بر سلامت پوست، چشم و اعصاب
                </p>
              </div>
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  به عنوان مکمل در موارد نادری که مشکلات جذب چربی یا بیماری‌های روده‌ای وجود دارد
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* منابع غذایی و نیاز روزانه */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              منابع غذایی و نیاز روزانه
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">منابع غذایی</h3>
            <p className="text-lg leading-relaxed mb-4">
              غذاهایی که دارای میزان قابل توجهی ویتامین E هستند عبارت‌اند از:
            </p>
            <div className="space-y-4 mr-6 mb-8">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>روغن‌های گیاهی:</strong> روغن گندم سبوس‌دار، روغن آفتابگردان، روغن جوانه گندم
                </p>
              </div>
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>مغزها و دانه‌ها:</strong> بادام، تخم آفتابگردان، گردو
                </p>
              </div>
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>سبزیجات و میوه‌ها:</strong> سبزیجات با برگ سبز، آووکادو و برخی میوه‌ها
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">نیاز روزانه</h3>
            <p className="text-lg leading-relaxed">
              براساس داده‌های معتبر، مقدار مصرف توصیه‌شده برای بزرگسالان (از سن ۱۴ سال به بالا) حدود <strong>۱۵ میلی‌گرم</strong> (یا حدود ۲۲ واحد بین‌المللی, IU) در روز است. برای زنان باردار یا شیرده ممکن است کمی بیشتر توصیه شود.
            </p>
          </div>
        </section>

        {/* کمبود ویتامین E و عوارض */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              کمبود ویتامین E و عوارض آن
            </h2>
            
            <h3 className="text-xl font-semibold mb-4">کمبود</h3>
            <p className="text-lg leading-relaxed mb-6">
              کمبود ویتامین E معمولاً ناشی از مشکلات جذب چربی یا بیماری‌های خاص است، نه صرفاً رژیم غذایی ضعیف.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              علائم کمبود ممکن است شامل ضعف عضلانی، بی‌حسی یا سوزن‌سوزن شدن اندام‌ها، ناهماهنگی حرکتی (آتاکسی) و ضعیف شدن سیستم ایمنی باشد.
            </p>

            <h3 className="text-xl font-semibold mb-4">احتیاط‌ها و مصرف زیاد</h3>
            <p className="text-lg leading-relaxed mb-6">
              گرچه مصرف غذایی این ویتامین عموماً ایمن است، اما مصرف مکمل‌های پر‌دوز می‌تواند خطراتی نیز به همراه داشته باشد — از جمله خطر خونریزی بیشتر در افرادی که داروهای رقیق‌کننده خون مصرف می‌کنند.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/20 border-r-4 border-amber-500 p-6 rounded-lg">
              <p className="font-semibold text-amber-800 dark:text-amber-200">
                توجه: بالاتر از حد مصرف توصیه‌شده نباید خودسرانه اقدام شود.
              </p>
            </div>
          </div>
        </section>

        {/* نکات کاربردی */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              نکات کاربردی برای بیماران
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-lg leading-relaxed">
                  اگر داروهای رقیق‌کننده خون یا داروهایی دارید که با ویتامین E تداخل دارند، پیش از مصرف مکمل با پزشک مشورت کنید. برای <Link to="/articles/medical-consultation" className="text-primary hover:underline">مشاوره پزشکی تخصصی</Link> می‌توانید از خدمات ما استفاده کنید.
                </p>
              </div>
              
              <div>
                <p className="text-lg leading-relaxed">
                  ترجیحاً از طریق رژیم غذایی سالم، ویتامین را تأمین کنید تا از افزایش ناگهانی دوز و عوارض احتمالی دوری شود.
                </p>
              </div>
              
              <div>
                <p className="text-lg leading-relaxed">
                  اگر بیمار دارای اختلال جذب چربی، بیماری روده‌ای یا کبدی است، بررسی و پایش میزان ویتامین E تحت نظر پزشک ضرورت دارد.
                </p>
              </div>
              
              <div>
                <p className="text-lg leading-relaxed">
                  استفاده از خدمات <Link to="/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل</Link> برای بررسی وضعیت تغذیه، مکمل‌ها، داروها و تداخلات دارویی می‌تواند بسیار مفید باشد.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* جمع‌بندی */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              جمع‌بندی
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              ویتامین E یک عنصر حیاتی برای عملکرد بهینه بدن است؛ از محافظت سلولی در برابر استرس اکسیداتیو تا پشتیبانی از سیستم ایمنی و سلامت عروق.
            </p>
            <p className="text-lg leading-relaxed">
              با این‌حال، تأکید می‌شود که تأمین آن از راه تغذیه سالم بهتر از مصرف مکمل‌های خودسرانه است و نظارت پزشکی در موارد خاص اهمیت دارد.
            </p>
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

export default VitaminEPage;