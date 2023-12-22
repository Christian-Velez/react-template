import { API_URL } from '@/config'
import { toast } from 'sonner'
import Axios, { AxiosRequestConfig } from 'axios'
import storage from '@/utils/storage'

export const axios = Axios.create({
   baseURL: API_URL,
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
axios.interceptors.request.use((config: AxiosRequestConfig) => {
   const token = storage.getToken()

   if (!config.headers) {
      return config
   }

   if (token) {
      config.headers.authorization = `Bearer ${token}`
   }

   config.headers.Accept = 'application/json'
   return config
})

axios.interceptors.response.use(
   (response) => {
      return response
   },
   (error) => {
      const message = error.response?.data?.description || error.message
      toast.error(message)
      return Promise.reject(error)
   }
)
