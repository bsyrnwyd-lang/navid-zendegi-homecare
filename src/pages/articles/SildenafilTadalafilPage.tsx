import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import SEOSchema from "@/components/SEOSchema";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import sildenfilTadalafilImage from "@/assets/sildenafil-tadalafil-article.jpg";

// Related article images
import drugInteractionsImage from "@/assets/drug-interactions-heart-prostate.jpg";
import holterImage from "@/assets/holter-home-service.jpg";
import echoImage from "@/assets/echo-home-service.jpg";

const SildenafilTadalafilPage = () => {
  const publishDate = "2025-01-30";
  
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "سیلدنافیل و تادالافیل", url: "/articles/sildenafil-tadalafil" }
  ];

  const faqs = [
    {
      question: "تفاوت اصلی سیلدنافیل و تادالافیل چیست؟",
      answer: "سیلدنافیل (ویاگرا) اثرش ۴ تا ۶ ساعت طول می‌کشد و غذا روی آن تأثیر دارد. تادالافیل (سیالیس) تا ۳۶ ساعت اثر دارد و غذا تأثیری بر آن ندارد."
    },
    {
      question: "آیا مصرف ویاگرا برای بیماران قلبی خطرناک است؟",
      answer: "اگر از داروهای نیترات (مانند زیرزبانی قلب) استفاده می‌کنید، مصرف ویاگرا و سیالیس ممنوع است چون باعث افت شدید فشار خون می‌شود. حتماً قبل از مصرف با متخصص قلب مشورت کنید."
    },
    {
      question: "چرا قبل از مصرف این داروها اکو قلب لازم است؟",
      answer: "فعالیت جنسی مانند ورزش سنگین برای قلب است. اگر قدرت پمپاژ قلب (EF) پایین باشد، این فعالیت می‌تواند خطرناک باشد. اکو توان قلب را مشخص می‌کند."
    },
    {
      question: "تداخل این داروها با قرص‌های پروستات چیست؟",
      answer: "داروهای پروستات مثل تامسولوسین و ترازوسین با سیلدنافیل و تادالافیل تداخل دارند و می‌توانند باعث افت فشار خون و سرگیجه شوند. فاصله زمانی بین مصرف آن‌ها لازم است."
    },
    {
      question: "آیا تادالافیل برای پروستات هم تجویز می‌شود؟",
      answer: "بله، تادالافیل ۵ میلی‌گرم روزانه برای درمان علائم بزرگی پروستات (BPH) تایید شده و به بهبود علائم ادراری کمک می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "تداخلات دارویی قلب و پروستات",
      slug: "/articles/drug-interactions-heart-prostate",
      image: drugInteractionsImage
    },
    {
      title: "هولتر مانیتورینگ قلب",
      slug: "/services/holter",
      image: holterImage
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      slug: "/services/echo",
      image: echoImage
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="سیلدنافیل و تادالافیل (ویاگرا و سیالیس) | تاریخچه و هشدارهای قلبی | نوید زندگی"
        description="راهنمای جامع سیلدنافیل و تادالافیل: تفاوت ویاگرا و سیالیس، تداخلات خطرناک با داروهای قلبی و نیترات، عوارض جانبی و نقش اکو و هولتر در پایش ایمنی."
        keywords="سیلدنافیل، تادالافیل، ویاگرا، سیالیس، تداخل دارویی قلب، عوارض ویاگرا، قرص ناتوانی جنسی، هولتر فشار خون، اکو قلب در منزل"
        canonical="https://navidzendegi.ir/articles/sildenafil-tadalafil"
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      
      <SEOSchema
        type="article"
        title="سیلدنافیل و تادالافیل؛ از آزمایشگاه‌های قلب تا اتاق خواب (تاریخچه، کاربرد و هشدارها)"
        description="راهنمای جامع داروهای PDE5 شامل سیلدنافیل و تادالافیل و خدمات پایش قلبی نوید زندگی"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={sildenfilTadalafilImage}
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
                src={sildenfilTadalafilImage} 
                alt="مشاوره پزشک درباره داروهای سیلدنافیل و تادالافیل"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                تاریخ انتشار: ۱۱ بهمن ۱۴۰۴
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-relaxed">
              سیلدنافیل و تادالافیل؛ از آزمایشگاه‌های قلب تا اتاق خواب (تاریخچه، کاربرد و هشدارها)
            </h1>

            <p className="text-xl leading-relaxed mb-8 text-foreground">
              داروهای مهارکننده آنزیم <strong>PDE5</strong> که با نام‌های تجاری مشهوری مثل <strong>ویاگرا (Viagra)</strong> و <strong>سیالیس (Cialis)</strong> شناخته می‌شوند، انقلابی در پزشکی ایجاد کردند. اما جالب است بدانید که هدف اولیه از ساخت این داروها، درمان ناتوانی جنسی نبود! این داروها ابتدا برای قلب ساخته شدند و امروزه نیز تداخلات آن‌ها با سیستم قلبی-عروقی، مهم‌ترین چالش پزشکان است.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              مرکز خدمات پزشکی <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> با ارائه <Link to="/services/internal" className="text-primary hover:underline">ویزیت متخصص</Link> و پایش‌های <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link> و <Link to="/services/echo" className="text-primary hover:underline">اکو در منزل</Link>، به شما کمک می‌کند تا از این داروها به صورت ایمن و بدون ریسک قلبی استفاده کنید.
            </p>

            {/* تاریخچه */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۱. تاریخچه: یک کشف تصادفی بزرگ
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                در اواخر دهه ۱۹۸۰، محققان شرکت <strong>فایزر</strong> در حال آزمایش روی داروی سیلدنافیل برای درمان <strong>آنژین صدری</strong> (درد قفسه سینه) و فشار خون بالا بودند.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">اتفاق غیرمنتظره</h3>
                <p className="text-lg leading-relaxed">
                  دارو در درمان درد قلب چندان موفق نبود، اما شرکت‌کنندگان در آزمایش، یک عارضه جانبی عجیب را گزارش کردند: <strong>بهبود قابل توجه در عملکرد جنسی</strong>.
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">تولد ویاگرا</h3>
                <p className="text-lg leading-relaxed">
                  در سال <strong>۱۹۹۸</strong>، سازمان غذا و داروی آمریکا (FDA) سیلدنافیل را به عنوان اولین قرص خوراکی برای درمان ناتوانی جنسی تایید کرد. چند سال بعد، در سال <strong>۲۰۰۳</strong>، تادالافیل با ماندگاری طولانی‌تر (معروف به «قرص آخر هفته») وارد بازار شد.
                </p>
              </div>
            </section>

            {/* جدول مقایسه */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۲. تفاوت‌های کلیدی سیلدنافیل و تادالافیل
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                هر دو دارو با شل کردن عروق خون‌رسانی را افزایش می‌دهند، اما در جزئیات متفاوتند:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-border text-right">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 font-bold">ویژگی</th>
                      <th className="border border-border p-3 font-bold text-primary">سیلدنافیل (ویاگرا)</th>
                      <th className="border border-border p-3 font-bold text-secondary-foreground">تادالافیل (سیالیس)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">زمان شروع اثر</td>
                      <td className="border border-border p-3">۳۰ تا ۶۰ دقیقه بعد از مصرف</td>
                      <td className="border border-border p-3">۳۰ دقیقه تا ۲ ساعت بعد</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3 font-medium">مدت ماندگاری</td>
                      <td className="border border-border p-3">۴ تا ۶ ساعت</td>
                      <td className="border border-border p-3 font-bold text-primary">تا ۳۶ ساعت</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">تأثیر غذا</td>
                      <td className="border border-border p-3 text-destructive">غذاهای چرب اثر را کم می‌کنند</td>
                      <td className="border border-border p-3 text-primary">غذا تأثیری ندارد</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3 font-medium">کاربرد دیگر</td>
                      <td className="border border-border p-3">فشار خون ریوی</td>
                      <td className="border border-border p-3">بزرگی پروستات (BPH)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* کاربردها */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۳. کاربردهای درمانی (فراتر از ناتوانی جنسی)
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                این داروها فقط برای عملکرد جنسی نیستند:
              </p>

              <ul className="space-y-4 text-lg mb-6 mr-6">
                <li>
                  • <strong>فشار خون شریانی ریوی (PAH):</strong> سیلدنافیل با باز کردن عروق ریه، فشار بر قلب را کم می‌کند.
                </li>
                <li>
                  • <strong>درمان علائم پروستات:</strong> تادالافیل (دوز روزانه ۵ میلی‌گرم) به شل شدن عضلات مثانه و پروستات کمک کرده و علائم ادراری را بهبود می‌بخشد. در این موارد، انجام <Link to="/articles/prostate-volume" className="text-primary hover:underline">سونوگرافی پروستات در منزل</Link> توسط تیم ما می‌تواند روند درمان را پایش کند.
                </li>
              </ul>
            </section>

            {/* خطرات */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۴. خطرات و تداخلات مرگبار (زنگ خطر برای بیماران قلبی)
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                این بخش <strong>حیاتی‌ترین بخش</strong> برای کاربران است. بزرگترین خطر این داروها، <strong>افت فشار خون شدید</strong> است.
              </p>

              {/* تداخل با نیترات */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-destructive">الف) تداخل با نیترات‌ها (خط قرمز)</h3>
                    <p className="text-foreground mb-4">
                      اگر برای قلب خود از داروهایی مثل <strong>زیرزبانی (نیتروگلیسیرین)</strong>، <strong>ایزوسورباید</strong> یا <strong>اسپری‌های قلبی</strong> استفاده می‌کنید، مصرف سیلدنافیل و تادالافیل می‌تواند باعث <strong>سقوط ناگهانی فشار خون، سکته قلبی یا مغزی</strong> شود.
                    </p>
                    <p className="text-foreground">
                      <strong>راهکار:</strong> متخصصین ما با نصب <Link to="/services/holter" className="text-primary hover:underline font-bold">هولتر فشار خون ۲۴ ساعته در منزل</Link>، نوسانات فشار شما را بررسی می‌کنند تا از ایمنی دوزهای تجویزی مطمئن شوند.
                    </p>
                  </div>
                </div>
              </div>

              {/* تداخل با آلفابلاکرها */}
              <div className="bg-accent/50 border border-accent rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3 text-accent-foreground">ب) تداخل با داروهای پروستات (آلفابلاکرها)</h3>
                <p className="text-foreground mb-4">
                  مصرف همزمان این داروها با داروهایی مثل <strong>ترازوسین</strong> یا <strong>تامسولوسین</strong> می‌تواند باعث سرگیجه شدید و غش کردن شود.
                </p>
                <p className="text-foreground">
                  ما با <Link to="/services/internal" className="text-primary hover:underline font-bold">ویزیت متخصص داخلی در منزل</Link>، تمام نسخه‌های شما را یکپارچه می‌کنیم تا تداخلات دارویی به حداقل برسد.
                </p>
              </div>

              {/* فشار بر قلب */}
              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">ج) فشار بر قلب</h3>
                <p className="text-foreground">
                  فعالیت جنسی خود به خود نوعی <strong>فعالیت ورزشی سنگین</strong> برای قلب محسوب می‌شود. اگر <Link to="/articles/ejection-fraction" className="text-primary hover:underline">کسر تخلیه‌ای قلب شما (EF)</Link> پایین است، حتماً قبل از مصرف، درخواست <Link to="/services/echo" className="text-primary hover:underline font-bold">اکوکاردیوگرافی در منزل</Link> بدهید تا توان پمپاژ قلب شما توسط متخصصین ما تایید شود.
                </p>
              </div>
            </section>

            {/* عوارض جانبی */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۵. عوارض جانبی شایع
              </h2>
              
              <ul className="space-y-3 text-lg mb-6 mr-6">
                <li>• <strong>سردرد</strong> و برافروختگی صورت</li>
                <li>• <strong>سوء هاضمه</strong> و گرفتگی بینی</li>
                <li>• <strong>تغییر در بینایی</strong> (آبی‌بینی) در مصرف سیلدنافیل</li>
                <li>• <strong>کمردرد</strong> و دردهای عضلانی (بیشتر در تادالافیل)</li>
              </ul>
            </section>

            {/* هشدار خوددرمانی */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-destructive">هشدار مهم</h3>
                  <p className="text-foreground">
                    هرگز بدون مشورت با پزشک و بدون بررسی وضعیت قلب، از این داروها استفاده نکنید. مصرف خودسرانه به خصوص در بیماران قلبی یا مصرف‌کنندگان نیترات می‌تواند کشنده باشد. برای مشاوره با <a href="tel:09386117912" className="text-primary hover:underline font-bold">09386117912</a> تماس بگیرید.
                  </p>
                </div>
              </div>
            </div>

            {/* نتیجه‌گیری */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                نتیجه‌گیری: هوشمندانه مصرف کنید
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                سیلدنافیل و تادالافیل داروهای ارزشمندی هستند، اما به شرطی که قربانیِ تداخلات قلبی نشوند. اگر بیماری قلبی دارید یا داروهای پروستات مصرف می‌کنید، <strong>بدون چک‌آپ قلبی</strong> از این داروها استفاده نکنید.
              </p>
              <p className="text-lg leading-relaxed">
                مرکز نوید زندگی با ارائه <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب</Link>، <Link to="/services/holter" className="text-primary hover:underline">هولتر فشار خون</Link> و <Link to="/services/echo" className="text-primary hover:underline">اکو در منزل</Link>، امنیت کامل را برای شما فراهم می‌کند تا با خیالی آسوده به درمان خود ادامه دهید.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                برای چک‌آپ قلبی قبل از مصرف این داروها تماس بگیرید
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
                <li>• FDA: Viagra (sildenafil citrate) Information</li>
                <li>• Harvard Health: Erectile dysfunction drugs and heart disease</li>
                <li>• European Society of Cardiology: Safety of PDE5 inhibitors in cardiac patients</li>
                <li>• British Journal of Clinical Pharmacology: History and evolution of Sildenafil</li>
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

export default SildenafilTadalafilPage;
