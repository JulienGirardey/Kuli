/**
 * MessagesPage Component
 * 
 * Page de messagerie
 * Affiche une liste de conversations et le détail d'une conversation
 */

import { useState } from 'react'
import './MessagesPage.css'

const MOCK_CONVERSATIONS = [
  {
    id: 1,
    username: 'Alice Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    lastMessage: 'Comment va tu?',
    timestamp: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    username: 'Bob Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    lastMessage: 'À bientôt!',
    timestamp: '1 day ago',
    unread: false,
  },
  {
    id: 3,
    username: 'Charlie Brown',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    lastMessage: 'C\'était super! 😄',
    timestamp: '3 days ago',
    unread: false,
  },
]

const MOCK_MESSAGES = [
  {
    id: 1,
    sender: 'Alice Johnson',
    text: 'Salut! Comment ça va?',
    timestamp: '2 hours ago',
    isOwn: false,
  },
  {
    id: 2,
    sender: 'You',
    text: 'Très bien! Et toi?',
    timestamp: '1 hour ago',
    isOwn: true,
  },
  {
    id: 3,
    sender: 'Alice Johnson',
    text: 'Comment va tu?',
    timestamp: '2 hours ago',
    isOwn: false,
  },
]

export default function MessagesPage() {
  const [conversations] = useState(MOCK_CONVERSATIONS)
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      text: inputValue,
      timestamp: 'now',
      isOwn: true,
    }

    setMessages([...messages, newMessage])
    setInputValue('')
  }

  return (
    <div className="messages-page">
      {/* Liste des conversations */}
      <div className="conversations-panel">
        <div className="conversations-header">
          <h2>Messages</h2>
        </div>

        <div className="conversations-list">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`conversation-item ${selectedConversation.id === conv.id ? 'active' : ''}`}
              onClick={() => setSelectedConversation(conv)}
            >
              <img src={conv.avatar} alt={conv.username} className="avatar" />
              <div className="conversation-info">
                <h3>{conv.username}</h3>
                <p className={conv.unread ? 'unread' : ''}>{conv.lastMessage}</p>
              </div>
              <span className="timestamp">{conv.timestamp}</span>
              {conv.unread && <span className="unread-badge"></span>}
            </div>
          ))}
        </div>
      </div>

      {/* Détail de la conversation */}
      <div className="chat-panel">
        {selectedConversation && (
          <>
            {/* Header */}
            <div className="chat-header">
              <img src={selectedConversation.avatar} alt={selectedConversation.username} />
              <div>
                <h2>{selectedConversation.username}</h2>
                <p>Actif maintenant</p>
              </div>
            </div>

            {/* Messages */}
            <div className="messages-container">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${msg.isOwn ? 'own' : 'other'}`}
                >
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                    <span className="message-time">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="message-input-form">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Écrire un message..."
                className="message-input"
              />
              <button type="submit" className="send-btn">
                ➤
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
