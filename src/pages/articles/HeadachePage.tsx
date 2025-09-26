import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingContact from "../../components/FloatingContact";
import LazyImage from "../../components/LazyImage";
import headacheImage from "../../assets/headache-article.jpg";

const HeadachePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingContact />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <article className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              سردرد: علت‌ها، علائم خطر و روش‌های کنترل
            </h1>
            <div className="flex justify-center mb-6">
              <LazyImage
                src={headacheImage}
                alt="درمان سردرد در منزل"
                className="rounded-lg shadow-lg max-w-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <h2>مقدمه</h2>
            <p>
              تقریباً همه افراد در طول زندگی خود سردرد را تجربه می‌کنند. در اغلب موارد، سردرد علت خطرناکی ندارد و بیشتر ناشی از استرس، خستگی یا تنش‌های روزانه است. با این حال، در برخی شرایط سردرد می‌تواند نشانه بیماری جدی باشد و نیاز به بررسی پزشکی فوری دارد.
            </p>

            <h2>چه زمانی سردرد نگران‌کننده است؟</h2>
            <p>اگر سردرد بیش از ۲۴ ساعت ادامه یابد یا با علائم زیر همراه باشد، لازم است فوراً به پزشک مراجعه کنید:</p>
            <ul>
              <li>گیجی یا خواب‌آلودگی غیرطبیعی</li>
              <li>ضعف یا بی‌حسی در اندام‌ها</li>
              <li>تاری دید یا دوبینی</li>
              <li>از دست دادن هوشیاری</li>
              <li>تهوع و استفراغ شدید ناگهانی</li>
            </ul>
            <p>این علائم می‌توانند نشانه مشکلات جدی‌تری مانند خونریزی مغزی، عفونت یا تومور باشند.</p>

            <h2>روش‌های کاهش سردردهای روزمره</h2>
            <p>در بسیاری از موارد می‌توان با تغییر سبک زندگی و رعایت نکات ساده، سردردهای معمولی را کنترل کرد:</p>
            <ul>
              <li>استراحت کوتاه در طول روز و تنفس در هوای آزاد.</li>
              <li>ماساژ ملایم گردن و شانه‌ها برای رفع گرفتگی عضلات.</li>
              <li>نشستن یا دراز کشیدن در اتاقی آرام و با نور ملایم.</li>
              <li>استفاده از مسکن‌های ساده و مجاز (مثل استامینوفن یا ایبوپروفن) در حد معمول.</li>
            </ul>

            <h2>میگرن و راه‌های پیشگیری</h2>
            <p>میگرن نوعی سردرد شایع است که اغلب با تهوع، حساسیت به نور و صدا همراه است. برای جلوگیری از بروز حملات میگرن:</p>
            <ul>
              <li>از مصرف برخی غذاها مثل شکلات و پنیر که محرک میگرن هستند خودداری کنید.</li>
              <li>وعده‌های غذایی خود را به طور منظم مصرف کنید.</li>
              <li>برنامه خواب منظم داشته باشید.</li>
              <li>استرس را با تکنیک‌های آرام‌سازی یا مشاوره روانشناسی مدیریت کنید.</li>
            </ul>

            <h2>خدمات پزشکی در منزل برای بیماران مبتلا به سردرد</h2>
            <p>اگر سردرد مکرر یا شدید دارید، استفاده از خدمات پزشکی در منزل می‌تواند به شما کمک کند:</p>
            <ul>
              <li>ویزیت پزشک در منزل برای بررسی علت سردرد</li>
              <li>انجام آزمایش‌ها یا تصویربرداری در منزل (در صورت نیاز)</li>
              <li>تزریق داروهای ضد درد یا آرام‌بخش توسط پرستار در منزل</li>
              <li>مشاوره تغذیه و سبک زندگی برای پیشگیری از حملات میگرن</li>
            </ul>

            <h2>نتیجه‌گیری</h2>
            <p>
              سردرد در بیشتر مواقع بی‌خطر است و با روش‌های ساده قابل کنترل است. اما اگر با علائم خطرناک همراه باشد، باید فوراً توسط پزشک بررسی شود. استفاده از خدمات پزشکی و پرستاری در منزل می‌تواند راهی مطمئن و راحت برای مدیریت این مشکل باشد.
            </p>
          </div>

          {/* Author and Date */}
          <div className="mt-8 pt-6 border-t border-border" dir="rtl">
            <p className="text-sm text-muted-foreground">
              نویسنده: دکتر نیره مظاهری تهرانی
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-8 p-6 bg-muted rounded-lg text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              نیاز به مشاوره دارید؟
            </h3>
            <p className="text-muted-foreground mb-4">
              برای دریافت خدمات پزشکی در منزل با ما تماس بگیرید
            </p>
            <div className="text-2xl font-bold text-primary">
              ۰۹۳۸۶۱۱۷۹۱۲
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default HeadachePage;