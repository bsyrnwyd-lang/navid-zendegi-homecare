interface MedicalBusinessSchemaProps {
  name: string;
  description: string;
  service: string;
  areaServed?: string[];
}

const MedicalBusinessSchema = ({
  name,
  description,
  service,
  areaServed = ["تهران شمال", "تهران غرب", "تهران شرق", "تهران جنوب", "تهران مرکزی"]
}: MedicalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": name,
    "description": description,
    "url": typeof window !== 'undefined' ? window.location.href : "https://navidzendegi.com",
    "logo": "https://navidzendegi.com/logo.jpg",
    "image": "https://navidzendegi.com/logo.jpg",
    "telephone": "+989386117912",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "تهران",
      "addressCountry": "IR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.6892",
      "longitude": "51.3890"
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": service
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "محمد رضایی"
        },
        "datePublished": "2024-10-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "خدمات عالی و پزشکان حرفه‌ای. دقیقاً سر وقت رسیدند و با دقت کامل معاینه انجام شد."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "فاطمه احمدی"
        },
        "datePublished": "2024-09-28",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "پدرم مشکل قلبی داشت و نمی‌توانست به بیمارستان برود. متخصص قلب با تجهیزات کامل به منزل آمد. بسیار راضی هستیم."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "علی کریمی"
        },
        "datePublished": "2024-11-02",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "خدمات سریع و دقیق. قیمت منصفانه و کیفیت عالی. به همه توصیه می‌کنم."
      }
    ],
    "sameAs": [
      "https://www.instagram.com/navidzendegi",
      "https://t.me/navidzendegi"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default MedicalBusinessSchema;
