**File Purpose**: Guidelines for executing PRD-specific tasks and updating the task list to track progress

## Goal

Execute the next uncompleted sub-task per the task list for a given feature-specific PRD and update task status in the task list markdown file

## Steps

1. The user will ask you to comment or continue with a target task

2. Identify the next uncompleted sub-task for that task

3. Complete the sub-task

4. Do not yet attempt further sub-tasks

5. After sub-task completion:
   
    - Mark it as done in the PRD-specific task list by changing `[ ]` to `[x]`.
    - If **all** subtasks for a parent task are now done, also mark the **parent task** as done.
    - Add any new sub-tasks if it is now clear they are needed to complete the parent task
    - In the `Relevant Files` section of the PRD task list, list every file created or modified in the format: File-name: one-line purpose description

6. Optional: If (and only if) you have gathered critical or high-value learnings during your development work, condense them into a succinct note or comment, and add them to `@/pm/dev-notes.md`

7. Your next step depends on what the user told you for "--task-depth": 
   
    - --task-depth = 2 (**Sub-task**) or not specified: Stop and wait for the user’s approval to continue with the next sub-task 
    - --task-depth = 1 (**Main task**): Loop back up to step 2 and continue doing sub-tasks until the main task is completed. After that, stop and wait for the user's approval to continue with the next main task

## Key Reference Files

- `@/pm/tasks/F{##}-prd-{feature-name}.md`

- `@/pm/tasks/F{##}-tasks-{feature-name}.md`

- `@/pm/design/architecture.md`

- `@/pm/design/components-guide.md `

- `@/pm/design/design-brief.md `

- `@/pm/design/design-tokens.json`

- `@/pm/dev-notes.md`