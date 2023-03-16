import React, { useEffect, useRef, useState } from 'react'
import { Flower } from '../components'

export default function Pray() {
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
        <div ref={sectionRef} className='relative h-fit md:h-screen bg-primary grid grid-cols-1 md:grid-cols-2 font-primary'>
            <Flower top={0} duration={8} />
            <div className='p-10'>
                <div className='border-white border-4 w-full h-full p-1'>
                    <div className='border-white border-4 bg-contain bg-no-repeat bg-accentColor bg-[url("/src/assets/images/corner-1.png")] text-center p-10 w-full h-full flex justify-center flex-col'>
                        <p className={`text-xl font-bold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Om Ihaiva stam ma vi yustham, Visvam ayur vyasnutam, krisdantau putrair naptrbhih, Modamanam sve grhe</p>
                        <p className={`my-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Ya Tuhanku yang Maha Pengasih, anugerahkanlah kepada Pasangan ini , senantiasa Berbahagia keduanya tidak terpisahkan, panjang umur, semoga pengantin ini dianugerahkan putra – putri dan cucu yang memberikan penghiburan, tinggal dirumah yang penuh kebahagiaan </p>
                        <p className={`font-bold transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>(Reg Weda X.85.42)</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
