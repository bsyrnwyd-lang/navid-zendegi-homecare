import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import LazyImage from "@/components/LazyImage";
import StructuredData from "@/components/StructuredData";
import SEOHead from "@/components/SEOHead";
import vaccinationImage from "@/assets/vaccination-article.jpg";

const VaccinationPage = () => {
  const breadcrumbs = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "واکسیناسیون و اهمیت آن", url: "/articles/vaccination" }
  ];

  return (
    <>
      <SEOHead
        title="واکسیناسیون و اهمیت آن در حفظ سلامت | نوید زندگی"
        description="همه چیز در مورد واکسیناسیون، نحوه عمل واکسن، برنامه واکسیناسیون و خدمات تزریق واکسن در منزل. راهنمای کامل با نظارت دکتر نیره مظاهری"
        keywords="واکسیناسیون در منزل، تزریق واکسن در منزل، خدمات پزشکی در منزل، پرستار برای واکسیناسیون، واکسن آنفلوانزا در منزل"
        canonical="https://navidzendegi.com/articles/vaccination"
        ogType="article"
        author="دکتر نیره مظاهری"
        publishedTime="2024-01-20T00:00:00Z"
      />

      <StructuredData
        breadcrumbs={breadcrumbs}
        article={{
          title: "واکسیناسیون و اهمیت آن در حفظ سلامت",
          description: "راهنمای جامع واکسیناسیون، نحوه عمل واکسن و خدمات تزریق در منزل",
          author: "دکتر نیره مظاهری",
          publishedDate: "2024-01-20",
          image: vaccinationImage
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbs} />
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                واکسیناسیون و اهمیت آن در حفظ سلامت
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: دکتر نیره مظاهری، متخصص قلب و عروق</span>
                <span>تاریخ انتشار: 20 ژانویه 2024</span>
              </div>

              <LazyImage
                src={vaccinationImage}
                alt="واکسیناسیون و اهمیت آن در حفظ سلامت"
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              />
            </header>

            <div className="space-y-6 text-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">مقدمه</h2>
                <p>
                  واکسیناسیون یکی از مهم‌ترین دستاوردهای پزشکی است که جان میلیون‌ها نفر را در سراسر جهان نجات داده است. واکسن با تحریک سیستم ایمنی بدن باعث می‌شود بدن در برابر عوامل بیماری‌زا مقاوم شود و در صورت مواجهه با آن‌ها، واکنش سریع‌تری نشان دهد.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">واکسن چگونه عمل می‌کند؟</h2>
                <p>
                  واکسن در واقع حاوی مقادیری از عامل عفونی کشته‌شده یا ضعیف‌شده است. پس از ورود به بدن، سیستم ایمنی فعال می‌شود و آنتی‌بادی‌ها را تولید می‌کند. به این ترتیب، بدن بدون ابتلا به بیماری، در برابر آن مقاوم می‌شود.
                </p>
                <p>
                  گاهی تزریق واکسن می‌تواند واکنش‌های خفیفی مانند تب یا قرمزی محل تزریق ایجاد کند، اما عوارض جدی ناشی از واکسن بسیار نادر است.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">برنامه واکسیناسیون</h2>
                <p>اکثر واکسیناسیون‌ها از بدو تولد آغاز شده و طبق یک برنامه مشخص پیش می‌روند.</p>
                <p>انجام واکسن‌ها باید ثبت شوند تا در مراجعات بعدی پزشک از وضعیت واکسیناسیون کودک مطلع باشد.</p>
                <p>بیشتر واکسن‌ها به‌صورت تزریقی هستند، اما برخی مانند واکسن فلج اطفال خوراکی‌اند.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">کاهش ایمنی و نیاز به یادآور</h2>
                <p>ایمنی ناشی از برخی واکسن‌ها با گذشت زمان کاهش می‌یابد و نیاز به تزریق یادآور وجود دارد.</p>
                <p>
                  <strong>مثال:</strong> واکسن کزاز هر ۱۰ سال باید تکرار شود. در صورت بریدگی یا زخم عمیق نیز تزریق واکسن کزاز ضروری است.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">واکسیناسیون در شرایط خاص</h2>
                <p>برخی گروه‌ها یا شرایط نیازمند واکسیناسیون ویژه هستند:</p>
                
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li><strong>سفر به مناطق خاص:</strong> تزریق واکسن‌هایی مثل تب زرد یا هپاتیت بر اساس مقصد ضروری است.</li>
                  <li>سالمندان بالای ۶۵ سال و بیماران مبتلا به بیماری‌های مزمن مانند دیابت، نارسایی قلبی یا ریوی باید واکسن‌های آنفلوانزا و پنوموکوک دریافت کنند.</li>
                  <li>افراد با نقص ایمنی یا بیماران مبتلا به HIV/AIDS نیازمند واکسیناسیون ویژه هستند.</li>
                  <li>افرادی که با حیوانات کار می‌کنند (دامپزشکان، کارکنان آزمایشگاه و …) باید واکسن هاری را دریافت کنند.</li>
                </ul>
              </section>

              <section className="bg-muted/50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">واکسیناسیون و خدمات پزشکی در منزل</h2>
                <p>یکی از دغدغه‌های خانواده‌ها، انجام واکسیناسیون کودکان و سالمندان در محیطی امن و بدون نیاز به مراجعه حضوری به مراکز درمانی است. با استفاده از خدمات پزشکی در منزل می‌توانید:</p>
                
                <ul className="list-disc list-inside space-y-2 mr-4 mt-4">
                  <li>واکسیناسیون کودکان و بزرگسالان را در منزل انجام دهید.</li>
                  <li>توسط پرستار یا پزشک در منزل وضعیت ایمنی و نیاز به واکسن یادآور بررسی شود.</li>
                  <li>از خطرات رفت‌وآمد به مراکز شلوغ و قرار گرفتن در معرض بیماری‌ها جلوگیری کنید.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">نتیجه‌گیری</h2>
                <p>
                  واکسیناسیون نقشی حیاتی در پیشگیری از بیماری‌ها دارد. پایبندی به برنامه واکسیناسیون و انجام دوزهای یادآور در سنین مختلف، به‌ویژه برای افراد پرخطر، از اهمیت زیادی برخوردار است. استفاده از خدمات تزریق واکسن در منزل می‌تواند فرآیند واکسیناسیون را ساده‌تر، امن‌تر و راحت‌تر کند.
                </p>
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

export default VaccinationPage;