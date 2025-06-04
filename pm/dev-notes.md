**File Purpose**: Record notes by the developer for reference during future tasks



## Next.js 15 key changes

Based on the information I've gathered from Context7 about Next.js 15, I can see that there are several key changes in Next.js 15 that I should be aware of for future tasks in this project:

1. Asynchronous APIs: Many Next.js APIs like `params`, `searchParams`, `cookies()`, `headers()`, and `draftMode()` are now asynchronous and return Promises that need to be awaited.

2. Changes in caching behavior: `fetch` requests are no longer cached by default, and you need to explicitly opt-in to caching.

3. Route Handlers: GET methods in Route Handlers are no longer cached by default.

4. Config option changes: Some experimental options have been renamed or stabilized.

5. Middleware changes: Geolocation data access has changed.

These changes are important to keep in mind for future tasks in this project, especially when implementing the API service for prompt generation (T2.1) and other server-side functionality.
