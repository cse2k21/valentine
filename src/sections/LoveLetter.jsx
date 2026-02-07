import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoveLetter = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='min-h-screen flex items-center justify-center bg-soft-pink py-20'>
            <div className='relative w-full flex items-center justify-center'>
                {!isOpen ? (
                    <motion.div
                        className='bg-love-red w-[70dvw] h-[70dvh] relative cursor-pointer shadow-xl flex items-center justify-center rounded-lg'
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setIsOpen(true)}
                    >
                        <div className='absolute inset-0 border-4 border-dashed border-white/30 rounded-lg' />
                        <p className='text-white font-dancing text-2xl font-bold'>
                            Open Me
                        </p>
                        <div className='absolute top-0 left-0 w-full h-full bg-deep-red origin-top transform rotate-x-180 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className='bg-white p-6 md:p-8 rounded-lg shadow-2xl w-[70dvw] h-[70dvh] min-h-fit mx-auto flex flex-col justify-between '
                    >
                        <h2 className='font-dancing text-3xl text-deep-red mb-6'>
                            My Dearest Rasmalai,
                        </h2>
                        <p className='font-quintessential text-lg text-gray-700 leading-relaxed mb-4'>
                            From the moment I met you, my life has been a
                            beautiful adventure...
                        </p>
                        <p className='font-quintessential text-lg text-gray-700 leading-relaxed mb-6'>
                            You make my world softer and brighter just by being
                            in it. The way you laugh, the way you care, the way
                            you understand me even when I don’t say much—it all
                            means more to me than I can explain. You’re my safe
                            place, my excitement, my calm, and my favorite
                            person all at once.
                        </p>
                        <p className='font-quintessential text-lg text-gray-700 leading-relaxed mb-6'>
                            Being with you has taught me what love is supposed
                            to feel like: warm, steady, exciting, and real. You
                            make ordinary moments special and hard days easier
                            just by holding my hand or being yourself. I’m so
                            grateful for every memory we’ve made and even more
                            excited for all the ones still waiting for us.
                        </p>
                        <p className='font-quintessential text-lg text-gray-700 leading-relaxed mb-6'>
                            I crave you—not just your body, but your mind, your
                            laugh, your voice when you say my name. I want every
                            version of you, every mood, every moment. Loving you
                            feels intense, addictive, and impossibly right.
                        </p>
                        <p className='font-quintessential text-lg text-gray-700 leading-relaxed mb-6'>
                            Thank you for loving me the way you do. Thank you
                            for choosing me. I promise to keep choosing you,
                            today and every day after. I love you more than I
                            ever thought possible. Happy Valentine’s Day,
                            beautiful.
                        </p>
                        <p className='font-dancing text-2xl text-deep-red text-right'>
                            Forever Yours,
                            <br />
                            Pumpkin🎃
                        </p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className='mt-6 text-sm text-start text-gray-400 hover:text-gray-600 underline'
                        >
                            Close Letter
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default LoveLetter;
