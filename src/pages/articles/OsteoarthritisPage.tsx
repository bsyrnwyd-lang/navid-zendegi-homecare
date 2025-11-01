import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import osteoarthritisImage from "@/assets/osteoarthritis-treatment.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Activity } from "lucide-react";

const OsteoarthritisPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "استئوآرتریت", url: "" }
  ];

  const faqs = [
    {
      question: "چه تمریناتی برای استئوآرتریت زانو مفید است؟",
      answer: "تمرینات کم‌فشار مانند پیاده‌روی آرام، دوچرخه‌سواری ثابت، شنا و حرکات کششی ملایم برای تقویت عضلات اطراف زانو بسیار مفید هستند. فیزیوتراپیست می‌تواند برنامه تمرینی اختصاصی برای شما طراحی کند."
    },
    {
      question: "آیا کاهش وزن واقعاً می‌تواند درد استئوآرتریت را کاهش دهد؟",
      answer: "بله، کاهش وزن یکی از مؤثرترین روش‌های درمان است. هر کیلوگرم کاهش وزن می‌تواند فشار قابل توجهی از روی مفاصل باربر مانند زانو و لگن بردارد و علائم را بهبود بخشد."
    },
    {
      question: "چه زمانی باید از داروهای ضد التهاب استفاده کنم؟",
      answer: "داروهای ضد التهاب غیراستروئیدی (NSAIDs) زمانی که درد و التهاب شدید باشد می‌توانند مفید باشند. اما باید تحت نظر پزشک و با کمترین دوز مؤثر مصرف شوند، زیرا ممکن است عوارض گوارشی یا کلیوی داشته باشند."
    },
    {
      question: "آیا تزریق داخل مفصلی برای استئوآرتریت مفید است؟",
      answer: "بله، تزریقات داخل مفصلی کورتیکواستروئید یا هیالورونیک اسید می‌توانند تسکین موقت درد را فراهم کنند، به‌ویژه زمانی که درمان‌های دیگر کافی نباشند. این تزریقات باید توسط پزشک متخصص انجام شوند."
    },
    {
      question: "آیا می‌توان از پیشرفت استئوآرتریت جلوگیری کرد؟",
      answer: "هرچند نمی‌توان پیشرفت را کاملاً متوقف کرد، اما با حفظ وزن مناسب، ورزش منظم، فیزیوتراپی، و مدیریت صحیح درد می‌توان سرعت پیشرفت را کاهش داد و کیفیت زندگی را بهبود بخشید."
    }
  ];

  const relatedArticles = [
    {
      title: "فیزیوتراپی در منزل: توانبخشی تخصصی",
      description: "خدمات فیزیوتراپی حرفه‌ای در محیط آرام منزل",
      image: "/src/assets/physiotherapy.jpg",
      link: "/services/physiotherapy",
      category: "خدمات"
    },
    {
      title: "درمان سردرد: راهنمای جامع",
      description: "انواع سردرد، علل و روش‌های درمان",
      image: "/src/assets/headache-article.jpg",
      link: "/articles/headache",
      category: "مقالات"
    },
    {
      title: "مراقبت از سالمندان در منزل",
      description: "راهنمای جامع مراقبت از سالمندان",
      image: "/src/assets/elderly-care-home.jpg",
      link: "/articles/elderly-care-guide",
      category: "مقالات"
    }
  ];

  return (
    <div className="bg-background">
      <Header />
      <FloatingContact />
      <SEOHead
        title="استئوآرتریت (آرتروز): مدیریت درد، فیزیوتراپی در منزل و درمان | نوید زندگی"
        description="راهنمای جامع مدیریت استئوآرتریت (آرتروز تخریبی): درمان غیردارویی، دارویی، فیزیوتراپی در منزل، کاهش وزن و تزریقات تخصصی."
        keywords="استئوآرتریت، آرتروز، آرتروز تخریبی، درد مفاصل، فیزیوتراپی در منزل، کاهش وزن، تزریق داخل مفصلی، ضد التهاب، درمان آرتروز"
        canonical="https://navidzendegi.com/articles/osteoarthritis"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2025-01-23"
        modifiedTime="2025-01-23"
      />
      
      <ArticleSchema
        title="استئوآرتریت (آرتروز تخریبی): مدیریت جامع درد، فیزیوتراپی در منزل و درمان دارویی"
        description="راهنمای جامع مدیریت استئوآرتریت: درمان غیردارویی، دارویی، فیزیوتراپی در منزل و تزریقات تخصصی."
        publishedTime="2025-01-23"
        modifiedTime="2025-01-23"
        image={osteoarthritisImage}
        author="دکتر نیره مظاهری تهرانی"
      />

      <main className="pt-20 md:pt-24">
        <article className="container mx-auto px-4 py-8 max-w-4xl" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            استئوآرتریت (آرتروز تخریبی): مدیریت جامع درد، فیزیوتراپی در منزل و درمان دارویی
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>نویسنده: دکتر نیره مظاهری تهرانی</span>
            <span>•</span>
            <time dateTime="2025-01-23">۳ بهمن ۱۴۰۳</time>
          </div>

          <img 
            src={osteoarthritisImage} 
            alt="استئوآرتریت - درمان آرتروز تخریبی"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
            loading="eager"
          />
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-foreground mb-6">
            <strong>استئوآرتریت (OA)</strong>، که در واقع به <strong>آرتروز تخریبی</strong> معروف است، یک بیماری مزمن مفصلی است که به مرور زمان باعث <strong>درد، تورم و محدودیت حرکت</strong> در مفاصل می‌شود. مدیریت مؤثر این بیماری نیازمند یک رویکرد جامع است که به دو دسته اصلی غیردارویی و دارویی تقسیم می‌شود. نوید زندگی خدمات تخصصی این حوزه را برای بهبود کیفیت زندگی شما در خانه ارائه می‌دهد.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              رویکرد غیردارویی: اساس درمان و توانبخشی استئوآرتریت
            </h2>
            
            <p className="leading-relaxed text-foreground mb-4">
              درمان غیردارویی سنگ بنای مدیریت OA است و شامل موارد زیر می‌شود که می‌توان آن‌ها را در منزل پیاده‌سازی کرد:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>کاهش وزن:</strong> <strong>کاهش وزن</strong> می‌تواند فشار روی مفاصل، به‌ویژه زانو، را تا حد زیادی کاهش دهد و یکی از مؤثرترین راه‌ها برای کاهش پیشرفت بیماری است.</li>
                <li><strong>ورزش منظم:</strong> ورزش منظم با شدت پایین، شامل ورزش‌هایی مثل پیاده‌روی آرام، شنا و دوچرخه‌سواری سبک، باعث تقویت عضلات اطراف مفصل شده و ثبات آن را بهبود می‌بخشد.</li>
                <li><strong>فیزیوتراپی در منزل:</strong> جلسات منظم <strong>فیزیوتراپی</strong> شامل حرکات اصلاحی و تمرین‌های تقویتی، تأثیر قابل توجهی در بهبود علائم و دامنه حرکتی دارد. تیم فیزیوتراپی نوید زندگی این خدمات را با تجهیزات کامل در خانه شما ارائه می‌دهد.</li>
                <li><strong>وسایل کمکی:</strong> استفاده از وسایل کمکی مثل عصا یا زانوبند نیز می‌تواند برای کاهش فشار و افزایش ثبات مفصل مفید باشد.</li>
              </ul>
            </div>

            <Card className="my-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">فیزیوتراپی تخصصی در منزل</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      برای مدیریت استئوآرتریت و بهبود حرکت، از خدمات فیزیوتراپی حرفه‌ای در منزل استفاده کنید.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/services/physiotherapy">
                        <Button variant="default" size="sm" className="gap-2">
                          <Activity className="w-4 h-4" />
                          فیزیوتراپی در منزل
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
              رویکرد دارویی و مدیریت تخصصی درد
            </h2>
            
            <p className="leading-relaxed text-foreground mb-4">
              دسته دارویی شامل داروهایی است که هدف آن‌ها کنترل درد و التهاب است. این داروها شامل موارد زیر می‌شوند:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">ضددردهای خوراکی</h3>
              <p className="leading-relaxed text-foreground mb-4">
                <strong>استامینوفن</strong> (به عنوان خط اول)، <strong>ایبوپروفن</strong>، <strong>ناپروکسن</strong>، <strong>دیکلوفناک</strong>، و <strong>سلکوکسیب</strong> از جمله داروهایی هستند که می‌توان استفاده کرد.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">ملاحظات دوزبندی</h3>
              <p className="leading-relaxed text-foreground mb-4">
                تنظیم دوز این داروها حتماً باید با صلاحدید پزشک باشد؛ زیرا داروهای ذکر شده عوارض خاص خود (مانند آسیب گوارشی یا کلیوی) را دارند. ویزیت پزشک در منزل می‌تواند این تنظیم دوز را با توجه به شرایط سلامتی فرد انجام دهد.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">داروهای موضعی و تزریقات</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li><strong>داروهای موضعی:</strong> ژل‌ها و کرم‌های حاوی دیکلوفناک، خصوصاً برای افرادی که به هر دلیل نمی‌توانند داروی خوراکی استفاده کنند، مفید است.</li>
                <li><strong>تزریق داخل عضلانی:</strong> در موارد درد شدید، می‌توان به صورت دوره‌ای از <strong>تزریق داخل عضلانی</strong> کورتیکواستروئیدها (توسط پرستار متخصص) یا تزریق داخل مفصلی برای تسکین سریع استفاده کرد.</li>
              </ul>
            </div>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Call-to-Action</h3>
              <p className="leading-relaxed text-foreground mb-4">
                درمان استئوآرتریت را در محیط آرام خانه خود آغاز کنید. برای دریافت مشاوره، هماهنگی جلسات <strong>فیزیوتراپی در منزل</strong>، یا اعزام کادر برای <strong>تزریقات داخل عضلانی</strong>، همین حالا با نوید زندگی تماس بگیرید.
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
              <li>Bannuru, R. R., et al. (2019). OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis. Osteoarthritis and Cartilage, 27(11), 1578-1589.</li>
              <li>McAlindon, T. E., et al. (2014). OARSI guidelines for the non-surgical management of knee osteoarthritis. Osteoarthritis and Cartilage, 22(3), 363-388.</li>
              <li>Hunter, D. J., & Bierma-Zeinstra, S. (2019). Osteoarthritis. The Lancet, 393(10190), 1957-1967.</li>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default OsteoarthritisPage;
