import { memo } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface SEOSchemaProps {
  type: 'article' | 'service' | 'faq' | 'medical' | 'howto';
  // Article props
  title?: string;
  description?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  // Service props
  serviceName?: string;
  serviceDescription?: string;
  areaServed?: string;
  // FAQ props
  faqs?: FAQ[];
  // HowTo props
  howToName?: string;
  howToDescription?: string;
  howToSteps?: { name: string; text: string }[];
}

const SEOSchema = memo(({
  type,
  title,
  description,
  image,
  publishedTime,
  modifiedTime,
  author = 'نوید زندگی',
  serviceName,
  serviceDescription,
  areaServed = 'تهران',
  faqs,
  howToName,
  howToDescription,
  howToSteps
}: SEOSchemaProps) => {
  const getSchema = () => {
    const baseUrl = 'https://navidzendegi.com';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : baseUrl;

    switch (type) {
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "headline": title,
          "description": description,
          "image": image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/logo.jpg`,
          "author": {
            "@type": "Organization",
            "name": author,
            "url": baseUrl
          },
          "publisher": {
            "@type": "Organization",
            "name": "نوید زندگی",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.jpg`
            }
          },
          "datePublished": publishedTime,
          "dateModified": modifiedTime || publishedTime,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": currentUrl
          },
          "medicalAudience": {
            "@type": "MedicalAudience",
            "audienceType": "Patient"
          },
          "inLanguage": "fa-IR"
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalService",
          "name": serviceName,
          "description": serviceDescription,
          "provider": {
            "@type": "MedicalBusiness",
            "name": "نوید زندگی",
            "telephone": "+989386117912",
            "url": baseUrl,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "تهران",
              "addressCountry": "IR"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": areaServed
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "servicePhone": {
              "@type": "ContactPoint",
              "telephone": "+989386117912",
              "contactType": "customer service",
              "availableLanguage": "Persian"
            }
          },
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs?.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        };

      case 'medical':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": serviceName || "نوید زندگی",
          "description": serviceDescription || description,
          "url": currentUrl,
          "logo": `${baseUrl}/logo.jpg`,
          "image": `${baseUrl}/logo.jpg`,
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
          "areaServed": {
            "@type": "City",
            "name": areaServed
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "180",
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      case 'howto':
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": howToName,
          "description": howToDescription,
          "step": howToSteps?.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text
          })) || []
        };

      default:
        return null;
    }
  };

  const schema = getSchema();
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
});

SEOSchema.displayName = 'SEOSchema';

export default SEOSchema;
