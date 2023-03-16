import React from 'react'
import { ImgSwirlLeftGold, ImgSwirlRightGold } from '../assets'
import { Button } from '../components'
import CountDown from './CountDown'

export default function DetailEvents({ venue }) {
    return (
        <div className='bg-accentColor h-fit font-primary p-10'>
            <div className='bg-white bg-opacity-80 rounded-3xl p-10'>
                <div className='grid grid-cols-4 md:grid-cols-3 justify-center place-items-center'>
                    <img alt='' src={ImgSwirlLeftGold} className='w-1/2 md:w-1/4 h-auto' />
                    <h1 className='text-2xl md:text-6xl font-third text-center text-primary col-span-2 md:col-span-1 row-span-3 md:row-span-1'>Detail Acara</h1>
                    <img alt='' src={ImgSwirlRightGold} className='w-1/2 md:w-1/4 h-auto' />
                </div>


                <h1 className='text-center md:px-64 mt-10'>Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada :</h1>
                <h1 className='text-center text-3xl mt-5 text-primary'>{venue === 'denpasar' ? 'Sabtu' : 'Jumat'}</h1>
                <div className='grid grid-cols-3 gap-10 md:px-64 mt-10 text-primary'>
                    <h1 className='text-center text-xl py-5 border-y-2 border-dashed border-slate-600'>{venue === 'denpasar' ? 'April' : 'Maret'}</h1>
                    <h1 className='text-center text-6xl'>{venue === 'denpasar' ? '1' : '23'}</h1>
                    <h1 className='text-center text-xl py-5 border-y-2 border-dashed border-slate-600'>2023</h1>
                </div>

                <p className='text-center font-bold mt-10'>{venue === 'denpasar' ? '11.00 WITA - Selesai' : '15.00 WITA - Selesai'}</p>
                <p className='text-center mt-7'>{venue === 'denpasar' ? 'Jalan Surapati No 9 Denpasar' : 'Br. Apuan, Desa Apuan, Kecamatan Baturiti, Tabanan'}</p>
                <div className='flex justify-center mt-10'>
                    <Button onClick={() => venue === 'denpasar' ? window.location.href = 'https://maps.app.goo.gl/CX46N7prfja3kxPM7?g_st=iw' : window.location.href = 'https://maps.app.goo.gl/ZPLkXMRsqhHthpkB9?g_st=iw'} text={`Lihat Map`} />
                </div>
                <CountDown venue={venue} />
            </div>
        </div>
    )
}
