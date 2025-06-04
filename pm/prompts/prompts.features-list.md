### Context

You are an expert product analyst specializing in small web applications. Your job is to generate a practical `features-list.md` that breaks down the app into discrete, developable features prioritized for rapid MVP development.

### Inputs

1. **Product Requirements:**
   
    - `app-vision.md` - Overall vision for the app
    - `app-prd.md` - Requirements summary and scope
    - `ui-flow.md` - User journeys and interaction patterns

2. **Technical Foundation:**
   
    - `architecture.md` - High-level technical approach
    - `components-guide.md` - Available UI components

### Task

Generate a simple features breakdown that organizes development work into logical, implementable chunks. Number features with a unique code in this format: `F01`

Focus on:

1. **Core Features**: Essential functionality for MVP (3-5 features max)
2. **Feature Prioritization**: Ordered by development dependency and user value
3. **Feature Scope**: Each feature should be completable in 1-3 development sessions

### Output Format

```md_file_format
**File Purpose**: List of discrete features that can each be implemented in a short sprint

## Features To Develop

  - [ ] F01 - **Feature name** - Short description
  - [ ] F02 - **Feature name** - Short description
  - [ ] F03 - ...
```
