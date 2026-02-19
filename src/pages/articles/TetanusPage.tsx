import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import tetanusImage from "@/assets/tetanus-article.jpg";
import vaccinationImage from "@/assets/vaccination-article.jpg";
import meningitisImage from "@/assets/meningitis-article.jpg";
import tuberculosisImage from "@/assets/tuberculosis-article.jpg";

const TetanusPage = () => {
  const faqs = [
    {
      question: "کزاز چگونه منتقل می‌شود؟",
      answer: "کزاز از فردی به فرد دیگر منتقل نمی‌شود. باکتری کزاز در خاک، گرد و غبار و مدفوع حیوانات وجود دارد و از طریق زخم‌های باز وارد بدن می‌شود."
    },
    {
      question: "هر چند وقت یکبار باید واکسن کزاز بزنم؟",
      answer: "واکسن یادآور کزاز باید هر ۱۰ سال یکبار تزریق شود. در صورت جراحت آلوده، اگر بیش از ۵ سال از آخرین واکسن گذشته باشد، تزریق یادآور توصیه می‌شود."
    },
    {
      question: "علائم اولیه کزاز چیست؟",
      answer: "قفل شدن فک (ناتوانی در باز کردن دهان)، سفتی عضلات گردن و شکم، دشواری در بلع و اسپاسم‌های دردناک از علائم اولیه کزاز هستند."
    },
    {
      question: "بعد از زخم آلوده چقدر زمان دارم برای تزریق واکسن؟",
      answer: "در صورت زخم آلوده، هرچه زودتر اقدام کنید بهتر است. ترجیحاً در ۲۴ ساعت اول و حداکثر تا ۷۲ ساعت پس از جراحت باید واکسن یا سرم تزریق شود."
    },
    {
      question: "سرم کزاز چیست و چه فرقی با واکسن دارد؟",
      answer: "سرم کزاز (TIG) آنتی‌بادی‌های آماده علیه سم کزاز است و اثر فوری دارد. واکسن کزاز باعث تولید آنتی‌بادی توسط خود بدن می‌شود و اثر طولانی‌مدت دارد."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="کزاز چیست؟ علائم، پیشگیری و درمان | نوید زندگی"
        description="بیماری کزاز یک فوریت پزشکی است. علائم، راه‌های پیشگیری و خدمات پانسمان تخصصی زخم و مراقبت پرستاری در منزل توسط نوید زندگی."
        keywords="کزاز, علائم کزاز, پیشگیری از کزاز, پانسمان زخم, مراقبت پرستاری"
        canonical="https://navidzendegi.com/articles/tetanus"
        ogType="article"
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
      />
      
      <ArticleSchema
        title="کزاز چیست؟ علائم، پیشگیری و درمان"
        description="بیماری کزاز یک فوریت پزشکی است. علائم، راه‌های پیشگیری و خدمات پانسمان تخصصی زخم در منزل."
        publishedTime="2025-01-15T10:00:00+03:30"
        modifiedTime="2025-01-15T10:00:00+03:30"
        image={tetanusImage}
      />

      <Header />
      
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto max-w-4xl px-4 pt-4">
          <BreadcrumbNavigation items={[{name:"خانه",url:"/"},{name:"مقالات",url:"/articles"},{name:"کزاز",url:"/articles/tetanus"}]} />
        </div>
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                کزاز؛ بیماری خطرناکی که با یک زخم ساده آغاز می‌شود
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                آیا می‌دانستید باکتری کزاز می‌تواند از طریق یک خراش کوچک با وسیله‌ای زنگ‌زده یا حتی خاک آلوده وارد بدن شود؟ بیماری کزاز که به "قفل شدن فک" نیز معروف است، یک فوریت پزشکی است. مرکز <Link to="/" className="text-primary hover:underline font-medium">نوید زندگی</Link> با ارائه خدمات <Link to="/services/nursing" className="text-primary hover:underline">پانسمان تخصصی</Link> و مراقبت‌های پرستاری در منزل، در کنار شما و خانواده‌تان است.
              </p>
            </div>
            
            <div className="relative mb-8">
              <img 
                src={tetanusImage} 
                alt="بیماری کزاز - علائم و پیشگیری"
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
              <strong className="text-destructive">هشدار مهم:</strong> کزاز یک فوریت پزشکی است. هرگز خوددرمانی نکنید. در صورت جراحت با اشیاء آلوده، فوراً برای تزریق واکسن یا سرم به نزدیک‌ترین مرکز درمانی مراجعه کنید. برای مشاوره و خدمات پرستاری با شماره <a href="tel:09386117912" className="text-primary font-bold hover:underline">09386117912</a> تماس بگیرید.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              بیماری کزاز چیست؟
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed text-justify">
              کزاز یک بیماری شدید است که توسط سم باکتری <strong>کلستریدیوم تتانی</strong> ایجاد می‌شود. این باکتری در خاک، گرد و غبار و مدفوع حیوانات وجود دارد. وقتی باکتری وارد یک زخم عمیق یا حتی سطحی شود، سمی تولید می‌کند که به اعصاب کنترل‌کننده عضلات حمله کرده و باعث گرفتگی‌های دردناک می‌شود.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              علائم اصلی بیماری کزاز
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              علائم معمولاً بین ۳ تا ۲۱ روز پس از آلودگی ظاهر می‌شوند. مهم‌ترین نشانه‌ها عبارتند از:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>قفل شدن فک (Trismus):</strong> ناتوانی در باز کردن دهان که اولین و شایع‌ترین علامت کزاز است.
              </li>
              <li className="text-base text-foreground">
                <strong>اسپاسم عضلات گردن و شکم:</strong> سفت شدن شدید عضلات که می‌تواند بسیار دردناک باشد.
              </li>
              <li className="text-base text-foreground">
                <strong>لبخند کزاز (Risus Sardonicus):</strong> اسپاسم عضلات صورت که حالتی شبیه لبخند اجباری ایجاد می‌کند.
              </li>
              <li className="text-base text-foreground">
                <strong>دشواری در بلع:</strong> مشکل در قورت دادن غذا یا آب.
              </li>
              <li className="text-base text-foreground">
                <strong>تشنج‌های دردناک بدن:</strong> که ممکن است با صدا یا نور تحریک شود.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              چه زمانی به تزریق واکسن کزاز نیاز داریم؟
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              بسیاری از افراد تصور می‌کنند کزاز فقط مربوط به میخ زنگ‌زده است، اما در موارد زیر حتماً باید به مرکز درمانی مراجعه کنید:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>بریدگی با اجسام فلزی:</strong> چاقو، ابزار کار، یا قطعات خودرو.
              </li>
              <li className="text-base text-foreground">
                <strong>جراحت در محیط باز:</strong> هر زخمی که با خاک یا کود در تماس باشد.
              </li>
              <li className="text-base text-foreground">
                <strong>گاز گرفتگی حیوانات:</strong> سگ، گربه یا سایر حیوانات.
              </li>
              <li className="text-base text-foreground">
                <strong>سوختگی‌های عمیق:</strong> که بافت بدن را تخریب کرده است.
              </li>
              <li className="text-base text-foreground">
                <strong>گذشتن بیش از ۱۰ سال از آخرین واکسن:</strong> حتی بدون وجود زخم، هر ۱۰ سال یکبار باید واکسن یادآور تزریق شود.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              خدمات نوید زندگی برای مراقبت از زخم
            </h2>
            <p className="text-base text-foreground mb-4 leading-relaxed text-justify">
              در زمان بروز حادثه، استرس و جابه‌جایی بیمار می‌تواند خطرناک باشد. ما خدمات زیر را در محل شما ارائه می‌دهیم:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>شست‌وشو و پانسمان تخصصی زخم:</strong> باکتری کزاز در محیط‌های بدون اکسیژن (زخم‌های عمیق) رشد می‌کند. <Link to="/services/nursing" className="text-primary hover:underline">پرستاران ما</Link> با متدهای علمی، زخم را کاملاً ضدعفونی کرده و بافت‌های مرده را جدا می‌کنند تا احتمال رشد باکتری به حداقل برسد.
              </li>
              <li className="text-base text-foreground">
                <strong>مراقبت‌های پرستاری ۲۴ ساعته:</strong> برای بیمارانی که دوران نقاهت پس از کزاز را می‌گذرانند، مراقبت‌های ویژه جهت مدیریت اسپاسم‌ها و تغذیه در منزل توسط کادر مجرب ما انجام می‌شود.
              </li>
              <li className="text-base text-foreground">
                <strong>مشاوره و راهنمایی:</strong> تیم ما می‌تواند در مورد مراجعه به مراکز درمانی برای تزریق واکسن راهنمایی‌های لازم را ارائه دهد.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              راهنمای سریع: با زخم مشکوک چه کنیم؟
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-base text-foreground">
                <strong>مرحله ۱:</strong> شست‌وشوی سریع زخم با آب و صابون
              </li>
              <li className="text-base text-foreground">
                <strong>مرحله ۲:</strong> جلوگیری از خونریزی با پارچه تمیز
              </li>
              <li className="text-base text-foreground">
                <strong>مرحله ۳:</strong> بررسی تاریخچه واکسیناسیون خود
              </li>
              <li className="text-base text-foreground">
                <strong>مرحله ۴:</strong> مراجعه فوری به مرکز درمانی برای تزریق واکسن یا سرم کزاز
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              خدمات پرستاری و پانسمان زخم در منزل
            </h2>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              برای خدمات پانسمان تخصصی زخم و مراقبت‌های پرستاری در منزل، همین حالا با نوید زندگی تماس بگیرید. سلامتی شما، مأموریت ماست.
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
                  title: "واکسیناسیون در منزل",
                  description: "اهمیت واکسیناسیون و راهنمای کامل واکسن‌های ضروری",
                  image: vaccinationImage,
                  link: "/articles/vaccination",
                  category: "پیشگیری"
                },
                {
                  title: "مننژیت چیست؟",
                  description: "علائم، تشخیص و درمان مننژیت",
                  image: meningitisImage,
                  link: "/articles/meningitis",
                  category: "بیماری‌های عفونی"
                },
                {
                  title: "بیماری سل",
                  description: "علائم، راه‌های انتقال و خدمات مراقبت در منزل",
                  image: tuberculosisImage,
                  link: "/articles/tuberculosis",
                  category: "بیماری‌های عفونی"
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

export default TetanusPage;
