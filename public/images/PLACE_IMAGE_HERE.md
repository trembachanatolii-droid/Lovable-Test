# Hero Image Instructions

## Required Image

Please save your attached harbor/port image to this directory with the following specifications:

**Filename:** `hero-port-harbor.jpg`

**Full Path:** `/home/user/Trade-and-Customs-Law-2/public/images/hero-port-harbor.jpg`

**Recommended Specifications:**
- **Format:** JPEG (optimized for web)
- **Dimensions:** 1920x1080 pixels (16:9 aspect ratio)
- **Quality:** 80-85% (balance between quality and file size)
- **File Size:** < 300 KB (optimized for performance)
- **Color Space:** sRGB

## Optimization Tips

To optimize your image for web performance, you can use tools like:

```bash
# Using ImageMagick (if installed)
convert hero-port-harbor-original.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 82 hero-port-harbor.jpg

# Or using online tools
- https://squoosh.app/ (recommended)
- https://tinyjpg.com/
```

## Image Requirements for Performance

The hero section is optimized to ensure:
- ✅ H1 text is the Largest Contentful Paint (LCP) element
- ✅ Image loads with `fetchPriority="low"` to prioritize text
- ✅ Dark overlay ensures WCAG AA contrast ratio (≥4.5:1)
- ✅ Enhanced text shadows for readability
- ✅ Proper width/height attributes prevent layout shift (CLS)

Once you place the image file, the hero section will display with the port/harbor background!
