import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import neurobionImage from "@/assets/neurobion-ampoule-article.jpg";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const NeurobionAmpoule = () => {
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
              <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"آمپول نوروبیون",url:"/articles/neurobion-ampoule"}]} />
              
              <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  آمپول نوروبیون: تزریق ویتامین‌های گروه B در منزل
                </h1>
                <div className="mb-8">
                  <img 
                    src={neurobionImage} 
                    alt="تزریق آمپول نوروبیون در منزل توسط پرستار متخصص" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  آمپول نوروبیون حاوی ترکیبی از ویتامین‌های گروه B است که برای تقویت سیستم عصبی و درمان کمبود این ویتامین‌ها استفاده می‌شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">ترکیبات آمپول نوروبیون</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>ویتامین B1 (تیامین): ۱۰۰ میلی‌گرم</li>
                  <li>ویتامین B6 (پیریدوکسین): ۱۰۰ میلی‌گرم</li>
                  <li>ویتامین B12 (سیانوکوبالامین): ۱۰۰۰ میکروگرم</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">موارد مصرف</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>نوروپاتی محیطی</li>
                  <li>کمبود ویتامین‌های گروه B</li>
                  <li>ضعف عضلانی و خستگی</li>
                  <li>اختلالات حافظه</li>
                  <li>درد عصبی</li>
                  <li>بی‌حسی دست و پا</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">فواید آمپول نوروبیون</h2>
                
                <p className="leading-relaxed mb-6">
                  این آمپول به بهبود عملکرد سیستم عصبی، افزایش انرژی، تقویت حافظه و کاهش درد عصبی کمک می‌کند. همچنین در بهبود متابولیسم سلولی و تقویت سیستم ایمنی نقش دارد.
                </p>

                <h2 className="text-2xl font-bold mb-6">نحوه تجویز و مصرف</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>تزریق عضلانی عمیق</li>
                  <li>معمولاً روزانه یک آمپول</li>
                  <li>مدت درمان بر اساس نظر پزشک</li>
                  <li>باید توسط پرستار مجرب تزریق شود</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">عوارض جانبی</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>درد و قرمزی در محل تزریق</li>
                  <li>تهوع خفیف</li>
                  <li>سردرد (نادر)</li>
                  <li>واکنش‌های آلرژیک (نادر)</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">خدمات تزریق در منزل نوید زندگی</h2>
                
                <p className="leading-relaxed mb-8">
                  پرستاران مجرب نوید زندگی آمپول نوروبیون را با رعایت کامل اصول بهداشتی در منزل شما تزریق می‌کنند. این خدمات شامل مشاوره قبل از تزریق، انجام تزریق ایمن و پیگیری پس از درمان است.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  برای دریافت خدمات تزریق نوروبیون در منزل، با نوید زندگی تماس بگیرید!
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

export default NeurobionAmpoule;