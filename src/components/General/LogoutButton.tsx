import { logout } from '@/api/apiEndpoints'
import { useAuthStore } from '@/stores/useAuthStore'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from "sonner"



export default function LogoutButton() {
  const { logout: logoutFromStore } = useAuthStore()
    const router = useRouter()
    const { mutate } = useMutation({
        mutationFn: logout,
        onSuccess: () => {
          logoutFromStore()
          router.push('/admission/portal/login')
          toast.success("Logged out successfully")
        }
    })
  return (
    <div onClick={() => mutate()} className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary cursor-pointer hover:bg-secondary/20 transition-colors">
        <LogOut className='size-5' />
    </div>
  )
}
