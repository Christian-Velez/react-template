import { Navigate } from 'react-router-dom'

export const publicRoutes = [
   {
      path: '/login',
      element: <p>Login</p>,
   },
   {
      path: '*',
      element: <Navigate to='/login' />,
   },
]
