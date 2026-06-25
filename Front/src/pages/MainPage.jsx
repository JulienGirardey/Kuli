/**
 * MainPage Component
 * 
 * Page principale de l'application Kuli.
 * Affiche:
 * - StoryBar en haut
 * - Feed de posts au centre
 * - NavBar en bas
 * 
 * Gère l'état global de la page (changement d'onglet, données des posts, etc.)
 */

import { useState } from 'react'
import StoryBar from '../components/StoryBar'
import Post from '../components/Post'
import NavBar from '../components/NavBar'
import './MainPage.css'

// Données d'exemple des stories
const MOCK_STORIES = [
  { id: 1, username: 'Alice', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
  { id: 2, username: 'Bob', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob' },
  { id: 3, username: 'Charlie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie' },
  { id: 4, username: 'Diana', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana' },
  { id: 5, username: 'Eve', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eve' },
  { id: 6, username: 'Frank', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Frank' },
]

// Données d'exemple des posts
const MOCK_POSTS = [
  {
    id: 1,
    author: {
      name: 'Alice Johnson',
      username: 'alice_j',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    },
    content: 'Juste lancé mon nouveau projet! Excited to share it with everyone 🚀',
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&h=400&fit=crop',
    timestamp: '2 hours ago',
    likes: 42,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    author: {
      name: 'Bob Smith',
      username: 'bob_smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    },
    content: 'Learning React has been amazing! Here are my thoughts on hooks and state management.',
    timestamp: '4 hours ago',
    likes: 28,
    comments: 12,
    shares: 5,
  },
  {
    id: 3,
    author: {
      name: 'Charlie Brown',
      username: 'charlie_b',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    },
    content: 'Beautiful sunset today at the beach! Nature is amazing 🌅',
    image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&h=400&fit=crop',
    timestamp: '1 day ago',
    likes: 156,
    comments: 32,
    shares: 18,
  },
]

export default function MainPage() {
  // État pour l'onglet actif de la navbar
  const [activeTab, setActiveTab] = useState('home')
  // État pour les posts (peut être synchronisé avec une API)
  const [posts, setPosts] = useState(MOCK_POSTS)
  // État pour les stories
  const [stories] = useState(MOCK_STORIES)

  /**
   * Gère le clic sur une story
   * @param {number} storyId - L'ID de la story cliquée
   */
  const handleStoryClick = (storyId) => {
    console.log(`Story ${storyId} clicked`)
    // À implémenter : naviguer vers la page de la story ou ouvrir un modal
  }

  /**
   * Gère le clic sur le bouton "Like"
   * @param {number} postId - L'ID du post
   */
  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    )
  }

  /**
   * Gère le clic sur le bouton "Comment"
   * @param {number} postId - L'ID du post
   */
  const handleComment = (postId) => {
    console.log(`Comment on post ${postId}`)
    // À implémenter : ouvrir un modal de commentaires ou scroll vers section commentaires
  }

  /**
   * Gère le clic sur le bouton "Share"
   * @param {number} postId - L'ID du post
   */
  const handleShare = (postId) => {
    console.log(`Share post ${postId}`)
    // À implémenter : ouvrir un dialog de partage ou copier le lien
  }

  /**
   * Gère le changement d'onglet dans la navbar
   * @param {string} tabName - Le nouvel onglet actif
   */
  const handleTabChange = (tabName) => {
    setActiveTab(tabName)
    console.log(`Switched to ${tabName} tab`)
    // À implémenter : charger du contenu selon l'onglet
  }

  return (
    <div className="main-page">
      {/* Story Bar en haut */}
      <StoryBar stories={stories} onStoryClick={handleStoryClick} />

      {/* Contenu principal */}
      <div className="main-content">
        {activeTab === 'home' && (
          <div className="feed-container">
            {posts.map((post) => (
              <Post
                key={post.id}
                {...post}
                onLike={handleLike}
                onComment={handleComment}
                onShare={handleShare}
              />
            ))}
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="content-placeholder">
            <h2>Messages</h2>
            <p>Messages functionality coming soon...</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="content-placeholder">
            <h2>Profile</h2>
            <p>Profile page coming soon...</p>
          </div>
        )}
      </div>

      {/* NavBar en bas */}
      <NavBar activeTab={activeTab} onTabChange={handleTabChange} unreadMessages={3} />
    </div>
  )
}
