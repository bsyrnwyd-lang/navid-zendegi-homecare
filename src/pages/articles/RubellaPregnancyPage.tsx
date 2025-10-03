import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import rubellaPregnancyImage from "@/assets/rubella-pregnancy-article.jpg";

const RubellaPregnancyPage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "ارتباط سرخچه و بارداری؛ خطرات، پیشگیری و نقش خدمات پزشکی", url: "/articles/rubella-pregnancy" }
  ];

  const structuredData = {
    breadcrumbs: breadcrumbItems,
    article: {
      title: "ارتباط سرخچه و بارداری؛ خطرات، پیشگیری و نقش خدمات پزشکی در منزل",
      description: "راهنمای جامع سرخچه در بارداری، عوارض سندرم سرخچه مادرزادی، پیشگیری با واکسیناسیون و خدمات پزشکی در منزل",
      author: "نوید زندگی",
      publishedDate: "2025-10-03",
      image: rubellaPregnancyImage
    }
  };

  return (
    <>
      <SEOHead
        title="ارتباط سرخچه و بارداری؛ خطرات، پیشگیری و نقش خدمات پزشکی | نوید زندگی"
        description="راهنمای جامع سرخچه در بارداری، عوارض سندرم سرخچه مادرزادی، پیشگیری با واکسیناسیون و خدمات پزشکی در منزل"
        keywords="سرخچه در بارداری، عوارض سرخچه، سندرم سرخچه مادرزادی، واکسن سرخچه، خدمات پزشکی در منزل، آزمایش سرخچه در خانه، واکسن MMR، بارداری سالم"
        canonical="https://navidzendegi.com/articles/rubella-pregnancy"
        ogImage={rubellaPregnancyImage}
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
                ارتباط سرخچه و بارداری؛ خطرات، پیشگیری و نقش خدمات پزشکی در منزل
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: نوید زندگی</span>
                <span>•</span>
                <span>دسته‌بندی: سلامت مادر و کودک</span>
              </div>
              <img 
                src={rubellaPregnancyImage}
                alt="ارتباط سرخچه و بارداری؛ خطرات، پیشگیری و نقش خدمات پزشکی در منزل"
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">مقدمه</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  سرخچه (Rubella) یک بیماری ویروسی مسری است که معمولاً با تب خفیف، راش پوستی و تورم غدد لنفاوی همراه است. در بیشتر افراد، این بیماری خفیف و خودمحدودشونده است؛ اما در دوران بارداری می‌تواند عوارض جدی برای جنین ایجاد کند. به همین دلیل، آگاهی از ارتباط سرخچه و بارداری اهمیت حیاتی دارد.
                </p>
              </section>

              <section className="mb-8 bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-r-4 border-red-500">
                <h2 className="text-2xl font-bold text-foreground mb-4">چرا سرخچه در بارداری خطرناک است؟</h2>
                <p className="text-muted-foreground leading-relaxed">
                  اگر مادر در سه‌ماهه اول بارداری به سرخچه مبتلا شود، ویروس می‌تواند از طریق جفت به جنین منتقل شود و باعث ایجاد <strong>سندرم سرخچه مادرزادی (CRS)</strong> گردد.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">عوارض احتمالی در جنین</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>ناهنجاری‌های قلبی</li>
                  <li>ناشنوایی</li>
                  <li>مشکلات بینایی (آب مروارید یا گلوکوم)</li>
                  <li>عقب‌ماندگی ذهنی یا رشدی</li>
                  <li>سقط یا مرده‌زایی</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 font-semibold">
                  ⚠️ هر چه ابتلا به سرخچه در اوایل بارداری رخ دهد، خطر برای جنین بیشتر است.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">علائم سرخچه در مادر</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>تب خفیف</li>
                  <li>بثورات پوستی صورتی‌رنگ که از صورت شروع و به بدن گسترش می‌یابد</li>
                  <li>تورم غدد لنفاوی گردن و پشت گوش</li>
                  <li>درد مفاصل (بخصوص در زنان)</li>
                </ul>
              </section>

              <section className="mb-8 bg-primary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">پیشگیری از سرخچه در بارداری</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">واکسیناسیون قبل از بارداری</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4 mb-4">
                  <li>بهترین راه پیشگیری، تزریق واکسن MMR (سرخک، سرخچه، اوریون) است</li>
                  <li>زنان باید حداقل یک ماه قبل از بارداری واکسینه شوند</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">عدم تماس با افراد مشکوک</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  زنان باردار باید از حضور در محیط‌های آلوده یا تماس با فرد مبتلا خودداری کنند.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">آزمایش ایمنی قبل از بارداری</h3>
                <p className="text-muted-foreground leading-relaxed">
                  با یک آزمایش خون ساده می‌توان مشخص کرد که فرد نسبت به سرخچه ایمن هست یا نه.
                </p>
              </section>

              <section className="mb-8 bg-secondary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">نقش خدمات پزشکی در منزل</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  با استفاده از خدمات پزشکی در منزل در <strong>navidzendegi.com</strong>، می‌توانید:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                  <li>قبل از بارداری آزمایش ایمنی نسبت به سرخچه را در منزل انجام دهید</li>
                  <li>مشاوره پزشکی در خانه دریافت کنید</li>
                  <li>در صورت بروز علائم مشکوک در دوران بارداری، ویزیت پزشک در منزل داشته باشید</li>
                  <li>آزمایش‌های لازم برای پیگیری وضعیت مادر و جنین را در منزل انجام دهید</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">جمع‌بندی</h2>
                <p className="text-muted-foreground leading-relaxed">
                  سرخچه در افراد عادی بیماری خفیفی است، اما در دوران بارداری می‌تواند پیامدهای بسیار جدی برای جنین داشته باشد. بهترین راهکار، پیشگیری با واکسیناسیون قبل از بارداری و پیگیری پزشکی در طول بارداری است. با استفاده از خدمات پزشکی در منزل، می‌توانید بدون نیاز به مراجعه حضوری، از سلامت خود و جنین‌تان مطمئن شوید.
                </p>
              </section>

              <section className="bg-secondary/10 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  نیاز به مشاوره پیش از بارداری یا در دوران بارداری دارید؟
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

export default RubellaPregnancyPage;
