import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import articleImage from "@/assets/children-fever-article.jpg";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import feverTrackingImage from "@/assets/fever-tracking-article.jpg";
import adultFeverImage from "@/assets/adult-fever-article.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";

const ChildrenFeverPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تب در کودکان", url: "/articles/children-fever" },
  ];

  const faqs = [
    {
      question: "تب در کودکان از چه دمایی به بالا خطرناک است؟",
      answer: "تب در کودکان به طور کلی به دمای مقعدی 38 درجه سانتی‌گراد یا بالاتر گفته می‌شود. در نوزادان زیر 28 روز، هر تبی اورژانس پزشکی محسوب می‌شود و نیاز به ارزیابی فوری دارد. تب بالای 40 درجه در کودکان بزرگتر نیز نیازمند مراجعه فوری به پزشک است."
    },
    {
      question: "دقیق‌ترین روش اندازه‌گیری تب در کودکان چیست؟",
      answer: "اندازه‌گیری مقعدی (رکتال) استاندارد طلایی برای اندازه‌گیری دمای مرکزی بدن در کودکان، به خصوص نوزادان زیر 3 ماه است. برای کودکان بزرگتر که قادر به همکاری هستند، اندازه‌گیری دهانی نیز مناسب است. اندازه‌گیری زیر بغلی کمترین دقت را دارد."
    },
    {
      question: "چه زمانی باید برای تب کودک فوراً به پزشک مراجعه کرد؟",
      answer: "در نوزادان زیر 28 روز، هر تبی نیازمند ارزیابی فوری است. در کودکان 1-3 ماهه، تب بالای 38 درجه باید توسط پزشک بررسی شود. همچنین تب بیش از 3 روز، علائمی مانند تشنج، سفتی گردن، تنگی نفس، لتارژی شدید یا بثورات پوستی نیازمند مراجعه فوری است."
    },
    {
      question: "آیا باید استامینوفن و ایبوپروفن را به صورت چرخه‌ای برای کودک استفاده کنم؟",
      answer: "استفاده چرخه‌ای همزمان از استامینوفن و ایبوپروفن مورد بحث است و برخی سازمان‌های معتبر آن را توصیه نمی‌کنند، زیرا خطر اشتباه در دوزبندی و مسمومیت را افزایش می‌دهد. هدف اصلی درمان تب، بهبود راحتی کودک است، نه لزوماً کاهش کامل دما. همیشه با پزشک مشورت کنید."
    },
    {
      question: "آیا تب بالا می‌تواند به مغز کودک آسیب برساند؟",
      answer: "شواهد علمی نشان می‌دهد که تب زیر 41 درجه سانتی‌گراد به خودی خود باعث آسیب مغزی نمی‌شود. والدین باید از ترس مفرط از تب (Fever Phobia) دوری کنند و بر وضعیت عمومی و راحتی کودک تمرکز نمایند."
    }
  ];

  const relatedArticles = [
    {
      title: "تب در بزرگسالان: راهنمای علمی تشخیص و رویکرد تخصصی",
      description: "راهنمای جامع و علمی تب در بزرگسالان با تمرکز بر تعاریف دقیق، علل و زمان مراجعه به پزشک",
      image: adultFeverImage,
      link: "/articles/adult-fever",
      category: "سلامت عمومی"
    },
    {
      title: "ردیابی تب و زمان مراجعه به پزشک در منزل",
      description: "آموزش روش‌های صحیح ثبت و پیگیری تب و تشخیص زمان مناسب برای دریافت خدمات پزشکی در منزل",
      image: feverTrackingImage,
      link: "/articles/fever-tracking",
      category: "مراقبت منزل"
    },
    {
      title: "واکسیناسیون کودکان در منزل: برنامه زمانی و اهمیت",
      description: "راهنمای کامل واکسیناسیون کودکان، برنامه زمانی واکسن‌ها و خدمات تزریق واکسن در منزل",
      image: vaccinationImage,
      link: "/articles/vaccination",
      category: "واکسیناسیون"
    }
  ];

  return (
    <>
      <SEOHead
        title="تب در کودکان: پروتکل‌های علمی برای تعریف، ارزیابی و مدیریت | نوید زندگی"
        description="راهنمای جامع علمی تب در کودکان: تعاریف دقیق بر اساس سن، روش‌های اندازه‌گیری، ملاحظات ویژه نوزادان، مدیریت تب و زمان مراجعه فوری به پزشک"
        keywords="تب کودکان, تب نوزاد, اندازه‌گیری تب, تب‌بر کودک, استامینوفن, ایبوپروفن, ویزیت پزشک اطفال در منزل, عفونت باکتریایی"
        canonical="https://navidzendegi.com/articles/children-fever"
        ogImage={articleImage}
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-20T12:00:00+03:30"
        modifiedTime="2025-01-20T12:00:00+03:30"
      />
      
      <ArticleSchema
        title="تب در کودکان: پروتکل‌های علمی برای تعریف، ارزیابی و مدیریت"
        description="راهنمای جامع علمی تب در کودکان: تعاریف دقیق بر اساس سن، روش‌های اندازه‌گیری، ملاحظات ویژه نوزادان، مدیریت تب و زمان مراجعه فوری به پزشک"
        publishedTime="2025-01-20T12:00:00+03:30"
        modifiedTime="2025-01-20T12:00:00+03:30"
        image={articleImage}
        author="نوید زندگی"
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          <article className="max-w-4xl mx-auto mt-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                تب در کودکان: پروتکل‌های علمی برای تعریف، ارزیابی و مدیریت
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>نویسنده: نوید زندگی</span>
                <span>•</span>
                <span>تاریخ انتشار: 20 دی 1403</span>
              </div>
              
              <img
                src={articleImage}
                alt="ارزیابی علمی تب در کودک توسط پزشک متخصص اطفال در منزل"
                className="w-full h-auto rounded-lg shadow-lg mb-6"
                width="1200"
                height="800"
              />
            </header>

            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-foreground">
                  برای <strong>ویزیت فوری پزشک اطفال در منزل</strong> و ارزیابی تخصصی کودک با <strong>تیم پزشکی نوید زندگی</strong> تماس بگیرید:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button asChild size="lg" className="text-lg">
                    <a href="tel:09386117912" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      تماس فوری: 09386117912
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/">
                      مشاهده خدمات پزشکی
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>تب (Fever)</strong> شایع‌ترین علامت در فوریت‌های کودکان است و اغلب باعث نگرانی والدین می‌شود. از نظر فیزیولوژیکی، تب به معنای <strong>افزایش تنظیم شده نقطه تنظیم حرارتی (Set Point)</strong> بدن در هیپوتالاموس است که عمدتاً توسط سیتوکین‌های تب‌زا (Pyrogenic Cytokines) در پاسخ به عفونت یا التهاب ایجاد می‌شود.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                در کودکان، تب به طور کلی به عنوان <strong>دمای مقعدی (Rectal Temperature) ≥ 38.0°C (100.4°F)</strong> یا بالاتر تعریف می‌شود. با این حال، سن کودک در ارزیابی اهمیت تب نقشی حیاتی دارد.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                تعریف و روش‌های اندازه‌گیری دما در کودکان
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                دقت در اندازه‌گیری دمای مرکزی بدن برای تشخیص صحیح تب در کودکان ضروری است:
              </p>

              <div className="bg-card border border-border rounded-lg overflow-hidden my-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="px-6 py-4 text-right font-bold text-foreground">روش اندازه‌گیری</th>
                        <th className="px-6 py-4 text-right font-bold text-foreground">استاندارد تب</th>
                        <th className="px-6 py-4 text-right font-bold text-foreground">توصیه برای استفاده</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-6 py-4 font-semibold">مقعدی (Rectal)</td>
                        <td className="px-6 py-4 text-primary font-bold">≥ 38.0°C (100.4°F)</td>
                        <td className="px-6 py-4">استاندارد طلایی، به خصوص در نوزادان زیر 3 ماه</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold">دهانی (Oral)</td>
                        <td className="px-6 py-4 text-primary font-bold">≥ 38.0°C (100.4°F)</td>
                        <td className="px-6 py-4">کودکان بزرگتر (بالای 4-5 سال) که قادر به همکاری هستند</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold">تمپانیک/گوشی (Tympanic)</td>
                        <td className="px-6 py-4 text-primary font-bold">≥ 38.0°C (100.4°F)</td>
                        <td className="px-6 py-4">مناسب برای کودکان بزرگتر، دقت وابسته به تکنیک صحیح</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold">شریان گیجگاهی (Temporal)</td>
                        <td className="px-6 py-4 text-primary font-bold">≥ 38.0°C (100.4°F)</td>
                        <td className="px-6 py-4">روش سریع و غیرتهاجمی، دقت متغیر</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold">زیر بغلی (Axillary)</td>
                        <td className="px-6 py-4 text-primary font-bold">≥ 37.2°C (99.0°F)</td>
                        <td className="px-6 py-4">کمترین دقت، فقط برای غربالگری اولیه</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                ملاحظات ویژه در نوزادان و کودکان خردسال
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                مهم‌ترین تمایز در طب کودکان، سن پایین و ریسک بالاتر ابتلا به <strong>بیماری جدی باکتریایی (Serious Bacterial Infection - SBI)</strong> است.
              </p>

              <div className="bg-card border-2 border-primary/30 rounded-lg p-6 my-8">
                <h3 className="text-2xl font-bold text-primary mb-4">🚨 نوزادان زیر 28 روز</h3>
                <p className="text-lg leading-relaxed mb-4">
                  تب در این گروه سنی <strong>اورژانس پزشکی</strong> در نظر گرفته می‌شود. حتی در صورت ظاهر شدن نوزاد در حالت عمومی خوب، پروتکل‌های بالینی توصیه می‌کنند که نوزاد باید برای ارزیابی کامل، از جمله:
                </p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li className="text-lg">آزمایش‌های خون</li>
                  <li className="text-lg">آزمایش ادرار</li>
                  <li className="text-lg">پونکسیون کمری - مایع مغزی نخاعی (LP)</li>
                  <li className="text-lg">اغلب بستری در بیمارستان</li>
                </ul>
                <p className="text-lg">
                  علت آن، <strong>سیستم ایمنی نابالغ</strong> و احتمال بالای گسترش سریع عفونت باکتریایی است.
                </p>
              </div>

              <div className="bg-accent/50 border border-border rounded-lg p-6 my-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">⚠️ کودکان 1 تا 3 ماهه</h3>
                <p className="text-lg leading-relaxed">
                  رویکرد بالینی پیچیده‌تر است و به <strong>وضعیت عمومی کودک</strong>، نتایج آزمایش‌های اولیه و وجود منابع تب (مانند عفونت‌های ویروسی واضح) بستگی دارد. برخی از نوزادان کم خطر ممکن است با بستری کمتر یا نظارت دقیق‌تر مدیریت شوند.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                مدیریت تب (Fever Management)
              </h2>

              <div className="bg-primary/10 border-r-4 border-primary p-6 my-8 rounded">
                <p className="text-foreground font-semibold text-lg">
                  <strong>هدف اصلی:</strong> هدف اصلی از درمان تب، نه لزوماً کاهش کامل دما، بلکه <strong>بهبود راحتی کودک</strong> است.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                تب‌برها (Antipyretics)
              </h3>

              <div className="space-y-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-xl font-bold text-primary mb-3">استامینوفن (Acetaminophen)</h4>
                  <p className="text-lg">
                    داروی خط اول، با دوز دقیق محاسبه شده بر اساس وزن کودک تجویز می‌شود. این دارو برای همه سنین از جمله نوزادان مناسب است.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-xl font-bold text-primary mb-3">ایبوپروفن (Ibuprofen)</h4>
                  <p className="text-lg">
                    داروی مؤثر دیگر، که <strong>نباید در نوزادان زیر 6 ماه</strong> استفاده شود. برای کودکان بالای 6 ماه با دوز مناسب وزن تجویز می‌شود.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 p-6 my-8 rounded-lg">
                <h4 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-3">⚠️ هشدار مهم</h4>
                <p className="text-lg text-amber-800 dark:text-amber-300">
                  استفاده چرخه‌ای (Alternate) از استامینوفن و ایبوپروفن به طور همزمان برای درمان تب بالا، <strong>مورد بحث بوده</strong> و برخی از سازمان‌های معتبر آن را توصیه نمی‌کنند زیرا خطر اشتباه در دوزبندی و مسمومیت را افزایش می‌دهد.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                اقدامات غیردارویی
              </h3>

              <ul className="list-disc pr-6 space-y-3 mb-8 text-lg">
                <li><strong>مایعات:</strong> تشویق به مصرف مایعات برای جلوگیری از کم‌آبی ضروری است. <Link to="/articles/iv-therapy-home" className="text-primary hover:underline">سرم تراپی در منزل</Link> در موارد شدید کم‌آبی می‌تواند مفید باشد.</li>
                <li><strong>لباس:</strong> پوشاندن لباس‌های سبک برای کمک به دفع حرارت بدن</li>
                <li><strong>استراحت:</strong> اجازه دادن به کودک برای استراحت کافی</li>
              </ul>

              <div className="bg-card border border-border rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-foreground mb-4">تب‌درمانی غیرضروری (Overtreatment)</h3>
                <p className="text-lg leading-relaxed">
                  شواهد علمی نشان می‌دهد که <strong>تب زیر 41.0°C به خودی خود باعث آسیب مغزی نمی‌شود</strong>. بنابراین، والدین باید از ترس مفرط از تب (Fever Phobia) دوری کنند و بر وضعیت عمومی و راحتی کودک تمرکز نمایند.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                توصیه‌های پزشکی در منزل (Home Medical Services)
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                در حالی که بسیاری از موارد تب ویروسی به مراقبت در منزل پاسخ می‌دهند، <Link to="/" className="text-primary hover:underline">خدمات تخصصی ویزیت پزشک اطفال در منزل</Link> و <Link to="/services/laboratory" className="text-primary hover:underline">انجام آزمایش در منزل</Link> می‌تواند در ارزیابی سریع و دقیق موارد زیر بسیار کارآمد باشد:
              </p>

              <Card className="my-8 bg-accent/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">چه زمانی نیاز به ویزیت پزشک در منزل دارید؟</h3>
                  <ul className="list-disc pr-6 space-y-2">
                    <li className="text-lg">نوزادان زیر 3 ماه با هر نوع تب</li>
                    <li className="text-lg">تب بالا و مداوم که به تب‌برها پاسخ نمی‌دهد</li>
                    <li className="text-lg">علائم همراه نگران‌کننده (تنگی نفس، سفتی گردن، لتارژی)</li>
                    <li className="text-lg">کودکانی که به دلیل تب در معرض خطر کم‌آبی هستند</li>
                    <li className="text-lg">تب بیش از 3 روز بدون بهبودی</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                منابع علمی (References)
              </h3>

              <div className="bg-card border border-border rounded-lg p-6 space-y-3 text-sm">
                <p>[1] El-Radhi, A. S. (2018). Fever in children: an evidence-based approach. Springer.</p>
                <p>[2] American Academy of Pediatrics (AAP). (2021). Fever and Antipyretic Use in Children. Pediatrics, 147(4), e2021051512.</p>
                <p>[3] Craig, J. V., et al. (2002). Temperature measurement in infants and children: a review of the literature. Journal of Advanced Nursing, 37(1), 22-38.</p>
                <p>[4] Baker, M. D., et al. (2024). Evaluation and management of fever in the neonate and young infant (less than 90 days of age). UpToDate.</p>
                <p>[5] Sullins, A. D., et al. (2018). Acetaminophen and ibuprofen in the management of fever and mild pain in children. Journal of Pediatric Pharmacology and Therapeutics, 23(1), 1-9.</p>
              </div>
            </div>

            <FAQSection faqs={faqs} />

            <div className="mt-12">
              <RelatedArticles articles={relatedArticles} />
            </div>

            <div className="mt-12">
              <PricingInfo />
            </div>
          </article>
        </main>

        <FloatingContact />
        <Footer />
      </div>
    </>
  );
};

export default ChildrenFeverPage;