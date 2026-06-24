import { useState, useEffect } from 'react'

export default function App() {
  const [backendStatus, setBackendStatus] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus(data.status))
      .catch(() => setBackendStatus('Backend not connected'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎯 Kuli</h1>
      <p>React + Express Setup</p>
      {loading ? (
        <p>Checking backend...</p>
      ) : (
        <p style={{ color: backendStatus.includes('running') ? 'green' : 'red' }}>
          ✓ {backendStatus}
        </p>
      )}
    </div>
  )
}
