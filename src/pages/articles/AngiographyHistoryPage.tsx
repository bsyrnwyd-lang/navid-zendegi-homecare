import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import SEOSchema from "@/components/SEOSchema";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import angiographyImage from "@/assets/angiography-history-technology.jpg";

// Related article images
import echoImage from "@/assets/echo-home-service.jpg";
import holterImage from "@/assets/holter-home-service.jpg";
import dopplerImage from "@/assets/doppler-ultrasound-dvt.jpg";

const AngiographyHistoryPage = () => {
  const publishDate = "2025-01-30";
  
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "آنژیوگرافی", url: "/articles/angiography-history" }
  ];

  const faqs = [
    {
      question: "آنژیوگرافی با چه دستگاهی انجام می‌شود؟",
      answer: "آنژیوگرافی با دستگاه سی-آرم (C-Arm) در اتاق کت‌لب انجام می‌شود. این دستگاه شامل منبع اشعه ایکس، آشکارساز دیجیتال و سیستم انژکتور خودکار برای تزریق ماده حاجب است."
    },
    {
      question: "آیا آنژیوگرافی دردناک است؟",
      answer: "آنژیوگرافی معمولاً تحت بی‌حسی موضعی انجام می‌شود و بیمار بیدار است. ممکن است در لحظه تزریق ماده حاجب احساس گرما کنید اما درد شدیدی وجود ندارد."
    },
    {
      question: "آیا قبل از آنژیوگرافی اکو لازم است؟",
      answer: "بله، پزشک باید مطمئن شود که قلب تحمل این پروسه را دارد. اکو قدرت پمپاژ قلب (EF) را مشخص می‌کند و این اطلاعات برای انجام ایمن آنژیوگرافی ضروری است."
    },
    {
      question: "چرا بعد از آنژیوگرافی هولتر لازم است؟",
      answer: "دستکاری رگ‌های قلب ممکن است باعث نوسان ریتم قلب شود. هولتر ۲۴ ساعته پس از آنژیوگرافی کمک می‌کند تا از عدم بروز آریتمی‌های خطرناک مطمئن شویم."
    },
    {
      question: "آنژیوگرافی از پا بهتر است یا از دست؟",
      answer: "امروزه بیشتر آنژیوگرافی‌ها از مچ دست (رادیال) انجام می‌شود چون عوارض کمتری دارد و بیمار زودتر راه می‌افتد. اما در برخی موارد از کشاله ران (فمورال) استفاده می‌شود."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل",
      slug: "/services/echo",
      image: echoImage
    },
    {
      title: "هولتر مانیتورینگ قلب",
      slug: "/services/holter",
      image: holterImage
    },
    {
      title: "سونوگرافی داپلر در منزل",
      slug: "/articles/doppler-dvt",
      image: dopplerImage
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آنژیوگرافی؛ تاریخچه، تکنولوژی و شیوه‌های اجرا | دستگاه سی‌آرم و کت‌لب | نوید زندگی"
        description="راهنمای جامع آنژیوگرافی قلب: تاریخچه کشف، دستگاه سی‌آرم و کت‌لب، مراحل انجام، آمادگی قبل و مراقبت بعد با خدمات اکو و هولتر در منزل نوید زندگی."
        keywords="آنژیوگرافی قلب، دستگاه آنژیوگرافی، کت‌لب، سی‌آرم، تاریخچه آنژیوگرافی، اکو قبل از آنژیو، هولتر بعد از استنت، ماده حاجب"
        canonical="https://navidzendegi.ir/articles/angiography-history"
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      
      <SEOSchema
        type="article"
        title="آنژیوگرافی؛ سفر به اعماق رگ‌ها (تاریخچه، تکنولوژی و شیوه‌های اجرا)"
        description="راهنمای جامع آنژیوگرافی و خدمات پایش قلبی نوید زندگی"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={angiographyImage}
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
                src={angiographyImage} 
                alt="دستگاه آنژیوگرافی قلب و اتاق کت‌لب"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                تاریخ انتشار: ۱۱ بهمن ۱۴۰۴
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-relaxed">
              آنژیوگرافی؛ سفر به اعماق رگ‌ها (تاریخچه، تکنولوژی و شیوه‌های اجرا)
            </h1>

            <p className="text-xl leading-relaxed mb-8 text-foreground">
              <strong>آنژیوگرافی</strong> در واقع یک نقشه‌برداری دقیق از داخل رگ‌های خونی است. زمانی که پزشک شک می‌کند که رگی در قلب، مغز یا پا دچار گرفتگی شده است، از این روش برای مشاهده مستقیم انسداد استفاده می‌کند. اما این تکنولوژی از کجا شروع شد و امروزه با چه دستگاه‌هایی انجام می‌شود؟
            </p>

            <p className="text-lg leading-relaxed mb-8">
              مرکز خدمات پزشکی <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> با ارائه پکیج‌های تشخیصی پیش و پس از آنژیوگرافی شامل <Link to="/services/echo" className="text-primary hover:underline">اکو</Link>، <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link> و <Link to="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی</Link> در منزل، این اطمینان را به شما می‌دهد که این پروسه را با کمترین ریسک پشت سر بگذارید.
            </p>

            {/* تاریخچه */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۱. تاریخچه: شجاعتی که نوبل آفرید
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                تاریخچه آنژیوگرافی با یک حرکت جسورانه آغاز شد:
              </p>

              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">سال ۱۹۲۹ - آزمایش بر خود</h3>
                <p className="text-lg leading-relaxed">
                  یک پزشک جوان آلمانی به نام <strong>ورنر فورسمن</strong>، در مقابل مخالفت همکارانش، یک کاتتر (لوله باریک) را از رگ بازوی خود وارد کرد و آن را تا قلبش به جلو راند. او سپس به اتاق رادیولوژی رفت تا با اشعه ایکس از وجود کابل در قلبش عکس بگیرد!
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">توسعه و جایزه نوبل</h3>
                <p className="text-lg leading-relaxed">
                  این حرکت متهورانه پایه‏‌گذار <strong>«کاتتریزاسیون قلب»</strong> شد و در سال <strong>۱۹۵۶</strong> جایزه نوبل را برای او و همکارانش به ارمغان آورد. بعدها در دهه ۱۹۶۰، <strong>میسون اسونز</strong> به طور تصادفی با تزریق ماده حاجب به رگ‌های کرونر، اولین آنژیوگرافی مدرن را انجام داد.
                </p>
              </div>
            </section>

            {/* دستگاه */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۲. آنژیوگرافی با چه دستگاهی انجام می‌شود؟
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                دستگاه اصلی آنژیوگرافی <strong>دستگاه سی-آرم (C-Arm)</strong> نام دارد که در اتاقی به نام <strong>کت‌لب (Cath-Lab)</strong> قرار می‌گیرد. اجزای اصلی این سیستم عبارتند از:
              </p>

              <ul className="space-y-4 text-lg mb-6 mr-6">
                <li>
                  • <strong>منبع اشعه ایکس:</strong> که به دور بیمار می‌چرخد تا تصاویر ۳۶۰ درجه تهیه کند.
                </li>
                <li>
                  • <strong>آشکارساز دیجیتال (Flat Panel):</strong> تصاویر را با کیفیت بسیار بالا به مانیتورها منتقل می‌کند.
                </li>
                <li>
                  • <strong>سیستم انژکتور خودکار:</strong> برای تزریق دقیق «ماده حاجب» (مایعی که رگ‌ها را در تصویر روشن می‌کند).
                </li>
              </ul>
            </section>

            {/* شیوه انجام */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۳. شیوه انجام آنژیوگرافی؛ گام به گام
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                امروزه این کار معمولاً تحت <strong>بی‌حسی موضعی</strong> انجام می‌شود و بیمار کاملاً بیدار است:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-bold mb-2">۱. دسترسی</h4>
                  <p>پزشک از طریق رگ مچ دست (رادیال) یا رگ کشاله ران (فمورال) یک لوله بسیار ظریف را وارد بدن می‌کند.</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-bold mb-2">۲. هدایت</h4>
                  <p>کاتتر تحت پایش اشعه ایکس زنده، به سمت دهانه رگ‌های قلب هدایت می‌شود.</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-bold mb-2">۳. تزریق و تصویربرداری</h4>
                  <p>ماده حاجب تزریق شده و همزمان دستگاه عکس‌برداری می‌کند. در این لحظه رگ‌ها مثل شاخه‌های سیاه درخت روی مانیتور ظاهر می‌شوند.</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-bold mb-2">۴. تصمیم‌گیری</h4>
                  <p>اگر گرفتگی شدید باشد، پزشک ممکن است بلافاصله با استفاده از بالن و استنت (فنر) رگ را باز کند (<Link to="/articles/angiography-recovery-time" className="text-primary hover:underline">آنژیوپلاستی</Link>).</p>
                </div>
              </div>
            </section>

            {/* آمادگی و مراقبت */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۴. آمادگی و مراقبت‌های حیاتی با «نوید زندگی»
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                آنژیوگرافی یک روش تهاجمی است و آمادگی قبل و مراقبت بعد از آن در منزل بسیار حیاتی است:
              </p>

              {/* قبل از آنژیوگرافی */}
              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">الف) قبل از آنژیوگرافی: بررسی سلامت قلب و کلیه</h3>
                <p className="text-foreground mb-4">
                  پزشک باید مطمئن شود که قلب شما تحمل این پروسه را دارد و کلیه‌هایتان می‌تواند ماده حاجب را دفع کند.
                </p>
                <p className="text-foreground">
                  <strong>خدمات ما:</strong> متخصصین نوید زندگی با انجام <Link to="/services/echo" className="text-primary hover:underline font-bold">اکو در منزل</Link> قدرت پمپاژ قلب (<Link to="/articles/ejection-fraction" className="text-primary hover:underline">EF</Link>) را بررسی می‌کنند. همچنین انجام <Link to="/services/blood-test" className="text-primary hover:underline font-bold">آزمایش خون در منزل</Link> برای چک کردن سطح کراتینین (سلامت کلیه) قبل از اعزام به بیمارستان ضروری است.
                </p>
              </div>

              {/* بعد از آنژیوگرافی */}
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">ب) بعد از آنژیوگرافی: پایش ریتم و فشار خون</h3>
                <p className="text-foreground mb-4">
                  پس از ترخیص، بیمار ممکن است دچار نوسانات ضربان قلب یا افت فشار شود.
                </p>
                <ul className="space-y-3">
                  <li>
                    • <strong>هولتر قلب و فشار خون:</strong> ما با نصب <Link to="/services/holter" className="text-primary hover:underline font-bold">هولتر قلب در منزل</Link>، ریتم قلب بیمار را پس از دستکاری عروق پایش می‌کنیم تا از عدم بروز آریتمی مطمئن شویم.
                  </li>
                  <li>
                    • <strong>سونوگرافی داپلر:</strong> اگر آنژیوگرافی از طریق پا انجام شده باشد، بررسی محل ورود کاتتر با <Link to="/articles/doppler-dvt" className="text-primary hover:underline font-bold">سونوگرافی در منزل</Link> برای رد کردن خونریزی‌های داخلی (هماتوم) یا لخته ضروری است.
                  </li>
                </ul>
              </div>
            </section>

            {/* هشدار */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-destructive">هشدار مهم</h3>
                  <p className="text-foreground">
                    هرگز بدون مشورت با پزشک متخصص، خودسرانه اقدام به انجام یا عدم انجام آنژیوگرافی نکنید. این تصمیم باید توسط متخصص قلب و بر اساس بررسی‌های دقیق گرفته شود. برای مشاوره با <a href="tel:09386117912" className="text-primary hover:underline font-bold">09386117912</a> تماس بگیرید.
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
                آنژیوگرافی مسیری است که از یک خودآزمایی شجاعانه شروع شد و امروز به یک روش نجات‌بخش تبدیل شده است. مرکز نوید زندگی با ارائه پکیج‌های تشخیصی پیش و پس از آنژیوگرافی شامل <Link to="/services/echo" className="text-primary hover:underline">اکو</Link>، <Link to="/services/holter" className="text-primary hover:underline">هولتر</Link> و <Link to="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی در منزل</Link>، این اطمینان را به شما می‌دهد که این پروسه را با کمترین ریسک و بیشترین دقت پشت سر بگذارید.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                پکیج کامل پایش قبل و بعد از آنژیوگرافی
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                اکو، هولتر قلب، هولتر فشار خون و ویزیت متخصص در منزل
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
                <li>• American College of Cardiology (ACC): History of Cardiac Catheterization</li>
                <li>• Cleveland Clinic: Angiography Procedure and Equipment</li>
                <li>• Johns Hopkins Medicine: What to expect during a Coronary Angiogram</li>
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

export default AngiographyHistoryPage;
