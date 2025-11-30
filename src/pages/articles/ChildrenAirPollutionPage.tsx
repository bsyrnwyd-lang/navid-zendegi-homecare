import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import childrenAirPollutionImage from "@/assets/children-air-pollution.jpg";
import asthmaImage from "@/assets/asthma-treatment.jpg";
import airPollutionImage from "@/assets/air-pollution-article.jpg";
import childrenFeverImage from "@/assets/children-fever-article.jpg";

const ChildrenAirPollutionPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تأثیر آلودگی هوا بر سلامت کودکان", url: "/articles/children-air-pollution" }
  ];

  const faqItems = [
    {
      question: "چرا کودکان نسبت به بزرگسالان در برابر آلودگی هوا آسیب‌پذیرتر هستند؟",
      answer: "کودکان به دلایل متعددی آسیب‌پذیرتر هستند: سرعت تنفس بالاتر (حجم هوای بیشتر به ازای وزن بدن)، سیستم ایمنی نابالغ، ارتفاع کمتر از زمین (تماس بیشتر با آلاینده‌های سنگین)، و ریه‌های در حال رشد که قرار گرفتن در معرض آلودگی می‌تواند باعث کاهش دائمی ظرفیت ریوی شود."
    },
    {
      question: "آلودگی هوا چه تأثیراتی بر مغز و سیستم عصبی کودکان دارد؟",
      answer: "ذرات ریز آلاینده می‌توانند از سد خونی-مغزی عبور کرده یا از طریق التهاب سیستمیک بر رشد مغز تأثیر بگذارند. این موضوع می‌تواند منجر به کاهش بهره هوشی (IQ)، اختلال در عملکرد حافظه و تمرکز، و افزایش خطر اختلالات رفتاری مانند ADHD و رفتارهای مرتبط با اوتیسم شود."
    },
    {
      question: "در روزهای با آلودگی شدید چه اقداماتی برای حفاظت از کودکان باید انجام دهیم؟",
      answer: "در روزهای با شاخص کیفیت هوا (AQI) بالا: فعالیت‌های خارج از منزل را محدود کنید، از تصفیه‌کننده‌های هوا با فیلتر HEPA استفاده کنید، علائم تنفسی را پایش کنید، و در صورت مشاهده سرفه مداوم، تنگی نفس یا خس‌خس سینه فوراً به پزشک مراجعه کنید. برای کودکان مبتلا به آسم، داروهای کنترلی را همیشه در دسترس داشته باشید."
    },
    {
      question: "آلودگی هوا چه تأثیری بر رشد ریوی کودکان دارد؟",
      answer: "قرار گرفتن مزمن در معرض آلاینده‌های هوا می‌تواند باعث کاهش دائمی ظرفیت ریوی و اختلال در تکامل کامل راه‌های هوایی شود. این تأثیرات می‌تواند تا بزرگسالی ادامه داشته و خطر ابتلا به بیماری‌های تنفسی مزمن را افزایش دهد."
    },
    {
      question: "آیا قرار گرفتن در معرض آلودگی هوا در دوران بارداری می‌تواند بر سلامت نوزاد تأثیر بگذارد؟",
      answer: "بله، قرار گرفتن مادران باردار در معرض آلودگی هوا با افزایش خطر تولد زودهنگام و وزن کم نوزاد هنگام تولد مرتبط است. این موضوع اهمیت محافظت از مادران باردار در برابر آلودگی هوا را نشان می‌دهد."
    },
    {
      question: "چه تجهیزاتی برای محافظت تنفسی کودکان در روزهای آلوده توصیه می‌شود؟",
      answer: "برای کودکان مبتلا به مشکلات تنفسی، استفاده از دستگاه نبولایزر و تصفیه‌کننده‌های هوا با فیلتر HEPA توصیه می‌شود. همچنین، اسپری‌های نجات مانند سالبوتامول برای کودکان مبتلا به آسم باید همیشه در دسترس باشد. برای <a href='/services/medical-equipment-rental' class='text-primary hover:underline'>اجاره تجهیزات تنفسی در منزل</a> می‌توانید با نوید زندگی تماس بگیرید."
    }
  ];

  const relatedArticles = [
    {
      title: "آسم و روش‌های درمانی",
      description: "راهنمای کامل درمان آسم، داروهای کنترل‌کننده و پیشگیری از حملات آسم در کودکان و بزرگسالان",
      image: asthmaImage,
      link: "/articles/asthma",
      category: "تنفسی"
    },
    {
      title: "تأثیر آلودگی هوا بر قلب و ریه",
      description: "بررسی جامع اثرات آلودگی هوا بر سیستم قلبی-عروقی، ذرات PM2.5، شاخص کیفیت هوا (AQI)",
      image: airPollutionImage,
      link: "/articles/air-pollution-effects",
      category: "محیط زیست و سلامت"
    },
    {
      title: "تب در کودکان: علت‌ها و درمان",
      description: "راهنمای جامع تشخیص و درمان تب در کودکان، چه زمانی باید نگران بود و روش‌های مدیریت تب در منزل",
      image: childrenFeverImage,
      link: "/articles/children-fever",
      category: "کودکان"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تأثیر آلودگی هوا بر سلامت کودکان: آسیب‌های ریوی، عصبی و رشدی | نوید زندگی"
        description="بررسی جامع تأثیرات مخرب آلودگی هوا بر سیستم تنفسی، مغز و رشد کودکان. آسیب‌پذیری بالای کودکان در برابر PM2.5، تأثیرات بر بهره هوشی، آسم و بیماری‌های تنفسی."
        keywords="آلودگی هوا کودکان، تأثیر آلودگی هوا بر کودکان، آسم کودکان، PM2.5، AQI، سلامت تنفسی کودکان، رشد مغزی کودکان، متخصص اطفال در منزل، فوق تخصص ریه کودکان، نبولایزر"
        canonical="https://navidzendegi.com/articles/children-air-pollution"
        ogImage={childrenAirPollutionImage}
        ogType="article"
        author="نوید زندگی"
        publishedTime="2024-02-20"
        modifiedTime="2024-02-20"
      />
      
      <ArticleSchema
        title="تأثیر آلودگی هوا بر سلامت کودکان: آسیب‌های ریوی، عصبی و رشدی"
        description="بررسی جامع تأثیرات مخرب آلودگی هوا بر سیستم تنفسی، مغز و رشد کودکان"
        publishedTime="2024-02-20"
        modifiedTime="2024-02-20"
        image={childrenAirPollutionImage}
      />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              👶 تأثیر <strong>آلودگی هوا</strong> بر سلامت <strong>کودکان</strong>: آسیب‌های ریوی، عصبی و رشدی
            </h1>

            <div className="my-8">
              <img 
                src={childrenAirPollutionImage} 
                alt="تأثیر آلودگی هوا بر سلامت کودکان" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <p className="lead text-xl text-muted-foreground mb-8">
              <strong>کودکان</strong> به دلیل تفاوت‌های فیزیولوژیکی و رفتاری نسبت به بزرگسالان، به شدت در برابر اثرات مخرب آلودگی هوا آسیب‌پذیر هستند. سیستم‌های در حال رشد آن‌ها (به ویژه ریه‌ها و مغز) در برابر سموم محیطی حساس‌تر هستند و قرار گرفتن در معرض آلاینده‌ها، حتی در غلظت‌های پایین، می‌تواند تأثیرات بلندمدت و برگشت‌ناپذیری بر سلامت آن‌ها بگذارد.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
              دلایل آسیب‌پذیری بیشتر کودکان
            </h2>

            <p>
              آسیب‌پذیری بالا در کودکان ناشی از عوامل زیر است:
            </p>

            <ul>
              <li>
                <strong>سرعت تنفس بالاتر:</strong> کودکان نسبت به وزن بدنشان، حجم هوای بیشتری تنفس می‌کنند. این به معنای ورود دوز بیشتری از آلاینده‌ها به ازای هر کیلوگرم وزن بدن است.
              </li>
              <li>
                <strong>سیستم ایمنی نابالغ:</strong> سیستم ایمنی کودک هنوز در حال تکامل است و کمتر می‌تواند در برابر التهاب و استرس اکسیداتیو ناشی از ذرات آلاینده، به ویژه ذرات ریز (PM₂.₅) مقاومت کند.
              </li>
              <li>
                <strong>ارتفاع کمتر:</strong> کودکان هنگام بازی و فعالیت، به زمین نزدیک‌تر هستند و در ارتفاعی تنفس می‌کنند که غلظت ذرات سنگین‌تر و آلاینده‌های نزدیک سطح زمین ممکن است بالاتر باشد.
              </li>
              <li>
                <strong>ریه‌های در حال رشد:</strong> قرار گرفتن در معرض آلودگی در سنین اولیه، می‌تواند باعث کاهش دائمی ظرفیت ریوی و اختلال در تکامل کامل راه‌های هوایی شود.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
              تأثیرات حاد و مزمن بر سلامت
            </h2>

            <p>
              آلودگی هوا بر روی چندین سیستم بدن کودک، از تنفس گرفته تا مغز، تأثیر می‌گذارد:
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
              ۱. آسیب‌های ریوی و تنفسی
            </h3>

            <ul>
              <li>
                <strong>آسم و آلرژی:</strong> آلودگی هوا، به ویژه PM₂.₅ و دی‌اکسید نیتروژن (NO₂)، یک عامل اصلی در <strong>توسعه</strong> و <strong>تشدید حملات آسم</strong> در کودکان است. این آلاینده‌ها باعث التهاب مزمن در راه‌های هوایی شده و حساسیت به مواد آلرژی‌زا را افزایش می‌دهند. برای اطلاعات بیشتر در مورد <a href="/articles/asthma" className="text-primary hover:underline">آسم و روش‌های درمانی</a> مراجعه کنید.
              </li>
              <li>
                <strong>برونشیت و عفونت‌های تنفسی:</strong> افزایش شیوع برونشیت، ذات‌الریه و عفونت‌های گوش میانی در مناطقی با آلودگی هوای بالا مشاهده می‌شود.
              </li>
              <li>
                <strong>کاهش عملکرد ریه:</strong> قرار گرفتن مزمن در معرض آلاینده‌ها در دوران کودکی با کاهش <strong>حجم و ظرفیت ریوی</strong> در بزرگسالی مرتبط است.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
              ۲. تأثیرات بر مغز و سیستم عصبی
            </h3>

            <ul>
              <li>
                <strong>اختلال در رشد شناختی:</strong> ذرات ریز آلاینده می‌توانند از سد خونی-مغزی عبور کنند یا از طریق التهاب سیستمیک، بر رشد مغز تأثیر بگذارند. این موضوع با کاهش <strong>بهره هوشی (IQ)</strong> و اختلال در عملکرد حافظه و تمرکز مرتبط است.
              </li>
              <li>
                <strong>اختلالات رفتاری:</strong> شواهدی وجود دارد که قرار گرفتن در معرض آلودگی هوا در دوران جنینی و کودکی، می‌تواند خطر ابتلا به <strong>اختلال کم‌توجهی/بیش‌فعالی (ADHD)</strong> و رفتارهای مرتبط با اوتیسم را افزایش دهد.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
              ۳. سایر تأثیرات
            </h3>

            <ul>
              <li>
                <strong>سلامت قلبی:</strong> آلودگی هوا می‌تواند باعث افزایش التهاب در سیستم عروقی کودک شده و حتی در سنین پایین، زمینه را برای بیماری‌های قلبی-عروقی در بزرگسالی فراهم کند.
              </li>
              <li>
                <strong>وزن کم هنگام تولد:</strong> قرار گرفتن مادران باردار در معرض آلودگی هوا با افزایش خطر <strong>تولد زودهنگام</strong> و <strong>وزن کم نوزاد هنگام تولد</strong> مرتبط است.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
              اقدامات حمایتی و مدیریتی در منزل
            </h2>

            <p>
              در روزهای با آلودگی شدید، مدیریت سلامت کودکان نیازمند اقدامات زیر است:
            </p>

            <ul>
              <li>
                <strong>محدود کردن فعالیت در فضای باز:</strong> در روزهایی که شاخص کیفیت هوا (AQI) بالا است، کودکان باید از بازی و ورزش در خارج از منزل خودداری کنند.
              </li>
              <li>
                <strong>استفاده از تصفیه‌کننده‌های هوا:</strong> در محیط‌های داخلی از دستگاه‌های تصفیه‌کننده هوا با فیلتر <strong>HEPA</strong> استفاده شود.
              </li>
              <li>
                <strong>پایش علائم:</strong> در صورت مشاهده علائمی مانند سرفه مداوم، تنگی نفس یا خس‌خس سینه، به سرعت به پزشک مراجعه شود.
              </li>
              <li>
                <strong>آمادگی برای تشدید آسم:</strong> والدینی که کودک مبتلا به آسم دارند، باید داروهای کنترلی و اسپری‌های نجات (مانند <strong>سالبوتامول</strong>) را همیشه در دسترس داشته باشند.
              </li>
            </ul>

            <div className="bg-primary/5 border-r-4 border-primary p-6 my-8 rounded">
              <p className="text-lg font-semibold mb-2">
                ⚠️ هشدار: عدم خودسرانه مصرف دارو
              </p>
              <p className="text-muted-foreground">
                هیچ‌گاه بدون مشورت با پزشک متخصص اطفال یا فوق‌تخصص ریه کودکان، خودسرانه به کودکان دارو ندهید. مصرف نادرست داروها می‌تواند عوارض جانبی جدی داشته باشد و وضعیت بیماری را بدتر کند.
              </p>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg my-10 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                سلامت ریه و تنفس کودکان در اولویت است
              </h3>
              <p className="text-lg mb-6">
                برای <strong>ویزیت متخصص اطفال یا فوق‌تخصص ریه کودکان در منزل</strong> جهت ارزیابی آسیب‌های تنفسی ناشی از آلودگی و <a href="/services/medical-equipment-rental" className="text-primary hover:underline font-semibold">اجاره تجهیزات تنفسی مانند دستگاه نبولایزر</a>، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <a
                href="tel:09386117912"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                تماس: 09386117912
              </a>
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-4 text-foreground">
              منابع (References)
            </h3>

            <ol className="text-sm text-muted-foreground">
              <li>
                <strong>World Health Organization (WHO).</strong> <em>Air pollution and child health: prescribing clean air.</em> (Global Health Authority Source).
              </li>
              <li>
                <strong>U.S. Environmental Protection Agency (EPA).</strong> <em>Why Children are More Vulnerable to Air Pollution.</em> (Government Environmental Health Source).
              </li>
              <li>
                <strong>Gauderman, W. J., et al.</strong> (2004). The effect of air pollution on lung development from 10 to 18 years of age. <em>The New England Journal of Medicine</em>. (Major Academic Journal).
              </li>
              <li>
                <strong>Perera, F. P., et al.</strong> (2013). Impact of air pollution on the neurodevelopment of children. <em>Current Environmental Health Reports</em>. (Academic Journal Review).
              </li>
            </ol>
          </article>

          <div className="mt-12">
            <FAQSection faqs={faqItems} />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          <div className="mt-12">
            <PricingInfo />
          </div>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default ChildrenAirPollutionPage;
