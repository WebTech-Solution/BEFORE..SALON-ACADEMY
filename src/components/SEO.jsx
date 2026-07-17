import { useEffect } from 'react';

const SEO = ({ title, description, schema }) => {
  useEffect(() => {
    // Update Title
    if (title) {
      document.title = `${title} | BEFORE..SALON & ACADEMY`;
    }

    // Update Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.content = description;
    }

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title ? `${title} | BEFORE..SALON & ACADEMY` : "BEFORE..SALON & ACADEMY";

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    if (description) {
      ogDesc.content = description;
    }

    // Inject Custom Schema if provided
    let schemaScript = document.getElementById('dynamic-page-schema');
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schema) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-page-schema';
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    return () => {
      // Cleanup custom schema on unmount
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, schema]);

  return null;
};

export default SEO;
