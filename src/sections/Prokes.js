import React, { useEffect, useRef, useState } from 'react'
import { ImgBorder2, ImgOmShanti, ImgProkes } from '../assets'

export default function Prokes() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        let node = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
                node = null;
            }
        };
    }, [sectionRef]);
    return (
        <div ref={sectionRef} className='h-fit bg-accentColor font-primary'>
            <div className='p-10 md:p-32 w-full h-full'>
                <div className='bg-white p-10 text-center rounded-3xl'>
                    <h1 className={`text-xl md:text-5xl font-third text-primary transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Protokol Kesehatan Covid-19</h1>
                    <p className={`my-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Kami menghimbau kepada Bapak/Ibu/Saudara/i yang berkesempatan dan berkenan hadir pada upacara pernikahan Kami, agar senantiasa mengikuti arahan Pemerintah terkait protokol kesehatan di tengah Pandemi Covid-19 ini.</p>
                    <div className='flex justify-center '>
                        <img alt='' src={ImgProkes} className={`w-full md:w-1/2 h-auto border-4 border-yellow-500 rounded-3xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                    </div>
                    <p className={`my-10 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Demi kesehatan bersama, Pastikan Bapak/Ibu/Saudara/i untuk menggunakan Masker, Mencuci Tangan di area cuci tangan yang telah kami sediakan, serta tetap menjaga jarak dari setiap orang yang hadir pada Upacara Pernikahan Kami.</p>
                    <p className={`transition-all duration-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Atas perhatian dan kesadaran Bapak/Ibu/Saudara/i, Kami ucapkan </p>
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
