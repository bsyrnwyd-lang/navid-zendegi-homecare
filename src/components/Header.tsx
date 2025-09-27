import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Phone, MessageCircle, Menu, ChevronDown, ChevronUp, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/navid-zendegi-logo.jpg";

const Header = () => {
  const phoneNumber = "09386117912";
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/navidzendegi1', '_blank');
  };

  const navigationItems = [
    { to: "/", label: "صفحه اصلی" },
    { to: "/general-doctor", label: "ویزیت پزشک عمومی" },
    { to: "/cardiology", label: "ویزیت پزشک قلب" },
    { to: "/about", label: "درباره ما" },
    { to: "/pricing", label: "تعرفه خدمات پزشکی در منزل" },
    { to: "/contact", label: "تماس با ما" },
    { to: "/collaboration", label: "همکاری با ما" }
  ];

  const serviceItems = [
    // پزشک‌ها اول
    { to: "/services/specialist", label: "ویزیت پزشک متخصص در منزل" },
    { to: "/services/internal", label: "ویزیت متخصص داخلی در منزل" },
    { to: "/services/neurology", label: "ویزیت متخصص مغز و اعصاب در منزل" },
    { to: "/services/urology", label: "ویزیت متخصص اورولوژی" },
    { to: "/services/ent", label: "ویزیت متخصص گوش، حلق و بینی در منزل" },
    { to: "/services/infectious", label: "ویزیت متخصص عفونی در منزل" },
    // سایر خدمات
    { to: "/services/nursing", label: "خدمات پرستاری در منزل" },
    { to: "/services/echo-ecg", label: "اکو و نوار قلب در منزل" },
    { to: "/services/physiotherapy", label: "فیزیوتراپی در منزل" },
    { to: "/services/radiology", label: "رادیولوژی و سونوگرافی در منزل" },
    { to: "/services/holter", label: "هولتر قلب و فشار خون در منزل" }
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-60">
      <div className="container mx-auto px-4 py-3">
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
          
          {/* Desktop Navigation - Moved to top right */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
               {navigationItems.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.to} 
                    className="text-sm font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-muted/50"
                  >
                    {item.label}
                  </Link>
                ))}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-muted/50">
                  خدمات
                  <ChevronDown className="mr-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 bg-background border border-border shadow-lg z-[70] max-h-96 overflow-y-auto">
                  {serviceItems.map((service, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link to={service.to} className="text-sm cursor-pointer">
                        {service.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Articles Link */}
              <Link 
                to="/articles"
                className="text-sm font-medium hover:text-primary transition-colors px-2 py-1 rounded hover:bg-muted/50"
              >
                مقالات
              </Link>
            </nav>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="secondary" size="sm" aria-label="منوی ناوبری" className="px-3 py-2">
                    <Menu className="h-5 w-5 ml-2" />
                    منو
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72 bg-background z-[70]">
                  <div className="flex flex-col gap-4 mt-8 overflow-y-auto max-h-[calc(100vh-8rem)] pr-2">
                    {navigationItems.map((item, index) => (
                        <Link 
                          key={index}
                          to={item.to} 
                          className="text-lg font-medium hover:text-primary transition-colors py-2 px-3 rounded hover:bg-muted/50"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                    ))}

                    {/* Articles Link */}
                    <Link 
                      to="/articles"
                      className="text-lg font-medium hover:text-primary transition-colors py-2 px-3 rounded hover:bg-muted/50"
                      onClick={() => setIsOpen(false)}
                    >
                      مقالات
                    </Link>
                    
                    {/* Mobile Services Menu */}
                    <div className="border-t pt-4">
                      <button 
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-lg font-semibold mb-2 px-3 py-2 hover:bg-muted/50 rounded"
                      >
                        خدمات
                        {servicesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {servicesOpen && (
                        <div className="space-y-1 animate-fade-in">
                          {serviceItems.map((service, index) => (
                            <Link 
                              key={index}
                              to={service.to} 
                              className="text-sm hover:text-primary transition-colors py-2 px-6 rounded hover:bg-muted/50 block"
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <Button onClick={handleCall} className="w-full mb-3">
                        <Phone className="ml-2 h-4 w-4" />
                        تماس: {phoneNumber}
                      </Button>
                      <Button onClick={handleWhatsApp} variant="outline" className="w-full mb-3">
                        <MessageCircle className="ml-2 h-4 w-4" />
                        واتساپ
                      </Button>
                      <Button onClick={handleInstagram} variant="outline" className="w-full">
                        <Instagram className="ml-2 h-4 w-4" />
                        اینستاگرام
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;