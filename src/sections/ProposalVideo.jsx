import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../contexts/AudioContext';

const ProposalVideo = () => {
    const videoRef = useRef(null);
    const { pauseMusic, playMusic } = useAudio();
    const videoSrc = new URL('/assets/vid.mp4', import.meta.url).href;
    console.log('videoSrc', videoSrc);

    const handlePlay = () => {
        pauseMusic();
    };

    const handlePause = () => {
        playMusic();
    };

    return (
        <section className='min-h-screen bg-soft-pink py-20 px-4 flex flex-col items-center justify-center'>
            <motion.h2
                className='text-4xl md:text-5xl font-dancing text-love-red mb-12'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                My favorite video of us
            </motion.h2>

            <motion.div
                className='w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden'
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                onViewportEnter={() => {
                    if (videoRef.current) {
                        videoRef.current.play();
                    }
                }}
            >
                <video
                    ref={videoRef}
                    className='w-full h-full object-cover'
                    controls
                    loop
                    onPlay={handlePlay}
                    onPause={handlePause}
                >
                    <source src={videoSrc} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        </section>
    );
};

export default ProposalVideo;
