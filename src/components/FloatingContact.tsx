import { memo, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Instagram } from "lucide-react";

const FloatingContact = memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "09386117912";
  
  const handleCall = useCallback(() => {
    window.location.href = `tel:${phoneNumber}`;
  }, []);

  const handleWhatsApp = useCallback(() => {
    window.open(`https://wa.me/98${phoneNumber.substring(1)}`, '_blank');
  }, []);

  const handleInstagram = useCallback(() => {
    window.open('https://instagram.com/navidzendegi1', '_blank');
  }, []);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsExpanded(false);
  }, []);

  return (
    <>
      {/* Main floating button */}
      <div className="floating-contact">
        <Button
          variant="floating"
          size="lg"
          onClick={toggleExpanded}
          className="rounded-full w-16 h-16 flex items-center justify-center"
          aria-label="تماس با ما - منوی تماس"
        >
          <Phone className="w-6 h-6" aria-hidden="true" />
        </Button>
      </div>
      
      {/* Expanded contact options */}
      {isExpanded && (
        <div className="fixed bottom-24 left-6 z-50 flex flex-col gap-3">
          <Button
            variant="hero"
            onClick={handleCall}
            className="flex items-center gap-3 shadow-[var(--shadow-floating)] transition-[var(--transition-bounce)] hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span className="ltr font-bold">{phoneNumber}</span>
          </Button>
          <Button
            variant="secondary"
            onClick={handleWhatsApp}
            className="flex items-center gap-3 shadow-[var(--shadow-floating)] transition-[var(--transition-bounce)] hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            واتساپ
          </Button>
          <Button
            variant="outline"
            onClick={handleInstagram}
            className="flex items-center gap-3 shadow-[var(--shadow-floating)] transition-[var(--transition-bounce)] hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            اینستاگرام
          </Button>
        </div>
      )}
      
      {/* Overlay to close expanded menu */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-40 bg-transparent"
          onClick={closeMenu}
        />
      )}
    </>
  );
});

FloatingContact.displayName = 'FloatingContact';

export default FloatingContact;