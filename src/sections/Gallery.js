import React from 'react'
import { ImgBorder2, ImgDevider } from '../assets'
import { Photo } from '../components'

export default function Gallery() {
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

                <Photo img={`https://www.jeffrin-novania.my.id/static/media/ps3P.bf28d7912c5c8aec0e13.png`} duration={500} translateVisible={`translate-y-0`} translateInvisible={`translate-y-20`} />
                <Photo img={`https://www.jeffrin-novania.my.id/static/media/ps3P.bf28d7912c5c8aec0e13.png`} duration={500} translateVisible={`translate-y-0`} translateInvisible={`translate-y-20`} />
                <Photo img={`https://www.jeffrin-novania.my.id/static/media/ps3P.bf28d7912c5c8aec0e13.png`} duration={500} translateVisible={`translate-y-0`} translateInvisible={`translate-y-20`} />
                <Photo img={`https://www.jeffrin-novania.my.id/static/media/ps3P.bf28d7912c5c8aec0e13.png`} duration={500} translateVisible={`translate-y-0`} translateInvisible={`translate-y-20`} />
                <Photo img={`https://www.jeffrin-novania.my.id/static/media/ps3P.bf28d7912c5c8aec0e13.png`} duration={500} translateVisible={`translate-y-0`} translateInvisible={`translate-y-20`} />
                <Photo img={`https://www.jeffrin-novania.my.id/static/media/ps3P.bf28d7912c5c8aec0e13.png`} duration={500} translateVisible={`translate-y-0`} translateInvisible={`translate-y-20`} />
                <Photo img={`https://www.jeffrin-novania.my.id/static/media/ps3P.bf28d7912c5c8aec0e13.png`} duration={500} translateVisible={`translate-y-0`} translateInvisible={`translate-y-20`} />


            </div>
        </div>
    )
}
