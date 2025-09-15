import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import genitalWartsImage from "@/assets/genital-warts-article.jpg";

const GenitalWartsPage = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  چگونه می‌توان فهمید زگیل تناسلی داریم؟ تشخیص در منزل
                </h1>
                <div className="mb-8">
                  <img 
                    src={genitalWartsImage} 
                    alt="تشخیص زگیل تناسلی توسط پزشک متخصص در منزل" 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  زگیل تناسلی یکی از بیماری‌های شایع مقاربتی است که بسیاری از افراد ممکن است با آن مواجه شوند. در اینجا به شما کمک می‌کنیم تا بهتر بفهمید آیا ممکن است زگیل تناسلی داشته باشید یا خیر.
                </p>

                <h2 className="text-2xl font-bold mb-6">زگیل تناسلی چیست؟</h2>
                
                <p className="leading-relaxed mb-6">
                  زگیل تناسلی ناشی از عفونت ویروس پاپیلومای انسانی (HPV) است که از طریق تماس جنسی منتقل می‌شود. این ویروس به پوست و غشاهای مخاطی بدن حمله کرده و منجر به بروز زگیل در نواحی تناسلی می‌شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">چگونه بفهمیم زگیل تناسلی داریم؟</h2>
                
                <h3 className="text-xl font-semibold mb-4">۱. مشاهده ظاهری زگیل‌ها</h3>
                <p className="leading-relaxed mb-6">
                  زگیل‌ها معمولاً در نواحی تناسلی مانند آلت تناسلی، مقعد یا واژن (در زنان) ظاهر می‌شوند. آنها به شکل برجستگی‌های کوچک، نرم و گوشتی هستند که ممکن است به صورت تک یا گروهی دیده شوند.
                </p>

                <h3 className="text-xl font-semibold mb-4">۲. توجه به علائم همراه</h3>
                <p className="leading-relaxed mb-6">
                  زگیل‌های تناسلی معمولاً با خارش، سوزش یا درد همراه هستند، به‌خصوص در مواقعی که در معرض اصطکاک یا فشار قرار می‌گیرند. در برخی افراد ممکن است خونریزی نیز رخ دهد.
                </p>

                <h3 className="text-xl font-semibold mb-4">۳. مراجعه به پزشک برای معاینه</h3>
                <p className="leading-relaxed mb-6">
                  در صورت مشاهده علائم مشکوک، بهترین راه برای تشخیص دقیق مراجعه به پزشک متخصص است. پزشک می‌تواند با معاینه دقیق وجود زگیل‌ها را تأیید کند.
                </p>

                <h3 className="text-xl font-semibold mb-4">۴. آزمایش HPV</h3>
                <p className="leading-relaxed mb-6">
                  پزشک ممکن است آزمایش‌های اضافی برای تشخیص ویروس HPV انجام دهد. برای زنان، تست پاپ اسمیر یا آزمایشات DNA برای شناسایی نوع ویروس انجام می‌شود.
                </p>

                <h2 className="text-2xl font-bold mb-6">علائم و نشانه‌های زگیل تناسلی</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>برجستگی‌های کوچک و گوشتی شبیه گل کلم</li>
                  <li>خارش یا درد در ناحیه تناسلی</li>
                  <li>زخم‌ها یا خونریزی در صورت اصطکاک</li>
                  <li>افزایش تعداد و اندازه زگیل‌ها در صورت عدم درمان</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6">اهمیت تشخیص زودهنگام</h2>
                
                <p className="leading-relaxed mb-6">
                  برخی از انواع HPV می‌توانند زگیل‌های تناسلی پرخطر را ایجاد کنند که ممکن است منجر به سرطان‌های تناسلی شوند. تشخیص سریع و درمان مناسب از پیشرفت بیماری جلوگیری می‌کند.
                </p>

                <h2 className="text-2xl font-bold mb-6">خدمات ویزیت متخصص در منزل</h2>
                
                <p className="leading-relaxed mb-8">
                  نوید زندگی خدمات ویزیت متخصص زنان و اورولوژی را در منزل ارائه می‌دهد. این خدمات شامل معاینه تخصصی، مشاوره درمانی و انجام آزمایش‌های ضروری در فضای امن و راحت منزل شماست.
                </p>

                <p className="text-xl font-semibold text-primary mb-8">
                  در صورت مشاهده علائم مشکوک، فوراً با نوید زندگی برای ویزیت متخصص در منزل تماس بگیرید!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t">
                  <Button onClick={handleCall} size="lg" className="text-lg px-8">
                    <Phone className="ml-2 h-5 w-5" />
                    تماس فوری: {phoneNumber}
                  </Button>
                  <Button onClick={handleWhatsApp} variant="outline" size="lg" className="text-lg px-8">
                    <MessageCircle className="ml-2 h-5 w-5" />
                    پیام در واتساپ
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default GenitalWartsPage;