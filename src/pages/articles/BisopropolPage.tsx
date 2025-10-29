import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import bisopropolImage from "@/assets/bisoprolol-medication.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Stethoscope } from "lucide-react";

const BisopropolPage = () => {
  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "بیزوپرولول", url: "" }
  ];

  const faqs = [
    {
      question: "آیا می‌توانم بیزوپرولول را خودسرانه قطع کنم؟",
      answer: "خیر، قطع ناگهانی بیزوپرولول بسیار خطرناک است و می‌تواند منجر به تشدید آنژین، آریتمی یا حتی سکته قلبی شود. حتماً برای کاهش دوز یا قطع دارو با پزشک متخصص مشورت کنید."
    },
    {
      question: "بیزوپرولول چه تفاوتی با سایر بتا بلاکرها دارد؟",
      answer: "بیزوپرولول یک بتا بلاکر کاردیوسلکتیو است، یعنی بیشتر بر گیرنده‌های بتای قلب اثر می‌گذارد و اثر کمتری بر راه‌های هوایی و عروق محیطی دارد، اما باز هم در بیماران آسمی باید با احتیاط مصرف شود."
    },
    {
      question: "اگر دوز بیزوپرولول را فراموش کردم چه کنم؟",
      answer: "اگر دوز را فراموش کردید، به محض یادآوری مصرف کنید، مگر اینکه زمان دوز بعدی نزدیک باشد. در این صورت دوز فراموش شده را رها کنید و هرگز دو دوز را با هم مصرف نکنید."
    },
    {
      question: "چرا بعد از مصرف بیزوپرولول احساس خستگی می‌کنم؟",
      answer: "خستگی و بی‌حالی از عوارض شایع بیزوپرولول است که معمولاً با گذشت زمان و عادت کردن بدن به دارو بهبود می‌یابد. اگر این عارضه شدید باشد، با پزشک متخصص مشورت کنید."
    },
    {
      question: "آیا بیزوپرولول با سایر داروهای قلبی تداخل دارد؟",
      answer: "بله، بیزوپرولول با برخی داروها مانند وراپامیل، دیلتیازم و برخی داروهای ضد آریتمی تداخل خطرناک دارد. حتماً لیست کامل داروهای خود را به پزشک متخصص قلب اطلاع دهید."
    }
  ];

  const relatedArticles = [
    {
      title: "رُزُواستاتین: مدیریت کاهش چربی خون و پیشگیری از سکته",
      description: "راهنمای جامع رُزُواستاتین برای کاهش کلسترول و پیشگیری از حوادث قلبی",
      image: "/src/assets/rosuvastatin-medication.jpg",
      link: "/articles/rosuvastatin",
      category: "داروها"
    },
    {
      title: "آتورواستاتین: مدیریت کلسترول و پیشگیری از سکته",
      description: "راهنمای جامع مصرف آتورواستاتین و پایش عوارض آن در منزل",
      image: "/src/assets/atorvastatin-medication.jpg",
      link: "/articles/atorvastatin",
      category: "داروها"
    },
    {
      title: "وارفارین: راهنمای مصرف و پایش",
      description: "مدیریت دقیق مصرف وارفارین و کنترل INR در منزل",
      image: "/src/assets/warfarin-medication.jpg",
      link: "/articles/warfarin",
      category: "داروها"
    }
  ];

  return (
    <>
      <SEOHead
        title="بیزوپرولول (کنکور): کاربرد، عوارض و ویزیت متخصص قلب در منزل | نوید زندگی"
        description="بیزوپرولول داروی حیاتی بتا بلاکر برای نارسایی قلبی، آنژین صدری و آریتمی‌ها. راهنمای مصرف، عوارض، تداخلات دارویی و پایش در منزل."
        keywords="بیزوپرولول، Bisoprolol، کنکور، Concor، بتا بلاکر، نارسایی قلبی، آنژین صدری، آریتمی، کاهش ضربان قلب، ویزیت متخصص قلب در منزل"
        canonical="https://navidzendegi.com/articles/bisoprolol"
        ogType="article"
        author="دکتر نیره مظاهری تهرانی"
        publishedTime="2025-01-23"
        modifiedTime="2025-01-23"
      />
      
      <ArticleSchema
        title="بیزوپرولول (Bisoprolol): داروی حیاتی بتا بلاکر برای نارسایی قلبی، آنژین صدری و آریتمی‌ها"
        description="بیزوپرولول داروی حیاتی بتا بلاکر برای نارسایی قلبی، آنژین صدری و آریتمی‌ها. راهنمای کامل مصرف، عوارض، تداخلات و پایش در منزل."
        publishedTime="2025-01-23"
        modifiedTime="2025-01-23"
        image={bisopropolImage}
        author="دکتر نیره مظاهری تهرانی"
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl" dir="rtl">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            بیزوپرولول (Bisoprolol): داروی حیاتی بتا بلاکر برای نارسایی قلبی، آنژین صدری و آریتمی‌ها
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>نویسنده: دکتر نیره مظاهری تهرانی</span>
            <span>•</span>
            <time dateTime="2025-01-23">۳ بهمن ۱۴۰۳</time>
          </div>

          <img 
            src={bisopropolImage} 
            alt="بیزوپرولول - داروی بتا بلاکر برای بیماری‌های قلبی"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
            loading="eager"
          />
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-foreground mb-6">
            <strong>بیزوپرولول (Bisoprolol)</strong>، دارویی است از خانواده <strong>بتا بلاکرها (Beta-Blockers)</strong> که با مهار گیرنده‌های بتا، باعث <strong>کاهش ضربان قلب</strong> می‌شود و تا حدودی <strong>فشار خون</strong> را نیز کاهش می‌دهد. این دارو با نام‌های تجاری مختلف، از جمله <strong>کنکور (Concor)</strong>، معروف است و جزء اصلی در درمان بیماری‌های مزمن قلبی است.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              کاربردهای اصلی بیزوپرولول (اندیکاسیون‌های قلبی)
            </h2>
            
            <p className="leading-relaxed text-foreground mb-4">
              بیزوپرولول به دلیل اثرات کاردیوسلکتیو (انتخابی بر قلب) خود، یک داروی استاندارد در درمان بیماری‌های زیر است:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>نارسایی قلبی (Heart Failure):</strong> استفاده از بیزوپرولول در دوزهای پایین و تنظیم شده، به کاهش بار کاری قلب و بهبود طولانی‌مدت عملکرد آن کمک می‌کند.</li>
                <li><strong>آنژین صدری (Angina Pectoris):</strong> <strong>کاهش ضربان قلب</strong> و <strong>فشار خون</strong> توسط این دارو، نیاز عضله قلب به اکسیژن را کم کرده و دفعات حملات درد قفسه سینه را کاهش می‌دهد.</li>
                <li><strong>آریتمی‌ها:</strong> برای کنترل ضربان قلب سریع یا نامنظم (مانند <strong>فیبریلاسیون دهلیزی</strong>) کاربرد دارد.</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong>نکته مهم:</strong> دوز آن منحصراً با صلاح‌دید و توسط پزشک متخصص قلب تنظیم می‌شود.
              </p>
            </div>

            <Card className="my-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">ویزیت متخصص قلب و عروق در منزل</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      برای تنظیم دوز بیزوپرولول و پایش وضعیت قلبی‌عروقی، از خدمات ویزیت متخصص در منزل استفاده کنید.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/cardiology">
                        <Button variant="default" size="sm" className="gap-2">
                          <Stethoscope className="w-4 h-4" />
                          ویزیت متخصص قلب
                        </Button>
                      </Link>
                      <a href="tel:09386117912">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Phone className="w-4 h-4" />
                          ۰۹۳۸۶۱۱۷۹۱۲
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              عوارض شایع و تداخلات دارویی ممنوع
            </h2>
            
            <p className="leading-relaxed text-foreground mb-4">
              پایش دقیق عوارض جانبی بیزوپرولول در بیماران تحت مراقبت در منزل، به ویژه برای جلوگیری از کاهش بیش از حد ضربان قلب، بسیار حیاتی است.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">۱. عوارض شایع</h3>
              <p className="leading-relaxed text-foreground mb-4">
                عوارض شایع آن عبارت‌اند از: <strong>ضعف و بی‌حالی</strong>، <strong>سرگیجه</strong>، <strong>افت فشار خون</strong> و گاهاً اختلال خواب نیز می‌دهد.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">۲. ممنوعیت‌ها و تداخلات خطرناک</h3>
              <p className="leading-relaxed text-foreground mb-3">
                مصرف این دارو ممنوعیت‌های قطعی دارد:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
                <li><strong>برادیکاردی شدید:</strong> نباید در بیمارانی که ضربان قلب کمتر از 60 دارند (Bradycardia) استفاده شود.</li>
                <li><strong>بلوک‌های قلبی:</strong> بلوک‌های درجه دو و سه قلبی و نارسایی قلبی حاد.</li>
                <li><strong>آسم:</strong> به دلیل اثر احتمالی بر راه‌های هوایی.</li>
                <li><strong>تداخل ممنوع:</strong> مصرف آن با داروهای دیگری که باعث <strong>افت شدید ضربان</strong> می‌شوند (مانند وراپامیل و دیلتیازم) ممنوع می‌باشد.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              دستورالعمل‌های مصرف و قطع بیزوپرولول (ایمنی در منزل)
            </h2>
            
            <p className="leading-relaxed text-foreground mb-4">
              از آنجا که بیزوپرولول یک داروی حیاتی و مزمن است، پایبندی دقیق به دستورالعمل‌های مصرف آن ضروری است:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 my-6">
              <ul className="list-disc list-inside space-y-3 text-foreground">
                <li><strong>زمان مشخص:</strong> این دارو باید در زمان مشخصی استفاده شود تا سطح دارو در خون ثابت بماند.</li>
                <li><strong>فراموشی دوز:</strong> اگر مصرف آن فراموش شد، به محض یادآوری مصرف کنید، مگر اینکه تایم بعدی آن نزدیک باشد.</li>
                <li><strong>پرهیز از قطع ناگهانی:</strong> از قطع ناگهانی آن بپرهیزید و حتماً در این زمینه با پزشک خود مشورت کنید. قطع ناگهانی <strong>بتا بلاکرها</strong> می‌تواند منجر به تشدید آنژین، آریتمی یا حتی سکته قلبی شود.</li>
                <li><strong>قبل از جراحی:</strong> در صورتی که عمل جراحی و بیهوشی پیش رو دارید، حتماً مصرف آن را به پزشک بیهوشی اطلاع دهید.</li>
              </ul>
            </div>

            <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Call-to-Action</h3>
              <p className="leading-relaxed text-foreground mb-4">
                برای تنظیم دقیق دوز بیزوپرولول، پایش منظم ضربان قلب و فشار خون، و جلوگیری از قطع ناگهانی دارو، از خدمات <strong>ویزیت متخصص قلب در منزل</strong> نوید زندگی استفاده کنید. همین حالا برای مشاوره تماس بگیرید.
              </p>
              <a href="tel:09386117912">
                <Button className="gap-2">
                  <Phone className="w-4 h-4" />
                  تماس با نوید زندگی
                </Button>
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">منابع (References)</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Yancy, C. W., et al. (2017). 2017 ACC/AHA/HFSA Focused Update of the 2013 ACCF/AHA Guideline for the Management of Heart Failure. Circulation, 136(6), e137-e161.</li>
              <li>Kukla, P., & Jastrzebski, M. (2019). Beta-blockers in heart failure: is the devil in the dose? Cardiology Journal, 26(1), 1-8.</li>
              <li>Kwon, I. H., et al. (2017). Drug interactions and bisoprolol: a review of current evidence. Cardiovascular Therapeutics, 35(1), e12260.</li>
            </ol>
          </section>
        </div>

        <FAQSection faqs={faqs} />
        
        <div className="mt-12">
          <PricingInfo />
        </div>

        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </article>
    </>
  );
};

export default BisopropolPage;
