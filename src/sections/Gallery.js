import React from 'react'
import { ImgBorder2, ImgDevider } from '../assets'
import { Photo } from '../components'

export default function Gallery({ venue }) {
    const photos = {
        denpasar: [
            'https://astikadharmabali.com/assets/groom_venue/1.png',
            'https://astikadharmabali.com/assets/groom_venue/2.png',
            'https://astikadharmabali.com/assets/groom_venue/3.png',
            'https://astikadharmabali.com/assets/groom_venue/4.png',
            'https://astikadharmabali.com/assets/groom_venue/5.png',
            'https://astikadharmabali.com/assets/groom_venue/6.png',
            'https://astikadharmabali.com/assets/groom_venue/7.png',
            'https://astikadharmabali.com/assets/groom_venue/8.png',
            'https://astikadharmabali.com/assets/groom_venue/9.png',
            'https://astikadharmabali.com/assets/groom_venue/10.png',
            'https://astikadharmabali.com/assets/groom_venue/11.png',
            'https://astikadharmabali.com/assets/groom_venue/12.png',
        ],
        apuan: [
            'https://astikadharmabali.com/assets/bride_venue/1.png',
            'https://astikadharmabali.com/assets/bride_venue/2.png',
            'https://astikadharmabali.com/assets/bride_venue/3.png',
            'https://astikadharmabali.com/assets/bride_venue/4.png',
            'https://astikadharmabali.com/assets/bride_venue/5.png',
            'https://astikadharmabali.com/assets/bride_venue/6.png',
            'https://astikadharmabali.com/assets/bride_venue/7.png',
            'https://astikadharmabali.com/assets/bride_venue/8.png',
            'https://astikadharmabali.com/assets/bride_venue/9.png',
            'https://astikadharmabali.com/assets/bride_venue/10.png',
            'https://astikadharmabali.com/assets/bride_venue/11.png',
            'https://astikadharmabali.com/assets/bride_venue/12.png',
            'https://astikadharmabali.com/assets/bride_venue/13.png',
            'https://astikadharmabali.com/assets/bride_venue/14.png',
            'https://astikadharmabali.com/assets/bride_venue/15.png',
            'https://astikadharmabali.com/assets/bride_venue/16.png',
            'https://astikadharmabali.com/assets/bride_venue/17.png',
            'https://astikadharmabali.com/assets/bride_venue/18.png',
            'https://astikadharmabali.com/assets/bride_venue/19.png',
            'https://astikadharmabali.com/assets/bride_venue/20.png',
        ],
    }
    return (
        <div className='h-fit bg-secondary bg-[url("/src/assets/images/NW4.png")] bg-no-repeat bg-contain bg-bottom p-10 font-primary'>
            <div className='flex justify-center'>
                <img alt='' src={ImgDevider} className='w-1/2 md:w-1/6 h-auto' />
            </div>
            <h1 className='font-third text-third my-3 md:my-7 text-center text-3xl md:text-6xl'>Gallery Photo</h1>
            <div className='flex justify-center'>
                <img alt='' src={ImgBorder2} className='w-1/2 md:w-1/6 h-auto' />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 md:mx-32'>
                {photos[venue].map((item, index) => <Photo key={index} img={item} duration={500} translateVisible={`translate-y-0`} translateInvisible={`translate-y-20`} />)}
            </div>
        </div>
    )
}
