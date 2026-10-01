# Accretion Client

The React and TypeScript client for the Accretion AI chat platform, powered by Vite.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Continuous Integration

Every push and pull request runs the GitHub Actions workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml). It installs the lockfile dependencies, runs ESLint, checks TypeScript, and builds the production bundle.

See [docs/ci.md](docs/ci.md) for the workflow details and the equivalent local validation commands.

## Structure

```text
src/
  app/          App-level composition
  components/   Reusable UI and layout components
  pages/        Route-level screens
  types/        Shared TypeScript types
  utils/        Framework-agnostic helpers
```

Keep feature-specific code together as the app grows. Promote code into shared folders only when it is reused by more than one feature.
