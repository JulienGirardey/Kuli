/**
 * Post Component
 * 
 * Affiche un post (content share) avec la photo/contenu, métadonnées et actions.
 * C'est le composant central pour afficher les posts de l'utilisateur.
 * 
 * Props:
 *   - id: number - Identifiant unique du post
 *   - author: {name: string, avatar: string, username: string}
 *   - content: string - Texte du post
 *   - image: string (optionnel) - URL de l'image du post
 *   - timestamp: string - Date de création (ex: "2 hours ago")
 *   - likes: number - Nombre de likes
 *   - comments: number - Nombre de commentaires
 *   - shares: number - Nombre de partages
 *   - onLike: (postId: number) => void - Callback au clic sur like
 *   - onComment: (postId: number) => void - Callback au clic sur comment
 *   - onShare: (postId: number) => void - Callback au clic sur share
 */

import './Post.css'

export default function Post({
  id,
  author,
  content,
  image,
  timestamp,
  likes = 0,
  comments = 0,
  shares = 0,
  onLike = () => {},
  onComment = () => {},
  onShare = () => {},
}) {
  return (
    <div className="post-card">
      {/* En-tête du post : avatar, nom, username et timestamp */}
      <div className="post-header">
        <div className="author-info">
          <img src={author.avatar} alt={author.name} className="author-avatar" />
          <div className="author-details">
            <h3 className="author-name">{author.name}</h3>
            <span className="author-username">@{author.username}</span>
          </div>
        </div>
        <span className="post-timestamp">{timestamp}</span>
      </div>

      {/* Contenu textuel du post */}
      <div className="post-content">
        <p>{content}</p>
      </div>

      {/* Image du post (optionnelle) */}
      {image && (
        <div className="post-image-container">
          <img src={image} alt="Post content" className="post-image" />
        </div>
      )}

      {/* Pied de page : boutons d'actions */}
      <div className="post-footer">
        <div className="post-stats">
          <span className="stat">{likes} likes</span>
          <span className="stat">{comments} comments</span>
          <span className="stat">{shares} shares</span>
        </div>

        {/* Boutons d'interactions */}
        <div className="post-actions">
          <button
            className="action-btn"
            onClick={() => onLike(id)}
            title="Like this post"
          >
            <span className="action-icon">👍</span>
            <span className="action-text">Like</span>
          </button>
          <button
            className="action-btn"
            onClick={() => onComment(id)}
            title="Comment on this post"
          >
            <span className="action-icon">💬</span>
            <span className="action-text">Comment</span>
          </button>
          <button
            className="action-btn"
            onClick={() => onShare(id)}
            title="Share this post"
          >
            <span className="action-icon">↗️</span>
            <span className="action-text">Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}
