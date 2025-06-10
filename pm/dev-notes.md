**File Purpose**: Record notes by the developer for reference during future tasks

## Next.js 15 key changes

Based on the information I've gathered from Context7 about Next.js 15, I can see that there are several key changes in Next.js 15 that I should be aware of for future tasks in this project:

1. Asynchronous APIs: Many Next.js APIs like `params`, `searchParams`, `cookies()`, `headers()`, and `draftMode()` are now asynchronous and return Promises that need to be awaited.

2. Changes in caching behavior: `fetch` requests are no longer cached by default, and you need to explicitly opt-in to caching.

3. Route Handlers: GET methods in Route Handlers are no longer cached by default.

4. Config option changes: Some experimental options have been renamed or stabilized.

5. Middleware changes: Geolocation data access has changed.

These changes are important to keep in mind for future tasks in this project, especially when implementing the API service for prompt generation (T2.1) and other server-side functionality.

## Robust Error Handling for Next.js Applications

When implementing error handling for the prompt generation feature (T2.4), I established a comprehensive approach that can be reused across the application:

1. **Layered Error Handling**: Implement error handling at multiple levels (API service, component, page) to ensure errors are caught and handled appropriately.

2. **Specific Error Messages**: Parse error responses to provide specific, user-friendly error messages based on the type of error (400, 500, network issues, timeouts).

3. **Timeout Handling**: Use AbortController with fetch requests to prevent hanging requests and provide better user feedback for slow connections.

4. **Error UI Components**: Display errors with clear messaging and recovery options (like retry buttons) to help users resolve issues without refreshing the page.

5. **Error State Management**: Reset error states appropriately when retrying operations to prevent stale error messages.

This pattern can be applied to other features requiring API interactions to ensure a consistent and robust error handling strategy throughout the application.

## Component Architecture for F02 Card Panel

During the implementation of F02 (Card Panel feature), I established a scalable component architecture pattern that can be reused for future features:

1. **Modular Component Structure**: Created separate, focused components (PromptCard, CardHeader, CardFooter, DirectionButton, DirectionButtonRow) that can be composed together rather than monolithic components.

2. **Design Token Integration**: Consistently used design tokens from `design-tokens.json` across all components for colors, spacing, typography, and responsive breakpoints, ensuring visual consistency.

3. **Responsive-First CSS Modules**: Implemented mobile-first responsive design using CSS modules with proper breakpoint management (mobile → tablet → desktop) for optimal user experience across devices.

4. **Accessibility by Design**: Built-in ARIA labels, keyboard navigation (Enter/Space key support), focus management, and screen reader compatibility from the start rather than as an afterthought.

5. **Composition Pattern**: Created a higher-level `CardPanel` component that composes smaller components, providing a clean API while maintaining flexibility for future enhancements.

This architecture pattern supports the app's evolution by making components reusable, maintainable, and consistent with the design system.
