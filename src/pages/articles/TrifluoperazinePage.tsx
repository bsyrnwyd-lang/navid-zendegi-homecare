import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import trifluoperazineImage from "@/assets/trifluoperazine-medication.jpg";
import sertralineImage from "@/assets/sertraline-medication.jpg";
import depressionImage from "@/assets/depression-article.jpg";
import psychiatryImage from "@/assets/psychiatry-home-visit.jpg";

const TrifluoperazinePage = () => {
  const breadcrumbItems = [
    { name: "مقالات", url: "/articles" },
    { name: "دارو", url: "/articles?category=دارو" },
    { name: "تری‌فلوئوپرازین", url: "/articles/trifluoperazine" }
  ];

  const faqs = [
    {
      question: "تری‌فلوئوپرازین برای چه بیماری‌هایی استفاده می‌شود؟",
      answer: "تری‌فلوئوپرازین عمدتاً برای درمان اختلالات روان‌پریشی مانند اسکیزوفرنی و در دوزهای پایین‌تر برای درمان کوتاه‌مدت اضطراب شدید غیرروان‌پریشی استفاده می‌شود."
    },
    {
      question: "مهم‌ترین عوارض جانبی تری‌فلوئوپرازین چیست؟",
      answer: "علائم خارج هرمی (EPS) شامل آکاتیزیا، دیستونی و پارکینسونیسم شایع‌ترین عوارض هستند. دیسکینزی دیررس (TD) یک عارضه جدی و بالقوه برگشت‌ناپذیر است که با مصرف طولانی‌مدت ممکن است ایجاد شود."
    },
    {
      question: "آیا تری‌فلوئوپرازین برای سالمندان مناسب است؟",
      answer: "خیر، FDA هشدار داده که داروهای آنتی‌سایکوتیک در سالمندان مبتلا به روان‌پریشی مرتبط با زوال عقل خطر مرگ را افزایش می‌دهند و برای این گروه توصیه نمی‌شوند."
    },
    {
      question: "سندرم بدخیم نورولپتیک چیست؟",
      answer: "NMS یک عارضه نادر اما بالقوه کشنده است که با تب بالا، سفتی شدید عضلات، تغییرات وضعیت روانی و بی‌ثباتی خودکار مشخص می‌شود. در صورت بروز، باید فوراً دارو قطع شود."
    },
    {
      question: "آیا می‌توان تری‌فلوئوپرازین را خودسرانه قطع کرد؟",
      answer: "خیر، قطع ناگهانی این دارو می‌تواند عوارض ترک ایجاد کند. کاهش تدریجی دوز تحت نظارت پزشک الزامی است."
    }
  ];

  const relatedArticles = [
    {
      title: "سرترالین: کاربردها و عوارض",
      description: "راهنمای جامع داروی سرترالین برای درمان افسردگی و اضطراب",
      image: sertralineImage,
      link: "/articles/sertraline",
      category: "دارو"
    },
    {
      title: "افسردگی: علائم و درمان",
      description: "شناخت علائم افسردگی و روش‌های درمانی موثر",
      image: depressionImage,
      link: "/articles/depression",
      category: "سلامت روان"
    },
    {
      title: "ویزیت روانپزشک در منزل",
      description: "خدمات مشاوره و ویزیت تخصصی روانپزشکی در منزل",
      image: psychiatryImage,
      link: "/services/psychiatry",
      category: "خدمات"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="تری‌فلوئوپرازین: موارد مصرف، عوارض و هشدارها | نوید زندگی"
        description="راهنمای جامع داروی تری‌فلوئوپرازین شامل مکانیسم اثر، موارد مصرف در اسکیزوفرنی و اضطراب، عوارض جانبی خارج هرمی و هشدارهای حیاتی"
        keywords="تری‌فلوئوپرازین، آنتی‌سایکوتیک، اسکیزوفرنی، روان‌پریشی، عوارض خارج هرمی، دیسکینزی دیررس"
        canonical="https://navidzendegi.com/articles/trifluoperazine"
        ogType="article"
      />
      <ArticleSchema
        title="داروی تری‌فلوئوپرازین: آنتی‌سایکوتیک تیپیکال فنوتییازینی"
        description="راهنمای جامع داروی تری‌فلوئوپرازین شامل مکانیسم اثر، موارد مصرف و عوارض جانبی"
        publishedTime="2024-12-05"
        modifiedTime="2024-12-05"
        image={trifluoperazineImage}
      />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-4">
                داروی تری‌فلوئوپرازین (Trifluoperazine): یک آنتی‌سایکوتیک تیپیکال فنوتییازینی
              </h1>
              <img
                src={trifluoperazineImage}
                alt="داروی تری‌فلوئوپرازین برای درمان روان‌پریشی"
                className="w-full rounded-lg shadow-md mb-6"
              />
              <p className="text-muted-foreground">
                نویسنده: تیم پزشکی نوید زندگی | تاریخ انتشار: ۱۴۰۳/۰۹/۱۵
              </p>
            </header>

            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
              <p className="text-destructive font-bold mb-2">⚠️ هشدار مهم:</p>
              <p className="text-foreground">
                مصرف خودسرانه داروهای روانپزشکی خطرناک است. تری‌فلوئوپرازین باید فقط با تجویز متخصص اعصاب و روان مصرف شود.
              </p>
            </div>

            <p className="text-foreground leading-relaxed mb-6">
              تری‌فلوئوپرازین یک داروی ضدروان‌پریشی تیپیکال (نسل اول) است که متعلق به دسته فنوتییازین‌ها (Phenothiazine) می‌باشد. این دارو به طور عمده برای درمان اختلالات روان‌پریشی جدی، مانند <a href="/articles/adhd" className="text-primary hover:underline">اسکیزوفرنی</a>، و در دوزهای پایین‌تر برای درمان کوتاه‌مدت اضطراب شدید غیرروان‌پریشی استفاده می‌شود.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              مکانیسم اثر (Mechanism of Action)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              تری‌فلوئوپرازین به عنوان یک آنتی‌سایکوتیک تیپیکال، اثرات درمانی و عوارض جانبی خود را از طریق مکانیسم‌های زیر اعمال می‌کند:
            </p>
            <ul className="list-disc pr-6 mb-6 space-y-2 text-foreground">
              <li><strong>آنتاگونیست گیرنده دوپامین D2:</strong> مکانیسم اصلی تری‌فلوئوپرازین، مسدود کردن گیرنده‌های دوپامین نوع D2 در مسیرهای مزولیمبیک مغز است. این مهار به کاهش علائم مثبت روان‌پریشی (مانند توهم و هذیان) کمک می‌کند.</li>
              <li><strong>اثر بر سیستم‌های دیگر:</strong> تری‌فلوئوپرازین همچنین دارای اثرات آنتاگونیستی بر گیرنده‌های هیستامین (H1) و آلفا-آدرنرژیک (α1) است، هرچند این اثرات نسبت به سایر فنوتییازین‌ها کمتر است.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              موارد مصرف اصلی
            </h2>
            <ul className="list-disc pr-6 mb-6 space-y-2 text-foreground">
              <li><strong>اختلالات روان‌پریشی:</strong> کنترل علائم حاد و مدیریت طولانی‌مدت اسکیزوفرنی</li>
              <li><strong>اضطراب غیرروان‌پریشی:</strong> در برخی موارد، برای مدیریت کوتاه‌مدت <a href="/articles/depression" className="text-primary hover:underline">اضطراب شدید</a> که به درمان‌های دیگر پاسخ نداده است (توجه: به دلیل عوارض جانبی، استفاده از آن در اضطراب محدود است)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              عوارض جانبی و هشدارهای جدی
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              تری‌فلوئوپرازین، مانند سایر آنتی‌سایکوتیک‌های تیپیکال، خطر بالایی برای عوارض جانبی مربوط به سیستم عصبی خارج هرمی دارد:
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              عوارض جانبی شایع
            </h3>
            <ul className="list-disc pr-6 mb-6 space-y-2 text-foreground">
              <li>خواب‌آلودگی و گیجی</li>
              <li>خشکی دهان، تاری دید، یبوست (اثرات آنتی‌کولینرژیک)</li>
              <li>افزایش وزن</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              عوارض جدی عصبی
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>علائم خارج هرمی (Extrapyramidal Symptoms - EPS):</strong> این شایع‌ترین عوارض جانبی جدی هستند:
            </p>
            <ul className="list-disc pr-6 mb-6 space-y-2 text-foreground">
              <li><strong>آکاتیزیا (Akathisia):</strong> احساس بی‌قراری شدید و نیاز به حرکت مداوم</li>
              <li><strong>دیستونی (Dystonia):</strong> انقباضات عضلانی غیرطبیعی و دردناک (مانند اسپاسم گردن)</li>
              <li><strong>پارکینسونیسم:</strong> سفتی عضلات، لرزش و کندی حرکات</li>
            </ul>

            <p className="text-foreground leading-relaxed mb-4">
              <strong>دیسکینزی دیررس (Tardive Dyskinesia - TD):</strong> یک اختلال حرکتی بالقوه برگشت‌ناپذیر که با حرکات غیرارادی و تکراری (معمولاً در زبان، لب‌ها، صورت و اندام‌ها) مشخص می‌شود. خطر TD با طولانی شدن مدت زمان درمان افزایش می‌یابد.
            </p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
              هشدارهای حیاتی (Critical Warnings)
            </h3>
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
              <p className="text-foreground mb-4">
                <strong>سندرم بدخیم نورولپتیک (Neuroleptic Malignant Syndrome - NMS):</strong> یک عارضه نادر اما بالقوه کشنده که با تب بالا، سفتی شدید عضلات، تغییرات وضعیت روانی و بی‌ثباتی خودکار (Autonomic Instability) مشخص می‌شود. در صورت بروز، باید فوراً دارو قطع و مراقبت‌های اورژانسی ارائه شود.
              </p>
              <p className="text-foreground">
                <strong>افزایش مرگ و میر در سالمندان:</strong> سازمان غذا و داروی آمریکا (FDA) هشدار می‌دهد که داروهای آنتی‌سایکوتیک، از جمله تری‌فلوئوپرازین، با افزایش خطر مرگ در سالمندان مبتلا به روان‌پریشی مرتبط با زوال عقل همراه هستند و برای این گروه سنی توصیه نمی‌شوند.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <p className="text-foreground">
                <strong>⚠️ توجه:</strong> تجویز تری‌فلوئوپرازین باید توسط یک <a href="/services/psychiatry" className="text-primary hover:underline">متخصص اعصاب و روان</a> انجام شود و به دلیل ریسک بالای EPS و TD، نیاز به نظارت منظم بر وضعیت عصبی و حرکتی بیمار دارد.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                مشاوره تخصصی روانپزشکی در منزل
              </h3>
              <p className="text-foreground mb-4">
                برای مشاوره تخصصی در مورد داروهای روانپزشکی و ویزیت در منزل با متخصص اعصاب و روان تماس بگیرید:
              </p>
              <Button asChild className="gap-2">
                <a href="tel:09386117912">
                  <Phone className="h-4 w-4" />
                  تماس: ۰۹۳۸۶۱۱۷۹۱۲
                </a>
              </Button>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
              منابع (References)
            </h3>
            <ol className="list-decimal pr-6 mb-8 space-y-2 text-muted-foreground text-sm">
              <li>Trifluoperazine: MedlinePlus Drug Information. NIH (National Institutes of Health).</li>
              <li>Trifluoperazine. In: LiverTox: Clinical and Research Information on Drug-Induced Liver Injury. NCBI Bookshelf/NIH.</li>
              <li>Phenothiazines - Side Effects and Mechanisms. StatPearls/NCBI Bookshelf.</li>
              <li>Trifluoperazine (Oral Route) - Side Effects and Safety. Mayo Clinic.</li>
              <li>Typical Antipsychotic Agents. ResearchGate/Academic Review.</li>
            </ol>
          </article>

          <FAQSection faqs={faqs} />
          <RelatedArticles articles={relatedArticles} />
          <PricingInfo />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default TrifluoperazinePage;
