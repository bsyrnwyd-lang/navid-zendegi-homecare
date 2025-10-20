import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import generalDoctorImage from "@/assets/modern-general-doctor-home.jpg";

const GeneralDoctorPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت پزشک عمومی در منزل تهران | اعزام فوری و شبانه روزی | نوید زندگی"
        description="پزشک در منزل تهران را شبانه روزی و فوری بخواهید. اعزام پزشک عمومی و متخصص به محل شما با کادر مجرب نوید زندگی. برای ویزیت دکتر در خانه همین حالا تماس بگیرید."
        keywords="ویزیت پزشک در منزل، پزشک عمومی در منزل، پزشک در خانه تهران، دکتر در منزل، ویزیت دکتر، خدمات پزشکی در منزل"
        canonical="https://navidzendegi.com/general-doctor"
        ogType="website"
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
                <Button 
                  onClick={handleCall}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  درخواست ویزیت پزشک عمومی
                </Button>
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
                  <strong>مشاوره و ارجاع:</strong> ارائه مشاوره‌های تخصصی در مورد روند بیماری و در صورت نیاز، ارجاع به پزشک متخصص در منزل.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>انجام خدمات اولیه درمانی:</strong> شامل تزریقات، سرم تراپی و پانسمان‌های اولیه در صورت لزوم.
                </p>
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

        {/* Why Navid Zendegi Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چرا نوید زندگی بهترین انتخاب برای خدمات پزشکی در منزل است؟
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              انتخاب یک مرکز معتبر برای پزشک در منزل اهمیت حیاتی دارد. نوید زندگی با تضمین کیفیت خدمات، در کنار شماست:
            </p>
            <div className="space-y-4 mr-6">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>اعزام سریع و فوری:</strong> ما در کوتاه‌ترین زمان ممکن، پزشک را به محل شما اعزام می‌کنیم.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>کادر پزشکی مجرب و متعهد:</strong> تمامی پزشکان ما دارای مجوزهای لازم و سابقه کار درخشان هستند.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  <strong>پوشش سراسری تهران:</strong> خدمات ما تمام مناطق تهران، از شمال و جنوب تا شرق و غرب را شامل می‌شود.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">مناطق اصلی تحت پوشش در تهران</h3>
            <p className="text-muted-foreground leading-relaxed">
              ما متعهد به ارائه خدمات <strong>ویزیت پزشک در منزل</strong> در تمام نقاط تهران هستیم، از جمله: شمال تهران (ولنجک، نیاوران، فرمانیه، الهیه)، غرب تهران (سعادت‌آباد، شهرک غرب، پونک)، شرق تهران (تجریش، دربند، فرشته)، و جنوب تهران (یافت‌آباد، شهران، نازی‌آباد).
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              آسایش و درمان در خانه شماست
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              برای درخواست فوری <strong>ویزیت پزشک در منزل</strong> همین حالا با ما تماس بگیرید.
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

export default GeneralDoctorPage;