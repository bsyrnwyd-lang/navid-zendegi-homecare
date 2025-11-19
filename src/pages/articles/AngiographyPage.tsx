import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";
import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import FAQSection from "@/components/FAQSection";
import angiographyImage from "@/assets/angiography-article.jpg";
import postAngiographyMedicationsImage from "@/assets/post-angiography-medications.jpg";
import angiographyRecoveryImage from "@/assets/angiography-recovery.jpg";
import heartPalpitationsImage from "@/assets/heart-palpitations.jpg";

const AngiographyPage = () => {
  const phoneNumber = "09386117912";

  const breadcrumbItems = [
    { name: "خانه", url: "/" },
    { name: "مقالات", url: "/articles" },
    { name: "آنژیوگرافی قلب", url: "" }
  ];

  const relatedArticles = [
    {
      title: "بیهوشی در آنژیوگرافی: آرام‌بخشی یا بیهوشی کامل؟",
      description: "بررسی کامل نوع بیهوشی و آرام‌بخشی در آنژیوگرافی قلب و مدیریت درد",
      image: angiographyImage,
      link: "/articles/angiography-sedation",
      category: "قلب و عروق"
    },
    {
      title: "داروهای ضد انعقاد پس از آنژیوگرافی",
      description: "راهنمای کامل مصرف آسپرین، کلوپیدوگرل و سایر داروهای پس از استنت‌گذاری",
      image: postAngiographyMedicationsImage,
      link: "/articles/post-angiography-medications",
      category: "قلب و عروق"
    },
    {
      title: "زمان بهبودی پس از آنژیوگرافی",
      description: "مراقبت‌های لازم و زمان بازگشت به فعالیت‌های روزمره پس از آنژیوگرافی",
      image: angiographyRecoveryImage,
      link: "/articles/angiography-recovery-time",
      category: "قلب و عروق"
    }
  ];

  const faqItems = [
    {
      question: "آیا آنژیوگرافی دردناک است؟",
      answer: "خیر، آنژیوگرافی معمولاً دردناک نیست. تنها درد احتمالی در هنگام تزریق بی‌حسی موضعی در مچ دست یا کشاله ران است. در حین حرکت کاتتر در داخل عروق، بیمار هیچ دردی احساس نمی‌کند زیرا دیواره عروق گیرنده درد ندارند."
    },
    {
      question: "چقدر طول می‌کشد تا بعد از آنژیوگرافی بتوانم راه بروم؟",
      answer: "اگر آنژیوگرافی از طریق مچ دست انجام شده باشد، معمولاً می‌توانید بلافاصله راه بروید. اما اگر از طریق کشاله ران انجام شده باشد، باید چند ساعت به صورت صاف دراز بکشید تا از خونریزی جلوگیری شود."
    },
    {
      question: "آیا پس از آنژیوگرافی نیاز به بستری شدن دارم؟",
      answer: "در اکثر موارد، آنژیوگرافی ساده نیاز به بستری ندارد و بیمار همان روز مرخص می‌شود. اما اگر استنت‌گذاری یا آنژیوپلاستی انجام شده باشد، ممکن است یک شب بستری لازم باشد."
    },
    {
      question: "چه داروهایی باید پس از آنژیوگرافی مصرف کنم؟",
      answer: "معمولاً پزشک داروهایی مانند آسپرین، کلوپیدوگرل (برای جلوگیری از لخته شدن خون در استنت) و آتورواستاتین (برای کنترل کلسترول) را تجویز می‌کند. هرگز این داروها را خودسرانه قطع نکنید."
    },
    {
      question: "چه زمانی باید پس از آنژیوگرافی به پزشک مراجعه کنم؟",
      answer: "در صورت مشاهده خونریزی شدید از محل ورود کاتتر، درد شدید قفسه سینه، تب، تورم ناگهانی پاها، یا هر علامت غیرعادی دیگر، فوراً با پزشک تماس بگیرید یا به اورژانس مراجعه کنید."
    }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="آنژیوگرافی قلب: مراحل انجام، مدیریت درد و مراقبت‌های پس از آنژیوگرافی"
        description="راهنمای کامل آنژیوگرافی کرونر: مراحل انجام، آیا دردناک است، مدت زمان عمل، مراقبت‌های حیاتی پس از عمل و ویزیت متخصص قلب در منزل"
        keywords="آنژیوگرافی قلب، کاتتریزاسیون قلب، آنژیوگرافی کرونر، استنت قلب، آنژیوپلاستی، مراقبت پس از آنژیوگرافی، متخصص قلب در منزل"
        canonical="https://navidzendegi.com/articles/angiography"
        ogType="article"
        publishedTime="2024-01-15"
        modifiedTime="2024-01-15"
      />
      <ArticleSchema
        title="آنژیوگرافی قلب: مراحل انجام، مدیریت درد و مراقبت‌های حیاتی پس از آنژیوگرافی"
        description="راهنمای کامل آنژیوگرافی کرونر: مراحل انجام، آیا دردناک است، مدت زمان عمل، مراقبت‌های حیاتی پس از عمل"
        publishedTime="2024-01-15"
        modifiedTime="2024-01-15"
        image={angiographyImage}
      />

      <main className="py-12 px-4">
        <article className="container mx-auto max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} />

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            آنژیوگرافی قلب: مراحل انجام، مدیریت درد و مراقبت‌های حیاتی پس از آنژیوگرافی در منزل
          </h1>

          <div className="mb-8">
            <img
              src={angiographyImage}
              alt="آنژیوگرافی قلب - مراحل انجام و مراقبت پس از عمل"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 text-justify">
              آنژیوگرافی کرونر یک روش تشخیصی تهاجمی اما کم‌خطر است که برای بررسی دقیق وضعیت عروق خونی قلب (شریان‌های کرونر) استفاده می‌شود. این روش به <Link to="/services/cardiology" className="text-primary hover:underline">متخصص قلب و عروق</Link> کمک می‌کند تا محل دقیق انسداد، تنگی، یا گرفتگی رگ‌های قلب را شناسایی کرده و تصمیم بگیرد که آیا نیاز به درمان‌هایی مانند آنژیوپلاستی (باز کردن رگ با بالون) یا بای‌پس عروق کرونر وجود دارد یا خیر.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
              مراحل انجام آنژیوگرافی قلب
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4 text-justify">
              آنژیوگرافی معمولاً یک فرآیند ۳۰ تا ۶۰ دقیقه‌ای است که در یک آزمایشگاه کاتتریزاسیون قلب (Cath Lab) انجام می‌شود:
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              آماده‌سازی و بی‌حسی موضعی
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
              بیمار روی تخت مخصوص دراز می‌کشد. ناحیه ورود کاتتر (معمولاً شریان رادیال در مچ دست یا شریان فمورال در کشاله ران) استریل و با داروهای بی‌حسی موضعی کاملاً بی‌حس می‌شود.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              ورود کاتتر
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
              پزشک یک سوراخ کوچک در شریان ایجاد کرده و یک لوله نازک و انعطاف‌پذیر به نام کاتتر را وارد رگ می‌کند. کاتتر به آرامی از طریق شریان‌های بدن به سمت قلب و دهانه عروق کرونر هدایت می‌شود.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              تزریق ماده حاجب (Dye)
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
              پس از رسیدن کاتتر به محل مورد نظر، یک ماده حاجب (Contrast Dye) به سرعت از طریق کاتتر تزریق می‌شود. این ماده حاجب، که برای اشعه ایکس شفاف نیست، باعث می‌شود تا جریان خون در داخل شریان‌ها، هرگونه تنگی یا انسداد، به وضوح در تصاویر زنده اشعه ایکس (فلوروسکوپی) قابل مشاهده باشد.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              تصمیم‌گیری درمانی
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4 text-justify">
              پزشک پس از بررسی تصاویر، در صورت مشاهده تنگی‌های شدید، می‌تواند بلافاصله با استفاده از همان مسیر، اقدام به آنژیوپلاستی و استنت‌گذاری نماید.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
              مدیریت درد و احساس در حین آنژیوگرافی
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4 text-justify">
              بیماران اغلب نگران درد در طول این فرآیند هستند، اما لازم به ذکر است که خود عمل آنژیوگرافی معمولاً دردناک نیست:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li className="text-base text-foreground">
                <strong>درد در ناحیه ورود:</strong> تنها دردی که بیمار احساس می‌کند، در هنگام تزریق داروی بی‌حسی موضعی در مچ دست یا کشاله ران است.
              </li>
              <li className="text-base text-foreground">
                <strong>احساس تزریق ماده حاجب:</strong> برخی بیماران در حین تزریق ماده حاجب ممکن است احساس گرما یا داغی موقت را در سراسر بدن خود تجربه کنند که این حالت کاملاً طبیعی و گذرا است.
              </li>
              <li className="text-base text-foreground">
                <strong>عدم احساس درد در عروق:</strong> از آنجا که در دیواره عروق، گیرنده‌های درد وجود ندارد، بیمار در حین حرکت کاتتر در داخل شریان‌ها و قلب، هیچ دردی احساس نمی‌کند.
              </li>
              <li className="text-base text-foreground">
                <strong>آرام‌بخشی:</strong> در صورت نیاز و برای کاهش اضطراب بیمار، ممکن است پزشک داروهای آرام‌بخش ملایمی را تجویز کند.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary mt-8">
              مراقبت‌های حیاتی پس از آنژیوگرافی و ترخیص در منزل
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4 text-justify">
              مهم‌ترین مرحله، رعایت دقیق نکات پس از عمل است تا از بروز عوارضی مانند خونریزی در محل ورود جلوگیری شود.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              ۱. نکات ایمنی در ۲۴ ساعت اول
            </h3>
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li className="text-base text-foreground">
                <strong>استراحت مطلق (در صورت ورود از کشاله ران):</strong> اگر آنژیوگرافی از طریق شریان فمورال (کشاله ران) انجام شده باشد، بیمار باید چندین ساعت به صورت صاف دراز کشیده و پا را حرکت ندهد تا از لخته شدن خون در محل ورود و جلوگیری از خونریزی مطمئن شود.
              </li>
              <li className="text-base text-foreground">
                <strong>مراقبت از محل برش:</strong> از وارد آمدن هرگونه فشار، کشش یا خیس شدن محل ورود کاتتر جلوگیری شود.
              </li>
              <li className="text-base text-foreground">
                <strong>مصرف مایعات:</strong> مصرف فراوان مایعات برای کمک به دفع سریع‌تر ماده حاجب از کلیه‌ها ضروری است.
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-6">
              ۲. پایش تخصصی ویزیت در منزل
            </h3>
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li className="text-base text-foreground">
                <strong>ویزیت متخصص قلب در منزل:</strong> پس از ترخیص، برای پایش محل ورود کاتتر (از نظر وجود خونریزی، تورم یا کبودی)، بررسی علائم حیاتی و تنظیم داروهای جدید (مانند <Link to="/articles/aspirin" className="text-primary hover:underline">آسپرین</Link> یا <Link to="/articles/clopidogrel" className="text-primary hover:underline">کلوپیدوگرل</Link>)، ویزیت متخصص قلب در منزل اهمیت بالایی دارد.
              </li>
            </ul>

            <div className="bg-destructive/10 border-r-4 border-destructive p-4 my-6 rounded">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-destructive mb-2">هشدار دارویی مهم</h4>
                  <p className="text-sm text-foreground">
                    مصرف داروهایی مانند آسپرین، کلوپیدوگرل و <Link to="/articles/atorvastatin" className="text-primary hover:underline">آتورواستاتین</Link> اغلب پس از استنت‌گذاری شروع می‌شود. <strong>تحت هیچ شرایطی داروهای تجویز شده توسط پزشک را خودسرانه قطع یا تغییر ندهید</strong>، زیرا این امر خطر تشکیل لخته در استنت و سکته مجدد را به شدت افزایش می‌دهد. برای هر تغییری در دارو، حتماً با پزشک متخصص خود مشورت کنید.
                  </p>
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-3 mb-6">
              <li className="text-base text-foreground">
                <strong>علائم هشدار:</strong> در صورت مشاهده هرگونه خونریزی شدید از محل ورود کاتتر، <Link to="/articles/heart-palpitations" className="text-primary hover:underline">درد شدید قفسه سینه</Link>، تب یا تورم ناگهانی پاها، باید فوراً به پزشک اطلاع داده شود.
              </li>
            </ul>

            <div className="bg-primary/5 border-r-4 border-primary p-6 my-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">دعوت به اقدام</h3>
              <p className="text-base text-foreground leading-relaxed mb-4">
                پس از انجام آنژیوگرافی، سلامت خود را تضمین کنید. برای <strong>مراقبت پس از آنژیوگرافی</strong>, <strong>تعویض پانسمان</strong> و <strong>ویزیت متخصص قلب در منزل</strong> جهت تنظیم دقیق داروهای ضد انعقاد، همین حالا با نوید زندگی تماس بگیرید.
              </p>
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
              >
                <Phone className="ml-2 h-5 w-5" />
                تماس فوری: {phoneNumber}
              </a>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary mt-8">
              منابع (References)
            </h3>
            <ol className="list-decimal list-inside space-y-2 mb-8 text-sm text-muted-foreground">
              <li>
                Scanlon, P. J., et al. (1999). ACC/AHA guidelines for coronary angiography. A report of the American College of Cardiology/American Heart Association Task Force on Practice Guidelines. Journal of the American College of Cardiology, 33(5), 1756-1824.
              </li>
              <li>
                Kern, M. J., et al. (2018). The ACC 2017 Expert Consensus Decision Pathway on the Management of CVD Risk Reduction in Patients with Type 2 Diabetes and Atherosclerotic Cardiovascular Disease. Journal of the American College of Cardiology, 71(14), 1819-1823.
              </li>
              <li>
                Levine, G. N., et al. (2016). AHA/ACC guideline for the management of patients with stable ischemic heart disease. Journal of the American College of Cardiology, 68(17), e87-e151.
              </li>
            </ol>
          </div>

          <div className="mt-12">
            <PricingInfo />
          </div>

          <div className="mt-12">
            <FAQSection faqs={faqItems} />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </article>
      </main>
    </ArticleLayout>
  );
};

export default AngiographyPage;
