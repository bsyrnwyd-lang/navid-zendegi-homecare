import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, CheckCircle, Phone, Activity, Zap, Syringe, Target } from "lucide-react";
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <Brain className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">ویزیت متخصص مغز و اعصاب در منزل</h3>
                  <p className="text-muted-foreground mb-4">
                    معاینه کامل توسط متخصص نورولوژی، تجویز دارو و پیگیری وضعیت بیمار. این خدمت باعث کاهش استرس جابجایی برای بیماران با شرایط خاص شده و خدمات تخصصی را در کمترین زمان ممکن فراهم می‌کند.
                  </p>
                  <a 
                    href="tel:09386117912" 
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Phone className="ml-2 h-4 w-4" />
                    درخواست ویزیت متخصص نورولوژی در منزل
                  </a>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <Activity className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">نوار عصب و عضله در منزل (EMG/NCS)</h3>
                  <p className="text-muted-foreground mb-4">
                    آیا برای تشخیص گزگز، مورمور شدن، دیسک کمر یا گردن نیاز به نوار عصب و عضله دارید؟ ما تجهیزات پیشرفته نوار عصب و عضله پرتابل را به منزل شما می‌آوریم. این تست توسط پزشک متخصص انجام و نتایج به سرعت تفسیر می‌شود.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">انجام تست توسط پزشک متخصص</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">دقت بالا با دستگاه‌های پیشرفته پرتابل</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">تشخیص آسیب‌های دیسک و گرفتگی عصب</span>
                    </li>
                  </ul>
                  <a 
                    href="tel:09386117912" 
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Phone className="ml-2 h-4 w-4" />
                    رزرو نوار عصب و عضله در منزل
                  </a>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <Syringe className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">بوتاکس درمانی اسپاستیسیتی و میگرن</h3>
                  <p className="text-muted-foreground mb-4">
                    خدمات تخصصی بوتاکس درمانی اکنون در منزل شما قابل انجام است. متخصصان نورولوژی Navidzendegi.com برای بهبود کیفیت زندگی بیماران، تزریقات تخصصی بوتاکس را در محیط امن و آرام خانه انجام می‌دهند.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">بوتاکس برای اسپاسم و اسپاستیسیتی</h4>
                      <p className="text-xs text-muted-foreground">
                        بهترین راه برای کاهش خشکی و سفتی عضلات پس از سکته مغزی یا آسیب‌های عصبی. کاهش درد، بهبود دامنه حرکتی و تسهیل فیزیوتراپی.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">درمان میگرن مزمن با بوتاکس</h4>
                      <p className="text-xs text-muted-foreground">
                        برای سردردهای میگرنی شدید و مکرر که با دارو کنترل نمی‌شوند. کاهش چشمگیر تعداد حملات و شدت درد.
                      </p>
                    </div>
                  </div>
                  <a 
                    href="tel:09386117912" 
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Phone className="ml-2 h-4 w-4" />
                    مشاوره و درخواست بوتاکس درمانی در منزل
                  </a>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">بلوک عصب برای سردردهای مزمن</h3>
                  <p className="text-muted-foreground mb-4">
                    یکی از روش‌های موثر و سریع برای کاهش درد شدید سردردهای مزمن، بلوک‌های عصبی (نوروپاتی) است. اگر جابجایی به دلیل درد برایتان سخت است، متخصصان ما خدمات بلوک عصب در منزل را با دقت بالا ارائه می‌دهند.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">روشی موثر برای سردردهای مقاوم به درمان</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">کاهش سریع و طولانی‌مدت درد</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                      <span className="text-sm">بدون نیاز به بستری شدن</span>
                    </li>
                  </ul>
                  <a 
                    href="tel:09386117912" 
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Phone className="ml-2 h-4 w-4" />
                    درخواست بلوک عصب برای سردرد در منزل
                  </a>
                </CardContent>
              </Card>
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
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default NeurologyPage;