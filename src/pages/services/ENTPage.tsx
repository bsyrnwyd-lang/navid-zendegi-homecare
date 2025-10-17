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
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold text-foreground leading-relaxed">
              ویزیت متخصص گوش، حلق و بینی (ENT) در منزل تهران
            </h1>
            <p className="text-2xl text-muted-foreground leading-loose">
              مشکلات مربوط به گوش، حلق و بینی می‌توانند آزاردهنده و گاهی اورژانسی باشند. برای بیمارانی که به دلیل سرگیجه، درد شدید یا شرایط خاص قادر به مراجعه به کلینیک نیستند، نوید زندگی با اعزام متخصص ENT در منزل تهران، مراقبت‌های تخصصی را به خانه شما می‌آورد.
            </p>
            <p className="text-xl text-muted-foreground leading-loose">
              ما خدمات کامل تشخیصی و درمانی گوش، حلق و بینی را با تجهیزات پرتابل و دقت بالا در محیط آرام منزل ارائه می‌دهیم.
            </p>
            <Button 
              onClick={handleCall}
              size="lg"
              className="text-2xl px-12 py-8 mt-6"
            >
              <Phone className="ml-3 h-7 w-7" />
              تماس برای ویزیت فوری
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            خدمات تخصصی گوش، حلق و بینی قابل ارائه در منزل
          </h2>

          {/* گوش و شنوایی */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              تشخیص و درمان مشکلات گوش و شنوایی
            </h3>
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg border-2 border-border">
                <h4 className="font-bold text-xl mb-4 text-foreground">معاینه گوش</h4>
                <p className="text-lg text-muted-foreground leading-loose">استفاده از اتوسکوپ برای بررسی مجرای گوش و پرده صماخ</p>
              </div>

              <div className="bg-card p-8 rounded-lg border-2 border-border">
                <h4 className="font-bold text-xl mb-4 text-foreground">تشخیص و مدیریت سرگیجه (ورتیگو)</h4>
                <p className="text-lg text-muted-foreground leading-loose">ارزیابی علل سرگیجه‌های محیطی و تجویز درمان‌های دارویی یا مانورهای توانبخشی لازم</p>
              </div>

              <div className="bg-card p-8 rounded-lg border-2 border-border">
                <h4 className="font-bold text-xl mb-4 text-foreground">درمان عفونت گوش</h4>
                <p className="text-lg text-muted-foreground leading-loose">تشخیص دقیق نوع عفونت (خارجی، میانی) و تجویز پروتکل درمانی مناسب</p>
              </div>

              <div className="bg-card p-8 rounded-lg border-2 border-border">
                <h4 className="font-bold text-xl mb-4 text-foreground">برداشتن جرم گوش</h4>
                <p className="text-lg text-muted-foreground leading-loose">شستشو یا خارج کردن جرم‌های سخت شده گوش در منزل</p>
              </div>
            </div>
          </div>

          {/* حلق و حنجره */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              مدیریت مشکلات حلق و حنجره
            </h3>
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg border-2 border-border">
                <h4 className="font-bold text-xl mb-4 text-foreground">تشخیص و درمان عفونت‌های حاد حلق</h4>
                <p className="text-lg text-muted-foreground leading-loose">معاینه دقیق حلق و حنجره برای تشخیص فارنژیت، لارنژیت یا تونسیلیت</p>
              </div>

              <div className="bg-card p-8 rounded-lg border-2 border-border">
                <h4 className="font-bold text-xl mb-4 text-foreground">مشاوره مشکلات بلع</h4>
                <p className="text-lg text-muted-foreground leading-loose">ارزیابی و راهنمایی اولیه برای مشکلات مرتبط با بلع</p>
              </div>
            </div>
          </div>

          {/* بینی و سینوس */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              رسیدگی به مشکلات بینی و سینوس
            </h3>
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg border-2 border-border">
                <h4 className="font-bold text-xl mb-4 text-foreground">درمان سینوزیت حاد</h4>
                <p className="text-lg text-muted-foreground leading-loose">تشخیص و ارائه برنامه درمانی برای سینوزیت‌های عفونی و التهابی</p>
              </div>

              <div className="bg-card p-8 rounded-lg border-2 border-border">
                <h4 className="font-bold text-xl mb-4 text-foreground">کنترل خونریزی بینی (اپیستاکسی)</h4>
                <p className="text-lg text-muted-foreground leading-loose">ارزیابی و مدیریت خونریزی‌های ساده بینی در منزل</p>
              </div>

              <div className="bg-card p-8 rounded-lg border-2 border-border">
                <h4 className="font-bold text-xl mb-4 text-foreground">بررسی مشکلات بویایی</h4>
                <p className="text-lg text-muted-foreground leading-loose">مشاوره و ارزیابی اولیه برای اختلالات بویایی</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            چرا باید متخصص ENT را در منزل ویزیت کنید؟
          </h2>
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-lg border-2 border-border">
              <h3 className="font-bold text-xl mb-4 text-foreground">کاهش اضطراب در بیماران مبتلا به سرگیجه</h3>
              <p className="text-lg text-muted-foreground leading-loose">جابجایی بیماران دچار ورتیگو بسیار سخت و آزاردهنده است. ویزیت ENT در منزل بهترین راهکار است.</p>
            </div>

            <div className="bg-card p-8 rounded-lg border-2 border-border">
              <h3 className="font-bold text-xl mb-4 text-foreground">رسیدگی فوری به عفونت‌ها</h3>
              <p className="text-lg text-muted-foreground leading-loose">تشخیص و شروع درمان سریع عفونت‌ها برای جلوگیری از پیشرفت بیماری.</p>
            </div>

            <div className="bg-card p-8 rounded-lg border-2 border-border">
              <h3 className="font-bold text-xl mb-4 text-foreground">صرفه‌جویی در زمان و راحتی</h3>
              <p className="text-lg text-muted-foreground leading-loose">حذف نیاز به انتظار طولانی در مطب‌های شلوغ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            فرایند درخواست و اعزام متخصص ENT در تهران
          </h2>
          <div className="bg-card p-8 rounded-lg border-2 border-border">
            <p className="text-xl text-muted-foreground leading-loose text-center">
              برای دریافت خدمات متخصص گوش، حلق و بینی در منزل، کافی است با شماره‌های ما تماس بگیرید. کارشناسان ما پس از بررسی شرایط، سریع‌ترین هماهنگی را برای اعزام پزشک متخصص به محل شما در سراسر تهران انجام خواهند داد.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground leading-relaxed">
            برای درمان سریع مشکلات گوش، حلق و بینی خود با حفظ راحتی در خانه
          </h2>
          <p className="text-xl text-muted-foreground leading-loose">
            همین حالا برای ویزیت متخصص ENT در منزل با نوید زندگی تماس بگیرید
          </p>
          <Button 
            onClick={handleCall}
            size="lg"
            className="text-2xl px-12 py-8"
          >
            <Phone className="ml-3 h-7 w-7" />
            تماس فوری
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ENTPage;