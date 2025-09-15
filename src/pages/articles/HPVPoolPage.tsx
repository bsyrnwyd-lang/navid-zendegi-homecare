import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import hpvPoolImage from "@/assets/hpv-pool-article.jpg";

const HPVPoolPage = () => {
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
              
              <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  آیا HPV از استخر و مکان‌های عمومی منتقل می‌شود؟
                </h1>
                <div className="mb-8">
                  <img 
                    src={hpvPoolImage} 
                    alt="پیشگیری از انتقال HPV در استخر و مکان‌های عمومی" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  زگیل تناسلی که به‌وسیله ویروس پاپیلومای انسانی (HPV) ایجاد می‌شود، یکی از بیماری‌های جنسی شایع است که از طریق تماس مستقیم با پوست یا غشای مخاطی فرد آلوده منتقل می‌شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">راه‌های انتقال اصلی HPV</h2>
                
                <h3 className="text-xl font-semibold mb-4">تماس جنسی</h3>
                <p className="leading-relaxed mb-6">
                  اصلی‌ترین راه انتقال HPV تماس مستقیم پوست با پوست در حین فعالیت جنسی است. این انتقال حتی بدون نفوذ کامل نیز امکان‌پذیر است.
                </p>

                <h3 className="text-xl font-semibold mb-4">تماس مستقیم پوست</h3>
                <p className="leading-relaxed mb-6">
                  ویروس HPV می‌تواند از طریق تماس مستقیم با نواحی آلوده پوست، حتی در غیاب رابطه جنسی کامل، منتقل شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">آیا HPV از استخر منتقل می‌شود؟</h2>
                
                <p className="leading-relaxed mb-6">
                  احتمال انتقال HPV از طریق آب استخر بسیار کم است، اما نمی‌توان آن را کاملاً منتفی دانست. ویروس HPV در محیط‌های مرطوب مانند استخر می‌تواند برای مدت کوتاهی زنده بماند.
                </p>

                <h3 className="text-xl font-semibold mb-4">عوامل خطر در استخر</h3>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>استفاده مشترک از حوله و لباس شنا</li>
                  <li>راه رفتن پابرهنه در اطراف استخر</li>
                  <li>نشستن روی صندلی‌های آلوده</li>
                  <li>تماس با سطوح مرطوب و آلوده</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">انتقال از مکان‌های عمومی دیگر</h2>
                
                <h3 className="text-xl font-semibold mb-4">سالن‌های ورزشی و حمام‌های عمومی</h3>
                <p className="leading-relaxed mb-6">
                  در محیط‌های مرطوب و گرم مانند سالن‌های ورزشی، حمام‌های عمومی و سونا، ریسک انتقال HPV از طریق سطوح آلوده وجود دارد.
                </p>

                <h3 className="text-xl font-semibold mb-4">وسایل شخصی مشترک</h3>
                <p className="leading-relaxed mb-6">
                  استفاده مشترک از وسایل شخصی مانند حوله، لباس زیر، تیغ و دیگر وسایل بهداشتی می‌تواند راه انتقال ویروس باشد.
                </p>

                <h2 className="text-2xl font-bold mb-6">روش‌های پیشگیری</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>استفاده از دمپایی در استخر و حمام‌های عمومی</li>
                  <li>اجتناب از استفاده مشترک حوله و لباس</li>
                  <li>رعایت بهداشت شخصی پس از حضور در مکان‌های عمومی</li>
                  <li>واکسیناسیون HPV در سن مناسب</li>
                  <li>رابطه جنسی ایمن</li>
                  <li>معاینات منظم پزشکی</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">اهمیت تشخیص زودهنگام</h2>
                
                <p className="leading-relaxed mb-6">
                  در صورت مشاهده علائم مشکوک مانند زگیل‌های تناسلی، تغییرات پوستی یا خارش مداوم، ضروری است که سریعاً برای بررسی‌های تخصصی اقدام کنید.
                </p>

                <h2 className="text-2xl font-bold mb-6">خدمات تشخیص و درمان در منزل</h2>
                
                <p className="leading-relaxed mb-8">
                  نوید زندگی خدمات ویزیت متخصص زنان، اورولوژی و عفونی را در منزل ارائه می‌دهد. این خدمات شامل مشاوره تخصصی، انجام آزمایش‌های لازم و ارائه برنامه درمانی مناسب است.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  برای مشاوره و بررسی علائم HPV، با نوید زندگی برای ویزیت متخصص در منزل تماس بگیرید!
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
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default HPVPoolPage;