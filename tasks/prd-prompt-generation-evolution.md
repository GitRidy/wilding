# Prompt Generation & Evolution PRD

## 1. Introduction/Overview
This feature enables the generation and iterative evolution of creative prompts specifically tailored for ambient music producers. It addresses creative block by providing inspiring, evolving "artist prompts" that adapt to user direction, supporting a minimalist workflow alongside digital audio workstations (DAWs).

## 2. Goals
- Enable users to generate high-quality, inspiring prompts for ambient music creation.
- Allow users to evolve prompts in six distinct creative directions via user-initiated actions.
- Ensure a distraction-free, minimalist interface that integrates smoothly into creative workflows.
- Handle empty input and API errors gracefully, providing clear feedback.
- Support saving and managing favorite prompts locally.

## 3. User Stories
- As an ambient music producer, I want to receive creative prompts so I can overcome creative blocks and find new directions for my music.
- As a user, I want to evolve prompts in specific directions (wild, pure, earthy, classy, emotive, complex) to guide my creative process.
- As a user, I want to save and revisit prompts that inspire me.
- As a user, I want the interface to be clean and unobtrusive, so I can focus on my music production.

## 4. Functional Requirements
1. The system must allow users to generate a new prompt by providing initial words, concepts, or ideas.
2. The system must evolve the current prompt in one of six directions (wild, pure, earthy, classy, emotive, complex) based on user button selection.
3. The system must use the "Prompt Evolver" LLM via the Open Router API for both generation and evolution, templating LLM prompts accordingly.
4. The system must display the current prompt in a prominent card format.
5. The system must allow users to save the current prompt to a local favorites collection.
6. The system must provide an interface to view, organize, and delete saved prompts.
7. The system must handle empty input gracefully by prompting the user for valid input.
8. The system must handle API errors gracefully, displaying a clear error message and allowing retry.
9. The interface must be responsive and function well on both mobile and as a narrow window beside a DAW.
10. The system must protect the Open Router API key and not expose it in client code.

## 5. Non-Goals (Out of Scope)
- Support for creative domains beyond ambient music.
- Automated or background prompt evolution (evolution is always user-initiated).
- User accounts or cloud synchronization (favorites are stored locally).
- Social sharing, collaboration, or exporting/importing prompt collections.
- Advanced prompt generation settings or custom evolution directions.

## 6. Design Considerations
- Follow the minimalist, earthy, forest-inspired aesthetic described in the design system.
- Use large, prominent prompt cards and a row of six distinctly colored evolution buttons (see [`pm/design/components-guide.md`](pm/design/components-guide.md:1), PromptCard and DirectionButtonRow).
- Ensure all UI components use token-based styling for consistency.
- Provide clear feedback for loading states, errors, and empty input.
- Navigation should be simple: generation screen and favorites screen, accessible from the main UI.
- See [`pm/design/architecture.md`](pm/design/architecture.md:1) for component and state management patterns.

## 7. Technical Considerations
- Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.
- Use localStorage for persistence of favorites.
- Use React Context and custom hooks for state management (see `useFavorites` example).
- API integration with Open Router should occur server-side to protect the API key.
- Deployable to Vercel, with configuration for secure environment variables.

## 8. Success Metrics
- Increase in user engagement (e.g., number of prompts generated/evolved per session).
- Diversity of prompts generated and evolved, as measured by prompt content analysis.
- Number of prompts saved to favorites.
- Positive user feedback on prompt quality and UI usability.
- Low error rates and high reliability during prompt generation/evolution.

## 9. Open Questions
- Are there any specific prompt templates or seed concepts that should be prioritized for ambient music?
- Should there be a limit to the number of saved prompts?
- Is there a need for offline support or caching of prompts?