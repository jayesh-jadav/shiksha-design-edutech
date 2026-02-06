import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
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
          <h1 className="text-2xl font-bold text-primary-700">Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">
            Welcome back!
          </h2>
          <p className="text-secondary-600">
            Signed in as: <span className="font-medium">{session.user.email}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-secondary-900 mb-4">
              My Courses
            </h3>
            <p className="text-secondary-600 mb-4">0 courses enrolled</p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Browse Courses →
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-secondary-900 mb-4">
              Learning Progress
            </h3>
            <p className="text-secondary-600 mb-4">0% overall</p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              View Details →
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-secondary-900 mb-4">
              Certificates
            </h3>
            <p className="text-secondary-600 mb-4">0 earned</p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              View Certificates →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
