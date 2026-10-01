# Continuous Integration

The repository uses GitHub Actions to validate every push and pull request.

## Workflow

The workflow lives at `.github/workflows/ci.yml` and runs on `ubuntu-latest` with Node.js 22.

Each run performs these steps in order:

1. Checks out the repository.
2. Restores the npm cache through `actions/setup-node`.
3. Installs the exact lockfile dependency graph with `npm ci`.
4. Runs ESLint with `npm run lint`.
5. Runs the strict TypeScript project check with `npm run typecheck`.
6. Runs the Vitest suite with `npm test`.
7. Builds the production bundle with `npm run build`.

A pull request should not be merged while this workflow is failing. The workflow uses read-only repository permissions and cancels superseded runs for the same branch or pull request.

## Local Equivalent

Run the same validation sequence locally from the repository root:

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

For iterative development, use `npm run test:watch` while changing application code.

## Updating CI

When adding a new required quality gate:

1. Add or update the corresponding npm script in `package.json`.
2. Add the command to `.github/workflows/ci.yml`.
3. Update this document and the root README if the developer workflow changes.
4. Run the full local validation sequence before opening a pull request.
