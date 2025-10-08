import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import liftingImage from "@/assets/post-angiography-lifting.jpg";

const PostAngiographyLiftingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="بلند کردن اجسام سنگین بعد از آنژیوگرافی | راهنمای محدودیت‌های فعالیت"
        description="راهنمای کامل محدودیت بلند کردن اجسام بعد از آنژیوگرافی و استنت‌گذاری، مراحل بازگشت به فعالیت - دکتر نیره مظاهری تهرانی"
        keywords="بلند کردن اجسام بعد از آنژیوگرافی، محدودیت فعالیت بعد از استنت، مراقبت پس از آنژیوگرافی، ورزش بعد از فنر قلب، خدمات پزشکی در منزل نوید زندگی"
        canonical="https://navidzendegi.ir/articles/post-angiography-lifting"
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
                بلند کردن اجسام سنگین بعد از آنژیوگرافی
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm text-muted-foreground">
                  نویسنده: دکتر نیره مظاهری تهرانی - متخصص قلب و عروق
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={liftingImage} 
                  alt="محدودیت بلند کردن اجسام بعد از آنژیوگرافی قلب"
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
                    یکی از پرسش‌های رایج بیماران پس از انجام آنژیوگرافی یا استنت‌گذاری قلب، میزان مجاز بلند کردن اجسام سنگین است. رعایت این نکته اهمیت زیادی دارد، زیرا فشار بیش از حد می‌تواند به محل ورود کاتتر (به‌ویژه در کشاله ران) آسیب برساند یا باعث خونریزی و تورم شود.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">محدودیت در روزهای اول پس از آنژیوگرافی</h2>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-r-4 border-red-500 my-6">
                    <p className="text-foreground font-semibold mb-3">
                      ⚠️ در ۱ تا ۳ روز اول:
                    </p>
                    <p>
                      توصیه می‌شود بیمار بیش از <strong className="text-xl">۳ کیلوگرم</strong> وزن بلند نکند.
                    </p>
                    <p className="mt-3 text-sm">
                      این محدودیت به‌ویژه در بیمارانی که از کشاله ران (رگ فمورال) برای آنژیوگرافی استفاده شده بسیار مهم است، چون این ناحیه حساس‌تر بوده و احتمال تورم یا خونریزی وجود دارد.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">بعد از یک هفته</h2>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-r-4 border-amber-500 my-6">
                    <p className="text-foreground">
                      در پایان هفته‌ی اول، در صورتی که محل رگ‌گیری طبیعی باشد و بیمار علائمی مانند درد، تورم یا کبودی نداشته باشد، می‌تواند اجسامی با وزن <strong className="text-xl">۵ تا ۷ کیلوگرم</strong> را جابه‌جا کند.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      با این حال، همچنان باید از حرکات ناگهانی و زور زدن بیش از حد خودداری کند.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">بعد از یک ماه</h2>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-r-4 border-green-500 my-6">
                    <p className="text-foreground">
                      حدود یک ماه پس از آنژیوگرافی، اگر وضعیت قلبی بیمار پایدار باشد و محل ورود کاتتر به‌طور کامل ترمیم شده باشد، بیمار معمولاً می‌تواند اجسام تا حدود <strong className="text-xl">۱۰ کیلوگرم</strong> را بلند کند.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      اما توصیه می‌شود هرگونه افزایش فعالیت یا بازگشت به ورزش فقط با اجازه پزشک متخصص قلب انجام شود.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">نکات مهم</h2>
                  
                  <div className="bg-muted/30 p-6 rounded-lg my-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 text-xl mt-1">🚨</span>
                        <span>در صورت بروز <strong>درد، تورم، قرمزی یا خونریزی</strong> در محل ورود کاتتر، باید فوراً با پزشک تماس گرفته شود.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 text-xl mt-1">⚠️</span>
                        <span>فعالیت‌های بدنی سنگین و ورزش‌های قدرتی یا شدید تا زمان تأیید پزشک نباید انجام شوند.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl mt-1">ℹ️</span>
                        <span>شروع ورزش‌های سبک مانند پیاده‌روی باید تدریجی و کنترل‌شده باشد.</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">نتیجه‌گیری</h2>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
                    <p className="text-foreground leading-relaxed">
                      بلند کردن اجسام سنگین پس از آنژیوگرافی باید به‌صورت مرحله‌ای و تحت نظر پزشک انجام شود. رعایت محدودیت‌های حرکتی در هفته‌های اول، به پیشگیری از عوارضی مانند خونریزی، تورم و باز شدن محل کاتتر کمک می‌کند.
                    </p>
                    <p className="mt-4 text-foreground">
                      در صورت نیاز به راهنمایی یا مراقبت تخصصی در منزل، تیم پرستاری و پزشکی نوید زندگی آماده ارائه خدمات به بیماران قلبی در منزل است.
                    </p>
                  </div>
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
                    <p className="font-semibold text-foreground">مراقبت پس از آنژیوگرافی ۲۴ ساعته</p>
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
                نیاز به مراقبت و راهنمایی دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                تیم پزشکی نوید زندگی آماده ارائه خدمات پرستاری و راهنمایی تخصصی در منزل شما است
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

export default PostAngiographyLiftingPage;
