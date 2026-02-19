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
import telmisartanImage from "@/assets/telmisartan-medication.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import atorvastatinImage from "@/assets/atorvastatin-medication.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";

const TelmisartanPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqs = [
    {
      question: "تلمیزارتان چه زمانی باید مصرف شود؟",
      answer: "تلمیزارتان معمولاً یک بار در روز، ترجیحاً در همان ساعت روز مصرف می‌شود. می‌توانید آن را با یا بدون غذا مصرف کنید. مهم است که دوز خود را فراموش نکنید تا اثر دارو در طول 24 ساعت حفظ شود."
    },
    {
      question: "آیا تلمیزارتان با سایر داروهای فشار خون تداخل دارد؟",
      answer: "بله، تلمیزارتان ممکن است با برخی داروها تداخل داشته باشد، به‌ویژه دیورتیک‌ها و داروهای افزایش‌دهنده پتاسیم. حتماً لیست کامل داروهای خود را با پزشک در میان بگذارید. پزشک متخصص در منزل می‌تواند تداخلات دارویی را بررسی کند."
    },
    {
      question: "چه زمانی باید آزمایش خون برای تلمیزارتان انجام دهم؟",
      answer: "معمولاً باید هر 3 تا 6 ماه یک بار آزمایش عملکرد کلیه و سطح پتاسیم خون خود را انجام دهید. پزشک شما بسته به وضعیت سلامتی‌تان ممکن است فواصل متفاوتی را توصیه کند. با سرویس آزمایشگاه در منزل می‌توانید این آزمایش‌ها را در خانه انجام دهید."
    },
    {
      question: "آیا تلمیزارتان برای دیابتی‌ها امن است؟",
      answer: "بله، تلمیزارتان نه تنها برای دیابتی‌ها امن است، بلکه به دلیل خواص محافظت کننده کلیوی، اغلب برای بیماران دیابتی مبتلا به فشار خون توصیه می‌شود. این دارو می‌تواند از پیشرفت نفروپاتی دیابتی جلوگیری کند."
    },
    {
      question: "عوارض جانبی تلمیزارتان چیست؟",
      answer: "عوارض جانبی رایج شامل سرگیجه، سردرد و خستگی است. عوارض جدی‌تر نادر هستند اما شامل افزایش پتاسیم خون و آنژیوادم می‌شوند. اگر تورم صورت، لب‌ها یا گلو داشتید، فوراً با پزشک تماس بگیرید."
    },
    {
      question: "آیا می‌توانم تلمیزارتان را خودسرانه قطع کنم؟",
      answer: "خیر، هرگز نباید تلمیزارتان را بدون مشورت با پزشک قطع کنید. قطع ناگهانی دارو می‌تواند باعث افزایش ناگهانی فشار خون شود. اگر قصد تغییر دارو را دارید، حتماً با متخصص قلب یا داخلی خود مشورت کنید."
    },
    {
      question: "چگونه می‌توانم اثربخشی تلمیزارتان را در منزل پایش کنم؟",
      answer: "بهترین روش، اندازه‌گیری منظم فشار خون در منزل با دستگاه فشارسنج است. فشار خون خود را در زمان‌های مختلف روز اندازه‌گیری کرده و نتایج را یادداشت کنید. با ویزیت پزشک در منزل می‌توانید این نتایج را با متخصص بررسی کنید."
    },
    {
      question: "آیا تلمیزارتان با غذا تداخل دارد؟",
      answer: "تلمیزارتان با غذا تداخل زیادی ندارد، اما باید مصرف بیش از حد غذاهای حاوی پتاسیم (مانند موز، سیب‌زمینی و اسفناج) را محدود کنید تا از افزایش خطرناک پتاسیم خون جلوگیری شود. پزشک می‌تواند رژیم غذایی مناسب را به شما توصیه کند."
    }
  ];

  const relatedArticles = [
    {
      title: "وارفارین: داروی رقیق‌کننده خون و نکات مهم مصرف",
      description: "آشنایی کامل با وارفارین، یک داروی ضروری برای جلوگیری از لخته شدن خون و نکات ایمنی در مصرف آن.",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "دارو"
    },
    {
      title: "آتورواستاتین: راهنمای جامع کنترل کلسترول",
      description: "نقش آتورواستاتین در کاهش کلسترول و پیشگیری از بیماری‌های قلبی عروقی.",
      image: atorvastatinImage,
      link: "/articles/atorvastatin",
      category: "دارو"
    },
    {
      title: "کنترل فشار خون بالا: راهنمای کامل درمان و پیشگیری",
      description: "روش‌های مؤثر کنترل فشار خون بالا، از تغییرات سبک زندگی تا درمان‌های دارویی.",
      image: highBloodPressureImage,
      link: "/articles/high-blood-pressure",
      category: "بیماری‌ها"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="تلمیزارتان (Telmisartan): داروی فشار خون با محافظت قلبی و کلیوی"
        description="راهنمای جامع تلمیزارتان (Telmisartan)، داروی ARB نسل جدید برای کنترل فشار خون بالا با پوشش 24 ساعته و حفاظت از قلب و کلیه. مکانیسم اثر، عوارض و نکات مهم مصرف."
        keywords="تلمیزارتان, Telmisartan, داروی فشار خون, ARB, فشار خون بالا, محافظت کلیوی, نفروپاتی دیابتی, داروهای قلبی عروقی"
        canonical="https://navidzendegi.com/articles/telmisartan"
        ogType="article"
        ogImage={telmisartanImage}
        publishedTime="2024-01-18T10:00:00+03:30"
        modifiedTime="2024-01-18T10:00:00+03:30"
      />
      
      <ArticleSchema 
        title="تلمیزارتان (Telmisartan): داروی نسل جدید فشار خون بالا، مکانیسم عمل اختصاصی و محافظت طولانی‌مدت قلبی و کلیوی"
        description="راهنمای جامع و علمی تلمیزارتان، از مکانیسم اثر تا کاربردها، عوارض و نکات مدیریت در منزل"
        publishedTime="2024-01-18T10:00:00+03:30"
        modifiedTime="2024-01-18T10:00:00+03:30"
        image={telmisartanImage}
      />
      
      <Header />
      <FloatingContact />
      
      <main className="pt-16">
        <article className="medical-section bg-background">
          <div className="container-custom py-12">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"تلمیزارتان",url:"/articles/telmisartan"}]} />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                تلمیزارتان (Telmisartan): داروی نسل جدید فشار خون بالا، مکانیسم عمل اختصاصی و محافظت طولانی‌مدت قلبی و کلیوی
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-8">
                <span>نویسنده: تیم نوید زندگی</span>
                <span>•</span>
                <span>تاریخ: ۱۸ دی ۱۴۰۳</span>
              </div>

              <img 
                src={telmisartanImage} 
                alt="تلمیزارتان - داروی فشار خون بالا"
                className="w-full h-auto rounded-lg mb-8"
              />

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  تلمیزارتان (Telmisartan)، به عنوان یک عضو برجسته از دسته داروهای مسدودکننده‌های گیرنده آنژیوتانسین II (ARB)، یک انتخاب کلیدی در مدیریت طولانی‌مدت <Link to="/articles/high-blood-pressure" className="text-primary hover:underline font-semibold">فشار خون بالا (Hypertension)</Link> محسوب می‌شود. این دارو نه تنها فشار خون را به طور مؤثر کاهش می‌دهد، بلکه به دلیل خواص فارماکولوژیک منحصربه‌فرد، نقش مهمی در کاهش خطر حوادث جدی مانند سکته مغزی، سکته قلبی و جلوگیری از آسیب‌های اندام‌های انتهایی، به‌ویژه کلیه‌ها، ایفا می‌کند.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  مکانیسم اثر و تمایز تلمیزارتان: نیمه‌عمر طولانی و حفظ اثر 24 ساعته
                </h2>
                
                <p className="leading-relaxed mb-4">
                  عملکرد ضد فشار خون تلمیزارتان از طریق کنترل دقیق سیستم رنین-آنژیوتانسین-آلدوسترون (RAAS) انجام می‌شود، اما با ویژگی‌هایی که آن را متمایز می‌کند:
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  هدف‌گیری گیرنده AT₁
                </h3>
                <p className="leading-relaxed mb-4">
                  تلمیزارتان با قدرت بالا و انتخابی، گیرنده‌های AT₁ را مسدود می‌کند. این گیرنده‌ها واسطه اصلی برای اثرات مضر هورمون آنژیوتانسین II هستند که شامل انقباض شدید عروق خونی (افزایش فشار) و تحریک ترشح آلدوسترون (افزایش احتباس آب و سدیم) می‌شود. با مهار این گیرنده‌ها، تلمیزارتان باعث گشاد شدن عروق (وازودیلاتاسیون) و در نتیجه، کاهش پایدار فشار خون می‌شود.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  پوشش کامل 24 ساعته
                </h3>
                <p className="leading-relaxed mb-4">
                  تلمیزارتان دارای طولانی‌ترین نیمه‌عمر در بین داروهای ARB است. این ویژگی تضمین می‌کند که اثر کاهنده فشار خون در طول 24 ساعت، حتی در ساعات صبح زود که ریسک حوادث قلبی بالاتر است، حفظ شود. این پایداری، پایبندی بیمار به مصرف دارو را بهبود می‌بخشد.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  اثرات پلئوتروپیک (Pleiotropic Effects)
                </h3>
                <p className="leading-relaxed mb-4">
                  مطالعات نشان می‌دهند که تلمیزارتان ممکن است دارای اثرات فرعی مفیدی مانند بهبود حساسیت به انسولین و کاهش التهاب عروقی باشد که آن را برای بیماران مبتلا به فشار خون و سندرم متابولیک مناسب‌تر می‌سازد.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  کاربردهای درمانی فراتر از فشار خون (اندیکاسیون‌های حفاظتی)
                </h2>
                
                <p className="leading-relaxed mb-4">
                  تلمیزارتان صرفاً یک داروی ضد فشار خون نیست؛ بلکه یک داروی محافظت کننده قلبی-کلیوی است:
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  محافظت از کلیه در بیماران دیابتی
                </h3>
                <p className="leading-relaxed mb-4">
                  در بیماران مبتلا به فشار خون بالا و <Link to="/articles/diabetes" className="text-primary hover:underline font-semibold">دیابت نوع 2</Link>، تلمیزارتان با کاهش فشار داخلی گلومرولی، از پیشرفت نفروپاتی دیابتی (آسیب کلیوی) جلوگیری کرده و دفع پروتئین از ادرار را کاهش می‌دهد.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  کاهش ریسک حوادث ماژور عروقی
                </h3>
                <p className="leading-relaxed mb-4">
                  در بیمارانی که سابقه بیماری‌های عروقی، <Link to="/articles/stroke-symptoms" className="text-primary hover:underline font-semibold">سکته مغزی</Link> یا بیماری شریان محیطی دارند اما تحمل داروهای دیگر را ندارند، تلمیزارتان یک گزینه حیاتی برای کاهش ریسک حوادث آینده است.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  دستورالعمل‌های مصرف
                </h3>
                <p className="leading-relaxed mb-4">
                  دوز این دارو توسط متخصص قلب یا داخلی تنظیم می‌شود و معمولاً یک بار در روز، با یا بدون غذا، مصرف می‌گردد. تغییرات دوز تنها باید با نظارت مستقیم پزشک انجام شود.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  مدیریت عوارض و ضرورت پایش تخصصی در منزل
                </h2>
                
                <p className="leading-relaxed mb-4">
                  با وجود تحمل‌پذیری بالا، پایش مستمر عوارض جانبی و تداخلات دارویی تلمیزارتان ضروری است.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  ۱. عوارض و علائم نیازمند گزارش فوری
                </h3>
                
                <div className="mb-4">
                  <p className="font-semibold mb-2">افت فشار خون وضعیتی:</p>
                  <p className="leading-relaxed mb-4">
                    سرگیجه و سبکی سر، به‌ویژه هنگام برخاستن سریع، از علائم رایج است که با پایش منظم فشار خون در منزل قابل مدیریت است.
                  </p>

                  <p className="font-semibold mb-2">اختلالات الکترولیتی:</p>
                  <p className="leading-relaxed mb-4">
                    ریسک افزایش پتاسیم خون (هیپرکالمی) وجود دارد، به‌ویژه در افراد با کاهش عملکرد کلیه. این امر نیازمند <Link to="/services/laboratory" className="text-primary hover:underline font-semibold">آزمایش خون دوره‌ای در منزل</Link> برای اندازه‌گیری سطح پتاسیم است.
                  </p>

                  <p className="font-semibold mb-2">آنژیوادم (Angioedema):</p>
                  <p className="leading-relaxed mb-4">
                    یک واکنش نادر اما بالقوه خطرناک که با تورم صورت، لب‌ها یا گلو مشخص می‌شود و نیاز به مراجعه فوری به اورژانس دارد.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  ۲. هشدارهای دارویی حیاتی
                </h3>
                
                <div className="mb-4">
                  <p className="font-semibold mb-2">منع مصرف در بارداری:</p>
                  <p className="leading-relaxed mb-4">
                    تلمیزارتان در دوران بارداری کاملاً ممنوع است و باید در صورت اقدام به بارداری فوراً قطع شود.
                  </p>

                  <p className="font-semibold mb-2">تداخل با دیورتیک‌ها:</p>
                  <p className="leading-relaxed mb-4">
                    مصرف همزمان با داروهای ادرارآور (دیورتیک‌ها) باید به دقت توسط پزشک تنظیم شود تا از افت شدید فشار خون جلوگیری شود.
                  </p>
                </div>

                <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    ویزیت متخصص قلب در منزل برای مدیریت تلمیزارتان
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    برای تنظیم دقیق دوز تلمیزارتان بر اساس نتایج آزمایش خون در منزل و پایش علائم حیاتی، <Link to="/cardiology" className="text-primary hover:underline font-semibold">ویزیت متخصص قلب در منزل</Link> خود را با نوید زندگی رزرو کنید. با ما تماس بگیرید تا فشار خون شما تحت کنترل دقیق قرار گیرد.
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
                  <li>Weber, M. A. (2018). Telmisartan: an updated review of its use in hypertension, diabetic nephropathy and cardiovascular risk reduction. Expert Review of Cardiovascular Therapy, 16(5), 329-340.</li>
                  <li>Burnier, M., & Brunner, H. R. (2018). Angiotensin II receptor antagonists: Telmisartan. Journal of Hypertension, 36(5), 983-990.</li>
                  <li>Sarafidis, P. A., et al. (2012). ACE inhibitors and ARBs in patients with hypertension and diabetes: safety and compliance considerations. Expert Opinion on Drug Safety, 11(6), 947-959.</li>
                  <li>Ferrario, C. M., et al. (2010). Inhibition of the renin-angiotensin-aldosterone system: from theory to clinical practice. Current Cardiology Reports, 12(4), 283-290.</li>
                </ol>

                <div className="bg-accent/30 p-6 rounded-lg my-8">
                  <p className="text-foreground leading-relaxed">
                    <strong>توجه:</strong> این مقاله صرفاً جنبه آموزشی دارد و جایگزین مشاوره پزشکی نیست. برای تجویز یا تغییر دوز تلمیزارتان حتماً با <Link to="/cardiology" className="text-primary hover:underline font-semibold">متخصص قلب</Link> یا <Link to="/services/internal-medicine" className="text-primary hover:underline font-semibold">متخصص داخلی</Link> مشورت کنید.
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

export default TelmisartanPage;