import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ImgBorder3 } from '../assets'
import { Button, ProfilePicture, InputField } from '../components'
import comments from '../Comments';
import { createClient } from '@supabase/supabase-js'
import moment from 'moment';
import 'moment/locale/id';

moment.locale('id');

export default function WishingAndGreeting() {
    const [commentList, setCommentList] = useState(comments);
    const [isLoading, setIsLoading] = useState(false)
    const [commentsToShow, setCommentsToShow] = useState(5)
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [attend, setAttend] = useState(true)
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [lastFetchTime, setLastFetchTime] = useState(null)
    const CACHE_EXPIRATION_TIME = 60000

    const supabaseUrl = 'https://bnfnwkhrhoyfrvgckanv.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuZm53a2hyaG95ZnJ2Z2NrYW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwMjE0MjEsImV4cCI6MTk5NDU5NzQyMX0.Kw62XmNMGdAWydnI8j9uo5a8UwacdVweVNkRWp-k9xo'

    const supabase = createClient(supabaseUrl, supabaseKey)


    const addComment = async () => {
        setIsLoading(true)
        const newComment = { name, comment, attend };
        const { error } = await supabase.from('comments').insert(newComment)
        setIsLoading(false)
        if (error) {
            console.error(error)
        } else {
            getComments()
        }
    }
    const getComments = useCallback(async () => {
        if (commentList.length > 0 && lastFetchTime && (Date.now() - lastFetchTime) < CACHE_EXPIRATION_TIME) {
            return
        }
        const { data, error } = await supabase.from('comments').select('*')
        if (error) {
            console.error(error)
        } else {
            setCommentList(data)
            setLastFetchTime(Date.now())
        }
    }, [supabase, commentList, lastFetchTime])
    useEffect(() => {
        getComments()
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
    }, [sectionRef, getComments])

    const handleLoadMore = () => {
        setCommentsToShow(commentsToShow + 5)
    }

    const getInitials = (name) => {
        const nameArray = name.split(" ");
        let initials = "";
        for (let i = 0; i < nameArray.length && initials.length < 2; i++) {
            initials += nameArray[i].charAt(0).toUpperCase()
        }
        return initials
    }

    const buttonMore = () => {
        return <Button text={`Load more...`} customStyle={`bg-slate-200 text-slate-900 mx-10 md:mx-96 my-5`} onClick={() => handleLoadMore()} />
    }


    return (
        <section ref={sectionRef} className='h-fit px-5 pt-5 md:px-52 font-primary text-primary bg-slate-700 py-20'>
            <div className='flex justify-center'>
                <img alt='' src={ImgBorder3} className={`w-1/2 md:w-1/4 h-auto`} />
            </div>
            <h1 className={`font-third text-3xl text-center mt-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Kirimkan Pesan</h1>
            <h1 className={`font-primary text-5xl text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>UNTUK KAMI BERDUA</h1>
            <div className={`rounded-3xl border-2 border-primary p-10 flex flex-col justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
                <p className={`text-center text-lg font-bold mb-7 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>{commentList.length} Comments</p>
                <hr className='mb-7'></hr>
                <InputField placeholder={`Nama*`} value={name} onChange={e => setName(e.target.value)} customStyle={`md:mx-10 mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
                <InputField isTextArea={true} placeholder={`Ucapan*`} value={comment} onChange={e => setComment(e.target.value)} customStyle={`md:mx-10 mb-5 rounded-3xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
                <select onChange={e => setAttend(e.target.value)} className={`rounded-full border-2 border-primary px-5 py-2 md:mx-10 mb-5 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
                    <option value={true}>Hadir</option>
                    <option value={false}>Tidak Hadir</option>
                </select>
                <Button disabled={isLoading} text={`${isLoading ? "Mengirim..." : "Kirim"}`} onClick={() => addComment()} customStyle={`md:mx-10 md:mx-96 mb-5 ${isLoading ? "bg-gray-400 cursor-not-allowed" : ""} transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
                <div>
                    {commentList.map((item, index) => {
                        if (index < commentsToShow) {
                            let date = moment(item.created_at);
                            let formattedDate = date.fromNow();
                            return (
                                <div key={index} className='flex w-full border-b-2 p-2'>
                                    <ProfilePicture initials={getInitials(item.name)} size="medium" />
                                    <div className='ml-2'>
                                        <p className='font-bold mb-3'>{item.name}</p>
                                        <p className='text-sm text-slate-500'>{formattedDate}</p>
                                        <p className='text-md text-slate-300'>{item.comment}</p>
                                        <p className='text-sm text-slate-400'>~ {item.attend === true ? 'Hadir' : 'Tidak Hadir'}</p>
                                    </div>
                                </div>
                            )
                        }
                        return null
                    })}
                </div>
                {commentList.length > commentsToShow ? buttonMore() : <></>}
            </div>
        </section >
    )
}
