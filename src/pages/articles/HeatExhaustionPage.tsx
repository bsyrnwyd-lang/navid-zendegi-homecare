import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heatImage from "@/assets/heat-exhaustion-article.jpg";

const HeatExhaustionPage = () => {
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
              
              <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  گرمازدگی: تشخیص و درمان فوری در منزل با نوید زندگی
                </h1>
                <div className="mb-8">
                  <img 
                    src={heatImage} 
                    alt="درمان گرمازدگی در منزل توسط تیم پزشکی" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  گرمازدگی یکی از خطرناک‌ترین شرایط ناشی از گرما است که در فصل تابستان شایع می‌شود و نیاز به مداخله فوری دارد.
                </p>

                <h2 className="text-2xl font-bold mb-6">علائم گرمازدگی</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>افزایش شدید دمای بدن (بالای ۴۰ درجه)</li>
                  <li>تغییر وضعیت ذهنی و سردرگمی</li>
                  <li>پوست داغ و خشک</li>
                  <li>تنفس سریع و سطحی</li>
                  <li>تپش قلب سریع</li>
                  <li>تهوع و استفراغ</li>
                  <li>ضعف شدید</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">اقدامات فوری</h2>
                
                <p className="leading-relaxed mb-6">
                  بیمار را فوراً به مکان خنک منتقل کنید. لباس‌های اضافی را برداشته و با آب سرد بدن را خنک کنید. یخ روی نقاط مهم بدن مثل زیر بغل، کشاله ران و گردن قرار دهید.
                </p>

                <h2 className="text-2xl font-bold mb-6">درمان‌های پزشکی</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>تزریق سرم برای جبران کمبود آب بدن</li>
                  <li>کنترل الکترولیت‌های خون</li>
                  <li>کاهش دمای بدن تحت نظارت پزشک</li>
                  <li>پایش علائم حیاتی</li>
                  <li>داروهای ضدتشنج در صورت نیاز</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">گروه‌های پرخطر</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>کودکان زیر ۴ سال</li>
                  <li>بزرگسالان بالای ۶۵ سال</li>
                  <li>بیماران قلبی</li>
                  <li>افراد مبتلا به دیابت</li>
                  <li>کارگران در معرض گرما</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">پیشگیری از گرمازدگی</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>نوشیدن مایعات فراوان</li>
                  <li>اجتناب از فعالیت در ساعات گرم روز</li>
                  <li>استفاده از لباس‌های نخی و روشن</li>
                  <li>استراحت در مکان‌های خنک</li>
                  <li>استفاده از کرم ضد آفتاب</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">خدمات اورژانسی نوید زندگی</h2>
                
                <p className="leading-relaxed mb-8">
                  تیم پزشکی نوید زندگی با تجهیزات کامل درمان گرمازدگی در کمترین زمان به منزل شما می‌آیند. خدمات شامل تزریق سرم، کنترل علائم حیاتی و اقدامات خنک‌کردن تحت نظارت پزشک است.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  در مواجهه با علائم گرمازدگی، فوراً با نوید زندگی تماس بگیرید!
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
                    <p className="text-primary font-bold">۰۲۱-۱۲۳۴۵۶۷۸</p>
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

export default HeatExhaustionPage;