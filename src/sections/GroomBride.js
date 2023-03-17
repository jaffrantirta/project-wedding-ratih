import React, { useEffect, useRef, useState } from 'react'
import { ImgBorder3, ImgDevider, ImgOswastyastu } from '../assets'

export default function GroomBride({ venue }) {
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
        <div ref={sectionRef} className='bg-[url("/src/assets/images/NW5.png")] bg-accentColor bg-no-repeat bg-contain h-fit font-primary p-10 md:px-24 flex items-center justify-center'>
            <div className='bg-white bg-opacity-90 rounded-3xl'>
                <div className={`text-center p-10`}>
                    <img alt='' src={ImgDevider} className={`w-1/2 md:w-1/4 mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                    <img alt='' src={ImgOswastyastu} className={`w-1/2 md:w-1/6 mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                    <p className={`md:px-10 my-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara Manusa Yadnya Pawiwahan (Pernikahan) {venue === 'denpasar' ? '' : 'dan Mepandes (Potong Gigi)'} </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-14'>
                        <div className={`flex justify-center`}>
                            <img
                                alt='groom'
                                src={`https://astikadharmabali.com/assets/photos/groom.png`}
                                className={`w-full md:w-1/2 h-auto transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                        </div>
                        <div className={`transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
                            <h1 className='text-2xl md:text-5xl font-third mb-10 text-orange-500'>I Gede Ananda Eka Diana</h1>
                            <h1 className='text-xl mt-8'>Putra pertama dari empat bersaudara pasangan</h1>
                            <h1 className='text-md'>I Nyoman Kusuma Yudiana</h1>
                            <h1 className='text-md'>&</h1>
                            <h1 className='text-md'>Ni Putu Eka Citra Susiantini</h1>
                            <h1 className='text-md'>Banjar Dinas Padangan Kawan, Desa Padangan, Kecamatan Pupuan, Kabupaten Tabanan</h1>
                        </div>
                    </div>
                    <div className={`mt-10 flex justify-center`}>
                        <img alt='' src={ImgBorder3} className={`transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-14'>
                        <div className={`justify-center md:hidden flex`}>
                            <img
                                alt='bride'
                                src={`https://astikadharmabali.com/assets/photos/bride.png`}
                                className={`w-full md:w-1/2 h-auto transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                        </div>
                        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>
                            <h1 className='text-2xl md:text-5xl font-third mb-10 text-orange-500'>Luh Gede Ratih Dian Rahayu</h1>
                            <h1 className='text-xl mt-8'>Putri pertama dari tiga bersaudara pasangan</h1>
                            <h1 className='text-md'>I Made Sunantra Yasa</h1>
                            <h1 className='text-md'>&</h1>
                            <h1 className='text-md'>Ni Wayan Erni Kartika Wati</h1>
                            <h1 className='text-md'>Banjar Apuan, Desa Apuan, Kecamatan Baturiti, Kabupaten Tabanan</h1>
                        </div>
                        <div className={`justify-center md:flex hidden`}>
                            <img
                                alt='bride'
                                src={`https://astikadharmabali.com/assets/photos/bride.png`}
                                className={`object-cover w-1/2 h-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
