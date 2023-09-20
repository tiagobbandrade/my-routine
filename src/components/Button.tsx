import { ButtonHTMLAttributes, ReactNode } from "react"

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export function Button({children, ...props}: TButton){
    return (
        <button 
            className='w-full py-3 flex items-center justify-center gap-4 font-semibold rounded-md bg-violet-600 text-white'
            {...props}
        >
            {children}
        </button>
    )
}