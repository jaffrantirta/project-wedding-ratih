import React from 'react'
import { DetailEvents, Gallery, GroomBride, Hero, Mepandes } from '../sections'
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
        </div>
    )
}
