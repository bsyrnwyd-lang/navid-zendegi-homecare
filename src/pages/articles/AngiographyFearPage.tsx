import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import angiographyImage from "@/assets/angiography-article.jpg";

const AngiographyFearPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="آیا آنژیوگرافی ترسناک است؟ | راهنمای کامل آنژیوگرافی قلب"
        description="همه چیز درباره آنژیوگرافی قلب، مراحل انجام، آیا دردناک است و چگونه به تشخیص و درمان بیماری‌های قلبی کمک می‌کند - دکتر نیره مظاهری تهرانی"
        keywords="آنژیوگرافی قلب، استنت قلب، ترس از آنژیوگرافی، نحوه انجام آنژیوگرافی، مراقبت‌های قبل و بعد از آنژیوگرافی، خدمات پزشکی در منزل"
        canonical="https://navidzendegi.ir/articles/angiography-fear"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        ogImage="/logo.jpg"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                آیا آنژیوگرافی ترسناک است؟
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm text-muted-foreground">
                  نویسنده: دکتر نیره مظاهری تهرانی - متخصص قلب و عروق
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={angiographyImage} 
                  alt="آنژیوگرافی قلب - راهنمای کامل و مراحل انجام"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <div className="space-y-6 text-foreground leading-relaxed text-lg">
                  <p>
                    بسیاری از افراد وقتی نام آنژیوگرافی قلب را می‌شنوند، دچار ترس و اضطراب می‌شوند. اما آیا واقعاً این پروسیجر خطرناک یا دردناک است؟ در واقع، آنژیوگرافی یک روش تشخیصی دقیق و کم‌خطر برای بررسی عروق قلب است و در بیشتر موارد بدون هیچ مشکل خاصی انجام می‌شود.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">آنژیوگرافی چیست؟</h2>
                  <p>
                    آنژیوگرافی یا Angiography روشی است که به پزشک اجازه می‌دهد عروق کرونر قلب (رگ‌های تغذیه‌کننده قلب) را با دقت ببیند و انسداد یا تنگی آن‌ها را بررسی کند. این روش معمولاً زمانی انجام می‌شود که بیمار دچار علائمی مانند درد قفسه سینه، تنگی نفس یا نوار قلب غیرطبیعی باشد.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">مراحل انجام آنژیوگرافی</h2>
                  <p>
                    پروسیجر آنژیوگرافی معمولاً ۲۰ تا ۳۰ دقیقه زمان می‌برد و مراحل آن به این صورت است:
                  </p>

                  <div className="bg-muted/30 p-6 rounded-lg border-r-4 border-primary my-6">
                    <ol className="list-decimal list-inside space-y-3">
                      <li className="text-foreground">
                        در ابتدا یکی از رگ‌های دست (مچ) یا کشاله ران انتخاب و ضدعفونی می‌شود.
                      </li>
                      <li className="text-foreground">
                        سپس یک لوله باریک و انعطاف‌پذیر به نام کاتتر از طریق این رگ وارد عروق قلب می‌شود.
                      </li>
                      <li className="text-foreground">
                        در ادامه، ماده حاجب (رنگ مخصوص) از طریق کاتتر تزریق شده و تصاویری دقیق از عروق قلب در زوایای مختلف تهیه می‌شود.
                      </li>
                      <li className="text-foreground">
                        پزشک بر اساس این تصاویر تصمیم می‌گیرد که آیا نیاز به استنت‌گذاری (فنر قلب) وجود دارد یا خیر.
                      </li>
                    </ol>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">آیا آنژیوگرافی دردناک است؟</h2>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-r-4 border-green-500 my-6">
                    <p className="text-foreground font-semibold">
                      ✅ خیر
                    </p>
                    <p className="mt-3">
                      در طول انجام آنژیوگرافی، بیمار هوشیار است ولی هیچ دردی احساس نمی‌کند. تنها ممکن است در زمان تزریق ماده حاجب احساس گرما یا سوزش خفیفی در بدن ایجاد شود که کاملاً طبیعی و موقتی است.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">در صورت نیاز به استنت‌گذاری</h2>
                  <p>
                    اگر در حین انجام آنژیوگرافی مشخص شود که یکی از عروق قلب تنگ یا بسته است، پزشک ممکن است در همان زمان اقدام به استنت‌گذاری (باز کردن رگ با فنر) کند. در این حالت، زمان انجام پروسیجر کمی بیشتر می‌شود، اما همچنان بدون درد و با ایمنی بالا انجام می‌شود.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">جمع‌بندی</h2>
                  <p>
                    آنژیوگرافی قلب یکی از ایمن‌ترین و مؤثرترین روش‌های تشخیصی در بیماری‌های قلبی است. ترس از این روش بیشتر به دلیل ناآگاهی از روند انجام آن است. با اطلاع از مراحل آنژیوگرافی، می‌توان با آرامش خاطر بیشتری این بررسی مهم را انجام داد و از بروز عوارض جدی قلبی پیشگیری کرد.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 24/7 Contact Section */}
        <section className="bg-primary/5 py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">مشاوره قلبی ۲۴ ساعته</p>
                    <a href="tel:+989386117912" className="text-primary font-bold hover:text-primary/80 transition-colors">
                      ۰۹۳۸۶۱۱۷۹۱۲
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                نیاز به مشاوره قلبی دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                متخصصان قلب نوید زندگی آماده ارائه خدمات تشخیصی و درمانی در منزل شما هستند
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  تماس با ما
                </a>
                <a 
                  href="/cardiology"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  خدمات قلبی
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default AngiographyFearPage;
