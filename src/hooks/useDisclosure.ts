import { useCallback, useState } from 'react'

export function useDisclosure(initialValue = false) {
   const [open, setOpen] = useState(initialValue)

   const onOpen = useCallback(() => {
      setOpen(true)
   }, [])

   const onClose = useCallback(() => {
      setOpen(false)
   }, [])

   const onToggle = useCallback(() => {
      setOpen((v) => !v)
   }, [])

   return {
      open,
      onOpen,
      onClose,
      onToggle,
   }
}
