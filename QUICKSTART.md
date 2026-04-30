# Guía Rápida - Aamold Hunter

## ⚡ Inicio Rápido

### Opción 1: Con Docker (Recomendado para producción)
```bash
# Instalar Docker Desktop para Windows
# https://www.docker.com/products/docker-desktop

# Luego ejecutar:
docker compose up -d
```

### Opción 2: Sin Docker (Desarrollo Local con PostgreSQL)

#### Requisitos:
- PostgreSQL instalado y corriendo (WAMP/XAMPP incluye PostgreSQL)
- Node.js >= 22.0.0
- pnpm >= 10.8.0

#### Pasos:

1. **Verificar PostgreSQL está corriendo:**
```powershell
Get-Service | Where-Object {$_.Name -like "*postgre*"}
# Debe mostrar "Running"
```

2. **Crear base de datos:**
```bash
# Usando psql (desde PowerShell con privilegios)
$env:PGPASSWORD = "postgres"
psql -U postgres -c "CREATE DATABASE aamold_hunter_db;"
```

3. **Instalar dependencias:**
```bash
pnpm install
```

4. **Generar Prisma Client:**
```bash
pnpm db:generate
```

5. **Ejecutar migraciones:**
```bash
pnpm db:migrate
```

6. **Iniciar desarrollo:**
```bash
pnpm dev
```

## 🌐 URLs

| Servicio | URL |
|----------|-----|
| Frontend (Next.js) | http://localhost:3000 |
| Backend API (NestJS) | http://localhost:3001 |
| API Documentation | http://localhost:3001/api/docs |

## 📋 Scripts Útiles

```bash
# Desarrollo
pnpm dev                    # Iniciar todas las apps
pnpm dev --filter web      # Solo frontend
pnpm dev --filter api      # Solo backend

# Base de datos
pnpm db:generate           # Generar Prisma Client
pnpm db:migrate           # Ejecutar migraciones
pnpm db:push              # Push schema (desarrollo)
pnpm db:studio            # Abrir Prisma Studio

# Build
pnpm build                # Build todas las apps
pnpm type-check          # Verificar tipos

# Testing
pnpm test                # Tests unitarios
pnpm test:e2e           # Tests E2E
```

## 🔧 Solución de Problemas

### Error: "Cannot find module '@prisma/client'"
```bash
pnpm db:generate
```

### Error: "Database does not exist"
```bash
# Crear manualmente
psql -U postgres -c "CREATE DATABASE aamold_hunter_db;"
```

### Error: "Connection refused"
- Verificar PostgreSQL está corriendo
- Verificar credenciales en `.env.local`
- Puerto por defecto: 5432

## 📝 Configuración de Variables de Entorno

Archivo `.env.local`:
```env
# Database (PostgreSQL local)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/aamold_hunter_db?schema=public"

# JWT
JWT_SECRET="tu-secreto-seguro"
NEXTAUTH_SECRET="tu-secreto-nextauth"

# CORS
CORS_ORIGIN="*"

# API URL
API_URL="http://localhost:3001"
```