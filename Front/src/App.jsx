/**
 * App Component
 * 
 * Composant racine de l'application.
 * Affiche la MainPage avec tous les composants (StoryBar, Posts, NavBar).
 * Peut être étendu avec React Router pour gérer plusieurs pages.
 */

import MainPage from './pages/MainPage'
import './App.css'

export default function App() {
  return <MainPage />
}
