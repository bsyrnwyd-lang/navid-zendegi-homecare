import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import breastMassImage from "@/assets/breast-mass-article.jpg";
import skinMolesImage from "@/assets/skin-moles-article.jpg";
import skinItchingImage from "@/assets/skin-itching-article.jpg";
import rubellaPregnancyImage from "@/assets/rubella-pregnancy-article.jpg";

const BreastMassPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "توده‌های پستانی", url: "/articles/breast-mass" }
  ];

  const structuredData = {
    breadcrumbs: breadcrumbItems,
    article: {
      title: "توده‌های پستانی؛ علل، تشخیص و اهمیت پیگیری",
      description: "راهنمای جامع توده‌های پستانی، علل خوش‌خیم و بدخیم، علائم هشداردهنده، روش‌های تشخیص و خدمات پزشکی در منزل",
      author: "نوید زندگی",
      publishedDate: "2025-01-15",
      image: breastMassImage
    },
    faqs: [
      {
        question: "آیا هر توده پستانی بدخیم است؟",
        answer: "خیر، اکثر توده‌های پستانی خوش‌خیم هستند. فیبروآدنوم و کیست‌های پستانی از شایع‌ترین علل توده‌های خوش‌خیم هستند. با این حال، هر توده‌ای باید توسط پزشک بررسی شود تا احتمال بدخیمی رد گردد."
      },
      {
        question: "چه زمانی باید برای توده پستانی به پزشک مراجعه کنم؟",
        answer: "اگر توده سفت، ثابت و بدون درد باشد، تغییر در شکل یا اندازه پستان مشاهده کنید، ترشح خونی از نوک سینه داشته باشید، یا تغییرات پوستی مثل قرمزی یا فرورفتگی ببینید، فوراً به پزشک مراجعه کنید."
      },
      {
        question: "آیا می‌توانم در منزل توده پستانی را بررسی کنم؟",
        answer: "بله، با خدمات پزشکی در منزل می‌توانید توسط پزشک متخصص یا جراح عمومی در خانه معاینه شوید. همچنین می‌توانید برای آزمایش‌های تصویربرداری نیز هماهنگی کنید."
      },
      {
        question: "چه آزمایشاتی برای تشخیص توده پستانی لازم است؟",
        answer: "معمولاً معاینه بالینی، ماموگرافی (برای زنان بالای 40 سال)، سونوگرافی پستان، و در صورت مشکوک بودن توده، نمونه‌برداری (بیوپسی) انجام می‌شود."
      },
      {
        question: "هزینه ویزیت پزشک در منزل برای بررسی توده پستانی چقدر است؟",
        answer: "هزینه ویزیت بستگی به نوع خدمات و زمان مراجعه دارد. برای اطلاع از قیمت‌ها می‌توانید با شماره 09386117912 تماس بگیرید یا به صفحه تعرفه‌ها مراجعه کنید."
      }
    ]
  };

  const relatedArticles = [
    {
      title: "خال‌های پوستی؛ انواع، علائم هشدار و اهمیت بررسی در منزل",
      description: "راهنمای جامع خال‌های پوستی، قاعده ABCDE و بررسی خال‌ها با خدمات پزشکی در منزل",
      image: skinMolesImage,
      link: "/articles/skin-moles",
      category: "پوست و مو"
    },
    {
      title: "خارش پوستی؛ علل، تشخیص و درمان در منزل",
      description: "راهنمای جامع خارش پوستی، علل و خدمات پزشکی در منزل",
      image: skinItchingImage,
      link: "/articles/skin-itching",
      category: "پوست و مو"
    },
    {
      title: "ارتباط سرخچه و بارداری؛ خطرات، پیشگیری",
      description: "راهنمای جامع سرخچه در بارداری و خدمات پزشکی در منزل",
      image: rubellaPregnancyImage,
      link: "/articles/rubella-pregnancy",
      category: "سلامت مادر و کودک"
    }
  ];

  return (
    <>
      <SEOHead
        title="توده‌های پستانی؛ علل، تشخیص و اهمیت پیگیری | نوید زندگی"
        description="راهنمای جامع توده‌های پستانی، علل خوش‌خیم و بدخیم، علائم هشداردهنده، روش‌های تشخیص و خدمات پزشکی در منزل"
        keywords="توده پستانی، علل توده پستان، معاینه پستان در منزل، خدمات پزشکی در منزل، تشخیص سرطان سینه، فیبروآدنوم و کیست پستان"
        canonical="https://navidezendegi.com/articles/breast-mass"
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-15"
      />
      <StructuredData {...structuredData} />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <BreadcrumbNavigation items={breadcrumbItems} />
            
            <article className="max-w-4xl mx-auto">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  توده‌های پستانی؛ علل، تشخیص و اهمیت پیگیری
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <span>نوید زندگی</span>
                  <span>•</span>
                  <time dateTime="2025-01-15">۱۵ ژانویه ۲۰۲۵</time>
                  <span>•</span>
                  <span>سلامت زنان</span>
                </div>
                <img 
                  src={breastMassImage} 
                  alt="معاینه توده‌های پستانی - خدمات پزشکی در منزل"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
                />
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">مقدمه</h2>
                  <p className="leading-relaxed">
                    توده پستانی یکی از نگرانی‌های شایع در میان خانم‌هاست. لمس یا مشاهده برجستگی در سینه می‌تواند اضطراب زیادی ایجاد کند، چون بسیاری از افراد آن را با سرطان پستان مرتبط می‌دانند. با این حال، همه‌ی توده‌ها بدخیم نیستند و بسیاری از آن‌ها علل خوش‌خیم دارند. شناخت علل، روش‌های بررسی و اهمیت پیگیری به موقع، برای حفظ سلامت زنان بسیار ضروری است.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">علل شایع توده‌های پستانی</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">توده‌های خوش‌خیم</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>فیبروآدنوم (شایع‌ترین توده خوش‌خیم در زنان جوان)</li>
                        <li>کیست‌های پستانی</li>
                        <li>تغییرات فیبروکیستیک</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">توده‌های بدخیم</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>سرطان پستان (به‌ویژه در زنان بالای 40 سال)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">سایر علل</h3>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>عفونت‌ها یا آبسه پستان</li>
                        <li>تغییرات هورمونی (مثلاً در دوران قاعدگی یا بارداری)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">علائم هشداردهنده که نیاز به بررسی فوری دارند</h2>
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-red-800 dark:text-red-200">
                      <li>• توده‌ای که سفت، ثابت و بدون درد باشد</li>
                      <li>• تغییر در شکل یا اندازه پستان</li>
                      <li>• توکشیدگی نوک سینه یا ترشح خونی از آن</li>
                      <li>• تغییرات پوستی مثل قرمزی یا فرورفتگی پوست</li>
                      <li>• وجود توده همراه با بزرگی غدد لنفاوی زیر بغل</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">روش‌های تشخیص توده‌های پستانی</h2>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                    <ul className="space-y-3">
                      <li>
                        <strong>معاینه بالینی:</strong> توسط پزشک متخصص یا جراح عمومی
                      </li>
                      <li>
                        <strong>ماموگرافی:</strong> به‌ویژه برای زنان بالای 40 سال
                      </li>
                      <li>
                        <strong>سونوگرافی پستان:</strong> مناسب برای زنان جوان‌تر
                      </li>
                      <li>
                        <strong>نمونه‌برداری (بیوپسی):</strong> در صورت مشکوک بودن توده
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">نقش خدمات پزشکی در منزل</h2>
                  <p className="leading-relaxed mb-4">
                    با استفاده از خدمات پزشکی در منزل، شما می‌توانید:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li>• ویزیت پزشک عمومی یا متخصص در منزل برای بررسی توده‌های پستانی</li>
                    <li>• انجام آزمایش‌های خون و تصویربرداری در منزل (با هماهنگی مراکز همکار)</li>
                    <li>• دریافت مشاوره درباره مراحل بعدی تشخیص یا درمان</li>
                    <li>• پیگیری روند بیماری در محیط آرام خانه، بدون نیاز به رفت‌وآمدهای استرس‌زا</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">جمع‌بندی</h2>
                  <p className="leading-relaxed mb-4">
                    توده‌های پستانی همیشه نشانه سرطان نیستند، اما بی‌توجهی به آن‌ها خطرناک است. هر توده‌ای که در پستان لمس می‌شود باید توسط پزشک بررسی گردد. تشخیص زودهنگام می‌تواند از بروز مشکلات جدی پیشگیری کند.
                  </p>
                  <p className="leading-relaxed">
                    با استفاده از خدمات پزشکی در منزل <a href="https://navidezendegi.com" className="text-primary hover:underline">navidezendegi.com</a> می‌توانید بدون اتلاف وقت، در خانه خود معاینه و مشاوره پزشکی دریافت کنید.
                  </p>
                </section>

                <section className="bg-primary/5 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    نیاز به معاینه و مشاوره پزشکی دارید؟
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    پزشکان نوید زندگی آماده ارائه خدمات ویزیت و معاینه پزشکی در منزل شما هستند.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="tel:+989386117912" 
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      تماس برای مشاوره: ۰۹۳۸۶۱۱۷۹۱۲
                    </a>
                  </div>
                </section>
              </div>

              <FAQSection faqs={structuredData.faqs} />
              <RelatedArticles articles={relatedArticles} />
            </article>
          </div>
        </main>

        <FloatingContact />
        <Footer />
      </div>
    </>
  );
};

export default BreastMassPage;
