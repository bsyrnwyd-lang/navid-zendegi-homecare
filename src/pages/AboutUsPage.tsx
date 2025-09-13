import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Heart, Award } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              درباره ما
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              مجموعه‌ای تخصصی برای ارائه خدمات پزشکی در منزل
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="medical-section">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="medical-card">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Users className="w-8 h-8 text-primary ml-3" />
                      <h2 className="text-2xl font-bold">تاریخچه ما</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      ما از سال ۱۳۹۹ با تمرکز بر ارائه‌ی خدمات پزشکی در منزل فعالیت خود را آغاز کردیم و در این مسیر تجربه‌ای ارزشمند در حوزه‌ی ویزیت و مراقبت‌های خانگی به دست آوردیم.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      با توجه به نیاز روزافزون جامعه به این خدمات، تصمیم گرفتیم مجموعه‌ای تخصصی متشکل از پزشکان و پرستاران متعهد را پایه‌گذاری کنیم تا خدمات پزشکی و پرستاری را با بالاترین کیفیت و در عین حال با تعرفه‌های منصفانه در اختیار شما قرار دهیم.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="medical-card border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Target className="w-8 h-8 text-primary ml-3" />
                      <h2 className="text-2xl font-bold">هدف ما</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      هدف اصلی ما، ارائه‌ی خدماتی سریع، دقیق و متناسب با نیاز بیماران است؛ به گونه‌ای که بتوانید در آرامش خانه‌ی خود، بهترین مراقبت‌های پزشکی و پرستاری را دریافت کنید.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">ارزش‌های ما</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="medical-card text-center">
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">مراقبت با دل</h3>
                  <p className="text-muted-foreground">
                    ما با عشق و دلسوزی به ارائه خدمات می‌پردازیم
                  </p>
                </CardContent>
              </Card>
              
              <Card className="medical-card text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">کیفیت بالا</h3>
                  <p className="text-muted-foreground">
                    تعهد ما به ارائه بالاترین استانداردهای پزشکی
                  </p>
                </CardContent>
              </Card>
              
              <Card className="medical-card text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">تیم متخصص</h3>
                  <p className="text-muted-foreground">
                    پزشکان و پرستاران با تجربه و متعهد
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">+5</div>
                <p className="text-muted-foreground">سال تجربه</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">پشتیبانی</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">رضایت مندی</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">تهران</div>
                <p className="text-muted-foreground">و حومه</p>
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

export default AboutUsPage;