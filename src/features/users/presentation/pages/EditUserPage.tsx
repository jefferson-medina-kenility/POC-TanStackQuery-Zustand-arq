import { useState } from 'react'
import { useUpdateUser } from '../hooks/useUpdateUser'
import { useLocation, useNavigate } from 'react-router-dom';

export const EditUserPage = () => {

  const { mutate, isPending } = useUpdateUser()
  const location = useLocation();
  const { id, name, email } = location.state;
  const [nameuser, setName] = useState(name)
  const [emailuser, setEmail] = useState(email)
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({
      id: id,
      payload: { name: nameuser, email: emailuser },
    })
    navigate('/');
  }

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">User edit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={nameuser}
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
              value={emailuser}
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
              {isPending ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}