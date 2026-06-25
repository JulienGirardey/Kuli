/**
 * StoryBar Component
 * 
 * Affiche une barre horizontale de stories en haut de la page.
 * Chaque story est représentée par un cercle cliquable.
 * 
 * Props:
 *   - stories: Array<{id: number, username: string, avatar: string}>
 *   - onStoryClick: (storyId: number) => void - Callback appelé quand on clique sur une story
 */

import './StoryBar.css'

export default function StoryBar({ stories = [], onStoryClick = () => {} }) {
  return (
    <div className="story-bar">
      <div className="stories-container">
        {stories.map((story) => (
          <div
            key={story.id}
            className="story-item"
            onClick={() => onStoryClick(story.id)}
            title={story.username}
          >
            <div className="story-avatar">
              {story.avatar ? (
                <img src={story.avatar} alt={story.username} />
              ) : (
                <span>{story.username.charAt(0).toUpperCase()}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
