import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import greenTeaImage from "@/assets/green-tea-weight-loss-article.jpg";

const GreenTeaWeightLossPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "چای سبز و کاهش وزن", url: "/articles/green-tea-weight-loss" }
  ];

  const structuredData = {
    breadcrumbs: breadcrumbItems,
    article: {
      title: "چای سبز و کاهش وزن؛ نگاه علمی",
      description: "بررسی علمی تأثیر چای سبز بر کاهش وزن، ترکیبات فعال، شواهد تحقیقاتی و نقش خدمات پزشکی در منزل در کنترل وزن",
      author: "نوید زندگی",
      publishedDate: "2025-01-15",
      image: greenTeaImage
    }
  };

  return (
    <>
      <SEOHead
        title="چای سبز و کاهش وزن؛ نگاه علمی | نوید زندگی"
        description="بررسی علمی تأثیر چای سبز بر کاهش وزن، ترکیبات فعال، شواهد تحقیقاتی و نقش خدمات پزشکی در منزل در کنترل وزن"
        keywords="چای سبز و کاهش وزن، خواص چای سبز، کاهش وزن در منزل، خدمات پزشکی در منزل، مشاوره تغذیه در خانه"
        canonical="https://navidezendegi.com/articles/green-tea-weight-loss"
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-15"
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
                  چای سبز و کاهش وزن؛ نگاه علمی
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <span>نوید زندگی</span>
                  <span>•</span>
                  <time dateTime="2025-01-15">۱۵ ژانویه ۲۰۲۵</time>
                  <span>•</span>
                  <span>تغذیه و سلامت</span>
                </div>
                <img 
                  src={greenTeaImage} 
                  alt="چای سبز و کاهش وزن - مشاوره تغذیه در منزل"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">مقدمه</h2>
                  <p className="leading-relaxed">
                    چای سبز یکی از پرطرفدارترین نوشیدنی‌های گیاهی در جهان است که علاوه بر طعم مطبوع، به‌خاطر خواص سلامتی و نقش احتمالی آن در کاهش وزن شناخته می‌شود. بسیاری از افراد به امید لاغری سریع به مصرف چای سبز روی می‌آورند. اما واقعیت علمی چیست؟ و چه زمانی باید برای کنترل وزن از خدمات پزشکی و مشاوره تخصصی استفاده کرد؟
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">ترکیبات اصلی چای سبز</h2>
                  <ul className="space-y-3 mb-4">
                    <li>
                      <strong>کاتچین‌ها:</strong> به‌ویژه EGCG (اپی‌گالوکاتچین گالات) که قوی‌ترین آنتی‌اکسیدان موجود در چای سبز است.
                    </li>
                    <li>
                      <strong>کافئین:</strong> که می‌تواند باعث افزایش متابولیسم و اکسیداسیون چربی‌ها شود.
                    </li>
                    <li>
                      <strong>پلی‌فنول‌ها:</strong> با خاصیت ضدالتهابی و حمایت از سلامت عمومی بدن.
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">چای سبز چگونه بر وزن تأثیر می‌گذارد؟</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">افزایش متابولیسم پایه (BMR)</h3>
                      <p className="leading-relaxed">
                        تحقیقات نشان داده‌اند که مصرف منظم چای سبز می‌تواند مصرف انرژی روزانه را کمی افزایش دهد.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">اکسیداسیون چربی‌ها</h3>
                      <p className="leading-relaxed">
                        ترکیب EGCG و کافئین فرایند تجزیه چربی را تقویت می‌کند.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">کاهش جذب مواد غذایی</h3>
                      <p className="leading-relaxed">
                        برخی مطالعات نشان داده‌اند که چای سبز ممکن است جذب چربی و قند را در روده کاهش دهد.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">اثر بر اشتها</h3>
                      <p className="leading-relaxed">
                        مصرف چای سبز می‌تواند به‌طور موقت میل به غذا را کم کند.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">شواهد علمی</h2>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                    <ul className="space-y-3">
                      <li>
                        در یک متاآنالیز (Hursel و همکاران، 2009)، مصرف چای سبز منجر به کاهش وزن متوسطی (حدود 1–2 کیلوگرم در چند ماه) شد.
                      </li>
                      <li>
                        پژوهش‌ها نشان داده‌اند که اثر چای سبز بیشتر زمانی مؤثر است که همراه با فعالیت بدنی و رژیم غذایی سالم باشد.
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">محدودیت‌ها و هشدارها</h2>
                  <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
                      <li>• اثر چای سبز در کاهش وزن متوسط است و نباید آن را معجزه دانست.</li>
                      <li>• مصرف بیش از حد ممکن است باعث مشکلاتی مثل تپش قلب، تحریک معده یا اختلال در جذب آهن شود.</li>
                      <li>• برای افراد با بیماری‌های زمینه‌ای (مثل قلبی یا کلیوی)، مصرف زیاد بدون مشورت پزشک توصیه نمی‌شود.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">نقش خدمات پزشکی در منزل</h2>
                  <p className="leading-relaxed mb-4">
                    اگرچه چای سبز می‌تواند بخشی از سبک زندگی سالم باشد، اما کاهش وزن پایدار نیاز به مشاوره تخصصی، پیگیری و گاهی بررسی‌های آزمایشگاهی دارد.
                    با استفاده از خدمات پزشکی در منزل در سایت <a href="https://navidezendegi.com" className="text-primary hover:underline">navidezendegi.com</a>، می‌توانید:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li>• مشاوره تغذیه و کنترل وزن در خانه دریافت کنید.</li>
                    <li>• در صورت نیاز آزمایش‌های دوره‌ای (قند خون، چربی خون، عملکرد کبد و کلیه) را در منزل انجام دهید.</li>
                    <li>• توسط پزشک یا پرستار پیگیری شوید تا روند کاهش وزن ایمن و اصولی باشد.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">جمع‌بندی</h2>
                  <p className="leading-relaxed">
                    چای سبز به‌دلیل ترکیبات آنتی‌اکسیدانی و کافئین می‌تواند نقش ملایمی در کاهش وزن و افزایش متابولیسم داشته باشد. اما این تأثیر محدود است و جایگزین رژیم غذایی سالم و ورزش نمی‌شود. بهترین نتیجه زمانی به دست می‌آید که مصرف چای سبز بخشی از یک سبک زندگی سالم باشد و با نظارت پزشکی و خدمات سلامت در منزل همراه شود.
                  </p>
                </section>

                <section className="bg-primary/5 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    نیاز به مشاوره تغذیه و کنترل وزن دارید؟
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    متخصصان تغذیه و پزشکان نوید زندگی آماده ارائه خدمات مشاوره و پیگیری کاهش وزن در منزل شما هستند.
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

export default GreenTeaWeightLossPage;
