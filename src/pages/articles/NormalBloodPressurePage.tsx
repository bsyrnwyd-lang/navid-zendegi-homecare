import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import normalBPImage from "@/assets/normal-blood-pressure.jpg";
import bloodPressureImage from "@/assets/blood-pressure-article.jpg";
import highBPImage from "@/assets/high-blood-pressure-control.jpg";
import dashDietImage from "@/assets/dash-diet.jpg";
import { Link } from "react-router-dom";

const NormalBloodPressurePage = () => {
  const faqs = [
    {
      question: "فشار خون نرمال چه عددی است؟",
      answer: "فشار خون نرمال برای بزرگسالان معمولاً کمتر از 120 میلی‌متر جیوه (سیستولیک) و کمتر از 80 میلی‌متر جیوه (دیاستولیک) است. یعنی کمتر از 120/80 mmHg. اگر فشار خون شما در این محدوده باشد، ریسک بیماری‌های قلبی کمتر است."
    },
    {
      question: "چرا اندازه‌گیری منظم فشار خون مهم است؟",
      answer: "فشار خون بالا اغلب بدون علامت است و ممکن است فرد احساس خاصی نکند، در حالی که آسیب به قلب، عروق و کلیه‌ها وارد می‌شود. اندازه‌گیری منظم کمک می‌کند تا تغییرات را زودتر تشخیص دهید و از عوارض جدی پیشگیری کنید."
    },
    {
      question: "فشار خون افزایش یافته (Elevated) چیست؟",
      answer: "فشار خون افزایش یافته زمانی است که عدد سیستولیک بین 120-129 باشد و دیاستولیک کمتر از 80. این وضعیت هشداری است که نشان می‌دهد در صورت عدم اقدام، ممکن است به فشار خون بالا تبدیل شود."
    },
    {
      question: "چگونه می‌توانم فشار خون را در محدوده نرمال نگه دارم؟",
      answer: "برای حفظ فشار خون نرمال، رژیم غذایی سالم (کاهش نمک و افزایش میوه و سبزی)، فعالیت بدنی منظم (حداقل 150 دقیقه در هفته)، کنترل وزن، ترک سیگار، مدیریت استرس و خواب کافی ضروری است."
    },
    {
      question: "آیا می‌توانم فشار خون را در خانه اندازه‌گیری کنم؟",
      answer: "بله، استفاده از دستگاه فشار خون خانگی معتبر و تأیید شده توصیه می‌شود. حتماً پس از ۵ دقیقه استراحت، در حالت نشسته و بدون صحبت کردن اندازه‌گیری کنید. ثبت نتایج و گزارش به پزشک در ویزیت‌های بعدی بسیار مهم است."
    }
  ];

  const relatedArticles = [
    {
      title: "فشار خون بالا؛ علائم و روش‌های کنترل",
      description: "راهنمای کامل فشار خون بالا، علل، علائم و روش‌های درمانی",
      image: highBPImage,
      link: "/articles/high-blood-pressure-control",
      category: "قلب و عروق"
    },
    {
      title: "رژیم DASH؛ کاهش فشار خون با تغذیه صحیح",
      description: "راهنمای علمی رژیم غذایی DASH برای کنترل فشار خون",
      image: dashDietImage,
      link: "/articles/dash-diet",
      category: "تغذیه"
    },
    {
      title: "نکات مهم درباره فشار خون",
      description: "همه چیز درباره اندازه‌گیری و کنترل فشار خون",
      image: bloodPressureImage,
      link: "/articles/blood-pressure",
      category: "سلامت قلب"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="فشار خون نرمال چیست؟ راهنمای کامل اعداد ایدئال و روش‌های حفظ آن | نوید زندگی"
        description="فشار خون نرمال کمتر از 120/80 است. آشنایی با اعداد ایدئال فشار خون، روش‌های اندازه‌گیری صحیح و راهکارهای حفظ فشار خون در محدوده سالم. خدمات ویزیت پزشک در منزل."
        keywords="فشار خون نرمال, فشار خون طبیعی, اندازه‌گیری فشار خون, 120/80, فشار خون ایدئال, کنترل فشار خون, ویزیت پزشک در منزل"
        canonical="https://navidzendegi.ir/articles/normal-blood-pressure"
        ogType="article"
        publishedTime="2024-01-15"
        modifiedTime="2024-01-15"
      />
      
      <ArticleSchema 
        title="فشار خون نرمال؛ چه عددی «عادی» به شمار می‌آید و چرا اهمیت دارد؟"
        description="فشار خون نرمال یعنی کمتر از 120/80 mmHg برای بزرگسالان. راهنمای کامل حفظ فشار خون در محدوده سالم و پیشگیری از عوارض."
        publishedTime="2024-01-15"
        modifiedTime="2024-01-15"
        image="/assets/normal-blood-pressure.jpg"
      />
      
      <Header />
      
      <main className="pt-32 pb-16">
        <article className="container mx-auto max-w-4xl px-4">
          <BreadcrumbNavigation 
            items={[
              { name: "خانه", url: "/" },
              { name: "مقالات", url: "/articles" },
              { name: "فشار خون نرمال", url: "/articles/normal-blood-pressure" }
            ]}
          />

          <img 
            src={normalBPImage}
            alt="فشار خون نرمال - اندازه‌گیری فشار خون با دستگاه دیجیتال"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <h1 className="text-4xl font-bold text-foreground mb-6">
            فشار خون نرمال؛ چه عددی «عادی» به شمار می‌آید و چرا اهمیت دارد؟
          </h1>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">فشار خون چیست؟</h2>
              <p className="leading-relaxed">
                فشار خون، نیرویی است که خون به دیواره رگ‌ها وارد می‌کند. وقتی قلب می‌تپد و خون را به سمت رگ‌ها می‌فرستد، یک فشار ایجاد می‌شود که به آن <strong>فشار سیستولیک</strong> (عدد بالا) می‌گویند. وقتی قلب بین دو ضربان استراحت می‌کند، فشار کاهش می‌یابد که به آن <strong>فشار دیاستولیک</strong> (عدد پایین) می‌گویند.
              </p>
              <p className="leading-relaxed">
                اگر این اعداد بالا بروند یا خیلی پایین بیایند، می‌تواند نشانه‌ای از اختلال در سلامت قلب، عروق یا کلیه‌ها باشد.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">فشار خون نرمال دقیقاً چیست؟</h2>
              <p className="leading-relaxed">
                براساس راهنمایی‌های معتبر سازمان‌های بین‌المللی:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>
                  <strong>فشار خون نرمال</strong> برای بزرگسالان معمولاً <strong>کمتر از 120 میلی‌متر جیوه (سیستولیک)</strong> و <strong>کمتر از 80 میلی‌متر جیوه (دیاستولیک)</strong> است. یعنی کمتر از <strong>120/80 mmHg</strong>
                </li>
                <li>
                  اگر عدد سیستولیک بین <strong>120-129</strong> باشد و دیاستولیک کمتر از 80، این وضعیت «<strong>افزایش یافته</strong>» (Elevated) نامیده می‌شود و نیاز به توجه و اقدامات پیشگیرانه دارد
                </li>
                <li>
                  این اعداد ممکن است بر اساس سن، جنسیت و سابقه بیماری کمی متفاوت باشند، اما معیارهای کلی همان کمتر از 120/80 هستند
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">چرا دانستن فشار خون نرمال مهم است؟</h2>
              <p className="leading-relaxed">
                حفظ فشار خون در محدوده نرمال اهمیت زیادی دارد، چون:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>
                  <strong>کاهش ریسک بیماری‌های قلبی:</strong> وقتی فشار خون در محدوده نرمال باشد، احتمال ابتلا به <Link to="/articles/heart-attack-symptoms" className="text-primary hover:underline">حمله قلبی</Link>، <Link to="/articles/stroke-symptoms" className="text-primary hover:underline">سکته مغزی</Link>، نارسایی کلیه و آسیب عروق کمتر می‌شود
                </li>
                <li>
                  <strong>فشار خون بالا اغلب بدون علامت است:</strong> ممکن است فرد احساس خاصی نکند، ولی آسیب به بدن وارد شود. به همین دلیل فشار خون بالا را «قاتل خاموش» می‌نامند
                </li>
                <li>
                  <strong>پیشگیری زودهنگام:</strong> با اندازه‌گیری منظم و حفظ فشار خون در محدوده نرمال می‌توان از بروز <Link to="/articles/high-blood-pressure-control" className="text-primary hover:underline">فشار خون بالا</Link> و عوارض آن پیشگیری کرد
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">چگونه فشار خون نرمال نگه داشته شود؟</h2>
              <p className="leading-relaxed">
                چند نکته کاربردی برای حفظ فشار خون در محدوده سالم:
              </p>
              
              <h3 className="text-2xl font-bold mt-6 mb-3">۱. رژیم غذایی سالم</h3>
              <p className="leading-relaxed">
                کاهش مصرف نمک، افزایش مصرف میوه و سبزی، غلات کامل و پروتئین‌های سالم. <Link to="/articles/dash-diet" className="text-primary hover:underline">رژیم DASH</Link> یکی از بهترین رژیم‌های غذایی برای کنترل فشار خون است.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">۲. فعالیت بدنی منظم</h3>
              <p className="leading-relaxed">
                حداقل <strong>150 دقیقه ورزش متوسط در هفته</strong> برای بزرگسالان پیشنهاد می‌شود. پیاده‌روی، دوچرخه‌سواری یا شنا می‌توانند گزینه‌های مناسبی باشند.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">۳. کنترل وزن</h3>
              <p className="leading-relaxed">
                اگر وزن اضافه دارید، کاهش وزن می‌تواند به پایین آمدن فشار خون کمک کند. حتی کاهش ۵ کیلوگرم وزن می‌تواند تأثیر مثبتی داشته باشد.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">۴. ترک یا کاهش مصرف سیگار و الکل</h3>
              <p className="leading-relaxed">
                سیگار و مصرف بیش از حد الکل می‌توانند فشار خون را بالا ببرند و به عروق آسیب برسانند.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">۵. مدیریت استرس و خواب کافی</h3>
              <p className="leading-relaxed">
                استرس مداوم و خواب ناکافی می‌توانند فشار خون را افزایش دهند. تکنیک‌های آرام‌سازی مانند <Link to="/articles/yoga-heart-health" className="text-primary hover:underline">یوگا</Link>، مدیتیشن و تنفس عمیق مفید هستند.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-3">۶. اندازه‌گیری منظم فشار خون در منزل</h3>
              <p className="leading-relaxed">
                داشتن دستگاه فشار خون در منزل و ثبت نتایج می‌تواند به پیشگیری کمک کند، به‌ویژه اگر سابقه فشار خون دارید یا ریسک آن را دارید.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">نکات ویژه برای اندازه‌گیری صحیح فشار خون در منزل</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>
                  از دستگاه فشار خون <strong>معتبر و تأیید شده</strong> استفاده کنید
                </li>
                <li>
                  قبل از اندازه‌گیری، <strong>۵ دقیقه استراحت</strong> کنید
                </li>
                <li>
                  در حالت نشسته، با پشت تکیه‌داده به صندلی و پاها صاف روی زمین اندازه‌گیری کنید
                </li>
                <li>
                  حین اندازه‌گیری <strong>صحبت نکنید</strong>
                </li>
                <li>
                  بازوی خود را در ارتفاع قلب قرار دهید
                </li>
                <li>
                  حداقل <strong>دو بار اندازه‌گیری</strong> کنید و میانگین آن‌ها را ثبت نمایید
                </li>
                <li>
                  نتایج را در دفترچه یا برنامه موبایل <strong>ثبت کنید</strong> و در ویزیت‌های بعدی به پزشک گزارش دهید
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">خدمات ویزیت پزشک در منزل و کنترل فشار خون</h2>
              <p className="leading-relaxed">
                اگر از خدمات <Link to="/services/internal-medicine" className="text-primary hover:underline">ویزیت پزشک متخصص در منزل</Link> استفاده می‌کنید، این موارد را مد نظر قرار دهید:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>
                  پزشک می‌تواند فشار خون شما را به‌صورت تخصصی اندازه‌گیری و ارزیابی کند
                </li>
                <li>
                  اگر فشار خون شما نزدیک به مرز بالا یا بالا رفته است، پزشک می‌تواند برنامه شخصی‌سازی شده برای رژیم، فعالیت بدنی و بررسی داروها (اگر لازم باشد) پیشنهاد دهد
                </li>
                <li>
                  ویزیت در منزل به‌ویژه برای <Link to="/articles/elderly-care-guide" className="text-primary hover:underline">افراد سالمند</Link>، بیماران با مشکلات حرکتی، یا کسانی که نیاز به پایش منظم دارند، بسیار مناسب است
                </li>
                <li>
                  پزشک می‌تواند وضعیت کلی سلامت شما را بررسی و در صورت نیاز، آزمایش‌های تکمیلی درخواست کند
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">جمع‌بندی</h2>
              <p className="leading-relaxed">
                <strong>فشار خون نرمال یعنی کمتر از 120/80 mmHg</strong> برای بزرگسالان. نگه داشتن فشار خون در این محدوده یکی از پایه‌های سلامت قلب و عروق است و می‌تواند از بروز بیماری‌های جدی پیشگیری کند.
              </p>
              <p className="leading-relaxed">
                رعایت سبک زندگی سالم شامل تغذیه صحیح، ورزش منظم، کنترل وزن، ترک سیگار و مدیریت استرس، همراه با اندازه‌گیری منظم فشار خون در منزل و همکاری با پزشک، می‌تواند به شما کمک کند تا در محدوده ایمن باقی بمانید و از خطرات فشار خون بالا پیشگیری کنید.
              </p>
              <p className="leading-relaxed">
                برای کسب اطلاعات بیشتر یا دریافت <a href="tel:09386117912" className="text-primary hover:underline">خدمات ویزیت پزشک در منزل</a>، با نوید زندگی تماس بگیرید.
              </p>
            </section>

            <section className="bg-primary/5 p-6 rounded-lg mt-8">
              <h3 className="text-2xl font-bold mb-4">منابع (References)</h3>
              <ul className="space-y-2 text-sm">
                <li>"Understanding Blood Pressure Readings." American Heart Association</li>
                <li>"Reading the New Blood Pressure Guidelines." Harvard Health Publishing</li>
                <li>"What Is High Blood Pressure?" National Heart, Lung, and Blood Institute (NHLBI)</li>
                <li>"Blood Pressure: Types, Ranges & Readings." Cleveland Clinic</li>
                <li>"Blood Pressure Chart: What your reading means." Mayo Clinic</li>
              </ul>
            </section>
          </div>

          <FAQSection faqs={faqs} />
          
          <div className="mt-12">
            <PricingInfo />
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default NormalBloodPressurePage;
