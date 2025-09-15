import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heartImage from "@/assets/cardiology-home-visit.jpg";

const SmokingHeartEffectsPage = () => {
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
                  تأثیر سیگار بر سلامت قلب و عروق و نقش خدمات پزشکی در منزل نوید زندگی
                </h1>
                <div className="text-center mb-8">
                  <p className="text-lg font-semibold text-primary">دکتر نیره مظاهری تهرانی</p>
                  <p className="text-sm text-muted-foreground">متخصص قلب و عروق</p>
                </div>
                <div className="mb-8">
                  <img 
                    src={heartImage} 
                    alt="تأثیر سیگار بر سلامت قلب و ویزیت متخصص قلب در منزل" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  سیگار کشیدن یکی از عوامل اصلی آسیب به عروق و افزایش خطر حمله قلبی است. مصرف سیگار باعث تخریب عملکرد اندوتلیومی رگ‌ها می‌شود؛ یعنی لایه داخلی رگ‌ها که مسئول تنظیم جریان خون و تعادل بین انقباض و گشاد شدن عروق است.
                </p>

                <p className="leading-relaxed mb-8">
                  در اثر مواد سمی موجود در دود سیگار، از جمله نیکوتین، اکسیدهای نیتروژن و رادیکال‌های آزاد، رگ‌ها دچار التهاب می‌شوند و تولید نیتریک‌اکساید کاهش می‌یابد. کاهش نیتریک‌اکساید و افزایش استرس اکسیداتیو موجب ایجاد پلاک‌های آترواسکلروتیک در دیواره عروق کرونر می‌شود و خطر حمله قلبی و مشکلات قلبی-عروقی را به شدت افزایش می‌دهد.
                </p>

                <h2 className="text-2xl font-bold mb-6">عوارض سیگار بر سیستم قلبی عروقی</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>افزایش خطر حمله قلبی و سکته مغزی</li>
                  <li>تسریع روند آترواسکلروز (تصلب شرایین)</li>
                  <li>افزایش فشار خون و ضربان قلب</li>
                  <li>کاهش اکسیژن رسانی به بافت‌های قلب</li>
                  <li>تشکیل لخته خون در عروق</li>
                  <li>اختلال در عملکرد اندوتلیوم عروقی</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">اهمیت ترک سیگار برای سلامت قلب</h2>
                
                <p className="leading-relaxed mb-6">
                  ترک سیگار یکی از مهم‌ترین اقدامات برای بهبود سلامت قلب و عروق است. تحقیقات نشان می‌دهد که حتی یک سال پس از ترک سیگار، خطر بیماری‌های قلبی تا ۵۰ درصد کاهش می‌یابد.
                </p>

                <h2 className="text-2xl font-bold mb-6">خدمات نوید زندگی برای حفظ سلامت قلب</h2>
                
                <p className="leading-relaxed mb-8">
                  با توجه به این خطرات، پیگیری سلامت قلب و عروق با خدمات پزشکی در منزل نوید زندگی می‌تواند بسیار مفید باشد. ویزیت متخصص قلب در خانه و بررسی‌های دوره‌ای به شما کمک می‌کند تا از بروز مشکلات جدی قلبی پیشگیری کنید و سلامت خود را در محیط امن خانه حفظ نمایید.
                </p>

                <p className="leading-relaxed mb-8">
                  متخصصین کاردیولوژی نوید زندگی می‌توانند برنامه‌ای جامع برای ترک سیگار و بهبود سلامت قلب ارائه دهند و با نظارت مستمر، شما را در مسیر بهبودی یاری کنند.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  برای مشاوره تخصصی قلب و برنامه ترک سیگار، با نوید زندگی تماس بگیرید!
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

export default SmokingHeartEffectsPage;