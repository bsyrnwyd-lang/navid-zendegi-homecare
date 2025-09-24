import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Home, Heart, Brain, AlertTriangle, CheckCircle, Shield, Clock, Users, Stethoscope } from "lucide-react";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import LazyImage from "@/components/LazyImage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import depressionHeartImage from "@/assets/iranian-cardiology-home.jpg";

const DepressionHeartDiseasePage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات پزشکی", url: "/articles" },
    { name: "افسردگی و بیماری‌های قلبی", url: "/articles/depression-heart-disease" }
  ];

  const articleData = {
    title: "افسردگی و بیماری‌های قلبی: نگاهی علمی به یک ارتباط دوطرفه",
    description: "بررسی علمی رابطه دوطرفه میان افسردگی و بیماری‌های قلبی، عوامل خطر و راهکارهای درمانی",
    author: "دکتر نیره مظاهری تهراتی",
    publishedDate: "2024-09-24",
    modifiedDate: "2024-09-24",
    image: "https://navidzendegi.com/iranian-cardiology-home.jpg"
  };

  return (
    <>
      <SEOHead 
        title="افسردگی و بیماری‌های قلبی | نگاهی علمی به ارتباط دوطرفه - نوید زندگی"
        description="بررسی علمی رابطه دوطرفه میان افسردگی و بیماری‌های قلبی، عوامل خطر و راهکارهای درمانی. مشاوره تخصصی با پزشک قلب در منزل."
        keywords="افسردگی و قلب، بیماری قلبی، سلامت روان، پزشک قلب در منزل، متخصص قلب تهران، نوید زندگی"
        canonical="https://navidzendegi.com/articles/depression-heart-disease"
      />
      <StructuredData 
        breadcrumbs={breadcrumbItems}
        article={articleData}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 md:pt-24">
          <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
              <BreadcrumbNavigation items={breadcrumbItems} />
            </div>
          </header>

          <article className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  افسردگی و بیماری‌های قلبی
                  <br />
                  <span className="text-3xl md:text-4xl text-primary">نگاهی علمی به یک ارتباط دوطرفه</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  بررسی تخصصی رابطه پیچیده میان سلامت روان و سلامت قلب
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    onClick={handleCall}
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    مشاوره با متخصص قلب: {phoneNumber}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    مشاوره واتساپ
                  </Button>
                </div>

                <LazyImage 
                  src={depressionHeartImage}
                  alt="متخصص قلب در منزل - مشاوره افسردگی و بیماری قلبی نوید زندگی"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
                  width={800}
                  height={512}
                />
              </header>

              <div className="prose prose-lg max-w-none">
                {/* Table of Contents */}
                <nav className="bg-muted/30 p-6 rounded-lg mb-8">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">فهرست مطالب:</h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#introduction" className="hover:text-primary transition-colors">مقدمه و اهمیت موضوع</a></li>
                    <li><a href="#depression-risk-factor" className="hover:text-primary transition-colors">افسردگی به‌عنوان عامل خطر قلبی</a></li>
                    <li><a href="#heart-disease-depression" className="hover:text-primary transition-colors">بیماری قلبی و بروز افسردگی</a></li>
                    <li><a href="#combined-effects" className="hover:text-primary transition-colors">پیامدهای هم‌زمانی دو بیماری</a></li>
                    <li><a href="#treatment-approaches" className="hover:text-primary transition-colors">راهکارهای درمان</a></li>
                    <li><a href="#conclusion" className="hover:text-primary transition-colors">نتیجه‌گیری</a></li>
                  </ul>
                </nav>

                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Brain className="w-6 h-6 text-primary" />
                    مقدمه
                  </h2>
                  <div className="bg-primary/5 border-r-4 border-primary p-4 mb-4">
                    <p className="text-foreground font-medium">
                      🔬 حقیقت علمی: افسردگی و بیماری قلبی در یک چرخه دوطرفه قرار دارند
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    افسردگی یکی از شایع‌ترین اختلالات روانی در جهان است. هم‌زمان، بیماری‌های قلبی–عروقی نیز مهم‌ترین علت 
                    مرگ‌ومیر در سطح جهانی به شمار می‌آیند. پژوهش‌ها نشان داده‌اند که بین این دو بیماری رابطه‌ای پیچیده و دوطرفه 
                    وجود دارد؛ به‌گونه‌ای که افسردگی می‌تواند خطر ابتلا به بیماری قلبی را افزایش دهد و بیماری قلبی نیز می‌تواند 
                    احتمال بروز افسردگی را بیشتر کند.
                  </p>
                </section>

                <section id="depression-risk-factor" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Heart className="w-6 h-6 text-red-500" />
                    افسردگی به‌عنوان عامل خطر بیماری قلبی
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    تحقیقات نشان می‌دهد افراد افسرده بیشتر در معرض مشکلات قلبی–عروقی هستند. برخی از مکانیسم‌های احتمالی این ارتباط عبارت‌اند از:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        تغییرات بیولوژیک
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        افزایش هورمون‌های استرس مانند کورتیزول که موجب افزایش فشار خون و اختلال عملکرد عروق می‌شود.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                        <Shield className="w-5 h-5 text-orange-500" />
                        التهاب سیستمیک
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        سطح بالاتر شاخص‌های التهابی در افسردگی، با گرفتگی عروق کرونر ارتباط دارد.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                        <Users className="w-5 h-5 text-yellow-600" />
                        سبک زندگی ناسالم
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        سیگار کشیدن، کم‌تحرکی و تغذیه نامناسب در افراد افسرده بیشتر دیده می‌شود.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="heart-disease-depression" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Brain className="w-6 h-6 text-secondary" />
                    بیماری قلبی به‌عنوان محرک افسردگی
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    بیماری قلبی نیز می‌تواند زمینه‌ساز افسردگی باشد:
                  </p>
                  
                  <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">بار روانی بیماری</h3>
                    <p className="text-muted-foreground mb-3">
                      اطلاع از یک بیماری مزمن و تهدیدکننده زندگی می‌تواند منجر به اضطراب و افسردگی شود.
                    </p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-foreground">تغییرات فیزیولوژیک</h3>
                    <p className="text-muted-foreground mb-4">
                      کاهش جریان خون مغزی و تغییرات هورمونی ناشی از مشکلات قلبی در بروز افسردگی نقش دارند.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg border border-secondary/30">
                      <p className="text-foreground font-semibold text-center">
                        📊 آمار مهم: حدود ۱۵ تا ۲۰ درصد بیماران قلبی دچار افسردگی بالینی می‌شوند
                      </p>
                    </div>
                  </div>
                </section>

                <section id="combined-effects" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-foreground text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    پیامدهای هم‌زمانی افسردگی و بیماری قلبی
                  </h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <p className="text-red-800 font-semibold mb-4">ترکیب این دو بیماری پیامدهای منفی جدی دارد:</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-red-700">
                        <AlertTriangle className="w-5 h-5" />
                        <span>افزایش بستری‌های مکرر و هزینه‌های درمانی</span>
                      </li>
                      <li className="flex items-center gap-3 text-red-700">
                        <AlertTriangle className="w-5 h-5" />
                        <span>کاهش پایبندی به مصرف دارو و تغییر سبک زندگی</span>
                      </li>
                      <li className="flex items-center gap-3 text-red-700">
                        <AlertTriangle className="w-5 h-5" />
                        <span>افزایش خطر مرگ‌ومیر در بیماران قلبی مبتلا به افسردگی</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="treatment-approaches" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Stethoscope className="w-6 h-6 text-primary" />
                    راهکارهای درمان و مدیریت مشترک
                  </h2>
                  
                  <div className="grid md:grid-cols-1 gap-6 mb-6">
                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-foreground">۱. درمان دارویی</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          برخی داروهای ضدافسردگی (مانند SSRIs) در بیماران قلبی ایمن‌تر هستند
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          مصرف دارو باید زیر نظر روانپزشک و متخصص قلب انجام شود
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-foreground">۲. روان‌درمانی</h3>
                      <p className="text-muted-foreground">
                        درمان شناختی–رفتاری (CBT) در کاهش افسردگی و افزایش پایبندی بیماران قلبی به درمان مؤثر است.
                      </p>
                    </div>
                    
                    <div className="bg-accent/5 border border-accent/20 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-foreground">۳. اصلاح سبک زندگی</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            ورزش منظم و سبک مانند پیاده‌روی روزانه
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            تغذیه سالم و متعادل
                          </li>
                        </ul>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            خواب کافی و منظم
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            ترک کامل دخانیات
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="conclusion" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" />
                    نتیجه‌گیری
                  </h2>
                  <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-6 rounded-lg">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      افسردگی و بیماری قلبی می‌توانند یک چرخه معیوب ایجاد کنند. افسردگی خطر بروز بیماری‌های قلبی را افزایش می‌دهد 
                      و بیماری‌های قلبی نیز زمینه‌ساز افسردگی می‌شوند. بنابراین، برای بهبود کیفیت زندگی بیماران باید به سلامت روان 
                      و سلامت جسمی به‌طور هم‌زمان توجه کرد.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-primary/20">
                      <p className="text-foreground font-semibold text-center">
                        💡 نکته کلیدی: یک رویکرد جامع و چندرشته‌ای می‌تواند بهترین نتایج درمانی را به همراه داشته باشد
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">📚 منابع علمی</h2>
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Whooley MA, Wong JM. Depression and cardiovascular disorders. Annu Rev Clin Psychol. 2013.</li>
                      <li>Lichtman JH, et al. Depression and coronary heart disease. Circulation. 2008.</li>
                      <li>Carney RM, Freedland KE. Depression and coronary heart disease. Nat Rev Cardiol. 2017.</li>
                      <li>Hare DL, Toukhsati SR, Johansson P, Jaarsma T. Depression and cardiovascular disease: a clinical review. Eur Heart J. 2014.</li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="mt-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  مشاوره تخصصی با متخصص قلب نوید زندگی
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  تیم پزشکی نوید زندگی با تجربه در درمان بیماری‌های قلبی و ارتباط آن با سلامت روان، آماده ارائه خدمات مشاوره و ویزیت در منزل است
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white/50 p-4 rounded-lg border border-primary/20">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">متخصص قلب مجرب</h3>
                    <p className="text-sm text-muted-foreground">با سال‌ها تجربه بالینی</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg border border-secondary/20">
                    <Home className="w-8 h-8 text-secondary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">ویزیت در منزل</h3>
                    <p className="text-sm text-muted-foreground">بدون استرس مراجعه</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg border border-accent/20">
                    <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">خدمات ۲۴ ساعته</h3>
                    <p className="text-sm text-muted-foreground">در اورژانس‌های قلبی</p>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg border border-primary/20">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">مشاوره جامع</h3>
                    <p className="text-sm text-muted-foreground">قلب و سلامت روان</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={handleCall}
                    className="flex items-center gap-2 px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    مشاوره فوری: {phoneNumber}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="flex items-center gap-2 px-8 py-4 text-lg border-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    واتساپ
                  </Button>
                </div>

                <div className="mt-8 text-sm text-muted-foreground">
                  <p className="mb-2">💝 سلامت قلب و روان شما اولویت ماست</p>
                  <p>📍 تهران و کرج - ویزیت تخصصی در منزل</p>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DepressionHeartDiseasePage;