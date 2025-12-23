import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import { Link } from "react-router-dom";
import { AlertTriangle, Phone } from "lucide-react";
import tuberculosisImage from "@/assets/tuberculosis-article.jpg";
import aspirationPneumoniaImage from "@/assets/aspiration-pneumonia.jpg";
import meningitisImage from "@/assets/meningitis-article.jpg";
import hivAidsImage from "@/assets/hiv-aids-article.jpg";

const TuberculosisPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بیماری سل", url: "/articles/tuberculosis" }
  ];

  const faqItems = [
    {
      question: "آیا بیماری سل قابل درمان است؟",
      answer: "بله، بیماری سل در صورت تشخیص زودهنگام و مصرف منظم داروها به مدت ۶ تا ۹ ماه، کاملاً درمان‌پذیر است. مهم‌ترین نکته پایبندی به رژیم دارویی و عدم قطع خودسرانه داروهاست."
    },
    {
      question: "سل چگونه منتقل می‌شود؟",
      answer: "سل یک بیماری هوابرد است و از طریق ذرات معلق در هوا (هنگام سرفه، عطسه یا صحبت فرد مبتلا) منتقل می‌شود. سل از طریق دست دادن، اشتراک غذا یا ظروف مشترک منتقل نمی‌شود."
    },
    {
      question: "تفاوت سل نهفته و سل فعال چیست؟",
      answer: "در سل نهفته، باکتری در بدن وجود دارد اما سیستم ایمنی آن را مهار کرده و فرد علامتی ندارد. در سل فعال، باکتری‌ها در حال تکثیر هستند، فرد علائم دارد و می‌تواند بیماری را منتقل کند."
    },
    {
      question: "آیا می‌توان آزمایش سل را در منزل انجام داد؟",
      answer: "بله، نوید زندگی خدمات نمونه‌گیری خلط و خون برای تست سل را در منزل ارائه می‌دهد. این روش به‌خصوص برای افرادی که توانایی مراجعه به مراکز بهداشتی را ندارند بسیار مناسب است."
    },
    {
      question: "علائم هشداردهنده سل چیست؟",
      answer: "سرفه مداوم بیش از ۳ هفته، خلط خونی، تب و لرز، تعریق شبانه، کاهش وزن ناگهانی و خستگی مفرط از علائم اصلی سل ریوی هستند که نیاز به بررسی پزشکی دارند."
    },
    {
      question: "آیا واکسن BCG از سل محافظت می‌کند؟",
      answer: "واکسن BCG عمدتاً از فرم‌های شدید سل در کودکان (مثل مننژیت سلی) محافظت می‌کند، اما اثربخشی آن در پیشگیری از سل ریوی در بزرگسالان محدود است."
    }
  ];

  const relatedArticles = [
    {
      title: "پنومونی آسپیراسیون؛ علل، علائم و درمان",
      description: "آشنایی با عفونت ریه ناشی از ورود مواد غذایی به راه هوایی",
      image: aspirationPneumoniaImage,
      link: "/articles/aspiration-pneumonia",
      category: "بیماری‌های تنفسی"
    },
    {
      title: "مننژیت؛ علائم، تشخیص و درمان",
      description: "راهنمای کامل بیماری مننژیت و اهمیت تشخیص زودهنگام",
      image: meningitisImage,
      link: "/articles/meningitis",
      category: "بیماری‌های عفونی"
    },
    {
      title: "ایدز و HIV؛ پیشگیری، تشخیص و درمان",
      description: "اطلاعات جامع درباره ویروس HIV و روش‌های پیشگیری",
      image: hivAidsImage,
      link: "/articles/hiv-aids",
      category: "بیماری‌های عفونی"
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="بیماری سل چیست؟ علائم، راه‌های انتقال و خدمات مراقبت در منزل | نوید زندگی"
        description="راهنمای جامع بیماری سل (TB): علائم هشداردهنده، تفاوت سل نهفته و فعال، راه‌های انتقال، تشخیص و درمان. خدمات نمونه‌گیری و مراقبت سل در منزل با نوید زندگی. تماس: 09386117912"
        keywords="بیماری سل, علائم سل, سل ریوی, سل نهفته, سل فعال, درمان سل, تست سل در منزل, مایکوباکتریوم توبرکلوزیس, TB, پیشگیری از سل"
        canonical="https://navidzendegi.com/articles/tuberculosis"
        ogType="article"
        ogImage={tuberculosisImage}
        publishedTime="2025-12-23"
        modifiedTime="2025-12-23"
      />
      
      <ArticleSchema
        title="بیماری سل چیست؟ علائم، راه‌های انتقال و خدمات مراقبت در منزل"
        description="راهنمای جامع بیماری سل شامل علائم، انواع سل نهفته و فعال، راه‌های انتقال، تشخیص و درمان در منزل"
        publishedTime="2025-12-23"
        modifiedTime="2025-12-23"
        image={tuberculosisImage}
      />

      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-relaxed">
              بیماری سل چیست؟ علائم، راه‌های انتقال و خدمات مراقبت در منزل
            </h1>
            <img
              src={tuberculosisImage}
              alt="تشخیص و درمان بیماری سل - رادیولوژی ریه"
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
          </div>

          {/* Warning Box */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-destructive mb-1">هشدار مهم</p>
                <p className="text-foreground/80 text-sm">
                  از خوددرمانی و مصرف خودسرانه دارو جداً خودداری کنید. درمان سل نیاز به نظارت پزشک متخصص و مصرف منظم داروها به مدت طولانی دارد. قطع زودهنگام درمان می‌تواند به سل مقاوم به دارو منجر شود.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
            
            <p className="text-lg">
              بیماری سل (TB) یک <strong>عفونت باکتریایی واگیردار</strong> است که توسط باکتری به‌نام <em>مایکوباکتریوم توبرکلوزیس</em> ایجاد می‌شود. اگرچه این بیماری بیشتر به ریه‌ها حمله می‌کند، اما می‌تواند اعضای دیگر بدن مانند کلیه‌ها، ستون فقرات و مغز را نیز درگیر کند. مرکز <strong>نوید زندگی</strong> با ارائه <Link to="/services/nursing" className="text-primary hover:underline">خدمات پرستاری در منزل</Link> و <Link to="/services/laboratory" className="text-primary hover:underline">آزمایش در منزل</Link>، در مسیر تشخیص و درمان این بیماری در کنار شماست.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">بیماری سل چگونه منتقل می‌شود؟</h2>
            
            <p>
              سل یک بیماری <strong>هوابرد (Airborne)</strong> است. یعنی زمانی که فرد مبتلا به سل ریوی سرفه، عطسه، صحبت یا خنده می‌کند، باکتری‌ها در هوا پخش شده و فرد سالم با تنفس آن هوا، آلوده می‌شود.
            </p>

            <div className="bg-primary/5 border-r-4 border-primary p-4 my-6 rounded-l">
              <p className="font-semibold text-primary mb-2">نکته مهم:</p>
              <p className="text-foreground/80">
                سل از طریق دست دادن، اشتراک غذا یا استفاده از ظروف مشترک منتقل نمی‌شود؛ تمرکز اصلی بر هوای مشترک در فضاهای بسته است.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">انواع بیماری سل</h2>
            
            <p>
              بسیاری از افراد باکتری سل را در بدن دارند اما بیمار نیستند. به طور کلی سل به دو دسته تقسیم می‌شود:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">۱. سل نهفته (Latent TB)</h3>
            <p>
              باکتری در بدن هست اما سیستم ایمنی آن را مهار کرده است. فرد علامتی ندارد و ناقل نیست، اما احتمال فعال شدن بیماری در آینده وجود دارد. افرادی با سیستم ایمنی ضعیف (مانند مبتلایان به <Link to="/articles/hiv-aids" className="text-primary hover:underline">HIV</Link>) در معرض خطر بیشتری هستند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">۲. سل فعال (Active TB)</h3>
            <p>
              باکتری‌ها در حال تکثیر هستند، فرد علائم دارد و می‌تواند بیماری را به دیگران منتقل کند. این نوع نیاز به درمان فوری دارد.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">علائم هشداردهنده سل ریوی</h2>
            
            <p>
              اگر شما یا عزیزانتان علائم زیر را به مدت <strong>بیش از ۳ هفته</strong> دارید، حتماً باید بررسی‌های پزشکی انجام شود:
            </p>

            <ul className="list-disc pr-6 space-y-2 my-4">
              <li>سرفه‌های مداوم و شدید (گاهی همراه با خلط خونی)</li>
              <li>درد در قفسه سینه</li>
              <li>کاهش وزن ناگهانی و بی‌اشتهایی</li>
              <li>تب و لرز (مشابه <Link to="/articles/adult-fever" className="text-primary hover:underline">تب در بزرگسالان</Link>)</li>
              <li>تعریق شبانه شدید</li>
              <li>خستگی و ضعف مفرط</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">تشخیص و درمان سل؛ چرا خدمات در منزل؟</h2>
            
            <p>
              درمان سل یک فرآیند طولانی (معمولاً ۶ تا ۹ ماه) است و نیاز به مصرف دقیق و منظم داروها دارد. در این مسیر، <strong>نوید زندگی</strong> با خدمات زیر همراه شماست:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">۱. نمونه‌گیری خلط و خون در منزل</h3>
            <p>
              برای تشخیص سل، نیاز به آزمایش خلط یا تست‌های خون مخصوص (IGRA) است. به جای مراجعه به مراکز آلوده، تیم <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه ما</Link> برای نمونه‌گیری به منزل شما می‌آید.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">۲. پایش درمان (DOTS) در منزل</h3>
            <p>
              بزرگترین چالش درمان سل، فراموشی مصرف داروهاست که منجر به <strong>سل مقاوم به درمان</strong> می‌شود. <Link to="/services/nursing" className="text-primary hover:underline">پرستاران ما</Link> می‌توانند با نظارت بر مصرف دارو و تزریقات لازم، از روند صحیح درمان اطمینان حاصل کنند.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">۳. آموزش و ایزولاسیون اصولی</h3>
            <p>
              تیم مراقبتی ما به خانواده‌ها آموزش می‌دهد که چگونه محیط خانه را برای فرد مبتلا ایمن کنند (تهویه مناسب، استفاده از ماسک و...) تا سایر اعضای خانواده در امان بمانند.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">مقایسه سل نهفته و سل فعال</h2>
            
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-right">ویژگی</th>
                    <th className="border border-border p-3 text-right">سل نهفته</th>
                    <th className="border border-border p-3 text-right">سل فعال</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-medium">علائم</td>
                    <td className="border border-border p-3">ندارد</td>
                    <td className="border border-border p-3">سرفه، تب، کاهش وزن و...</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-medium">انتقال به دیگران</td>
                    <td className="border border-border p-3">نمی‌تواند منتقل کند</td>
                    <td className="border border-border p-3">می‌تواند منتقل کند</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">نتیجه آزمایش خون/پوست</td>
                    <td className="border border-border p-3">معمولاً مثبت</td>
                    <td className="border border-border p-3">معمولاً مثبت</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border p-3 font-medium">رادیولوژی قفسه سینه</td>
                    <td className="border border-border p-3">معمولاً نرمال</td>
                    <td className="border border-border p-3">معمولاً غیرنرمال</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">نیاز به درمان</td>
                    <td className="border border-border p-3">برای پیشگیری لازم است</td>
                    <td className="border border-border p-3">برای بهبودی حیاتی است</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">نقش تغذیه در بهبود بیماران مبتلا به سل</h2>
            
            <p>
              از آنجا که سل باعث تحلیل بدن می‌شود، رژیم غذایی پرپروتئین و غنی از ویتامین‌ها (A, C, D) برای تقویت سیستم ایمنی ضروری است. برای اطلاعات بیشتر درباره تغذیه مناسب، مقاله <Link to="/articles/vitamins-health" className="text-primary hover:underline">نقش ویتامین‌ها در سلامت</Link> را مطالعه کنید.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">پیشگیری از بیماری سل</h2>
            
            <ul className="list-disc pr-6 space-y-2 my-4">
              <li>واکسیناسیون BCG در نوزادان</li>
              <li>تهویه مناسب فضاهای بسته</li>
              <li>استفاده از ماسک در تماس با افراد مشکوک</li>
              <li>تقویت سیستم ایمنی با تغذیه مناسب</li>
              <li>غربالگری افراد در معرض خطر</li>
              <li>درمان کامل سل نهفته برای پیشگیری از فعال شدن</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">سخن پایانی</h2>
            
            <p>
              بیماری سل در صورت تشخیص زودهنگام و مصرف منظم دارو، <strong>کاملاً درمان‌پذیر</strong> است. اگر نگران سلامت خود یا اطرافیانتان هستید، اجازه دهید ما در محیط آرام منزل، مراقب شما باشیم.
            </p>

          </article>

          {/* CTA Box */}
          <div className="bg-primary/10 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-bold mb-3 text-foreground">
              برای مشاوره رایگان و رزرو خدمات آزمایش یا پرستاری در منزل
            </h3>
            <p className="text-foreground/80 mb-4">پاسخگویی ۲۴ ساعته</p>
            <a 
              href="tel:09386117912" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>09386117912</span>
            </a>
          </div>

          {/* FAQ Section */}
          <FAQSection faqs={faqItems} />

          {/* Related Articles */}
          <RelatedArticles articles={relatedArticles} />

          {/* Pricing Info */}
          <PricingInfo />

        </div>
      </main>
    </ArticleLayout>
  );
};

export default TuberculosisPage;
