# 🚀 Iniciar Proyecto Aamold Hunter

## ✅ Estado Actual
- ✅ PostgreSQL configurado
- ✅ Migraciones aplicadas
- ✅ Datos de prueba creados
- ✅ Prisma Client generado

## 🏃 Iniciar Desarrollo

### Opción 1: Iniciar todo junto (Recomendado)
```bash
pnpm dev
```

### Opción 2: Iniciar por separado (Dos terminales)

**Terminal 1 - Backend:**
```bash
pnpm dev --filter api
```

**Terminal 2 - Frontend:**
```bash
pnpm dev --filter web
```

## 🌐 URLs Disponibles

| Servicio | URL | Descripción |
|----------|-----|-------------|
| Frontend | http://localhost:3000 | Aplicación Next.js |
| Backend API | http://localhost:3001 | API NestJS |
| API Docs | http://localhost:3001/api/docs | Swagger/OpenAPI |
| Login | http://localhost:3000/auth/login | Página de login |
| Register | http://localhost:3000/auth/register | Página de registro |
| Dashboard | http://://localhost:3000/dashboard | Panel (requiere login) |

## 👥 Usuarios de Prueba

| Email | Contraseña | Rol |
|-------|-----------|-----|
| admin@aamold-hunter.com | admin | ADMIN |
| user@aamold-hunter.com | user | USER |

## 📝 Cambiar Puerto (Opcional)

Si necesitas cambiar los puertos, edita `.env`:

```env
# Backend (API)
PORT=3001

# Frontend (Next.js)
# Cambiar en apps/web/package.json
```

## 🛑 Detener Servidores

Presiona `Ctrl + C` en las terminales para detener los servidores.

## 🔄 Reiniciar desde cero

Si necesitas reiniciar:

```bash
# Limpiar todo
pnpm clean

# Reinstalar dependencias
pnpm install

# Regenerar Prisma
pnpm db:generate

# Resetear base de datos
pnpm db:migrate:reset

# Seed de datos
$env:DATABASE_URL="postgresql://postgres:123456@localhost:5432/aamold_hunter_db?schema=public"; pnpm --filter database exec tsx ./src/seed.ts

# Iniciar
pnpm dev
```

## 📞 Soporte

Si tienes problemas:

1. Verificar PostgreSQL está corriendo:
   ```powershell
   Get-Service | Where-Object {$_.Name -like "*postgre*"}
   ```

2. Verificar conexión a base de datos:
   ```bash
   cd packages/database
   npx prisma studio
   ```

3. Ver logs de error en las terminales