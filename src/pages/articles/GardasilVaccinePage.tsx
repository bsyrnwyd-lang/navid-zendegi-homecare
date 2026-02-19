import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import gardasilImage from "@/assets/gardasil-vaccine-article.jpg";

const GardasilVaccinePage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "واکسن گارداسیل", url: "/articles/gardasil-vaccine" }
  ];
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNavigation items={breadcrumbItems} />
              
              <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  تزریق واکسن گارداسیل بعد از ابتلا به HPV در منزل
                </h1>
                <div className="mb-8">
                  <img 
                    src={gardasilImage} 
                    alt="تزریق واکسن گارداسیل در منزل توسط پرستار متخصص" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  تزریق گارداسیل بعد از ابتلا به ویروس HPV ممکن است همچنان فوایدی داشته باشد، اما اثربخشی آن به میزان زیادی به نوع و زمان ابتلا بستگی دارد.
                </p>

                <h2 className="text-2xl font-bold mb-6">آیا تزریق واکسن گارداسیل بعد از مبتلا شدن تاثیر دارد؟</h2>
                
                <p className="leading-relaxed mb-6">
                  واکسن گارداسیل برای پیشگیری از ابتلا به انواع خاصی از ویروس HPV طراحی شده است و نمی‌تواند عفونت‌های موجود را درمان کند. با این حال، حتی اگر فردی به یکی از انواع HPV مبتلا شده باشد، ممکن است هنوز در برابر سایر انواعی که واکسن پوشش می‌دهد، محافظت نشده باشد.
                </p>

                <h2 className="text-2xl font-bold mb-6">میزان اثربخشی واکسن</h2>
                
                <div className="bg-muted p-4 rounded-lg mb-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>افراد غیرمبتلا: حدود ۸۳٪ اثربخشی</li>
                    <li>افراد مبتلا قبلی: حدود ۵۸٪ اثربخشی</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">فواید واکسن گارداسیل بعد از ابتلا</h2>
                
                <h3 className="text-xl font-semibold mb-4">پیشگیری از ابتلا به انواع دیگر HPV</h3>
                <p className="leading-relaxed mb-6">
                  ویروس HPV شامل بیش از ۱۰۰ نوع مختلف است که برخی باعث زگیل تناسلی و برخی دیگر زمینه‌ساز سرطان می‌شوند. واکسن گارداسیل انواع شایع و پرخطر ویروس را پوشش می‌دهد.
                </p>

                <h3 className="text-xl font-semibold mb-4">کاهش خطر سرطان‌های مرتبط با HPV</h3>
                <p className="leading-relaxed mb-6">
                  برخی از گونه‌های HPV، به‌ویژه HPV نوع ۱۶ و ۱۸، عامل اصلی سرطان دهانه رحم هستند و همچنین می‌توانند سرطان‌های دیگری در مقعد، واژن، آلت تناسلی و گلو ایجاد کنند.
                </p>

                <h3 className="text-xl font-semibold mb-4">کاهش احتمال عود زگیل‌های تناسلی</h3>
                <p className="leading-relaxed mb-6">
                  برخی مطالعات نشان می‌دهند که تزریق واکسن گارداسیل می‌تواند احتمال بازگشت زگیل‌ها را کاهش دهد و کیفیت زندگی افراد تحت درمان را بهبود ببخشد.
                </p>

                <h2 className="text-2xl font-bold mb-6">موارد منع مصرف</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>واکنش آلرژیک شدید به دوز قبلی واکسن یا مخمر</li>
                  <li>زنان باردار</li>
                  <li>افراد با بیماری‌های حاد متوسط یا شدید</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">خدمات تزریق واکسن در منزل نوید زندگی</h2>
                
                <p className="leading-relaxed mb-8">
                  پرستاران مجرب نوید زندگی با رعایت کامل اصول بهداشتی واکسن گارداسیل را در منزل شما تزریق می‌کنند. این خدمات شامل مشاوره قبل از تزریق، انجام تزریق ایمن و پیگیری پس از واکسیناسیون است.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  برای مشاوره و تزریق واکسن گارداسیل در منزل، با نوید زندگی تماس بگیرید!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t">
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
          </div>
        </article>
        {/* 24/7 Contact Section */}
        <section className="bg-primary/5 py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ویزیت پزشک در منزل ۲۴ ساعته</p>
                    <a href="tel:+989386117912" className="text-primary font-bold hover:text-primary/80 transition-colors">
                      ۰۹۳۸۶۱۱۷۹۱۲
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default GardasilVaccinePage;