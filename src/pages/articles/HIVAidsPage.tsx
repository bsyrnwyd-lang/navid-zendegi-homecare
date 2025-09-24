import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import LazyImage from "@/components/LazyImage";
import StructuredData from "@/components/StructuredData";
import SEOHead from "@/components/SEOHead";
import hivAidsImage from "@/assets/hiv-aids-article.jpg";

const HIVAidsPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "عفونت با ویروس HIV (ایدز)", url: "/articles/hiv-aids" }
  ];

  return (
    <>
      <SEOHead
        title="عفونت با ویروس HIV (ایدز) - علائم، راه‌های انتقال و درمان | نوید زندگی"
        description="همه چیز در مورد ویروس HIV و ایدز، راه‌های انتقال، علائم، مراحل بیماری و خدمات پزشکی در منزل. راهنمای کامل با نظارت دکتر نیره مظاهری تهرانی"
        keywords="عفونت با ویروس HIV، ایدز و راه‌های انتقال، علائم ایدز، درمان HIV در منزل، خدمات پزشکی در منزل برای بیماران HIV، پرستار در منزل برای بیماران ایدز"
        canonical="https://navidzendegi.com/articles/hiv-aids"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2024-01-21T00:00:00Z"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "عفونت با ویروس HIV (ایدز) - علائم، راه‌های انتقال و درمان",
          description: "راهنمای جامع ویروس HIV، راه‌های انتقال، علائم و خدمات پزشکی در منزل",
          author: "دکتر نیره مظاهری تهرانی",
          publishedDate: "2024-01-21",
          image: hivAidsImage
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbs} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                عفونت با ویروس HIV (ایدز)
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: دکتر نیره مظاهری تهرانی، متخصص قلب و عروق</span>
                <span>تاریخ انتشار: 21 ژانویه 2024</span>
              </div>

              <LazyImage
                src={hivAidsImage}
                alt="عفونت با ویروس HIV (ایدز) - علائم، راه‌های انتقال و درمان"
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              />
            </header>

            <div className="space-y-6 text-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">مقدمه</h2>
                <p>
                  ویروس نقص ایمنی انسانی (HIV) عامل اصلی بیماری ایدز است. این ویروس به‌تدریج و طی چندین سال دستگاه ایمنی بدن را ضعیف می‌کند و فرد را در برابر عفونت‌ها و بیماری‌های فرصت‌طلب آسیب‌پذیر می‌سازد. شناخت راه‌های انتقال، علائم و روند بیماری برای پیشگیری و کنترل آن اهمیت زیادی دارد.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">راه‌های انتقال ویروس HIV</h2>
                <p>
                  HIV از طریق تماس‌های روزمره مانند دست دادن یا بغل کردن منتقل نمی‌شود، بلکه تنها از راه مایعات خاص بدن قابل انتقال است:
                </p>
                
                <ul className="list-disc list-inside space-y-2 mr-4 mt-4">
                  <li>خون آلوده (مانند تزریق با سرنگ مشترک در افراد معتاد یا انتقال خون آلوده)</li>
                  <li>مایع منی و ترشحات واژن (در روابط جنسی محافظت‌نشده)</li>
                  <li>شیر مادر آلوده</li>
                  <li>انتقال از مادر به نوزاد (در دوران بارداری، زایمان واژینال یا شیردهی)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">دوره‌های بیماری</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">مرحله اولیه:</h3>
                    <p>پس از ورود ویروس به بدن، ممکن است بیمار هیچ علامتی نداشته باشد یا علائمی شبیه سرماخوردگی و تب خفیف را تجربه کند.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">مرحله نهفتگی (بدون علامت):</h3>
                    <p>ممکن است بین ۵ تا ۱۰ سال طول بکشد. در این دوره فرد هیچ نشانه‌ای ندارد اما همچنان می‌تواند ویروس را به دیگران منتقل کند.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">مرحله علامت‌دار:</h3>
                    <p>با تضعیف سیستم ایمنی، بدن مستعد عفونت‌های ساده مانند عفونت‌های قارچی دهان و دستگاه تناسلی می‌شود.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">مرحله پیشرفته (ایدز):</h3>
                    <p>با کاهش شدید سلول‌های ایمنی، عفونت‌های شدید و بیماری‌های جدی مانند سل، عفونت‌های ویروسی یا حتی برخی سرطان‌ها بروز می‌کنند.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">اهمیت تشخیص زودهنگام</h2>
                <p>
                  بسیاری از افراد سال‌ها از ابتلای خود به HIV بی‌خبرند. تشخیص زودهنگام با آزمایش خون می‌تواند باعث شروع به‌موقع درمان ضدویروسی (ART) شود. این درمان اگرچه ویروس را ریشه‌کن نمی‌کند، اما می‌تواند:
                </p>
                
                <ul className="list-disc list-inside space-y-2 mr-4 mt-4">
                  <li>بار ویروسی را کاهش دهد</li>
                  <li>طول عمر فرد را افزایش دهد</li>
                  <li>کیفیت زندگی را بهبود بخشد</li>
                  <li>خطر انتقال بیماری به دیگران را به حداقل برساند</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">پیشگیری</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>استفاده از وسایل محافظت جنسی (کاندوم) در روابط جنسی</li>
                  <li>پرهیز از استفاده از سرنگ مشترک</li>
                  <li>آزمایش خون‌های اهدا شده قبل از انتقال</li>
                  <li>بررسی و درمان مادران باردار آلوده برای پیشگیری از انتقال به نوزاد</li>
                </ul>
              </section>

              <section className="bg-muted/50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">خدمات پزشکی در منزل برای بیماران HIV</h2>
                <p>بیماران مبتلا به HIV یا ایدز ممکن است به مرور زمان نیازمند مراقبت‌های پزشکی و پرستاری بیشتری باشند. با استفاده از خدمات پزشکی در منزل می‌توان:</p>
                
                <ul className="list-disc list-inside space-y-2 mr-4 mt-4">
                  <li>پایش وضعیت عمومی بیمار توسط پزشک یا پرستار در منزل</li>
                  <li>تزریق داروها و سرم‌تراپی در خانه</li>
                  <li>مشاوره تغذیه‌ای و روانشناسی برای بهبود کیفیت زندگی بیمار</li>
                  <li>پیشگیری از قرار گرفتن بیمار در محیط‌های شلوغ و پرخطر</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">نتیجه‌گیری</h2>
                <p>
                  ویروس HIV یک عفونت مزمن اما قابل کنترل است. شناخت راه‌های انتقال، انجام آزمایش‌های منظم و شروع درمان ضدویروسی در زمان مناسب، می‌تواند زندگی طولانی و سالم‌تری را برای بیماران فراهم کند. همچنین، استفاده از خدمات پزشکی و پرستاری در منزل می‌تواند روند مراقبت از بیماران مبتلا را ساده‌تر و ایمن‌تر سازد.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary">نیاز به مشاوره پزشکی دارید؟</h3>
                <p className="text-muted-foreground mb-4">
                  برای دریافت خدمات مشاوره پزشکی و مراقبت در منزل با ما تماس بگیرید
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a 
                    href="tel:+989386117912" 
                    className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    ۰۹۳۸-۶۱۱-۷۹۱۲
                  </a>
                  <span className="text-muted-foreground hidden sm:inline">|</span>
                  <span className="text-sm text-muted-foreground">پاسخگویی ۲۴ ساعته</span>
                </div>
              </section>
            </div>
          </article>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default HIVAidsPage;