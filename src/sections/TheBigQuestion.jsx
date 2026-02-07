import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const TheBigQuestion = () => {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [yesPressed, setYesPressed] = useState(false);
    const containerRef = useRef(null);

    const handleNoHover = () => {
        const container = containerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const buttonWidth = 100; // Approximate button width
        const buttonHeight = 50; // Approximate button height

        const newX =
            Math.random() * (containerRect.width - buttonWidth) -
            containerRect.width / 2 +
            50;
        const newY =
            Math.random() * (containerRect.height - buttonHeight) -
            containerRect.height / 2 +
            50;

        setNoButtonPosition({ x: newX, y: newY });
    };

    const handleYesClick = () => {
        setYesPressed(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ffe5ec', '#c9184a'],
        });

        // Fire more confetti
        const duration = 5 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ffe5ec', '#c9184a'],
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ffe5ec', '#c9184a'],
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    };

    return (
        <section
            ref={containerRef}
            className='min-h-screen bg-gradient-to-t from-love-red to-soft-pink flex flex-col items-center justify-center relative overflow-hidden'
        >
            {!yesPressed ? (
                <div className='text-center z-10  md:p-16 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl mx-4 p-4' >
                    <h2 className='text-4xl md:text-7xl font-dancing text-deep-red mb-8'>
                        Will you be my Valentine?
                    </h2>
                    <div className='flex gap-4 md:gap-8 justify-center items-center relative h-32'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleYesClick}
                            className='bg-green-500 text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg hover:bg-green-600 transition-colors'
                        >
                            YES!
                        </motion.button>
                        <motion.button
                            animate={noButtonPosition}
                            onMouseEnter={handleNoHover}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                            className='bg-gray-400 text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg hover:bg-gray-500 absolute'
                            style={{ position: 'relative' }} // Use relative to allow initial layout, but animate transform/position via framer-motion if needed. Wait, animate prop handles transform.
                            // Better to use absolute positioning logic or transform based on state.
                            // Framer motion 'animate' with x/y works on transform.
                        >
                            No
                        </motion.button>
                    </div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='text-center z-10 '
                >
                    <h1 className='text-6xl md:text-8xl font-dancing text-white mb-4 drop-shadow-md'>
                        YAY! ❤️
                    </h1>
                    <p className='text-2xl font-playfair text-white text-shadow mt-14'>
                        I promise to make you the happiest person alive!
                    </p>
                    <motion.div
                        className='mt-8 text-8xl'
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                     💖
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default TheBigQuestion;
