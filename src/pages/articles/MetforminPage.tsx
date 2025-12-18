import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import metforminImage from "@/assets/metformin-medication.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";
import diabetesPregnancyImage from "@/assets/diabetes-pregnancy.jpg";
import weightLossInjectionsImage from "@/assets/weight-loss-injection-article.jpg";

const MetforminPage = () => {
  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "متفورمین", url: "/articles/metformin" }
  ];

  const faqs = [
    {
      question: "آیا متفورمین باعث لاغری می‌شود؟",
      answer: "متفورمین به طور رسمی داروی لاغری نیست، اما برخی افراد با مقاومت به انسولین ممکن است با مصرف آن کاهش وزن متوسطی را تجربه کنند. این اثر به دلیل بهبود متابولیسم گلوکز و کاهش اشتها در برخی بیماران است."
    },
    {
      question: "بهترین زمان مصرف متفورمین چه زمانی است؟",
      answer: "برای کاهش عوارض گوارشی، متفورمین باید همراه با وعده غذایی اصلی (معمولاً صبحانه یا شام) مصرف شود. در صورت مصرف دو بار در روز، یکی همراه صبحانه و دیگری همراه شام توصیه می‌شود."
    },
    {
      question: "آیا می‌توانم همزمان با متفورمین الکل بنوشم؟",
      answer: "مصرف الکل همراه با متفورمین به شدت خطرناک است و می‌تواند خطر اسیدوز لاکتیک را افزایش دهد. الکل همچنین می‌تواند قند خون را به شدت کاهش دهد. از مصرف الکل خودداری کنید یا قبل از مصرف با پزشک مشورت کنید."
    },
    {
      question: "چرا باید قبل از سی‌تی‌اسکن متفورمین را قطع کنم؟",
      answer: "مواد حاجب مورد استفاده در سی‌تی‌اسکن می‌توانند به طور موقت عملکرد کلیه را تحت تأثیر قرار دهند. از آنجایی که متفورمین از طریق کلیه دفع می‌شود، تجمع آن در این شرایط می‌تواند خطر اسیدوز لاکتیک را افزایش دهد."
    },
    {
      question: "آیا متفورمین برای سندرم تخمدان پلی‌کیستیک (PCOS) مفید است؟",
      answer: "بله، متفورمین یکی از درمان‌های رایج PCOS است. با کاهش سطح انسولین و آندروژن‌ها، به تنظیم چرخه قاعدگی، بهبود تخمک‌گذاری و کاهش علائم مانند آکنه و رشد موی زائد کمک می‌کند."
    }
  ];

  const relatedArticles = [
    {
      title: "راهنمای کامل دیابت: از شناخت تا مدیریت هوشمند",
      description: "انواع دیابت، علائم، تشخیص و روش‌های مدیریت",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "سلامت عمومی"
    },
    {
      title: "دیابت بارداری: تشخیص، مدیریت و نکات مهم",
      description: "راهنمای مدیریت دیابت در دوران بارداری",
      image: diabetesPregnancyImage,
      link: "/articles/diabetes-pregnancy",
      category: "زنان"
    },
    {
      title: "آمپول‌های لاغری: سماگلوتاید و لیراگلوتاید",
      description: "بررسی علمی داروهای GLP-1 برای کاهش وزن",
      image: weightLossInjectionsImage,
      link: "/articles/weight-loss-injections",
      category: "دارو"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="متفورمین (Metformin): راهنمای کامل مکانیسم اثر و کاربردها | نوید زندگی"
        description="راهنمای جامع متفورمین شامل مکانیسم اثر، کاربردها در دیابت نوع ۲ و PCOS، عوارض گوارشی، اسیدوز لاکتیک و نکات مهم مصرف"
        keywords="متفورمین، گلوکوفاژ، دیابت نوع 2، مقاومت به انسولین، PCOS، سندرم تخمدان پلی‌کیستیک، کاهش قند خون"
        canonical="https://navidzendegi.com/articles/metformin"
        ogType="article"
        publishedTime="2024-12-18"
        modifiedTime="2024-12-18"
      />
      <ArticleSchema
        title="متفورمین (Metformin): راهنمای کامل مکانیسم اثر و کاربردها"
        description="راهنمای جامع متفورمین شامل مکانیسم اثر، کاربردها در دیابت نوع ۲ و PCOS، عوارض گوارشی و نکات مهم"
        publishedTime="2024-12-18"
        modifiedTime="2024-12-18"
        image={metforminImage}
      />

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>

        <article className="container mx-auto max-w-4xl px-4">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              متفورمین (Metformin): راهنمای کامل مکانیسم اثر، کاربردها و مراقبت‌های پزشکی
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              متفورمین (با نام‌های تجاری مانند گلوکوفاژ) پرمصرف‌ترین داروی خط اول برای درمان دیابت نوع ۲ در جهان است. این دارو به دسته‌ای از داروها به نام بیگوانیدها (Biguanides) تعلق دارد. برخلاف بسیاری از داروهای دیابت، متفورمین باعث افزایش ترشح انسولین نمی‌شود، بلکه نحوه پاسخ بدن به انسولین را بهبود می‌بخشد.
            </p>
          </header>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
            <p className="text-destructive font-medium">
              ⚠️ هشدار: اطلاعات این مقاله صرفاً جنبه آموزشی دارد. هرگز بدون مشورت با پزشک متخصص، متفورمین را شروع، قطع یا تغییر دوز ندهید.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۱. متفورمین چگونه در بدن عمل می‌کند؟ (مکانیسم اثر)
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              متفورمین از سه طریق اصلی به کاهش قند خون کمک می‌کند:
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">کاهش تولید قند در کبد</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              کبد در حالت عادی قند ذخیره شده را آزاد می‌کند. متفورمین فرآیند گلوکونئوژنز (ساخت قند جدید در کبد) را مهار می‌کند. این مهم‌ترین مکانیسم اثر متفورمین محسوب می‌شود.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">افزایش حساسیت به انسولین</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              این دارو حساسیت سلول‌های عضلانی و بافتی را به انسولین افزایش می‌دهد و باعث می‌شود گلوکز (قند) موجود در خون راحت‌تر وارد سلول‌ها شده و به انرژی تبدیل شود.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">کاهش جذب قند</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              جذب گلوکز از طریق دستگاه گوارش و روده‌ها را به تأخیر می‌اندازد.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۲. کاربردهای درمانی متفورمین
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              گرچه کاربرد اصلی آن دیابت است، اما در موارد دیگر نیز تجویز می‌شود:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">دیابت نوع ۲</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              به عنوان داروی اصلی برای کنترل قند خون همراه با رژیم غذایی و ورزش. متفورمین معمولاً اولین دارویی است که برای دیابت نوع ۲ تجویز می‌شود.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">سندرم تخمدان پلی‌کیستیک (PCOS)</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              در زنان مبتلا به PCOS، متفورمین با کاهش سطح انسولین و آندروژن‌ها به تنظیم چرخه قاعدگی و تخمک‌گذاری کمک می‌کند. این کاربرد برای زنانی که قصد باردار شدن دارند بسیار مهم است.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">پیش‌دیابت (Pre-diabetes)</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              برای جلوگیری یا تأخیر در بروز دیابت نوع ۲ در افراد در معرض خطر. مطالعات نشان داده متفورمین می‌تواند خطر پیشرفت پیش‌دیابت به دیابت را تا ۳۱ درصد کاهش دهد.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">مدیریت وزن</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              در برخی موارد، پزشکان متفورمین را برای کمک به کاهش وزن در افراد دارای مقاومت به انسولین تجویز می‌کنند. البته باید توجه داشت که این دارو به طور رسمی "قرص لاغری" نیست و نباید بدون تجویز پزشک برای این منظور استفاده شود.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۳. عوارض جانبی و چالش‌های گوارشی
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              شایع‌ترین دلیل قطع خودسرانه متفورمین، عوارض گوارشی آن است که معمولاً در ابتدای درمان رخ می‌دهد:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">عارضه جانبی</th>
                    <th className="border border-border p-3 text-right">راهکار کاهش عارضه</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">تهوع و استفراغ</td>
                    <td className="border border-border p-3">مصرف دارو همراه با وعده غذایی اصلی</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">اسهال و نفخ</td>
                    <td className="border border-border p-3">شروع با دوز پایین و افزایش تدریجی آن تحت نظر پزشک</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">طعم فلزی در دهان</td>
                    <td className="border border-border p-3">معمولاً با گذشت زمان برطرف می‌شود</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">کمبود ویتامین B12</td>
                    <td className="border border-border p-3">در مصرف طولانی‌مدت، پایش سطح B12 ضروری است</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-destructive mb-2">⚠️ هشدار جدی: اسیدوز لاکتیک</h3>
              <p className="text-foreground/90 leading-relaxed">
                یک عارضه بسیار نادر اما خطرناک، تجمع اسید لاکتیک در خون است. این وضعیت بیشتر در افرادی که مشکلات کلیوی شدید دارند رخ می‌دهد. علائم آن شامل ضعف شدید، خواب‌آلودگی غیرعادی، درد عضلانی و تنفس دشوار است. در صورت بروز این علائم، فوراً به اورژانس مراجعه کنید.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۴. ملاحظات مهم و نقش ویزیت پزشک در منزل
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              مصرف متفورمین نیازمند نظارت دقیق بر فاکتورهای خونی است. اینجاست که <a href="/services/internal-medicine" className="text-primary hover:underline">خدمات پزشک در منزل</a> اهمیت دوچندانی پیدا می‌کند:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">الف) پایش عملکرد کلیه</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              قبل از شروع متفورمین و به صورت دوره‌ای (حداقل سالی یک‌بار)، باید سطح کراتینین خون چک شود. اگر عملکرد کلیه از حد مشخصی پایین‌تر بیاید، دوز متفورمین باید تعدیل یا قطع شود. با خدمات <a href="/services/laboratory" className="text-primary hover:underline">نمونه‌گیری آزمایش در منزل</a>، تفسیر نتایج بدون نیاز به مراجعه به آزمایشگاه انجام می‌شود.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">ب) تنظیم دوز در سالمندان</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              سالمندان ممکن است به دلیل تغییر در عملکرد کلیه و کبد، نسبت به عوارض متفورمین حساس‌تر باشند. <a href="/services/specialist-doctor" className="text-primary hover:underline">پزشک متخصص در منزل</a> می‌تواند با معاینه دقیق، بهترین پروتکل درمانی را برای این افراد تنظیم کند.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">ج) تداخل با الکل و اشعه ایکس</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4 mr-4">
              <li>مصرف الکل همراه با متفورمین خطر اسیدوز لاکتیک را به شدت افزایش می‌دهد.</li>
              <li>اگر نیاز به تصویربرداری با مواد حاجب (مانند سی‌تی‌اسکن با تزریق) دارید، باید معمولاً ۴۸ ساعت قبل و بعد از آزمایش، مصرف متفورمین را قطع کنید.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ۵. نکات مهم در مصرف متفورمین
            </h2>
            <ul className="list-disc list-inside space-y-3 text-foreground/90 mr-4">
              <li>متفورمین را دقیقاً طبق دستور پزشک مصرف کنید.</li>
              <li>دارو را با وعده غذایی مصرف کنید تا عوارض گوارشی کاهش یابد.</li>
              <li>قرص را کامل ببلعید و آن را نجوید یا خرد نکنید.</li>
              <li>در صورت فراموش کردن یک دوز، به محض یادآوری آن را مصرف کنید، مگر اینکه به دوز بعدی نزدیک باشد.</li>
              <li>آزمایش‌های کلیوی را طبق برنامه پزشک انجام دهید.</li>
              <li>در صورت بروز علائم هیپوگلیسمی (افت قند خون)، فوراً مواد قندی مصرف کنید.</li>
            </ul>
          </section>

          <section className="mb-10 bg-primary/5 rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">
              💡 نکته کلیدی
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              متفورمین یکی از امن‌ترین و مؤثرترین داروهای دیابت است که بیش از ۶۰ سال سابقه استفاده دارد. با رعایت نکات مصرف صحیح و پایش منظم عملکرد کلیه، می‌توانید از مزایای این دارو بهره‌مند شوید. هرگونه تغییر در دوز یا قطع دارو باید حتماً با مشورت پزشک انجام شود.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/10 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              نیاز به مشاوره تخصصی دیابت دارید؟
            </h2>
            <p className="text-foreground/90 mb-4">
              تیم پزشکی نوید زندگی با ارائه خدمات ویزیت پزشک متخصص در منزل، آمادگی کامل برای پایش و مدیریت دیابت شما را دارد. از نمونه‌گیری آزمایش خون تا تنظیم دوز داروها، همه در منزل شما انجام می‌شود.
            </p>
            <p className="text-lg font-bold text-primary">
              📞 تماس با ما: <a href="tel:09386117912" className="hover:underline">۰۹۳۸۶۱۱۷۹۱۲</a>
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-3">منابع (References)</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm mr-4">
              <li>Metformin: Side Effects, Dosage, Uses, and More. Healthline Medical Team.</li>
              <li>Mechanism of action of metformin. Diabetes Care Journal.</li>
              <li>Metformin for the treatment of polycystic ovary syndrome. The Lancet Diabetes & Endocrinology.</li>
              <li>Metformin-associated lactic acidosis. UpToDate Clinical Database.</li>
            </ul>
          </section>
        </article>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          <FAQSection faqs={faqs} />
        </div>

        <div className="container mx-auto max-w-4xl px-4">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default MetforminPage;
