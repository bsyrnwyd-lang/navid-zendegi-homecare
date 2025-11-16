import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, CheckCircle2, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";
import MedicalBusinessSchema from "@/components/MedicalBusinessSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSection from "@/components/FAQSection";
import cardiologyImage from "@/assets/iranian-cardiology-home.jpg";

const CardiologyServices = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqs = [
    {
      question: "ویزیت متخصص قلب در منزل چه مزایایی دارد؟",
      answer: "ویزیت در منزل باعث صرفه‌جویی در زمان، کاهش استرس بیمار، دسترسی آسان به خدمات تخصصی و امکان معاینه دقیق‌تر در محیط آرام می‌شود."
    },
    {
      question: "آیا تجهیزات مورد نیاز برای اکو و نوار قلب در منزل موجود است؟",
      answer: "بله، تیم ما با تجهیزات کامل و استاندارد شامل دستگاه اکوکاردیوگرافی، ECG و هولتر به منزل شما می‌آید."
    },
    {
      question: "هزینه ویزیت متخصص قلب در منزل چقدر است؟",
      answer: "هزینه بستگی به نوع خدمات و منطقه دارد. برای دریافت تعرفه دقیق با شماره ۰۹۳۸۶۱۱۷۹۱۲ تماس بگیرید."
    },
    {
      question: "چه مناطقی از تهران تحت پوشش هستند؟",
      answer: "تمام مناطق تهران شامل شمال، غرب، شرق، جنوب و مرکز تحت پوشش خدمات ماست."
    },
    {
      question: "زمان حضور پزشک در منزل چقدر طول می‌کشد؟",
      answer: "معمولاً بین ۱ تا ۲ ساعت پس از تماس، تیم پزشکی به منزل شما می‌رسد. در مواقع اورژانسی سریع‌تر اقدام می‌شود."
    },
    {
      question: "آیا می‌توان در شب و تعطیلات درخواست ویزیت داد؟",
      answer: "بله، خدمات ما ۲۴ ساعته و ۷ روز هفته فعال است."
    },
    {
      question: "نتایج آزمایش‌ها چه زمانی آماده می‌شود؟",
      answer: "نتایج اولیه اکو و نوار قلب در همان جلسه توسط متخصص بررسی و توضیح داده می‌شود. گزارش کامل ظرف ۲۴ ساعت ارسال می‌گردد."
    },
    {
      question: "آیا برای ویزیت نیاز به معرفی‌نامه پزشک است؟",
      answer: "خیر، نیازی به معرفی‌نامه نیست. می‌توانید مستقیماً تماس بگیرید و وقت رزرو کنید."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت متخصص قلب در منزل تهران ⭐ اعزام فوری | نوید زندگی ☎️ 09386117912"
        description="🏥 ویزیت متخصص قلب در منزل تهران با نوید زندگی - اعزام فوری کاردیولوژیست با تجهیزات کامل (اکو، نوار قلب، هولتر) به تمام نقاط تهران. خدمات ۲۴ ساعته ☎️ 09386117912"
        keywords="ویزیت متخصص قلب در منزل تهران، کاردیولوژیست در منزل، اکو قلب در منزل تهران، نوار قلب در منزل، دکتر قلب در خانه تهران، متخصص قلب تهران شمال، ویزیت قلب در منزل تهران غرب"
        canonical="https://navidzendegi.com/cardiology"
        ogType="website"
      />
      <MedicalBusinessSchema 
        name="ویزیت متخصص قلب در منزل تهران - نوید زندگی"
        description="ویزیت تخصصی قلب و عروق در منزل با اعزام کاردیولوژیست و تجهیزات کامل به تمام نقاط تهران"
        service="ویزیت متخصص قلب و عروق در منزل"
      />
      <ServiceSchema 
        name="ویزیت متخصص قلب در منزل تهران"
        description="اعزام متخصص قلب و عروق به منزل با تجهیزات کامل شامل اکو، نوار قلب و هولتر"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-primary">
                  ویزیت متخصص قلب در منزل تهران (خدمات کامل کاردیولوژی)
                </h1>
                <p className="text-lg leading-relaxed mb-6">
                  بیماری‌های قلبی عروقی نیازمند مراقبت‌های ویژه و تخصصی هستند. اگر بیمار شما شرایط انتقال به بیمارستان را ندارد یا به دنبال آسایش و دقت بیشتر در فرآیند درمان هستید، <strong>نوید زندگی</strong> با اعزام <strong>متخصص قلب در منزل تهران</strong>، خدمات کامل کاردیولوژی را به خانه شما می‌آورد. ما متعهد به ارائه مراقبت‌های حرفه‌ای و استفاده از تجهیزات پزشکی استاندارد در محیط راحت و امن منزل شما هستیم.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>خدمات تخصصی:</strong> اکوکاردیوگرافی در منزل، نوار قلب در خانه، هولتر ۲۴ ساعته، مشاوره کاردیولوژیست، ویزیت دکتر قلب، تنظیم داروهای قلبی، پیگیری بعد از عمل جراحی قلب
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
                  src={cardiologyImage} 
                  alt="ویزیت متخصص قلب در منزل تهران - خدمات کاردیولوژی در خانه شامل اکو قلب، نوار قلب و مشاوره تخصصی"
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

        {/* Info Box Section */}
        <section className="medical-section bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-card border-2 border-primary/20 rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    خدمات تخصصی قلب و عروق با بهترین کیفیت
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground">
                    شرکت نوید زندگی به صورت تخصصی کلیه خدمات مربوط به قلب و عروق در منزل شامل <strong>اکوکاردیوگرافی، نوار قلب، ویزیت متخصص قلب و هولتر ۲۴ ساعته</strong> را با بالاترین استانداردهای کیفیت و مناسب‌ترین قیمت‌ها ارائه می‌دهد. تیم ما متشکل از متخصصان مجرب قلب و عروق با تجهیزات پیشرفته پزشکی در خدمت سلامت شماست.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="tel:09386117912" 
                      className="inline-flex items-center text-primary hover:underline font-semibold"
                    >
                      <Phone className="ml-2 h-4 w-4" />
                      تماس فوری: 09386117912
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چه کسانی به ویزیت دکتر قلب در منزل نیاز دارند؟
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              خدمات <strong>متخصص قلب در منزل</strong> برای افراد و شرایط زیر بسیار حیاتی و ضروری است:
            </p>
            <div className="space-y-4 mr-6">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  بیماران دارای سابقه حمله قلبی یا جراحی قلب که نیازمند مراقبت پس از ترخیص هستند.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  افراد مسن با مشکلات حرکتی یا ناتوانی که انتقال آن‌ها دشوار است.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  بیمارانی که نیاز به پایش و تنظیم داروی فشار خون، ضربان قلب یا نارسایی قلبی دارند.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  افرادی که علائم ناگهانی قلبی (مانند درد قفسه سینه خفیف، تپش قلب یا تنگی نفس) را تجربه می‌کنند.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              خدمات تخصصی قلب و عروق در منزل نوید زندگی
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              تیم مجرب ما، شامل کاردیولوژیست‌های متخصص، علاوه بر معاینه بالینی، خدمات تشخیصی و درمانی زیر را در منزل ارائه می‌دهند:
            </p>
            <div className="space-y-6 mr-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">معاینه و مشاوره تخصصی</h3>
                <p className="text-muted-foreground leading-relaxed">
                  شامل بررسی کامل سوابق، داروهای مصرفی و ارائه برنامه درمانی شخصی‌سازی شده.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">نوار قلب (ECG/EKG)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  انجام <strong>نوار قلب</strong> فوری و تفسیر آن توسط متخصص در محل.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">اکوکاردیوگرافی در منزل (Eco)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  انجام <Link to="/articles/echo-home" className="text-primary hover:underline font-semibold">اکو قلب در منزل</Link> با دستگاه‌های پرتابل و پیشرفته برای ارزیابی دقیق ساختار و عملکرد قلب، بررسی دریچه‌ها و تشخیص نارسایی قلبی.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">هولتر مونیتورینگ در منزل</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نصب و راه‌اندازی <Link to="/services/holter" className="text-primary hover:underline font-semibold">دستگاه هولتر</Link> برای ثبت ۲۴ ساعته نوار قلب و فشار خون با گزارش تخصصی کاردیولوژیست.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">تنظیم و تجویز داروهای قلبی</h3>
                <p className="text-muted-foreground leading-relaxed">
                  بررسی و تنظیم دوزهای دارویی زیر نظر متخصص، از جمله داروهای ضد انعقاد مانند <Link to="/articles/warfarin" className="text-primary hover:underline">وارفارین</Link> و داروهای کاهش کلسترول مانند <Link to="/articles/atorvastatin" className="text-primary hover:underline">آتورواستاتین</Link>.
                </p>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">مقالات مرتبط با سلامت قلب</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/articles/heart-palpitations" className="text-primary hover:underline flex items-center gap-2">
                  → تپش قلب: علل و درمان
                </Link>
                <Link to="/articles/high-blood-pressure" className="text-primary hover:underline flex items-center gap-2">
                  → کنترل فشار خون بالا
                </Link>
                <Link to="/articles/heart-attack-symptoms" className="text-primary hover:underline flex items-center gap-2">
                  → علائم حمله قلبی
                </Link>
                <Link to="/articles/angiography-recovery-time" className="text-primary hover:underline flex items-center gap-2">
                  → دوران نقاهت بعد آنژیوگرافی
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              مزایای استفاده از کاردیولوژیست در خانه
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              دریافت خدمات تخصصی قلب در منزل نه تنها راحت‌تر است، بلکه کیفیت مراقبت را نیز افزایش می‌دهد:
            </p>
            <div className="space-y-6 mr-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">کاهش اضطراب و استرس</h3>
                <p className="text-muted-foreground leading-relaxed">
                  معاینه در محیط آشنای خانه، استرس بیمار قلبی را کاهش داده و نتایج دقیق‌تری (مانند فشار خون) به دست می‌آید.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">دقت تشخیص بالاتر</h3>
                <p className="text-muted-foreground leading-relaxed">
                  بررسی شرایط بیمار در محیط زندگی واقعی می‌تواند به تشخیص دقیق‌تر عواملی که بر سلامت قلب تأثیر می‌گذارند، کمک کند.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">صرفه‌جویی در زمان</h3>
                <p className="text-muted-foreground leading-relaxed">
                  حذف نیاز به حمل و نقل و زمان انتظار طولانی در کلینیک‌ها.
                </p>
              </div>
            </div>
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
              خدمات ویزیت متخصص قلب در منزل نوید زندگی در <strong>تمام مناطق تهران</strong> فعال است:
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
              چرا نوید زندگی برای ویزیت متخصص قلب در منزل؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  کاردیولوژیست‌های مجرب
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  پزشکان متخصص با سابقه کار در بیمارستان‌های معتبر و دارای مجوز از سازمان نظام پزشکی
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  تجهیزات پیشرفته
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  دستگاه‌های اکو، نوار قلب و هولتر کاملاً استاندارد و کالیبره شده
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
              فرآیند رزرو ویزیت متخصص قلب در منزل
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
                  کاردیولوژیست با تجهیزات کامل در منزل شما حاضر می‌شود
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ۴
                </div>
                <h3 className="font-semibold mb-2">دریافت گزارش</h3>
                <p className="text-sm text-muted-foreground">
                  گزارش کامل و توصیه‌های درمانی را دریافت کنید
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              برای حفظ سلامت قلب خود یا عزیزانتان، لحظه‌ای درنگ نکنید
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              برای اعزام فوری <strong>متخصص قلب در منزل</strong>، همین حالا با نوید زندگی تماس بگیرید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleCall}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: 09386117912
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Info Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default CardiologyServices;