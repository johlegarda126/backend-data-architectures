# Academic Record API

Microservicio Node.js, Express, TypeScript y PostgreSQL (Neon).

## 1. Configuración Inicial
Crea un archivo `.env` en la raíz con:
```env
PORT=3000
DATABASE_URL="postgresql://<usuario>:<password>@<host>/<database>?sslmode=require"
```

## 2. Instalación
Instala las dependencias excluidas por el `.gitignore`:
```bash
npm install
```

## 3. Ejecución
**Modo Desarrollo** (servidor en `http://localhost:3000` con auto-recarga):
```bash
npm run dev
```

**Modo Producción**:
```bash
npm run build
npm start
```
