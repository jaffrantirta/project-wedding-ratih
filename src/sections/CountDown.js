import React from 'react'
import { Countdown } from '../components'

export default function CountDown({ venue }) {
    return (
        <div className='font-primary mt-10'>
            <h1 className='font-third text-6xl text-primary text-center'>Countdown</h1>
            <h1 className='text-3xl text-center'>Menuju Acara</h1>
            <Countdown venue={venue} />
        </div>
    )
}
