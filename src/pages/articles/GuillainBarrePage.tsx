import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import guillainBarreImage from "@/assets/guillain-barre-home-care.jpg";
import pressureInjuryImage from "@/assets/pressure-injury-care.jpg";
import holterHomeImage from "@/assets/holter-home-service.jpg";
import dopplerDVTImage from "@/assets/doppler-ultrasound-dvt.jpg";

const GuillainBarrePage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بیماری گیلن باره", url: "/articles/guillain-barre" }
  ];

  const faqItems = [
    {
      question: "بیماری گیلن باره چیست؟",
      answer: "گیلن باره یک اختلال نادر اما جدی است که در آن سیستم ایمنی بدن به اشتباه به اعصاب محیطی حمله می‌کند. این بیماری معمولاً چند روز یا چند هفته بعد از یک عفونت ساده ویروسی یا گوارشی آغاز می‌شود و می‌تواند باعث ضعف عضلانی تدریجی شود که از پاها شروع شده و به سمت بالا پیشروی می‌کند."
    },
    {
      question: "اولین علائم گیلن باره چیست؟",
      answer: "اولین نشانه‌های گیلن باره معمولاً به صورت گزگز و ضعف در پاهاست که به سرعت به سمت بالا و دست‌ها پیشروی می‌کند. در موارد شدید، این ضعف می‌تواند عضلات تنفسی و قلب را نیز تحت تأثیر قرار دهد. درد شدید شبیه کرامپ که شب‌ها بدتر می‌شود نیز از علائم شایع است."
    },
    {
      question: "چرا پایش قلب در بیماران گیلن باره مهم است؟",
      answer: "یکی از بزرگترین خطرات گیلن باره، آریتمی‌های قلبی ناگهانی است. سیستم عصبی که ضربان قلب را کنترل می‌کند ممکن است در اثر این بیماری مختل شود. نوسانات شدید فشار خون و ضربان قلب می‌تواند منجر به عوارض جدی شود. به همین دلیل هولتر مانیتورینگ قلب و فشار خون در منزل ضروری است."
    },
    {
      question: "خطر لخته شدن خون در بیماران گیلن باره چقدر است؟",
      answer: "بیماران گیلن باره به دلیل فلج موقت و بی‌حرکتی طولانی‌مدت در بستر، در معرض خطر شدید لخته شدن خون در پا (DVT) هستند. این وضعیت می‌تواند منجر به آمبولی ریه شود که یک اورژانس پزشکی است. سونوگرافی داپلر عروق پا در منزل می‌تواند از سلامت عروق و عدم وجود لخته اطمینان حاصل کند."
    },
    {
      question: "آیا گیلن باره درمان دارد؟",
      answer: "بله، گیلن باره قابل درمان است اما نیاز به صبر و نظارت دقیق پزشکی دارد. درمان شامل پلاسمافرزیس یا ایمونوگلوبولین وریدی، همراه با مراقبت‌های حمایتی است. اکثر بیماران بهبود می‌یابند اما روند بهبودی ممکن است ماه‌ها طول بکشد. پایش قلبی، تنفسی و پیشگیری از عوارض مانند DVT در این دوره بسیار مهم است."
    },
    {
      question: "چه خدماتی در منزل برای بیماران گیلن باره ارائه می‌شود؟",
      answer: "مرکز نوید زندگی خدمات جامعی برای بیماران گیلن باره ارائه می‌دهد شامل: ویزیت متخصص داخلی، هولتر قلب و فشار خون ۲۴ ساعته، اکوکاردیوگرافی، سونوگرافی داپلر عروق پا برای پیشگیری از DVT، آزمایش خون در محل و مشاوره تغذیه. این خدمات از جابه‌جایی دشوار بیماران جلوگیری کرده و مراقبت حرفه‌ای را به منزل می‌آورد."
    }
  ];

  const relatedArticles = [
    {
      title: "زخم بستر (آسیب فشاری): علل، مراحل و درمان تخصصی",
      description: "راهنمای جامع پیشگیری و درمان زخم بستر در بیماران بی‌حرکت و سالمندان",
      image: pressureInjuryImage,
      link: "/articles/pressure-injury",
      category: "پرستاری"
    },
    {
      title: "هولتر ریتم و فشار خون در منزل؛ پایش ۲۴ ساعته قلب",
      description: "هولتر مانیتورینگ قلب و فشار خون در منزل تهران و کرج برای تشخیص آریتمی‌های گذرا",
      image: holterHomeImage,
      link: "/articles/holter-guide",
      category: "قلب و عروق"
    },
    {
      title: "سونوگرافی داپلر در منزل: تشخیص زودهنگام لخته خون و DVT",
      description: "راهنمای کامل سونوگرافی داپلر عروق پا برای تشخیص ترومبوز ورید عمقی در منزل",
      image: dopplerDVTImage,
      link: "/articles/doppler-dvt",
      category: "سونوگرافی"
    }
  ];

  return (
    <>
      <SEOHead
        title="بیماری گیلن باره (Guillain-Barré): علائم، درمان و مراقبت در منزل"
        description="راهنمای جامع بیماری گیلن باره: از ضعف عضلانی تا مدیریت تخصصی در منزل. نقش هولتر قلب، اکو و سونوگرافی داپلر در پایش بیماران. ویزیت متخصص داخلی در منزل توسط نوید زندگی"
        keywords="بیماری گیلن باره، درمان فلج موقت، متخصص داخلی در منزل، هولتر قلب در محل، سونوگرافی داپلر عروق پا، اکو در منزل، نوید زندگی"
        canonical="https://navidzendegi.ir/articles/guillain-barre"
        ogImage={guillainBarreImage}
      />

      <ArticleSchema
        title="بیماری گیلن باره (Guillain-Barré): علائم، درمان و مراقبت در منزل"
        description="راهنمای علمی و کاربردی بیماری گیلن باره با تمرکز بر پایش قلبی و عروقی در منزل"
        publishedTime="2025-01-30"
        modifiedTime="2025-01-30"
        image={guillainBarreImage}
      />

      <ArticleLayout>
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <img
              src={guillainBarreImage}
              alt="مراقبت از بیمار گیلن باره در منزل با تجهیزات پایش قلب"
              className="w-full rounded-lg mb-8"
              loading="eager"
            />

            <p className="text-sm text-muted-foreground mb-4">تاریخ انتشار: ۱۴۰۴/۱۱/۱۱</p>

            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              بیماری گیلن باره؛ از ضعف عضلانی تا مدیریت تخصصی در منزل
            </h1>

            <p className="text-lg leading-relaxed mb-6">
              <strong>گیلن باره</strong> یک اختلال نادر اما جدی است که در آن سیستم ایمنی بدن به اشتباه به اعصاب محیطی حمله می‌کند. این بیماری معمولاً چند روز یا چند هفته بعد از یک عفونت ساده ویروسی یا گوارشی آغاز می‌شود. اولین نشانه‌های آن اغلب به صورت گزگز و ضعف در پاهاست که به سرعت به سمت بالا و دست‌ها پیشروی می‌کند. در موارد شدید، این ضعف می‌تواند عضلات تنفسی و قلب را نیز تحت تأثیر قرار دهد.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              مرکز خدمات پزشکی نوید زندگی با اعزام <a href="/services/internal-medicine" className="text-primary hover:underline">متخصص داخلی</a> و تیم پاراکلینیک به منزل، پایش دقیق وضعیت بیمار و جلوگیری از عوارض ثانویه را در محیط آرام خانه فراهم می‌کند.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/20 border-r-4 border-amber-500 p-6 rounded-lg my-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚠️</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">هشدار پزشکی مهم</h3>
                  <p className="leading-relaxed">
                    بیماری گیلن باره یک وضعیت جدی پزشکی است که نیاز به نظارت تخصصی دارد. <strong className="font-bold">هرگز خودسرانه اقدام به درمان نکنید</strong> و در صورت مشاهده علائم مشکوک، فوراً با پزشک مشورت کنید.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">۱. چرا گیلن باره یک بیماری "سیستمی" است؟</h2>

            <p className="text-lg leading-relaxed mb-6">
              اگرچه گیلن باره ریشه عصبی دارد، اما عوارض آن تمام بدن را درگیر می‌کند. متخصص داخلی در ویزیت منزل بر سه محور اصلی نظارت دارد:
            </p>

            <ul className="list-disc pr-8 space-y-3 text-lg mb-6">
              <li>
                <strong>درگیری سیستم عصبی خودکار (Autonomic):</strong> این بیماری می‌تواند باعث نوسانات شدید و ناگهانی فشار خون و ضربان قلب شود.
              </li>
              <li>
                <strong>ضعف عضلات تنفسی:</strong> پایش سطح اکسیژن و توان تنفسی بیمار برای جلوگیری از خفگی.
              </li>
              <li>
                <strong>ریسک لخته شدن خون:</strong> به دلیل بی‌حرکتی طولانی‌مدت بیمار در بستر.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">۲. نقش حیاتی هولتر و اکو در مدیریت گیلن باره</h2>

            <p className="text-lg leading-relaxed mb-6">
              یکی از بزرگترین خطرات گیلن باره، <strong>آریتمی‌های قلبی ناگهانی</strong> است. سیستم عصبی که ضربان قلب را کنترل می‌کند، ممکن است در اثر این بیماری مختل شود.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">الف) هولتر مانیتورینگ قلب و فشار خون در منزل</h3>

            <p className="text-lg leading-relaxed mb-6">
              <strong>چرا ضروری است؟</strong> از آنجا که نوسانات قلب در گیلن باره غیرقابل پیش‌بینی است، یک نوار قلب ساده کافی نیست. ما با نصب <a href="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</a>، ریتم قلب بیمار را ۲۴ تا ۴۸ ساعت پایش می‌کنیم تا از بروز ایست قلبی یا ضربان‌های بسیار تند جلوگیری کنیم. همچنین هولتر فشار خون برای مدیریت نوسانات شدید فشار (افت یا خیز ناگهانی) که در این بیماران شایع است، نصب می‌شود.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">ب) اکوکاردیوگرافی و سونوگرافی داپلر در محل</h3>

            <ul className="list-disc pr-8 space-y-3 text-lg mb-6">
              <li>
                <strong>بررسی قدرت قلب:</strong> فشار ناشی از نوسانات عصبی می‌تواند به عضله قلب استرس وارد کند که با <a href="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</a> قابل بررسی است.
              </li>
              <li>
                <strong>سونوگرافی داپلر عروق پا:</strong> بیماران گیلن باره به دلیل فلج موقت و بی‌حرکتی، در معرض خطر شدید لخته شدن خون در پا (DVT) هستند. متخصصین نوید زندگی با انجام <a href="/articles/doppler-dvt" className="text-primary hover:underline">سونوگرافی داپلر در منزل</a>، از سلامت عروق و عدم وجود لخته اطمینان حاصل می‌کنند.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">۳. علائم پیشرونده که نیاز به ویزیت فوری متخصص داخلی دارند</h2>

            <ul className="list-disc pr-8 space-y-3 text-lg mb-6">
              <li>احساس سوزن‌سوزن شدن که از نوک انگشتان پا شروع شده و به سمت بالا می‌آید.</li>
              <li>ضعف در پاها که راه رفتن یا بالا رفتن از پله را غیرممکن می‌کند.</li>
              <li>دشواری در حرکت دادن چشم‌ها، صحبت کردن، جویدن یا بلعیدن.</li>
              <li>درد شدید که شبیه کرامپ یا گرفتگی عضلانی است و شب‌ها بدتر می‌شود.</li>
              <li>نوسان در ضربان قلب (خیلی تند یا خیلی کند).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">۴. خدمات توانبخشی و حمایتی در منزل</h2>

            <p className="text-lg leading-relaxed mb-6">
              درمان گیلن باره یک مسیر طولانی است. متخصص داخلی نوید زندگی با تنظیم رژیم غذایی (برای جلوگیری از تحلیل عضلانی) و تجویز داروهای لازم برای کنترل درد و جلوگیری از عفونت‌های ریوی، روند بهبودی را تسریع می‌کند. همچنین انجام <a href="/services/laboratory" className="text-primary hover:underline">آزمایش‌های دوره‌ای خون در منزل</a> برای پایش سطح الکترولیت‌ها و فاکتورهای التهابی توسط تیم ما انجام می‌شود.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">نتیجه‌گیری</h2>

            <p className="text-lg leading-relaxed mb-6">
              بیماری گیلن باره مسیری است که پیمودن آن نیاز به صبر و نظارت دقیق پزشکی دارد. جابه‌جایی این بیماران به دلیل ضعف شدید عضلانی بسیار دشوار و گاهی خطرناک است. مرکز نوید زندگی با آوردن متخصص داخلی، هولتر قلب، اکو و سونوگرافی داپلر به منزل، یک بخش مراقبتی پیشرفته را در کنار تخت بیمار ایجاد می‌کند تا امنیت و سلامت عزیزانتان در تمام مراحل بیماری حفظ شود.
            </p>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-primary mb-4">مراقبت تخصصی از بیماران گیلن باره در منزل</h3>
              <p className="text-lg leading-relaxed mb-4">
                برای <strong>ویزیت متخصص داخلی در منزل</strong>، <strong>هولتر قلب و فشار خون</strong>، <strong>اکوکاردیوگرافی</strong> و <strong>سونوگرافی داپلر عروق پا</strong>، همین حالا با نوید زندگی تماس بگیرید.
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
              <li>National Institute of Neurological Disorders and Stroke (NINDS). <em>Guillain-Barré Syndrome Fact Sheet.</em></li>
              <li>Mayo Clinic: Guillain-Barre syndrome symptoms & causes.</li>
              <li>The Lancet: Management of Guillain-Barré syndrome.</li>
            </ol>
          </article>

          <FAQSection faqs={faqItems} />

          <RelatedArticles articles={relatedArticles} />
        </div>
      </ArticleLayout>
    </>
  );
};

export default GuillainBarrePage;
