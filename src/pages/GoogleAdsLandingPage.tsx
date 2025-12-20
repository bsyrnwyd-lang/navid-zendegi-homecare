import { Phone, CheckCircle, Heart, Clock, Shield, Users, Star, Stethoscope, Activity, Syringe, MessageCircle, MapPin, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import doctorHomeVisitImage from "@/assets/doctor-home-visit-landing.jpg";

const GoogleAdsLandingPage = () => {
  const phoneNumber = "09386117912";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
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
      answer: "بسته به منطقه، معمولاً بین ۳۰ دقیقه تا ۲ ساعت پزشک یا پرستار به منزل شما می‌رسد. در مواقع اورژانسی سعی می‌کنیم سریع‌تر اقدام کنیم."
    },
    {
      question: "خدمات شبانه‌روزی است؟",
      answer: "بله، خدمات پزشکی در منزل به‌صورت شبانه‌روزی و ۷ روز هفته ارائه می‌شود. حتی در تعطیلات رسمی نیز فعال هستیم."
    },
    {
      question: "هزینه ویزیت چگونه محاسبه می‌شود؟",
      answer: "هزینه بر اساس نوع خدمت، زمان ارائه (روز یا شب) و شرایط بیمار اعلام می‌شود. قبل از اعزام، تلفنی راهنمایی می‌شوید. قیمت‌ها کاملاً شفاف و بدون هزینه پنهان است."
    },
    {
      question: "برای چه مشکلاتی می‌توان تماس گرفت؟",
      answer: "برای بیشتر مشکلات پزشکی غیر اورژانسی که نیاز به بیمارستان ندارند، از جمله: تب و سرماخوردگی، تزریقات، سرم‌تراپی، کنترل فشار خون، پانسمان و مراقبت سالمندان."
    },
    {
      question: "آیا فاکتور رسمی صادر می‌شود؟",
      answer: "بله، فاکتور رسمی برای ارائه به بیمه تکمیلی صادر می‌شود."
    },
    {
      question: "چه مناطقی از تهران تحت پوشش هستند؟",
      answer: "تمام مناطق تهران شامل شمال، غرب، شرق، جنوب و مرکز تحت پوشش خدمات ماست. همچنین به کرج و حومه نیز خدمات ارائه می‌دهیم."
    },
    {
      question: "آیا پزشک می‌تواند در منزل تزریق انجام دهد؟",
      answer: "بله، پزشکان و پرستاران ما مجهز به تجهیزات لازم برای انجام تزریقات، سرم تراپی و پانسمان‌های اولیه در منزل هستند."
    }
  ];

  const services = [
    { icon: Stethoscope, title: "ویزیت پزشک عمومی در منزل", link: "/general-doctor" },
    { icon: Heart, title: "ویزیت متخصص قلب + اکو و نوارقلب", link: "/cardiology" },
    { icon: Users, title: "ویزیت متخصص داخلی در منزل", link: "/services/internal" },
    { icon: Syringe, title: "تزریقات و سرم‌تراپی", link: "/services/nursing" },
    { icon: Activity, title: "کنترل فشار خون و قند خون", link: "/services/nursing" },
    { icon: Shield, title: "پانسمان و مراقبت‌های بعد از عمل", link: "/services/nursing" },
    { icon: Users, title: "خدمات پزشکی سالمندان", link: "/articles/elderly-care-guide" },
    { icon: Activity, title: "نوار قلب در منزل", link: "/services/echo-ecg" },
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
    { title: "اعزام سریع پزشک به منزل", desc: "معمولاً بین ۱ تا ۲ ساعت پزشک به منزل می‌رسد" },
    { title: "تیم مجرب و آموزش‌دیده", desc: "پزشکان دارای مجوز رسمی نظام پزشکی" },
    { title: "صرفه‌جویی در زمان و هزینه", desc: "بدون نیاز به ترافیک و انتظار در مطب" },
    { title: "رعایت کامل اصول بهداشتی", desc: "استفاده از تجهیزات استریل و یکبار مصرف" },
    { title: "پیگیری وضعیت بیمار", desc: "پیگیری تلفنی روند درمان در صورت نیاز" },
    { title: "قیمت‌های شفاف", desc: "بدون هزینه پنهان و با صدور فاکتور رسمی" }
  ];

  const coverageAreas = [
    "تهران شمال (نیاوران، ولنجک، فرمانیه، اقدسیه)",
    "تهران غرب (سعادت‌آباد، شهرک غرب، پونک، آزادی)",
    "تهران شرق (نارمک، تهران‌پارس، نیروهوایی)",
    "تهران جنوب (شهرری، یافت‌آباد، شوش)",
    "تهران مرکز (ونک، ولیعصر، میرداماد، انقلاب)",
    "کرج و حومه (با هماهنگی قبلی)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ویزیت پزشک در منزل | خدمات پزشکی شبانه‌روزی تهران و کرج"
        description="اعزام فوری پزشک و پرستار در منزل، خدمات پزشکی شبانه‌روزی، تماس فوری 09386117912"
        keywords="ویزیت پزشک در منزل، پزشک در منزل تهران، پرستار در منزل، تزریقات در منزل، خدمات پزشکی شبانه‌روزی"
        canonical="https://navidzendegi.ir/doctor-at-home"
      />
      
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary leading-tight">
                  ویزیت پزشک عمومی و متخصص در منزل تهران و کرج
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-foreground">
                  خدمات پزشکی و درمانی در منزل شما، بدون نیاز به مراجعه به درمانگاه
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  اعزام سریع پزشک عمومی، متخصص داخلی و متخصص قلب (همراه با اکو و نوار قلب) به صورت شبانه‌روزی
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    ✓ پزشک عمومی
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    ✓ متخصص داخلی
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    ✓ متخصص قلب + اکو + نوار قلب
                  </span>
                  <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    ✓ ویزیت تمامی تخصص‌ها
                  </span>
                </div>
            
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    onClick={handleCall}
                    variant="hero"
                    size="lg"
                    className="text-lg px-8 py-6"
                  >
                    <Phone className="w-6 h-6 ml-2" />
                    تماس فوری: {phoneNumber}
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-2"
                  >
                    <MessageCircle className="w-6 h-6 ml-2" />
                    واتساپ
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={doctorHomeVisitImage} 
                  alt="ویزیت پزشک در منزل تهران - خدمات پزشکی در خانه شامل معاینه، تجویز دارو و مشاوره پزشکی"
                  className="w-full h-80 lg:h-[450px] object-cover rounded-2xl shadow-2xl"
                  width="1344"
                  height="768"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* چرا خدمات پزشکی در منزل */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              چرا ویزیت پزشک در منزل انتخاب هوشمندانه‌ای است؟
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              آیا شما یا یکی از عزیزانتان به دلیل بیماری، کهولت سن، یا شرایط خاص، امکان مراجعه حضوری به مطب یا بیمارستان را ندارید؟ وقتی بیمار هستید، مراجعه به مراکز درمانی می‌تواند سخت، زمان‌بر و حتی خطرناک باشد. با <strong>خدمات پزشکی در منزل</strong>، پزشک و پرستار به خانه شما می‌آیند و خدمات درمانی را در محیط امن و آرام منزل ارائه می‌دهند.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">راحتی و آسایش بیمار</h3>
                <p className="text-muted-foreground leading-relaxed">
                  دیگر نیازی به تحمل ترافیک، زمان انتظار طولانی در درمانگاه‌ها یا جابجایی بیماران بدحال نیست. درمان در محیط آرام و آشنای خانه انجام می‌شود.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">کاهش ریسک ابتلا به بیماری‌های واگیر</h3>
                <p className="text-muted-foreground leading-relaxed">
                  با ماندن در خانه، از قرار گرفتن در معرض ویروس‌ها و عفونت‌های محیط‌های درمانی شلوغ جلوگیری می‌کنید.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">مراقبت شخصی‌تر</h3>
                <p className="text-muted-foreground leading-relaxed">
                  پزشک در منزل زمان بیشتری برای معاینه دقیق، پاسخ به سؤالات و بررسی سوابق پزشکی شما دارد.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">پوشش شبانه‌روزی و اورژانسی</h3>
                <p className="text-muted-foreground leading-relaxed">
                  امکان درخواست پزشک شبانه‌روزی برای مواقع اضطراری که دسترسی به مراکز درمانی سخت است.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* خدمات ما */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              خدمات پزشکی و پرستاری در منزل
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.link}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{service.title}</span>
                </Link>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">خدمات مرتبط دیگر</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/nursing" className="text-primary hover:underline flex items-center gap-2">
                  → خدمات پرستاری در منزل
                </Link>
                <Link to="/cardiology" className="text-primary hover:underline flex items-center gap-2">
                  → ویزیت متخصص قلب در منزل
                </Link>
                <Link to="/services/internal" className="text-primary hover:underline flex items-center gap-2">
                  → متخصص داخلی در منزل
                </Link>
                <Link to="/services/physiotherapy" className="text-primary hover:underline flex items-center gap-2">
                  → فیزیوتراپی در منزل
                </Link>
                <Link to="/services/radiology" className="text-primary hover:underline flex items-center gap-2">
                  → رادیولوژی در منزل
                </Link>
                <Link to="/services/laboratory" className="text-primary hover:underline flex items-center gap-2">
                  → نمونه‌گیری آزمایش در منزل
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={handleCall}
                variant="hero"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <Phone className="w-6 h-6 ml-2" />
                برای دریافت خدمات تماس بگیرید: {phoneNumber}
              </Button>
            </div>
          </div>
        </section>

        {/* مخاطبین هدف */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              این خدمات برای چه افرادی مناسب است؟
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* مزیت رقابتی */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Shield className="h-8 w-8" />
              چرا نوید زندگی را انتخاب کنید؟
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
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
                تماس مستقیم با پشتیبانی پزشکی: {phoneNumber}
              </Button>
            </div>
          </div>
        </section>

        {/* مناطق تحت پوشش */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <MapPin className="h-8 w-8" />
              مناطق تحت پوشش در تهران و کرج
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              خدمات ویزیت پزشک در منزل نوید زندگی در <strong>تمام مناطق تهران</strong> و <strong>کرج</strong> فعال است:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coverageAreas.map((area, index) => (
                <div key={index} className="flex items-start gap-2 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* اعتمادسازی */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              آرامش خاطر بیماران، اولویت ماست
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">ویزیت در محیط امن خانه</h3>
                  <p className="text-muted-foreground text-sm">بیمار در محیط آشنا و راحت خود درمان می‌شود</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">احترام به حریم خصوصی</h3>
                  <p className="text-muted-foreground text-sm">رعایت کامل اخلاق پزشکی و حفظ اطلاعات بیمار</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">پاسخگویی و راهنمایی تلفنی</h3>
                  <p className="text-muted-foreground text-sm">مشاوره رایگان قبل از اعزام پزشک</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">خدمات اورژانسی غیر بیمارستانی</h3>
                  <p className="text-muted-foreground text-sm">برای مواقعی که نیاز به بیمارستان نیست</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* تعرفه خدمات */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
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
        <section className="medical-section bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              نیاز به پزشک دارید؟ همین حالا تماس بگیرید
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              تیم پزشکی نوید زندگی آماده ارائه خدمات به شما در تمام مناطق تهران و کرج است
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCall}
                variant="hero"
                size="lg"
                className="text-xl px-10 py-8"
              >
                <Phone className="w-7 h-7 ml-3" />
                تماس فوری: {phoneNumber}
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2"
              >
                <MessageCircle className="w-6 h-6 ml-2" />
                واتساپ
              </Button>
            </div>
          </div>
        </section>

        {/* نظرات مشتریان */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              نظرات بیماران و همراهان
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  مادرم ۸۵ سال سن داره و امکان بردنش به مطب نبود. پزشک خیلی سریع اومد و با صبر و حوصله معاینه کرد. واقعاً ممنونم از نوید زندگی.
                </p>
                <p className="font-semibold text-foreground">خانم رضایی - تهران</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ساعت ۱۱ شب بچه‌ام تب کرد. با یه تماس پرستار اومد و سرم وصل کرد. خیالم راحت شد که نیازی به اورژانس نیست. خدمات عالی!
                </p>
                <p className="font-semibold text-foreground">آقای محمدی - کرج</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  برای پدرم که مشکل قلبی داشت، متخصص قلب با دستگاه اکو اومد منزل. کار حرفه‌ای و قیمت منصفانه. پیشنهاد می‌کنم.
                </p>
                <p className="font-semibold text-foreground">آقای کریمی - تهرانپارس</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  چند ماهه که برای مادربزرگم پرستار میاد پانسمان زخم بستر. خیلی دقیق و بهداشتی کار می‌کنن. زخمش خیلی بهتر شده.
                </p>
                <p className="font-semibold text-foreground">خانم احمدی - سعادت‌آباد</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  سرماخوردگی شدید داشتم و نمی‌تونستم برم مطب. پزشک عمومی اومد، معاینه کرد و دارو نوشت. خیلی راحت بود.
                </p>
                <p className="font-semibold text-foreground">آقای نوری - ونک</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  قیمت‌ها شفاف بود و قبل از اعزام همه چیز رو توضیح دادن. فاکتور رسمی هم دادن برای بیمه. خیلی حرفه‌ای بودن.
                </p>
                <p className="font-semibold text-foreground">خانم صادقی - شهرک غرب</p>
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

export default GoogleAdsLandingPage;
