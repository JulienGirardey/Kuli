# 🚀 CONTRIBUTING.md - Guide pour Développer Kuli

Ce document explique comment naviguer dans le code et le modifier efficacement.

---

## 📋 Table des Matières

1. [Setup Initial](#setup-initial)
2. [Anatomie d'un Composant](#anatomie-dun-composant)
3. [Comment Ajouter une Fonctionnalité](#comment-ajouter-une-fonctionnalité)
4. [Comment Connecter une API](#comment-connecter-une-api)
5. [Commandes Utiles](#commandes-utiles)

---

## ✅ Setup Initial

```bash
# 1. Clone le repo
git clone <repo-url>
cd kuli

# 2. Installe les dépendances
cd Front
npm install

# 3. Lance le dev server
npm run dev

# 4. Accède à http://localhost:5173
```

---

## 🔍 Anatomie d'un Composant

Tous les composants suivent cette structure:

```jsx
/**
 * ComponentName Component
 * 
 * Brève description de ce que fait ce composant
 * Utilisé par: [quels autres composants/pages l'utilisent]
 */

import { useState, useEffect } from 'react'
import './ComponentName.css'

export default function ComponentName({ prop1, prop2 }) {
  // 1️⃣ State et hooks
  const [state, setState] = useState('')

  // 2️⃣ Callbacks et handlers
  const handleAction = () => {
    // Logique ici
  }

  // 3️⃣ Render
  return (
    <div>
      {/* JSX ici */}
    </div>
  )
}
```

### Structure des fichiers CSS

```css
/* Styles du composant */
.component-name {
  /* Layout */
  display: flex;
  /* Spacing */
  padding: 16px;
  /* Sizing */
  width: 100%;
  /* Colors */
  background-color: #fff;
}

.component-name-child {
  /* Styles du child */
}

/* Responsive */
@media (max-width: 768px) {
  .component-name {
    /* Styles mobile */
  }
}
```

---

## 🎯 Comment Ajouter une Fonctionnalité

### Exemple: Ajouter un bouton "Delete Post"

**Étape 1: Trouve le composant concerné**
→ `Front/src/components/Post.jsx`

**Étape 2: Ajoute la prop pour le callback**
```jsx
export default function Post({ 
  ...otherProps,
  onDelete  // ← Nouvelle prop
}) {
```

**Étape 3: Ajoute le bouton dans le render**
```jsx
<button onClick={() => onDelete(id)}>
  🗑️ Supprimer
</button>
```

**Étape 4: Ajoute les styles** (dans `Post.css`)
```css
.delete-btn {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #ff5252;
}
```

**Étape 5: Utilise-le dans MainPage**
```jsx
const handleDelete = (postId) => {
  setPosts(posts.filter(p => p.id !== postId))
}

<Post
  {...post}
  onDelete={handleDelete}  // ← Passe la callback
/>
```

---

## 🔌 Comment Connecter une API

### Avant (Mock Data)

```jsx
// Front/src/pages/MainPage.jsx
const MOCK_POSTS = [...]
const [posts, setPosts] = useState(MOCK_POSTS)
```

### Après (Real API)

```jsx
// Front/src/pages/MainPage.jsx
import { useEffect, useState } from 'react'

export default function MainPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Appel à l'API
    fetch('http://localhost:5000/api/posts')
      .then(res => {
        if (!res.ok) throw new Error('Erreur réseau')
        return res.json()
      })
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Chargement...</div>
  if (error) return <div>Erreur: {error}</div>

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}
```

### Créer un Hook Personnalisé (Bonus: plus clean)

```jsx
// Front/src/hooks/useFetch.js
import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}

// Utilisation:
function MainPage() {
  const { data: posts, loading, error } = useFetch('/api/posts')
  // ...
}
```

---

## 🎓 Patterns Courants

### 1️⃣ Formulaire avec Validation

```jsx
const [form, setForm] = useState({ email: '', password: '' })
const [error, setError] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  
  // Validation
  if (!form.email.includes('@')) {
    setError('Email invalide')
    return
  }
  
  // Envoi à l'API
  fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  })
  .then(r => r.json())
  .then(data => {
    localStorage.setItem('token', data.token)
    navigate('/')
  })
  .catch(err => setError(err.message))
}
```

### 2️⃣ Loading & Error States

```jsx
if (loading) return <div className="spinner">⏳ Chargement...</div>
if (error) return <div className="error">❌ {error}</div>
if (!data) return <div>📭 Aucune donnée</div>

return <div>{/* Render normal */}</div>
```

### 3️⃣ Conditional Rendering

```jsx
{/* Si/Sinon simple */}
{isLoggedIn ? (
  <button>Se déconnecter</button>
) : (
  <button>Se connecter</button>
)}

{/* Si plusieurs conditions */}
{status === 'loading' && <Spinner />}
{status === 'error' && <Error message={error} />}
{status === 'success' && <Data items={data} />}
```

---

## 💾 Commandes Utiles

```bash
# Installation
npm install                    # Installe les dépendances

# Développement
npm run dev                    # Lance le dev server
npm run build                  # Build pour production
npm run preview               # Preview du build prod

# Nettoyage
npm cache clean --force        # Nettoie le cache npm
rm -rf node_modules            # Supprime node_modules (puis npm install)
```

---

## 📁 Où Trouver Quoi

| Je veux... | Fichier | Notes |
|-----------|--------|-------|
| Changer les couleurs | `src/App.css` | Variables CSS en haut |
| Ajouter une page | `src/pages/NewPage.jsx` | + Ajouter route dans `App.jsx` |
| Modifier un composant | `src/components/ComponentName.jsx` | Tous les composants sont ici |
| Changer le routing | `src/App.jsx` | Les routes sont définies ici |
| Ajouter des données mockées | `src/pages/MainPage.jsx` | Les `MOCK_*` sont en haut |
| Changer la structure globale | `src/App.jsx` + `src/App.css` | App est le conteneur principal |

---

## 🐛 Debugging Tips

### Chrome DevTools
1. Ouvre `F12` (DevTools)
2. Onglet **React** (si l'extension React DevTools est installée)
3. Inspecte l'arbre des composants
4. Vois les props et state en temps réel

### Console Logging
```jsx
// Vérifier les props
console.log('Props reçues:', { prop1, prop2 })

// Vérifier l'état
console.log('État actuel:', state)

// Vérifier les données de l'API
fetch('/api/data')
  .then(r => r.json())
  .then(data => console.log('Données API:', data))
```

### Network Tab (DevTools)
1. Ouvre `F12` → **Network**
2. Fais une action qui déclenche une requête
3. Vois la requête/réponse

---

## ✨ Best Practices

### ✅ À FAIRE

- Divise ton code en petits composants
- Regroupe les hooks au début du composant
- Utilise des noms explicites (`handleSubmit` au lieu de `handle`)
- Commente les sections complexes
- Teste sur mobile/tablet
- Utilise le localStorage pour l'authentification temporaire

### ❌ À ÉVITER

- Mélanger la logique d'état avec le rendu
- Props imbriquées trop profondément
- Noms génériques (`data`, `item`, `foo`)
- Console.log en production
- Fichiers de composants > 300 lignes (divise!)

---

## 🚀 Prochaines Étapes Recommandées

1. **Lis le code** - Ouvre `Front/src/App.jsx` et suis les imports
2. **Lance le dev server** - `npm run dev`
3. **Clique partout** - Teste chaque page, vois comment c'est structuré
4. **Fais une petite modif** - Change une couleur, ajoute un emoji
5. **Ajoute une fonctionnalité** - Ajoute un bouton qui n'existe pas

---

## 💬 Questions?

Chaque fichier a des commentaires. Cherche:
- `// À implémenter` - Zones à coder prochainement
- `/**` - Documentations de fonctions/composants
- Props explicitées avec descriptions

Bon code! 🎉
