import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import type React from "react";

interface GlidingButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  line?: boolean;
}

const GlidingButton: React.FC<GlidingButtonProps> = ({
  children,
  className,
  isLoading = false,
  line = true,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "self-center px-6 py-3 bg-primary relative group overflow-hidden text-white flex justify-center gap-2 items-center [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer text-sm",
        className
      )}
      disabled={isLoading}
      {...rest}
    >
      {line && (
        <div className="absolute top-[1.5px] left-[1px] right-[1px] w-full h-full bg-transparent border-t  group-active:top-[0.5px]"></div>
      )}
      <div className="w-[40px] h-[110px] bg-white/30 absolute top-[-10px] left-[-80px] group-hover:left-[130%] button-hover-effect"></div>

      {isLoading && <Loader2 className="animate-spin" />}
      {children}
    </button>
  );
};

export default GlidingButton;
