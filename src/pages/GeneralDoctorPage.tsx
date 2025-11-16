import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import MedicalBusinessSchema from "@/components/MedicalBusinessSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, CheckCircle2, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import generalDoctorImage from "@/assets/modern-general-doctor-home.jpg";

const GeneralDoctorPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqs = [
    {
      question: "هزینه ویزیت پزشک عمومی در منزل چقدر است؟",
      answer: "هزینه بستگی به زمان ویزیت (روز یا شب)، منطقه جغرافیایی و نوع خدمات دارد. برای دریافت تعرفه دقیق با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید."
    },
    {
      question: "آیا پزشک عمومی می‌تواند در منزل تزریق انجام دهد؟",
      answer: "بله، پزشکان ما مجهز به تجهیزات لازم برای انجام تزریقات، سرم تراپی و پانسمان‌های اولیه در منزل هستند."
    },
    {
      question: "چه مناطقی از تهران تحت پوشش خدمات پزشک در منزل هستند؟",
      answer: "تمام مناطق تهران شامل شمال، غرب، شرق، جنوب و مرکز تحت پوشش خدمات ماست. همچنین به کرج و حومه نیز خدمات ارائه می‌دهیم."
    },
    {
      question: "زمان حضور پزشک در منزل چقدر طول می‌کشد؟",
      answer: "معمولاً بین ۱ تا ۲ ساعت پس از تماس، پزشک به منزل شما می‌رسد. در مواقع اورژانسی سعی می‌کنیم سریع‌تر اقدام کنیم."
    },
    {
      question: "آیا می‌توان در شب و تعطیلات درخواست پزشک داد؟",
      answer: "بله، خدمات ما ۲۴ ساعته و ۷ روز هفته فعال است و می‌توانید در هر زمانی درخواست ویزیت دهید."
    },
    {
      question: "پزشک در منزل چه خدماتی ارائه می‌دهد؟",
      answer: "معاینه کامل، تجویز دارو، مشاوره پزشکی، تزریقات، سرم تراپی، پانسمان و در صورت نیاز ارجاع به متخصص."
    },
    {
      question: "آیا برای ویزیت نیاز به معرفی‌نامه پزشک است؟",
      answer: "خیر، نیازی به معرفی‌نامه نیست. می‌توانید مستقیماً تماس بگیرید و وقت رزرو کنید."
    },
    {
      question: "آیا پزشک می‌تواند برای سالمندان به منزل بیاید؟",
      answer: "بله، یکی از مهم‌ترین مزایای خدمات ما، ویزیت سالمندان و بیمارانی است که امکان مراجعه به مطب را ندارند."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت پزشک عمومی در منزل تهران ⭐ اعزام فوری ۲۴ ساعته ☎️ 09386117912"
        description="🏥 ویزیت پزشک عمومی در منزل تهران با نوید زندگی - اعزام فوری دکتر به منزل با کادر مجرب. خدمات شبانه‌روزی در تمام نقاط تهران ☎️ 09386117912"
        keywords="ویزیت پزشک در منزل تهران، پزشک عمومی در منزل، دکتر در خانه تهران، پزشک در منزل تهران شمال، ویزیت دکتر فوری، خدمات پزشکی در منزل تهران"
        canonical="https://navidzendegi.com/general-doctor"
        ogType="website"
      />
      <MedicalBusinessSchema 
        name="ویزیت پزشک عمومی در منزل تهران - نوید زندگی"
        description="اعزام پزشک عمومی به منزل با کادر مجرب و تجهیزات کامل به تمام نقاط تهران"
        service="ویزیت پزشک عمومی در منزل"
      />
      <ServiceSchema 
        name="ویزیت پزشک عمومی در منزل تهران"
        description="اعزام پزشک عمومی به منزل برای معاینه، تجویز دارو و خدمات پزشکی تخصصی"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-primary">
                  ویزیت پزشک عمومی در منزل تهران (اعزام فوری و شبانه روزی)
                </h1>
                <p className="text-lg leading-relaxed mb-6">
                  آیا شما یا یکی از عزیزانتان به دلیل بیماری، کهولت سن، یا شرایط خاص، امکان مراجعه حضوری به مطب یا بیمارستان را ندارید؟ <strong>نوید زندگی</strong> با ارائه خدمات <strong>پزشک در منزل تهران</strong>، آسایش و درمان را به خانه شما می‌آورد. ما متعهد به اعزام سریع و فوری کادر درمانی مجرب و متخصص، به صورت شبانه روزی در تمام مناطق تهران و کرج هستیم تا بهترین مراقبت پزشکی را در محیط امن و راحت خانه خود دریافت کنید.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>کلمات کلیدی:</strong> ویزیت دکتر در منزل، پزشک خانگی، اعزام پزشک به منزل، دکتر در خانه تهران، خدمات پزشکی منزل، ویزیت فوری پزشک، درمان در منزل
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleCall}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
                  </Button>
                  <Button 
                    onClick={handleWhatsApp}
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    واتساپ
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={generalDoctorImage} 
                  alt="ویزیت پزشک عمومی در منزل تهران - خدمات پزشکی در خانه شامل معاینه، تجویز دارو و مشاوره پزشکی"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                  width="1200"
                  height="800"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چرا باید خدمات پزشک در منزل را انتخاب کنید؟
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              استفاده از خدمات <strong>ویزیت دکتر در خانه</strong> مزایای متعددی دارد که تجربه درمان را بهبود می‌بخشد:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">راحتی و آسایش بیمار</h3>
                <p className="text-muted-foreground leading-relaxed">
                  دیگر نیازی به تحمل ترافیک، زمان انتظار طولانی در درمانگاه‌ها یا جابجایی بیماران بدحال نیست.
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
                <h3 className="text-xl font-semibold mb-3">پوشش شبانه روزی و اورژانسی</h3>
                <p className="text-muted-foreground leading-relaxed">
                  امکان درخواست پزشک شبانه روزی برای مواقع اضطراری که دسترسی به مراکز درمانی سخت است.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              خدمات تخصصی پزشک عمومی در منزل چیست؟
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              پزشکان عمومی اعزامی توسط نوید زندگی، طیف گسترده‌ای از خدمات درمانی و تشخیصی را در خانه شما انجام می‌دهند:
            </p>
            <div className="space-y-4 mr-6">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>معاینه کامل:</strong> بررسی علائم حیاتی، شرح حال‌گیری دقیق و تشخیص اولیه بیماری‌ها.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>تجویز دارو و دستورات درمانی:</strong> نوشتن نسخه دارویی لازم و ارائه مشاوره‌های بهداشتی.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>مشاوره و ارجاع:</strong> ارائه مشاوره‌های تخصصی در مورد روند بیماری و در صورت نیاز، ارجاع به <Link to="/cardiology" className="text-primary hover:underline">متخصص قلب در منزل</Link> یا سایر پزشکان متخصص.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>انجام خدمات اولیه درمانی:</strong> شامل تزریقات، <Link to="/articles/iv-therapy-home" className="text-primary hover:underline">سرم تراپی در منزل</Link> و پانسمان‌های اولیه در صورت لزوم.
                </p>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg mt-8">
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
                <Link to="/articles/medical-consultation" className="text-primary hover:underline flex items-center gap-2">
                  → مشاوره پزشکی در منزل
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              هزینه و تعرفه ویزیت پزشک در منزل تهران
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              یکی از مهم‌ترین دغدغه‌های خانواده‌ها، هزینه ویزیت پزشک در خانه است. در نوید زندگی، شفافیت در قیمت‌گذاری اولویت ماست. تعرفه پزشک در منزل بر اساس عوامل زیر تعیین می‌شود:
            </p>
            <div className="space-y-4 mr-6">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>زمان ارائه خدمات:</strong> ویزیت‌ها در ساعات عادی یا خدمات پزشکی در خانه شبانه روزی تعرفه‌های متفاوتی دارند.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>منطقه جغرافیایی:</strong> هزینه ایاب و ذهاب پزشک به محل شما.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>تخصص پزشک:</strong> (پزشک عمومی یا متخصص).
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-6">
              برای دریافت قیمت دقیق بر اساس شرایط بیمار و منطقه سکونت خود، لطفاً با شماره‌های ما تماس بگیرید.
            </p>
          </div>
        </section>

        {/* Coverage Areas Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center gap-3">
              <MapPin className="h-8 w-8" />
              مناطق تحت پوشش در تهران
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              خدمات ویزیت پزشک عمومی در منزل نوید زندگی در <strong>تمام مناطق تهران</strong> فعال است:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "تهران شمال (نیاوران، ولنجک، فرمانیه، اقدسیه)",
                "تهران غرب (سعادت‌آباد، شهرک غرب، پونک، آزادی)",
                "تهران شرق (نارمک، تهران‌پارس، نیروهوایی)",
                "تهران جنوب (شهرری، یافت‌آباد، شوش)",
                "تهران مرکز (ونک، ولیعصر، میرداماد، انقلاب)",
                "کرج و حومه (با هماهنگی قبلی)"
              ].map((area, index) => (
                <div key={index} className="flex items-start gap-2 p-4 bg-background rounded-lg border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary flex items-center gap-3">
              <Shield className="h-8 w-8" />
              چرا نوید زندگی برای ویزیت پزشک عمومی در منزل؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  پزشکان مجرب و متخصص
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  کادر پزشکی با سابقه کار در بیمارستان‌های معتبر و دارای مجوز از سازمان نظام پزشکی
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  تجهیزات کامل پزشکی
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  همراه داشتن کیف پزشکی کامل برای معاینه، تزریقات و خدمات درمانی اولیه
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  خدمات ۲۴ ساعته
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  امکان رزرو و دریافت خدمات در تمام ساعات شبانه‌روز و تعطیلات
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  قیمت شفاف و منصفانه
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  بدون هزینه‌های پنهان، تعرفه مشخص و امکان مشاوره رایگان
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
              فرآیند رزرو ویزیت پزشک عمومی در منزل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ۱
                </div>
                <h3 className="font-semibold mb-2">تماس با ما</h3>
                <p className="text-sm text-muted-foreground">
                  با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید یا از واتساپ پیام دهید
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ۲
                </div>
                <h3 className="font-semibold mb-2">هماهنگی وقت</h3>
                <p className="text-sm text-muted-foreground">
                  زمان و آدرس دقیق را با کارشناسان ما هماهنگ کنید
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ۳
                </div>
                <h3 className="font-semibold mb-2">حضور پزشک</h3>
                <p className="text-sm text-muted-foreground">
                  پزشک عمومی با تجهیزات کامل در منزل شما حاضر می‌شود
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ۴
                </div>
                <h3 className="font-semibold mb-2">دریافت نسخه</h3>
                <p className="text-sm text-muted-foreground">
                  نسخه و توصیه‌های درمانی را دریافت کنید
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                همین الان ویزیت پزشک عمومی خود را رزرو کنید
              </h2>
              <p className="text-lg mb-8 opacity-90">
                تیم ما آماده است تا در سریع‌ترین زمان ممکن به منزل شما بیاید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleCall}
                  size="lg"
                  variant="secondary"
                  className="text-lg"
                >
                  <Phone className="ml-2 h-6 w-6" />
                  ۰۹۳۸۶۱۱۷۹۱۲
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  variant="secondary"
                  className="text-lg"
                >
                  <MessageCircle className="ml-2 h-6 w-6" />
                  ارسال پیام واتساپ
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <PricingInfo />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default GeneralDoctorPage;