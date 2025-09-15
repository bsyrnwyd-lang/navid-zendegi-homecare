import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import cholesterolImage from "@/assets/cholesterol-test-article.jpg";

const CholesterolTestPage = () => {
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
                  آزمایش چربی خون HDL/LDL در منزل با خدمات نوید زندگی
                </h1>
                <div className="mb-8">
                  <img 
                    src={cholesterolImage} 
                    alt="آزمایش چربی خون HDL/LDL در منزل توسط پزشک متخصص" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  آزمایش چربی خون یکی از مهم‌ترین آزمایش‌های تشخیصی برای بررسی سلامت قلب و عروق است که شامل اندازه‌گیری HDL و LDL می‌شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">LDL چیست؟</h2>
                
                <p className="leading-relaxed mb-6">
                  LDL یا کلسترول بد، نوعی لیپوپروتئین است که در صورت افزایش بیش از حد، باعث رسوب در شریان‌ها و افزایش خطر بیماری‌های قلبی می‌شود. سطح نرمال LDL در افراد بالای ۱۸ سال کمتر از ۱۰۰ میلی‌گرم در دسی‌لیتر است.
                </p>

                <h2 className="text-2xl font-bold mb-6">HDL چیست؟</h2>
                
                <p className="leading-relaxed mb-6">
                  HDL یا کلسترول خوب، کلسترول اضافی را از بافت‌ها برداشت کرده و به کبد منتقل می‌کند. سطح مطلوب HDL برای مردان بالای ۴۰ و برای زنان بالای ۵۰ میلی‌گرم در دسی‌لیتر است.
                </p>

                <h2 className="text-2xl font-bold mb-6">مقادیر نرمال آزمایش چربی خون</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>LDL کمتر از ۱۰۰ میلی‌گرم در دسی‌لیتر (مطلوب)</li>
                  <li>HDL بالای ۴۰ میلی‌گرم در دسی‌لیتر برای مردان</li>
                  <li>HDL بالای ۵۰ میلی‌گرم در دسی‌لیتر برای زنان</li>
                  <li>کلسترول کل کمتر از ۲۰۰ میلی‌گرم در دسی‌لیتر</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">شرایط انجام آزمایش</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>ناشتا بودن ۱۰-۱۲ ساعته قبل از آزمایش</li>
                  <li>قطع داروهای موثر بر نتیجه ۲۴ ساعت قبل</li>
                  <li>استفاده از لباس راحت برای نمونه‌گیری</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">مزایای آزمایش در منزل با نوید زندگی</h2>
                
                <p className="leading-relaxed mb-8">
                  خدمات آزمایش در منزل نوید زندگی شامل نمونه‌گیری توسط پرستار مجرب، ارسال سریع نمونه به آزمایشگاه معتبر و دریافت جواب دقیق در کمترین زمان است. شما می‌توانید در آرامش خانه خود این آزمایش مهم را انجام دهید.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  برای انجام آزمایش چربی خون در منزل، همین الان با نوید زندگی تماس بگیرید!
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
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default CholesterolTestPage;