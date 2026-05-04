# 🌬️ مكيفات الدمام — AC Service Website: Full Build Specification
> **Primary Language:** Arabic (RTL) | **Secondary:** English  
> **Target Market:** Dammam, Al Khobar, Al Ahsa — Eastern Province, Saudi Arabia  
> **Goal:** Rank #1 on Google.sa for AC repair/service terms in Arabic + drive WhatsApp/phone leads

---

## 1. RECOMMENDED TECH STACK

### ✅ Recommended: Next.js (App Router) — **Best for SEO + Arabic**

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG = best Google indexing; fast |
| Styling | **Tailwind CSS** | RTL utility support, rapid UI |
| Components | **shadcn/ui** | Clean, accessible, customizable |
| Animation | **Framer Motion** | Smooth Arabic-friendly scroll reveals |
| i18n | **next-intl** | Best Arabic/English switching, RTL auto |
| Forms | **React Hook Form + Zod** | WhatsApp/booking form validation |
| Icons | **Lucide React** | Lightweight, professional |
| Fonts | **Google Fonts: Noto Kufi Arabic** (AR) + **DM Sans** (EN) | Beautiful Arabic display font |
| Hosting | **Vercel** | Free SSL, global CDN, edge functions |
| CMS (optional) | **Sanity.io** or **Contentlayer** | For client to edit content without code |
| Analytics | **Google Search Console + GA4** | Track Arabic keyword rankings |
| Maps | **Google Maps Embed API** | Local SEO signal |
| Schema | **JSON-LD structured data** | Rich results on Google |

### ⚠️ Alternative: WordPress + Astra/Elementor
Use ONLY if client needs to self-manage content without a developer. SEO and performance will be harder to optimize. If choosing WordPress, use:
- **WP Rocket** (caching), **Rank Math** (Arabic SEO), **Polylang** (AR/EN), **Astra Pro** theme

---

## 2. DOMAIN & HOSTING STRATEGY

```
Recommended domain: مكيفات-الدمام.com  OR  ac-dammam.com  OR  saudicool.sa
```

- Use `.sa` TLD if possible — strong local SEO signal for Saudi Arabia
- Enable **HTTPS** (SSL) — required for Google trust
- Host on **Vercel** (fastest) or **SiteGround** (if WordPress)
- Set `hreflang` tags: `ar-SA` (primary) and `en-SA` (secondary)
- Set `<html dir="rtl" lang="ar">` on all Arabic pages

---

## 3. SITE ARCHITECTURE (Pages & URLs)

### Arabic (Primary — RTL)
```
/                          → الصفحة الرئيسية (Homepage)
/خدماتنا                   → خدمات المكيفات (Services)
/صيانة-مكيفات-الدمام       → صيانة مكيفات الدمام (SEO Landing Page)
/تركيب-مكيفات              → تركيب مكيفات (Installation)
/تنظيف-مكيفات              → تنظيف وغسيل مكيفات (Cleaning)
/اسعار-صيانة-مكيفات        → الأسعار (Pricing Page — huge SEO value)
/من-نحن                    → من نحن (About)
/تواصل-معنا                → تواصل معنا (Contact)
/المدونة                   → المدونة (Blog — for SEO content)
/blog/ar/[slug]            → Individual Arabic blog posts
```

### English (Secondary)
```
/en                        → Homepage (EN)
/en/ac-repair-dammam       → AC Repair Service Page
/en/contact                → Contact
```

---

## 4. HOMEPAGE STRUCTURE & SECTIONS

### Section 1: HERO (الصفحة الرئيسية)

**Content:**
```
الشعار (Headline — H1):
"صيانة وتركيب مكيفات في الدمام"
أو: "خبراء المكيفات في المنطقة الشرقية"

Sub-headline:
"نصل إليك خلال ساعتين · خدمة 24 ساعة · ضمان على جميع الأعمال"

CTAs (2 buttons):
[📞 اتصل الآن]   [💬 واتساب]

Trust bar below CTAs:
⭐ 4.9/5 تقييم على جوجل  |  +500 عميل راضٍ  |  خبرة +10 سنوات
```

**Design Notes:**
- Full-screen hero with dramatic gradient: deep navy blue `#0A1628` → cool teal `#0EA5E9`
- Background: subtle animated cold air/frost particle effect (CSS canvas or Framer)
- Technician photo (real photo preferred) with glassmorphism card overlay showing "متاح الآن ✅"
- Emergency badge pulsing: "خدمة طارئة 24/7" with red pulse dot
- Arabic typography large and bold — Noto Kufi Arabic, 900 weight

---

### Section 2: TRUST BADGES (لماذا نحن؟)

Horizontal scrolling badge strip:
```
✅ فني معتمد        | 🕐 استجابة خلال ساعتين  | 🛡️ ضمان 90 يوم
🔧 جميع الماركات   | 💰 أسعار شفافة بدون مفاجآت | ⭐ +500 تقييم إيجابي
```

---

### Section 3: SERVICES (خدماتنا)

6-card grid (2x3 on mobile, 3x2 on desktop):

| Service | Arabic Name | Icon |
|---------|-------------|------|
| AC Repair | إصلاح وصيانة المكيفات | 🔧 |
| AC Installation | تركيب مكيفات جديدة | ⚙️ |
| AC Cleaning | تنظيف وغسيل المكيفات | 🧹 |
| Gas Recharge | شحن فريون | ❄️ |
| Emergency Service | خدمة طارئة 24/7 | 🚨 |
| Preventive Maintenance | صيانة دورية | 📋 |

**Design:** Glassmorphism cards with hover lift + blue glow effect. Each card links to its dedicated service page.

---

### Section 4: HOW IT WORKS (كيف نعمل؟)

3-step horizontal timeline:
```
1️⃣ تواصل معنا عبر واتساب أو الهاتف
2️⃣ يصل الفني إلى موقعك خلال ساعتين
3️⃣ إصلاح فوري مع ضمان 90 يوماً
```

---

### Section 5: STATS COUNTER (أرقامنا)

Animated count-up on scroll:
```
+500     عميل راضٍ
+1200    مكيف تم إصلاحه
10+      سنوات خبرة
24/7     خدمة متواصلة
```

---

### Section 6: WHY US (مزايانا)

Split section — left text, right image:
```
✅ فنيون معتمدون ومرخصون
✅ أسعار واضحة قبل بدء العمل
✅ ضمان 90 يوم على جميع الإصلاحات
✅ نعمل مع جميع ماركات المكيفات (سامسونج، LG، كاريير، ميديا...)
✅ متاحون 24 ساعة في حالات الطوارئ
✅ خدمة الدمام والخبر والأحساء
```

---

### Section 7: BRANDS WE SERVICE (الماركات التي نخدمها)

Logo strip (grayscale, hover to color):
Samsung · LG · Carrier · Midea · Daikin · Gree · Trane · Hitachi · York · Panasonic

---

### Section 8: TESTIMONIALS (آراء عملائنا)

Auto-scrolling carousel — 5 Arabic reviews:
```
⭐⭐⭐⭐⭐ — "وصلوا خلال ساعة وأصلحوا المكيف بسرعة رائعة"
         — أحمد الغامدي، الدمام

⭐⭐⭐⭐⭐ — "أسعار معقولة وفنيون محترمون. سأتعامل معهم دائماً"
         — فاطمة العتيبي، الخبر
```

Add Google Reviews badge with direct link to Google Business Profile.

---

### Section 9: SERVICE AREAS (مناطق الخدمة)

Interactive Google Map embed + list:
```
📍 الدمام (Dammam)       📍 الخبر (Al Khobar)
📍 الأحساء (Al Ahsa)     📍 القطيف (Qatif)
📍 ظهران (Dhahran)       📍 جدة (upon request)
```

---

### Section 10: PRICING TEASER (الأسعار)

Transparent pricing cards (3 tiers):
```
🔹 فحص وتشخيص:   49 ريال
🔸 صيانة أساسية:   149 ريال (يشمل الفحص)
🔶 صيانة شاملة:   299 ريال (يشمل الغاز والتنظيف)
```
CTA: "اطلب عرض سعر مجاني"

---

### Section 11: BLOG PREVIEW (المدونة — SEO)

3 latest Arabic blog posts:
- "كيف تعرف أن مكيفك يحتاج صيانة؟"
- "أسباب تسرب الماء من المكيف وكيف تحلها"
- "أفضل ماركات مكيفات للمنازل في السعودية 2025"

---

### Section 12: CTA SECTION (احجز الآن)

Full-width dark section with WhatsApp-green button:
```
"هل مكيفك يواجه مشكلة؟"
"تواصل معنا الآن ونصل إليك خلال ساعتين"

[💬 تواصل عبر واتساب]   [📞 اتصل الآن: 05XXXXXXXX]
```

---

### Section 13: FOOTER

```
الشعار + شعار الشركة
روابط سريعة | الخدمات | المناطق | المدونة
رقم الهاتف + واتساب + البريد
عنوان: الدمام، المنطقة الشرقية، المملكة العربية السعودية
حسابات التواصل الاجتماعي: Instagram, Snapchat, X (Twitter)
حقوق النشر © 2025
```

---

## 5. DEDICATED SERVICE PAGES (Landing Pages for SEO)

Each page follows this template:

### `/صيانة-مكيفات-الدمام` — KEY SEO PAGE

```
H1: صيانة مكيفات الدمام
H2: لماذا تحتاج إلى صيانة دورية لمكيفك؟
H2: خدمات الصيانة التي نقدمها
H2: أسعار صيانة المكيفات في الدمام
H2: مناطق خدمتنا في الدمام
H2: آراء عملاء الدمام
H2: أسئلة شائعة (FAQ — rich results)
CTA: احجز موعد صيانة الآن
```

### `/تركيب-مكيفات`
```
H1: تركيب مكيفات في الدمام والخبر
Content: Split, cassette, window, inverter types
Price table for installation
FAQ + CTA
```

### `/تنظيف-مكيفات`
```
H1: تنظيف وغسيل مكيفات بالبخار في الدمام
Content: Importance, process, frequency guide
Before/after photo gallery (HUGE conversion element)
```

### `/اسعار-صيانة-مكيفات`
```
H1: أسعار صيانة المكيفات في الدمام 2025
Full transparent pricing table
FAQ about pricing
Note: This page alone can rank for high-intent queries
```

---

## 6. SEO STRATEGY (المحتوى والتحسين)

### 6.1 Target Keywords — Arabic (Primary)

| Keyword (Arabic) | Transliteration | Monthly Intent |
|-----------------|-----------------|----------------|
| صيانة مكيفات الدمام | syanat mukayfat ad-dammam | HIGH 🔥 |
| تصليح مكيف الدمام | taslih mukayyif | HIGH 🔥 |
| فني مكيفات الدمام | fani mukayfat | HIGH |
| تركيب مكيفات الدمام | tarkib mukayfat | HIGH |
| تنظيف مكيفات الدمام | tanzif mukayfat | MEDIUM |
| شحن فريون الدمام | shahn fryon | MEDIUM |
| مكيف لا يبرد الدمام | mukayyif la yabrad | HIGH 🔥 |
| صيانة مكيفات سبليت الدمام | syanat split | MEDIUM |
| اسعار صيانة مكيفات | asaar syanat | HIGH 🔥 |
| تصليح مكيف الخبر | taslih al-khobar | MEDIUM |

### 6.2 Technical SEO Checklist

```
☐ HTML lang="ar" dir="rtl" on all Arabic pages
☐ hreflang: ar-SA (primary), en-SA (secondary)
☐ Canonical URLs configured
☐ Sitemap.xml with Arabic URLs (percent-encoded)
☐ robots.txt allowing all service pages
☐ Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
☐ Mobile-first responsive (Saudi users are 90%+ mobile)
☐ Image alt text in Arabic
☐ Meta title & description in Arabic (155 chars max)
☐ Open Graph tags (Arabic) for WhatsApp sharing
☐ Google Search Console — add property for both AR and EN
☐ Google Analytics 4 — track WhatsApp click events
```

### 6.3 Structured Data / JSON-LD Schema

Add to every page:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "صيانة مكيفات الدمام",
  "image": "https://yoursite.sa/logo.png",
  "telephone": "+966-5XXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "الدمام",
    "addressLocality": "الدمام",
    "addressRegion": "المنطقة الشرقية",
    "addressCountry": "SA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.3927,
    "longitude": 49.9777
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "areaServed": ["الدمام", "الخبر", "الأحساء", "القطيف", "ظهران"],
  "serviceType": "AC Repair and Maintenance"
}
```

Also add `FAQPage` schema on FAQ sections and `Service` schema on each service page.

### 6.4 Google Business Profile (CRITICAL for Local SEO)

```
☐ Create/claim Google Business Profile
☐ Business name in Arabic: "صيانة مكيفات الدمام"  
☐ Add all services with Arabic descriptions
☐ Upload real photos of: team, work, before/after
☐ Get reviews from existing customers (ask via WhatsApp)
☐ Post weekly updates (صور الأعمال، عروض)
☐ Add WhatsApp number and link to website
```

### 6.5 Arabic Blog Content Calendar (SEO Content)

Publish 2 posts/month:
```
Week 1: "أسباب عدم تبريد المكيف وكيف تحلها"
Week 2: "متى يجب تغيير فريون المكيف؟"
Week 3: "أفضل مكيفات للمنازل الكبيرة في السعودية 2025"
Week 4: "الفرق بين المكيف السبليت والكاسيت — أيهما أفضل؟"
```

---

## 7. UI/UX DESIGN SYSTEM

### 7.1 Color Palette

```css
:root {
  /* Primary */
  --color-primary: #0EA5E9;       /* Sky Blue — ice/cool feeling */
  --color-primary-dark: #0369A1;  /* Deep Blue */
  --color-accent: #06B6D4;        /* Cyan — energy */
  
  /* Background */
  --color-bg-dark: #0A1628;       /* Deep Navy */
  --color-bg-card: #0F2040;       /* Card background */
  --color-bg-light: #F0F9FF;      /* Light sections */
  
  /* Text */
  --color-text-ar: #1E293B;       /* Arabic body text */
  --color-text-light: #F8FAFC;    /* Light text on dark */
  --color-muted: #64748B;         /* Secondary text */
  
  /* Semantic */
  --color-success: #22C55E;       /* WhatsApp green / available */
  --color-warning: #F59E0B;       /* Emergency/urgent */
  --color-error: #EF4444;         /* Errors */
}
```

### 7.2 Typography

```css
/* Arabic — Primary */
font-family: 'Noto Kufi Arabic', 'Cairo', sans-serif;
/* Weights: 400 (body), 700 (subheads), 900 (hero) */

/* English — Secondary */
font-family: 'DM Sans', sans-serif;
/* Weights: 400, 500, 700 */

/* Arabic Font Sizes */
--text-hero: clamp(2rem, 5vw, 4rem);      /* Hero H1 */
--text-section: clamp(1.5rem, 3vw, 2.5rem); /* Section titles */
--text-body: 1.125rem;                     /* 18px body */
--text-small: 0.875rem;                    /* 14px */
```

### 7.3 Component Library

#### WhatsApp Float Button (CRITICAL — primary CTA)
```jsx
// Always visible, bottom-right (bottom-left in RTL)
// Green (#25D366), pulsing animation
// Opens: https://wa.me/966XXXXXXXXX?text=مرحباً، أحتاج صيانة مكيف
<WhatsAppFloat 
  phone="966XXXXXXXXX"
  message="مرحباً، أحتاج صيانة مكيف"
  position="bottom-right" // adjust per RTL
/>
```

#### Sticky Header
```
Logo | Nav Links | [📞 اتصل الآن] [💬 واتساب] | EN/AR Toggle
Background: glassmorphism blur on scroll
```

#### Service Card
```
Icon (animated on hover)
Title (Arabic, bold)
Short description (2 lines)
"اعرف المزيد ←" link
Hover: lift shadow + blue glow border
```

#### Emergency Banner
```
⚡ خدمة طارئة متاحة الآن — اتصل: 05XXXXXXXX
Scrolling ticker at very top of page
Background: --color-warning amber
```

---

## 8. PAGES & COMPONENTS CHECKLIST

### Global Components
```
☐ <Header /> — sticky, glassmorphism, AR/EN switcher
☐ <Footer /> — links, contact, social
☐ <WhatsAppFAB /> — floating WhatsApp button (always visible)
☐ <PhoneButton /> — click-to-call on mobile
☐ <EmergencyBanner /> — top ticker strip
☐ <SEOHead /> — title, description, schema per page
☐ <LanguageSwitcher /> — AR ↔ EN
```

### Homepage Components
```
☐ <Hero /> — fullscreen, particle bg, dual CTA
☐ <TrustBadges /> — horizontal scroll strip
☐ <Services /> — 6-card grid with hover effects
☐ <HowItWorks /> — 3-step timeline
☐ <StatsCounter /> — animated count-up on scroll
☐ <WhyUs /> — split layout with checklist
☐ <BrandLogos /> — logo strip grayscale→color
☐ <Testimonials /> — auto-scroll carousel
☐ <ServiceAreas /> — map + city list
☐ <PricingTeaser /> — 3-tier cards
☐ <BlogPreview /> — 3 latest posts
☐ <CTASection /> — fullwidth dark CTA
```

### Service Pages
```
☐ <ServiceHero /> — H1, description, CTA
☐ <ServiceDetails /> — what's included
☐ <PricingTable /> — transparent pricing
☐ <BeforeAfterGallery /> — slider comparison
☐ <FAQ /> — accordion with schema markup
☐ <LocalTestimonials /> — area-specific reviews
☐ <BookingForm /> → WhatsApp redirect or form submit
```

---

## 9. MOBILE-FIRST REQUIREMENTS

Saudi Arabia has **~95% mobile usage**. Design mobile-first:

```
☐ Touch-friendly: all buttons min 44×44px
☐ Phone number as <a href="tel:+966XXXXXXXXX"> — tap to call
☐ WhatsApp link opens native app
☐ No horizontal scroll on any screen
☐ Bottom navigation bar on mobile:
     [🏠 رئيسي] [🔧 خدمات] [📞 اتصل] [💬 واتساب]
☐ Hero CTA buttons: full-width on mobile
☐ Font minimum: 16px on mobile (no squinting)
☐ Image lazy loading for performance
☐ Compressed WebP images (< 200KB each hero)
```

---

## 10. PERFORMANCE TARGETS

```
Google PageSpeed Insights:
  Mobile: 90+
  Desktop: 95+

Core Web Vitals:
  LCP: < 2.5s
  CLS: < 0.1
  INP: < 200ms

Lighthouse:
  Performance: 90+
  Accessibility: 95+ (Arabic screen reader support)
  Best Practices: 100
  SEO: 100
```

**Performance tips:**
- Use `next/image` with WebP conversion
- Preload hero font (Noto Kufi Arabic subset — Arabic chars only)
- Inline critical CSS for above-fold
- Use `loading="lazy"` for below-fold images
- Enable Vercel Edge Caching

---

## 11. FORMS & LEAD CAPTURE

### WhatsApp Booking Form
```
Fields:
  - الاسم (Name) — required
  - رقم الجوال (Phone) — required, Saudi format validation
  - نوع الخدمة (Service Type) — dropdown
  - المدينة (City) — dropdown: الدمام / الخبر / الأحساء / أخرى
  - وصف المشكلة (Problem description) — textarea
  - الوقت المفضل (Preferred time) — optional

On Submit:
  → Format message → Open WhatsApp with pre-filled text
  → OR send to backend email/CRM
```

### Click-to-WhatsApp Pre-filled Messages (by Service)
```javascript
const messages = {
  repair:      "مرحباً، أحتاج إصلاح مكيف في الدمام",
  installation:"مرحباً، أحتاج تركيب مكيف جديد",
  cleaning:    "مرحباً، أحتاج تنظيف مكيف",
  emergency:   "🚨 طارئ — مكيفي تعطل والجو حار جداً، أحتاج فني الآن",
  quote:       "مرحباً، أريد معرفة سعر صيانة المكيف"
}
```

---

## 12. ARABIC RTL IMPLEMENTATION NOTES

```
☐ Set <html dir="rtl" lang="ar"> on all Arabic pages
☐ Tailwind: enable RTL with `rtl:` variant OR use dir="rtl" CSS
☐ Icons: flip directional icons (arrows) for RTL using CSS transform
☐ Text alignment: text-right by default in Arabic
☐ Margins/padding: swap start/end (not left/right) using logical properties
☐ Number formatting: Arabic-Indic numerals optional (٠١٢٣٤٥٦٧٨٩)
    → Prefer Western numerals (0-9) for phone numbers and prices
☐ Dates: هجري calendar optional, Gregorian is fine
☐ Test in: Chrome (Android Saudi locale), Safari (iPhone)
```

---

## 13. CONTENT TO PREPARE (Client Must Provide)

```
Photos needed:
  ☐ Company logo (SVG preferred)
  ☐ Team photo (professional, uniforms if possible)
  ☐ Technician at work photos (5-10 real photos)
  ☐ Before/after repair photos (5+ pairs)
  ☐ Certifications/licenses scan

Text needed:
  ☐ Company name in Arabic
  ☐ WhatsApp number
  ☐ Phone number  
  ☐ Address in Dammam
  ☐ Years of experience
  ☐ Number of customers served
  ☐ Service areas (which cities/neighborhoods)
  ☐ List of AC brands serviced
  ☐ Pricing (even ranges are fine)
  ☐ 5 real customer reviews in Arabic
```

---

## 14. POST-LAUNCH CHECKLIST

```
Week 1:
  ☐ Submit sitemap to Google Search Console
  ☐ Set up Google Analytics 4 with Arabic goal tracking
  ☐ Create/verify Google Business Profile
  ☐ Submit to Bing Webmaster Tools (some Saudis use Edge)
  ☐ Add website to Instagram & Snapchat bio

Month 1:
  ☐ Publish 4 Arabic blog posts
  ☐ Get 5+ Google reviews from existing customers
  ☐ Set up WhatsApp Business API / catalog
  ☐ Monitor Search Console for Arabic keyword impressions
  ☐ Run Google Ads for "صيانة مكيفات الدمام" (for instant traffic)

Ongoing:
  ☐ 2 blog posts/month
  ☐ Monthly performance report
  ☐ A/B test CTA button text
  ☐ Respond to all Google reviews in Arabic
```

---

## 15. COMPETITIVE ADVANTAGES OVER THE REFERENCE SITE

The sample site (acrepairsa.com) has these weaknesses — beat them:

| Their Weakness | Your Enhancement |
|---------------|-----------------|
| Generic design, cookie-cutter | Distinctive modern dark navy + cyan palette, real animations |
| No transparent pricing | Full pricing page — ranks for "أسعار صيانة مكيفات" |
| No before/after gallery | Before/after slider on each service page |
| No blog/content | Arabic SEO blog targeting long-tail keywords |
| Slow WordPress/Elementor | Next.js = 95+ PageSpeed score |
| WhatsApp button buried | Always-visible floating WhatsApp + pre-filled messages |
| No emergency highlighting | Pulsing "خدمة 24/7" badge on hero + top banner |
| No area-specific pages | Separate pages: الدمام، الخبر، الأحساء (rank in each city) |
| No FAQ schema | FAQ on every page = Google rich results |
| No service area map | Google Maps embed = local SEO signal |
| Poor mobile UX | Bottom nav bar, full-width CTAs, tap-to-call |
| No brand logos | Trust-building brand strip (Samsung, LG, Carrier...) |

---

## 16. AGENT INSTRUCTIONS (For Claude / Gemini Build Agent)

When building this site, follow these priorities:

1. **Arabic-first**: All primary content is in Arabic, RTL layout. English is `/en` route only.
2. **WhatsApp over forms**: The #1 CTA is always WhatsApp. Every section ends with a WhatsApp button.
3. **Mobile-first**: Design and code mobile layout first, then desktop.
4. **Speed over beauty**: If a beautiful animation hurts PageSpeed below 85, remove it.
5. **Semantic HTML**: Use proper H1→H6 hierarchy. ONE H1 per page (the target keyword).
6. **JSON-LD**: Add LocalBusiness schema to every page. Add FAQPage schema to FAQ sections.
7. **Real content placeholders**: Use Arabic placeholder text (Lorem Ipsum in Arabic: "نص عربي تجريبي") — never Latin lorem ipsum.
8. **Dark/light sections**: Alternate between `bg-[#0A1628]` (dark navy) and `bg-[#F0F9FF]` (light) sections for visual rhythm.
9. **Accessibility**: All images must have Arabic alt text. Color contrast ratio ≥ 4.5:1.
10. **Build order**: Homepage → Service pages → Pricing page → Contact → Blog template → SEO config

---

*Document Version: 1.0 | Created for AC Service Website — Dammam, Saudi Arabia*
*Stack: Next.js 14 + Tailwind CSS + next-intl + Framer Motion + Vercel*
