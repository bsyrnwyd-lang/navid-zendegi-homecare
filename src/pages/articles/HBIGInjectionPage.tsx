import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Phone, Clock, Shield, Thermometer, AlertTriangle, Syringe, Baby, UserCheck } from "lucide-react";
import injectionHomeImage from "@/assets/iranian-injection-home.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";
import nursingImage from "@/assets/nursing-home-care.jpg";
import hivAidsImage from "@/assets/hiv-aids-article.jpg";

const HBIGInjectionPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تزریق HBIG در منزل", url: "/articles/hbig-injection" }
  ];

  const faqs = [
    {
      question: "داروی HBIG چیست؟",
      answer: "HBIG یا ایمونوگلوبولین هپاتیت B، یک فرآورده بیولوژیک حاوی آنتی‌بادی‌های غلیظ علیه ویروس هپاتیت B است که ایمنی فوری و موقت ایجاد می‌کند."
    },
    {
      question: "چه کسانی به تزریق HBIG نیاز دارند؟",
      answer: "نوزادان متولد شده از مادران آلوده، کادر درمان پس از مواجهه شغلی با سرسوزن آلوده، افراد پس از تماس جنسی محافظت‌نشده با فرد مبتلا، و بیماران پیوند کبد."
    },
    {
      question: "تفاوت HBIG با واکسن هپاتیت B چیست؟",
      answer: "HBIG ایمنی فوری و موقت (۲ تا ۶ ماه) ایجاد می‌کند و برای پیشگیری اورژانسی استفاده می‌شود، در حالی که واکسن ایمنی دائمی ایجاد می‌کند ولی زمان‌بر است."
    },
    {
      question: "چرا حفظ زنجیره سرد برای HBIG مهم است؟",
      answer: "داروی HBIG باید در دمای ۲ تا ۸ درجه سانتی‌گراد نگهداری شود. در غیر این صورت اثربخشی دارو کاهش می‌یابد یا از بین می‌رود."
    },
    {
      question: "تزریق HBIG در نوزادان چقدر فوری است؟",
      answer: "تزریق HBIG در نوزادان متولد شده از مادران آلوده باید در ۱۲ ساعت اول تولد انجام شود تا از انتقال ویروس جلوگیری کند."
    },
    {
      question: "آیا تزریق HBIG عوارض دارد؟",
      answer: "تزریق عموماً ایمن است. عوارض شایع شامل درد و تورم جزیی در محل تزریق و تب خفیف است. واکنش‌های آلرژیک نادر هستند."
    }
  ];

  const relatedArticles = [
    {
      title: "واکسیناسیون و اهمیت آن",
      description: "اهمیت واکسیناسیون در پیشگیری از بیماری‌های عفونی",
      image: vaccinationImage,
      link: "/articles/vaccination",
      category: "پیشگیری"
    },
    {
      title: "خدمات پرستاری در منزل",
      description: "انواع خدمات پرستاری قابل ارائه در منزل",
      image: nursingImage,
      link: "/services/nursing",
      category: "خدمات"
    },
    {
      title: "HIV و ایدز",
      description: "آنچه باید درباره اچ‌آی‌وی و ایدز بدانید",
      image: hivAidsImage,
      link: "/articles/hiv-aids",
      category: "بیماری‌ها"
    }
  ];

  return (
    <>
      <SEOHead
        title="تزریق HBIG در منزل | ایمونوگلوبولین هپاتیت B | نوید زندگی"
        description="تزریق داروی HBIG (ایمونوگلوبولین هپاتیت B) در منزل با حفظ زنجیره سرد و توسط کادر مجرب. خدمات ۲۴ ساعته در تهران. تماس: 09386117912"
        keywords="HBIG, ایمونوگلوبولین هپاتیت B, تزریق در منزل, هپاتیت B, پیشگیری هپاتیت, تزریقات منزل, نوید زندگی"
        canonical="https://navidzendegi.com/articles/hbig-injection"
        ogType="article"
        ogImage={injectionHomeImage}
      />
      <ArticleSchema
        title="تزریق داروی HBIG در منزل | ایمنی فوری و تخصصی"
        description="تزریق داروی HBIG با حفظ زنجیره سرد توسط کادر مجرب نوید زندگی در منزل شما"
        publishedTime="2024-12-22"
        modifiedTime="2024-12-22"
        image={injectionHomeImage}
      />
      <Header />
      <FloatingContact />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          {/* Hero Section */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              تزریق داروی HBIG (ایمونوگلوبولین هپاتیت B) در منزل؛ ایمنی فوری و تخصصی
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>نویسنده: تیم پزشکی نوید زندگی</span>
              <span>|</span>
              <time dateTime="2024-12-22">۱ دی ۱۴۰۳</time>
            </div>
            <img
              src={injectionHomeImage}
              alt="تزریق HBIG در منزل توسط پرستار مجرب"
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
            />
          </header>

          {/* Warning */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <p className="text-foreground">
                <strong>هشدار:</strong> هرگز داروی HBIG را بدون تجویز پزشک استفاده نکنید. تزریق این دارو نیازمند نظارت تخصصی است.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              آیا با فرد مبتلا به هپاتیت B تماس مشکوک داشته‌اید؟ یا نوزادتان در معرض خطر انتقال این ویروس است؟ در چنین شرایطی، <strong>زمان حیاتی‌ترین فاکتور است</strong>.
            </p>
            <p className="text-foreground leading-relaxed">
              مرکز خدمات پزشکی در منزل <Link to="/" className="text-primary hover:underline">نوید زندگی</Link>، داروی HBIG را با رعایت کامل زنجیره سرد و توسط کادر مجرب، در محیط امن منزل شما تزریق می‌کند.
            </p>
          </section>

          {/* What is HBIG */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">داروی HBIG چیست و چه کاربردی دارد؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              داروی HBIG (مخفف Hepatitis B Immune Globulin) یک فرآورده بیولوژیک حاوی آنتی‌بادی‌های غلیظ علیه ویروس هپاتیت B است. برخلاف واکسن که بدن را به مرور زمان ایمن می‌کند، این دارو <strong>ایمنی فوری و آماده</strong> را وارد بدن می‌کند تا از استقرار ویروس جلوگیری کند.
            </p>
          </section>

          {/* Who Needs HBIG */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">چه کسانی به تزریق فوری HBIG نیاز دارند؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              تزریق این دارو معمولاً در موارد اورژانسی زیر تجویز می‌شود:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Baby className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">نوزادان متولد شده از مادران آلوده</h3>
                  <p className="text-muted-foreground">برای جلوگیری از انتقال ویروس از مادر به نوزاد (باید در ۱۲ ساعت اول تولد تزریق شود).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Syringe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">مواجهه شغلی کادر درمان</h3>
                  <p className="text-muted-foreground">اصابت سرسوزن آلوده (Needle Stick) یا پاشیدن خون آلوده به چشم و مخاط.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <UserCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">تماس جنسی مشکوک</h3>
                  <p className="text-muted-foreground">برقراری رابطه محافظت‌نشده با فرد مبتلا یا ناقل.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">بیماران پیوند کبد</h3>
                  <p className="text-muted-foreground">جهت پیشگیری از عود مجدد بیماری در کبد جدید.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">چرا خدمات تزریق HBIG در منزل «نوید زندگی»؟</h2>
            <p className="text-foreground leading-relaxed mb-4">
              تزریق این دارو حساسیت بالایی دارد. انتخاب نوید زندگی برای این خدمت مزایای زیر را برای شما دارد:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Thermometer className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">حفظ زنجیره سرد</h3>
                  <p className="text-muted-foreground">داروی HBIG باید در دمای ۲ تا ۸ درجه سانتی‌گراد نگهداری شود. تیم ما با تجهیزات مخصوص، دارو را با حفظ سلامت کامل به منزل شما می‌آورد.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">پاسخگویی سریع</h3>
                  <p className="text-muted-foreground">با توجه به اینکه اثرگذاری HBIG به تزریق سریع (در ساعات اولیه مواجهه) بستگی دارد، تیم اعزامی ما در کمترین زمان ممکن در کنار شما خواهد بود.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Syringe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">تزریق توسط متخصص</h3>
                  <p className="text-muted-foreground">تزریق عضلانی این دارو در کودکان و بزرگسالان نیازمند دقت بالایی است تا از عوارض احتمالی جلوگیری شود.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">کاهش استرس و خطر آلودگی</h3>
                  <p className="text-muted-foreground">به جای مراجعه به مراکز درمانی شلوغ و قرارگیری در معرض سایر آلودگی‌ها، خدمات را در آرامش منزل دریافت کنید.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">تفاوت HBIG با واکسن هپاتیت B در یک نگاه</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">ویژگی</th>
                    <th className="border border-border p-3 text-right">داروی HBIG</th>
                    <th className="border border-border p-3 text-right">واکسن هپاتیت B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-medium">نوع ایمنی</td>
                    <td className="border border-border p-3">فوری و موقت (۲ تا ۶ ماه)</td>
                    <td className="border border-border p-3">دیررس اما دائمی</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3 font-medium">زمان مصرف</td>
                    <td className="border border-border p-3">بلافاصله پس از تماس با ویروس</td>
                    <td className="border border-border p-3">طبق برنامه زمان‌بندی روتین</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">نقش دارو</td>
                    <td className="border border-border p-3">پیشگیری اورژانسی (سپر دفاعی)</td>
                    <td className="border border-border p-3">آموزش سیستم ایمنی بدن</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-4">
              <p className="text-foreground">
                <strong>نکته مهم:</strong> متخصصان نوید زندگی معمولاً توصیه می‌کنند برای ایجاد ایمنی کامل، تزریق HBIG و واکسن هپاتیت به صورت همزمان (در دو محل مجزا) انجام شود.
              </p>
            </div>
          </section>

          {/* Side Effects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">عوارض احتمالی و مراقبت‌ها</h2>
            <p className="text-foreground leading-relaxed mb-4">
              تزریق این دارو عموماً ایمن است، اما ممکن است موارد زیر مشاهده شود:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
              <li>درد و تورم جزیی در محل تزریق</li>
              <li>تب خفیف</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              در صورت بروز هرگونه علائم آلرژیک، پرستاران اعزامی ما مجهز به کیت‌های اضطراری برای مدیریت شرایط هستند.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/10 rounded-xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">چطور درخواست خود را ثبت کنیم؟</h2>
            <p className="text-foreground text-center mb-6">
              اگر نیاز به مشاوره یا اعزام پرستار برای تزریق داروی HBIG در منزل دارید، همین حالا با کارشناسان ما در نوید زندگی تماس بگیرید.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:09386117912"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>تماس: 09386117912</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>خدمات ۲۴ ساعته در تمام نقاط تهران</span>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">خدمات مرتبط</h3>
            <div className="flex flex-wrap gap-2">
              <Link to="/services/nursing" className="text-primary hover:underline">خدمات پرستاری در منزل</Link>
              <span className="text-muted-foreground">|</span>
              <Link to="/articles/vaccination" className="text-primary hover:underline">واکسیناسیون</Link>
              <span className="text-muted-foreground">|</span>
              <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش در منزل</Link>
              <span className="text-muted-foreground">|</span>
              <Link to="/services/internal-medicine" className="text-primary hover:underline">ویزیت پزشک در منزل</Link>
            </div>
          </section>

          <FAQSection faqs={faqs} />
          <PricingInfo />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default HBIGInjectionPage;
