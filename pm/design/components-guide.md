# Components Guide

## Overview

This guide catalogs all UI components in the Wilding Prompt Evolution design system. Components follow design tokens defined in `design-tokens.json`, implement the aesthetic vision from `design-brief.md`, and support user flows outlined in `ui-flow.md`. Visual references correspond to mockup03.png and related design assets.

The design system embodies organic sophistication with a forest-inspired color palette, emphasizing minimalist clarity and focused interaction patterns. All components use token-based styling to ensure consistency and maintainability.

## NavigationBar

### Description
Top-level navigation component providing app branding and page context.

### Design Tokens
- Background: `{color.surface.nav}`
- Padding: `{spacing.2} {spacing.4}`
- Border radius: `{radius.md}`
- Height: 56px

### Props & Variants
```typescript
interface NavigationBarProps {
  children: React.ReactNode;
  className?: string;
}
```

### Structure
```jsx
<nav className="navigation-bar">
  <AppLogo />
  <NavTitle />
</nav>
```

### Styles
```css
/* Default state */
.navigation-bar {
  background-color: {color.surface.nav};
  padding: {spacing.2} {spacing.4};
  border-radius: {radius.md};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  z-index: {z-index.base};
}

/* Responsive adjustments */
@media (max-width: {breakpoints.mobile}) {
  .navigation-bar {
    padding: {spacing.2};
  }
}
```

### Usage Examples
```jsx
import { NavigationBar } from '@/components/ui/navigation-bar';

<NavigationBar>
  <AppLogo />
  <NavTitle text="Prompt Evolution" />
</NavigationBar>
```

### Visual Reference
See visual: `mockup03.png` (top navigation bar)

## AppLogo

### Description
Brand logo component displayed in the navigation bar.

### Design Tokens
- Height: 32px
- Width: 32px
- Margin right: `{spacing.2}`

### Props & Variants
```typescript
interface AppLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

### Structure
```jsx
<div className="app-logo">
  <img src="/logo.svg" alt="Wilding" />
</div>
```

### Styles
```css
.app-logo {
  height: 32px;
  width: 32px;
  margin-right: {spacing.2};
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-logo img {
  max-width: 100%;
  max-height: 100%;
}
```

### Usage Examples
```jsx
import { AppLogo } from '@/components/ui/app-logo';

<AppLogo size="md" />
```

### Visual Reference
See visual: `mockup03.png` (left side of navigation bar)

## NavTitle

### Description
Page title component displayed in the navigation bar.

### Design Tokens
- Font family: `{typography.font-family.display}`
- Font size: `{typography.font-size.lg}`
- Color: `{color.text.heading}`
- Font weight: `{typography.font-weight.bold}`

### Props & Variants
```typescript
interface NavTitleProps {
  text: string;
  level?: 1 | 2 | 3;
  className?: string;
}
```

### Structure
```jsx
<h1 className="nav-title">{text}</h1>
```

### Styles
```css
.nav-title {
  font-family: {typography.font-family.display};
  font-size: {typography.font-size.lg};
  color: {color.text.heading};
  font-weight: {typography.font-weight.bold};
  margin: 0;
  line-height: {typography.line-height.tight};
}

/* Responsive adjustments */
@media (max-width: {breakpoints.mobile}) {
  .nav-title {
    font-size: {typography.font-size.md};
  }
}
```

### Usage Examples
```jsx
import { NavTitle } from '@/components/ui/nav-title';

<NavTitle text="Prompt Evolution" level={1} />
```

### Visual Reference
See visual: `mockup03.png` (center of navigation bar)

## PromptCard

### Description
Central content card displaying the current creative prompt with editing and favoriting controls.

### Design Tokens
- Background: `{color.surface.card}`
- Border radius: `{radius.lg}`
- Box shadow: `{elevation.2}`
- Padding: `{spacing.6}`
- Margin top: `{spacing.6}`
- Margin bottom: `{spacing.4}`
- Max width: 380px

### Props & Variants
```typescript
interface PromptCardProps {
  prompt: string;
  isEditing?: boolean;
  isFavorited?: boolean;
  onEdit?: () => void;
  onFavorite?: () => void;
  onClear?: () => void;
  className?: string;
}
```

### Structure
```jsx
<div className="prompt-card">
  <CardHeader>
    <EditIcon />
    <FavoriteIcon />
  </CardHeader>
  <p className="prompt-text">{prompt}</p>
  <CardFooter>
    <ClearButton />
  </CardFooter>
</div>
```

### Styles
```css
.prompt-card {
  background-color: {color.surface.card};
  border-radius: {radius.lg};
  box-shadow: {elevation.2};
  padding: {spacing.6};
  margin-top: {spacing.6};
  margin-bottom: {spacing.4};
  width: 100%;
  max-width: 380px;
  position: relative;
}

.prompt-text {
  font-family: {typography.font-family.display};
  font-size: {typography.font-size.xl};
  color: {color.text.primary};
  line-height: {typography.line-height.relaxed};
  margin-top: {spacing.3};
  margin-bottom: {spacing.6};
  margin-left: 0;
  margin-right: 0;
}

/* Responsive adjustments */
@media (max-width: {breakpoints.mobile}) {
  .prompt-card {
    padding: {spacing.3};
  }
  
  .prompt-text {
    font-size: {typography.font-size.lg};
  }
}

/* Loading state */
.prompt-card.loading {
  opacity: {opacity.disabled};
  pointer-events: none;
}

/* Edit state */
.prompt-card.editing .prompt-text {
  border: 1px solid {color.accent.calm};
  padding: {spacing.2};
  border-radius: {radius.sm};
}
```

### Usage Examples
```jsx
import { PromptCard } from '@/components/ui/prompt-card';

<PromptCard
  prompt="Create ambient textures inspired by morning mist over ancient forests"
  isFavorited={false}
  onEdit={() => setEditMode(true)}
  onFavorite={() => toggleFavorite()}
  onClear={() => clearPrompt()}
/>
```

### Visual Reference
See visual: `mockup03.png` (central card with prompt text)

## CardHeader

### Description
Header section of prompt card containing edit and favorite action buttons.

### Design Tokens
- Display: flex
- Justify content: space-between
- Align items: center

### Props & Variants
```typescript
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}
```

### Structure
```jsx
<div className="card-header">
  <EditIcon />
  <FavoriteIcon />
</div>
```

### Styles
```css
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: {spacing.2};
}
```

### Usage Examples
```jsx
import { CardHeader } from '@/components/ui/card-header';

<CardHeader>
  <EditIcon onClick={handleEdit} />
  <FavoriteIcon onClick={handleFavorite} active={isFavorited} />
</CardHeader>
```

### Visual Reference
See visual: `mockup03.png` (top section of central card)

## CardFooter

### Description
Footer section of prompt card containing action buttons like clear/reset.

### Design Tokens
- Display: flex
- Justify content: center
- Align items: center
- Gap: `{spacing.2}`
- Margin top: `{spacing.3}`

### Props & Variants
```typescript
interface CardFooterProps {
  children: React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}
```

### Structure
```jsx
<div className="card-footer">
  <ClearButton />
</div>
```

### Styles
```css
.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: {spacing.2};
  margin-top: {spacing.3};
}

.card-footer.left {
  justify-content: flex-start;
}

.card-footer.right {
  justify-content: flex-end;
}
```

### Usage Examples
```jsx
import { CardFooter } from '@/components/ui/card-footer';

<CardFooter alignment="center">
  <ClearButton onClick={handleClear} />
</CardFooter>
```

### Visual Reference
See visual: `mockup03.png` (bottom section of central card)

## EditIcon

### Description
Interactive icon button for enabling prompt editing mode.

### Design Tokens
- Color: `{color.text.icon}`
- Font size: `{typography.font-size.md}`
- Margin right: `{spacing.1}`

### Props & Variants
```typescript
interface EditIconProps {
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

### Structure
```jsx
<button className="edit-icon" onClick={onClick}>
  <PenIcon />
</button>
```

### Styles
```css
.edit-icon {
  color: {color.text.icon};
  font-size: {typography.font-size.md};
  margin-right: {spacing.1};
  background: transparent;
  border: none;
  padding: {spacing.1};
  border-radius: {radius.sm};
  cursor: pointer;
  transition: all {motion.duration.fast}ms {motion.timing.standard};
}

.edit-icon:hover {
  color: {color.accent.calm};
  transform: scale(1.1);
}

.edit-icon:focus {
  outline: 2px solid {color.accent.calm};
  outline-offset: 2px;
}

.edit-icon:disabled {
  opacity: {opacity.disabled};
  cursor: not-allowed;
}
```

### Usage Examples
```jsx
import { EditIcon } from '@/components/ui/edit-icon';

<EditIcon onClick={() => setEditMode(true)} />
```

### Visual Reference
See visual: `mockup03.png` (left icon in card header)

## FavoriteIcon

### Description
Toggle button for adding/removing prompts from favorites collection.

### Design Tokens
- Color: `{color.accent.affection}` (active) / `{color.text.icon}` (inactive)
- Font size: `{typography.font-size.md}`

### Props & Variants
```typescript
interface FavoriteIconProps {
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

### Structure
```jsx
<button className={`favorite-icon ${active ? 'active' : ''}`} onClick={onClick}>
  <HeartIcon />
</button>
```

### Styles
```css
.favorite-icon {
  color: {color.text.icon};
  font-size: {typography.font-size.md};
  background: transparent;
  border: none;
  padding: {spacing.1};
  border-radius: {radius.sm};
  cursor: pointer;
  transition: all {motion.duration.fast}ms {motion.timing.standard};
}

.favorite-icon.active {
  color: {color.accent.affection};
}

.favorite-icon:hover {
  transform: scale(1.1);
}

.favorite-icon:focus {
  outline: 2px solid {color.accent.affection};
  outline-offset: 2px;
}

.favorite-icon:disabled {
  opacity: {opacity.disabled};
  cursor: not-allowed;
}
```

### Usage Examples
```jsx
import { FavoriteIcon } from '@/components/ui/favorite-icon';

<FavoriteIcon 
  active={isFavorited} 
  onClick={() => toggleFavorite()} 
/>
```

### Visual Reference
See visual: `mockup03.png` (right icon in card header)

## ClearButton

### Description
Action button for clearing/resetting the current prompt.

### Design Tokens
- Background: transparent
- Color: `{color.accent.calm}`
- Border radius: `{radius.pill}`
- Padding: `{spacing.1}`
- Font size: `{typography.font-size.lg}`

### Props & Variants
```typescript
interface ClearButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  icon?: string;
  ariaLabel?: string;
  className?: string;
}
```

### Structure
```jsx
<button className="clear-button" onClick={onClick} aria-label={ariaLabel}>
  <EraserIcon />
</button>
```

### Styles
```css
.clear-button {
  background-color: transparent;
  color: {color.accent.calm};
  border-radius: {radius.pill};
  padding: {spacing.1};
  font-size: {typography.font-size.lg};
  border: none;
  cursor: pointer;
  transition: all {motion.duration.fast}ms {motion.timing.standard};
}

.clear-button:hover {
  color: {color.accent.energy};
  transform: scale(1.05);
}

.clear-button:active {
  opacity: {opacity.disabled};
}

.clear-button:focus {
  outline: 2px solid {color.accent.calm};
  outline-offset: 2px;
}

.clear-button:disabled {
  opacity: {opacity.disabled};
  cursor: not-allowed;
}
```

### Usage Examples
```jsx
import { ClearButton } from '@/components/ui/clear-button';

<ClearButton 
  onClick={() => clearPrompt()} 
  ariaLabel="Clear current prompt"
/>
```

### Visual Reference
See visual: `mockup03.png` (eraser icon in card footer)

## DirectionButtonRow

### Description
Container for direction evolution buttons, arranged in a responsive row layout.

### Design Tokens
- Display: flex
- Justify content: space-between
- Gap: `{spacing.2}`
- Margin top: `{spacing.4}`
- Margin bottom: `{spacing.8}`
- Max width: 380px

### Props & Variants
```typescript
interface DirectionButtonRowProps {
  children: React.ReactNode;
  layout?: 'row' | 'grid';
  className?: string;
}
```

### Structure
```jsx
<div className="direction-button-row">
  <DirectionButton variant="calm" />
  <DirectionButton variant="growth" />
  <DirectionButton variant="mystic" />
  <DirectionButton variant="energy" />
  <DirectionButton variant="affection" />
  <DirectionButton variant="flow" />
</div>
```

### Styles
```css
.direction-button-row {
  display: flex;
  justify-content: space-between;
  gap: {spacing.2};
  margin-top: {spacing.4};
  margin-bottom: {spacing.8};
  width: 100%;
  max-width: 380px;
  flex-wrap: wrap;
}

/* Responsive adjustments */
@media (max-width: {breakpoints.mobile}) {
  .direction-button-row {
    gap: {spacing.1};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

/* Grid layout variant */
.direction-button-row.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: {spacing.2};
}
```

### Usage Examples
```jsx
import { DirectionButtonRow } from '@/components/ui/direction-button-row';

<DirectionButtonRow layout="row">
  {directions.map(direction => (
    <DirectionButton key={direction.variant} {...direction} />
  ))}
</DirectionButtonRow>
```

### Visual Reference
See visual: `mockup03.png` (row of colored buttons below prompt card)

## DirectionButton

### Description
Themed action button for evolving prompts in specific creative directions.

### Design Tokens
- Background colors: `{color.accent.calm}`, `{color.accent.growth}`, `{color.accent.mystic}`, `{color.accent.energy}`, `{color.accent.affection}`, `{color.accent.flow}`
- Text color: `{color.text.inverse}`
- Border radius: `{radius.md}`
- Padding: `{spacing.2} {spacing.3}`
- Font size: `{typography.font-size.md}`
- Box shadow: `{elevation.1}`

### Props & Variants
```typescript
interface DirectionButtonProps {
  variant: 'calm' | 'growth' | 'mystic' | 'energy' | 'affection' | 'flow';
  icon?: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}
```

### Structure
```jsx
<button className={`direction-button direction-button--${variant}`} onClick={onClick}>
  {icon && <Icon name={icon} />}
  <span>{label}</span>
</button>
```

### Styles
```css
.direction-button {
  color: {color.text.inverse};
  border-radius: {radius.md};
  padding: {spacing.2} {spacing.3};
  font-size: {typography.font-size.md};
  box-shadow: {elevation.1};
  border: none;
  cursor: pointer;
  transition: all {motion.duration.fast}ms {motion.timing.standard};
  display: flex;
  align-items: center;
  gap: {spacing.1};
  font-family: {typography.font-family.body};
  font-weight: {typography.font-weight.semibold};
}

.direction-button--calm {
  background-color: {color.accent.calm};
}

.direction-button--growth {
  background-color: {color.accent.growth};
}

.direction-button--mystic {
  background-color: {color.accent.mystic};
}

.direction-button--energy {
  background-color: {color.accent.energy};
}

.direction-button--affection {
  background-color: {color.accent.affection};
}

.direction-button--flow {
  background-color: {color.accent.flow};
}

.direction-button:hover {
  box-shadow: {elevation.2};
  transform: translateY(-2px);
}

.direction-button:focus {
  outline: 2px solid {color.neutral.white};
  outline-offset: 2px;
}

.direction-button:disabled {
  opacity: {opacity.disabled};
  cursor: not-allowed;
  transform: none;
}

.direction-button.loading {
  pointer-events: none;
}

/* Responsive adjustments */
@media (max-width: {breakpoints.mobile}) {
  .direction-button {
    padding: {spacing.2};
    font-size: {typography.font-size.sm};
  }
}
```

### Usage Examples
```jsx
import { DirectionButton } from '@/components/ui/direction-button';

<DirectionButton 
  variant="calm"
  icon="leaf"
  label="Calm"
  onClick={() => evolvePrompt('calm')}
/>
```

### Visual Reference
See visual: `mockup03.png` (six colored buttons in bottom row)

## Token Reference Checklist

All tokens referenced in this guide exist in the current `design-tokens.json`. No additional tokens are required for the documented components.

// TODO: Consider adding {spacing.5.5} for micro-adjustments in tight layouts
// TODO: Consider adding {color.accent.hover} variants for each accent color