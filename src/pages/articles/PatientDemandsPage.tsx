import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import patientDemandsImage from "@/assets/patient-demands-article.jpg";

const PatientDemandsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "چرا بیماران بر دریافت خدمات اضافه اصرار می‌کنند؟", url: "/articles/patient-demands" }
  ];

  const structuredData = {
    breadcrumbs: breadcrumbItems,
    article: {
      title: "چرا بیماران بر دریافت خدمات اضافه اصرار می‌کنند؟",
      description: "بررسی دلایل اصرار بیماران بر دریافت خدمات پزشکی اضافه، پیامدها و نقش خدمات پزشکی در منزل در مدیریت این موضوع",
      author: "نوید زندگی",
      publishedDate: new Date().toISOString(),
      image: patientDemandsImage
    }
  };

  return (
    <>
      <SEOHead
        title="چرا بیماران بر دریافت خدمات اضافه اصرار می‌کنند؟ | نوید زندگی"
        description="بررسی دلایل اصرار بیماران بر دریافت خدمات پزشکی اضافه، پیامدها و نقش خدمات پزشکی در منزل در مدیریت این موضوع"
        keywords="اصرار بیماران به خدمات اضافه، خدمات پزشکی در منزل، سرم درمانی غیرضروری، مدیریت درخواست بیماران، تزریق در منزل"
        canonical="https://navidzendegi.ir/articles/patient-demands"
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
                  چرا بیماران بر دریافت خدمات اضافه اصرار می‌کنند؟
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
                  src={patientDemandsImage} 
                  alt="پزشک در حال توضیح درمان به بیمار در منزل - مشاوره پزشکی در خانه"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">مقدمه</h2>
                  <p className="leading-relaxed mb-4">
                    در دنیای امروز، بسیاری از بیماران هنگام مراجعه به پزشک یا استفاده از خدمات پزشکی در منزل، علاوه بر درمان اصلی، درخواست خدمات اضافه‌ای هم دارند. برای مثال:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li>بیماری که فقط نیاز به ویزیت ساده دارد، اما بر دریافت سرم درمانی اصرار می‌کند.</li>
                    <li>یا بیماری که داروهای بیشتر و غیرضروری درخواست می‌کند.</li>
                  </ul>
                  <p className="leading-relaxed">
                    این اصرار گاهی از نگرانی بیمار ناشی می‌شود و گاهی از باورهای غلطی که در جامعه وجود دارد.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">دلایل اصرار بیماران بر خدمات اضافه</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">۱. باور به اثربخشی بیشتر</h3>
                      <p className="leading-relaxed">
                        بعضی بیماران فکر می‌کنند اگر خدمات بیشتری بگیرند، روند درمانشان سریع‌تر و کامل‌تر خواهد بود.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">۲. تجربه‌های قبلی</h3>
                      <p className="leading-relaxed">
                        کسی که قبلاً بعد از دریافت سرم یا داروی خاص بهبود یافته، در مراجعات بعدی هم همان خدمات را می‌خواهد، حتی اگر ضروری نباشد.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">۳. توصیه اطرافیان</h3>
                      <p className="leading-relaxed">
                        خیلی وقت‌ها اطرافیان بیمار می‌گویند: «سرم بزن تا زودتر خوب بشی» یا «فلان دارو رو حتماً بگیر». همین توصیه‌ها باعث اصرار بیمار می‌شود.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">۴. جنبه روانی و آرامش</h3>
                      <p className="leading-relaxed">
                        گاهی اوقات خود عمل دریافت خدمت اضافه، مثل تزریق یا سرم، برای بیمار حس آرامش و رسیدگی بیشتر ایجاد می‌کند.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">پیامدهای اصرار بی‌مورد</h2>
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-red-800 dark:text-red-200">
                      <li>• هزینه اضافی برای بیمار و خانواده</li>
                      <li>• خطر عوارض ناشی از داروها یا تزریقات غیرضروری</li>
                      <li>• اتلاف منابع پزشکی که می‌تواند برای بیماران نیازمند استفاده شود</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">نقش خدمات پزشکی در منزل</h2>
                  <p className="leading-relaxed mb-4">
                    ارائه‌دهندگان خدمات پزشکی در منزل می‌توانند نقش مهمی در مدیریت این اصرار داشته باشند. پزشک یا پرستار مجرب با:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li>• توضیح درست به بیمار درباره ضرورت یا عدم ضرورت یک خدمت</li>
                    <li>• جایگزین کردن روش‌های کم‌خطرتر</li>
                    <li>• مدیریت روانی و ارتباطی با بیمار</li>
                  </ul>
                  <p className="leading-relaxed">
                    می‌توانند هم رضایت بیمار را جلب کنند و هم از ارائه خدمات غیرضروری جلوگیری نمایند.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">جمع‌بندی</h2>
                  <p className="leading-relaxed">
                    اصرار بیماران بر خدمات اضافه، مسئله‌ای رایج است که ریشه در باورها، تجربه‌ها و توصیه‌های اطرافیان دارد. مهم‌ترین راه‌حل، ارتباط مؤثر بین بیمار و تیم درمانی است. خدمات پزشکی در منزل با حضور پزشک و پرستار حرفه‌ای، می‌تواند ضمن آرامش دادن به بیمار، مانع از انجام اقدامات غیرضروری شود و بهترین مسیر درمان را فراهم کند.
                  </p>
                </section>

                <section className="bg-primary/5 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    نیاز به مشاوره پزشکی در منزل دارید؟
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    تیم پزشکی نوید زندگی با تجربه و تخصص، آماده ارائه خدمات مشاوره و درمان مناسب در منزل شما است.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="tel:+989386117912" 
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      تماس برای مشاوره: ۰۹۳۸۶۱۱۷۹۱۲
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

export default PatientDemandsPage;