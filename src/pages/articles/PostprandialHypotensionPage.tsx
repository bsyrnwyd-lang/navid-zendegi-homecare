import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import postprandialHypotensionImage from "@/assets/postprandial-hypotension.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import elderlyCareImage from "@/assets/elderly-care-home.jpg";

const PostprandialHypotensionPage = () => {
  const publishDate = "2025-01-29";

  const faqs = [
    {
      question: "افت فشار خون بعد از غذا چیست؟",
      answer: "افت فشار خون پس از غذا (Postprandial Hypotension) وضعیتی است که در آن فشار خون ۱۵ تا ۹۰ دقیقه بعد از صرف غذا کاهش می‌یابد و باعث سرگیجه، تپش قلب یا حتی غش کردن می‌شود. این حالت در سالمندان بسیار شایع است."
    },
    {
      question: "چرا بعد از غذا فشار خون افت می‌کند؟",
      answer: "هنگام هضم غذا، خون زیادی به سمت دستگاه گوارش هدایت می‌شود. در افراد سالم، قلب و رگ‌ها این کمبود را جبران می‌کنند، اما در سالمندان و بیماران قلبی این سیستم جبرانی به درستی عمل نمی‌کند."
    },
    {
      question: "علائم افت فشار بعد از غذا چیست؟",
      answer: "سرگیجه و سیاهی رفتن چشم، تپش قلب ناگهانی، درد قفسه سینه (آنژین)، احساس ضعف شدید و در موارد شدید غش کردن از علائم اصلی هستند."
    },
    {
      question: "چه کسانی بیشتر به این مشکل مبتلا می‌شوند؟",
      answer: "سالمندان، افراد مبتلا به فشار خون بالا، دیابتی‌ها، بیماران پارکینسون و کسانی که داروهای متعدد فشار خون مصرف می‌کنند در معرض خطر بیشتری هستند."
    },
    {
      question: "آیا می‌توان افت فشار بعد از غذا را در منزل بررسی کرد؟",
      answer: "بله. تیم نوید زندگی با اعزام پزشک متخصص به همراه دستگاه اکو و نوار قلب به منزل، می‌تواند علت دقیق این وضعیت را در زمان بروز علائم (بعد از غذا) تشخیص دهد."
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
      title: "مراقبت از سالمندان در منزل",
      description: "راهنمای کامل مراقبت از سالمندان و خدمات پزشکی در منزل",
      image: elderlyCareImage,
      link: "/articles/elderly-care-guide",
      category: "سالمندان"
    }
  ];

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "افت فشار خون بعد از غذا", url: "/articles/postprandial-hypotension" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="افت فشار خون و تپش قلب بعد از غذا در سالمندان | نوید زندگی"
        description="راهنمای کامل افت فشار خون بعد از غذا (Postprandial Hypotension): علائم، علل، تشخیص با اکو و نوار قلب در منزل و راهکارهای عملی برای سالمندان."
        keywords="افت فشار بعد از غذا، سرگیجه سالمندان، تپش قلب بعد از غذا، نوار قلب در منزل، اکو در منزل، مراقبت سالمندان، Postprandial Hypotension"
        canonical="https://navidzendegi.com/articles/postprandial-hypotension"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      <ArticleSchema
        title="افت فشار خون و تپش قلب بعد از غذا (Postprandial Hypotension)؛ پدیده‌ای شایع در سالمندان"
        description="راهنمای کامل افت فشار خون بعد از غذا: علائم، علل و تشخیص در منزل"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={postprandialHypotensionImage}
        author="تیم پزشکی نوید زندگی"
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              افت فشار خون و تپش قلب بعد از غذا (Postprandial Hypotension)؛ پدیده‌ای شایع در سالمندان
            </h1>
            <p className="text-muted-foreground">تاریخ انتشار: ۱۴۰۳/۱۱/۱۰</p>
          </header>

          <img
            src={postprandialHypotensionImage}
            alt="افت فشار خون بعد از غذا - تشخیص در سالمندان"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
            <p className="text-lg mb-6">
              بسیاری از سالمندان و خانواده‌هایشان از یک پدیده عجیب شکایت دارند: «پدر یا مادرم بلافاصله بعد از خوردن نهار دچار سرگیجه شدید، تپش قلب یا حتی غش کردن می‌شود.» در بسیاری از موارد، این وضعیت با سکته مغزی یا ضعف عمومی اشتباه گرفته می‌شود، اما در واقع با پدیده‌ای به نام <strong>افت فشار خون پس از غذا (Postprandial Hypotension)</strong> روبرو هستیم.
            </p>

            <p className="text-lg mb-6">
              ما در مرکز خدمات پزشکی <a href="/" className="text-primary hover:underline">نوید زندگی</a>، با بررسی دقیق این حالات در منزل، از بروز حوادث ناگواری مانند شکستگی لگن در اثر زمین خوردن سالمندان جلوگیری می‌کنیم.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
              <p className="text-destructive font-semibold">
                ⚠️ هشدار: هرگز داروهای فشار خون را خودسرانه تغییر ندهید. در صورت بروز علائم، با پزشک متخصص مشورت کنید.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">چرا بعد از غذا فشار خون افت می‌کند؟</h2>
            <p className="mb-6">
              وقتی غذا می‌خورید، بدن مقدار زیادی خون را به سمت دستگاه گوارش هدایت می‌کند تا به هضم غذا کمک کند. برای جبران این موضوع، قلب باید تندتر بزند و رگ‌های سایر نقاط بدن منقبض شوند تا فشار خون ثابت بماند.
            </p>
            <p className="mb-6">
              در بسیاری از سالمندان (به‌ویژه کسانی که <a href="/articles/high-blood-pressure-control" className="text-primary hover:underline">فشار خون بالا</a>، <a href="/articles/diabetes" className="text-primary hover:underline">دیابت</a> یا پارکینسون دارند)، این سیستم جبرانی به درستی عمل نمی‌کند. نتیجه این است که فشار خون در مغز و سایر نقاط بدن افت کرده و فرد دچار علائم می‌شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">علائم اصلی که باید جدی بگیرید</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>تپش قلب ناگهانی:</strong> قلب سعی می‌کند با سرعت بیشتر، افت فشار را جبران کند</li>
              <li><strong>سرگیجه و سیاهی رفتن چشم:</strong> معمولاً ۱۵ تا ۹۰ دقیقه بعد از صرف غذا رخ می‌دهد</li>
              <li><strong>آنژین (درد قفسه سینه):</strong> به دلیل کاهش خون‌رسانی به خودِ عضله قلب</li>
              <li><strong>سقوط و غش کردن:</strong> که می‌تواند منجر به آسیب‌های جدی جسمی شود</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">خطرات پنهان و نیاز به تشخیص در منزل</h2>
            <p className="mb-6">
              این وضعیت می‌تواند نشان‌دهنده یک اختلال جدی در سیستم عصبی خودکار یا ضعف پنهان عضله قلب باشد. جابه‌جایی سالمندی که دچار افت فشار است به مطب پزشک، ریسک زمین خوردن او را دوچندان می‌کند.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">راهکار تخصصی نوید زندگی برای مدیریت این وضعیت</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۱. نوار قلب (ECG) در منزل</h3>
            <p className="mb-4">
              برای اطمینان از اینکه <a href="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب</a> بعد از غذا ناشی از یک آریتمی خطرناک نیست، انجام <a href="/articles/ecg-home" className="text-primary hover:underline">نوار قلب</a> در همان بازه زمانی (بعد از غذا) بسیار کلیدی است. تیم ما در محیط آرام خانه این تست را انجام می‌دهد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۲. اکوکاردیوگرافی (اکو) در منزل</h3>
            <p className="mb-4">
              گاهی افت فشار بعد از غذا به دلیل نارسایی قلبی یا مشکلات دریچه‌ای است که اجازه نمی‌دهد قلب برون‌ده کافی داشته باشد. با <a href="/articles/echo-home" className="text-primary hover:underline">اکو در منزل</a>، قدرت قلب بیمار را به دقت ارزیابی می‌کنیم.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">۳. ویزیت متخصص و تنظیم دارویی</h3>
            <p className="mb-6">
              بسیاری از داروهای فشار خون اگر درست قبل از غذا مصرف شوند، این وضعیت را تشدید می‌کنند. پزشک متخصص ما در طول <a href="/services/internal-medicine" className="text-primary hover:underline">ویزیت در منزل</a>، زمان‌بندی داروهای بیمار را تغییر می‌دهد تا ایمنی او حفظ شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">راهکارهای عملی برای کنترل افت فشار در خانه</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li><strong>وعده‌های کوچک و مکرر:</strong> به جای ۳ وعده بزرگ، از ۶ وعده سبک استفاده کنید تا خون کمتری در دستگاه گوارش تجمع یابد</li>
              <li><strong>نوشیدن آب قبل از غذا:</strong> نوشیدن یک لیوان آب (حدود ۲۰۰ سی‌سی) ۱۵ دقیقه قبل از غذا می‌تواند فشار خون را تا حدی بالا نگه دارد</li>
              <li><strong>کاهش کربوهیدرات‌های ساده:</strong> نان سفید، برنج و شیرینی‌جات باعث افت شدیدتر فشار می‌شوند</li>
              <li><strong>استراحت بعد از غذا:</strong> به بیمار توصیه کنید تا ۱ ساعت بعد از غذا از جای خود بلند نشود</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">چه زمانی وضعیت اورژانسی است؟</h2>
            <p className="mb-4">
              اگر تپش قلب بعد از غذا با موارد زیر همراه بود، بلافاصله درخواست خدمات پزشکی در منزل بدهید:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4">
              <li>از دست دادن هوشیاری (حتی برای چند ثانیه)</li>
              <li>درد شدیدی که به فک یا دست چپ می‌زند</li>
              <li><a href="/articles/pulmonary-edema" className="text-primary hover:underline">تنگی نفس شدید</a> که با نشستن هم بهتر نمی‌شود</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/10 rounded-lg p-6 my-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                تشخیص علل افت فشار بعد از غذا در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای بررسی تخصصی سالمندان (اکو + نوار قلب + ویزیت متخصص) در منزل، همین حالا تماس بگیرید:
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس: 09386117912
              </a>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نتیجه‌گیری</h2>
            <p className="mb-6">
              افت فشار خون بعد از غذا در سالمندان، یک چالش جدی است که می‌تواند کیفیت زندگی آن‌ها را به شدت کاهش دهد. مرکز <a href="/" className="text-primary hover:underline">نوید زندگی</a> با ارائه خدمات اکو، نوار قلب و ویزیت متخصص در منزل، به شما کمک می‌کند تا علت دقیق این حملات را پیدا کرده و با اصلاح رژیم دارویی و غذایی، امنیت را به سفره‌های عزیزانتان بازگردانید.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">منابع معتبر علمی</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 mr-4 text-muted-foreground">
              <li>Harvard Health Publishing: Postprandial hypotension: A common condition in older adults</li>
              <li>Merck Manuals: Postprandial Hypotension in the Elderly</li>
              <li>Journal of the American Society of Hypertension</li>
              <li>Mayo Clinic: Low blood pressure (hypotension) - Symptoms and causes</li>
            </ul>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default PostprandialHypotensionPage;
