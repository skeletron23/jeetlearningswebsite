# Cost Breakdown Component - Usage Guide

## Overview
The `CostBreakdown` component provides a bright, clean, and professional UI for displaying career cost information with detailed breakdowns, ROI calculations, and financial guidance.

## Component Location
`app/components/CostBreakdown.tsx`

## Features

### 1. Summary Cards
- Quick overview of all cost categories
- Icon, category name, amount, and description
- Responsive grid layout (1 col mobile → 4 cols desktop)
- Hover effects with shadow transitions

### 2. Detailed Breakdown
- Expandable accordion for each cost item
- Color-coded left border for visual hierarchy
- Detailed bullet points for each category
- Smooth expand/collapse animations

### 3. Total Cost Section
- Calculates and displays total investment
- Key financial points with color-coded boxes
- Scholarship information
- Professional styling with border accent

### 4. ROI Section
- Entry level salary and payback period
- Mid-career salary and annual savings
- Senior level salary and annual savings
- Color-coded cards (blue, amber, green)

### 5. CTA Section
- Call-to-action button
- Gradient background
- Encourages scholarship exploration

## Usage Example

```tsx
import { CostBreakdown } from "@/app/components/CostBreakdown";

const costItems = [
  {
    category: "Government Colleges",
    amount: "₹5,000-50,000",
    description: "Annual tuition fees",
    icon: "🏫",
    color: "#1E40AF",
    details: [
      "IITs: ₹20,000-50,000 per year",
      "Central Universities: ₹5,000-15,000 per year",
      "State Universities: ₹8,000-25,000 per year",
      "Includes lab fees and registration",
    ],
  },
  {
    category: "Private Colleges",
    amount: "₹1-3 Lakh",
    description: "Annual tuition fees",
    icon: "🏢",
    color: "#F59E0B",
    details: [
      "Amity University: ₹1.5-2.5 lakh per year",
      "VIT: ₹1.2-2 lakh per year",
      "LPU: ₹1-1.8 lakh per year",
      "Includes all campus facilities",
    ],
  },
  {
    category: "Living Expenses",
    amount: "₹10,000-20,000",
    description: "Monthly in cities",
    icon: "🏠",
    color: "#10B981",
    details: [
      "Hostel/Rent: ₹5,000-12,000",
      "Food: ₹3,000-6,000",
      "Transport: ₹1,000-2,000",
      "Books & Materials: ₹1,000-2,000",
    ],
  },
  {
    category: "Exam & Certification",
    amount: "₹50,000-1 Lakh",
    description: "Professional exams",
    icon: "📝",
    color: "#6366F1",
    details: [
      "ACET Registration: Free",
      "Core Papers: ₹5,000-8,000 each",
      "Advanced Papers: ₹8,000-12,000 each",
      "Study Materials: ₹20,000-30,000",
    ],
  },
];

export function ActuarialCostPage() {
  return (
    <CostBreakdown
      title="What Will It Cost?"
      subtitle="Complete financial breakdown for your actuarial science journey"
      items={costItems}
    />
  );
}
```

## Props

```typescript
interface CostBreakdownProps {
  title?: string;                    // Section title (default: "What Will It Cost?")
  subtitle?: string;                 // Section subtitle
  items: CostItem[];                 // Array of cost items
}

interface CostItem {
  category: string;                  // Category name (e.g., "Government Colleges")
  amount: string;                    // Amount (e.g., "₹5,000-50,000")
  description: string;               // Short description
  icon: string;                      // Emoji icon
  color: string;                     // Hex color for styling
  details?: string[];                // Optional detailed breakdown
}
```

## Color Scheme

### Primary Colors
- **Blue**: #1E40AF - Government colleges, primary accents
- **Gold**: #F59E0B - Private colleges, highlights
- **Green**: #10B981 - Living expenses, positive indicators
- **Indigo**: #6366F1 - Exams & certifications

### Background Gradients
- **Header**: from-blue-50 via-indigo-50 to-purple-50
- **Total Cost**: from-blue-50 to-indigo-50
- **CTA**: from-blue-600 to-indigo-600

## Responsive Breakpoints

| Breakpoint | Grid Cols | Padding | Font Size |
|-----------|-----------|---------|-----------|
| Mobile (< 640px) | 1 | 4px | sm |
| Tablet (640px+) | 2 | 6px | base |
| Desktop (1024px+) | 4 | 8px | lg |

## Interactive Features

### Expandable Accordion
- Click any cost item to expand/collapse
- Shows detailed breakdown
- Smooth animations
- Only one item expanded at a time (default: first item)

### ROI Calculation
- Automatically calculates total investment
- Displays payback period
- Shows annual savings at different career levels

### Hover Effects
- Cards scale and shadow on hover
- Smooth transitions (300ms)
- Visual feedback for interactive elements

## Accessibility Features

- High contrast colors
- Clear visual hierarchy
- Semantic HTML structure
- Keyboard navigation support
- Readable font sizes
- Proper spacing and padding

## Integration with Career Pages

### For Actuarial Science
```tsx
import { CostBreakdown } from "@/app/components/CostBreakdown";

// In CareerPageClient.tsx
<CostBreakdown items={actuarialCostItems} />
```

### For Other Careers
Create similar cost item arrays for each career and pass to the component.

## Customization

### Change Colors
Modify the `color` property in each cost item:
```tsx
{
  category: "Government Colleges",
  color: "#YOUR_HEX_COLOR",
  // ...
}
```

### Add More Details
Expand the `details` array:
```tsx
{
  category: "Living Expenses",
  details: [
    "Hostel/Rent: ₹5,000-12,000",
    "Food: ₹3,000-6,000",
    // Add more details
  ],
}
```

### Modify ROI Section
Update the ROI cards in the component to show different salary ranges or career stages.

## Performance Optimizations

- Minimal re-renders (only on expand/collapse)
- Efficient CSS classes
- Optimized shadow effects
- No heavy animations
- Responsive image handling

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

- [ ] Comparison mode (compare multiple careers)
- [ ] Currency selector (INR, USD, etc.)
- [ ] Inflation calculator
- [ ] Scholarship filter
- [ ] Loan calculator
- [ ] Export to PDF
- [ ] Dark mode support

## Files

- **Component**: `app/components/CostBreakdown.tsx`
- **Usage Guide**: `COST_BREAKDOWN_USAGE.md`

## Status

✅ Production-ready with bright, clean, professional UI
