import { useDeleteUser } from '../hooks/useDeleteUser'

interface Props {
  id: string
  name: string
}

export const UserItem = ({ id, name }: Props) => {
  const { mutate, isPending } = useDeleteUser()

  return (
    <div>
      <span>{name}</span>

      <button
        onClick={() => mutate(id)}
        disabled={isPending}
      >
        {isPending ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  )
}