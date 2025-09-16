import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Phone } from "lucide-react";
import coffeeHeartImage from "@/assets/coffee-heart-article.jpg";

const CoffeeHeartPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <article className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
          {/* Article Header */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              تأثیر مصرف قهوه بر سلامت قلب
            </h1>
            <div className="flex items-center justify-center text-muted-foreground mb-4">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                قلب و عروق
              </span>
            </div>
            <div className="text-center mb-8">
              <p className="text-muted-foreground">
                نویسنده: <span className="font-semibold text-primary">دکتر نیره مظاهری تهرانی</span>
              </p>
              <p className="text-sm text-muted-foreground">متخصص قلب و عروق</p>
            </div>
            <img 
              src={coffeeHeartImage} 
              alt="تأثیر مصرف قهوه بر سلامت قلب"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
            />
          </header>

          {/* 24/7 Contact Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-primary ml-2" />
              <h3 className="text-lg font-semibold text-foreground">
                تماس شبانه‌روزی برای ویزیت پزشک در منزل
              </h3>
            </div>
            <a 
              href="tel:09386117912" 
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              ۰۹۳۸۶۱۱۷۹۱۲
            </a>
            <p className="text-muted-foreground mt-2">
              همه روزه ۲۴ ساعته در خدمت شما
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                قهوه یکی از پرمصرف‌ترین نوشیدنی‌های جهان است و تأثیر آن بر سلامت همیشه موضوع تحقیقات علمی بوده است. نتایج مطالعات نشان می‌دهند که مصرف قهوه در حد متعادل (۲ تا ۳ فنجان در روز) می‌تواند به کاهش خطر ابتلا به بیماری‌های قلبی و سکته مغزی کمک کند.
              </p>
              <p className="text-lg leading-relaxed">
                این اثرات مثبت به دلیل وجود آنتی‌اکسیدان‌ها و ترکیبات مفید در قهوه است که به بهبود عملکرد رگ‌های خونی و کاهش التهاب در بدن کمک می‌کنند.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                قهوه و سلامت قلب
              </h2>
              
              <ul className="space-y-3 text-muted-foreground pr-6 mb-6">
                <li>• مصرف روزانه ۲ تا ۳ فنجان قهوه → کاهش خطر بیماری‌های قلبی-عروقی</li>
                <li>• بهبود گردش خون و عملکرد عروق</li>
                <li>• کاهش التهاب و استرس اکسیداتیو در بدن</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed">
                با این حال، تأثیر قهوه بر سلامت افراد می‌تواند بسته به ژنتیک، وضعیت سلامتی و میزان مصرف متفاوت باشد.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                مصرف قهوه و فشار خون
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                اگرچه نوشیدن قهوه در مقادیر متوسط برای اکثر افراد بی‌خطر است، اما مصرف بیش از حد آن می‌تواند مشکلاتی ایجاد کند.
              </p>
              
              <div className="bg-card border rounded-lg p-6 mb-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  مصرف بالای کافئین (بیش از ۴۰۰ میلی‌گرم در روز، معادل حدود ۴ فنجان قهوه):
                </p>
                <ul className="space-y-2 text-muted-foreground pr-6">
                  <li>→ افزایش فشار خون</li>
                  <li>→ تپش قلب یا بی‌نظمی ضربان در افراد حساس</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-medium">
                  🔴 این موضوع به‌ویژه برای افرادی که فشار خون بالا دارند یا به کافئین حساس هستند، می‌تواند خطرناک باشد.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                توصیه‌های کاربردی
              </h2>
              
              <ul className="space-y-4 text-muted-foreground pr-6">
                <li>• نوشیدن ۲ تا ۳ فنجان قهوه در روز برای اغلب افراد مفید است.</li>
                <li>• از مصرف بیش از حد کافئین پرهیز کنید، به‌خصوص اگر فشار خون بالا دارید.</li>
                <li>• در صورت داشتن بیماری قلبی یا حساسیت به کافئین، مصرف قهوه را با مشورت پزشک تنظیم کنید.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                خدمات نوید زندگی برای بیماران قلبی
              </h2>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  اگر پس از مصرف قهوه یا در شرایط روزمره دچار علائمی مانند تپش قلب، فشار خون بالا یا درد قفسه سینه شدید، حتماً باید توسط پزشک بررسی شوید.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  در وب‌سایت نوید زندگی می‌توانید به خدمات زیر دسترسی داشته باشید:
                </p>
                
                <ul className="space-y-2 text-muted-foreground mb-6 pr-6">
                  <li>• ویزیت پزشک در منزل برای بررسی فوری علائم قلبی</li>
                  <li>• کنترل فشار خون و قند خون در منزل</li>
                  <li>• تزریق دارو و سرم در منزل</li>
                  <li>• خدمات پرستاری ویژه بیماران قلبی و سالمندان</li>
                </ul>
                
                <div className="text-center">
                  <a 
                    href="tel:09386117912"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    تماس فوری
                  </a>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                جمع‌بندی
              </h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  قهوه در حد متعادل می‌تواند برای سلامت قلب مفید باشد، اما زیاده‌روی در مصرف آن ممکن است خطراتی مانند افزایش فشار خون به همراه داشته باشد. بهترین راه، اعتدال در مصرف و در صورت نیاز، مشاوره با پزشک است. در شرایط اضطراری یا برای بررسی سریع وضعیت سلامت قلب، می‌توانید از خدمات ویزیت پزشک در منزل نوید زندگی استفاده کنید.
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
      
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default CoffeeHeartPage;