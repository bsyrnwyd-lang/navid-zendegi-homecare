import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import influenzaImage from "@/assets/iranian-doctor-home-visit-optimized.jpg";

const InfluenzaTreatmentPage = () => {
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
        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Article Header */}
              <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  آنفلوآنزا در تهران: درمان سریع و مطمئن در منزل
                </h1>
                <div className="text-center mb-8">
                  <p className="text-lg font-semibold text-primary">دکتر نیره مظاهری تهرانی</p>
                  <p className="text-sm text-muted-foreground">متخصص قلب و عروق</p>
                </div>
                <div className="mb-8">
                  <img 
                    src={influenzaImage} 
                    alt="پزشک در حال ویزیت آنفلوآنزا در منزل تهران" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  آنفلوآنزا یا فلوی فصلی یک عفونت ویروسی دستگاه تنفسی فوقانی است که عمدتاً توسط ویروس‌های آنفلوآنزا نوع A و B ایجاد می‌شود. این بیماری به‌صورت ناگهانی با علائمی مانند:
                </p>

                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>تب بالا</li>
                  <li>سرفه خشک</li>
                  <li>گلودرد</li>
                  <li>بدن‌درد و سردرد</li>
                  <li>خستگی شدید</li>
                  <li>گاهی تهوع یا اسهال</li>
                </ul>

                <p className="leading-relaxed mb-8">
                  ظاهر می‌شود. در افراد سالم، علائم معمولاً ۵ تا ۷ روز طول می‌کشند، اما در کودکان، سالمندان و بیماران با بیماری‌های زمینه‌ای ممکن است منجر به عوارض جدی شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">درمان آنفلوآنزا در منزل تهران</h2>
                
                <p className="leading-relaxed mb-6">
                  در موارد شدید یا در گروه‌های پرخطر، استفاده از داروهای ضدویروسی مانند:
                </p>

                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>اوسلتامیویر (تامفلو)</li>
                  <li>زانامی‌ویر (رلنزا)</li>
                  <li>بالوکساویر ماربوکسیل (زوفلوزا)</li>
                  <li>پری‌تامیویر (برای بیماران بستری)</li>
                </ul>

                <p className="leading-relaxed mb-8">
                  توصیه می‌شود. شروع درمان ظرف ۴۸ ساعت از آغاز علائم، مؤثرترین نتیجه را به همراه دارد.
                </p>

                <p className="leading-relaxed mb-8">
                  برای جلوگیری از تشدید بیماری، بهترین گزینه، استفاده از خدمات پزشکی در منزل در تهران و اطراف تهران است. با نوید زندگی، پزشک متخصص به منزل شما می‌آید، تشخیص دقیق انجام می‌دهد و داروهای لازم را ارائه می‌کند.
                </p>

                <h2 className="text-2xl font-bold mb-6">مزایای استفاده از پزشک در منزل نوید زندگی</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>ویزیت سریع و دقیق پزشک در منزل</li>
                  <li>پیشگیری از انتقال بیماری در بیمارستان و مکان‌های عمومی</li>
                  <li>درمان و ارائه دارو بدون نیاز به مراجعه حضوری</li>
                  <li>مراقبت ویژه از کودکان، سالمندان و بیماران با بیماری‌های زمینه‌ای</li>
                </ul>

                <p className="text-xl font-semibold text-primary mb-8">
                  همین امروز تماس بگیرید و ویزیت پزشک در منزل در تهران را رزرو کنید!
                </p>

                {/* Contact Buttons */}
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

export default InfluenzaTreatmentPage;