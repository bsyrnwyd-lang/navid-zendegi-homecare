import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import gynecologyImage from "@/assets/gynecology.jpg";

const HPVTreatmentGuidePage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "راهنمای جامع ویروس HPV و رویکردهای درمانی نوین", url: "/articles/hpv-treatment-guide" }
  ];

  const relatedArticles = [
    {
      title: "زگیل تناسلی: دلایل، علائم و راه‌های درمان",
      description: "راهنمای کامل درباره زگیل تناسلی، علل، علائم و روش‌های درمانی",
      link: "/articles/genital-warts",
      image: "/src/assets/genital-warts-article.jpg",
      category: "بهداشت"
    },
    {
      title: "واکسن گارداسیل: محافظت در برابر HPV",
      description: "اطلاعات کامل درباره واکسن گارداسیل و نحوه محافظت در برابر HPV",
      link: "/articles/gardasil-vaccine",
      image: "/src/assets/gardasil-vaccine-article.jpg",
      category: "پیشگیری"
    },
    {
      title: "آیا HPV از طریق استخر منتقل می‌شود؟",
      description: "بررسی علمی راه‌های انتقال ویروس HPV و نکات بهداشتی",
      link: "/articles/hpv-pool",
      image: "/src/assets/hpv-pool-article.jpg",
      category: "بهداشت"
    }
  ];

  return (
    <>
      <SEOHead
        title="راهنمای جامع ویروس HPV و رویکردهای درمانی نوین | دریافت خدمات تخصصی در منزل"
        description="راهنمای کامل علمی درباره ویروس HPV، درمان زگیل تناسلی با پلاسما پن، پاپ اسمیر و واکسیناسیون HPV. دریافت خدمات متخصص زنان در منزل با حفظ حریم خصوصی."
        keywords="HPV، ویروس پاپیلومای انسانی، درمان HPV، زگیل تناسلی، پاپ اسمیر، واکسن HPV، پلاسما پن، متخصص زنان در منزل، ویزیت در منزل"
        canonical="https://navid-zendegi-homecare.lovable.app/articles/hpv-treatment-guide"
        ogType="article"
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-20">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <BreadcrumbNavigation items={breadcrumbItems} />
            
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 mt-6">
              <img 
                src={gynecologyImage}
                alt="راهنمای جامع ویروس HPV و درمان در منزل"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              راهنمای جامع ویروس HPV و رویکردهای درمانی نوین: دریافت خدمات تخصصی در منزل
            </h1>

            {/* مقدمه */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                ویروس پاپیلومای انسانی (HPV) شایع‌ترین عفونت مقاربتی است و طیف وسیعی از مشکلات سلامتی، از زگیل‌های تناسلی تا ضایعات پیش‌سرطانی را ایجاد می‌کند. درک علمی این ویروس و روش‌های درمانی آن، اولین گام برای مدیریت و پیشگیری مؤثر است. برای بسیاری از مراجعین، دریافت خدمات تخصصی مربوط به HPV در محیط امن و راحت خانه، یک اولویت است.
              </p>
            </div>

            {/* H2: ماهیت ویروس HPV */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                ماهیت ویروس HPV و نقش حیاتی ویزیت متخصص زنان در منزل
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                همان‌طور که می‌دانیم، هیچ درمان قطعی ضدویروسی برای از بین بردن خود ویروس HPV از بدن وجود ندارد؛ هدف از درمان، مدیریت و حذف علائم (زگیل‌های تناسلی) و از بین بردن سلول‌های غیرطبیعی است.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                به دلیل حساسیت موضوع و نیاز به حفظ حریم خصوصی، بسیاری از افراد ترجیح می‌دهند این فرآیندها را تحت نظر <strong>متخصص زنان در منزل</strong> انجام دهند. این خدمات شامل معاینه اولیه، مشاوره و شروع درمان‌ها می‌شود.
              </p>
            </section>

            {/* H2: روش‌های درمان */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                روش‌های علمی و مؤثر درمان ضایعات ناشی از HPV
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                درمان بر اساس نوع ضایعه متفاوت است. تیم نوید زندگی این روش‌های سرپایی را با تجهیزات کامل در منزل شما ارائه می‌دهد:
              </p>

              {/* H3: درمان زگیل‌های تناسلی */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">
                  درمان زگیل‌های تناسلی (ضایعات جلدی) در خانه
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  برای حذف زگیل‌های تناسلی، روش‌های مدرن و کم‌تهاجمی بهترین گزینه هستند که در منزل قابل اجرا می‌باشند:
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">روش‌های فیزیکی و تخریبی (Ablative):</h4>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>پلاسما پن:</strong> استفاده از تکنولوژی پلاسما برای درمان موضعی و دقیق ضایعات و زگیل‌های تناسلی در منزل. این روش سرپایی بوده و نیاز به بستری شدن ندارد.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>کرایوتراپی (Cryotherapy):</strong> فریز کردن زگیل‌ها با نیتروژن مایع.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>الکتروکوتر یا لیزر:</strong> در موارد خاص و بسته به ارزیابی متخصص زنان اعزامی.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">درمان‌های موضعی دارویی:</h4>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span>تجویز کرم‌ها یا محلول‌های موضعی (مانند ایمی‌کیمود یا پودوفیلوکس) برای استفاده تحت نظارت در منزل.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* H3: مدیریت ضایعات پیش‌سرطانی */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  مدیریت ضایعات پیش‌سرطانی و پاپ اسمیر در منزل
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  مهم‌ترین بخش مدیریت HPV پرخطر، غربالگری منظم است. متخصص زنان در منزل می‌تواند این خدمات حیاتی را ارائه دهد:
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">غربالگری و تشخیص در منزل:</h4>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>تست پاپ اسمیر (Pap Smear):</strong> ضروری‌ترین ابزار غربالگری که به راحتی در محیط منزل قابل انجام است و نیاز به مراجعه حضوری به مطب ندارد.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>تست HPV-DNA:</strong> نمونه‌گیری برای تشخیص سویه‌های پرخطر.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>حذف سلول‌های غیرطبیعی:</strong> در صورت مشاهده تغییرات شدید در تست‌های غربالگری، روش‌های تخصصی‌تر مانند LEEP در کلینیک انجام می‌شود، اما پیگیری‌ها و مراقبت‌های اولیه توسط دکتر زنان در منزل تسهیل می‌گردد.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* H2: پیشگیری */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                پیشگیری: واکسیناسیون و معاینات دوره‌ای در خانه
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                مؤثرترین راهکار، پیشگیری است:
              </p>

              <ul className="space-y-4 text-lg mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <span><strong>واکسیناسیون HPV:</strong> تزریق واکسن‌های مربوط به HPV جهت پیشگیری، به راحتی توسط کادر درمانی مجرب ما در منزل شما انجام می‌شود.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <span><strong>معاینات منظم:</strong> انجام منظم تست پاپ اسمیر و HPV در منزل برای زنان، به خصوص پس از شروع فعالیت جنسی، حیاتی است.</span>
                </li>
              </ul>
            </section>

            {/* نتیجه‌گیری */}
            <section className="mb-12 bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">نتیجه‌گیری</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                با وجود اینکه درمان مستقیم برای حذف ویروس HPV از بدن وجود ندارد، روش‌های درمانی نوین مانند استفاده از پلاسما پن (برای ضایعات) و اقدامات تشخیصی مانند پاپ اسمیر، به ما این امکان را می‌دهند که عوارض جدی را به طور مؤثر مدیریت کنیم. تمامی این خدمات، با حفظ حریم خصوصی و بالاترین استانداردها، از طریق <Link to="/services/gynecology" className="text-primary font-bold hover:underline">ویزیت متخصص زنان در منزل</Link> نوید زندگی در دسترس شماست.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                برای اطلاعات بیشتر درباره خدمات تخصصی زنان، می‌توانید از صفحه <Link to="/services/gynecology" className="text-primary font-bold hover:underline">خدمات متخصص زنان در منزل</Link> ما دیدن کنید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={handleCall}
                  className="group"
                >
                  <Phone className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                  تماس برای دریافت خدمات در منزل
                </Button>
              </div>
            </section>

            {/* منابع علمی */}
            <section className="mb-12 border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">منابع علمی معتبر</h2>
              <p className="text-lg text-muted-foreground mb-4">
                برای تأیید اطلاعات این مقاله، می‌توانید به راهنمای‌ها و مقالات منتشر شده توسط سازمان‌های معتبر جهانی و ملی مراجعه کنید:
              </p>
              <ul className="space-y-2 text-lg">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <span>Centers for Disease Control and Prevention (CDC) - HPV Information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <span>American Cancer Society (ACS) - HPV and HPV Testing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                  <span>مراجع رسمی وزارت بهداشت و درمان آموزش پزشکی ایران (در زمینه پروتکل‌های واکسیناسیون و غربالگری)</span>
                </li>
              </ul>
            </section>

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} />
          </article>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default HPVTreatmentGuidePage;
