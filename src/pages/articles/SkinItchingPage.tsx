import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import RelatedArticles from "@/components/RelatedArticles";
import skinItchingImage from "@/assets/skin-itching-article.jpg";
import skinMolesImage from "@/assets/skin-moles-article.jpg";
import hairLossImage from "@/assets/hair-loss-article.jpg";
import breastMassImage from "@/assets/breast-mass-article.jpg";

const SkinItchingPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "خارش پوستی", url: "/articles/skin-itching" }
  ];

  const structuredData = {
    breadcrumbs: breadcrumbItems,
    article: {
      title: "خارش پوستی؛ علل، تشخیص و درمان در منزل",
      description: "راهنمای جامع خارش پوستی، علل پوستی و سیستمیک، علائم هشداردهنده، مراقبت‌های اولیه و خدمات پزشکی در منزل",
      author: "نوید زندگی",
      publishedDate: "2025-01-15",
      image: skinItchingImage
    }
  };

  const relatedArticles = [
    {
      title: "خال‌های پوستی؛ انواع، علائم هشدار",
      description: "راهنمای جامع خال‌های پوستی و خدمات پزشکی در منزل",
      image: skinMolesImage,
      link: "/articles/skin-moles",
      category: "پوست و مو"
    },
    {
      title: "ریزش مو؛ علل، تشخیص و راه‌های پیگیری",
      description: "راهنمای جامع ریزش مو و خدمات پزشکی در منزل",
      image: hairLossImage,
      link: "/articles/hair-loss",
      category: "پوست و مو"
    },
    {
      title: "توده‌های پستانی؛ علل و تشخیص",
      description: "راهنمای جامع توده‌های پستانی و خدمات پزشکی در منزل",
      image: breastMassImage,
      link: "/articles/breast-mass",
      category: "سلامت زنان"
    }
  ];

  return (
    <>
      <SEOHead
        title="خارش پوستی؛ علل، تشخیص و درمان در منزل | نوید زندگی"
        description="راهنمای جامع خارش پوستی، علل پوستی و سیستمیک، علائم هشداردهنده، مراقبت‌های اولیه و خدمات پزشکی در منزل"
        keywords="خارش پوستی، علل خارش، اگزما، پسوریازیس، کهیر، درمان خارش در منزل، خدمات پزشکی در منزل، متخصص پوست در منزل"
        canonical="https://navidezendegi.com/articles/skin-itching"
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
                  خارش پوستی؛ علل، تشخیص و درمان در منزل
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <span>نوید زندگی</span>
                  <span>•</span>
                  <time dateTime="2025-01-15">۱۵ ژانویه ۲۰۲۵</time>
                  <span>•</span>
                  <span>پوست و مو</span>
                </div>
                <img 
                  src={skinItchingImage} 
                  alt="خارش پوستی - معاینه متخصص پوست در منزل"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">مقدمه</h2>
                  <p className="leading-relaxed">
                    خارش پوستی یکی از مشکلات شایع است که می‌تواند از یک حساسیت ساده تا نشانه‌ای از بیماری‌های جدی‌تر باشد. بسیاری از افراد خارش را بی‌اهمیت می‌دانند، اما وقتی این مشکل طولانی یا همراه با علائم دیگر باشد، نیاز به بررسی پزشکی دارد. با توجه به امکان دریافت خدمات پزشکی در منزل، پیگیری خارش پوستی در خانه بسیار راحت‌تر از قبل شده است.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">علل شایع خارش پوستی</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">بیماری‌های پوستی</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>اگزما</li>
                        <li>پسوریازیس</li>
                        <li>کهیر</li>
                        <li>خشکی پوست (شایع در سالمندان)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">عوامل محیطی و آلرژیک</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>نیش حشرات</li>
                        <li>آلرژی غذایی یا دارویی</li>
                        <li>استفاده از شوینده‌ها یا مواد شیمیایی تحریک‌کننده</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">علل سیستمیک (غیرپوستی)</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>مشکلات کبدی یا کلیوی</li>
                        <li>کم‌کاری یا پرکاری تیروئید</li>
                        <li>کم‌خونی یا دیابت</li>
                        <li>برخی سرطان‌ها (مثل لنفوم‌ها)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">علائم هشداردهنده همراه با خارش</h2>
                  <p className="leading-relaxed mb-4">
                    اگر خارش پوستی با این علائم همراه باشد، نیاز به پیگیری فوری دارد:
                  </p>
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-red-800 dark:text-red-200">
                      <li>• خارش شدید و طولانی‌مدت (بیش از ۲ هفته)</li>
                      <li>• وجود بثورات پوستی گسترده یا تاول</li>
                      <li>• همراهی با تب، کاهش وزن یا تعریق شبانه</li>
                      <li>• خارش در کل بدن بدون علت مشخص</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">مراقبت‌های اولیه در منزل</h2>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                    <ul className="space-y-3">
                      <li>• استفاده از مرطوب‌کننده‌ها برای پوست خشک</li>
                      <li>• دوش آب ولرم به جای آب داغ</li>
                      <li>• پرهیز از خاراندن پوست (برای جلوگیری از عفونت)</li>
                      <li>• استفاده از لباس‌های نخی و گشاد</li>
                      <li>• شناسایی و پرهیز از محرک‌ها (غذا، دارو، شوینده‌ها)</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">نقش خدمات پزشکی در منزل در پیگیری خارش</h2>
                  <p className="leading-relaxed mb-4">
                    با خدمات پزشکی در منزل در <a href="https://navidezendegi.com" className="text-primary hover:underline">navidezendegi.com</a> می‌توانید:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li>• ویزیت پزشک عمومی یا متخصص پوست در منزل</li>
                    <li>• دریافت نسخه دارویی یا کرم‌های موضعی بدون نیاز به مراجعه حضوری</li>
                    <li>• انجام آزمایش‌های خونی یا بررسی‌های تخصصی در منزل</li>
                    <li>• پیگیری وضعیت بیمار و پیشگیری از پیشرفت بیماری</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">جمع‌بندی</h2>
                  <p className="leading-relaxed">
                    خارش پوستی معمولاً بی‌خطر است، اما در برخی موارد می‌تواند نشانه‌ای از بیماری‌های مهم باشد. بررسی و درمان به‌موقع بسیار اهمیت دارد. با استفاده از خدمات پزشکی در منزل می‌توانید بدون نیاز به مراجعه حضوری، علت خارش را مشخص کرده و درمان مناسب را در خانه دریافت کنید.
                  </p>
                </section>

                <section className="bg-primary/5 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    نیاز به معاینه پوست و مشاوره پزشکی دارید؟
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    متخصصان پوست و پزشکان نوید زندگی آماده ارائه خدمات ویزیت و معاینه در منزل شما هستند.
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

              <RelatedArticles articles={relatedArticles} />
            </article>
          </div>
        </main>

        <FloatingContact />
        <Footer />
      </div>
    </>
  );
};

export default SkinItchingPage;
