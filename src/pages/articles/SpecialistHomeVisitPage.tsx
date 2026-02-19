import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone, Heart, Brain, Bone, Shield, Baby, User, Activity, Clock, Home, CheckCircle } from "lucide-react";
import specialistHomeVisitImage from "@/assets/specialist-doctor.jpg";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const SpecialistHomeVisitPage = () => {
  const faqs = [
    {
      question: "آیا ویزیت تمام متخصصین در منزل امکان‌پذیر است؟",
      answer: "بله، با پیشرفت تجهیزات پزشکی پرتابل، بسیاری از معاینات تخصصی که پیش از این تنها در مراکز درمانی انجام می‌شد، اکنون در منزل قابل انجام است. نوید زندگی طیف وسیعی از متخصصین را به منزل اعزام می‌کند."
    },
    {
      question: "هزینه ویزیت متخصص در منزل چقدر است؟",
      answer: "هزینه بسته به نوع تخصص و خدمات درخواستی متفاوت است. برای اطلاع از تعرفه دقیق با شماره 09386117912 تماس بگیرید."
    },
    {
      question: "آیا امکان انجام تست‌های تشخیصی در منزل وجود دارد؟",
      answer: "بله، متخصصین ما به همراه تجهیزات پرتابل مانند نوار قلب، اکوکاردیوگرافی و سایر ابزارهای تشخیصی به منزل اعزام می‌شوند."
    },
    {
      question: "چگونه می‌توانم درخواست ویزیت متخصص در منزل بدهم؟",
      answer: "با تماس با شماره 09386117912 یا از طریق وب‌سایت navidzendegi.com می‌توانید درخواست خود را ثبت کنید."
    },
    {
      question: "آیا خدمات شما در تمام مناطق تهران و کرج ارائه می‌شود؟",
      answer: "بله، خدمات ما در تمامی مناطق ۲۲گانه تهران و تمامی محله‌های کرج به صورت شبانه‌روزی ارائه می‌شود."
    }
  ];

  const relatedArticles = [
    {
      title: "ویزیت متخصص قلب، نوار قلب و اکو در منزل",
      description: "خدمات تخصصی قلبی شامل ویزیت متخصص قلب، نوار قلب و اکوکاردیوگرافی در منزل",
      image: "/src/assets/cardiology-home-services.jpg",
      link: "/articles/cardiology-home-services",
      category: "قلب و عروق"
    },
    {
      title: "ویزیت متخصص داخلی در منزل",
      description: "خدمات ویزیت پزشک متخصص داخلی در منزل تهران و کرج",
      image: "/src/assets/internal-medicine.jpg",
      link: "/services/internal",
      category: "داخلی"
    },
    {
      title: "خدمات پرستاری در منزل",
      description: "ارائه خدمات پرستاری حرفه‌ای در منزل با بهترین کیفیت",
      image: "/src/assets/nursing-home-care.jpg",
      link: "/services/nursing",
      category: "پرستاری"
    }
  ];

  const specialists = [
    { icon: User, title: "متخصص داخلی", description: "بررسی دردهای شکمی، کنترل دیابت، فشار خون و عفونت‌ها" },
    { icon: Heart, title: "متخصص قلب و عروق", description: "همراه با نوار قلب و اکوکاردیوگرافی پرتابل در محل" },
    { icon: Brain, title: "متخصص مغز و اعصاب", description: "بررسی سکته‌های مغزی، پارکینسون، آلزایمر و سردردهای مزمن" },
    { icon: Bone, title: "متخصص ارتوپدی", description: "معاینه شکستگی‌ها، دردهای مفاصل و کشیدگی‌های عضلانی" },
    { icon: Shield, title: "متخصص عفونی", description: "درمان ذات‌الریه، زخم‌های عفونی و بیماری‌های ویروسی" },
    { icon: Activity, title: "متخصص کلیه و مجاری ادرار", description: "تعویض سوند و بررسی مشکلات کلیوی" },
    { icon: Brain, title: "متخصص اعصاب و روان", description: "مشاوره و درمان در محیطی کاملاً محرمانه و بدون استرس" },
    { icon: Baby, title: "متخصص اطفال", description: "ویزیت و معاینه کودکان در محیطی که در آن احساس آرامش می‌کنند" }
  ];

  return (
    <div className="min-h-screen bg-background font-IRANSans" dir="rtl">
      <SEOHead
        title="ویزیت انواع پزشک متخصص در منزل | تهران و کرج | نوید زندگی"
        description="ویزیت متخصص در منزل تهران و کرج. اعزام متخصص داخلی، قلب، مغز و اعصاب، ارتوپدی، عفونی، اطفال و روانپزشک به منزل. تماس: 09386117912"
        keywords="ویزیت متخصص در منزل تهران، دکتر در منزل کرج، ویزیت پزشک داخلی در خانه، اعزام متخصص قلب به منزل، متخصص مغز و اعصاب در منزل"
        canonical="https://navidzendegi.com/articles/specialist-home-visit"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"ویزیت متخصص در منزل",url:"/articles/specialist-home-visit"}]} />
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-relaxed">
            ویزیت انواع پزشک متخصص در منزل؛ بیمارستان را به خانه بیاورید
          </h1>
          <p className="text-muted-foreground mb-2">خدمات در تهران و کرج</p>
          <img 
            src={specialistHomeVisitImage} 
            alt="ویزیت متخصص در منزل تهران و کرج" 
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-foreground leading-relaxed mb-4">
            دوران ایستادن در صف‌های طولانی کلینیک‌ها، جستجوی جای پارک در خیابان‌های شلوغ و جابه‌جایی دشوار بیماران و سالمندان به پایان رسیده است. امروزه، سطح پیشرفته‌ای از خدمات پزشکی اجازه می‌دهد تا ویزیت انواع متخصص در منزل با همان دقت و کیفیت بیمارستانی انجام شود.
          </p>
          <p className="text-foreground leading-relaxed">
            مرکز خدمات پزشکی <strong>نوید زندگی</strong> با افتخار، جامع‌ترین شبکه اعزام پزشک متخصص به محل را در سراسر تهران و کرج ایجاد کرده است تا سلامت، در دسترس‌ترین دارایی شما باشد.
          </p>
        </div>

        {/* Specialists Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">متخصصین اعزامی «نوید زندگی»</h2>
          <p className="text-foreground mb-4">ما در نوید زندگی، دسترسی شما را به طیف وسیعی از پزشکان باتجربه فراهم کرده‌ایم:</p>
          
          <div className="space-y-4">
            {specialists.map((specialist, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <specialist.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">{specialist.title}</h3>
                  <p className="text-muted-foreground text-sm">{specialist.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">مزایای ویزیت متخصص در منزل برای ساکنین تهران و کرج</h2>
          <p className="text-foreground mb-4">ساکنین کلان‌شهرهای تهران و کرج با چالش‌های خاصی روبرو هستند که خدمات در منزل «نوید زندگی» آن‌ها را برطرف می‌کند:</p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground"><strong>رهایی از ترافیک و آلودگی هوا:</strong> به جای ساعت‌ها ماندن در ترافیک، پزشک در زمان مقرر به منزل شما می‌آید.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground"><strong>مناسب برای افراد با محدودیت حرکتی:</strong> سالمندان، بیماران تازه جراحی شده و افراد دارای معلولیت، بدون دردسر جابه‌جایی ویزیت می‌شوند.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground"><strong>کاهش خطر عفونت‌های بیمارستانی:</strong> در محیط خانه، بیمار در معرض ویروس‌ها و باکتری‌های مقاوم بیمارستانی قرار نمی‌گیرد.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground"><strong>تمرکز کامل پزشک بر بیمار:</strong> در ویزیت منزل، پزشک وقت بیشتری برای شنیدن شرح‌حال و معاینه دقیق بیمار اختصاص می‌دهد.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground"><strong>مشاوره همزمان با خانواده:</strong> پزشک می‌تواند مستقیماً با همراهان بیمار صحبت کرده و آموزش‌های لازم را بدهد.</span>
            </li>
          </ul>
        </div>

        {/* Process Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">چطور در تهران و کرج درخواست ویزیت متخصص دهیم؟</h2>
          <p className="text-foreground mb-4">فرآیند اعزام پزشک در نوید زندگی بسیار ساده و سریع طراحی شده است:</p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">۱</div>
              <div>
                <h3 className="font-semibold text-foreground">تماس یا ثبت درخواست</h3>
                <p className="text-muted-foreground text-sm">با شماره <a href="tel:09386117912" className="text-primary hover:underline">09386117912</a> تماس بگیرید یا از طریق سایت navidzendegi.com فرم درخواست را پر کنید.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">۲</div>
              <div>
                <h3 className="font-semibold text-foreground">مشاوره اولیه</h3>
                <p className="text-muted-foreground text-sm">کارشناسان ما نوع نیاز شما را بررسی کرده و هماهنگی‌های لازم را با متخصص مربوطه انجام می‌دهند.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">۳</div>
              <div>
                <h3 className="font-semibold text-foreground">اعزام تیم پزشکی</h3>
                <p className="text-muted-foreground text-sm">پزشک متخصص به همراه تجهیزات مورد نیاز به آدرس شما اعزام می‌شود.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">۴</div>
              <div>
                <h3 className="font-semibold text-foreground">پیگیری درمان</h3>
                <p className="text-muted-foreground text-sm">پس از ویزیت، تیم پشتیبانی ما برای اطمینان از روند بهبود در کنار شما خواهد بود.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">مقایسه ویزیت حضوری در مطب با ویزیت در منزل</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-right">ویژگی</th>
                  <th className="border border-border p-3 text-right">مراجعه به مطب/بیمارستان</th>
                  <th className="border border-border p-3 text-right">ویزیت در منزل (نوید زندگی)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">زمان انتظار</td>
                  <td className="border border-border p-3">۱ تا ۴ ساعت (به علاوه ترافیک)</td>
                  <td className="border border-border p-3 text-primary font-semibold">صفر (پزشک به خانه می‌آید)</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3">خطر آلودگی</td>
                  <td className="border border-border p-3">بالا (محیط‌های عمومی)</td>
                  <td className="border border-border p-3 text-primary font-semibold">بسیار پایین (محیط ایزوله خانه)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">راحتی بیمار</td>
                  <td className="border border-border p-3">سخت و خسته‌کننده</td>
                  <td className="border border-border p-3 text-primary font-semibold">حداکثر راحتی و آرامش</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3">هزینه جابه‌جایی</td>
                  <td className="border border-border p-3">هزینه اسنپ/بنزین و استهلاک</td>
                  <td className="border border-border p-3 text-primary font-semibold">ندارد</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* When to Contact */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">چه زمانی باید با ما تماس بگیرید؟</h2>
          <p className="text-foreground mb-4">اگر خود یا عزیزانتان با موارد زیر روبرو هستید، بدون جابه‌جا کردن بیمار با ما تماس بگیرید:</p>
          <ul className="space-y-2 text-foreground">
            <li>• نیاز به ویزیت تخصصی در منزل</li>
            <li>• عدم توانایی جابه‌جایی به دلیل سن یا بیماری</li>
            <li>• نیاز به انجام تست‌های تشخیصی در منزل</li>
            <li>• پیگیری درمان پس از جراحی</li>
            <li>• مشاوره پزشکی برای سالمندان</li>
          </ul>
        </div>

        {/* Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <p className="text-amber-800 font-semibold">هشدار مهم:</p>
          <p className="text-amber-700 text-sm">از خوددرمانی و مصرف خودسرانه دارو خودداری کنید. در صورت بروز هرگونه علائم، با پزشک مشورت نمایید.</p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 rounded-lg p-6 text-center mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">نیاز به ویزیت متخصص در منزل دارید؟</h2>
          <p className="text-muted-foreground mb-4">
            خدمات ما در تمامی مناطق ۲۲گانه تهران و تمامی محله‌های کرج به صورت شبانه‌روزی ارائه می‌شود.
          </p>
          <a 
            href="tel:09386117912" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            تماس فوری: 09386117912
          </a>
        </div>

        {/* Final Note */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">سخن پایانی</h2>
          <p className="text-foreground leading-relaxed">
            ما معتقدیم درمان باید در جایی انجام شود که بیمار در آن احساس امنیت می‌کند: خانه. <strong>نوید زندگی</strong> با تیمی متشکل از بهترین متخصصین و مدرن‌ترین تجهیزات، مراقبت‌های ویژه بیمارستانی را به خانه شما در تهران و کرج آورده است.
          </p>
          <p className="text-foreground font-semibold mt-4">با نوید زندگی، تخصص در یک قدمی شماست.</p>
        </div>

        <FAQSection faqs={faqs} />
        
        <RelatedArticles articles={relatedArticles} />
        
        <PricingInfo />
      </main>

      <FloatingContact />
      <Footer />
    </div>
  );
};

export default SpecialistHomeVisitPage;
