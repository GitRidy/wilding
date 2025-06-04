**File Purpose**: Guidelines for generating a PRD-specific task list

## Goal

Creating a step-by-step task list in Markdown format based on an existing, feature-specific Product Requirements Document (PRD). The task list will guide a developer through full implementation of the feature.

## Steps

1. **Trigger**: The user will ask you to generate a task list based on the PRD for a specified feature
2. **Review PRD**: read and analyze the PRD, noting explicit or implied implementation details
3. **Create task list file**
    - *Location*: `/pm/tasks/`
    - Create PRD-specific task list Markdown file, per filename format above
4. **List Tasks**:
    - Generate all high-level tasks needed to implement the feature outlined in the PRD
    - *Task count*: Aim for 3 to 7 tasks, where each task can readily be completed via a handful of manageable sub-tasks
    - Give each task an id that is unique (for the feature), in this format: `T1` 
5. **List Sub-Tasks**: 
    - Decompose each task into discrete sub-tasks
    - Ensure sub-tasks collectively complete the task
    - Ensure sub-tasks address implementation details outlined in or implied by the PRD
    - If the task is simple enough to be completed in one step, don't list sub-tasks
    - Give each sub-task an id like this: `T1.1`
6. **Identify Relevant Files:**
    - Based on the PRD, tasks, sub-tasks, identify files that will need to be created or modified.
    - List these files under the `Relevant Files` section
7. **Generate Final Output:** Combine tasks, sub-tasks, relevant files, and notes into the task list Markdown file, per the file structure below, and save file

## Target Audience

Assume the primary reader of the task list is a **junior developer** who will implement the feature.

## Output

- **Format:** Markdown (`.md`)
- **Location:** `/pm/tasks/`
- **Filename:** `tasks-prd-{feature-name}.md` (e.g., `tasks-prd-user-profile-editing.md`)

## Task List File Structure

The generated task list must follow this structure:

```markdown
## Relevant Files

- `path/to/file.ts`: Brief comment on relevance
- ...

### Notes

- Any high-value implementation notes (leave empty, if none)

## Tasks

- [ ] T1 Task name: short description
  - [ ] T1.1 Sub-task name: short description
  - [ ] T1.2 Sub-task name: short description
- [ ] T2 Task name: short description
  - [ ] T2.1 Sub-task name: short description
- [ ] T3 Simple task: short description
```