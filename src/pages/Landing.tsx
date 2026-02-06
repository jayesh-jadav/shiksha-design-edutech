import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Landing() {
  const navigate = useNavigate()
  const { session } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-primary-700">Shiksha</h1>
        <div className="space-x-4">
          {session ? (
            <>
              <button
                onClick={() => navigate('/dashboard')}
                className="px-6 py-2 text-primary-700 hover:bg-primary-50 rounded-lg transition"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/account')}
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
              >
                Account
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/signin')}
                className="px-6 py-2 text-primary-700 hover:bg-primary-50 rounded-lg transition"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-secondary-900 mb-6">
            Learn Anything, Anytime
          </h2>
          <p className="text-xl text-secondary-600 mb-8">
            Access quality education with our comprehensive learning platform
          </p>
          {!session && (
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-4 bg-primary-500 text-white text-lg rounded-lg hover:bg-primary-600 transition shadow-lg"
            >
              Get Started Free
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-secondary-900 mb-3">
              Diverse Courses
            </h3>
            <p className="text-secondary-600">
              Explore thousands of courses across various subjects and skill levels
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-bold text-secondary-900 mb-3">
              Expert Instructors
            </h3>
            <p className="text-secondary-600">
              Learn from industry professionals and experienced educators
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-secondary-900 mb-3">
              Track Progress
            </h3>
            <p className="text-secondary-600">
              Monitor your learning journey with detailed progress analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
