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
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  تشخیص سریع علائم سکته مغزی با خدمات پزشکی در منزل نوید زندگی
                </h1>
                <div className="text-center mb-8">
                  <p className="text-lg font-semibold text-primary">دکتر نیره مظاهری تهرانی</p>
                  <p className="text-sm text-muted-foreground">متخصص قلب و عروق</p>
                </div>
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

export default StrokeSymptomsPage;