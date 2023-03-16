import React from 'react'
import { DetailEvents, Gallery, GroomBride, Hero, Mepandes, Prokes, WishingAndGreeting } from '../sections'
import Pray from '../sections/Pray'

export default function Home() {

    return (
        <div>
            <Hero />
            <GroomBride />
            <Mepandes />
            <DetailEvents />
            <Pray />
            <Gallery />
            <WishingAndGreeting />
            <Prokes />
        </div>
    )
}
