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
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      &nbsp;
      <input
        value={email}
        className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      &nbsp;
      <button disabled={isPending} className="font-medium text-blue-600">
        {isPending ? 'Creating...' : 'Create User'}
      </button>
    </form>
  )
}