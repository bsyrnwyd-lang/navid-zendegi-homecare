import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import bellsPalsyImage from "@/assets/bells-palsy-home-care.jpg";
import strokeImage from "@/assets/neurology.jpg";
import holterHomeImage from "@/assets/holter-home-service.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";

const BellsPalsyPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "فلج بلز", url: "/articles/bells-palsy" }
  ];

  const faqItems = [
    {
      question: "فلج بلز چیست؟",
      answer: "فلج بلز یک بیماری عصبی است که در اثر التهاب عصب هفتم جمجمه‌ای (عصب صورت) رخ می‌دهد. این بیماری باعث ضعف یا فلج ناگهانی در یک طرف صورت می‌شود و معمولاً در عرض ۴۸ ساعت به اوج خود می‌رسد. برخلاف سکته مغزی، فلج بلز معمولاً ریشه در یک عفونت ویروسی دارد."
    },
    {
      question: "تفاوت فلج بلز با سکته مغزی چیست؟",
      answer: "در فلج بلز، فرد نمی‌تواند ابروی خود را بالا بیندازد یا پیشانی را چروک کند، اما در اکثر سکته‌های مغزی عضلات پیشانی سالم می‌مانند. همچنین فلج بلز فقط صورت را درگیر می‌کند، اما اگر ضعف در دست یا پا وجود داشته باشد، نشانه سکته مغزی است و نیاز به اقدامات اورژانسی دارد."
    },
    {
      question: "آیا فلج بلز درمان دارد؟",
      answer: "بله، اکثر بیماران فلج بلز به طور کامل بهبود می‌یابند. شروع داروهای استروئیدی (کورتون) در ۷۲ ساعت اول، شانس بهبودی کامل را به شدت افزایش می‌دهد. متخصص داخلی در منزل می‌تواند دوز دقیق دارو را بر اساس وزن و وضعیت قند خون بیمار تنظیم کند."
    },
    {
      question: "چرا پایش قلبی در فلج بلز مهم است؟",
      answer: "فشار خون بالا یکی از ریسک‌فاکتورهای مهم در بروز فلج‌های صورت است. بسیاری از بیماران در زمان حمله فلج بلز دچار جهش فشار خون می‌شوند. همچنین استرس ناشی از فلج ناگهانی می‌تواند باعث آریتمی قلبی شود، به همین دلیل نوار قلب و هولتر در منزل توصیه می‌شود."
    },
    {
      question: "علائم همراه فلج بلز کدامند؟",
      answer: "علائم همراه شامل: درد در پشت یا جلوی گوش در سمت درگیر، حساسیت بیش از حد به صدا در یک گوش (بیش‌شنوایی)، کاهش حس چشایی در جلوی زبان، و تغییر در میزان تولید اشک و بزاق. همچنین چون پلک بسته نمی‌شود، خطر زخم قرنیه وجود دارد."
    },
    {
      question: "چه خدماتی برای فلج بلز در منزل ارائه می‌شود؟",
      answer: "مرکز نوید زندگی خدمات جامعی برای بیماران فلج بلز ارائه می‌دهد شامل: ویزیت متخصص داخلی برای تشخیص تفریقی با سکته مغزی، هولتر فشار خون ۲۴ ساعته، نوار قلب و هولتر قلب، آزمایش خون در محل برای رد سایر علل، و آموزش مراقبت از چشم و پانسمان شبانه."
    }
  ];

  const relatedArticles = [
    {
      title: "علائم سکته مغزی: تشخیص فوری و اقدامات اولیه",
      description: "راهنمای کامل علائم سکته مغزی و اهمیت تشخیص سریع برای کاهش عوارض",
      image: strokeImage,
      link: "/articles/stroke-symptoms",
      category: "مغز و اعصاب"
    },
    {
      title: "هولتر ریتم و فشار خون در منزل؛ پایش ۲۴ ساعته قلب",
      description: "هولتر مانیتورینگ قلب و فشار خون در منزل تهران و کرج برای تشخیص آریتمی‌های گذرا",
      image: holterHomeImage,
      link: "/articles/holter-guide",
      category: "قلب و عروق"
    },
    {
      title: "نوار قلب (ECG) چیست؟ راهنمای کامل نحوه انجام و تحلیل",
      description: "راهنمای جامع نوار قلب شامل نحوه کارکرد و تحلیل موج‌ها توسط متخصص قلب در منزل",
      image: ecgHomeImage,
      link: "/articles/ecg-guide",
      category: "قلب و عروق"
    }
  ];

  return (
    <>
      <SEOHead
        title="فلج بلز (Bell's Palsy): تفاوت با سکته مغزی، علائم و درمان در منزل"
        description="راهنمای جامع فلج بلز: تشخیص تفریقی با سکته مغزی، علائم، درمان استروئیدی و نقش هولتر فشار خون و نوار قلب در منزل. ویزیت متخصص داخلی توسط نوید زندگی"
        keywords="درمان فلج بلز در منزل، تفاوت سکته مغزی و فلج صورت، متخصص داخلی در منزل، هولتر فشار خون، نوار قلب در محل، اکو در منزل، نوید زندگی"
        canonical="https://navidzendegi.ir/articles/bells-palsy"
        ogImage={bellsPalsyImage}
      />

      <ArticleSchema
        title="فلج بلز (Bell's Palsy): تفاوت با سکته مغزی، علائم و درمان در منزل"
        description="راهنمای علمی و کاربردی فلج بلز با تمرکز بر تشخیص تفریقی و پایش قلبی در منزل"
        publishedTime="2025-01-30"
        modifiedTime="2025-01-30"
        image={bellsPalsyImage}
      />

      <ArticleLayout>
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <img
              src={bellsPalsyImage}
              alt="تشخیص و درمان فلج بلز در منزل با تجهیزات پایش قلب"
              className="w-full rounded-lg mb-8"
              loading="eager"
            />

            <p className="text-sm text-muted-foreground mb-4">تاریخ انتشار: ۱۴۰۴/۱۱/۱۱</p>

            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              فلج بلز؛ افتادگی ناگهانی صورت و راهکارهای تشخیص و درمان در منزل
            </h1>

            <p className="text-lg leading-relaxed mb-6">
              تصور کنید صبح از خواب بیدار می‌شوید و متوجه می‌شوید که نیمی از صورتتان حرکت نمی‌کند، لبخندتان کج شده و پلک چشمتان بسته نمی‌شود. این وضعیت که معمولاً در عرض ۴۸ ساعت به اوج خود می‌رسد، <strong>فلج بلز</strong> نام دارد. این بیماری در اثر التهاب عصب هفتم جمجمه‌ای (عصب صورت) رخ می‌دهد و برخلاف <a href="/articles/stroke-symptoms" className="text-primary hover:underline">سکته مغزی</a>، معمولاً ریشه در یک عفونت ویروسی دارد.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              مرکز خدمات پزشکی نوید زندگی با اعزام <a href="/services/internal-medicine" className="text-primary hover:underline">متخصص داخلی به منزل</a>، تشخیص تفریقی سریع را انجام داده و با استفاده از تجهیزات پاراکلینیک، از سلامت عمومی و قلبی بیمار اطمینان حاصل می‌کند.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/20 border-r-4 border-amber-500 p-6 rounded-lg my-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚠️</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">هشدار پزشکی مهم</h3>
                  <p className="leading-relaxed">
                    اگر همراه با ضعف صورت، ضعف در دست یا پا، اختلال در تکلم یا تعادل دارید، این علائم نشانه <strong className="font-bold">سکته مغزی</strong> است و نیاز به اقدامات اورژانسی دارد. <strong className="font-bold">هرگز خودسرانه اقدام به درمان نکنید</strong> و فوراً با اورژانس تماس بگیرید.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">۱. تفاوت حیاتی فلج بلز با سکته مغزی</h2>

            <p className="text-lg leading-relaxed mb-6">
              بزرگترین نگرانی بیماران، تشخیص اشتباه این دو وضعیت است. متخصص داخلی در زمان ویزیت در منزل با بررسی دقیق موارد زیر، این دو را از هم متمایز می‌کند:
            </p>

            <ul className="list-disc pr-8 space-y-3 text-lg mb-6">
              <li>
                <strong>درگیری پیشانی:</strong> در فلج بلز، فرد نمی‌تواند ابروی خود را بالا بیندازد یا پیشانی را چروک کند. اما در اکثر سکته‌های مغزی، عضلات پیشانی سالم می‌مانند.
              </li>
              <li>
                <strong>قدرت دست و پا:</strong> فلج بلز فقط صورت را درگیر می‌کند. اگر ضعف در دست یا پا وجود داشته باشد، نشانه سکته مغزی است و نیاز به اقدامات اورژانسی دارد.
              </li>
              <li>
                <strong>تکلم و تعادل:</strong> اختلال در راه رفتن یا بلع، به نفع سکته مغزی است.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">۲. چرا پایش قلبی و عروقی در فلج بلز اهمیت دارد؟</h2>

            <p className="text-lg leading-relaxed mb-6">
              اگرچه فلج بلز یک بیماری عصبی است، اما در بسیاری از موارد با عوامل زمینه‌ای قلبی و عروقی در ارتباط است که نیاز به بررسی توسط تیم نوید زندگی دارد:
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">الف) هولتر فشار خون ۲۴ ساعته؛ بررسی عامل پنهان</h3>

            <p className="text-lg leading-relaxed mb-6">
              <a href="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون بالا</a> یکی از ریسک‌فاکتورهای مهم در بروز فلج‌های صورت است. بسیاری از بیماران در زمان حمله فلج بلز، دچار جهش فشار خون می‌شوند. با نصب <a href="/services/holter" className="text-primary hover:underline">هولتر فشار خون در منزل</a>، ما متوجه می‌شویم که آیا این فشار خون ناشی از استرس بیماری است یا بیمار دچار فشار خون مزمن پنهان است که نیاز به درمان جدی دارد.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">ب) نوار قلب (ECG) و هولتر قلب</h3>

            <p className="text-lg leading-relaxed mb-6">
              استرس ناشی از فلج ناگهانی صورت می‌تواند باعث <a href="/articles/heart-palpitations" className="text-primary hover:underline">آریتمی قلبی</a> (به‌ویژه در سالمندان) شود. انجام <a href="/articles/ecg-guide" className="text-primary hover:underline">نوار قلب در منزل</a> و در موارد لازم نصب <a href="/articles/holter-guide" className="text-primary hover:underline">هولتر قلب</a>، به متخصص ما کمک می‌کند تا مطمئن شود سیستم برقی قلب تحت تأثیر این شوک عصبی قرار نگرفته است.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">ج) اکوکاردیوگرافی و آزمایش خون</h3>

            <p className="text-lg leading-relaxed mb-6">
              پزشک متخصص داخلی برای رد کردن سایر علل (مثل <a href="/articles/diabetes" className="text-primary hover:underline">دیابت</a> یا بیماری‌های خودایمنی)، <a href="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</a> را تجویز می‌کند. همچنین در بیماران مسن، انجام <a href="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</a> برای اطمینان از سلامت دریچه‌ها و قدرت قلب به عنوان بخشی از چک‌آپ جامع توصیه می‌شود.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">۳. علائم همراه که باید به آن‌ها توجه کرد</h2>

            <ul className="list-disc pr-8 space-y-3 text-lg mb-6">
              <li>درد در پشت یا جلوی گوش در سمت درگیر.</li>
              <li>حساسیت بیش از حد به صدا در یک گوش (بیش‌شنوایی).</li>
              <li>کاهش حس چشایی در جلوی زبان.</li>
              <li>تغییر در میزان تولید اشک و بزاق.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">۴. درمان و مراقبت تخصصی در منزل</h2>

            <p className="text-lg leading-relaxed mb-6">
              زمان در درمان فلج بلز بسیار حیاتی است. شروع داروهای استروئیدی (کورتون) در ۷۲ ساعت اول، شانس بهبودی کامل را به شدت افزایش می‌دهد.
            </p>

            <ul className="list-disc pr-8 space-y-3 text-lg mb-6">
              <li>
                <strong>ویزیت در محل:</strong> متخصص داخلی دوز دقیق دارو را بر اساس وزن و وضعیت قند خون بیمار تنظیم می‌کند.
              </li>
              <li>
                <strong>مراقبت از چشم:</strong> چون پلک بسته نمی‌شود، خطر زخم قرنیه وجود دارد. تیم ما آموزش‌های لازم برای پانسمان شبانه و استفاده از قطره‌های چشمی را به بیمار می‌دهد.
              </li>
              <li>
                <strong>پیگیری دوره‌ای:</strong> ما با پایش مداوم، روند بازگشت حرکت عضلات صورت را تحت نظر داریم.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">نتیجه‌گیری</h2>

            <p className="text-lg leading-relaxed mb-6">
              فلج بلز تجربه‌ای ترسناک است، اما با تشخیص درست و به‌موقع توسط متخصص داخلی، اکثر بیماران به طور کامل بهبود می‌یابند. مرکز نوید زندگی با آوردن تجهیزات تشخیصی مثل نوار قلب، هولتر و اکو به منزل، استرس ناشی از مراجعه به مراکز درمانی را حذف کرده و تمرکز بیمار را بر بهبودی سریع‌تر قرار می‌دهد.
            </p>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-primary mb-4">تشخیص و درمان فلج بلز در منزل</h3>
              <p className="text-lg leading-relaxed mb-4">
                برای <strong>ویزیت متخصص داخلی در منزل</strong>، <strong>هولتر فشار خون</strong>، <strong>نوار قلب</strong> و <strong>آزمایش خون در محل</strong>، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:09386117912"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  📞 تماس: 09386117912
                </a>
              </div>
            </div>

            <PricingInfo />

            <h2 className="text-2xl font-bold mt-12 mb-6">منابع معتبر علمی (References)</h2>
            <ol className="list-decimal pr-8 space-y-2 text-base mb-8">
              <li>American Academy of Neurology (AAN). <em>Bell's Palsy Guidelines.</em></li>
              <li>Mayo Clinic: Bell's palsy - Symptoms and causes.</li>
              <li>NIH: Neurological disorders: Bell's Palsy Fact Sheet.</li>
            </ol>
          </article>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />
        </div>
      </ArticleLayout>
    </>
  );
};

export default BellsPalsyPage;
