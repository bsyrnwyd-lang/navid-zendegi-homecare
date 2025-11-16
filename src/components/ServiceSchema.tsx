interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}

const ServiceSchema = ({
  name,
  description,
  provider = "نوید زندگی",
  areaServed = "تهران"
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Medical",
    "name": name,
    "description": description,
    "provider": {
      "@type": "MedicalBusiness",
      "name": provider,
      "telephone": "+989386117912",
      "url": "https://navidzendegi.com"
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
        "areaServed": "IR",
        "availableLanguage": "Persian"
      }
    },
    "hoursAvailable": {
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
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
