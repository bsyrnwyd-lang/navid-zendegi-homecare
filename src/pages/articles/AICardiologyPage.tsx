import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import aiCardiologyImage from "@/assets/ai-cardiology-article.jpg";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const AICardiologyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"هوش مصنوعی در قلب",url:"/articles/ai-cardiology"}]} />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                استفاده از هوش مصنوعی در تفسیر اکو و‌ نوار قلب
              </h1>
              <div className="flex items-center justify-center mb-8">
                <span className="text-sm text-muted-foreground">
                  نویسنده: دکتر نیره مظاهری تهرانی
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aiCardiologyImage} 
                  alt="هوش مصنوعی در تفسیر نوار قلب و اکوکاردیوگرافی"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <div className="space-y-6 text-foreground leading-relaxed text-lg">
                  <p>
                    هوش مصنوعی در سال‌های اخیر تحولی بزرگ در پزشکی ایجاد کرده است؛ به‌ویژه در تحلیل نوار قلب (ECG) و اکوکاردیوگرافی (Echo). الگوریتم‌­های پیشرفته‌ی یادگیری عمیق قادرند حجم زیادی از داده‌­های قلبی را در مدت بسیار کوتاه پردازش کنند و الگوهایی را شناسایی کنند که گاه از دید پزشکان پنهان می‌ماند.
                  </p>

                  <p>
                    در مواردی مانند تشخیص آریتمی، نارسایی قلبی و اختلالات ساختاری قلب، کاربرد هوش مصنوعی بهبود یافته است و این امکان را می‌دهد که تشخیص سریع‌تر و دقیق‌تر شود؛ به‌ویژه در شرایط اورژانسی یا در مناطقی که به متخصص قلب دسترسی سخت است.
                  </p>

                  <p>
                    با وجود این پیشرفت‌ها، هوش مصنوعی نباید جایگزین کامل تشخیص پزشک متخصص شود. کیفیت داده‌های آموزشی، تنوع جمعیت بیماران، تفاوت‌های بالینی بین افراد و شرایط خاص پزشکی ممکن است باعث کاهش دقت شود.
                  </p>

                  <p>
                    همچنین علائم بالینی، تاریخچه پزشکی و شرایط عمومی بیمار عناصری‌اند که هوش مصنوعی به‌تنهایی قادر به درک کامل آن‌ها نیست.
                  </p>

                  <p>
                    در نتیجه، بهترین روش استفاده از هوش مصنوعی به‌عنوان ابزار کمکی برای پزشکان است تا سرعت و دقت تشخیص افزایش یابد، اما تفسیر نهایی و تصمیم‌گیری درمانی باید تحت نظارت متخصص قلب انجام گیرد.
                  </p>

                  <p>
                    تیم متخصصان قلب نوید زندگی با استفاده از جدیدترین تکنولوژی‌ها و تجهیزات پیشرفته، خدمات تشخیصی و درمانی قلبی را در منزل ارائه می‌دهند.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

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

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                نیاز به مشاوره قلبی دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                متخصصان قلب نوید زندگی آماده ارائه خدمات تشخیصی و درمانی در منزل شما هستند
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  تماس با ما
                </a>
                <a 
                  href="/cardiology"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  خدمات قلبی
                </a>
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

export default AICardiologyPage;