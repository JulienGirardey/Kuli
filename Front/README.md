# 🎯 Kuli - Main Page Components Structure

Architecture des composants React pour la page principale de Kuli. Projet construit avec **React 18** + **Vite**.

## 📋 Structure du Projet

```
src/
├── components/              # Composants réutilisables
│   ├── StoryBar.jsx        # Barre de stories (haut)
│   ├── StoryBar.css
│   ├── Post.jsx            # Composant post/content-share
│   ├── Post.css
│   ├── NavBar.jsx          # Navigation (bas)
│   └── NavBar.css
├── pages/
│   ├── MainPage.jsx        # Page principale (orchestratrice)
│   └── MainPage.css
├── App.jsx                 # Composant racine
├── App.css                 # Styles globaux
└── main.jsx                # Point d'entrée
```

---

## 🧩 Composants

### 1. **StoryBar** (`components/StoryBar.jsx`)
Affiche les stories des utilisateurs en haut de la page.

**Props:**
- `stories`: `Array<{id, username, avatar}>`
- `onStoryClick`: `(storyId) => void` - Callback au clic

**Exemple d'utilisation:**
```jsx
<StoryBar 
  stories={stories}
  onStoryClick={(id) => console.log('Story clicked:', id)}
/>
```

**Points clés:**
- Scroll horizontal automatique
- Avatars avec gradient
- Hover effect avec zoom

---

### 2. **Post** (`components/Post.jsx`)
Composant principal pour afficher les posts/content-share.

**Props:**
- `id`: `number` - Identifiant unique
- `author`: `{name, username, avatar}`
- `content`: `string` - Texte du post
- `image`: `string` (optionnel) - URL de l'image
- `timestamp`: `string` - "2 hours ago"
- `likes`, `comments`, `shares`: `number`
- `onLike`, `onComment`, `onShare`: `(postId) => void` - Callbacks

**Exemple d'utilisation:**
```jsx
<Post
  id={1}
  author={{
    name: 'Alice Johnson',
    username: 'alice_j',
    avatar: 'https://...',
  }}
  content="Amazing project! 🚀"
  image="https://..."
  timestamp="2 hours ago"
  likes={42}
  comments={8}
  shares={3}
  onLike={(id) => handleLike(id)}
  onComment={(id) => handleComment(id)}
  onShare={(id) => handleShare(id)}
/>
```

**Points clés:**
- Layout responsive
- Boutons d'actions (Like, Comment, Share)
- Image optionnelle
- Statistiques du post

---

### 3. **NavBar** (`components/NavBar.jsx`)
Barre de navigation fixe au bas de la page.

**Props:**
- `activeTab`: `'home' | 'messages' | 'profile'`
- `onTabChange`: `(tabName) => void` - Callback au changement d'onglet
- `unreadMessages`: `number` (optionnel) - Badge de notification

**Exemple d'utilisation:**
```jsx
<NavBar
  activeTab={activeTab}
  onTabChange={(tab) => setActiveTab(tab)}
  unreadMessages={3}
/>
```

**Points clés:**
- Positions fixe au bas
- 3 onglets: Home, Messages, Profile
- Badge de notification sur Messages
- Styling actif/inactif

---

### 4. **MainPage** (`pages/MainPage.jsx`)
Page orchestratrice qui combine tous les composants.

**Gère:**
- État des onglets actifs
- Données des posts
- Données des stories
- Callbacks des interactions

**Exemple d'extension:**
```jsx
// Charger les données depuis une API
useEffect(() => {
  fetchPosts().then(setPosts)
  fetchStories().then(setStories)
}, [])
```

---

## 🎨 Design System

### Couleurs (CSS Variables)
```css
--primary-color: #667eea        /* Bleu principal */
--secondary-color: #764ba2      /* Violet */
--dark-bg: #0a0a0a              /* Fond foncé */
--card-bg: #1a1a1a              /* Fond des cartes */
--border-color: #333            /* Bordures */
--text-primary: #ffffff         /* Texte principal */
--text-secondary: #999          /* Texte secondaire */
--text-tertiary: #666           /* Texte tertiaire */
```

### Responsive Design
- **Mobile-first approach**
- Breakpoints: `640px` (tablet), `1024px` (desktop)
- NavBar occupe `60px` en bas (attention au padding-bottom)

---

## 🚀 Démarrage Rapide

### Installation
```bash
cd Front
npm install
```

### Mode développement
```bash
npm run dev
```
Accédez à `http://localhost:5173`

### Build production
```bash
npm run build
npm run preview
```

---

## 💡 Comment Recoder les Composants

### Étape 1: Modifier les Données
Les données d'exemple sont dans `MainPage.jsx` (`MOCK_STORIES`, `MOCK_POSTS`).

```jsx
// Remplacer les MOCK_* par des appels API
useEffect(() => {
  fetch('/api/stories').then(r => r.json()).then(setStories)
  fetch('/api/posts').then(r => r.json()).then(setPosts)
}, [])
```

### Étape 2: Ajouter des Fonctionnalités
Chaque composant a des zones "À implémenter" marquées par des commentaires.

**Exemple:** Ouvrir un modal au clic sur Comment
```jsx
// Dans MainPage.jsx
const handleComment = (postId) => {
  setSelectedPostId(postId)
  setShowCommentModal(true)  // ← Ajouter cette logique
}
```

### Étape 3: Styliser
Les styles sont séparés en fichiers `.css` pour chaque composant.

**Personnaliser les couleurs:**
```css
/* Remplacer les valeurs dans App.css */
:root {
  --primary-color: #votre-couleur;
}
```

---

## 📝 Points Clés pour le Recodage

### ✅ Code Well-Commented
- Chaque composant a un bloc de documentation en tête
- Props explicitées avec descriptions
- Callbacks documentés

### ✅ Structure Modulaire
- Chaque composant = 1 fichier `.jsx` + 1 fichier `.css`
- Pas de dépendances cachées
- Facile à extraire/remplacer

### ✅ État Centralisé
- `MainPage.jsx` gère l'état global
- Les composants enfants sont "dumb" (recevoir props, émettre callbacks)

### ✅ Données d'Exemple
- `MOCK_STORIES` et `MOCK_POSTS` pour tester sans API
- Facile à remplacer par des vraies données

---

## 🔧 Futures Améliorations

- [ ] Intégrer React Router pour les pages Messages/Profile
- [ ] Pagination ou infinite scroll pour les posts
- [ ] Validation des données avec Zod/Yup
- [ ] Gestion globale d'état (Redux, Zustand)
- [ ] Tests unitaires avec Vitest
- [ ] TypeScript pour plus de sécurité

---

## 📞 Support

Chaque composant est conçu pour être **compréhensible rapidement**. Si besoin:
1. Lire les commentaires en tête du fichier
2. Vérifier les Props documentées
3. Consulter les exemples dans `MainPage.jsx`

Bon code! 🎉
