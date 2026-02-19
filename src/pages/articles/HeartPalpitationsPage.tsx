import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import palpitationsImage from "@/assets/heart-palpitations.jpg";

const HeartPalpitationsPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تپش قلب", url: "/articles/heart-palpitations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="تپش قلب؛ علل، علائم و روش‌های بررسی | راهنمای کامل تپش قلب"
        description="راهنمای کامل تپش قلب، علل شایع، علائم خطرناک، روش‌های بررسی و خدمات هولتر در منزل - دکتر نیره مظاهری تهرانی"
        keywords="تپش قلب، علت تپش قلب، درمان تپش قلب در منزل، هولتر ریتم قلب، خدمات پزشکی در منزل نوید زندگی"
        canonical="https://navidzendegi.ir/articles/heart-palpitations"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        ogImage="/logo.jpg"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 mb-4">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                تپش قلب؛ علل، علائم و روش‌های بررسی
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm text-muted-foreground">
                  نویسنده: دکتر نیره مظاهری تهرانی - متخصص قلب و عروق
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={palpitationsImage} 
                  alt="تپش قلب - علل و روش‌های بررسی"
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
                    تپش قلب به حالتی گفته می‌شود که ضربان قلب بیش از حد نرمال یا نامنظم باشد.
                    گاهی فرد احساس می‌کند که قلبش به‌شدت می‌تپد، در گلو ضربان دارد یا ضربان قلبش "می‌کوبد".
                    این احساس ممکن است موقت باشد یا نشانه‌ای از یک مشکل قلبی زمینه‌ای باشد.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">علل شایع تپش قلب</h2>
                  <p>
                    تپش قلب می‌تواند در نتیجه‌ی عوامل ساده و موقتی ایجاد شود، از جمله:
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">☕</span>
                        <span>مصرف زیاد <strong>کافئین</strong> (قهوه، چای پررنگ، نوشابه انرژی‌زا)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">💧</span>
                        <span><strong>کم آبی بدن</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">🩸</span>
                        <span><strong>کم‌خونی</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">🤒</span>
                        <span><strong>تب</strong> یا عفونت‌های حاد</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">😰</span>
                        <span><strong>استرس، اضطراب</strong> یا عصبانیت</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">😴</span>
                        <span><strong>بی‌خوابی</strong> یا خستگی زیاد</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">👩</span>
                        <span>دوره قاعدگی یا دوران یائسگی در خانم‌ها</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      در بسیاری از این موارد، تپش قلب موقتی است و با برطرف شدن علت، از بین می‌رود.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">علل مهم‌تر و نیازمند بررسی</h2>
                  <p>
                    گاهی تپش قلب ناشی از شرایط مهم‌تری است که باید توسط پزشک بررسی شود، مانند:
                  </p>

                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-r-4 border-red-500 my-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 dark:text-red-400 mt-1">⚠️</span>
                        <span><strong>آریتمی‌های قلبی</strong> (نامنظمی ضربان قلب)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 dark:text-red-400 mt-1">⚠️</span>
                        <span><strong>بیماری‌های تیروئید</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 dark:text-red-400 mt-1">⚠️</span>
                        <span><strong>عوارض داروها</strong> (مانند داروهای ضداحتقان، ضدافسردگی یا محرک‌ها)</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-foreground font-semibold">
                      در این موارد، مراجعه به پزشک ضروری است تا علت اصلی شناسایی و درمان شود.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">راهکارهای کنترل تپش قلب</h2>
                  <p>
                    برای کاهش و پیشگیری از تپش قلب، رعایت چند نکته ساده بسیار کمک‌کننده است:
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>کاهش مصرف سیگار و الکل</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>خواب کافی و منظم</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>مدیریت استرس و اضطراب با تکنیک‌های آرام‌سازی یا مدیتیشن</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>نوشیدن آب کافی در طول روز</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>کاهش مصرف نوشیدنی‌های حاوی کافئین</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">بررسی‌های پزشکی مورد نیاز</h2>
                  <p>
                    در صورت مراجعه به پزشک، ممکن است برای بررسی علت تپش قلب، آزمایش‌ها و تست‌های زیر انجام شود:
                  </p>

                  <div className="bg-muted/30 p-6 rounded-lg my-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>نوار قلب (ECG)</strong> برای بررسی ریتم قلب</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>اکو قلب (Echocardiography)</strong> برای ارزیابی عملکرد عضله و دریچه‌های قلب</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>هولتر مانیتورینگ ۲۴ یا ۴۸ ساعته</strong> برای ثبت ضربان‌های نامنظم در طول شبانه‌روز</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>آزمایش خون و چکاپ کامل</strong> برای بررسی تیروئید، کم‌خونی و سایر عوامل</span>
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">خدمات هولتر و بررسی تپش قلب در منزل</h2>
                  <div className="bg-primary/5 p-6 rounded-lg border-r-4 border-primary my-6">
                    <p className="text-foreground">
                      مرکز نوید زندگی با بهره‌گیری از تجهیزات تخصصی، امکان نصب هولتر فشار و ریتم قلب در منزل را فراهم کرده است.
                      این خدمات به شما کمک می‌کند تا بدون نیاز به مراجعه به مراکز شلوغ، علت تپش قلب خود را در منزل بررسی کرده و نتایج را مستقیماً برای پزشک دریافت کنید.
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
                    <p className="font-semibold text-foreground">مشاوره تپش قلب ۲۴ ساعته</p>
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
                نیاز به هولتر و بررسی تپش قلب دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                تیم پزشکی نوید زندگی آماده ارائه خدمات هولتر و بررسی تپش قلب در منزل شما است
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

export default HeartPalpitationsPage;
