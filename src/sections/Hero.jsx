import React from 'react';
import { motion } from 'framer-motion';
import Heart from '../components/Heart';

const Hero = () => {
    
    const hearts = React.useMemo(
        () =>
            [...Array(300)].map(() => ({
                id: Math.random(),
                initial: {
                    x:
                        Math.random() *
                        (typeof window !== 'undefined'
                            ? window.innerWidth
                            : 1000),
                    y:
                        Math.random() *
                        (typeof window !== 'undefined'
                            ? window.innerHeight
                            : 800),
                    scale: Math.random() * 0.5 + 0.5,
                },
                animate: {
                    y: -1000,
                    x: -1500,
                    opacity: [1, 1.2,1],
                },
                transition: {
                    duration: Math.random() * 20 + 15,
                    repeat: Infinity,
                    ease: 'linear',
                },
                size: Math.random() * 30 + 10,
            })),
        [],
    );

    return (
        <section className='h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-soft-pink to-white'>
            {/* Background Hearts */}
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className='absolute text-pink-300 opacity-50'
                    initial={heart.initial}
                    animate={heart.animate}
                    transition={heart.transition}
                >
                    <Heart size={heart.size} />
                </motion.div>
            ))}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='text-center z-10 px-4'
            >
                <motion.h1
                    className='font-playwrite text-5xl md:text-8xl text-deep-red mb-4 leading-tight'
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    For My Valentine
                </motion.h1>
                <p className='font-quintessential bg-white max-w-fit p-4 rounded-full mx-auto font-bold text-xl md:text-2xl text-love-red my-8 md:my-14 shadow-lg'>
                    A journey of our love...
                </p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='font-quintessential bg-love-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-deep-red transition-colors text-lg'
                    onClick={() =>
                        document
                            .getElementById('memory-lane')
                            .scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    Start Journey
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;
