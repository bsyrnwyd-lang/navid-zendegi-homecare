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
  noindex?: boolean;
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
  modifiedTime,
  noindex = false
}: SEOProps) => {
  useEffect(() => {
    // Update title - ensure it's under 60 chars for SEO
    const truncatedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
    document.title = truncatedTitle;

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      if (!content) return;
      
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

    // Remove meta tag helper
    const removeMetaTag = (name: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      const element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (element) element.remove();
    };

    // Truncate description to 160 chars for SEO
    const truncatedDescription = description.length > 160 
      ? description.substring(0, 157) + '...' 
      : description;

    // Update basic meta tags
    updateMetaTag('description', truncatedDescription);
    if (keywords) updateMetaTag('keywords', keywords);
    if (author) updateMetaTag('author', author);
    
    // Robots meta
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Update Open Graph tags
    updateMetaTag('og:title', truncatedTitle, true);
    updateMetaTag('og:description', truncatedDescription, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `https://navidzendegi.com${ogImage}`, true);
    updateMetaTag('og:locale', 'fa_IR', true);
    updateMetaTag('og:site_name', 'نوید زندگی', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', truncatedTitle);
    updateMetaTag('twitter:description', truncatedDescription);
    updateMetaTag('twitter:image', ogImage.startsWith('http') ? ogImage : `https://navidzendegi.com${ogImage}`);
    updateMetaTag('twitter:site', '@navidzendegi');

    // Article specific meta tags
    if (ogType === 'article') {
      if (author) updateMetaTag('article:author', author, true);
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      updateMetaTag('article:section', 'Health', true);
      updateMetaTag('article:tag', 'پزشکی در منزل', true);
    } else {
      // Remove article tags if not article type
      removeMetaTag('article:author', true);
      removeMetaTag('article:published_time', true);
      removeMetaTag('article:modified_time', true);
      removeMetaTag('article:section', true);
      removeMetaTag('article:tag', true);
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
      // Update URL in Open Graph
      updateMetaTag('og:url', canonical, true);
    }

    // Cleanup function to reset title on unmount
    return () => {
      // Reset will happen when new page loads
    };
  }, [title, description, keywords, canonical, ogImage, ogType, author, publishedTime, modifiedTime, noindex]);
};
