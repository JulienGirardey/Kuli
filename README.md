# 🚀 Kuli - Social Media Platform

Un projet fullstack moderne avec **React 18 + Vite** (frontend) et **Express.js** (backend).

## 📋 Table des Matières

- [Vue d'ensemble](#vue-densemble)
- [Structure du projet](#structure-du-projet)
- [Dépendances](#dépendances)
- [Installation](#installation)
- [Démarrage](#démarrage)
- [Pages disponibles](#pages-disponibles)
- [Architecture frontend](#architecture-frontend)
- [Prochaines étapes](#prochaines-étapes)

---

## 👁️ Vue d'ensemble

**Kuli** est une plateforme sociale comprenant:
- 🏠 **MainPage**: Feed de posts avec stories et navigation
- 🔐 **AuthPages**: Connexion (Login) et inscription (Register)
- 💬 **MessagesPage**: Interface de chat/messagerie
- 👤 **ProfilePage**: Profil utilisateur avec édition

### Stack Technique

**Frontend:**
- React 18 avec Vite (fast dev server)
- React Router pour la navigation entre pages
- CSS pur (pas de preprocesseur, style simple et lisible)

**Backend:**
- Express.js (à démarrer prochainement)
- Node.js 20+

---

## 📁 Structure du Projet

```
kuli/
├── Front/                          # Frontend React + Vite
│   ├── src/
│   │   ├── pages/                  # Pages principales
│   │   │   ├── MainPage.jsx        # Page d'accueil (feed + stories)
│   │   │   ├── MainPage.css
│   │   │   ├── LoginPage.jsx       # Page de connexion
│   │   │   ├── RegisterPage.jsx    # Page d'inscription
│   │   │   ├── AuthPages.css       # Styles pour login/register
│   │   │   ├── MessagesPage.jsx    # Interface de messagerie
│   │   │   ├── MessagesPage.css
│   │   │   ├── ProfilePage.jsx     # Profil utilisateur
│   │   │   └── ProfilePage.css
│   │   │
│   │   ├── components/             # Composants réutilisables
│   │   │   ├── StoryBar.jsx        # Barre de stories (haut)
│   │   │   ├── StoryBar.css
│   │   │   ├── Post.jsx            # Composant post
│   │   │   ├── Post.css
│   │   │   ├── NavBar.jsx          # Navigation (bas)
│   │   │   └── NavBar.css
│   │   │
│   │   ├── App.jsx                 # Composant racine avec routing
│   │   ├── App.css                 # Styles globaux
│   │   ├── main.jsx                # Point d'entrée
│   │   └── index.html
│   │
│   ├── package.json                # Dépendances frontend
│   ├── vite.config.js              # Config Vite
│   └── README.md                   # Documentation composants
│
├── Back/                           # Backend Express (à développer)
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── README.md                       # Ce fichier
└── .gitignore                      # Fichiers à ignorer en git
```

---

## 📦 Dépendances

### Frontend

**Production:**
| Package | Version | Utilité |
|---------|---------|---------|
| `react` | ^18 | Librairie UI |
| `react-dom` | ^18 | DOM rendering |
| `react-router-dom` | ^6 | Navigation entre pages (login → messages → profile) |

**Dev:**
| Package | Version | Utilité |
|---------|---------|---------|
| `vite` | ^8.1 | Build tool ultra-rapide |
| `@vitejs/plugin-react` | ^4 | Plugin React pour Vite |

**Pourquoi Vite?**
- ⚡ Démarrage du serveur dev en <100ms
- 🔥 Hot reload instantané
- 📦 Build optimisée pour production
- Alternative moderne à Create React App

**Pourquoi React Router?**
- 🔗 Navigation fluide entre pages sans rechargement
- 📍 URLs avec historique (permet back/forward)
- 🚦 Gestion d'état de navigation centralisée

### Backend

À compléter selon vos besoins. Suggestions:
- `express` - Framework web
- `mongoose` / `sequelize` - ORM pour DB
- `jwt` / `passport` - Authentification
- `cors` - Cross-Origin requests

---

## ⚙️ Installation

### Prérequis
- **Node.js** 20+ ([Télécharger](https://nodejs.org/))
- **npm** 10+ (inclus avec Node.js)

### Étape 1: Clone le repo
```bash
git clone <repo-url>
cd kuli
```

### Étape 2: Installation frontend
```bash
cd Front
npm install
```

### Étape 3: Installation backend (optionnel pour maintenant)
```bash
cd ../Back
npm install
```

---

## 🎯 Démarrage

### Frontend uniquement (pour tester l'UI)

```bash
cd Front
npm run dev
```

✅ Accédez à `http://localhost:5173`

**Naviguez entre les pages:**
- Home (/) - Page d'accueil avec feed
- Login (/login) - Connexion
- Register (/register) - Inscription
- Messages (/messages) - Chat interface
- Profile (/profile) - Profil utilisateur

### Frontend + Backend (une fois le backend prêt)

**Terminal 1 - Backend:**
```bash
cd Back
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd Front
npm run dev
```

---

## 📱 Pages Disponibles

### 🏠 MainPage (/)
**Affiche:**
- Barre de stories en haut (avatars horizontaux)
- Feed de posts avec contenu
- Navigation en bas (Home, Messages, Profile)

**Points clés:**
- Données mockées dans `MOCK_POSTS` et `MOCK_STORIES`
- À remplacer par des appels API quand le backend sera prêt
- Click sur Like/Comment/Share = console.log (à implémenter)

### 🔐 LoginPage (/login)
**Formulaire:**
- Champ email/username
- Champ mot de passe
- Lien vers Register
- Validation basique (champs requis)

**Comportement actuel:**
- Mock: accepte n'importe quels identifiants
- À connecter à l'API `/api/auth/login`

### 📝 RegisterPage (/register)
**Formulaire:**
- Champ username
- Champ email
- Mot de passe + confirmation
- Validation (password > 6 caractères)

**Comportement actuel:**
- Mock: crée un utilisateur fictif
- À connecter à l'API `/api/auth/register`

### 💬 MessagesPage (/messages)
**Interface:**
- Panneau gauche: Liste des conversations
- Panneau droit: Chat actuel
- Messages groupés (propres vs autres)
- Input pour écrire des messages

**Comportement actuel:**
- Mock: messages fictifs seulement
- À remplacer par des WebSockets ou polling

### 👤 ProfilePage (/profile)
**Affiche:**
- Image de couverture
- Avatar utilisateur
- Infos (nom, bio, lieu, site web)
- Statistiques (followers, following, posts)
- Formulaire d'édition (bouton "Modifier le profil")
- Liste des posts de l'utilisateur

**Comportement actuel:**
- Édition fonctionne localement
- À persister dans la DB quand le backend sera prêt

---

## 🏗️ Architecture Frontend

### 1️⃣ Routing (App.jsx)
```jsx
// App.jsx orchestre la navigation
<BrowserRouter>
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/messages" element={<MessagesPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
</BrowserRouter>
```

### 2️⃣ Composants Réutilisables
- **StoryBar.jsx** - Barre de stories (utilisable partout)
- **Post.jsx** - Affichage d'un post (utilisable partout)
- **NavBar.jsx** - Navigation (attachée au bas, utilise React Router)

### 3️⃣ Pages (Composants "Conteneurs")
- Gèrent l'état local
- Font les appels API
- Composent les composants réutilisables

### 4️⃣ Styling
- ✅ CSS pur (facile à comprendre)
- ✅ Fichiers séparés par composant
- ✅ Variables CSS pour couleurs/espacements
- ❌ Pas de preprocesseur (K.I.S.S principle)

---

## 🔌 Intégration API (Prochaines Étapes)

### Endpoints à Créer

**Authentification:**
```
POST   /api/auth/login      { email, password } → { token, user }
POST   /api/auth/register   { username, email, password } → { user }
GET    /api/auth/profile    Headers: { Authorization: Bearer token } → { user }
```

**Posts/Feed:**
```
GET    /api/posts           → [{ id, author, content, likes, ... }]
POST   /api/posts           { content, image? } → { post }
POST   /api/posts/:id/like  → { post }
POST   /api/posts/:id/comment { text } → { comment }
```

**Messages:**
```
GET    /api/messages/conversations → [{ id, username, lastMessage, ... }]
GET    /api/messages/:conversationId → [{ id, sender, text, ... }]
POST   /api/messages/:conversationId { text } → { message }
```

**Profil:**
```
GET    /api/users/:username     → { user }
PUT    /api/users/:username     { bio, location, ... } → { user }
GET    /api/users/:username/posts → [{ posts }]
```

### Remplacer les Mocks

**Avant (mock):**
```jsx
const [posts, setPosts] = useState(MOCK_POSTS)
```

**Après (API):**
```jsx
useEffect(() => {
  fetch('/api/posts')
    .then(r => r.json())
    .then(setPosts)
}, [])
```

---

## 💡 Comment Modifier le Code

### Je veux changer les couleurs
→ Ouvrez `Front/src/App.css` et modifiez les variables CSS

### Je veux ajouter un nouveau bouton à la NavBar
→ Modifiez `Front/src/components/NavBar.jsx` (facile: c'est juste du JSX)

### Je veux ajouter une nouvelle page
→ Créez `Front/src/pages/NewPage.jsx`, puis ajoutez une route dans `App.jsx`

### Je veux connecter l'authentification réelle
→ Dans `LoginPage.jsx`, remplacez le `console.log` par un `fetch('/api/auth/login')`

### Je veux comprendre un composant
→ Lisez le bloc de commentaires en haut du fichier (doc complète)

---

## 📝 Notes Importantes

### Mock Data vs Real API
Toutes les pages ont des données `MOCK_*`. Ces données:
- ✅ Permettent de tester l'UI sans backend
- ✅ Servent de spécification pour l'API (format attendu)
- ⚠️ Doivent être remplacées quand l'API sera prête

### Authentification
Actuellement, l'authentification est mockée. `localStorage` est utilisé pour tester le flux.

**À implémenter:**
- Vrai appel API
- JWT tokens
- Refresh tokens
- Logout

### Responsive Design
Toutes les pages sont conçues mobile-first. Testez sur:
- Mobile (375px)
- Tablet (768px)
- Desktop (1024px+)

---

## 🎯 Prochaines Étapes

### Semaine 1: Backend Basics
- [ ] Configurer Express + DB (MongoDB/PostgreSQL)
- [ ] Créer les modèles (User, Post, Message)
- [ ] Implémenter l'authentification

### Semaine 2: API Endpoints
- [ ] Endpoints d'authentification
- [ ] Endpoints de posts
- [ ] Endpoints de messagerie

### Semaine 3: Connexion Frontend
- [ ] Remplacer tous les mocks par des appels API
- [ ] Tester le flux complet
- [ ] Gestion d'erreurs

### Semaine 4: Polish
- [ ] Tests unitaires
- [ ] Validation des données
- [ ] Permissions/Authorization

---

## 🐛 Troubleshooting

**"npm: command not found"**
→ Node.js n'est pas installé. [Téléchargez-le](https://nodejs.org/)

**"Port 5173 déjà utilisé"**
→ Changez le port: `npm run dev -- --port 3000`

**Les styles ne s'appliquent pas**
→ Vérifiez que vous importez le fichier `.css` dans le composant

**Erreur CORS**
→ À attendre quand on lancera le backend. Le frontend y proxiera les requêtes.

---

## 📞 Questions?

Chaque fichier `.jsx` est **bien commenté**. Cherchez les zones "À implémenter" pour savoir par où commencer.

Bon développement! 🎉
