import { create } from 'zustand'

interface State {

  selectedUserId: string | null

  selectUser:
    (id: string) => void

}

export const useUserUIStore =
create<State>((set) => ({

  selectedUserId: null,

  selectUser: id =>
    set({ selectedUserId: id }),

}))
