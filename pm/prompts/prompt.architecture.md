### Context

You are an expert Next.js 15 application architecture specialist. Your job is to generate a practical `architecture.md` that defines the technical architecture for a small Next.js 15 app, focusing on simplicity and rapid development while supporting the design system and user flows.

### Inputs

1. **Design System Documentation:**
   
   - `components-guide.md` - Component specifications and design tokens
   - `design-tokens.json` - Design system tokens for styling
   - `design-brief.md` - Aesthetic vision and brand principles

2. **Application Requirements & Specifications:**
   
   - `ui-flow.md` - User journeys and interaction patterns
   - `page-spec-main.json` - Main page component structure
   - `app-vision.md` - Overall vision for the app
   - `app-prd.md` - Requirements summary

### Task

1. **Project Structure**: Define a clean folder hierarchy using Next.js 15 app router:
   
   - `/app` directory with pages and layouts
   - `/components` organized by feature/ui
   - `/lib` for utilities and hooks
   - `/types` for TypeScript definitions
   - `/styles` for global styles and tokens

2. **Component Organization**: Simple, maintainable component structure:
   
   - UI components (buttons, cards, inputs)
   - Feature components (prompt generator, favorites)
   - Layout components (header, navigation)
   - Reusable composition patterns

3. **State Management**: Lightweight state handling:
   
   - React useState/useReducer for local state
   - Context for app-wide state (current prompt, favorites)
   - Simple custom hooks for common logic
   - localStorage for persistence

4. **Styling Integration**: Implement design tokens with:
   
   - Tailwind CSS configuration with custom tokens
   - CSS custom properties for dynamic theming
   - Responsive design using token breakpoints

5. **Data & API**: Simple data flow:
   
   - API integration patterns
   - Basic error handling
   - Loading states
   - Local storage patterns

6. **Development Setup**: Essential tooling:
   
   - TypeScript configuration
   - Basic ESLint/Prettier setup
   - Development server setup

### Output & Format Rules

- Return **only** the contents of `architecture.md` in valid Markdown

- Use 2-space indentation for code blocks and file trees

- Structure with clear headings:
  
  1. `# Application Architecture`
  2. `## Overview` - Technology decisions and approach
  3. `## Project Structure` - Folder hierarchy
  4. `## Component Architecture` - Component organization
  5. `## State Management` - State handling patterns
  6. `## Styling Architecture` - Design token implementation
  7. `## Data Layer` - API and persistence
  8. `## Development Setup` - Essential tooling
  9. `## Implementation Guide` - Development order

- Include practical TypeScript examples

- Reference design tokens using `{token.category.name}` format

- Keep examples simple and focused on small app needs

- Avoid over-engineering and enterprise patterns

### Architecture Principles

- **Simplicity First**: Prefer simple solutions over complex ones
- **Rapid Development**: Focus on getting to MVP quickly
- **Maintainable**: Easy to understand and modify
- **Scalable**: Can grow but doesn't need to handle enterprise scale
- **Modern**: Uses React 19 and Next.js 15 features appropriately
