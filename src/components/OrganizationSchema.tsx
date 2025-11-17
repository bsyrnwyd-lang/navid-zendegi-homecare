const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "نوید زندگی",
    "description": "ارائه‌دهنده خدمات پزشکی در منزل شامل ویزیت پزشک، پرستاری، آزمایش و تجهیزات پزشکی در تهران",
    "url": "https://navidzendegi.com",
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
    "areaServed": {
      "@type": "City",
      "name": "تهران"
    },
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
      "name": "خدمات پزشکی در منزل",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "ویزیت پزشک عمومی در منزل"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "ویزیت متخصص قلب و عروق در منزل"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "پرستاری در منزل"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTest",
            "name": "آزمایش خون در منزل"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.instagram.com/navidzendegi",
      "https://t.me/navidzendegi1"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
