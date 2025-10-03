import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Phone, CheckCircle, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import PricingInfo from "@/components/PricingInfo";
import cardiacImage from "@/assets/iranian-cardiology-home.jpg";

const EchoECGPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "خدمات", url: "/#services" },
    { name: "اکو و نوار قلب", url: "/services/echo-ecg" }
  ];

  const faqs = [
    {
      question: "اکوکاردیوگرافی در منزل چیست؟",
      answer: "اکوکاردیوگرافی یا سونوگرافی قلب روشی است که با استفاده از امواج صوتی، ساختار و عملکرد قلب را بررسی می‌کند. این آزمایش برای ارزیابی دریچه‌های قلب، عملکرد بطن‌ها و تشخیص ناهنجاری‌های قلبی استفاده می‌شود."
    },
    {
      question: "نوار قلب (ECG) چه اطلاعاتی ارائه می‌دهد؟",
      answer: "نوار قلب ریتم و فعالیت الکتریکی قلب را ثبت می‌کند و به تشخیص آریتمی، ایسکمی قلب، سکته قلبی و سایر مشکلات قلبی کمک می‌کند."
    },
    {
      question: "هولتر ۲۴ ساعته چگونه کار می‌کند؟",
      answer: "هولتر یک دستگاه پرتابل است که ضربان قلب را به صورت مستمر در طول ۲۴ ساعت ثبت می‌کند. این آزمایش برای تشخیص آریتمی‌های مخفی که در نوار قلب معمولی ظاهر نمی‌شوند، استفاده می‌شود."
    },
    {
      question: "آیا نیاز به آماده‌سازی خاصی قبل از این آزمایشات است؟",
      answer: "خیر، معمولاً نیاز به آماده‌سازی خاصی نیست. فقط کافی است لباس راحت بپوشید که دسترسی به قفسه سینه آسان باشد."
    }
  ];

  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  return (
    <>
      <SEOHead
        title="اکو و نوار قلب در منزل تهران | اکوکاردیوگرافی منزل | نوید زندگی"
        description="انجام اکوکاردیوگرافی، نوار قلب ECG و هولتر ۲۴ ساعته در منزل تهران توسط تکنسین‌های مجرب نوید زندگی. گزارش فوری و تخصصی. تماس: 09386117912"
        keywords="اکو قلب در منزل، نوار قلب در منزل، اکوکاردیوگرافی منزل، ECG در منزل، هولتر منزل، تست قلب در منزل تهران"
        canonical="https://navidzendegi.ir/services/echo-ecg"
        ogType="website"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        service={{
          name: "اکو و نوار قلب در منزل",
          description: "انجام اکوکاردیوگرافی، نوار قلب و هولتر در منزل با تجهیزات پیشرفته",
          provider: "نوید زندگی",
          areaServed: "تهران و کرج",
          serviceType: "آزمایشات تخصصی قلب در منزل"
        }}
        faqs={faqs}
      />

      <div className="min-h-screen bg-background">
        <Header />
      
        <main className="pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-8">
            <BreadcrumbNavigation items={breadcrumbs} />
          </div>

          {/* Hero Section */}
          <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    اکو و نوار قلب در منزل تهران
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    انجام آزمایشات تخصصی قلب شامل اکوکاردیوگرافی، نوار قلب و هولتر در راحتی منزل شما توسط تکنسین‌های مجرب نوید زندگی.
                  </p>
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6"
                    onClick={handleCall}
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    رزرو نوبت فوری - ۰۹۳۸۶۱۱۷۹۱۲
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src={cardiacImage} 
                    alt="اکو و نوار قلب در منزل"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="medical-section">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="section-title">خدمات اکو و نوار قلب در منزل</h2>
                <p className="section-subtitle">
                  انجام کلیه آزمایشات قلب با تجهیزات پیشرفته و گزارش فوری
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="medical-card group hover:border-primary/20">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">اکوکاردیوگرافی در منزل</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-center">
                      بررسی تخصصی ساختار و عملکرد قلب با سونوگرافی قلب
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        ارزیابی دریچه‌های قلب
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        بررسی عملکرد بطن‌ها
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        تشخیص ناهنجاری‌های قلبی
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        گزارش فوری متخصص
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="medical-card group hover:border-primary/20">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Activity className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">نوار قلب (ECG) در منزل</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-center">
                      ثبت و بررسی ریتم قلب و تشخیص آریتمی‌ها
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        ثبت ۱۲ کاناله ECG
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        تشخیص آریتمی
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        بررسی ایسکمی قلب
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        تفسیر تخصصی نوار
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="medical-card group hover:border-primary/20">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Activity className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">هولتر ۲۴ ساعته</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-center">
                      مانیتورینگ مستمر ضربان قلب در طول ۲۴ ساعت
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        ثبت مستمر ۲۴ ساعته
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        تشخیص آریتمی‌های مخفی
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        بررسی فعالیت روزمره
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        گزارش تحلیلی کامل
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="medical-section">
            <div className="container mx-auto">
              <FAQSection faqs={faqs} />
            </div>
          </section>

          {/* Contact Section */}
          <section className="medical-section bg-muted/50">
            <div className="container mx-auto text-center">
              <h2 className="section-title mb-8">رزرو نوبت اکو و نوار قلب در منزل</h2>
              <p className="section-subtitle mb-8">
                برای انجام آزمایشات قلب در منزل همین حالا تماس بگیرید
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={handleCall}
              >
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
              </Button>
            </div>
          </section>

          {/* Pricing Info Section */}
          <section className="medical-section bg-background">
            <div className="container mx-auto">
              <PricingInfo />
            </div>
          </section>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default EchoECGPage;
