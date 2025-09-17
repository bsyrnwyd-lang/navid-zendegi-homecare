import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const useSEO = ({
  title,
  description,
  keywords = '',
  canonical,
  ogImage = '/logo.jpg',
  ogType = 'website',
  author,
  publishedTime,
  modifiedTime
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    if (author) updateMetaTag('author', author);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:locale', 'fa_IR', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Article specific meta tags
    if (ogType === 'article') {
      if (author) updateMetaTag('article:author', author, true);
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
    }

    // Update canonical link
    if (canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalElement) {
        canonicalElement.setAttribute('href', canonical);
      } else {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        canonicalElement.setAttribute('href', canonical);
        document.head.appendChild(canonicalElement);
      }
    }

    // Update URL in Open Graph
    if (canonical) {
      updateMetaTag('og:url', canonical, true);
    }

  }, [title, description, keywords, canonical, ogImage, ogType, author, publishedTime, modifiedTime]);
};