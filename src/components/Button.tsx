import { ReactNode } from "react"

type TButton = {
    children: ReactNode
}

export function Button({children}: TButton){
    return (
        <button className='w-full py-3 flex items-center justify-center gap-4 font-semibold rounded-md bg-violet-600 text-white'>
            {children}
        </button>
    )
}