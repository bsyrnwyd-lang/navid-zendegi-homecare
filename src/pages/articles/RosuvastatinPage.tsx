import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import rosuvastatinImage from "@/assets/rosuvastatin-medication.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Stethoscope } from "lucide-react";

const RosuvastatinPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "رُزُواستاتین", url: "" }
  ];

  const faqs = [
    {
      question: "رُزُواستاتین چه تفاوتی با آتورواستاتین دارد؟",
      answer: "رُزُواستاتین یکی از قدرتمندترین استاتین‌ها برای کاهش کلسترول LDL است و در دوزهای پایین‌تر می‌تواند اثرات مشابه آتورواستاتین را داشته باشد. انتخاب بین این دو دارو توسط پزشک متخصص و بر اساس وضعیت بیمار انجام می‌شود."
    },
    {
      question: "آیا رُزُواستاتین باید مادام العمر مصرف شود؟",
      answer: "در اکثر بیماران با سابقه سکته قلبی، سکته مغزی یا بیماری عروق کرونر، مصرف رُزُواستاتین طولانی‌مدت و معمولاً مادام‌العمر توصیه می‌شود. قطع دارو باید حتماً با نظر پزشک متخصص انجام شود."
    },
    {
      question: "دردهای عضلانی ناشی از رُزُواستاتین چقدر جدی است؟",
      answer: "دردهای عضلانی خفیف نسبتاً شایع است، اما اگر درد شدید باشد یا همراه با ضعف عضلانی شدید، می‌تواند نشانه رابدومیولیز باشد که یک وضعیت اورژانسی پزشکی است و نیاز به مراجعه فوری دارد."
    },
    {
      question: "آیا باید هنگام مصرف رُزُواستاتین از الکل پرهیز کرد؟",
      answer: "بله، مصرف الکل در هنگام مصرف رُزُواستاتین می‌تواند خطر آسیب کبدی را افزایش دهد. توصیه می‌شود از مصرف الکل خودداری شود یا حداقل آن را محدود کنید."
    },
    {
      question: "چه زمانی باید آزمایش آنزیم کبدی انجام دهم؟",
      answer: "معمولاً پزشک متخصص بعد از شروع درمان و سپس به صورت دوره‌ای (هر 3 تا 6 ماه) آزمایش آنزیم کبدی را تجویز می‌کند. این آزمایش‌ها می‌توانند در منزل توسط تیم آزمایشگاهی نوید زندگی انجام شوند."
    }
  ];

  const relatedArticles = [
    {
      title: "آتورواستاتین: مدیریت کلسترول و پیشگیری از سکته",
      description: "راهنمای جامع مصرف آتورواستاتین و پایش عوارض آن در منزل",
      image: "/src/assets/atorvastatin-medication.jpg",
      link: "/articles/atorvastatin",
      category: "داروها"
    },
    {
      title: "آسپرین: کاربرد حیاتی در بیماری‌های قلبی",
      description: "نقش آسپرین در پیشگیری از سکته قلبی و مغزی",
      image: "/src/assets/aspirin-medication.jpg",
      link: "/articles/aspirin",
      category: "داروها"
    },
    {
      title: "وارفارین: راهنمای مصرف و پایش",
      description: "مدیریت دقیق مصرف وارفارین و کنترل INR در منزل",
      image: "/src/assets/warfarin-medication.jpg",
      link: "/articles/warfarin",
      category: "داروها"
    }
  ];

  return (
    <>
      <SEOHead
        title="رُزُواستاتین: مدیریری کاهش چربی خون و پیشگیری از سکته قلبی | نوید زندگی"
        description="رُزُواستاتین یکی از قدرتمندترین داروهای استاتین برای کاهش کلسترول LDL و پیشگیری از حوادث قلبی عروقی. راهنمای مصرف، عوارض و پایش در منزل."
        keywords="رُزُواستاتین، Rosuvastatin، استاتین، کاهش چربی خون، کلسترول LDL، سکته قلبی، سکته مغزی، آزمایش خون در منزل، پایش آنزیم کبدی، ویزیت متخصص قلب در منزل"
        canonical="https://navidzendegi.com/articles/rosuvastatin"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2025-01-23"
        modifiedTime="2025-01-23"
      />
      
      <ArticleSchema
        title="رُزُواستاتین: مدیریت تخصصی کاهش چربی خون و پیشگیری از حوادث قلبی عروقی"
        description="رُزُواستاتین یکی از قدرتمندترین داروهای استاتین برای کاهش کلسترول LDL و پیشگیری از حوادث قلبی عروقی. راهنمای کامل مصرف، عوارض و پایش در منزل."
        publishedTime="2025-01-23"
        modifiedTime="2025-01-23"
        image={rosuvastatinImage}
        author="دکتر نیره مظاهری تهرانی"
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            رُزُواستاتین (Rosuvastatin): مدیریت تخصصی کاهش چربی خون و پیشگیری از حوادث قلبی عروقی
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>نویسنده: دکتر نیره مظاهری تهرانی</span>
            <span>•</span>
            <time dateTime="2025-01-23">۳ بهمن ۱۴۰۳</time>
          </div>

          <img 
            src={rosuvastatinImage} 
            alt="رُزُواستاتین - داروی کاهش چربی خون"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
            loading="eager"
          />
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-foreground mb-6">
            <strong>رُزُواستاتین (Rosuvastatin)</strong> یکی دیگر از داروهای حیاتی گروه <strong>استاتین‌ها</strong> است که جهت کاهش <strong>چربی خون</strong>، به‌ویژه <strong>کلسترول LDL</strong> (کلسترول بد) و <strong>تری‌گلیسیرید</strong>، استفاده می‌شود. این دارو که بسته به شرکت تولیدکننده با نام‌های متفاوتی در دسترس است، نقشی کلیدی در <strong>پیشگیری از سکته قلبی و مغزی</strong> ایفا می‌کند.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              رُزُواستاتین: کاربرد درمانی و دستورالعمل‌های مصرف
            </h2>
            
            <p className="leading-relaxed text-foreground mb-4">
              رُزُواستاتین به عنوان یک داروی قدرتمند در تثبیت پلاک‌های چربی و کاهش ریسک <strong>حوادث قلبی عروقی</strong> در نظر گرفته می‌شود.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">اندیکاسیون‌های اصلی</h3>
              <p className="leading-relaxed text-foreground mb-4">
                این دارو برای کاهش کلسترول و تری‌گلیسیرید استفاده می‌شود و در بیمارانی که سابقه <strong>سکته قلبی و مغزی</strong> دارند یا در معرض خطر بالای حوادث عروقی هستند، کاربرد طولانی‌مدت دارد.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">تنظیم دوز</h3>
              <p className="leading-relaxed text-foreground mb-4">
                دوز دارو منحصراً توسط <strong>پزشک متخصص</strong> تنظیم می‌شود و در صورت صلاحدید، دوز دارو افزایش داده می‌شود.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">نحوه مصرف</h3>
              <p className="leading-relaxed text-foreground">
                رُزُواستاتین می‌تواند با یا بدون غذا استفاده شود و بهتر است در زمان خاصی و ترجیحاً شب‌ها مصرف شود. پایبندی به مصرف روزانه برای دستیابی به تأثیر درمانی طولانی‌مدت ضروری است.
              </p>
            </div>

            <Card className="my-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">ویزیت متخصص قلب و عروق در منزل</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      برای تنظیم دوز رُزُواستاتین و پایش وضعیت قلبی‌عروقی، از خدمات ویزیت متخصص در منزل استفاده کنید.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/cardiology">
                        <Button variant="default" size="sm" className="gap-2">
                          <Stethoscope className="w-4 h-4" />
                          ویزیت متخصص قلب
                        </Button>
                      </Link>
                      <a href="tel:09386117912">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Phone className="w-4 h-4" />
                          ۰۹۳۸۶۱۱۷۹۱۲
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              عوارض جانبی و ضرورت چکاپ منظم در منزل
            </h2>
            
            <p className="leading-relaxed text-foreground mb-4">
              مانند سایر استاتین‌ها، پایش دقیق عوارض رُزُواستاتین به‌ویژه در بیماران مزمن که خدمات پزشکی در منزل دریافت می‌کنند، بسیار حیاتی است.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">۱. عوارض شایع تا خطرناک</h3>
              
              <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
                <li><strong>دردهای عضلانی:</strong> یکی از عوارض شایع است که باید به <strong>پزشک در منزل</strong> گزارش شود.</li>
                <li><strong>عوارض گوارشی:</strong> شامل تهوع و افزایش آنزیم کبدی می‌باشد.</li>
                <li><strong>خطرناک‌ترین عارضه:</strong> <strong>رابدومیولیز</strong> (آسیب شدید و بالقوه خطرناک عضلانی) یکی از عوارض خطرناک این دارو است که در صورت بروز درد یا ضعف شدید عضلانی، نیاز به مراجعه فوری به پزشک یا ویزیت اورژانسی متخصص در منزل دارد.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">۲. ملاحظات مصرف و تداخلات</h3>
              
              <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
                <li><strong>تداخل دارویی:</strong> لازم است تداخلات دارویی توسط پزشک چک شود، به‌ویژه اگر بیمار داروهای دیگری برای قلب یا فشار خون مصرف می‌کند.</li>
                <li><strong>منع مصرف:</strong> مصرف رُزُواستاتین در بارداری و شیردهی و همچنین در بیماران با آسیب کبدی ممنوع می‌باشد.</li>
                <li><strong>پایش کبد و الکل:</strong> با مصرف این دارو باید <strong>چکاپ منظم آنزیم کبدی</strong> داشته باشید. همچنین، باید از مصرف الکل خودداری شود؛ زیرا خطر آسیب کبدی را تشدید می‌کند.</li>
              </ul>
            </div>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Call-to-Action</h3>
              <p className="leading-relaxed text-foreground mb-4">
                برای اطمینان از ایمنی درمان، <strong>چکاپ منظم آنزیم کبدی</strong> را در محیط آرام منزل انجام دهید. برای هماهنگی جهت <strong>آزمایش خون در منزل</strong> و یا <strong>ویزیت متخصص قلب و عروق در منزل</strong> برای تنظیم دوز رُزُواستاتین، با نوید زندگی تماس بگیرید.
              </p>
              <a href="tel:09386117912">
                <Button className="gap-2">
                  <Phone className="w-4 h-4" />
                  تماس با نوید زندگی
                </Button>
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">منابع (References)</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Grundy, S. M., et al. (2019). 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. Circulation, 139(25), e1082-e1143.</li>
              <li>Stone, N. J., et al. (2014). 2013 AHA/ACC Guideline on the Treatment of Blood Cholesterol to Reduce Atherosclerotic Cardiovascular Risk in Adults. Journal of the American College of Cardiology, 63(25), 2889-2934.</li>
              <li>Taylor, F., et al. (2013). Statins for the primary prevention of cardiovascular disease. Cochrane Database of Systematic Reviews, 1(1), CD002377.</li>
            </ol>
          </section>
        </div>

        <FAQSection faqs={faqs} />
        
        <div className="mt-12">
          <PricingInfo />
        </div>

        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </article>
    </>
  );
};

export default RosuvastatinPage;
