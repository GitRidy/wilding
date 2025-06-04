**File Purpose**: High-level brief to set out aesthetic vision and principles to guide design

# Wilding - Design Brief

## Design Vision

Wilding is a creative prompt generation tool for ambient music producers and digital creatives who need inspiration during their creative process. The design should embody a minimalist yet sophisticated aesthetic that complements rather than competes with the user's creative workspace.

The interface should feel like a natural extension of the creative environment - a thoughtful companion rather than a technical tool. It should evoke the feeling of a quiet walk through a forest, where inspiration comes naturally and without distraction.

## Brand Personality

- **Organic & Earthy**: Connected to natural processes of growth and evolution
- **Sophisticated & Refined**: Elegant without being pretentious
- **Calm & Focused**: Creating a sense of mental clarity and creative focus
- **Intuitive & Seamless**: Requiring minimal cognitive load to operate
- **Inspiring & Generative**: Facilitating creative breakthroughs

## Design Principles

1. **Minimalist Clarity**
   - Reduce visual noise to emphasize content
   - Employ generous whitespace to create breathing room
   - Prioritize typography as a core design element
   - Limit UI elements to only what's necessary

2. **Organic Sophistication**
   - Use natural textures and gradients subtly
   - Incorporate gentle, fluid animations that mimic natural movement
   - Balance geometric precision with organic imperfection
   - Create a sense of depth without overwhelming dimensionality

3. **Focused Interaction**
   - Design clear interaction paths with minimal decision points
   - Use subtle visual cues to guide user attention
   - Ensure each interaction feels deliberate and meaningful
   - Provide gentle feedback that confirms user actions

4. **Adaptive Presence**
   - Design for seamless integration alongside creative workspaces
   - Create a responsive system that works in varied window dimensions
   - Ensure the interface remains usable in narrow, vertical configurations
   - Maintain visual harmony at all breakpoints

## Color Palette

The color palette should evoke a forest environment with earthy tones, while maintaining sufficient contrast for accessibility and readability.

### Primary Colors
- **Forest Green** (#2D4A22): Deep, grounding base color representing stability
- **Moss** (#8A9A5B): Vibrant mid-tone for accents and highlights
- **Bark** (#4A3C2A): Warm neutral for text and secondary elements

### Secondary Colors
- **Stone** (#D9D4C5): Light neutral for backgrounds and cards
- **Mist** (#E8EDE6): Subtle highlight for hover states and dividers
- **Shadow** (#1A2617): Deep shade for text and emphasis

### Direction Button Colors
Each direction button should have a distinct color that intuitively represents its creative direction:
- **Wild**: Vibrant Coral (#E76F51) - Energetic and unexpected
- **Pure**: Pale Blue (#A8DADC) - Clear and refined
- **Earthy**: Terracotta (#AC6B53) - Grounded and organic
- **Classy**: Deep Purple (#6D597A) - Sophisticated and elegant
- **Emotive**: Soft Rose (#E07A7A) - Feeling-centered and expressive
- **Complex**: Teal (#2A9D8F) - Intricate and layered

## Typography

Typography should be clean and highly legible while maintaining an organic quality.

### Primary Font
**Spectral** - A serif font with literary qualities that maintains excellent readability:
- Light (300) for large display text
- Regular (400) for body text
- Medium (500) for emphasis
- Semi-bold (600) for buttons and interactive elements

### Secondary Font
**Work Sans** - A humanist sans-serif for UI elements and supporting text:
- Regular (400) for labels and captions
- Medium (500) for navigation and buttons

### Type Scale
- Display: 32px / 40px line height
- Heading: 24px / 32px line height
- Subheading: 18px / 28px line height
- Body: 16px / 24px line height
- Caption: 14px / 20px line height
- Button: 16px / 24px line height

## Component Design

### Prompt Card
- Generous padding (24px)
- Subtle shadow (4px blur, 10% opacity)
- Rounded corners (8px radius)
- Light background with subtle texture
- Typography-focused with ample line height
- Optional subtle border (1px, 10% opacity)

### Direction Buttons
- Circular or pill-shaped for intuitive interaction
- Consistent size (48px height)
- Clear color distinction between directions
- Subtle hover and active states
- Minimal iconography if needed

### Navigation
- Understated and secondary to main content
- Clear active states
- Consistent positioning across breakpoints
- Minimal visual weight

### Favorites Interface
- Grid or list view of saved prompt cards
- Consistent visual language with main interface
- Clear interaction states for management actions
- Visual distinction between active and archived favorites

## Layout & Responsive Design

The application must function well in multiple contexts, with special attention to narrow, vertical layouts that would sit alongside a DAW.

### Key Breakpoints
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: 1025px+
- **DAW Companion Mode**: Width < 400px with any height

### Layout Principles
- Single-column layout for narrow viewports
- Card-centered design with direction buttons below on mobile
- Direction buttons flanking the prompt card on wider viewports
- Navigation consistently positioned at bottom on mobile, top on desktop
- Maintain readable line lengths (45-75 characters) at all widths

## Motion & Interaction

Animation should be subtle and organic, evoking natural movement rather than mechanical transitions.

### Micro-interactions
- Button hover/press: Subtle scale (1.02x) and shadow increase
- Card transitions: Gentle fade combined with slight movement
- Loading states: Natural, breathing animation rather than mechanical spinners

### Transitions
- Page transitions: Smooth crossfades (300ms)
- Element appearance: Staggered fade-ins (200-400ms)
- Direction changes: Subtle card movement in the direction selected

## Accessibility Considerations

The design must be accessible to users with various needs while maintaining its aesthetic vision.

### Requirements
- Maintain WCAG 2.1 AA compliance minimum
- Ensure color contrast ratios meet accessibility standards
- Provide sufficient touch targets (minimum 44px × 44px)
- Design focus states that are clear but aesthetically consistent
- Ensure all interactive elements are keyboard accessible

## Design Assets & Resources

### Iconography
- Minimal use of icons, focusing on typography where possible
- When used, icons should be simple, consistent in style, and organic in feel
- Custom icons for direction buttons that visually represent each direction
- Standard icons for utility functions (save, delete, etc.)

### Textures & Patterns
- Subtle paper or natural textures for backgrounds
- Optional grain overlay for depth (max 4% opacity)
- Avoid hard lines and geometric patterns in favor of organic shapes

## Implementation Notes

- Use Tailwind CSS for styling, with custom design tokens defined in theme
- Implement fluid typography and spacing using CSS clamp
- Use CSS variables for color management to enable potential theme switching
- Leverage React 19 features for smooth transitions and animations
- Ensure component modularity for consistent application of design principles

## Design Inspiration

- Brian Eno's Oblique Strategies cards
- Calm technology principles by Amber Case
- Japanese wabi-sabi aesthetic (beauty in imperfection)
- Forest floor textures and patterns
- High-end audio equipment interfaces (minimal but sophisticated)
- Moleskine notebooks (quality, tactile, creative companion)

---

This design brief serves as a guiding document for the visual and interaction design of Wilding. All design decisions should align with these principles while allowing for creative interpretation and evolution as the project develops.
