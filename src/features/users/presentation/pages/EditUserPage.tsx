import { useState } from 'react'
import { useUpdateUser } from '../hooks/useUpdateUser'
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  userId: string
  initialName: string
  initialEmail: string
}

export const EditUserPage = () => {

  const { mutate, isPending } = useUpdateUser()

  const location = useLocation();
  const { id, name, email} = location.state;
  const [nameuser, setName] = useState(name)
  const [emailuser, setEmail] = useState(email)
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({
      id: id,
      payload: { name:nameuser, email:emailuser },
    })
    navigate('/'); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>id : {id}, name : {name}, email: {email}</div>;
      <input
        name="username"
        value={nameuser}
        onChange={e => setName(e.target.value)}
        className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <input
        name="email" 
        value={emailuser}
        onChange={e => setEmail(e.target.value)}
        className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <button disabled={isPending} className="font-medium text-blue-600">
        {isPending ? 'Updating...' : 'Update'}
      </button>
    </form>
  )
}