# Application Architecture

## Overview

This architecture defines a pragmatic foundation for a small Next.js 15 application, prioritizing simplicity and rapid development. The stack leverages:

- **Next.js 15 App Router** for file-based routing and server actions
- **TypeScript** for type safety and maintainability
- **Tailwind CSS** with custom design tokens for styling
- **React Context & Hooks** for lightweight state management
- **localStorage** for simple client-side persistence

The approach enables fast iteration, clear separation of concerns, and direct mapping to the design system and user flows.

---

## Project Structure

A clean, scalable folder hierarchy supports modularity and clarity:

```
src/
  app/
    layout.tsx           # Root layout
    page.tsx             # Main entry page
    favorites/
      page.tsx           # Favorites page
    prompt/
      page.tsx           # Prompt generator page
    api/
      prompts/route.ts   # API route for prompts
  components/
    ui/
      Button.tsx
      Card.tsx
      Input.tsx
    feature/
      PromptGenerator.tsx
      FavoritesList.tsx
    layout/
      Header.tsx
      Navigation.tsx
  lib/
    fetcher.ts           # Enhanced fetch utility
    useLocalStorage.ts   # Custom hook for persistence
    useFavorites.ts      # Feature-specific hook
  types/
    prompt.d.ts
    favorites.d.ts
  styles/
    globals.css
    tokens.css           # CSS custom properties from design tokens
```

---

## Component Architecture

Components are organized for simplicity and reusability:

- **UI Components**: Basic building blocks (`Button`, `Card`, `Input`), styled with design tokens.
- **Feature Components**: Implement app features (`PromptGenerator`, `FavoritesList`).
- **Layout Components**: Structure the UI (`Header`, `Navigation`).
- **Composition Patterns**: Favor composition over inheritance for flexibility.

**Example: Simple UI Button with Design Token**

```tsx
// src/components/ui/Button.tsx
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 rounded bg-[var(--color-primary)] text-[var(--color-on-primary)]"
      {...props}
    >
      {children}
    </button>
  );
}
```
Usage of tokens: `{color.primary}`, `{color.on-primary}`

---

## State Management

State is managed with React primitives and simple patterns:

- **Local State**: `useState` and `useReducer` for component state.
- **App-wide State**: React Context for global data (e.g., current prompt, favorites).
- **Custom Hooks**: Encapsulate logic for reusability.
- **Persistence**: `localStorage` via custom hooks.

**Example: Favorites Context**

```tsx
// src/lib/useFavorites.ts
import { createContext, useContext, useState, useEffect } from "react";

type Favorite = { id: string; text: string };
type FavoritesContextValue = {
  favorites: Favorite[];
  addFavorite: (fav: Favorite) => void;
  removeFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (fav: Favorite) =>
    setFavorites((favs) => [...favs, fav]);
  const removeFavorite = (id: string) =>
    setFavorites((favs) => favs.filter((f) => f.id !== id));

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
```

---

## Styling Architecture

Styling is driven by design tokens and Tailwind CSS:

- **Tailwind CSS**: Configured with custom tokens from `design-tokens.json`
- **CSS Custom Properties**: Tokens exposed as `--color-primary`, etc., in `tokens.css`
- **Responsive Design**: Use tokenized breakpoints (`{breakpoint.sm}`, `{breakpoint.md}`)
- **Dynamic Theming**: Easily support light/dark modes via CSS variables

**Example: tokens.css**

```css
:root {
  --color-primary: {color.primary};
  --color-on-primary: {color.on-primary};
  --font-base: {font.base};
  --space-sm: {spacing.sm};
  /* ...other tokens... */
}
```

**Example: Tailwind config extension**

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "on-primary": "var(--color-on-primary)",
      },
    },
  },
};
```

---

## Data Layer

Data flow uses Next.js 15 conventions for simplicity:

- **Server Actions**: Handle form submissions and mutations server-side.
- **API Routes**: `app/api/` for simple REST endpoints.
- **Enhanced Fetch**: Utility for automatic caching and error handling.
- **Loading & Error States**: Simple UI feedback patterns.
- **Persistence**: Use `localStorage` for client-side data.

**Example: Server Action for Prompt Submission**

```tsx
// src/app/prompt/actions.ts
"use server";
import { revalidatePath } from "next/cache";

export async function submitPrompt(formData: FormData) {
  const prompt = formData.get("prompt") as string;
  // Save to DB or file here
  revalidatePath("/prompt");
}
```

**Example: Enhanced Fetch Utility**

```ts
// src/lib/fetcher.ts
export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "force-cache" });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
```

---

## Architecture Principles

- **Simplicity First**: Prefer straightforward solutions.
- **Rapid Development**: Optimize for MVP speed.
- **Maintainability**: Keep the codebase easy to understand and extend.
