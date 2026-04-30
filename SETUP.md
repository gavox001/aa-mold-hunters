# Guía de Configuración - Aamold Hunter

## Requisitos Previos

1. **Node.js** >= 22.0.0
2. **pnpm** >= 10.8.0
3. **PostgreSQL** >= 16

## Opciones de PostgreSQL

### Opción A: PostgreSQL nativo (Recomendado)

#### Paso 1: Descargar e instalar PostgreSQL
1. Ve a https://www.postgresql.org/download/windows/
2. Descarga el instalador para Windows
3. Ejecuta el instalador y sigue los pasos:
   - Puerto: 5432 (default)
   - Usuario: postgres
   - Contraseña: postgres
   - Selecciona "pgAdmin 4" para administración

#### Paso 2: Crear la base de datos

**Opción 1: Usando pgAdmin 4 (GUI)**
1. Abre pgAdmin 4
2. Conecta al servidor PostgreSQL
3. Clic derecho en "Databases" → "Create" → "Database"
4. Nombre: `aamold_hunter_db`
5. Guardar

**Opción 2: Usando SQL Shell (psql)**
1. Abre "SQL Shell (psql)" desde el menú Inicio
2. Presiona Enter para usar valores por defecto
3. Contraseña: `postgres`
4. Ejecuta:
```sql
CREATE DATABASE aamold_hunter_db;
\q
```

### Opción B: Usando WAMP (si ya lo tienes)

1. Asegúrate que el servicio PostgreSQL esté corriendo:
   ```
   services.msc → Buscar servicio PostgreSQL → Verificar estado "Running"
   ```

2. Abre WAMP → Clic en el icono en la bandeja → PostgreSQL → PostgreSQL Console

3. Ejecuta:
```sql
CREATE DATABASE aamold_hunter_db;
```

## Configuración del Proyecto

### Paso 1: Instalar dependencias
```bash
# Clonar o navegar al proyecto
cd aamold-hunter

# Instalar pnpm (si no lo tienes)
npm install -g pnpm@10.8.0

# Instalar dependencias
pnpm install
```

### Paso 2: Configurar variables de entorno
```bash
# Copiar archivo de ejemplo
copy .env.example .env.local

# Editar .env.local con tu configuración
```

Ejemplo de `.env.local`:
```env
# Application
NODE_ENV=development
PORT=3001

# Database (ajusta según tu configuración de PostgreSQL)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/aamold_hunter_db?schema=public"

# JWT (cambia estos valores en producción)
JWT_SECRET="tu-secreto-muy-seguro-cambia-esto"
NEXTAUTH_SECRET="otro-secreto-muy-seguro-cambia-esto"

# URLs
NEXTAUTH_URL="http://localhost:3000"
API_URL="http://localhost:3001"
CORS_ORIGIN="*"
```

### Paso 3: Generar Prisma Client
```bash
pnpm db:generate
```

### Paso 4: Ejecutar migraciones
```bash
pnpm db:migrate
```

Esto creará todas las tablas necesarias:
- `users`
- `accounts`
- `sessions`
- `verification_tokens`

### Paso 5: Seed de datos (opcional)
```bash
pnpm db:seed
```

Esto creará usuarios de prueba:
- admin@aamold-hunter.com / admin (rol: ADMIN)
- user@aamold-hunter.com / user (rol: USER)

## Iniciar Desarrollo

### Iniciar backend (API)
```bash
pnpm dev --filter api
```
URL: http://localhost:3001
Documentación API: http://localhost:3001/api/docs

### Iniciar frontend (Web)
En otra terminal:
```bash
pnpm dev --filter web
```
URL: http://localhost:3000

### O iniciar ambos
```bash
pnpm dev
```

## Verificación

Abre tu navegador y verifica:

1. **Frontend:** http://localhost:3000
2. **Backend:** http://localhost:3001
3. **API Docs:** http://localhost:3001/api/docs
4. **Login:** http://localhost:3000/auth/login
5. **Dashboard:** http://localhost:3000/dashboard (requiere login)

## Solución de Problemas

### Error: "Cannot find module '@prisma/client'"
```bash
pnpm db:generate
```

### Error: "Database aamold_hunter_db does not exist"
Crear la base de datos manualmente (ver Paso 2 arriba)

### Error: "password authentication failed"
Verificar contraseña en `DATABASE_URL` en archivo `.env.local`

### Error: "connection refused"
Verificar que PostgreSQL esté corriendo:
```
services.msc → PostgreSQL → Start
```

## Comandos Útiles

```bash
# Ver todas las migraciones
pnpm db:migrate:status

# Abrir Prisma Studio (GUI de base de datos)
pnpm db:studio

# Reset de base de datos (⚠️ CUIDADO: borra todo)
pnpm db:migrate:reset

# Build para producción
pnpm build

# Ejecutar tests
pnpm test
```