interface StructuredDataProps {
  type: 'Organization' | 'RealEstateAgent' | 'Website';
  data: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sunteck Realty",
          "url": "https://sunteckrealty.com",
          "logo": "https://sunteckrealty.com/images/logo.png",
          "description": "Leading real estate developer in Mumbai offering premium residential and commercial properties",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sunteck Centre, Western Express Highway, Andheri East",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400069",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-22-12345678",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://www.facebook.com/sunteckrealty",
            "https://twitter.com/sunteckrealty",
            "https://www.linkedin.com/company/sunteck-realty",
            "https://www.instagram.com/sunteckrealty"
          ],
          "areaServed": "Mumbai Metropolitan Region",
          "knowsAbout": ["Real Estate Development", "Luxury Properties", "Commercial Properties", "Residential Projects"],
          ...data
        };
      
      case 'RealEstateAgent':
        return {
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Sunteck Realty",
          "url": "https://sunteckrealty.com",
          "image": "https://sunteckrealty.com/images/agent-image.jpg",
          "description": "Premium real estate developer specializing in luxury residential and commercial properties in Mumbai",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sunteck Centre, Western Express Highway, Andheri East",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400069",
            "addressCountry": "IN"
          },
          "telephone": "+91-22-12345678",
          "email": "info@sunteckrealty.com",
          "priceRange": "$$$",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Properties for Sale",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Residence",
                  "name": "Luxury Apartments",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mumbai",
                    "addressCountry": "IN"
                  }
                }
              }
            ]
          },
          ...data
        };
      
      case 'Website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Sunteck Realty",
          "url": "https://sunteckrealty.com",
          "description": "Discover luxury residential and commercial properties by Sunteck Realty in prime Mumbai locations",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sunteckrealty.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sunteck Realty",
            "url": "https://sunteckrealty.com"
          },
          ...data
        };
      
      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
