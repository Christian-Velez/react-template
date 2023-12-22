import storage from '@/utils/storage'
import { User } from '@/features/user/types'
import { create, resetAllStores } from '@/lib/zustand'

type AuthStore = {
   authenticated: boolean
   token: string
   user: User | null

   login: ({ token, user }: { token: string; user: User }) => void
   logout: () => void
}

const INITIAL_VALUE = {
   token: '',
   authenticated: false,
   user: null,
}

export const useAuthStore = create<AuthStore>()((set) => ({
   ...INITIAL_VALUE,
   login: (data) => {
      set({
         token: data.token,
         user: data.user,
         authenticated: true,
      })
      storage.setToken(data.token)
   },

   logout: () => {
      set(INITIAL_VALUE)
      storage.clearToken()
      resetAllStores()
   },
}))
