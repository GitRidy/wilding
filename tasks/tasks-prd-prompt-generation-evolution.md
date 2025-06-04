# Task List: Prompt Generation & Evolution

## Parent Tasks & Sub-Tasks

### 1. Design the Prompt Generation & Evolution UI
- [x] Review design system and component guidelines ([`pm/design/components-guide.md`](pm/design/components-guide.md:1)).
- Create wireframes/mockups for the main generation screen and favorites screen.
- Specify layout for PromptCard, DirectionButtonRow, and navigation.
- Define color mapping for the six evolution directions.
- Plan mobile and narrow-window responsiveness.

### 2. Implement Prompt Generation and Evolution Logic
- Set up initial prompt input flow (prompt user for seed words/ideas).
- Implement state management for current prompt and evolution history.
- Implement logic for evolving prompts in six directions based on user input.
- Template LLM prompts for each direction.
- Connect UI components to state and logic.

### 3. Integrate Open Router API & Prompt Evolver LLM
- Set up server-side API route for prompt generation/evolution.
- Implement secure handling of Open Router API key (use environment variables).
- Create utility for communicating with the Prompt Evolver LLM.
- Handle API responses and errors.
- Connect front-end actions to API calls.

### 4. Develop Favorites Management Functionality
- Implement local storage persistence for favorite prompts (custom hook).
- Build UI for saving, viewing, organizing, and deleting favorites.
- Integrate favorites with PromptCard and navigation.
- Ensure favorites persist between sessions.
- Add feedback for save/delete actions.

### 5. Implement Error Handling and User Feedback Mechanisms
- Display user-friendly error messages for empty input and API failures.
- Show loading indicators during API calls.
- Provide clear feedback for successful prompt generation/evolution.
- Handle edge cases (e.g., duplicate favorites, invalid responses).

### 6. Ensure Responsive, Minimalist Design and Secure Deployment
- Apply design tokens and Tailwind classes for consistent styling.
- Test responsiveness on mobile and narrow windows.
- Review for accessibility (focus, contrast, keyboard navigation).
- Prepare Vercel deployment with secure environment variables.
- Document usage and deployment steps.

---

## Relevant Files

- `src/app/prompt/page.tsx` - Main prompt generation and evolution screen.
- `src/app/favorites/page.tsx` - Favorites management screen.
- `src/components/ui/PromptCard.tsx` - Displays the current prompt with actions.
- `src/components/ui/DirectionButtonRow.tsx` - Row of six direction buttons.
- `src/components/ui/DirectionButton.tsx` - Individual direction button component.
- `src/components/ui/CardHeader.tsx` - Header section for prompt card actions.
- `src/components/ui/CardFooter.tsx` - Footer section for prompt card actions.
- `src/lib/useFavorites.ts` - Custom hook for favorites state and persistence.
- `src/lib/fetcher.ts` - Utility for API requests.
- `src/app/api/prompts/route.ts` - API route for prompt generation/evolution.
- `src/styles/tokens.css` - Design tokens and custom properties.
- `src/app/layout.tsx` - Root layout, navigation, and global state provider.
- `src/app/globals.css` - Global styles.
- `public/logo.svg` - App logo for navigation bar.
- `pm/design/components-guide.md` - Reference for component structure and props.
- `pm/design/architecture.md` - Reference for state management and architecture.
- `src/components/ui/__tests__/PromptCard.test.tsx` - Unit tests for PromptCard.
- `src/lib/__tests__/useFavorites.test.ts` - Unit tests for favorites hook.
- `src/app/api/prompts/__tests__/route.test.ts` - Unit tests for API route.

---