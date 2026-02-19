import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Phone } from "lucide-react";
import meningitisImage from "@/assets/meningitis-article.jpg";

const MeningitisPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "مننژیت چیست؟", url: "/articles/meningitis" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <article className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />
          {/* Article Header */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              مننژیت چیست؟ علل، علائم و درمان
            </h1>
            <div className="flex items-center justify-center text-muted-foreground mb-8">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                اورژانس پزشکی
              </span>
            </div>
            <img 
              src={meningitisImage} 
              alt="مننژیت و التهاب پرده‌های محافظ مغز"
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
              <p className="text-lg leading-relaxed">
                مننژیت به التهاب پرده‌های محافظ مغز و نخاع گفته می‌شود. این بیماری می‌تواند به علت باکتری، ویروس، قارچ، انگل یا حتی عوامل غیرعفونی ایجاد شود.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded">
                <p className="text-red-800 font-medium">
                  🔴 مننژیت باکتریایی از خطرناک‌ترین انواع است و اگر به‌موقع درمان نشود، می‌تواند باعث مرگ یا عوارض دائمی شود. به همین دلیل، تشخیص سریع و شروع درمان اهمیت حیاتی دارد.
                </p>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                علائم مننژیت
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                علائم اصلی مننژیت عبارتند از:
              </p>
              
              <ul className="space-y-3 text-muted-foreground mb-6 pr-6">
                <li>• تب ناگهانی و بالا</li>
                <li>• سردرد شدید</li>
                <li>• خشکی و سفتی گردن</li>
                <li>• تهوع یا استفراغ</li>
                <li>• حساسیت غیرعادی به نور</li>
                <li>• تغییر سطح هوشیاری یا گیجی</li>
                <li>• در برخی موارد، بثورات پوستی</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-foreground">👶 علائم در نوزادان و کودکان</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                در نوزادان و کودکان علائم کمتر اختصاصی هستند:
              </p>
              
              <ul className="space-y-3 text-muted-foreground mb-6 pr-6">
                <li>• بی‌حالی و خواب‌آلودگی غیرطبیعی</li>
                <li>• گریه شدید و مداوم</li>
                <li>• ضعف در شیر خوردن</li>
                <li>• برجستگی یا تورم ملاج سر</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <p className="text-yellow-800 font-medium">
                  ⚠️ اگر شما یا یکی از اعضای خانواده دچار این علائم شدید شدید، فوری باید پزشک شما را ویزیت کند.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                درمان مننژیت
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                درمان مننژیت بسته به نوع آن متفاوت است:
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">• مننژیت باکتریایی:</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 pr-4">
                آنتی‌بیوتیک وریدی سریع + گاهی کورتون برای کاهش التهاب
              </p>

              <h3 className="text-xl font-semibold mb-4 text-primary">• مننژیت ویروسی:</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 pr-4">
                معمولاً خفیف‌تر بوده و با استراحت، مایعات و کنترل تب بهبود می‌یابد
              </p>

              <h3 className="text-xl font-semibold mb-4 text-primary">• قارچی و انگلی:</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 pr-4">
                درمان دارویی اختصاصی لازم دارند
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                <p className="text-green-800 font-medium">
                  ⏱ در هر حالت، شروع درمان در ساعات اولیه شانس بهبودی را افزایش می‌دهد و جلوی عوارض جدی را می‌گیرد.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                پیشگیری از مننژیت
              </h2>
              
              <ul className="space-y-4 text-muted-foreground pr-6">
                <li>• واکسیناسیون علیه باکتری‌های شایع (مننگوکوک، پنوموکوک، Hib)</li>
                <li>• رعایت بهداشت فردی و شست‌وشوی دست‌ها</li>
                <li>• عدم استفاده از وسایل شخصی مشترک</li>
                <li>• پیگیری درمان سریع در صورت مشاهده علائم</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                خدمات نوید زندگی؛ همراه شما در شرایط اورژانسی
              </h2>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  تشخیص و درمان سریع مننژیت اهمیت حیاتی دارد. اگر امکان مراجعه فوری به بیمارستان برای شما دشوار باشد، می‌توانید از خدمات ویزیت پزشک در منزل استفاده کنید.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  در وب‌سایت نوید زندگی می‌توانید به خدماتی مانند:
                </p>
                
                <ul className="space-y-2 text-muted-foreground mb-6 pr-6">
                  <li>• ویزیت پزشک عمومی و متخصص در منزل</li>
                  <li>• تزریق سرم در منزل</li>
                  <li>• تزریقات و خدمات پرستاری در منزل</li>
                  <li>• مراقبت‌های ویژه کودکان و سالمندان</li>
                </ul>
                
                <p className="text-muted-foreground mb-6">
                  دسترسی داشته باشید و بدون اتلاف وقت، بهترین مراقبت پزشکی را در خانه دریافت کنید.
                </p>
                
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
              <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                جمع‌بندی
              </h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  مننژیت یک بیماری جدی است که در صورت تأخیر در درمان می‌تواند تهدیدکننده حیات باشد. شناخت علائم و اقدام سریع برای ویزیت پزشک در منزل یا انتقال به مرکز درمانی، مهم‌ترین گام برای نجات جان بیمار است.
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

export default MeningitisPage;