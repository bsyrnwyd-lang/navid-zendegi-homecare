import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import SEOSchema from "@/components/SEOSchema";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import angiographyVsAngioplastyImage from "@/assets/angiography-vs-angioplasty.jpg";

// Related article images - explicitly imported
import echoImage from "@/assets/echo-home-service.jpg";
import holterImage from "@/assets/holter-home-service.jpg";
import angiographyHistoryImage from "@/assets/angiography-history-technology.jpg";

const AngiographyVsAngioplastyPage = () => {
  const publishDate = "2025-01-30";
  
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تفاوت آنژیوگرافی و آنژیوپلاستی", url: "/articles/angiography-vs-angioplasty" }
  ];

  const faqs = [
    {
      question: "آیا آنژیوگرافی همان فنرگذاری است؟",
      answer: "خیر، آنژیوگرافی فقط تشخیصی است و برای دیدن انسداد رگ‌ها استفاده می‌شود. اگر گرفتگی شدید باشد، پزشک آنژیوپلاستی (فنرگذاری) انجام می‌دهد که درمانی است."
    },
    {
      question: "استنت قلب چیست و چرا لازم است؟",
      answer: "استنت یک فنر توری ظریف است که بعد از باز کردن رگ با بالون در محل گرفتگی قرار می‌گیرد تا رگ را باز نگه دارد و از بسته شدن مجدد جلوگیری کند."
    },
    {
      question: "بعد از استنت‌گذاری چه مراقبت‌هایی لازم است؟",
      answer: "مصرف منظم داروهای رقیق‌کننده خون، کنترل فشار خون و ریتم قلب با هولتر، و پیگیری منظم با متخصص قلب ضروری است."
    },
    {
      question: "آیا بعد از آنژیوپلاستی نیاز به بستری است؟",
      answer: "معمولاً یک شب بستری نیاز است تا از پایداری وضعیت قلب و عدم خونریزی از محل ورود کاتتر اطمینان حاصل شود."
    },
    {
      question: "چرا بعد از استنت هولتر لازم است؟",
      answer: "دستکاری رگ‌های قلب ممکن است باعث آریتمی‌های گذرا شود. هولتر ۲۴ ساعته کمک می‌کند تا از سلامت ریتم قلب مطمئن شویم."
    }
  ];

  const relatedArticles = [
    {
      title: "آنژیوگرافی؛ تاریخچه و تکنولوژی",
      slug: "/articles/angiography-history",
      image: angiographyHistoryImage
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      slug: "/services/echo",
      image: echoImage
    },
    {
      title: "هولتر مانیتورینگ قلب",
      slug: "/services/holter",
      image: holterImage
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تفاوت آنژیوگرافی و آنژیوپلاستی | استنت قلب چیست؟ | نوید زندگی"
        description="تفاوت آنژیوگرافی (تشخیصی) و آنژیوپلاستی (فنرگذاری)، استنت قلب چیست، مراقبت‌های قبل و بعد از عمل با خدمات اکو و هولتر در منزل نوید زندگی."
        keywords="تفاوت آنژیوگرافی و آنژیوپلاستی، فنر قلب، استنت قلب، آنژیوپلاستی چیست، اکو قبل از آنژیو، هولتر بعد از استنت"
        canonical="https://navidzendegi.ir/articles/angiography-vs-angioplasty"
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      
      <SEOSchema
        type="article"
        title="آنژیوگرافی در مقابل آنژیوپلاستی؛ تفاوت در چیست؟"
        description="راهنمای جامع تفاوت آنژیوگرافی و آنژیوپلاستی و خدمات پایش نوید زندگی"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={angiographyVsAngioplastyImage}
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
                src={angiographyVsAngioplastyImage} 
                alt="مقایسه آنژیوگرافی تشخیصی و آنژیوپلاستی درمانی"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                تاریخ انتشار: ۱۱ بهمن ۱۴۰۴
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-relaxed">
              آنژیوگرافی در مقابل آنژیوپلاستی؛ تفاوت در چیست؟
            </h1>

            <p className="text-xl leading-relaxed mb-8 text-foreground">
              اگر رگ‌های قلب را به لوله‌های آب یک ساختمان تشبیه کنیم، <strong>آنژیوگرافی</strong> مانند فرستادن یک دوربین کوچک برای پیدا کردن محل گرفتگی لوله است، اما <strong>آنژیوپلاستی</strong> عملیاتی است که برای باز کردن آن گرفتگی با ابزار مخصوص انجام می‌شود.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              بسیاری تصور می‌کنند این دو یکی هستند، در حالی که آنژیوگرافی «تشخیص» است و آنژیوپلاستی «درمان». مرکز <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> با ارائه پایش‌های تخصصی قبل و بعد از این پروسه‌ها، موفقیت درمان شما را تضمین می‌کند.
            </p>

            {/* آنژیوگرافی */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۱. آنژیوگرافی: مرحله شناسایی (Diagnostic)
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                <Link to="/articles/angiography-history" className="text-primary hover:underline">آنژیوگرافی</Link> صرفاً یک روش تصویربرداری پیشرفته است:
              </p>

              <ul className="space-y-4 text-lg mb-6 mr-6">
                <li>
                  • <strong>هدف:</strong> پیدا کردن محل دقیق انسداد، تعداد رگ‌های درگیر و شدت تنگی.
                </li>
                <li>
                  • <strong>روش:</strong> پزشک ماده حاجب را تزریق کرده و با اشعه ایکس فیلم‌برداری می‌کند.
                </li>
                <li>
                  • <strong>نتیجه:</strong> پزشک به شما می‌گوید که آیا رگ‌ها باز هستند، نیاز به دارو دارند، یا باید آنژیوپلاستی انجام شود.
                </li>
              </ul>
            </section>

            {/* آنژیوپلاستی */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۲. آنژیوپلاستی: مرحله بازسازی (Therapeutic)
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                اگر در حین آنژیوگرافی مشخص شود که رگی <strong>بیش از ۷۰ درصد</strong> بسته شده است، پزشک وارد مرحله آنژیوپلاستی می‌شود:
              </p>

              <ul className="space-y-4 text-lg mb-6 mr-6">
                <li>
                  • <strong>هدف:</strong> باز کردن مسیر مسدود شده و برقراری مجدد جریان خون.
                </li>
                <li>
                  • <strong>روش:</strong> یک بالن کوچک به محل گرفتگی فرستاده شده و باد می‌شود تا رسوبات به دیواره رگ بچسبند. سپس یک فنر توری ظریف به نام <strong>استنت (Stent)</strong> در آنجا قرار داده می‌شود تا رگ را باز نگه دارد.
                </li>
                <li>
                  • <strong>نتیجه:</strong> جریان خون به عضله قلب بازمی‌گردد و خطر سکته قلبی رفع می‌شود.
                </li>
              </ul>
            </section>

            {/* جدول مقایسه */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۳. مقایسه در یک نگاه
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-border text-right">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 font-bold">ویژگی</th>
                      <th className="border border-border p-3 font-bold text-primary">آنژیوگرافی</th>
                      <th className="border border-border p-3 font-bold text-secondary-foreground">آنژیوپلاستی</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">ماهیت</td>
                      <td className="border border-border p-3">تشخیصی (فقط نگاه کردن)</td>
                      <td className="border border-border p-3">درمانی (اصلاح مشکل)</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3 font-medium">زمان</td>
                      <td className="border border-border p-3">معمولاً ۲۰ تا ۳۰ دقیقه</td>
                      <td className="border border-border p-3">۱ تا ۳ ساعت</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">ابزار اصلی</td>
                      <td className="border border-border p-3">کاتتر و ماده حاجب</td>
                      <td className="border border-border p-3">بالن و استنت (فنر)</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3 font-medium">بستری</td>
                      <td className="border border-border p-3">ترخیص در همان روز</td>
                      <td className="border border-border p-3">۱ شب بستری</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* نقش نوید زندگی */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۴. نقش «نوید زندگی» در موفقیت این دو پروسه
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                چه قصد انجام آنژیوگرافی داشته باشید و چه استنت گذاشته باشید، مراقبت‌های تخصصی در منزل برای جلوگیری از عوارض ضروری است:
              </p>

              {/* قبل از عمل */}
              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">الف) آمادگی قبل از عمل: اکو و آزمایش در منزل</h3>
                <p className="text-foreground">
                  قبل از رفتن به بخش کت‌لب، باید از قدرت قلب (<Link to="/articles/ejection-fraction" className="text-primary hover:underline">EF</Link>) و سلامت کلیه‌ها مطمئن شد. متخصصین ما با انجام <Link to="/services/echo" className="text-primary hover:underline font-bold">اکوکاردیوگرافی در منزل</Link> و گرفتن <Link to="/services/blood-test" className="text-primary hover:underline font-bold">تست‌های خونی در محل</Link>، پرونده شما را برای یک عمل ایمن آماده می‌کنند.
                </p>
              </div>

              {/* پایش بعد از استنت */}
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">ب) پایش پس از استنت‌گذاری با هولتر</h3>
                <p className="text-foreground mb-4">
                  بعد از گذاشتن استنت، قلب باید با شرایط جدید سازگار شود:
                </p>
                <ul className="space-y-3">
                  <li>
                    • <strong>هولتر قلب:</strong> گاهی پس از باز شدن رگ، آریتمی‌های گذرایی رخ می‌دهد. ما با نصب <Link to="/services/holter" className="text-primary hover:underline font-bold">هولتر قلب در منزل</Link>، ریتم شما را ۲۴ ساعته پایش می‌کنیم.
                  </li>
                  <li>
                    • <strong>هولتر فشار خون:</strong> کنترل دقیق فشار خون بعد از آنژیوپلاستی برای جلوگیری از آسیب به رگِ تازه باز شده حیاتی است.
                  </li>
                </ul>
              </div>

              {/* سونوگرافی داپلر */}
              <div className="bg-accent/30 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">ج) سونوگرافی داپلر محل ورود کاتتر</h3>
                <p className="text-foreground">
                  یکی از عوارض شایع، خونریزی یا کبودی شدید در محل ورود کاتتر (مچ دست یا ران) است. متخصصین نوید زندگی با انجام <Link to="/articles/doppler-dvt" className="text-primary hover:underline font-bold">سونوگرافی داپلر در منزل</Link>، محل را از نظر وجود هماتوم یا لخته بررسی می‌کنند.
                </p>
              </div>
            </section>

            {/* هشدار */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-destructive">هشدار مهم</h3>
                  <p className="text-foreground">
                    هرگز بدون مشورت با پزشک متخصص، داروهای تجویزی پس از استنت را قطع نکنید. قطع ناگهانی داروهای رقیق‌کننده خون می‌تواند منجر به لخته شدن استنت و سکته قلبی شود. برای مشاوره با <a href="tel:09386117912" className="text-primary hover:underline font-bold">09386117912</a> تماس بگیرید.
                  </p>
                </div>
              </div>
            </div>

            {/* نتیجه‌گیری */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                نتیجه‌گیری
              </h2>
              
              <p className="text-lg leading-relaxed">
                آنژیوگرافی به ما می‌گوید مشکل کجاست و آنژیوپلاستی آن را حل می‌کند. اما مهم‌ترین بخش، <strong>حفظ این بهبودی</strong> است. مرکز نوید زندگی با پایش‌های تخصصی شامل <Link to="/services/echo" className="text-primary hover:underline">اکو</Link>، <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link> و <Link to="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی در محل</Link>، تضمین می‌کند که نتایج درمانی شما پایدار بماند.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                پکیج پایش قبل و بعد از آنژیوپلاستی
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                اکو، هولتر قلب، هولتر فشار خون و سونوگرافی داپلر در منزل
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
                <li>• American Heart Association (AHA): Angiogram vs. Angioplasty</li>
                <li>• WebMD: Heart Disease and the Role of Stents</li>
                <li>• Mayo Clinic: Coronary Angioplasty and Stents</li>
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

export default AngiographyVsAngioplastyPage;
