import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CollaborationPage = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/989386117912`, '_blank');
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>همکاری با ما - نوید زندگی | استخدام پزشک، پرستار و متخصص</title>
      <meta name="description" content="به تیم نوید زندگی بپیوندید. از پزشکان، متخصصان، پرستاران و فیزیوتراپیست‌ها در تهران و کرج دعوت به همکاری می‌کنیم." />
      <meta name="keywords" content="همکاری با نوید زندگی، استخدام پزشک، استخدام پرستار، کار در منزل، ویزیت در منزل" />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              
              {/* Page Header */}
              <header className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  همکاری با ما
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  به خانواده بزرگ نوید زندگی بپیوندید و در ارائه خدمات پزشکی با کیفیت در منزل مشارکت کنید
                </p>
              </header>

              {/* Main Content */}
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    دعوت به همکاری
                  </h2>
                  
                  <div className="text-right leading-relaxed space-y-4 mb-8">
                    <p className="text-lg text-muted-foreground">
                      از پزشکان عمومی، پزشکان متخصص در تمامی رشته‌ها، دندانپزشکان، پرستاران و فیزیوتراپیست‌ها دعوت به عمل می‌آید.
                    </p>
                    
                    <p className="text-lg text-muted-foreground">
                      علاقه‌مندان به همکاری در زمینه ویزیت در منزل در محدوده تهران تا کرج، لطفاً از طریق واتس‌اپ به شماره 
                      <a href="tel:09386117912" className="font-bold text-primary mx-2 hover:underline">09386117912</a>
                      پیام دهید.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="flex justify-center">
                    <Button 
                      onClick={handleWhatsApp}
                      size="lg"
                      className="px-8 py-3 text-lg"
                    >
                      <MessageCircle className="ml-2 h-5 w-5" />
                      تماس از طریق واتساپ
                    </Button>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                    مزایای همکاری با نوید زندگی
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">محیط کار انعطاف‌پذیر</h4>
                      <p className="text-sm text-muted-foreground">امکان تنظیم ساعات کاری مطابق با برنامه شخصی شما</p>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">درآمد مناسب</h4>
                      <p className="text-sm text-muted-foreground">تعرفه‌های رقابتی و پرداخت به موقع حق‌الزحمه</p>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">پشتیبانی کامل</h4>
                      <p className="text-sm text-muted-foreground">تیم پشتیبانی ۲۴ ساعته برای راهنمایی و کمک</p>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-2">رشد حرفه‌ای</h4>
                      <p className="text-sm text-muted-foreground">فرصت گسترش تجربه در محیط کاری نوین</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default CollaborationPage;