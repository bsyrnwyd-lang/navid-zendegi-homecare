import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  return (
    <section id="contact" className="medical-section bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">ارتباط با ما</h2>
          <p className="section-subtitle">
            برای دریافت خدمات پزشکی در منزل همین الان تماس بگیرید
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="medical-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary mb-2">
                  تماس فوری
                </CardTitle>
                <p className="text-muted-foreground">
                  آماده پاسخگویی در تمام ساعات شبانه‌روز
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground ltr mb-4">
                    {phoneNumber}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="hero" 
                      className="flex-1 flex items-center gap-3"
                      onClick={handleCall}
                    >
                      <Phone className="w-5 h-5" />
                      تماس مستقیم
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="flex-1 flex items-center gap-3"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="w-5 h-5" />
                      واتساپ
                    </Button>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">ساعات خدمات‌رسانی:</span>
                  </div>
                  <p className="text-muted-foreground mr-8">
                    ۲۴ ساعته، ۷ روز هفته
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold">آدرس دفتر مرکزی:</span>
                </div>
                <p className="text-muted-foreground mr-8">
                  تهران، شهرآرا، پاتریس، پلاک ۵۰
                </p>
                
                <div className="flex items-center gap-3 mt-4">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">منطقه تحت پوشش:</span>
                </div>
                <p className="text-muted-foreground mr-8">
                  پوشش دهی شهر تهران و اطراف
                </p>
              </CardContent>
            </Card>
            
            <Card className="medical-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-secondary mb-2">
                  مزایای انتخاب نوید زندگی
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>پاسخگویی سریع در کمتر از ۳۰ دقیقه</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p>تیم پزشکی مجرب و متخصص</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>تجهیزات پزشکی مدرن و استاندارد</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>قیمت‌های رقابتی و منصفانه</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p>رعایت کامل پروتکل‌های بهداشتی</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>گزارش‌دهی کامل به خانواده بیمار</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <p className="text-center font-semibold text-foreground">
                    "سلامت شما، اولویت ماست"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 px-4 text-center">
            <div className="bg-card rounded-2xl p-4 sm:p-8 shadow-[var(--shadow-medical)] mx-auto max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                نیاز به مشاوره فوری دارید؟
              </h3>
              <p className="text-muted-foreground mb-6 text-base sm:text-lg">
                کارشناسان ما آماده پاسخگویی به سوالات شما هستند
              </p>
              <Button 
                variant="contact" 
                size="lg"
                onClick={handleCall}
                className="text-lg sm:text-xl px-6 sm:px-12 py-4 sm:py-6 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 ml-3" />
                تماس فوری: {phoneNumber}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;