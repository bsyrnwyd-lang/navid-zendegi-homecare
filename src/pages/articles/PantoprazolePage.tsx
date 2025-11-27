import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import pantoprazoleImage from "@/assets/pantoprazole-medication.jpg";
import constipationImage from "@/assets/constipation-article.jpg";
import abdominalPainImage from "@/assets/abdominal-pain-article.jpg";
import generalDoctorImage from "@/assets/general-doctor-home-clean.jpg";

const PantoprazolePage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "قرص پنتوپرازول", url: "/articles/pantoprazole" },
  ];

  const faqs = [
    {
      question: "چرا پنتوپرازول باید قبل از صبحانه مصرف شود؟",
      answer: "پنتوپرازول بهترین اثر خود را زمانی می‌گذارد که پمپ‌های پروتون بیشترین فعالیت را دارند که معمولاً پس از ناشتایی طولانی‌مدت رخ می‌دهد. مصرف 30 تا 60 دقیقه قبل از صرف صبحانه (ناشتا) باعث می‌شود دارو در زمان مناسب وارد سیستم شده و اثر بخشی بیشتری داشته باشد."
    },
    {
      question: "آیا می‌توان قرص پنتوپرازول را نصف یا خرد کرد؟",
      answer: "خیر، قرص یا کپسول پنتوپرازول باید به صورت کامل بلعیده شود و نباید جویده، خرد یا نصف شود؛ زیرا این کار می‌تواند پوشش محافظتی دارو (Enteric-coated) را از بین برده و اثربخشی آن را کاهش دهد."
    },
    {
      question: "عوارض مصرف طولانی‌مدت پنتوپرازول چیست؟",
      answer: "مصرف طولانی‌مدت پنتوپرازول (بیش از یک سال) می‌تواند منجر به کمبود منیزیم و ویتامین B12، افزایش خطر شکستگی استخوان، افزایش خطر عفونت‌های روده‌ای (مانند C. diff) و در موارد نادر مشکلات کلیوی شود. بنابراین باید تحت نظارت پزشک مصرف شود."
    },
    {
      question: "چه زمانی باید پنتوپرازول را قطع کرد؟",
      answer: "پنتوپرازول نباید خودسرانه قطع شود. پزشک متخصص گوارش براساس بهبود علائم و نتایج آزمایشات، زمان مناسب قطع دارو یا کاهش دوز را تعیین می‌کند. معمولاً پس از بهبود کامل علائم، ممکن است دوز به تدریج کاهش یابد."
    },
    {
      question: "آیا پنتوپرازول با داروهای دیگر تداخل دارد؟",
      answer: "بله، پنتوپرازول می‌تواند با برخی داروها از جمله داروهای ضدانعقاد (مانند وارفارین)، داروهای HIV، و برخی داروهای قلبی تداخل داشته باشد. حتماً لیست کامل داروهای مصرفی خود را به پزشک اطلاع دهید تا از تداخلات دارویی جلوگیری شود."
    },
    {
      question: "چه آزمایش‌هایی در مصرف طولانی‌مدت لازم است؟",
      answer: "در صورت مصرف طولانی‌مدت پنتوپرازول (بیش از یک سال)، پزشک ممکن است آزمایش‌های خونی منظم برای بررسی سطح منیزیم و ویتامین B12 تجویز کند تا از بروز عوارض ناشی از کمبود این مواد جلوگیری شود."
    }
  ];

  const relatedArticles = [
    {
      title: "درد شکم: علل، انواع، تشخیص و مدیریت",
      description: "راهنمای کامل درد شکم شامل انواع درد حاد و مزمن، علل شایع و روش‌های تشخیص",
      image: abdominalPainImage,
      link: "/articles/abdominal-pain",
      category: "عمومی"
    },
    {
      title: "یبوست: علل، انواع، تشخیص و راهکارهای علمی",
      description: "راهنمای جامع یبوست شامل انواع یبوست حاد و مزمن، علل و روش‌های درمان",
      image: constipationImage,
      link: "/articles/constipation",
      category: "عمومی"
    },
    {
      title: "ویزیت پزشک عمومی در منزل",
      description: "دریافت خدمات ویزیت پزشک عمومی در منزل برای تشخیص و درمان مشکلات گوارشی",
      image: generalDoctorImage,
      link: "/general-doctor",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="قرص پنتوپرازول: کاربردها، نحوه مصرف، عوارض و نکات حیاتی | نوید زندگی"
        description="راهنمای کامل قرص پنتوپرازول (PPI): کاربردها در درمان ریفلاکس و زخم معده، نحوه مصرف صحیح، عوارض جانبی طولانی‌مدت و تداخلات دارویی"
        keywords="پنتوپرازول، نولپازا، PPI، ریفلاکس، GERD، زخم معده، سوزش سردل، عوارض پنتوپرازول، کمبود منیزیم، کمبود B12، داروهای گوارشی"
        canonical="https://navidzendegi.com/articles/pantoprazole"
        ogType="article"
        publishedTime="2025-01-15T13:00:00+03:30"
        modifiedTime="2025-01-15T13:00:00+03:30"
      />
      <ArticleSchema
        title="قرص پنتوپرازول (Pantoprazole): کاربردها، نحوه مصرف، عوارض جانبی و نکات حیاتی"
        description="راهنمای جامع قرص پنتوپرازول شامل کاربردها، نحوه مصرف و عوارض جانبی"
        publishedTime="2025-01-15T13:00:00+03:30"
        modifiedTime="2025-01-15T13:00:00+03:30"
        image="/src/assets/pantoprazole-medication.jpg"
      />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              قرص پنتوپرازول (Pantoprazole): کاربردها، نحوه مصرف، عوارض جانبی و نکات حیاتی
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>نویسنده: تیم پزشکی نوید زندگی</span>
              <span>تاریخ انتشار: 15 ژانویه 2025</span>
            </div>
          </header>

          <img
            src={pantoprazoleImage}
            alt="قرص پنتوپرازول - داروی مهارکننده پمپ پروتون"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
            loading="eager"
          />

          <div className="bg-destructive/10 border-r-4 border-destructive p-6 rounded-lg mb-8">
            <p className="text-destructive-foreground font-semibold mb-2">
              ⚠️ هشدار مهم: خودسرانه مصرف دارو ممنوع است
            </p>
            <p className="text-sm text-muted-foreground">
              پنتوپرازول باید فقط با تجویز پزشک و تحت نظارت متخصص مصرف شود. مصرف طولانی‌مدت بدون پیگیری پزشکی می‌تواند عوارض جدی داشته باشد.
            </p>
          </div>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              قرص پنتوپرازول (با نام‌های تجاری مانند نولپازا، پنتومید، و پروتونیکس) یکی از متداول‌ترین داروهای تجویزی برای درمان بیماری‌های مرتبط با اسید معده است. این دارو متعلق به دسته‌ای به نام مهارکننده‌های پمپ پروتون (PPIs) است و با کاهش شدید تولید اسید معده، به کاهش علائم و بهبود آسیب‌های گوارشی کمک می‌کند.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              کاربردها و مکانیسم عمل
            </h2>
            <p>
              پنتوپرازول با مهار تولید اسید معده، برای درمان و پیشگیری از اختلالات زیر به کار می‌رود:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              بیماری ریفلاکس معده به مری (GERD)
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>درمان سوزش سردل (Heartburn)، برگشت اسید و مایعات به مری، و بهبود علائمی مانند مشکل در بلع و سرفه مزمن ناشی از ریفلاکس.</li>
              <li>کمک به التیام ورم مری (Erosive Esophagitis) ناشی از آسیب اسید.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              زخم معده و اثنی‌عشر (Peptic Ulcers)
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li>درمان و پیشگیری از زخم‌های گوارشی.</li>
              <li>اغلب در کنار آنتی‌بیوتیک‌هایی مانند آموکسی‌سیلین و کلاریترومایسین برای ریشه‌کنی عفونت هلیکوباکتر پیلوری (H. pylori) تجویز می‌شود.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              سایر کاربردها
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li><strong>سندرم زولینگر-الیسون:</strong> یک بیماری نادر که در آن معده بیش از حد طبیعی اسید تولید می‌کند.</li>
              <li><strong>پیشگیری:</strong> کاهش خطر زخم معده و خونریزی گوارشی در افرادی که داروهای ضد التهابی غیراستروئیدی (NSAIDs) مانند آسپرین یا ایبوپروفن را به صورت طولانی‌مدت مصرف می‌کنند.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              مکانیسم عمل
            </h3>
            <p>
              پنتوپرازول به طور خاص روی پمپ پروتون (H+/K+ ATPase) در سلول‌های جداری معده اثر می‌گذارد. این پمپ، مسئول نهایی ترشح اسید کلریدریک به داخل معده است. پنتوپرازول با مهار برگشت‌ناپذیر این پمپ‌ها، تولید اسید معده را تا حد زیادی سرکوب می‌کند.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              نحوه مصرف و نکات مهم
            </h2>
            
            <ul className="list-disc list-inside space-y-3 mr-6">
              <li>
                <strong>زمان مصرف:</strong> پنتوپرازول معمولاً روزی یک بار، حدود 30 تا 60 دقیقه قبل از صرف صبحانه (ناشتا) مصرف می‌شود. دلیل این امر این است که دارو بهترین اثر خود را زمانی می‌گذارد که پمپ‌های پروتون بیشترین فعالیت را دارند (که معمولاً پس از ناشتایی طولانی‌مدت رخ می‌دهد).
              </li>
              <li>
                <strong>بلع کامل:</strong> قرص یا کپسول باید به صورت کامل بلعیده شود و نباید جویده، خرد یا نصف شود؛ زیرا این کار می‌تواند پوشش محافظتی دارو (Enteric-coated) را از بین برده و اثربخشی آن را کاهش دهد.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              عوارض جانبی
            </h2>
            <p>
              پنتوپرازول به طور کلی دارویی با تحمل بالا است، اما می‌تواند عوارض جانبی مختلفی داشته باشد:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۱. عوارض جانبی شایع (معمولاً خفیف و موقت)
            </h3>
            <ul className="list-disc list-inside space-y-2 mr-6">
              <li><strong>گوارشی:</strong> اسهال، حالت تهوع، نفخ و گاز روده، <a href="/articles/abdominal-pain" className="text-primary hover:underline">درد شکم</a>، <a href="/articles/constipation" className="text-primary hover:underline">یبوست</a>.</li>
              <li><strong>عمومی:</strong> سردرد، سرگیجه، درد مفاصل، خستگی.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">
              ۲. عوارض جانبی جدی (نیاز به پیگیری پزشکی)
            </h3>
            <p>
              مصرف پنتوپرازول، به ویژه در دوره‌های طولانی (بیش از یک سال) با افزایش ریسک برخی مشکلات سلامتی مرتبط است:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">عارضه جانبی</th>
                    <th className="border border-border p-3 text-right">توضیحات و علائم</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">کمبود منیزیم و ویتامین B12</td>
                    <td className="border border-border p-3">مصرف طولانی‌مدت جذب این مواد مغذی را کاهش می‌دهد. کمبود منیزیم می‌تواند منجر به گرفتگی عضلانی، ضعف و ضربان قلب نامنظم شود. کمبود ویتامین B12 باعث کم‌خونی، ضعف و مشکلات عصبی (مانند احساس سوزن سوزن شدن) می‌شود.</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">افزایش خطر شکستگی استخوان</td>
                    <td className="border border-border p-3">مصرف مزمن PPIs (به ویژه در دوزهای بالا) با کاهش جذب کلسیم، ریسک شکستگی‌های لگن، مچ دست و ستون فقرات را بالا می‌برد (به ویژه در سالمندان).</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">افزایش خطر عفونت‌های روده‌ای</td>
                    <td className="border border-border p-3">کاهش اسید معده به عنوان یک سد دفاعی طبیعی، خطر ابتلا به عفونت‌های گوارشی خاص (مانند اسهال شدید ناشی از باکتری Clostridioides difficile یا C. diff) را افزایش می‌دهد.</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-semibold">مشکلات کلیوی</td>
                    <td className="border border-border p-3">در موارد نادری، PPIs می‌توانند باعث یک نوع التهاب حاد کلیه (نفریت بینابینی حاد) شوند. علائم شامل تب، بثورات پوستی، حالت تهوع و کاهش حجم ادرار است.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">پولیپ غدد فوندیک</td>
                    <td className="border border-border p-3">در مصرف طولانی‌مدت، ممکن است توده‌های خوش‌خیم کوچکی در دیواره معده ایجاد شود که معمولاً بی‌خطر هستند.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              هشدارها و ملاحظات مهم
            </h2>

            <ul className="list-disc list-inside space-y-3 mr-6">
              <li>
                <strong>تشخیص اشتباه:</strong> سوزش سردل و درد قفسه سینه می‌تواند با علائم اولیه <a href="/articles/heart-attack-symptoms" className="text-primary hover:underline">حمله قلبی</a> اشتباه گرفته شود. در صورت بروز درد شدید قفسه سینه، تنگی نفس یا تعریق، باید فوراً به پزشک مراجعه شود.
              </li>
              <li>
                <strong>تداخلات دارویی:</strong> پنتوپرازول می‌تواند با برخی داروها، از جمله داروهای ضدانعقاد (مانند <a href="/articles/warfarin" className="text-primary hover:underline">وارفارین</a>) و برخی داروهای HIV، تداخل داشته باشد. حتماً لیست کامل داروهای مصرفی خود را به پزشک اطلاع دهید.
              </li>
              <li>
                <strong>پایش:</strong> در صورت مصرف طولانی‌مدت (بیش از یک سال)، پزشک ممکن است آزمایش‌های خونی منظم برای بررسی سطح منیزیم و ویتامین B12 تجویز کند.
              </li>
            </ul>

            <div className="bg-primary/10 border-r-4 border-primary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                مشاوره تخصصی برای مصرف ایمن پنتوپرازول
              </h3>
              <p className="text-foreground mb-4">
                مصرف طولانی‌مدت پنتوپرازول باید با احتیاط و تحت نظر متخصص باشد تا از بروز عوارض جانبی جلوگیری شود. برای مشاوره تخصصی با فوق تخصص گوارش و تنظیم دوز و مدت زمان مناسب درمان، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <a href="tel:09386117912">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="ml-2 h-5 w-5" />
                  مشاوره پزشکی: 09386117912
                </Button>
              </a>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              منابع (References)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                MedlinePlus Drug Information. (2023). Pantoprazole.
              </li>
              <li>
                Mayo Clinic. (2024). Pantoprazole (Oral Route) - Side effects & dosage.
              </li>
              <li>
                NHS. (2024). Side effects of pantoprazole.
              </li>
            </ol>
          </div>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default PantoprazolePage;
