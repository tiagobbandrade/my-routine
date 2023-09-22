import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export function Button({children, className, ...props}: TButton){
    return (
        <button 
            className={twMerge('w-full py-3 flex items-center justify-center gap-4 font-semibold rounded-md bg-violet-600 text-white', className)}
            {...props}
        >
            {children}
        </button>
    )
}