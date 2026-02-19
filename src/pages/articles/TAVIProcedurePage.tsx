import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import { Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import taviImage from "@/assets/tavi-procedure.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import holterImage from "@/assets/holter-home-service.jpg";
import cardiacRehabImage from "@/assets/cardiac-rehab-exercise.jpg";

const TAVIProcedurePage = () => {
  const faqs = [
    {
      question: "عمل تاوی (TAVI) چیست؟",
      answer: "تاوی (TAVI) یا تاور (TAVR) یک روش نوین و کم‌تهاجمی برای تعویض دریچه آئورت است. در این روش بدون نیاز به شکافتن سینه و متوقف کردن قلب، دریچه جدید از طریق یک کاتتر باریک به محل دریچه قدیمی فرستاده و جایگزین می‌شود."
    },
    {
      question: "چه کسانی کاندیدای عمل تاوی هستند؟",
      answer: "سالمندان بالای ۷۵ سال، افرادی که سابقه جراحی باز قلب دارند، بیماران دچار نارسایی کلیوی یا ریوی شدید، و کسانی که ریسک بالایی برای جراحی باز دارند، کاندیدای اصلی تاوی هستند."
    },
    {
      question: "مدت زمان بهبودی پس از تاوی چقدر است؟",
      answer: "برخلاف جراحی باز که ۲ تا ۳ ماه زمان نیاز دارد، بیشتر بیماران تاوی ظرف ۳ تا ۷ روز به فعالیت‌های روزمره خود برمی‌گردند. اقامت در ICU معمولاً کمتر از ۲۴ ساعت است."
    },
    {
      question: "چرا هولتر پس از تاوی ضروری است؟",
      answer: "دریچه آئورت نزدیک سیستم هدایت الکتریکی قلب قرار دارد. فشار دریچه جدید ممکن است باعث کندی ضربان یا بلوک قلبی شود. هولتر ریتم ۲۴ ساعته نیاز احتمالی به پیس‌میکر را مشخص می‌کند."
    },
    {
      question: "آیا امکان انجام اکو پس از تاوی در منزل وجود دارد؟",
      answer: "بله، نوید زندگی خدمات اکوکاردیوگرافی پرتابل در منزل را ارائه می‌دهد. این کار برای بررسی عملکرد دریچه جدید و اطمینان از عدم نشت اطراف آن بسیار مهم است."
    },
    {
      question: "عوارض احتمالی پس از تاوی چیست؟",
      answer: "اختلالات ریتم قلب (نیاز به پیس‌میکر در ۱۰-۱۵٪ موارد)، نشت اطراف دریچه، و آسیب عروقی یا کلیوی از عوارض احتمالی هستند که با پایش منظم قابل شناسایی و مدیریت هستند."
    }
  ];

  const relatedArticles = [
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "خدمات اکوی قلب تخصصی در محیط امن خانه شما",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "قلب"
    },
    {
      title: "هولتر مانیتورینگ قلب",
      description: "پایش ۲۴ ساعته ریتم قلب با نصب هولتر در منزل",
      image: holterImage,
      link: "/articles/holter-guide",
      category: "قلب"
    },
    {
      title: "بازتوانی قلبی در منزل",
      description: "برنامه ورزشی تخصصی برای بازیابی توان قلب پس از جراحی",
      image: cardiacRehabImage,
      link: "/articles/cardiac-rehab",
      category: "قلب"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="عمل تاوی (TAVI)؛ تعویض دریچه آئورت بدون جراحی باز | نوید زندگی"
        description="راهنمای جامع عمل تاوی (TAVI): تعویض دریچه آئورت بدون شکافتن سینه، کاندیداها، عوارض و مراقبت‌های پس از عمل در منزل. خدمات هولتر و اکو در تهران و کرج. تماس: 09386117912"
        keywords="تاوی, TAVI, TAVR, تعویض دریچه آئورت, تنگی آئورت, جراحی قلب کم‌تهاجمی, هولتر در منزل, اکو قلب, نوید زندگی"
        canonical="https://navidzendegi.ir/articles/tavi-procedure"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-01-05"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto max-w-4xl px-4 pt-4">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"عمل تاوی",url:"/articles/tavi-procedure"}]} />
        </div>
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2">تاریخ انتشار: ۱۴۰۴/۱۰/۱۵</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                راهنمای جامع عمل تاوی (TAVI)؛ بازسازی دریچه آئورت بدون جراحی باز
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                تنگی دریچه آئورت (Aortic Stenosis) یکی از جدی‌ترین بیماری‌های قلبی ناشی از کهولت سن است. وقتی این دریچه سفت و کلسیمی می‌شود، قلب مجبور است با فشاری چندین برابر معمول خون را پمپ کند که در نهایت منجر به نارسایی قلبی و مرگ می‌شود. تکنولوژی <strong>تاوی (TAVI)</strong> یا <strong>تاور (TAVR)</strong> فصل جدیدی را در درمان این بیماران گشوده است.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={taviImage} 
                alt="عمل تاوی - تعویض دریچه آئورت از طریق کاتتر"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="text-center mb-8">
              <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: 09386117912
              </a>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="medical-section bg-destructive/5">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-start gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <p className="text-foreground">
                <strong>هشدار مهم:</strong> اطلاعات این مقاله صرفاً جهت آگاهی عمومی است و جایگزین مشاوره پزشکی نمی‌شود. هرگز خوددرمانی نکنید و برای تشخیص و درمان حتماً با پزشک متخصص مشورت کنید.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۱. بیماری تنگی آئورت؛ چرا درمان سریع حیاتی است؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              دریچه آئورت مانند خروجی اصلی یک سد عمل می‌کند. وقتی این خروجی به دلیل رسوب کلسیم تنگ می‌شود:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-base text-foreground">• عضله قلب ضخیم و خسته می‌شود (Hypertrophy)</li>
              <li className="text-base text-foreground">• خون‌رسانی به مغز کاهش یافته و فرد دچار <Link to="/articles/dizziness" className="text-primary hover:underline">سرگیجه</Link> و غش (سنکوپ) می‌شود</li>
              <li className="text-base text-foreground">• فرد دچار درد قفسه سینه (آنژین) و <Link to="/articles/breathing-treatment" className="text-primary hover:underline">تنگی نفس</Link> شدید می‌شود</li>
            </ul>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify bg-muted/30 p-4 rounded-lg">
              <strong>نکته علمی:</strong> تحقیقات نشان می‌دهد که پس از ظهور علائم شدید، اگر درمان انجام نشود، نرخ بقای بیمار به شدت کاهش می‌یابد. TAVI پاسخی مدرن به این وضعیت اورژانسی است.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۲. جزئیات فنی عمل تاوی (TAVI)؛ از ابتدا تا انتها
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              برخلاف جراحی سنتی که در آن سینه شکافته شده و قلب متوقف می‌شود، در روش TAVI:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>دسترسی عروقی:</strong> جراح یک کاتتر (لوله باریک) را معمولاً از طریق شریان فمورال در کشاله ران وارد می‌کند. در موارد خاص، ممکن است از رگ‌های شانه یا مستقیماً از فضای بین دنده‌ها استفاده شود.
              </li>
              <li className="text-base text-foreground">
                <strong>عبور از دریچه قدیمی:</strong> کاتتر از میان دریچه تنگ و کلسیمی عبور می‌کند.
              </li>
              <li className="text-base text-foreground">
                <strong>استقرار دریچه جدید:</strong> دریچه مصنوعی (ساخته شده از بافت قلب گاو یا خوک که روی یک چارچوب فلزی سوار شده) به محل فرستاده می‌شود.
              </li>
              <li className="text-base text-foreground">
                <strong>باز شدن دریچه:</strong> با استفاده از یک بالون یا خاصیت خود-اتساعی (Self-expanding)، دریچه جدید باز شده و دریچه قدیمی را به دیواره‌ها می‌فشارد و بلافاصله کار خود را آغاز می‌کند.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۳. چه کسانی کاندیدای ایده‌آل TAVI هستند؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              در ابتدا این روش فقط برای بیماران "بسیار پرخطر" استفاده می‌شد. اما طبق آخرین دستورالعمل‌های AHA/ACC، امروزه TAVI برای گروه‌های زیر نیز کاربرد دارد:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• سالمندان بالای ۷۵ سال</li>
              <li className="text-base text-foreground">• افرادی که سابقه جراحی باز قلب دارند</li>
              <li className="text-base text-foreground">• بیماران دچار نارسایی کلیوی یا ریوی شدید</li>
              <li className="text-base text-foreground">• بیمارانی که تمایل به دوره نقاهت کوتاه (بازگشت سریع به فعالیت‌های روزمره) دارند</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۴. چالش‌ها و عوارض احتمالی؛ چرا پایش خانگی ضروری است؟
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              TAVI با وجود مزایای فراوان، ریسک‌های خاص خود را دارد که نیاز به مراقبت تخصصی در منزل توسط تیم <Link to="/" className="text-primary hover:underline">نوید زندگی</Link> را دوچندان می‌کند:
            </p>

            <h3 className="text-xl font-bold mb-3 text-foreground">الف) اختلالات ریتم قلب و نیاز به هولتر</h3>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              دریچه آئورت بسیار نزدیک به "گره عصبی" قلب قرار دارد. فشار دریچه جدید ممکن است باعث کندی ضربان یا <Link to="/articles/af-stroke-risk" className="text-primary hover:underline">بلوک قلبی</Link> شود. ما با <Link to="/services/holter" className="text-primary hover:underline">نصب دستگاه هولتر ریتم ۲۴ و ۴۸ ساعته در منزل</Link> برای شناسایی زودهنگام نیاز بیمار به <Link to="/articles/pacemaker-icd" className="text-primary hover:underline">پیس‌میکر (باتری قلب)</Link> در کنار شما هستیم.
            </p>

            <h3 className="text-xl font-bold mb-3 text-foreground">ب) نشت اطراف دریچه (Paravalvular Leak)</h3>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              اگر دریچه جدید کاملاً به دیواره نچسبد، خون از اطراف آن نشت می‌کند. ما با انجام <Link to="/articles/echo-home" className="text-primary hover:underline">اکوکاردیوگرافی پرتابل در منزل</Link> توسط متخصص قلب، کیفیت عملکرد دریچه و اطمینان از عدم وجود نشت را بررسی می‌کنیم.
            </p>

            <h3 className="text-xl font-bold mb-3 text-foreground">ج) آسیب‌های عروقی و کلیوی</h3>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              ماده حاجب استفاده شده در حین عمل می‌تواند به کلیه‌ها فشار بیاورد. همچنین محل ورود کاتتر در ران نیاز به مراقبت دارد. ما با اعزام <Link to="/services/nursing" className="text-primary hover:underline">پرستار برای مراقبت از زخم</Link> و <Link to="/services/laboratory" className="text-primary hover:underline">انجام آزمایش خون در منزل</Link> جهت چک کردن کراتینین و عملکرد کلیه در کنار شما هستیم.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۵. مقایسه تحلیلی: TAVI در مقابل جراحی باز (SAVR)
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-muted">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-muted p-3 text-right">شاخص مقایسه</th>
                    <th className="border border-muted p-3 text-right">جراحی باز (SAVR)</th>
                    <th className="border border-muted p-3 text-right">روش تاوی (TAVI)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-muted p-3">برش پوستی</td>
                    <td className="border border-muted p-3">۲۰ تا ۲۵ سانتی‌متر (جناغ سینه)</td>
                    <td className="border border-muted p-3">کمتر از ۱ سانتی‌متر (کشاله ران)</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-muted p-3">مدت زمان بیهوشی</td>
                    <td className="border border-muted p-3">۴ تا ۶ ساعت (سنگین)</td>
                    <td className="border border-muted p-3">۱ تا ۲ ساعت (سبک یا موضعی)</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3">دستگاه پمپ قلب</td>
                    <td className="border border-muted p-3">استفاده می‌شود (توقف قلب)</td>
                    <td className="border border-muted p-3">استفاده نمی‌شود (قلب در حال تپش)</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-muted p-3">اقامت در ICU</td>
                    <td className="border border-muted p-3">۲ تا ۵ روز</td>
                    <td className="border border-muted p-3">معمولاً کمتر از ۲۴ ساعت</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3">بازگشت به زندگی عادی</td>
                    <td className="border border-muted p-3">۲ تا ۳ ماه</td>
                    <td className="border border-muted p-3">۳ تا ۷ روز</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ۶. دوران نقاهت هوشمند با «نوید زندگی» در تهران و کرج
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              ما شکاف بین بیمارستان و خانه را پر می‌کنیم. پکیج مراقبتی ما شامل موارد زیر است:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong><Link to="/cardiology" className="text-primary hover:underline">ویزیت متخصص قلب در منزل:</Link></strong> تنظیم دقیق داروهای ضدپلاکت (مانند <Link to="/articles/clopidogrel" className="text-primary hover:underline">پلاویکس</Link> و <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link>) برای جلوگیری از لخته شدن روی دریچه.
              </li>
              <li className="text-base text-foreground">
                <strong><Link to="/articles/cardiac-rehab" className="text-primary hover:underline">فیزیوتراپی و بازتوانی قلبی در منزل:</Link></strong> ارائه تمرینات ورزشی سبک برای بازیابی توان بدنی بدون فشار به قلب.
              </li>
              <li className="text-base text-foreground">
                <strong>آموزش رژیم غذایی:</strong> تنظیم برنامه غذایی کم‌نمک و مناسب برای جلوگیری از احتباس مایعات (مشابه <Link to="/articles/dash-diet" className="text-primary hover:underline">رژیم DASH</Link>).
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              منابع و رفرنس‌های معتبر
            </h2>
            <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
              <li>• The New England Journal of Medicine (NEJM): PARTNER 3 Trial: TAVR in Low-Risk Patients</li>
              <li>• American Heart Association (AHA): Aortic Stenosis Treatment Options</li>
              <li>• Mayo Clinic: Transcatheter aortic valve replacement (TAVR) - Detailed Guide</li>
              <li>• European Society of Cardiology (ESC): Guidelines on Valvular Heart Disease</li>
            </ul>

            {/* CTA Section */}
            <div className="bg-primary/5 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">قلبی نو، زندگی نو، در آرامش خانه</h3>
              <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
                عمل TAVI یک معجزه در پزشکی مدرن است، اما موفقیت نهایی آن به مراقبت‌های علمیِ پس از عمل بستگی دارد. تیم نوید زندگی آماده است تا با تجهیزات پیشرفته (هولتر، اکو، آزمایشگاه) سلامت دریچه جدید شما را در تهران و کرج تضمین کند.
              </p>
              <p className="text-lg font-semibold text-primary mb-4">نوید زندگی؛ همراه شما در تک‌تک تپش‌های آگاهانه.</p>
              <a href="tel:09386117912" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                <Phone className="ml-2 h-5 w-5" />
                مشاوره و اعزام فوری: 09386117912
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">سوالات متداول درباره عمل تاوی</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Related Articles */}
        <section className="medical-section">
          <div className="container mx-auto max-w-6xl">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </section>

        {/* Pricing Section */}
        <PricingInfo />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default TAVIProcedurePage;
