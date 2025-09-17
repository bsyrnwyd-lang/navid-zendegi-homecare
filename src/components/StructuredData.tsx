interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  breadcrumbs?: BreadcrumbItem[];
  article?: {
    title: string;
    description: string;
    author: string;
    publishedDate: string;
    modifiedDate?: string;
    image?: string;
  };
  service?: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    serviceType: string;
  };
}

const StructuredData = ({ breadcrumbs, article, service }: StructuredDataProps) => {
  const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  };

  const generateArticleSchema = (articleData: any) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": articleData.title,
      "description": articleData.description,
      "author": {
        "@type": "Person",
        "name": articleData.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "نوید زندگی",
        "logo": {
          "@type": "ImageObject",
          "url": "https://navidezendegi.com/logo.jpg"
        }
      },
      "datePublished": articleData.publishedDate,
      "dateModified": articleData.modifiedDate || articleData.publishedDate,
      "image": articleData.image || "https://navidezendegi.com/logo.jpg",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };
  };

  const generateServiceSchema = (serviceData: any) => {
    return {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": serviceData.name,
      "description": serviceData.description,
      "provider": {
        "@type": "Organization",
        "name": serviceData.provider
      },
      "areaServed": {
        "@type": "City",
        "name": serviceData.areaServed
      },
      "serviceType": serviceData.serviceType,
      "telephone": "+989386117912",
      "url": window.location.href
    };
  };

  const schemas: any[] = [];
  
  if (breadcrumbs) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }
  
  if (article) {
    schemas.push(generateArticleSchema(article));
  }
  
  if (service) {
    schemas.push(generateServiceSchema(service));
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default StructuredData;