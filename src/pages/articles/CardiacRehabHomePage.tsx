import { Link } from "react-router-dom";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import cardiacRehabHomeImage from "@/assets/cardiac-rehab-home.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import silentHeartAttackImage from "@/assets/silent-heart-attack.jpg";

const CardiacRehabHomePage = () => {
  const publishDate = "1404/11/11";
  const isoPublishDate = "2026-01-30";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بازتوانی قلبی در منزل", url: "/articles/cardiac-rehab-home" }
  ];

  const faqs = [
    {
      question: "چه زمانی بعد از سکته قلبی می‌توانم ورزش کنم؟",
      answer: "شروع فعالیت بدنی باید به صورت تدریجی و تحت نظارت پزشک باشد. معمولاً از هفته اول با پیاده‌روی آرام ۵ تا ۱۰ دقیقه‌ای در خانه شروع می‌شود و از هفته سوم به بعد می‌توان زمان و شدت را افزایش داد. قبل از شروع، انجام اکو و نوار قلب در منزل توصیه می‌شود."
    },
    {
      question: "آیا ورزش بعد از جراحی قلب خطرناک است؟",
      answer: "ورزش بدون برنامه می‌تواند خطرناک باشد، اما استراحت مطلق دشمن قلب است. تحقیقات نشان می‌دهد بازتوانی قلبی ریسک بستری مجدد را تا ۲۵٪ کاهش می‌دهد. نکته کلیدی این است که فعالیت تحت نظارت متخصص و با برنامه علمی انجام شود."
    },
    {
      question: "چه ورزش‌هایی برای بیماران قلبی مناسب است؟",
      answer: "ورزش‌های هوازی سبک مانند پیاده‌روی، شنا (اگر پزشک تایید کند)، دوچرخه ثابت و حرکات کششی آرام توصیه می‌شود. ورزش‌های سنگین مثل وزنه‌برداری سنگین یا دو سرعتی بدون تایید پزشک ممنوع است."
    },
    {
      question: "چطور بفهمم شدت ورزش برایم زیاد است؟",
      answer: "اگر در حین ورزش نمی‌توانید به راحتی صحبت کنید، دچار نفس‌نفس زدن شدید می‌شوید، درد یا فشار در سینه حس می‌کنید، یا سرگیجه و تعریق سرد دارید، بلافاصله ورزش را متوقف کنید و با پزشک تماس بگیرید."
    },
    {
      question: "آیا می‌توانم بدون رفتن به کلینیک بازتوانی کنم؟",
      answer: "بله، با خدمات بازتوانی در منزل نوید زندگی این امکان فراهم است. متخصص قلب با انجام اکو و نوار قلب در منزل، ظرفیت قلب شما را ارزیابی کرده و برنامه ورزشی شخصی‌سازی شده و محدوده ضربان قلب ایمن را تعیین می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "بررسی قدرت پمپاژ قلب و عملکرد دریچه‌ها با تجهیزات پیشرفته در محیط امن خانه شما",
      image: echoHomeImage,
      link: "/services/echo-ecg",
      category: "خدمات قلب"
    },
    {
      title: "نوار قلب در منزل",
      description: "ثبت فعالیت الکتریکی قلب برای تشخیص آریتمی و بررسی آمادگی برای ورزش",
      image: ecgHomeImage,
      link: "/articles/ecg-guide",
      category: "خدمات قلب"
    },
    {
      title: "سکته قلبی خاموش؛ وقتی قلب بی‌صدا آسیب می‌بیند",
      description: "علائم سکته قلبی بدون درد و اهمیت چک‌آپ دوره‌ای با اکو و نوار قلب",
      image: silentHeartAttackImage,
      link: "/articles/silent-heart-attack",
      category: "قلب و عروق"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="بازتوانی قلبی در منزل | ورزش ایمن بعد از سکته یا جراحی قلب"
        description="راهنمای کامل بازتوانی قلبی در منزل: شروع تدریجی ورزش بعد از سکته قلبی، نقش اکو و نوار قلب در تعیین ظرفیت قلب، علائم هشداردهنده و خدمات تخصصی نوید زندگی"
        keywords="بازتوانی قلبی در منزل, ورزش بعد از سکته قلبی, اکو در منزل, نوار قلب در محل, ویزیت متخصص قلب در منزل, تقویت قلب در خانه, نوید زندگی"
        canonical="https://navidzendegi.com/articles/cardiac-rehab-home"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
      />
      <ArticleSchema
        title="بازتوانی قلبی در منزل؛ چطور بعد از سکته یا جراحی به زندگی عادی برگردیم؟"
        description="راهنمای کامل بازتوانی قلبی در منزل و ورزش ایمن بعد از حوادث قلبی با نظارت متخصص"
        publishedTime={isoPublishDate}
        modifiedTime={isoPublishDate}
        image={cardiacRehabHomeImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              بازتوانی قلبی در منزل؛ چطور بعد از سکته یا جراحی به زندگی عادی برگردیم؟
            </h1>
            <p className="text-muted-foreground">
              تاریخ انتشار: {publishDate}
            </p>
          </header>

          <img
            src={cardiacRehabHomeImage}
            alt="بازتوانی قلبی در منزل - ورزش ایمن بعد از سکته قلبی"
            className="w-full h-auto rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              بسیاری از بیماران پس از ترخیص از بیمارستان، از انجام هرگونه فعالیت بدنی می‌ترسند. جملاتی مثل «نکند دوباره به قلبم فشار بیاید؟» یا «آیا پیاده‌روی برای من خطرناک است؟» رایج‌ترین دغدغه‌های خانواده‌هاست. حقیقت این است که <strong>استراحت مطلق دشمن قلب است</strong>؛ اما ورزش بدون برنامه نیز می‌تواند خطرناک باشد.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              ما در مرکز نوید زندگی با ارائه خدمات بازتوانی و پایش در منزل، پل میان تخت بیمارستان و بازگشت به فعالیت‌های روزمره را برای شما می‌سازیم.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-foreground font-semibold">
                ⚠️ هشدار: هرگز بدون مشورت با پزشک متخصص قلب، برنامه ورزشی جدید شروع نکنید. خوددرمانی در بازتوانی قلبی می‌تواند خطرناک باشد.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۱. بازتوانی قلبی چیست و چرا حیاتی است؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              بازتوانی قلبی مجموعه‌ای از ورزش‌های کنترل شده، آموزش‌های تغذیه‌ای و مشاوره‌های پزشکی است که هدف آن:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>تقویت عضله قلب</strong> پس از آسیب</li>
              <li><strong>کاهش ضربان قلب و فشار خون</strong> در زمان استراحت</li>
              <li><strong>بهبود روحیه</strong> و کاهش افسردگی پس از بیماری</li>
              <li><strong>جلوگیری از بستری شدن مجدد</strong> در بیمارستان (تا ۲۵٪ کاهش ریسک)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۲. مراحل شروع فعالیت بدنی در منزل
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              شروع ورزش باید طبق پروتکل‌های علمی و به صورت تدریجی باشد:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              هفته اول و دوم: فعالیت‌های سبک در خانه
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              در این مرحله، هدف فقط جلوگیری از لخته شدن خون در پاهاست. پیاده‌روی آرام در فضای خانه به مدت ۵ تا ۱۰ دقیقه کافی است.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>نکته مهم:</strong> هرگز تا حد نفس‌نفس زدن شدید یا خستگی مفرط ورزش نکنید.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              هفته سوم به بعد: افزایش تدریجی تحت نظارت
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              در این مرحله، زمان فعالیت به ۲۰ تا ۳۰ دقیقه افزایش می‌یابد. ورزش‌های هوازی سبک مانند پیاده‌روی تند (اگر پزشک تایید کند) توصیه می‌شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۳. نقش کلیدی نوید زندگی در بازتوانی ایمن
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              بزرگترین مانع ورزش کردن بیماران، «ترس» است. ما این ترس را با ابزارهای تشخیصی در منزل از بین می‌بریم:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              الف) تست‌های دوره‌ای نوار قلب (ECG) در منزل
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              پزشک متخصص ما در زمان <Link to="/services/echo-ecg" className="text-primary hover:underline">ویزیت در منزل</Link>، نوار قلب شما را بررسی می‌کند تا مطمئن شود قلب در حالت استراحت و فعالیت، ریتم پایداری دارد. این کار به بیمار اعتماد به نفس می‌دهد که بداند سیستم برقی قلبش برای ورزش آماده است.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ب) اکوکاردیوگرافی (اکو) در منزل؛ سنجش ظرفیت قلب
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              پیش از شروع هرگونه برنامه ورزشی جدی، باید بدانیم قدرت پمپاژ قلب (EF) چقدر است. با انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link>، متخصص قلب نوید زندگی مشخص می‌کند که قلب شما تا چه حد توان تحمل بار اضافی را دارد و محدوده ضربان قلب ایمن برای شما چقدر است.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              ج) پایش اکسیژن و فشار خون حین تمرین
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              تیم مراقبتی ما به شما آموزش می‌دهد که چطور در خانه با دستگاه‌های ساده، ضربان قلب و سطح اکسیژن خود را چک کنید تا هرگز وارد فاز خطر نشوید.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۴. علائم هشداردهنده؛ چه زمانی ورزش را قطع کنیم؟
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              اگر در حین انجام فعالیت بدنی در منزل دچار هر یک از علائم زیر شدید، بلافاصله بنشینید و با مرکز نوید زندگی تماس بگیرید:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li>احساس درد، سنگینی یا فشار در مرکز قفسه سینه</li>
              <li>سرگیجه شدید یا احساس سبکی سر</li>
              <li>تنگی نفس غیرعادی (اگر نمی‌توانید در حین راه رفتن به راحتی صحبت کنید)</li>
              <li>تعریق سرد ناگهانی</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              ۵. چند توصیه طلایی برای ورزشکاران قلبی
            </h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-6">
              <li><strong>گرم کردن و سرد کردن:</strong> همیشه ۵ دقیقه اول را به حرکات کششی بسیار آرام اختصاص دهید.</li>
              <li><strong>دمای محیط:</strong> در هوای بسیار گرم یا بسیار سرد ورزش نکنید (آلودگی هوا را نیز در نظر بگیرید).</li>
              <li><strong>تداوم:</strong> ورزش کوتاه‌مدت اما منظم (۵ روز در هفته) بسیار بهتر از ورزش سنگین و پراکنده است.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              نتیجه‌گیری
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              بازگشت به زندگی پرنشاط حق شماست. با همراهی تیم متخصصین نوید زندگی، شما دیگر تنها نیستید. ما با انجام ویزیت، اکو و <Link to="/articles/ecg-guide" className="text-primary hover:underline">نوار قلب در منزل</Link>، امنیت شما را تضمین می‌کنیم تا بتوانید با خیالی آسوده، قدم‌های اول را به سوی سلامتی بردارید.
            </p>

            {/* CTA Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                درخواست خدمات بازتوانی قلبی در منزل
              </h3>
              <p className="text-foreground/80 mb-4">
                برای ارزیابی ظرفیت قلب با اکو، انجام نوار قلب و دریافت برنامه ورزشی شخصی‌سازی شده با ما تماس بگیرید:
              </p>
              <a
                href="tel:09386117912"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 تماس: ۰۹۳۸۶۱۱۷۹۱۲
              </a>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-8">
              <h4 className="font-bold text-foreground mb-2">منابع معتبر علمی:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• American Association of Cardiovascular and Pulmonary Rehabilitation (AACVPR)</li>
                <li>• Mayo Clinic: Cardiac rehabilitation: Recovering from a heart attack</li>
                <li>• European Society of Cardiology (ESC): Exercise and physical activity in patients with heart disease</li>
              </ul>
            </div>
          </div>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>
    </ArticleLayout>
  );
};

export default CardiacRehabHomePage;
