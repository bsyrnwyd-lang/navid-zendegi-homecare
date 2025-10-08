import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import recoveryImage from "@/assets/angiography-recovery.jpg";

const AngiographyRecoveryTimePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="مدت زمان و بستری بعد از آنژیوگرافی | راهنمای بستری و ترخیص"
        description="مدت زمان انجام آنژیوگرافی، بستری بعد از آنژیوگرافی و استنت‌گذاری، ترخیص و مراقبت‌های بعد از عمل - دکتر نیره مظاهری تهرانی"
        keywords="مدت زمان آنژیوگرافی، بستری بعد از آنژیوگرافی، ترخیص بعد از فنر قلب، مراقبت‌های بعد از آنژیوگرافی، خدمات پزشکی در منزل"
        canonical="https://navidzendegi.ir/articles/angiography-recovery-time"
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
                مدت زمان و بستری بعد از آنژیوگرافی
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm text-muted-foreground">
                  نویسنده: دکتر نیره مظاهری تهرانی - متخصص قلب و عروق
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={recoveryImage} 
                  alt="بستری و بهبودی بعد از آنژیوگرافی قلب"
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
                    مدت زمان انجام آنژیوگرافی قلب بسته به شرایط هر بیمار متفاوت است. به‌طور میانگین، این پروسیجر حدود ۲۰ دقیقه طول می‌کشد. اما اگر در حین آن نیاز به استنت‌گذاری (فنرگذاری) باشد، معمولاً زمان انجام آن به حدود یک ساعت افزایش پیدا می‌کند.
                  </p>

                  <p>
                    در موارد پیچیده‌تر، مانند تنگی چند رگ قلبی یا نیاز به بررسی دقیق‌تر عروق، ممکن است این زمان کمی بیشتر نیز بشود.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">مدت بستری بعد از آنژیوگرافی</h2>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-r-4 border-blue-500 my-6">
                    <p className="text-foreground">
                      پس از پایان آنژیوگرافی، بیماران معمولاً حدود <strong>۶ ساعت</strong> تحت نظر قرار می‌گیرند و اگر همه چیز طبیعی باشد، در همان روز مرخص می‌شوند.
                    </p>
                  </div>

                  <p>
                    اما در مواردی که استنت‌گذاری انجام شده باشد، معمولاً بیمار برای اطمینان از پایداری وضعیت قلبی، تا صبح روز بعد در بیمارستان بستری می‌ماند.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">موارد خاص و بستری طولانی‌تر</h2>
                  <p>
                    در برخی شرایط خاص، ممکن است مدت بستری بیمار افزایش یابد، از جمله:
                  </p>

                  <div className="bg-muted/30 p-6 rounded-lg my-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">⚠️</span>
                        <span><strong>حساسیت به ماده حاجب</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">⚠️</span>
                        <span><strong>نارسایی کلیه</strong> یا افزایش کراتینین خون</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">⚠️</span>
                        <span>وجود <strong>سکته قلبی حاد</strong> یا زمینه‌ای</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      در این موارد، بستری چندروزه برای بررسی دقیق‌تر عملکرد قلب و کلیه‌ها لازم است.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">مراقبت پس از ترخیص</h2>
                  <p>
                    پس از ترخیص از بیمارستان، رعایت توصیه‌های پزشک، مصرف منظم داروها و مراقبت از محل ورود کاتتر بسیار مهم است.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-r-4 border-green-500 my-6">
                    <p className="text-foreground font-semibold mb-3">
                      ✅ نکات کلیدی بعد از ترخیص:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>استراحت کافی در روزهای اول</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>مصرف منظم داروهای تجویز شده</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>مراقبت از محل ورود کاتتر</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>پیگیری منظم با پزشک معالج</span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    خدمات پرستاری و پزشکی در منزل نوید زندگی می‌تواند در این مرحله به بیماران کمک کند تا دوران نقاهت را در منزل و با آرامش طی کنند.
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
                نیاز به مراقبت پس از آنژیوگرافی دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                تیم پزشکی نوید زندگی آماده ارائه خدمات پرستاری و مراقبت در منزل شما است
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

export default AngiographyRecoveryTimePage;
