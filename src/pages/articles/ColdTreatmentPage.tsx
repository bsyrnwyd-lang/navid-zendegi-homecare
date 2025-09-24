import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Home, Thermometer, Shield, Clock } from "lucide-react";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import coldTreatmentImage from "@/assets/medical-consultation-article.jpg";

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

  return (
    <>
      <SEOHead 
        title="درمان سرماخوردگی در منزل | راهنمای کامل نوید زندگی"
        description="روش‌های مؤثر درمان سرماخوردگی در منزل، نشانه‌های خطر و زمان مراجعه به پزشک. ویزیت پزشک در منزل تهران توسط نوید زندگی."
        keywords="درمان سرماخوردگی در منزل، سرماخوردگی، درمان سرما، ویزیت پزشک در منزل، نوید زندگی، پزشک در منزل تهران"
        canonical="https://navidzendegi.com/articles/cold-treatment"
      />

      <div className="min-h-screen bg-background">
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
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

              <img 
                src={coldTreatmentImage}
                alt="درمان سرماخوردگی در منزل - مشاوره پزشکی نوید زندگی"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">سرماخوردگی چیست؟</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  سرماخوردگی یکی از شایع‌ترین بیماری‌های عفونی است که توسط ویروس‌ها ایجاد می‌شود. 
                  این بیماری معمولاً خود به خود بهبود می‌یابد، اما می‌توان با روش‌های مناسب درمان در منزل، 
                  علائم آن را کاهش داد و روند بهبودی را تسریع کرد.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">علائم سرماخوردگی</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>آبریزش و گرفتگی بینی</li>
                  <li>عطسه و سرفه</li>
                  <li>درد گلو</li>
                  <li>سردرد خفیف</li>
                  <li>خستگی و ضعف</li>
                  <li>تب خفیف (در برخی موارد)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">روش‌های درمان سرماخوردگی در منزل</h2>
                
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

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">دارودرمانی در منزل</h2>
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

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground text-red-600">⚠️ نشانه‌های خطر و زمان مراجعه به پزشک</h2>
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

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">پیشگیری از سرماخوردگی</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>شستن مداوم دست‌ها با آب و صابون</li>
                  <li>اجتناب از تماس با افراد مبتلا</li>
                  <li>تقویت سیستم ایمنی با تغذیه سالم و ورزش</li>
                  <li>خواب کافی و مدیریت استرس</li>
                  <li>واکسیناسیون در فصول مناسب</li>
                </ul>
              </section>
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                نیاز به مشاوره پزشکی دارید؟
              </h2>
              <p className="text-muted-foreground mb-6">
                تیم پزشکی نوید زندگی آماده ارائه خدمات ویزیت در منزل و مشاوره تخصصی در سراسر تهران و کرج است
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleCall}
                  className="flex items-center gap-2 px-6 py-3"
                >
                  <Phone className="w-5 h-5" />
                  تماس فوری: {phoneNumber}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 px-6 py-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساپ
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Home className="w-4 h-4 text-primary" />
                  <span>ویزیت در منزل</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>خدمات ۲۴ ساعته</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>تضمین کیفیت</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ColdTreatmentPage;