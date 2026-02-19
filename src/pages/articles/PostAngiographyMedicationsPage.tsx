import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import medicationsImage from "@/assets/post-angiography-medications.jpg";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const PostAngiographyMedicationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="داروهای ضروری بعد از آنژیوگرافی و استنت‌گذاری | راهنمای دارویی"
        description="راهنمای کامل داروهای ضد پلاکت، استاتین‌ها و داروهای کنترل فشار خون بعد از آنژیوگرافی و استنت‌گذاری - دکتر نیره مظاهری تهرانی"
        keywords="داروهای بعد از استنت، مراقبت بعد از آنژیوگرافی، پلاویکس بعد از استنت، آسپرین قلب، استاتین‌ها، داروی بیماران قلبی، خدمات پزشکی در منزل"
        canonical="https://navidzendegi.ir/articles/post-angiography-medications"
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
              <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"داروهای بعد آنژیوگرافی",url:"/articles/post-angiography-medications"}]} />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                داروهای ضروری بعد از آنژیوگرافی و استنت‌گذاری
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm text-muted-foreground">
                  نویسنده: دکتر نیره مظاهری تهرانی - متخصص قلب و عروق
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={medicationsImage} 
                  alt="داروهای ضروری بعد از آنژیوگرافی و استنت‌گذاری قلب"
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
                    بعد از انجام آنژیوگرافی و به‌ویژه استنت‌گذاری قلب، مصرف منظم داروها طبق دستور پزشک اهمیت حیاتی دارد. این داروها از بسته شدن استنت و بروز مجدد سکته قلبی جلوگیری می‌کنند و نقش کلیدی در حفظ سلامت عروق دارند.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">🔹 داروهای ضد پلاکت</h2>
                  <p>
                    داروهای ضد پلاکت مانع از چسبیدن پلاکت‌ها به هم و ایجاد لخته در داخل استنت می‌شوند.
                    دو داروی اصلی در این گروه عبارتند از:
                  </p>

                  <div className="bg-muted/30 p-6 rounded-lg border-r-4 border-primary my-6">
                    <ul className="list-disc list-inside space-y-3">
                      <li className="text-foreground">
                        <strong>آسپرین:</strong> معمولاً باید برای همیشه مصرف شود.
                      </li>
                      <li className="text-foreground">
                        <strong>پلاویکس (Clopidogrel) یا تیکاگرلور (Ticagrelor):</strong> این داروها معمولاً باید به مدت ۶ تا ۱۲ ماه مصرف شوند و قطع آن فقط با نظر پزشک مجاز است.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-r-4 border-red-500 my-6">
                    <p className="text-foreground font-semibold">
                      ⚠️ توجه
                    </p>
                    <p className="mt-3">
                      قطع ناگهانی هر یک از این داروها می‌تواند باعث گرفتگی استنت و بروز سکته قلبی مجدد شود. بنابراین، بیمار باید همیشه طبق دستور پزشک ادامه درمان دهد.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">🔹 داروهای کنترل‌کننده چربی خون (استاتین‌ها)</h2>
                  <p>
                    این داروها با کاهش کلسترول و جلوگیری از رسوب چربی در دیواره عروق، مانع تنگی مجدد رگ‌ها می‌شوند.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
                    <p className="text-foreground">
                      <strong>رایج‌ترین داروی این گروه:</strong>
                    </p>
                    <p className="mt-2">
                      آتوروستاتین (Atorvastatin)
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      استفاده از استاتین‌ها معمولاً به‌صورت دائمی توصیه می‌شود.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">🔹 داروهای کنترل فشار و ضربان قلب</h2>
                  <p>
                    بر اساس وضعیت بیمار، ممکن است داروهای زیر نیز تجویز شوند:
                  </p>

                  <div className="bg-muted/30 p-6 rounded-lg my-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span><strong>داروهای کنترل فشار خون</strong> برای جلوگیری از فشار اضافی بر قلب</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span><strong>داروهای کنترل ضربان قلب</strong> جهت تنظیم ریتم قلب</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span><strong>داروهای ضد درد قفسه سینه (نیترات‌ها)</strong> برای کاهش درد و بهبود جریان خون</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      این داروها بر اساس صلاحدید پزشک تعیین و در صورت نیاز به‌مرور تنظیم می‌شوند.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">جمع‌بندی</h2>
                  <p>
                    پس از آنژیوگرافی و استنت‌گذاری، مصرف دقیق و منظم داروها از مهم‌ترین بخش‌های درمان است. رعایت نکردن دستور پزشک در این مرحله می‌تواند عوارض جدی به همراه داشته باشد. در صورت نیاز، تیم پزشکی نوید زندگی آماده است تا با خدمات پرستاری و پایش دارویی در منزل، به بیماران قلبی کمک کند تا درمان خود را با ایمنی و آرامش کامل ادامه دهند.
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
                    <p className="font-semibold text-foreground">مشاوره دارویی ۲۴ ساعته</p>
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
                نیاز به پایش دارویی در منزل دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                تیم پزشکی نوید زندگی آماده ارائه خدمات پرستاری و پایش دارویی در منزل شما است
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

export default PostAngiographyMedicationsPage;
