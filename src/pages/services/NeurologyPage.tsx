import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import { Brain, CheckCircle, Phone, Activity, Syringe, Target } from "lucide-react";
import neurologyImage from "@/assets/neurology.jpg";

const NeurologyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
                  ویزیت متخصص مغز و اعصاب در منزل (دکتر نورولوژی در خانه)
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  اگر بیمار شما دچار بیماری‌های مغز و اعصاب (مانند سکته مغزی، ام‌اس، پارکینسون، صرع یا سردرد مزمن) است و جابجایی برایتان دشوار است، Navidzendegi.com این کار را برای شما آسان می‌کند. با یک تماس، مجرب‌ترین متخصص نورولوژی به منزل شما اعزام می‌شود تا معاینه کامل، تنظیم دارو و طرح درمانی را در آرامش خانه انجام دهد. سلامت عزیزانتان اولویت ماست.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: 09386117912
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={neurologyImage} 
                  alt="ویزیت متخصص مغز و اعصاب در منزل - تشخیص اختلالات عصبی"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">خدمات متخصص مغز و اعصاب در منزل</h2>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {/* Service 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">ویزیت متخصص مغز و اعصاب در منزل</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  معاینه کامل توسط متخصص نورولوژی، تجویز دارو و پیگیری وضعیت بیمار. این خدمت باعث کاهش استرس جابجایی برای بیماران با شرایط خاص شده و خدمات تخصصی را در کمترین زمان ممکن فراهم می‌کند.
                </p>
                <a 
                  href="tel:09386117912" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  درخواست ویزیت متخصص نورولوژی در منزل
                </a>
              </div>

              <div className="border-t border-muted"></div>

              {/* Service 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">نوار عصب و عضله در منزل (EMG/NCS)</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  آیا برای تشخیص گزگز، مورمور شدن، دیسک کمر یا گردن نیاز به نوار عصب و عضله دارید؟ ما تجهیزات پیشرفته نوار عصب و عضله پرتابل را به منزل شما می‌آوریم. این تست توسط پزشک متخصص انجام و نتایج به سرعت تفسیر می‌شود.
                </p>
                <div className="bg-muted/20 p-6 rounded-lg mb-4">
                  <h4 className="font-semibold text-lg mb-3">مزایای نوار عصب و عضله در خانه:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary ml-2 mt-0.5 flex-shrink-0" />
                      <span>انجام تست توسط پزشک متخصص</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary ml-2 mt-0.5 flex-shrink-0" />
                      <span>دقت بالا با دستگاه‌های پیشرفته پرتابل</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary ml-2 mt-0.5 flex-shrink-0" />
                      <span>تشخیص آسیب‌های دیسک، گرفتگی عصب و مشکلات عضلانی</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href="tel:09386117912" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  رزرو نوار عصب و عضله در منزل
                </a>
              </div>

              <div className="border-t border-muted"></div>

              {/* Service 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Syringe className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">بوتاکس درمانی اسپاستیسیتی و میگرن</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  خدمات تخصصی بوتاکس درمانی اکنون در منزل شما قابل انجام است. متخصصان نورولوژی Navidzendegi.com برای بهبود کیفیت زندگی بیماران، تزریقات تخصصی بوتاکس را در محیط امن و آرام خانه انجام می‌دهند.
                </p>
                <div className="space-y-4 mb-4">
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">بخش ۱: بوتاکس برای اسپاسم و اسپاستیسیتی (بعد از سکته مغزی)</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      بهترین راه برای کاهش خشکی و سفتی عضلات (اسپاستیسیتی) پس از سکته مغزی یا آسیب‌های عصبی، تزریق بوتاکس است. این روش به کاهش درد، بهبود دامنه حرکتی و تسهیل فیزیوتراپی کمک می‌کند. بوتاکس اسپاستیسیتی در منزل توسط پزشک متخصص با هدف بازگشت توانایی‌های حرکتی انجام می‌شود.
                    </p>
                  </div>
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">بخش ۲: درمان میگرن مزمن با بوتاکس در منزل</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      اگر دچار سردردهای میگرنی شدید و مکرر هستید که با دارو کنترل نمی‌شوند، تزریق بوتاکس یک راه حل موثر است. این روش تخصصی بوتاکس میگرن در منزل، تعداد حملات و شدت درد را به طور چشمگیری کاهش می‌دهد و کیفیت زندگی شما را بهبود می‌بخشد.
                    </p>
                  </div>
                </div>
                <a 
                  href="tel:09386117912" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  مشاوره و درخواست بوتاکس درمانی در منزل
                </a>
              </div>

              <div className="border-t border-muted"></div>

              {/* Service 4 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">بلوک عصب برای سردردهای مزمن</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  یکی از روش‌های موثر و سریع برای کاهش درد شدید سردردهای مزمن، بلوک‌های عصبی (نوروپاتی) است. اگر جابجایی به دلیل درد برایتان سخت است، متخصصان ما خدمات بلوک عصب در منزل را با دقت بالا ارائه می‌دهند.
                </p>
                <div className="bg-muted/20 p-6 rounded-lg mb-4">
                  <h4 className="font-semibold text-lg mb-3">ویژگی‌های خدمت:</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    این تزریق‌ها با هدف مسدود کردن سیگنال‌های درد عصب‌های سر و گردن انجام می‌شود و آرامش فوری را برای بیماران به ارمغان می‌آورد.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary ml-2 mt-0.5 flex-shrink-0" />
                      <span>روشی موثر برای سردردهای مقاوم به درمان</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary ml-2 mt-0.5 flex-shrink-0" />
                      <span>کاهش سریع و طولانی‌مدت درد</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary ml-2 mt-0.5 flex-shrink-0" />
                      <span>بدون نیاز به بستری شدن یا مراجعه حضوری</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href="tel:09386117912" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  درخواست بلوک عصب برای سردرد در منزل
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="section-title mb-6">ویزیت متخصص مغز و اعصاب در منزل</h2>
            <p className="text-lg text-muted-foreground mb-8">
              تشخیص دقیق اختلالات عصبی در راحتی منزل
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default NeurologyPage;