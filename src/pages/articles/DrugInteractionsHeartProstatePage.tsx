import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import SEOSchema from "@/components/SEOSchema";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import drugInteractionsImage from "@/assets/drug-interactions-heart-prostate.jpg";

// Related article images
import prostateVolumeImage from "@/assets/prostate-volume-ultrasound.jpg";
import holterImage from "@/assets/holter-article.jpg";
import echoImage from "@/assets/echo-article.jpg";

const DrugInteractionsHeartProstatePage = () => {
  const publishDate = "2025-01-30";
  
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "تداخلات دارویی قلب، پروستات و ناتوانی جنسی", url: "/articles/drug-interactions-heart-prostate" }
  ];

  const faqs = [
    {
      question: "آیا مصرف ویاگرا برای بیماران قلبی خطرناک است؟",
      answer: "مصرف داروهای ناتوانی جنسی مانند ویاگرا (سیلدنافیل) در بیمارانی که از نیترات‌های قلبی (مانند نیتروگلیسیرین) استفاده می‌کنند، به شدت ممنوع است چون باعث افت شدید فشار خون و شوک می‌شود. اما در سایر بیماران قلبی، با نظارت پزشک و پایش هولتر ممکن است قابل استفاده باشد."
    },
    {
      question: "چرا داروهای پروستات باعث سرگیجه می‌شوند؟",
      answer: "داروهای آلفابلاکر (مانند تامسولوسین) عروق را شل می‌کنند. این کار هم به دفع ادرار کمک می‌کند و هم باعث افت فشار خون می‌شود. وقتی از حالت نشسته یا خوابیده بلند می‌شوید، خون در پاها می‌ماند و به مغز نمی‌رسد (سنکوپ)."
    },
    {
      question: "آیا می‌توانم همزمان داروی فشار خون و داروی پروستات مصرف کنم؟",
      answer: "بله، اما با احتیاط. هر دو گروه دارویی فشار خون را کاهش می‌دهند. پزشک باید دوز داروها را تنظیم کند و با هولتر فشار خون ۲۴ ساعته، امنیت ترکیب داروها را بررسی کند."
    },
    {
      question: "چه زمانی باید به پزشک مراجعه کنم؟",
      answer: "اگر بعد از مصرف داروهای جنسی دچار سرگیجه شدید، تپش قلب، درد قفسه سینه، تاری دید یا عرق سرد شدید، فوراً با اورژانس تماس بگیرید. این علائم نشانه تداخل دارویی خطرناک هستند."
    },
    {
      question: "هولتر قلب چطور به تشخیص تداخل دارویی کمک می‌کند؟",
      answer: "هولتر قلب فعالیت برقی قلب شما را ۲۴ ساعته ثبت می‌کند. اگر داروها باعث آریتمی یا تپش قلب جبرانی ناشی از افت فشار شوند، در هولتر مشخص می‌شود و پزشک می‌تواند داروها را تنظیم کند."
    }
  ];

  const relatedArticles = [
    {
      title: "حجم نرمال پروستات",
      slug: "/articles/prostate-volume",
      image: prostateVolumeImage
    },
    {
      title: "هولتر مانیتورینگ قلب",
      slug: "/articles/holter",
      image: holterImage
    },
    {
      title: "اکوکاردیوگرافی در منزل",
      slug: "/articles/echo",
      image: echoImage
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تداخلات دارویی قلب، پروستات و ناتوانی جنسی | خطرات ویاگرا و نیترات | نوید زندگی"
        description="راهنمای کامل تداخلات خطرناک داروهای قلبی با داروهای پروستات و ناتوانی جنسی. مکانیسم خطر، علائم هشداردهنده و نقش هولتر و اکو در پایش ایمنی دارو."
        keywords="تداخل دارویی ویاگرا و قلب، عوارض قرص پروستات، هولتر فشار خون در منزل، ناتوانی جنسی در بیماران قلبی، سیلدنافیل و نیترات، تامسولوسین و فشار خون"
        canonical="https://navidzendegi.ir/articles/drug-interactions-heart-prostate"
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={publishDate}
      />
      
      <SEOSchema
        type="article"
        title="تداخلات دارویی خطرناک؛ مثلث قلب، پروستات و ناتوانی جنسی"
        description="راهنمای کامل تداخلات داروهای قلبی، پروستات و ناتوانی جنسی و نقش پایش‌های هولتر و اکو در مدیریت ایمن"
        publishedTime={publishDate}
        modifiedTime={publishDate}
        image={drugInteractionsImage}
      />

      <SEOSchema
        type="faq"
        faqs={faqs}
      />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />
          
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img 
                src={drugInteractionsImage} 
                alt="تداخلات دارویی قلب، پروستات و ناتوانی جنسی"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                تاریخ انتشار: ۱۱ بهمن ۱۴۰۴
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-relaxed">
              تداخلات دارویی خطرناک؛ مثلث قلب، پروستات و ناتوانی جنسی
            </h1>

            <p className="text-xl leading-relaxed mb-8 text-foreground">
              بسیاری از آقایان با افزایش سن، به طور همزمان با سه چالش روبرو می‌شوند: فشار خون یا بیماری قلبی، بزرگی پروستات، و ناتوانی جنسی. نکته بحرانی اینجاست که داروهای مورد استفاده برای این سه حوزه، همگی بر روی قطر عروق و جریان خون تأثیر می‌گذارند.
            </p>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-destructive">هشدار مهم</h3>
                  <p className="text-foreground">
                    مصرف همزمان داروهای قلب، پروستات و ناتوانی جنسی بدون نظارت پزشک می‌تواند مانند یک <strong>بمب ساعتی</strong> عمل کند و منجر به افت فشار خون مرگبار یا آریتمی‌های خطرناک شود.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              ما در مرکز <Link to="/" className="text-primary hover:underline">نوید زندگی</Link>، با <Link to="/services/internal" className="text-primary hover:underline">ویزیت متخصص داخلی در منزل</Link> و پایش‌های پیشرفته، امنیت شما را در حین درمان این مشکلات تضمین می‌کنیم.
            </p>

            {/* بخش ۱: نیترات و ویاگرا */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۱. ترکیب مرگبار: نیترات‌های قلبی و داروهای ناتوانی جنسی
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                اگر از داروهای قلبی حاوی <strong>نیترات</strong> (مانند نیتروگلیسیرین زیرزبانی یا ایزوسورباید) استفاده می‌کنید، مصرف داروهای ناتوانی جنسی (مانند سیلدنافیل/ویاگرا یا تادالافیل/سیالیس) برای شما <strong>به شدت خطرناک</strong> است.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">مکانیسم خطر</h3>
                <p className="text-lg leading-relaxed">
                  هر دو گروه دارویی باعث گشاد شدن عروق می‌شوند. ترکیب آن‌ها می‌تواند فشار خون را به قدری پایین بیاورد که اکسیژن کافی به مغز و قلب نرسد (<strong>شوک هیپوتانسیو</strong>).
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                <strong>راهکار نوید زندگی:</strong> برای این بیماران، ما با استفاده از <Link to="/articles/holter" className="text-primary hover:underline">هولتر فشار خون ۲۴ ساعته در منزل</Link>، نوسانات فشار را رصد می‌کنیم تا مرز ایمن مصرف داروها مشخص شود.
              </p>
            </section>

            {/* بخش ۲: پروستات و قلب */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۲. پروستات و قلب؛ چالش فشار خون
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                داروهای رایج برای درمان بزرگی پروستات (مانند <strong>تامسولوسین</strong> و <strong>ترازوسین</strong>) که با نام آلفابلاکر شناخته می‌شوند، عروق را شل می‌کنند تا ادرار راحت‌تر دفع شود. اما همین داروها می‌توانند اثر داروهای فشار خون شما را تشدید کنند.
              </p>

              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">عارضه سنکوپ</h3>
                <p className="text-lg leading-relaxed">
                  افت فشار خون ناگهانی هنگام بلند شدن (سیاهی رفتن چشم) که باعث <strong>زمین‌خوردن و شکستگی</strong> در سالمندان می‌شود.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                <strong>نقش هولتر و اکو:</strong> متخصصین ما با انجام <Link to="/articles/echo" className="text-primary hover:underline">اکو در منزل</Link> قدرت قلب شما را می‌سنجند و با نصب <Link to="/articles/holter" className="text-primary hover:underline">هولتر قلب</Link>، بررسی می‌کنند که آیا این افت فشار باعث آریتمی (تپش قلب جبرانی) می‌شود یا خیر.
              </p>
            </section>

            {/* بخش ۳: تأثیر بر ریتم قلب */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۳. تأثیر داروهای ناتوانی جنسی بر ریتم قلب
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                داروهای درمان ناتوانی جنسی می‌توانند روی سیستم برقی قلب اثر بگذارند. در افرادی که سابقه <strong>آریتمی</strong> دارند، این داروها ممکن است باعث تشدید حملات تپش قلب شوند.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                <strong>پایش هوشمند:</strong> اگر نگران اثر این داروها بر قلب خود هستید، تیم نوید زندگی با نصب <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب در منزل</Link>، فعالیت برقی قلب شما را در شرایط عادی زندگی ثبت می‌کند تا ایمن بودن مصرف این داروها برای شما تأیید شود.
              </p>
            </section>

            {/* بخش ۴: چک‌آپ در منزل */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۴. چرا چک‌آپ در منزل «نوید زندگی» برای آقایان ضروری است؟
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                بسیاری از آقایان به دلیل خجالت، مشکلات جنسی خود را به پزشک قلب نمی‌گویند. در محیط آرام منزل:
              </p>

              <ul className="space-y-4 text-lg mb-6 mr-6">
                <li className="leading-relaxed">
                  <strong>ویزیت محرمانه:</strong> متخصص داخلی ما در فضایی خصوصی، تمامی داروهای شما (قلب، پروستات و جنسی) را بازبینی می‌کند.
                </li>
                <li className="leading-relaxed">
                  <strong>سونوگرافی و اکو همزمان:</strong> همزمان با بررسی <Link to="/articles/prostate-volume" className="text-primary hover:underline">پروستات در سونوگرافی در منزل</Link>، وضعیت قلب شما نیز با اکو بررسی می‌شود تا از سلامت دریچه‌ها و عروق اطمینان حاصل شود.
                </li>
                <li className="leading-relaxed">
                  <strong>آزمایش هورمونی:</strong> ما در منزل از شما <Link to="/services/laboratory" className="text-primary hover:underline">نمونه‌گیری خون</Link> انجام می‌دهیم تا سطح تستوسترون و PSA (پروستات) به همراه فاکتورهای قلبی بررسی شود.
                </li>
              </ul>
            </section>

            {/* بخش ۵: علائم خطرناک */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                ۵. علائم خطرناک تداخل دارویی که باید جدی بگیرید
              </h2>
              
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-lg">
                  <li>• سرگیجه شدید یا احساس سبکی سر هنگام برخاستن</li>
                  <li>• تپش قلب شدید و ناگهانی</li>
                  <li>• تاری دید یا عرق سرد</li>
                  <li>• درد قفسه سینه که پس از مصرف داروهای جنسی ایجاد شود</li>
                </ul>
                <p className="mt-4 font-bold text-destructive">
                  در صورت بروز این علائم، فوراً با اورژانس تماس بگیرید یا با شماره <a href="tel:09386117912" className="underline">09386117912</a> تماس بگیرید.
                </p>
              </div>
            </section>

            {/* هشدار خوددرمانی */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-destructive">هشدار خوددرمانی</h3>
                  <p className="text-foreground">
                    هرگز بدون مشورت با پزشک، داروهای ناتوانی جنسی را همراه با داروهای قلب یا پروستات مصرف نکنید. حتی داروهای گیاهی و مکمل‌های جنسی می‌توانند تداخلات خطرناکی ایجاد کنند. برای مشاوره تخصصی با <a href="tel:09386117912" className="text-primary hover:underline font-bold">09386117912</a> تماس بگیرید.
                  </p>
                </div>
              </div>
            </div>

            {/* نتیجه‌گیری */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                نتیجه‌گیری
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                سلامت جنسی و ارولوژی نباید سلامت قلب شما را به خطر بیندازد. تداخلات دارویی در آقایان سالمند بسیار پیچیده است. مرکز نوید زندگی با ترکیب خدمات <Link to="/services/internal" className="text-primary hover:underline">ویزیت متخصص داخلی</Link>، <Link to="/services/holter" className="text-primary hover:underline">هولتر قلب و فشار خون</Link>، <Link to="/services/echo" className="text-primary hover:underline">اکو</Link> و <Link to="/services/ultrasound" className="text-primary hover:underline">سونوگرافی در منزل</Link>، این اطمینان را به شما می‌دهد که درمان شما موثر و بدون ریسک خواهد بود.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                برای مشاوره تخصصی داروهای قلب و پروستات تماس بگیرید
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                ویزیت محرمانه در منزل همراه با هولتر، اکو و آزمایش خون
              </p>
              <a 
                href="tel:09386117912" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg text-xl font-bold"
              >
                <Phone className="ml-2 h-6 w-6" />
                09386117912
              </a>
            </section>

            {/* منابع */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-foreground">
                منابع معتبر علمی
              </h2>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• American Heart Association (AHA): Sexual Activity and Cardiovascular Disease</li>
                <li>• Journal of Sexual Medicine: Drug interactions between PDE5 inhibitors and Alpha-blockers</li>
                <li>• Harvard Health Publishing: Treating BPH and Heart Disease simultaneously</li>
                <li>• Mayo Clinic: Erectile dysfunction medications: Are they safe if you have heart disease?</li>
              </ul>
            </section>
          </article>

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Related Articles */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">مقالات مرتبط</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <Link 
                  key={index} 
                  to={article.slug}
                  className="group block"
                >
                  <div className="rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </ArticleLayout>
  );
};

export default DrugInteractionsHeartProstatePage;
