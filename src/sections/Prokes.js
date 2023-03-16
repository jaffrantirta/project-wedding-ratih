import React from 'react'
import { ImgBorder2, ImgOmShanti, ImgProkes } from '../assets'

export default function Prokes() {
    return (
        <div className='h-fit bg-accentColor font-primary'>
            <div className='p-10 md:p-32 w-full h-full'>
                <div className='bg-white p-10 text-center rounded-3xl'>
                    <h1 className='text-xl md:text-5xl font-third text-primary'>Protokol Kesehatan Covid-19</h1>
                    <p className='my-10'>Kami menghimbau kepada Bapak/Ibu/Saudara/i yang berkesempatan dan berkenan hadir pada upacara pernikahan Kami, agar senantiasa mengikuti arahan Pemerintah terkait protokol kesehatan di tengah Pandemi Covid-19 ini.</p>
                    <div className='flex justify-center '>
                        <img alt='' src={ImgProkes} className='w-full md:w-1/2 h-auto border-4 border-yellow-500 rounded-3xl' />
                    </div>
                    <p className='my-10'>Demi kesehatan bersama, Pastikan Bapak/Ibu/Saudara/i untuk menggunakan Masker, Mencuci Tangan di area cuci tangan yang telah kami sediakan, serta tetap menjaga jarak dari setiap orang yang hadir pada Upacara Pernikahan Kami.</p>
                    <p>Atas perhatian dan kesadaran Bapak/Ibu/Saudara/i, Kami ucapkan </p>
                    <p className='font-bold'>Terima Kasih.</p>
                    <div className='flex justify-center mt-10'>
                        <img alt='' src={ImgOmShanti} className='w-full md:w-1/3 h-auto' />
                    </div>
                    <div className='flex justify-center'>
                        <img alt='' src={ImgBorder2} className='w-full md:w-1/4 h-auto' />
                    </div>
                </div>
            </div>
            <h1 className='text-center mb-10 text-xl'>Supported by Jaffran</h1>
        </div>
    )
}
