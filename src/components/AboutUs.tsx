import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">درباره ما</h2>
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