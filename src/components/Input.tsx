import { InputHTMLAttributes } from "react";

interface TInput extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    id: string,
    label: string,
}

export function Input({id, placeholder, label, ...props}: TInput){
    return (
        <div className="w-full flex flex-col items-start justify-center">
            <label htmlFor={id} className="text-sm text-gray-400">
                {label}
            </label>
            <input 
                id={id} 
                placeholder={placeholder}
                className='w-full px-4 py-3 border rounded-md border-gray-400 text-sm text-gray-400 outline-none'
                {...props}
            />
        </div>
    )
}