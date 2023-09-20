import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { Button } from '@/components/Button'

import backgroundImage from '../../../../public/AbstractBackground.svg'

export default function Page(){
    return <div className='w-screen h-screen bg-violet-950 flex justify-start relative'>
        <Image 
            src={backgroundImage} 
            alt='background image'
            className='w-1/2 h-full object-cover bg-no-repeat absolute top-0 right-0'
            loading='lazy'
        />
        <div className='w-3/5 h-full rounded-r-2xl z-10 p-20 flex flex-col items-start justify-center gap-6 bg-white'>
            <h1 className='text-4xl font-semibold text-black'>Login</h1>
            <form className='w-full flex flex-col items-center justify-start gap-8'>
                <input 
                    type='email'
                    placeholder='youremail@example.com' 
                    className='w-full px-4 py-3 border rounded-md border-[##4A4A4A] text-sm text-[##4A4A4A]'
                />
                <input 
                    type='password'
                    placeholder='********' 
                    className='w-full px-4 py-3 border rounded-md border-[##4A4A4A] text-sm text-[##4A4A4A]'
                /> 
                <Button>
                    Continuar
                    <BsArrowRight className='text-xl font-semibold mt-[2px]'/>
                </Button>
            </form>
            <div className='w-full flex items-center justify-center gap-5'>
                <hr className='w-full'/>
                <span className="text-[#4A4A4A] text-xs">ou</span>
                <hr className='w-full'/>
            </div>
            <div className='w-full flex items-center justify-center gap-5'>
                <span>G</span>
                <span>A</span>
                <span>F</span>
            </div>
        </div>
    </div>
}