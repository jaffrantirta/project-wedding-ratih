import React, { useEffect, useRef, useState } from 'react'
import { ImgOrnamentWhite1, ImgOrnamentWhite2 } from '../assets'
import { Flower } from '../components'

export default function Hero({ venue }) {
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
        <div ref={sectionRef} className='h-screen relative bg-primary flex items-center justify-center font-primary'>
            <Flower />
            <div className='text-center'>
                <img alt='' src={ImgOrnamentWhite1} className={`w-1/2 mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                <div className='my-5 text-white'>
                    <h1 className={`text-3xl md:text-5xl font-third transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Ananda Coel & Ratih D.R</h1>
                    <h1 className={`text-xl md:text-2xl mt-5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>{venue === 'denpasar' ? `01.04.2023` : `23.03.2023`}</h1>
                </div>
                <img alt='' src={ImgOrnamentWhite2} className={`w-1/2 mx-auto transition-all duration-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
            </div>
        </div>

    )
}
