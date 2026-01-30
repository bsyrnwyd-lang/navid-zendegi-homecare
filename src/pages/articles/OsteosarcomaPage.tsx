import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import osteosarcomaImage from "@/assets/osteosarcoma-home-care.jpg";

// Related article images
import echoHomeImage from "@/assets/echo-home-service.jpg";
import holterHomeImage from "@/assets/holter-home-service.jpg";
import dopplerDVTImage from "@/assets/doppler-ultrasound-dvt.jpg";
import guillainBarreImage from "@/assets/guillain-barre-home-care.jpg";

const OsteosarcomaPage = () => {
  const publishDate = "2026-01-30";
  
  const faqs = [
    {
      question: "استئوسارکوم چیست؟",
      answer: "استئوسارکوم شایع‌ترین نوع سرطان استخوان است که معمولاً در استخوان‌های بلند بدن مانند زانو، ران و بازو رخ می‌دهد و اغلب در نوجوانان و جوانان دیده می‌شود."
    },
    {
      question: "چرا بیماران سرطان استخوان به پایش قلبی نیاز دارند؟",
      answer: "بسیاری از داروهای شیمی‌درمانی مانند آنتراسیکلین‌ها دارای سمیت قلبی هستند و می‌توانند به عضله قلب آسیب بزنند. اکوکاردیوگرافی و هولتر قلب برای پایش این عوارض ضروری است."
    },
    {
      question: "آیا می‌توان اکو قلب را در منزل انجام داد؟",
      answer: "بله، تیم نوید زندگی با دستگاه‌های پیشرفته پورتابل، اکوکاردیوگرافی را در منزل انجام می‌دهد تا قدرت پمپاژ قلب (EF) در طول شیمی‌درمانی پایش شود."
    },
    {
      question: "خطر لخته خون در بیماران سرطان استخوان چقدر است؟",
      answer: "بیماران سرطان استخوان به دلیل کم‌تحرکی و ماهیت بیماری در معرض خطر بالای لخته شدن خون (DVT) هستند که با سونوگرافی داپلر در منزل قابل تشخیص است."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل",
      link: "/articles/echo-home",
      image: echoHomeImage
    },
    {
      title: "هولتر قلب در منزل",
      link: "/articles/holter-guide",
      image: holterHomeImage
    },
    {
      title: "سونوگرافی داپلر و تشخیص DVT",
      link: "/articles/doppler-dvt",
      image: dopplerDVTImage
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead 
        title="استئوسارکوم (سرطان استخوان)؛ مراقبت داخلی و پایش قلب در منزل | نوید زندگی"
        description="مدیریت استئوسارکوم در منزل: پایش عوارض شیمی‌درمانی، اکوکاردیوگرافی برای سمیت قلبی، سونوگرافی داپلر برای DVT. تماس: ۰۹۳۸۶۱۱۷۹۱۲"
        keywords="استئوسارکوم, سرطان استخوان, شیمی درمانی قلب, اکو در منزل, هولتر قلب, متخصص داخلی در منزل, نوید زندگی"
        canonical="https://navidzendegi.com/articles/osteosarcoma"
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      <ArticleSchema 
        title="استئوسارکوم؛ تشخیص، مراقبت‌های داخلی و پایش قلب در منزل"
        description="راهنمای جامع مدیریت استئوسارکوم در منزل: نقش متخصص داخلی، پایش عوارض شیمی‌درمانی و اکو قلب"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={osteosarcomaImage}
      />

      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          <BreadcrumbNavigation 
            items={[
              { name: "صفحه اصلی", url: "/" },
              { name: "مقالات پزشکی", url: "/articles" },
              { name: "استئوسارکوم", url: "/articles/osteosarcoma" }
            ]}
          />

          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              استئوسارکوم؛ تشخیص، مراقبت‌های داخلی و پایش قلب در منزل
            </h1>
            <p className="text-muted-foreground mb-4">تاریخ انتشار: ۱۴۰۴/۱۱/۱۱</p>
            <img 
              src={osteosarcomaImage} 
              alt="مراقبت از بیمار سرطانی در منزل - خدمات پزشکی نوید زندگی"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </header>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-justify mb-6">
              <strong>استئوسارکوم</strong> شایع‌ترین نوع سرطان استخوان است که معمولاً در استخوان‌های بلند بدن (مانند زانو، ران و بازو) رخ می‌دهد. این بیماری هرچند اغلب در نوجوانان و جوانان دیده می‌شود، اما در افراد مسن نیز به عنوان یک عارضه ثانویه ممکن است بروز کند. مدیریت این بیماری فراتر از جراحی است؛ چرا که درمان‌های شیمی‌درمانی سنگین، تمام ارگان‌های بدن از جمله قلب، کلیه و کبد را تحت تأثیر قرار می‌دهند.
            </p>
            <p className="text-lg leading-relaxed text-justify mb-8">
              مرکز خدمات پزشکی <strong>نوید زندگی</strong> با اعزام <Link to="/services/internal" className="text-primary hover:underline">متخصص داخلی به منزل</Link> و انجام تست‌های تشخیصی پیشرفته، تلاش می‌کند تا مسیر سخت درمان را برای بیمار و خانواده او هموارتر و ایمن‌تر کند.
            </p>

            {/* Warning Box */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-destructive font-semibold mb-2">⚠️ هشدار مهم:</p>
              <p className="text-sm">هرگز بدون مشورت با پزشک متخصص اقدام به مصرف خودسرانه دارو یا خوددرمانی نکنید. محتوای این مقاله صرفاً جنبه آموزشی دارد.</p>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">۱. چرا بیماران استئوسارکوم به متخصص داخلی نیاز دارند؟</h2>
            <p className="text-base leading-relaxed text-justify mb-4">
              درمان استئوسارکوم معمولاً شامل شیمی‌درمانی پیش از جراحی و پس از آن است. متخصص داخلی در منزل بر موارد زیر نظارت دقیق دارد:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>مدیریت عوارض شیمی‌درمانی:</strong> کنترل تهوع، کم‌خونی و پیشگیری از عفونت به دلیل افت گلبول‌های سفید.</li>
              <li><strong>پایش سلامت کلیه و کبد:</strong> داروهای شیمی‌درمانی می‌توانند به این ارگان‌ها فشار وارد کنند که با <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</Link> به طور مرتب رصد می‌شود.</li>
              <li><strong>تغذیه و تقویت سیستم ایمنی:</strong> تنظیم رژیم غذایی تخصصی برای جلوگیری از تحلیل عضلانی در طول دوره درمان.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">۲. نقش حیاتی اکوکاردیوگرافی و هولتر قلب در طول درمان</h2>
            <p className="text-base leading-relaxed text-justify mb-4">
              بسیاری از داروهای مورد استفاده برای درمان استئوسارکوم (مانند خانواده آنتراسیکلین‌ها) دارای <strong>سمیت قلبی (Cardiotoxicity)</strong> هستند. این یعنی ممکن است به عضله قلب آسیب بزنند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">الف) اکوکاردیوگرافی (اکو) در منزل؛ پایش قدرت قلب</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>قبل از درمان:</strong> برای اطمینان از اینکه قلب توان تحمل شیمی‌درمانی را دارد، انجام <Link to="/articles/echo-home" className="text-primary hover:underline">اکو</Link> ضروری است.</li>
              <li><strong>حین درمان:</strong> متخصصین نوید زندگی با انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link>، کسر تخلیه‌ای قلب (EF) را به دقت اندازه می‌گیرند تا در صورت مشاهده کوچکترین افت در قدرت پمپاژ، دوز داروها با مشورت انکولوژیست تغییر یابد.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ب) هولتر مانیتورینگ قلب؛ شکار آریتمی‌های ناشی از دارو</h3>
            <p className="text-base leading-relaxed text-justify mb-4">
              داروهای سرطان و تغییرات الکترولیتی بدن می‌توانند باعث بی‌نظمی در ضربان قلب شوند.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>چرا هولتر؟</strong> با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، ریتم قلب بیمار را ۲۴ تا ۴۸ ساعت پایش می‌کنیم. این کار به‌ویژه برای بیمارانی که دچار تپش قلب، سرگیجه یا ضعف ناگهانی می‌شوند، حیاتی است تا از آریتمی‌های خطرناک پیشگیری شود.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">۳. سونوگرافی شکم و داپلر عروق در منزل</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>سونوگرافی شکم:</strong> برای بررسی سلامت کبد و طحال که در فرآیند درمان درگیر هستند.</li>
              <li><strong>داپلر عروق پا:</strong> بیماران مبتلا به سرطان استخوان به دلیل کم‌تحرکی و ماهیت بیماری، در معرض خطر لخته شدن خون (DVT) هستند. ما با <Link to="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی داپلر در منزل</Link>، عروق پا را بررسی می‌کنیم تا از آمبولی ریه جلوگیری شود.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">۴. علائم هشداردهنده که نیاز به ویزیت فوری دارند</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>درد استخوانی که شب‌ها شدیدتر می‌شود یا با فعالیت بهبود نمی‌یابد.</li>
              <li>تورم یا لمس توده در ناحیه مفاصل.</li>
              <li>تنگی نفس یا تپش قلب ناگهانی در حین دوره شیمی‌درمانی.</li>
              <li>تب بی‌دلیل و ضعف شدید.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">۵. مدیریت درد و کیفیت زندگی در منزل</h2>
            <p className="text-base leading-relaxed text-justify mb-6">
              یکی از چالش‌های بزرگ در استئوسارکوم، مدیریت درد است. متخصص داخلی نوید زندگی با تنظیم دقیق داروهای مسکن و مراقبت‌های حمایتی، تلاش می‌کند تا بیمار کمترین رنج را در محیط خانه متحمل شود.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">نتیجه‌گیری</h2>
            <p className="text-base leading-relaxed text-justify mb-6">
              مبارزه با استئوسارکوم یک نبرد همه‌جانبه است. جابه‌جایی مکرر بیماران سرطانی به مراکز درمانی، علاوه بر خستگی شدید، خطر ابتلا به عفونت‌های بیمارستانی را افزایش می‌دهد. مرکز نوید زندگی با فراهم کردن تمامی امکانات از جمله ویزیت متخصص داخلی، اکو، هولتر و سونوگرافی در منزل، یک چتر حمایتی کامل برای این بیماران ایجاد کرده است تا تمرکز اصلی خانواده فقط بر بهبودی عزیزشان باشد.
            </p>

            {/* References */}
            <div className="bg-muted/30 rounded-lg p-6 mt-8 mb-8">
              <h3 className="font-semibold mb-3">منابع معتبر علمی:</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>American Cancer Society (ACS): Osteosarcoma diagnosis and treatment.</li>
                <li>Mayo Clinic: Cardiovascular monitoring during chemotherapy.</li>
                <li>Journal of Clinical Oncology: Managing toxicities of bone cancer treatment.</li>
              </ul>
            </div>
          </article>

          {/* CTA Section */}
          <section className="bg-primary/5 rounded-lg p-8 text-center my-12">
            <h2 className="text-2xl font-bold mb-4">مراقبت از بیماران سرطانی در منزل</h2>
            <p className="text-muted-foreground mb-6">
              برای پایش قلبی و مدیریت عوارض شیمی‌درمانی در منزل با ما تماس بگیرید.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </section>

          {/* FAQ Section */}
          <section className="my-12">
            <FAQSection faqs={faqs} />
          </section>

          {/* Related Articles */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-6">مقالات مرتبط</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <Link 
                  key={index} 
                  to={article.link}
                  className="group block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="my-12 bg-muted/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">خدمات مرتبط در منزل</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Link to="/services/internal" className="text-primary hover:underline text-sm">متخصص داخلی در منزل</Link>
              <Link to="/services/echo-ecg" className="text-primary hover:underline text-sm">اکو و نوار قلب در منزل</Link>
              <Link to="/services/holter" className="text-primary hover:underline text-sm">هولتر قلب در منزل</Link>
              <Link to="/services/laboratory" className="text-primary hover:underline text-sm">آزمایش خون در منزل</Link>
              <Link to="/services/nursing" className="text-primary hover:underline text-sm">پرستاری در منزل</Link>
              <Link to="/cardiology" className="text-primary hover:underline text-sm">متخصص قلب در منزل</Link>
            </div>
          </section>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default OsteosarcomaPage;
