import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Link } from "react-router-dom";
import { AlertTriangle, Phone, Clock, Shield, Syringe, Heart } from "lucide-react";
import tetanusImage from "@/assets/tetanus-article.jpg";

const TetanusPage = () => {
  const faqs = [
    {
      question: "کزاز چگونه منتقل می‌شود؟",
      answer: "کزاز از فردی به فرد دیگر منتقل نمی‌شود. باکتری کزاز در خاک، گرد و غبار و مدفوع حیوانات وجود دارد و از طریق زخم‌های باز وارد بدن می‌شود."
    },
    {
      question: "هر چند وقت یکبار باید واکسن کزاز بزنم؟",
      answer: "واکسن یادآور کزاز باید هر ۱۰ سال یکبار تزریق شود. در صورت جراحت آلوده، اگر بیش از ۵ سال از آخرین واکسن گذشته باشد، تزریق یادآور توصیه می‌شود."
    },
    {
      question: "علائم اولیه کزاز چیست؟",
      answer: "قفل شدن فک (ناتوانی در باز کردن دهان)، سفتی عضلات گردن و شکم، دشواری در بلع و اسپاسم‌های دردناک از علائم اولیه کزاز هستند."
    },
    {
      question: "آیا تزریق واکسن کزاز در منزل امکان‌پذیر است؟",
      answer: "بله، نوید زندگی خدمات تزریق واکسن و سرم کزاز را با حفظ زنجیره سرد در منزل ارائه می‌دهد. برای هماهنگی با شماره 09386117912 تماس بگیرید."
    },
    {
      question: "بعد از زخم آلوده چقدر زمان دارم برای تزریق واکسن؟",
      answer: "در صورت زخم آلوده، هرچه زودتر اقدام کنید بهتر است. ترجیحاً در ۲۴ ساعت اول و حداکثر تا ۷۲ ساعت پس از جراحت باید واکسن یا سرم تزریق شود."
    },
    {
      question: "سرم کزاز چیست و چه فرقی با واکسن دارد؟",
      answer: "سرم کزاز (TIG) آنتی‌بادی‌های آماده علیه سم کزاز است و اثر فوری دارد. واکسن کزاز باعث تولید آنتی‌بادی توسط خود بدن می‌شود و اثر طولانی‌مدت دارد."
    }
  ];

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بیماری کزاز", url: "/articles/tetanus" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="کزاز چیست؟ علائم، پیشگیری و تزریق واکسن در منزل | نوید زندگی"
        description="بیماری کزاز یک فوریت پزشکی است. علائم، راه‌های پیشگیری و خدمات تزریق واکسن کزاز در منزل توسط نوید زندگی. پانسمان تخصصی زخم و مراقبت ۲۴ ساعته."
        keywords="کزاز, واکسن کزاز, تزریق واکسن در منزل, سرم کزاز, پانسمان زخم, علائم کزاز, پیشگیری از کزاز"
        canonical="https://navidzendegi.com/articles/tetanus"
        ogType="article"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
      />
      
      <ArticleSchema
        title="کزاز چیست؟ علائم، پیشگیری و تزریق واکسن در منزل"
        description="بیماری کزاز یک فوریت پزشکی است. علائم، راه‌های پیشگیری و خدمات تزریق واکسن کزاز در منزل توسط نوید زندگی."
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
        image={tetanusImage}
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
            کزاز؛ بیماری خطرناکی که با یک زخم ساده آغاز می‌شود
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            آیا می‌دانستید باکتری کزاز می‌تواند از طریق یک خراش کوچک با وسیله‌ای زنگ‌زده یا حتی خاک آلوده وارد بدن شود؟ بیماری کزاز که به "قفل شدن فک" نیز معروف است، یک فوریت پزشکی است.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={tetanusImage} 
            alt="تزریق واکسن کزاز در منزل توسط پرستار نوید زندگی" 
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>

        {/* Warning Box */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-1">هشدار مهم</h3>
              <p className="text-sm text-foreground">
                کزاز یک فوریت پزشکی است. هرگز خوددرمانی نکنید. در صورت جراحت با اشیاء آلوده، فوراً برای تزریق واکسن یا سرم اقدام کنید. برای هماهنگی تزریق در منزل با شماره <a href="tel:09386117912" className="text-primary font-bold hover:underline">09386117912</a> تماس بگیرید.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">بیماری کزاز چیست؟</h2>
          <p className="text-foreground leading-relaxed mb-4">
            کزاز یک بیماری شدید است که توسط سم باکتری <strong>کلستریدیوم تتانی</strong> ایجاد می‌شود. این باکتری در خاک، گرد و غبار و مدفوع حیوانات وجود دارد. وقتی باکتری وارد یک زخم عمیق یا حتی سطحی شود، سمی تولید می‌کند که به اعصاب کنترل‌کننده عضلات حمله کرده و باعث گرفتگی‌های دردناک می‌شود.
          </p>
          <p className="text-foreground leading-relaxed">
            مرکز <Link to="/" className="text-primary hover:underline font-medium">نوید زندگی</Link> با ارائه <Link to="/services/nursing" className="text-primary hover:underline">خدمات پرستاری در منزل</Link> شامل پانسمان تخصصی و تزریق واکسن کزاز، امنیت سلامت شما را در کوتاه‌ترین زمان تضمین می‌کند.
          </p>
        </section>

        {/* Symptoms Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">علائم اصلی بیماری کزاز</h2>
          <p className="text-foreground leading-relaxed mb-4">
            علائم معمولاً بین <strong>۳ تا ۲۱ روز</strong> پس از آلودگی ظاهر می‌شوند. مهم‌ترین نشانه‌ها عبارتند از:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>قفل شدن فک (Trismus):</strong> ناتوانی در باز کردن دهان</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>اسپاسم عضلات گردن و شکم:</strong> سفت شدن شدید عضلات</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>لبخند کزاز (Risus Sardonicus):</strong> اسپاسم عضلات صورت که حالتی شبیه لبخند اجباری ایجاد می‌کند</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>دشواری در بلع:</strong> مشکل در قورت دادن غذا یا آب</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>تشنج‌های دردناک بدن:</strong> که ممکن است با صدا یا نور تحریک شود</span>
            </li>
          </ul>
        </section>

        {/* When to get vaccine */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">چه زمانی به تزریق واکسن کزاز نیاز داریم؟</h2>
          <p className="text-foreground leading-relaxed mb-4">
            بسیاری از افراد تصور می‌کنند کزاز فقط مربوط به میخ زنگ‌زده است، اما در موارد زیر حتماً باید برای تزریق واکسن یا یادآور اقدام کنید:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <Syringe className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold mb-2">بریدگی با اجسام فلزی</h3>
              <p className="text-sm text-muted-foreground">چاقو، ابزار کار، یا قطعات خودرو</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <Shield className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold mb-2">جراحت در محیط باز</h3>
              <p className="text-sm text-muted-foreground">هر زخمی که با خاک یا کود در تماس باشد</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <Heart className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold mb-2">گاز گرفتگی حیوانات</h3>
              <p className="text-sm text-muted-foreground">سگ، گربه یا سایر حیوانات</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <Clock className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold mb-2">گذشتن ۱۰ سال از آخرین واکسن</h3>
              <p className="text-sm text-muted-foreground">حتی بدون وجود زخم، هر ۱۰ سال یکبار</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">خدمات نوید زندگی برای پیشگیری از کزاز</h2>
          <p className="text-foreground leading-relaxed mb-4">
            در زمان بروز حادثه، استرس و جابه‌جایی بیمار می‌تواند خطرناک باشد. ما خدمات زیر را در محل شما ارائه می‌دهیم:
          </p>

          <div className="space-y-6">
            <div className="border-r-4 border-primary pr-4">
              <h3 className="text-xl font-bold text-foreground mb-2">۱. شست‌وشو و پانسمان تخصصی زخم</h3>
              <p className="text-foreground leading-relaxed">
                باکتری کزاز در محیط‌های بدون اکسیژن (زخم‌های عمیق) رشد می‌کند. <Link to="/services/nursing" className="text-primary hover:underline">پرستاران ما</Link> با متدهای علمی، زخم را کاملاً ضدعفونی کرده و بافت‌های مرده را جدا می‌کنند تا احتمال رشد باکتری به صفر برسد.
              </p>
            </div>

            <div className="border-r-4 border-primary pr-4">
              <h3 className="text-xl font-bold text-foreground mb-2">۲. تزریق واکسن و سرم کزاز (TIG)</h3>
              <p className="text-foreground leading-relaxed">
                اگر زخم آلوده باشد و بیمار واکسینه نشده باشد، نیاز به تزریق فوری سرم ضد کزاز (Tetanus Immunoglobulin) و واکسن همزمان وجود دارد. تیم ما با حفظ زنجیره سرد، دارو را به منزل شما آورده و <Link to="/articles/vaccination" className="text-primary hover:underline">تزریق واکسن</Link> را انجام می‌دهد.
              </p>
            </div>

            <div className="border-r-4 border-primary pr-4">
              <h3 className="text-xl font-bold text-foreground mb-2">۳. مراقبت‌های پرستاری ۲۴ ساعته</h3>
              <p className="text-foreground leading-relaxed">
                برای بیمارانی که دوران نقاهت پس از کزاز را می‌گذرانند، <Link to="/services/nursing" className="text-primary hover:underline">مراقبت‌های ویژه</Link> جهت مدیریت اسپاسم‌ها و تغذیه در منزل توسط کادر مجرب ما انجام می‌شود.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Guide Table */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">راهنمای سریع: با زخم مشکوک چه کنیم؟</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border p-3 text-right">مرحله</th>
                  <th className="border border-border p-3 text-right">اقدام لازم</th>
                  <th className="border border-border p-3 text-right">نقش نوید زندگی</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-bold">۱</td>
                  <td className="border border-border p-3">شست‌وشوی سریع زخم با آب و صابون</td>
                  <td className="border border-border p-3">راهنمایی تلفنی رایگان</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="border border-border p-3 font-bold">۲</td>
                  <td className="border border-border p-3">جلوگیری از خونریزی با پارچه تمیز</td>
                  <td className="border border-border p-3">اعزام سریع پرستار</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-bold">۳</td>
                  <td className="border border-border p-3">بررسی تاریخچه واکسیناسیون</td>
                  <td className="border border-border p-3">مشاوره توسط کارشناس</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="border border-border p-3 font-bold">۴</td>
                  <td className="border border-border p-3">تزریق یادآور یا آنتی‌توکسین</td>
                  <td className="border border-border p-3">انجام تزریق در منزل</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">چرا برای پیشگیری از کزاز به ما اعتماد کنید؟</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <Clock className="w-10 h-10 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">سرعت در اعزام</h3>
              <p className="text-sm text-muted-foreground">زمان در پیشگیری از کزاز حیاتی است</p>
            </div>
            <div className="text-center p-4">
              <Shield className="w-10 h-10 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">تجهیزات کامل</h3>
              <p className="text-sm text-muted-foreground">همراه داشتن تمامی اقلام پانسمان و داروهای اورژانسی</p>
            </div>
            <div className="text-center p-4">
              <Heart className="w-10 h-10 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">پیشگیری از عفونت</h3>
              <p className="text-sm text-muted-foreground">انجام رویه‌ها در محیط استریل منزل</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8 text-center">
          <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">
            همین حالا برای تزریق واکسن یادآور یا مدیریت جراحات تماس بگیرید
          </h2>
          <p className="text-muted-foreground mb-4">سلامتی شما، مأموریت ماست</p>
          <a 
            href="tel:09386117912" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            09386117912
          </a>
        </section>

        <FAQSection faqs={faqs} />

        <RelatedArticles 
          articles={[
            {
              title: "واکسیناسیون در منزل",
              description: "خدمات تزریق واکسن در منزل توسط پرستاران مجرب",
              image: "/placeholder.svg",
              link: "/articles/vaccination",
              category: "خدمات پزشکی"
            },
            {
              title: "مننژیت چیست؟",
              description: "علائم، تشخیص و درمان مننژیت",
              image: "/placeholder.svg",
              link: "/articles/meningitis",
              category: "بیماری‌های عفونی"
            },
            {
              title: "بیماری سل",
              description: "علائم، راه‌های انتقال و خدمات مراقبت در منزل",
              image: "/placeholder.svg",
              link: "/articles/tuberculosis",
              category: "بیماری‌های عفونی"
            }
          ]}
        />

        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default TetanusPage;
