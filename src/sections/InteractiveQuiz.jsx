import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Check, X } from 'lucide-react';

const questions = [
    {
        question: 'Where did we first meet?',
        options: ['Office', 'Library', 'Park', 'Party'],
        correct: 0, // Index of correct answer
    },
    {
        question: 'What is my favorite food?',
        options: ['Pizza', 'Biryani', 'Sushi', 'Pasta'],
        correct: 1,
    },
    {
        question: 'What was our first movie together?',
        options: [
            'Inception',
            'Titanic',
            'Yeh Jawaani Hai Deewani',
            'Avengers',
        ],
        correct: 2,
    },
];

const InteractiveQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswer = (index) => {
        setSelectedOption(index);
        if (index === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            setSelectedOption(null);
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    return (
        <section className='min-h-screen bg-white py-20 px-4 flex flex-col items-center justify-center'>
            <h2 className='text-4xl md:text-5xl font-dancing text-love-red mb-12'>
                How well do you know us?
            </h2>

            <div className='w-full max-w-2xl bg-soft-pink p-4 md:p-8 rounded-2xl shadow-xl'>
                {!showResult ? (
                    <div>
                        <div className='mb-8'>
                            <span className='text-sm font-bold text-gray-500 uppercase tracking-wide'>
                                Question {currentQuestion + 1}/
                                {questions.length}
                            </span>
                            <h3 className='text-2xl font-playfair text-deep-red mt-2'>
                                {questions[currentQuestion].question}
                            </h3>
                        </div>

                        <div className='space-y-4'>
                            {questions[currentQuestion].options.map(
                                (option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(index)}
                                        disabled={selectedOption !== null}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex items-center justify-between
                    ${
                        selectedOption === index
                            ? index === questions[currentQuestion].correct
                                ? 'bg-green-100 border-green-500 text-green-700'
                                : 'bg-red-100 border-red-500 text-red-700'
                            : 'border-white hover:border-love-red hover:bg-white/50'
                    }
                  `}
                                    >
                                        <span className='font-inter text-lg'>
                                            {option}
                                        </span>
                                        {selectedOption === index &&
                                            (index ===
                                            questions[currentQuestion]
                                                .correct ? (
                                                <Check className='text-green-500' />
                                            ) : (
                                                <X className='text-red-500' />
                                            ))}
                                    </button>
                                ),
                            )}
                        </div>
                    </div>
                ) : (
                    <div className='text-center'>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <Heart className='w-20 h-20 text-love-red mx-auto mb-6 fill-current' />
                        </motion.div>
                        <h3 className='text-3xl font-dancing text-deep-red mb-4'>
                            Quiz Complete!
                        </h3>
                        <p className='text-xl font-playfair mb-8'>
                            You scored {score} out of {questions.length}
                        </p>
                        {score === questions.length ? (
                            <p className='text-lg text-green-600 font-bold'>
                                Perfect! You know us so well! ❤️
                            </p>
                        ) : (
                            <p className='text-lg text-gray-600'>
                                Good effort! Love is about learning everyday! 😉
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default InteractiveQuiz;
