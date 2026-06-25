/**
 * NavBar Component
 * 
 * Barre de navigation en bas de la page avec 3 sections principales:
 * - Home: Accueil
 * - Message Box: Messages/Chat
 * - Account Wall: Profil utilisateur
 * 
 * Props:
 *   - activeTab: string - Onglet actif ('home', 'messages', 'profile')
 *   - onTabChange: (tabName: string) => void - Callback quand on change d'onglet
 *   - unreadMessages: number (optionnel) - Nombre de messages non lus à afficher
 */

import './NavBar.css'

export default function NavBar({
  activeTab = 'home',
  onTabChange = () => {},
  unreadMessages = 0,
}) {
  // Configuration des onglets de la navbar
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ]

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            title={tab.label}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>

            {/* Badge pour afficher le nombre de messages non lus */}
            {tab.id === 'messages' && unreadMessages > 0 && (
              <span className="notification-badge">{unreadMessages}</span>
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
