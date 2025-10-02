import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import bloodPressureImage from "@/assets/blood-pressure-article.jpg";

const BloodPressurePage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "فشار خون؛ علل، عوارض و اهمیت پیگیری در منزل", url: "" }
  ];

  return (
    <>
      <SEOHead
        title="فشار خون؛ علل، عوارض و اهمیت پیگیری در منزل | نوید زندگی"
        description="راهنمای جامع فشار خون، علل فشار خون بالا، عوارض، علائم، روش‌های کنترل و پیگیری فشار خون با خدمات پزشکی در منزل"
        keywords="فشار خون، فشار خون بالا، کنترل فشار خون در منزل، خدمات پزشکی در منزل، ویزیت پزشک در خانه، اندازه‌گیری فشار خون، عوارض فشار خون، پیشگیری از سکته، سلامت قلب"
        canonical="https://navidzendegi.com/articles/blood-pressure"
        ogImage={bloodPressureImage}
        ogType="article"
        author="نوید زندگی"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 md:pt-24">
          <article className="container mx-auto px-4 py-8 max-w-4xl">
            <BreadcrumbNavigation items={breadcrumbItems} />
            
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                فشار خون؛ علل، عوارض و اهمیت پیگیری در منزل
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: نوید زندگی</span>
                <span>•</span>
                <span>دسته‌بندی: بیماری‌های مزمن</span>
              </div>
              <img 
                src={bloodPressureImage}
                alt="فشار خون؛ علل، عوارض و اهمیت پیگیری در منزل"
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">مقدمه</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  فشار خون بالا (Hypertension) یکی از شایع‌ترین مشکلات پزشکی در سراسر جهان است و به آن «قاتل خاموش» می‌گویند. چون معمولاً بدون علامت است، اما در صورت عدم کنترل می‌تواند به بیماری‌های قلبی، مغزی و کلیوی منجر شود. خوشبختانه امروزه با وجود خدمات پزشکی در منزل، امکان پیگیری و کنترل فشار خون به‌سادگی در خانه فراهم است.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">فشار خون چیست؟</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  فشار خون نیرویی است که خون در حین پمپاژ قلب به دیواره رگ‌ها وارد می‌کند. فشار خون طبیعی در بزرگسالان معمولاً کمتر از 120/80 میلی‌متر جیوه است.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li><strong>فشار خون بالا:</strong> بیشتر از 140/90</li>
                  <li><strong>فشار خون مرزی:</strong> بین 120/80 تا 139/89</li>
                  <li><strong>فشار خون پایین:</strong> کمتر از 90/60</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">علل شایع فشار خون بالا</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>عوامل ژنتیکی و ارثی</li>
                  <li>اضافه وزن و چاقی</li>
                  <li>مصرف زیاد نمک</li>
                  <li>کم‌تحرکی و استرس</li>
                  <li>مصرف دخانیات و الکل</li>
                  <li>بیماری‌های زمینه‌ای (کلیوی، هورمونی یا قلبی)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">علائم فشار خون</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  بسیاری از بیماران مبتلا به فشار خون بالا هیچ علامتی ندارند، اما در برخی موارد ممکن است علائم زیر دیده شود:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>سردردهای مکرر</li>
                  <li>سرگیجه یا تاری دید</li>
                  <li>تپش قلب</li>
                  <li>تنگی نفس</li>
                  <li>خون‌دماغ شدن بدون دلیل مشخص</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">عوارض فشار خون کنترل‌نشده</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>سکته مغزی و قلبی</li>
                  <li>نارسایی کلیوی</li>
                  <li>نارسایی قلبی</li>
                  <li>آسیب به شبکیه چشم</li>
                  <li>کاهش کیفیت زندگی در بلندمدت</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">مراقبت و کنترل فشار خون در منزل</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>اندازه‌گیری منظم فشار خون با دستگاه خانگی یا توسط پرستار در منزل</li>
                  <li>کاهش مصرف نمک و غذاهای پرچرب</li>
                  <li>ورزش منظم و سبک (مثل پیاده‌روی)</li>
                  <li>مدیریت استرس و خواب کافی</li>
                  <li>مصرف داروهای ضد فشار خون طبق تجویز پزشک</li>
                </ul>
              </section>

              <section className="mb-8 bg-primary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">نقش خدمات پزشکی در منزل</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  با استفاده از خدمات پزشکی در منزل در <strong>navidzendegi.com</strong>، می‌توانید:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>فشار خون خود را در منزل به‌طور منظم پایش کنید</li>
                  <li>ویزیت پزشک عمومی یا متخصص در خانه داشته باشید</li>
                  <li>آزمایش‌های لازم (چربی خون، قند خون، عملکرد کلیه) را در منزل انجام دهید</li>
                  <li>مصرف داروها و تغییر سبک زندگی را زیر نظر پزشک پیگیری کنید</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">جمع‌بندی</h2>
                <p className="text-muted-foreground leading-relaxed">
                  فشار خون یک بیماری خاموش و جدی است که اگر به موقع تشخیص داده نشود، عوارض خطرناکی دارد. بهترین راه برای پیشگیری، اندازه‌گیری منظم و پیگیری پزشکی است. با خدمات پزشکی در منزل، می‌توانید در محیط آرام خانه وضعیت فشار خون خود را کنترل کرده و از بروز عوارض جدی جلوگیری کنید.
                </p>
              </section>

              <section className="bg-secondary/10 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  نیاز به کنترل فشار خون در منزل دارید؟
                </h3>
                <p className="text-muted-foreground mb-6">
                  با یک تماس، پزشک یا پرستار متخصص را در منزل خود داشته باشید
                </p>
                <Button 
                  variant="hero"
                  size="lg"
                  onClick={handleCall}
                  className="gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="ltr font-bold">{phoneNumber}</span>
                </Button>
              </section>
            </div>
          </article>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default BloodPressurePage;
