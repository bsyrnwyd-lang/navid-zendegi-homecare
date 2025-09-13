import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const PricingPage = () => {
  const pricingCategories = [
    {
      title: "ویزیت پزشک در منزل",
      description: "تعرفه ویزیت پزشکان عمومی و متخصص",
      services: [
        { name: "ویزیت پزشک عمومی در منزل", price: "150,000", unit: "تومان" },
        { name: "ویزیت پزشک متخصص در منزل", price: "300,000", unit: "تومان" },
        { name: "ویزیت پزشک قلب در منزل", price: "400,000", unit: "تومان" },
        { name: "مشاوره پزشکی تلفنی", price: "50,000", unit: "تومان" }
      ]
    },
    {
      title: "پرستاری در منزل",
      description: "تعرفه خدمات پرستاری و مراقبتی",
      services: [
        { name: "پرستاری در منزل (۸ ساعته)", price: "200,000", unit: "تومان" },
        { name: "پرستاری در منزل (۱۲ ساعته)", price: "280,000", unit: "تومان" },
        { name: "پرستاری در منزل (۲۴ ساعته)", price: "450,000", unit: "تومان" },
        { name: "مراقبت از سالمند (روزانه)", price: "300,000", unit: "تومان" }
      ]
    },
    {
      title: "تزریقات و آزمایشات در منزل",
      description: "تعرفه تزریقات و نمونه‌گیری",
      services: [
        { name: "تزریق عضلانی در منزل", price: "30,000", unit: "تومان" },
        { name: "تزریق وریدی در منزل", price: "40,000", unit: "تومان" },
        { name: "نمونه‌گیری خون در منزل", price: "35,000", unit: "تومان" },
        { name: "تست قند خون در منزل", price: "25,000", unit: "تومان" }
      ]
    },
    {
      title: "خدمات تخصصی قلب در منزل",
      description: "تعرفه اکو و نوار قلب در منزل",
      services: [
        { name: "اکو قلب در منزل", price: "350,000", unit: "تومان" },
        { name: "نوار قلب (ECG) در منزل", price: "120,000", unit: "تومان" },
        { name: "بسته کامل قلب (ویزیت + اکو + نوار)", price: "750,000", unit: "تومان" },
        { name: "پیگیری درمان قلبی (ماهانه)", price: "200,000", unit: "تومان" }
      ]
    },
    {
      title: "خدمات زیبایی در منزل",
      description: "تعرفه خدمات زیبایی و مراقبت پوست",
      services: [
        { name: "تزریق بوتاکس در منزل", price: "800,000", unit: "تومان" },
        { name: "تزریق فیلر در منزل", price: "1,200,000", unit: "تومان" },
        { name: "پلاسماتراپی در منزل", price: "600,000", unit: "تومان" },
        { name: "مشاوره پوست و زیبایی", price: "100,000", unit: "تومان" }
      ]
    }
  ];

  const specialOffers = [
    {
      title: "بسته ویژه سالمندان",
      description: "پکیج کامل مراقبت از سالمندان",
      originalPrice: "500,000",
      discountPrice: "400,000",
      includes: ["ویزیت پزشک عمومی", "پرستاری ۸ ساعته", "تزریقات ضروری", "پیگیری هفتگی"]
    },
    {
      title: "بسته قلب و عروق",
      description: "پکیج کامل بررسی قلب در منزل",
      originalPrice: "850,000",
      discountPrice: "750,000",
      includes: ["ویزیت پزشک قلب", "اکو قلب", "نوار قلب", "مشاوره درمانی"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="medical-section bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              تعرفه خدمات پزشکی در منزل
              <span className="block text-primary">نوید زندگی</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              <strong>تعرفه ویزیت پزشک در منزل</strong>، <strong>قیمت پرستاری در منزل</strong> و 
              <strong> تعرفه تزریقات در منزل</strong> با شفافیت کامل. بهترین خدمات پزشکی با قیمت‌های منصفانه.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="ml-2 h-5 w-5" />
                مشاوره رایگان: ۰۹۳۸۶۱۱۷۹۱۲
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                درخواست خدمات
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">پیشنهادات ویژه</h2>
            <p className="section-subtitle">
              بسته‌های ترکیبی با تخفیف ویژه برای شما
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialOffers.map((offer, index) => (
              <Card key={index} className="medical-card border-primary/20 relative overflow-hidden">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 ml-1" />
                    ویژه
                  </Badge>
                </div>
                <CardHeader className="text-center pt-12">
                  <CardTitle className="text-2xl mb-2">{offer.title}</CardTitle>
                  <p className="text-muted-foreground">{offer.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground line-through">
                      {offer.originalPrice} تومان
                    </span>
                    <div className="text-3xl font-bold text-primary">
                      {offer.discountPrice} تومان
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {offer.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary ml-2" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">سفارش بسته ویژه</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="medical-section bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">تعرفه کامل خدمات</h2>
            <p className="section-subtitle">
              قیمت‌های شفاف و منصفانه برای تمام خدمات پزشکی در منزل
            </p>
          </div>
          
          <div className="space-y-12">
            {pricingCategories.map((category, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="medical-card text-center">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-sm leading-tight">
                          {service.name}
                        </h4>
                        <div className="text-2xl font-bold text-primary">
                          {service.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {service.unit}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="medical-section bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8">نکات مهم تعرفه</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 ml-2 text-primary" />
                    ساعات کاری
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• خدمات ۲۴ ساعته در دسترس</li>
                    <li>• تعرفه شبانه ۲۰٪ اضافه</li>
                    <li>• ایام تعطیل ۳۰٪ اضافه</li>
                    <li>• خدمات اورژانسی در اسرع وقت</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Check className="w-5 h-5 ml-2 text-primary" />
                    شرایط پرداخت
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• پرداخت نقدی یا کارتخوان</li>
                    <li>• امکان پرداخت اقساطی برای پکیج‌ها</li>
                    <li>• تخفیف ۱۰٪ برای بیماران مزمن</li>
                    <li>• ضمانت کیفیت خدمات</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">درخواست تخفیف ویژه</h3>
              <p className="text-muted-foreground mb-4">
                برای بیماران مزمن، خانواده‌های پرجمعیت و سفارش‌های بلندمدت، تخفیف‌های ویژه‌ای در نظر گرفته شده است.
              </p>
              <Button size="lg">
                <Phone className="ml-2 h-4 w-4" />
                تماس برای کسب تخفیف
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="medical-section bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">چرا تعرفه نوید زندگی منصفانه است؟</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">شفافیت در قیمت‌گذاری</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>تعرفه ویزیت پزشک در منزل</strong> نوید زندگی با کاملترین شفافیت 
                  اعلام می‌شود. هیچ هزینه پنهانی وجود ندارد و تمام <strong>قیمت پرستاری در منزل</strong> 
                  و سایر خدمات از قبل مشخص است.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary">کیفیت متناسب با قیمت</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>تعرفه تزریقات در منزل</strong> و سایر خدمات با توجه به کیفیت بالای 
                  خدمات و تجربه کادر پزشکی تعیین شده است. بهترین نسبت کیفیت به قیمت در بازار.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">کلمات کلیدی قیمت‌گذاری</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "تعرفه ویزیت پزشک در منزل",
                  "قیمت پرستاری در منزل",
                  "تعرفه تزریقات در منزل",
                  "قیمت پزشک در منزل",
                  "هزینه ویزیت در منزل",
                  "تعرفه اکو قلب در منزل",
                  "قیمت نوار قلب در منزل",
                  "تعرفه خدمات زیبایی در منزل"
                ].map((keyword, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default PricingPage;