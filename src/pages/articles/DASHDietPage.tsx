import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FAQSection from "@/components/FAQSection";
import PricingInfo from "@/components/PricingInfo";
import RelatedArticles from "@/components/RelatedArticles";
import dashDietImage from "@/assets/dash-diet.jpg";
import bloodPressureImage from "@/assets/blood-pressure-article.jpg";
import mediterraneanDietImage from "@/assets/mediterranean-diet.jpg";
import diabetesImage from "@/assets/diabetes-article.jpg";
import { Link } from "react-router-dom";

const DASHDietPage = () => {
  const faqs = [
    {
      question: "رژیم DASH چیست و چه کسانی باید از آن استفاده کنند؟",
      answer: "رژیم DASH یک الگوی تغذیه‌ای علمی است که برای کنترل و پیشگیری از فشار خون بالا طراحی شده است. این رژیم برای همه افراد مفید است، به‌ویژه کسانی که فشار خون بالا دارند، در معرض خطر بیماری‌های قلبی هستند، یا می‌خواهند سبک زندگی سالم‌تری داشته باشند."
    },
    {
      question: "رژیم DASH چقدر طول می‌کشد تا اثر کند؟",
      answer: "معمولاً در عرض ۲ تا ۴ هفته از شروع رژیم DASH، کاهش قابل توجه در فشار خون مشاهده می‌شود. البته نتایج بهتر با رعایت مداوم و ترکیب با فعالیت بدنی منظم حاصل می‌شود."
    },
    {
      question: "آیا رژیم DASH برای کاهش وزن هم مناسب است؟",
      answer: "بله، رژیم DASH نه تنها برای کنترل فشار خون، بلکه برای کاهش وزن سالم نیز مناسب است. این رژیم با تأکید بر غذاهای پرمغذی و کم‌کالری، به کاهش وزن و بهبود ترکیب بدنی کمک می‌کند."
    },
    {
      question: "آیا می‌توانم رژیم DASH را بدون مشورت با پزشک شروع کنم؟",
      answer: "اگرچه رژیم DASH یک رژیم سالم و علمی است، اما بهتر است قبل از شروع آن، به‌ویژه اگر بیماری خاصی دارید یا دارو مصرف می‌کنید، با پزشک یا متخصص تغذیه مشورت کنید. خدمات ویزیت پزشک در منزل نوید زندگی می‌تواند به شما در این زمینه کمک کند."
    },
    {
      question: "چه غذاهایی در رژیم DASH ممنوع هستند؟",
      answer: "در رژیم DASH، غذاهای پرنمک، گوشت‌های فرآوری‌شده، شیرینی‌های صنعتی، نوشیدنی‌های قندی، فست‌فودها و چربی‌های اشباع شده محدود یا ممنوع هستند. هدف استفاده از غذاهای طبیعی، تازه و کم‌فرآوری است."
    }
  ];

  const relatedArticles = [
    {
      title: "کنترل فشار خون بالا",
      description: "راهکارهای عملی برای مدیریت و کاهش فشار خون بالا",
      image: bloodPressureImage,
      link: "/articles/high-blood-pressure",
      category: "سلامت قلب"
    },
    {
      title: "رژیم مدیترانه‌ای و سلامت قلب",
      description: "تأثیرات مثبت رژیم مدیترانه‌ای بر سلامت قلب و عروق",
      image: mediterraneanDietImage,
      link: "/articles/mediterranean-diet",
      category: "تغذیه"
    },
    {
      title: "دیابت و کنترل قند خون",
      description: "اهمیت تغذیه صحیح در مدیریت دیابت و کنترل قند خون",
      image: diabetesImage,
      link: "/articles/diabetes",
      category: "سلامت عمومی"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="رژیم DASH؛ راهی علمی برای کاهش فشار خون و تقویت سلامت قلب | نوید زندگی"
        description="رژیم غذایی DASH یک الگوی تغذیه‌ای علمی برای کنترل فشار خون و پیشگیری از بیماری‌های قلبی است. با ویزیت پزشک در منزل نوید زندگی، برنامه تغذیه‌ای شخصی‌سازی شده دریافت کنید."
        keywords="رژیم DASH, کاهش فشار خون, رژیم غذایی قلبی, پیشگیری از بیماری قلبی, تغذیه سالم, ویزیت پزشک در منزل"
        canonical="https://navidzendegi.ir/articles/dash-diet"
        ogType="article"
        publishedTime="2024-01-15"
        modifiedTime="2024-01-15"
      />
      
      <ArticleSchema 
        title="رژیم DASH؛ راهی علمی برای کاهش فشار خون و تقویت سلامت قلب"
        description="رژیم غذایی DASH یک الگوی تغذیه‌ای علمی برای کنترل فشار خون و پیشگیری از بیماری‌های قلبی است."
        publishedTime="2024-01-15"
        modifiedTime="2024-01-15"
        image="/assets/dash-diet.jpg"
      />
      
      <Header />
      
      <main className="pt-32 pb-16">
        <article className="container mx-auto max-w-4xl px-4">
          <BreadcrumbNavigation 
            items={[
              { name: "خانه", url: "/" },
              { name: "مقالات", url: "/articles" },
              { name: "رژیم DASH", url: "/articles/dash-diet" }
            ]}
          />

          <img 
            src={dashDietImage}
            alt="رژیم DASH - غذاهای سالم برای کنترل فشار خون"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <h1 className="text-4xl font-bold text-foreground mb-6">
            رژیم DASH؛ راهی علمی برای کاهش فشار خون و تقویت سلامت قلب
          </h1>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">معرفی رژیم DASH</h2>
              <p className="leading-relaxed">
                رژیم غذایی DASH (Dietary Approaches to Stop Hypertension) یکی از معتبرترین و علمی‌ترین الگوهای تغذیه‌ای است که توسط مؤسسه ملی قلب، ریه و خون آمریکا (NHLBI) معرفی شده است. هدف اصلی این رژیم، <Link to="/articles/high-blood-pressure" className="text-primary hover:underline">پیشگیری و کنترل فشار خون بالا</Link> و در نهایت کاهش خطر بیماری‌های قلبی و سکته مغزی است.
              </p>
              <p className="leading-relaxed">
                این رژیم بر مصرف بیشتر میوه‌ها، سبزیجات، غلات کامل، لبنیات کم‌چرب، حبوبات، مغزها و روغن‌های گیاهی تأکید دارد و توصیه می‌کند مصرف نمک، گوشت‌های پرچرب، شیرینی‌ها و نوشیدنی‌های قندی محدود شود.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">چرا رژیم DASH برای قلب مفید است؟</h2>
              <p className="leading-relaxed">
                مطالعات بالینی نشان داده‌اند که رژیم DASH تأثیر چشمگیری بر فشار خون و سلامت قلب دارد:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>باعث کاهش فشار خون سیستولیک حدود ۵ میلی‌متر جیوه و فشار دیاستولیک حدود ۲ تا ۳ میلی‌متر جیوه می‌شود</li>
                <li>خطر ابتلا به بیماری‌های قلبی و سکته را کاهش می‌دهد</li>
                <li>به بهبود سطح چربی خون (کاهش LDL و افزایش HDL) کمک می‌کند</li>
                <li>وزن بدن و التهاب سیستمیک را کاهش می‌دهد و در نتیجه سلامت متابولیک را بهبود می‌بخشد</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">اجزای اصلی رژیم DASH (برای ۲۰۰۰ کالری در روز)</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-border rounded-lg">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-right border-b border-border">گروه غذایی</th>
                      <th className="px-4 py-3 text-right border-b border-border">مقدار توصیه‌شده</th>
                      <th className="px-4 py-3 text-right border-b border-border">مثال‌ها</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border-b border-border">غلات کامل</td>
                      <td className="px-4 py-3 border-b border-border">۶ تا ۸ واحد در روز</td>
                      <td className="px-4 py-3 border-b border-border">نان سبوس‌دار، برنج قهوه‌ای، جو دوسر</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-border">سبزیجات</td>
                      <td className="px-4 py-3 border-b border-border">۴ تا ۵ واحد در روز</td>
                      <td className="px-4 py-3 border-b border-border">اسفناج، هویج، کلم بروکلی</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-border">میوه‌ها</td>
                      <td className="px-4 py-3 border-b border-border">۴ تا ۵ واحد در روز</td>
                      <td className="px-4 py-3 border-b border-border">سیب، پرتقال، موز</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-border">لبنیات کم‌چرب</td>
                      <td className="px-4 py-3 border-b border-border">۲ تا ۳ واحد در روز</td>
                      <td className="px-4 py-3 border-b border-border">ماست و شیر کم‌چرب</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-border">گوشت سفید / ماهی / حبوبات</td>
                      <td className="px-4 py-3 border-b border-border">حداکثر ۶ واحد در روز</td>
                      <td className="px-4 py-3 border-b border-border">مرغ، عدس، لوبیا</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-border">مغزها و دانه‌ها</td>
                      <td className="px-4 py-3 border-b border-border">۴ تا ۵ واحد در هفته</td>
                      <td className="px-4 py-3 border-b border-border">گردو، بادام، تخم آفتابگردان</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-border">شیرینی‌ها</td>
                      <td className="px-4 py-3 border-b border-border">حداکثر ۵ واحد در هفته</td>
                      <td className="px-4 py-3 border-b border-border">شکلات تلخ، میوه خشک</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">سدیم (نمک)</td>
                      <td className="px-4 py-3">کمتر از ۲۳۰۰ میلی‌گرم در روز</td>
                      <td className="px-4 py-3">برای اثر بیشتر تا ۱۵۰۰ میلی‌گرم کاهش یابد</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">نکات عملی برای اجرای رژیم DASH در خانه</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>مصرف نمک را کاهش دهید و از ادویه‌های طبیعی برای طعم‌دهی استفاده کنید</li>
                <li>بخش بزرگی از هر وعده غذایی را به میوه و سبزیجات تازه اختصاص دهید</li>
                <li>غلات سبوس‌دار را جایگزین برنج سفید یا نان سفید کنید</li>
                <li>گوشت قرمز را محدود و از منابع پروتئین گیاهی استفاده کنید</li>
                <li>لبنیات کم‌چرب یا بدون چربی را انتخاب کنید</li>
                <li>نوشیدنی‌های شیرین را با آب، دوغ کم‌نمک یا آب‌میوه طبیعی جایگزین کنید</li>
                <li>ورزش روزانه و خواب کافی را همراه رژیم رعایت کنید تا بهترین نتیجه را بگیرید</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">ارتباط رژیم DASH با خدمات پزشکی در منزل</h2>
              <p className="leading-relaxed">
                افرادی که <Link to="/articles/high-blood-pressure" className="text-primary hover:underline">فشار خون بالا</Link> یا بیماری قلبی دارند می‌توانند با کمک <Link to="/services/internal-medicine" className="text-primary hover:underline">پزشک متخصص در منزل</Link>، رژیم DASH را به‌صورت شخصی‌سازی‌شده اجرا کنند. در سایت <a href="tel:09386117912" className="text-primary hover:underline">نوید زندگی</a>، امکان ویزیت پزشک در منزل برای بررسی فشار خون، تنظیم برنامه تغذیه‌ای و پیگیری روند درمان فراهم است.
              </p>
              <p className="leading-relaxed">
                پزشک می‌تواند:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>رژیم DASH را با توجه به داروها و وضعیت بیمار تنظیم کند</li>
                <li>برنامه غذایی و سبک زندگی را به‌صورت مستمر پایش کند</li>
                <li>از بروز نوسانات فشار خون جلوگیری نماید</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-8 mb-4">جمع‌بندی</h2>
              <p className="leading-relaxed">
                رژیم DASH تنها یک برنامه غذایی نیست؛ بلکه سبک زندگی سالمی است که می‌تواند فشار خون، چربی خون و وزن را به تعادل برساند و از بروز بیماری‌های قلبی پیشگیری کند. اجرای این رژیم همراه با مشاوره و نظارت <Link to="/general-doctor" className="text-primary hover:underline">پزشک در منزل</Link>، می‌تواند راهی ایمن و مؤثر برای حفظ سلامت قلب شما باشد.
              </p>
            </section>

            <section className="bg-primary/5 p-6 rounded-lg mt-8">
              <h3 className="text-2xl font-bold mb-4">منابع (References)</h3>
              <ul className="space-y-2 text-sm">
                <li>National Heart, Lung, and Blood Institute (NHLBI) – DASH Eating Plan</li>
                <li>Siervo M, Lara J, Chowdhury S, et al. Effects of the DASH diet on blood pressure in adults with and without hypertension: a systematic review and meta-analysis. British Journal of Nutrition. 2015;113(6):1–12. PMCID: PMC6413235</li>
                <li>Sacks FM, et al. Effects on blood pressure of reduced dietary sodium and the DASH diet. NEJM, 2001;344:3–10. PubMed: 11136953</li>
                <li>Appel LJ, et al. A clinical trial of the effects of dietary patterns on blood pressure. NEJM, 1997;336:1117–1124. PubMed: 9099655</li>
                <li>DASH Diet: An Overview. NCBI Bookshelf. https://www.ncbi.nlm.nih.gov/books/NBK482514/</li>
              </ul>
            </section>
          </div>

          <FAQSection faqs={faqs} />
          
          <div className="mt-12">
            <PricingInfo />
          </div>

          <RelatedArticles articles={relatedArticles} />
        </article>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default DASHDietPage;
