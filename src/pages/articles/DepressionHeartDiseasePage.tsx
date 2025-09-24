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

          <article className="py-8">
            <div className="container mx-auto px-4 max-w-3xl">
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  افسردگی و بیماری‌های قلبی: نگاهی علمی به یک ارتباط دوطرفه
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  بررسی تخصصی رابطه پیچیده میان سلامت روان و سلامت قلب
                </p>
                
                <LazyImage 
                  src={depressionHeartImage}
                  alt="متخصص قلب در منزل - مشاوره افسردگی و بیماری قلبی نوید زندگی"
                  className="w-full rounded-lg shadow mb-6"
                  width={800}
                  height={512}
                />
              </header>

              <div className="prose max-w-none">

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">مقدمه</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    افسردگی یکی از شایع‌ترین اختلالات روانی در جهان است. هم‌زمان، بیماری‌های قلبی–عروقی نیز مهم‌ترین علت 
                    مرگ‌ومیر در سطح جهانی به شمار می‌آیند. پژوهش‌ها نشان داده‌اند که بین این دو بیماری رابطه‌ای پیچیده و دوطرفه 
                    وجود دارد؛ به‌گونه‌ای که افسردگی می‌تواند خطر ابتلا به بیماری قلبی را افزایش دهد و بیماری قلبی نیز می‌تواند 
                    احتمال بروز افسردگی را بیشتر کند.
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">افسردگی به‌عنوان عامل خطر بیماری قلبی</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    تحقیقات نشان می‌دهد افراد افسرده بیشتر در معرض مشکلات قلبی–عروقی هستند. برخی از مکانیسم‌های احتمالی این ارتباط عبارت‌اند از:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li><strong>تغییرات بیولوژیک:</strong> افزایش هورمون‌های استرس مانند کورتیزول که موجب افزایش فشار خون و اختلال عملکرد عروق می‌شود</li>
                    <li><strong>التهاب سیستمیک:</strong> سطح بالاتر شاخص‌های التهابی در افسردگی، با گرفتگی عروق کرونر ارتباط دارد</li>
                    <li><strong>سبک زندگی ناسالم:</strong> سیگار کشیدن، کم‌تحرکی و تغذیه نامناسب در افراد افسرده بیشتر دیده می‌شود</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">بیماری قلبی به‌عنوان محرک افسردگی</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">بیماری قلبی نیز می‌تواند زمینه‌ساز افسردگی باشد:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li><strong>بار روانی بیماری:</strong> اطلاع از یک بیماری مزمن و تهدیدکننده زندگی می‌تواند منجر به اضطراب و افسردگی شود</li>
                    <li><strong>تغییرات فیزیولوژیک:</strong> کاهش جریان خون مغزی و تغییرات هورمونی ناشی از مشکلات قلبی در بروز افسردگی نقش دارند</li>
                  </ul>
                  <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded">
                    <strong>آمار مهم:</strong> حدود ۱۵ تا ۲۰ درصد بیماران قلبی دچار افسردگی بالینی می‌شوند
                  </p>
                </section>

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">پیامدهای هم‌زمانی افسردگی و بیماری قلبی</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">ترکیب این دو بیماری پیامدهای منفی جدی دارد:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>افزایش بستری‌های مکرر و هزینه‌های درمانی</li>
                    <li>کاهش پایبندی به مصرف دارو و تغییر سبک زندگی</li>
                    <li>افزایش خطر مرگ‌ومیر در بیماران قلبی مبتلا به افسردگی</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">راهکارهای درمان و مدیریت مشترک</h2>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground">۱. درمان دارویی</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                    <li>برخی داروهای ضدافسردگی (مانند SSRIs) در بیماران قلبی ایمن‌تر هستند</li>
                    <li>مصرف دارو باید زیر نظر روانپزشک و متخصص قلب انجام شود</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground">۲. روان‌درمانی</h3>
                  <p className="text-muted-foreground mb-4">
                    درمان شناختی–رفتاری (CBT) در کاهش افسردگی و افزایش پایبندی بیماران قلبی به درمان مؤثر است.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground">۳. اصلاح سبک زندگی</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>ورزش منظم و سبک مانند پیاده‌روی روزانه</li>
                    <li>تغذیه سالم و متعادل</li>
                    <li>خواب کافی و منظم</li>
                    <li>ترک کامل دخانیات</li>
                  </ul>
                </section>

                <section className="mb-6">
                  <h2 className="text-xl font-bold mb-3 text-foreground">نتیجه‌گیری</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    افسردگی و بیماری قلبی می‌توانند یک چرخه معیوب ایجاد کنند. افسردگی خطر بروز بیماری‌های قلبی را افزایش می‌دهد 
                    و بیماری‌های قلبی نیز زمینه‌ساز افسردگی می‌شوند. بنابراین، برای بهبود کیفیت زندگی بیماران باید به سلامت روان 
                    و سلامت جسمی به‌طور هم‌زمان توجه کرد. یک رویکرد جامع و چندرشته‌ای می‌تواند بهترین نتایج درمانی را به همراه داشته باشد.
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">منابع علمی</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Whooley MA, Wong JM. Depression and cardiovascular disorders. Annu Rev Clin Psychol. 2013.</li>
                    <li>• Lichtman JH, et al. Depression and coronary heart disease. Circulation. 2008.</li>
                    <li>• Carney RM, Freedland KE. Depression and coronary heart disease. Nat Rev Cardiol. 2017.</li>
                    <li>• Hare DL, et al. Depression and cardiovascular disease: a clinical review. Eur Heart J. 2014.</li>
                  </ul>
                </section>
              </div>

              <div className="mt-8 bg-muted/20 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  مشاوره تخصصی با متخصص قلب نوید زندگی
                </h3>
                <p className="text-muted-foreground mb-4">
                  برای دریافت مشاوره درباره ارتباط افسردگی و بیماری‌های قلبی با ما تماس بگیرید
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

export default DepressionHeartDiseasePage;