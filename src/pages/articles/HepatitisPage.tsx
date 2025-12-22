import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Phone, Clock, Shield, AlertTriangle, Syringe, Heart, Droplets, FlaskConical } from "lucide-react";
import infectiousDiseaseImage from "@/assets/infectious-disease.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";
import nursingImage from "@/assets/nursing-home-care.jpg";
import hivAidsImage from "@/assets/hiv-aids-article.jpg";

const HepatitisPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "هپاتیت: انواع، علائم و درمان", url: "/articles/hepatitis" }
  ];

  const faqs = [
    {
      question: "هپاتیت چیست؟",
      answer: "هپاتیت به معنای التهاب کبد است که می‌تواند توسط ویروس‌ها، الکل، داروها یا بیماری‌های خودایمنی ایجاد شود. انواع ویروسی شامل هپاتیت A، B، C، D و E هستند."
    },
    {
      question: "آیا هپاتیت واکسن دارد؟",
      answer: "بله، برای هپاتیت A و B واکسن موثر وجود دارد. متأسفانه هنوز واکسنی برای هپاتیت C در دسترس نیست، اما درمان‌های جدید می‌توانند این نوع را درمان کنند."
    },
    {
      question: "علائم هپاتیت چیست؟",
      answer: "علائم شایع شامل زردی پوست و چشم، خستگی مفرط، ادرار تیره، مدفوع کم‌رنگ، درد شکم در سمت راست بالا، تهوع و بی‌اشتهایی است. اما بسیاری از افراد علامتی ندارند."
    },
    {
      question: "هپاتیت B چگونه منتقل می‌شود؟",
      answer: "هپاتیت B از طریق تماس با خون، ترشحات بدن، تزریق مشترک، تماس جنسی محافظت‌نشده و از مادر به نوزاد در زمان تولد منتقل می‌شود."
    },
    {
      question: "آیا هپاتیت C قابل درمان است؟",
      answer: "بله، با داروهای ضدویروسی جدید (DAAs)، بیش از ۹۵٪ از موارد هپاتیت C قابل درمان هستند. تشخیص زودهنگام بسیار مهم است."
    },
    {
      question: "چه آزمایش‌هایی برای تشخیص هپاتیت لازم است؟",
      answer: "آزمایش خون شامل تست‌های عملکرد کبد (ALT، AST)، آنتی‌بادی‌های ویروسی و در صورت نیاز بار ویروسی انجام می‌شود. نوید زندگی این آزمایش‌ها را در منزل انجام می‌دهد."
    }
  ];

  const relatedArticles = [
    {
      title: "تزریق HBIG در منزل",
      description: "تزریق ایمونوگلوبولین هپاتیت B برای پیشگیری فوری",
      image: nursingImage,
      link: "/articles/hbig-injection",
      category: "خدمات در منزل"
    },
    {
      title: "واکسیناسیون و اهمیت آن",
      description: "اهمیت واکسیناسیون در پیشگیری از بیماری‌های عفونی",
      image: vaccinationImage,
      link: "/articles/vaccination",
      category: "پیشگیری"
    },
    {
      title: "HIV و ایدز",
      description: "آنچه باید درباره اچ‌آی‌وی و ایدز بدانید",
      image: hivAidsImage,
      link: "/articles/hiv-aids",
      category: "بیماری‌ها"
    }
  ];

  return (
    <>
      <SEOHead
        title="هپاتیت چیست؟ انواع، علائم و راهنمای درمان | نوید زندگی"
        description="هپاتیت چیست؟ با انواع هپاتیت A، B و C، علائم و راه‌های درمان آشنا شوید. خدمات آزمایش و تزریق دارو در منزل. تماس: 09386117912"
        keywords="هپاتیت, هپاتیت B, هپاتیت C, هپاتیت A, علائم هپاتیت, درمان هپاتیت, آزمایش خون در منزل, واکسن هپاتیت, نوید زندگی"
        canonical="https://navidzendegi.com/articles/hepatitis"
        ogType="article"
        ogImage={infectiousDiseaseImage}
      />
      <ArticleSchema
        title="هپاتیت چیست؟ انواع، علائم و راهنمای کامل درمان"
        description="راهنمای کامل هپاتیت شامل انواع، علائم، تشخیص و درمان با خدمات در منزل نوید زندگی"
        publishedTime="2024-12-22"
        modifiedTime="2024-12-22"
        image={infectiousDiseaseImage}
      />
      <Header />
      <FloatingContact />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              هپاتیت چیست؟ انواع، علائم و راهنمای کامل درمان و مراقبت در منزل
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span>نویسنده: تیم پزشکی نوید زندگی</span>
              <span>|</span>
              <time dateTime="2024-12-22">۱ دی ۱۴۰۳</time>
            </div>
            <img
              src={infectiousDiseaseImage}
              alt="هپاتیت و بیماری‌های کبدی"
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
            />
          </header>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <p className="text-foreground">
                <strong>هشدار:</strong> هرگز بدون مشورت پزشک اقدام به خوددرمانی نکنید. در صورت مشاهده علائم هپاتیت حتماً با پزشک مشورت کنید.
              </p>
            </div>
          </div>

          <section className="mb-8">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              کبد یکی از حیاتی‌ترین ارگان‌های بدن است که وظیفه سم‌زدایی، ذخیره انرژی و کمک به هضم غذا را بر عهده دارد. <strong>هپاتیت (Hepatitis)</strong> به معنای التهاب کبد است که می‌تواند به عملکرد این عضو حیاتی آسیب جدی وارد کند.
            </p>
            <p className="text-foreground leading-relaxed">
              مرکز خدمات پزشکی <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> در این مقاله شما را با انواع هپاتیت و روش‌های نوین مراقبتی در منزل آشنا می‌کند.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">انواع هپاتیت و تفاوت‌های آن‌ها</h2>
            <p className="text-foreground leading-relaxed mb-6">
              هپاتیت‌ها معمولاً بر اساس ویروسی که عامل ایجاد آن‌هاست، به دسته‌های مختلفی تقسیم می‌شوند:
            </p>
            
            <div className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">۱</span>
                  هپاتیت A
                </h3>
                <p className="text-foreground leading-relaxed">
                  این نوع هپاتیت معمولاً از طریق مصرف غذا یا آب آلوده منتقل می‌شود. هپاتیت A معمولاً <strong>حاد (کوتاه‌مدت)</strong> است و منجر به بیماری مزمن کبدی نمی‌شود. واکسیناسیون بهترین راه پیشگیری از آن است.
                </p>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">۲</span>
                  هپاتیت B
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  یکی از شایع‌ترین انواع هپاتیت است که از طریق خون، تزریق مشترک، و تماس جنسی منتقل می‌شود. این ویروس می‌تواند منجر به بیماری مزمن، سیروز کبدی یا سرطان کبد شود.
                </p>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <p className="text-foreground">
                    <strong>خدمات ویژه:</strong> در صورت مواجهه با ویروس، <Link to="/articles/hbig-injection" className="text-primary hover:underline">تزریق فوری داروی HBIG در منزل</Link> توسط تیم نوید زندگی می‌تواند از ابتلا به بیماری جلوگیری کند.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">۳</span>
                  هپاتیت C
                </h3>
                <p className="text-foreground leading-relaxed">
                  هپاتیت C عمدتاً از طریق تماس مستقیم با خون آلوده (مانند استفاده از سوزن‌های مشترک) منتقل می‌شود. این نوع هپاتیت اغلب تا مراحل پیشرفته علامتی ندارد و به همین دلیل به آن <strong>«قاتل خاموش»</strong> می‌گویند.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">علائم هشداردهنده هپاتیت را بشناسید</h2>
            <p className="text-foreground leading-relaxed mb-4">
              بسیاری از افراد مبتلا به هپاتیت در مراحل اولیه علامتی ندارند. با این حال، شایع‌ترین نشانه‌ها عبارتند از:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Droplets className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">زردی پوست و چشم‌ها (یرقان)</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">خستگی مفرط و بی‌اشتهایی</span>
              </li>
              <li className="flex items-start gap-3">
                <Droplets className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">ادرار تیره و مدفوع کم‌رنگ</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">درد در ناحیه شکم (سمت راست بالا)</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">تهوع و استفراغ</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">جدول مقایسه‌ای انواع هپاتیت ویروسی</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">نوع هپاتیت</th>
                    <th className="border border-border p-3 text-right">روش انتقال</th>
                    <th className="border border-border p-3 text-right">واکسن دارد؟</th>
                    <th className="border border-border p-3 text-right">وضعیت بیماری</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-medium">Hepatitis A</td>
                    <td className="border border-border p-3">غذا و آب آلوده</td>
                    <td className="border border-border p-3 text-green-600">بله</td>
                    <td className="border border-border p-3">معمولاً حاد و گذرا</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3 font-medium">Hepatitis B</td>
                    <td className="border border-border p-3">خون و ترشحات بدن</td>
                    <td className="border border-border p-3 text-green-600">بله</td>
                    <td className="border border-border p-3">حاد یا مزمن</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">Hepatitis C</td>
                    <td className="border border-border p-3">خون و سوزن آلوده</td>
                    <td className="border border-border p-3 text-destructive">خیر</td>
                    <td className="border border-border p-3">غالباً مزمن</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">چرا آزمایش و مراقبت هپاتیت در منزل؟</h2>
            <p className="text-foreground leading-relaxed mb-6">
              تشخیص به‌موقع هپاتیت کلید درمان موفق است. اما مراجعه به آزمایشگاه‌ها و مراکز درمانی برای بسیاری از افراد دشوار یا اضطراب‌آور است. مرکز نوید زندگی این چالش را حل کرده است:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FlaskConical className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">نمونه‌گیری خون در منزل</h3>
                  <p className="text-muted-foreground">بدون نیاز به خروج از خانه، آزمایش‌های تشخیصی هپاتیت را انجام دهید.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">حفظ حریم خصوصی</h3>
                  <p className="text-muted-foreground">تمامی خدمات تشخیصی و درمانی با رعایت کامل محرمانگی انجام می‌شود.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Syringe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">تزریق واکسن و ایمونوگلوبولین (HBIG)</h3>
                  <p className="text-muted-foreground">پیشگیری فوری در محیط امن منزل.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">پیگیری توسط پزشک متخصص</h3>
                  <p className="text-muted-foreground">نتایج آزمایش شما توسط تیم پزشکی ما بررسی و برنامه درمانی ارائه می‌شود.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">راه‌های پیشگیری از هپاتیت</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>تزریق به موقع واکسن هپاتیت A و B</li>
              <li>استفاده از وسایل شخصی مجزا (تیغ، مسواک و ...)</li>
              <li>رعایت بهداشت فردی و شستن مداوم دست‌ها</li>
              <li>اطمینان از استریل بودن تجهیزات در تاتو یا دندانپزشکی</li>
              <li>استفاده از روش‌های پیشگیری در روابط جنسی</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">نتیجه‌گیری</h2>
            <p className="text-foreground leading-relaxed">
              هپاتیت یک بیماری جدی است اما با تشخیص زودهنگام و مراقبت صحیح، کاملاً قابل مدیریت است. اگر در معرض خطر هستید یا علائمی مشاهده کرده‌اید، زمان را از دست ندهید. تیم متخصص نوید زندگی آماده است تا کلیه خدمات آزمایشی، تزریقات و مراقبت‌های ویژه کبد را در کمترین زمان ممکن در منزل شما انجام دهد.
            </p>
          </section>

          <section className="bg-primary/10 rounded-xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">درخواست خدمات در منزل</h2>
            <p className="text-foreground text-center mb-6">
              برای رزرو نوبت آزمایش یا تزریق واکسن و دارو در منزل، همین حالا با ما تماس بگیرید.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:09386117912"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>تماس: 09386117912</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>خدمات ۲۴ ساعته در تمام نقاط تهران</span>
              </div>
            </div>
            <p className="text-center text-foreground mt-4 font-medium">
              نوید زندگی؛ همراه سلامت شما در قلب خانه.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">خدمات مرتبط</h3>
            <div className="flex flex-wrap gap-2">
              <Link to="/articles/hbig-injection" className="text-primary hover:underline">تزریق HBIG در منزل</Link>
              <span className="text-muted-foreground">|</span>
              <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش در منزل</Link>
              <span className="text-muted-foreground">|</span>
              <Link to="/articles/vaccination" className="text-primary hover:underline">واکسیناسیون</Link>
              <span className="text-muted-foreground">|</span>
              <Link to="/services/infectious" className="text-primary hover:underline">پزشک عفونی در منزل</Link>
            </div>
          </section>

          <FAQSection faqs={faqs} />
          <PricingInfo />
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default HepatitisPage;
