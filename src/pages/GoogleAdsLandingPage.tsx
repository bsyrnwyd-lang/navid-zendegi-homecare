import { Phone, CheckCircle, Heart, Clock, Shield, Users, Star, Stethoscope, Activity, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const GoogleAdsLandingPage = () => {
  const phoneNumber = "09386117912";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // خدمات پرستاری در منزل
  const nursingServices = [
    { service: "تعبیه آنژیوکت و وصل سرم بزرگسال", price: "800,000" },
    { service: "هر تزریق داخل سرم (غیر از آنتی بیوتیک)", price: "100,000" },
    { service: "هر تزریق آنتی بیوتیک داخل سرم", price: "200,000" },
    { service: "تزریق عضلانی یک تزریق", price: "400,000" },
    { service: "سرم تراپی کودکان زیر 10 سال", price: "1,000,000" },
    { service: "هر تزریق عضلانی اضافه", price: "100,000" },
    { service: "هر نیم ساعت ماندگاری پرستار", price: "150,000" },
    { service: "تعبیه سوند", price: "600,000" },
    { service: "تعبیه NG (لوله گاواژ)", price: "700,000" },
    { service: "پانسمان (قیمت پایه)", price: "500,000" },
    { service: "کشیدن بخیه (قیمت پایه)", price: "400,000" },
    { service: "انما (تنقیه)", price: "800,000" },
    { service: "درمان زخم بستر (قیمت پایه)", price: "950,000" },
  ];

  // ویزیت پزشک در منزل
  const doctorServices = [
    { service: "ویزیت پزشک عمومی", price: "980,000" },
    { service: "ویزیت متخصص داخلی", price: "از 2,500,000" },
    { service: "ویزیت پزشک متخصص", price: "از 2,000,000" },
  ];

  // سایر خدمات تخصصی
  const specialServices = [
    { service: "فیزیوتراپی در منزل (قیمت پایه)", price: "800,000" },
    { service: "سونوگرافی در منزل (قیمت پایه)", price: "2,700,000" },
    { service: "رادیولوژی در منزل (قیمت پایه)", price: "2,500,000" },
    { service: "نوار عصب و عضله در منزل", price: "3,000,000" },
    { service: "ویزیت متخصص قلب + اکو + نوار قلب", price: "4,800,000" },
    { service: "نوار قلب در منزل", price: "1,300,000" },
    { service: "هولتر در منزل", price: "2,500,000" },
    { service: "ویزیت آنلاین پزشک عمومی", price: "150,000" },
    { service: "ویزیت آنلاین پزشک متخصص", price: "350,000" },
  ];

  const faqs = [
    {
      question: "پزشک چقدر طول می‌کشد به منزل برسد؟",
      answer: "بسته به منطقه، در کوتاه‌ترین زمان ممکن هماهنگی انجام می‌شود. معمولاً بین ۳۰ دقیقه تا ۲ ساعت پزشک یا پرستار به منزل شما می‌رسد."
    },
    {
      question: "خدمات شبانه‌روزی است؟",
      answer: "بله، خدمات پزشکی در منزل به‌صورت شبانه‌روزی و ۷ روز هفته ارائه می‌شود."
    },
    {
      question: "هزینه ویزیت چگونه محاسبه می‌شود؟",
      answer: "هزینه بر اساس نوع خدمت و شرایط بیمار اعلام می‌شود. قبل از اعزام، تلفنی راهنمایی می‌شوید. قیمت‌ها کاملاً شفاف و بدون هزینه پنهان است."
    },
    {
      question: "برای چه مشکلاتی می‌توان تماس گرفت؟",
      answer: "برای بیشتر مشکلات پزشکی غیر اورژانسی که نیاز به بیمارستان ندارند، از جمله: تب و سرماخوردگی، تزریقات، سرم‌تراپی، کنترل فشار خون، پانسمان و مراقبت سالمندان."
    },
    {
      question: "آیا فاکتور رسمی صادر می‌شود؟",
      answer: "بله، فاکتور رسمی برای ارائه به بیمه تکمیلی صادر می‌شود."
    }
  ];

  const services = [
    { icon: Stethoscope, title: "ویزیت پزشک عمومی در منزل" },
    { icon: Heart, title: "ویزیت متخصص قلب + اکو و نوارقلب" },
    { icon: Users, title: "ویزیت متخصص در منزل" },
    { icon: Syringe, title: "تزریقات و سرم‌تراپی" },
    { icon: Activity, title: "کنترل فشار خون و قند خون" },
    { icon: Shield, title: "پانسمان، زخم و مراقبت‌های بعد از عمل" },
    { icon: Users, title: "خدمات پزشکی سالمندان" },
    { icon: Activity, title: "نوار قلب در منزل" },
  ];

  const targetAudience = [
    "سالمندان و بیماران کم‌تحرک",
    "بیماران با تب، درد، ضعف یا سرگیجه",
    "بیماران قلبی و فشار خون",
    "مادران باردار",
    "کودکان و نوزادان",
    "افرادی که امکان مراجعه حضوری ندارند"
  ];

  const advantages = [
    "اعزام سریع پزشک به منزل",
    "تیم مجرب و آموزش‌دیده",
    "صرفه‌جویی در زمان و هزینه",
    "رعایت کامل اصول بهداشتی",
    "پیگیری وضعیت بیمار در صورت نیاز",
    "قیمت‌های شفاف و بدون هزینه پنهان"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ویزیت پزشک در منزل | خدمات پزشکی شبانه‌روزی تهران و کرج"
        description="اعزام فوری پزشک و پرستار در منزل، خدمات پزشکی شبانه‌روزی، تماس فوری 09386117912"
        keywords="ویزیت پزشک در منزل، پزشک در منزل تهران، پرستار در منزل، تزریقات در منزل، خدمات پزشکی شبانه‌روزی"
        canonical="https://navidzendegi.ir/google-ads"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            ویزیت پزشک در منزل تهران و کرج | اعزام فوری
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            خدمات پزشکی و درمانی در منزل شما، بدون نیاز به مراجعه به درمانگاه
          </p>
          <p className="text-lg mb-8 opacity-80">
            اعزام سریع پزشک عمومی و پرستار، شبانه‌روزی
          </p>
          
          <Button
            onClick={handleCall}
            size="lg"
            className="bg-background text-primary hover:bg-background/90 text-xl md:text-2xl px-8 py-8 rounded-xl shadow-2xl animate-pulse"
          >
            <Phone className="w-8 h-8 ml-3" />
            تماس فوری: {phoneNumber}
          </Button>
        </div>
      </section>

      {/* چرا خدمات پزشکی در منزل */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            چرا ویزیت پزشک در منزل انتخاب هوشمندانه‌ای است؟
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
            وقتی بیمار هستید، مراجعه به مراکز درمانی می‌تواند سخت، زمان‌بر و حتی خطرناک باشد.
            با خدمات پزشکی در منزل، پزشک و پرستار به خانه شما می‌آیند و خدمات درمانی را در محیط امن و آرام منزل ارائه می‌دهند.
          </p>
        </div>
      </section>

      {/* خدمات ما */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            خدمات پزشکی و پرستاری در منزل
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{service.title}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={handleCall}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <Phone className="w-6 h-6 ml-2" />
              برای دریافت خدمات تماس بگیرید
            </Button>
          </div>
        </div>
      </section>

      {/* مخاطبین هدف */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            این خدمات برای چه افرادی مناسب است؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مزیت رقابتی */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            چرا نوید زندگی را انتخاب کنید؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {advantages.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={handleCall}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <Phone className="w-6 h-6 ml-2" />
              تماس مستقیم با پشتیبانی پزشکی
            </Button>
          </div>
        </div>
      </section>

      {/* اعتمادسازی */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            آرامش خاطر بیماران، اولویت ماست
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">ویزیت در محیط امن خانه</span>
            </div>
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">احترام کامل به حریم خصوصی بیمار</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">پاسخگویی تلفنی و راهنمایی قبل از اعزام</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">مناسب برای شرایط اورژانسی غیر بیمارستانی</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* تعرفه خدمات */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            تعرفه کامل خدمات پزشکی در منزل
          </h2>

          {/* خدمات پرستاری */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">خدمات پرستاری در منزل</h3>
            <div className="overflow-x-auto bg-card rounded-lg shadow-sm border border-border">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-primary/10 border-b-2 border-primary/30">
                    <th className="text-primary font-bold py-3 px-4 text-right">نام خدمت</th>
                    <th className="text-primary font-bold py-3 px-4 text-left">تعرفه (تومان)</th>
                  </tr>
                </thead>
                <tbody>
                  {nursingServices.map((item, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{item.service}</td>
                      <td className="py-3 px-4 text-primary font-bold ltr text-left">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ویزیت پزشک */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-secondary mb-4">ویزیت پزشک در منزل</h3>
            <div className="overflow-x-auto bg-card rounded-lg shadow-sm border border-border">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-secondary/10 border-b-2 border-secondary/30">
                    <th className="text-secondary font-bold py-3 px-4 text-right">نام خدمت</th>
                    <th className="text-secondary font-bold py-3 px-4 text-left">تعرفه (تومان)</th>
                  </tr>
                </thead>
                <tbody>
                  {doctorServices.map((item, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{item.service}</td>
                      <td className="py-3 px-4 text-secondary font-bold ltr text-left">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* خدمات تخصصی */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-accent mb-4">خدمات تخصصی در منزل</h3>
            <div className="overflow-x-auto bg-card rounded-lg shadow-sm border border-border">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-accent/10 border-b-2 border-accent/30">
                    <th className="text-accent font-bold py-3 px-4 text-right">نام خدمت</th>
                    <th className="text-accent font-bold py-3 px-4 text-left">تعرفه (تومان)</th>
                  </tr>
                </thead>
                <tbody>
                  {specialServices.map((item, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{item.service}</td>
                      <td className="py-3 px-4 text-accent font-bold ltr text-left">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* نکات مهم */}
          <div className="bg-card border-2 border-primary/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary mb-4">نکات مهم تعرفه‌ها</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">قیمت نهایی است و هزینه اضافی بابت ایاب ذهاب اضافه نمی‌شود</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">هزینه مواد مصرفی (سرم، دارو، پانسمان) جداگانه محاسبه می‌شود</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">صدور فاکتور رسمی برای بیمه تکمیلی</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">در درخواست شبانه ممکن است ۲۰٪ تا ۳۰٪ اضافه شود</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA نهایی */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            نیاز به پزشک دارید؟ همین حالا تماس بگیرید
          </h2>
          <Button
            onClick={handleCall}
            size="lg"
            className="bg-background text-primary hover:bg-background/90 text-xl md:text-2xl px-8 py-8 rounded-xl shadow-2xl"
          >
            <Phone className="w-8 h-8 ml-3" />
            تماس فوری: {phoneNumber}
          </Button>
        </div>
      </section>

      {/* Sticky Call Button for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
        <Button
          onClick={handleCall}
          variant="hero"
          size="lg"
          className="w-full text-lg py-6"
        >
          <Phone className="w-6 h-6 ml-2" />
          تماس فوری: {phoneNumber}
        </Button>
      </div>

      {/* Padding for sticky button on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default GoogleAdsLandingPage;
