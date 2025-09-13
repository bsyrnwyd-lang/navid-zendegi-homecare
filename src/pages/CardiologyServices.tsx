import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Activity, FileText, Clock, CheckCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const CardiologyServices = () => {
  const services = [
    {
      icon: Heart,
      title: "ویزیت پزشک قلب در منزل",
      description: "ویزیت تخصصی قلب و عروق توسط پزشکان مجرب در منزل",
      features: ["معاینه کامل قلب", "تشخیص بیماری‌های قلبی", "تجویز دارو", "مشاوره تخصصی"]
    },
    {
      icon: Activity,
      title: "اکو قلب در منزل",
      description: "انجام اکوکاردیوگرافی با دستگاه‌های پیشرفته در منزل",
      features: ["اکوی ترانس تراسیک", "بررسی عملکرد قلب", "تشخیص نارسایی", "گزارش فوری"]
    },
    {
      icon: FileText,
      title: "نوار قلب در منزل",
      description: "ثبت الکتروکاردیوگرام (ECG) و تفسیر نتایج در منزل",
      features: ["ECG استاندارد", "نوار قلب ۱۲ lead", "تفسیر فوری", "گزارش مکتوب"]
    }
  ];

  const whyChooseUs = [
    "پزشکان متخصص قلب و عروق",
    "تجهیزات پزشکی مدرن و قابل حمل", 
    "سرویس ۲۴ ساعته",
    "گزارش‌دهی سریع و دقیق",
    "مشاوره رایگان قبل از ویزیت",
    "قیمت‌های مناسب و منصفانه"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="medical-section bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                ویزیت پزشک قلب در منزل
                <span className="block text-primary">اکو و نوار قلب در منزل</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                خدمات تخصصی قلب و عروق در راحتی منزل شما. <strong>ویزیت پزشک قلب در منزل</strong> 
                همراه با <strong>اکو قلب در منزل</strong> و <strong>نوار قلب در منزل</strong> 
                توسط پزشکان مجرب و تجهیزات پیشرفته.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => window.location.href = 'tel:09386117912'}>
                  <Phone className="ml-2 h-5 w-5" />
                  تماس فوری: ۰۹۳۸۶۱۱۷۹۱۲
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  درخواست ویزیت
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/medical-equipment.jpg" 
                alt="تجهیزات پزشکی قلب در منزل" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">خدمات تخصصی قلب در منزل</h2>
            <p className="section-subtitle">
              ویزیت پزشک قلب، اکو قلب و نوار قلب با بالاترین کیفیت در منزل شما
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="medical-card group hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full ml-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="medical-section bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">چرا ما را انتخاب کنید؟</h2>
            <p className="section-subtitle">
              مزایای استفاده از خدمات تخصصی قلب نوید زندگی
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 space-x-reverse p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8">اطلاعات تکمیلی خدمات</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">ویزیت پزشک قلب در منزل</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>ویزیت پزشک قلب در منزل</strong> نوید زندگی شامل معاینه کامل توسط 
                  متخصصین قلب و عروق می‌باشد. <strong>پزشک قلب در منزل</strong> شما حاضر 
                  شده و بهترین مشاوره‌های درمانی را ارائه می‌دهد.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary">اکو قلب در منزل</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>اکو قلب در منزل</strong> با استفاده از دستگاه‌های اکوکاردیوگرافی 
                  پیشرفته انجام می‌شود. این خدمت شامل بررسی کامل عملکرد قلب و تشخیص 
                  مشکلات احتمالی است.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-accent">نوار قلب در منزل</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>نوار قلب در منزل</strong> یا ECG در منزل با دقت بالا انجام شده 
                  و نتایج فوری ارائه می‌شود. این خدمت برای تشخیص آریتمی و سایر 
                  اختلالات قلبی ضروری است.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">مزایای خدمات در منزل</h3>
                <p className="text-muted-foreground leading-relaxed">
                  خدمات قلب در منزل باعث کاهش استرس بیمار، صرفه‌جویی در وقت و 
                  هزینه و دسترسی آسان به خدمات تخصصی می‌شود. تمام خدمات با 
                  رعایت پروتکل‌های بهداشتی انجام می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default CardiologyServices;