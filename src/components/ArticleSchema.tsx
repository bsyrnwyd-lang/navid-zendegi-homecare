interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime: string;
  image?: string;
  author?: string;
}

const ArticleSchema = ({
  title,
  description,
  publishedTime,
  modifiedTime,
  image,
  author = "نوید زندگی"
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image ? `https://navidzendegi.com${image}` : undefined,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://navidzendegi.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "نوید زندگی",
      "logo": {
        "@type": "ImageObject",
        "url": "https://navidzendegi.com/logo.jpg"
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== 'undefined' ? window.location.href : "https://navidzendegi.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ArticleSchema;
