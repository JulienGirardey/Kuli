/**
 * RegisterPage Component
 * 
 * Page d'inscription utilisateur
 * Formulaire avec email, username, mot de passe et confirmation
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AuthPages.css'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.username.trim()) return 'L\'identifiant est requis'
    if (!formData.email.includes('@')) return 'Email invalide'
    if (formData.password.length < 6) return 'Le mot de passe doit faire au moins 6 caractères'
    if (formData.password !== formData.confirmPassword) return 'Les mots de passe ne correspondent pas'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    try {
      // À remplacer avec un vrai appel API
      console.log('Register attempt:', {
        username: formData.username,
        email: formData.email,
      })

      // Simulation d'un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Mock: créer l'utilisateur
      localStorage.setItem('user', JSON.stringify({
        username: formData.username,
        email: formData.email,
      }))
      navigate('/')
    } catch (err) {
      setError('Erreur lors de l\'inscription')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Kuli</h1>
        <h2>Créer un compte</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Identifiant</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Choisir un identifiant"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Au moins 6 caractères"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirmer le mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Inscription en cours...' : 'S\'inscrire'}
          </button>
        </form>

        <div className="auth-footer">
          <p>Vous avez déjà un compte?</p>
          <a href="/login">Se connecter</a>
        </div>
      </div>
    </div>
  )
}
