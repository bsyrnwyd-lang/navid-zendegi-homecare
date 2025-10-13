import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PricingInfo from "@/components/PricingInfo";
import SEOHead from "@/components/SEOHead";

const CardiologyServices = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="ویزیت متخصص قلب در منزل تهران | خدمات کاردیولوژی و اکو در خانه | نوید زندگی"
        description="متخصص قلب در منزل تهران را شبانه روزی بخواهید. اعزام فوری کاردیولوژیست با تجهیزات کامل (شامل اکو و نوار قلب) به خانه شما. برای ویزیت دکتر قلب در منزل تماس بگیرید."
        keywords="ویزیت متخصص قلب در منزل، کاردیولوژیست در منزل، اکو قلب در منزل، نوار قلب در منزل، دکتر قلب در خانه، متخصص قلب تهران"
        canonical="https://navidzendegi.com/cardiology"
        ogType="website"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-primary">
              ویزیت متخصص قلب در منزل تهران (خدمات کامل کاردیولوژی)
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              بیماری‌های قلبی عروقی نیازمند مراقبت‌های ویژه و تخصصی هستند. اگر بیمار شما شرایط انتقال به بیمارستان را ندارد یا به دنبال آسایش و دقت بیشتر در فرآیند درمان هستید، <strong>نوید زندگی</strong> با اعزام <strong>متخصص قلب در منزل تهران</strong>، خدمات کامل کاردیولوژی را به خانه شما می‌آورد. ما متعهد به ارائه مراقبت‌های حرفه‌ای و استفاده از تجهیزات پزشکی استاندارد در محیط راحت و امن منزل شما هستیم.
            </p>
            <Button 
              onClick={handleCall}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Phone className="ml-2 h-5 w-5" />
              درخواست ویزیت متخصص قلب
            </Button>
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
                  انجام <strong>اکو قلب در منزل</strong> با دستگاه‌های پرتابل و پیشرفته برای ارزیابی دقیق ساختار و عملکرد قلب.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">هولتر مونیتورینگ در منزل</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نصب و راه‌اندازی دستگاه هولتر برای ثبت ۲۴ ساعته نوار قلب و فشار خون.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">تنظیم و تجویز داروهای قلبی</h3>
                <p className="text-muted-foreground leading-relaxed">
                  بررسی و تنظیم دوزهای دارویی زیر نظر متخصص.
                </p>
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

        {/* Coverage & How to Request Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              پوشش دهی خدمات متخصص قلب در تهران و نحوه درخواست
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              ما مفتخریم که خدمات <strong>ویزیت متخصص قلب</strong> را به صورت شبانه روزی در تمام مناطق تهران ارائه دهیم. برای درخواست اعزام فوری متخصص قلب به منزل خود، کافی است:
            </p>
            <div className="space-y-4 mr-6 mb-8">
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  با شماره‌های نوید زندگی تماس بگیرید.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  مشکل و شرایط بیمار را برای کارشناسان ما توضیح دهید.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="ml-3 text-primary font-bold">•</span>
                <p className="leading-relaxed">
                  سریعاً هماهنگی لازم برای اعزام <strong>دکتر قلب در منزل</strong> همراه با تجهیزات مورد نیاز انجام می‌شود.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              نوید زندگی، با ارائه خدمات کاردیولوژی کامل، آرامش خاطر را برای شما به ارمغان می‌آورد.
            </p>
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