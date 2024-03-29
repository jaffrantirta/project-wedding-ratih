import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Music } from '../assets';
import { Carousel } from '../components';

export default function Greeting() {
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search);
    const navigate = useNavigate()
    const [isPlaying, setIsPlaying] = useState(false)
    const audio = new Audio(Music)

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause()
        } else {
            audio.play()
        }
        setIsPlaying(!isPlaying)
    }
    const images = [
        {
            url: 'https://astikadharmabali.com/assets/bride_venue/3.png'
        },
    ]
    useEffect(() => {
        document.title = `Ananda Coel & Ratih D.R's Wedding`;
    }, [])
    const handleButtonClick = () => {
        togglePlay()
        let data = { state: { venue: queryParams.has('venue') ? queryParams.get('venue') : 'denpasar' } }
        navigate(`/invitation`, data)
    }

    return (
        <div className='h-screen'>
            <Carousel
                // is={true}
                onClickButton={() => handleButtonClick()}
                infoText={`*Mohon maaf apabila ada kesalahan penulisan nama/gelar`}
                withButton={true}
                buttonText={`Buka Undangan`}
                botBoldTextStyle={`my-10 text-5xl`}
                botBoldText={queryParams.get('name')}
                images={images}
                text={`Ananda Coel & Ratih D.R`}
                botText={queryParams.has('name') ? `Kepada Bapak/Ibu/Saudara/i` : ``}
            />
        </div>
    )
}
