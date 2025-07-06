import React, { createContext, useState, useContext, useRef } from "react";
import { songsData } from "../assets/assets";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(songsData[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    const playNext = () => {
        const currentIndex = songsData.findIndex(song => song.id === currentSong.id);
        const nextIndex = (currentIndex + 1) % songsData.length;
        setCurrentSong(songsData[nextIndex]);
        setIsPlaying(true);
    };

    const playPrevious = () => {
        const currentIndex = songsData.findIndex(song => song.id === currentSong.id);
        const prevIndex = (currentIndex - 1 + songsData.length) % songsData.length;
        setCurrentSong(songsData[prevIndex]);
        setIsPlaying(true);
    };

    return (
        <PlayerContext.Provider
            value={{
                currentSong,
                setCurrentSong,
                isPlaying,
                setIsPlaying,
                currentTime,
                setCurrentTime,
                duration,
                setDuration,
                audioRef,
                playNext,
                playPrevious,
                songsData
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => useContext(PlayerContext);
