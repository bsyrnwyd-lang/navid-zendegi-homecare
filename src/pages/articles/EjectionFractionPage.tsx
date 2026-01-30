import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import SEOSchema from "@/components/SEOSchema";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import efImage from "@/assets/ef-ejection-fraction.jpg";

// Related article images
import echoImage from "@/assets/echo-home-service.jpg";
import holterImage from "@/assets/holter-home-service.jpg";
import heartValveImage from "@/assets/heart-valve-disease.jpg";

const EjectionFractionPage = () => {
  const publishDate = "2025-01-30";
  
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "عدد EF در اکو قلب", url: "/articles/ejection-fraction" }
  ];

  const faqs = [
    {
      question: "EF نرمال قلب چند درصد است؟",
      answer: "EF نرمال قلب بین ۵۵ تا ۷۰ درصد است. این یعنی در هر ضربان، قلب بین ۵۵ تا ۷۰ درصد از خون داخل بطن چپ را به سمت اعضای بدن پمپاژ می‌کند."
    },
    {
      question: "آیا EF زیر ۵۰ درصد خطرناک است؟",
      answer: "EF بین ۴۰ تا ۵۴ درصد نشان‌دهنده کاهش خفیف قدرت قلب است و نیاز به پایش و درمان دارد. EF زیر ۴۰ درصد جدی‌تر است و خطر نارسایی قلبی و آریتمی را افزایش می‌دهد."
    },
    {
      question: "چرا باید اکو در منزل انجام شود؟",
      answer: "بیماران با EF پایین با فعالیت بدنی و جابجایی دچار تنگی نفس می‌شوند. در منزل، بیمار در آرامش کامل است و متخصص می‌تواند دقیق‌ترین عدد EF را بدون استرس محیط درمانگاه استخراج کند."
    },
    {
      question: "آیا EF پایین قابل بهبود است؟",
      answer: "بله، با درمان دارویی صحیح (مثل داروهای نارسایی قلب)، اصلاح سبک زندگی و پایش مداوم با اکو، بسیاری از بیماران شاهد بهبود عدد EF خود هستند."
    },
    {
      question: "چه آزمایش‌هایی همراه با اکو برای بیماران EF پایین لازم است؟",
      answer: "هولتر قلب برای بررسی آریتمی، هولتر فشار خون برای تنظیم داروها، سونوگرافی داپلر پا برای بررسی لخته خون، و آزمایش خون (BNP، کلیه، کبد) توصیه می‌شود."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل",
      slug: "/articles/echo-safety-home",
      image: echoImage
    },
    {
      title: "هولتر مانیتورینگ قلب",
      slug: "/services/holter",
      image: holterImage
    },
    {
      title: "بیماری‌های دریچه‌ای قلب",
      slug: "/articles/heart-valve-disease",
      image: heartValveImage
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="عدد EF در اکو قلب چیست؟ | تفسیر کسر تخلیه‌ای | نوید زندگی"
        description="راهنمای کامل تفسیر عدد EF (کسر تخلیه‌ای) در اکوکاردیوگرافی: جدول درصدهای نرمال و غیرنرمال، علت EF پایین، نقش هولتر و اکو در منزل."
        keywords="تفسیر عدد EF در اکو، کسر تخلیه‌ای قلب نرمال، EF قلب چیست، اکو قلب در منزل، نارسایی قلبی، هولتر قلب، علت تنگی نفس"
        canonical="https://navidzendegi.ir/articles/ejection-fraction"
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      
      <SEOSchema
        type="article"
        title="عدد EF در اکو قلب چیست؟ تفسیر کسر تخلیه‌ای و معنای درصدهای آن"
        description="راهنمای کامل تفسیر عدد EF در اکوکاردیوگرافی و نقش خدمات نوید زندگی در مدیریت آن"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={efImage}
      />

      <SEOSchema
        type="faq"
        faqs={faqs}
      />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img 
                src={efImage} 
                alt="تفسیر عدد EF در اکوکاردیوگرافی"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                تاریخ انتشار: ۱۱ بهمن ۱۴۰۴
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-relaxed">
              عدد EF در اکو قلب چیست؟ تفسیر کسر تخلیه‌ای و معنای درصدهای آن
            </h1>

            <p className="text-xl leading-relaxed mb-8 text-foreground">
              زمانی که برگه اکوی قلب خود را دریافت می‌کنید، اولین عددی که پزشک به آن نگاه می‌کند <strong>EF</strong> است. این عدد نشان‌دهنده قدرت پمپاژ قلب شماست؛ یعنی در هر ضربان، چند درصد از خونی که داخل بطن چپ است، به سمت اعضای بدن پمپاژ می‌شود.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              بسیاری از بیماران تصور می‌کنند EF باید ۱۰۰% باشد، در حالی که قلب حتی در سالم‌ترین حالت هم تمام خون خود را تخلیه نمی‌کند. مرکز خدمات پزشکی <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> با انجام <Link to="/services/echo" className="text-primary hover:underline">اکوکاردیوگرافی تخصصی در منزل</Link>، این عدد را با دقت بالا محاسبه و تفسیر می‌کند.
            </p>

            {/* جدول EF */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۱. اعداد EF چه معنایی دارند؟ (جدول راهنما)
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                بر اساس استانداردهای <strong>انجمن قلب آمریکا (AHA)</strong>، تفسیر درصدهای EF به شرح زیر است:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-border text-right">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 font-bold">درصد EF</th>
                      <th className="border border-border p-3 font-bold">وضعیت قلب</th>
                      <th className="border border-border p-3 font-bold">معنای بالینی</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50 dark:bg-green-950/30">
                      <td className="border border-border p-3 font-bold text-green-700 dark:text-green-400">۵۵% تا ۷۰%</td>
                      <td className="border border-border p-3">نرمال (طبیعی)</td>
                      <td className="border border-border p-3">قلب با قدرت کافی خون را پمپاژ می‌کند.</td>
                    </tr>
                    <tr className="bg-yellow-50 dark:bg-yellow-950/30">
                      <td className="border border-border p-3 font-bold text-yellow-700 dark:text-yellow-400">۴۰% تا ۵۴%</td>
                      <td className="border border-border p-3">کاهش خفیف</td>
                      <td className="border border-border p-3">قدرت قلب کمی از حد نرمال کمتر است؛ نیاز به پایش دارد.</td>
                    </tr>
                    <tr className="bg-orange-50 dark:bg-orange-950/30">
                      <td className="border border-border p-3 font-bold text-orange-700 dark:text-orange-400">۳۵% تا ۳۹%</td>
                      <td className="border border-border p-3">کاهش متوسط</td>
                      <td className="border border-border p-3">نشان‌دهنده نارسایی قلبی خفیف تا متوسط است.</td>
                    </tr>
                    <tr className="bg-red-50 dark:bg-red-950/30">
                      <td className="border border-border p-3 font-bold text-red-700 dark:text-red-400">زیر ۳۵%</td>
                      <td className="border border-border p-3">کاهش شدید</td>
                      <td className="border border-border p-3">خطر آریتمی‌های خطرناک و نارسایی قلبی جدی.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* چرا EF پایین خطرناک است */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۲. چرا EF پایین خطرناک است؟
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                وقتی قلب نمی‌تواند خون را به خوبی پمپاژ کند (EF پایین)، خون در ریه‌ها یا پاها جمع می‌شود. این وضعیت منجر به علائم زیر می‌گردد:
              </p>

              <ul className="space-y-3 text-lg mb-6 mr-6">
                <li>• <strong>تنگی نفس</strong> (به‌ویژه هنگام دراز کشیدن)</li>
                <li>• <strong>ورم مچ پا و ساق پا</strong></li>
                <li>• <strong>خستگی زودرس</strong> حتی با فعالیت‌های سبک</li>
              </ul>
            </section>

            {/* نقش هولتر و سونوگرافی */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۳. نقش هولتر و سونوگرافی در کنار EF پایین
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                در مرکز نوید زندگی، ما معتقدیم عدد EF به تنهایی کافی نیست. اگر کسر تخلیه‌ای قلب شما پایین است، خدمات مکمل ما برای امنیت شما حیاتی هستند:
              </p>

              <h3 className="text-xl font-bold mb-4 text-foreground">
                الف) هولتر قلب؛ پیشگیری از ایست قلبی
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                بیمارانی که EF زیر ۳۵% دارند، در معرض خطر <strong>آریتمی‌های خطرناک</strong> (بی‌نظمی ضربان) هستند. ما با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، ریتم قلب بیمار را ۲۴ تا ۷۲ ساعت چک می‌کنیم تا اگر ضربان‌های اضافه‌ای وجود دارد که منجر به ایست قلبی می‌شود، سریعاً شناسایی و درمان شوند.
              </p>

              <h3 className="text-xl font-bold mb-4 text-foreground">
                ب) سونوگرافی داپلر پا و شکم
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                در بیماران با EF پایین، به دلیل گردش خون ضعیف، ریسک <strong>لخته شدن خون در پاها</strong> زیاد است. ما با <Link to="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی داپلر در منزل</Link>، عروق را چک می‌کنیم تا از لخته شدن خون (DVT) جلوگیری کنیم. همچنین سونوگرافی شکم برای بررسی ورم کبد ناشی از نارسایی قلبی انجام می‌شود.
              </p>

              <h3 className="text-xl font-bold mb-4 text-foreground">
                ج) هولتر فشار خون
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                مدیریت فشار خون در بیماری که EF پایین دارد بسیار حساس است. فشار نباید آنقدر بالا باشد که به قلب ضعیف فشار بیاورد و نه آنقدر پایین که بیمار غش کند. <Link to="/services/holter" className="text-primary hover:underline">هولتر فشار خون ۲۴ ساعته</Link> دقیق‌ترین راه برای تنظیم داروهاست.
              </p>
            </section>

            {/* آیا EF قابل بازگشت است */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۴. آیا EF قابل بازگشت است؟
              </h2>
              
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                <p className="text-lg leading-relaxed text-foreground">
                  <strong>خبر خوب:</strong> با درمان دارویی صحیح، اصلاح سبک زندگی و پایش مداوم، بسیاری از بیماران شاهد <strong>بهبود عدد EF</strong> خود هستند. متخصص داخلی و قلب نوید زندگی در ویزیت‌های دوره‌ای در منزل، با تنظیم دقیق داروها و انجام اکوهای کنترلی، روند بهبودی شما را رصد می‌کند.
                </p>
              </div>
            </section>

            {/* چرا اکو در منزل */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۵. چرا اکو در منزل برای چک‌آپ EF بهتر است؟
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                بیمارانی که قدرت قلب پایینی دارند، با فعالیت بدنی و جابه‌جایی در ترافیک دچار تنگی نفس و خستگی شدید می‌شوند.
              </p>

              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <p className="text-lg leading-relaxed">
                  <strong>راحتی و دقت:</strong> در منزل، بیمار در حالت استراحت کامل است و متخصص ما می‌تواند دقیق‌ترین عدد EF را در آرامش استخراج کند، بدون اینکه استرس محیط درمانگاهی روی ضربان قلب بیمار اثر بگذارد.
                </p>
              </div>
            </section>

            {/* هشدار خوددرمانی */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-destructive">هشدار مهم</h3>
                  <p className="text-foreground">
                    اگر EF شما زیر ۵۰% است، از مصرف خودسرانه داروها یا قطع ناگهانی آن‌ها خودداری کنید. تغییر دوز داروهای قلبی باید تحت نظر پزشک و با پایش منظم انجام شود. برای مشاوره با <a href="tel:09386117912" className="text-primary hover:underline font-bold">09386117912</a> تماس بگیرید.
                  </p>
                </div>
              </div>
            </div>

            {/* نتیجه‌گیری */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                نتیجه‌گیری
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                عدد EF آینه تمام‌نمای قدرت قلب شماست. اگر این عدد در گزارش اکوی شما زیر ۵۰% است، نیاز به مراقبت و پایش جدی دارید. مرکز نوید زندگی با ترکیب <Link to="/services/echo" className="text-primary hover:underline">اکو</Link>، <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب</Link> و <Link to="/services/internal" className="text-primary hover:underline">ویزیت متخصص در منزل</Link>، تمامی ابزارهای لازم برای تقویت قلب و افزایش کیفیت زندگی شما را به خانه می‌آورد.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                برای انجام اکو قلب و بررسی EF در منزل تماس بگیرید
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                پکیج کامل شامل اکو، هولتر قلب و فشار خون و ویزیت متخصص
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg text-xl font-bold"
              >
                <Phone className="ml-2 h-6 w-6" />
                09386117912
              </a>
            </section>

            {/* منابع */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-foreground">
                منابع معتبر علمی
              </h2>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• American Heart Association (AHA): Ejection Fraction Heart Failure Measurement</li>
                <li>• Mayo Clinic: Ejection fraction: What does it measure?</li>
                <li>• European Society of Cardiology (ESC): Guidelines for the diagnosis and treatment of acute and chronic heart failure</li>
              </ul>
            </section>
          </article>

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Related Articles */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">مقالات مرتبط</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <Link 
                  key={index} 
                  to={article.slug}
                  className="group block"
                >
                  <div className="rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default EjectionFractionPage;
