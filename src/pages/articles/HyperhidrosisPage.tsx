import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import LazyImage from "@/components/LazyImage";
import StructuredData from "@/components/StructuredData";
import SEOHead from "@/components/SEOHead";
import hyperhidrosisImage from "@/assets/hyperhidrosis-article.jpg";

const HyperhidrosisPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تعریق بیش از حد: علت‌ها و راهکارهای درمان", url: "/articles/hyperhidrosis" }
  ];

  return (
    <>
      <SEOHead
        title="تعریق بیش از حد: علت‌ها و راهکارهای درمان | نوید زندگی"
        description="راهنمای جامع تعریق بیش از حد، علل، علائم خطرناک، راهکارهای درمان و خدمات پزشکی در منزل. راهنمای کامل با نظارت دکتر نیره مظاهری تهرانی"
        keywords="تعریق بیش از حد، علل تعریق شبانه، درمان تعریق شدید، مشکلات تیروئید و تعریق، خدمات پزشکی در منزل"
        canonical="https://navidzendegi.com/articles/hyperhidrosis"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2024-01-23T00:00:00Z"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "تعریق بیش از حد: علت‌ها و راهکارهای درمان",
          description: "راهنمای جامع تعریق بیش از حد، علل، راهکارهای درمان و خدمات پزشکی در منزل",
          author: "دکتر نیره مظاهری تهرانی",
          publishedDate: "2024-01-23",
          image: hyperhidrosisImage
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbs} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                تعریق بیش از حد: علت‌ها و راهکارهای درمان
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: دکتر نیره مظاهری تهرانی، متخصص قلب و عروق</span>
                <span>تاریخ انتشار: 23 ژانویه 2024</span>
              </div>

              <LazyImage
                src={hyperhidrosisImage}
                alt="تعریق بیش از حد: علت‌ها و راهکارهای درمان"
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              />
            </header>

            <div className="space-y-6 text-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">مقدمه</h2>
                <p>
                  تعریق یک فرآیند طبیعی برای تنظیم دمای بدن است. وقتی هوا گرم می‌شود یا بدن فعالیت بدنی دارد، غدد عرق فعال شده و با تبخیر عرق، دمای بدن را متعادل می‌کنند. با این حال، در برخی افراد میزان تعریق بیش از حد طبیعی است و می‌تواند نشانه‌ای از یک مشکل پزشکی باشد.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">چه زمانی تعریق طبیعی است؟</h2>
                <p>
                  اگر فردی از گذشته همیشه بیشتر از دیگران عرق می‌کرده، معمولاً جای نگرانی نیست. اما اگر اخیراً تعریق افزایش یافته یا بدون دلیل مشخص (مثل گرما یا فعالیت) فرد دچار تعریق شدید شده، نیاز به بررسی پزشکی وجود دارد.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">علل احتمالی تعریق بیش از حد</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">اضافه وزن:</h3>
                    <p>افراد دارای اضافه وزن بیشتر مستعد تعریق هستند.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">بیماری‌های تیروئید (هایپرتیروئیدی):</h3>
                    <ul className="list-disc list-inside space-y-1 mr-4">
                      <li><strong>علائم همراه:</strong> کاهش وزن غیرقابل توجیه، تپش قلب، لرزش دست.</li>
                      <li>نیازمند مراجعه به متخصص غدد است.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">عفونت‌ها و بیماری‌های جدی‌تر:</h3>
                    <p>تعریق شبانه همراه با سرفه یا کاهش وزن می‌تواند نشانه سل، برخی عفونت‌های ریوی یا حتی برخی سرطان‌ها باشد.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">یائسگی در خانم‌ها:</h3>
                    <p>در زنان نزدیک به سن یائسگی، حملات گرگرفتگی، تعریق شدید و نامنظمی قاعدگی می‌تواند نشانه تغییرات هورمونی باشد.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">اضطراب و استرس:</h3>
                    <p>یکی از علل شایع تعریق در شرایط روزمره.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">چه زمانی باید به پزشک مراجعه کرد؟</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>تعریق شدید همراه با کاهش وزن غیرطبیعی</li>
                  <li>تعریق همراه با تپش قلب و لرزش دست</li>
                  <li>تعریق شبانه مداوم به‌ویژه همراه با سرفه یا تب</li>
                  <li>تعریق شدید که باعث اختلال در فعالیت‌های روزانه یا خواب می‌شود</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">راهکارهای کنترل تعریق</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>استفاده از لباس‌های نخی و خنک</li>
                  <li>کاهش مصرف غذاهای تند و نوشیدنی‌های کافئین‌دار</li>
                  <li>مدیریت وزن</li>
                  <li>درمان‌های دارویی یا تزریقی (طبق نظر پزشک)</li>
                  <li>بررسی علت زمینه‌ای و درمان بیماری اصلی</li>
                </ul>
              </section>

              <section className="bg-muted/50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">خدمات پزشکی در منزل برای بررسی تعریق بیش از حد</h2>
                <p>اگر تعریق بیش از حد به‌صورت ناگهانی شروع شده یا با علائم دیگری همراه است، لازم است توسط پزشک بررسی شود. استفاده از خدمات پزشکی در منزل می‌تواند به شما کمک کند بدون نیاز به مراجعه حضوری:</p>
                
                <ul className="list-disc list-inside space-y-2 mr-4 mt-4">
                  <li>ویزیت پزشک عمومی یا متخصص در منزل</li>
                  <li>انجام آزمایش خون برای بررسی عملکرد تیروئید یا سایر بیماری‌ها</li>
                  <li>مشاوره تغذیه و کنترل وزن</li>
                  <li>پیگیری درمان‌های دارویی توسط پرستار در منزل</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">نتیجه‌گیری</h2>
                <p>
                  تعریق بیش از حد همیشه نشانه بیماری جدی نیست، اما اگر با علائم دیگر همراه باشد، باید جدی گرفته شود. تشخیص علت اصلی می‌تواند به درمان مؤثر و بهبود کیفیت زندگی کمک کند. استفاده از خدمات پزشکی و پرستاری در منزل راهی مطمئن برای بررسی و کنترل این مشکل است.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary">نیاز به مشاوره پزشکی دارید؟</h3>
                <p className="text-muted-foreground mb-4">
                  برای دریافت خدمات بررسی علل تعریق بیش از حد و مشاوره پزشکی در منزل با ما تماس بگیرید
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

export default HyperhidrosisPage;