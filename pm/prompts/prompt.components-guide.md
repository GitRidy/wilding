### Context

You are an expert Next.js design-system documentation assistant. Your job is to generate a comprehensive `components-guide.md` that catalogs every UI component defined in our design system, showing usage guidelines, props/variants, accessibility notes, and visual examples. The guide will inform developers and designers how to implement and adjust each component consistently.

### Inputs

- 
1. **Design System Files:**
   
   - `components-guide.md` - Complete component specifications with props, variants, and design tokens
   
   - `design-tokens.json` - Design system tokens for styling
   
   - `design-brief.md` - Aesthetic vision and brand principles

2. **Component Specifications:**
   
   - `pm/design/page-spec-XYZ.json` - Page component structure and responsive behavior
   
   - `pm/design/ui-flow.md` - User journeys, screen transitions, and interaction patterns

### Task

1. Parse and combine all input sources to identify every discrete UI component used across the main page (e.g., `NavigationBar`, `PromptCard`, `DirectionButton`, `ClearButton`, `AppLogo`, `NavTitle`, `EditIcon`, `FavoriteIcon`, etc.).

2. For each component, produce a Markdown section that includes:
   
   - **Name & Description**: A one-sentence summary of the component’s purpose.
   
   - **Design Tokens**: List of all design-token references used by the component (e.g., `{color.surface.card}`, `{typography.font-size.xl}`, `{spacing.6}`, etc.).
   
   - **Props & Variants**: Every configurable prop or variant (e.g., `variant: calm|growth|mystic|energy|affection|flow`, `size: sm|md|lg`, `icon: [icon-name]`) with type hints and default values.
   
   - **Structure / Markup**: A distilled code snippet or pseudo-JSX showing component composition (e.g., which child elements or sub-components are rendered).
   
   - **Styles**: All CSS or style rules, expressed exclusively as token references (never raw values), organized by state (default, hover, active, disabled). For responsive adjustments, indicate which tokens change under which breakpoint (e.g., `{breakpoints.mobile}`).
   
   - **Usage Examples**: One or two example code blocks demonstrating typical usage (JSX), showing how to import the component and pass props/children.
   
   - **Visual Reference**: A link or note like “See visual: `mockup03.png` (top-center card)” or “Refer to `wireframe-1.jpg` for layout context.”

3. Order sections according to the component hierarchy in `page-spec-main.json`, starting with high-level layout containers (e.g., `NavigationBar`) and proceeding to atomic elements (e.g., icons, buttons).

4. Ensure all styling and spacing values reference tokens from `design-tokens.json`. Do not hard-code any color, margin, font, or radius values.

5. Cross-reference `next.config.ts` (if there are any path aliases or CSS frameworks enabled) to ensure import paths and class-naming conventions in examples are accurate.

6. Where a component has multiple responsive states, describe the token changes under each breakpoint section (e.g., `@mobile`, `@tablet`, `@desktop`).

7. Validate that every token used in the guide actually exists in `design-tokens.json`. If you encounter a needed token that does not exist, add a one-line comment outside the JSON/Markdown (e.g., `// TODO: Add {spacing.5.5} to design-tokens.json`).

### Output & Format Rules

- Return **only** the contents of `components-guide.md` in valid Markdown.

- Use 2-space indentation for nested code blocks or tables.

- For code examples, wrap JSX in triple backticks with `jsx` syntax highlighting.

- Write headings in this order:
  
  1. `# Components Guide`
  
  2. `## Overview` – Brief introduction referencing design-tokens, page-spec, and visual references.
  
  3. One `## <ComponentName>` section per component, in hierarchy order.
     
     - Under each, use `### Description`, `### Design Tokens`, `### Props & Variants`, `### Structure`, `### Styles`, `### Accessibility`, `### Usage Examples`, `### Visual Reference`.
  
  4. `## Token Reference Checklist` – At end, list any `// TODO` placeholders for missing tokens.

- Do **not** include any other narrative text outside these Markdown sections.

- Verify the final Markdown is well-formed and free of syntax errors.
