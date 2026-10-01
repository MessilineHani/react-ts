# React TypeScript Starter

A clean, production-oriented React and TypeScript starter powered by Vite.

## Commands

```bash
npm install
npm run dev
npm run test
npm run typecheck
npm run lint
npm run build
```

## Continuous Integration

Every push and pull request runs the GitHub Actions workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml). It installs the lockfile dependencies, runs ESLint, checks TypeScript, executes the Vitest suite, and builds the production bundle.

See [docs/ci.md](docs/ci.md) for the workflow details and the equivalent local validation commands.

## Structure

```text
src/
  app/          App-level composition
  components/   Reusable UI and layout components
  context/      React context providers
  hooks/        Reusable React hooks
  pages/        Route-level screens
  test/         Test setup and test files
  types/        Shared TypeScript types
  utils/        Framework-agnostic helpers
```

Keep feature-specific code together as the app grows. Promote code into shared folders only when it is reused by more than one feature.
