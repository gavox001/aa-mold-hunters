# Aamold Hunter

Full-stack monorepo application built with Turborepo, Next.js 15, NestJS 11, PostgreSQL 17, and Prisma 6.

## 🏗️ Architecture

```
aa-mold-hunters/
├── apps/
│   ├── web/          # Next.js 15 Frontend
│   └── api/          # NestJS 11 Backend
├── packages/
│   ├── database/     # Prisma ORM & Database Client
│   ├── ui/           # Shared UI Components (shadcn/ui)
│   ├── eslint-config/# Shared ESLint Configurations
│   ├── typescript-config/  # Shared TypeScript Configurations
│   └── tailwind-config/    # Shared Tailwind Configuration
├── docker-compose.yml       # PostgreSQL 17 + Redis
└── turbo.json              # Turborepo Pipeline Configuration
```

## 🚀 Tech Stack

### Frontend
- **Next.js 15.2** - React Framework with App Router
- **Tailwind CSS 4.2** - Utility-first CSS Framework
- **shadcn/ui** - Accessible UI Components
- **TanStack Query** - Data Fetching & Caching
- **Zustand** - State Management
- **NextAuth.js v5** - Authentication

### Backend
- **NestJS 11.1** - Node.js Framework
- **Prisma 6.6** - Database ORM
- **PostgreSQL 17** - Relational Database
- **Redis** - Session & Cache Store
- **Swagger/OpenAPI** - API Documentation
- **JWT** - Token Authentication

### Infrastructure
- **Turborepo 2.7** - Monorepo Build System
- **pnpm 10.8** - Package Manager
- **Docker** - Containerization
- **GitHub Actions** - CI/CD Pipelines
- **Vitest + Playwright** - Testing

## 🛠️ Prerequisites

- Node.js >= 22.0.0
- pnpm >= 10.8.0
- Docker & Docker Compose
- Git

## 📦 Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd aa-mold-hunters
```

2. **Enable pnpm:**
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

3. **Install dependencies:**
```bash
pnpm install
```

4. **Set up environment variables:**
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

5. **Start PostgreSQL & Redis:**
```bash
docker-compose up -d
```

6. **Generate Prisma Client:**
```bash
pnpm db:generate
```

7. **Run database migrations:**
```bash
pnpm db:migrate
```

8. **Seed the database (optional):**
```bash
pnpm db:seed
```

## 🏃 Development

### Start all applications
```bash
pnpm dev
```

### Start individual applications
```bash
# Frontend only
pnpm --filter @aa-mold-hunters/web dev

# Backend only
pnpm --filter @aa-mold-hunters/api dev
```

### Available URLs
- **Web:** http://localhost:3000
- **API:** http://localhost:3001
- **API Docs:** http://localhost:3001/api/docs

## 📜 Scripts

### Database
- `pnpm db:generate` - Generate Prisma Client
- `pnpm db:migrate` - Run migrations in development
- `pnpm db:migrate:deploy` - Deploy migrations in production
- `pnpm db:push` - Push schema changes (development only)
- `pnpm db:studio` - Open Prisma Studio
- `pnpm db:seed` - Seed the database

### Building
- `pnpm build` - Build all applications
- `pnpm build --filter @aa-mold-hunters/web` - Build web only
- `pnpm build --filter @aa-mold-hunters/api` - Build API only

### Testing
- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:e2e` - Run E2E tests with Playwright
- `pnpm test:e2e:ui` - Run E2E tests with UI

### Linting
- `pnpm lint` - Lint all applications
- `pnpm format` - Format code with Prettier

## 🧪 Testing

### Unit Tests (Vitest)
```bash
pnpm test
```

### E2E Tests (Playwright)
```bash
# Install Playwright browsers (first time only)
pnpx playwright install

# Run E2E tests
pnpm test:e2e

# Run with UI
pnpm test:e2e:ui
```

## 🚀 Deployment

### Environment Variables

Ensure these are set in your production environment:

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# Authentication
JWT_SECRET=your-jwt-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://your-domain.com

# Redis (optional)
REDIS_URL=redis://host:6379

# CORS
CORS_ORIGIN=https://your-domain.com
```

### Database Migrations

Before deploying, run migrations:

```bash
# Production
pnpm db:migrate:deploy
```

### Build & Deploy

The CI/CD pipeline is configured with GitHub Actions:

- **CI:** Runs on PRs (lint, type-check, test, build)
- **E2E:** Runs on main branch (Playwright tests)
- **Deploy:** Runs on main branch (builds & deploys)

## 📚 Project Structure

### Frontend (`apps/web`)
```
src/
├── app/               # Next.js App Router
│   ├── (auth)/        # Auth routes group
│   ├── api/           # API routes (NextAuth)
│   ├── dashboard/     # Protected routes
│   └── layout.tsx     # Root layout
├── components/        # React components
│   └── ui/            # shadcn/ui components
├── lib/               # Utilities & configs
│   ├── auth.ts        # NextAuth config
│   ├── api.ts         # API client
│   └── query-client.ts # TanStack Query
└── types/             # TypeScript types
```

### Backend (`apps/api`)
```
src/
├── auth/              # Authentication module
├── users/             # Users module
├── health/            # Health checks
├── database/          # Database module
├── config/            # Environment config
├── app.module.ts      # Root module
└── main.ts            # Entry point
```

## 🔒 Authentication Flow

1. **Registration:** User registers via `/auth/register`
2. **Login:** User logs in via NextAuth.js credentials provider
3. **JWT:** Server issues JWT access & refresh tokens
4. **Session:** JWT stored in HTTP-only cookie
5. **API Calls:** JWT attached to API requests via `Authorization` header
6. **Validation:** API validates JWT on protected routes

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Reset Docker containers
docker-compose down -v
docker-compose up -d

# Re-run migrations
pnpm db:migrate:deploy
```

### Prisma Client Issues
```bash
# Regenerate client
pnpm db:generate

# Clear cache
rm -rf node_modules/.cache
turbo run clean
pnpm install
```

### Build Failures
```bash
# Clean & rebuild
pnpm clean
pnpm install
pnpm build
```

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make changes & commit: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

### Commit Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Maintenance

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- [Turborepo](https://turbo.build/)
- [Next.js](https://nextjs.org/)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [shadcn/ui](https://ui.shadcn.com/)
