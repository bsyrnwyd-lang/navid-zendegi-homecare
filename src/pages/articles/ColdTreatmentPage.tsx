import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Home, Thermometer, Shield, Clock, Heart, AlertTriangle, CheckCircle, Stethoscope, Users, Award } from "lucide-react";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import LazyImage from "@/components/LazyImage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import coldTreatmentImage from "@/assets/home-medical-consultation.jpg";

const ColdTreatmentPage = () => {
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
    { name: "درمان سرماخوردگی در منزل", url: "/articles/cold-treatment" }
  ];

  const articleData = {
    title: "درمان سرماخوردگی در منزل | راهنمای کامل نوید زندگی",
    description: "روش‌های مؤثر درمان سرماخوردگی در منزل، نشانه‌های خطر و زمان مراجعه به پزشک",
    author: "دکتر نیره مظاهری تهراتی",
    publishedDate: "2024-09-24",
    modifiedDate: "2024-09-24",
    image: "https://navidzendegi.com/medical-consultation-article.jpg"
  };

  return (
    <>
      <SEOHead 
        title="درمان سرماخوردگی در منزل | راهنمای کامل نوید زندگی"
        description="روش‌های مؤثر درمان سرماخوردگی در منزل، نشانه‌های خطر و زمان مراجعه به پزشک. ویزیت پزشک در منزل تهران توسط نوید زندگی."
        keywords="درمان سرماخوردگی در منزل، سرماخوردگی، درمان سرما، ویزیت پزشک در منزل، نوید زندگی، پزشک در منزل تهران"
        canonical="https://navidzendegi.com/articles/cold-treatment"
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
                درمان سرماخوردگی در منزل
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                راهنمای کامل درمان سرماخوردگی با روش‌های خانگی مؤثر
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleCall}
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  ویزیت فوری در منزل: {phoneNumber}
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
                src={coldTreatmentImage}
                alt="ویزیت پزشک در منزل تهران - خدمات پزشکی نوید زندگی"
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
                  <li><a href="#what-is-cold" className="hover:text-primary transition-colors">سرماخوردگی چیست؟</a></li>
                  <li><a href="#home-services" className="hover:text-primary transition-colors">خدمات پزشکی در منزل</a></li>
                  <li><a href="#symptoms" className="hover:text-primary transition-colors">علائم سرماخوردگی</a></li>
                  <li><a href="#home-treatment" className="hover:text-primary transition-colors">روش‌های درمان در منزل</a></li>
                  <li><a href="#medication" className="hover:text-primary transition-colors">دارودرمانی</a></li>
                  <li><a href="#warning-signs" className="hover:text-primary transition-colors">نشانه‌های خطر</a></li>
                  <li><a href="#prevention" className="hover:text-primary transition-colors">پیشگیری</a></li>
                </ul>
              </nav>

              <section id="home-services" className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-primary" />
                  خدمات پزشکی در منزل نوید زندگی
                </h2>
                
                <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-6 rounded-lg mb-6">
                  <p className="text-foreground text-lg font-medium mb-4 text-center">
                    🏥 نوید زندگی؛ پیشرو در ارائه خدمات پزشکی تخصصی در منزل
                  </p>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    تیم پزشکی مجرب ما با تجهیزات پیشرفته آماده ارائه کلیه خدمات درمانی در راحتی منزل شما است
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-foreground">تیم پزشکی مجرب</h3>
                    <p className="text-muted-foreground text-sm">
                      پزشکان عمومی و متخصص با سال‌ها تجربه در ارائه خدمات درمانی در منزل
                    </p>
                  </div>
                  
                  <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-lg text-center">
                    <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-foreground">تجهیزات پیشرفته</h3>
                    <p className="text-muted-foreground text-sm">
                      تجهیزات پزشکی استاندارد برای انجام معاینات دقیق و تشخیص‌های صحیح
                    </p>
                  </div>
                  
                  <div className="bg-accent/5 border border-accent/20 p-6 rounded-lg text-center">
                    <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-foreground">خدمات تضمینی</h3>
                    <p className="text-muted-foreground text-sm">
                      کیفیت خدمات با ضمانت کامل و پیگیری مستمر وضعیت سلامت بیماران
                    </p>
                  </div>
                </div>

                <div className="bg-muted/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">خدمات ویژه درمان سرماخوردگی:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>معاینه کامل و تشخیص دقیق</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>تجویز داروهای مناسب</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>آموزش روش‌های درمان خانگی</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span>پیگیری تلفنی روند درمان</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span>مشاوره تغذیه و سبک زندگی</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        <span>ویزیت مجدد در صورت نیاز</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="what-is-cold" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  سرماخوردگی چیست؟
                </h2>
                <div className="bg-primary/5 border-r-4 border-primary p-4 mb-4">
                  <p className="text-foreground font-medium">
                    ⚡ نکته مهم: سرماخوردگی بیماری ویروسی است و آنتی‌بیوتیک برای آن مؤثر نیست
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  سرماخوردگی یکی از شایع‌ترین بیماری‌های عفونی است که توسط ویروس‌ها ایجاد می‌شود. 
                  این بیماری معمولاً خود به خود بهبود می‌یابد، اما می‌توان با روش‌های مناسب درمان در منزل، 
                  علائم آن را کاهش داد و روند بهبودی را تسریع کرد.
                </p>
              </section>

              <section id="symptoms" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  علائم سرماخوردگی
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3 text-foreground">علائم اولیه (روز ۱-۳)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        آبریزش و گرفتگی بینی
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        عطسه مکرر
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        درد خفیف گلو
                      </li>
                    </ul>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3 text-foreground">علائم پیشرفته (روز ۴-۷)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        سرفه خشک یا با خلط
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        سردرد و خستگی
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        تب خفیف (در برخی موارد)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="home-treatment" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Home className="w-6 h-6 text-primary" />
                  روش‌های درمان سرماخوردگی در منزل
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                      <Thermometer className="w-5 h-5 text-primary" />
                      استراحت و آرامش
                    </h3>
                    <p className="text-muted-foreground">
                      استراحت کافی بهترین دارو برای بدن است. حداقل ۸ ساعت خواب شبانه و استراحت در طول روز 
                      به سیستم ایمنی کمک می‌کند تا بهتر با عفونت مبارزه کند.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      مصرف مایعات فراوان
                    </h3>
                    <p className="text-muted-foreground">
                      نوشیدن آب، چای گرم، آب لیمو و سوپ‌های گرم به رقیق شدن مخاط و جلوگیری از کم‌آبی بدن کمک می‌کند.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-foreground">درمان‌های خانگی مؤثر:</h3>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                  <li><strong>غرغره با آب نمک:</strong> یک قاشق چایخوری نمک در یک لیوان آب ولرم حل کرده و غرغره کنید</li>
                  <li><strong>استنشاق بخار:</strong> بخار آب گرم را استنشاق کنید تا گرفتگی بینی کاهش یابد</li>
                  <li><strong>عسل طبیعی:</strong> یک قاشق عسل برای تسکین درد گلو و سرفه مفید است</li>
                  <li><strong>زنجبیل و لیمو:</strong> چای زنجبیل با لیمو خواص ضدالتهابی دارد</li>
                  <li><strong>مرطوب نگه داشتن هوا:</strong> استفاده از دستگاه بخور یا قرار دادن ظروف آب در اتاق</li>
                </ul>
              </section>

              <section id="medication" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  دارودرمانی در منزل
                </h2>
                <div className="bg-primary/10 border-r-4 border-primary p-4 mb-4">
                  <p className="text-foreground font-semibold">
                    توجه: مصرف هر گونه دارو باید تحت نظر پزشک انجام شود
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>مسکن‌های بدون نسخه مانند استامینوفن برای تب و درد</li>
                  <li>قطره‌های نمکی برای شستشوی بینی</li>
                  <li>شربت‌های ضدسرفه (در صورت سرفه شدید)</li>
                  <li>مکمل‌های ویتامین C و زینک</li>
                </ul>
              </section>

              <section id="warning-signs" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground text-red-600 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  نشانه‌های خطر و زمان مراجعه به پزشک
                </h2>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <p className="text-red-800 font-semibold mb-3">در صورت مشاهده این علائم، فوراً با پزشک تماس بگیرید:</p>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>تب بالای ۳۸.۵ درجه که بیش از ۳ روز ادامه دارد</li>
                    <li>درد شدید سینه یا تنگی نفس</li>
                    <li>درد شدید گلو که مانع بلع می‌شود</li>
                    <li>سردرد شدید همراه با تب</li>
                    <li>تشدید علائم پس از بهبود اولیه</li>
                    <li>سرفه مداوم با خلط خونی</li>
                  </ul>
                </div>
              </section>

              <section id="prevention" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Shield className="w-6 h-6 text-secondary" />
                  پیشگیری از سرماخوردگی
                </h2>
                <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-foreground mb-3">💡 نکته طلایی پیشگیری:</h3>
                  <p className="text-muted-foreground">
                    بهترین درمان، پیشگیری است! رعایت نکات بهداشتی می‌تواند تا ۸۰٪ از ابتلا به سرماخوردگی جلوگیری کند.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">اقدامات روزانه:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        شستن مداوم دست‌ها (۲۰ ثانیه)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        اجتناب از لمس صورت
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        حفظ فاصله از افراد مبتلا
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">تقویت ایمنی:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        تغذیه سالم و متنوع
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        خواب کافی (۷-۸ ساعت)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        ورزش منظم و مدیریت استرس
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                خدمات پزشکی نوید زندگی در منزل شما
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                تیم پزشکی مجرب نوید زندگی با تجهیزات کامل آماده ارائه خدمات تخصصی درمان سرماخوردگی و سایر بیماری‌ها در راحتی منزل شماست
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/50 p-4 rounded-lg border border-primary/20">
                  <Home className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">ویزیت در منزل</h3>
                  <p className="text-sm text-muted-foreground">بدون نیاز به مراجعه به مطب</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg border border-secondary/20">
                  <Clock className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">خدمات ۲۴ ساعته</h3>
                  <p className="text-sm text-muted-foreground">در تمام ساعات شبانه‌روز</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg border border-accent/20">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">تضمین کیفیت</h3>
                  <p className="text-sm text-muted-foreground">با بهترین متخصصان</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg border border-primary/20">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">مراقبت کامل</h3>
                  <p className="text-sm text-muted-foreground">از تشخیص تا بهبود کامل</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleCall}
                  className="flex items-center gap-2 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  درخواست ویزیت فوری: {phoneNumber}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 px-8 py-4 text-lg border-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  مشاوره رایگان واتساپ
                </Button>
              </div>

              <div className="mt-8 text-sm text-muted-foreground">
                <p className="mb-2">🌟 بیش از ۱۰ سال تجربه در خدمات پزشکی منزل</p>
                <p>📍 پوشش کامل تهران و کرج - ویزیت در کمترین زمان ممکن</p>
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

export default ColdTreatmentPage;