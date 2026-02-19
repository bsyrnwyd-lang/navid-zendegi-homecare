import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import nailSpotsImage from "@/assets/nail-spots-article.jpg";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const NailSpotsPage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"لکه‌های سفید ناخن",url:"/articles/nail-spots"}]} />
              
              <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  لکه‌های سفید روی ناخن؛ نشانه کمبود ویتامین یا زنگ خطر بیماری؟
                </h1>
                <div className="mb-8">
                  <img 
                    src={nailSpotsImage} 
                    alt="بررسی لکه‌های سفید ناخن توسط پزشک متخصص در منزل" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  سفیدی ناخن مشکلی است که هم در کودکان و هم در بزرگسالان وجود دارد و به دلایل مختلفی برمی‌گردد. برای درمان این لکه‌ها ابتدا باید دلیل آن را پیدا کنید.
                </p>

                <h2 className="text-2xl font-bold mb-6">انواع لکه‌های سفید ناخن</h2>
                
                <h3 className="text-xl font-semibold mb-4">لکه‌های کوچک و پراکنده</h3>
                <p className="leading-relaxed mb-6">
                  این نوع لکه‌ها معمولاً ناشی از ضربه‌های جزئی به ناخن یا کمبود مواد مغذی هستند و اغلب بی‌ضرر محسوب می‌شوند.
                </p>

                <h3 className="text-xl font-semibold mb-4">نوارهای سفید عرضی</h3>
                <p className="leading-relaxed mb-6">
                  خطوط سفید افقی روی ناخن ممکن است نشانه‌ای از بیماری‌های سیستمیک، کمبود پروتئین یا مسمومیت باشند.
                </p>

                <h3 className="text-xl font-semibold mb-4">سفیدی کامل ناخن</h3>
                <p className="leading-relaxed mb-6">
                  در این حالت تمام ناخن سفید می‌شود که ممکن است نشانه مشکلات جدی‌تری مانند بیماری‌های کبدی یا کلیوی باشد.
                </p>

                <h2 className="text-2xl font-bold mb-6">علل اصلی لکه‌های سفید ناخن</h2>
                
                <h3 className="text-xl font-semibold mb-4">کمبود ویتامین‌ها و مواد معدنی</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>کمبود روی (زینک)</li>
                  <li>کمبود کلسیم</li>
                  <li>کمبود ویتامین B12</li>
                  <li>کمبود آهن</li>
                  <li>کمبود پروتئین</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">آسیب‌های فیزیکی</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>ضربه به ناخن</li>
                  <li>فشار مداوم</li>
                  <li>استفاده نادرست از ابزار مانیکور</li>
                  <li>جویدن ناخن</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">عفونت‌های قارچی</h3>
                <p className="leading-relaxed mb-6">
                  عفونت‌های قارچی ناخن می‌توانند باعث ایجاد لکه‌های سفید، زردی یا تغییر رنگ ناخن شوند و نیاز به درمان تخصصی دارند.
                </p>

                <h3 className="text-xl font-semibold mb-4">بیماری‌های زمینه‌ای</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>بیماری‌های کبدی</li>
                  <li>اختلالات کلیوی</li>
                  <li>بیماری‌های قلبی</li>
                  <li>دیابت</li>
                  <li>اختلالات تیروئید</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">چه زمانی باید نگران شد؟</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>لکه‌های سفید در تمام ناخن‌ها</li>
                  <li>تغییر شکل و ضخامت ناخن</li>
                  <li>درد یا التهاب اطراف ناخن</li>
                  <li>بوی نامطبوع از ناخن</li>
                  <li>همراهی با علائم سیستمیک</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">روش‌های تشخیص</h2>
                
                <h3 className="text-xl font-semibold mb-4">معاینه بالینی</h3>
                <p className="leading-relaxed mb-6">
                  پزشک با معاینه ظاهر ناخن، الگوی لکه‌ها و سایر علائم همراه، تشخیص اولیه را انجام می‌دهد.
                </p>

                <h3 className="text-xl font-semibold mb-4">آزمایش‌های خون</h3>
                <p className="leading-relaxed mb-6">
                  برای بررسی کمبود ویتامین‌ها، مواد معدنی و عملکرد اندام‌های داخلی، آزمایش‌های خون انجام می‌شود.
                </p>

                <h3 className="text-xl font-semibold mb-4">کشت قارچ</h3>
                <p className="leading-relaxed mb-6">
                  در صورت مشکوک بودن به عفونت قارچی، نمونه‌گیری از ناخن برای کشت قارچ انجام می‌شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">روش‌های درمان</h2>
                
                <h3 className="text-xl font-semibold mb-4">تغذیه مناسب</h3>
                <p className="leading-relaxed mb-6">
                  رژیم غذایی غنی از پروتئین، ویتامین‌ها و مواد معدنی برای بهبود سلامت ناخن ضروری است.
                </p>

                <h3 className="text-xl font-semibold mb-4">مکمل‌های غذایی</h3>
                <p className="leading-relaxed mb-6">
                  در صورت تأیید کمبود، مصرف مکمل‌های ویتامین و مواد معدنی تحت نظر پزشک توصیه می‌شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">خدمات بررسی و درمان در منزل</h2>
                
                <p className="leading-relaxed mb-8">
                  نوید زندگی خدمات ویزیت پزشک عمومی، متخصص داخلی و آزمایش در منزل را ارائه می‌دهد. این خدمات شامل معاینه تخصصی، آزمایش‌های تشخیصی و ارائه برنامه درمانی مناسب است.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  برای بررسی لکه‌های سفید ناخن و تشخیص علت آن، با نوید زندگی تماس بگیرید!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t">
                  <Button onClick={handleCall} size="lg" className="text-lg px-8">
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: {phoneNumber}
                  </Button>
                  <Button onClick={handleWhatsApp} variant="outline" size="lg" className="text-lg px-8">
                    <MessageCircle className="ml-2 h-5 w-5" />
                    پیام در واتساپ
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </article>
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
                    <p className="font-semibold text-foreground">ویزیت پزشک در منزل ۲۴ ساعته</p>
                    <a href="tel:+989386117912" className="text-primary font-bold hover:text-primary/80 transition-colors">
                      ۰۹۳۸۶۱۱۷۹۱۲
                    </a>
                  </div>
                </div>
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

export default NailSpotsPage;