import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import { Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import mitralValveImage from "@/assets/mitral-valve-replacement.jpg";
import echoHomeImage from "@/assets/echo-home-service.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import mitralClipImage from "@/assets/mitral-clip-article.jpg";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const MitralValveReplacementPage = () => {
  const faqs = [
    {
      question: "تعویض دریچه میترال چیست؟",
      answer: "تعویض دریچه میترال یک جراحی قلب است که در آن دریچه آسیب‌دیده بین دهلیز چپ و بطن چپ با یک دریچه مصنوعی (مکانیکی یا بیولوژیک) جایگزین می‌شود."
    },
    {
      question: "تفاوت دریچه مکانیکی و بیولوژیک چیست؟",
      answer: "دریچه مکانیکی عمر طولانی‌تری دارد (۲۰-۳۰ سال) اما نیاز به مصرف مادام‌العمر وارفارین دارد. دریچه بیولوژیک نیاز کمتری به ضدانعقاد دارد اما عمر آن ۱۰-۱۵ سال است."
    },
    {
      question: "پس از تعویض دریچه چه مراقبت‌هایی لازم است؟",
      answer: "پیگیری منظم با متخصص قلب، کنترل INR (برای مصرف‌کنندگان وارفارین)، انجام اکوهای دوره‌ای، مصرف منظم داروها و رعایت سبک زندگی سالم ضروری است."
    },
    {
      question: "آیا می‌توان اکوکاردیوگرافی را در منزل انجام داد؟",
      answer: "بله، نوید زندگی خدمات اکوکاردیوگرافی پرتابل در منزل را با دستگاه‌های استاندارد ارائه می‌دهد که برای پیگیری بیماران دریچه‌ای بسیار مفید است."
    },
    {
      question: "چه علائمی پس از جراحی نگران‌کننده هستند؟",
      answer: "تنگی‌نفس ناگهانی، تورم پاها، تپش قلب شدید، خونریزی غیرعادی، تب بالای ۳۸ درجه و ضعف شدید نیاز به بررسی فوری توسط پزشک دارند."
    },
    {
      question: "چرا ویزیت متخصص قلب در منزل مهم است؟",
      answer: "بسیاری از بیماران دریچه‌ای سالمند یا کم‌تحرک هستند. ویزیت در منزل امکان تشخیص زودهنگام، تنظیم داروها و پیگیری منظم را بدون نیاز به جابجایی فراهم می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "میترال کلیپ؛ ترمیم بدون جراحی",
      description: "روش نوین ترمیم دریچه میترال بدون نیاز به جراحی باز",
      image: mitralClipImage,
      link: "/articles/mitral-clip",
      category: "قلب"
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      description: "خدمات اکوی قلب تخصصی در محیط امن خانه شما",
      image: echoHomeImage,
      link: "/articles/echo-home",
      category: "قلب"
    },
    {
      title: "وارفارین؛ راهنمای مصرف",
      description: "نکات مهم مصرف وارفارین برای بیماران دریچه‌ای",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "دارو"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="تعویض دریچه میترال؛ تشخیص، پیگیری و مراقبت در منزل | نوید زندگی"
        description="راهنمای جامع تعویض دریچه میترال: تشخیص با اکو در منزل، انواع دریچه مصنوعی، مراقبت‌های قبل و بعد از جراحی. خدمات ویزیت متخصص قلب در منزل تهران و کرج. تماس: 09386117912"
        keywords="تعویض دریچه میترال, دریچه قلب, نارسایی میترال, تنگی میترال, اکو قلب, متخصص قلب در منزل, وارفارین, نوید زندگی"
        canonical="https://navidzendegi.ir/articles/mitral-valve-replacement"
        ogType="article"
        author="تیم پزشکی نوید زندگی"
        publishedTime="2026-01-03"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"تعویض دریچه میترال",url:"/articles/mitral-valve-replacement"}]} />
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2">تاریخ انتشار: ۱۴۰۴/۱۰/۱۴</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                تعویض دریچه میترال؛ تشخیص، پیگیری و مراقبت‌های تخصصی در منزل
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                بیماری‌های دریچه‌ای قلب، به‌ویژه مشکلات دریچه میترال، از علل شایع نارسایی قلبی و کاهش کیفیت زندگی بیماران هستند. در موارد پیشرفته، تعویض دریچه میترال به‌عنوان یک درمان قطعی مطرح می‌شود. با این حال، نقش تشخیص زودهنگام، پیگیری منظم و مراقبت‌های تخصصی قبل و بعد از جراحی بسیار حیاتی است؛ جایی که <Link to="/cardiology" className="text-primary hover:underline">ویزیت متخصص قلب در منزل</Link> می‌تواند نقش کلیدی ایفا کند.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={mitralValveImage} 
                alt="تعویض دریچه میترال - انواع دریچه مکانیکی و بیولوژیک"
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
              دریچه میترال چیست و چرا اهمیت دارد؟
            </h2>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              دریچه میترال بین دهلیز چپ و بطن چپ قرار دارد و وظیفه آن هدایت صحیح جریان خون و جلوگیری از بازگشت آن است. اختلال در عملکرد این دریچه باعث افزایش فشار روی قلب، کاهش برون‌ده قلبی و بروز علائمی مانند <Link to="/articles/breathing-treatment" className="text-primary hover:underline">تنگی‌نفس</Link> و خستگی می‌شود.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              بیماری‌های شایع دریچه میترال
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              مشکلات دریچه میترال عمدتاً به دو شکل دیده می‌شوند:
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-foreground">🔹 تنگی دریچه میترال (Mitral Stenosis)</h3>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              در این حالت دریچه به‌طور کامل باز نمی‌شود و عبور خون محدود می‌گردد.
            </p>

            <h3 className="text-xl font-bold mb-3 text-foreground">🔹 نارسایی دریچه میترال (Mitral Regurgitation)</h3>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              در این وضعیت دریچه به‌طور کامل بسته نمی‌شود و بخشی از خون به دهلیز چپ بازمی‌گردد. در مراحل اولیه، این بیماری‌ها ممکن است بدون علامت باشند و تنها از طریق <Link to="/articles/echo-home" className="text-primary hover:underline">اکوکاردیوگرافی</Link> تشخیص داده شوند.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چه زمانی تعویض دریچه میترال ضروری می‌شود؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              زمانی که شدت تنگی یا نارسایی زیاد باشد و درمان دارویی یا ترمیم دریچه (مانند <Link to="/articles/mitral-clip" className="text-primary hover:underline">میترال کلیپ</Link>) پاسخگو نباشد، تعویض دریچه میترال توصیه می‌شود. تصمیم برای جراحی بر اساس موارد زیر گرفته می‌شود:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• شدت علائم بیمار</li>
              <li className="text-base text-foreground">• نتایج <Link to="/articles/echo-indications" className="text-primary hover:underline">اکوکاردیوگرافی</Link></li>
              <li className="text-base text-foreground">• عملکرد بطن چپ</li>
              <li className="text-base text-foreground">• سن و بیماری‌های زمینه‌ای</li>
            </ul>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              در این مرحله، ارزیابی دقیق توسط <Link to="/cardiology" className="text-primary hover:underline">متخصص قلب</Link> اهمیت بالایی دارد.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              نقش ویزیت متخصص قلب در منزل قبل از جراحی
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              بسیاری از بیماران مبتلا به بیماری‌های دریچه‌ای، سالمند یا کم‌تحرک هستند. <Link to="/cardiology" className="text-primary hover:underline">ویزیت متخصص قلب در منزل</Link> می‌تواند:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• تشخیص اولیه بیماری دریچه‌ای را تسهیل کند</li>
              <li className="text-base text-foreground">• نیاز به انجام <Link to="/services/echo-ecg" className="text-primary hover:underline">اکو در منزل</Link> را مشخص نماید</li>
              <li className="text-base text-foreground">• داروهای قلبی را به‌درستی تنظیم کند</li>
              <li className="text-base text-foreground">• زمان مناسب ارجاع برای جراحی را تعیین کند</li>
            </ul>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              این رویکرد از تأخیر در درمان و پیشرفت نارسایی قلبی جلوگیری می‌کند.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              اکوکاردیوگرافی در منزل و تشخیص بیماری دریچه‌ای
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              <Link to="/articles/echo-home" className="text-primary hover:underline">اکوکاردیوگرافی</Link> مهم‌ترین ابزار تشخیصی در بیماری‌های دریچه میترال است. انجام اکو در منزل توسط متخصص قلب با دستگاه پرتابل استاندارد امکان بررسی موارد زیر را فراهم می‌کند:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• شدت نارسایی یا تنگی دریچه</li>
              <li className="text-base text-foreground">• عملکرد بطن چپ</li>
              <li className="text-base text-foreground">• فشار شریان ریوی</li>
              <li className="text-base text-foreground">• وجود لخته یا افیوژن اطراف قلب</li>
            </ul>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              <Link to="/articles/echo-safety-home" className="text-primary hover:underline">اکو در منزل</Link> به‌ویژه برای بیماران پرخطر یا پس از جراحی دریچه بسیار کاربردی است.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              انواع دریچه‌های جایگزین‌شونده
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              در تعویض دریچه میترال، معمولاً از دو نوع دریچه استفاده می‌شود:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>دریچه مکانیکی:</strong> عمر طولانی دارد (۲۰-۳۰ سال) اما نیازمند مصرف مادام‌العمر داروهای ضدانعقاد مانند <Link to="/articles/warfarin" className="text-primary hover:underline">وارفارین</Link> است.
              </li>
              <li className="text-base text-foreground">
                <strong>دریچه بیولوژیک:</strong> نیاز کمتری به ضدانعقاد دارد اما عمر آن محدودتر است (۱۰-۱۵ سال).
              </li>
            </ul>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              انتخاب نوع دریچه بر اساس سن، شرایط بیمار و سبک زندگی انجام می‌شود.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              مراقبت‌های بعد از تعویض دریچه میترال در منزل
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              پس از جراحی، پیگیری منظم وضعیت بیمار اهمیت زیادی دارد. خدمات پزشکی در منزل می‌تواند شامل موارد زیر باشد:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• ویزیت دوره‌ای <Link to="/cardiology" className="text-primary hover:underline">متخصص قلب</Link></li>
              <li className="text-base text-foreground">• کنترل INR در بیماران مصرف‌کننده <Link to="/articles/warfarin" className="text-primary hover:underline">وارفارین</Link></li>
              <li className="text-base text-foreground">• بررسی علائم نارسایی قلبی</li>
              <li className="text-base text-foreground">• انجام <Link to="/articles/echo-home" className="text-primary hover:underline">اکوهای پیگیری در منزل</Link></li>
              <li className="text-base text-foreground">• آموزش دارویی و سبک زندگی به بیمار و خانواده</li>
            </ul>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              مطالعات نشان داده‌اند که مراقبت‌های منظم پس از جراحی دریچه، میزان بستری مجدد و عوارض را کاهش می‌دهد.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چه علائمی پس از تعویض دریچه نیاز به بررسی فوری دارند؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              در صورت مشاهده هر یک از علائم زیر، تماس با پزشک ضروری است:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-base text-foreground">• <Link to="/articles/breathing-treatment" className="text-primary hover:underline">تنگی‌نفس</Link> ناگهانی</li>
              <li className="text-base text-foreground">• <Link to="/articles/leg-swelling" className="text-primary hover:underline">تورم پاها</Link></li>
              <li className="text-base text-foreground">• <Link to="/articles/heart-palpitations" className="text-primary hover:underline">تپش قلب</Link> شدید</li>
              <li className="text-base text-foreground">• خونریزی غیرعادی</li>
              <li className="text-base text-foreground">• ضعف یا <Link to="/articles/dizziness" className="text-primary hover:underline">سرگیجه</Link> شدید</li>
            </ul>
            <p className="text-base text-foreground mb-8 leading-relaxed text-justify">
              در این شرایط، <Link to="/cardiology" className="text-primary hover:underline">ویزیت پزشک یا متخصص قلب در منزل</Link> می‌تواند ارزیابی سریع و ایمن را فراهم کند.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              منابع علمی و دانشگاهی
            </h2>
            <ul className="space-y-2 mb-8 text-foreground">
              <li>• Mayo Clinic – Mitral valve repair and replacement</li>
              <li>• American Heart Association – Valvular heart disease</li>
              <li>• European Society of Cardiology (ESC) – Guidelines for valvular heart disease</li>
              <li>• Johns Hopkins Medicine – Mitral valve replacement</li>
              <li>• National Institutes of Health (NIH) – Outcomes after valve surgery</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              جمع‌بندی
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              تعویض دریچه میترال یک درمان حیاتی برای بیماری‌های پیشرفته دریچه‌ای قلب است، اما موفقیت آن تنها به جراحی محدود نمی‌شود. تشخیص زودهنگام، پیگیری تخصصی و مراقبت‌های قبل و بعد از عمل در منزل نقش بسیار مهمی در بهبود کیفیت و طول عمر بیماران دارد. خدمات پزشکی در منزل، به‌ویژه ویزیت متخصص قلب و انجام اکو در منزل، می‌تواند مسیر درمان را ایمن‌تر و مؤثرتر کند.
            </p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              <Phone className="ml-2 h-6 w-6" />
              تماس: 09386117912
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Related Articles */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <PricingInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default MitralValveReplacementPage;