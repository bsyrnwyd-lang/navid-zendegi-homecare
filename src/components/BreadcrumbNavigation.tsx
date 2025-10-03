import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNavigation = ({ items }: BreadcrumbNavigationProps) => {
  // Generate BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://navidzendegi.ir${item.url}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="مسیر صفحه" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index === items.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link 
                    to={item.url} 
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbNavigation;