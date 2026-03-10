import ArticleLayout from "@/components/ArticleLayout";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import traditionalMedicineImage from "@/assets/traditional-medicine-dangers.jpg";
import warfarinImage from "@/assets/warfarin-medication.jpg";
import liverEnzymesImage from "@/assets/liver-enzymes-test.jpg";
import cuppingImage from "@/assets/cupping-therapy-home.jpg";

const TraditionalMedicineDangersPage = () => {
  const faqs = [
    {
      question: "آیا همه داروهای گیاهی خطرناک هستند؟",
      answer: "خیر. بسیاری از داروهای مدرن ریشه گیاهی دارند (مثل آسپرین از درخت بید). مشکل زمانی است که گیاهان بدون تأیید علمی، بدون استاندارد کنترل کیفیت و بدون نظارت پزشک مصرف شوند."
    },
    {
      question: "آیا مصرف جوشانده گیاهی همراه داروی قلب خطرناک است؟",
      answer: "بله، بسیاری از گیاهان مثل سیر غلیظ، زنجبیل و پنجه شیطان با داروهای ضدلخته مثل وارفارین و پلاویکس تداخل دارند و ریسک خونریزی داخلی را بالا می‌برند. حتماً قبل از مصرف با پزشک مشورت کنید."
    },
    {
      question: "داروهای عطاری چه آسیبی به کبد می‌زنند؟",
      answer: "بسیاری از جوشانده‌ها و داروهای عطاری حاوی فلزات سنگین (سرب، جیوه) یا ترکیبات سمی هستند که باعث هپاتیت دارویی (التهاب شدید کبد) می‌شوند. آزمایش عملکرد کبد (LFT) می‌تواند این آسیب‌ها را آشکار کند."
    },
    {
      question: "حجامت در عطاری چه خطراتی دارد؟",
      answer: "حجامت در محیط غیربهداشتی می‌تواند منجر به انتقال هپاتیت B و C و حتی HIV شود. همچنین خون‌گیری بی‌رویه در سالمندان باعث افت فشار خون و شوک قلبی می‌شود."
    },
    {
      question: "چگونه می‌توان از سلامت کبد و کلیه بعد از مصرف داروهای گیاهی مطمئن شد؟",
      answer: "تیم نوید زندگی با انجام آزمایش عملکرد کبد (LFT) و کلیه (Creatinine) در منزل، سلامت اعضای حیاتی شما را بررسی می‌کند. برای هماهنگی با شماره 09386117912 تماس بگیرید."
    }
  ];

  const relatedArticles = [
    {
      title: "وارفارین: راهنمای مصرف و هشدارها",
      image: warfarinImage,
      link: "/articles/warfarin",
      description: "راهنمای جامع مصرف وارفارین، تداخلات غذایی و دارویی",
      category: "دارو"
    },
    {
      title: "آزمایش آنزیم‌های کبدی",
      image: liverEnzymesImage,
      link: "/articles/liver-enzymes",
      description: "اهمیت آزمایش عملکرد کبد و تفسیر نتایج آن",
      category: "آزمایشگاه"
    },
    {
      title: "حجامت و فصد: نکات ایمنی",
      image: cuppingImage,
      link: "/articles/cupping-therapy",
      description: "بررسی علمی حجامت و نکات بهداشتی ضروری",
      category: "سلامت عمومی"
    }
  ];

  const breadcrumbItems = [
    { name: "صفحه اصلی", url: "/" },
    { name: "مقالات پزشکی", url: "/articles" },
    { name: "خطرات طب سنتی غیرعلمی", url: "/articles/traditional-medicine-dangers" }
  ];

  return (
    <ArticleLayout>
      <SEOHead
        title="خطرات طب سنتی غیرعلمی: تداخلات دارویی و آسیب کبد و کلیه | نوید زندگی"
        description="بررسی علمی خطرات داروهای گیاهی و طب سنتی غیراصولی: تداخل با داروهای قلب، سمیت کبدی و کلیوی، آلودگی میکروبی. آزمایش خون و ویزیت متخصص در منزل"
        keywords="عوارض داروهای گیاهی بر کبد, تداخل داروی قلب با گیاهان سنتی, آزمایش خون در منزل, نارسایی کلیه ناشی از طب سنتی, ویزیت متخصص داخلی در خانه, نوید زندگی"
        canonical="https://navidzendegi.com/articles/traditional-medicine-dangers"
        ogType="article"
        publishedTime="2025-03-10"
        modifiedTime="2025-03-10"
      />
      <ArticleSchema
        title="خطرات طب سنتی غیرعلمی: تداخلات دارویی و آسیب به کبد و کلیه"
        description="بررسی علمی خطرات داروهای گیاهی غیراصولی و نقش پایش‌های پزشکی در منزل"
        publishedTime="2025-03-10"
        modifiedTime="2025-03-10"
        image={traditionalMedicineImage}
      />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <BreadcrumbNavigation items={breadcrumbItems} />

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-relaxed">
            خطرات طب سنتی غیرعلمی: تداخلات دارویی، سمیت کبدی و از دست رفتن زمان طلایی درمان
          </h1>

          <p className="text-sm text-muted-foreground mb-4">تاریخ انتشار: ۱۴۰۴/۱۲/۲۰</p>

          <img
            src={traditionalMedicineImage}
            alt="خطرات داروهای گیاهی و طب سنتی غیراصولی - تداخل با داروهای شیمیایی"
            className="w-full rounded-lg mb-8"
          />

          <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-amber-800 font-semibold mb-2">هشدار مهم</p>
                <p className="text-amber-700 text-sm">
                  هرگز داروهای گیاهی را بدون مشورت پزشک و به صورت خودسرانه مصرف نکنید. جایگزین کردن طب سنتی با درمان‌های استاندارد پزشکی می‌تواند جان شما را به خطر بیندازد.
                </p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            ریشه‌های تاریخی طب سنتی در استفاده از گیاهان دارویی ارزشمند است، اما استفاده غیرعلمی، خودسرانه و جایگزین کردن آن با پزشکی مدرن می‌تواند پیامدهای جبران‌ناپذیری برای سلامت بدن داشته باشد. مرکز نوید زندگی با خدمات تشخیصی در منزل، به شما کمک می‌کند تا آسیب‌های احتمالی را شناسایی و مسیر درمان صحیح را آغاز کنید.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۱. تداخلات دارویی؛ بمب ساعتی در بدن</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            بسیاری از بیماران تصور می‌کنند چون داروهای گیاهی «طبیعی» هستند، پس بی‌خطرند. اما گیاهان حاوی ترکیبات شیمیایی پیچیده‌ای هستند که می‌توانند با داروهای شیمیایی واکنش دهند.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 mr-4">
            <li>
              <strong>مثال خطرناک:</strong> مصرف گیاهانی مثل «پنجه شیطان» یا «سیر غلیظ» همراه با داروهای ضد لخته (مثل <Link to="/articles/warfarin" className="text-primary hover:underline">وارفارین</Link> یا پلاویکس) ریسک خونریزی داخلی و مغزی را به شدت بالا می‌برد.
            </li>
            <li>
              <strong>خدمات نوید زندگی:</strong> تیم <Link to="/services/laboratory" className="text-primary hover:underline">آزمایشگاه ما در منزل</Link>، با انجام تست‌های انعقادی (PT/INR)، اثرات تداخلات دارویی پنهان را بررسی می‌کند تا از حوادث عروقی پیشگیری شود.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۲. سمیت کبدی و کلیوی (نارسایی خاموش)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            کبد و کلیه مسئول دفع سموم بدن هستند. بسیاری از جوشانده‌ها و داروهای عطاری حاوی فلزات سنگین (مثل سرب و جیوه) یا ترکیباتی هستند که باعث التهاب شدید کبد (هپاتیت دارویی) می‌شوند.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 mr-4">
            <li>
              <strong>آسیب کلیوی:</strong> مصرف خودسرانه برخی گیاهان برای «دفع سنگ کلیه» ممکن است باعث رسوب کریستال‌های سمی و نارسایی حاد کلیه شود.
            </li>
            <li>
              <strong>خدمات نوید زندگی:</strong> ما با انجام آزمایش عملکرد کبد (LFT) و کلیه (Creatinine) در منزل، سلامت اعضای حیاتی شما را که ممکن است تحت تأثیر داروهای گیاهی آسیب دیده باشند، رصد می‌کنیم.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۳. از دست رفتن «زمان طلایی» درمان</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            بزرگترین تخریب طب سنتی نه در خودِ مواد، بلکه در تأخیر در درمان اصلی است.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 mr-4">
            <li>
              <strong>در بیماری‌های قلبی:</strong> بیماری که به جای آنژیوگرافی یا مصرف استاتین، به دنبال «باز کردن رگ با شربت سیر و لیمو» است، عملاً اجازه می‌دهد پلاک‌های چربی سخت‌تر شده و ریسک سکته قلبی بالا برود.
            </li>
            <li>
              <strong>خدمات نوید زندگی:</strong> ما با تجهیزات <Link to="/services/echo-ecg" className="text-primary hover:underline">اکوکاردیوگرافی</Link> و <Link to="/articles/holter-guide" className="text-primary hover:underline">هولتر در منزل</Link>، وضعیت واقعی عروق را به بیمار نشان می‌دهیم تا درمان علمی را آغاز کند.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۴. آلودگی‌های میکروبی و قارچی</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            داروهای گیاهی که در محیط‌های غیراستاندارد (عطاری‌ها) نگهداری می‌شوند، اغلب آلوده به آفلاتوکسین (سم قارچی سرطان‌زا) یا باکتری‌های مدفوعی هستند که می‌توانند باعث عفونت‌های گوارشی و خونی شدید شوند.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">۵. حجامت و فصد غیراصولی؛ خطر عفونت و کم‌خونی</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <Link to="/articles/cupping-therapy" className="text-primary hover:underline">حجامت</Link> در محیط‌های غیربهداشتی می‌تواند منجر به انتقال بیماری‌های خونی مثل هپاتیت B و C و حتی <Link to="/articles/hiv" className="text-primary hover:underline">HIV</Link> شود. همچنین فصد (رگ‌زنی) بی‌رویه، در سالمندان باعث افت ناگهانی فشار خون و شوک قلبی می‌شود.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mb-6 mr-4">
            <li>
              <strong>پایش در منزل:</strong> متخصصین نوید زندگی با انجام آزمایش CBC (شمارش کامل خون) در محل، سطح <Link to="/articles/hemoglobin" className="text-primary hover:underline">هموگلوبین</Link> و ایمنی شما را چک می‌کنند تا اثرات مخرب خون‌گیری‌های غیرعلمی جبران شود.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">نتیجه‌گیری</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            پزشکی مدرن مخالف استفاده از طبیعت نیست، اما مخالف رفتار غیرعلمی با جان انسان است. اگر مایل به استفاده از طب مکمل هستید، این کار باید تحت نظر پزشک و پس از انجام آزمایش‌های دقیق باشد. مرکز نوید زندگی با آوردن ابزارهای تشخیصی پیشرفته به منزل، مرز بین «خرافه» و «واقعیت سلامتی» شما را مشخص می‌کند.
          </p>

          {/* CTA Section */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              نگران عوارض داروهای گیاهی هستید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              تیم نوید زندگی با آزمایش عملکرد کبد، کلیه و تست‌های انعقادی در منزل، سلامت شما را بررسی می‌کند.
            </p>
            <a
              href="tel:09386117912"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              تماس: 09386117912
            </a>
          </div>
        </article>

        <FAQSection faqs={faqs} />
        <RelatedArticles articles={relatedArticles} />
      </main>
    </ArticleLayout>
  );
};

export default TraditionalMedicineDangersPage;
