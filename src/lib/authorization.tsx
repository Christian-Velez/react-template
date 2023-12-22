import { useCallback } from 'react'

type AuthorizationProps = {
   forbiddenFallback?: React.ReactNode
   children: React.ReactNode
   allowedRoles?: string[]
}

function useCheckAuth() {
   const authenticated = false
   const userRole = ''

   const checkAccess = useCallback(
      ({ allowedRoles }: { allowedRoles: string[] }) => {
         if (allowedRoles && allowedRoles.length > 0) {
            return allowedRoles?.includes(userRole)
         }

         return true
      },
      [userRole]
   )

   return {
      authenticated,
      checkAccess,
   }
}

export function Authorization({
   allowedRoles,
   children,
   forbiddenFallback = null,
}: AuthorizationProps) {
   const { authenticated, checkAccess } = useCheckAuth()
   let canAccess = authenticated

   if (allowedRoles) {
      canAccess = authenticated && checkAccess({ allowedRoles })
   }

   return <>{canAccess ? children : forbiddenFallback}</>
}
