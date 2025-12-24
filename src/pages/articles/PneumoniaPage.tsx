import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Link } from "react-router-dom";
import { AlertTriangle, Phone, Stethoscope, Syringe, Activity, Users, Wind, Heart } from "lucide-react";
import pneumoniaImage from "@/assets/pneumonia-article.jpg";

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

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "ذات‌الریه (پنومونی)", url: "/articles/pneumonia" }
  ];

  return (
    <ArticleLayout>
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
        description="ذات‌الریه چیست؟ با علائم، خطرات و روش‌های نوین درمان پنومونی در منزل آشنا شوید. خدمات تخصصی اکسیژن‌تراپی و ویزیت پزشک در منزل."
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
        image={pneumoniaImage}
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation items={breadcrumbItems} />

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
            ذات‌الریه (پنومونی) چیست؟ از علائم تا درمان تخصصی در منزل
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            آیا سرفه‌های مداوم، تب و تنگی نفس امان شما یا عزیزانتان را بریده است؟ ذات‌الریه یا پنومونی یک عفونت جدی ریوی است که می‌تواند از یک سرماخوردگی ساده شروع شده و به وضعیتی خطرناک تبدیل شود.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={pneumoniaImage} 
            alt="درمان ذات‌الریه در منزل با خدمات پزشکی و پرستاری نوید زندگی" 
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>

        {/* Warning Box */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-1">هشدار مهم</h3>
              <p className="text-sm text-foreground">
                ذات‌الریه یک بیماری جدی است. هرگز خوددرمانی نکنید و داروهای آنتی‌بیوتیک را بدون تجویز پزشک مصرف نکنید. در صورت تنگی نفس شدید، فوراً با پزشک مشورت کنید. برای ویزیت پزشک در منزل با شماره <a href="tel:09386117912" className="text-primary font-bold hover:underline">09386117912</a> تماس بگیرید.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">ذات‌الریه دقیقاً چیست؟</h2>
          <p className="text-foreground leading-relaxed mb-4">
            ذات‌الریه نوعی <strong>التهاب ریه</strong> است که در آن کیسه‌های هوایی (آلوئول‌ها) با چرک یا مایعات پر می‌شوند. این اتفاق باعث می‌شود اکسیژن‌رسانی به خون مختل شده و تنفس برای فرد دشوار و دردناک شود. این بیماری می‌تواند یک یا هر دو ریه را درگیر کند.
          </p>
          <p className="text-foreground leading-relaxed">
            مرکز <Link to="/" className="text-primary hover:underline font-medium">نوید زندگی</Link> با ارائه <Link to="/services/internal" className="text-primary hover:underline">خدمات ویزیت متخصص داخلی در منزل</Link> و <Link to="/services/nursing" className="text-primary hover:underline">پرستاری تخصصی</Link>، درمان ذات‌الریه را در محیط آرام و امن خانه برای شما ممکن می‌سازد.
          </p>
        </section>

        {/* Symptoms Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">علائم اصلی ذات‌الریه که نباید نادیده بگیرید</h2>
          <p className="text-foreground leading-relaxed mb-4">
            علائم پنومونی بسته به سن، نوع عامل بیماری‌زا و وضعیت سلامتی فرد متفاوت است، اما شایع‌ترین آن‌ها عبارتند از:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>سرفه:</strong> که معمولاً با خلط (سبز، زرد یا حتی خونی) همراه است</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>تب، لرز و تعریق شدید</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>تنگی نفس:</strong> که حتی در حالت استراحت هم ممکن است بروز کند</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>درد قفسه سینه:</strong> که هنگام نفس عمیق یا سرفه بدتر می‌شود</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>خستگی مفرط و ضعف بدنی</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>گیجی و کاهش سطح هوشیاری:</strong> (به‌ویژه در افراد بالای ۶۵ سال)</span>
            </li>
          </ul>
        </section>

        {/* Risk Groups */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">چه کسانی در معرض خطر هستند؟</h2>
          <p className="text-foreground leading-relaxed mb-4">
            اگرچه ذات‌الریه ممکن است هر کسی را درگیر کند، اما گروه‌های زیر به شدت آسیب‌پذیرند:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/30 p-4 rounded-lg text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">کودکان زیر ۲ سال</h3>
              <p className="text-sm text-muted-foreground">به دلیل کامل نشدن سیستم ایمنی</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg text-center">
              <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">سالمندان بالای ۶۵ سال</h3>
              <p className="text-sm text-muted-foreground">به دلیل ضعیف شدن قوای جسمانی</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg text-center">
              <Activity className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-1">افراد با بیماری زمینه‌ای</h3>
              <p className="text-sm text-muted-foreground">دیابت، آسم، مشکلات قلبی یا COPD</p>
            </div>
          </div>
        </section>

        {/* Why Home Treatment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">چرا درمان ذات‌الریه در منزل بهترین گزینه است؟</h2>
          <p className="text-foreground leading-relaxed mb-4">
            بیماران مبتلا به ذات‌الریه، به دلیل افت سطح اکسیژن و ضعف شدید، توانایی جابه‌جایی و ایستادن در صف‌های طولانی مراکز درمانی را ندارند. مرکز <strong>نوید زندگی</strong> با انتقال بیمارستان به خانه، این چالش را حل کرده است:
          </p>

          <div className="space-y-6">
            <div className="border-r-4 border-primary pr-4">
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary" />
                ۱. ویزیت متخصص ریه و داخلی در منزل
              </h3>
              <p className="text-foreground leading-relaxed">
                <Link to="/services/internal" className="text-primary hover:underline">پزشکان ما</Link> با حضور در بالین بیمار، ریه‌ها را معاینه کرده و با بررسی دقیق علائم بالینی، بهترین پروتکل درمانی را تجویز می‌کنند.
              </p>
            </div>

            <div className="border-r-4 border-primary pr-4">
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Wind className="w-5 h-5 text-primary" />
                ۲. خدمات اکسیژن‌تراپی در منزل
              </h3>
              <p className="text-foreground leading-relaxed">
                یکی از اصلی‌ترین نیازهای بیمار پنومونی، دریافت اکسیژن کافی است. ما <Link to="/services/medical-equipment-rental" className="text-primary hover:underline">تجهیزات لازم</Link> (کپسول یا دستگاه اکسیژن‌ساز) را در منزل شما مستقر می‌کنیم.
              </p>
            </div>

            <div className="border-r-4 border-primary pr-4">
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Syringe className="w-5 h-5 text-primary" />
                ۳. تزریقات و سرم‌تراپی (آنتی‌بیوتیک‌های وریدی)
              </h3>
              <p className="text-foreground leading-relaxed">
                در بسیاری از موارد، درمان با آنتی‌بیوتیک‌های خوراکی کافی نیست. <Link to="/services/nursing" className="text-primary hover:underline">پرستاران مجرب نوید زندگی</Link> تزریقات وریدی و <Link to="/articles/iv-therapy-home" className="text-primary hover:underline">سرم‌تراپی</Link> را با دقت بالا در منزل انجام می‌دهند.
              </p>
            </div>

            <div className="border-r-4 border-primary pr-4">
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                ۴. انجام آزمایش خون و عکس‌برداری در منزل
              </h3>
              <p className="text-foreground leading-relaxed">
                نیاز به خروج از خانه برای آزمایش نیست. <Link to="/services/laboratory" className="text-primary hover:underline">تیم نمونه‌گیری ما</Link> در محل حاضر شده و در صورت نیاز، هماهنگی‌های لازم برای <Link to="/services/radiology" className="text-primary hover:underline">رادیولوژی در منزل</Link> نیز انجام می‌شود.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Pneumonia */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">انواع ذات‌الریه بر اساس عامل ایجادکننده</h2>
          <div className="space-y-4">
            <div className="bg-muted/20 p-4 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">پنومونی باکتریایی</h3>
              <p className="text-muted-foreground">معمولاً شدیدتر است و با آنتی‌بیوتیک درمان می‌شود. شایع‌ترین عامل آن باکتری استرپتوکوکوس پنومونیه است.</p>
            </div>
            <div className="bg-muted/20 p-4 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">پنومونی ویروسی</h3>
              <p className="text-muted-foreground">مانند <Link to="/articles/influenza-treatment" className="text-primary hover:underline">آنفولانزا</Link> یا کرونا که نیاز به داروهای ضدویروسی و استراحت دارد.</p>
            </div>
            <div className="bg-muted/20 p-4 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">پنومونی قارچی</h3>
              <p className="text-muted-foreground">بیشتر در افرادی با سیستم ایمنی بسیار ضعیف دیده می‌شود و نیاز به درمان‌های ضد قارچی دارد.</p>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">پیشگیری؛ بهتر از درمان</h2>
          <p className="text-foreground leading-relaxed mb-4">
            برای جلوگیری از ابتلا به این بیماری، تیم پزشکی نوید زندگی راهکارهای زیر را توصیه می‌کند:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>واکسیناسیون:</strong> تزریق <Link to="/articles/influenza-vaccine" className="text-primary hover:underline">واکسن آنفولانزا</Link> و واکسن پنوموکوک (بسیار حیاتی برای سالمندان)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>بهداشت دست‌ها:</strong> شست‌وشوی مکرر دست‌ها برای جلوگیری از ورود ویروس</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>عدم استعمال دخانیات:</strong> <Link to="/articles/smoking-heart-effects" className="text-primary hover:underline">سیگار</Link> باعث تضعیف قدرت دفاعی ریه‌ها می‌شود</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>تقویت سیستم ایمنی:</strong> تغذیه مناسب و <Link to="/articles/vitamins-health" className="text-primary hover:underline">مصرف ویتامین‌ها</Link></span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8 text-center">
          <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">
            زمان را از دست ندهید!
          </h2>
          <p className="text-muted-foreground mb-4">
            تیم متخصص نوید زندگی در تمام ساعات شبانه‌روز آماده اعزام پزشک و پرستار به منزل شماست
          </p>
          <p className="text-foreground mb-4 font-medium">آرامش شما، تخصص ماست</p>
          <a 
            href="tel:09386117912" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            09386117912
          </a>
        </section>

        <FAQSection faqs={faqs} />

        <RelatedArticles 
          articles={[
            {
              title: "پنومونی آسپیراسیون چیست؟",
              description: "علائم، عوامل خطر و درمان پنومونی ناشی از استنشاق",
              image: "/placeholder.svg",
              link: "/articles/aspiration-pneumonia",
              category: "بیماری‌های ریوی"
            },
            {
              title: "درمان آنفولانزا",
              description: "علائم، پیشگیری و درمان آنفولانزا در منزل",
              image: "/placeholder.svg",
              link: "/articles/influenza-treatment",
              category: "بیماری‌های عفونی"
            },
            {
              title: "سرم‌تراپی در منزل",
              description: "خدمات تزریق سرم و آنتی‌بیوتیک در منزل",
              image: "/placeholder.svg",
              link: "/articles/iv-therapy-home",
              category: "خدمات پزشکی"
            }
          ]}
        />

        <PricingInfo />
      </main>
    </ArticleLayout>
  );
};

export default PneumoniaPage;
