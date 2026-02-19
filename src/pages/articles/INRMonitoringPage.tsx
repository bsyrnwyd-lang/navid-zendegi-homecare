import { Phone, MessageCircle, AlertTriangle, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import { Link } from "react-router-dom";
import inrMonitoringImage from "@/assets/inr-monitoring-article.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import ecgHomeImage from "@/assets/ecg-home-service.jpg";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const INRMonitoringPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const relatedArticles = [
    {
      title: "وارفارین؛ داروی ضدانعقاد و نکات مهم در مصرف آن",
      description: "راهنمای کامل وارفارین، موارد مصرف، عوارض و نکات مهم در مصرف این داروی ضدانعقاد",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "داروها"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "انجام اکوی قلب در منزل با دستگاه پورتابل پیشرفته توسط متخصصین مجرب",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "خدمات منزل"
    },
    {
      title: "نوار قلب در منزل",
      description: "انجام نوار قلب (ECG) در منزل برای تشخیص سریع مشکلات قلبی",
      image: ecgHomeImage,
      link: "/articles/ecg-home",
      category: "خدمات منزل"
    }
  ];

  const faqItems = [
    {
      question: "هر چند وقت یکبار باید آزمایش INR بدهم؟",
      answer: "در ابتدای درمان، آزمایش INR هر چند روز یکبار انجام می‌شود. پس از تثبیت دوز، معمولاً هر ۲ تا ۴ هفته یکبار کافی است. در صورت تغییر داروها یا رژیم غذایی، آزمایش باید زودتر انجام شود."
    },
    {
      question: "INR نرمال چند است؟",
      answer: "برای اکثر بیماران مصرف‌کننده وارفارین، INR باید بین ۲ تا ۳ باشد. برای بیماران با دریچه مکانیکی قلب، این عدد معمولاً بین ۲.۵ تا ۳.۵ است. پزشک شما محدوده مناسب را تعیین می‌کند."
    },
    {
      question: "اگر INR من خیلی بالا رفت چه کنم؟",
      answer: "INR بالا (بیش از ۴) خطر خونریزی را افزایش می‌دهد. بلافاصله با پزشک تماس بگیرید. ممکن است نیاز به قطع موقت وارفارین یا مصرف ویتامین K باشد. از خدمات ویزیت پزشک در منزل نوید زندگی استفاده کنید."
    },
    {
      question: "آیا می‌توانم آزمایش INR را در منزل انجام دهم؟",
      answer: "بله، تیم نوید زندگی با مراجعه به منزل شما، نمونه‌گیری خون را انجام داده و نتیجه آزمایش PT-INR را در کوتاه‌ترین زمان ممکن به شما اعلام می‌کند."
    },
    {
      question: "چرا INR من با وجود مصرف منظم دارو نوسان دارد؟",
      answer: "نوسان INR می‌تواند به دلایل متعددی رخ دهد: تغییر در رژیم غذایی (مصرف سبزیجات سبز)، مصرف داروهای جدید (آنتی‌بیوتیک، مسکن)، بیماری‌های گذرا مانند تب و اسهال، و حتی استرس. پایش منظم ضروری است."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="چرا عدد INR ثابت نمی‌ماند؟ عوامل موثر بر نوسانات وارفارین | نوید زندگی"
        description="راهنمای جامع عوامل موثر بر نوسانات INR و وارفارین شامل تداخلات دارویی، رژیم غذایی و ویتامین K. خدمات آزمایش INR و ویزیت پزشک در منزل نوید زندگی."
        keywords="INR, وارفارین, نوسان INR, تداخل دارویی وارفارین, ویتامین K, آزمایش INR در منزل, ویزیت متخصص قلب در منزل, ضدانعقاد"
        canonical="https://navidzendegi.com/articles/inr-monitoring"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
      />
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28 md:pb-12">
        <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"پایش INR",url:"/articles/inr-monitoring"}]} />
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-2">تاریخ انتشار: ۱۸ دی ۱۴۰۴</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              چرا عدد INR ثابت نمی‌ماند؟ عوامل موثر بر نوسانات وارفارین
            </h1>
            <p className="text-foreground/90 text-lg font-semibold mb-2">تیم پزشکی نوید زندگی</p>
          </div>

          <img
            src={inrMonitoringImage}
            alt="پایش INR و آزمایش خون برای بیماران مصرف‌کننده وارفارین"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          {/* Warning Section */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-destructive mb-2">هشدار مهم</h3>
                <p className="text-foreground/80">
                  هرگز دوز وارفارین را بدون مشورت پزشک تغییر ندهید. تغییر خودسرانه دوز می‌تواند منجر به خونریزی خطرناک یا تشکیل لخته شود. برای هر تغییری در دارو با <a href="tel:09386117912" className="text-primary font-bold hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a> تماس بگیرید.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-6">
              تنظیم نگه داشتن عدد INR (شاخص غلظت خون) یکی از بزرگترین چالش‌های بیماران قلبی است. کوچکترین تغییر در سبک زندگی، رژیم غذایی یا مصرف داروهای دیگر می‌تواند این عدد را جابه‌جا کرده و بیمار را در معرض خطر لخته شدن یا خونریزی شدید قرار دهد.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              در این مقاله از مجله سلامت نوید زندگی، به بررسی عواملی می‌پردازیم که باعث به‌هم ریختن تنظیم <Link to="/articles/warfarin" className="text-primary hover:underline font-semibold">وارفارین</Link> می‌شوند و نقش چکاپ‌های دوره‌ای در منزل را در مدیریت این نوسانات بررسی می‌کنیم.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">عوامل اصلی به‌هم ریختن تنظیم INR</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">۱. رژیم غذایی و ویتامین K</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                ویتامین K دشمن مستقیم وارفارین است؛ زیرا این ویتامین به لخته شدن خون کمک می‌کند، در حالی که وارفارین سعی دارد جلوی آن را بگیرد.
              </p>
              
              <p className="text-foreground/80 leading-relaxed mb-2">
                <strong>کاهنده اثر وارفارین (کاهش INR):</strong> مصرف زیاد سبزیجات با برگ سبز تیره (اسفناج، کلم بروکلی، کاهو، جعفری)، چای سبز و جگر باعث غلیظ شدن خون می‌شود.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>افزاینده اثر وارفارین (افزایش INR):</strong> مصرف زیاد سیر، زنجبیل، عصاره زغال‌اخته (Cranberry) و الکل می‌تواند خون را بیش از حد رقیق کند.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-4 mb-6">
                <p className="text-foreground/80">
                  <strong>نکته طلایی نوید زندگی:</strong> لازم نیست این غذاها را حذف کنید، بلکه باید مصرف آن‌ها را ثابت نگه دارید. تغییر ناگهانی در میزان مصرف این مواد است که پزشک را در تنظیم دوز دچار مشکل می‌کند.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">۲. تداخلات دارویی (بسیار مهم)</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                بسیاری از داروهایی که برای بیماری‌های دیگر مصرف می‌کنید، روی سطح وارفارین اثر می‌گذارند:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4 mb-4">
                <li><strong>آنتی‌بیوتیک‌ها:</strong> اکثر آنتی‌بیوتیک‌ها با تغییر فلور میکروبی روده، جذب ویتامین K را کاهش داده و اثر وارفارین را به شدت تقویت می‌کنند (خطر خونریزی).</li>
                <li><strong>مسکن‌ها:</strong> مصرف ژلوفن، بروفن و دیکلوفناک همراه با وارفارین خطر خونریزی معده را به شدت افزایش می‌دهد. (فقط استامینوفن ساده تحت نظر پزشک مجاز است).</li>
                <li><strong>داروهای گیاهی:</strong> قرص‌های گیاهی مثل <Link to="/articles/ginseng" className="text-primary hover:underline">جین‌سینگ</Link> یا جینکوبیلوبا می‌توانند INR را به شدت جابه‌جا کنند.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">۳. بیماری‌های گذرا (تب و اسهال)</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                حتی یک سرماخوردگی ساده یا اسهال و استفراغ می‌تواند با تغییر متابولیسم بدن یا دفع دارو، عدد INR را به‌هم بریزد. در این شرایط، بیمار توان خارج شدن از منزل را ندارد و اینجاست که خدمات <Link to="/services/laboratory" className="text-primary hover:underline font-semibold">نمونه‌گیری و آزمایش خون در منزل</Link> نوید زندگی، حیاتی می‌شود.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">جدول راهنمای سریع تداخلات</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-right">عامل مداخله‌گر</th>
                      <th className="border border-border p-3 text-right">اثر بر INR</th>
                      <th className="border border-border p-3 text-right">خطر احتمالی</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">مصرف زیاد اسفناج و بروکلی</td>
                      <td className="border border-border p-3">کاهش شدید (غلظت خون)</td>
                      <td className="border border-border p-3">لخته شدن و سکته مغزی</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">مصرف آنتی‌بیوتیک (آزیترومایسین و...)</td>
                      <td className="border border-border p-3">افزایش شدید (رقت خون)</td>
                      <td className="border border-border p-3">خونریزی داخلی و مغزی</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">مصرف مسکن (ژلوفن و بروفن)</td>
                      <td className="border border-border p-3">افزایش خطر خونریزی</td>
                      <td className="border border-border p-3">زخم و خونریزی گوارشی</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">اسهال شدید یا تب</td>
                      <td className="border border-border p-3">نوسان غیرقابل پیش‌بینی</td>
                      <td className="border border-border p-3">نیاز به آزمایش فوری در منزل</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">مدیریت نوسانات INR با خدمات در منزل "نوید زندگی"</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                وقتی عدد INR جابه‌جا می‌شود، بیمار و خانواده دچار استرس می‌شوند. ما این مسیر را برای شما هموار کرده‌ایم:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">پایش منظم (تست PT-INR در منزل)</h3>
                    <p className="text-foreground/80">
                      به جای رفت‌وآمدهای مکرر به آزمایشگاه که خود می‌تواند باعث خستگی و نوسان فشار خون شود، کارشناسان ما در زمان‌های مقرر برای خون‌گیری در منزل حاضر می‌شوند. استمرار در آزمایش، تنها راه جلوگیری از حوادث ناگوار است.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">ویزیت و تنظیم پروتکل دارویی</h3>
                    <p className="text-foreground/80">
                      اگر INR شما به‌هم ریخته است، پزشک <Link to="/services/specialist" className="text-primary hover:underline font-semibold">متخصص قلب</Link> ما در قالب <Link to="/services/internal-medicine" className="text-primary hover:underline font-semibold">ویزیت در منزل</Link>، تمام داروهای مصرفی و رژیم غذایی شما را بازبینی می‌کند. گاهی نیاز است برای مدتی وارفارین قطع شده و آمپول‌های زیرجلدی (مانند انوکساپارین) جایگزین شود؛ این فرآیند پیچیده توسط تیم ما در منزل شما مدیریت می‌شود.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">اکوکاردیوگرافی و پایش دریچه‌ها</h3>
                    <p className="text-foreground/80">
                      در بیمارانی که دریچه مصنوعی دارند، نوسان INR بسیار خطرناک است. اگر شک به تشکیل لخته روی دریچه وجود داشته باشد، متخصصین ما با انجام <Link to="/articles/echo-home" className="text-primary hover:underline font-semibold">اکو در منزل</Link>، حرکت دریچه‌ها را بررسی می‌کنند تا خیالتان از بابت عملکرد صحیح قلب راحت شود.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">سخن پایانی</h2>
              <p className="text-foreground/80 leading-relaxed">
                تنظیم INR یک علم است که نیاز به همکاری نزدیک بیمار و تیم پزشکی دارد. در مرکز نوید زندگی، ما با ارائه پکیج‌های کامل شامل آزمایش خون، ویزیت متخصص و اکوکاردیوگرافی در منزل، این اطمینان را به شما می‌دهیم که وارفارین برای شما یک داروی نجات‌بخش باقی بماند، نه یک عامل نگران‌کننده.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">منابع علمی</h2>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4">
                <li>The Lancet Haematology: مدیریت داروهای ضد انعقاد در بیماران سرپایی</li>
                <li>Cleveland Clinic: راهنمای تغذیه و تداخلات دارویی وارفارین</li>
                <li>American Heart Association (AHA): استانداردهای طلایی پایش INR</li>
              </ul>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              آیا نیاز به آزمایش فوری INR یا ویزیت پزشک در منزل دارید؟
            </h3>
            <p className="text-center text-foreground/80 mb-4">
              همین حالا با کارشناسان نوید زندگی تماس بگیرید:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                onClick={handleCall}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              >
                <Phone className="ml-2 h-4 w-4" />
                <span dir="ltr">09386117912</span>
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="ml-2 h-4 w-4" />
                واتساپ
              </Button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg">
            <p className="text-center text-foreground/80">
              برای کسب اطلاعات بیشتر درباره خدمات پزشکی در منزل، به{" "}
              <Link to="/contact" className="text-primary hover:underline font-semibold">
                صفحه تماس با ما
              </Link>{" "}
              مراجعه کنید یا با{" "}
              <Link to="/services/cardiology" className="text-primary hover:underline font-semibold">
                خدمات قلب و عروق
              </Link>{" "}
              ما آشنا شوید.
            </p>
          </div>

          <FAQSection faqs={faqItems} />

          <PricingInfo />

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default INRMonitoringPage;
