import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import elderlyImage from "@/assets/elderly-care-home.jpg";

const AboutUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">درباره نوید زندگی | پیشرو در خدمات پزشکی در منزل</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative">
            <img 
              src={elderlyImage} 
              alt="مراقبت از سالمندان در منزل - خدمات نوید زندگی"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">نوید زندگی | رهبر خدمات پزشکی در منزل تهران</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>نوید زندگی</strong> با بیش از ۵ سال تجربه در ارائه خدمات <strong>پزشکی در منزل تهران</strong>، 
              به معتبرترین و پیشروترین ارائه‌دهنده <strong>ویزیت پزشک در منزل</strong> و <strong>پرستاری در منزل</strong> 
              تبدیل شده است. تیم متخصص نوید زندگی متشکل از پزشکان و پرستاران مجرب با مجوزهای معتبر است که 
              با بالاترین کیفیت و دقت خدمات‌رسانی می‌کنند.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-right text-primary">شروع فعالیت</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-right text-muted-foreground leading-relaxed">
                <strong>نوید زندگی</strong> از سال ۱۳۹۸ با تمرکز ویژه بر ارائه‌ی خدمات <strong>پزشکی در منزل تهران</strong> 
                فعالیت خود را آغاز کرد. در این سال‌ها تجربه‌ای ارزشمند و منحصربه‌فرد در حوزه‌ی <strong>ویزیت پزشک در منزل</strong>، 
                <strong>پرستاری در منزل</strong> و مراقبت‌های تخصصی خانگی کسب کرده‌ایم.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-right text-primary">ماموریت ما</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-right text-muted-foreground leading-relaxed">
                با توجه به نیاز فزاینده جامعه به خدمات <strong>پزشکی در منزل</strong> با کیفیت، <strong>نوید زندگی</strong> 
                مجموعه‌ای تخصصی و منسجم متشکل از پزشکان، پرستاران و متخصصان متعهد را پایه‌گذاری کرد. هدف ما ارائه 
                خدمات <strong>ویزیت پزشک در منزل تهران</strong> و <strong>پرستاری در منزل</strong> با بالاترین کیفیت 
                و در عین حال با تعرفه‌های منصفانه و رقابتی است.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-right text-primary">هدف ما</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-right text-muted-foreground leading-relaxed">
                هدف اصلی <strong>نوید زندگی</strong>، ارائه‌ی خدمات <strong>پزشکی در منزل تهران</strong> سریع، دقیق و 
                شخصی‌سازی شده متناسب با نیاز هر بیمار است. ما معتقدیم که شما باید در آرامش و امنیت خانه‌ی خود، 
                بهترین و مدرن‌ترین مراقبت‌های پزشکی، <strong>پرستاری در منزل</strong> و خدمات درمانی را دریافت کنید.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;