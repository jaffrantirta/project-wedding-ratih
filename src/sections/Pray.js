import React from 'react'
import { Flower } from '../components'

export default function Pray() {
    return (
        <div className='relative h-fit md:h-screen bg-primary grid grid-cols-1 md:grid-cols-2 font-primary'>
            <Flower top={0} duration={8} />
            <div className='p-10'>
                <div className='border-white border-4 w-full h-full p-1'>
                    <div className='border-white border-4 bg-contain bg-no-repeat bg-accentColor bg-[url("/src/assets/images/corner-1.png")] text-center p-10 w-full h-full flex justify-center flex-col'>
                        <p className='text-xl font-bold'>Om Ihaiva stam ma vi yustham, Visvam ayur vyasnutam, krisdantau putrair naptrbhih, Modamanam sve grhe</p>
                        <p className='my-10'>Ya Tuhanku yang Maha Pengasih, anugerahkanlah kepada Pasangan ini , senantiasa Berbahagia keduanya tidak terpisahkan, panjang umur, semoga pengantin ini dianugerahkan putra – putri dan cucu yang memberikan penghiburan, tinggal dirumah yang penuh kebahagiaan </p>
                        <p className='font-bold'>(Reg Weda X.85.42)</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
