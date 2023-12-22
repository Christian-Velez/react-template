const storagePrefix = 'app_'

const storage = {
   getToken: () => {
      return localStorage.getItem(`${storagePrefix}token`) as string
   },
   setToken: (token: string) => {
      localStorage.setItem(`${storagePrefix}token`, token)
   },
   clearToken: () => {
      localStorage.removeItem(`${storagePrefix}token`)
   },
}

export default storage
