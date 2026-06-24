# Kuli - Express + React Setup

## Structure du projet

```
.
├── Back/          # Backend Express
│   ├── server.js
│   ├── package.json
│   └── .env
└── Front/         # Frontend React (Vite)
    ├── src/
    │   ├── main.jsx
    │   └── App.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Prérequis

- **Node.js** 18+ avec npm

## Installation & Démarrage

### Backend (Express - Port 5000)
```bash
cd Back
npm install
npm run dev    # ou npm start
```

**Routes disponibles:**
- `GET /api/health` - Health check

### Frontend (React Vite - Port 3000)
```bash
cd Front
npm install
npm run dev
```

Le frontend proxy automatiquement les requêtes `/api` vers le backend (port 5000).

## Développement

- **Backend**: Hot reload activé avec `node --watch`
- **Frontend**: Hot reload automatique avec Vite
- **Proxy**: Les appels API `/api/*` du frontend sont redirigés vers le backend

## Build

```bash
# Frontend (generate dist/)
cd Front && npm run build
```
