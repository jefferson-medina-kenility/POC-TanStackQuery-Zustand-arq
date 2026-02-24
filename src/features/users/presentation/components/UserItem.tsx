import { useDeleteUser } from '../hooks/useDeleteUser'

interface Props {
  id: string
}

export const UserItem = ({ id }: Props) => {
  const { mutate, isPending } = useDeleteUser()
  
  return (
    <button className="font-medium text-red-600 hover:underline"
      onClick={() => mutate(id)}
      disabled={isPending}>
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  )
}