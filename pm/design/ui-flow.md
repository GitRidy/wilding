# UI Flow Document

**File Purpose**: Define user journeys, screen transitions, and interaction patterns for the Prompt Evolution application

## Application Overview

The Prompt Evolution application consists of two primary screens with several modal states and transitions between them:

1. **Generation Screen** - The main interface where users view and evolve creative prompts
2. **Favorites Screen** - Where users manage their saved prompts

## Navigation Structure

```
App Root
├── Generation Screen (Default Landing Page)
│   ├── Initial Input Modal (when no current prompt exists)
│   ├── Current Prompt Card
│   ├── Direction Buttons (2 banks of 3 either side of prompt card)
│   ├── Favorite Toggle Button
│   ├── Clear/Reset Button
│   ├── Edit Prompt Button
│   └── Navigation to Favorites
├── Favorites Screen
│   ├── Favorites List
│   ├── Prompt Detail View
│   ├── Delete Confirmation Modal
│   ├── Navigation to Generation Screen
└── Bottom Nav Bar
    ├── Profile
    ├── Favorites
    └── Menu
```

## User Journeys

### 1. First-Time User Experience

1. User opens the application
2. System displays Generation Screen with Initial Input Modal
3. User enters seed concepts/ideas
4. System generates initial prompt and displays it on the Generation Screen
5. User can now evolve the prompt or save it to favorites

### 2. Returning User Experience

1. User opens the application
2. System retrieves last prompt from local storage
3. System displays Generation Screen with the last prompt
4. User can continue evolving from previous session

### 3. Prompt Evolution Journey

1. User views current prompt on Generation Screen
2. User selects one of six direction side-chip buttons (wild, pure, earthy, classy, emotive, complex)
3. System shows loading indicator
4. System displays new evolved prompt based on selected direction
5. User can continue evolving or save to favorites

### 4. Saving Favorites Journey

1. User views a prompt they want to save
2. User taps/clicks the Favorite button
3. System saves prompt to local storage
4. System provides visual confirmation of save action

### 5. Managing Favorites Journey

1. User navigates to Favorites Screen
2. System displays list of saved prompts
3. User can:
   - Select a prompt to view in detail
   - Delete a prompt from favorites
   - Return a saved prompt to the Generation Screen for further evolution

## Screen-by-Screen Breakdown

### Generation Screen

**States:**
- Empty state (first-time or after reset)
- Prompt display state
- Loading state (during prompt evolution)
- Error state (if API fails)

**UI Elements:**
- Prompt Card (central focus)
- Direction Buttons (6 colored buttons positioned three on each side of the prompt card)
- Favorite Toggle Button (near the prompt card)
- Clear/Reset Button (to start fresh)
- Edit Prompt Button (to modify the current prompt text)
- Loading Indicator (appears during API calls)

**Interactions:**
- Tap/click direction button → Evolve prompt in that direction
- Tap/click favorite button → Save current prompt to favorites
- Tap/click clear button → Reset to initial input state
- Tap/click edit button → Edit the current prompt text directly
- Tap/click navigation → Go to Favorites Screen

### Initial Input Modal

**UI Elements:**
- Text input field for seed concepts
- Submit button
- Optional: Example suggestions

**Interactions:**
- Enter text → Input seed concepts
- Tap/click submit → Generate initial prompt
- Optional: Tap example → Use example as seed

### Favorites Screen

**UI Elements:**
- List of saved prompts (scrollable)
- Delete buttons for each prompt
- Select/view buttons for each prompt
- Navigation button to return to Generation Screen
- Empty state message (if no favorites)

**Interactions:**
- Tap/click prompt → View detail or return to Generation Screen with this prompt
- Tap/click delete → Show confirmation, then remove from favorites

### Delete Confirmation Modal

**UI Elements:**
- Confirmation message
- Cancel button
- Confirm delete button

**Interactions:**
- Tap/click cancel → Return to Favorites Screen
- Tap/click confirm → Delete prompt and return to Favorites Screen

## Responsive Behavior

The UI adapts to different screen sizes and orientations:

### Mobile Portrait (320px - 480px)
- Vertical layout with prompt card at top
- Direction buttons may reposition to 3x2 grid below prompt card
- Bottom navigation bar visible

### Mobile Landscape / Tablet (481px - 768px)
- Horizontal layout with prompt card centered
- Direction buttons positioned 3 on each side of prompt card
- Bottom navigation bar visible

### Desktop (769px+)
- Similar to tablet but with more whitespace
- Direction buttons positioned 3 on each side of prompt card with more spacing
- Bottom navigation bar visible with optional sidebar navigation

### Narrow Window Mode (width < 400px, any height)
- Optimized for use alongside DAW software
- Vertical layout with minimal padding
- Direction buttons may reposition to 3x2 grid below prompt card
- Scrollable if needed to access all controls
- Bottom navigation condensed or converted to hamburger menu

## Transition Animations

To enhance user experience without being distracting:

1. **Prompt Evolution**: Subtle fade transition between old and new prompts
2. **Screen Transitions**: Slide animation between Generation and Favorites screens
3. **Button Feedback**: Subtle scale/color change on press
4. **Loading Indicator**: Unobtrusive animation during API calls
5. **Edit Mode**: Smooth transition between display and edit states for prompt card

## Error States & Edge Cases

### API Connection Failures
- Display error message on prompt card
- Provide retry button
- Show cached prompts if available

### Empty States
- First-time use: Show welcome message and initial input
- No favorites: Show encouraging message to save prompts

### Long Prompts
- Text wrapping and scrolling for unusually long prompts
- Truncation with "show more" option if needed

## Accessibility Considerations

- All interactive elements have sufficient touch targets (min 44x44px)
- Color choices maintain sufficient contrast ratios
- Direction buttons include both color and text labels
- Loading states are communicated both visually and via screen readers

## Implementation Notes

- Use CSS transitions for smooth animations
- Implement responsive layout using Tailwind breakpoints
- Store UI state in React Context
- Use local storage for persistence between sessions
- Implement debouncing for rapid interactions

## Edit Prompt Functionality

### Edit Prompt Journey
1. User views current prompt on Generation Screen
2. User taps/clicks the Edit button
3. System displays editable text field with current prompt content
4. User modifies the prompt text directly
5. User confirms changes (or cancels)
6. System updates the displayed prompt with the edited content
7. User can continue evolving the edited prompt

### Edit Prompt Modal/Interface

**UI Elements:**
- Text area with current prompt content
- Confirm button
- Cancel button
- Character counter (optional)
- Keyboard with relevant input methods on mobile

**Interactions:**
- Edit text → Modify prompt content directly
- Tap/click confirm → Save changes and return to Generation Screen
- Tap/click cancel → Discard changes and return to Generation Screen
- Auto-save option for draft changes (optional)

**Considerations:**
- Maintain consistent styling between display and edit modes
- Provide clear visual indication when in edit mode
- Consider auto-expanding text area for longer prompts
- Implement undo/redo functionality for edit operations