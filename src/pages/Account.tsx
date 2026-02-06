import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Account() {
  const { session, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-700">Account Settings</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Account Information
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={session.user.email || ''}
                disabled
                className="w-full px-4 py-2 border border-secondary-300 rounded-lg bg-secondary-50 text-secondary-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                User ID
              </label>
              <input
                type="text"
                value={session.user.id}
                disabled
                className="w-full px-4 py-2 border border-secondary-300 rounded-lg bg-secondary-50 text-secondary-600 font-mono text-sm"
              />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-secondary-200">
            <button
              onClick={handleSignOut}
              className="px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
