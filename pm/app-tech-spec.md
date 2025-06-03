**File Purpose**: Technical specifications and architecture documentation

# Architecture Overview
- Client-side rendered Next.js application with App Router architecture
- Component-based UI structure using React 19 features
- Local storage for data persistence
- Server-side API route for secure communication with Open Router API
- Static deployment on Vercel with environment variable configuration
- Mobile-first responsive design with CSS breakpoints for different viewport sizes

# Tech Stack
- Next.js 15
- React 19
- Typescript
- Tailwind CSS
- Open Router API for LLM integration
- Local Storage API for client-side data persistence
- Environment variables for configuration management

# Data Model

## Artist Prompt
```typescript
interface ArtistPrompt {
  id: string;            // Unique identifier (UUID)
  content: string;       // The actual prompt text shown to the user
  createdAt: number;     // Timestamp of creation
  isFavorite: boolean;   // Whether the prompt is favorited
}
```

## Favorites Collection
```typescript
interface FavoritesCollection {
  prompts: ArtistPrompt[];
  lastUpdated: number;   // Timestamp of last update
}
```

## Direction Type
```typescript
type Direction = 'wild' | 'pure' | 'earthy' | 'classy' | 'emotive' | 'complex';
```

## LLM Prompt Template
```typescript
interface LLMPromptTemplate {
  basePrompt: string;    // Base instructions for the LLM
  artistPrompt: string;  // Current artist prompt to evolve
  directionFragment: string; // Direction-specific instructions
}
```

## Local Storage Schema
- `currentPrompt`: The current artist prompt being displayed
- `favorites`: Collection of saved favorite prompts
- `recentHistory`: Array of recent prompts (limited to last 10)

# API Design

## Server-side API Routes

### `POST /api/evolve-prompt`
Endpoint for evolving the current prompt using the Open Router API.

Request body:
```typescript
{
  currentPrompt: string;  // Current artist prompt
  direction: Direction;   // Direction to evolve the prompt
}
```

Response:
```typescript
{
  newPrompt: string;     // Evolved artist prompt
  id: string;            // Unique ID for the new prompt
}
```

### `GET /api/initial-prompt`
Endpoint for generating an initial prompt based on user input.

Request query parameters:
```typescript
{
  seedConcepts: string;  // Initial concepts provided by user
}
```

Response:
```typescript
{
  prompt: string;        // Generated artist prompt
  id: string;            // Unique ID for the prompt
}
```

## Client-side Storage API

### Local Storage Interactions
- `saveToFavorites(prompt: ArtistPrompt): void`
- `removeFromFavorites(id: string): void`
- `getFavorites(): ArtistPrompt[]`
- `setCurrentPrompt(prompt: ArtistPrompt): void`
- `getCurrentPrompt(): ArtistPrompt | null`

# Frontend Components Overview

## Page Components
- `GenerationPage`: Main prompt generation interface
- `FavoritesPage`: Interface for viewing and managing saved prompts

## UI Components
- `PromptCard`: Displays the current artist prompt
- `DirectionButton`: Button for evolving prompt in a specific direction
- `FavoriteButton`: Button for saving a prompt to favorites
- `InitialPromptForm`: Form for entering initial concepts
- `FavoritesList`: List of saved favorite prompts
- `Navigation`: Navigation between generation and favorites screens
- `LoadingIndicator`: Visual feedback during API calls

## State Management
- React's Context API for global state management
- Custom hooks for local storage interactions
- State for tracking:
  - Current prompt
  - Loading states
  - Favorites collection
  - UI state (current view, animations, etc.)

# Security

## API Key Protection
- Open Router API key stored as environment variable
- Server-side API routes to prevent client-side exposure of API key
- Rate limiting on API routes to prevent abuse

## Data Safety
- All data stored locally on user's device
- No personal information collected or transmitted
- No authentication required (as per requirements)

## Input Validation
- Sanitization of user input before sending to LLM
- Validation of LLM responses before displaying to user
- Error handling for failed API requests

# Performance Targets

## Load Times
- Initial page load: < 2 seconds
- Prompt generation: < 3 seconds
- UI interactions: < 100ms response time

## Optimization Strategies
- Static site generation for non-dynamic content
- Code splitting for reduced bundle size
- Image optimization for design assets
- Caching strategies for API responses
- Debouncing user interactions

## Responsive Design Breakpoints
- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px - 1024px
- Large Desktop: 1025px+
- Tall/narrow window mode: optimized for width < 400px with any height

# Dependencies

## Production Dependencies
- next: ^15.0.0
- react: ^19.0.0
- react-dom: ^19.0.0
- typescript: ^5.0.0
- tailwindcss: ^3.3.0
- uuid: ^9.0.0
- axios: ^1.4.0
- @vercel/analytics: ^1.0.0

## Development Dependencies
- eslint: ^8.0.0
- prettier: ^3.0.0
- jest: ^29.0.0
- @testing-library/react: ^14.0.0
- postcss: ^8.4.0
- autoprefixer: ^10.4.0

# Dev Environment Setup

## Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or pnpm (v8.0.0 or higher)
- Git

## Installation Steps
1. Clone the repository
   ```bash
   git clone [repository-url]
   cd [project-directory]
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables
   - Create a `.env.local` file in the project root
   - Add the following variables:
     ```
     OPENROUTER_API_KEY=your_api_key_here
     NEXT_PUBLIC_APP_URL=http://localhost:3000
     ```

4. Start the development server
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

## Available Scripts
- `dev`: Starts the development server
- `build`: Builds the application for production
- `start`: Starts the production server
- `lint`: Runs ESLint for code quality
- `test`: Runs Jest tests
- `concat-docs`: Combines markdown files for documentation
- `project-tree`: Generates project structure documentation

# External Services

## Open Router API
- Service: LLM API provider
- Purpose: Powers the prompt generation and evolution
- Integration: Server-side API routes to protect API key
- Configuration: API key stored in environment variables
- Fallback: Static prompt library if API is unavailable
- Documentation: [Open Router API Documentation](https://openrouter.ai/docs)

## Vercel
- Service: Hosting and deployment platform
- Purpose: Hosts the application and handles CI/CD
- Integration: GitHub integration for automatic deployments
- Configuration: Environment variables set in Vercel dashboard
- Documentation: [Vercel Documentation](https://vercel.com/docs)
