# 🚀 Deployment Guide

This project is set up for a streamlined development and deployment workflow within the Firebase Studio environment.

## Git Workflow Scripts

A set of `npm` scripts are provided to simplify Git operations. You should use these scripts in the terminal instead of manual `git` commands to ensure consistency.

-   **`npm run dev`**: Starts the Next.js development server.
-   **`npm run deploy`**: Lints, builds, and pushes your code for a full deployment.
-   **`npm run quick-deploy`**: Quickly commits and pushes your changes without running checks. Ideal for saving work in progress.
-   **`npm run sync`**: Pulls the latest changes from the remote repository and pushes your local changes.

### Common Workflow

1.  Make your code changes.
2.  Run `npm run quick-deploy` to save your work.
3.  When ready to deploy, run `npm run deploy`.
