import { useState, useEffect } from "react";
import { Phone, CheckCircle, Clock, Shield, Star, Stethoscope, MessageCircle, Quote, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const GoogleAdsLandingPage = () => {
  const phoneNumber = "09386117912";
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  // نظرات برتر (برای نمایش در بالا)
  const topReviews = [
    {
      text: "مادرم ۸۵ سال سن داره و امکان بردنش به مطب نبود. پزشک خیلی سریع اومد و با صبر و حوصله معاینه کرد.",
      name: "خانم رضایی",
      location: "تهران"
    },
    {
      text: "ساعت ۱۱ شب بچه‌ام تب کرد. با یه تماس پرستار اومد و سرم وصل کرد. خدمات عالی!",
      name: "آقای محمدی",
      location: "کرج"
    },
    {
      text: "برای پدرم که مشکل قلبی داشت، متخصص قلب با دستگاه اکو اومد منزل. کار حرفه‌ای بود.",
      name: "آقای کریمی",
      location: "تهرانپارس"
    }
  ];

  // سوالات متداول کوتاه شده
  const faqs = [
    {
      question: "پزشک چقدر طول می‌کشد به منزل برسد؟",
      answer: "معمولاً بین ۳۰ دقیقه تا ۲ ساعت. در مواقع اورژانسی سریع‌تر اقدام می‌کنیم."
    },
    {
      question: "خدمات شبانه‌روزی است؟",
      answer: "بله، ۲۴ ساعته و ۷ روز هفته، حتی در تعطیلات رسمی."
    },
    {
      question: "هزینه چگونه محاسبه می‌شود؟",
      answer: "قبل از اعزام، تلفنی اعلام می‌شود. قیمت‌ها شفاف و بدون هزینه پنهان است. فاکتور رسمی برای بیمه صادر می‌شود."
    },
    {
      question: "چه مناطقی تحت پوشش هستند؟",
      answer: "تمام مناطق تهران و کرج تحت پوشش است."
    }
  ];

  // خدمات اصلی (فقط ۴ تا)
  const mainServices = [
    { icon: Stethoscope, title: "ویزیت پزشک عمومی", price: "۹۸۰,۰۰۰ تومان" },
    { icon: Stethoscope, title: "ویزیت متخصص داخلی", price: "از ۲,۵۰۰,۰۰۰ تومان" },
    { icon: Stethoscope, title: "متخصص قلب + اکو + نوار قلب", price: "۴,۸۰۰,۰۰۰ تومان" },
    { icon: Stethoscope, title: "تزریقات و سرم‌تراپی", price: "از ۴۰۰,۰۰۰ تومان" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ویزیت پزشک در منزل | خدمات پزشکی شبانه‌روزی تهران و کرج"
        description="اعزام فوری پزشک و پرستار در منزل، خدمات پزشکی شبانه‌روزی، تماس فوری 09386117912"
        keywords="ویزیت پزشک در منزل، پزشک در منزل تهران، پرستار در منزل، تزریقات در منزل، خدمات پزشکی شبانه‌روزی"
        canonical="https://navidzendegi.ir/doctor-at-home"
      />
      
      {/* Sticky CTA Bar - Mobile Only */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground py-3 px-4 transition-transform duration-300 md:hidden ${
          showStickyBar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-lg ltr">{phoneNumber}</span>
          </div>
          <Button
            onClick={handleCall}
            size="sm"
            className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90 font-bold px-6"
          >
            الان زنگ بزنید
          </Button>
        </div>
      </div>
      
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Section - Simplified & Focused */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              ۱۵ پزشک آماده اعزام در تهران
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
              ویزیت پزشک در منزل
              <br />
              <span className="text-primary">تهران و کرج</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              پزشک در کمتر از ۲ ساعت به منزل شما می‌رسد
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-secondary" />
                شبانه‌روزی
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-secondary" />
                بیش از ۵۰۰۰ ویزیت موفق
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-secondary" />
                فاکتور رسمی
              </span>
            </div>

            {/* Main CTA - Large Phone Number */}
            <div className="bg-card border-2 border-primary rounded-2xl p-6 md:p-8 shadow-lg mb-6">
              <p className="text-muted-foreground mb-3">برای درخواست پزشک تماس بگیرید:</p>
              <a 
                href={`tel:${phoneNumber}`}
                className="block text-4xl md:text-5xl font-bold text-primary ltr mb-4 hover:text-primary/80 transition-colors"
              >
                {phoneNumber}
              </a>
              <Button
                onClick={handleCall}
                className="w-full md:w-auto text-xl px-12 py-7 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-xl"
              >
                <Phone className="w-6 h-6 ml-3 animate-pulse" />
                الان زنگ بزنید
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center text-muted-foreground animate-bounce">
              <span className="text-sm mb-1">اطلاعات بیشتر</span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </section>

        {/* Top Reviews - Moved Up */}
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-xl font-bold text-center text-foreground mb-6">
              نظرات بیماران
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topReviews.map((review, index) => (
                <div key={index} className="bg-card p-5 rounded-xl border border-border">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/20 mb-2" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {review.text}
                  </p>
                  <p className="font-semibold text-foreground text-sm">
                    {review.name} - {review.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits - 3 Items Only */}
        <section className="py-10">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">اعزام سریع</h3>
                <p className="text-muted-foreground text-sm">پزشک در کمتر از ۲ ساعت به منزل می‌رسد</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-lg mb-2">پزشکان مجرب</h3>
                <p className="text-muted-foreground text-sm">دارای مجوز رسمی نظام پزشکی</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">قیمت شفاف</h3>
                <p className="text-muted-foreground text-sm">بدون هزینه پنهان + فاکتور رسمی</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services with Prices */}
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">
              خدمات و تعرفه‌ها
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-card p-5 rounded-xl border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{service.title}</span>
                  </div>
                  <span className="text-primary font-bold text-sm">{service.price}</span>
                </div>
              ))}
            </div>

            {/* Price Note */}
            <div className="bg-primary/5 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                قیمت‌ها نهایی است و هزینه اضافی بابت ایاب ذهاب اضافه نمی‌شود
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <Button
                onClick={handleCall}
                className="text-lg px-10 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-xl"
              >
                <Phone className="w-6 h-6 ml-2" />
                درخواست پزشک: <span className="ltr mr-2">{phoneNumber}</span>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ - Shortened */}
        <section className="py-10">
          <div className="container mx-auto max-w-3xl px-4">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              نیاز به پزشک دارید؟
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              همین حالا تماس بگیرید، پزشک به منزل شما می‌آید
            </p>
            
            <a 
              href={`tel:${phoneNumber}`}
              className="block text-4xl md:text-5xl font-bold text-primary ltr mb-6 hover:text-primary/80 transition-colors"
            >
              {phoneNumber}
            </a>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCall}
                className="text-xl px-10 py-7 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-xl w-full sm:w-auto"
              >
                <Phone className="w-6 h-6 ml-3" />
                الان زنگ بزنید
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="text-lg px-8 py-6 border-2 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                واتساپ
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default GoogleAdsLandingPage;
