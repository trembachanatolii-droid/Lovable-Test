# Complete Tailwind CSS to Plain CSS Mapping

**Generated:** 2025-11-21
**Project:** Trade and Customs Law Website
**Total Unique Classes:** 300+ identified

---

## Executive Summary

This document provides a comprehensive mapping of ALL Tailwind CSS classes used in the codebase to their plain CSS equivalents. Classes are categorized by type and marked as either **CRITICAL** (above-the-fold, <10KB) or **NON-CRITICAL** (deferred loading).

### Critical CSS Strategy
- **Target Size:** ≤10KB (compressed)
- **Includes:** Header, Hero section (text-based LCP), initial viewport
- **LCP Element:** Hero H1 text on HomePage
- **Loading Method:** Inline `<style>` in index.html

---

## 1. CUSTOM COLOR CLASSES (Brand-Specific)

### Custom Tailwind Colors → CSS Variables
These require special handling as they're custom to this project:

```css
/* CSS Variables (Already defined in index.html) */
:root {
  --navy-primary: #012169;
  --navy-dark: #103483;
  --teal-primary: #3FBB94;
  --teal-forest: #2D8469;
  --gray-dark: #333333;
  --gray-medium: #CBCBCB;
  --gray-light: #F2F2F2;
  --gray-lighter: #F8FAFC;
  --gold-primary: #FBBF24;
  --white: #FFFFFF;
}
```

### Custom Class Mappings

| Tailwind Class | CSS Equivalent | Usage | Critical? |
|----------------|----------------|-------|-----------|
| `bg-primary-navy` | `background-color: #012169;` | Header, Footer, Hero | **CRITICAL** |
| `bg-primary-darkBlue` | `background-color: #103483;` | Form inputs | NON-CRITICAL |
| `bg-secondary-teal` | `background-color: #3FBB94;` | Buttons, accents | **CRITICAL** |
| `bg-secondary-forestGreen` | `background-color: #2D8469;` | Hover states | NON-CRITICAL |
| `bg-secondary-gold` | `background-color: #FBBF24;` | CTA elements | NON-CRITICAL |
| `bg-soft-teal` | `background-color: #E5F7F2;` | Stats section | NON-CRITICAL |
| `bg-neutral-darkGray` | `background-color: #333333;` | Text blocks | NON-CRITICAL |
| `bg-neutral-gray` | `background-color: #CBCBCB;` | Borders | NON-CRITICAL |
| `bg-neutral-lightGray` | `background-color: #F2F2F2;` | Backgrounds | NON-CRITICAL |
| `bg-gray-light` | `background-color: #F2F2F2;` | Card backgrounds | NON-CRITICAL |
| `bg-gray-50` | `background-color: #F9FAFB;` | Section backgrounds | NON-CRITICAL |
| `text-primary-navy` | `color: #012169;` | Headers, titles | **CRITICAL** |
| `text-primary-darkBlue` | `color: #103483;` | Links | NON-CRITICAL |
| `text-secondary-teal` | `color: #3FBB94;` | Hover states | NON-CRITICAL |
| `text-neutral-darkGray` | `color: #333333;` | Body text | **CRITICAL** |
| `text-neutral-gray` | `color: #CBCBCB;` | Placeholder text | NON-CRITICAL |
| `text-text-primary` | `color: #012169;` | Primary text | **CRITICAL** |
| `text-text-secondary` | `color: #5A5A5A;` | Secondary text | **CRITICAL** |
| `text-navy-medium` | `color: #1E40AF;` | Medium navy links | NON-CRITICAL |
| `text-navy-primary` | `color: #012169;` | Primary navy | **CRITICAL** |
| `text-teal-primary` | `color: #3FBB94;` | Teal accents | NON-CRITICAL |
| `text-gold-primary` | `color: #FBBF24;` | Gold accents | NON-CRITICAL |
| `border-primary-navy` | `border-color: #012169;` | Button borders | NON-CRITICAL |
| `border-secondary-teal` | `border-color: #3FBB94;` | Active states | NON-CRITICAL |
| `border-neutral-lightGray` | `border-color: #F2F2F2;` | Card borders | NON-CRITICAL |
| `border-border-subtle` | `border-color: #E5E7EB;` | Subtle borders | NON-CRITICAL |
| `hover:bg-secondary-teal` | `:hover { background-color: #3FBB94; }` | Button hover | NON-CRITICAL |
| `hover:text-primary-navy` | `:hover { color: #012169; }` | Link hover | **CRITICAL** |
| `hover:text-secondary-teal` | `:hover { color: #3FBB94; }` | Hover accents | NON-CRITICAL |
| `focus:ring-secondary-teal` | `:focus { box-shadow: 0 0 0 3px rgba(63,187,148,0.5); }` | Focus states | **CRITICAL** |
| `focus:border-secondary-teal` | `:focus { border-color: #3FBB94; }` | Input focus | NON-CRITICAL |

---

## 2. LAYOUT CLASSES

### Display & Positioning

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `block` | `display: block;` | 50+ | **CRITICAL** |
| `inline-block` | `display: inline-block;` | 30+ | **CRITICAL** |
| `inline-flex` | `display: inline-flex;` | 15+ | NON-CRITICAL |
| `flex` | `display: flex;` | 100+ | **CRITICAL** |
| `inline` | `display: inline;` | 5+ | NON-CRITICAL |
| `hidden` | `display: none;` | 20+ | **CRITICAL** |
| `grid` | `display: grid;` | 40+ | NON-CRITICAL |
| `relative` | `position: relative;` | 80+ | **CRITICAL** |
| `absolute` | `position: absolute;` | 60+ | **CRITICAL** |
| `fixed` | `position: fixed;` | 10+ | **CRITICAL** |
| `sticky` | `position: sticky;` | 2+ | NON-CRITICAL |

### Flex Properties

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `flex-col` | `flex-direction: column;` | 60+ | **CRITICAL** |
| `flex-row` | `flex-direction: row;` | 30+ | NON-CRITICAL |
| `flex-wrap` | `flex-wrap: wrap;` | 15+ | NON-CRITICAL |
| `flex-1` | `flex: 1 1 0%;` | 25+ | NON-CRITICAL |
| `flex-grow` | `flex-grow: 1;` | 10+ | NON-CRITICAL |
| `flex-shrink-0` | `flex-shrink: 0;` | 8+ | NON-CRITICAL |
| `items-start` | `align-items: flex-start;` | 20+ | NON-CRITICAL |
| `items-center` | `align-items: center;` | 80+ | **CRITICAL** |
| `items-end` | `align-items: flex-end;` | 5+ | NON-CRITICAL |
| `justify-start` | `justify-content: flex-start;` | 10+ | NON-CRITICAL |
| `justify-center` | `justify-content: center;` | 50+ | **CRITICAL** |
| `justify-between` | `justify-content: space-between;` | 30+ | **CRITICAL** |
| `justify-end` | `justify-content: flex-end;` | 10+ | NON-CRITICAL |

### Grid Properties

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr));` | 30+ | NON-CRITICAL |
| `grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr));` | 15+ | NON-CRITICAL |
| `grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr));` | 10+ | NON-CRITICAL |
| `grid-cols-4` | `grid-template-columns: repeat(4, minmax(0, 1fr));` | 5+ | NON-CRITICAL |
| `md:grid-cols-2` | `@media (min-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }` | 25+ | NON-CRITICAL |
| `lg:grid-cols-3` | `@media (min-width: 1024px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }` | 15+ | NON-CRITICAL |
| `lg:grid-cols-4` | `@media (min-width: 1024px) { grid-template-columns: repeat(4, minmax(0, 1fr)); }` | 8+ | NON-CRITICAL |
| `col-span-1` | `grid-column: span 1 / span 1;` | 10+ | NON-CRITICAL |
| `col-span-2` | `grid-column: span 2 / span 2;` | 12+ | NON-CRITICAL |
| `md:col-span-2` | `@media (min-width: 768px) { grid-column: span 2 / span 2; }` | 8+ | NON-CRITICAL |
| `lg:col-span-2` | `@media (min-width: 1024px) { grid-column: span 2 / span 2; }` | 6+ | NON-CRITICAL |

---

## 3. SPACING CLASSES

### Padding

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `p-0` | `padding: 0;` | 5+ | NON-CRITICAL |
| `p-1` | `padding: 0.25rem;` | 3+ | NON-CRITICAL |
| `p-2` | `padding: 0.5rem;` | 15+ | NON-CRITICAL |
| `p-3` | `padding: 0.75rem;` | 40+ | NON-CRITICAL |
| `p-4` | `padding: 1rem;` | 30+ | NON-CRITICAL |
| `p-5` | `padding: 1.25rem;` | 15+ | **CRITICAL** |
| `p-6` | `padding: 1.5rem;` | 25+ | NON-CRITICAL |
| `p-8` | `padding: 2rem;` | 35+ | NON-CRITICAL |
| `p-12` | `padding: 3rem;` | 8+ | NON-CRITICAL |
| `px-2` | `padding-left: 0.5rem; padding-right: 0.5rem;` | 10+ | NON-CRITICAL |
| `px-3` | `padding-left: 0.75rem; padding-right: 0.75rem;` | 20+ | NON-CRITICAL |
| `px-4` | `padding-left: 1rem; padding-right: 1rem;` | 30+ | NON-CRITICAL |
| `px-5` | `padding-left: 1.25rem; padding-right: 1.25rem;` | 25+ | **CRITICAL** |
| `px-6` | `padding-left: 1.5rem; padding-right: 1.5rem;` | 20+ | NON-CRITICAL |
| `px-8` | `padding-left: 2rem; padding-right: 2rem;` | 25+ | NON-CRITICAL |
| `px-10` | `padding-left: 2.5rem; padding-right: 2.5rem;` | 10+ | NON-CRITICAL |
| `py-1` | `padding-top: 0.25rem; padding-bottom: 0.25rem;` | 5+ | NON-CRITICAL |
| `py-1.5` | `padding-top: 0.375rem; padding-bottom: 0.375rem;` | 3+ | NON-CRITICAL |
| `py-2` | `padding-top: 0.5rem; padding-bottom: 0.5rem;` | 15+ | NON-CRITICAL |
| `py-3` | `padding-top: 0.75rem; padding-bottom: 0.75rem;` | 30+ | NON-CRITICAL |
| `py-4` | `padding-top: 1rem; padding-bottom: 1rem;` | 25+ | **CRITICAL** |
| `py-5` | `padding-top: 1.25rem; padding-bottom: 1.25rem;` | 10+ | NON-CRITICAL |
| `py-6` | `padding-top: 1.5rem; padding-bottom: 1.5rem;` | 15+ | NON-CRITICAL |
| `py-8` | `padding-top: 2rem; padding-bottom: 2rem;` | 10+ | NON-CRITICAL |
| `py-12` | `padding-top: 3rem; padding-bottom: 3rem;` | 8+ | NON-CRITICAL |
| `py-16` | `padding-top: 4rem; padding-bottom: 4rem;` | 15+ | NON-CRITICAL |
| `py-20` | `padding-top: 5rem; padding-bottom: 5rem;` | 20+ | NON-CRITICAL |
| `py-24` | `padding-top: 6rem; padding-bottom: 6rem;` | 8+ | NON-CRITICAL |
| `py-32` | `padding-top: 8rem; padding-bottom: 8rem;` | 5+ | NON-CRITICAL |
| `pt-2` | `padding-top: 0.5rem;` | 8+ | NON-CRITICAL |
| `pt-4` | `padding-top: 1rem;` | 12+ | NON-CRITICAL |
| `pt-8` | `padding-top: 2rem;` | 10+ | NON-CRITICAL |
| `pt-16` | `padding-top: 4rem;` | 6+ | NON-CRITICAL |
| `pt-20` | `padding-top: 5rem;` | 8+ | NON-CRITICAL |
| `pb-2` | `padding-bottom: 0.5rem;` | 8+ | NON-CRITICAL |
| `pb-4` | `padding-bottom: 1rem;` | 10+ | NON-CRITICAL |
| `pb-8` | `padding-bottom: 2rem;` | 5+ | NON-CRITICAL |
| `pl-2` | `padding-left: 0.5rem;` | 3+ | NON-CRITICAL |
| `pr-3` | `padding-right: 0.75rem;` | 5+ | NON-CRITICAL |
| `pr-8` | `padding-right: 2rem;` | 3+ | NON-CRITICAL |
| `pr-10` | `padding-right: 2.5rem;` | 2+ | NON-CRITICAL |

### Margin

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `m-0` | `margin: 0;` | 10+ | **CRITICAL** |
| `m-auto` | `margin: auto;` | 5+ | NON-CRITICAL |
| `mx-auto` | `margin-left: auto; margin-right: auto;` | 60+ | **CRITICAL** |
| `mx-2` | `margin-left: 0.5rem; margin-right: 0.5rem;` | 3+ | NON-CRITICAL |
| `mx-3` | `margin-left: 0.75rem; margin-right: 0.75rem;` | 5+ | NON-CRITICAL |
| `my-2` | `margin-top: 0.5rem; margin-bottom: 0.5rem;` | 3+ | NON-CRITICAL |
| `mb-1` | `margin-bottom: 0.25rem;` | 5+ | NON-CRITICAL |
| `mb-2` | `margin-bottom: 0.5rem;` | 30+ | **CRITICAL** |
| `mb-3` | `margin-bottom: 0.75rem;` | 25+ | NON-CRITICAL |
| `mb-4` | `margin-bottom: 1rem;` | 50+ | **CRITICAL** |
| `mb-5` | `margin-bottom: 1.25rem;` | 15+ | NON-CRITICAL |
| `mb-6` | `margin-bottom: 1.5rem;` | 40+ | NON-CRITICAL |
| `mb-8` | `margin-bottom: 2rem;` | 30+ | NON-CRITICAL |
| `mb-10` | `margin-bottom: 2.5rem;` | 8+ | NON-CRITICAL |
| `mb-12` | `margin-bottom: 3rem;` | 10+ | NON-CRITICAL |
| `mb-16` | `margin-bottom: 4rem;` | 5+ | NON-CRITICAL |
| `mb-20` | `margin-bottom: 5rem;` | 8+ | NON-CRITICAL |
| `mt-1` | `margin-top: 0.25rem;` | 5+ | NON-CRITICAL |
| `mt-2` | `margin-top: 0.5rem;` | 20+ | NON-CRITICAL |
| `mt-3` | `margin-top: 0.75rem;` | 10+ | NON-CRITICAL |
| `mt-4` | `margin-top: 1rem;` | 15+ | NON-CRITICAL |
| `mt-6` | `margin-top: 1.5rem;` | 20+ | NON-CRITICAL |
| `mt-8` | `margin-top: 2rem;` | 15+ | NON-CRITICAL |
| `mt-12` | `margin-top: 3rem;` | 8+ | NON-CRITICAL |
| `mt-16` | `margin-top: 4rem;` | 5+ | NON-CRITICAL |
| `mt-20` | `margin-top: 5rem;` | 3+ | NON-CRITICAL |
| `-mt-4` | `margin-top: -1rem;` | 2+ | NON-CRITICAL |
| `mt-auto` | `margin-top: auto;` | 8+ | NON-CRITICAL |
| `ml-2` | `margin-left: 0.5rem;` | 5+ | NON-CRITICAL |
| `ml-3` | `margin-left: 0.75rem;` | 3+ | NON-CRITICAL |
| `mr-2` | `margin-right: 0.5rem;` | 8+ | NON-CRITICAL |
| `mr-3` | `margin-right: 0.75rem;` | 5+ | NON-CRITICAL |
| `mr-4` | `margin-right: 1rem;` | 3+ | NON-CRITICAL |

### Gap

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `gap-1` | `gap: 0.25rem;` | 3+ | NON-CRITICAL |
| `gap-1.5` | `gap: 0.375rem;` | 5+ | NON-CRITICAL |
| `gap-2` | `gap: 0.5rem;` | 30+ | NON-CRITICAL |
| `gap-3` | `gap: 0.75rem;` | 15+ | NON-CRITICAL |
| `gap-4` | `gap: 1rem;` | 25+ | NON-CRITICAL |
| `gap-6` | `gap: 1.5rem;` | 20+ | NON-CRITICAL |
| `gap-8` | `gap: 2rem;` | 25+ | NON-CRITICAL |
| `gap-10` | `gap: 2.5rem;` | 5+ | NON-CRITICAL |
| `gap-12` | `gap: 3rem;` | 10+ | NON-CRITICAL |
| `gap-16` | `gap: 4rem;` | 5+ | NON-CRITICAL |
| `sm:gap-8` | `@media (min-width: 640px) { gap: 2rem; }` | 8+ | NON-CRITICAL |
| `lg:gap-4` | `@media (min-width: 1024px) { gap: 1rem; }` | 3+ | NON-CRITICAL |
| `lg:gap-10` | `@media (min-width: 1024px) { gap: 2.5rem; }` | 2+ | NON-CRITICAL |

### Space Between

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `space-y-1` | `> * + * { margin-top: 0.25rem; }` | 3+ | NON-CRITICAL |
| `space-y-2` | `> * + * { margin-top: 0.5rem; }` | 15+ | NON-CRITICAL |
| `space-y-3` | `> * + * { margin-top: 0.75rem; }` | 8+ | NON-CRITICAL |
| `space-y-4` | `> * + * { margin-top: 1rem; }` | 12+ | NON-CRITICAL |
| `space-y-6` | `> * + * { margin-top: 1.5rem; }` | 20+ | NON-CRITICAL |
| `space-y-8` | `> * + * { margin-top: 2rem; }` | 10+ | NON-CRITICAL |
| `space-y-20` | `> * + * { margin-top: 5rem; }` | 2+ | NON-CRITICAL |
| `space-x-2` | `> * + * { margin-left: 0.5rem; }` | 5+ | NON-CRITICAL |
| `space-x-3` | `> * + * { margin-left: 0.75rem; }` | 3+ | NON-CRITICAL |

---

## 4. TYPOGRAPHY CLASSES

### Font Family

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `font-garamond` | `font-family: Georgia, Cambria, 'Times New Roman', serif;` | 50+ | **CRITICAL** |
| `font-roboto` | `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;` | 5+ | NON-CRITICAL |
| `font-montserrat` | `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;` | 3+ | NON-CRITICAL |
| `font-display` | `font-family: Georgia, serif;` | 15+ | NON-CRITICAL |

### Font Size

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `text-xs` | `font-size: 0.75rem; line-height: 1rem;` | 15+ | NON-CRITICAL |
| `text-sm` | `font-size: 0.875rem; line-height: 1.25rem;` | 40+ | NON-CRITICAL |
| `text-base` | `font-size: 1rem; line-height: 1.5rem;` | 35+ | **CRITICAL** |
| `text-lg` | `font-size: 1.125rem; line-height: 1.75rem;` | 30+ | **CRITICAL** |
| `text-xl` | `font-size: 1.25rem; line-height: 1.75rem;` | 25+ | **CRITICAL** |
| `text-2xl` | `font-size: 1.5rem; line-height: 2rem;` | 30+ | NON-CRITICAL |
| `text-3xl` | `font-size: 1.875rem; line-height: 2.25rem;` | 25+ | NON-CRITICAL |
| `text-4xl` | `font-size: 2.25rem; line-height: 2.5rem;` | 15+ | **CRITICAL** |
| `text-5xl` | `font-size: 3rem; line-height: 1;` | 10+ | NON-CRITICAL |
| `text-6xl` | `font-size: 3.75rem; line-height: 1;` | 8+ | **CRITICAL** |
| `text-7xl` | `font-size: 4.5rem; line-height: 1;` | 3+ | NON-CRITICAL |
| `text-[13px]` | `font-size: 13px;` | 2+ | NON-CRITICAL |
| `text-[15px]` | `font-size: 15px;` | 3+ | NON-CRITICAL |
| `text-[17px]` | `font-size: 17px;` | 8+ | NON-CRITICAL |
| `text-[21px]` | `font-size: 21px;` | 10+ | NON-CRITICAL |
| `text-[42px]` | `font-size: 42px;` | 5+ | NON-CRITICAL |
| `lg:text-6xl` | `@media (min-width: 1024px) { font-size: 3.75rem; }` | 5+ | **CRITICAL** |
| `lg:text-xl` | `@media (min-width: 1024px) { font-size: 1.25rem; }` | 3+ | NON-CRITICAL |
| `md:text-7xl` | `@media (min-width: 768px) { font-size: 4.5rem; }` | 2+ | NON-CRITICAL |
| `md:text-5xl` | `@media (min-width: 768px) { font-size: 3rem; }` | 5+ | NON-CRITICAL |
| `md:text-4xl` | `@media (min-width: 768px) { font-size: 2.25rem; }` | 8+ | NON-CRITICAL |
| `md:text-2xl` | `@media (min-width: 768px) { font-size: 1.5rem; }` | 3+ | NON-CRITICAL |

### Font Weight

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `font-normal` | `font-weight: 400;` | 5+ | NON-CRITICAL |
| `font-medium` | `font-weight: 500;` | 15+ | NON-CRITICAL |
| `font-semibold` | `font-weight: 600;` | 40+ | NON-CRITICAL |
| `font-bold` | `font-weight: 700;` | 100+ | **CRITICAL** |
| `font-light` | `font-weight: 300;` | 3+ | NON-CRITICAL |

### Line Height

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `leading-none` | `line-height: 1;` | 5+ | NON-CRITICAL |
| `leading-tight` | `line-height: 1.25;` | 30+ | **CRITICAL** |
| `leading-relaxed` | `line-height: 1.625;` | 25+ | NON-CRITICAL |

### Letter Spacing

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `tracking-wide` | `letter-spacing: 0.025em;` | 8+ | NON-CRITICAL |
| `tracking-wider` | `letter-spacing: 0.05em;` | 12+ | NON-CRITICAL |
| `tracking-widest` | `letter-spacing: 0.1em;` | 5+ | NON-CRITICAL |
| `tracking-tight` | `letter-spacing: -0.025em;` | 3+ | NON-CRITICAL |
| `tracking-tighter` | `letter-spacing: -0.05em;` | 2+ | NON-CRITICAL |

### Text Alignment

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `text-left` | `text-align: left;` | 30+ | NON-CRITICAL |
| `text-center` | `text-align: center;` | 50+ | **CRITICAL** |
| `text-right` | `text-align: right;` | 5+ | NON-CRITICAL |
| `md:text-left` | `@media (min-width: 768px) { text-align: left; }` | 8+ | NON-CRITICAL |

### Text Transform

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `uppercase` | `text-transform: uppercase;` | 20+ | NON-CRITICAL |
| `lowercase` | `text-transform: lowercase;` | 2+ | NON-CRITICAL |
| `capitalize` | `text-transform: capitalize;` | 1+ | NON-CRITICAL |

### Text Decoration

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `underline` | `text-decoration: underline;` | 3+ | NON-CRITICAL |
| `no-underline` | `text-decoration: none;` | 15+ | NON-CRITICAL |

---

## 5. SIZING CLASSES

### Width

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `w-0` | `width: 0;` | 5+ | NON-CRITICAL |
| `w-1` | `width: 0.25rem;` | 2+ | NON-CRITICAL |
| `w-4` | `width: 1rem;` | 8+ | NON-CRITICAL |
| `w-5` | `width: 1.25rem;` | 10+ | NON-CRITICAL |
| `w-6` | `width: 1.5rem;` | 25+ | NON-CRITICAL |
| `w-8` | `width: 2rem;` | 15+ | NON-CRITICAL |
| `w-12` | `width: 3rem;` | 8+ | NON-CRITICAL |
| `w-20` | `width: 5rem;` | 10+ | NON-CRITICAL |
| `w-24` | `width: 6rem;` | 3+ | NON-CRITICAL |
| `w-48` | `width: 12rem;` | 8+ | NON-CRITICAL |
| `w-full` | `width: 100%;` | 80+ | **CRITICAL** |
| `w-screen` | `width: 100vw;` | 2+ | NON-CRITICAL |
| `lg:w-20` | `@media (min-width: 1024px) { width: 5rem; }` | 2+ | NON-CRITICAL |
| `lg:w-48` | `@media (min-width: 1024px) { width: 12rem; }` | 3+ | NON-CRITICAL |
| `lg:w-64` | `@media (min-width: 1024px) { width: 16rem; }` | 2+ | NON-CRITICAL |
| `md:w-[40%]` | `@media (min-width: 768px) { width: 40%; }` | 1+ | NON-CRITICAL |

### Max Width

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `max-w-md` | `max-width: 28rem;` | 5+ | NON-CRITICAL |
| `max-w-lg` | `max-width: 32rem;` | 8+ | NON-CRITICAL |
| `max-w-xl` | `max-width: 36rem;` | 5+ | NON-CRITICAL |
| `max-w-2xl` | `max-width: 42rem;` | 15+ | **CRITICAL** |
| `max-w-3xl` | `max-width: 48rem;` | 10+ | NON-CRITICAL |
| `max-w-4xl` | `max-width: 56rem;` | 20+ | NON-CRITICAL |
| `max-w-5xl` | `max-width: 64rem;` | 5+ | NON-CRITICAL |
| `max-w-6xl` | `max-width: 72rem;` | 10+ | NON-CRITICAL |
| `max-w-7xl` | `max-width: 80rem;` | 8+ | NON-CRITICAL |
| `max-w-[800px]` | `max-width: 800px;` | 5+ | NON-CRITICAL |
| `max-w-[1376px]` | `max-width: 1376px;` | 20+ | **CRITICAL** |
| `max-w-[720px]` | `max-width: 720px;` | 3+ | NON-CRITICAL |
| `max-w-[1200px]` | `max-width: 1200px;` | 8+ | NON-CRITICAL |
| `lg:max-w-[1376px]` | `@media (min-width: 1024px) { max-width: 1376px; }` | 5+ | NON-CRITICAL |

### Min Width

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `min-w-[80px]` | `min-width: 80px;` | 2+ | NON-CRITICAL |

### Height

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `h-0` | `height: 0;` | 3+ | NON-CRITICAL |
| `h-1` | `height: 0.25rem;` | 8+ | NON-CRITICAL |
| `h-1.5` | `height: 0.375rem;` | 5+ | NON-CRITICAL |
| `h-4` | `height: 1rem;` | 15+ | NON-CRITICAL |
| `h-5` | `height: 1.25rem;` | 10+ | NON-CRITICAL |
| `h-6` | `height: 1.5rem;` | 25+ | NON-CRITICAL |
| `h-8` | `height: 2rem;` | 15+ | NON-CRITICAL |
| `h-12` | `height: 3rem;` | 5+ | NON-CRITICAL |
| `h-20` | `height: 5rem;` | 5+ | NON-CRITICAL |
| `h-48` | `height: 12rem;` | 8+ | NON-CRITICAL |
| `h-full` | `height: 100%;` | 40+ | **CRITICAL** |
| `h-screen` | `height: 100vh;` | 1+ | NON-CRITICAL |
| `lg:h-[98px]` | `@media (min-width: 1024px) { height: 98px; }` | 2+ | NON-CRITICAL |
| `lg:h-[109px]` | `@media (min-width: 1024px) { height: 109px; }` | 1+ | NON-CRITICAL |
| `lg:h-64` | `@media (min-width: 1024px) { height: 16rem; }` | 2+ | NON-CRITICAL |
| `md:h-full` | `@media (min-width: 768px) { height: 100%; }` | 3+ | NON-CRITICAL |
| `h-[97vh]` | `height: 97vh;` | 1+ | NON-CRITICAL |

### Min Height

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `min-h-[50vh]` | `min-height: 50vh;` | 2+ | NON-CRITICAL |
| `min-h-screen` | `min-height: 100vh;` | 1+ | NON-CRITICAL |

---

## 6. POSITION & INSET CLASSES

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `inset-0` | `top: 0; right: 0; bottom: 0; left: 0;` | 25+ | **CRITICAL** |
| `inset-y-0` | `top: 0; bottom: 0;` | 2+ | NON-CRITICAL |
| `top-0` | `top: 0;` | 20+ | **CRITICAL** |
| `top-3` | `top: 0.75rem;` | 5+ | NON-CRITICAL |
| `bottom-0` | `bottom: 0;` | 15+ | NON-CRITICAL |
| `left-0` | `left: 0;` | 15+ | **CRITICAL** |
| `right-0` | `right: 0;` | 15+ | **CRITICAL** |
| `right-3` | `right: 0.75rem;` | 5+ | NON-CRITICAL |
| `right-[-80px]` | `right: -80px;` | 3+ | NON-CRITICAL |
| `z-0` | `z-index: 0;` | 10+ | NON-CRITICAL |
| `z-10` | `z-index: 10;` | 15+ | **CRITICAL** |
| `z-20` | `z-index: 20;` | 10+ | NON-CRITICAL |
| `z-30` | `z-index: 30;` | 5+ | NON-CRITICAL |
| `z-50` | `z-index: 50;` | 8+ | **CRITICAL** |

---

## 7. BACKGROUND & GRADIENT CLASSES

### Background Colors (see Custom Colors section above)

### Background Images

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `bg-gradient-to-r` | `background-image: linear-gradient(to right, var(--tw-gradient-stops));` | 3+ | NON-CRITICAL |

### Background Properties

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `bg-cover` | `background-size: cover;` | 5+ | NON-CRITICAL |
| `bg-contain` | `background-size: contain;` | 1+ | NON-CRITICAL |
| `object-cover` | `object-fit: cover;` | 15+ | NON-CRITICAL |

---

## 8. BORDER CLASSES

### Border Width

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `border` | `border-width: 1px;` | 40+ | NON-CRITICAL |
| `border-0` | `border-width: 0;` | 3+ | NON-CRITICAL |
| `border-2` | `border-width: 2px;` | 15+ | NON-CRITICAL |
| `border-4` | `border-width: 4px;` | 3+ | NON-CRITICAL |
| `border-t` | `border-top-width: 1px;` | 10+ | NON-CRITICAL |
| `border-t-2` | `border-top-width: 2px;` | 2+ | NON-CRITICAL |
| `border-t-4` | `border-top-width: 4px;` | 1+ | NON-CRITICAL |
| `border-b` | `border-bottom-width: 1px;` | 8+ | NON-CRITICAL |
| `border-l` | `border-left-width: 1px;` | 5+ | NON-CRITICAL |
| `border-l-4` | `border-left-width: 4px;` | 3+ | NON-CRITICAL |
| `border-r` | `border-right-width: 1px;` | 5+ | NON-CRITICAL |
| `border-r-0` | `border-right-width: 0;` | 1+ | NON-CRITICAL |
| `lg:border-2` | `@media (min-width: 1024px) { border-width: 2px; }` | 3+ | NON-CRITICAL |
| `lg:border-r-0` | `@media (min-width: 1024px) { border-right-width: 0; }` | 1+ | NON-CRITICAL |

### Border Radius

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `rounded` | `border-radius: 0.25rem;` | 40+ | NON-CRITICAL |
| `rounded-md` | `border-radius: 0.375rem;` | 15+ | NON-CRITICAL |
| `rounded-lg` | `border-radius: 0.5rem;` | 25+ | NON-CRITICAL |
| `rounded-xl` | `border-radius: 0.75rem;` | 20+ | NON-CRITICAL |
| `rounded-2xl` | `border-radius: 1rem;` | 15+ | NON-CRITICAL |
| `rounded-full` | `border-radius: 9999px;` | 20+ | NON-CRITICAL |
| `lg:rounded-xl` | `@media (min-width: 1024px) { border-radius: 0.75rem; }` | 3+ | NON-CRITICAL |

### Border Style

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `border-solid` | `border-style: solid;` | 5+ | NON-CRITICAL |
| `border-dashed` | `border-style: dashed;` | 3+ | NON-CRITICAL |

---

## 9. SHADOW & EFFECTS

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `shadow` | `box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1);` | 15+ | NON-CRITICAL |
| `shadow-sm` | `box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);` | 20+ | NON-CRITICAL |
| `shadow-md` | `box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);` | 10+ | NON-CRITICAL |
| `shadow-lg` | `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);` | 15+ | NON-CRITICAL |
| `shadow-xl` | `box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);` | 8+ | NON-CRITICAL |
| `shadow-2xl` | `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);` | 5+ | NON-CRITICAL |
| `shadow-[0_18px_40px_rgba(15,23,42,0.08)]` | `box-shadow: 0 18px 40px rgba(15,23,42,0.08);` | 2+ | NON-CRITICAL |
| `hover:shadow-xl` | `:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }` | 10+ | NON-CRITICAL |
| `hover:shadow-2xl` | `:hover { box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }` | 5+ | NON-CRITICAL |
| `drop-shadow-md` | `filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));` | 3+ | NON-CRITICAL |
| `drop-shadow-lg` | `filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));` | 2+ | NON-CRITICAL |

### Opacity

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `opacity-0` | `opacity: 0;` | 10+ | NON-CRITICAL |
| `opacity-70` | `opacity: 0.7;` | 2+ | NON-CRITICAL |
| `opacity-95` | `opacity: 0.95;` | 1+ | NON-CRITICAL |
| `opacity-100` | `opacity: 1;` | 8+ | NON-CRITICAL |
| `group-hover:opacity-100` | `.group:hover & { opacity: 1; }` | 5+ | NON-CRITICAL |
| `group-hover:opacity-0` | `.group:hover & { opacity: 0; }` | 2+ | NON-CRITICAL |

---

## 10. TRANSITIONS & ANIMATIONS

### Transition Properties

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `transition` | `transition-property: all; transition-duration: 150ms;` | 10+ | NON-CRITICAL |
| `transition-all` | `transition-property: all; transition-duration: 150ms;` | 30+ | NON-CRITICAL |
| `transition-colors` | `transition-property: color, background-color, border-color;` | 25+ | **CRITICAL** |
| `transition-opacity` | `transition-property: opacity;` | 10+ | NON-CRITICAL |
| `transition-shadow` | `transition-property: box-shadow;` | 8+ | NON-CRITICAL |
| `transition-transform` | `transition-property: transform;` | 5+ | NON-CRITICAL |
| `transition-[right]` | `transition-property: right;` | 3+ | NON-CRITICAL |

### Transition Duration

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `duration-150` | `transition-duration: 150ms;` | 5+ | NON-CRITICAL |
| `duration-200` | `transition-duration: 200ms;` | 25+ | NON-CRITICAL |
| `duration-300` | `transition-duration: 300ms;` | 40+ | NON-CRITICAL |
| `duration-500` | `transition-duration: 500ms;` | 5+ | NON-CRITICAL |
| `duration-1000` | `transition-duration: 1000ms;` | 3+ | NON-CRITICAL |

### Transition Timing

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `ease-in-out` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);` | 20+ | NON-CRITICAL |
| `ease-linear` | `transition-timing-function: linear;` | 3+ | NON-CRITICAL |

### Custom Animations

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `animate-fadeIn` | Custom keyframe animation (needs definition) | 7+ | NON-CRITICAL |
| `animate-pulse-glow` | Custom keyframe animation (needs definition) | 1+ | NON-CRITICAL |
| `animate-progress-bar` | Custom keyframe animation (needs definition) | 1+ | NON-CRITICAL |

**Required @keyframes definitions:**

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(63, 187, 148, 0.6); }
  50% { box-shadow: 0 0 30px rgba(63, 187, 148, 0.9); }
}

@keyframes progress-bar {
  from { width: 0%; }
  to { width: 100%; }
}
```

---

## 11. TRANSFORM CLASSES

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `transform` | `transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y));` | 5+ | NON-CRITICAL |
| `translate-x-0` | `--tw-translate-x: 0;` | 2+ | NON-CRITICAL |
| `translate-x-full` | `--tw-translate-x: 100%;` | 1+ | NON-CRITICAL |
| `-translate-y-1` | `--tw-translate-y: -0.25rem;` | 3+ | NON-CRITICAL |
| `-translate-y-2` | `--tw-translate-y: -0.5rem;` | 5+ | NON-CRITICAL |
| `-translate-y-4` | `--tw-translate-y: -1rem;` | 2+ | NON-CRITICAL |
| `hover:-translate-y-0.5` | `:hover { --tw-translate-y: -0.125rem; }` | 3+ | NON-CRITICAL |
| `hover:-translate-y-1` | `:hover { --tw-translate-y: -0.25rem; }` | 5+ | NON-CRITICAL |
| `hover:-translate-y-2` | `:hover { --tw-translate-y: -0.5rem; }` | 3+ | NON-CRITICAL |
| `hover:-translate-y-4` | `:hover { --tw-translate-y: -1rem; }` | 2+ | NON-CRITICAL |
| `scale-[1.02]` | `--tw-scale-x: 1.02; --tw-scale-y: 1.02;` | 2+ | NON-CRITICAL |
| `scale-[1.03]` | `--tw-scale-x: 1.03; --tw-scale-y: 1.03;` | 1+ | NON-CRITICAL |
| `hover:scale-105` | `:hover { --tw-scale-x: 1.05; --tw-scale-y: 1.05; }` | 8+ | NON-CRITICAL |
| `hover:scale-[1.02]` | `:hover { --tw-scale-x: 1.02; --tw-scale-y: 1.02; }` | 3+ | NON-CRITICAL |
| `hover:scale-[1.03]` | `:hover { --tw-scale-x: 1.03; --tw-scale-y: 1.03; }` | 2+ | NON-CRITICAL |
| `lg:transform` | `@media (min-width: 1024px) { transform: ...; }` | 2+ | NON-CRITICAL |
| `lg:hover:scale-105` | `@media (min-width: 1024px) { :hover { scale: 1.05; } }` | 3+ | NON-CRITICAL |

---

## 12. HOVER & FOCUS STATES

### Hover States (Already covered in sections above, summarized here)

| Pattern | Example | Count | Critical? |
|---------|---------|-------|-----------|
| `hover:bg-*` | `hover:bg-secondary-teal` | 25+ | NON-CRITICAL |
| `hover:text-*` | `hover:text-primary-navy` | 30+ | **CRITICAL** |
| `hover:border-*` | `hover:border-secondary-teal` | 10+ | NON-CRITICAL |
| `hover:shadow-*` | `hover:shadow-xl` | 15+ | NON-CRITICAL |
| `hover:scale-*` | `hover:scale-105` | 10+ | NON-CRITICAL |
| `hover:-translate-y-*` | `hover:-translate-y-1` | 10+ | NON-CRITICAL |
| `group-hover:*` | `group-hover:opacity-100` | 15+ | NON-CRITICAL |

### Focus States

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `focus:outline-none` | `:focus { outline: none; }` | 20+ | NON-CRITICAL |
| `focus:ring-1` | `:focus { box-shadow: 0 0 0 1px ...; }` | 5+ | NON-CRITICAL |
| `focus:ring-2` | `:focus { box-shadow: 0 0 0 2px ...; }` | 15+ | NON-CRITICAL |
| `focus:ring-3` | `:focus { box-shadow: 0 0 0 3px ...; }` | 3+ | NON-CRITICAL |
| `focus:ring-4` | `:focus { box-shadow: 0 0 0 4px ...; }` | 2+ | NON-CRITICAL |
| `focus:ring-secondary-teal` | `:focus { --tw-ring-color: #3FBB94; }` | 10+ | NON-CRITICAL |
| `focus:ring-navy-medium` | `:focus { --tw-ring-color: #1E40AF; }` | 3+ | NON-CRITICAL |
| `focus:border-primary-navy` | `:focus { border-color: #012169; }` | 8+ | NON-CRITICAL |
| `focus:border-secondary-teal` | `:focus { border-color: #3FBB94; }` | 5+ | NON-CRITICAL |
| `focus:outline` | `:focus { outline-style: solid; }` | 5+ | NON-CRITICAL |
| `focus:outline-3` | `:focus { outline-width: 3px; }` | 3+ | NON-CRITICAL |
| `focus:outline-navy-medium` | `:focus { outline-color: #1E40AF; }` | 2+ | NON-CRITICAL |
| `focus:outline-offset-4` | `:focus { outline-offset: 4px; }` | 2+ | NON-CRITICAL |
| `focus-visible:*` | `:focus-visible { ... }` | 1+ | **CRITICAL** |

---

## 13. RESPONSIVE CLASSES

### Breakpoint Prefixes

| Prefix | Media Query | Usage |
|--------|-------------|-------|
| `sm:` | `@media (min-width: 640px)` | 30+ classes |
| `md:` | `@media (min-width: 768px)` | 100+ classes |
| `lg:` | `@media (min-width: 1024px)` | 80+ classes |
| `xl:` | `@media (min-width: 1280px)` | 5+ classes |

### Common Responsive Patterns

| Pattern | Example | Count |
|---------|---------|-------|
| Grid columns | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | 20+ |
| Text size | `text-4xl lg:text-6xl` | 15+ |
| Padding | `py-12 md:py-20` | 25+ |
| Flex direction | `flex-col md:flex-row` | 15+ |
| Display | `hidden lg:block` | 10+ |
| Width | `w-full lg:w-48` | 8+ |
| Height | `h-4 lg:h-[98px]` | 3+ |

---

## 14. OVERFLOW & VISIBILITY

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `overflow-hidden` | `overflow: hidden;` | 30+ | **CRITICAL** |
| `overflow-x-hidden` | `overflow-x: hidden;` | 5+ | NON-CRITICAL |
| `overflow-x-auto` | `overflow-x: auto;` | 3+ | NON-CRITICAL |
| `overflow-y-auto` | `overflow-y: auto;` | 2+ | NON-CRITICAL |
| `visible` | `visibility: visible;` | 1+ | NON-CRITICAL |

---

## 15. MISCELLANEOUS UTILITY CLASSES

| Tailwind Class | CSS Equivalent | Usage Count | Critical? |
|----------------|----------------|-------------|-----------|
| `appearance-none` | `appearance: none;` | 3+ | NON-CRITICAL |
| `pointer-events-none` | `pointer-events: none;` | 8+ | NON-CRITICAL |
| `pointer-events-auto` | `pointer-events: auto;` | 5+ | NON-CRITICAL |
| `cursor-pointer` | `cursor: pointer;` | 15+ | NON-CRITICAL |
| `cursor-not-allowed` | `cursor: not-allowed;` | 2+ | NON-CRITICAL |
| `list-none` | `list-style-type: none;` | 8+ | NON-CRITICAL |
| `list-disc` | `list-style-type: disc;` | 5+ | NON-CRITICAL |
| `list-inside` | `list-style-position: inside;` | 3+ | NON-CRITICAL |
| `whitespace-nowrap` | `white-space: nowrap;` | 5+ | NON-CRITICAL |
| `backdrop-blur-sm` | `backdrop-filter: blur(4px);` | 2+ | NON-CRITICAL |
| `backdrop-filter` | `backdrop-filter: ...;` | 1+ | NON-CRITICAL |
| `will-change-transform` | `will-change: transform;` | 3+ | NON-CRITICAL |
| `clip-path-*` | Custom clip-path values | 4+ | NON-CRITICAL |
| `mix-blend-multiply` | `mix-blend-mode: multiply;` | 1+ | NON-CRITICAL |
| `aspect-[4/3]` | `aspect-ratio: 4/3;` | 2+ | NON-CRITICAL |

---

## 16. CRITICAL CSS BREAKDOWN (≤10KB Target)

### Priority 1: Above-the-Fold (Must Include)

**Header Section (Fixed, Always Visible):**
- `.header-wrapper` styles
- `.container` (max-width: 1376px)
- `.header-content` (flex layout)
- `.logo`, `.logo-title`, `.logo-subtitle`
- `.desktop-nav`, `.mobile-menu-btn`
- `.nav-link` with hover states
- `position: fixed`, `top: 0`, `z-index: 50`
- Background colors: `bg-primary-navy`, `bg-white`
- Text colors: `text-primary-navy`, `text-neutral-darkGray`
- Hover: `hover:text-primary-navy`

**Hero Section (LCP Element - Text-Based):**
- `.hero` container
- `h1` styling (text-4xl lg:text-6xl, font-bold, font-garamond, text-primary-navy)
- `.hero-subtitle` (text-lg lg:text-xl, text-primary-navy)
- `.hero-cta` button (bg-secondary-teal, text-white, hover states)
- Background gradient
- Responsive padding
- **THIS IS THE LCP ELEMENT** - must be styled completely

**Essential Typography:**
- Base font family (system fonts)
- `font-garamond` definition
- Text sizes: base, lg, xl, 4xl, 6xl
- Font weights: normal, bold
- Line heights: tight, relaxed
- Colors: text-primary-navy, text-white, text-neutral-darkGray

**Essential Layout:**
- `container` class
- Basic flex utilities: `flex`, `items-center`, `justify-center`
- Display: `block`, `inline-block`, `hidden`
- Position: `relative`, `absolute`, `fixed`
- Inset: `inset-0`, `top-0`, `left-0`, `right-0`

**Essential Interactions:**
- `hover:text-primary-navy` (navigation)
- `transition-colors duration-300`
- Focus states: `focus-visible:outline`

### Priority 2: Initial Viewport (Services Preview)

If space allows (<10KB total):
- `.services`, `.services-grid`
- `.service-card` basic styling
- Grid layout: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Basic spacing utilities

### CSS Variables (Already Inline)
```css
:root {
  --navy-primary: #012169;
  --navy-dark: #103483;
  --teal-primary: #3FBB94;
  --teal-forest: #2D8469;
  --gray-dark: #333333;
  --gray-medium: #CBCBCB;
  --gray-light: #F2F2F2;
  --gray-lighter: #F8FAFC;
  --gold-primary: #FBBF24;
  --white: #FFFFFF;
}
```

### Estimated Critical CSS Size
- Variables: ~0.3KB
- Reset & Base: ~1KB
- Header: ~2KB
- Hero (LCP): ~1.5KB
- Typography: ~1.5KB
- Layout utilities: ~2KB
- Interactions: ~1KB
- **Total: ~9.3KB** (within 10KB limit)

---

## 17. NON-CRITICAL CSS (Deferred, styles.css)

Everything not in Critical CSS above:
- All component-specific styles (Footer, Forms, Cards, Stats, etc.)
- Complex animations (`@keyframes fadeIn`, `animate-pulse-glow`, etc.)
- Hover effects on cards
- Shadows and advanced effects
- Responsive utilities beyond md: breakpoint
- Form styling
- Complex grid layouts
- Carousel/HeroCarousel styles
- All page-specific styles (About, Contact, Practice Areas, etc.)
- Modal and overlay styles

**Estimated Size:** ~45KB (uncompressed)

---

## 18. IMPLEMENTATION STRATEGY

### Step 1: Extract Critical CSS
1. Copy Critical CSS from Priority 1 & 2 above
2. Inline into `<style>` tag in `index.html` (already present)
3. Ensure total size ≤10KB compressed

### Step 2: Create styles.css
1. Generate complete Tailwind output
2. Remove all Critical CSS classes
3. Add custom animations
4. Minify and compress

### Step 3: Load Strategy
```html
<!-- index.html -->
<head>
  <!-- Critical CSS (inline) -->
  <style>/* Critical CSS here */</style>

  <!-- Preload non-critical CSS -->
  <link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/styles.css"></noscript>
</head>
```

### Step 4: Verification
- Check LCP < 2.5s
- Verify CLS < 0.1
- Confirm FID < 100ms
- Test on slow 3G

---

## 19. FREQUENTLY USED CLASSES (Top 50)

### Most Common Classes by Usage

| Rank | Class | Usage | Category | Critical? |
|------|-------|-------|----------|-----------|
| 1 | `text-primary-navy` | 100+ | Color | **CRITICAL** |
| 2 | `font-bold` | 100+ | Typography | **CRITICAL** |
| 3 | `flex` | 100+ | Layout | **CRITICAL** |
| 4 | `w-full` | 80+ | Sizing | **CRITICAL** |
| 5 | `relative` | 80+ | Position | **CRITICAL** |
| 6 | `items-center` | 80+ | Layout | **CRITICAL** |
| 7 | `absolute` | 60+ | Position | **CRITICAL** |
| 8 | `mx-auto` | 60+ | Spacing | **CRITICAL** |
| 9 | `flex-col` | 60+ | Layout | **CRITICAL** |
| 10 | `bg-primary-navy` | 50+ | Color | **CRITICAL** |
| 11 | `justify-center` | 50+ | Layout | **CRITICAL** |
| 12 | `mb-4` | 50+ | Spacing | **CRITICAL** |
| 13 | `font-garamond` | 50+ | Typography | **CRITICAL** |
| 14 | `h-full` | 40+ | Sizing | **CRITICAL** |
| 15 | `grid` | 40+ | Layout | NON-CRITICAL |
| 16 | `mb-6` | 40+ | Spacing | NON-CRITICAL |
| 17 | `font-semibold` | 40+ | Typography | NON-CRITICAL |
| 18 | `p-3` | 40+ | Spacing | NON-CRITICAL |
| 19 | `border` | 40+ | Border | NON-CRITICAL |
| 20 | `text-base` | 35+ | Typography | **CRITICAL** |
| 21 | `p-8` | 35+ | Spacing | NON-CRITICAL |
| 22 | `transition-all` | 30+ | Animation | NON-CRITICAL |
| 23 | `text-lg` | 30+ | Typography | **CRITICAL** |
| 24 | `hover:text-primary-navy` | 30+ | Interaction | **CRITICAL** |
| 25 | `text-xl` | 25+ | Typography | **CRITICAL** |

**Recommendation:** Classes ranked 1-15 should be in critical CSS.

---

## 20. CUSTOM TAILWIND EXTENSIONS NEEDED

These custom classes need to be added to `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-navy': '#012169',
        'primary-darkBlue': '#103483',
        'secondary-teal': '#3FBB94',
        'secondary-forestGreen': '#2D8469',
        'secondary-gold': '#FBBF24',
        'neutral-darkGray': '#333333',
        'neutral-gray': '#CBCBCB',
        'neutral-lightGray': '#F2F2F2',
        'gray-light': '#F2F2F2',
        'soft-teal': '#E5F7F2',
        'text-primary': '#012169',
        'text-secondary': '#5A5A5A',
        'navy-primary': '#012169',
        'navy-medium': '#1E40AF',
        'navy-dark': '#103483',
        'teal-primary': '#3FBB94',
        'gold-primary': '#FBBF24',
        'gold-bright': '#FCD34D',
        'border-subtle': '#E5E7EB',
      },
      fontFamily: {
        'garamond': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'roboto': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'montserrat': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['Georgia', 'serif'],
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(63, 187, 148, 0.6)' },
          '50%': { boxShadow: '0 0 30px rgba(63, 187, 148, 0.9)' },
        },
        'progress-bar': {
          'from': { width: '0%' },
          'to': { width: '100%' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'progress-bar': 'progress-bar 5s linear',
      },
      maxWidth: {
        '[1376px]': '1376px',
        '[800px]': '800px',
        '[720px]': '720px',
        '[1200px]': '1200px',
      },
    },
  },
}
```

---

## 21. SUMMARY & RECOMMENDATIONS

### Total Class Count
- **Unique Tailwind Classes:** 300+
- **Custom Color Classes:** 25
- **Critical Classes:** ~80
- **Non-Critical Classes:** ~220+

### File Size Estimates
- **Critical CSS (inline):** ~9.3KB (within 10KB limit)
- **Non-Critical CSS (deferred):** ~45KB uncompressed, ~8KB compressed
- **Total CSS:** ~17KB (compressed, split delivery)

### Performance Impact
- **Current:** All Tailwind classes loaded upfront (~150KB+)
- **Optimized:** Critical CSS inline (9KB) + deferred (8KB) = **17KB total**
- **Savings:** ~133KB (89% reduction)
- **LCP Improvement:** Estimated 40-60% faster

### Next Steps
1. ✅ Document all Tailwind classes (COMPLETED)
2. Create `tailwind.config.js` with custom colors
3. Generate full Tailwind CSS build
4. Split into critical.css (<10KB) and styles.css
5. Implement preload strategy
6. Test and measure performance
7. Adjust critical CSS based on real LCP data

### Critical Path Optimization
**Priority Order:**
1. Header (fixed, always visible)
2. Hero H1 (LCP element)
3. Hero subtitle and CTA
4. Initial services preview (if space allows)
5. Mobile menu button styles

---

**Document Version:** 1.0
**Last Updated:** 2025-11-21
**Maintainer:** Development Team
