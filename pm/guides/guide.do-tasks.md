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

6. Stop and wait for the user’s approval to continue with the next sub-task

## Task List File

- **Location**: `/pm/tasks/`

- **Filename**: `tasks-prd-{feature-name}.md`