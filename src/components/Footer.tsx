import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Heart, Instagram } from "lucide-react";
import logo from "@/assets/navid-zendegi-logo.jpg";

const Footer = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/Navidzendegiii', '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="نوید زندگی" 
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">نوید زندگی</h3>
                <p className="text-sm opacity-80">خدمات پزشکی در منزل</p>
              </div>
            </div>
            <p className="opacity-90 leading-relaxed">
              ارائه بهترین خدمات پزشکی در راحتی منزل شما با تیم متخصص و مجرب
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">خدمات ما</h4>
            <ul className="space-y-2 opacity-90">
              <li>ویزیت پزشک در منزل</li>
              <li>پرستاری در منزل</li>
              <li>آزمایشات پزشکی</li>
              <li>مراقبت از سالمندان</li>
              <li>مشاوره پزشکی</li>
              <li>خدمات زیبایی در منزل</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">تماس با ما</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="ltr font-bold text-lg">{phoneNumber}</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold">آدرس:</p>
                <p className="text-sm opacity-90">تهران، شهرآرا، پاتریس، پلاک ۵۰</p>
                <p className="text-sm opacity-80">پوشش دهی: شهر تهران و اطراف</p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCall}
                  className="bg-transparent border-background text-background hover:bg-background hover:text-foreground"
                >
                  <Phone className="w-4 h-4 ml-2" />
                  تماس
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleWhatsApp}
                  className="bg-transparent border-background text-background hover:bg-background hover:text-foreground"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  واتساپ
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleInstagram}
                  className="bg-transparent border-background text-background hover:bg-background hover:text-foreground"
                >
                  <Instagram className="w-4 h-4 ml-2" />
                  اینستاگرام
                </Button>
              </div>
              <p className="text-sm opacity-80">
                ۲۴ ساعته در خدمت شما
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="opacity-80 flex items-center justify-center gap-2">
            ساخته شده با 
            <Heart className="w-4 h-4 text-red-500" />
            برای سلامت شما
          </p>
          <p className="text-sm opacity-60 mt-2">
            © ۱۴۰۳ نوید زندگی. تمام حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;