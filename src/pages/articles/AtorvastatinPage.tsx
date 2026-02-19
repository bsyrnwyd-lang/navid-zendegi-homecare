import { Phone } from "lucide-react";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import atorvastatinImage from "@/assets/atorvastatin-medication.jpg";
import aspirinImage from "@/assets/aspirin-medication.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import cholesterolTestImage from "@/assets/cholesterol-test-article.jpg";

const AtorvastatinPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const relatedArticles = [
    {
      title: "آسپرین (Aspirin): کاربرد حیاتی در بیماری‌های قلبی و سکته مغزی",
      description: "راهنمای جامع آسپرین، مکانیسم اثر، دوز مصرف، عوارض جانبی و نقش آن در پیشگیری از سکته قلبی و مغزی",
      image: aspirinImage,
      link: "/articles/aspirin",
      category: "داروها"
    },
    {
      title: "وارفارین؛ داروی ضدانعقاد و نکات مهم در مصرف آن",
      description: "راهنمای کامل وارفارین، موارد مصرف، عوارض جانبی، رژیم غذایی، کنترل INR و ویزیت پزشک در منزل",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "داروها"
    },
    {
      title: "آزمایش چربی خون HDL/LDL",
      description: "راهنمای کامل آزمایش کلسترول و تفسیر نتایج",
      image: cholesterolTestImage,
      link: "/articles/cholesterol-test",
      category: "آزمایش‌ها"
    }
  ];

  const faqs = [
    {
      question: "آتورواستاتین چه زمانی باید مصرف شود؟",
      answer: "آتورواستاتین معمولاً یک بار در روز مصرف می‌شود و بهتر است که شب‌ها استفاده شود؛ زیرا ساخت کلسترول در شب هنگام بیشتر است. این دارو را می‌توان با یا بدون غذا استفاده کرد."
    },
    {
      question: "عوارض جانبی آتورواستاتین چیست؟",
      answer: "عوارض شایع شامل دردهای عضلانی، حالت تهوع و درد شکم است. عوارض خطرناک شامل میوپاتی، رابدومیولیز و آسیب کبدی می‌باشد که نیاز به پیگیری پزشکی دارند."
    },
    {
      question: "آیا آتورواستاتین برای همه بیماران قلبی مناسب است؟",
      answer: "آتورواستاتین برای بیماران با سابقه سکته قلبی، سکته مغزی یا بیماران دارای استنت توصیه می‌شود. خانم‌های باردار و شیرده نباید از استاتین‌ها استفاده کنند."
    },
    {
      question: "چرا باید آنزیم کبدی را به صورت دوره‌ای چک کرد؟",
      answer: "آتورواستاتین می‌تواند باعث افزایش آنزیم‌های کبدی و آسیب کبدی شود. بنابراین چک آنزیم کبدی (آزمایش خون) به صورت دوره‌ای (هر چند ماه) باید صورت گیرد تا از سلامت کبد اطمینان حاصل شود."
    },
    {
      question: "آیا می‌توان آتورواستاتین را قطع کرد؟",
      answer: "این دارو باید زمان طولانی مصرف شود تا تأثیر مطلوب خود را بگذارد و دوز آن باید منحصراً توسط پزشک متخصص تنظیم شود. قطع خودسرانه دارو می‌تواند خطرات جدی برای بیماران قلبی ایجاد کند."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="آتورواستاتین (Atorvastatin): مدیریت کلسترول و پیشگیری از سکته قلبی | نوید زندگی"
        description="آتورواستاتین یکی از داروهای اصلی خانواده استاتین‌ها برای کاهش کلسترول و پیشگیری از سکته قلبی و مغزی. راهنمای کامل مصرف، عوارض و پایش در منزل"
        keywords="آتورواستاتین, استاتین, کلسترول, تری گلیسیرید, سکته قلبی, سکته مغزی, آنژیوگرافی, میوپاتی, رابدومیولیز, آنزیم کبدی, آزمایش خون در منزل, ویزیت متخصص قلب در منزل"
        canonical="https://navidzendegi.com/articles/atorvastatin"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2025-01-23"
        modifiedTime="2025-01-23"
      />
      <ArticleSchema
        title="آتورواستاتین (Atorvastatin): مدیریت کلسترول و پیشگیری از سکته قلبی"
        description="آتورواستاتین یکی از داروهای اصلی خانواده استاتین‌ها برای کاهش کلسترول و پیشگیری از سکته قلبی و مغزی"
        publishedTime="2025-01-23"
        modifiedTime="2025-01-23"
        author="دکتر نیره مظاهری تهرانی"
        image={atorvastatinImage}
      />
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28 md:pb-12">
        <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"آتورواستاتین",url:"/articles/atorvastatin"}]} />
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              آتورواستاتین (Atorvastatin): مدیریت کلسترول، پیشگیری از سکته قلبی و مغزی و پایش در منزل
            </h1>
            <p className="text-foreground/90 text-lg font-semibold mb-2">نویسنده: دکتر نیره مظاهری تهرانی</p>
            <p className="text-muted-foreground mb-4">تاریخ انتشار: ۳ بهمن ۱۴۰۳</p>
          </div>

          <img
            src={atorvastatinImage}
            alt="آتورواستاتین - داروی مدیریت کلسترول و پیشگیری از سکته قلبی"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>آتورواستاتین (Atorvastatin)</strong> یکی از داروهای اصلی خانواده <strong>استاتین‌ها (Statins)</strong> است که جهت کاهش <strong>کلسترول و تری گلیسیرید خون</strong> استفاده می‌شود. این دارو با دوزهای مختلفی موجود است و نقش حیاتی در پیشگیری ثانویه از <strong>سکته قلبی و مغزی</strong> دارد. نوید زندگی با ارائه خدمات پایش عوارض دارویی و <strong>ویزیت متخصص قلب در منزل</strong>، اطمینان از مصرف صحیح و ایمن این داروی حیاتی را فراهم می‌کند.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              کاربرد حیاتی و مکانیسم اثر آتورواستاتین
            </h2>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              آتورواستاتین با مهار یک آنزیم کلیدی در مسیر سنتز کلسترول در کبد، به عنوان یک عامل قوی برای تثبیت پلاک‌های چربی در عروق عمل می‌کند.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                کاهش ریسک حوادث قلبی عروقی
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                آتورواستاتین در بیماران با سابقه <strong>سکته قلبی</strong>، <strong>سکته مغزی</strong> و یا بیماران که <strong>آنژیوگرافی</strong> کرده و استنت دارند، یک جزء اساسی از رژیم درمانی است. این بیماران نیاز به مصرف طولانی مدت آتورواستاتین دارند.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                زمان مصرف
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                آتورواستاتین معمولاً یک بار در روز مصرف می‌شود و بهتر است که شب‌ها استفاده شود؛ زیرا ساخت کلسترول در شب هنگام بیشتر است. آتورواستاتین را می‌توان با یا بدون غذا استفاده کرد.
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-r-4 border-amber-500 p-4 my-6">
              <p className="text-foreground/90 font-semibold">
                ⚠️ نکته مهم: این دارو باید زمان طولانی مصرف شود تا تأثیر مطلوب خود را بگذارد و دوز آن باید منحصراً توسط پزشک متخصص تنظیم شود.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-6 my-8 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                💙 نیاز به ویزیت متخصص قلب و عروق دارید؟
              </h3>
              <p className="text-muted-foreground mb-4">
                برای تنظیم دوز آتورواستاتین، پایش عوارض دارویی، انجام نوار قلب و اکوکاردیوگرافی در منزل، متخصصین قلب و عروق نوید زندگی آماده خدمت‌رسانی به شما هستند.
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
              عوارض جانبی و ضرورت پایش‌های دوره‌ای در منزل
            </h2>

            <p className="text-foreground/80 leading-relaxed mb-4">
              آتورواستاتین به طور کلی ایمن است، اما پایش عوارض جانبی آن، به‌ویژه در بیماران مزمن که تحت مراقبت در منزل هستند، ضروری است.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">
              ۱. عوارض شایع و گوارشی
            </h3>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <p className="text-foreground/80 leading-relaxed mb-2">
                <strong>دردهای عضلانی:</strong> یکی از عوارض شایع آتورواستاتین است که باید جدی گرفته شود.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>عوارض گوارشی:</strong> شامل حالت تهوع و درد شکم نیز از عوارض آتورواستاتین می‌باشند.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">
              ۲. عوارض خطرناک و پایش کبد
            </h3>

            <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 my-6">
              <p className="text-foreground/90 leading-relaxed mb-3">
                <strong>میوپاتی و رابدومیولیز:</strong> یکی از عوارض خطرناک آتورواستاتین میوپاتی (آسیب عضلانی) و رابدومیولیز (تجزیه شدید عضلات) است که در صورت بروز درد یا ضعف شدید عضلانی، باید حتماً مراجعه فوری به پزشک یا <strong>ویزیت متخصص در منزل</strong> داشته باشید.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                <strong>آسیب کبدی:</strong> افزایش آنزیم کبدی نیز از عوارض این دارو است. آسیب کبدی نیز از عوارض خطرناک این دارو است و با مصرف همزمان الکل تشدید می‌شود.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 my-6">
              <p className="text-foreground/90 font-semibold">
                💡 چک آنزیم کبدی: چک آنزیم کبدی (<strong>آزمایش خون</strong>) به صورت دوره‌ای (هر چند ماه) باید صورت گیرد.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">
              ۳. هشدارهای منع مصرف
            </h3>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-r-4 border-amber-500 p-4 my-6">
              <p className="text-foreground/90 font-semibold">
                ⚠️ خانم‌های باردار و شیرده نباید از استاتین‌ها استفاده کنند.
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 mt-8 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                آیا زمان آزمایش آنزیم‌های کبدی شما فرا رسیده است؟
              </h3>
              <p className="text-foreground/80 mb-4">
                برای انجام <strong>آزمایش خون در منزل</strong> و پایش دقیق عوارض آتورواستاتین توسط تیم پرستاری، و یا <strong>ویزیت متخصص قلب در منزل</strong> جهت تنظیم دوز دارو، با نوید زندگی تماس بگیرید.
              </p>
              <Button
                onClick={handleCall}
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone className="ml-2 h-5 w-5" />
                تماس: 09386117912
              </Button>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">
              منابع (References)
            </h2>

            <div className="bg-muted/50 p-6 rounded-lg mb-6 text-sm">
              <p className="text-foreground/80 leading-relaxed mb-2">
                [1] Grundy, S. M., et al. (2019). 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. Circulation, 139(25), e1082-e1143.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-2">
                [2] Karr, S. (2018). Epidemiology and Management of Hyperlipidemia. The Journal of the American Osteopathic Association, 118(4), 213-221.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                [3] Taylor, F., et al. (2013). Statins for the primary prevention of cardiovascular disease. Cochrane Database of Systematic Reviews, 1(1), CD002377.
              </p>
            </div>
          </div>

          <FAQSection faqs={faqs} />

          <PricingInfo />

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AtorvastatinPage;
