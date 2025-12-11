import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import greenTeaHealthImage from "@/assets/green-tea-health-article.jpg";
import coffeeHeartImage from "@/assets/coffee-heart-article.jpg";
import mediterraneanDietImage from "@/assets/mediterranean-diet.jpg";
import vitaminEImage from "@/assets/vitamin-e-article.jpg";

const GreenTeaHealthPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "چای سبز و سلامت", url: "/articles/green-tea-health" }
  ];

  const faqs = [
    {
      question: "روزانه چقدر چای سبز مصرف کنیم؟",
      answer: "مصرف ۲ تا ۳ فنجان چای سبز در روز برای اکثر افراد بی‌خطر و مفید است. مصرف بیش از ۵ فنجان ممکن است به دلیل کافئین عوارضی ایجاد کند."
    },
    {
      question: "آیا چای سبز برای کاهش وزن موثر است؟",
      answer: "چای سبز می‌تواند متابولیسم را اندکی افزایش دهد، اما تأثیر آن بر کاهش وزن محدود است و باید همراه با رژیم غذایی مناسب و ورزش باشد."
    },
    {
      question: "بهترین زمان نوشیدن چای سبز چه موقعی است؟",
      answer: "بهترین زمان بین وعده‌های غذایی است. از مصرف چای سبز ناشتا و قبل از خواب به دلیل کافئین پرهیز کنید."
    },
    {
      question: "آیا چای سبز با داروها تداخل دارد؟",
      answer: "چای سبز می‌تواند با داروهای رقیق‌کننده خون، داروهای فشار خون و برخی آنتی‌بیوتیک‌ها تداخل داشته باشد. قبل از مصرف منظم با پزشک مشورت کنید."
    },
    {
      question: "آیا چای سبز برای بارداری بی‌خطر است؟",
      answer: "مصرف محدود چای سبز (۱ تا ۲ فنجان در روز) در بارداری معمولاً بی‌خطر است، اما به دلیل کافئین باید با احتیاط مصرف شود."
    }
  ];

  const relatedArticles = [
    {
      title: "تأثیر قهوه بر سلامت قلب",
      description: "بررسی علمی اثرات قهوه بر سیستم قلبی-عروقی",
      image: coffeeHeartImage,
      link: "/articles/coffee-heart",
      category: "تغذیه"
    },
    {
      title: "رژیم مدیترانه‌ای و سلامت قلب",
      description: "فواید رژیم مدیترانه‌ای برای سلامت قلب و عروق",
      image: mediterraneanDietImage,
      link: "/articles/mediterranean-diet",
      category: "تغذیه"
    },
    {
      title: "ویتامین E: خواص و کاربردها",
      description: "آشنایی با ویتامین E و نقش آن در سلامت بدن",
      image: vitaminEImage,
      link: "/articles/vitamin-e",
      category: "تغذیه"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="چای سبز: فواید سلامتی، مکانیسم اثر و ترکیبات فعال | نوید زندگی"
        description="راهنمای کامل فواید چای سبز شامل خواص آنتی‌اکسیدانی، تأثیر بر سلامت قلب و مغز، کنترل قند خون و خواص ضدسرطانی EGCG"
        keywords="چای سبز، EGCG، آنتی‌اکسیدان، کاتچین، سلامت قلب، کاهش وزن، سلامت مغز"
        canonical="https://navidzendegi.com/articles/green-tea-health"
        ogType="article"
        publishedTime="2024-12-11"
        modifiedTime="2024-12-11"
      />
      <ArticleSchema
        title="چای سبز: فواید سلامتی، مکانیسم اثر و ترکیبات فعال"
        description="راهنمای کامل فواید چای سبز شامل خواص آنتی‌اکسیدانی، تأثیر بر سلامت قلب و مغز، کنترل قند خون و خواص ضدسرطانی EGCG"
        publishedTime="2024-12-11"
        modifiedTime="2024-12-11"
        image={greenTeaHealthImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            تأثیرات علمی چای سبز: مکانیسم‌ها و فواید سلامتی
          </h1>

          <img
            src={greenTeaHealthImage}
            alt="چای سبز و برگ‌های تازه"
            className="w-full rounded-lg mb-8"
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>چای سبز</strong> (Camellia sinensis) یکی از پرمصرف‌ترین نوشیدنی‌های جهان است و به دلیل محتوای بالای ترکیبات زیست‌فعال، به ویژه <strong>پلی‌فنول‌ها</strong> و <strong>کاتچین‌ها</strong>، به طور گسترده‌ای مورد مطالعه قرار گرفته است. این ترکیبات، اثرات فارماکولوژیک متعددی از جمله خواص آنتی‌اکسیدانی، ضدالتهابی و ضدسرطانی از خود نشان می‌دهند.
          </p>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
            <p className="text-destructive font-semibold">
              ⚠️ هشدار: از خوددرمانی خودداری کنید. مصرف بیش از حد چای سبز یا مکمل‌های آن می‌تواند عوارض جانبی ایجاد کند. قبل از مصرف منظم، با پزشک مشورت کنید.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۱. ترکیبات فعال کلیدی و مکانیسم اثر
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            اثرات سلامت‌بخش چای سبز عمدتاً به دسته‌ای از فلاونوئیدها به نام کاتچین‌ها نسبت داده می‌شود. مهم‌ترین کاتچین موجود در چای سبز عبارت است از:
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>اپی‌گالوکاتچین گالات (EGCG):</strong> این قوی‌ترین و فراوان‌ترین کاتچین است که مسئول اصلی خواص آنتی‌اکسیدانی و درمانی چای سبز شناخته می‌شود.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            مکانیسم‌های بیولوژیکی
          </h3>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>فعالیت آنتی‌اکسیدانی:</strong> EGCG یک پاک‌کننده رادیکال‌های آزاد بسیار قوی است که با خنثی کردن گونه‌های فعال اکسیژن (ROS)، از سلول‌ها و DNA در برابر آسیب استرس اکسیداتیو محافظت می‌کند.</li>
            <li><strong>اثرات ضدالتهابی:</strong> کاتچین‌ها مسیرهای التهابی کلیدی مانند NF-κB و تولید سیتوکین‌های التهابی را مهار می‌کنند.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۲. تأثیرات چای سبز بر سلامت متابولیک و قلبی-عروقی
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            الف) سلامت قلب و عروق
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4">
            مصرف منظم چای سبز با کاهش عوامل خطر بیماری‌های قلبی-عروقی همراه است:
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>کاهش فشار خون:</strong> چای سبز می‌تواند به بهبود عملکرد اندوتلیال (لایه داخلی رگ‌های خونی) کمک کند.</li>
            <li><strong>بهبود پروفایل لیپیدی:</strong> مطالعات نشان داده‌اند که چای سبز و مکمل‌های آن می‌توانند سطح <strong>کلسترول LDL (کلسترول بد)</strong> و تری‌گلیسیرید را کاهش دهند.</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-4">
            برای ارزیابی دقیق سلامت قلب، می‌توانید از خدمات <a href="/services/echo-ecg" className="text-primary hover:underline">اکو و نوار قلب در منزل</a> استفاده کنید.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            ب) تنظیم قند خون و مدیریت وزن
          </h3>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>کنترل قند خون:</strong> EGCG ممکن است حساسیت به انسولین را بهبود بخشیده و جذب گلوکز در عضلات را افزایش دهد. این اثر برای بیماران مبتلا به دیابت نوع ۲ حائز اهمیت است.</li>
            <li><strong>افزایش ترموژنز:</strong> کافئین و کاتچین‌های چای سبز با افزایش مصرف انرژی و اکسیداسیون چربی، می‌توانند به افزایش میزان متابولیسم و کاهش وزن (به‌ویژه چربی‌های احشایی) کمک کنند.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۳. تأثیرات بر عملکرد مغز و محافظت عصبی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            کاتچین‌های چای سبز قادر به عبور از سد خونی-مغزی هستند و می‌توانند مستقیماً بر سیستم عصبی تأثیر بگذارند:
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>عملکرد شناختی:</strong> کافئین موجود در چای سبز (هرچند کمتر از قهوه) یک محرک شناخته شده است. همچنین، ترکیب کاتچین‌ها و کافئین می‌تواند زمان واکنش و هوشیاری را بهبود بخشد.</li>
            <li><strong>تأثیر محافظت عصبی:</strong> خواص آنتی‌اکسیدانی و ضدالتهابی EGCG ممکن است در برابر بیماری‌های نورودژنراتیو نظیر آلزایمر و پارکینسون محافظت ایجاد کند.</li>
            <li><strong>L-Theanine:</strong> چای سبز منبع مهم اسید آمینه L-Theanine است که باعث افزایش فعالیت امواج آلفا در مغز شده و به <strong>کاهش اضطراب و ایجاد آرامش</strong> بدون خواب‌آلودگی کمک می‌کند.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۴. خواص ضدسرطانی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            تحقیقات آزمایشگاهی و اپیدمیولوژیک نشان داده‌اند که چای سبز ممکن است در پیشگیری از انواع خاصی از سرطان مؤثر باشد:
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>مکانیسم‌های ضدسرطانی:</strong> EGCG می‌تواند با مهار رگ‌زایی تومور (Angiogenesis)، القای مرگ سلولی برنامه‌ریزی‌شده (Apoptosis) در سلول‌های سرطانی، و مهار مسیرهای تکثیر سلولی، به عنوان یک عامل کموپیشگیری عمل کند.</li>
            <li><strong>مطالعات اپیدمیولوژیک:</strong> مطالعات مشاهده‌ای در برخی جمعیت‌ها، ارتباط بین مصرف منظم چای سبز و کاهش خطر ابتلا به سرطان‌های سینه، پروستات و روده بزرگ را نشان داده‌اند.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            نقش خدمات پزشکی در منزل
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            برای بررسی وضعیت سلامت و دریافت مشاوره تغذیه‌ای، می‌توانید از خدمات <a href="/services/internal" className="text-primary hover:underline">ویزیت متخصص داخلی در منزل</a> استفاده کنید. همچنین برای انجام آزمایشات خون و بررسی سطح کلسترول و قند خون، خدمات <a href="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</a> در دسترس است.
          </p>

          {/* CTA Section */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              نیاز به مشاوره پزشکی دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              برای دریافت مشاوره تغذیه‌ای و بررسی وضعیت سلامت با ما تماس بگیرید.
            </p>
            <a
              href="tel:09386117912"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              تماس: ۰۹۳۸۶۱۱۷۹۱۲
            </a>
          </div>
        </article>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default GreenTeaHealthPage;
