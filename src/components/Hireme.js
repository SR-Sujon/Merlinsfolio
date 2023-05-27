import React from 'react'
import { CircularText, RingText } from './Icons'
import Link from 'next/link'

const Hireme = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-48 h-auto flex items-center justify-center relative'>
                <RingText className={'fill-black animate-spin-slow'}></RingText>
                <Link href={'sr.sujon.cyb@gmail.com'} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark '>
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

export default Hireme