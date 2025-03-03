import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import SignInButton from './SignInButton'

function Hero() {
    return (
        <div className='px-10 md:px-28 lg:px-44 xl:px-56
    flex flex-col items-center
    mt-24
    '>
            <h2 className='font-extrabold 
        text-5xl text-center
        '>AI-Powered
                <span className='text-primary'> Email Templates
                </span></h2>

            <p className='text-center mt-4'>Longing to impress clients with AI-powered emails but don’t have enough time to build them on your own? Use the AI-powered email templates that already have AI-generated imagery and copy — save time on email production with us.</p>

            <div className='flex gap-5 mt-6'>
                
                <SignInButton />
            </div>

            <Image src={'/landing.png'} alt='landing'
                width={1000}
                height={800}
                className='mt-12 rounded-xl'
            />
        </div>
    )
}

export default Hero