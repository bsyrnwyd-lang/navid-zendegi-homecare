import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
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
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              صفحه اصلی
            </Link>
            <Link to="/cardiology" className="text-sm font-medium hover:text-primary transition-colors">
              ویزیت پزشک قلب
            </Link>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              خدمات
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              تماس
            </a>
          </nav>
          
        </div>
      </div>
    </header>
  );
};

export default Header;