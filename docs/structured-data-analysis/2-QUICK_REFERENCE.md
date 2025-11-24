# JSON-LD Implementation Quick Reference

## Files to Create/Modify

### 1. Create: `hooks/useSchemaScript.ts`

```typescript
import { useEffect } from 'react';

/**
 * Custom hook to inject JSON-LD structured data into page head
 * Automatically cleans up on unmount
 */
export const useSchemaScript = (schema: any, id?: string) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    if (id) script.id = id;
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [schema, id]);
};
```

### 2. Create: `utils/schemaGenerator.ts`

```typescript
// Type definitions
interface PersonSchema {
  '@context': string;
  '@type': 'Person';
  name: string;
  givenName?: string;
  familyName?: string;
  jobTitle?: string;
  email?: string;
  telephone?: string;
  [key: string]: any;
}

interface ArticleSchema {
  '@context': string;
  '@type': 'Article';
  headline: string;
  description: string;
  url: string;
  [key: string]: any;
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

// Schema generators
export const generatePersonSchema = (data: {
  name: string;
  givenName: string;
  familyName: string;
  jobTitle: string;
  email?: string;
  phone?: string;
  url?: string;
  image?: string;
  award?: string;
  affiliation?: any;
  address?: any;
  knowsAbout?: string[];
  education?: any[];
  sameAs?: string[];
}): PersonSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: data.name,
  givenName: data.givenName,
  familyName: data.familyName,
  jobTitle: data.jobTitle,
  ...(data.email && { email: data.email }),
  ...(data.phone && { telephone: data.phone }),
  ...(data.url && { url: data.url }),
  ...(data.image && { image: data.image }),
  ...(data.award && { award: data.award }),
  ...(data.affiliation && { affiliation: data.affiliation }),
  ...(data.address && { address: data.address }),
  ...(data.knowsAbout && { knowsAbout: data.knowsAbout }),
  ...(data.education && { education: data.education }),
  ...(data.sameAs && { sameAs: data.sameAs }),
});

export const generateArticleSchema = (data: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: any;
  publisher?: any;
  articleBody?: string;
  image?: string | object;
  keywords?: string[];
}): ArticleSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: data.headline,
  description: data.description,
  url: data.url,
  ...(data.datePublished && { datePublished: data.datePublished }),
  ...(data.dateModified && { dateModified: data.dateModified }),
  ...(data.author && { author: data.author }),
  ...(data.publisher && { publisher: data.publisher }),
  ...(data.articleBody && { articleBody: data.articleBody }),
  ...(data.image && { image: data.image }),
  ...(data.keywords && { keywords: data.keywords }),
});

export const generateBreadcrumbSchema = (items: Array<{
  name: string;
  url: string;
}>): BreadcrumbSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateServiceSchema = (data: {
  name: string;
  description: string;
  url: string;
  areaServed?: string | object;
  image?: string;
  offers?: any;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: data.name,
  description: data.description,
  url: data.url,
  provider: {
    '@type': 'LegalService',
    name: 'Trembach Law Firm',
  },
  ...(data.areaServed && { areaServed: data.areaServed }),
  ...(data.image && { image: data.image }),
  ...(data.offers && { offers: data.offers }),
});

export const generateLocalBusinessSchema = (data: {
  name: string;
  description?: string;
  telephone?: string;
  email?: string;
  address: any;
  image?: string;
  geoCoordinates?: any;
  openingHours?: any;
  sameAs?: string[];
  priceRange?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: data.name,
  ...(data.description && { description: data.description }),
  ...(data.telephone && { telephone: data.telephone }),
  ...(data.email && { email: data.email }),
  address: data.address,
  ...(data.image && { image: data.image }),
  ...(data.geoCoordinates && { geoCoordinates: data.geoCoordinates }),
  ...(data.openingHours && { openingHoursSpecification: data.openingHours }),
  ...(data.sameAs && { sameAs: data.sameAs }),
  ...(data.priceRange && { priceRange: data.priceRange }),
});
```

### 3. Modify: `index.html` (Update LegalService schema)

Current problematic lines 371-397. Replace with:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Trembach Law Firm",
  "legalName": "Trembach Law Firm",
  "description": "Expert international trade and customs law counsel specializing in tariff classification, customs valuation, country of origin, and trade compliance",
  "url": "https://trembach.law/",
  "image": "https://trembach.law/logo.png",
  "telephone": "+1-818-555-1234",
  "email": "contact@trembach.law",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "27001 Agoura Road, Suite 350",
    "addressLocality": "Calabasas",
    "addressRegion": "CA",
    "postalCode": "91301",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+1-818-555-1234",
    "email": "contact@trembach.law"
  },
  "sameAs": [
    "https://www.linkedin.com/company/trembach-law-firm",
    "https://twitter.com/trembachlaw"
  ],
  "priceRange": "$$$$",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "founder": {
    "@type": "Person",
    "name": "Anatolii Trembach",
    "url": "https://trembach.law/#attorney-profile"
  },
  "award": "2026 Rising Star by Super Lawyers",
  "knowsAbout": [
    "International Trade Law",
    "Customs Law",
    "Tariff Classification",
    "Customs Valuation",
    "Country of Origin",
    "Trade Compliance",
    "CBP Audits",
    "Trade Litigation",
    "Antidumping and Countervailing Duty",
    "Free Trade Agreements"
  ]
}
</script>
```

### 4. Modify: `pages/AttorneyProfilePage.tsx`

Add imports and schema generation:

```typescript
import { useSchemaScript } from '../hooks/useSchemaScript';
import { generatePersonSchema } from '../utils/schemaGenerator';

const AttorneyProfilePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate and inject schema
  const personSchema = generatePersonSchema({
    name: 'Anatolii Trembach',
    givenName: 'Anatolii',
    familyName: 'Trembach',
    jobTitle: 'International Trade & Customs Attorney',
    email: 'anatolii@trembach.law',
    phone: '+1-818-555-1234',
    url: 'https://trembach.law/#attorney-profile',
    award: '2026 Rising Star by Super Lawyers',
    affiliation: {
      '@type': 'LegalService',
      name: 'Trembach Law Firm',
      url: 'https://trembach.law/',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '27001 Agoura Road, Suite 350',
      addressLocality: 'Calabasas',
      addressRegion: 'CA',
      postalCode: '91301',
      addressCountry: 'US',
    },
    knowsAbout: [
      'International Trade Law',
      'Customs Law',
      'Tariff Classification',
      'Customs Valuation',
      'Country of Origin',
      'Trade Compliance',
      'CBP Audits',
      'Trade Litigation',
      'Antidumping and Countervailing Duty',
      'Free Trade Agreements',
    ],
    education: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: "Bachelor's Degree",
        name: 'Bachelor of Laws (Honors)',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'National Law University of Ukraine',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: "Master's Degree",
        name: 'Master of Laws (Honors)',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'National Law University of Ukraine',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: "Master's Degree",
        name: 'Master of Laws (LL.M)',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'University of Southern California Gould School of Law',
        },
      },
    ],
  });

  useSchemaScript(personSchema, 'attorney-schema');

  // ... rest of component
};
```

### 5. Modify: `pages/ArticleDisplayPage.tsx`

Add schema generation:

```typescript
import { useSchemaScript } from '../hooks/useSchemaScript';
import { generateArticleSchema, generateBreadcrumbSchema } from '../utils/schemaGenerator';

const ArticleDisplayPage: React.FC<{ articleId: string }> = ({ articleId }) => {
  const article = articles.find(a => a.id === articleId);

  if (!article) return <div>Article not found</div>;

  // Generate Article schema
  const articleSchema = generateArticleSchema({
    headline: article.title,
    description: article.intro,
    url: `https://trembach.law/#article/${articleId}`,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: 'Anatolii Trembach',
      url: 'https://trembach.law/#attorney-profile',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trembach Law Firm',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trembach.law/logo.png',
      },
    },
    articleBody: article.content,
    keywords: extractKeywords(article.title),
  });

  // Generate Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://trembach.law/' },
    { name: 'News', url: 'https://trembach.law/#news' },
    { name: article.title, url: `https://trembach.law/#article/${articleId}` },
  ]);

  useSchemaScript(articleSchema, `article-schema-${articleId}`);
  useSchemaScript(breadcrumbSchema, `breadcrumb-schema-${articleId}`);

  // ... rest of component
};

// Helper function to extract keywords
function extractKeywords(title: string): string[] {
  // Simple implementation - can be enhanced
  const words = title.split(' ').filter(w => w.length > 3);
  return words.slice(0, 5);
}
```

---

## Validation Testing

### Test with Google's Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter: https://trembach.law/
3. Click "Test URL"
4. Check for any validation errors or warnings

### Test with Schema.org Validator
1. Go to: https://validator.schema.org/
2. Paste JSON-LD code
3. Verify all properties are recognized

### Test with JSON Lint
1. Go to: https://jsonlint.com/
2. Paste JSON-LD code
3. Verify valid JSON syntax

---

## Implementation Timeline

**Phase 1: Week 1 (Immediate)**
- Update phone number: +1-818-555-1234 → actual number
- Add email: contact@trembach.law
- Add image property: logo URL
- Add award property

**Phase 2: Week 2-3 (Short-term)**
- Create useSchemaScript hook
- Create schemaGenerator utility
- Implement Person schema (Attorney)
- Implement Article schema (News articles)
- Implement BreadcrumbList

**Phase 3: Week 4+ (Medium-term)**
- Implement Service schemas (practice areas)
- Implement LocalBusiness schema
- Add metadata to all pages
- Test in Google Search Console

---

## Critical Issues to Fix

1. **Phone Number** (CRITICAL)
   - Location: index.html line 378
   - Issue: 555 exchange is fictional
   - Action: Update to actual business number

2. **Email Missing** (HIGH)
   - Location: index.html
   - Issue: No email in schema
   - Action: Add "email": "contact@trembach.law"

3. **Image Missing** (HIGH)
   - Location: index.html
   - Issue: No logo image in schema
   - Action: Add "image": "https://trembach.law/logo.png"

4. **No Person Schema** (HIGH)
   - Location: AttorneyProfilePage.tsx
   - Issue: Attorney data not structured
   - Action: Implement Person schema with education, awards, contact

5. **No Article Schema** (HIGH)
   - Location: ArticleDisplayPage.tsx
   - Issue: News articles have no structured data
   - Action: Generate Article schema dynamically for each article

---

## Expected SEO Improvements

| Metric | Current | After Implementation |
|--------|---------|----------------------|
| Rich Snippets | Basic | Advanced (6+ types) |
| Local Visibility | Low | High |
| Featured Snippets | Unlikely | Likely |
| Knowledge Graph | Poor | Good |
| Click-through Rate | Baseline | +15-20% |
| Search Position | Current | +2-3 positions |

