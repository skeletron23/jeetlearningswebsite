# Responsive Design Quick Fixes

## 📱 Common Pattern Replacements

### Pattern 1: Responsive Text
Replace hardcoded text sizes with this pattern:

```tsx
// ❌ BEFORE - Jumps from mobile to lg
className="text-4xl lg:text-6xl"

// ✅ AFTER - Smooth progression
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
```

---

### Pattern 2: Container Padding
Replace jumping padding with this scale:

```tsx
// ❌ BEFORE
className="px-6 lg:px-16"

// ✅ AFTER
className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
```

---

### Pattern 3: Grid Layouts
Replace incomplete grids with full breakpoint coverage:

```tsx
// ❌ BEFORE - Missing md and lg
className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"

// ✅ AFTER - Full coverage
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
```

---

### Pattern 4: Section Padding
Replace inconsistent section spacing:

```tsx
// ❌ BEFORE
className="py-12 md:py-16 lg:py-20"

// ✅ AFTER
className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20"
```

---

### Pattern 5: Flex Direction
Replace abrupt direction changes:

```tsx
// ❌ BEFORE - Changes at sm
className="flex flex-col sm:flex-row"

// ✅ AFTER - Changes at md
className="flex flex-col md:flex-row lg:flex-row"
```

---

### Pattern 6: Gap Scaling
Replace inconsistent gaps:

```tsx
// ❌ BEFORE
className="gap-4 lg:gap-6"

// ✅ AFTER
className="gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6"
```

---

### Pattern 7: Width Constraints
Replace limited max-widths:

```tsx
// ❌ BEFORE
className="max-w-[1440px] mx-auto px-6 lg:px-16"

// ✅ AFTER
className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
```

---

## 🎨 Responsive Typography System

### Create standardized text scales:

```tsx
// Hero/H1
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"

// Heading/H2
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"

// Subheading/H3
className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"

// Body Large
className="text-base sm:text-base md:text-lg lg:text-lg"

// Body Normal
className="text-sm sm:text-base md:text-base lg:text-base"

// Body Small
className="text-xs sm:text-sm md:text-sm lg:text-sm"
```

---

## 🏗️ Component Template

Use this template for new components with proper responsive design:

```tsx
export function MyComponent() {
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Heading */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Title
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Description
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {/* Card */}
          <div className="p-4 sm:p-5 md:p-6 rounded-lg border">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3">
              Card Title
            </h3>
            <p className="text-sm sm:text-sm text-slate-600 leading-relaxed">
              Card content
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 🔍 Debugging Responsive Issues

### Check these in browser dev tools:

1. **Device Toolbar** - Test at actual breakpoints
2. **Flex/Grid Inspector** - Verify layout changes
3. **Computed Styles** - Check which classes apply
4. **Console** - Look for Tailwind warnings

### Common Red Flags:

```
❌ Text overflows container
❌ Images stretch beyond container
❌ Buttons extend full width unexpectedly
❌ Padding/margin changes drastically
❌ Grid items stack when they shouldn't
❌ Navigation items disappear on mobile
```

---

## 📐 Spacing Scale (px to rem conversion)

Use this scale consistently:

```
2px = 0.125rem  (xs)
4px = 0.25rem   (sm) - NOT USED
6px = 0.375rem  (base)
8px = 0.5rem    (md)
12px = 0.75rem  (lg)
16px = 1rem     (xl)
24px = 1.5rem   (2xl)
32px = 2rem     (3xl)
48px = 3rem     (4xl)
64px = 4rem     (5xl)
```

---

## 🎯 Before/After Examples

### Example 1: Hero Section

**BEFORE:**
```tsx
<div className="px-6 lg:px-16 flex flex-col lg:flex-row gap-8">
  <div className="w-full lg:w-1/2">
    <h1 className="text-6xl lg:text-8xl font-bold">Title</h1>
    <p className="text-xl lg:text-2xl">Description</p>
  </div>
</div>
```

**AFTER:**
```tsx
<div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
  <div className="w-full md:w-1/2">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">Title</h1>
    <p className="text-base sm:text-lg md:text-lg lg:text-xl">Description</p>
  </div>
</div>
```

### Example 2: Card Grid

**BEFORE:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
  {items.map(item => (
    <div className="p-6 rounded-lg">
      <h3 className="text-xl font-bold">Title</h3>
      <p className="text-sm">Content</p>
    </div>
  ))}
</div>
```

**AFTER:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
  {items.map(item => (
    <div className="p-4 sm:p-5 md:p-6 rounded-lg">
      <h3 className="text-lg sm:text-xl font-bold">Title</h3>
      <p className="text-xs sm:text-sm">Content</p>
    </div>
  ))}
</div>
```

---

## ⚡ Quick Wins

These changes will fix most responsive issues:

1. Add `sm:` breakpoint to ALL components
2. Replace `lg:flex-row` with `md:flex-row`
3. Use `px-4 sm:px-6 md:px-8` for all containers
4. Scale text: `text-lg sm:text-xl md:text-2xl`
5. Scale gaps: `gap-3 sm:gap-4 md:gap-5`

---

## ✅ Testing Checklist

Before considering responsive design done:

- [ ] Component looks good at 320px
- [ ] No text overflow on small screens
- [ ] Touch targets are 44px+ minimum
- [ ] Images scale proportionally
- [ ] Padding doesn't collapse to nothing
- [ ] Grids don't show single columns too wide
- [ ] No horizontal scroll at any breakpoint
- [ ] Navigation is accessible on mobile
- [ ] Forms are usable on phones
- [ ] CTAs are easy to tap (not too small)
