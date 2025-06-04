**File Purpose**: Guidelines for generating a Product Requirements Document (PRD)

## Goal

Generate an appropriately detailed Product Requirements Document (PRD) in Markdown format for a feature specified by the user. The PRD should be clear, actionable, and suitable to guide a **junior developer** through implementing the feature.

## Target Audience

Assume the primary reader of the PRD is a **junior developer**. Requirements should be explicit and clear. Provide enough detail to describe the feature's core purpose and logic.

## Steps

1. **Initiation:** The user will describe a new feature and ask you to write a PRD for that feature. For a description of the feature, refer to: `@/pm/tasks/features-list.md` 
2. **Ask Clarifying Questions:**
    - Identify any critical missing context or information required to write the PRD
    - You need to understand the "what" and "why" of the feature, not the "how" (which the junior developer will figure out).
3. **Write the PRD:**
    - Based on the feature description and answers to clarifying questions, generate a PRD per the structure below.
4. **Save PRD as Markdown file:**
    - **Location**: `/pm/tasks/`
    - **Filename**: `F{##}-prd-{feature-name}.md`
5. *Do not begin implementing the PRD*

## Clarifying Question Examples

Adapt your questions based on the user's prompt. Here here are common areas to explore if they are not obvious or are not clear from the user's prompt:

* **Goal:** What problem does this feature solve for the end user? or What is the main goal of this feature?
* **Target User:** Who is the primary user of this feature?
* **Core Functionality:** Key actions a user will perform with this feature
* **User Stories:** Could you provide a few user stories? E.g., *As a [role], I want to [action] so that [benefit].*
* **Acceptance Criteria:** How will we know when this feature is successfully implemented? What are the key success criteria?
* **Exclusions:** Are there any non-obvious things this feature should exclude?
* **Data Requirements:** What kind of data does this feature need to display or manipulate?
* **Design/UI:** Are there existing design mockups or UI guidelines to follow? If not: Can you describe the desired look and feel?
* **Edge Cases:** Are there any potential edge cases or error conditions we should consider?

## PRD File Structure

The generated PRD must follow this structure:

```markdown
**File Purpose**: Outline goals and requirements for implementing a given feature

# Feature-Specific PRD

**Feature Id**: F{##}
**Feature Name**: {Short feature name}
**Feature Description**: {Brief description of feature}

## Purpose
Outline the problem this feature solves or the overall goal of the feature

## Objectives
List specific, measurable objectives for this feature.

## User Stories
Outline any clarifying user narratives describing feature context, usage and benefits.

  - As a [role], I want to [action] so that [benefit].

## Functional Requirements
List specific, numbered functionalities the feature must have.
Use clear, concise language

E.g.:
1. The system must allow users to upload a profile picture
2. The system must allow users to upload a new profile picture

## Exclusions (Optional, if high-value)
Clearly state what this feature will *not* include, to keep scope focussed.

## Design References (Optional, if high-value)

  - Links to mockups, if applicable
  - Descriptions of UI/UX requirements, if applicable
  - Refence to components/styles, if applicable

## Technical Considerations (Optional, if critical or high-value)
Mention any known technical constraints, dependencies, or suggestions

E.g.:
  - Should integrate with the existing Auth module

## Success Metrics (Optional, if high-value)
How will the success of this feature be measured?

E.g.:
  - Increase user engagement by 10%
  - Reduce support tickets related to X
```