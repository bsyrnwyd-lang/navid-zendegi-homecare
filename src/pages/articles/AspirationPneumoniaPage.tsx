import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import aspirationPneumoniaImage from "@/assets/aspiration-pneumonia.jpg";

const AspirationPneumoniaPage = () => {
  const faqs = [
    {
      question: "ذات‌الریه آسپیراسیونی چیست؟",
      answer: "ذات‌الریه آسپیراسیونی عفونت ریه‌ای است که زمانی رخ می‌دهد که مواد دهانی یا معده‌ای (مثل بزاق، غذا، محتویات معده) به مسیر هوایی پایین‌تر وارد شوند و باعث التهاب یا عفونت شوند."
    },
    {
      question: "چه کسانی بیشتر در معرض خطر ذات‌الریه آسپیراسیونی هستند؟",
      answer: "افراد مسن، بیماران بستری، افرادی با اختلالات بلع، بیماران عصبی (سکته، پارکینسون، دمانس)، افراد با تغذیه لوله‌ای و کسانی با کاهش سطح هوشیاری بیشتر در معرض خطر هستند."
    },
    {
      question: "علائم ذات‌الریه آسپیراسیونی چیست؟",
      answer: "علائم شامل سرفه (اغلب با خلط بدبو یا خون)، تب، تنگی‌نفس، درد قفسه‌سینه و ضعف عمومی است. در سالمندان ممکن است علائم غیرمعمول مثل سردرگمی دیده شود."
    },
    {
      question: "چگونه می‌توان از ذات‌الریه آسپیراسیونی پیشگیری کرد؟",
      answer: "پیشگیری شامل تغییر بافت غذا و مایعات، نشستن در وضعیت مناسب هنگام غذا خوردن، بالا بردن سر تخت (حداقل 30 درجه)، و مراقبت منظم دهان و دندان است."
    },
    {
      question: "درمان ذات‌الریه آسپیراسیونی چگونه است؟",
      answer: "درمان شامل آنتی‌بیوتیک مناسب، مراقبت حمایتی، اکسیژن در صورت نیاز و مدیریت عوامل خطر است. در موارد شدید ممکن است تهویه مکانیکی یا اقدامات تخصصی‌تر لازم باشد."
    }
  ];

  const relatedArticles = [
    {
      title: "درمان تنگی نفس در منزل",
      description: "راهنمای جامع درمان و مدیریت تنگی نفس با ویزیت پزشک در منزل",
      image: "/src/assets/shortness-breath-treatment.jpg",
      link: "/articles/breathing-treatment",
      category: "تنفسی"
    },
    {
      title: "راهنمای مراقبت از سالمندان در منزل",
      description: "نکات کلیدی برای مراقبت ایمن و موثر از سالمندان در منزل",
      image: "/src/assets/elderly-care-home.jpg",
      link: "/articles/elderly-care-guide",
      category: "مراقبت"
    },
    {
      title: "تب در بزرگسالان",
      description: "راهنمای جامع تشخیص و درمان تب در بزرگسالان",
      image: "/src/assets/adult-fever-article.jpg",
      link: "/articles/adult-fever",
      category: "عمومی"
    }
  ];

  return (
    <>
      <SEOHead
        title="ذات‌الریه آسپیراسیونی؛ علل، تشخیص، درمان و پیشگیری | نوید زندگی"
        description="راهنمای جامع ذات‌الریه آسپیراسیونی: علل، عوامل خطر، علائم، تشخیص، درمان و روش‌های پیشگیری. مشاوره پزشکی در منزل با نوید زندگی"
        keywords="ذات‌الریه آسپیراسیونی, aspiration pneumonia, عفونت ریه, اختلال بلع, پزشک در منزل, مراقبت سالمندان"
        canonical="https://navidzendegi.com/articles/aspiration-pneumonia"
        ogImage={aspirationPneumoniaImage}
        ogType="article"
        publishedTime="2025-01-14T10:00:00+03:30"
        modifiedTime="2025-01-14T10:00:00+03:30"
      />


      <ArticleSchema
        title="ذات‌الریه آسپیراسیونی؛ علل، تشخیص، درمان و پیشگیری"
        description="راهنمای جامع ذات‌الریه آسپیراسیونی شامل علل، عوامل خطر، علائم، تشخیص، درمان و روش‌های پیشگیری"
        publishedTime="2025-01-14T10:00:00+03:30"
        modifiedTime="2025-01-14T10:00:00+03:30"
        image={aspirationPneumoniaImage}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8 mt-16">
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src={aspirationPneumoniaImage}
                alt="ذات‌الریه آسپیراسیونی - عفونت ریه ناشی از آسپیراسیون مواد دهانی"
                className="w-full h-auto rounded-lg shadow-lg mb-6"
                loading="eager"
              />
              
              <h1 className="text-4xl font-bold text-foreground mb-4">
                ذات‌الریه آسپیراسیونی؛ علل، تشخیص، درمان و پیشگیری
              </h1>
            </div>

            <div className="prose prose-lg max-w-none text-foreground space-y-6">
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">مقدمه</h2>
                <p className="leading-relaxed">
                  ذات‌الریه آسپیراسیونی (aspiration pneumonia) نوعی عفونت ریه است که زمانی رخ می‌دهد که مواد دهانی یا معده‌ای (مثل بزاق، غذا، محتویات معده) به مسیر هوایی پایین‌تر (ریه) وارد شوند و باعث التهاب یا عفونت شوند.
                </p>
                <p className="leading-relaxed">
                  این وضعیت خطرناک‌تر از ذات‌الریه معمولی است و در افراد مسن یا دارای مشکلات بلع، <Link to="/services/neurology" className="text-primary hover:underline">اختلالات عصبی</Link>، بستری بودن یا تغذیه لوله‌ای شیوع بیشتری دارد.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">علل و عوامل خطر</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">علل آسپیراسیون</h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>اختلال در بلع (دیسفاژیا) یا کاهش رفلکس سرفه</li>
                  <li>کاهش سطح هوشیاری یا بی‌هوشی، مصرف الکل یا داروهای خواب‌آور</li>
                  <li>استقرار بدن (مثلاً خوابیده یا نیمه‌نشسته) یا تغذیه لوله‌ای معده/روده</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">عوامل خطر</h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>سن بالا، بستری بودن، ضعف عمومی، بیماری‌های عصبی مانند <Link to="/articles/stroke-symptoms" className="text-primary hover:underline">سکته</Link>، پارکینسون، دمانس</li>
                  <li>مشکلات دهانی یا بهداشت ضعیف دهان و دندان</li>
                  <li>رفلاکس معده به مری یا اختلالات مری</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">چگونگی ایجاد بیماری (پاتوفیزیولوژی)</h2>
                <p className="leading-relaxed">
                  وقتی مواد آلوده یا باکتریال از دهان یا معده وارد ریه می‌شوند، دفاع‌های طبیعی ریه مانند سرفه، مژک‌ها (cilia) یا سیستم ایمنی نمی‌توانند به‌خوبی عمل کنند. نتیجه این می‌شود که باکتری‌ها رشد می‌کنند، التهاب رخ می‌دهد، و گاهی منجر به آبسه ریه یا تجمع چرک (امپیه‌ما) می‌شود.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">علائم و تشخیص</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">علائم غالب</h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>سرفه، اغلب با خلط یا بوی بد یا خون</li>
                  <li><Link to="/articles/adult-fever" className="text-primary hover:underline">تب</Link>، تنگی‌نفس، درد قفسه‌سینه، ضعف عمومی</li>
                  <li>در افراد سالخورده ممکن است علائم غیر‌معمول‌تر مثل سردرگمی یا تشدید بیماری ملایم رخ دهد</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">تشخیص</h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>سابقه «نشست یا غذا خوردن با ریسک آسپیراسیون»، بلع ضعیف، تغذیه لوله‌ای یا اختلال شناختی</li>
                  <li>تصویربرداری قفسه‌سینه (اشعه X یا CT) نشان‌دهنده Consolidation در لوب‌های تحتانی است</li>
                  <li>کشت خلط یا ارزیابی باکتریایی ممکن است در درمان راهنمایی کند</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">درمان و مدیریت</h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">درمان</h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>شروع سریع آنتی‌بیوتیک مناسب با پوشش باکتری‌های دهانی و غالباً گرم-منفی/گرم-مثبت، براساس راهنماهای بالینی</li>
                  <li>در موارد آسپیراسیون عمده (مثلاً با محتویات معده) ممکن است مراقبت حمایتی، اکسیژن، تهویه باشد</li>
                  <li>در صورت بروز عارضه مثل آبسه ریه یا امپیه‌ما، ممکن است اقدامات تخصصی‌تر لازم شود</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">پیشگیری</h3>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>در بیماران دارای ضعف بلع، تغییر بافت غذا و مایعات به بافت­های نرم‌تر، و آموزش وضعیت مناسب غذا خوردن (نشسته، با پشت خمیده کمتر) توصیه می‌شود</li>
                  <li>بالا بردن سر تخت به حداقل ۳۰ درجه در بیمار بستری یا تغذیه لوله‌ای</li>
                  <li>مراقبت دهان و دندان منظم برای کاهش بار باکتریایی دهان</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">اهمیت برای خدمات پزشکی در منزل</h2>
                <p className="leading-relaxed">
                  برای فردی که شرایط زیر دارد، استفاده از خدمات <Link to="/general-doctor" className="text-primary hover:underline">ویزیت پزشک در منزل</Link> در سایت navidzendegi.com بسیار مفید است:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>بعد از <Link to="/articles/stroke-symptoms" className="text-primary hover:underline">سکته مغزی</Link> یا نارسایی عصبی و اختلال بلع</li>
                  <li>سالمندی با تغذیه کاهش‌یافته و سابقه لوله گوارش</li>
                  <li>تغییر وضعیت بدن (با نشستن طولانی یا بستری بودن)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  پزشک در منزل می‌تواند:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>ارزیابی بلع، وضعیت تغذیه و خطر آسپیراسیون را انجام دهد</li>
                  <li>توصیه‌های تغذیه‌ای، وضعیت مناسب خواب، مراقبت دهان را تنظیم کند</li>
                  <li>در صورت لزوم هماهنگی با متخصص ریه، عفونی یا تغذیه را انجام دهد</li>
                </ul>
              </section>

              <section className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  نیاز به مشاوره پزشکی دارید؟
                </h3>
                <p className="leading-relaxed mb-4">
                  برای ارزیابی خطر آسپیراسیون، مدیریت مشکلات بلع، یا <Link to="/articles/elderly-care-guide" className="text-primary hover:underline">مراقبت از سالمندان</Link> در منزل، با ما تماس بگیرید.
                </p>
                <a 
                  href="tel:09386117912"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <span>تماس: 09386117912</span>
                </a>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">جمع‌بندی</h2>
                <p className="leading-relaxed">
                  ذات‌الریه آسپیراسیونی یک وضعیت جدی است که اغلب در افراد دارای عوامل خطر رخ می‌دهد. تشخیص زودهنگام، درمان مناسب و اقدامات پیشگیرانه می‌توانند به کاهش عوارض کمک کنند. اگر در فردی با ضعف بلع یا تغذیه مشکل دارید، مراجعه به پزشک و در صورت نیاز استفاده از خدمات پزشکی در منزل توصیه می‌شود.
                </p>
              </section>

              <section className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">منابع (References)</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground mr-4">
                  <li>Sanivarapu R.R., Vaqar S., Gibson J. Aspiration Pneumonia. StatPearls Publishing; 2024.</li>
                  <li>Mandell L.A., et al. Aspiration Pneumonia (NEJM Review). N Engl J Med. 2019.</li>
                  <li>Almirall J. et al. Aspiration pneumonia: A renewed perspective and review. Respiratory Medicine. 2021.</li>
                  <li>Overview of Aspiration Pneumonia. Medscape. 2024.</li>
                  <li>Komiya K. et al. Prognostic implications of aspiration pneumonia in patients with community-acquired pneumonia. Sci Rep. 2016.</li>
                  <li>BTS clinical statement on aspiration pneumonia. British Thoracic Society.</li>
                  <li>Lisiecka D., et al. Aspiration pneumonia in nursing literature—a mapping review. Frontiers in Rehabilitation Sciences. 2024.</li>
                </ol>
              </section>
            </div>

            <FAQSection faqs={faqs} />
            <RelatedArticles articles={relatedArticles} />
            <PricingInfo />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AspirationPneumoniaPage;
