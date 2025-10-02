import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import hairLossImage from "@/assets/hair-loss-article.jpg";

const HairLossPage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "ریزش مو؛ علل، تشخیص و راه‌های پیگیری در منزل", url: "" }
  ];

  return (
    <>
      <SEOHead
        title="ریزش مو؛ علل، تشخیص و راه‌های پیگیری در منزل | نوید زندگی"
        description="راهنمای جامع ریزش مو، علل ژنتیکی و هورمونی، انواع ریزش مو، روش‌های تشخیص و درمان با خدمات پزشکی در منزل"
        keywords="ریزش مو، علت ریزش مو، درمان ریزش مو در منزل، خدمات پزشکی در منزل، آزمایش کم‌خونی در خانه، مشاوره تغذیه در منزل، کم‌خونی، تیروئید، طاسی"
        canonical="https://navidzendegi.com/articles/hair-loss"
        ogImage={hairLossImage}
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
                ریزش مو؛ علل، تشخیص و راه‌های پیگیری در منزل
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: نوید زندگی</span>
                <span>•</span>
                <span>دسته‌بندی: پوست و مو</span>
              </div>
              <img 
                src={hairLossImage}
                alt="ریزش مو؛ علل، تشخیص و راه‌های پیگیری در منزل"
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">مقدمه</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ریزش مو یکی از شایع‌ترین مشکلات زیبایی و سلامتی است که هم در مردان و هم در زنان دیده می‌شود. هر فردی به‌طور طبیعی روزانه بین ۵۰ تا ۱۰۰ تار مو از دست می‌دهد، اما زمانی که این مقدار بیشتر شود یا به‌صورت لکه‌ای و غیرطبیعی رخ دهد، نیاز به بررسی پزشکی دارد. خوشبختانه با خدمات پزشکی در منزل می‌توان علت ریزش مو را شناسایی و اقدامات درمانی لازم را آغاز کرد.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">علل شایع ریزش مو</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">علل ژنتیکی و هورمونی</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>طاسی ارثی (الگوی مردانه یا زنانه)</li>
                  <li>تغییرات هورمونی (بارداری، یائسگی، مشکلات تیروئید)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">بیماری‌ها و مشکلات داخلی</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>کم‌خونی (فقر آهن)</li>
                  <li>کم‌کاری یا پرکاری تیروئید</li>
                  <li>بیماری‌های خودایمنی مثل آلوپسی آره‌آتا</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">عوامل محیطی و سبک زندگی</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>استرس و فشار روانی</li>
                  <li>تغذیه نامناسب و کمبود ویتامین‌ها (B، D، روی، پروتئین)</li>
                  <li>مصرف برخی داروها (شیمی‌درمانی، داروهای ضدافسردگی و...)</li>
                  <li>استفاده بیش‌ازحد از رنگ مو، سشوار و مواد شیمیایی</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">انواع ریزش مو</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li><strong>ریزش موی منتشر:</strong> کم شدن حجم کلی موها در سراسر سر</li>
                  <li><strong>ریزش موی سکه‌ای (آلوپسی آره‌آتا):</strong> ایجاد لکه‌های بدون مو روی پوست سر</li>
                  <li><strong>ریزش موی اسکاردهنده:</strong> از بین رفتن فولیکول مو به‌طور دائمی</li>
                  <li><strong>طاسی الگوی مردانه و زنانه:</strong> ریزش تدریجی و ارثی موها</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">چه زمانی باید ریزش مو را جدی بگیریم؟</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>زمانی که ریزش مو ناگهانی و شدید باشد</li>
                  <li>همراه با علائم دیگر مثل خستگی، کاهش وزن یا اختلالات قاعدگی</li>
                  <li>زمانی که ریزش مو به‌صورت لکه‌ای یا غیرطبیعی باشد</li>
                  <li>وقتی پوست سر دچار خارش، التهاب یا زخم شود</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">روش‌های تشخیص و درمان</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>معاینه پزشکی و شرح حال</li>
                  <li>آزمایش‌های خون (بررسی کم‌خونی، تیروئید، ویتامین‌ها)</li>
                  <li>در برخی موارد بیوپسی پوست سر</li>
                  <li>درمان‌های دارویی (ماینوکسیدیل، فیناستراید)</li>
                  <li>درمان‌های تغذیه‌ای و مکمل‌ها</li>
                  <li>مدیریت استرس و اصلاح سبک زندگی</li>
                </ul>
              </section>

              <section className="mb-8 bg-primary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">نقش خدمات پزشکی در منزل</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  با خدمات پزشکی در منزل در <strong>navidzendegi.com</strong> می‌توانید:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>توسط پزشک در خانه معاینه شوید و علت ریزش مو مشخص شود</li>
                  <li>آزمایش‌های لازم (آهن، تیروئید، ویتامین‌ها) را در منزل انجام دهید</li>
                  <li>مشاوره تغذیه‌ای و دارویی دریافت کنید</li>
                  <li>روند درمان خود را بدون نیاز به مراجعه حضوری پیگیری کنید</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">جمع‌بندی</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ریزش مو می‌تواند دلایل ساده مثل کمبود تغذیه‌ای داشته باشد یا نشانه‌ای از بیماری‌های جدی‌تر باشد. بررسی دقیق علت ریزش، اولین قدم برای درمان مؤثر است. با استفاده از خدمات پزشکی در منزل می‌توانید در محیط آرام خانه علت ریزش مو را شناسایی کرده و درمان مناسب را دریافت کنید.
                </p>
              </section>

              <section className="bg-secondary/10 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  نیاز به مشاوره درباره ریزش مو دارید؟
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

export default HairLossPage;
