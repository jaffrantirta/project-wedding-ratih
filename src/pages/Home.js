import React, { useEffect } from 'react'
import { GroomBride, Hero } from '../sections'
import AWS from 'aws-sdk'

export default function Home() {
    useEffect(() => {
        const s3 = new AWS.S3({
            accessKeyId: '<your-access-key-id>',
            secretAccessKey: '<your-secret-access-key>',
            region: '<your-region>'
        })
        const upload = () => {
            const file = '/src/assets/bride_venue/1.png'
            const params = {
                Bucket: 'ratihphotos',
                Key: '1.png',
                Body: file,
                ACL: 'public-read'
            };
            s3.upload(params, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Image uploaded successfully:', data.Location);
                }
            });

        }
    }, [])

    return (
        <div>
            <Hero />
            <GroomBride />
        </div>
    )
}
