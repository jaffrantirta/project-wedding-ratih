import React, { useEffect, useRef, useState } from 'react'
import CardCountdown from './CardCoundown';

export default function Countdown({ venue }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    console.log(isVisible);
    const targetDate = {
        apuan: {
            date: '2023-03-23T00:00:00Z'
        },
        denpasar: {
            date: '2023-04-01T00:00:00Z'
        }
    }
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
    }, [sectionRef, venue]);
    return (
        <section className='h-fit font-primary text-center text-white' ref={sectionRef}>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:px-20 py-10'>
                <CardCountdown value={`days`} targetDate={targetDate[venue].date} text={`Hari`} />
                <CardCountdown value={`hours`} targetDate={targetDate[venue].date} text={`Jam`} />
                <CardCountdown value={`minutes`} targetDate={targetDate[venue].date} text={`Menit`} />
                <CardCountdown value={`seconds`} targetDate={targetDate[venue].date} text={`Detik`} />
            </div>
        </section>
    )
}
