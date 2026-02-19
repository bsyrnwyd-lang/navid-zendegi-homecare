import { Link } from "react-router-dom";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import aspirinImage from "@/assets/aspirin-medication.jpg";

const AspirinPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqs = [
    {
      question: "آیا همه افراد باید آسپرین مصرف کنند؟",
      answer: "خیر، آسپرین فقط برای افرادی که سابقه بیماری قلبی، سکته مغزی یا عوامل خطر بالای قلبی عروقی دارند توصیه می‌شود. مصرف آسپرین برای پیشگیری اولیه در افراد سالم باید با نظر پزشک متخصص انجام شود."
    },
    {
      question: "چه زمانی باید آسپرین را مصرف کرد؟",
      answer: "معمولاً آسپرین را بهتر است با غذا یا بعد از غذا مصرف کنید تا خطر عوارض گوارشی کاهش یابد. زمان مصرف دقیق را پزشک معالج شما تعیین می‌کند."
    },
    {
      question: "آیا می‌توان آسپرین را با داروهای دیگر مصرف کرد؟",
      answer: "برخی داروها مانند وارفارین، ایبوپروفن و سایر NSAIDها می‌توانند با آسپرین تداخل داشته باشند و خطر خونریزی را افزایش دهند. حتماً قبل از مصرف هر داروی جدید با پزشک خود مشورت کنید."
    },
    {
      question: "عوارض جانبی آسپرین چیست؟",
      answer: "شایع‌ترین عوارض جانبی آسپرین شامل درد شکم، سوزش سر دل، حالت تهوع و خطر خونریزی گوارشی است. در صورت مشاهده علائم مانند مدفوع تیره، استفراغ خونی یا خونریزی غیرعادی، فوراً با پزشک تماس بگیرید."
    }
  ];

  const relatedArticles = [
    {
      title: "وارفارین (Warfarin): داروی ضد انعقاد و مدیریت آن در منزل",
      description: "راهنمای جامع مصرف وارفارین، کنترل INR و نکات مهم ایمنی",
      image: "/src/assets/warfarin-medication.jpg",
      link: "/articles/warfarin",
      category: "داروها"
    },
    {
      title: "آنژیوگرافی قلب: چگونه بر ترس خود غلبه کنیم؟",
      description: "راهنمای کامل آنژیوگرافی، روند انجام و مدیریت اضطراب قبل از عمل",
      image: "/src/assets/angiography-article.jpg",
      link: "/articles/angiography-fear",
      category: "قلب و عروق"
    },
    {
      title: "مراقبت‌های بعد از آنژیوگرافی: داروها و نکات مهم",
      description: "راهنمای جامع داروها و مراقبت‌های لازم پس از آنژیوگرافی قلب",
      image: "/src/assets/post-angiography-medications.jpg",
      link: "/articles/post-angiography-medications",
      category: "قلب و عروق"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEOHead
        title="آسپرین (Aspirin): کاربرد در بیماری‌های قلبی و سکته مغزی - نوید زندگی"
        description="راهنمای جامع آسپرین، مکانیسم اثر، کاربردهای حیاتی در بیماری‌های قلبی و سکته مغزی، عوارض جانبی و ملاحظات درمانی مهم"
        keywords="آسپرین, aspirin, بیماری قلبی, سکته قلبی, سکته مغزی, ضد انعقاد, لخته خون, آنژیوگرافی, داروهای قلبی"
        canonical="https://navidzendegi.com/articles/aspirin"
        ogImage={aspirinImage}
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2025-01-22"
        modifiedTime="2025-01-22"
      />
      <ArticleSchema
        title="آسپرین (Aspirin): کاربرد حیاتی در بیماری‌های قلبی، سکته مغزی و ملاحظات درمانی"
        description="آسپرین یک داروی اساسی در پیشگیری و درمان سکته قلبی و بیماری‌های قلبی عروقی است که با مهار تجمع پلاکتی از لخته شدن خون جلوگیری می‌کند"
        publishedTime="2025-01-22"
        modifiedTime="2025-01-22"
        image={aspirinImage}
        author="دکتر نیره مظاهری تهرانی"
      />
      <Header />
      <FloatingContact />

      <main className="container mx-auto px-4 py-8 mt-20">
        <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"آسپرین",url:"/articles/aspirin"}]} />

        <article className="prose prose-lg max-w-4xl mx-auto">
          <img
            src={aspirinImage}
            alt="آسپرین و کاربردهای آن در بیماری‌های قلبی"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="mb-6 text-sm text-muted-foreground">
            <span className="font-semibold">نویسنده: دکتر نیره مظاهری تهرانی - متخصص قلب و عروق</span>
            <br />
            <span>تاریخ انتشار: ۳ بهمن ۱۴۰۳</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            آسپرین (Aspirin): کاربرد حیاتی در بیماری‌های قلبی، سکته مغزی و ملاحظات درمانی
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            <strong>آسپرین (Aspirin)</strong>، که با نام علمی استیل‌سالیسیلیک اسید (ASA) شناخته می‌شود، یکی از داروهای اساسی در پیشگیری و درمان <strong>سکته قلبی</strong> و سایر <strong>بیماری‌های قلبی عروقی</strong> است. آسپرین در واقع یک داروی ضد التهاب غیراستروئیدی (NSAID) است که وظیفه خود را با مهار یک آنزیم کلیدی در بدن انجام می‌دهد و در نتیجه، از <strong>لخته شدن خون</strong> جلوگیری می‌کند.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
            مکانیسم اثر آسپرین: جلوگیری از سکته قلبی و مغزی
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            مکانیسم اثر آسپرین برای بیماران قلبی-عروقی منحصر به فرد است:
          </p>

          <div className="bg-muted/30 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-foreground mb-3">مهار تجمع پلاکتی</h3>
            <p className="text-muted-foreground">
              آسپرین به طور برگشت‌ناپذیر آنزیم سیکلوکسیژناز-1 (<strong>COX-1</strong>) را در پلاکت‌ها مهار می‌کند. این عمل باعث کاهش تولید ترومبوکسان A₂ می‌شود که یک ماده قوی برای تجمع پلاکت‌ها و تشکیل لخته است.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-foreground mb-3">کاربرد گسترده</h3>
            <p className="text-muted-foreground">
              آسپرین علاوه بر سکته قلبی (انفارکتوس میوکارد)، در <strong>سکته مغزی</strong> و همچنین بعد از جراحی قلبی (مانند بای‌پس کرونر) و <strong>آنژیوگرافی</strong> برای جلوگیری از تشکیل لخته‌های جدید در استنت‌ها و عروق، کاربرد حیاتی دارد.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-6 my-8 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              💙 نیاز به ویزیت متخصص قلب و عروق دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              برای ارزیابی وضعیت قلبی، تنظیم دوز آسپرین، انجام نوار قلب و اکوکاردیوگرافی در منزل، متخصصین قلب و عروق نوید زندگی آماده خدمت‌رسانی به شما هستند.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/cardiology">
                <Button
                  size="lg"
                  className="gap-2"
                >
                  <Phone className="h-5 w-5" />
                  ویزیت متخصص قلب در منزل
                </Button>
              </Link>
              <Button
                onClick={handleCall}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Phone className="h-5 w-5" />
                تماس: 09386117912
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
            رژیم درمانی و ملاحظات مصرف آسپرین
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            مصرف آسپرین، به ویژه پس از اقدامات تهاجمی مانند <Link to="/articles/angiography-fear" className="text-primary hover:underline">آنژیوگرافی</Link>، برای بیمار شروع شده و در اکثر مواقع تا آخر عمر باید مصرف شود، مگر اینکه مساله خاصی ایجاد شود.
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>دوز معمول:</strong> دوز معمول و پیشگیرانه جهت این مساله 80 میلی‌گرم روزانه است</li>
            <li><strong>تعهد درمانی و پایش در منزل:</strong> از آنجا که آسپرین درمانی بلندمدت است، پایش دقیق و یادآوری دارویی برای بیماران توسط تیم پرستاری در منزل، به ویژه سالمندان، اهمیت بالایی دارد</li>
          </ul>

          <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
            عوارض جانبی و هشدارهای حیاتی آسپرین
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            آسپرین با وجود فواید حیاتی، عوارضی دارد که نیازمند توجه ویژه تیم درمانی است، خصوصاً در بیماران تحت مراقبت در منزل:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-r-4 border-primary bg-muted/20 p-4 rounded">
              <h3 className="font-bold text-foreground mb-2">عوارض گوارشی</h3>
              <p className="text-muted-foreground">
                شامل درد شکم، خونریزی گوارشی و حالت تهوع
              </p>
            </div>

            <div className="border-r-4 border-primary bg-muted/20 p-4 rounded">
              <h3 className="font-bold text-foreground mb-2">آلرژی</h3>
              <p className="text-muted-foreground">
                در مواردی باعث آلرژی نیز می‌شود، خصوصاً در افراد با سابقه آلرژی (باید توسط <Link to="/services/internal-medicine" className="text-primary hover:underline">پزشک متخصص در منزل</Link> ارزیابی شود)
              </p>
            </div>

            <div className="border-r-4 border-destructive bg-destructive/10 p-4 rounded">
              <h3 className="font-bold text-foreground mb-2">⚠️ خطر در کودکان</h3>
              <p className="text-muted-foreground">
                مصرف آسپرین در کودکان زیر دوازده سال به علت خطر <strong>سندروم ری (Reye's Syndrome)</strong> ممنوع می‌باشد
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border-r-4 border-primary p-6 my-8 rounded">
            <h3 className="text-xl font-bold text-foreground mb-4">
              نیاز به مشاوره یا پایش مصرف آسپرین دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              آیا شما یا عزیزانتان نیاز به تزریق داروهای جایگزین یا پایش عوارض آسپرین دارید؟ برای مدیریت دقیق داروهای ضد انعقاد و انجام <Link to="/services/nursing" className="text-primary hover:underline">تزریقات در منزل</Link> توسط کادر مجرب، با نوید زندگی تماس بگیرید.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={handleCall}
                size="lg"
                className="gap-2"
              >
                <Phone className="h-5 w-5" />
                تماس فوری: 09386117912
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                مشاوره واتساپ
              </Button>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
            منابع (References)
          </h3>

          <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-8">
            <li>Vane, J. R. (1971). Inhibition of prostaglandin synthesis as a mechanism of action for aspirin-like drugs. Nature New Biology, 231(25), 232-235.</li>
            <li>Patrono, C. (2015). Aspirin in the Prevention of Cardiovascular Events. The New England Journal of Medicine, 373(17), 1681-1682.</li>
            <li>Smith, S. C., Jr., et al. (2011). AHA/ACCF Secondary Prevention and Risk Reduction Therapy for Patients with Coronary and Other Atherosclerotic Vascular Disease: 2011 Update. Circulation, 124(22), 2458-2473.</li>
            <li>Centers for Disease Control and Prevention (CDC). (2023). Reye's Syndrome and Aspirin.</li>
          </ol>

          <FAQSection faqs={faqs} />
          
          <PricingInfo />
          
          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AspirinPage;
