import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

interface ArticleLayoutProps {
  children: ReactNode;
}

/**
 * ArticleLayout - استاندارد Layout برای همه صفحات مقالات
 * 
 * این کامپوننت تضمین می‌کند که همه مقالات جدید به صورت یکسان 
 * دارای Header، Footer و FloatingContact باشند.
 * 
 * نحوه استفاده:
 * ```tsx
 * return (
 *   <ArticleLayout>
 *     <SEOHead ... />
 *     <ArticleSchema ... />
 *     <main className="py-12 px-4">
 *       {/* محتوای مقاله *\/}
 *     </main>
 *   </ArticleLayout>
 * );
 * ```
 */
const ArticleLayout = ({ children }: ArticleLayoutProps) => {
  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24">
      <Header />
      <FloatingContact />
      {children}
      <Footer />
    </div>
  );
};

export default ArticleLayout;
