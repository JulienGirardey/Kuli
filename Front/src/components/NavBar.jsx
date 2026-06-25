/**
 * NavBar Component
 * 
 * Barre de navigation en bas de la page avec 3 sections principales:
 * - Home: Accueil
 * - Message Box: Messages/Chat
 * - Account Wall: Profil utilisateur
 * 
 * Props:
 *   - activeTab: string - Onglet actif ('/', '/messages', '/profile')
 *   - unreadMessages: number (optionnel) - Nombre de messages non lus à afficher
 */

import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({
  unreadMessages = 0,
}) {
  const location = useLocation()

  // Configuration des onglets de la navbar
  const tabs = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/messages', label: 'Messages', icon: '💬' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ]

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`nav-item ${location.pathname === tab.path ? 'active' : ''}`}
            title={tab.label}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>

            {/* Badge pour afficher le nombre de messages non lus */}
            {tab.path === '/messages' && unreadMessages > 0 && (
              <span className="notification-badge">{unreadMessages}</span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}
