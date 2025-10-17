import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ear, Phone, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { useSEO } from "@/hooks/useSEO";
import entImage from "@/assets/iranian-doctor-home-visit.jpg";

const ENTPage = () => {
  useSEO({
    title: "ویزیت متخصص گوش، حلق و بینی (ENT) در منزل تهران | درمان سرگیجه و مشکلات گوش | نوید زندگی",
    description: "اعزام فوری متخصص ENT در منزل تهران برای معاینه گوش، حلق و بینی. تشخیص و درمان مشکلات شنوایی، سرگیجه، سینوزیت حاد و خونریزی بینی در خانه.",
    keywords: "ویزیت متخصص ENT در منزل، گوش حلق بینی در منزل، درمان سرگیجه، درمان ورتیگو، سینوزیت حاد، خونریزی بینی، متخصص گوش تهران"
  });

  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="medical-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                ویزیت متخصص گوش، حلق و بینی (ENT) در منزل تهران (سریع و تخصصی)
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                مشکلات مربوط به گوش، حلق و بینی می‌توانند آزاردهنده و گاهی اورژانسی باشند. برای بیماranی که به دلیل سرگیجه، درد شدید یا شرایط خاص قادر به مراجعه به کلینیک نیستند، نوید زندگی با اعزام متخصص ENT در منزل تهران، مراقبت‌های تخصصی را به خانه شما می‌آورد.
              </p>
              <Button 
                size="lg"
                onClick={handleCall}
              >
                <Phone className="ml-2 h-5 w-5" />
                رزرو نوبت فوری
              </Button>
            </div>
            <div>
              <img 
                src={entImage} 
                alt="ویزیت متخصص گوش حلق و بینی در منزل"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">خدمات تخصصی گوش، حلق و بینی قابل ارائه در منزل</h2>
          <p className="text-muted-foreground mb-12">
            متخصص ENT در منزل ما آماده ارائه خدمات تشخیصی و درمانی زیر است:
          </p>
          
          <div className="space-y-12">
            {/* گوش و شنوایی */}
            <div>
              <h3 className="text-xl font-bold mb-6">تشخیص و درمان مشکلات گوش و شنوایی</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">معاینه گوش</h4>
                        <p className="text-sm text-muted-foreground">استفاده از اتوسکوپ برای بررسی مجرای گوش و پرده صماخ</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">تشخیص و مدیریت سرگیجه (ورتیگو)</h4>
                        <p className="text-sm text-muted-foreground">ارزیابی علل سرگیجه‌های محیطی و تجویز درمان‌های دارویی یا مانورهای توانبخشی لازم</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">درمان عفونت گوش</h4>
                        <p className="text-sm text-muted-foreground">تشخیص دقیق نوع عفونت (خارجی، میانی) و تجویز پروتکل درمانی مناسب</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">برداشتن جرم گوش</h4>
                        <p className="text-sm text-muted-foreground">شستشو یا خارج کردن جرم‌های سخت شده گوش در منزل</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* حلق و حنجره */}
            <div>
              <h3 className="text-xl font-bold mb-6">مدیریت مشکلات حلق و حنجره</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">تشخیص و درمان عفونت‌های حاد حلق</h4>
                        <p className="text-sm text-muted-foreground">معاینه دقیق حلق و حنجره برای تشخیص فارنژیت، لارنژیت یا تونسیلیت</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">مشاوره مشکلات بلع</h4>
                        <p className="text-sm text-muted-foreground">ارزیابی و راهنمایی اولیه برای مشکلات مرتبط با بلع</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* بینی و سینوس */}
            <div>
              <h3 className="text-xl font-bold mb-6">رسیدگی به مشکلات بینی و سینوس</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">درمان سینوزیت حاد</h4>
                        <p className="text-sm text-muted-foreground">تشخیص و ارائه برنامه درمانی برای سینوزیت‌های عفونی و التهابی</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">کنترل خونریزی بینی (اپیستاکسی)</h4>
                        <p className="text-sm text-muted-foreground">ارزیابی و مدیریت خونریزی‌های ساده بینی در منزل</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">بررسی مشکلات بویایی</h4>
                        <p className="text-sm text-muted-foreground">مشاوره و ارزیابی اولیه برای اختلالات بویایی</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="medical-section">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">چرا باید متخصص ENT را در منزل ویزیت کنید؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">کاهش اضطراب در بیماران مبتلا به سرگیجه</h3>
                <p className="text-sm text-muted-foreground">جابجایی بیماران دچار ورتیگو بسیار سخت و آزاردهنده است. ویزیت ENT در منزل بهترین راهکار است.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">رسیدگی فوری به عفونت‌ها</h3>
                <p className="text-sm text-muted-foreground">تشخیص و شروع درمان سریع عفونت‌ها برای جلوگیری از پیشرفت بیماری</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">صرفه‌جویی در زمان و راحتی</h3>
                <p className="text-sm text-muted-foreground">حذف نیاز به انتظار طولانی در مطب‌های شلوغ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">فرایند درخواست و اعزام متخصص ENT در تهران</h2>
          <p className="text-muted-foreground mb-8">
            برای دریافت خدمات متخصص گوش، حلق و بینی در منزل، کافی است با شماره‌های ما تماس بگیرید. کارشناسان ما پس از بررسی شرایط، سریع‌ترین هماهنگی را برای اعزام پزشک متخصص به محل شما در سراسر تهران انجام خواهند داد.
          </p>
          <Button size="lg" onClick={handleCall}>
            <Phone className="ml-2 h-5 w-5" />
            تماس برای رزرو نوبت
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="medical-section">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            برای درمان سریع مشکلات گوش، حلق و بینی خود با حفظ راحتی در خانه، همین حالا تماس بگیرید
          </h2>
          <Button size="lg" onClick={handleCall}>
            <Phone className="ml-2 h-5 w-5" />
            رزرو نوبت: ۰۹۳۸۶۱۱۷۹۱۲
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ENTPage;