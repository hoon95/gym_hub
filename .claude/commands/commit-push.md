Review changed files, write a commit message, and push to the remote repository.

## Steps

1. Run `git status` to check changes
2. Run `git diff --staged` and `git diff` to understand the changes
3. Run `git log --oneline -5` to match recent commit message style
4. Analyze the changes and write a commit message in Korean:
   - Use prefix: feat/fix/refactor/style/docs/chore
   - Format: `prefix: summary of changes`
5. Stage relevant files and create the commit
6. Push the current branch to remote (`git push` or `git push -u origin <branch>`)

## Rules

- Never commit sensitive files (`.env`, credentials, etc.)
- Stage specific files individually instead of `git add .`
- Confirm the commit message with the user before committing
