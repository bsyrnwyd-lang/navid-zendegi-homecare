import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import pneumoniaImage from "@/assets/pneumonia-article.jpg";
import aspirationPneumoniaImage from "@/assets/aspiration-pneumonia.jpg";
import influenzaImage from "@/assets/infectious-disease.jpg";
import ivTherapyImage from "@/assets/iv-therapy-home.jpg";

const PneumoniaPage = () => {
  const faqs = [
    {
      question: "ذات‌الریه چگونه منتقل می‌شود؟",
      answer: "پنومونی باکتریایی و ویروسی از طریق قطرات تنفسی (سرفه، عطسه) منتقل می‌شود. تماس نزدیک با فرد مبتلا و لمس سطوح آلوده می‌تواند خطر ابتلا را افزایش دهد."
    },
    {
      question: "آیا ذات‌الریه در منزل قابل درمان است؟",
      answer: "بله، بسیاری از موارد ذات‌الریه با نظارت پزشکی و خدمات پرستاری در منزل قابل درمان هستند. نوید زندگی خدمات ویزیت پزشک، تزریقات وریدی و اکسیژن‌تراپی در منزل ارائه می‌دهد."
    },
    {
      question: "چه زمانی باید به بیمارستان مراجعه کرد؟",
      answer: "در صورت تنگی نفس شدید، کاهش سطح اکسیژن خون زیر ۹۲٪، گیجی، درد شدید قفسه سینه یا تب بالای ۴۰ درجه، انتقال فوری به بیمارستان ضروری است."
    },
    {
      question: "مدت درمان ذات‌الریه چقدر است؟",
      answer: "دوره درمان آنتی‌بیوتیکی معمولاً ۵ تا ۱۴ روز است. بهبودی کامل ممکن است چند هفته طول بکشد، به‌خصوص در سالمندان و افراد دارای بیماری زمینه‌ای."
    },
    {
      question: "آیا واکسن ذات‌الریه وجود دارد؟",
      answer: "بله، واکسن پنوموکوک برای پیشگیری از پنومونی باکتریایی توصیه می‌شود، به‌ویژه برای سالمندان بالای ۶۵ سال و افراد دارای بیماری زمینه‌ای."
    },
    {
      question: "تفاوت ذات‌الریه با برونشیت چیست؟",
      answer: "برونشیت التهاب مجاری هوایی است، در حالی که ذات‌الریه عفونت خود بافت ریه (آلوئول‌ها) است. پنومونی معمولاً شدیدتر بوده و با تب بالا، خلط چرکی و تنگی نفس شدیدتر همراه است."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ذات‌الریه (پنومونی) چیست؟ علائم و درمان تخصصی در منزل | نوید زندگی"
        description="ذات‌الریه چیست؟ با علائم، خطرات و روش‌های نوین درمان پنومونی در منزل آشنا شوید. خدمات تخصصی اکسیژن‌تراپی، تزریق آنتی‌بیوتیک و ویزیت پزشک در منزل با نوید زندگی."
        keywords="ذات‌الریه, پنومونی, درمان ذات‌الریه در خانه, پرستار منزل تهران, علائم عفونت ریه, تزریق آنتی بیوتیک در منزل, اکسیژن‌تراپی در منزل"
        canonical="https://navidzendegi.com/articles/pneumonia"
        ogType="article"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
      />
      
      <ArticleSchema
        title="ذات‌الریه (پنومونی) چیست؟ از علائم تا درمان تخصصی در منزل"
        description="ذات‌الریه چیست؟ با علائم، خطرات و روش‌های نوین درمان پنومونی در منزل آشنا شوید."
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
        image={pneumoniaImage}
      />

      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                ذات‌الریه (پنومونی) چیست؟ از علائم تا درمان تخصصی در منزل
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                آیا سرفه‌های مداوم، تب و تنگی نفس امان شما یا عزیزانتان را بریده است؟ ذات‌الریه یا پنومونی یک عفونت جدی ریوی است که می‌تواند از یک سرماخوردگی ساده شروع شده و به وضعیتی خطرناک تبدیل شود. مرکز <Link to="/" className="text-primary hover:underline font-medium">نوید زندگی</Link> با ارائه <Link to="/services/internal" className="text-primary hover:underline">خدمات ویزیت متخصص داخلی در منزل</Link> و <Link to="/services/nursing" className="text-primary hover:underline">پرستاری تخصصی</Link>، درمان ذات‌الریه را در محیط آرام و امن خانه برای شما ممکن می‌سازد.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={pneumoniaImage} 
                alt="درمان ذات‌الریه در منزل با خدمات پزشکی نوید زندگی"
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
            <p className="text-base text-foreground leading-relaxed text-justify">
              <strong className="text-destructive">هشدار مهم:</strong> ذات‌الریه یک بیماری جدی است. هرگز خوددرمانی نکنید و داروهای آنتی‌بیوتیک را بدون تجویز پزشک مصرف نکنید. در صورت تنگی نفس شدید، فوراً با پزشک مشورت کنید. برای ویزیت پزشک در منزل با شماره <a href="tel:09386117912" className="text-primary font-bold hover:underline">09386117912</a> تماس بگیرید.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              ذات‌الریه دقیقاً چیست؟
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              ذات‌الریه نوعی <strong>التهاب ریه</strong> است که در آن کیسه‌های هوایی (آلوئول‌ها) با چرک یا مایعات پر می‌شوند. این اتفاق باعث می‌شود اکسیژن‌رسانی به خون مختل شده و تنفس برای فرد دشوار و دردناک شود. این بیماری می‌تواند یک یا هر دو ریه را درگیر کند.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              علائم اصلی ذات‌الریه که نباید نادیده بگیرید
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              علائم پنومونی بسته به سن، نوع عامل بیماری‌زا و وضعیت سلامتی فرد متفاوت است، اما شایع‌ترین آن‌ها عبارتند از:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>سرفه:</strong> که معمولاً با خلط (سبز، زرد یا حتی خونی) همراه است.
              </li>
              <li className="text-base text-foreground">
                <strong>تب، لرز و تعریق شدید.</strong>
              </li>
              <li className="text-base text-foreground">
                <strong>تنگی نفس:</strong> که حتی در حالت استراحت هم ممکن است بروز کند.
              </li>
              <li className="text-base text-foreground">
                <strong>درد قفسه سینه:</strong> که هنگام نفس عمیق یا سرفه بدتر می‌شود.
              </li>
              <li className="text-base text-foreground">
                <strong>خستگی مفرط و ضعف بدنی.</strong>
              </li>
              <li className="text-base text-foreground">
                <strong>گیجی و کاهش سطح هوشیاری:</strong> (به‌ویژه در افراد بالای ۶۵ سال).
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چه کسانی در معرض خطر هستند؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              اگرچه ذات‌الریه ممکن است هر کسی را درگیر کند، اما گروه‌های زیر به شدت آسیب‌پذیرند:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>کودکان زیر ۲ سال:</strong> به دلیل کامل نشدن سیستم ایمنی.
              </li>
              <li className="text-base text-foreground">
                <strong>سالمندان بالای ۶۵ سال:</strong> به دلیل ضعیف شدن قوای جسمانی.
              </li>
              <li className="text-base text-foreground">
                <strong>افراد دارای بیماری زمینه‌ای:</strong> مانند <Link to="/articles/diabetes" className="text-primary hover:underline">دیابت</Link>، <Link to="/articles/asthma" className="text-primary hover:underline">آسم</Link>، مشکلات قلبی یا COPD.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چرا درمان ذات‌الریه در منزل بهترین گزینه است؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              بیماران مبتلا به ذات‌الریه، به دلیل افت سطح اکسیژن و ضعف شدید، توانایی جابه‌جایی و ایستادن در صف‌های طولانی مراکز درمانی را ندارند. مرکز نوید زندگی با انتقال بیمارستان به خانه، این چالش را حل کرده است:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>ویزیت متخصص ریه و داخلی در منزل:</strong> <Link to="/services/internal" className="text-primary hover:underline">پزشکان ما</Link> با حضور در بالین بیمار، ریه‌ها را معاینه کرده و با بررسی دقیق علائم بالینی، بهترین پروتکل درمانی را تجویز می‌کنند.
              </li>
              <li className="text-base text-foreground">
                <strong>خدمات اکسیژن‌تراپی در منزل:</strong> یکی از اصلی‌ترین نیازهای بیمار پنومونی، دریافت اکسیژن کافی است. ما <Link to="/services/medical-equipment-rental" className="text-primary hover:underline">تجهیزات لازم</Link> (کپسول یا دستگاه اکسیژن‌ساز) را در منزل شما مستقر می‌کنیم.
              </li>
              <li className="text-base text-foreground">
                <strong>تزریقات و سرم‌تراپی (آنتی‌بیوتیک‌های وریدی):</strong> در بسیاری از موارد، درمان با آنتی‌بیوتیک‌های خوراکی کافی نیست. <Link to="/services/nursing" className="text-primary hover:underline">پرستاران مجرب نوید زندگی</Link> تزریقات وریدی و <Link to="/articles/iv-therapy-home" className="text-primary hover:underline">سرم‌تراپی</Link> را با دقت بالا در منزل انجام می‌دهند.
              </li>
              <li className="text-base text-foreground">
                <strong>انجام آزمایش خون و عکس‌برداری در منزل:</strong> نیاز به خروج از خانه برای آزمایش نیست. <Link to="/services/laboratory" className="text-primary hover:underline">تیم نمونه‌گیری ما</Link> در محل حاضر شده و در صورت نیاز، هماهنگی‌های لازم برای <Link to="/services/radiology" className="text-primary hover:underline">رادیولوژی در منزل</Link> نیز انجام می‌شود.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              انواع ذات‌الریه بر اساس عامل ایجادکننده
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>پنومونی باکتریایی:</strong> معمولاً شدیدتر است و با آنتی‌بیوتیک درمان می‌شود. شایع‌ترین عامل آن باکتری استرپتوکوکوس پنومونیه است.
              </li>
              <li className="text-base text-foreground">
                <strong>پنومونی ویروسی:</strong> مانند <Link to="/articles/influenza-treatment" className="text-primary hover:underline">آنفولانزا</Link> یا کرونا که نیاز به داروهای ضدویروسی و استراحت دارد.
              </li>
              <li className="text-base text-foreground">
                <strong>پنومونی قارچی:</strong> بیشتر در افرادی با سیستم ایمنی بسیار ضعیف دیده می‌شود و نیاز به درمان‌های ضد قارچی دارد.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              پیشگیری؛ بهتر از درمان
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              برای جلوگیری از ابتلا به این بیماری، تیم پزشکی نوید زندگی راهکارهای زیر را توصیه می‌کند:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>واکسیناسیون:</strong> تزریق <Link to="/articles/influenza-vaccine" className="text-primary hover:underline">واکسن آنفولانزا</Link> و واکسن پنوموکوک (بسیار حیاتی برای سالمندان).
              </li>
              <li className="text-base text-foreground">
                <strong>بهداشت دست‌ها:</strong> شست‌وشوی مکرر دست‌ها برای جلوگیری از ورود ویروس.
              </li>
              <li className="text-base text-foreground">
                <strong>عدم استعمال دخانیات:</strong> <Link to="/articles/smoking-heart-effects" className="text-primary hover:underline">سیگار</Link> باعث تضعیف قدرت دفاعی ریه‌ها می‌شود.
              </li>
              <li className="text-base text-foreground">
                <strong>تقویت سیستم ایمنی:</strong> تغذیه مناسب و <Link to="/articles/vitamins-health" className="text-primary hover:underline">مصرف ویتامین‌ها</Link>.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              زمان را از دست ندهید!
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              تیم متخصص نوید زندگی در تمام ساعات شبانه‌روز آماده اعزام پزشک و پرستار به منزل شماست. آرامش شما، تخصص ماست.
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
            <RelatedArticles 
              articles={[
                {
                  title: "پنومونی آسپیراسیون چیست؟",
                  description: "علائم، عوامل خطر و درمان پنومونی ناشی از استنشاق",
                  image: aspirationPneumoniaImage,
                  link: "/articles/aspiration-pneumonia",
                  category: "بیماری‌های ریوی"
                },
                {
                  title: "درمان آنفولانزا",
                  description: "علائم، پیشگیری و درمان آنفولانزا در منزل",
                  image: influenzaImage,
                  link: "/articles/influenza-treatment",
                  category: "بیماری‌های عفونی"
                },
                {
                  title: "سرم‌تراپی در منزل",
                  description: "خدمات تزریق سرم و آنتی‌بیوتیک در منزل",
                  image: ivTherapyImage,
                  link: "/articles/iv-therapy-home",
                  category: "خدمات پزشکی"
                }
              ]}
            />
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

export default PneumoniaPage;
