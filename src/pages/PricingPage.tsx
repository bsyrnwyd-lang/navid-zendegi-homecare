import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Phone, Clock, AlertTriangle, AlertCircle, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import nursingImage from "@/assets/nurse-home-visit.jpg";
import doctorImage from "@/assets/doctor-patient-home.jpg";

const PricingPage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  // خدمات پرستاری در منزل
  const nursingServices = [
    { service: "تعبیه آنژیوکت و وصل سرم بزرگسال (بدون اقامت پرستار)", price: "500,000" },
    { service: "هر تزریق داخل سرم (غیر از آنتی بیوتیک)", price: "100,000" },
    { service: "هر تزریق آنتی بیوتیک داخل سرم (با نیم ساعت ماندگاری پرستار)", price: "200,000" },
    { service: "تزریق عضلانی یک تزریق", price: "400,000" },
    { service: "سرم تراپی کودک 5 تا 10 سال", price: "600,000" },
    { service: "سرم تراپی کودک زیر 5 سال", price: "700,000" },
    { service: "هر تزریق عضلانی اضافه", price: "100,000" },
    { service: "هر نیم ساعت ماندگاری پرستار", price: "150,000" },
    { service: "تعبیه سوند", price: "600,000" },
    { service: "تعبیه NG (لوله گاواژ)", price: "700,000" },
    { service: "پانسمان (قیمت پایه)", price: "500,000" },
    { service: "کشیدن بخیه (قیمت پایه)", price: "400,000" },
    { service: "کنترل فشار خون", price: "400,000" },
    { service: "انما (تنقیه)", price: "800,000" },
    { service: "درمان زخم بستر (قیمت پایه)", price: "700,000" },
    { service: "نوار قلب", price: "700,000" }
  ];

  // ویزیت پزشک در منزل
  const doctorServices = [
    { service: "ویزیت پزشک عمومی", price: "980,000" },
    { service: "ویزیت پزشک متخصص", price: "از 2,000,000" }
  ];

  // سایر خدمات تخصصی
  const specialServices = [
    { service: "فیزیوتراپی در منزل (قیمت پایه)", price: "800,000" },
    { service: "سونوگرافی در منزل (قیمت پایه)", price: "2,700,000" },
    { service: "رادیولوژی در منزل (قیمت پایه)", price: "2,500,000" },
    { service: "نوار عصب و عضله در منزل", price: "3,000,000" },
    { service: "ویزیت متخصص قلب + اکو در منزل + نوار قلب در منزل", price: "4,500,000" },
    { service: "هولتر در منزل", price: "2,000,000" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="medical-section bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              تعرفه خدمات نوید زندگی
              <span className="block text-primary text-2xl mt-2">سال ۱۴۰۳ - ۱۴۰۴</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              تعرفه‌های شفاف و منصفانه برای خدمات پزشکی، پرستاری و تخصصی در منزل
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={handleCall}
                className="flex items-center gap-3 text-lg px-8 py-6"
              >
                <Phone className="w-6 h-6" />
                تماس فوری
                <span className="ltr font-bold">{phoneNumber}</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-lg px-8 py-6 border-2"
              >
                <MessageCircle className="w-6 h-6" />
                واتساپ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* تصاویر واقعی خدمات */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={doctorImage} 
                alt="ویزیت پزشک در منزل - خدمات پزشکی حرفه‌ای"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">ویزیت پزشک در منزل</h3>
                <p className="text-sm">تشخیص و درمان توسط پزشکان مجرب</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={nursingImage} 
                alt="پرستاری در منزل - مراقبت حرفه‌ای"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">پرستاری در منزل</h3>
                <p className="text-sm">مراقبت و تزریقات با استانداردهای بالا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* خدمات پرستاری */}
      <section className="medical-section bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">تعرفه اقدامات پرستاری در منزل</h2>
            <p className="section-subtitle">
              خدمات پرستاری توسط نیروهای مجرب با حداقل مدرک کارشناس پرستاری
            </p>
          </div>
          
          <Card className="medical-card">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="text-primary font-bold py-4 px-2">نام خدمت</th>
                      <th className="text-primary font-bold py-4 px-2">تعرفه (تومان)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nursingServices.map((item, index) => (
                      <tr key={index} className="border-b border-muted hover:bg-muted/20 transition-colors">
                        <td className="py-4 px-2 font-medium">{item.service}</td>
                        <td className="py-4 px-2 text-primary font-bold ltr text-left">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ویزیت پزشک */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">تعرفه ویزیت پزشک در منزل</h2>
            <p className="section-subtitle">
              تمام ویزیت‌ها توسط پزشکان حرفه‌ای انجام می‌شود
            </p>
          </div>
          
          <Card className="medical-card max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="border-b-2 border-secondary/20">
                      <th className="text-secondary font-bold py-4 px-2">نام خدمت</th>
                      <th className="text-secondary font-bold py-4 px-2">تعرفه (تومان)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctorServices.map((item, index) => (
                      <tr key={index} className="border-b border-muted hover:bg-muted/20 transition-colors">
                        <td className="py-4 px-2 font-medium">{item.service}</td>
                        <td className="py-4 px-2 text-secondary font-bold ltr text-left">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* سایر خدمات تخصصی */}
      <section className="medical-section bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">تعرفه سایر خدمات تخصصی</h2>
            <p className="section-subtitle">
              خدمات تخصصی با تجهیزات پیشرفته در منزل شما
            </p>
          </div>
          
          <Card className="medical-card max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="border-b-2 border-accent/20">
                      <th className="text-accent font-bold py-4 px-2">نام خدمت</th>
                      <th className="text-accent font-bold py-4 px-2">تعرفه (تومان)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specialServices.map((item, index) => (
                      <tr key={index} className="border-b border-muted hover:bg-muted/20 transition-colors">
                        <td className="py-4 px-2 font-medium">{item.service}</td>
                        <td className="py-4 px-2 text-accent font-bold text-left">
                          <span className="rtl">از</span> <span className="ltr">{item.price}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* شرایط و نکات مهم */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8">شرایط و نکات مهم</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    نکات کلی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>کلیه خدمات پرستاری توسط نیروهای مجرب با حداقل مدرک کارشناس پرستاری صورت می‌گیرد</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>در صورت درخواست چند خدمت همزمان، خدمت دوم مشمول تخفیف می‌گردد</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>هزینه مواد مصرفی در مواردی مثل سرم و داروها، پانسمان و سونداژ به صورت جداگانه اخذ می‌گردد</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>صدور فاکتور خدمات جهت ارائه به بیمه تکمیلی امکان‌پذیر می‌باشد</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    تعرفه‌های ویژه
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>در موارد درخواست اورژانسی، شبانه و تایم ترافیک ۲۰٪ الی ۳۰٪ اضافه می‌شود</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>در موارد متفرقه جهت اطلاع از تعرفه، با کارشناسان ما تماس بگیرید</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>درصورت نیاز به نسخه پزشک جهت سرم تراپی میتوانید از ویزیت آنلاین مرکز استفاده نمایید</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>قابلیت سرویس دهی به کلیه مناطق تهران</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* مزایای مرکز */}
      <section className="medical-section bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">مزایت‌های نوید زندگی</h2>
            <p className="section-subtitle">
              چرا نوید زندگی بهترین انتخاب برای خدمات پزشکی در منزل است
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "مدیریت تخصصی",
              "رویکرد علمی در پرستاری",
              "قیمت مناسب خدمات",
              "پرستار خصوصی در منزل",
              "پاسخگویی شبانه روزی",
              "پشتیبانی آنی پزشکی و پرستاری"
            ].map((advantage, index) => (
              <Card key={index} className="medical-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{advantage}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default PricingPage;