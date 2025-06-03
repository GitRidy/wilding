**File Purpose**: Product requirements document defining features and specifications

# Problem Statement
- Creative professionals, particularly ambient music producers, often struggle with creative blocks and need inspiration to guide their creative process
- Existing ideation tools are either too rigid (not evolving with the creative process) or too open-ended (not providing enough structure)
- Digital creators need a tool that can provide targeted artist prompts that evolve based on their preferences and creative direction
- There is a need for a simple, non-distracting interface that can be used alongside creative software (like DAWs) without disrupting workflow

# User Stories
- As an ambient music producer, I want to receive creative "artist prompts" so that I can overcome creative blocks and find new directions for my music
- As a digital creator, I want to evolve and refine prompts in specific creative directions so that I can channel my creativity more effectively
- As a user, I want to save prompts that I find particularly inspiring so that I can refer back to them in future creative sessions
- As a user, I want to view and manage my collection of saved prompts so that I can organize my creative inspirations
- As a user, I want a clean, minimalist interface so that I can focus on my creative work without distraction
- As a user, I want to use the app on mobile or as a narrow window beside my DAW so that it integrates seamlessly with my existing workflow

# Feature Requirements
## Core Functionality
- Prompt generation system that creates high-quality ideation prompts for creative work
- Open Router API integration with LLM, "Prompt Evolver", that powers the prompt generation and evolution
- Prompt evolution in six distinct directions: wild, pure, earthy, classy, emotive, and complex
- LLM prompts given to the Prompt Evolver should be templated, with a field for the artist prompt to evolve from , and a modular section that is inserted based on which direction the user pressed; thus, there will be six discrete direction prompt fragments
- Ability to save prompts to favorites (stored locally)
- Interface to view and manage saved prompts
- Internally distinguish between "artist prompts", the cards shown to the user, and "llm prompts", which are given to the Prompt Evolver LLM; however, the UI should simply refer to the artist prompts as "prompts"

## User Interface
- Main generation screen with current prompt displayed prominently in a card format
- When the app initially opens, or when the user clears the current prompt, the user should be prompted for initial words, concepts, or ideas to kick off artist prompt generation
- Six colored buttons corresponding to the different prompt evolution directions
- Favorites management interface for viewing and organizing saved prompts
- Navigation between generation and favorites screens
- Responsive design that works well on mobile and as a narrow window beside a DAW

## Technical Requirements
- Next.js 15 and React 19 as the core framework
- Local storage implementation for saving user preferences and favorite prompts
- Responsive, mobile-first design approach
- Vercel deployment configuration
- Ensure open router API key is protected

# UI/UX Specifications
## Design Principles
- Minimalist, sleek, and classy aesthetic
- Understated "wow factor" that doesn't distract from creative work
- Earthy, forest-like color palette and toning
- Modern but non-techy feeling interface
- Mobile-first approach that also works well as a tall, narrow window

## Interface Elements
- Large, prominent card displaying the current prompt
- Six distinctly colored buttons for prompt evolution directions:
  - Wild: For unexpected, boundary-pushing directions
  - Pure: For clear, focused, refined, and simplifying directions
  - Earthy: For grounded, organic, embodied, and natural directions
  - Classy: For sophisticated, elegant directions
  - Emotive: For feeling-centered, expressive directions
  - Complex: For intricate, layered, and nuanced directions
- Simple navigation between generation screen and favorites
- Clean, uncluttered favorites management interface

## Interactions
- Single tap/click on direction buttons to evolve the current prompt
- Save button to add current prompt to favorites
- Swipe or button navigation between screens
- Tap/click to select, edit, or delete saved prompts

# Acceptance Criteria
- The app successfully generates creative prompts that are genuinely inspiring and useful for ambient music production
- Prompt evolution buttons produce noticeably different directions that align with their labeled intent
- The interface is clean, minimalist, and visually appealing with the specified earthy, forest-like toning
- Favorite prompts are successfully saved to local storage and persist between sessions
- The app functions correctly on mobile devices and as a narrow window beside a DAW
- The app deploys successfully to Vercel
- The user can navigate between generation and favorites screens without confusion
- The app loads and responds quickly, without noticeable lag during prompt generation or evolution

# Out of Scope
- User accounts and authentication (local storage only for this version)
- Cloud synchronization of saved prompts across devices
- Social sharing features for prompts
- Collaborative features between multiple users
- Export/import functionality for prompt collections
- Custom categories or tagging system for organizing prompts
- Advanced prompt generation settings or configurations
- Integration with specific DAW software or other creative tools
- Analytics or tracking of prompt usage
- Monetization features or subscription model
