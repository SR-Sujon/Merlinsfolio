import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/srs-ai-filter-1.jpg'
import { MotionValue, motionValue, useMotionValue, useSpring, useInView } from 'framer-motion'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, MotionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (

        <>
            <Head>
                <title>About | SRS portfolio</title>
                <meta name="description" content='any description'></meta>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose" className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/70'>Biography</h2>

                            <p className='my-4 font-medium'>
                                Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients' visions to life.
                            </p>
                            <p className='my-4 font-medium'>
                                I believe that design is about more than just making things look pretty – it's about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className='font-medium'>
                                Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-3xl'>
                            <div className='absolute top-0 -z-10 w-[90%] h-[105%] rounded-[2.5rem] bg-dark my-2' />
                            <Image src={profilePic} alt='Saidur' className='w-[75%] h-auto rounded-2xl' />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-evenly'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={3} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={12} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>months of experience</h2>
                            </div>
                        </div>
                    </div>
                </Layout>

            </main>

        </>
    )
}

export default about