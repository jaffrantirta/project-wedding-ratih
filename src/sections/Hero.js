import React from 'react'
import { ImgOrnamentWhite1, ImgOrnamentWhite2 } from '../assets'
import { Flower } from '../components'

export default function Hero() {
    return (
        <div className='h-screen relative bg-primary flex items-center justify-center font-primary'>
            <Flower />
            <div className='text-center'>
                <img alt='' src={ImgOrnamentWhite1} className='w-1/2 mx-auto' />
                <div className='my-5 text-white'>
                    <h1 className='text-3xl md:text-5xl font-third'>Ananda Coel & Ratih D.R</h1>
                    <h1 className='text-xl md:text-2xl mt-5'>24.03.2023</h1>
                </div>
                <img alt='' src={ImgOrnamentWhite2} className='w-1/2 mx-auto' />
            </div>
        </div>

    )
}
