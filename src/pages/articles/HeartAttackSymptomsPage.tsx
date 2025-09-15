import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heartImage from "@/assets/iranian-cardiology-home.jpg";

const HeartAttackSymptomsPage = () => {
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
                  سکته قلبی در منزل: علائم و ویزیت متخصص قلب توسط نوید زندگی
                </h1>
                <div className="text-center mb-8">
                  <p className="text-lg font-semibold text-primary">دکتر نیره مظاهری تهرانی</p>
                  <p className="text-sm text-muted-foreground">متخصص قلب و عروق</p>
                </div>
                <div className="mb-8">
                  <img 
                    src={heartImage} 
                    alt="ویزیت متخصص قلب در منزل برای تشخیص علائم سکته قلبی" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  علائم سکته قلبی (Myocardial Infarction) باید جدی گرفته شوند، زیرا تشخیص سریع می‌تواند جان بیمار را نجات دهد. طبق منابع معتبر مانند Braunwald's Heart Disease، این علائم شامل موارد زیر هستند:
                </p>

                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>درد شدید در قفسه سینه (فشارنده، فشاری یا سوزش) که بیش از چند دقیقه طول می‌کشد</li>
                  <li>انتشار درد به بازوها، گردن، فک، پشت یا پایین شانه‌ها</li>
                  <li>تنگی نفس و تعریق سرد</li>
                  <li>تهوع یا استفراغ</li>
                  <li>احساس ضعف یا سبکی سر</li>
                  <li>اضطراب شدید</li>
                  <li>گاهی سرفه یا فشار مختصر در معده</li>
                </ul>

                <p className="leading-relaxed mb-8">
                  در صورت مشاهده هر یک از این علائم، مراجعه فوری به اورژانس یا درخواست ویزیت متخصص قلب در منزل حیاتی است.
                </p>

                <p className="leading-relaxed mb-8">
                  با خدمات نوید زندگی، می‌توانید ویزیت متخصص قلب در خانه دریافت کنید و در امنیت و آرامش خانه خود مراقبت‌های فوری قلبی را شروع کنید. این خدمات به شما کمک می‌کند تا از عوارض جدی سکته قلبی پیشگیری کنید و شانس بهبودی سریع را افزایش دهید.
                </p>

                <h2 className="text-2xl font-bold mb-6">اهمیت تشخیص سریع سکته قلبی</h2>
                
                <p className="leading-relaxed mb-6">
                  زمان در درمان سکته قلبی بسیار حیاتی است. هر دقیقه تأخیر می‌تواند باعث آسیب بیشتر به عضله قلب شود. دسترسی سریع به متخصص قلب در منزل می‌تواند نقش تعیین‌کننده‌ای در نجات جان بیمار داشته باشد.
                </p>

                <h2 className="text-2xl font-bold mb-6">خدمات کاردیولوژی در منزل نوید زندگی</h2>
                
                <p className="leading-relaxed mb-8">
                  متخصصین قلب نوید زندگی با تجهیزات پیشرفته به منزل شما می‌آیند و امکان انجام ارزیابی‌های اولیه و تشخیص سریع علائم سکته قلبی را فراهم می‌کنند. این خدمات شامل معاینات تخصصی، انجام نوار قلب و در صورت نیاز، هماهنگی برای انتقال سریع به مرکز درمانی مناسب است.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  در شرایط اورژانسی قلبی، فوراً با نوید زندگی تماس بگیرید!
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

export default HeartAttackSymptomsPage;