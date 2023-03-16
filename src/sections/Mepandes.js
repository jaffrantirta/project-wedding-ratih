import React, { useEffect, useRef, useState } from 'react'
import { ImgOrnamentWhite1 } from '../assets'

export default function Mepandes() {
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
        <div ref={sectionRef} className='h-fit bg-accentColor font-primary p-10'>
            <div className='flex justify-center'>
                <img alt='' src={ImgOrnamentWhite1} className={`md:w-1/4 w-1/2 h-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
            </div>
            <h1 className={`text-5xl text-white font-third text-center mt-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Mepandes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 p-10 mt-10 rounded-3xl bg-white bg-opacity-90 gap-10'>
                <div className='mx-auto'>
                    <div className='flex justify-center'>
                        <img alt='meta-images'
                            src={`https://astikadharmabali.com/assets/photos/meta.png`}
                            className={`w-56 h-auto mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                    </div>
                    <h1 className={`text-2xl text-center font-third text-primary transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Luh Ade Metha Dian Rahayu</h1>
                </div>
                <div className='mx-auto'>
                    <div className='flex justify-center'>
                        <img alt='ocha-images'
                            src={`https://astikadharmabali.com/assets/photos/ocha.png`}
                            className={`w-56 h-auto mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                    </div>
                    <h1 className={`text-2xl text-center font-third text-primary transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Luh Komang Ocha Dian Rahayu</h1>
                </div>
            </div>
        </div>
    )
}
