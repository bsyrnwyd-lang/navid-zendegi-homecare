import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import diabetesHeartImage from "@/assets/diabetes-heart-connection.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";

const DiabetesHeartPage = () => {
  const publishDate = "2025-01-29";

  const faqs = [
    {
      question: "چرا بیماران دیابتی بیشتر در معرض بیماری قلبی هستند؟",
      answer: "قند خون بالا به مرور زمان دیواره رگ‌ها را تخریب می‌کند، مسیر را برای رسوب چربی هموار کرده و باعث تصلب شرایین، نوروپاتی قلبی و نارسایی قلبی می‌شود. بیماران دیابتی ۲ تا ۴ برابر بیشتر در معرض سکته قلبی هستند."
    },
    {
      question: "سکته قلبی خاموش در دیابتی‌ها چیست؟",
      answer: "دیابت به اعصابی که درد قلب را منتقل می‌کنند آسیب می‌زند، بنابراین بیمار دیابتی ممکن است دچار سکته قلبی شود اما هیچ دردی حس نکند. به همین دلیل چک‌آپ‌های دوره‌ای قلبی برای دیابتی‌ها حیاتی است."
    },
    {
      question: "چه آزمایش‌هایی برای پایش قلب در دیابتی‌ها لازم است؟",
      answer: "نوار قلب (ECG) برای پایش ریتم و ایسکمی، اکوکاردیوگرافی برای بررسی قدرت پمپاژ، HbA1c برای میانگین قند ۳ ماهه، پروفایل چربی و آلبومین ادرار برای سلامت کلیه ضروری هستند."
    },
    {
      question: "هر چند وقت یکبار بیمار دیابتی باید قلب را چک کند؟",
      answer: "توصیه می‌شود بیماران دیابتی حداقل هر ۶ ماه یکبار نوار قلب و سالانه اکو انجام دهند. در صورت وجود عوامل خطر اضافی مانند فشار خون بالا، این فواصل باید کوتاه‌تر شود."
    },
    {
      question: "علائم هشداردهنده قلبی در دیابتی‌ها کدامند؟",
      answer: "تنگی نفس غیرعادی هنگام پیاده‌روی، خستگی مفرط که با استراحت بهتر نمی‌شود، ورم مچ پاها و احساس سنگینی مبهم در قفسه سینه یا فک از علائم هشداردهنده هستند."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل؛ راهنمای کامل",
      description: "همه چیز درباره انجام اکو قلب در منزل و مزایای آن",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "قلب و عروق"
    },
    {
      title: "نوار قلب در منزل؛ راهنمای کامل ECG",
      description: "همه چیز درباره انجام نوار قلب در منزل و تفسیر نتایج",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "قلب و عروق"
    },
    {
      title: "دیابت؛ راهنمای کامل تشخیص و مدیریت",
      description: "همه چیز درباره دیابت، علائم، تشخیص و درمان",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "سلامت عمومی"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "دیابت و قلب", url: "/articles/diabetes-heart" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="دیابت و قلب؛ چرا بیماران دیابتی باید مراقب قلب خود باشند؟ | نوید زندگی"
        description="راهنمای کامل ارتباط دیابت و بیماری‌های قلبی: سکته قلبی خاموش، تصلب شرایین در دیابت، چک‌آپ قلبی با اکو و نوار قلب در منزل برای بیماران دیابتی."
        keywords="دیابت و قلب، سکته قلبی خاموش در دیابت، اکو در منزل، نوار قلب در منزل، آزمایش خون در منزل، پایش قلب دیابتی، نوید زندگی"
        canonical="https://navidzendegi.com/articles/diabetes-heart"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      <ArticleSchema
        title="دیابت و قلب؛ چرا بیماران دیابتی باید بیش از دیگران مراقب قلب خود باشند؟"
        description="راهنمای کامل ارتباط دیابت و بیماری‌های قلبی و اهمیت پایش قلب در منزل"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={diabetesHeartImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              دیابت و قلب؛ چرا بیماران دیابتی باید بیش از دیگران مراقب قلب خود باشند؟
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۱۴۰۳/۱۱/۱۰</p>
          </header>

          <img
            src={diabetesHeartImage}
            alt="ارتباط دیابت و بیماری‌های قلبی - پایش قلب در منزل"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
            <p className="text-lg mb-6">
              <a href="/articles/diabetes" className="text-primary hover:underline">دیابت</a> تنها یک بیماری مربوط به قند خون نیست؛ در واقع پزشکان دیابت را یک «بیماری عروقی» می‌دانند. آمارها نشان می‌دهند که افراد مبتلا به دیابت، <strong>۲ تا ۴ برابر بیشتر</strong> از سایرین در معرض ابتلا به بیماری‌های قلبی و سکته هستند. نکته فریبنده اینجاست که در بسیاری از این بیماران، مشکلات قلبی به صورت «خاموش» و بدون درد پیشرفت می‌کند.
            </p>

            <p className="mb-6">
              ما در مرکز <a href="/" className="text-primary hover:underline">نوید زندگی</a> با ارائه پکیج‌های ویژه پایش قلبی در منزل، به بیماران دیابتی کمک می‌کنیم تا قبل از بروز حوادث ناگوار، از سلامت قلب خود مطمئن شوند.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
              <p className="text-destructive font-semibold">
                ⚠️ هشدار: هرگز داروهای دیابت یا قلب را خودسرانه قطع یا تغییر ندهید. تداخلات دارویی باید توسط پزشک متخصص بررسی شود.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">دیابت چگونه به قلب آسیب می‌زند؟</h2>
            <p className="mb-4">
              قند خون بالا به مرور زمان باعث تخریب دیواره رگ‌ها (اندوتلیوم) می‌شود. این تخریب، مسیر را برای رسوب چربی و کلسیم هموار می‌کند که منجر به موارد زیر می‌شود:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>تصلب شرایین (آترواسکلروز):</strong> رگ‌های قلب سخت و تنگ می‌شوند، در نتیجه خون‌رسانی به عضله قلب کاهش می‌یابد</li>
              <li><strong>نوروپاتی قلبی:</strong> دیابت به اعصابی که به قلب پیام می‌برند آسیب می‌زند. به همین دلیل، بیمار دیابتی ممکن است دچار <a href="/articles/silent-heart-attack" className="text-primary hover:underline">سکته قلبی</a> شود اما هیچ دردی حس نکند!</li>
              <li><strong>نارسایی قلبی:</strong> دیابت می‌تواند مستقیماً عضله قلب را ضعیف کرده و باعث <a href="/articles/pulmonary-edema" className="text-primary hover:underline">تورم ریه</a> و پاها شود</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">ضرورت چک‌آپ‌های قلبی در منزل برای دیابتی‌ها</h2>
            <p className="mb-6">
              به دلیل خطر «سکته خاموش»، بیماران دیابتی نباید منتظر علامت بمانند. پایش منظم در محیط آرام خانه ریسک حملات ناگهانی را به حداقل می‌رساند:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۱. نوار قلب (ECG) در منزل؛ پایش ریتم و ایسکمی</h3>
            <p className="mb-6">
              تغییرات جزئی در <a href="/articles/ecg-home" className="text-primary hover:underline">نوار قلب</a> می‌تواند نشان دهد که قلب بیمار دیابتی در حال تحمل فشار یا کم‌خونی (ایسکمی) است. انجام نوار قلب در منزل به صورت دوره‌ای، به پزشک اجازه می‌دهد تا اختلالات الکتریکی را قبل از تبدیل شدن به بحران، شناسایی کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۲. اکوکاردیوگرافی (اکو) در منزل؛ بررسی قدرت پمپاژ</h3>
            <p className="mb-6">
              دیابت می‌تواند باعث "سفتی قلب" شود که در مراحل اولیه با آزمایش خون مشخص نمی‌شود. متخصصین نوید زندگی با انجام <a href="/articles/echo-home" className="text-primary hover:underline">اکو در منزل</a>، نحوه شل و سفت شدن بطن‌ها و سلامت <a href="/articles/heart-valve-disease" className="text-primary hover:underline">دریچه‌ها</a> را بررسی می‌کنند تا از نارسایی قلبی پیشگیری کنند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۳. ویزیت متخصص قلب و کنترل فشار خون</h3>
            <p className="mb-6">
              <a href="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون بالا</a> در کنار دیابت، قدرت تخریب عروق را چندین برابر می‌کند. در طول <a href="/services/internal-medicine" className="text-primary hover:underline">ویزیت متخصص در منزل</a>، پزشک نه تنها دوز داروهای قلبی، بلکه تداخلات آن‌ها با داروهای قند خون را نیز بازبینی می‌کند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">آزمایش‌های ضروری در منزل برای پیشگیری</h2>
            <p className="mb-4">
              تیم آزمایشگاهی نوید زندگی با حضور در محل، فاکتورهای حیاتی زیر را پایش می‌کند:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>HbA1c:</strong> میانگین قند خون ۳ ماهه (حیاتی برای تخمین ریسک عروقی)</li>
              <li><strong>پروفایل چربی (Lipid Profile):</strong> دیابتی‌ها نیاز دارند سطح LDL (چربی بد) بسیار پایین‌تری نسبت به افراد عادی داشته باشند</li>
              <li><strong>آلبومین ادرار:</strong> برای بررسی سلامت کلیه‌ها، که ارتباط مستقیمی با سلامت قلب دارد</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">علائم هشداردهنده «غیر دردناک» در دیابتی‌ها</h2>
            <p className="mb-4">
              اگر دیابت دارید، در صورت مشاهده این موارد فوراً درخواست ویزیت پزشک در منزل بدهید:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><a href="/articles/breathing-treatment" className="text-primary hover:underline">تنگی نفس</a> غیرعادی هنگام پیاده‌روی ساده</li>
              <li>خستگی مفرط که با استراحت خوب نمی‌شود</li>
              <li>ورم در مچ پاها (<a href="/articles/leg-edema" className="text-primary hover:underline">ادم</a>)</li>
              <li>احساس سنگینی مبهم در قفسه سینه یا فک</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/10 rounded-lg p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                پکیج ویژه پایش قلبی برای بیماران دیابتی
              </h3>
              <p className="text-foreground/80 mb-4">
                برای رزرو نوبت اکو، نوار قلب، آزمایش خون یا ویزیت متخصص در منزل، همین حالا تماس بگیرید:
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس: 09386117912
              </a>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نتیجه‌گیری: پیشگیری، ارزان‌تر و ایمن‌تر از درمان</h2>
            <p className="mb-6">
              در بیماران دیابتی، قلب باید با دقت مضاعف پایش شود. جابه‌جایی‌های مکرر به کلینیک‌ها می‌تواند برای این بیماران استرس‌زا باشد و قند خون آن‌ها را نوسانی کند. مرکز نوید زندگی با آوردن تجهیزات اکو، نوار قلب و آزمایشگاه به منزل، مدیریت همزمان دیابت و قلب را در کمال آرامش برای شما ممکن کرده است.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">منابع معتبر علمی</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4 text-muted-foreground">
              <li>American Diabetes Association (ADA): Cardiovascular Disease and Risk Management</li>
              <li>American Heart Association (AHA): Diabetes and Heart Disease</li>
              <li>Mayo Clinic: Diabetes and your heart: How to manage the risk</li>
            </ul>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default DiabetesHeartPage;
