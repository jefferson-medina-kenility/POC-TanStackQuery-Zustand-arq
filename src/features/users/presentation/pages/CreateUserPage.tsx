import { useState } from 'react'
import { useCreateUser } from '../hooks/useCreateUser'
import { useNavigate } from 'react-router'

export const CreateUserPage = () => {
  const { mutate, isPending } = useCreateUser()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({ name, email })
    navigate('/');
  }

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">User create</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={e => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div className="flex justify-between gap-4">
            <button
             onClick={() => navigate('/')}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
              type="button"
            >
              Back
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
              type="submit"
            >
              {isPending ? 'Saving...' : 'Save User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}