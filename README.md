# Rush Automations

A modern React application built with Vite, TypeScript, and Tailwind CSS. This is a holding company for workplace software solutions.

## Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + Playwright
- **Linting/Formatting**: Biome

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:8080`.

### Other Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm build:dev` | Build in development mode |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run linting with Biome |
| `pnpm lint:fix` | Fix linting issues automatically |
| `pnpm test` | Run unit tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm playwright` | Run E2E tests |

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── *.tsx        # Feature components
├── hooks/           # Custom React hooks
├── lib/             # Utilities (utils.ts)
├── pages/           # Route pages
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Code Quality

This project uses Biome for linting and formatting with strict rules:

- **Strict TypeScript**: Full type checking enabled
- **Strict Linting**: Comprehensive rule set for code quality
- **Formatting**: Opinionated code formatting

Run linting:

```bash
# Check for issues
pnpm lint

# Auto-fix issues
pnpm lint:fix
```

## License

MIT