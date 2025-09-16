import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import migrainImage from "@/assets/migraine-article.jpg";

const MigrainePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                سردرد میگرنی | چیست، علائم و عوامل تحریک‌کننده
              </h1>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={migrainImage} 
                  alt="سردرد میگرنی و علائم آن"
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
                    میگرن یکی از شایع‌ترین اختلالات عصبی است که با سردردهای شدید و ضربان‌دار همراه می‌شود. افراد مبتلا اغلب حساسیت به نور، صدا و حتی بو را تجربه می‌کنند و در بسیاری از موارد حالت تهوع یا استفراغ نیز وجود دارد.
                  </p>

                  <p>
                    طبق گزارش انجمن سردرد آمریکا، حدود ۱۰٪ از کودکان به میگرن مبتلا هستند، اما به دلیل تشخیص نادرست، بسیاری از آن‌ها تحت درمان مناسب قرار نمی‌گیرند.
                  </p>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    علائم میگرن
                  </h2>

                  <p>
                    علائم میگرن می‌تواند در بزرگسالان و کودکان متفاوت باشد، اما رایج‌ترین آن‌ها عبارت‌اند از:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>سردرد ضربان‌دار (اغلب یک‌طرفه، اما در کودکان ممکن است دوطرفه باشد)</li>
                    <li>حساسیت شدید به نور و صدا</li>
                    <li>حالت تهوع و استفراغ</li>
                    <li>تاری دید یا دیدن هاله‌های نوری (Aura)</li>
                    <li>افزایش درد با فعالیت روزانه یا حرکت</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    عوامل تحریک‌کننده میگرن
                  </h2>

                  <p>
                    میگرن معمولاً ترکیبی از عوامل ژنتیکی و محیطی دارد. محرک‌های رایج شامل موارد زیر هستند:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>تغییرات هورمونی (به‌ویژه در دوران بلوغ یا قاعدگی)</li>
                    <li>کمبود خواب یا بی‌نظمی در ساعات خواب</li>
                    <li>استرس و فشار روانی</li>
                    <li>کم‌آبی بدن و نخوردن وعده‌های غذایی</li>
                    <li>نور شدید، صداهای بلند یا بوهای تند</li>
                    <li>مصرف بعضی خوراکی‌ها و نوشیدنی‌ها (شکلات، کافئین، غذاهای فرآوری‌شده)</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    درمان و پیشگیری میگرن | راهکارها و نکات کاربردی
                  </h2>

                  <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                    درمان خانگی و تغییر سبک زندگی
                  </h3>

                  <p>
                    اولین قدم برای کنترل میگرن، تغییر در سبک زندگی است. برخی اقدامات مؤثر عبارت‌اند از:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>خواب کافی و منظم</li>
                    <li>تغذیه سالم با وعده‌های منظم</li>
                    <li>نوشیدن مایعات کافی برای پیشگیری از کم‌آبی</li>
                    <li>کاهش استرس با ورزش سبک یا مدیتیشن</li>
                    <li>اجتناب از محرک‌های شناخته‌شده</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                    داروهای مورد استفاده در میگرن
                  </h3>

                  <ul className="list-disc list-inside space-y-2">
                    <li>داروهای بدون نسخه مثل ایبوپروفن یا استامینوفن در مراحل اولیه حمله میگرنی مؤثر هستند.</li>
                    <li>در موارد شدیدتر، پزشک ممکن است داروهای پیشگیرانه (Prophylaxis) مانند توپیرامات، آمی‌تریپتیلین یا مکمل‌هایی مثل ریبوفلاوین تجویز کند.</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    پیشگیری مؤثر با ثبت عادات روزانه
                  </h2>

                  <p>
                    داشتن یک دفترچه ثبت سردرد (Headache Diary) به افراد کمک می‌کند تا الگوهای بروز میگرن و محرک‌های آن را شناسایی کنند. این کار باعث می‌شود پیشگیری و مدیریت بیماری دقیق‌تر انجام شود.
                  </p>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    ویزیت پزشک در منزل برای میگرن
                  </h2>

                  <p>
                    وقتی حملات میگرنی شدید و مکرر می‌شوند، مراجعه به پزشک برای بررسی و درمان ضروری است. اگر رفتن به مطب یا درمانگاه برای شما سخت است، می‌توانید از خدمات ویزیت پزشک در منزل استفاده کنید.
                  </p>

                  <p>
                    در نوید زندگی امکان درخواست پزشک در منزل وجود دارد تا پزشک متخصص با حضور در خانه:
                  </p>

                  <ul className="list-disc list-inside space-y-2">
                    <li>وضعیت شما را ارزیابی کند</li>
                    <li>دارو و روش درمانی مناسب تجویز نماید</li>
                    <li>درباره راه‌های پیشگیری و مدیریت بهتر میگرن مشاوره دهد</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                    جمع‌بندی
                  </h2>

                  <p>
                    میگرن یک سردرد ساده نیست و می‌تواند کیفیت زندگی فرد را به‌شدت تحت تأثیر قرار دهد. با شناخت محرک‌ها، اصلاح سبک زندگی و دریافت درمان مناسب می‌توان شدت و تعداد حملات میگرنی را کاهش داد.
                  </p>

                  <p>
                    اگر سردردهای مکرر یا شدید دارید، برای تشخیص درست و درمان تخصصی می‌توانید از خدمات ویزیت پزشک در منزل نوید زندگی استفاده کنید تا بدون اتلاف وقت، بهترین مراقبت پزشکی را در منزل دریافت کنید.
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
                میگرن شدید دارید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                پزشکان متخصص نوید زندگی آماده ویزیت در منزل و تشخیص و درمان میگرن هستند
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  تماس با ما
                </a>
                <a 
                  href="/services/neurology"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  خدمات مغز و اعصاب
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

export default MigrainePage;