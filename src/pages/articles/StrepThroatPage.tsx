import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import strepThroatImage from "@/assets/strep-throat-article.jpg";
import coldVsFluImage from "@/assets/cold-vs-flu-article.jpg";
import childrenFeverImage from "@/assets/children-fever-article.jpg";
import adultFeverImage from "@/assets/adult-fever-article.jpg";

const StrepThroatPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "گلو درد چرکی", url: "/articles/strep-throat" }
  ];

  const faqs = [
    {
      question: "گلو درد چرکی چقدر طول می‌کشد؟",
      answer: "با درمان آنتی‌بیوتیکی، علائم معمولاً ظرف ۲۴ تا ۴۸ ساعت بهبود می‌یابند. بدون درمان، بیماری می‌تواند ۷ تا ۱۰ روز طول بکشد و خطر عوارض افزایش می‌یابد."
    },
    {
      question: "آیا گلو درد چرکی واگیردار است؟",
      answer: "بله، گلو درد چرکی بسیار مسری است و از طریق قطرات تنفسی (سرفه، عطسه) و تماس با ترشحات منتقل می‌شود. بیمار تا ۲۴ ساعت پس از شروع آنتی‌بیوتیک مسری است."
    },
    {
      question: "چگونه گلو درد چرکی را از ویروسی تشخیص دهیم؟",
      answer: "گلو درد چرکی معمولاً با تب بالا، لوزه‌های قرمز با چرک، و بدون سرفه و آبریزش بینی همراه است. تشخیص قطعی با آزمایش سریع آنتی‌ژن یا کشت گلو انجام می‌شود."
    },
    {
      question: "آیا می‌توان گلو درد چرکی را بدون آنتی‌بیوتیک درمان کرد؟",
      answer: "خیر، درمان آنتی‌بیوتیکی برای جلوگیری از عوارض جدی مانند تب روماتیسمی ضروری است. خوددرمانی و عدم مصرف آنتی‌بیوتیک می‌تواند خطرناک باشد."
    },
    {
      question: "عوارض گلو درد چرکی درمان‌نشده چیست؟",
      answer: "عوارض شامل تب روماتیسمی (آسیب به قلب و مفاصل)، گلومرولونفریت (آسیب کلیوی)، آبسه لوزه و گسترش عفونت به گوش میانی و سینوس‌ها می‌شود."
    }
  ];

  const relatedArticles = [
    {
      title: "تفاوت سرماخوردگی و آنفولانزا",
      description: "مقایسه کامل علائم و درمان سرماخوردگی و آنفولانزا",
      image: coldVsFluImage,
      link: "/articles/cold-vs-flu",
      category: "سلامت عمومی"
    },
    {
      title: "تب در کودکان: علل و درمان",
      description: "راهنمای کامل مدیریت تب در کودکان",
      image: childrenFeverImage,
      link: "/articles/children-fever",
      category: "اطفال"
    },
    {
      title: "تب در بزرگسالان",
      description: "علل، تشخیص و درمان تب در بزرگسالان",
      image: adultFeverImage,
      link: "/articles/adult-fever",
      category: "سلامت عمومی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="گلو درد چرکی (Strep Throat): علائم، تشخیص و درمان | نوید زندگی"
        description="راهنمای کامل گلو درد چرکی شامل علائم، تشخیص با آزمایش سریع، درمان آنتی‌بیوتیکی و پیشگیری از عوارض تب روماتیسمی"
        keywords="گلو درد چرکی، فارنژیت استرپتوکوکی، استرپتوکوک، تب روماتیسمی، آنتی‌بیوتیک، لوزه"
        canonical="https://navidzendegi.com/articles/strep-throat"
        ogType="article"
        publishedTime="2024-12-11"
        modifiedTime="2024-12-11"
      />
      <ArticleSchema
        title="گلو درد چرکی (Strep Throat): علائم، تشخیص و درمان"
        description="راهنمای کامل گلو درد چرکی شامل علائم، تشخیص با آزمایش سریع، درمان آنتی‌بیوتیکی و پیشگیری از عوارض تب روماتیسمی"
        publishedTime="2024-12-11"
        modifiedTime="2024-12-11"
        image={strepThroatImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            گلو درد چرکی (Strep Throat): تشخیص، عامل بیماری و درمان
          </h1>

          <img
            src={strepThroatImage}
            alt="معاینه گلو توسط پزشک"
            className="w-full rounded-lg mb-8"
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>گلو درد چرکی</strong>، که در اصطلاح پزشکی به عنوان <strong>فارنژیت استرپتوکوکی</strong> (Streptococcal Pharyngitis) شناخته می‌شود، یک عفونت باکتریایی شایع و بسیار مسری است که حنجره و لوزه‌ها را درگیر می‌کند. عامل این بیماری یک نوع باکتری به نام <strong>استرپتوکوک گروه A</strong> (Group A Streptococcus - GAS یا Streptococcus pyogenes) است.
          </p>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
            <p className="text-destructive font-semibold">
              ⚠️ هشدار: از خوددرمانی و مصرف خودسرانه آنتی‌بیوتیک خودداری کنید. درمان نادرست گلو درد چرکی می‌تواند منجر به عوارض جدی مانند تب روماتیسمی شود. حتماً به پزشک مراجعه کنید.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۱. عامل بیماری و نحوه انتقال
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            عامل بیماری
          </h3>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>باکتری GAS:</strong> این باکتری تنها عامل باکتریایی شایعی است که مستقیماً باعث فارنژیت در کودکان و بزرگسالان می‌شود. عفونت‌های گلو که توسط ویروس‌ها ایجاد می‌شوند (که بسیار شایع‌تر هستند)، چرکی نامیده نمی‌شوند.</li>
            <li><strong>اهمیت تشخیص:</strong> تشخیص دقیق گلو درد چرکی از عفونت‌های ویروسی گلو بسیار حیاتی است، زیرا عفونت‌های باکتریایی GAS در صورت عدم درمان صحیح و به موقع، می‌توانند منجر به عوارض جدی (مانند تب روماتیسمی) شوند.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            نحوه انتقال
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            انتقال عمدتاً از طریق قطرات تنفسی (مانند عطسه و سرفه) یا تماس با ترشحات فرد آلوده صورت می‌گیرد.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۲. علائم بالینی شایع
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            علائم گلو درد چرکی معمولاً به صورت ناگهانی شروع می‌شوند. برخلاف سرماخوردگی یا گلودردهای ویروسی، علائم گلو درد چرکی <strong>فاقد سرفه، آبریزش بینی و گرفتگی صدا</strong> هستند.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            علائم شایع گلو درد چرکی
          </h3>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>گلو درد ناگهانی و شدید</li>
            <li>تب بالا (معمولاً بالای ۳۸ درجه سانتی‌گراد)</li>
            <li>قرمزی شدید لوزه‌ها</li>
            <li>وجود نقاط یا پلاک‌های سفید یا زردرنگ (چرک) روی لوزه‌ها</li>
            <li>نقاط قرمز کوچک (Petechiae) در سقف دهان</li>
            <li>بزرگ شدن و حساسیت غدد لنفاوی گردن</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            علائمی که معمولاً وجود ندارند (نشانه‌های ویروسی)
          </h3>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>سرفه</li>
            <li>آبریزش بینی</li>
            <li>گرفتگی صدا</li>
            <li>دردهای عضلانی شدید (برخلاف آنفولانزا)</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۳. تشخیص قطعی
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            تشخیص گلو درد چرکی صرفاً بر اساس علائم بالینی کافی نیست و باید با آزمایش تأیید شود، زیرا درمان آنتی‌بیوتیکی تنها برای عفونت‌های باکتریایی لازم است.
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>آزمایش تشخیص سریع آنتی‌ژن (RADT):</strong> این تست در مطب یا کلینیک انجام می‌شود و می‌تواند در عرض چند دقیقه وجود باکتری GAS را تشخیص دهد.</li>
            <li><strong>کشت گلو (Throat Culture):</strong> اگر نتیجه RADT منفی باشد اما سوءظن بالینی قوی وجود داشته باشد، به ویژه در کودکان، کشت گلو انجام می‌شود. این تست دقیق‌تر است، اما ۲۴ تا ۴۸ ساعت طول می‌کشد.</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-4">
            برای انجام آزمایشات تشخیصی در منزل، می‌توانید از خدمات <a href="/services/laboratory" className="text-primary hover:underline">آزمایش خون در منزل</a> استفاده کنید.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            ۴. درمان و پیشگیری از عوارض
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            درمان آنتی‌بیوتیکی
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4">
            درمان انتخابی برای گلو درد چرکی، آنتی‌بیوتیک است.
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>هدف:</strong> هدف اصلی درمان، پیشگیری از عوارض جدی غیر چرکی، به ویژه <strong>تب روماتیسمی</strong> (آسیب به قلب، مفاصل، مغز) و <strong>گلومرولونفریت پس از استرپتوکوک</strong> (آسیب کلیوی) است.</li>
            <li><strong>داروها:</strong> <strong>پنی‌سیلین</strong> و <strong>آموکسی‌سیلین</strong> داروهای خط اول محسوب می‌شوند. در بیماران دارای حساسیت به پنی‌سیلین، ماکرولیدها (مانند آزیترومایسین) تجویز می‌شوند.</li>
            <li><strong>مدت درمان:</strong> تکمیل دوره کامل درمان (معمولاً ۱۰ روز) برای اطمینان از حذف کامل باکتری و جلوگیری از عوارض، حیاتی است.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            توصیه‌های حمایتی
          </h3>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>کاهش درد و تب:</strong> استفاده از داروهای ضد درد و ضد تب مانند استامینوفن یا ایبوپروفن.</li>
            <li><strong>استراحت و مایعات:</strong> مصرف مایعات گرم، غرغره آب نمک و استراحت کافی.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            نقش خدمات پزشکی در منزل
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            در صورت مشاهده علائم گلو درد چرکی، می‌توانید از خدمات <a href="/services/internal" className="text-primary hover:underline">ویزیت متخصص داخلی در منزل</a> استفاده کنید. پزشک می‌تواند با معاینه و بررسی علائم، درمان مناسب را تجویز کند. برای کودکان، خدمات <a href="/general-doctor" className="text-primary hover:underline">ویزیت پزشک عمومی در منزل</a> نیز در دسترس است.
          </p>

          {/* CTA Section */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              نیاز به ویزیت پزشک در منزل دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              برای تشخیص و درمان گلو درد چرکی با ما تماس بگیرید.
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

export default StrepThroatPage;
