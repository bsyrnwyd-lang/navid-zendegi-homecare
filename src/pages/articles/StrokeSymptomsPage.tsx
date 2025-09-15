import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import strokeImage from "@/assets/neurology.jpg";

const StrokeSymptomsPage = () => {
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
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  تشخیص سریع علائم سکته مغزی با خدمات پزشکی در منزل نوید زندگی
                </h1>
                <div className="mb-8">
                  <img 
                    src={strokeImage} 
                    alt="تشخیص علائم سکته مغزی توسط پزشک متخصص نورولوژی در منزل" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  علائم سکته مغزی معمولاً به‌صورت ناگهانی ظاهر می‌شوند و شامل موارد زیر هستند:
                </p>

                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>ضعف یا بی‌حسی در یک سمت بدن</li>
                  <li>افتادگی صورت</li>
                  <li>اختلال در تکلم یا درک گفتار</li>
                  <li>دوبینی یا کاهش بینایی در یک یا هر دو چشم</li>
                  <li>سرگیجه شدید، اختلال تعادل و هماهنگی</li>
                  <li>سردرد شدید و غیرمعمول</li>
                </ul>

                <p className="leading-relaxed mb-8">
                  تشخیص سریع این علائم بسیار حیاتی است، زیرا هر دقیقه تأخیر می‌تواند باعث آسیب دائمی به مغز شود. خدمات پزشکی و نورولوژی در منزل نوید زندگی امکان ویزیت فوری توسط متخصصین مجرب را فراهم می‌کند و شانس بهبودی بیمار را به‌طور قابل توجهی افزایش می‌دهد.
                </p>

                <p className="leading-relaxed mb-8">
                  با نوید زندگی، دیگر نیازی به انتظار در صف اورژانس نیست و می‌توانید در امنیت و آرامش خانه خود مراقبت‌های پزشکی لازم را دریافت کنید.
                </p>

                <h2 className="text-2xl font-bold mb-6">اهمیت تشخیص سریع سکته مغزی</h2>
                
                <p className="leading-relaxed mb-6">
                  زمان در درمان سکته مغزی بسیار حیاتی است. هر دقیقه تأخیر می‌تواند منجر به از بین رفتن میلیون‌ها نورون مغزی شود. به همین دلیل، دسترسی سریع به متخصص نورولوژی در منزل می‌تواند نقش تعیین‌کننده‌ای در روند بهبودی داشته باشد.
                </p>

                <h2 className="text-2xl font-bold mb-6">خدمات نورولوژی در منزل نوید زندگی</h2>
                
                <p className="leading-relaxed mb-8">
                  متخصصین نوید زندگی با تجهیزات پیشرفته به منزل شما می‌آیند و امکان انجام ارزیابی‌های اولیه و تشخیص سریع علائم سکته را فراهم می‌کنند. این خدمات شامل معاینات تخصصی، ارزیابی عصبی و در صورت نیاز، هماهنگی برای انتقال سریع به مرکز درمانی مناسب است.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  در شرایط اورژانسی سکته مغزی، فوراً با نوید زندگی تماس بگیرید!
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
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default StrokeSymptomsPage;