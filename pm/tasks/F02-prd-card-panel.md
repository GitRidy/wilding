**File Purpose**: Outline goals and requirements for implementing a given feature

# Feature-Specific PRD

**Feature Id**: F02
**Feature Name**: Card Panel
**Feature Description**: Implement the card panel component, including the six evolve chips (wild, pure, earthy, classy, emotive, complex) that evolve prompts (though not LLM-connected yet)

## Purpose
Enable users to evolve and refine their creative prompts through thematic direction buttons, providing an intuitive interface for exploring different creative variations of their current prompt without requiring LLM integration in this phase.

## Objectives
1. Create a functional card panel component that displays the current prompt
2. Implement six themed evolve chips with distinct visual styling
3. Provide immediate visual feedback when users interact with evolve chips
4. Establish the foundation for future LLM-powered prompt evolution
5. Ensure responsive design that works across different screen sizes

## User Stories
- As a creative professional, I want to see my current prompt displayed clearly in a card format so that I can easily read and reference it.
- As a user exploring creative directions, I want to click on themed evolve chips (wild, pure, earthy, classy, emotive, complex) so that I can indicate the direction I want my prompt to evolve.
- As a mobile user, I want the card panel to be responsive and touch-friendly so that I can use it effectively on smaller screens.
- As a user, I want visual feedback when I interact with evolve chips so that I know my actions are being registered.

## Functional Requirements
1. The system must display a PromptCard component that shows the current prompt text
2. The system must include a CardHeader with edit and favorite action buttons
3. The system must include a CardFooter with a clear/reset button
4. The system must display six DirectionButton components arranged in a DirectionButtonRow
5. The DirectionButton components must use the following variants and labels:
   - wild (using wild color token)
   - pure (using pure color token)
   - earthy (using earthy color token)
   - classy (using classy color token)
   - emotive (using emotive color token)
   - complex (using complex color token)
6. The system must provide visual hover and focus states for all interactive elements
7. The system must be responsive, switching to a grid layout on mobile devices
8. The system must handle click events on evolve chips (even if not connected to LLM yet)
9. The system must maintain consistent styling using design tokens from design-tokens.json
10. The system must support disabled states for evolve chips when appropriate

## Exclusions
- LLM integration and actual prompt evolution logic (reserved for F06)
- Prompt editing functionality (reserved for F04)
- Favorites management (reserved for F03)
- Advanced animations or transitions beyond basic hover effects

## Design References
- Visual reference: `pm/design/mockups/mockup03.png` (central card and button row)
- Component specifications: `pm/design/components-guide.md` (PromptCard, DirectionButtonRow, DirectionButton sections)
- Design tokens: `pm/design/design-tokens.json` (color.accent values for button variants)

## Technical Considerations
- Should integrate with existing component structure defined in components-guide.md
- Must use TypeScript interfaces as specified in the components guide
- Should follow the established file structure in src/components/
- Must implement proper accessibility features (ARIA labels, keyboard navigation)
- Should use CSS-in-JS or CSS modules consistent with project standards
- Must handle responsive breakpoints as defined in design tokens

## Success Metrics
- All six evolve chips render with correct colors and labels
- Card panel displays properly across mobile, tablet, and desktop viewports
- Interactive elements provide appropriate visual feedback
- Component passes accessibility audits
- Zero console errors during interaction
- Component integrates seamlessly with existing app layout