import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Clock, Heart } from "lucide-react";
import doctorPatientImage from "@/assets/iranian-doctor-home-visit-optimized.jpg";

const Hero = memo(() => {
  const phoneNumber = "09386117912";
  
  const handleCall = useCallback(() => {
    window.location.href = `tel:${phoneNumber}`;
  }, []);

  const handleWhatsApp = useCallback(() => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 z-0">
        <img 
          src={doctorPatientImage} 
          alt="ویزیت پزشک در منزل تهران - خدمات پزشکی نوید زندگی شامل ویزیت دکتر عمومی و متخصص در خانه"
          className="w-full h-full object-cover opacity-20"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 hero-gradient opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            ویزیت متخصص قلب و پزشک در منزل تهران | نوید زندگی
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              هولتر در منزل | اکو قلب در منزل | پزشک عمومی در منزل
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            ویزیت متخصص قلب، هولتر ۲۴ ساعته، اکوکاردیوگرافی و پزشک عمومی در منزل
            <br />
            خدمات تخصصی قلب و عروق در سراسر تهران و کرج - تماس: <a href="tel:09386117912" className="text-primary hover:underline font-semibold">09386117912</a>
          </p>
          
          {/* لینک‌های سریع به خدمات اصلی */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <a href="/cardiology" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              ویزیت متخصص قلب در منزل
            </a>
            <a href="/services/holter" className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium hover:bg-secondary/20 transition-colors">
              هولتر در منزل
            </a>
            <a href="/general-doctor" className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors">
              پزشک عمومی در منزل
            </a>
            <a href="/services/specialist" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              ویزیت متخصص در منزل
            </a>
          </div>
          
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
});

Hero.displayName = 'Hero';

export default Hero;