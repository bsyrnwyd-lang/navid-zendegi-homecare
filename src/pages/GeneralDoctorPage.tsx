import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, MapPin, Phone, CheckCircle, HelpCircle } from "lucide-react";
import generalDoctorImage from "@/assets/iranian-general-doctor.jpg";

const GeneralDoctorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="medical-section bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
                  ویزیت پزشک عمومی در منزل | ویزیت فوری شبانه‌روزی
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  اگر به هر دلیل امکان رفتن به مطب یا بیمارستان را ندارید، پزشک عمومی ما در سریع‌ترین زمان در منزل شما حاضر می‌شود. 
                  خدمات ما به صورت شبانه‌روزی در تهران و حومه ارائه می‌گردد.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={generalDoctorImage} 
                  alt="ویزیت پزشک عمومی در منزل - خدمات پزشکی حرفه‌ای"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">چرا ویزیت پزشک عمومی در منزل؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <Shield className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">راحتی و آسایش بیمار</h3>
                      <p className="text-muted-foreground">بدون نیاز به جابه‌جایی</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <Shield className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">کاهش خطر ابتلا</h3>
                      <p className="text-muted-foreground">به عفونت‌های بیمارستانی یا ویروسی (مانند آنفولانزا و کرونا)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <Clock className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">صرفه‌جویی در زمان</h3>
                      <p className="text-muted-foreground">و هزینه رفت‌وآمد</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <CheckCircle className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">رسیدگی ویژه</h3>
                      <p className="text-muted-foreground">امکان رسیدگی به سالمندان و بیماران بدحال در خانه</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">خدمات پزشک عمومی در منزل</h2>
            <Card className="medical-card max-w-4xl mx-auto">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 ml-3 flex-shrink-0" />
                    <span>معاینه و تشخیص بیماری‌های عمومی (مانند سرماخوردگی، تب، بدن‌درد، مشکلات گوارشی و…)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 ml-3 flex-shrink-0" />
                    <span>تجویز دارو و ارائه نسخه معتبر (دارو همیشه همراه پزشک است)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 ml-3 flex-shrink-0" />
                    <span>کنترل علائم حیاتی مانند فشار خون و قند خون</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 ml-3 flex-shrink-0" />
                    <span>صدور گواهی استراحت پزشکی در صورت نیاز</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 ml-3 flex-shrink-0" />
                    <span>ارجاع بیمار به پزشک متخصص یا مراکز درمانی در شرایط ضروری</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="medical-section">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-title mb-6">مناطق تحت پوشش</h2>
              <Card className="medical-card">
                <CardContent className="p-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-lg">
                    خدمات ویزیت پزشک عمومی در منزل در تهران و حومه به صورت شبانه‌روزی ارائه می‌شود.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Request */}
        <section className="medical-section bg-muted/30">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">نحوه درخواست ویزیت پزشک</h2>
            <Card className="medical-card max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">تماس تلفنی با شماره:</h3>
                <div className="text-2xl font-bold text-primary mb-4" dir="ltr">09386117912</div>
                <p className="text-muted-foreground">
                  پشتیبانی ما به صورت ۲۴ ساعته آماده پاسخگویی است.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="medical-section">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-12">سوالات متداول</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <HelpCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">چقدر طول می‌کشد تا پزشک برسد؟</h3>
                      <p className="text-muted-foreground">معمولاً بین ۳۰ تا ۶۰ دقیقه (بسته به فاصله و ترافیک).</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <HelpCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">آیا امکان ویزیت شبانه‌روزی وجود دارد؟</h3>
                      <p className="text-muted-foreground">بله، خدمات ما در تمام ساعات شبانه‌روز ارائه می‌شود.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="medical-card md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <HelpCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">دارو همراه پزشک هست؟</h3>
                      <p className="text-muted-foreground">بله، داروهای مورد نیاز همیشه همراه پزشک می‌باشد.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="medical-section bg-primary/5">
          <div className="container mx-auto">
            <Card className="medical-card max-w-3xl mx-auto border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-6 text-primary">تماس فوری</h2>
                <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
                <p className="text-lg mb-4">
                  ☎️ برای درخواست فوری ویزیت پزشک عمومی در منزل همین حالا تماس بگیرید:
                </p>
                <div className="text-3xl font-bold text-primary" dir="ltr">09386117912</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default GeneralDoctorPage;