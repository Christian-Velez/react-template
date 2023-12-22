import { useRoutes } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store'
import { publicRoutes } from './public'
import { privateRoutes } from './private'

export default function AppRoutes() {
   const authenticated = useAuthStore((s) => s.authenticated)
   const routes = authenticated ? privateRoutes : publicRoutes
   const element = useRoutes([...routes])

   return <>{element}</>
}
