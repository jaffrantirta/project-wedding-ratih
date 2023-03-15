import React from 'react'
import { ImgCorner1, ImgDevider, ImgOswastyastu, ImgSwirlLeftGold } from '../assets'

export default function GroomBride() {
    return (
        <div className='bg-[url("/src/assets/images/NW5.png")] bg-primary bg-no-repeat bg-cover h-fit font-primary p-10 px-24 flex items-center justify-center'>
            <div className='bg-white bg-opacity-90 rounded-3xl'>
                <div className={`text-center p-10`}>
                    <img alt='' src={ImgDevider} className={`w-1/4 mx-auto`} />
                    <img alt='' src={ImgOswastyastu} className={`w-1/6 mx-auto`} />
                    <p className={`px-10`}>Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara Manusa Yadnya Pawiwahan (Pernikahan) dan Mepandes (Potong Gigi) </p>
                    <div className='grid grid-cols-2'>
                        <img alt='' src={ImgSwirlLeftGold} className={`object-cover w-full h-full`} />
                        <div>
                            <h1 className='text-5xl font-third'>I Gede Ananda Eka Diana</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
