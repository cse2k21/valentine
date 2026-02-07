import React, { useEffect, useRef } from 'react';
import Hero from './sections/Hero';
import Gallery from './sections/Gallery';
import LoveLetter from './sections/LoveLetter';
import ProposalVideo from './sections/ProposalVideo';
import InteractiveQuiz from './sections/InteractiveQuiz';
import TheBigQuestion from './sections/TheBigQuestion';
import { AudioProvider } from './contexts/AudioContext';

function App() {
    const audioRef = useRef(null);

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current
                .play()
                .catch((e) =>
                    console.log(
                        'Audio play failed usually due to browser policy:',
                        e,
                    ),
                );
        }
    };

    useEffect(() => {
        playMusic();
    }, []);

    return (
        <AudioProvider audioRef={audioRef}>
            <div className='min-h-screen bg-soft-pink' onClick={playMusic}>
                <audio ref={audioRef} loop src='./assets/song.mp3' />

                <Hero />
                <div id='memory-lane'>
                    <Gallery />
                </div>
                <LoveLetter />
                <InteractiveQuiz />
                <ProposalVideo />
                <TheBigQuestion />

                <footer className='bg-love-red text-white py-4 text-center font-playfair'>
                    <p>Made with ❤️ just for you</p>
                </footer>
            </div>
        </AudioProvider>
    );
}

export default App;
