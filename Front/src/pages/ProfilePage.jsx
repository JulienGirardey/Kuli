/**
 * ProfilePage Component
 * 
 * Page de profil utilisateur
 * Affiche les informations du profil, les posts et les statistiques
 */

import { useState } from 'react'
import './ProfilePage.css'

const MOCK_USER = {
  username: 'john_doe',
  fullName: 'John Doe',
  bio: 'Développeur passionné | React & Node.js enthusiast 💻',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  cover: 'https://images.unsplash.com/photo-1661956600684-38aa08e2b852?w=1200&h=400&fit=crop',
  followers: 1234,
  following: 567,
  postsCount: 89,
  location: 'Paris, France',
  website: 'johndoe.com',
  joinDate: 'Rejoint en janvier 2023',
}

const MOCK_USER_POSTS = [
  {
    id: 1,
    content: 'Juste terminé mon premier projet React! Super content du résultat 🎉',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
    timestamp: '2 weeks ago',
    likes: 45,
    comments: 12,
  },
  {
    id: 2,
    content: 'Tips: Utilisez les hooks React pour une meilleure gestion d\'état!',
    timestamp: '1 month ago',
    likes: 128,
    comments: 34,
  },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState(MOCK_USER)
  const [userPosts] = useState(MOCK_USER_POSTS)
  const [editForm, setEditForm] = useState(MOCK_USER)

  const handleEditChange = (field, value) => {
    setEditForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSaveProfile = () => {
    setUser(editForm)
    setIsEditing(false)
  }

  return (
    <div className="profile-page">
      {/* Cover Image */}
      <div className="cover-section">
        <img src={user.cover} alt="Cover" className="cover-image" />
        <button className="edit-cover-btn">Modifier la couverture</button>
      </div>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar-section">
          <img src={user.avatar} alt={user.fullName} className="profile-avatar" />
          <button className="edit-avatar-btn">Changer l'avatar</button>
        </div>

        <div className="profile-info">
          {!isEditing ? (
            <>
              <h1>{user.fullName}</h1>
              <p className="username">@{user.username}</p>
              <p className="bio">{user.bio}</p>

              <div className="profile-meta">
                {user.location && <span>📍 {user.location}</span>}
                {user.website && <span>🌐 {user.website}</span>}
                <span>📅 {user.joinDate}</span>
              </div>

              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">{user.following}</span>
                  <span className="stat-label">Suivi</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{user.followers}</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{user.postsCount}</span>
                  <span className="stat-label">Posts</span>
                </div>
              </div>

              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Modifier le profil
              </button>
            </>
          ) : (
            <div className="edit-form">
              <input
                type="text"
                value={editForm.fullName}
                onChange={(e) => handleEditChange('fullName', e.target.value)}
                placeholder="Nom complet"
              />
              <input
                type="text"
                value={editForm.username}
                onChange={(e) => handleEditChange('username', e.target.value)}
                placeholder="Identifiant"
              />
              <textarea
                value={editForm.bio}
                onChange={(e) => handleEditChange('bio', e.target.value)}
                placeholder="Bio"
                maxLength="160"
              />
              <input
                type="text"
                value={editForm.location}
                onChange={(e) => handleEditChange('location', e.target.value)}
                placeholder="Lieu"
              />
              <input
                type="text"
                value={editForm.website}
                onChange={(e) => handleEditChange('website', e.target.value)}
                placeholder="Site web"
              />

              <div className="form-actions">
                <button className="save-btn" onClick={handleSaveProfile}>
                  Enregistrer
                </button>
                <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Posts Section */}
      <div className="profile-posts">
        <h2>Posts</h2>
        {userPosts.map(post => (
          <div key={post.id} className="profile-post">
            <div className="post-content">
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt="Post" className="post-image" />}
            </div>
            <div className="post-stats">
              <span>{post.timestamp}</span>
              <span>❤️ {post.likes}</span>
              <span>💬 {post.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
