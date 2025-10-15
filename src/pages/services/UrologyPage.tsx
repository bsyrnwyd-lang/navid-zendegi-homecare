import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import StructuredData from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { User, CheckCircle, Phone, Shield, Stethoscope, Activity } from "lucide-react";
import urologyImage from "@/assets/urology.jpg";

const UrologyPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "خدمات", url: "/#services" },
    { name: "ویزیت متخصص اورولوژی در منزل", url: "/services/urology" }
  ];

  const faqs = [
    {
      question: "سوندگذاری در منزل چگونه انجام می‌شود؟",
      answer: "متخصص اورولوژی با تجهیزات استریل و استاندارد به منزل شما مراجعه کرده و با رعایت کامل نکات بهداشتی، سوندگذاری را انجام می‌دهد."
    },
    {
      question: "آیا خدمات اورولوژی در تمام مناطق تهران ارائه می‌شود؟",
      answer: "بله، نوید زندگی در تمامی مناطق تهران خدمات متخصص اورولوژی در منزل را ارائه می‌دهد."
    },
    {
      question: "چه زمانی باید متخصص اورولوژی را در منزل بخواهم؟",
      answer: "در صورت احتباس ادرار، عفونت‌های شدید ادراری، نیاز به سوندگذاری یا مشکلات حاد پروستات، می‌توانید متخصص اورولوژی را در منزل درخواست کنید."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ویزیت متخصص اورولوژی در منزل تهران | سوندگذاری و درمان مشکلات مجاری ادراری | نوید زندگی"
        description="متخصص اورولوژی در منزل تهران را برای تشخیص و درمان مشکلات کلیه، مثانه، پروستات و مجاری ادراری بخواهید. اعزام فوری جهت سوندگذاری در منزل و مشاوره تخصصی."
        keywords="متخصص اورولوژی در منزل تهران, سوندگذاری در منزل, درمان مشکلات ادراری, ویزیت اورولوژی در خانه, دکتر اورولوژی در منزل, مشکلات پروستات, عفونت ادراری"
        canonical="https://navidzendegi.ir/services/urology"
        ogType="website"
      />
      <StructuredData
        breadcrumbs={breadcrumbItems}
        service={{
          name: "ویزیت متخصص اورولوژی در منزل تهران",
          description: "خدمات تخصصی اورولوژی شامل سوندگذاری، درمان مشکلات کلیه، مثانه و پروستات در منزل",
          provider: "نوید زندگی",
          areaServed: "تهران",
          serviceType: "پزشکی"
        }}
        faqs={faqs}
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <BreadcrumbNavigation items={breadcrumbItems} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary leading-tight">
                  ویزیت متخصص اورولوژی در منزل تهران (تشخیص و درمان مشکلات کلیه، پروستات و مثانه)
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  مشکلات مربوط به کلیه، مثانه، پروستات و مجاری ادراری اغلب نیازمند رسیدگی فوری و تخصصی است. برای بیمارانی که به دلیل درد شدید، کهولت سن یا محدودیت‌های حرکتی امکان مراجعه حضوری به مطب را ندارند، نوید زندگی با اعزام متخصص اورولوژی در منزل تهران، خدمات تشخیصی و درمانی کامل را در خانه شما فراهم می‌کند. ما متعهد به ارائه مراقبت‌های دقیق و حفظ کرامت بیمار هستیم.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: 09386117912
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={urologyImage} 
                  alt="ویزیت متخصص اورولوژی در منزل تهران - سوندگذاری و درمان مشکلات کلیه، مثانه و پروستات"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">چه زمانی باید از خدمات متخصص اورولوژی در منزل استفاده کرد؟</h2>
            <p className="text-lg text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              در برخی شرایط، نیاز به حضور دکتر اورولوژی در خانه حیاتی است تا از عوارض جدی‌تر جلوگیری شود:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">نیاز به سوندگذاری</h3>
                      <p className="text-muted-foreground text-sm">
                        بیمارانی که دچار احتباس ادرار شده‌اند یا نیاز به تعویض و نصب سوند دارند.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">مشکلات ادراری حاد</h3>
                      <p className="text-muted-foreground text-sm">
                        بروز ناگهانی عفونت‌های شدید ادراری، وجود خون در ادرار یا درد شدید در ناحیه کلیه و مثانه.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">بیماران پس از جراحی</h3>
                      <p className="text-muted-foreground text-sm">
                        مراقبت‌های پس از عمل‌های جراحی اورولوژی که نیاز به پایش مداوم و کشیدن بخیه دارند.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">سالمندان و مشکلات پروستات</h3>
                      <p className="text-muted-foreground text-sm">
                        پایش منظم وضعیت پروستات در سالمندان و مدیریت عوارض ناشی از آن.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">خدمات تخصصی اورولوژی قابل ارائه در منزل توسط نوید زندگی</h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              تیم متخصص ما، کلیه خدمات زیر را با رعایت کامل اصول بهداشتی و تخصصی در منزل شما انجام می‌دهد:
            </p>
            
            <div className="space-y-8">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Stethoscope className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">سوندگذاری و مدیریت مشکلات مجاری ادراری</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">نصب و تعویض سوند فولی:</span>
                        <span className="text-muted-foreground"> انجام تخصصی سوندگذاری برای بیماران نیازمند به تخلیه مثانه و تعویض دوره‌ای آن.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">کشیدن سوند:</span>
                        <span className="text-muted-foreground"> خارج کردن سوند بعد از دوره درمان یا جراحی.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">درمان و پیگیری عفونت‌های ادراری (UTI):</span>
                        <span className="text-muted-foreground"> تشخیص و تجویز آنتی‌بیوتیک‌های مناسب برای کنترل عفونت.</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Activity className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">مشاوره و پایش تخصصی بیماری‌ها</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">مشاوره مشکلات پروستات:</span>
                        <span className="text-muted-foreground"> پایش علائم بزرگی پروستات (BPH) و تنظیم داروهای مربوطه.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">کنترل و مدیریت سنگ کلیه و مثانه:</span>
                        <span className="text-muted-foreground"> ارزیابی درد و تجویز درمان‌های حمایتی برای دفع سنگ‌های کوچک یا آماده‌سازی بیمار برای اقدامات درمانی بعدی.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold">بررسی مشکلات مثانه عصبی:</span>
                        <span className="text-muted-foreground"> ارزیابی و مدیریت مشکلات مربوط به کنترل ادرار.</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">مزایای انتخاب نوید زندگی برای ویزیت اورولوژی در خانه</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="medical-card text-center">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">اعزام فوری و سریع</h3>
                  <p className="text-muted-foreground text-sm">
                    اعزام متخصص اورولوژی در کوتاه‌ترین زمان برای شرایط حاد مانند احتباس ادرار.
                  </p>
                </CardContent>
              </Card>
              <Card className="medical-card text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">تجهیزات استریل و استاندارد</h3>
                  <p className="text-muted-foreground text-sm">
                    استفاده از ابزار و ست‌های کاملاً استریل برای سوندگذاری و اقدامات سرپایی.
                  </p>
                </CardContent>
              </Card>
              <Card className="medical-card text-center">
                <CardContent className="p-6">
                  <User className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">کاهش درد و استرس</h3>
                  <p className="text-muted-foreground text-sm">
                    انجام اقدامات درمانی حساس در محیط آرام خانه، که تحمل درد و استرس را برای بیمار کاهش می‌دهد.
                  </p>
                </CardContent>
              </Card>
              <Card className="medical-card text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">پوشش سراسری</h3>
                  <p className="text-muted-foreground text-sm">
                    ارائه خدمات درمانی در تمامی مناطق تهران.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="section-title mb-6">ویزیت متخصص اورولوژی در منزل</h2>
            <p className="text-lg text-muted-foreground mb-8">
              مشاوره و درمان بیماری‌های اورولوژی در خصوصیت منزل
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default UrologyPage;