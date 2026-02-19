import { Phone, MessageCircle, AlertTriangle, Syringe, Activity, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import { Link } from "react-router-dom";
import heparinImage from "@/assets/heparin-enoxaparin-article.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import dvtImage from "@/assets/dvt-anticoagulant-article.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const HeparinEnoxaparinPage = () => {
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
      title: "لخته وریدی عمقی (DVT) و داروهای ضد انعقاد",
      description: "راهنمای کامل لخته وریدی عمقی، علائم، تشخیص و درمان با داروهای ضد انعقاد",
      image: dvtImage,
      link: "/articles/dvt-anticoagulants",
      category: "قلب و عروق"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "انجام اکوی قلب در منزل با دستگاه پورتابل پیشرفته توسط متخصصین مجرب",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "خدمات منزل"
    }
  ];

  const faqItems = [
    {
      question: "تفاوت هپارین معمولی و انوکساپارین (کلکسان) چیست؟",
      answer: "هپارین معمولی (UFH) به صورت وریدی تزریق می‌شود و نیاز به پایش مداوم PTT دارد. انوکساپارین (LMWH) زیرجلدی تزریق می‌شود، اثر پایدارتری دارد و معمولاً نیاز به آزمایش خون مداوم ندارد. انوکساپارین برای استفاده در منزل مناسب‌تر است."
    },
    {
      question: "آیا می‌توانم خودم انوکساپارین را تزریق کنم؟",
      answer: "بله، با آموزش صحیح می‌توانید. پرستاران نوید زندگی در منزل شما تکنیک تزریق صحیح (زاویه ۹۰ درجه در ناحیه شکم) را آموزش می‌دهند. نکته مهم: هرگز بعد از تزریق محل را ماساژ ندهید."
    },
    {
      question: "عارضه HIT چیست و چگونه تشخیص داده می‌شود؟",
      answer: "HIT (ترومبوسیتوپنی ناشی از هپارین) عارضه‌ای است که در آن پلاکت‌ها کاهش یافته اما به طور متناقض لخته‌های خطرناک ایجاد می‌شود. با آزمایش CBC در منزل، پلاکت‌ها پایش شده و در صورت افت، پزشک نوع دارو را تغییر می‌دهد."
    },
    {
      question: "چه زمانی باید هپارین را قطع کنم؟",
      answer: "هرگز خودسرانه هپارین را قطع نکنید. قطع دارو باید تحت نظر پزشک متخصص قلب انجام شود. در درمان پُل (Bridging)، هپارین زمانی قطع می‌شود که INR وارفارین به محدوده درمانی برسد."
    },
    {
      question: "آیا می‌توانم با هپارین ورزش کنم؟",
      answer: "ورزش‌های سبک مشکلی ندارد، اما از ورزش‌های سنگین و تماسی که خطر ضربه و خونریزی دارند باید پرهیز کنید. قبل از شروع هر برنامه ورزشی با پزشک خود مشورت کنید."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="راهنمای جامع هپارین و انوکساپارین؛ مراقبت و تزریق در منزل | نوید زندگی"
        description="راهنمای کامل مصرف هپارین و انوکساپارین (کلکسان): تفاوت انواع هپارین، تکنیک تزریق، عوارض HIT و خدمات پایش و تزریق در منزل نوید زندگی."
        keywords="هپارین, انوکساپارین, کلکسان, تزریق زیرجلدی, لخته خون, ضد انعقاد, PTT, HIT, تزریق در منزل, ویزیت پزشک در منزل"
        canonical="https://navidzendegi.com/articles/heparin-enoxaparin"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
      />
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28 md:pb-12">
        <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"هپارین و انوکساپارین",url:"/articles/heparin-enoxaparin"}]} />
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-2">تاریخ انتشار: ۱۸ دی ۱۴۰۴</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              راهنمای جامع مصرف هپارین و انوکساپارین؛ از مراقبت‌های بالینی تا خدمات در منزل
            </h1>
            <p className="text-foreground/90 text-lg font-semibold mb-2">تیم پزشکی نوید زندگی</p>
          </div>

          <img
            src={heparinImage}
            alt="تزریق هپارین و انوکساپارین - داروهای ضد انعقاد"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          {/* Warning Section */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-destructive mb-2">هشدار مهم</h3>
                <p className="text-foreground/80">
                  هرگز دوز هپارین یا انوکساپارین را بدون مشورت پزشک تغییر ندهید. مصرف خودسرانه این داروها می‌تواند منجر به خونریزی خطرناک یا لخته‌شدن شود. برای مشاوره با <a href="tel:09386117912" className="text-primary font-bold hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a> تماس بگیرید.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-6">
              در دنیای پزشکی، <strong>هپارین (Heparin)</strong> به عنوان «استاندارد طلایی» داروهای ضد انعقاد تزریقی شناخته می‌شود. این دارو در شرایطی که زمان حکم طلا را دارد (مثل سکته‌های قلبی یا <Link to="/articles/dvt-anticoagulants" className="text-primary hover:underline">آمبولی ریه</Link>)، وارد عمل شده و فرآیند لخته شدن خون را در کسری از ثانیه متوقف می‌کند.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              ما در مرکز نوید زندگی با ارائه خدمات تخصصی <Link to="/services/specialist" className="text-primary hover:underline font-semibold">ویزیت متخصص قلب در منزل</Link> و پایش آزمایشگاهی، به بیماران کمک می‌کنیم تا این داروی حساس را با کمترین ریسک و بالاترین بهره‌وری در خانه مصرف کنند.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">۱. انواع هپارین و تفاوت‌های عملکردی آن‌ها</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                بسیاری از بیماران تصور می‌کنند تمام هپارین‌ها یکسان هستند، اما در واقع دو نوع اصلی وجود دارد که مدیریت آن‌ها کاملاً متفاوت است:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Syringe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">الف) هپارین استاندارد (UFH)</h3>
                    <p className="text-foreground/80 mb-2">
                      این نوع معمولاً در بیمارستان و به صورت ورید (سرم) استفاده می‌شود. اثر آن بسیار سریع شروع و سریع تمام می‌شود.
                    </p>
                    <p className="text-foreground/80 mb-2">
                      <strong>نیاز به پایش:</strong> این دارو نیاز به آزمایش مداوم PTT (هر ۶ تا ۱۲ ساعت) دارد.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-foreground/80">
                        <strong>خدمات نوید زندگی:</strong> اگر بیمار شما با این دارو مرخص شده است، تیم ما با <Link to="/services/laboratory" className="text-primary hover:underline font-semibold">نمونه‌گیری خون در منزل</Link>، سطح PTT را پایش کرده و دوز را تنظیم می‌کند.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Syringe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">ب) هپارین با وزن مولکولی پایین (LMWH) - مانند انوکساپارین (Clexane)</h3>
                    <p className="text-foreground/80 mb-2">
                      این دارو همان آمپول‌های معروفی است که در دور ناف تزریق می‌شود.
                    </p>
                    <p className="text-foreground/80 mb-2">
                      <strong>مزیت:</strong> اثر پایدارتری دارد و معمولاً نیاز به آزمایش خون مداوم ندارد.
                    </p>
                    <p className="text-foreground/80">
                      <strong>کاربرد:</strong> پیشگیری از لخته بعد از جراحی ارتوپدی، <Link to="/articles/cabg-surgery" className="text-primary hover:underline">جراحی قلب</Link> و در دوران <Link to="/articles/pregnancy-supplements" className="text-primary hover:underline">بارداری</Link> برای مادران پرخطر.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">۲. چرا پایش سطح پلاکت خون (تست CBC) حیاتی است؟</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                یکی از پیچیده‌ترین عوارض هپارین، پدیده‌ای به نام <strong>HIT (Thrombocytopenia Induced by Heparin)</strong> است. در این حالت، بدن علیه دارو پادتن می‌سازد که منجر به افت شدید پلاکت‌ها می‌شود.
              </p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-4">
                <p className="text-foreground/80">
                  <strong>پارادوکس خطرناک:</strong> با وجود کم شدن پلاکت، بیمار دچار خونریزی نمی‌شود، بلکه دچار لخته‌های وسیع در رگ‌های پا یا ریه می‌شود!
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-foreground/80">
                  <strong>نقش نوید زندگی:</strong> پزشک ما در طول <Link to="/services/internal-medicine" className="text-primary hover:underline font-semibold">ویزیت در منزل</Link>، علاوه بر بررسی بالینی، آزمایش‌های CBC دوره‌ای را تجویز می‌کند تا در صورت افت پلاکت، بلافاصله نوع دارو را تغییر دهد.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">۳. تکنیک‌های صحیح تزریق در منزل و جلوگیری از عوارض</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                تزریق اشتباه می‌تواند باعث ایجاد کبودی‌های دردناک (هماتوم) یا جذب ناقص دارو شود. <Link to="/services/nursing" className="text-primary hover:underline font-semibold">پرستاران نوید زندگی</Link> در منزل به شما آموزش می‌دهند:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-3 mr-4">
                <li><strong>محل تزریق:</strong> شکم (دور ناف) بهترین محل است؛ اما نباید دقیقاً در جای قبلی تزریق شود.</li>
                <li><strong>عدم ماساژ:</strong> هرگز بعد از تزریق، جای آمپول را ماساژ ندهید، زیرا باعث پارگی مویرگ‌ها و کبودی بزرگ می‌شود.</li>
                <li><strong>زاویه تزریق:</strong> تزریق باید با زاویه ۹۰ درجه در لایه‌ی چربی زیر پوست انجام شود.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">۴. چه زمانی هپارین با وارفارین «پل» می‌زند؟ (Bridging Therapy)</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                این یکی از فنی‌ترین بخش‌های درمان قلبی است. از آنجایی که <Link to="/articles/warfarin" className="text-primary hover:underline font-semibold">وارفارین</Link> چند روز طول می‌کشد تا اثر کند، پزشک همزمان هپارین را هم شروع می‌کند.
              </p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-4">
                <p className="text-foreground/80">
                  <strong>خطر جدی:</strong> اگر این دو دارو به درستی با هم تداخل نکنند، بیمار یا دچار خونریزی می‌شود یا لخته می‌کند.
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-foreground/80">
                  <strong>راهکار:</strong> متخصص قلب نوید زندگی با انجام <Link to="/articles/ecg-home" className="text-primary hover:underline font-semibold">نوار قلب در منزل</Link> و چک کردن مداوم <Link to="/articles/inr-monitoring" className="text-primary hover:underline">INR</Link> و PTT، زمان دقیق قطع هپارین و تکیه بر وارفارین را مشخص می‌کند.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">۵. تداخلات و هشدارهای مهم حین مصرف هپارین</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                اگر تحت درمان با هپارین یا انوکساپارین هستید، باید از موارد زیر آگاه باشید:
              </p>
              <ul className="list-disc list-inside text-foreground/80 space-y-3 mr-4">
                <li><strong>تداخل با مسکن‌ها:</strong> مصرف همزمان با <Link to="/articles/aspirin" className="text-primary hover:underline">آسپیرین</Link>، ژلوفن و ناپروکسن ریسک خونریزی داخلی را به شدت بالا می‌برد.</li>
                <li><strong>جراحی‌های دندانپزشکی:</strong> قبل از هرگونه کشیدن دندان یا جراحی، باید دوز هپارین تحت نظر پزشک قلبی که به منزل شما می‌آید، مدیریت شود.</li>
                <li><strong>پوکی استخوان:</strong> مصرف طولانی‌مدت هپارین (بیش از چند ماه) می‌تواند باعث کاهش تراکم استخوان شود.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">۶. تشخیص عوارض با اکو و نوار قلب در منزل</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                گاهی بیمار پس از تزریق هپارین دچار تنگی نفس یا درد قفسه سینه می‌شود. این می‌تواند نشانه این باشد که دوز دارو کافی نبوده و لخته‌ای در حال حرکت به سمت ریه است.
              </p>
              <div className="flex items-start gap-4 bg-primary/5 rounded-lg p-4">
                <Activity className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80">
                  <strong>اقدام فوری:</strong> در این شرایط، جابه‌جایی بیمار به بیمارستان ممکن است فشار را بر قلب زیاد کند. متخصصین ما با دستگاه <Link to="/articles/echo-home" className="text-primary hover:underline font-semibold">اکوی پورتابل در منزل</Link>، فشار شریان ریوی و وضعیت بطن راست را بررسی می‌کنند تا از عدم بروز آمبولی ریه مطمئن شوند.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">جدول مقایسه‌ای: هپارین معمولی در مقابل انوکساپارین</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-right">ویژگی</th>
                      <th className="border border-border p-3 text-right">هپارین معمولی (UFH)</th>
                      <th className="border border-border p-3 text-right">انوکساپارین (LMWH)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">نحوه تزریق</td>
                      <td className="border border-border p-3">وریدی (سرم) یا زیرجلدی</td>
                      <td className="border border-border p-3">فقط زیرجلدی (دور ناف)</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">نیاز به آزمایش</td>
                      <td className="border border-border p-3">آزمایش PTT مداوم</td>
                      <td className="border border-border p-3">معمولاً نیاز ندارد</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">سرعت شروع اثر</td>
                      <td className="border border-border p-3">آنی (چند دقیقه)</td>
                      <td className="border border-border p-3">۳۰ تا ۶۰ دقیقه</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3">ریسک HIT</td>
                      <td className="border border-border p-3">بالاتر</td>
                      <td className="border border-border p-3">کمتر</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">کاربرد در منزل</td>
                      <td className="border border-border p-3">سخت و نیاز به پرستار</td>
                      <td className="border border-border p-3">آسان (توسط بیمار یا همراه)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">چرا «نوید زندگی» بهترین انتخاب برای بیماران تحت درمان با هپارین است؟</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                مدیریت داروهای تزریقی ضد انعقاد در خانه استرس‌زاست. مرکز ما با فراهم آوردن زنجیره کامل خدمات:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">ویزیت پزشک متخصص قلب در منزل جهت تنظیم دوز</p>
                </div>
                <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                  <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">انجام نوار قلب و اکو در منزل برای پایش سلامت قلب</p>
                </div>
                <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">آزمایشگاه شبانه‌روزی در منزل برای تست‌های PTT و پلاکت</p>
                </div>
                <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                  <Syringe className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">تزریقات تخصصی توسط پرستاران مجرب</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">منابع علمی</h2>
              <ul className="list-disc list-inside text-foreground/80 space-y-2 mr-4">
                <li>American College of Chest Physicians (ACCP) Evidence-Based Clinical Practice Guidelines</li>
                <li>Journal of the American Heart Association (JAHA)</li>
                <li>UpToDate: Heparin and Low Molecular Weight Heparin Management</li>
              </ul>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              آیا نیاز به تزریق هپارین یا پایش خون در منزل دارید؟
            </h3>
            <p className="text-center text-foreground/80 mb-4">
              همین حالا با کارشناسان ما تماس بگیرید تا در کمتر از یک ساعت تیم پزشکی در کنار شما باشد:
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

export default HeparinEnoxaparinPage;
