**File Purpose**: Project overview, setup instructions, and links to essential documentation

# 1. Project Overview

**What is it?**
- A Next.js-based web app for creative ideation
- Inspired by Brian Eno's 'Oblique Strategies' but with a modern, interactive approach
- Minimalist design with an understated wow factor - sleek and classy with earthy, forest-like toning

**Who is it for?**
- Ambient music producers and other digital creatives
- Initially focused on the creator's own creative process
- Anyone seeking inspiration or guidance during their creative sessions

**What does it do?**
- Generates ideation prompts that guide, spark, and channel the creative process
- Allows users to collaborate with the app (via LLM API) to evolve prompts until something inspiring is found
- Displays the current prompt in a large card with colored buttons that evolve the prompt in different directions (wild, pure, earthy, classy, emotive, complex)
- Enables users to save favorite prompts locally and manage their collection

# 2. Tech Stack

- Next.js 15
- React 19
- LLM API integration for prompt generation
- Local storage for saving favorites
- Mobile-first responsive design

# 3. Installation

**Core System Requirements**
- Node.js (version TBD)
- npm or pnpm package manager
- Modern web browser

**Repository Cloning**
- `git clone [repository-url]`
- `cd [project-directory]`

**Dependencies**
- `npm install` or `pnpm install` to install all dependencies

**Environment**
- `.env.local`: untracked secrets and local overrides

# 4. Usage

**Development Commands**
- `npm run dev` or `pnpm dev`: Start development server
- `npm run build` or `pnpm build`: Build for production
- `npm start` or `pnpm start`: Start production server
- `npm test` or `pnpm test`: Run tests

**Utility Scripts**
- `npm run concat-docs`: Combines markdown and text files into a single file (useful for LLM context)
  - Default output: all_docs.txt
  - Recursively processes files up to 9 levels deep
  - See concat_files.README.md for more options

- `npm run project-tree`: Generates a text file listing all files in the project
  - Output: project_tree.txt
  - Shows complete directory structure with files

**Common Operations**
- Generating new prompts
- Evolving prompts in different creative directions
- Saving favorite prompts
- Managing saved prompts

# 5. Project Structure Overview

```structure
project_name/
	.vscode/
	pm/
	public/
	src/
	.env.local
	.gitignore
	package.json
	README.md
```

# 6. Development

**Code style & conventions**
- See markdown guides under `pm/guides/`

**Branch strategy**
- `main`: Production-ready code
- `develop`: Development branch
- Feature branches: `feature/[feature-name]`
- Bug fixes: `fix/[bug-description]`

**PR process**
- Create feature/fix branch from `develop`
- Implement changes and test locally
- Submit PR to `develop` branch
- Review, approve, and merge

# 7. Deployment

- Deployed to Vercel
- No authentication required (local storage only)
- Mobile-first design that also works well on larger screens
- Typically used as a tall, narrow window beside a DAW (Digital Audio Workstation)

# 8. API Documentation

- LLM API integration for prompt generation
- Local storage API for saving and retrieving favorites
- No authentication required (local storage only)

# 9. License & Copyright

- License type: TBD
- Copyright: © 2025
