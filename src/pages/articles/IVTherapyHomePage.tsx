import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import ivTherapyImage from "@/assets/iv-therapy-home.jpg";

const IVTherapyHomePage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سرم درمانی در منزل", url: "/articles/iv-therapy-home" }
  ];

  const structuredData = {
    breadcrumbs: breadcrumbItems,
    article: {
      title: "سرم درمانی در منزل؛ چرا بیماران به دریافت سرم تمایل دارند؟",
      description: "راهنمای جامع سرم درمانی در منزل، فواید و مضرات تزریق سرم، خدمات سرم تراپی در خانه و نکات مهم درباره استفاده از سرم",
      author: "نوید زندگی",
      publishedDate: new Date().toISOString(),
      image: ivTherapyImage
    }
  };

  return (
    <>
      <SEOHead
        title="سرم درمانی در منزل؛ چرا بیماران به دریافت سرم تمایل دارند؟ | نوید زندگی"
        description="راهنمای جامع سرم درمانی در منزل، فواید و مضرات تزریق سرم، خدمات سرم تراپی در خانه و نکات مهم درباره استفاده از سرم"
        keywords="سرم درمانی در منزل، خدمات پزشکی در منزل، سرم تراپی در منزل، تزریق سرم در خانه، پرستار برای سرم در منزل"
        canonical="https://navidzendegi.ir/articles/iv-therapy-home"
        ogType="article"
        author="نوید زندگی"
        publishedTime={new Date().toISOString()}
      />
      <StructuredData {...structuredData} />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <BreadcrumbNavigation items={breadcrumbItems} />
            
            <article className="max-w-4xl mx-auto">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  سرم درمانی در منزل؛ چرا بیماران به دریافت سرم تمایل دارند؟
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <span>نوید زندگی</span>
                  <span>•</span>
                  <time dateTime={new Date().toISOString()}>
                    {new Date().toLocaleDateString('fa-IR')}
                  </time>
                  <span>•</span>
                  <span>خدمات پزشکی در منزل</span>
                </div>
                <img 
                  src={ivTherapyImage} 
                  alt="سرم درمانی در منزل - پرستار در حال آماده سازی تجهیزات سرم تراپی"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">مقدمه</h2>
                  <p className="leading-relaxed mb-4">
                    بسیاری از بیماران هنگام بیماری یا ضعف بدنی، تمایل دارند سرم دریافت کنند. حتی در شرایطی که مشکل خیلی جدی نیست، افراد سرم را راهی سریع برای بهبود می‌دانند. در سال‌های اخیر، ارائه‌ی خدمات پزشکی در منزل این امکان را فراهم کرده که بیماران بدون نیاز به مراجعه به بیمارستان یا کلینیک، در خانه خود سرم دریافت کنند.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">چرا بیماران سرم را ترجیح می‌دهند؟</h2>
                  <ul className="space-y-3">
                    <li>
                      <strong>اثر سریع‌تر:</strong> خیلی‌ها باور دارند که دارو و مایعات وقتی از راه وریدی وارد بدن شوند، زودتر اثر می‌گذارند.
                    </li>
                    <li>
                      <strong>تجربه مثبت قبلی:</strong> بیمارانی که بعد از دریافت سرم بهبود سریعی داشته‌اند، در مراجعات بعدی هم همین درمان را ترجیح می‌دهند.
                    </li>
                    <li>
                      <strong>آرامش روانی:</strong> حتی اگر ضرورت پزشکی قطعی وجود نداشته باشد، دریافت سرم می‌تواند حس اطمینان و آرامش به بیمار بدهد.
                    </li>
                    <li>
                      <strong>توصیه اطرافیان یا تبلیغات:</strong> در سال‌های اخیر، تبلیغات کلینیک‌ها و تجربه دیگران باعث شده بیماران بیشتر به سرم تمایل پیدا کنند.
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">فواید سرم درمانی در منزل</h2>
                  <ul className="space-y-3">
                    <li>جبران سریع کم‌آبی بدن در شرایطی مثل تب بالا، اسهال، استفراغ یا گرمازدگی</li>
                    <li>صرفه‌جویی در زمان و هزینه چون نیازی به مراجعه به مراکز درمانی نیست</li>
                    <li>کاهش استرس بیمار به‌ویژه برای سالمندان، کودکان یا افرادی که رفت‌وآمد برایشان دشوار است</li>
                    <li>ارائه خدمات توسط پزشک و پرستار مجرب در محیط امن منزل</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">مضرات مصرف بی‌مورد سرم</h2>
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                    <p className="text-amber-800 dark:text-amber-200">
                      <strong>توجه:</strong> مصرف غیرضروری می‌تواند منجر به عوارضی مثل عفونت محل تزریق یا اختلالات الکترولیتی شود.
                    </p>
                  </div>
                  <p className="leading-relaxed">
                    بیمار ممکن است تصور کند که بدون سرم درمان کامل نمی‌شود، در حالی که در بسیاری از موارد داروهای خوراکی کفایت می‌کنند.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">جمع‌بندی</h2>
                  <p className="leading-relaxed">
                    سرم درمانی یک روش مهم و کاربردی است، اما باید تحت نظر پزشک انجام شود. اگر بیمار شما نیاز به دریافت سرم دارد، بهترین گزینه استفاده از خدمات سرم تراپی در منزل است؛ روشی راحت، سریع و ایمن برای بهبود بیمار بدون نیاز به حضور در بیمارستان.
                  </p>
                </section>

                <section className="bg-primary/5 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    نیاز به سرم درمانی در منزل دارید؟
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    تیم پزشکی نوید زندگی آماده ارائه خدمات سرم تراپی با بالاترین کیفیت در منزل شما است.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="tel:+982188776655" 
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      تماس برای سرم درمانی: ۰۲۱-۸۸۷۷۶۶۵۵
                    </a>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </main>

        <FloatingContact />
        <Footer />
      </div>
    </>
  );
};

export default IVTherapyHomePage;