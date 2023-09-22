import { ReactNode } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsApple } from 'react-icons/bs'

export function EnterWithSocialMedia(){
    return (
        <div className='self-stretch flex items-center justify-center gap-5'>
            <SocialMediaButton>
                <FcGoogle />
            </SocialMediaButton>
            <SocialMediaButton>
                <BsFacebook className='text-[#1877F2]'/>
            </SocialMediaButton>
            <SocialMediaButton>
                <BsApple className='text-[#121212]' />
            </SocialMediaButton>
        </div>
    )
}

function SocialMediaButton({children}: {children: ReactNode}){
    return (
        <button className='p-3 rounded-md border border-gray-200 shadow-sm shadow-[#12121210]'>
            {children}
        </button>
    )
}