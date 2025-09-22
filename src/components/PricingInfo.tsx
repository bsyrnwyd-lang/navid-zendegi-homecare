import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Receipt, ArrowLeft } from "lucide-react";

const PricingInfo = () => {
  return (
    <Card className="medical-card bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Receipt className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">تعرفه خدمات</h3>
              <p className="text-xs text-muted-foreground">
                برای اطلاع از تعرفه خدمات به لینک زیر مراجعه کنید
              </p>
            </div>
          </div>
          <Link to="/pricing">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 text-xs px-3 py-2"
            >
              مشاهده تعرفه‌ها
              <ArrowLeft className="w-3 h-3" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingInfo;