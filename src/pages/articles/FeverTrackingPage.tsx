import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import feverImage from "@/assets/fever-tracking-article.jpg";

const FeverTrackingPage = () => {
  const breadcrumbs = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تب و پیگیری آن", url: "/articles/fever-tracking" }
  ];

  return (
    <>
      <SEOHead
        title="تب و پیگیری آن؛ چه زمانی باید به پزشک در منزل مراجعه کنیم؟ - نوید زندگی"
        description="راهنمای کامل پیگیری تب در منزل، علل تب، زمان مراجعه به پزشک و نحوه استفاده از خدمات پزشکی در منزل برای درمان تب"
        keywords="تب، تب در منزل، پیگیری تب، خدمات پزشکی در منزل، ویزیت پزشک در منزل، درمان تب در خانه"
        canonical="https://navidezendegi.com/articles/fever-tracking"
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-15"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "تب و پیگیری آن؛ چه زمانی باید به پزشک در منزل مراجعه کنیم؟",
          description: "راهنمای کامل پیگیری تب در منزل و زمان مراجعه به پزشک",
          author: "نوید زندگی",
          publishedDate: "2025-01-15",
          image: feverImage
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <BreadcrumbNavigation items={breadcrumbs} />

          <article className="mt-8 space-y-8">
            <header>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                تب و پیگیری آن؛ چه زمانی باید به پزشک در منزل مراجعه کنیم؟
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span>نویسنده: نوید زندگی</span>
                <span>•</span>
                <time dateTime="2025-01-15">۱۵ ژانویه ۲۰۲۵</time>
              </div>
            </header>

            <img
              src={feverImage}
              alt="تب و پیگیری آن - خدمات پزشکی در منزل"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-primary">
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">تماس با نوید زندگی</p>
                    <a href="tel:09386117912" className="text-xl font-bold hover:underline">
                      ۰۹۳۸۶۱۱۷۹۱۲
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مقدمه</h2>
              <p className="text-muted-foreground leading-relaxed">
                تب یکی از شایع‌ترین علائمی است که باعث نگرانی بیماران و خانواده‌ها می‌شود. بسیاری از افراد هنگام بروز تب نمی‌دانند چه زمانی باید آن را جدی بگیرند و چه زمانی نیاز به مراجعه به پزشک دارند. خوشبختانه امروزه با وجود خدمات پزشکی در منزل، امکان بررسی و پیگیری تب بدون نیاز به مراجعه حضوری به بیمارستان یا درمانگاه فراهم شده است.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">تب چیست؟</h2>
              <p className="text-muted-foreground leading-relaxed">
                تب افزایش دمای بدن بالاتر از 38 درجه سانتی‌گراد است که معمولاً نشانه‌ای از فعال شدن سیستم ایمنی بدن در برابر عفونت یا التهاب محسوب می‌شود. در واقع تب به‌خودی‌خود بیماری نیست، بلکه علامتی است از اینکه بدن در حال مبارزه با یک مشکل داخلی است.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">علل شایع تب</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>عفونت‌های ویروسی مثل سرماخوردگی و آنفلوآنزا</li>
                <li>عفونت‌های باکتریایی مثل عفونت ادراری یا گلودرد چرکی</li>
                <li>گرمازدگی یا فعالیت شدید در هوای گرم</li>
                <li>واکنش‌های دارویی یا التهابی</li>
                <li>در برخی موارد بیماری‌های مزمن یا جدی‌تر</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">چه زمانی تب نیاز به پیگیری دارد؟</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                هر تب نیاز به نگرانی ندارد؛ اما در شرایط زیر باید حتماً پیگیری شود:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>تب بالای 39 درجه که با دارو پایین نمی‌آید</li>
                <li>ادامه تب بیشتر از 3 روز</li>
                <li>همراهی تب با علائمی مثل تنگی نفس، سردرد شدید، سفتی گردن یا بثورات پوستی</li>
                <li>تب در کودکان زیر 2 سال یا سالمندان</li>
                <li>تب در بیمارانی با بیماری زمینه‌ای (دیابت، قلبی–عروقی، نقص ایمنی)</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">مراقبت‌های اولیه از تب در منزل</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>استراحت کافی و مصرف مایعات فراوان</li>
                <li>استفاده از داروهای تب‌بر (مثل استامینوفن) طبق دستور پزشک</li>
                <li>کمپرس خنک یا دوش آب ولرم برای کاهش دمای بدن</li>
                <li>پرهیز از مصرف خودسرانه آنتی‌بیوتیک</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نقش خدمات پزشکی در منزل در پیگیری تب</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                با توجه به اینکه مراجعه به اورژانس یا کلینیک در زمان تب می‌تواند دشوار و پرهزینه باشد، استفاده از خدمات پزشکی در منزل بهترین انتخاب است. مزایای این خدمات شامل:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>ویزیت پزشک در منزل برای بررسی علت تب</li>
                <li>انجام آزمایش‌های لازم در خانه (مانند آزمایش خون و ادرار)</li>
                <li>تزریق و سرم درمانی در منزل در صورت نیاز</li>
                <li>کاهش استرس بیمار و خانواده با درمان در محیط آرام خانه</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">جمع‌بندی</h2>
              <p className="text-muted-foreground leading-relaxed">
                تب یک علامت مهم بالینی است که می‌تواند از یک عفونت ساده تا بیماری‌های جدی‌تر را نشان دهد. توجه به نشانه‌ها، مراقبت اولیه و پیگیری صحیح، نقش زیادی در درمان دارد. در صورت نیاز، بهترین راهکار استفاده از خدمات پزشکی در منزل است تا بیمار بدون نیاز به مراجعه حضوری، تحت مراقبت حرفه‌ای قرار گیرد.
              </p>
            </section>
          </article>
          </div>
        </main>

        <FloatingContact />
        <Footer />
      </div>
    </>
  );
};

export default FeverTrackingPage;
