/**
 * LoginPage Component
 * 
 * Page de connexion utilisateur
 * Formulaire avec email/username et mot de passe
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AuthPages.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // À remplacer avec un vrai appel API
      console.log('Login attempt:', { email, password })
      
      // Simulation d'un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock: vérifier les credentials
      if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email }))
        navigate('/')
      } else {
        setError('Veuillez remplir tous les champs')
      }
    } catch (err) {
      setError('Erreur lors de la connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Kuli</h1>
        <h2>Connexion</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email ou identifiant</label>
            <input
              id="email"
              type="text"
              placeholder="Email ou username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>

        <div className="auth-footer">
          <p>Pas encore de compte?</p>
          <a href="/register">Créer un compte</a>
        </div>
      </div>
    </div>
  )
}
