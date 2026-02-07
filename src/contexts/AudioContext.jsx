import React, { createContext, useContext } from 'react';

const AudioContext = createContext(null);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within AudioProvider');
    }
    return context;
};

export const AudioProvider = ({ children, audioRef }) => {
    const pauseMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current
                .play()
                .catch((e) => console.log('Audio play failed:', e));
        }
    };

    return (
        <AudioContext.Provider value={{ pauseMusic, playMusic }}>
            {children}
        </AudioContext.Provider>
    );
};
