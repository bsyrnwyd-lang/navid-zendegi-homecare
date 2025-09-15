import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Home } from "lucide-react";

const InfluenzaTreatmentPage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  const symptoms = [
    "تب بالا",
    "سرفه خشک", 
    "گلودرد",
    "بدن‌درد و سردرد",
    "خستگی شدید",
    "گاهی تهوع یا اسهال"
  ];

  const medications = [
    "اوسلتامیویر (تامفلو)",
    "زانامی‌ویر (رلنزا)", 
    "بالوکساویر ماربوکسیل (زوفلوزا)",
    "پری‌تامیویر (برای بیماران بستری)"
  ];

  const benefits = [
    "ویزیت سریع و دقیق پزشک در منزل",
    "پیشگیری از انتقال بیماری در بیمارستان و مکان‌های عمومی", 
    "درمان و ارائه دارو بدون نیاز به مراجعه حضوری",
    "مراقبت ویژه از کودکان، سالمندان و بیماران با بیماری‌های زمینه‌ای"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                آنفلوآنزا در تهران: درمان سریع و مطمئن در منزل
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                درمان تخصصی آنفلوآنزا در منزل با پزشکان مجرب نوید زندگی
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleCall} size="lg" className="text-lg px-8">
                  <Phone className="ml-2 h-5 w-5" />
                  تماس فوری: {phoneNumber}
                </Button>
                <Button onClick={handleWhatsApp} variant="outline" size="lg" className="text-lg px-8">
                  <MessageCircle className="ml-2 h-5 w-5" />
                  پیام در واتساپ
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">آنفلوآنزا چیست؟</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    آنفلوآنزا یا فلوی فصلی یک عفونت ویروسی دستگاه تنفسی فوقانی است که عمدتاً توسط ویروس‌های آنفلوآنزا نوع A و B ایجاد می‌شود. این بیماری به‌صورت ناگهانی ظاهر می‌شود و در افراد سالم، علائم معمولاً ۵ تا ۷ روز طول می‌کشند، اما در کودکان، سالمندان و بیماران با بیماری‌های زمینه‌ای ممکن است منجر به عوارض جدی شود.
                  </p>
                </CardContent>
              </Card>

              {/* Symptoms */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">علائم آنفلوآنزا</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Treatment */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">درمان آنفلوآنزا در منزل تهران</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    در موارد شدید یا در گروه‌های پرخطر، استفاده از داروهای ضدویروسی توصیه می‌شود. شروع درمان ظرف ۴۸ ساعت از آغاز علائم، مؤثرترین نتیجه را به همراه دارد.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4">داروهای ضدویروسی:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {medications.map((medication, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{medication}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-foreground">مهم:</span>
                    </div>
                    <p className="text-muted-foreground">
                      برای جلوگیری از تشدید بیماری، بهترین گزینه، استفاده از خدمات پزشکی در منزل در تهران و اطراف تهران است.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">مزایای استفاده از پزشک در منزل نوید زندگی</h2>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Home className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    همین امروز ویزیت پزشک در منزل را رزرو کنید!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    با نوید زندگی، پزشک متخصص به منزل شما می‌آید، تشخیص دقیق انجام می‌دهد و داروهای لازم را ارائه می‌کند.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={handleCall} size="lg" className="text-lg px-8">
                      <Phone className="ml-2 h-5 w-5" />
                      تماس فوری: {phoneNumber}
                    </Button>
                    <Button onClick={handleWhatsApp} variant="outline" size="lg" className="text-lg px-8">
                      <MessageCircle className="ml-2 h-5 w-5" />
                      پیام در واتساپ
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default InfluenzaTreatmentPage;