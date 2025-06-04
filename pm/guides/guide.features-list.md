**File Purpose**: Set out guidelines for generating a features list to guide app development in short mini-sprints.

### Goal

To generate a concise `@/pm/tasks/features-list.md` that decomposes app development into discrete, vertically complete features that can each be implemented in a short sprint.

### Inputs

1. **Product Requirements:**
   
    - `app-vision.md` - Overall vision for the app
    - `app-prd.md` - Requirements summary and scope
    - `ui-flow.md` - User journeys and interaction patterns

2. **Technical Foundation:**
   
    - `architecture.md` - High-level technical approach
    - `components-guide.md` - Available UI components

### Approach

- Break development work into logical, implementable chunks

- Number features with a unique code in this format: `F01`

- **MVP appraoch**: Define features as essential units of functionality

- **Features count**:  Aim for a list of 3 to 7 features

- **Vertical Completeness**: Each feature should be fully testable and deployable 

- **Feature Scope**: Each feature should be completable in a short development mini-sprint

### Output Format

```md_file_format
**File Purpose**: List of discrete features that can each be implemented in a short mini-sprint

## Features To Develop

  - [ ] F01 - **Feature name** - Short description
  - [ ] F02 - **Feature name** - Short description
  - [ ] F03 - ...
```

## Rules

- Do not elaborate on the features. PRDs will be developed for each feature for that purpose. The features list is intended as an initial succinct list to help stage development sprints.
