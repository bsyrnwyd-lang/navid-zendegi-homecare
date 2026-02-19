import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import breathingImage from "@/assets/shortness-breath-treatment.jpg";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const BreathingTreatmentPage = () => {
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
              <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"درمان تنگی نفس",url:"/articles/breathing-treatment"}]} />
              
              <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  درمان فوری تنگی نفس در منزل با خدمات نوید زندگی
                </h1>
                <div className="mb-8">
                  <img 
                    src={breathingImage} 
                    alt="درمان تنگی نفس در منزل توسط پزشک متخصص" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  تنگی نفس یکی از علائم خطرناکی است که نیاز به مداخله فوری دارد. درمان سریع و صحیح آن می‌تواند جان بیمار را نجات دهد.
                </p>

                <h2 className="text-2xl font-bold mb-6">علائم تنگی نفس</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>احساس کمبود هوا و سختی در تنفس</li>
                  <li>سرعت تنفس بیش از حد نرمال</li>
                  <li>درد قفسه سینه</li>
                  <li>تپش قلب</li>
                  <li>آبی شدن لب‌ها یا انگشتان</li>
                  <li>اضطراب و ترس</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">اقدامات اولیه</h2>
                
                <p className="leading-relaxed mb-6">
                  در هنگام بروز تنگی نفس، آرامش حفظ کنید و بیمار را در وضعیت نشسته یا نیمه نشسته قرار دهید. لباس‌های تنگ را شل کرده و پنجره‌ها را باز کنید تا هوای تازه وارد شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">روش‌های درمانی</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>اکسیژن‌رسانی در صورت در دسترس بودن</li>
                  <li>استفاده از اسپری برونکودیلاتور در صورت تجویز</li>
                  <li>تکنیک‌های تنفسی آرامش‌بخش</li>
                  <li>تزریق داروهای ضد التهاب در موارد شدید</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">چه زمانی باید فوراً به پزشک مراجعه کرد؟</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>تنگی نفس شدید و ناگهانی</li>
                  <li>درد شدید قفسه سینه</li>
                  <li>آبی شدن لب‌ها یا صورت</li>
                  <li>از دست دادن هوشیاری</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">خدمات اورژانسی نوید زندگی</h2>
                
                <p className="leading-relaxed mb-8">
                  تیم پزشکی نوید زندگی با تجهیزات کامل اورژانسی در کمترین زمان به منزل شما می‌آیند و درمان‌های لازم را انجام می‌دهند. این خدمات شامل اکسیژن‌رسانی، تزریقات ضروری و پایش علائم حیاتی است.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  در مواجهه با تنگی نفس، هیچ لحظه‌ای تلف نکنید و فوراً با نوید زندگی تماس بگیرید!
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

export default BreathingTreatmentPage;