import { useSEO } from "@/hooks/useSEO";

interface SEOHeadProps {
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

const SEOHead = (props: SEOHeadProps) => {
  useSEO(props);
  return null;
};

export default SEOHead;