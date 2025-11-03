import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import PricingInfo from "@/components/PricingInfo";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import clopidogrelImage from "@/assets/clopidogrel-medication.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import aspirinImage from "@/assets/aspirin-medication.jpg";
import highBloodPressureImage from "@/assets/high-blood-pressure-control.jpg";

const ClopidogrelPage = () => {
  const handleCall = () => {
    window.location.href = "tel:09386117912";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/989386117912", "_blank");
  };

  const relatedArticles = [
    {
      title: "آسپرین (Aspirin): کاربرد حیاتی در بیماری‌های قلبی و سکته مغزی",
      description: "راهنمای جامع آسپرین، مکانیسم اثر، کاربردهای حیاتی در بیماری‌های قلبی و سکته مغزی",
      image: aspirinImage,
      link: "/articles/aspirin",
      category: "داروها"
    },
    {
      title: "وارفارین؛ داروی ضدانعقاد و نکات مهم در مصرف آن",
      description: "راهنمای کامل وارفارین، موارد مصرف، عوارض جانبی، رژیم غذایی و کنترل INR",
      image: warfarinImage,
      link: "/articles/warfarin",
      category: "داروها"
    },
    {
      title: "فشار خون بالا چه علائمی دارد و چگونه باید کنترل شود؟",
      description: "راهنمای کامل فشار خون بالا، علائم قاتل خاموش، علت‌ها و روش‌های کنترل",
      image: highBloodPressureImage,
      link: "/articles/high-blood-pressure-control",
      category: "قلب و عروق"
    }
  ];

  const faqs = [
    {
      question: "آیا می‌توانم کلوپیدوگرل را به همراه آسپرین مصرف کنم؟",
      answer: "بله، در بسیاری از موارد پزشکان کلوپیدوگرل را همراه با آسپرین تجویز می‌کنند، به‌ویژه پس از استنت‌گذاری. این درمان دوگانه ضدپلاکتی به کاهش ریسک تشکیل لخته در استنت کمک می‌کند. مدت زمان این درمان ترکیبی بسته به وضعیت بیمار و تشخیص پزشک تعیین می‌شود."
    },
    {
      question: "چرا برخی افراد به کلوپیدوگرل پاسخ نمی‌دهند؟",
      answer: "برخی افراد به دلیل تفاوت‌های ژنتیکی در آنزیم CYP2C19 که برای فعال‌سازی کلوپیدوگرل ضروری است، پاسخ کمتری به این دارو می‌دهند. این افراد ممکن است نیاز به تست ژنتیکی داشته باشند و پزشک ممکن است دُز بالاتر یا داروی جایگزین تجویز کند."
    },
    {
      question: "آیا مصرف کلوپیدوگرل با داروهای معده تداخل دارد؟",
      answer: "بله، برخی از مهارکننده‌های پمپ پروتون مانند اُمِپرازول می‌توانند اثربخشی کلوپیدوگرل را کاهش دهند. اگر نیاز به دارویی برای معده دارید، حتماً با پزشک خود مشورت کنید تا داروی مناسب‌تری مانند پانتوپرازول تجویز شود."
    },
    {
      question: "در صورت خونریزی چه باید کرد؟",
      answer: "خونریزی مهم‌ترین عارضه کلوپیدوگرل است. در صورت مشاهده خونریزی شدید، خونریزی گوارشی (مدفوع سیاه)، خونریزی ادراری یا خونریزی‌های غیرعادی، فوراً با پزشک تماس بگیرید و در صورت شدت، به اورژانس مراجعه کنید."
    },
    {
      question: "چه مدت باید کلوپیدوگرل مصرف کنم؟",
      answer: "مدت زمان مصرف بستگی به دلیل تجویز دارو دارد. پس از استنت‌گذاری معمولاً بین 3 تا 12 ماه همراه با آسپرین تجویز می‌شود. در برخی موارد ممکن است نیاز به مصرف طولانی‌مدت‌تر باشد. حتماً با پزشک خود مشورت کنید و خودسرانه دارو را قطع نکنید."
    },
    {
      question: "آیا می‌توانم با مصرف کلوپیدوگرل عمل جراحی انجام دهم؟",
      answer: "قبل از هر عمل جراحی یا دندان‌پزشکی، حتماً به پزشک اطلاع دهید که کلوپیدوگرل مصرف می‌کنید. ممکن است نیاز باشد دارو را چند روز قبل از عمل قطع کنید، اما این تصمیم باید توسط پزشک متخصص قلب و جراح بررسی شود."
    }
  ];

  return (
    <>
      <SEOHead
        title="کلوپیدوگرل (Clopidogrel)؛ داروی ضدپلاکت برای پیشگیری از حملات قلبی"
        description="راهنمای جامع کلوپیدوگرل، مکانیسم اثر، کاربردها در بیماری‌های قلبی، عوارض جانبی، تداخلات دارویی و اهمیت پیگیری پزشکی در منزل"
        keywords="کلوپیدوگرل, داروی ضدپلاکت, لخته خون, پیشگیری حمله قلبی, استنت قلبی, سکته مغزی, ویزیت پزشک در منزل, پلاویکس"
        canonical="https://navidzendegi.com/articles/clopidogrel"
        ogImage={clopidogrelImage}
        ogType="article"
        author="نوید زندگی"
        publishedTime="2025-01-22"
        modifiedTime="2025-01-22"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingContact />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            کلوپیدوگرل (Clopidogrel)؛ داروی ضدپلاکت مهم در پیشگیری از حملات قلبی و سکته‌ها
          </h1>

          <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <span>نویسنده: نوید زندگی</span>
            <span>•</span>
            <span>تاریخ انتشار: 1403/11/02</span>
          </div>

          <img 
            src={clopidogrelImage}
            alt="کلوپیدوگرل؛ داروی ضدپلاکت"
            className="w-full h-auto rounded-lg mb-8"
            loading="lazy"
          />

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">معرفی کلی</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Link to="/articles/aspirin" className="text-primary hover:underline">کلوپیدوگرل</Link> یک داروی ضد‌پلاکتی (antiplatelet) است که با جلوگیری از چسبیدن پلاکت‌ها به یکدیگر، از تشکیل لخته‌های خونی پیشگیری می‌کند. این دارو عمدتاً در بیماران مبتلابه بیماری‌های قلبی‌عروقی، پس از گذاشتن استنت در عروق کرونر، یا جهت پیشگیری از سکته‌های مغزی مورد استفاده قرار می‌گیرد.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              کلوپیدوگرل با نام تجاری <strong>پلاویکس (Plavix)</strong> نیز شناخته می‌شود و یکی از داروهای پرمصرف در بیماران قلبی است که نیاز به پیگیری دقیق پزشکی دارند.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">مکانیسم اثر</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              کلوپیدوگرل جزو داروهایی است که به صورت «پرو‌دارو» (pro-drug) وارد بدن می‌شوند و سپس در کبد به شکل فعال تبدیل می‌شوند. فرم فعال این دارو به گیرنده ADP از نوع P2Y₁₂ در سطح پلاکت‌ها متصل شده و مانع فعال‌سازی پلاکت‌ها می‌شود؛ در نتیجه فرآیند چسبندگی پلاکت‌ها و تشکیل لخته کاهش می‌یابد.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              نکته مهم: برای فعال‌سازی کلوپیدوگرل، آنزیم <strong>CYP2C19</strong> در کبد نقش حیاتی دارد. افرادی که دارای ژنوتیپ ضعیف برای این آنزیم هستند ممکن است پاسخ کمتری به دارو بدهند و نیاز به تنظیم دُز یا استفاده از داروی جایگزین داشته باشند.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">موارد مصرف</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              کلوپیدوگرل در شرایط زیر به کار می‌رود:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>کاهش ریسک بروز حمله قلبی یا سکته مغزی</strong> در افرادی که پیش‌تر چنین رویدادهایی داشته‌اند یا دارای عوامل خطر بالا هستند.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>پس از عمل آنژیوپلاستی یا گذاشتن استنت در عروق کرونر:</strong> معمولاً به همراه <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link> (در قالب درمان دوگانه ضدپلاکتی) برای کاهش ریسک تشکیل لخته در استنت تجویز می‌شود.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>بیماری‌های عروقی محیطی:</strong> مثلاً گرفتگی عروق اندام تحتانی جهت پیشگیری از عوارض.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">دُز مصرف و نکات درمانی</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              برای بزرگسالان، معمولاً یک <strong>دُز بارگذاری (loading dose)</strong> مثلاً 300 یا 600 میلی‌گرم در آغاز مصرف در شرایط خاص مانند آنژیوپلاستی پیشنهاد می‌شود. سپس دُز نگه‌دارنده معمولاً <strong>75 میلی‌گرم روزانه</strong> است.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              میزان زمان مصرف دارو (به‌ویژه در درمان ترکیبی با آسپرین) بستگی به وضعیت بیمار، نوع استنت، سابقه خونریزی و خطر ترکیدن لخته دارد؛ در بعضی راهنماها <strong>۳ تا ۱۲ ماه</strong> درمان ترکیبی پیشنهاد شده است. در برخی موارد ممکن است نیاز به مصرف طولانی‌مدت‌تر باشد.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">عوارض جانبی و موارد احتیاط</h2>
            
            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">عوارض مهم</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>مهم‌ترین عارضه: خونریزی</strong> (از جمله خونریزی گوارشی، بینی، داخلی) که باید در صورت بروز مورد توجه قرار گیرد. علائم خونریزی گوارشی شامل مدفوع سیاه یا خونی، استفراغ خونی یا استفراغ شبیه تفاله قهوه است.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              عوارض کمتر شایع شامل سردرد، تهوع، بثورات پوستی، و در موارد نادر مجموعه‌ای از عوارض خیلی جدی مانند ترومبوز عروقی و اختلالات خونی است.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">موارد احتیاط ویژه</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              چون دارو از طریق آنزیم CYP2C19 فعال می‌شود، مصرف همزمان داروهایی که این مسیر را مهار می‌کنند (مثلاً برخی از مهارکننده‌های اسید معده مانند <strong>اُمِپرازول</strong>) ممکن است اثربخشی کلوپیدوگرل را کاهش دهد. در صورت نیاز به دارویی برای معده، پزشک ممکن است <Link to="/articles/high-blood-pressure-control" className="text-primary hover:underline">داروهای</Link> جایگزین مانند پانتوپرازول را تجویز کند.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              قبل از عمل جراحی یا وقتی که داروهای ضدانعقاد دیگری مصرف می‌شوند، باید حتماً با پزشک مشورت شود. متخصص قلب و جراح باید تصمیم‌گیری کنند که آیا دارو باید قبل از عمل قطع شود یا خیر.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">اهمیت نظارت پزشکی و خدمات ویزیت در منزل</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              بیمارانی که داروی کلوپیدوگرل مصرف می‌کنند، نیاز به پایش دقیق دارند. نظارت پزشکی منظم شامل:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>اندازه‌گیری وضعیت پلاکت‌ها:</strong> بررسی علائم خونریزی یا لخته‌سازی و انجام آزمایشات خونی در صورت نیاز.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>ارزیابی داروهای هم‌مصرف:</strong> بررسی تداخلات دارویی و تنظیم داروها در صورت لزوم.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>تنظیم دُز و زمان مصرف دارو:</strong> مطابق راهنماهای قلبی و عروقی و وضعیت فردی بیمار.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>خدمات <Link to="/cardiology" className="text-primary hover:underline">ویزیت پزشک متخصص قلب در منزل</Link></strong> می‌تواند این فرآیند را برای بیمارانی که مراجعه حضوری دشوار است، تسهیل کند. پزشک می‌تواند در منزل داروها را بررسی کند، با بیمار و خانواده تغذیه، سبک زندگی و شرایط را مرور کند، و در صورت نیاز با آزمایشکار هماهنگی برای انجام آزمایشات لازم صورت دهد.
            </p>
          </section>

          <section className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ویزیت پزشک قلب و عروق در منزل برای بیماران مصرف‌کننده کلوپیدوگرل
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              بیمارانی که کلوپیدوگرل مصرف می‌کنند نیاز به پیگیری منظم و دقیق پزشکی دارند. خدمات ویزیت در منزل نوید زندگی به بیماران کمک می‌کند تا بدون نیاز به مراجعه حضوری، تحت نظارت متخصص قلب قرار گیرند.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleCall}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90"
              >
                <Phone className="w-4 h-4" />
                تماس تلفنی: <a href="tel:09386117912" className="font-bold">09386117912</a>
              </Button>
              <Button 
                onClick={handleWhatsApp}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4" />
                پیام در واتساپ
              </Button>
            </div>
          </section>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              برای کسب اطلاعات بیشتر درباره <Link to="/contact" className="text-primary hover:underline">خدمات ویزیت پزشک در منزل</Link> و مشاوره رایگان، با ما تماس بگیرید.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              همچنین می‌توانید از خدمات <Link to="/cardiology" className="text-primary hover:underline">متخصص قلب و عروق در منزل</Link> برای پیگیری دقیق و منظم درمان خود استفاده کنید.
            </p>
          </div>

          <FAQSection faqs={faqs} />

          <div className="mt-12">
            <PricingInfo />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default ClopidogrelPage;
