import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Phone } from "lucide-react";
import airPollutionImage from "@/assets/air-pollution-article.jpg";

const AirPollutionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <article className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
          {/* Article Header */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              تأثیر آلودگی هوا بر بیماری‌های قلبی و ریوی
            </h1>
            <div className="flex items-center justify-center text-muted-foreground mb-8">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                پیشگیری
              </span>
            </div>
            <img 
              src={airPollutionImage} 
              alt="تأثیر آلودگی هوا بر بیماری‌های قلبی و ریوی"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
            />
          </header>

          {/* 24/7 Contact Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-primary ml-2" />
              <h3 className="text-lg font-semibold text-foreground">
                تماس شبانه‌روزی برای ویزیت پزشک در منزل
              </h3>
            </div>
            <a 
              href="tel:09386117912" 
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              ۰۹۳۸۶۱۱۷۹۱۲
            </a>
            <p className="text-muted-foreground mt-2">
              همه روزه ۲۴ ساعته در خدمت شما
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                آلودگی هوا یکی از مهم‌ترین تهدیدهای سلامت عمومی در جهان است. ذرات معلق بسیار ریز، به‌ویژه PM2.5، می‌توانند وارد جریان خون شده و سلامت قلب و ریه‌ها را به خطر بیندازند.
              </p>
              <p className="text-lg leading-relaxed">
                مطالعات علمی نشان داده‌اند که قرار گرفتن در معرض آلودگی هوا می‌تواند باعث:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4 pr-6">
                <li>• التهاب رگ‌های خونی</li>
                <li>• افزایش فشار خون</li>
                <li>• اختلال در ریتم قلب</li>
                <li>• سکته قلبی و نارسایی قلبی</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6">
                همچنین، این آلاینده‌ها می‌توانند ریه‌ها را تحت تأثیر قرار داده و زمینه‌ساز بیماری‌های مزمن تنفسی مانند آسم و برونشیت مزمن شوند.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded">
                <p className="text-red-800 font-medium">
                  🔴 طبق گزارش سازمان بهداشت جهانی، در سال ۲۰۱۹ حدود ۶۸٪ مرگ‌های زودرس ناشی از آلودگی هوا به بیماری‌های قلبی ایسکمیک و سکته مغزی مربوط بوده است.
                </p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                گروه‌های پرخطر
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                تأثیر آلودگی هوا بر همه افراد یکسان نیست. برخی گروه‌ها آسیب‌پذیرتر هستند:
              </p>
              
              <ul className="space-y-3 text-muted-foreground pr-6">
                <li>• سالمندان</li>
                <li>• کودکان</li>
                <li>• زنان باردار</li>
                <li>• افراد دارای سابقه بیماری‌های قلبی یا ریوی</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                راه‌های پیشگیری و مراقبت
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                برای کاهش اثرات منفی آلودگی هوا بر سلامت قلب و ریه‌ها، رعایت نکات زیر توصیه می‌شود:
              </p>
              
              <ul className="space-y-4 text-muted-foreground pr-6">
                <li>• در روزهای آلوده، خروج غیرضروری از منزل را به حداقل برسانید.</li>
                <li>• از ماسک‌های استاندارد فیلتردار هنگام حضور در فضای باز استفاده کنید.</li>
                <li>• در محیط بسته از تصفیه‌کننده‌های هوا استفاده کنید.</li>
                <li>• کیفیت هوا را روزانه از منابع معتبر بررسی کرده و توصیه‌های بهداشتی را رعایت کنید.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                خدمات نوید زندگی برای سلامت شما
              </h2>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  در روزهای آلوده، خروج از منزل برای مراجعه به پزشک می‌تواند خطرات بیشتری ایجاد کند. به همین دلیل، استفاده از خدمات ویزیت پزشک در منزل گزینه‌ای مطمئن و سریع است.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  در وب‌سایت نوید زندگی می‌توانید خدمات زیر را دریافت کنید:
                </p>
                
                <ul className="space-y-2 text-muted-foreground mb-6 pr-6">
                  <li>• ویزیت پزشک عمومی و متخصص در منزل</li>
                  <li>• کنترل و پیگیری بیماری‌های قلبی و تنفسی</li>
                  <li>• تزریق سرم و دارو در منزل</li>
                  <li>• خدمات پرستاری و مراقبتی ویژه سالمندان و بیماران مزمن</li>
                </ul>
                
                <div className="text-center">
                  <a 
                    href="tel:09386117912"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    تماس فوری
                  </a>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                جمع‌بندی
              </h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  آلودگی هوا نه‌تنها بر کیفیت زندگی، بلکه بر سلامت قلب و ریه‌ها تأثیر مستقیم دارد. توجه به گروه‌های پرخطر و رعایت اقدامات پیشگیرانه می‌تواند نقش مهمی در کاهش آسیب‌ها داشته باشد. اگر در روزهای آلوده دچار علائم قلبی یا تنفسی شدید، بهترین راه حل استفاده از خدمات سریع و مطمئن مانند ویزیت پزشک در منزل نوید زندگی است.
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
      
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default AirPollutionPage;