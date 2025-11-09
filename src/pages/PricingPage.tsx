import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Phone, Clock, AlertTriangle, AlertCircle, MessageCircle, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import FAQSection from "@/components/FAQSection";
const PricingPage = () => {
  const phoneNumber = "09386117912";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  // خدمات پرستاری در منزل
  const nursingServices = [{
    service: "تعبیه آنژیوکت و وصل سرم بزرگسال (بدون اقامت پرستار)",
    price: "800,000"
  }, {
    service: "هر تزریق داخل سرم (غیر از آنتی بیوتیک)",
    price: "100,000"
  }, {
    service: "هر تزریق آنتی بیوتیک داخل سرم (با نیم ساعت ماندگاری پرستار)",
    price: "200,000"
  }, {
    service: "تزریق عضلانی یک تزریق",
    price: "400,000"
  }, {
    service: "سرم تراپی کودکان زیر 10 سال",
    price: "1,000,000"
  }, {
    service: "هر تزریق عضلانی اضافه",
    price: "100,000"
  }, {
    service: "هر نیم ساعت ماندگاری پرستار",
    price: "150,000"
  }, {
    service: "تعبیه سوند",
    price: "600,000"
  }, {
    service: "تعبیه NG (لوله گاواژ)",
    price: "700,000"
  }, {
    service: "پانسمان (قیمت پایه)",
    price: "500,000"
  }, {
    service: "کشیدن بخیه (قیمت پایه)",
    price: "400,000"
  }, {
    service: "کنترل فشار خون",
    price: "400,000"
  }, {
    service: "انما (تنقیه)",
    price: "800,000"
  }, {
    service: "درمان زخم بستر (قیمت پایه)",
    price: "700,000"
  }];

  // ویزیت پزشک در منزل
  const doctorServices = [{
    service: "ویزیت پزشک عمومی",
    price: "980,000"
  }, {
    service: "ویزیت پزشک متخصص",
    price: "از 2,000,000"
  }];

  // سایر خدمات تخصصی
  const specialServices = [{
    service: "فیزیوتراپی در منزل (قیمت پایه)",
    price: "800,000"
  }, {
    service: "سونوگرافی در منزل (قیمت پایه)",
    price: "2,700,000"
  }, {
    service: "رادیولوژی در منزل (قیمت پایه)",
    price: "2,500,000"
  }, {
    service: "نوار عصب و عضله در منزل",
    price: "3,000,000"
  }, {
    service: "ویزیت متخصص قلب + اکو در منزل + نوار قلب در منزل",
    price: "4,500,000"
  }, {
    service: "نوار قلب در منزل",
    price: "900,000"
  }, {
    service: "هولتر در منزل",
    price: "2,000,000"
  }, {
    service: "ویزیت آنلاین پزشک عمومی",
    price: "150,000"
  }, {
    service: "ویزیت آنلاین متخصص",
    price: "350,000"
  }];
  const faqs = [{
    question: "چگونه می‌توانم تعرفه خدمات پزشکی در منزل را محاسبه کنم؟",
    answer: "تعرفه خدمات بر اساس نوع خدمت (پرستاری، ویزیت پزشک، خدمات تخصصی)، زمان ارائه خدمت (روز یا شب) و موقعیت مکانی محاسبه می‌شود. در صورت درخواست اورژانسی یا شبانه، ۲۰ تا ۳۰ درصد به تعرفه اضافه می‌شود. برای محاسبه دقیق با شماره 09386117912 تماس بگیرید."
  }, {
    question: "آیا تعرفه خدمات درمانی در منزل نوید زندگی مصوب وزارت بهداشت است؟",
    answer: "بله، تمام تعرفه‌های ما بر اساس استانداردهای وزارت بهداشت و با رعایت کامل اصول حرفه‌ای تعیین شده است. ما همچنین فاکتور رسمی برای ارائه به بیمه تکمیلی صادر می‌کنیم."
  }, {
    question: "آیا قیمت ویزیت پزشک متخصص با پزشک عمومی در منزل متفاوت است؟",
    answer: "بله، تعرفه ویزیت پزشک عمومی ۹۸۰,۰۰۰ تومان است در حالی که تعرفه ویزیت پزشک متخصص از ۲,۰۰۰,۰۰۰ تومان شروع می‌شود و بسته به تخصص پزشک متفاوت است."
  }, {
    question: "آیا هزینه مواد مصرفی در تعرفه لحاظ شده است؟",
    answer: "خیر، هزینه مواد مصرفی مانند سرم، داروها، لوازم پانسمان و سونداژ به صورت جداگانه محاسبه و اخذ می‌شود. قیمت‌های اعلام شده فقط شامل هزینه خدمت پرستاری یا پزشکی است."
  }, {
    question: "آیا نوید زندگی در تمام مناطق تهران خدمات ارائه می‌دهد؟",
    answer: "بله، نوید زندگی در کلیه مناطق تهران به صورت شبانه‌روزی خدمات پزشکی و پرستاری در منزل ارائه می‌دهد. برای درخواست خدمات در مناطق دورتر، لطفاً با ما تماس بگیرید."
  }];
  return <div className="min-h-screen bg-background">
      <SEOHead title="تعرفه خدمات پزشکی در منزل 1404 | قیمت و هزینه پرستاری و درمانی در خانه - نوید زندگی" description="تعرفه کامل و شفاف خدمات پزشکی در منزل شامل قیمت پرستاری، ویزیت پزشک عمومی و متخصص، تزریقات، سرم تراپی و خدمات تخصصی در تهران. قیمت‌های مصوب و عادلانه با صدور فاکتور رسمی." keywords="تعرفه خدمات پزشکی در منزل، قیمت خدمات پرستاری در منزل، هزینه ویزیت پزشک در منزل، تعرفه تزریقات در منزل، قیمت پرستار شبانه‌روزی، هزینه‌های درمانی در خانه، قیمت سرم تراپی در منزل، تعرفه پرستاری تهران" canonical="https://navidzendegi.ir/pricing" ogImage="https://navidzendegi.ir/logo.jpg" />
      
      <StructuredData breadcrumbs={[{
      name: "خانه",
      url: "https://navidzendegi.ir"
    }, {
      name: "تعرفه خدمات",
      url: "https://navidzendegi.ir/pricing"
    }]} faqs={faqs} />
      
      <Header />
      
      {/* Hero Section */}
      <section className="medical-section bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              تعرفه خدمات پزشکی در منزل 1404: شفافیت کامل در هزینه‌های پرستاری و درمانی
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              قیمت‌های شفاف و عادلانه برای خدمات پزشکی، پرستاری و تخصصی در منزل - مصوب و قابل اعتماد
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={handleCall} className="flex items-center gap-3 text-lg px-8 py-6">
                <Phone className="w-6 h-6" />
                تماس فوری
                <span className="ltr font-bold">{phoneNumber}</span>
              </Button>
              <Button variant="outline" size="lg" onClick={handleWhatsApp} className="flex items-center gap-3 text-lg px-8 py-6 border-2">
                <MessageCircle className="w-6 h-6" />
                واتساپ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* مقدمه و اعتمادسازی */}
      <section className="medical-section">
        <div className="container mx-auto max-w-5xl">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p className="text-lg leading-relaxed mb-6">
              جستجوی شما برای <strong>تعرفه خدمات پزشکی در منزل</strong> نشان‌دهنده اهمیت شفافیت در هزینه‌های درمانی است. در نوید زندگی، ما متعهد به ارائه قیمت‌های کاملاً شفاف و عادلانه برای تمام خدمات پزشکی و پرستاری در منزل هستیم. هیچ هزینه پنهانی وجود ندارد و تمام تعرفه‌ها بر اساس استانداردهای حرفه‌ای و با رعایت کیفیت بالا تعیین شده‌اند.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              تعرفه خدمات ما بر اساس عوامل مختلفی محاسبه می‌شود: <strong>نوع خدمت</strong> (پرستاری، ویزیت پزشک، خدمات تخصصی)، <strong>موقعیت مکانی</strong> شما در تهران، <strong>زمان ارائه خدمت</strong> (روز یا شب)، و <strong>تخصص و مدارک کادر درمان</strong>. تمام پرستاران ما حداقل دارای مدرک کارشناسی پرستاری و تمام پزشکان ما دارای مجوز رسمی نظام پزشکی هستند.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              یکی از مشکلات اصلی در بازار خدمات پزشکی در منزل، <strong>عدم شفافیت قیمت‌ها</strong> است که باعث نگرانی بیماران و خانواده‌ها می‌شود. ما در نوید زندگی این مشکل را با ارائه جدول تعرفه کامل و قابل دسترس حل کرده‌ایم. تمام قیمت‌های ما عادلانه بوده و فاکتور رسمی برای ارائه به بیمه تکمیلی صادر می‌شود.
            </p>
            
            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-8">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">تضمین شفافیت قیمت</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تمام تعرفه‌های نوید زندگی براساس استانداردهای وزارت بهداشت و با رعایت کامل اصول حرفه‌ای تعیین شده است. ما به سیاست قیمت‌گذاری شفاف و عادلانه در تمام مناطق تهران پایبندیم و هیچ‌گونه هزینه پنهانی دریافت نمی‌کنیم.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* کادر اطلاعات قیمت‌گذاری */}
      <section className="medical-section bg-primary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">نکات مهم در مورد تعرفه خدمات</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed">
                  قیمت خدمات نهایی است و هزینه‌ای اضافه‌تر بابت ایاب ذهاب و یا مالیات و یا موارد دیگری به مبالغ اضافه نخواهد شد
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed">
                  ما متعهد به ثابت بودن تمام قیمت‌ها هستیم و بر اساس تمکن مالی و یا محل سکونت شما در کل مناطق تهران افزایش قیمت نخواهیم داشت
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* خدمات پرستاری */}
      <section className="medical-section">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            هزینه و تعرفه خدمات پرستاری تخصصی در منزل (تزریقات، پانسمان و...)
          </h2>
          
          <div className="overflow-x-auto bg-card rounded-lg shadow-sm border border-border">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-primary/10 border-b-2 border-primary/30">
                  <th className="text-primary font-bold py-4 px-4 text-right">نام خدمت</th>
                  <th className="text-primary font-bold py-4 px-4 text-left">تعرفه (تومان)</th>
                </tr>
              </thead>
              <tbody>
                {nursingServices.map((item, index) => <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{item.service}</td>
                    <td className="py-4 px-4 text-primary font-bold ltr text-left">
                      {item.price}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ویزیت پزشک */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            هزینه و تعرفه ویزیت پزشک متخصص در منزل
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl">
            تمام ویزیت‌های پزشکی در منزل توسط پزشکان دارای مجوز رسمی نظام پزشکی و با تجربه بالینی کافی انجام می‌شود. تعرفه ویزیت پزشک متخصص بسته به تخصص پزشک (متخصص قلب، متخصص اطفال، متخصص داخلی و ...) متفاوت است و قیمت نهایی پس از هماهنگی اعلام می‌شود.
          </p>
          
          <div className="overflow-x-auto bg-card rounded-lg shadow-sm border border-border max-w-3xl mx-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-secondary/10 border-b-2 border-secondary/30">
                  <th className="text-secondary font-bold py-4 px-4 text-right">نام خدمت</th>
                  <th className="text-secondary font-bold py-4 px-4 text-left">تعرفه (تومان)</th>
                </tr>
              </thead>
              <tbody>
                {doctorServices.map((item, index) => <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{item.service}</td>
                    <td className="py-4 px-4 text-secondary font-bold ltr text-left">
                      {item.price}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* سایر خدمات تخصصی */}
      <section className="medical-section">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            قیمت و تعرفه سایر خدمات تخصصی در منزل
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl">
            خدمات تخصصی نوید زندگی شامل طیف وسیعی از خدمات پاراکلینیک و تشخیصی با استفاده از تجهیزات پیشرفته و پرتابل در منزل است. این خدمات توسط متخصصان مجرب و با استفاده از دستگاه‌های استاندارد و کالیبره شده انجام می‌شود. قیمت‌های اعلام شده قیمت پایه بوده و ممکن است بسته به شرایط خاص بیمار متفاوت باشد.
          </p>
          
          <div className="overflow-x-auto bg-card rounded-lg shadow-sm border border-border max-w-4xl mx-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-accent/10 border-b-2 border-accent/30">
                  <th className="text-accent font-bold py-4 px-4 text-right">نام خدمت</th>
                  <th className="text-accent font-bold py-4 px-4 text-left">تعرفه (تومان)</th>
                </tr>
              </thead>
              <tbody>
                {specialServices.map((item, index) => <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{item.service}</td>
                    <td className="py-4 px-4 text-accent font-bold text-left">
                      <span className="ltr">{item.price}</span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* شرایط و نکات مهم */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">شرایط و نکات مهم تعرفه خدمات</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
                  <AlertCircle className="w-6 h-6" />
                  نکات کلی
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">هزینه مواد مصرفی در مواردی مثل سرم و داروها، پانسمان و سونداژ به صورت جداگانه اخذ می‌گردد</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">صدور فاکتور خدمات جهت ارائه به بیمه تکمیلی امکان‌پذیر می‌باشد</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">تمام قیمت‌ها بر اساس استانداردهای وزارت بهداشت تعیین شده است</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6" />
                  تعرفه‌های ویژه
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">ممکن است در موارد درخواست شبانه و تایم ترافیک ۲۰٪ الی ۳۰٪ اضافه شود</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">در موارد متفرقه جهت اطلاع از تعرفه، با کارشناسان ما تماس بگیرید</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">درصورت نیاز به نسخه پزشک جهت سرم تراپی میتوانید از ویزیت آنلاین مرکز استفاده نمایید</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">قابلیت سرویس دهی به کلیه مناطق تهران</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* مزایای مرکز */}
      <section className="medical-section">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
            مزایای نوید زندگی: چرا ما را انتخاب کنید؟
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            نوید زندگی با سال‌ها تجربه در ارائه خدمات پزشکی در منزل، بهترین انتخاب برای سلامت شما و خانواده‌تان است
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{
            title: "مدیریت تخصصی",
            desc: "سیستم مدیریت حرفه‌ای و پاسخگو"
          }, {
            title: "رویکرد علمی در پرستاری",
            desc: "استفاده از آخرین دستاوردهای علمی"
          }, {
            title: "قیمت مناسب خدمات",
            desc: "تعرفه‌های منصفانه و رقابتی"
          }, {
            title: "پرستار خصوصی در منزل",
            desc: "کادر مجرب و دارای مجوز رسمی"
          }, {
            title: "پاسخگویی شبانه‌روزی",
            desc: "آماده خدمت‌رسانی در تمام ساعات شبانه‌روز"
          }, {
            title: "پشتیبانی آنی پزشکی و پرستاری",
            desc: "پشتیبانی فوری در مواقع اضطراری"
          }].map((advantage, index) => <div key={index} className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>;
};
export default PricingPage;