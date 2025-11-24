# Schema Implementation Comparison

## Current vs. Recommended JSON-LD Schemas

### VISUAL SUMMARY

```
CURRENT IMPLEMENTATION (15% Coverage)
=====================================

┌─────────────────────┐
│  LegalService       │ ✓ Implemented
│  (Basic version)    │
└─────────────────────┘
        │
        └─ Missing 12+ critical properties
           Missing 8+ schema types

RECOMMENDED IMPLEMENTATION (80%+ Coverage)
==========================================

┌─────────────────────┐
│  Organization       │ ← Enhanced firm identity
│  (Expanded)         │
└──────────┬──────────┘
           │
    ┌──────┴──────────────────────────┐
    │                                  │
┌───┴────────┐                  ┌──────┴──────┐
│ Person     │                  │ LocalBusiness│
│(Attorney)  │                  │(Office)      │
└──────┬─────┘                  └──────────────┘
       │
    ┌──┴──────────────┐
    │                 │
┌───┴────┐       ┌────┴────┐
│Article │       │Service  │
│(News)  │       │(Practice│
└────────┘       │ Areas)  │
                 └─────────┘

Plus: BreadcrumbList, WebPage, ContactPoint
```

## Schema-by-Schema Comparison

### 1. LegalService (NEEDS UPDATE)

**Current Implementation**:
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Trembach Law Firm",
  "description": "...",
  "url": "https://trembach.law/",
  "telephone": "+1-818-555-1234",  // FICTIONAL!
  "address": { /* complete */ },
  "sameAs": [ /* LinkedIn, Twitter */ ],
  "priceRange": "$$$$",
  "areaServed": { "@type": "Country", "name": "United States" }
}
```

**Issues**:
- ✗ Phone number uses fictional 555 exchange
- ✗ Missing email
- ✗ Missing image/logo
- ✗ Missing contactPoint
- ✗ Missing founder reference
- ✗ Missing award information
- ✗ Missing expertise areas (knowsAbout)

**Recommended Update**:
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Trembach Law Firm",
  "legalName": "Trembach Law Firm",
  "description": "Expert international trade and customs law counsel...",
  "url": "https://trembach.law/",
  "image": "https://trembach.law/logo.png",  // ADD
  "telephone": "+1-XXX-XXX-XXXX",  // FIX
  "email": "contact@trembach.law",  // ADD
  "address": { /* complete */ },
  "contactPoint": {  // ADD
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "contact@trembach.law"
  },
  "sameAs": [ /* LinkedIn, Twitter */ ],
  "priceRange": "$$$$",
  "areaServed": { "@type": "Country", "name": "United States" },
  "founder": {  // ADD
    "@type": "Person",
    "name": "Anatolii Trembach"
  },
  "award": "2026 Rising Star by Super Lawyers",  // ADD
  "knowsAbout": [  // ADD
    "International Trade Law",
    "Customs Law",
    "Tariff Classification",
    // ... more expertise areas
  ]
}
```

**Impact**: Medium - Improves firm profile in search results

---

### 2. Person Schema (NEW - CRITICAL)

**Current**: ✗ NOT IMPLEMENTED

**Data Available**: AttorneyProfilePage.tsx (comprehensive biography)

**Recommended Implementation**:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anatolii Trembach",
  "givenName": "Anatolii",
  "familyName": "Trembach",
  "jobTitle": "International Trade & Customs Attorney",
  "email": "anatolii@trembach.law",
  "telephone": "+1-XXX-XXX-XXXX",
  "url": "https://trembach.law/#attorney-profile",
  "image": "https://trembach.law/images/anatolii-trembach.jpg",
  "award": "2026 Rising Star by Super Lawyers",
  "affiliation": {
    "@type": "LegalService",
    "name": "Trembach Law Firm"
  },
  "worksFor": {
    "@type": "LegalService",
    "name": "Trembach Law Firm"
  },
  "address": { /* Calabasas office */ },
  "knowsAbout": [
    "International Trade Law",
    "Customs Law",
    "Tariff Classification",
    "CBP Audits",
    "Trade Litigation",
    // ... 10+ more expertise areas
  ],
  "education": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Bachelor of Laws (Honors)",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "National Law University of Ukraine"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Master of Laws (Honors)",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "National Law University of Ukraine"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Master of Laws (LL.M)",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "University of Southern California Gould School of Law"
      }
    }
  ]
}
```

**Where to add**: AttorneyProfilePage.tsx (useEffect hook)

**Impact**: HIGH - Attorney becomes searchable; award recognized; education visible

---

### 3. Article Schema (NEW - CRITICAL)

**Current**: ✗ NOT IMPLEMENTED

**Data Available**: articles.ts (20+ complete articles), ArticleDisplayPage.tsx

**Recommended Implementation** (one per article):
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "CBP Focused Assessments: What Importers Need to Know in 2025",
  "description": "Comprehensive guide to CBP Focused Assessments...",
  "url": "https://trembach.law/#article/cbp-focused-assessments",
  "image": {
    "@type": "ImageObject",
    "url": "https://trembach.law/images/cbp-assessments.jpg",
    "width": 1200,
    "height": 630
  },
  "datePublished": "2025-11-17",
  "dateModified": "2025-11-17",
  "author": {
    "@type": "Person",
    "name": "Anatolii Trembach",
    "url": "https://trembach.law/#attorney-profile"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Trembach Law Firm",
    "logo": {
      "@type": "ImageObject",
      "url": "https://trembach.law/logo.png"
    }
  },
  "articleSection": "Legal Insights",
  "articleBody": "Full article HTML...",
  "keywords": [
    "CBP Focused Assessments",
    "Customs Audit",
    "Import Compliance"
  ]
}
```

**Where to add**: ArticleDisplayPage.tsx (dynamic schema generation)

**Impact**: CRITICAL - Articles eligible for featured snippets; author attribution; improved ranking

---

### 4. BreadcrumbList Schema (NEW - HIGH)

**Current**: ✗ NOT IMPLEMENTED

**Data Available**: Header.tsx, Footer.tsx (navigation structure)

**Recommended Implementation** (per page):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://trembach.law/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "News",
      "item": "https://trembach.law/#news"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "CBP Focused Assessments",
      "item": "https://trembach.law/#article/cbp-focused-assessments"
    }
  ]
}
```

**Where to add**: All article and practice area pages

**Impact**: HIGH - Better SERP display; improved navigation clarity; featured snippet eligibility

---

### 5. Service Schema (NEW - MEDIUM)

**Current**: ✗ NOT IMPLEMENTED

**Data Available**: PracticeAreasPage.tsx (12+ services)

**Recommended Implementation** (one per service):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tariff Classification Services",
  "description": "Expert legal guidance on tariff classification to ensure compliance and optimize customs duties for your international shipments.",
  "url": "https://trembach.law/#practice-areas",
  "provider": {
    "@type": "LegalService",
    "name": "Trembach Law Firm"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": "Legal Service",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceRange": "$$$$"
  }
}
```

**Services to implement**:
1. Tariff Classification
2. Customs Valuation
3. Country of Origin
4. Duty Drawback
5. Trade Litigation
6. Retaliatory Tariffs
7. Customs Audits & Defense
8. Prior Disclosures
9. Trade Remedies (AD/CVD)
10. Section 301 Tariffs
11. Section 232 Tariffs
12. USMCA & FTA Compliance

**Where to add**: PracticeAreasPage.tsx (one per service card)

**Impact**: MEDIUM - Services become discoverable; service descriptions searchable

---

### 6. LocalBusiness Schema (NEW - MEDIUM)

**Current**: ✗ NOT IMPLEMENTED

**Data Available**: index.html (address), Footer.tsx

**Recommended Implementation**:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Trembach Law Firm",
  "description": "International Trade and Customs Law Firm",
  "image": "https://trembach.law/logo.png",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "contact@trembach.law",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "27001 Agoura Road, Suite 350",
    "addressLocality": "Calabasas",
    "addressRegion": "CA",
    "postalCode": "91301",
    "addressCountry": "US"
  },
  "geoCoordinates": {
    "@type": "GeoCoordinates",
    "latitude": "34.1537",
    "longitude": "-118.6506"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/trembach-law-firm",
    "https://twitter.com/trembachlaw"
  ],
  "priceRange": "$$$$"
}
```

**Where to add**: HomePage.tsx or Footer.tsx

**Impact**: MEDIUM - Local search visibility; Google Maps integration; business hours display

---

### 7. Organization Schema (NEW - MEDIUM)

**Current**: Implicit in LegalService; should be enhanced

**Recommended Implementation**:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Trembach Law Firm",
  "legalName": "Trembach Law Firm",
  "url": "https://trembach.law/",
  "logo": "https://trembach.law/logo.png",
  "description": "International Trade and Customs Law Firm...",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Anatolii Trembach"
  },
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
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "contact@trembach.law"
  },
  "sameAs": [
    "https://www.linkedin.com/company/trembach-law-firm",
    "https://twitter.com/trembachlaw"
  ],
  "knowsAbout": [
    "International Trade Law",
    "Customs Law",
    "Tariff Classification",
    // ... more areas
  ]
}
```

**Where to add**: index.html (main schema)

**Impact**: MEDIUM - Overall organization identity; knowledge graph eligibility

---

### 8. WebPage Schema (NEW - LOW)

**Current**: ✗ NOT IMPLEMENTED

**Recommended Implementation** (one per unique page):
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "International Trade & Customs Law | Trembach Law Firm",
  "description": "Expert international trade and customs law counsel...",
  "url": "https://trembach.law/",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Trembach Law Firm",
    "url": "https://trembach.law/"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://trembach.law/og-image.jpg"
  },
  "datePublished": "2025-11-20",
  "dateModified": "2025-11-20"
}
```

**Where to add**: Each page component (HomePage, AboutPage, etc.)

**Impact**: LOW - Metadata for individual pages; helps search engines understand page purpose

---

## Implementation Priority Matrix

```
┌────────────────────────────────────────────┐
│         IMPLEMENTATION PRIORITY MATRIX      │
├────────────────────────────────────────────┤
│                                            │
│ CRITICAL (Do First)                        │
│ ├─ Person Schema .......... HIGH IMPACT    │
│ ├─ Article Schema ......... HIGH IMPACT    │
│ └─ BreadcrumbList ......... MEDIUM IMPACT  │
│                                            │
│ HIGH PRIORITY (Do Second)                  │
│ ├─ Service Schemas ........ MEDIUM IMPACT  │
│ ├─ LocalBusiness .......... MEDIUM IMPACT  │
│ └─ Update LegalService .... LOW IMPACT     │
│                                            │
│ MEDIUM PRIORITY (Do Third)                 │
│ ├─ Organization Schema .... LOW IMPACT     │
│ ├─ WebPage Schemas ........ LOW IMPACT     │
│ └─ ContactPoint ........... LOW IMPACT     │
│                                            │
│ OPTIONAL (Future)                          │
│ ├─ FAQPage Schema ......... IF FAQ EXISTS  │
│ └─ AggregateRating ........ IF REVIEWS     │
│                                            │
└────────────────────────────────────────────┘
```

## Impact Assessment by Schema Type

| Schema | Type | Files to Add | Effort | Impact | ROI |
|--------|------|--------------|--------|--------|-----|
| Person | Person (Attorney) | AttorneyProfilePage | 2 hrs | HIGH | EXCELLENT |
| Article | Article (News) | ArticleDisplayPage | 2 hrs | HIGH | EXCELLENT |
| BreadcrumbList | Navigation | All article pages | 1 hr | MEDIUM | EXCELLENT |
| Service | Service (Practice areas) | PracticeAreasPage | 2 hrs | MEDIUM | GOOD |
| LocalBusiness | LocalBusiness | HomePage/Footer | 1 hr | MEDIUM | GOOD |
| LegalService | Update | index.html | 0.5 hr | LOW | GOOD |
| Organization | Organization | index.html | 1 hr | LOW | FAIR |
| WebPage | WebPage | All pages | 2 hrs | LOW | FAIR |

## Expected Coverage Growth

```
CURRENT STATE:
  Implemented: 1 schema type
  Properties: 6-8 (out of 20 recommended)
  Coverage: ~15%
  █░░░░░░░░░░░░░░░░░░ 15%

AFTER PHASE 1 (Weeks 1-3):
  Implemented: 4 schema types (Person, Article, BreadcrumbList, updated LegalService)
  Properties: 35+ (out of 50)
  Coverage: ~50%
  ██████░░░░░░░░░░░░░░ 50%

AFTER PHASE 2 (Weeks 4-6):
  Implemented: 6+ schema types (add Service, LocalBusiness, Organization)
  Properties: 60+ (out of 80)
  Coverage: ~75%
  ███████████░░░░░░░░░ 75%

AFTER FULL IMPLEMENTATION:
  Implemented: 8+ schema types
  Properties: 90+ (comprehensive coverage)
  Coverage: ~85%
  █████████████████░░░ 85%
```

## Recommendation Summary

### Quick Wins (1-2 hours)
- Update phone number in index.html
- Add email, image, award to LegalService
- Add founder reference

### High-Value Additions (3-4 hours)
- Implement Person schema (attorney)
- Implement Article schema (news)
- Add BreadcrumbList to pages

### Comprehensive Coverage (2-3 hours additional)
- Service schemas for practice areas
- LocalBusiness schema
- Organization schema enhancements

**Total Implementation Time**: 8-10 hours
**Expected ROI**: 30-40% visibility improvement
**Payoff Period**: 2-4 weeks (from implementation)

