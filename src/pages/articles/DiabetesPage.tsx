import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import LazyImage from "@/components/LazyImage";
import StructuredData from "@/components/StructuredData";
import SEOHead from "@/components/SEOHead";
import diabetesImage from "@/assets/diabetes-article.jpg";

const DiabetesPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "دیابت و راه‌های کنترل آن", url: "/articles/diabetes" }
  ];

  return (
    <>
      <SEOHead
        title="دیابت و راه‌های کنترل آن - انواع، علائم و درمان | نوید زندگی"
        description="راهنمای جامع دیابت، انواع دیابت، علائم، کنترل قند خون و خدمات پزشکی در منزل برای بیماران دیابتی. راهنمای کامل با نظارت دکتر نیره مظاهری تهرانی"
        keywords="کنترل دیابت در منزل، پرستار برای بیماران دیابتی، تزریق انسولین در منزل، خدمات پزشکی در منزل، زخم پای دیابتی و درمان در منزل، مراقبت از بیماران دیابتی"
        canonical="https://navidzendegi.com/articles/diabetes"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2024-01-22T00:00:00Z"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "دیابت و راه‌های کنترل آن - انواع، علائم و درمان",
          description: "راهنمای جامع دیابت، انواع، علائم، کنترل و خدمات پزشکی در منزل",
          author: "دکتر نیره مظاهری تهرانی",
          publishedDate: "2024-01-22",
          image: diabetesImage
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbs} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                دیابت و راه‌های کنترل آن
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: دکتر نیره مظاهری تهرانی، متخصص قلب و عروق</span>
                <span>تاریخ انتشار: 22 ژانویه 2024</span>
              </div>

              <LazyImage
                src={diabetesImage}
                alt="دیابت و راه‌های کنترل آن - انواع، علائم و درمان"
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              />
            </header>

            <div className="space-y-6 text-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">مقدمه</h2>
                <p>
                  دیابت یکی از شایع‌ترین بیماری‌های مزمن در جهان است که میلیون‌ها نفر را درگیر کرده است. در این بیماری بدن توانایی استفاده صحیح از گلوکز (قند خون) را از دست می‌دهد. علت اصلی آن کمبود یا اختلال در عملکرد انسولین است؛ هورمونی که از لوزالمعده ترشح می‌شود و ورود گلوکز به سلول‌ها را ممکن می‌سازد.
                </p>
                <p>
                  وقتی انسولین کافی در بدن وجود نداشته باشد یا سلول‌ها نسبت به آن مقاوم شوند، گلوکز در خون تجمع می‌یابد و در ادرار ظاهر می‌شود. در این حالت بدن برای تأمین انرژی به مصرف چربی‌ها روی می‌آورد و همین فرآیند می‌تواند باعث عوارض بعدی بیماری شود.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">انواع دیابت</h2>
                <p>دیابت به طور کلی به دو نوع اصلی تقسیم می‌شود:</p>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">دیابت نوع یک</h3>
                    <ul className="list-disc list-inside space-y-1 mr-4">
                      <li>در این نوع، انسولین به‌طور کامل یا تقریباً کامل تولید نمی‌شود.</li>
                      <li>اغلب در کودکان و نوجوانان مشاهده می‌شود.</li>
                      <li><strong>علائم شایع:</strong> کاهش وزن، پرخوری، پرادراری و تشنگی بیش از حد.</li>
                      <li><strong>درمان اصلی:</strong> تزریق انسولین به صورت روزانه و مادام‌العمر.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">دیابت نوع دو</h3>
                    <ul className="list-disc list-inside space-y-1 mr-4">
                      <li>در این نوع، انسولین تولید می‌شود اما سلول‌ها به آن مقاوم هستند.</li>
                      <li>بیشتر در بزرگسالان و افراد بالای ۴۰ سال بروز می‌کند.</li>
                      <li>اغلب با اضافه‌وزن و چاقی همراه است.</li>
                      <li><strong>درمان:</strong> رژیم غذایی سالم، ورزش، داروهای خوراکی ضد دیابت و در برخی موارد انسولین.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">عوارض طولانی‌مدت دیابت</h2>
                <p>کنترل نامناسب دیابت می‌تواند به مرور زمان به اندام‌های مختلف بدن آسیب برساند:</p>
                
                <ul className="list-disc list-inside space-y-2 mr-4 mt-4">
                  <li><strong>کلیه‌ها:</strong> نارسایی کلیوی و نیاز به دیالیز.</li>
                  <li><strong>چشم‌ها:</strong> رتینوپاتی دیابتی و نابینایی.</li>
                  <li><strong>قلب و عروق:</strong> افزایش خطر سکته قلبی و مغزی.</li>
                  <li><strong>اعصاب و اندام‌ها:</strong> نوروپاتی و زخم پای دیابتی.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">کنترل و درمان دیابت</h2>
                <p>دیابت بیماری درمان‌پذیر نیست، اما می‌توان آن را کنترل کرد و عوارض آن را به تأخیر انداخت:</p>
                
                <div className="space-y-3 mt-4">
                  <div>
                    <h4 className="font-semibold">رژیم غذایی مناسب:</h4>
                    <p className="text-sm">کاهش مصرف قند و کربوهیدرات‌های ساده، افزایش مصرف سبزیجات و غلات کامل.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">فعالیت بدنی منظم:</h4>
                    <p className="text-sm">ورزش‌های هوازی مانند پیاده‌روی به کاهش مقاومت انسولینی کمک می‌کنند.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">کنترل وزن:</h4>
                    <p className="text-sm">حفظ وزن سالم نقش مهمی در مدیریت دیابت دارد.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">دارو درمانی:</h4>
                    <ul className="list-disc list-inside space-y-1 mr-4 text-sm">
                      <li>در دیابت نوع یک: تزریق انسولین با قلم‌های مخصوص.</li>
                      <li>در دیابت نوع دو: داروهای خوراکی و در صورت نیاز انسولین.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">چک قند خون:</h4>
                    <p className="text-sm">اندازه‌گیری منظم قند خون با دستگاه گلوکومتر برای بررسی اثربخشی درمان ضروری است.</p>
                  </div>
                </div>
              </section>

              <section className="bg-muted/50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">خدمات پزشکی در منزل برای بیماران دیابتی</h2>
                <p>کنترل دیابت نیازمند مراقبت مداوم است. بسیاری از بیماران به دلیل مشکلات حرکتی یا مشغله زیاد نمی‌توانند به صورت مرتب به مراکز درمانی مراجعه کنند. در این شرایط استفاده از خدمات پزشکی در منزل می‌تواند بسیار مؤثر باشد:</p>
                
                <ul className="list-disc list-inside space-y-2 mr-4 mt-4">
                  <li>ویزیت پزشک در منزل برای پایش وضعیت قند خون و عوارض احتمالی دیابت.</li>
                  <li>پرستار در منزل برای تزریق انسولین، سرم‌تراپی یا پانسمان زخم پای دیابتی.</li>
                  <li>مشاوره تغذیه و سبک زندگی برای انتخاب بهترین رژیم غذایی.</li>
                  <li>کاهش نیاز به مراجعه حضوری به بیمارستان و قرار گرفتن در معرض عفونت‌ها.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">نتیجه‌گیری</h2>
                <p>
                  دیابت یک بیماری مزمن اما کنترل‌پذیر است. با پایبندی به رژیم غذایی، ورزش منظم، مصرف دارو و پیگیری پزشکی می‌توان از عوارض جدی آن پیشگیری کرد. همچنین استفاده از خدمات پزشکی و پرستاری در منزل به بیماران کمک می‌کند تا مدیریت بیماری ساده‌تر، ایمن‌تر و مؤثرتر انجام شود.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary">نیاز به مشاوره پزشکی دارید؟</h3>
                <p className="text-muted-foreground mb-4">
                  برای دریافت خدمات مراقبت از بیماران دیابتی و مشاوره پزشکی در منزل با ما تماس بگیرید
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

export default DiabetesPage;