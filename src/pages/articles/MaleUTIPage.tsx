import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import maleUTIImage from "@/assets/male-uti-article.jpg";
import urologyImage from "@/assets/urology.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";
import internalMedicineImage from "@/assets/internal-medicine.jpg";

const MaleUTIPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqs = [
    {
      question: "چرا عفونت ادراری در مردان کمتر شایع است؟",
      answer: "مجرای ادراری مردان طولانی‌تر است (حدود 20 سانتی‌متر در مقابل 4 سانتی‌متر در زنان)، بنابراین باکتری‌ها مسیر طولانی‌تری برای رسیدن به مثانه دارند. همچنین، مایع پروستات دارای خواص ضد میکروبی است که از عفونت جلوگیری می‌کند."
    },
    {
      question: "آیا عفونت ادراری در مردان نشانه مشکل جدی است؟",
      answer: "بله، UTI در مردان معمولاً نشانه‌ای از یک مشکل زمینه‌ای مانند بزرگی پروستات (BPH)، سنگ کلیه یا عفونت پروستات است. به همین دلیل، هر عفونت ادراری در مردان نیازمند ارزیابی دقیق توسط متخصص اورولوژی است."
    },
    {
      question: "چه زمانی باید فوراً به پزشک مراجعه کنم؟",
      answer: "در صورت مشاهده تب بالا، لرز، درد شدید در پهلوها یا کمر، خون در ادرار، یا ناتوانی در دفع ادرار، فوراً با پزشک تماس بگیرید. این علائم می‌توانند نشانه عفونت کلیه یا مشکلات جدی‌تر باشند."
    },
    {
      question: "آیا می‌توانم بدون مراجعه به پزشک آنتی‌بیوتیک مصرف کنم؟",
      answer: "خیر، هرگز! مصرف خودسرانه آنتی‌بیوتیک بسیار خطرناک است. این کار باعث مقاومت باکتری‌ها می‌شود و درمان‌های آینده را دشوار می‌کند. حتماً با متخصص اورولوژی مشورت کنید تا بر اساس نتایج کشت ادرار، آنتی‌بیوتیک مناسب تجویز شود."
    },
    {
      question: "کشت ادرار چیست و چرا مهم است؟",
      answer: "کشت ادرار یک آزمایش است که نوع دقیق باکتری عامل عفونت را شناسایی می‌کند و مشخص می‌کند کدام آنتی‌بیوتیک‌ها مؤثر هستند. این آزمایش برای درمان هدفمند و جلوگیری از مقاومت آنتی‌بیوتیکی حیاتی است."
    },
    {
      question: "آیا می‌توانم کشت ادرار را در منزل انجام دهم؟",
      answer: "بله، با خدمات آزمایشگاه در منزل نوید زندگی، می‌توانید نمونه ادرار را در منزل تحویل داده و نتایج کشت را دریافت کنید. این کار راحتی بیشتری برای بیماران فراهم می‌کند."
    },
    {
      question: "چگونه می‌توانم از عفونت‌های مکرر پیشگیری کنم؟",
      answer: "نوشیدن مایعات کافی، تخلیه کامل مثانه، رعایت بهداشت فردی، درمان به موقع BPH، و کنترل قند خون در دیابتی‌ها می‌تواند از عفونت‌های مکرر جلوگیری کند. در صورت عفونت‌های مکرر، حتماً با متخصص اورولوژی مشورت کنید."
    },
    {
      question: "BPH چیست و چه ارتباطی با UTI دارد؟",
      answer: "BPH یا بزرگی خوش‌خیم پروستات یک وضعیت شایع در مردان بالای 50 سال است. پروستات بزرگ شده باعث مسدود شدن جریان ادرار و احتباس ادرار در مثانه می‌شود که زمینه را برای رشد باکتری‌ها و عفونت‌های مکرر فراهم می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "خدمات متخصص اورولوژی در منزل تهران",
      description: "دسترسی به خدمات تخصصی اورولوژی در منزل برای تشخیص و درمان بیماری‌های دستگاه ادراری مردان و زنان.",
      image: urologyImage,
      link: "/services/urology",
      category: "خدمات"
    },
    {
      title: "دیابت و کنترل قند خون: راهنمای کامل",
      description: "آشنایی با دیابت، روش‌های کنترل قند خون و پیشگیری از عوارض از جمله عفونت‌های ادراری.",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "بیماری‌ها"
    },
    {
      title: "ویزیت متخصص داخلی در منزل تهران",
      description: "دسترسی به خدمات متخصص داخلی برای تشخیص و درمان بیماری‌های داخلی و مدیریت بیماری‌های مزمن.",
      image: internalMedicineImage,
      link: "/services/internal-medicine",
      category: "خدمات"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="عفونت ادراری در مردان (UTI): علائم، علل و ضرورت ویزیت اورولوژیست"
        description="راهنمای جامع عفونت ادراری در مردان (UTI): علل زمینه‌ای، علائم، تشخیص با کشت ادرار و ضرورت درمان تخصصی. هشدار مهم درباره مصرف خودسرانه آنتی‌بیوتیک و اهمیت ویزیت متخصص اورولوژی."
        keywords="عفونت ادراری مردان, UTI در مردان, علائم عفونت ادراری, کشت ادرار, BPH, پروستات, متخصص اورولوژی در منزل, تزریق آنتی‌بیوتیک در منزل"
        canonical="https://navidzendegi.com/articles/male-uti"
        ogType="article"
        ogImage={maleUTIImage}
        publishedTime="2024-01-18T12:00:00+03:30"
        modifiedTime="2024-01-18T12:00:00+03:30"
      />
      
      <ArticleSchema 
        title="عفونت ادراری در مردان (UTI): علائم، علل زمینه‌ای و ضرورت ویزیت متخصص اورولوژی در منزل"
        description="راهنمای جامع و علمی عفونت ادراری در مردان، از علل و علائم تا تشخیص و درمان تخصصی"
        publishedTime="2024-01-18T12:00:00+03:30"
        modifiedTime="2024-01-18T12:00:00+03:30"
        image={maleUTIImage}
      />
      
      <Header />
      <FloatingContact />
      
      <main className="pt-16">
        <article className="medical-section bg-background">
          <div className="container-custom py-12">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"عفونت ادراری مردان",url:"/articles/male-uti"}]} />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                عفونت ادراری در مردان (UTI): علائم، علل زمینه‌ای و ضرورت ویزیت متخصص اورولوژی در منزل
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-8">
                <span>نویسنده: تیم نوید زندگی</span>
                <span>•</span>
                <span>تاریخ: ۱۸ دی ۱۴۰۳</span>
              </div>

              <img 
                src={maleUTIImage} 
                alt="عفونت ادراری در مردان - UTI"
                className="w-full h-auto rounded-lg mb-8"
              />

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  عفونت ادراری (Urinary Tract Infection - UTI) در <strong>مردان</strong>، برخلاف زنان، کمتر شایع است و اغلب نشانه‌ای از یک مشکل زمینه‌ای ساختاری یا عملکردی در دستگاه ادراری می‌باشد. به همین دلیل، تشخیص و درمان UTI در <strong>مردان</strong> نیاز به ارزیابی دقیق‌تری توسط <Link to="/services/urology" className="text-primary hover:underline font-semibold">متخصص اورولوژی</Link> دارد. درمان زودهنگام برای جلوگیری از گسترش عفونت به کلیه‌ها و پروستات حیاتی است.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  علل و عوامل خطر عفونت ادراری در مردان
                </h2>
                
                <p className="leading-relaxed mb-4">
                  در اکثر موارد، عامل ایجاد UTI باکتری اشرشیا کلی (E. coli) است. با این حال، عوامل خطر در <strong>مردان</strong> معمولاً پیچیده‌تر بوده و شامل موارد زیر می‌شوند:
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  بزرگی خوش‌خیم پروستات (BPH)
                </h3>
                <p className="leading-relaxed mb-4">
                  این شایع‌ترین علت UTI در <strong>مردان</strong> مسن است. پروستات بزرگ شده، جریان ادرار را مسدود کرده و مانع تخلیه کامل مثانه می‌شود. باقی ماندن ادرار (احتباس ادرار) محیط مناسبی برای رشد باکتری‌ها فراهم می‌کند.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  سنگ کلیه یا سنگ مثانه
                </h3>
                <p className="leading-relaxed mb-4">
                  وجود سنگ می‌تواند جریان ادرار را مسدود کرده و زمینه را برای عفونت مکرر فراهم کند.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  عفونت پروستات (پروستاتیت)
                </h3>
                <p className="leading-relaxed mb-4">
                  پروستات ملتهب یا عفونی می‌تواند منبع عفونت‌های ادراری مکرر باشد و نیاز به درمان طولانی‌مدت دارد.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  دیابت کنترل نشده
                </h3>
                <p className="leading-relaxed mb-4">
                  <Link to="/articles/diabetes" className="text-primary hover:underline font-semibold">قند خون بالا</Link> سیستم ایمنی را تضعیف کرده و خطر عفونت‌ها را افزایش می‌دهد. <strong>مردان</strong> دیابتی باید به کنترل دقیق قند خون و بهداشت ادراری توجه ویژه‌ای داشته باشند.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  استفاده از کاتتر ادراری
                </h3>
                <p className="leading-relaxed mb-4">
                  کاتتر یک مسیر مستقیم برای ورود باکتری‌ها به مثانه ایجاد می‌کند و یکی از شایع‌ترین علل UTI در بیماران بستری است.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  علائم بالینی عفونت ادراری (UTI)
                </h2>
                
                <p className="leading-relaxed mb-4">
                  علائم UTI در <strong>مردان</strong> می‌تواند بر اساس محل عفونت (مثانه یا کلیه) متفاوت باشد:
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  علائم عفونت مجرای ادرار و مثانه (سیستیت)
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>سوزش و درد هنگام دفع ادرار (دیسوری)</strong></li>
                  <li><strong>تکرر ادرار یا احساس نیاز فوری به دفع ادرار (اورژانس)</strong></li>
                  <li><strong>احساس تخلیه ناقص مثانه</strong></li>
                  <li><strong>وجود خون در ادرار (هماچوری)</strong></li>
                  <li>ادرار کدر یا بدبو</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  علائم عفونت کلیه (پیلونفریت)
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>تب بالا و لرز</strong></li>
                  <li><strong>درد در پهلوها و ناحیه کمر</strong></li>
                  <li><strong>تهوع و استفراغ</strong></li>
                  <li>ضعف و خستگی شدید</li>
                </ul>

                <div className="bg-destructive/10 border-r-4 border-destructive p-6 rounded-lg my-8">
                  <p className="text-foreground leading-relaxed font-semibold">
                    ⚠️ هشدار: اگر علائم عفونت کلیه (تب بالا، درد پهلو، تهوع) را دارید، فوراً با <a href="tel:09386117912" className="text-primary hover:underline">09386117912</a> تماس بگیرید. عفونت کلیه می‌تواند به سرعت خطرناک شود و نیاز به درمان فوری دارد.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  تشخیص تخصصی و اهمیت کشت ادرار
                </h2>
                
                <p className="leading-relaxed mb-4">
                  تشخیص UTI با ارزیابی بالینی و آزمایش‌های ادرار توسط پزشک متخصص آغاز می‌شود:
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  آزمایش ادرار (Urinalysis)
                </h3>
                <p className="leading-relaxed mb-4">
                  بررسی ادرار برای یافتن گلبول‌های سفید، گلبول‌های قرمز و نیترات‌ها که نشان‌دهنده عفونت هستند.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  کشت ادرار (Urine Culture) - حیاتی
                </h3>
                <p className="leading-relaxed mb-4">
                  این تست برای شناسایی دقیق نوع باکتری عامل عفونت و تعیین حساسیت آن به آنتی‌بیوتیک‌های مختلف (آنتی‌بیوگرام) حیاتی است تا درمان هدفمند صورت گیرد. با <Link to="/services/laboratory" className="text-primary hover:underline font-semibold">خدمات آزمایشگاه در منزل</Link> نوید زندگی، می‌توانید نمونه ادرار را در منزل تحویل دهید.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  تصویربرداری
                </h3>
                <p className="leading-relaxed mb-4">
                  در موارد UTI های مکرر در <strong>مردان</strong>، سونوگرافی کلیه و مثانه ممکن است برای تشخیص عوامل زمینه‌ای مانند BPH یا سنگ‌ها تجویز شود.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  درمان و مدیریت تخصصی عفونت ادراری
                </h2>
                
                <p className="leading-relaxed mb-4">
                  درمان عفونت ادراری در <strong>مردان</strong> نیازمند مصرف دقیق و کامل دوره آنتی‌بیوتیک است.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  آنتی‌بیوتیک‌تراپی
                </h3>
                <p className="leading-relaxed mb-4">
                  پزشک متخصص بر اساس نتایج کشت، آنتی‌بیوتیک مناسب را تجویز می‌کند. تکمیل دوره درمان، حتی پس از بهبود علائم، برای جلوگیری از عود و مقاومت میکروبی ضروری است.
                </p>

                <div className="bg-destructive/10 border-r-4 border-destructive p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    ⛔ هشدار مهم: خطر مصرف خودسرانه آنتی‌بیوتیک
                  </h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    <strong>تحت هیچ شرایطی داروهای آنتی‌بیوتیک را به صورت خودسرانه مصرف یا قطع نکنید.</strong> مصرف اشتباه آنتی‌بیوتیک‌ها، نوع باکتری را تغییر داده و منجر به <strong>مقاومت آنتی‌بیوتیکی</strong> می‌شود که درمان‌های بعدی را به شدت دشوار می‌کند.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    برای <strong>مردان</strong>، مصرف آنتی‌بیوتیک اشتباه می‌تواند باعث عفونت پروستات مزمن و مشکلات طولانی‌مدت شود. حتماً با <Link to="/services/urology" className="text-primary hover:underline font-semibold">متخصص اورولوژی</Link> مشورت کنید.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  ویزیت تخصصی در منزل
                </h3>
                <p className="leading-relaxed mb-4">
                  از آنجا که UTI در <strong>مردان</strong> نیاز به بررسی عوامل زمینه‌ای دارد، <Link to="/services/urology" className="text-primary hover:underline font-semibold">ویزیت متخصص اورولوژی در منزل</Link> یک راهکار مؤثر است. پزشک می‌تواند معاینات لازم را انجام داده و دستور آزمایش ادرار و کشت در منزل را صادر کند.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  تزریقات آنتی‌بیوتیک در منزل
                </h3>
                <p className="leading-relaxed mb-4">
                  در موارد شدید که بیمار قادر به تحمل داروی خوراکی نیست یا نیاز به دوزهای اولیه قوی دارد، خدمات تزریقات آنتی‌بیوتیک در منزل توسط پرستار متخصص نوید زندگی، روند درمان را تسهیل می‌کند.
                </p>

                <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    ویزیت متخصص اورولوژی در منزل برای درمان UTI
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    درمان عفونت ادراری را جدی بگیرید. برای ارزیابی دقیق، دستور <Link to="/services/laboratory" className="text-primary hover:underline font-semibold">کشت ادرار در منزل</Link> و هماهنگی <Link to="/services/urology" className="text-primary hover:underline font-semibold">ویزیت متخصص اورولوژی در منزل</Link>، همین حالا با نوید زندگی تماس بگیرید.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Button 
                      onClick={handleCall}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                    >
                      <Phone className="ml-2 h-5 w-5" />
                      <a href="tel:09386117912">تماس: 09386117912</a>
                    </Button>
                    <Button 
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="flex-1"
                      size="lg"
                    >
                      <MessageCircle className="ml-2 h-5 w-5" />
                      واتساپ
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  منابع (References)
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Hooton, T. M., & Gupta, K. (2020). Urinary tract infection in men. Infectious Disease Clinics of North America, 34(4), 717-731.</li>
                  <li>Nickel, J. C. (2018). Management of urinary tract infections in men. Current Opinion in Urology, 28(2), 170-176.</li>
                  <li>Tambyah, P. A., & Maki, D. G. (2000). Catheter-associated urinary tract infection is rarely symptomatic: a prospective study. Archives of Internal Medicine, 160(5), 673-677.</li>
                </ol>

                <div className="bg-accent/30 p-6 rounded-lg my-8">
                  <p className="text-foreground leading-relaxed">
                    <strong>توجه:</strong> این مقاله صرفاً جنبه آموزشی دارد و جایگزین مشاوره پزشکی نیست. برای تشخیص و درمان عفونت ادراری حتماً با <Link to="/services/urology" className="text-primary hover:underline font-semibold">متخصص اورولوژی</Link> یا <Link to="/services/internal-medicine" className="text-primary hover:underline font-semibold">متخصص داخلی</Link> مشورت کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="bg-muted/30 py-12">
          <div className="container-custom">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="container-custom">
            <PricingInfo />
          </div>
        </section>

        <section className="bg-muted/30 py-12">
          <div className="container-custom">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MaleUTIPage;