import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogImage?: string;
  type?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
}

const BASE_URL = 'https://tceceed.edu.ng';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  keywords,
  ogImage = '/assets/images/workshop_cohort_training.png',
  type = 'website',
  breadcrumbs,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes('TCECEED')
      ? title
      : `${title} | TCECEED - TETFund Centre of Excellence`;
    document.title = fullTitle;

    // Helper function to update or create a meta tag
    const setMetaTag = (attribute: string, name: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Core Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. Open Graph Tags
    const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', fullImageUrl);

    // 4. Twitter Tags
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 5. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Dynamic BreadcrumbList JSON-LD Schema
    const existingBreadcrumbScript = document.getElementById('seo-breadcrumb-jsonld');
    if (existingBreadcrumbScript) {
      existingBreadcrumbScript.remove();
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${BASE_URL}${crumb.path.startsWith('/') ? crumb.path : `/${crumb.path}`}`,
        })),
      };

      const script = document.createElement('script');
      script.id = 'seo-breadcrumb-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
    }

    // Cleanup on unmount or route change
    return () => {
      const scriptToRemove = document.getElementById('seo-breadcrumb-jsonld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalPath, keywords, ogImage, type, breadcrumbs]);

  return null;
};

