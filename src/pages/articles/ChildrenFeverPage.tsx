import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import childrenFeverImage from "@/assets/children-fever-article.jpg";

const ChildrenFeverPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                تب در کودکان | علل، درمان خانگی و ویزیت پزشک در منزل
              </h1>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={childrenFeverImage} 
                  alt="تب در کودکان و درمان خانگی"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <div className="space-y-6 text-foreground leading-relaxed text-lg">
                  <p>
                    تب در کودکان یکی از نگرانی‌های همیشگی والدین است و در بسیاری از مواقع نشان‌دهنده تلاش بدن برای مقابله با عفونت‌هاست. به گزارش NCBI، دمای بالاتر از ۳۸٫۵ درجه سانتی‌گراد در کودکان به‌عنوان تب شناخته می‌شود. در نوزادان زیر ۳ ماه، حتی تب خفیف هم نیازمند ویزیت فوری پزشک است.
                  </p>

                  <p>
                    در بیشتر موارد، تب ناشی از عفونت‌های ویروسی است و طی ۲ تا ۳ روز خودبه‌خود برطرف می‌شود. با این حال، آگاهی از روش‌های مدیریت تب در منزل و زمان مراجعه به پزشک برای والدین بسیار مهم است.
                  </p>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    علل شایع تب در کودکان
                  </h2>

                  <ul className="list-disc list-inside space-y-2">
                    <li>عفونت‌های ویروسی مانند سرماخوردگی یا آنفولانزا</li>
                    <li>عفونت‌های باکتریایی (گوش، گلو، ادراری و …)</li>
                    <li>واکنش به واکسیناسیون</li>
                    <li>مشکلات التهابی یا بیماری‌های دیگر</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    درمان تب در کودکان در منزل
                  </h2>

                  <p>
                    برای کاهش تب کودک در خانه می‌توانید از روش‌های زیر استفاده کنید:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>مصرف مایعات کافی برای جلوگیری از کم‌آبی بدن</li>
                    <li>پوشاندن لباس سبک و راحت</li>
                    <li>نگه‌داشتن دمای محیط در شرایط معتدل</li>
                    <li>استفاده از داروهای ضد تب مانند استامینوفن یا ایبوپروفن (طبق سن و وزن کودک و تجویز پزشک)</li>
                  </ul>

                  <div className="bg-amber-50 border-r-4 border-amber-400 p-4 my-6">
                    <p className="text-amber-800 font-medium">
                      ⚠️ توجه: استفاده خودسرانه و بیش‌ازحد از دارو توصیه نمی‌شود و بهتر است تحت نظر پزشک انجام شود.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    چه زمانی تب کودکان خطرناک است؟
                  </h2>

                  <p>
                    اگر تب کودک با علائم زیر همراه باشد، مراجعه به پزشک ضروری است:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>تب بالاتر از ۳۹٫۵ درجه سانتی‌گراد</li>
                    <li>ادامه تب بیش از ۳ روز</li>
                    <li>تشنج، خواب‌آلودگی غیرطبیعی یا بی‌حالی شدید</li>
                    <li>بی‌اشتهایی شدید یا کم‌آبی بدن</li>
                    <li>بثورات پوستی یا تغییر رنگ لب‌ها و پوست</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    ویزیت پزشک در منزل برای تب کودکان
                  </h2>

                  <p>
                    وقتی تب کودک شدید است یا والدین نگران وضعیت او هستند، رفتن به بیمارستان یا درمانگاه ممکن است سخت و وقت‌گیر باشد. در چنین شرایطی، ویزیت پزشک کودکان در منزل بهترین انتخاب است.
                  </p>

                  <p>
                    در نوید زندگی می‌توانید به راحتی درخواست پزشک در منزل دهید. پزشکان باتجربه ما با حضور در منزل:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>وضعیت کودک را بررسی می‌کنند</li>
                    <li>علت تب را تشخیص می‌دهند</li>
                    <li>درمان مناسب (دارویی یا غیر دارویی) را آغاز می‌کنند</li>
                  </ul>

                  <p>
                    این خدمات باعث می‌شود بدون نیاز به مراجعه حضوری، در کوتاه‌ترین زمان بهترین مراقبت را دریافت کنید.
                  </p>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    جمع‌بندی
                  </h2>

                  <p>
                    تب در کودکان معمولاً نشانه یک عفونت ساده است و اغلب با مراقبت‌های خانگی بهبود می‌یابد. اما در مواردی که تب شدید یا طولانی باشد، یا همراه با علائم هشداردهنده بروز کند، باید حتماً توسط پزشک بررسی شود.
                  </p>

                  <p>
                    با استفاده از خدمات ویزیت پزشک در منزل نوید زندگی می‌توانید در سریع‌ترین زمان، بهترین مراقبت پزشکی را برای فرزندتان در خانه دریافت کنید.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 24/7 Contact Section */}
        <section className="bg-primary/5 py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ویزیت پزشک در منزل ۲۴ ساعته</p>
                    <p className="text-primary font-bold">۰۲۱-۱۲۳۴۵۶۷۸</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                فرزند شما تب دارد؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                پزشکان کودکان نوید زندگی آماده ویزیت در منزل و ارائه بهترین مراقبت‌های پزشکی هستند
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  تماس با ما
                </a>
                <a 
                  href="/services/pediatrics"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  خدمات کودکان
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ChildrenFeverPage;