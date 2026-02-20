import { useState } from 'react'
import { useUpdateUser } from '../hooks/useUpdateUser'

interface Props {
  userId: string
  initialName: string
  initialEmail: string
}

export const EditUserPage = ({
  userId,
  initialName,
  initialEmail,
}: Props) => {
  const { mutate, isPending } = useUpdateUser()

  const [name, setName] = useState(initialName)
  const [email, setEmail] = useState(initialEmail)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({
      id: userId,
      payload: { name, email },
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button disabled={isPending}>
        {isPending ? 'Updating...' : 'Update'}
      </button>
    </form>
  )
}