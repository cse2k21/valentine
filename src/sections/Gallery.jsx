import React from 'react';
import { motion } from 'framer-motion';

const photos = [
    {
        id: 1,
        src: './assets/first.jpeg',
        caption: 'Our First Date',
    },
    {
        id: 2,
        src: './assets/trip.jpeg',
        caption: 'That Amazing Trip',
    },
    {
        id: 3,
        src: './assets/fun.jpeg',
        caption: 'Silly Moments',
    },
    {
        id: 4,
        src: './assets/ustwo.jpeg',
        caption: 'Just Us',
    },
    // Add more photos here
];

const Gallery = () => {
    return (
        <section id='gallery' className='min-h-screen bg-white py-20 px-4'>
            <h2 className='text-4xl md:text-5xl font-dancing text-center text-deep-red mb-12'>
                Our Memories
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        className='relative overflow-hidden rounded-lg shadow-lg aspect-[3/4] group cursor-pointer'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption}
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                            <p className='text-white font-playfair text-lg text-center'>
                                {photo.caption}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
