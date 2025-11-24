import { useEffect } from 'react';

/**
 * React hook to inject structured data into page head
 * Automatically cleans up when component unmounts
 */
export function useStructuredData(schema: object | object[]) {
  useEffect(() => {
    const schemas = Array.isArray(schema) ? schema : [schema];
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schemaObj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaObj);
      script.setAttribute('data-structured-data', 'true');
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup on unmount
    return () => {
      scriptElements.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [schema]);
}
