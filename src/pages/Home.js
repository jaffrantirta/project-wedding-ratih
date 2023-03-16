import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DetailEvents, Gallery, GroomBride, Hero, Mepandes, Prokes, WishingAndGreeting } from '../sections'
import Pray from '../sections/Pray'

export default function Home() {
    const { venue } = useLocation().state
    console.log(venue, 'home');
    useEffect(() => {
        document.title = 'Ananda Coel & Ratih D.R';
    }, [venue])
    return (
        <div>
            <Hero venue={venue} />
            <GroomBride />
            {venue === 'denpasar' ? <></> : <Mepandes />}
            <DetailEvents venue={venue} />
            <Pray />
            <Gallery venue={venue} />
            <WishingAndGreeting />
            <Prokes />
        </div>
    )
}
