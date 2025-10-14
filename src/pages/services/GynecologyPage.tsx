import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import { Phone } from "lucide-react";
import gynecologyImage from "@/assets/gynecology.jpg";

const GynecologyPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  return (
    <>
      <SEOHead
        title="ویزیت متخصص زنان در منزل تهران | پاپ اسمیر، HPV، پلاسما پن در خانه | نوید زندگی"
        description="متخصص زنان در منزل تهران جهت معاینه، پاپ اسمیر، درمان HPV و زگیل تناسلی با پلاسما پن. حفظ حریم خصوصی و ارائه خدمات تخصصی زنان در خانه."
        keywords="ویزیت متخصص زنان در منزل، پاپ اسمیر در منزل، درمان HPV در خانه، زگیل تناسلی، پلاسما پن، متخصص زنان تهران، حفظ حریم خصوصی"
        canonical="https://navid-zendegi-homecare.lovable.app/services/gynecology"
        ogType="website"
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    ویزیت متخصص زنان و انجام خدمات سرپایی در منزل تهران (حفظ حریم خصوصی)
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    نوید زندگی با اعزام متخصص زنان مجرب به منزل شما، حریم خصوصی و راحتی را با خدمات تخصصی زنان ترکیب می‌کند. دیگر نیازی به مراجعه به کلینیک و تحمل محیط‌های درمانی شلوغ نیست. ما کلیه معاینات، آزمایشات و درمان‌های سرپایی زنان را با حفظ بالاترین استانداردهای بهداشتی و درمانی، در محیط امن و راحت خانه شما ارائه می‌دهیم.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={handleCall}
                      className="group"
                    >
                      <Phone className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                      تماس برای نوبت‌دهی فوری
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={gynecologyImage}
                      alt="ویزیت متخصص زنان در منزل - نوید زندگی"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* خدمات تخصصی */}
          <section className="medical-section bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="section-title">خدمات تخصصی زنان که در منزل ارائه می‌دهیم</h2>
                <p className="section-subtitle">
                  تیم تخصصی نوید زندگی، علاوه بر معاینات عمومی، طیف وسیعی از درمان‌های تخصصی را در منزل انجام می‌دهد
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                {/* غربالگری سلامت زنان */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">غربالگری سلامت زنان (پاپ اسمیر و HPV)</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>پاپ اسمیر (Pap Smear):</strong> انجام تست پاپ اسمیر جهت غربالگری سرطان دهانه رحم توسط متخصص زنان در خانه</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>تشخیص و درمان HPV:</strong> مشاوره، پیگیری درمان و کاهش بار ویروس پاپیلومای انسانی (HPV) در منزل</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>تزریق واکسن HPV:</strong> خدمات تزریق واکسن‌های مربوط به HPV جهت پیشگیری (تهیه واکسن به عهده متقاضی است)</span>
                    </li>
                  </ul>
                </div>

                {/* درمان با پلاسما پن */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">درمان زگیل تناسلی و ضایعات پوستی با پلاسما پن</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    ما از دستگاه پیشرفته پلاسما پن برای درمان موثر و سریع ضایعات پوستی و تناسلی در منزل استفاده می‌کنیم.
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>موارد درمان:</strong> رفع انواع زگیل تناسلی (وارت)، برداشتن انواع خال‌های پوستی و ضایعات تناسلی با پلاسما پن</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>تسریع بهبود زخم:</strong> درمان انواع زخم‌های بدن و تسریع فرآیند بهبود زخم‌های دهانه رحم و سایر ضایعات</span>
                    </li>
                  </ul>
                </div>

                {/* درمان عفونت‌ها */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">درمان تخصصی عفونت‌ها و مشکلات واژینال</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>درمان انواع عفونت‌های واژینال:</strong> تشخیص دقیق نوع عفونت و تجویز درمان‌های مناسب در خانه</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>درمان زخم دهانه رحم:</strong> تشخیص و شروع فرآیند درمان زخم‌ها</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>درمان واژینیسموس:</strong> ارائه مشاوره و روش‌های درمانی جهت رفع واژینیسموس</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 mt-3 flex-shrink-0"></div>
                      <span><strong>درمان خشکی واژن در یائسگی:</strong> ارائه درمان‌های موضعی برای تسریع خون‌رسانی، بهبود خشکی واژن و علائم یائسگی و انواع بیماری‌ها</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* چرا نوید زندگی */}
          <section className="medical-section">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="section-title">چرا نوید زندگی را برای متخصص زنان در منزل انتخاب کنید؟</h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">حفظ کامل حریم خصوصی</h3>
                    <p className="text-lg text-muted-foreground">
                      انجام کلیه معاینات و درمان‌ها در محیط امن خانه و با بالاترین سطح رازداری
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">تجهیزات تخصصی پرتابل</h3>
                    <p className="text-lg text-muted-foreground">
                      همراه داشتن دستگاه‌هایی مانند پلاسما پن و تجهیزات کامل معاینه
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">اولویت با آسایش بیمار</h3>
                    <p className="text-lg text-muted-foreground">
                      حذف استرس ناشی از مراجعه به مراکز درمانی و امکان استراحت فوری پس از فرآیند درمان
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">پوشش سراسری تهران</h3>
                    <p className="text-lg text-muted-foreground">
                      اعزام سریع متخصص زنان به کلیه مناطق تهران
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  برای حفظ سلامتی خود همین حالا تماس بگیرید
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  برای حفظ سلامتی و دریافت خدمات تخصصی زنان (مانند پاپ اسمیر یا درمان HPV) در محیط امن خانه خود، همین حالا با نوید زندگی تماس بگیرید.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={handleCall}
                    className="group"
                  >
                    <Phone className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                    ۰۹۳۸۶۱۱۷۹۱۲
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://wa.me/989386117912', '_blank')}
                  >
                    تماس از طریق واتساپ
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default GynecologyPage;
