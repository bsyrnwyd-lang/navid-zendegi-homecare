import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import elderlyImage from "@/assets/elderly-care-home.jpg";

const AboutUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">درباره ما</h2>
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
            <h3 className="text-2xl font-bold text-primary">تجربه و اعتماد</h3>
            <p className="text-muted-foreground leading-relaxed">
              ما با بیش از ۴ سال تجربه در ارائه خدمات پزشکی در منزل، به یکی از معتبرترین 
              ارائه‌دهندگان این خدمات تبدیل شده‌ایم. تیم ما متشکل از پزشکان و پرستاران 
              مجرب است که با دقت و مهارت بالا خدمات‌رسانی می‌کنند.
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
                ما از سال ۱۳۹۹ با تمرکز بر ارائه‌ی خدمات پزشکی در منزل فعالیت خود را آغاز کردیم و در این مسیر تجربه‌ای ارزشمند در حوزه‌ی ویزیت و مراقبت‌های خانگی به دست آوردیم.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-right text-primary">ماموریت ما</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-right text-muted-foreground leading-relaxed">
                با توجه به نیاز روزافزون جامعه به این خدمات، تصمیم گرفتیم مجموعه‌ای تخصصی متشکل از پزشکان و پرستاران متعهد را پایه‌گذاری کنیم تا خدمات پزشکی و پرستاری را با بالاترین کیفیت و در عین حال با تعرفه‌های منصفانه در اختیار شما قرار دهیم.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-right text-primary">هدف ما</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-right text-muted-foreground leading-relaxed">
                هدف اصلی ما، ارائه‌ی خدماتی سریع، دقیق و متناسب با نیاز بیماران است؛ به گونه‌ای که بتوانید در آرامش خانه‌ی خود، بهترین مراقبت‌های پزشکی و پرستاری را دریافت کنید.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;