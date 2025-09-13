import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/navid-zendegi-logo.jpg";

const Header = () => {
  const phoneNumber = "09386117912";
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="نوید زندگی" 
              className="w-10 h-10 rounded-lg object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">نوید زندگی</h1>
              <p className="text-sm text-muted-foreground">خدمات پزشکی در منزل</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsApp}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">واتساپ</span>
            </Button>
            <Button
              variant="contact"
              size="sm"
              onClick={handleCall}
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="ltr">{phoneNumber}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;