import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import aiCardiologyImage from "@/assets/ai-cardiology-article.jpg";

const AICardiologyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                  <div className="space-y-6 text-foreground leading-relaxed">
                    <p className="text-lg">
                      هوش مصنوعی در سال‌های اخیر تحولی بزرگ در پزشکی ایجاد کرده است؛ به‌ویژه در تحلیل نوار قلب (ECG) و اکوکاردیوگرافی (Echo). الگوریتم‌­های پیشرفته‌ی یادگیری عمیق قادرند حجم زیادی از داده‌­های قلبی را در مدت بسیار کوتاه پردازش کنند و الگوهایی را شناسایی کنند که گاه از دید پزشکان پنهان می‌ماند.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                      مزایای هوش مصنوعی در تشخیص‌های قلبی
                    </h2>
                    
                    <p>
                      در مواردی مانند تشخیص آریتمی، نارسایی قلبی و اختلالات ساختاری قلب، کاربرد هوش مصنوعی بهبود یافته است و این امکان را می‌دهد که تشخیص سریع‌تر و دقیق‌تر شود؛ به‌ویژه در شرایط اورژانسی یا در مناطقی که به متخصص قلب دسترسی سخت است.
                    </p>

                    <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        نکته مهم
                      </h3>
                      <p className="mb-0">
                        هوش مصنوعی قادر است الگوهایی را در نوار قلب و اکوکاردیوگرافی تشخیص دهد که ممکن است از دید پزشکان پنهان بماند، اما نباید جایگزین کامل نظر متخصص شود.
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                      محدودیت‌ها و نکات مهم
                    </h2>
                    
                    <p>
                      با وجود این پیشرفت‌ها، هوش مصنوعی نباید جایگزین کامل تشخیص پزشک متخصص شود. کیفیت داده‌های آموزشی، تنوع جمعیت بیماران، تفاوت‌های بالینی بین افراد و شرایط خاص پزشکی ممکن است باعث کاهش دقت شود.
                    </p>

                    <p>
                      همچنین علائم بالینی، تاریخچه پزشکی و شرایط عمومی بیمار عناصری‌اند که هوش مصنوعی به‌تنهایی قادر به درک کامل آن‌ها نیست.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                      نتیجه‌گیری
                    </h2>
                    
                    <p>
                      در نتیجه، بهترین روش استفاده از هوش مصنوعی به‌عنوان ابزار کمکی برای پزشکان است تا سرعت و دقت تشخیص افزایش یابد، اما تفسیر نهایی و تصمیم‌گیری درمانی باید تحت نظارت متخصص قلب انجام گیرد.
                    </p>

                    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mt-8">
                      <h3 className="text-xl font-semibold mb-3 text-secondary">
                        خدمات نوید زندگی
                      </h3>
                      <p className="mb-0">
                        تیم متخصصان قلب نوید زندگی با استفاده از جدیدترین تکنولوژی‌ها و تجهیزات پیشرفته، خدمات تشخیصی و درمانی قلبی را در منزل ارائه می‌دهند.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
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