import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import LazyImage from "@/components/LazyImage";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Button } from "@/components/ui/button";
import fluMedicationsImage from "@/assets/flu-treatment-medications.jpg";
import fluPreventionImage from "@/assets/flu-prevention-article.jpg";
import fluMortalityImage from "@/assets/flu-mortality-article.jpg";
import influenzaImage from "@/assets/infectious-disease.jpg";

const InfluenzaMedicationsPage = () => {
  const phoneNumber = "09386117912";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "داروهای درمان آنفولانزا", url: "/articles/influenza-medications" }
  ];

  const faqs = [
    {
      question: "داروهای ضدویروسی آنفولانزا چه زمانی باید مصرف شوند؟",
      answer: "داروهای ضدویروسی مانند اوسلتامیویر (تامیفلو) باید ظرف ۴۸ ساعت اول پس از شروع علائم مصرف شوند تا بیشترین اثربخشی را داشته باشند. مصرف دیرتر همچنان می‌تواند مفید باشد، اما اثربخشی کاهش می‌یابد."
    },
    {
      question: "آیا آنتی‌بیوتیک برای درمان آنفولانزا مؤثر است؟",
      answer: "خیر، آنفولانزا یک بیماری ویروسی است و آنتی‌بیوتیک‌ها که علیه باکتری‌ها مؤثرند، هیچ تأثیری بر ویروس آنفولانزا ندارند. آنتی‌بیوتیک فقط در صورت بروز عوارض باکتریایی ثانویه مانند ذات‌الریه باکتریایی تجویز می‌شود."
    },
    {
      question: "تامیفلو (اوسلتامیویر) چگونه عمل می‌کند؟",
      answer: "تامیفلو با مهار آنزیم نورآمینیداز ویروس آنفولانزا عمل می‌کند. این آنزیم برای رها شدن ذرات ویروسی جدید از سلول‌های آلوده ضروری است. با مهار این آنزیم، انتشار ویروس در بدن محدود شده و بهبودی سریع‌تر می‌شود."
    },
    {
      question: "چه داروهایی برای کاهش علائم آنفولانزا استفاده می‌شوند؟",
      answer: "استامینوفن و ایبوپروفن برای کاهش تب و درد، ضداحتقان‌ها برای گرفتگی بینی، ضدهیستامین‌ها برای آبریزش بینی، و ضد سرفه برای سرفه‌های خشک استفاده می‌شوند. مصرف کافی مایعات نیز برای جلوگیری از کم‌آبی حیاتی است."
    },
    {
      question: "آیا می‌توانم داروهای ضدویروسی را بدون نسخه پزشک مصرف کنم؟",
      answer: "خیر، داروهای ضدویروسی مانند تامیفلو داروهای تجویزی هستند و باید با تجویز پزشک مصرف شوند. پزشک بر اساس شدت علائم، سابقه پزشکی و عوامل خطر، مناسب‌ترین درمان را تعیین می‌کند."
    },
    {
      question: "آیا امکان ویزیت پزشک در منزل برای درمان آنفولانزا وجود دارد؟",
      answer: "بله، نوید زندگی خدمات ویزیت پزشک در منزل را ارائه می‌دهد. این خدمت به‌ویژه برای بیماران آنفولانزایی که توانایی مراجعه به مطب را ندارند یا برای جلوگیری از انتقال ویروس به دیگران، بسیار مناسب است."
    }
  ];

  const relatedArticles = [
    {
      title: "پیشگیری از آنفولانزا",
      description: "راهکارهای علمی پیشگیری از آنفولانزا: واکسیناسیون، بهداشت و تقویت ایمنی",
      image: fluPreventionImage,
      link: "/articles/influenza-prevention",
      category: "پیشگیری"
    },
    {
      title: "نرخ مرگ و میر آنفولانزا",
      description: "آمار جهانی مرگ و میر آنفولانزا، گروه‌های پرخطر و تأثیر واکسیناسیون",
      image: fluMortalityImage,
      link: "/articles/influenza-mortality",
      category: "آمار و اطلاعات"
    },
    {
      title: "درمان آنفولانزا در منزل",
      description: "راهکارهای درمانی و مراقبتی برای بهبود سریع آنفولانزا در خانه",
      image: influenzaImage,
      link: "/articles/influenza-treatment",
      category: "بیماری‌های عفونی"
    }
  ];

  return (
    <div className="bg-background">
      <Header />
      <FloatingContact />
      <SEOHead
        title="داروهای درمان آنفولانزا: ضدویروسی‌ها و درمان‌های حمایتی - نوید زندگی"
        description="راهنمای جامع داروهای درمان آنفولانزا شامل تامیفلو، زانامیویر، بالوکساویر و درمان‌های حمایتی برای کاهش علائم"
        keywords="داروی آنفولانزا، تامیفلو، اوسلتامیویر، داروی ضدویروسی، درمان آنفولانزا، زانامیویر، بالوکساویر، ضدتب، درمان سرماخوردگی"
        canonical="https://navidzendegi.com/articles/influenza-medications"
        ogType="article"
        publishedTime="2024-12-09T10:00:00Z"
        modifiedTime="2024-12-09T10:00:00Z"
        author="نوید زندگی"
      />
      <ArticleSchema
        title="تأثیر داروها در درمان آنفولانزا: ضدویروسی‌ها، درمان‌های حمایتی و نکات مهم"
        description="راهنمای جامع داروهای درمان آنفولانزا و نحوه استفاده صحیح از آن‌ها"
        publishedTime="2024-12-09T10:00:00Z"
        modifiedTime="2024-12-09T10:00:00Z"
        image={fluMedicationsImage}
        author="نوید زندگی"
      />

      <main className="pt-20 md:pt-24">
        <article className="container mx-auto px-4 py-8 max-w-4xl" dir="rtl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              تأثیر داروها در درمان آنفولانزا
            </h1>

            <LazyImage
              src={fluMedicationsImage}
              alt="داروهای ضدویروسی درمان آنفولانزا مانند تامیفلو"
              className="w-full h-[400px] object-cover rounded-lg my-6"
            />

            <p className="text-lg text-muted-foreground leading-relaxed">
              داروهای مورد استفاده در درمان آنفولانزا عمدتاً شامل <strong>داروهای ضدویروسی (Antivirals)</strong> برای هدف قرار دادن مستقیم ویروس و <strong>داروهای حمایتی</strong> برای کاهش علائم و مدیریت عوارض هستند.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ۱. داروهای ضدویروسی (Antivirals)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              داروهای ضدویروسی درمان خط مقدم برای آنفولانزا هستند و به‌طور خاص علیه ویروس آنفولانزا عمل می‌کنند. این داروها در صورتی که <strong>ظرف ۴۸ ساعت اولیه</strong> پس از شروع علائم مصرف شوند، بیشترین اثربخشی را دارند.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3">مکانیسم و اثرات اصلی</h3>
            <div className="space-y-4 mr-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">مهار انتشار ویروس</h4>
                <p className="text-muted-foreground leading-relaxed">
                  این داروها با مهار آنزیمی به نام <strong>نورآمینیداز (Neuraminidase)</strong>، از رها شدن و انتشار ذرات ویروسی جدید از سلول‌های آلوده جلوگیری می‌کنند.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">کاهش شدت و مدت بیماری</h4>
                <p className="text-muted-foreground leading-relaxed">
                  مصرف به موقع داروهای ضدویروسی می‌تواند <strong>دوره بیماری را ۱ تا ۲ روز کاهش داده</strong> و شدت علائم و خطر بروز عوارض جدی (مانند ذات‌الریه و نیاز به بستری شدن) را به‌طور قابل توجهی کم کند.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">درمان و پیشگیری</h4>
                <p className="text-muted-foreground leading-relaxed">
                  این داروها همچنین می‌توانند به عنوان پیشگیری پس از مواجهه (Post-exposure Prophylaxis) در افرادی که در تماس نزدیک با فرد آلوده بوده‌اند و در معرض خطر بالا قرار دارند، تجویز شوند.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-3">داروهای رایج ضدویروسی</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-right font-semibold">داروی رایج</th>
                    <th className="border border-border p-3 text-right font-semibold">نحوه تجویز</th>
                    <th className="border border-border p-3 text-right font-semibold">مکانیسم عمل</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3"><strong>اوسلتامیویر (Oseltamivir - تامیفلو)</strong></td>
                    <td className="border border-border p-3">خوراکی (کپسول)</td>
                    <td className="border border-border p-3">مهارکننده نورآمینیداز</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3"><strong>زانامیویر (Zanamivir)</strong></td>
                    <td className="border border-border p-3">استنشاقی</td>
                    <td className="border border-border p-3">مهارکننده نورآمینیداز</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong>بالوکساویر ماربوکسیل (Baloxavir Marboxil - Xofluza)</strong></td>
                    <td className="border border-border p-3">خوراکی (تک دوز)</td>
                    <td className="border border-border p-3">مهارکننده اندونوکلئاز پلیمراز (مکانیسم جدیدتر)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ۲. درمان‌های حمایتی و کاهش علائم
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              این داروها علائم را مدیریت می‌کنند اما به طور مستقیم بر روی ویروس اثر نمی‌گذارند. هدف آن‌ها بهبود راحتی بیمار و جلوگیری از دهیدراتاسیون است.
            </p>

            <div className="space-y-4 mr-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">مسکن‌ها و ضدتب‌ها</h3>
                <p className="text-muted-foreground leading-relaxed">
                  داروهایی مانند <strong>استامینوفن (Acetaminophen)</strong> یا <strong>ایبوپروفن (Ibuprofen)</strong> برای کاهش تب، سردرد و دردهای عضلانی تجویز می‌شوند.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">ضداحتقان‌ها و ضدهیستامین‌ها</h3>
                <p className="text-muted-foreground leading-relaxed">
                  برای تسکین علائم سینوسی، آبریزش بینی و احتقان (گرفتگی) استفاده می‌شوند.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">ضد سرفه</h3>
                <p className="text-muted-foreground leading-relaxed">
                  برای مدیریت سرفه‌های خشک و آزاردهنده.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">آب‌رسانی</h3>
                <p className="text-muted-foreground leading-relaxed">
                  مصرف کافی مایعات برای جلوگیری از <strong>دهیدراتاسیون</strong> (کم‌آبی) که می‌تواند ناشی از تب و کاهش اشتها باشد، حیاتی است.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ۳. مدیریت آنتی‌بیوتیکی و عوارض ثانویه
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              آنفولانزا یک بیماری <strong>ویروسی</strong> است و داروهای <strong>آنتی‌بیوتیک</strong> (که علیه باکتری‌ها مؤثرند) بر روی ویروس آنفولانزا هیچ تأثیری ندارند و نباید به طور معمول تجویز شوند.
            </p>

            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">کاربرد آنتی‌بیوتیک</h3>
              <p className="text-muted-foreground leading-relaxed">
                آنتی‌بیوتیک‌ها تنها در صورتی تجویز می‌شوند که <strong>عوارض باکتریایی ثانویه</strong> ایجاد شده باشد؛ شایع‌ترین این عوارض، <strong>ذات‌الریه باکتریایی ثانویه</strong> است که پس از عفونت ویروسی اولیه رخ می‌دهد. تشخیص این حالت نیازمند ارزیابی بالینی و رادیوگرافی قفسه سینه است. برای اطلاعات بیشتر، مقاله <Link to="/articles/aspiration-pneumonia" className="text-primary hover:underline">ذات‌الریه آسپیراسیون</Link> را مطالعه کنید.
              </p>
            </div>
          </section>

          <section className="mb-8 p-4 bg-destructive/10 rounded-lg border border-destructive/30">
            <p className="text-foreground font-semibold">
              ⚠️ هشدار: از مصرف خودسرانه داروهای ضدویروسی یا آنتی‌بیوتیک خودداری کنید. تجویز این داروها باید توسط پزشک و بر اساس ارزیابی بالینی انجام شود. مصرف نادرست می‌تواند منجر به مقاومت دارویی و عوارض جانبی شود.
            </p>
          </section>

          <section className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Phone className="w-6 h-6 text-primary" />
              برای ویزیت پزشک و تجویز دارو
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              جهت هماهنگی برای <strong>ویزیت پزشک در منزل</strong> و دریافت تجویز صحیح داروهای آنفولانزا، همین حالا با نوید زندگی تماس بگیرید.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
            >
              <Phone className="ml-2 h-5 w-5" />
              تماس با {phoneNumber}
            </Button>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">منابع (References)</h3>
            <div className="text-sm text-muted-foreground space-y-2 mr-4">
              <p>[1] Influenza Antiviral Medications: Clinical Use. <em>Centers for Disease Control and Prevention (CDC)</em>.</p>
              <p>[2] Effectiveness of Antiviral Drugs in Reducing Severe Outcomes in Seasonal Influenza. <em>The Lancet Respiratory Medicine</em>.</p>
              <p>[3] Baloxavir Marboxil for Uncomplicated Influenza in Adults and Adolescents. <em>The New England Journal of Medicine (NEJM)</em>.</p>
              <p>[4] Clinical Management of Severe Acute Respiratory Infections. <em>World Health Organization (WHO) Guidelines</em>.</p>
              <p>[5] Antibiotic Use in Influenza. <em>JAMA (Journal of the American Medical Association)</em>.</p>
            </div>
          </section>

          <FAQSection faqs={faqs} />

          <div className="mt-12">
            <PricingInfo />
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default InfluenzaMedicationsPage;
