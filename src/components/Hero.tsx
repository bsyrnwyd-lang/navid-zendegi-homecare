import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/iranian-medical-hero.jpg";
import doctorPatientImage from "@/assets/iranian-doctor-home-visit.jpg";

const Hero = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 z-0">
        <img 
          src={doctorPatientImage} 
          alt="ویزیت پزشک در منزل تهران - خدمات پزشکی نوید زندگی شامل ویزیت دکتر عمومی و متخصص در خانه"
          className="w-full h-full object-cover opacity-20"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 hero-gradient opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            ویزیت پزشک در منزل تهران
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              نوید زندگی | ویزیت پزشک عمومی و متخصص در منزل
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            پرستاری در منزل، تزریقات در منزل، پزشک متخصص در منزل توسط نوید زندگی
            <br />
            ویزیت پزشک قلب در منزل در سراسر تهران و کرج
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ minHeight: '120px' }}>
            <Button
              variant="hero"
              size="lg"
              onClick={handleCall}
              className="flex items-center gap-3 text-lg px-8 py-6 w-full sm:w-auto"
            >
              <Phone className="w-6 h-6" />
              تماس فوری
              <span className="ltr font-bold">{phoneNumber}</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsApp}
              className="flex items-center gap-3 text-lg px-8 py-6 border-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" />
              واتساپ
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="medical-card text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-lg font-semibold mb-2">تضمین کیفیت نوید زندگی</h2>
              <p className="text-muted-foreground">بالاترین استانداردهای پزشکی بین‌المللی</p>
            </div>
            <div className="medical-card text-center">
              <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h2 className="text-lg font-semibold mb-2">خدمات ۲۴ ساعته در تهران</h2>
              <p className="text-muted-foreground">پاسخگویی فوری در تمام ساعات شبانه‌روز</p>
            </div>
            <div className="medical-card text-center">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-lg font-semibold mb-2">مراقبت تخصصی در منزل</h2>
              <p className="text-muted-foreground">با تیم پزشکی مجرب نوید زندگی</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;