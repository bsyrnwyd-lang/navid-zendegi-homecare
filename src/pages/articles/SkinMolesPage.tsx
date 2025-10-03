import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import skinMolesImage from "@/assets/skin-moles-article.jpg";

const SkinMolesPage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "خال‌های پوستی؛ انواع، علائم هشدار و اهمیت بررسی در منزل", url: "/articles/skin-moles" }
  ];

  const structuredData = {
    breadcrumbs: breadcrumbItems,
    article: {
      title: "خال‌های پوستی؛ انواع، علائم هشدار و اهمیت بررسی در منزل",
      description: "راهنمای جامع خال‌های پوستی، انواع خال، علائم هشداردهنده، قاعده ABCDE و بررسی خال‌ها با خدمات پزشکی در منزل",
      author: "نوید زندگی",
      publishedDate: "2025-10-03",
      image: skinMolesImage
    }
  };

  return (
    <>
      <SEOHead
        title="خال‌های پوستی؛ انواع، علائم هشدار و اهمیت بررسی در منزل | نوید زندگی"
        description="راهنمای جامع خال‌های پوستی، انواع خال، علائم هشداردهنده، قاعده ABCDE و بررسی خال‌ها با خدمات پزشکی در منزل"
        keywords="خال پوستی، انواع خال، خال‌های خطرناک، بررسی خال در منزل، خدمات پزشکی در منزل، تشخیص سرطان پوست، قاعده ABCDE، ملانوم"
        canonical="https://navidzendegi.com/articles/skin-moles"
        ogImage={skinMolesImage}
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-10-03"
      />
      <StructuredData {...structuredData} />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 md:pt-24">
          <article className="container mx-auto px-4 py-8 max-w-4xl">
            <BreadcrumbNavigation items={breadcrumbItems} />
            
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                خال‌های پوستی؛ انواع، علائم هشدار و اهمیت بررسی در منزل
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: نوید زندگی</span>
                <span>•</span>
                <span>دسته‌بندی: پوست و مو</span>
              </div>
              <img 
                src={skinMolesImage}
                alt="خال‌های پوستی؛ انواع، علائم هشدار و اهمیت بررسی در منزل"
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">مقدمه</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  خال‌های پوستی از شایع‌ترین ضایعات پوستی هستند که معمولاً خوش‌خیم‌اند و در اغلب افراد دیده می‌شوند. بیشتر خال‌ها بی‌خطر هستند، اما در برخی موارد می‌توانند نشانه‌ای از تغییرات غیرطبیعی پوست یا حتی سرطان پوست باشند. شناخت انواع خال و بررسی تغییرات آن‌ها اهمیت زیادی دارد. با استفاده از خدمات پزشکی در منزل، امکان پیگیری و معاینه خال‌ها به راحتی و بدون نیاز به مراجعه حضوری فراهم است.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">انواع خال‌های پوستی</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 mr-4">
                  <li>
                    <strong>خال‌های مادرزادی:</strong> از بدو تولد وجود دارند و اندازه آن‌ها متفاوت است.
                  </li>
                  <li>
                    <strong>خال‌های اکتسابی:</strong> در طول زندگی و معمولاً در دوران کودکی و نوجوانی ایجاد می‌شوند.
                  </li>
                  <li>
                    <strong>خال‌های غیرمعمول (Dysplastic nevi):</strong> بزرگ‌تر از خال‌های معمولی بوده و شکل و رنگ نامنظم دارند؛ این نوع نیاز به بررسی بیشتری دارد.
                  </li>
                  <li>
                    <strong>خال‌های گوشتی یا برجسته:</strong> خال‌هایی که به شکل برجسته یا گوشتی روی پوست ظاهر می‌شوند.
                  </li>
                </ul>
              </section>

              <section className="mb-8 bg-primary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">علائم هشداردهنده در خال‌ها (قاعده ABCDE)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  برای بررسی احتمال بدخیمی خال‌ها، پزشکان از روش ABCDE استفاده می‌کنند:
                </p>
                <ul className="list-none text-muted-foreground space-y-3 mr-4">
                  <li>
                    <strong className="text-foreground">A: Asymmetry (عدم تقارن)</strong> → یک نیمه خال با نیمه دیگر تفاوت دارد.
                  </li>
                  <li>
                    <strong className="text-foreground">B: Border (مرز نامنظم)</strong> → لبه‌های خال صاف و مشخص نیست.
                  </li>
                  <li>
                    <strong className="text-foreground">C: Color (تغییر رنگ)</strong> → خال چند رنگ یا بسیار تیره شده است.
                  </li>
                  <li>
                    <strong className="text-foreground">D: Diameter (قطر بزرگ‌تر از ۶ میلی‌متر)</strong> → خال بیش از اندازه طبیعی بزرگ است.
                  </li>
                  <li>
                    <strong className="text-foreground">E: Evolution (تغییرات)</strong> → خال در حال تغییر شکل، اندازه یا خونریزی است.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">چه زمانی باید خال‌های پوستی بررسی شوند؟</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>زمانی که خال‌ها به‌طور ناگهانی تغییر رنگ یا اندازه دهند</li>
                  <li>وجود خارش، سوزش یا درد در محل خال</li>
                  <li>خونریزی یا ترشح از خال</li>
                  <li>ظاهر شدن خال جدید در بزرگسالی</li>
                  <li>سابقه خانوادگی سرطان پوست</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">مراقبت و پیشگیری</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>استفاده از ضدآفتاب برای جلوگیری از تغییرات خال‌ها</li>
                  <li>پرهیز از آفتاب‌سوختگی شدید</li>
                  <li>معاینه دوره‌ای خال‌ها توسط پزشک</li>
                  <li>خودآزمایی خال‌ها ماهی یک‌بار در آینه</li>
                </ul>
              </section>

              <section className="mb-8 bg-secondary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">نقش خدمات پزشکی در منزل</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  با مراجعه به <strong>navidzendegi.com</strong> و استفاده از خدمات پزشکی در منزل، می‌توانید:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>خال‌های خود را توسط پزشک در منزل معاینه کنید</li>
                  <li>در صورت نیاز به نمونه‌برداری (بیوپسی)، هماهنگی برای انجام آزمایش در منزل داشته باشید</li>
                  <li>توصیه‌های پزشکی و درمانی بدون نیاز به مراجعه به کلینیک دریافت کنید</li>
                  <li>پیگیری تغییرات خال‌ها را در طول زمان تحت نظر پزشک انجام دهید</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">جمع‌بندی</h2>
                <p className="text-muted-foreground leading-relaxed">
                  خال‌های پوستی معمولاً بی‌خطر هستند، اما برخی از آن‌ها می‌توانند نشانه‌ای از سرطان پوست باشند. بررسی منظم خال‌ها اهمیت زیادی دارد و با کمک خدمات پزشکی در منزل می‌توانید بدون نیاز به مراجعه حضوری، خال‌های پوستی خود را بررسی کرده و در صورت لزوم اقدام درمانی مناسب انجام دهید.
                </p>
              </section>

              <section className="bg-secondary/10 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  نیاز به بررسی خال‌های پوستی دارید؟
                </h3>
                <p className="text-muted-foreground mb-6">
                  با یک تماس، پزشک متخصص را در منزل خود داشته باشید
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

export default SkinMolesPage;
