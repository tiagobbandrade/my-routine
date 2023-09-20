import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { EnterWithSocialMedia } from '@/components/EnterWithSocialMedia'

import backgroundImage from '../../../../public/AbstractBackground.svg'

export default function Page(){
    return <div className='w-screen h-screen bg-violet-950 flex justify-start relative'>
        <Image 
            src={backgroundImage} 
            alt='background image'
            className='w-1/2 h-full object-cover bg-no-repeat absolute top-0 right-0'
            loading='lazy'
        />
        <div className='w-1/2 h-full rounded-r-2xl z-10 p-20 flex flex-col items-start justify-center gap-6 bg-white'>
            <h1 className='text-4xl font-semibold text-black'>Login</h1>
            <form className='w-full flex flex-col items-center justify-start gap-6'>
                <Input 
                    id='email' 
                    label='E-mail' 
                    placeholder='youremail@example.com' 
                    type='email'
                />
                <Input 
                    id='password' 
                    label='Sua senha' 
                    placeholder='********' 
                    type='password'
                />
                <Button type='submit'>
                    Continuar
                    <BsArrowRight className='text-xl font-semibold mt-[2px]'/>
                </Button>
            </form>
            <div className='w-full flex items-center justify-center gap-5'>
                <hr className='w-full'/>
                <span className="text-[#4A4A4A] text-xs">ou</span>
                <hr className='w-full'/>
            </div>
            <EnterWithSocialMedia /> 
            <p className='self-stretch text-center text-[#5E5E5E] text-xs'>
                Não possui uma conta ainda? <Link href='#' className='text-violet-600 underline'>Crie uma!</Link>
            </p>
        </div>
    </div>
}