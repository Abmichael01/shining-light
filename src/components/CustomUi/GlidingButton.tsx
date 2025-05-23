import { cn } from "@/lib/utils"
import type React from "react"

interface GlidingButtonProps {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
}

const GlidingButton: React.FC<GlidingButtonProps> = ({ children, className, isLoading = false }) => {
  return (
    <button
      className={cn(
        "self-center px-6 py-3 bg-primary relative group overflow-hidden text-white flex gap-2 items-center [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer text-sm",
        className,
      )}
      disabled={isLoading}
    >
      <div className="absolute top-[1.5px] left-[1px] right-[1px] w-full h-full bg-transparent border-t  group-active:top-[0.5px]"></div>
      <div className="w-[40px] h-[110px] bg-white/30 absolute top-[-10px] left-[-80px] group-hover:left-[130%] button-hover-effect"></div>

      {isLoading ? "Loading..." : null}
      {children}
    </button>
  )
}

export default GlidingButton

