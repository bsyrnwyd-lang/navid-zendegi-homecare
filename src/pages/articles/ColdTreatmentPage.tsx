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
    image: "https://navidzendegi.com/home-medical-consultation.jpg"
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

          <article className="py-8">
            <div className="container mx-auto px-4 max-w-3xl">
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  درمان سرماخوردگی در منزل
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  راهنمای کامل درمان سرماخوردگی با روش‌های خانگی مؤثر
                </p>
                
                <LazyImage 
                  src={coldTreatmentImage}
                  alt="ویزیت پزشک در منزل تهران - خدمات پزشکی نوید زندگی"
                  className="w-full rounded-lg shadow mb-6"
                  width={800}
                  height={512}
                />
              </header>

              <div className="prose max-w-none">
                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">سرماخوردگی چیست؟</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    سرماخوردگی یکی از شایع‌ترین بیماری‌های عفونی است که توسط ویروس‌ها ایجاد می‌شود. 
                    این بیماری معمولاً خود به خود بهبود می‌یابد، اما می‌توان با روش‌های مناسب درمان در منزل، 
                    علائم آن را کاهش داد و روند بهبودی را تسریع کرد.
                  </p>
                  <p className="text-sm bg-muted/30 p-3 rounded text-muted-foreground">
                    <strong>نکته مهم:</strong> سرماخوردگی بیماری ویروسی است و آنتی‌بیوتیک برای آن مؤثر نیست
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">علائم سرماخوردگی</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">علائم اولیه (روز ۱-۳)</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>آبریزش و گرفتگی بینی</li>
                        <li>عطسه مکرر</li>
                        <li>درد خفیف گلو</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">علائم پیشرفته (روز ۴-۷)</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>سرفه خشک یا با خلط</li>
                        <li>سردرد و خستگی</li>
                        <li>تب خفیف (در برخی موارد)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">روش‌های درمان سرماخوردگی در منزل</h2>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground">استراحت و آرامش</h3>
                  <p className="text-muted-foreground mb-4">
                    استراحت کافی بهترین دارو برای بدن است. حداقل ۸ ساعت خواب شبانه و استراحت در طول روز 
                    به سیستم ایمنی کمک می‌کند تا بهتر با عفونت مبارزه کند.
                  </p>

                  <h3 className="text-lg font-semibold mb-2 text-foreground">مصرف مایعات فراوان</h3>
                  <p className="text-muted-foreground mb-4">
                    نوشیدن آب، چای گرم، آب لیمو و سوپ‌های گرم به رقیق شدن مخاط و جلوگیری از کم‌آبی بدن کمک می‌کند.
                  </p>

                  <h3 className="text-lg font-semibold mb-2 text-foreground">درمان‌های خانگی مؤثر:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li><strong>غرغره با آب نمک:</strong> یک قاشق چایخوری نمک در یک لیوان آب ولرم حل کرده و غرغره کنید</li>
                    <li><strong>استنشاق بخار:</strong> بخار آب گرم را استنشاق کنید تا گرفتگی بینی کاهش یابد</li>
                    <li><strong>عسل طبیعی:</strong> یک قاشق عسل برای تسکین درد گلو و سرفه مفید است</li>
                    <li><strong>زنجبیل و لیمو:</strong> چای زنجبیل با لیمو خواص ضدالتهابی دارد</li>
                    <li><strong>مرطوب نگه داشتن هوا:</strong> استفاده از دستگاه بخور یا قرار دادن ظروف آب در اتاق</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">دارودرمانی در منزل</h2>
                  <div className="bg-primary/10 border border-primary/20 p-4 mb-4 rounded">
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

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground text-red-600">نشانه‌های خطر و زمان مراجعه به پزشک</h2>
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

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">پیشگیری از سرماخوردگی</h2>
                  <p className="text-muted-foreground mb-4">
                    بهترین درمان، پیشگیری است! رعایت نکات بهداشتی می‌تواند تا ۸۰٪ از ابتلا به سرماخوردگی جلوگیری کند.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">اقدامات روزانه:</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>شستن مداوم دست‌ها (۲۰ ثانیه)</li>
                        <li>اجتناب از لمس صورت</li>
                        <li>حفظ فاصله از افراد مبتلا</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">تقویت ایمنی:</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>تغذیه سالم و متنوع</li>
                        <li>خواب کافی (۷-۸ ساعت)</li>
                        <li>ورزش منظم و مدیریت استرس</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-8 bg-muted/20 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  خدمات پزشکی نوید زندگی در منزل شما
                </h3>
                <p className="text-muted-foreground mb-4">
                  برای درمان سرماخوردگی و مشاوره پزشکی در منزل با ما تماس بگیرید
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={handleCall}
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    تماس: {phoneNumber}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    واتساپ
                  </Button>
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