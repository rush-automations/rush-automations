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

## Environment Variables (Netlify)

Go to Site settings > Environment variables in Netlify:

| Variable | How to acquire | Required |
|----------|---------------|----------|
| `WORKOS_CLIENT_ID` | WorkOS Dashboard > Organizations > API Keys | Yes |
| `WORKOS_API_KEY` | WorkOS Dashboard > Organizations > API Keys | Yes |
| `STRIPE_PUBLIC_KEY` | Stripe Dashboard > Developers > API keys | Yes |
| `STRIPE_SECRET_KEY` | Stripe Dashboard > Developers > API keys | Yes |
| `NETLIFY_SITE_URL` | Netlify site settings / deploy URL | Yes |

Setup:
1. Create account at https://workos.com
2. Create organization; copy Client ID and API Key
3. Create Stripe account; copy publishable and secret keys
4. Add all keys in Netlify site settings > Environment variables
5. Redeploy site

## Suite Integration

This is the main identity and billing hub for the Rush workplace productivity suite. It links to:
- Tribe Platform (messages/credits)
- Drive Draw (Google-linked drawings, AI interaction at cost + 20%)

Shared WorkOS auth: users in one app are users in all. Credits are user-level, priced at $10 per 1000.

## License

MIT
