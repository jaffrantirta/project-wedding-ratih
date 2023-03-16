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
                            src={`https://ratihphotos.s3.us-east-1.amazonaws.com/photos/groom.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAIiqavA%2Ba3OUrKBMN6EzA9CAcQQD5ZxCJMpiOS9xfB3hAiEAoXvAapIHqZYFAJ1r25sCbx1Rh%2F4QjD7UXVYJE%2BS3iEUq7QII7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw3MzU4OTY0NjkxMzUiDOl2XoVm31uVXtUplyrBAsh3tmij%2BehjwP77fYbY60tXxqIhqGZc9YE%2BIj0nZ5LATy%2FP8ylCoHUSnk5tt%2FIav2TPlDkTSuKNJGVj5TJuubW2dpJ97ot0HOxodXPI4zRpBdb%2FGCZU%2F%2Bnm7dvpdoH9beWY9AHqOOSCPCf2Ub7s4ZtCWl%2BabM1mbTqoGU5sAYRuueAB8u4Vwvqwfy1CPusASaCRd567S7o1XnY0Q1G2hLAMkRu0WvU%2BbUh01A01jU%2BttxKChX7yrI3wn8qRGEH9GJo1fJMghGZJr8GP2jxgA0mvZdtIltmfqKL8x8ebtfO2QRLlgixN4RHDo%2FB0JLE6Jyie9azTv2h8kcfyE1Yeh%2BHNF1FiDUKByakz%2Fqd9w0hj4Pa4OEMju0cG5YyYalKVDMhxQrRQ7K5dFvEkwR%2B5m6wyXwYo5yD5ukEF0KLc0F%2F%2BsjC3vMagBjqyApD%2BxGO4xviTvqUzjdjfQOJZx9UXIpemfw%2BABug72NngVwTxUoBm6Z%2FLx6Dj1ayQ1%2BX37hNC5oZ%2BTInrECCYqGvuEUE0pyuHbqgO9jC1FSXV0v8Y%2Bhes1ci0ZH7uh2bJKyRMTZJ7%2FaGOSyda8rXHV8YGJ4gi4QvQqpTtyfs54f7fk2OTgugT6SwglZHBEN3P78xUiNS%2BE8JLG0vbPBIg8z61KKl0fcqtm0w4GmUTd0O3mBzjigAloCMFpYitgZc0WBSgDWUvYIlhsMWZs6LzNe%2F64ONqx0Msjnnz9A%2FOMh9XW98VVEm5jQAaU9RpfZMZuG%2Bp8fCnm1aLgxZYwDvCD0szguD58FwzNNeEMInhLBRgmEEqW963K7EFAt%2FTSfBa2K6dURbhGIOLdX2V%2BRV%2B30UX%2Bg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230315T114055Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2WVWY72HUV3345IZ%2F20230315%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a6b849d5f9f53600bed655f9a5e910c73375f32dc45917c37839a565646a6865`}
                            className={`w-56 h-auto mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                    </div>
                    <h1 className={`text-2xl text-center font-third text-primary transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Luh Ade Metha Dian Rahayu</h1>
                </div>
                <div className='mx-auto'>
                    <div className='flex justify-center'>
                        <img alt='ocha-images'
                            src={`https://ratihphotos.s3.us-east-1.amazonaws.com/photos/groom.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAIiqavA%2Ba3OUrKBMN6EzA9CAcQQD5ZxCJMpiOS9xfB3hAiEAoXvAapIHqZYFAJ1r25sCbx1Rh%2F4QjD7UXVYJE%2BS3iEUq7QII7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw3MzU4OTY0NjkxMzUiDOl2XoVm31uVXtUplyrBAsh3tmij%2BehjwP77fYbY60tXxqIhqGZc9YE%2BIj0nZ5LATy%2FP8ylCoHUSnk5tt%2FIav2TPlDkTSuKNJGVj5TJuubW2dpJ97ot0HOxodXPI4zRpBdb%2FGCZU%2F%2Bnm7dvpdoH9beWY9AHqOOSCPCf2Ub7s4ZtCWl%2BabM1mbTqoGU5sAYRuueAB8u4Vwvqwfy1CPusASaCRd567S7o1XnY0Q1G2hLAMkRu0WvU%2BbUh01A01jU%2BttxKChX7yrI3wn8qRGEH9GJo1fJMghGZJr8GP2jxgA0mvZdtIltmfqKL8x8ebtfO2QRLlgixN4RHDo%2FB0JLE6Jyie9azTv2h8kcfyE1Yeh%2BHNF1FiDUKByakz%2Fqd9w0hj4Pa4OEMju0cG5YyYalKVDMhxQrRQ7K5dFvEkwR%2B5m6wyXwYo5yD5ukEF0KLc0F%2F%2BsjC3vMagBjqyApD%2BxGO4xviTvqUzjdjfQOJZx9UXIpemfw%2BABug72NngVwTxUoBm6Z%2FLx6Dj1ayQ1%2BX37hNC5oZ%2BTInrECCYqGvuEUE0pyuHbqgO9jC1FSXV0v8Y%2Bhes1ci0ZH7uh2bJKyRMTZJ7%2FaGOSyda8rXHV8YGJ4gi4QvQqpTtyfs54f7fk2OTgugT6SwglZHBEN3P78xUiNS%2BE8JLG0vbPBIg8z61KKl0fcqtm0w4GmUTd0O3mBzjigAloCMFpYitgZc0WBSgDWUvYIlhsMWZs6LzNe%2F64ONqx0Msjnnz9A%2FOMh9XW98VVEm5jQAaU9RpfZMZuG%2Bp8fCnm1aLgxZYwDvCD0szguD58FwzNNeEMInhLBRgmEEqW963K7EFAt%2FTSfBa2K6dURbhGIOLdX2V%2BRV%2B30UX%2Bg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230315T114055Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2WVWY72HUV3345IZ%2F20230315%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a6b849d5f9f53600bed655f9a5e910c73375f32dc45917c37839a565646a6865`}
                            className={`w-56 h-auto mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`} />
                    </div>
                    <h1 className={`text-2xl text-center font-third text-primary transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}`}>Luh Komang Ocha Dian Rahayu</h1>
                </div>
            </div>
        </div>
    )
}
