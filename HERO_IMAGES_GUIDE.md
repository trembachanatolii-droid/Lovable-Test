# Hero Section Images Guide

## Current Professional Images for Trade Law Practice Areas

This document outlines the professional stock images currently used in the hero carousel sections of the Trembach Law Firm website.

---

## 1. Tariff Classification
**Location:** `pages/HomePage.tsx` - Slide ID 1
**Image Path:** `/images/tariff-hero-port-harbor.jpg` (Local file)
**Description:** Night-time container port with shipping cranes and harbor lights
**Theme:** International shipping, customs operations, port logistics
**Action Required:** Save your custom port/harbor image to `public/images/tariff-hero-port-harbor.jpg`

---

## 2. Customs Valuation
**Location:** `pages/HomePage.tsx` - Slide ID 2
**Image URL:** `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d`
**Description:** Modern warehouse/logistics facility with professional inspection setting
**Theme:** Customs inspection, warehouse management, valuation processes
**Photographer:** Unsplash (Free to use)

**Visual Elements:**
- Clean, modern warehouse environment
- Professional logistics operations
- Industrial setting appropriate for customs valuation context

---

## 3. Country of Origin
**Location:** `pages/HomePage.tsx` - Slide ID 3
**Image URL:** `https://images.unsplash.com/photo-1524661135-423995f22d0b`
**Description:** International cargo containers and global shipping operations
**Theme:** International trade, global commerce, origin determination
**Photographer:** Unsplash (Free to use)

**Visual Elements:**
- Shipping containers with international markings
- Global trade operations
- Professional freight and logistics environment

---

## 4. Trade Litigation
**Location:** `pages/HomePage.tsx` - Slide ID 5
**Image URL:** `https://images.unsplash.com/photo-1589829545856-d10d557cf95f`
**Description:** Modern courthouse architecture with professional legal atmosphere
**Theme:** Legal proceedings, court litigation, justice system
**Photographer:** Unsplash (Free to use)

**Visual Elements:**
- Contemporary courthouse/legal building
- Professional and authoritative appearance
- Architectural elements conveying stability and justice

---

## Image Specifications

All hero images follow these technical specifications:

- **Format:** JPG or PNG
- **Resolution:** 1920px width minimum
- **Quality:** 80% (Unsplash URLs include `q=80`)
- **Aspect Ratio:** 16:9 or wider recommended
- **Optimization:** Auto-format and crop parameters included
- **Loading:** Optimized for web performance

---

## How to Replace Images

### Option 1: Use Local Images (Recommended for Custom Photos)

1. Save your image to `public/images/` directory
2. Update the image path in `pages/HomePage.tsx`:
   ```typescript
   image: '/images/your-image-name.jpg'
   ```

### Option 2: Use Stock Photo URLs

1. Find a high-quality image on:
   - [Unsplash](https://unsplash.com) - Free, no attribution required
   - [Pexels](https://pexels.com) - Free, no attribution required
   - [Pixabay](https://pixabay.com) - Free, no attribution required

2. Get the image URL and format it:
   ```
   https://images.unsplash.com/photo-XXXXXXXXX?q=80&w=1920&auto=format&fit=crop
   ```

3. Update the URL in `pages/HomePage.tsx`

---

## Recommended Search Terms for Stock Photos

### For Customs Valuation:
- "warehouse inspection"
- "customs documentation"
- "logistics operations"
- "cargo inspection"
- "freight warehouse"

### For Country of Origin:
- "international shipping containers"
- "global trade"
- "cargo port international"
- "freight logistics global"
- "world shipping"

### For Trade Litigation:
- "courthouse architecture"
- "legal building"
- "justice court"
- "law court modern"
- "federal courthouse"

### For Tariff Classification:
- "container port night"
- "shipping terminal cranes"
- "cargo port operations"
- "international port"
- "harbor logistics"

---

## Professional Image Resources

### Free Stock Photo Platforms:
1. **Unsplash** - https://unsplash.com
   - Over 3M+ high-quality photos
   - Free for commercial use
   - No attribution required

2. **Pexels** - https://pexels.com
   - 100,000+ free photos
   - Free for commercial use
   - No attribution required

3. **Pixabay** - https://pixabay.com
   - 2.5M+ images
   - Free for commercial use
   - No attribution required

### Paid Stock Photo Platforms (Premium Quality):
1. **Getty Images** - Professional grade images
2. **iStock** - Extensive legal/business collection
3. **Shutterstock** - Large variety with consistent quality

---

## Current Implementation Location

All hero slide images are configured in:
```
/home/user/Trade-and-Customs-Law-2/pages/HomePage.tsx
Lines 12-61 (heroSlidesData array)
```

---

## Notes

- All current Unsplash images are free to use commercially
- No attribution is required for Unsplash images
- Images are automatically optimized for web delivery
- Consider creating custom photography for maximum brand consistency
- Maintain consistent visual style across all hero sections

---

**Last Updated:** November 20, 2025
**Branch:** claude/tariff-hero-background-01QhNQYuwowjDU1KWi2wUdAi
