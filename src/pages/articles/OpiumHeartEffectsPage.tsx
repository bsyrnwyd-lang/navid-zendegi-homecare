import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleSchema from "@/components/ArticleSchema";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import opiumHeartImage from "@/assets/opium-heart-effects.jpg";

const OpiumHeartEffectsPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const faqs = [
    {
      question: "آیا تریاک واقعاً برای قلب مضر است؟",
      answer: "بله، مطالعات علمی معتبر نشان داده‌اند که مصرف تریاک به‌طور قابل‌توجهی خطر آترواسکلروز، سکته قلبی، آریتمی و بیماری‌های قلبی–عروقی را افزایش می‌دهد. تریاک هیچ اثر محافظتی بر قلب ندارد."
    },
    {
      question: "آیا تریاک می‌تواند برای درد قفسه سینه استفاده شود؟",
      answer: "خیر، این یک باور کاملاً غلط و خطرناک است. تریاک فقط موقتاً درد را کاهش می‌دهد و باعث تأخیر در تشخیص حمله قلبی می‌شود. همچنین التهاب و اختلال چربی خون را افزایش داده و وضعیت قلب را بدتر می‌کند."
    },
    {
      question: "چه اثراتی تریاک روی ریتم قلب دارد؟",
      answer: "تریاک می‌تواند باعث اختلالات شدید ریتم قلب، کاهش ضربان قلب (Bradycardia) و افزایش فاصله QT شود که خطر آریتمی‌های مرگبار را افزایش می‌دهد."
    },
    {
      question: "آیا ترک تریاک می‌تواند به قلب آسیب برساند؟",
      answer: "ترک ناگهانی تریاک می‌تواند باعث تغییرات شدید فشار خون و ریتم قلب شود. برای ترک ایمن حتماً باید تحت نظر پزشک متخصص انجام شود تا از عوارض قلبی جلوگیری شود."
    },
    {
      question: "چگونه می‌توانم از خدمات ویزیت پزشک در منزل برای مشکلات قلبی استفاده کنم؟",
      answer: "کافی است با شماره 09386117912 تماس بگیرید یا از طریق واتساپ پیام دهید. پزشک متخصص قلب و عروق یا متخصص داخلی در کمترین زمان به منزل شما اعزام می‌شود."
    }
  ];

  const relatedArticles = [
    {
      title: "خطرات کوکائین برای قلب و عروق",
      description: "بررسی کامل اثرات مخرب کوکائین بر سیستم قلبی-عروقی و عوارض استفاده از آن",
      image: "/src/assets/cocaine-dangers.jpg",
      link: "/articles/cocaine-dangers",
      category: "سلامت قلب"
    },
    {
      title: "تأثیر سیگار بر سلامت قلب",
      description: "چگونه سیگار کشیدن به شدت خطر بیماری‌های قلبی-عروقی را افزایش می‌دهد",
      image: "/src/assets/smoking-heart-effects.jpg",
      link: "/articles/smoking-heart-effects",
      category: "سلامت قلب"
    },
    {
      title: "ویزیت متخصص داخلی در منزل",
      description: "مدیریت بیماری‌های مزمن قلبی و عروقی در منزل توسط متخصص داخلی",
      image: "/src/assets/internal-medicine.jpg",
      link: "/services/internal-medicine",
      category: "خدمات درمانی"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="اثرات تریاک بر روی قلب | مرور علمی پیامدهای قلبی–عروقی مصرف اوپیوم | نوید زندگی"
        description="بررسی کامل اثرات مخرب تریاک (اوپیوم) بر سیستم قلبی-عروقی: افزایش خطر سکته قلبی، آترواسکلروز، آریتمی و اختلالات ریتم قلب بر اساس مطالعات علمی معتبر."
        keywords="تریاک و قلب، اثرات تریاک بر قلب، اوپیوم و بیماری قلبی، سکته قلبی و تریاک، آریتمی و تریاک، آترواسکلروز، خطرات تریاک"
        canonical="https://navidzendegi.com/articles/opium-heart-effects"
        ogType="article"
        publishedTime="2025-01-17T00:00:00Z"
        modifiedTime="2025-01-17T00:00:00Z"
      />
      
      <ArticleSchema
        title="اثرات تریاک بر روی قلب: مرور علمی بر پیامدهای قلبی–عروقی مصرف اوپیوم"
        description="بررسی کامل اثرات مخرب تریاک (اوپیوم) بر سیستم قلبی-عروقی بر اساس مطالعات علمی معتبر"
        publishedTime="2025-01-17T00:00:00Z"
        modifiedTime="2025-01-17T00:00:00Z"
        image="/src/assets/opium-heart-effects.jpg"
      />
      
      <Header />
      <FloatingContact />
      
      <main className="pt-20 md:pt-24">
        <article className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              اثرات تریاک بر روی قلب: مرور علمی بر پیامدهای قلبی–عروقی مصرف اوپیوم
            </h1>
            
            <div className="relative mb-8">
              <img 
                src={opiumHeartImage} 
                alt="اثرات تریاک بر روی قلب و سیستم قلبی-عروقی"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-base md:text-lg leading-relaxed text-justify mb-6">
                تریاک (Opium) یکی از قدیمی‌ترین مواد مخدر مورد استفاده در جهان است و در برخی جوامع همچنان به‌عنوان یک «داروی سنتی» برای کاهش درد یا بهبود برخی مشکلات گوارشی استفاده می‌شود. با این حال، شواهد علمی گسترده نشان می‌دهد که مصرف تریاک نه‌تنها اثر محافظتی بر قلب ندارد، بلکه به شکل قابل‌توجهی خطر <a href="/services/cardiology" className="text-primary hover:underline">بیماری‌های قلبی–عروقی</a> را افزایش می‌دهد.
              </p>

              <p className="text-base leading-relaxed text-justify mb-6">
                در این مقاله، بر اساس مطالعات معتبر بین‌المللی، اثرات مصرف تریاک بر عملکرد قلب و عروق بررسی شده است.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
                اثرات مستقیم تریاک بر سیستم قلبی–عروقی
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
                1. افزایش خطر آترواسکلروز (تصلب شرایین)
              </h3>
              <p className="text-base leading-relaxed text-justify mb-6">
                تحقیقات نشان داده‌اند که مصرف تریاک باعث افزایش التهاب سیستمیک، استرس اکسیداتیو و اختلال در عملکرد لایه داخلی رگ‌ها (اندوتلیوم) می‌شود. این عوامل مستقیماً در ایجاد آترواسکلروز نقش دارند و خطر تنگی عروق کرونر را بالا می‌برند.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
                2. افزایش خطر سکته قلبی (Myocardial Infarction)
              </h3>
              <p className="text-base leading-relaxed text-justify mb-4">
                چندین مطالعه بزرگ در کشورهای مختلف نشان داده‌اند که:
              </p>
              <ul className="list-disc pr-6 mb-6 space-y-2">
                <li className="text-base">احتمال ایست قلبی و سکته قلبی حاد در مصرف‌کنندگان تریاک بیشتر است</li>
                <li className="text-base">بیمارانی که دچار <a href="/articles/heart-attack-symptoms" className="text-primary hover:underline">سکته قلبی</a> می‌شوند و سابقه مصرف تریاک دارند، معمولاً شدت بیشتری از بیماری را نشان می‌دهند</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
                3. تأثیر تریاک بر ریتم قلب
              </h3>
              <p className="text-base leading-relaxed text-justify mb-4">
                مواد شبه‌افیونی روی گیرنده‌های μ-opioid اثر می‌گذارند و ممکن است باعث موارد زیر شوند:
              </p>
              <ul className="list-disc pr-6 mb-6 space-y-2">
                <li className="text-base">اختلالات شدید ریتم قلب</li>
                <li className="text-base">Bradycardia (کاهش ضربان قلب)</li>
                <li className="text-base">QT prolongation (افزایش فاصله QT و خطر آریتمی‌های مرگبار)</li>
              </ul>
              <p className="text-base leading-relaxed text-justify mb-6">
                شواهد نشان می‌دهند که مصرف مزمن تریاک ریسک آریتمی‌های خطرناک را افزایش می‌دهد.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
                4. اثر بر فشار خون
              </h3>
              <p className="text-base leading-relaxed text-justify mb-4">
                اگرچه برخی افراد تصور می‌کنند تریاک باعث «تنظیم» <a href="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون</a> می‌شود، اما شواهد علمی خلاف آن را ثابت کرده‌اند:
              </p>
              <ul className="list-disc pr-6 mb-6 space-y-2">
                <li className="text-base">مصرف طولانی‌مدت می‌تواند باعث افزایش فشار خون شود</li>
                <li className="text-base">تغییرات ناگهانی فشار خون در هنگام مصرف یا ترک تریاک می‌تواند به قلب آسیب برساند</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
                5. اثرات تریاک بر چربی خون و قند خون
              </h3>
              <p className="text-base leading-relaxed text-justify mb-4">
                مطالعات معتبر نشان می‌دهند:
              </p>
              <ul className="list-disc pr-6 mb-6 space-y-2">
                <li className="text-base">مصرف اوپیوم با <a href="/articles/diabetes" className="text-primary hover:underline">دیابت نوع ۲</a> و مقاومت به انسولین مرتبط است</li>
                <li className="text-base">سطح تری‌گلیسرید و LDL ("کلسترول بد") در مصرف‌کنندگان معمولاً بالاتر است</li>
              </ul>
              <p className="text-base leading-relaxed text-justify mb-6">
                این دو عامل مهم‌ترین دلایل افزایش خطر بیماری قلبی در مصرف‌کنندگان تریاک هستند.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
                آیا تریاک برای دردهای قلبی مفید است؟ (باور غلط رایج)
              </h2>
              <p className="text-base leading-relaxed text-justify mb-4">
                در برخی فرهنگ‌ها، تریاک به اشتباه به‌عنوان یک «درمان سنتی» برای درد قفسه سینه استفاده می‌شود. این باور کاملاً غلط و خطرناک است، زیرا:
              </p>
              <ul className="list-disc pr-6 mb-6 space-y-2">
                <li className="text-base">تریاک موقتاً درد را کاهش می‌دهد و باعث تأخیر در تشخیص حمله قلبی می‌شود</li>
                <li className="text-base">مصرف آن باعث افزایش التهاب و اختلال چربی می‌شود و در واقع وضعیت قلب را بدتر می‌کند</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
                اثرات غیرقلبی که روی سلامت قلب اثر می‌گذارند
              </h2>
              <p className="text-base leading-relaxed text-justify mb-4">
                مصرف تریاک علاوه بر اثر مستقیم روی قلب، با ایجاد مشکلات دیگری که خودشان ریسک قلبی را افزایش می‌دهند همراه است:
              </p>
              <ul className="list-disc pr-6 mb-6 space-y-2">
                <li className="text-base">اختلال خواب</li>
                <li className="text-base">کاهش سطح اکسیژن خون</li>
                <li className="text-base">کم‌خونی</li>
                <li className="text-base">اختلال عملکرد تیروئید</li>
                <li className="text-base">کاهش فعالیت فیزیکی</li>
              </ul>
              <p className="text-base leading-relaxed text-justify mb-6">
                این عوامل در مجموع باعث افزایش مضاعف خطر بیماری عروقی می‌شوند.
              </p>

              <div className="bg-primary/10 border-r-4 border-primary p-6 rounded-lg my-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  جمع‌بندی
                </h2>
                <p className="text-base leading-relaxed text-justify mb-4">
                  بر اساس شواهد معتبر علمی، تریاک هیچ نقش درمانی در بیماری‌های قلبی–عروقی ندارد و حتی به‌طور قابل‌توجهی خطر سکته قلبی، تنگی عروق، آریتمی و مرگ‌ومیر قلبی را افزایش می‌دهد.
                </p>
                <p className="text-base leading-relaxed text-justify">
                  برای بیمارانی که درد قفسه سینه یا مشکلات قلبی دارند، مصرف تریاک نه‌تنها کمکی نمی‌کند، بلکه خطرناک است و می‌تواند روند تشخیص و درمان را به تأخیر بیندازد.
                </p>
              </div>

              <div className="bg-secondary/20 p-6 rounded-lg my-8 text-center">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  نیاز به مشاوره پزشکی دارید؟
                </h3>
                <p className="text-base mb-6">
                  در صورت نیاز به مشاوره یا ارزیابی در منزل، <a href="/services/cardiology" className="text-primary hover:underline font-semibold">ویزیت پزشک متخصص قلب</a> و <a href="/services/internal-medicine" className="text-primary hover:underline font-semibold">متخصص داخلی</a> می‌تواند به مدیریت صحیح وضعیت قلبی کمک کند.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleCall}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: 09386117912
                  </Button>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <MessageCircle className="ml-2 h-5 w-5" />
                    پیام در واتساپ
                  </Button>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
                منابع معتبر (REFERENCES)
              </h2>
              <ol className="list-decimal pr-6 mb-6 space-y-2 text-sm">
                <li>Sadeghian, S., et al. (2007). Opium consumption and coronary artery disease: A study on opium addiction and CAD. International Journal of Cardiology.</li>
                <li>Thuy, A. B., et al. (2022). Opioids and cardiovascular risk: A systematic review. European Heart Journal.</li>
                <li>Smyth, B., et al. (2018). Opioid use and increased risk of myocardial infarction. Journal of the American Heart Association.</li>
                <li>Ziaee, M., et al. (2020). Chronic opium use and metabolic disturbances: Diabetes and dyslipidemia. Addiction & Health Journal.</li>
                <li>Darke, S., & Farrell, M. (2014). Cardiac complications of opioid use. Lancet.</li>
              </ol>
            </div>
          </div>
        </article>

        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        <section className="medical-section">
          <div className="container mx-auto max-w-4xl">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </section>

        <section className="medical-section bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <PricingInfo />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OpiumHeartEffectsPage;
